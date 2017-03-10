from flask import Flask, render_template, request, redirect, flash
app = Flask(__name__)
app.secret_key = "burrito"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/result', methods=['POST'])
def result():

    if len(request.form['name']) < 1:
        flash("Name cannot be empty!")
        return redirect('/')

    if len(request.form['comment']) < 1 or len(request.form['comment']) > 120:
        flash('comment is either empty or exceeds 120 characters')
        return redirect('/')

    name = request.form['name']
    city = request.form['city']
    favorite = request.form['favorite']
    comment = request.form['comment']

    return render_template('result.html', name = name, city = city, favorite = favorite, comment = comment)

app.run(debug=True)
