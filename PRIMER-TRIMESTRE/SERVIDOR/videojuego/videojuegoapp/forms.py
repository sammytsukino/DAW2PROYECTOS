from django import forms
from videojuegoapp.models import Registro


class RegistroForm(forms.ModelForm):
    class Meta:
        model = Registro
        fields = "__all__"
        labels = {
            "nombre_juego" : "Nombre del juego",
            "plataforma" : "Plataforma",
            "descripcion" : "Descripción del juego",
            "url" : "URL de TheGameDB",
            "fecha_anuncio" : "Fecha de anuncio del juego",
            "fecha_lanzamiento" : "Fecha de lanzamiento del juego",
            "pegi" : "Calificación PEGI",
            "online" : "¿Se juega online?",
            "precio_salida" : "Precio de salida",
            "precio_actual" : "Precio actual"
        }   

        widgets = {
            "descripcion": forms.Textarea(attrs={"rows": 3}),
            "fecha_anuncio" : forms.DateInput(attrs={"type": "date"}),
            "fecha_lanzamiento" : forms.DateInput(attrs={"type": "date"})
        }

        error_messages = {
            "nombre_juego" :{
                "max_length" : "El nombre es demasiado largo"
            },

            "plataforma" :{
                "max_length" : "El nombre de la plataforma es demasiado largo"
            },

            "descripcion" :{
                "max_length" : "La descripcion es demasiado larga"
            }
        }

