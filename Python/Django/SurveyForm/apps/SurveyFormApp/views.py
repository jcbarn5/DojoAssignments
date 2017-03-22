from django.shortcuts import render, HttpResponse, redirect

def index(request):
    if "counter" in request.session:
        pass
    else:
        request.session['counter'] = 0
    return render(request, 'SurveyFormApp/index.html')

def process(request):
    request.session['data'] = {
        'name': request.POST['name'],
        'DojoLocation': request.POST['DojoLocation'],
        'FavLang': request.POST['FavLang'],
        'comment': request.POST['comment'],
    }
    request.session['counter'] += 1
    return redirect('/result')

def result(request):
    print ('*'*50)
    return render(request, 'SurveyFormApp/results.html')
