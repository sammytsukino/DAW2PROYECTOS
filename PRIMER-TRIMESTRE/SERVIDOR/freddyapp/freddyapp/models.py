from django.db import models

# Modelo Party: representa las fiestas con nombre y número de asistentes
class Party(models.Model):
    name = models.CharField(max_length=100)
    attendants = models.IntegerField()
    
    def __str__(self):
        return f"{self.name} - {self.attendants} attendants"

# Modelo Animatronic: representa los animatrónicos de la pizzería
class Animatronic(models.Model):
    # Opciones para el campo animal (Bear, Chicken, Bunny, Fox)
    ANIMAL_CHOICES = [
        ('BE', 'Bear'),
        ('CH', 'Chicken'),
        ('BU', 'Bunny'),
        ('FO', 'Fox'),
    ]
    
    name = models.CharField(max_length=50)
    animal = models.CharField(max_length=2, choices=ANIMAL_CHOICES)
    build_date = models.DateField()
    decommissioned = models.BooleanField(default=False)
    parties = models.ManyToManyField(Party, blank=True)  # relación muchos a muchos con Party
    
    def __str__(self):
        return self.name