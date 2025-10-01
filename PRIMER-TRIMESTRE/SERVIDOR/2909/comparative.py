numero1 = 1
numero2 = 2
numero3 = 15

def compararNumeros(numero1, numero2, numero3):
    if numero1 >= numero2 and numero1 >= numero3:
        print(str(numero1))
    elif numero2 >= numero1 and numero2 >= numero3:
        print(str(numero2))
    else:
        print(str(numero3))

compararNumeros(numero1, numero2, numero3)