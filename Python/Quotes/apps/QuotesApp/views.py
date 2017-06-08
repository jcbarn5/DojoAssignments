from django.shortcuts import render, redirect
from django.contrib import messages
from django.core.urlresolvers import reverse
from ..LogAndRegApp.models import User
from . models import Quotes, FQuotes
from django.db.models import Count

def index(request):
    user = User.objects.get(id = request.session['user_id'])
    context = {
    'all_quotes':  Quotes.objects.all().exclude(fquotes__favquote = user),
    'name': User.objects.get(id=request.session['user_id']),
    'favs': FQuotes.objects.filter(favquote = user)
    }
    return render(request, 'QuotesApp/index.html', context)

def AddQuote(request):
    data = {
    "quote": request.POST['quote'],
    "quoted_by": request.POST['quote_author'],
    "user": User.objects.get(id=request.session['user_id'])
    }

    result = Quotes.objects.validate(data)

    if not result:
        messages.error(request, 'Quoted by must be at least 3 characters long and quote must be at least 10 characters long')
        redirect('quotes:index')

    return redirect('quotes:index')

def AddFavorite(request, id):
	quotes = Quotes.objects.get(id=id)
	user = User.objects.get(id = request.session['user_id'])
	check = FQuotes.objects.filter(favquote=user).filter(quote=quotes)
	if not check:
		FQuotes.objects.create(quote=quotes, favquote=user)
	else:
		messages.error(request, "This is already one of your favorites!")
        return redirect(reverse('quotes:index'))


def UserQuotes(request, id):
    data = {
    'all_quotes':  Quotes.objects.filter(author=id),
    'count': User.objects.filter(id=id).annotate(num_quotes=Count('users_quote')),
    'name': User.objects.get(id=id)

    }
    return render(request, 'QuotesApp/UsersQuotes.html', data)

def delete(request, id):
	FQuotes.objects.get(id=id).delete()
	return redirect(reverse('quotes:index'))

def logout(request):
    request.session.clear()

    return redirect(reverse("login:index"))
