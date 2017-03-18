from flask import Flask, render_template, redirect, request, flash, session
import re
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'emailvalidation')
app.secret_key = "burrito"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/register', methods=['POST'])
def register():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    if not EMAIL_REGEX.match(request.form['email']):
    	flash('Invalid Email Address!')
    else:
        flash('Success')
        query = "INSERT INTO email (email, created_at, updated_at) VALUES (:email, NOW(), NOW())"
        data = {
            'email': request.form['email']
                }
        lastrowid = mysql.query_db(query, data)
        session['newemail'] = request.form['email']
        return redirect('/success')

    return redirect('/')

@app.route('/success')
def success():
    query = "select * from email"
    emails = mysql.query_db(query)
    nemail = session['newemail']

    return render_template('success.html', emails = emails, nemail = nemail)

app.run(debug=True)
