from django.core.exceptions import ValidationError
from django.core.validators import MinValueValidator, MaxValueValidator
from django.db import models

class Actors(models.Model):
    name = models.CharField()
    last_name = models.CharField()
    year_of_birth = models.IntegerField()


    def __str__(self):
        return f"{self.name} {self.last_name} {self.year_of_birth}"

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=100)
    synopsis = models.TextField(max_length=1000)
    GENRES = [
        ("AC", "Action"),
        ("DR", "Drama"),
        ("CO", "Comedy"),
        ("SC", "Sci-fi"),
        ("HO", "Horror")
    ]
    genre = models.CharField(choices= GENRES, max_length=2)
    director = models.CharField(max_length=100)
    actors = models.ManyToManyField(Actors, blank=True)
    release_year = models.IntegerField(validators=[MinValueValidator(1900)])
    duration = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(500)])
    release_date = models.DateField()
    announcement_date = models.DateField()
    has_subtitles = models.BooleanField()
    subtitles_language = models.CharField(blank=True)
    imdb = models.URLField(blank=True)
    rating = models.DecimalField(max_digits=3, decimal_places=1, validators=[MinValueValidator(0.0), MaxValueValidator(10.0)], blank=True, null=True)

    def clean(self):
        super().clean()
        errores = {}
        if self.announcement_date > self.release_date:
            errores["announcement_date"] = "The announcement date must be before the release date"
        if self.has_subtitles and not self.subtitles_language:
            errores["subtitles_language"] = "Please specify a language"
        if errores:
            raise ValidationError(errores)