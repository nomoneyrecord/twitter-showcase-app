from flask import Flask, request, jsonify
import requests
import os
from dotenv import load_dotenv

app = Flask(__name__)
load_dotenv()


@app.route("/api/tweets")
def get_tweets():
    username = request.args.get('username')
    if not username:
        return jsonify([])

    try:
        bearer_token = os.environ.get("TWITTER_BEARER_TOKEN")

        user_lookup_url = f"https://api.twitter.com/2/users/by/username/{username}"
        headers = {
            'Authorization': f'Bearer {bearer_token}',
            'Content-Type': 'application/json'
        }

        user_lookup_response = requests.get(user_lookup_url, headers=headers)
        user_lookup_data = user_lookup_response.json()

        if 'data' in user_lookup_data:
            user_id = user_lookup_data['data']['id']

            tweet_url = f"https://api.twitter.com/2/users/{user_id}/tweets"
            tweet_params = {
                'tweet.fields': 'id,text,author_id,created_at,public_metrics',
                'expansions': 'author_id',
                'user.fields': 'username'
            }

            tweet_response = requests.get(
                tweet_url, headers=headers, params=tweet_params)
            tweet_data = tweet_response.json()

            if 'data' in tweet_data:
                result = []
                for tweet in tweet_data['data']:
                    author_id = tweet['author_id']

                    user_info = next((user for user in tweet_data.get('includes', {}).get(
                        'users', []) if user['id'] == author_id), None)

                    tweet_info = {
                        "id": tweet['id'],
                        "text": tweet['text'],
                        "username": user_info['username'] if user_info else None,
                        "like_count": tweet['public_metrics']['like_count'],
                        "retweet_count": tweet['public_metrics']['retweet_count'],
                        "profile_image_url_https": user_info['profile_image_url_https'] if user_info and 'profile_image_url_https' in user_info else None
                    }

                    result.append(tweet_info)

                return jsonify(result), 200

        return jsonify([]), 200

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run()
