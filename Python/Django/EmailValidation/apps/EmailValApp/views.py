from django.shortcuts import render, redirect
from .models import Email


def index(request):
    return render(request, 'EmailValApp/index.html')

def success(request):

    result = Email.objects.EmailV(request.POST['email'])
    if result:
        context = {
        'message': result[1],
        'email': Email.objects.all()
        }
        return render(request, 'EmailValApp/success.html', context)
    else:
        context = {
        'nope': "Email is not Valid..."
        }
        return render(request, 'EmailValApp/index.html', context)
