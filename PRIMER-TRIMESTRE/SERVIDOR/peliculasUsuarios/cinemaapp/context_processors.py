def lee_cookie(request):
    tema = request.COOKIES.get('tema', 'nada')
    return {'tema': tema}