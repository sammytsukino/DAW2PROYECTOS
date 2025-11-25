# Context processor para leer la cookie 'tema' y pasarla a todas las plantillas
def lee_cookie(request):
    tema = request.COOKIES.get('tema', 'nada')
    return {'tema': tema}