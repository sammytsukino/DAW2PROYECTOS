from django import forms

from hospitalapp.models import Registro


class RegistroForm(forms.ModelForm):
    
    class Meta:
        model = Registro
        fields = "__all__"
        labels = {
            "nombre_paciente" : "Nombre del paciente",
            "apellidos_paciente" : "Apellidos del paciente",
            "dni" : "DNI del paciente",
            "fecha_cita" : "Fecha de la cita",
            "hora_cita" : "Hora de la cita",
            "medicacion" : "¿Medicación necesaria?",
            "medicamento" : "Medicamentos a administrar",
            "dosis" : "Dosis a administrar"
        }

        widgets = {
            "fecha_cita": forms.DateInput(attrs={"type": "date"}),
            "hora_cita": forms.TimeInput(attrs={"type": "time"}),
            "medicacion": forms.CheckboxInput(attrs={"class": "form-check-input"}),
        }

        error_messages = {
            "dni": {
                "max_length" : "El DNI es demasiado largo",
                "min_length" : "El DNI es demasiado corto, debería tener %(limit_value)d"
            },

            "nombre_paciente": {
                "max_length" : "El nombre es demasiado largo",
                "min_length" : "El nombre es demasiado corto"
            },

            "apellidos_paciente": {
                "max_length" : "Los apellidos son demasiado largos",
                "min_length" : "Los apellidos son demasiado cortos"
            },
        }
