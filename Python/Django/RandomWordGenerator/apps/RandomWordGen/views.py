from django.shortcuts import render, redirect
from django.utils.crypto import get_random_string

# Create your views here.
def index(request):

    return render(request, 'RandomWordGen/index.html')

def WordGen(request):

    if request.method == "POST":
        request.session['count'] += 1
        request.session['word'] = get_random_string(length=14)
        return redirect('/')
    else:
        return redirect('/')
