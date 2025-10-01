""" Crear una clase CuentaBancaria que tenga los siguientes elementos:
Atributos: titular, nombre_banco y saldo
Métodos: ingresar(cantidad) y retirar(cantidad) """

class cuentaBancaria:
    def __init__(self, titular, nombre_banco, saldo):
        self.titular = titular
        self.nombre_banco = nombre_banco
        self.saldo = saldo

    def ingresarDinero(self, cantidad):
        self.saldo = self.saldo + cantidad
        print(self.saldo)

    def retirarCantidad(self, cantidad):
        self.saldo = self.saldo - cantidad
        print(self.saldo)

cuentaA = cuentaBancaria("Sammy", "Santander", 3000)

cuentaA.ingresarDinero(40)
cuentaA.retirarCantidad(200)