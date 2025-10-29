
from django.contrib import admin
from django.urls import path
from hospitalapp import views

urlpatterns = [
    path('form', views.form, name = "form"),
]
