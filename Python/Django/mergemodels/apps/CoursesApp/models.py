from __future__ import unicode_literals

from django.db import models
from ..LogAndRegApp.models import User

# Create your models here.
class Course(models.Model):
    course = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    user = models.ManyToManyField(User, related_name="all_user")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
