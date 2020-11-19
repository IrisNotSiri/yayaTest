
# Create your views here.
from django.shortcuts import render
from django.http import HttpResponse
# Create your views here.

def index(request):
    # return HttpResponse("<em> oh Yeah! </em>")
    my_dict = {'insert_me': 'Hello, this is yaya app'}
    return render(request, 'yaya_app1/index.html', context = my_dict)
