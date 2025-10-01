palabras = ["hola", "maripili", "travesti", "hipotalamo"]


def procesar_palabras(palabras):
    palabras_con_a = []
    palabras_con_5_letras = []
    
    for palabra in palabras:

        if 'a' in palabra.lower():
            palabras_con_a.append(palabra)
        
        if len(palabra) >= 5:
            palabras_con_5_letras.append(palabra)
    
    resultado = (palabras_con_a, palabras_con_5_letras)
    print(resultado)
    return resultado


print("\nProcesando palabras:")
procesar_palabras(palabras)
