from flask import Flask, request, jsonify
import tweepy

app = Flask(__name__)

@app.route("/api/tweets")
def get_tweets():
    search_term = request.args.get('q')
    if not search_term:
        return jsonify([])

    try:

        
        auth = tweepy.AppAuthHandler('LSetelpESvmdymo9JXFQ9xsqt', '5sz1W9mKHWJRJ8eZh8qrxZDgQEoY5OCPGgXkl5mvLwbQRTz6DO')
        api = tweepy.API(auth, wait_on_rate_limit=True)


        tweets = api.search(q=search_term, tweet_mode='extended', count=10)




 
        result = []
        for tweet in tweets:
            tweet_info = {
                "id": tweet.id_str,
                "text": tweet.full_text,
                "username": tweet.user.screen_name
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









