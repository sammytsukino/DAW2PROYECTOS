# lee cookies y las hace disponibles en todas las plantillas
def lee_cookie(request):
    tema = request.COOKIES.get('tema', 'nada')
    return {'tema': tema}