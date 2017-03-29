from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^$', views.index, name = 'index'),
    url(r'^AddSecret$', views.AddSecret, name = 'AddSecret'),
    url(r'^PopSecret$', views.PopSecret, name = 'PopSecret'),
    url(r'^AddLike(?P<id>\d+)$', views.AddLike, name = 'AddLike'),
]
