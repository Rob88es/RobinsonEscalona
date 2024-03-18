#M2C4

#Ejercicio 1: cree una lista, tupla, flotante, entero, decimal y diccionario.
lista = ['juan', 'jose', 'ramon', 'alberto', 'robinson'] 
print(lista)

tuple = ('juan', 'jose', 'ramon', 'alberto', 'robinson')
print(tuple)

dictionary = {
    'juan' : [65.3,'italia'],
    'jose' : [76.4,'portugal'],
    'ramon' : [83.5,'españa'],
    'alberto' : [63.3,'dominicana'],
    'robinson' : [74,'venezuela']
}
print(dictionary)

entero = int(dictionary['juan'][0])
print(entero)

flotente = float(dictionary['robinson'][0])
print(flotente)

import decimal

decimal_value = decimal.Decimal(dictionary['alberto'][0])
print(decimal_value)


#Ejercicio 2: Redondea tu flotador hacia arriba.
import math

print(math.ceil((dictionary['ramon'][0])))

#Ejercicio 3: Obtén la raíz cuadrada de tu flotador.
print(math.sqrt(flotente))


#Ejercicio 4: Selecciona el primer elemento de tu diccionario.
first_element = list(dictionary.items())
print(first_element[0])

#Ejercicio 5: selecciona el segundo elemento de tu tupla.
print(tuple[1])

#Ejercicio 6: agregue un elemento al final de su lista.
lista.append('gregorio')
print(lista)

#Ejercicio 7: Reemplace el primer elemento de su lista.
lista[0] = 'michelle'
print(lista)

#Ejercicio 8: Ordena tu lista alfabéticamente.
lista.sort()
print(lista)

#Ejercicio 9: utilice la reasignación para agregar un elemento a su tupla.
tuple += ('michelle',)
print(tuple)
