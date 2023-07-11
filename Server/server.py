from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route("/api/tweets")
def get_tweets():
    search_term = request.args.get('q')
    if not search_term:
        return jsonify([])

    try:
        # Set the API token and secret
        api_token = 'hc0Byc4uGBD4cSjT0mlOquGzq'
        api_secret = 'HVb0i3HU4vJuggl6JKWCVgfrB7yl9ce01S0sxef8K3yOcNsDzZ'

        # Get the bearer token using the API token and secret
        auth_url = 'https://api.twitter.com/oauth2/token'
        auth_headers = {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Basic base64_encoded(api_token:api_secret)'
        }
        auth_data = {
            'grant_type': 'client_credentials'
        }
        auth_response = requests.post(auth_url, headers=auth_headers, data=auth_data)
        bearer_token = auth_response.json().get('access_token')

        # Make the request to the Twitter API using the bearer token
        search_url = 'https://api.twitter.com/2/tweets/search/recent'
        search_params = {
            'query': search_term,
            'tweet.fields': 'created_at'
        }
        search_headers = {
            'Authorization': f'Bearer {bearer_token}'
        }
        search_response = requests.get(search_url, headers=search_headers, params=search_params)
        tweets = search_response.json()

        # Extract relevant tweet information
        result = []
        for tweet in tweets['data']:
            tweet_info = {
                "id": tweet['id'],
                "text": tweet['text'],
                "username": tweet['author_id']
            }
            result.append(tweet_info)

        return jsonify(result), 200

    except Exception as e:
        print(f"An error occurred: {str(e)}")
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run()
