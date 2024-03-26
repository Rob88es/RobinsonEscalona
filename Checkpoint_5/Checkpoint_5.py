#Cree un bucle For de Python.

i = 0

while i < 5:
  print(i)
  i += 1

  

#Cree una función de Python llamada suma que tome 3 argumentos y devuelva la suma de los 3.
  
def suma(a, b, c):
  return a + b + c


resultado = suma(1, 2, 3)
print(resultado)

#Cree una función lambda con la misma funcionalidad que la función de suma que acaba de crear.

suma = lambda a, b, c: a + b + c

resultado = suma (1, 2, 3)

print(resultado)



#Utilizando la siguiente lista y variable, determine si el valor de la variable coincide o no con un valor de la lista. *Sugerencia, si es necesario, utilice un bucle for in y el operador in.

nombre = 'Enrique'

lista_nombre = ['Jessica', 'Paul', 'George', 'Henry', 'Adán']

encontrado = False

for nombre_lista in lista_nombre:
  if nombre == nombre_lista:
    encontrado = True
    break

if encontrado:
  print("Esta en la lista")
else:
  print("No esta en la lista")