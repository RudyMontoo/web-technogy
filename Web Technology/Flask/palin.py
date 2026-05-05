from flask import Flask
app=Flask(__name__)
@app.route("/",methods=["GET"])
def hello_world():
    return "Hello"
@app.route("/palindrome/<string:n>")
def is_palindrome(n):
    if n == n[::-1]:
         return "True"
    else:
     return "False"
if(__name__)=="__main__":
    app.run(debug=True)