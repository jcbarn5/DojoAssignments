from flask import Flask, render_template, redirect, request, flash, session
import re
from mysqlconnection import MySQLConnector
app = Flask(__name__)
mysql = MySQLConnector(app,'friendships')
app.secret_key = "burrito"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/', methods=['GET'])
def index():

  return render_template("index.html")

# GET	'/'	index()	Display all of the friends on the index.html page
# POST	'/friends'	create()	Handle the add friend form submit and create the friend in the DB
# GET	'/friends/<id>/edit'	edit(id)	Display the edit friend page for the particular friend
# POST	'/friends/<id>'	update(id)	Handle the edit friend form submit and update the friend in the DB
# POST	'/friends/<id>/delete'	destroy(id)	Delete the friend from the DB

# Create
# Retrieve
# Update
# Delete

# @app.route('/register', methods=['POST'])
# def register():
#
#     return redirect('/')
#
# @app.route('/success')
#
#     return render_template('success.html', emails = emails, nemail = nemail)

app.run(debug=True)
