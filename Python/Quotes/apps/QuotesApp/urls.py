from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^AddQuote$', views.AddQuote, name="AddQuote"),
    url(r'^AddFavorite(?P<id>\d+)$', views.AddFavorite, name="AddFavorite"),
    url(r'^UserQuotes(?P<id>\d+)$', views.UserQuotes, name="UserQuotes"),
    url(r'^logout$', views.logout, name='logout'),
    url(r'^delete(?P<id>\d+)$', views.delete, name='delete'),
]
