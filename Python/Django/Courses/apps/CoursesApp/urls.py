from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^AddCourse$', views.AddCourse),
    url(r'^GoToDelete/(?P<id>\d+)$', views.GoToDelete),
    url(r'^DeleteCourse/(?P<id>\d+)$', views.DeleteCourse),
]
