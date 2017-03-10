from flask import Flask, render_template, request, redirect, flash
import re

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
app = Flask(__name__)
app.secret_key = "burrito"

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/process', methods=['POST'])
def submit():

    if len(request.form['firstname']) < 1:
        flash ('no first name............')

        return redirect('/')

    if len(request.form['lastname']) < 1:
        flash ('no last name............')

        return redirect('/')

    if len(request.form['email']) < 1:
        flash ('email too short')
    elif not EMAIL_REGEX.match(request.form['email']):
        flash ('Invalid Email Address')

    if len(request.form['psw']) < 1 or len(request.form['psw']) < 8:
      flash("Password cannot be empty or less than 8 Characters!")
      return redirect('/')

    if len(request.form['pswconfirm']) < 1:
      flash("Confirm Password cannot be empty!")
      return redirect('/')

    if request.form['psw'] != request.form['pswconfirm']:
      flash("Password and Password Confirm Should Match!")
      return redirect('/')




    return redirect('/')

app.run(debug=True)






# email = request.form['email']
# fname = request.form['firstname']
# lname = request.form['lastname']
# pswd = request.form['psw']
# pswdc = request.form['pswconfirm']
