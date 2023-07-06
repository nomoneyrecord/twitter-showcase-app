from flask import Flask, request
import json
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/tweets")
def get_tweets():
    tweets = [
        {
            "id": 1,
            "text": "This is my first tweet",
            "username": "GaryHughesJr"
        },
        {
            "id": 2,
            "text": "This is my second tweet",
            "username": "GaryHughesJr"
        },
        {
            "id": 3,
            "text": "omg twitter is so amazing",
            "username": "GaryHughesJr"
        }
    ]

    search_term = request.args.get('q')

    if search_term:
        tweets = [tweet for tweet in tweets if search_term.lower() in tweet['text'].lower()]

    return json.dumps(tweets), 200

if __name__ == "__main__":
    app.run()

