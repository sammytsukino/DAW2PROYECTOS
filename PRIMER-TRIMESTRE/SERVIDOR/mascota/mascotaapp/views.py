from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from mascotaapp.forms import MascotaForm
from mascotaapp.models import Mascota

# Create your views here.

def form(request):
    if request.method == "POST":
        form = MascotaForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponse("Formulario válido enviado")
    else: 
        form = MascotaForm()
    return render(request, "mascotaapp/miform.html", {"form": form})


def mascota_edit(request, pk):
    mascota = get_object_or_404(Mascota, pk=pk)
    if request.method == "POST":
        form = MascotaForm(request.POST, request.FILES, instance=mascota)
        if form.is_valid():
            form.save()
            return HttpResponse("Modificado")
    else:
        form = MascotaForm(instance=mascota)
    return render(request, "mascotaapp/miform.html", {"form":form})


def mascota_list(request):
    mascotas = Mascota.objects.all()
    return render(request, 'mascotaapp/list.html', {"mascotas": mascotas})


def mascota_delete(request, pk):
    mascota = get_object_or_404(Mascota, pk=pk)
    if request.method == "POST":
        mascota.delete()
        return redirect("mascota_list")
    return render(request, "mascotaapp/confirm_delete.html", {})