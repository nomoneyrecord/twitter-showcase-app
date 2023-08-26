from flask import Flask, request, jsonify, send_from_directory
import requests
import os
from dotenv import load_dotenv

app = Flask(__name__, static_folder='../Client/dist')




load_dotenv()

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    dist_path = os.path.join(os.getcwd(), "Client", "dist")
    
  
    if not path:
        return send_from_directory(dist_path, 'index.html')


    abs_path = os.path.join(dist_path, path)

   
    if os.path.exists(abs_path):
        return send_from_directory(dist_path, path)


    return send_from_directory(dist_path, 'index.html')






@app.route("/api/tweets")
def get_tweets():
    username = request.args.get('username')
    if not username:
        return jsonify({"error": "Username is empty"}), 500

    try:
        bearer_token = os.environ.get("TWITTER_BEARER_TOKEN")

        user_lookup_url = f"https://api.twitter.com/2/users/by/username/{username}"
        headers = {
            'Authorization': f'Bearer {bearer_token}',
            'Content-Type': 'application/json'
        }

        user_lookup_response = requests.get(user_lookup_url, headers=headers)
        print(user_lookup_response)
        user_lookup_data = user_lookup_response.json()
        print(user_lookup_data)
        if 'data' in user_lookup_data:
            user_id = user_lookup_data['data']['id']

            tweet_url = f"https://api.twitter.com/2/users/{user_id}/tweets"
            tweet_params = {
                'tweet.fields': 'id,text,author_id,created_at,public_metrics,attachments',
                'expansions': 'author_id,attachments.media_keys',
                'media.fields': 'url',
                'user.fields': 'username,profile_image_url'
            }

            tweet_response = requests.get(tweet_url, headers=headers, params=tweet_params)
            tweet_data = tweet_response.json()

            if 'data' in tweet_data:
                result = []
                for tweet in tweet_data['data']:
                    author_id = tweet['author_id']

                    user_info = next((user for user in tweet_data.get('includes', {}).get('users', []) if user['id'] == author_id), None)

                    media_keys = tweet.get('attachments', {}).get('media_keys', [])
                    media_urls = [media['url'] for media in tweet_data.get('includes', {}).get('media', []) if 'url' in media and media['media_key'] in media_keys]

                    tweet_info = {
                        "id": tweet['id'],
                        "text": tweet['text'],
                        "username": user_info['username'] if user_info else None,
                        "like_count": tweet['public_metrics']['like_count'],
                        "retweet_count": tweet['public_metrics']['retweet_count'],
                        "profile_image_url": user_info['profile_image_url'] if user_info and 'profile_image_url' in user_info else None,
                        "media_urls": media_urls
                    }

                    result.append(tweet_info)

                return jsonify(result), 200

        return jsonify({"error": "Couldn't find user"}), 500

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run(debug=True)
