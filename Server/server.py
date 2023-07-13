from flask import Flask, request, jsonify
import requests
import json

app = Flask(__name__)

@app.route("/api/tweets", methods=['GET', 'POST'])
def get_tweets():
    if request.method == 'GET':
        search_term = request.args.get('query')
        if not search_term:
            return jsonify([])

        try:
            bearer_token = 'AAAAAAAAAAAAAAAAAAAAAPly9QAAAAAAOgF9A%2Ff1SJN0O0utkX%2BNF%2B41TkM%3D5He51JIFSZ0dt3Do4oJM3dG7qu3XJ3Lqqych9p6olrbt016GTi'

            url = 'https://api.twitter.com/2/tweets/search/recent'

            headers = {
                'Authorization': f'Bearer {bearer_token}',
                'Content-Type': 'application/json'
            }

            payload = {
                'query': search_term,
                'tweet.fields': 'id,text,author_id',
                'max_results': 10
            }

            response = requests.post(url, headers=headers, json=payload)
            response_data = response.json()

            print("Response Data:", json.dumps(response_data, indent=2))

            if 'data' in response_data:
                result = []
                for tweet in response_data['data']:
                    tweet_info = {
                        "id": tweet['id'],
                        "text": tweet['text'],
                        "username": tweet['author_id']
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
    
    elif request.method == 'POST':
        try:
            # Process the POST request to create a new tweet
            tweet_data = request.get_json()

            # Extract the required fields from the tweet_data
            # Perform any additional validation or processing
            
            # Create the new tweet object
            new_tweet = {
                # Populate with the relevant tweet data
            }
            
            return jsonify({"message": "Tweet created successfully", "tweet": new_tweet}), 200
        
        except Exception as e:
            print(f"An error occurred: {str(e)}")
            import traceback
            traceback.print_exc()
            return jsonify({"error": str(e)}), 500

if __name__ == "__main__":
    app.run()
