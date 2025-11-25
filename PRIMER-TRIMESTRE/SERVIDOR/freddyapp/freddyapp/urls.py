"""
URL configuration for freddyproject project.

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


from django.urls import path
from django.contrib.auth.views import LoginView, LogoutView
from . import views

app_name = 'freddyapp'

# Rutas de la aplicación según enunciado
urlpatterns = [
    path('list', views.animatronic_list, name='animatronic_list'),  # /freddyapp/list
    path('new', views.animatronic_new, name='animatronic_new'),  # /freddyapp/new
    path('<int:id>/view', views.animatronic_view, name='animatronic_view'),  # /freddyapp/<id>/view
    path('<int:id>/edit', views.AnimatronicUpdate.as_view(), name='animatronic_edit'),  # /freddyapp/<id>/edit
    path('<int:id>/delete', views.AnimatronicDelete.as_view(), name='animatronic_delete'),  # /freddyapp/<id>/delete
    path('newuser', views.register, name='register'),  # /freddyapp/newuser
    path('login', LoginView.as_view(template_name='freddyapp/login.html'), name='login'),  # /freddyapp/login
    path('logout', LogoutView.as_view(next_page='freddyapp:animatronic_list'), name='logout'),  # /freddyapp/logout
    path('theme', views.set_theme, name='set_theme'),  # /freddyapp/theme (cookie dark)
    path('clearcookies', views.clear_cookies, name='clear_cookies'),  # /freddyapp/clearcookies
]