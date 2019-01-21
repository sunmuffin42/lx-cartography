from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def new_entity(request):
	return HttpResponse('new_entity view')