from django.http import HttpResponse
from django.shortcuts import render
from hospitalapp.forms import RegistroForm

# Create your views here.
def form(request):
    if request.method == "POST":
        form = RegistroForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponse('''
<html>
  <head><meta charset="utf-8"><title>Enviado</title></head>
  <body style="font-family: system-ui, Arial; background:#fbfcff; padding:24px;">
    <div style="max-width:720px;margin:40px auto;padding:20px;background:#fff;border-radius:8px;box-shadow:0 6px 18px rgba(0,0,0,0.04);text-align:center;">
      <h1 style="color:#0b5ed7;margin-bottom:8px;">Formulario enviado correctamente</h1>
      <p style="color:#4b5563;">Gracias. La cita se ha registrado.</p>
    </div>
  </body>
</html>
''')
    else:
        form = RegistroForm()
    return render(request, "hospitalapp/form.html", {"form": form})