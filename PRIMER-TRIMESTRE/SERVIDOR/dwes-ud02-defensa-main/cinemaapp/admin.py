from django.contrib import admin

from cinemaapp.models import Actors, Movie

# Register your models here.

admin.site.register(Actors)
admin.site.register(Movie)