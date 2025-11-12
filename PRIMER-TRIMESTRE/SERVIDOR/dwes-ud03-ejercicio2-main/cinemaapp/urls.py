from django.contrib import admin
from django.urls import path

from cinemaapp import views

urlpatterns = [
    path('form', views.form, name='form'),
    path('list', views.movie_list, name='movie_list'),
    path('<int:pk>/edit', views.movie_edit, name='movie_edit'),
    path('<int:pk>/delete', views.movie_delete, name='movie_delete'),
    path('<int:pk>/detail', views.MovieDetail.as_view(), name='movie_detail'),
    path('temaoscuro', views.temaoscuro, name='temaoscuro'),
    path('temaamarillo', views.temaamarillo, name='temaamarillo'),
    path('borracookie', views.borracookie, name='borracookie')
]


