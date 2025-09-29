from os import getcwd

decision = 0

if decision == 0:
    with open("ruti.txt", "w") as f: 
        f.write(getcwd())
elif decision == 1:
    with open("ruta.txt", "r") as f:
        print(f.read())


