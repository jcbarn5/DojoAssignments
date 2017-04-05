from django.shortcuts import render, redirect, HttpResponse
from django.contrib import messages
from django.core.urlresolvers import reverse
from django.db.models import Count
from . models import Secret, Like
from ..LogAndRegApp.models import User




def index(request):
    # secrets = Secret.objects.all()
    context = {
    # 'name': Secret.objects.all(),
    'all_secrets':  Secret.objects.annotate(total_likes=Count('likes')),

    }
    return render(request, "DojoSecretsApp/index.html", context)


def AddSecret(request):
    print 'AddSecret'
    user = User.objects.get(id=request.session['user_id'])

    Secret.objects.create(secrets = request.POST['secretbox'], author = user)

    return redirect(reverse('secrets:index'))

def PopSecret(request):
    pass
    return render(request, "DojoSecretsApp/pop.html")

def AddLike(request, id):
    print '*****Hello Jacob, you are the best*****'
    user = User.objects.get(id=request.session['user_id'])
    secr = Secret.objects.get(id=id)
    check = Like.objects.filter(liked=user).filter(likes=secr)
    if not check:
        print 'not check'
        Like.objects.create(liked=user, likes=secr)
        like_count = Like.objects.filter(likes = secr).count()
        print like_count

    else:
        like_count = Like.objects.filter(likes = secr).count()
        print like_count
        print 'check'

    return redirect(reverse('secrets:index'))
