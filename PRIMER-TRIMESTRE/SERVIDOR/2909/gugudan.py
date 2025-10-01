
def imprimirTablaBucle(numero):
    for i in range(1, 11):
        print(f"{numero} x {i} = {numero * i}")

def imprimirTablaComprension(numero):
    resultados = [f"{numero} x {i} = {numero * i}" for i in range(1, 11)]
    print('\n'.join(resultados))

imprimirTablaBucle(2)
imprimirTablaComprension(5)


def imprimirTabla(num):
    [print(f"{num} x {i} = {num*i}") for i in range(11)]

imprimirTabla(7)