from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse_lazy
from mascotaapp.forms import MascotaForm
from mascotaapp.models import Mascota
from django.views.generic import ListView, CreateView, DeleteView, UpdateView, DetailView

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

class MascotaList(ListView):
    model = Mascota
    context_object_name = "mascotas"
    template_name = "mascotaapp/list.html"

class MascotaCreate(CreateView):
    model = Mascota
    form_class = MascotaForm
    template_name = "mascotaapp/miform.html"
    success_url = reverse_lazy("mascota_list")

class MascotaUpdate(UpdateView):
    model = Mascota
    form_class = MascotaForm
    template_name = "mascotaapp/miform.html"
    success_url = reverse_lazy("mascota_list")

class MascotaDelete(DeleteView):
    model = Mascota
    template_name = "mascotaapp/confirm_delete.html"
    success_url = reverse_lazy("mascota_list")

class MascotaDetail(DetailView):
    model = Mascota
    template_name = "mascotaapp/detail.html"
    context_object_name = "mascota"