from flask import Flask

app = Flask(__name__)

@app.route("/")
def hello_world():
    return "<p>Hello, Worldddd!</p>"
@app.route("/index")
def welcome():
    return "<h1>Welcome to Web Technology Class</h1>"

# variable rule
@app.route("/success/<int:score>")
def success(score):
    return "Person passes with score"+str(score)

if __name__=="__main__":
    app.run(debug=True)