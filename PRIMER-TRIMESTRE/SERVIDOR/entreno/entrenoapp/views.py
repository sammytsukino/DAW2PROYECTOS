from django.http import HttpResponse
from django.shortcuts import render

from entrenoapp.forms import ContactForm



def index(request):
        return HttpResponse("Holi")

# Create your views here.

def process_form(request):
    name = request.POST.get("name")
    email = request.POST.get("email")
    message = request.POST.get("message")
    return HttpResponse("Recibido")

def form(request):
    form = ContactForm()
    return render(request, "entrenoapp/form.html", {"form":form})
