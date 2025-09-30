numero = 2

def imprimirTablaBucle(numero):
    for x in range(1, 11):
        print(f"{numero} x {x} = {numero * x}")

def imprimirTablaComprension(numero):
    resultados = [f"{numero} x {i} = {numero * i}" for i in range(1, 11)]
    print('\n'.join(resultados))

imprimirTablaBucle(2)
imprimirTablaComprension(5)