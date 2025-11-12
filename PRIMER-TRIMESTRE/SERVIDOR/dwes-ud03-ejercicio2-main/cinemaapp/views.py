from django.http import HttpResponse
from django.shortcuts import get_object_or_404, redirect, render
from django.urls import reverse_lazy
from django.views.generic import CreateView, ListView, UpdateView, DeleteView, DetailView

from cinemaapp.forms import MovieForm
from cinemaapp.models import Movie


# Create your views here.
def form(request):
    if request.method == 'POST':
        form = MovieForm(request.POST, request.FILES)
        if form.is_valid():
            form.save()
            return HttpResponse('Done')
    else:
        form = MovieForm()
    return render(request, 'cinemaapp/form.html', {'form': form})

def movie_edit(request, pk):
    movie = get_object_or_404(Movie, pk=pk)
    if request.method == 'POST':
        form = MovieForm(request.POST, request.FILES, instance=movie)
        if form.is_valid():
            form.save()
            return HttpResponse("Hecho")
    else:
        form = MovieForm(instance=movie)
    return render(request, "cinemaapp/form.html", {"form": form})


def movie_list(request):
    tema = request.COOKIES.get('tema', 'nada')
    movies = Movie.objects.all()
    return render(request, 'cinemaapp/list.html', {'movies': movies, 'tema': tema})

def movie_delete(request, pk):
    movie = get_object_or_404(Movie, pk=pk)
    if request.method == 'POST':
        movie.delete()
        return redirect('movie_list')
    return render(request, 'cinemaapp/confirm_delete.html', {})

class MovieCreate(CreateView):
    model = Movie
    form_class = MovieForm
    template_name = 'cinemaapp/form.html'
    success_url = reverse_lazy('movie_list')

class MovieList(ListView):
    model = Movie
    context_object_name = 'movies'
    template_name = 'cinemaapp/list.html'

class MovieUpdate(UpdateView):
    model = Movie
    form_class = MovieForm
    template_name = 'cinemaapp/form.html'
    success_url = reverse_lazy('movie_list')

class MovieDelete(DeleteView):
    model = Movie
    template_name = 'cinemaapp/confirm_delete.html'
    success_url = reverse_lazy('movie_list')

class MovieDetail(DetailView):
    model = Movie
    template_name = 'cinemaapp/detail.html'
    context_object_name = 'movie'

def crea_cookie(request):
    resp = redirect('movie_list')
    resp.set_cookie('tema', 'oscuro')
    return resp

def lee_cookie(request):
    tema = request.COOKIES.get('tema', 'nada')
    return HttpResponse(f'Tema actual: {tema}')

def temaoscuro(request):
    resp = redirect('form')
    resp.set_cookie('tema', 'oscuro')
    return resp

def temaamarillo(request):
    resp = redirect('form')
    resp.set_cookie('tema', 'amarillo')
    return resp

def borracookie(request):
    resp = redirect('form')
    resp.delete_cookie('tema')
    return resp