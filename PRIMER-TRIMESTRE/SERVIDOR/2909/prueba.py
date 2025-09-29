a = 2
b = 3
i=0
c = int(a)
d = None


print("Hola " + str(a))
print("Hola {} buenas tardes".format(a))
print("Hola {hueco1} buenas {hueco2} tardes".format(hueco1=b, hueco2=a))
print(f"Hola {a}, buenas {b}")


if a == 2:
    print("Es igual")
else:
    print("No es igual")

if a == 2:
    print("Es igual")
elif a == 3:
    print("No es igual")

while i < 6:
    print(i)
    i += 1

arr = [2,3,1,5,"hola"]
for i in arr:
    print(i)

print(type(b))

# Esto es un comentario

print(b/a)
print(b//a)
print(b**a)

""" a and b 
a or b
a not in b """

def nombre():
    return "Hola"

nombre()