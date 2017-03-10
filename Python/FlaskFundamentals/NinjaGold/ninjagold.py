from flask import Flask, session, request, redirect, render_template
from random import randint

app = Flask(__name__)
app.secret_key = "burrito"

@app.route("/")
def index():
    if 'activity' in session:
        pass
    else:
        session['activity'] = []

    if 'gold' in session:
        pass
    else:
        session['gold'] = 0

    return render_template("index.html")

@app.route("/process", methods=["POST"])
def process():

    if request.form['place'] == "cav":

        session['randomCave'] = randint(5, 10)
        print session['randomCave']
        cavesent = "Earned "+ str(session['randomCave'])+  " golds from the cave!"
        print cavesent
        session['activity'].append(cavesent)
        print session['activity']
        session['gold'] += session['randomCave']
        print 'gold'
        print 'randomCave'

    if request.form['place'] == "far":

        session['randomFarm'] = randint(10,20)
        farmsent = "Earned "+ str(session['randomFarm'])+  " golds from the farm!"
        session['activity'].append(farmsent)
        session['gold'] += session['randomFarm']

    if request.form['place'] == "hou":

        session['randomHouse'] = randint(2,5)
        housesent = "Earned "+ str(session['randomHouse'])+  " golds from the house!"
        session['activity'].append(housesent)
        session['gold'] += session['randomHouse']

    if request.form['place'] == "cas":

        session['randomCasino'] = randint(-50,50)
        casinosent = "Earned "+str(session['randomCasino'])+ " golds from the casino"
        session['activity'].append(casinosent)
        session['gold'] += session['randomCasino']

    return redirect("/")

@app.route('/reset')
def refresh():
    session.clear()
    print "You reset the game!"
    return redirect("/")

app.run(debug=True)
