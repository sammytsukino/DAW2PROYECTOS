"""
URLs del proyecto freddyproject
"""
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('freddyapp/', include('freddyapp.urls')),  # Incluye las rutas de la aplicación freddyapp
]
