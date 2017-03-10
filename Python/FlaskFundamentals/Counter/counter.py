from flask import Flask, render_template, request, redirect, session
app = Flask(__name__)
app.secret_key="burrito"

@app.route('/')
def index():
    if "count" in session:
        session['count'] += 1
    else:
        session['count'] = 1
    return render_template("index.html")

@app.route('/count', methods=['POST'])

def count():

   session['count'] += 1

   return redirect('/')

@app.route('/reset', methods=['POST'])

def reset():

   session.clear()

   return redirect('/')






app.run(debug=True)
