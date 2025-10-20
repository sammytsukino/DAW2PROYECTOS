from django.http import HttpResponse
from django.shortcuts import render
from hospitalapp.forms import RegistroForm

# Create your views here.
def form(request):
    if request.method == "POST":
        form = RegistroForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Formulario enviado correctamente")
    else: 
        form = RegistroForm()
    return render(request, "hospitalapp/form.html", {"form" : form})