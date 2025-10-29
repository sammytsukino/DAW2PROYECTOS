class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def getAge(self):
        print(self.age)

class Student(Person):
    def __init__(self, name, age, schoolName):
        super().__init(name, age)
        self.schoolName = schoolName


a = Person("Pepito", 21)
a.getAge()

b=Student("Juan", 22, "Lora Tamayo")
b.getAge()