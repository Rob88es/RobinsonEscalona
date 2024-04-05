class Usuario:
  def __init__(self, nombre, contraseña):
    self.nombre = nombre
    self.contraseña = contraseña


usuario1 = Usuario("Robinson", "Filiphinas_255")

print(usuario1)             # <__main__.Usuario object at 0x100555550>
print(usuario1.nombre)      # Robinson
print(usuario1.contraseña)  # Filiphinas_255
