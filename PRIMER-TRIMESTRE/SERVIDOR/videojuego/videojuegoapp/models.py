from django.db import models
from django.core.exceptions import ValidationError


def valida_pegi(value):
    if value < 3 or value > 18:
        raise ValidationError("El número PEGI debe estar comprendido entre 3 y 18.")

class Registro(models.Model):
    nombre_juego = models.CharField(max_length=50)
    plataforma = models.CharField(max_length=20)
    descripcion = models.CharField(max_length=2000)
    url = models.URLField()
    fecha_anuncio = models.DateField()
    fecha_lanzamiento = models.DateField()
    pegi = models.IntegerField(validators=[valida_pegi])
    online = models.BooleanField()
    precio_salida = models.DecimalField(max_digits=4, decimal_places=2)
    precio_actual = models.DecimalField(max_digits=4, decimal_places=2)

    def clean(self):
        super().clean()
        if self.fecha_lanzamiento < self.fecha_anuncio:
            raise ValidationError("La fecha de lanzamiento debe ser posterior a la fecha de anuncio.")
        if self.precio_actual > self.precio_salida:
            raise ValidationError("El precio actual no puede ser mayor que el precio de salida")