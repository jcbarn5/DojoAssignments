from __future__ import unicode_literals

from django.db import models
from ..LogAndRegApp.models import User

class Secret(models.Model):
    secrets = models.TextField()
    author = models.ForeignKey(User)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Like(models.Model):
    liker = models.ForeignKey(User, related_name= 'liked')
    target = models.ForeignKey(Secret, related_name='likes')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
