from django.shortcuts import render, redirect
from .models import Course
from django.core.urlresolvers import reverse

def index(request):
    content = {
        "course": Course.objects.all(),
    }
    return render(request, 'CoursesApp/index.html', content)

def AddCourse(request):
    Course.objects.create(course=request.POST['cor'], description=request.POST['des'])
    return redirect('/')

def GoToDelete(request, id):
    content = {
        "course": Course.objects.get(id=id),
    }
    return render(request, 'CoursesApp/delete.html', content)

def DeleteCourse(request, id):

    Course.objects.get(id=id).delete()

    return redirect('/')
