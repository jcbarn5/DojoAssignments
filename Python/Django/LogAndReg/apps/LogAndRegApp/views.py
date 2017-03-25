from django.shortcuts import render, redirect
from django.contrib import messages
from . models import User

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
    print result[1]

    if result[0]:
        request.session['user_id'] = result[1].id
        return redirect('/success')
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
        return redirect("/success")
    else:
        for err in result[1]:
            messages.error(request, err)
        return redirect("/")
def success(request):
    try:
        userObj = User.objects.get(id=request.session['user_id'])
        passObj = User.objects.get(id=request.session['passord'])
        request.POST = bcrypt.hashpw(passObj)
        context = {"user": userObj}

        return render(request, "LogAndRegApp/success.html", context)
    except:
        return redirect("/")

def logout(request):
    request.session.clear()
    return redirect("/")
