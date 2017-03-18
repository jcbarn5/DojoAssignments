from flask import Flask, render_template, redirect, request, flash, session
import re
from mysqlconnection import MySQLConnector
from flask_bcrypt import Bcrypt
app = Flask(__name__)
bcrypt = Bcrypt(app)
app.secret_key = "burrito"
mysql = MySQLConnector(app,'thewall')
onlyLetters = re.compile(r'^[a-zA-Z]+$')
email_validation = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def index():
  return render_template("index.html")

@app.route('/register', methods=['POST'])
def register():
    flag = False
    data = {
        'email': request.form['email'],
        'first': request.form['first_name'],
        'last': request.form['last_name'],
        'password': request.form['password'],
        'cpassword': request.form['cpassword']
    }
    #FIRST NAME VALIDATION
    if not onlyLetters.match(data['first']):
        flag = True
        flash('You can only have letters in your first name.')
    if len(data['first']) < 2:
        flag = True
        flash('Your first name must be at least 2 characters long.')
    if not data['first']:
        flag = True
        flash('You must submit a first name.')
    #LAST NAME VALIDATION
    if not onlyLetters.match(data['last']):
        flag = True
        flash('You can only have letters in your last name.')
    if len(data['last']) < 2:
        flag = True
        flash('Your last name must be at least 2 characters long.')
    if not data['last']:
        flag = True
        flash('You must submit a last name.')
    #EMAIL NAME VALIDATION
    if not email_validation.match(data['email']):
        flag = True
        flash('Your email is not valid.')
    if not data['email']:
        flag = True
        flash('You must enter an email.')
    #PASSWORD VALIDATIONS
    if len(data['password']) < 8:
        flag = True
        flash('Your password was too short')
    if not data['password']:
        flag = True
        flash('You must submit a password')
    if data['password'] != data['cpassword']:
        flag = True
        flash("Your passwords don't match.")
    if flag:
        return redirect('/')
    else:
        print "Data was valid."

        flash('Success')
        pw_hash = bcrypt.generate_password_hash(data['password'])
        query = "INSERT INTO users (first_name, last_name, email, password, updated_at) VALUES (:first, :last, :email, :pass, NOW())"
        data = {
            'first': data['first'],
            'last': data['last'],
            'email': data['email'],
            'pass': pw_hash
                }

        user_id = mysql.query_db(query, data)
        session['user_id'] = user_id
        return render_template('wall.html')

@app.route('/login', methods = ['POST'])
def login():
    query = "select * from users where email = :email"
    data = {
        "email": request.form['email']
    }
    userInQuestion = mysql.query_db(query, data)

    if not userInQuestion:
        flash("Invalid email.")
        return redirect('/')
    else:
        if bcrypt.check_password_hash(userInQuestion[0]['password'], request.form['password']):
            session['user_id'] = userInQuestion[0]['id']
            return redirect('/theWall')
        else:
            flash('This password is invalid.')
            return redirect('/')


@app.route('/theWall')
def theWall():
    query = "select * from users where id = :id"
    data = {
        'id': session['user_id']
    }
    currentUser = mysql.query_db(query, data)

    mquery = "select users.first_name, users.last_name, messages.id as message_id, messages.message from messages left join users on messages.user_id = users.id"
    messages = mysql.query_db(mquery)

    cquery = "select users.first_name, users.last_name, comments.id as comment_id, comments.comment, comments.message_id from comments left join users on comments.message_id = users.id"
    comments = mysql.query_db(cquery)

    return render_template('/wall.html', user = currentUser[0], wall_messages = messages, wall_comments = comments)

@app.route('/addComment', methods= ['POST'])
def addComment():
    query = "insert into comments (message_id, user_id, comment, created_at, updated_at) values (:message_id, :user_id, :comment, now(), now())"
    data = {
        "message_id": request.form['message_id'],
        "user_id": session['user_id'],
        "comment": request.form['comment']
    }
    mysql.query_db(query, data)
    return redirect("/theWall")

@app.route('/addMessage', methods= ['POST'])
def addMessage():
    query = "insert into messages (message, user_id, created_at, updated_at) values (:message, :user_id, now(), now())"
    data = {
        "message": request.form['message'],
        "user_id": session['user_id']
    }
    mysql.query_db(query, data)
    return redirect("/theWall")

@app.route('/logout')
def logout():
    session.clear()
    return redirect('/')

















app.run(debug=True)
