
from django.contrib import admin
from django.urls import path
from hotelapp import views

urlpatterns = [
    path('form', views.form, name = "form"),
]
