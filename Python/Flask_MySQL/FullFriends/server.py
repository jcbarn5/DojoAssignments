from flask import Flask, render_template, redirect, request, flash, session
import re
from mysqlconnection import MySQLConnector
app = Flask(__name__)
app.secret_key = "burrito"
mysql = MySQLConnector(app,'full_friends')
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():

    query = "select * from users"
    users = mysql.query_db(query)
    return render_template("index.html", users = users)

@app.route('/friends', methods=["POST"])
def newFriend():
    if len(request.form['email']) < 1:
        flash("Email cannot be blank!")
    if not EMAIL_REGEX.match(request.form['email']):
    	flash('Invalid Email Address!')
    else:
        query = "INSERT INTO users (first_name, last_name, email, created_at, updated_at) VALUES (:first_name,  :last_name, :email, NOW(), NOW())"
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email']
                }
        mysql.query_db(query, data)

    return redirect('/')



@app.route('/friends/<users_id>/edit')
def edit(users_id):
    query = "select * from users where id = :users_id"
    data = {
        "users_id": users_id
    }
    single_friend = mysql.query_db(query, data)

    return render_template('edit.html', friend = single_friend)

@app.route('/friends/<users_id>', methods=['POST'])
def update(users_id):

    query = "UPDATE users set first_name = :first_name, last_name = :last_name, email = :email, updated_at = NOW() where id = :users_id"
    data = {
        'first_name': request.form['first_name'],
        'last_name': request.form['last_name'],
        'email': request.form['email'],
        'users_id' : users_id
            }
    mysql.query_db(query, data)

    return redirect('/')

@app.route('/friends/<users_id>/delete', methods=['POST'])
def delete(users_id):
    query = "delete from users where id = :users_id"
    data = {
        "users_id": users_id
    }
    mysql.query_db(query, data)
    return redirect('/')

app.run(debug=True)
