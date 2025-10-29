numero = 10

def calcularFactorial(numero):
    if numero < 0:
        return None
    resultado = 1
    
    for i in range(1, numero + 1):
        resultado *= i
    return resultado


print(f"El factorial de {numero} es {calcularFactorial(numero)}")

