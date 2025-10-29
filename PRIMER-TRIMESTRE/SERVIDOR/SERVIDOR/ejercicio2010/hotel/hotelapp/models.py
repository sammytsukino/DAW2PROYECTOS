from django.db import models
from django.core.validators import MinLengthValidator
from django.forms import ValidationError

def valida_par(value):
    if value % 2 != 0:
        raise ValidationError(f"El número {value} no es par")

# Create your models here.
class Checkin(models.Model):
    nhotel = models.CharField(max_length=100, validators=[MinLengthValidator(2)])
    ncliente = models.CharField(max_length=100, validators=[MinLengthValidator(2)])
    dni = models.CharField(max_length=9, validators=[MinLengthValidator(9)])
    fechaEntrada = models.DateField()
    fechaSalida = models.DateField()
    precio = models.DecimalField(max_digits=5, decimal_places=2)
    numclientes = models.IntegerField(validators = [valida_par])
