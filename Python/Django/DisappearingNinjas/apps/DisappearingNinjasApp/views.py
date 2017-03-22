from django.shortcuts import render, HttpResponse, redirect

def index(request):

    return render(request, 'DisappearingNinjasApp/index.html')


def ninjas(request):
    context = {
		'display': True
	}
    return render(request, 'DisappearingNinjasApp/ninjas.html', context)

def colors(request, color):
	context = {
		'display': False,
		'color': color
	}
	return render(request, "DisappearingNinjasApp/ninjas.html", context)
