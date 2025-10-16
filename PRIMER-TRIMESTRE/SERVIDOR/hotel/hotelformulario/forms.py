from django import forms

from hotelformulario.models import Hotel


class HotelForm(forms.ModelForm):
    class Meta:
        model = Hotel
        fields = ["nhotel", "ncliente", "dni", "fechaentrada", "fechasalida", "precio"]
        labels = {
            "nhotel" : "Nombre del hotel",
            "ncliente" : "Nombre del cliente",
            "dni" : "DNI",
            "fechaentrada" : "Fecha de entrada",
            "fechasalida" : "Fecha de salida",
            "precio" : "Precio en euros"
        }

        widgets = {
            "fechaentrada": forms.DateInput(attrs={"type": "date"}),
            "fechasalida": forms.DateInput(attrs={"type": "date"}),
        }



