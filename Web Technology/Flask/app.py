from flask import Flask, render_template, request,redirect, url_for,jsonify

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
@app.route("/fail/<int:score>")
def fail(score):
    return "Person failed with score " + str(score)
@app.route("/form", methods=["GET","POST"])
def form():
    if request.method=="GET":
        return render_template("form.html")
    else:
        maths=float(request.form['maths'])
        physics=float(request.form['physics'])
        chemistry=float(request.form['chemistry'])
        average_marks=(maths+chemistry+physics)/3
        result=""
        if average_marks>=75:
            res="success"
        else:
            res="fail"
        return redirect(url_for(res,score=average_marks))
        # return render_template('form.html',score=average_marks)

@app.route("/api/marks", methods=["GET","POST"])
def api_marks():
    if request.method == "POST":
        data = request.get_json()
        maths = float(data.get("maths", 0))
        physics = float(data.get("physics", 0))
        chemistry = float(data.get("chemistry", 0))
    else:
        maths = float(request.args.get("maths", 0))
        physics = float(request.args.get("physics", 0))
        chemistry = float(request.args.get("chemistry", 0))

    average_marks = (maths + physics + chemistry) / 3
    result = "pass" if average_marks >= 75 else "fail"

    return jsonify({
        "Math":maths,
        "Chemistry":chemistry,
        "Physics":physics,
        "average": average_marks,
        "result": result
    })
if __name__=="__main__":
    app.run(debug=True)