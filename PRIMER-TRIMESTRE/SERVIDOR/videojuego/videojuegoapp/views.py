from django.http import HttpResponse
from django.shortcuts import render
from videojuegoapp.forms import RegistroForm

# Create your views here.

def form(request):
    if request.method == "POST":
        form = RegistroForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Formulario válido enviado")
    else: 
        form = RegistroForm()
    return render(request, "videojuegoapp/form.html", {"form": form})