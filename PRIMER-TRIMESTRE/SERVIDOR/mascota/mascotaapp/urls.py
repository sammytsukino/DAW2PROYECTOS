"""
URL configuration for mascotaproyecto project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from mascotaapp import views
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('miform', views.MascotaCreate.as_view(), name = "miform"),
    path("<int:pk>/edit", views.MascotaUpdate.as_view(), name="mascota_edit"),
    path("list", views.mascota_list, name="mascota_list"),
    path("<int:pk>/delete", views.MascotaDelete.as_view(), name="mascota_delete"),
    path("<int:pk>/detail", views.MascotaDetail.as_view(), name="mascota_detail"),
    path("creacookie", views.crea_cookie, name="creacookie"),
    path("leecookie", views.lee_cookie, name="leecookie"),
    path("borracookie", views.borra_cookie, name="borracookie"),
    path("temaoscuro", views.temaoscuro, name="temaoscuro"),
    path("temaamarillo", views.temaamarillo, name="temaamarillo")



]
