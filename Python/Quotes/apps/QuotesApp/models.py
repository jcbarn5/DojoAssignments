from __future__ import unicode_literals

from django.db import models
from ..LogAndRegApp.models import User

class QuoteManager(models.Manager):
    def validate(self, data):
        flag = True
        if len(data['quote']) < 10:
            flag = False
        if len(data['quoted_by']) < 3:
            flag = False
        if flag:
            new_quote = Quotes.objects.create(quote=data['quote'], quoted_by=data['quoted_by'], author=data['user'])
            return (True, new_quote)
    	else:
    		return (False)

class Quotes(models.Model):
    quote = models.TextField()
    quoted_by = models.CharField(max_length=255)
    author = models.ForeignKey(User, related_name='users_quote')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = QuoteManager()


class FQuotes(models.Model):
    favquote = models.ForeignKey(User, related_name= 'users_fquote')
    quote = models.ForeignKey(Quotes, related_name= 'fquotes')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
