from django import forms
from .models import Animatronic

# AnimatronicForm: formulario para crear y editar animatrónicos
class AnimatronicForm(forms.ModelForm):
    class Meta:
        model = Animatronic
        fields = ['name', 'animal', 'build_date', 'decommissioned']
        # Etiquetas de los campos según enunciado
        labels = {
            'name': 'Name',
            'animal': 'Animal type',
            'build_date': 'Build date',
            'decommissioned': 'Decommissioned',
        }
        # Widget de calendario para el campo build_date
        widgets = {
            'build_date': forms.DateInput(attrs={'type': 'date'}),
        }
        # Mensajes de error personalizados según enunciado
        error_messages = {
            'name': {
                'required': 'The name of the animatronic is required',
                'max_length': 'The name of the animatronic must not be more than 50 characters long',
            },
            'animal': {
                'required': 'The animal type is required',
            },
            'build_date': {
                'required': 'The build date is required',
            },
            'decommissioned': {
                'required': 'The decommissioned status is required',
            },
        }