class Mascota:
    def __init__(self, name, year, owner=None):
        self.name = name
        self.year = year
        self.owner = owner
    
    def calcular_edad(self):
        print(str(2025 - self.year))

    def adoptar(self, owner_name):
        self.owner = owner_name
        print(self.owner)

    def __str__(self):
        return "Mi mascota se llama " + self.name

a = Mascota("Torrija", 2022)
print(a)
a.adoptar("Sammy")
a.calcular_edad()

