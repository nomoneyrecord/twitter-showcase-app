from flask import Flask, request, jsonify
import requests
import json
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)



@app.route("/api/tweets")
def get_tweets():
    search_term = request.args.get('query')
    if not search_term:
        return jsonify([])

    try:
        bearer_token = os.environ.get("TWITTER_BEARER_TOKEN")

        url = 'https://api.twitter.com/2/users/44196397/tweets'

        headers = {
            'Authorization': f'Bearer {bearer_token}',
            'Content-Type': 'application/json'
        }

        payload = {
            'query': f'from:{search_term}',
            'tweet.fields': 'id,text,author_id',
            'max_results': 10
        }

        response = requests.get(url, headers=headers, params=payload)
        response_data = response.json()

        print("Response Data:", json.dumps(response_data, indent=2))

        if 'data' in response_data:

            result = []
            for tweet in response_data['data']:
                tweet_info = {
                    "id": tweet['id'],
                    "text": tweet['text'],
                    "author_id": tweet['author_id']
                }
                result.append(tweet_info)

            return jsonify(result), 200
        else:
            return jsonify([]), 200

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        import traceback
        traceback.print_exc()
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run()
