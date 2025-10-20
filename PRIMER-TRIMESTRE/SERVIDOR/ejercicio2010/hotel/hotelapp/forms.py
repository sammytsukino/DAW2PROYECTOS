from django import forms
from hotelapp.models import Checkin


class CheckinForm(forms.ModelForm):
    class Meta:
        model = Checkin
        fields = "__all__"
        labels = {
            "nhotel": "Nombre del hotel",
            "ncliente": "Nombre del cliente",
            "dni": "DNI"
        }

        widgets = {
            "fechaEntrada": forms.DateInput(attrs={"type": "date"}),
            "fechaSalida": forms.DateInput(attrs={"type": "date"}),
        }

        error_messages = {
            "dni": {
                "max_length" : "El DNI es demasiado largo",
                "min_length" : "El DNI es demasiado corto, debería tener %(limit_value)d"
            }
        }

