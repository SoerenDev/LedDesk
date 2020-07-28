from flask import request, Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    green = request.args.get("green")
    return "green:" + green