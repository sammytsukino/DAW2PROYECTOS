from django import forms
from .models import Animatronic

# formulario para crear y editar animatronics
class AnimatronicForm(forms.ModelForm):
    class Meta:
        model = Animatronic
        fields = ['name', 'animal', 'build_date', 'decommissioned']
        labels = {
            'name': 'Name',
            'animal': 'Animal type',
            'build_date': 'Build date',
            'decommissioned': 'Decommissioned',
        }
        widgets = {
            'build_date': forms.DateInput(attrs={'type': 'date'}),  # selector de fecha
        }
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