from __future__ import unicode_literals
from django.db import models
import bcrypt
from bcrypt import hashpw, gensalt
import re
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

class UserManager(models.Manager):
    def validate(self, data):
        flag = True
        errs= []
        password = data['pass']
        hashed = bcrypt.hashpw(str(password), bcrypt.gensalt())
        if len(data['first_name']) < 2:
            flag = False
            err.append["Your first name must be at least 2 characters long."]
        if len(data['last_name']) < 2:
            flag = False
            err.append["Your last name must be at least 2 characters long."]
        if data['pass'] != data['cpass']:
            flag = False
            err.append['Your password confirmation does not match.']
        if not EMAIL_REGEX.match(data['email']):
            flag = False
            err.append['Your email is invalid.']
    	if flag:
    		user = User.objects.create(first_name=data['first_name'], last_name=data['last_name'], email=data['email'], password=hashed)
    		return (True, user)
    	else:
    		return (False, errs)
    def login(self, data):
        flag = True
        errs= []
        potential_user = User.objects.filter(email=data['email'])
        if not potential_user[0]:
            flag = False
            errs.append('Your email is an invalid email.')
            return (False, errs)
        hashed = potential_user[0].password
        password = str(data['pass']) '''<-may need to take out str'''
        if bcrypt.hashpw(password, hashed) == hashed:
            return (True, User.objects.filter())
        else:
            flag = False
            errs.append('Invalid Password.')
        return (False, errs)

        # password = str(request.POST['pw']) this is from Nishant

    # def login(self, email, password):
    #     if User.objects.filter(email=email):
    #         user = User.objects.get(email=email)
    #     if hashpw(password.encode(), user.password.encode()) == user.password:
    #         return (True, user.id)
    #     else:
    #         return (False, "Invalid password")
    #     else:
    #         return (False, "Invalid email address")

class User(models.Model):
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    email = models.EmailField()
    password = models.CharField(max_length=50)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
