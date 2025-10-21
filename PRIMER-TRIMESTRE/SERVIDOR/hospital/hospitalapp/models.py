from django.db import models
from django.core.validators import MinLengthValidator
from django.forms import ValidationError

# Create your models here.

def valida_tres(value):
    if value % 3 != 0:
        raise ValidationError(f"El número {value} no es múltiplo de 3")
    
def valida_dosis(value):
    if (value < 1):
        raise ValidationError(f"La dosis {value} debe ser mayor que 1")
    

# Create your models here.
class Registro(models.Model):
    nombre_paciente = models.CharField(max_length=20, validators=[MinLengthValidator(2)])
    apellidos_paciente = models.CharField(max_length=50, validators=[MinLengthValidator(2)])
    dni = models.CharField(max_length=9, validators=[MinLengthValidator(9)])
    fecha_cita = models.DateField()
    hora_cita = models.TimeField()
    medicacion = models.BooleanField()
    medicamento = models.CharField(blank=True)
    dosis = models.IntegerField(blank=True, null=True, validators = [valida_tres, valida_dosis])