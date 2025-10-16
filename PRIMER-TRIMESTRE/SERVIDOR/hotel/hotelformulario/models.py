from django.db import models

# Create your models here.

class Hotel(models.Model):
    nhotel = models.CharField(max_length=100)
    ncliente = models.CharField(max_length=100)
    dni = models.CharField(max_length=9)
    fechaentrada = models.DateField()
    fechasalida = models.DateField()
    precio = models.DecimalField(max_digits=5, decimal_places=2)