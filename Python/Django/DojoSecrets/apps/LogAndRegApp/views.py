from django.shortcuts import render, redirect
from django.contrib import messages
from . models import User
from django.core.urlresolvers import reverse

def index(request):
    return render(request, 'LogAndRegApp/index.html')

def register(request):
    data = {
    "first_name": request.POST['first_name'],
    "last_name": request.POST['last_name'],
    "email": request.POST['email'],
    "pass": request.POST['pass'],
    "cpass": request.POST['cpass'],
    }
    result = User.objects.validate(data)

    if result[0]:
        request.session['user_id'] = result[1].id
        return redirect('/')
    else:
        for err in result[1]:
            messages.error(request, err)
        return redirect('/')

def login(request):
    data = {
    'email': request.POST['email'],
    'pass': request.POST['pass'],
    }
    result = User.objects.login(data)
    

    if result[0]:
        request.session['user_id'] = result[1].id
        return redirect(reverse('secrets:index'))
    else:
        for err in result[1]:
            messages.error(request, err)
        return redirect("/")
def success(request):
    try:
        userObj = User.objects.get(id=request.session['user_id'])

        context = {
        "user": userObj,
        }

        return render(request, "DojoSecretsApp/index.html", context)
    except:
        return redirect("/")

def logout(request):
    request.session.clear()
    return redirect("/")
