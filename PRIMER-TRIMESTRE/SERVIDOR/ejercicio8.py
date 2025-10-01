class CuentaBancaria:
    def __init__(self, titular, nombre_banco, saldo):
        self.titular = titular
        self.nombre_banco = nombre_banco
        self.saldo = saldo

    def ingresarDinero(self, cantidad):
        self.saldo += cantidad
        print(self.saldo)

    def retirarCantidad(self, cantidad):
        self.saldo -= cantidad
        print(self.saldo)

cuentaA = CuentaBancaria("Sammy", "Santander", 3000)

cuentaA.ingresarDinero(40)
cuentaA.retirarCantidad(200)

print(cuentaA.saldo)