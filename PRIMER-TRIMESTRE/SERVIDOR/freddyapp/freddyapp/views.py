from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import UpdateView, DeleteView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth.mixins import PermissionRequiredMixin
from .models import Animatronic
from .forms import AnimatronicForm

# Controlador animatronic_list: muestra la lista de animatrónicos (accesible para todos)
def animatronic_list(request):
    animatronics = Animatronic.objects.all()
    return render(request, 'freddyapp/animatronic_list.html', {'animatronics': animatronics})

# Controlador animatronic_view: muestra detalles de un animatrónico (requiere autenticación)
@login_required
def animatronic_view(request, id):
    animatronic = get_object_or_404(Animatronic, id=id)
    return render(request, 'freddyapp/animatronic_view.html', {'animatronic': animatronic})

# Controlador animatronic_new: muestra formulario de creación (requiere permiso add_animatronic)
@permission_required('freddyapp.add_animatronic', raise_exception=True)
def animatronic_new(request):
    form = AnimatronicForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('freddyapp:animatronic_list')
    return render(request, 'freddyapp/animatronic_form.html', {'form': form})

# Controlador AnimatronicUpdate: muestra formulario de edición (requiere permiso change_animatronic)
class AnimatronicUpdate(PermissionRequiredMixin, UpdateView):
    permission_required = 'freddyapp.change_animatronic'
    model = Animatronic
    form_class = AnimatronicForm
    template_name = 'freddyapp/animatronic_form.html'
    pk_url_kwarg = 'id'
    success_url = reverse_lazy('freddyapp:animatronic_list')

# Controlador AnimatronicDelete: muestra confirmación de borrado (requiere permiso delete_animatronic)
class AnimatronicDelete(PermissionRequiredMixin, DeleteView):
    permission_required = 'freddyapp.delete_animatronic'
    model = Animatronic
    template_name = 'freddyapp/animatronic_confirm_delete.html'
    pk_url_kwarg = 'id'
    success_url = reverse_lazy('freddyapp:animatronic_list')

# Registro de usuario: añade automáticamente al grupo Client
def register(request):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user = form.save()
        user.groups.add(Group.objects.get(name='Client'))  # Asigna grupo Client por defecto
        return redirect('freddyapp:login')
    return render(request, 'freddyapp/register.html', {'form': form})

# Guarda cookie 'theme' con valor 'dark'
def set_theme(request):
    url_anterior = request.META.get('HTTP_REFERER', '/freddyapp/list')
    resp = redirect(url_anterior)
    resp.set_cookie('theme', 'dark')
    return resp

# Borra la cookie 'theme'
def clear_cookies(request):
    url_anterior = request.META.get('HTTP_REFERER', '/freddyapp/list')
    resp = redirect(url_anterior)
    resp.delete_cookie('theme')
    return resp