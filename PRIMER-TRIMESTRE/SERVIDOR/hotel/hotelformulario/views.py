from django.http import HttpResponse
from django.shortcuts import render

from hotelformulario.forms import HotelForm

# Create your views here.
def index(request):
    return HttpResponse("Hola")

def process_form(request):
    name = request.POST.get("name")
    email = request.POST.get("email")
    message = request.POST.get("message")
    return HttpResponse(f"Recibido: {name}, {email}, {message}")


def form(request):
    if request.method == "POST":
        form = HotelForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Gracias por su registro")
    else:
        form = HotelForm()

    return render(request, "hotelformulario/form.html", {"form": form})