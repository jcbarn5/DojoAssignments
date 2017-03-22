from django.shortcuts import render, redirect
from random import randrange

def index(request):

    if 'gold' not in request.session:
        request.session['gold'] = 0

    if 'activity' not in request.session:
        request.session['activity'] = []

    return render(request, 'NinjaGoldApp/index.html')

def process(request):

    if request.POST['place'] == 'farm':
        gold = randrange(10,20)
        request.session['gold'] += gold
        str = 'You visited farm, you earned %r gold. Go Ninja Go.' % (gold)
        request.session['activity'].insert(0, str)

    if request.POST['place'] == 'cave':
        gold = randrange(5,10)
        request.session['gold'] += gold
        str = 'You visited cave, you earned %r gold. Go Ninja Go.' % (gold)
        request.session['activity'].insert(0, str)

    if request.POST['place'] == 'house':
        gold = randrange(2,5)
        request.session['gold'] += gold
        str = 'You visited house, you earned %r gold. Go Ninja Go.' % (gold)
        request.session['activity'].insert(0, str)

    if request.POST['place'] == 'casino':
        gold = randrange(-50,50)
        request.session['gold'] += gold
        str = 'You visited casino, you earned %r gold. Go Ninja Go.' % (gold)
        request.session['activity'].insert(0, str)

    return redirect('/')

def reset(request):
    request.session.clear()
    print "You reset the game!"
    return redirect("/")
