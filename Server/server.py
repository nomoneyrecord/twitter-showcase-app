from flask import Flask

app = Flask(__name__)


@app.route("/api/tweets")
def hello_world():
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

    return tweets
