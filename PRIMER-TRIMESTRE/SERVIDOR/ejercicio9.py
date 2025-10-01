mis_contactos = {
    "Juan": "123456789",
    "Maria": "987654321",
    "Olivia": "555123456"
}

contacto = {
    "Sammy" : "653085610"
}

class AgendaTelefonica:
    def __init__(self, contactos=None):
        self.contactos = contactos if contactos is not None else {}
    
    def añadir_contacto(self, contacto):
        self.contactos.update(contacto)
    
    def modificar_contacto(self, contacto):
        self.contactos.update(contacto)
    
    def eliminar_contacto(self, nombre):
        self.contactos.pop(nombre)
    

agenda = AgendaTelefonica(mis_contactos)

agenda.añadir_contacto(contacto)

print("Todos los contactos:")
print(agenda.contactos)
print(f"Telefono de Sammy: {agenda.contactos.get('Sammy')}")
