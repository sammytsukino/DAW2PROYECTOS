"""
URLs del proyecto principal
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('freddyapp/', include('freddyapp.urls')),
]
