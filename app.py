from flask import request, Flask, render_template, url_for
app = Flask(__name__)


@app.route('/', methods=['POST', 'GET'])
def rgb():
    if request.method == 'POST':
        red = request.form.get("red", 0)
        green = request.form.get("green", 0)
        blue = request.form.get("blue", 0) 
        print("red: " + str(red))
        print("green: " + str(green))
        print("blue: " + str(blue))
    
    return render_template("rgb.html")