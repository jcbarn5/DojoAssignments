from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = "burrito"

@app.route('/')
def index():
    return render_template("index.html")


@app.route('/ninja')
def response():
    flag = True

    return render_template('response.html', flag = flag)

@app.route('/ninja/<headband>')
def show_ninjas(headband):
    flag = False
    print headband


    return render_template("response.html", headband = headband, flag = flag)






















app.run(debug=True)
