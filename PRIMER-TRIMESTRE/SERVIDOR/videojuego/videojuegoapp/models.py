from django.db import models
from django.core.exceptions import ValidationError


def valida_pegi(value):
    if value < 3 or value > 18:
        raise ValidationError("El número PEGI debe estar comprendido entre 3 y 18.")

class Registro(models.Model):
    nombre_juego = models.CharField(max_length=50)
    plataforma = models.CharField(max_length=20)
    descripcion = models.TextField(max_length=2000)
    url = models.URLField()
    fecha_anuncio = models.DateField()
    fecha_lanzamiento = models.DateField()
    pegi = models.IntegerField(validators=[valida_pegi])
    online = models.BooleanField()
    precio_salida = models.DecimalField(max_digits=4, decimal_places=2)
    precio_actual = models.DecimalField(max_digits=4, decimal_places=2)

    def clean(self):
        super().clean()
        errores = {}
        if self.fecha_lanzamiento < self.fecha_anuncio:
            errores["fecha_lanzamiento"] = "La fecha de lanzamiento debe ser posterior a la fecha de anuncio."
        if self.precio_actual > self.precio_salida:
            errores["precio_actual"] = "El precio actual debe ser menor que el de salida"
        if errores: 
            raise ValidationError(errores)