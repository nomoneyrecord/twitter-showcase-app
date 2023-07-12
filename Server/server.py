from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route("/api/tweets")
def get_tweets():
    search_term = request.args.get('q')
    if not search_term:
        return jsonify([])

    try:
        # Set Twitter API bearer token here
        bearer_token = 'AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAOgF9A%2Ff1SJN0O0utkX%2BNF%2B41TkM%3D5He51JIFSZ0dt3Do4oJM3dG7qu3XJ3Lqqych9p6olrbt016GTi'

        # Set Twitter API endpoint URL here
        url = 'https://api.twitter.com/2/tweets/search/recent'

        # Construct the headers with the bearer token
        headers = {
            'Authorization': f'Bearer {bearer_token}',
            'Content-Type': 'application/json'
        }

        # Construct the JSON payload
        payload = {
            'query': search_term,
            'tweet.fields': 'id,text,author_id',
            'max_results': 10
        }

        # Send the POST request to the Twitter API
        response = requests.post(url, headers=headers, json=payload)
        response_data = response.json()

        # Extract relevant tweet information
        result = []
        for tweet in response_data['data']:
            tweet_info = {
                "id": tweet['id'],
                "text": tweet['text'],
                "username": tweet['author_id']
            }
            result.append(tweet_info)

        return jsonify(result), 200

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run()
