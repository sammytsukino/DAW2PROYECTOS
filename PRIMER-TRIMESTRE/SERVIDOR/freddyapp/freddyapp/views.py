from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse_lazy
from django.views.generic import UpdateView, DeleteView
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import Group
from django.contrib.auth.decorators import login_required, permission_required
from django.contrib.auth.mixins import PermissionRequiredMixin
from .models import Animatronic
from .forms import AnimatronicForm

def animatronic_list(request):
    animatronics = Animatronic.objects.all()
    return render(request, 'freddyapp/animatronic_list.html', {'animatronics': animatronics})

@login_required
def animatronic_view(request, id):
    animatronic = get_object_or_404(Animatronic, id=id)
    return render(request, 'freddyapp/animatronic_view.html', {'animatronic': animatronic})

@permission_required('freddyapp.add_animatronic', raise_exception=True)
def animatronic_new(request):
    form = AnimatronicForm(request.POST or None)
    if form.is_valid():
        form.save()
        return redirect('freddyapp:animatronic_list')
    return render(request, 'freddyapp/animatronic_form.html', {'form': form})

class AnimatronicUpdate(PermissionRequiredMixin, UpdateView):
    permission_required = 'freddyapp.change_animatronic'
    model = Animatronic
    form_class = AnimatronicForm
    template_name = 'freddyapp/animatronic_form.html'
    pk_url_kwarg = 'id'
    success_url = reverse_lazy('freddyapp:animatronic_list')

class AnimatronicDelete(PermissionRequiredMixin, DeleteView):
    permission_required = 'freddyapp.delete_animatronic'
    model = Animatronic
    template_name = 'freddyapp/animatronic_confirm_delete.html'
    pk_url_kwarg = 'id'
    success_url = reverse_lazy('freddyapp:animatronic_list')

def register(request):
    form = UserCreationForm(request.POST or None)
    if form.is_valid():
        user = form.save()
        user.groups.add(Group.objects.get(name='Client'))
        return redirect('freddyapp:login')
    return render(request, 'freddyapp/register.html', {'form': form})

def set_theme(request):
    url_anterior = request.META.get('HTTP_REFERER', '/freddyapp/list')
    resp = redirect(url_anterior)
    resp.set_cookie('theme', 'dark')
    return resp

def clear_cookies(request):
    url_anterior = request.META.get('HTTP_REFERER', '/freddyapp/list')
    resp = redirect(url_anterior)
    resp.delete_cookie('theme')
    return resp