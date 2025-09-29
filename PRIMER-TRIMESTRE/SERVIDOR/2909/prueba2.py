def nombre(a, b, c, d=None):
    return "Hola"

print(f"Hola:{nombre(b=2, c=1, a=4)}")

#List - Array de toda la vida del señor
a = ["a", 2, 3]
print(type(a))

a.append(2)
print(a[0])

#Set - no permite duplicados y ordena strings al final.
b = {"a", 2, 3, 3}
print(b)

#Tupla - no modificable

a = ("a", 2, 3, 3)
print(a[1])

#Diccionarios - Clave:Valor (JSON)

a = {
    "hola": "buenas",
    "adios": 2
}
print(a["hola"])

