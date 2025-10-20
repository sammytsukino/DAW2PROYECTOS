from django.http import HttpResponse
from django.shortcuts import render

from hotelapp.forms import CheckinForm

# Create your views here.

def form(request):
    if request.method == "POST":
        form = CheckinForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse("Checkin hecho")
    else: 
        form = CheckinForm()
    return render(request, "hotelapp/form.html", {"form" : form})