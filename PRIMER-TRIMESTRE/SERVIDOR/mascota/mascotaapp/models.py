from django.db import models
from django.core.validators import MaxValueValidator, MinValueValidator
from django.forms import ValidationError

def comprobar_peso(value):
    if value < 0.01 or value > 200.00:
        raise ValidationError("El peso debe estar entre 10 gramos y 200 kilos")
    
class Duenyos(models.Model):
    nombre = models.CharField()
    apellidos = models.CharField()

    def __str__(self):
        return f"{self.nombre} {self.apellidos}"

class Mascota(models.Model):
    nombre = models.CharField(max_length=20)
    raza = models.CharField(max_length=15)
    TIPOS = [
        ("GT", "Gato"),
        ("PR", "Perro"),
        ("CAN", "Canario"),
        ("CON", "Conejo"),
        ("TOR", "Tortuga")
    ]
    tipo = models.CharField(choices=TIPOS, max_length=3)
    fecha_nacimiento = models.DateField()
    peso = models.DecimalField(max_digits=5, decimal_places=2, validators=[comprobar_peso])
    vacunado = models.BooleanField(default=False)
    ultima_vacuna = models.DateField(blank=True, null=True)
    email_duenyo = models.EmailField(blank=True)
    domicilio_duenyo = models.TextField(max_length=100, blank=True)
    duenyos = models.ManyToManyField(Duenyos)
    foto = models.FileField(upload_to="foto/")

    def clean(self):
        super().clean()
        errores = {}
        if self.ultima_vacuna and self.ultima_vacuna < self.fecha_nacimiento:
            errores["ultima_vacuna"] = "La fecha de la última vacunación debe ser posterior a la fecha de nacimiento"
        if self.vacunado and not self.ultima_vacuna:
            errores["ultima_vacuna"] = "Por favor, introduce la fecha de la última vacuna"
        if errores:
            raise ValidationError(errores)
