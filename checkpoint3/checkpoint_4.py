# Las preguntas teóricas son:

# ¿Cuál es la diferencia entre una lista y una tupla en Python?
# Listas:   Son mutables, se pueden modificar despues de creadas, añadir y eliminar.
#           Se representan entre corchetes [ ]
#           Son adecualas para dinamicos que necesitan ser modificados
#           ejemplo de datos mutables: ['peso', 'tamaño','direccion']
          
# Tuplas:   Son inmutables, despues de la creacion no se pueden modificar.
#           Se representan entre parentesis ( )
#           Se usan para datos estaticos que no necesitan ser modificados.
#           Ejemplo de datos inmutables: ('dni','fecha_de_nacimiento')


# ¿Cuál es el ord# en de las operaciones?
#   Parentesis   ()
#   Experencial  **
#   Multi        *
#   Division     /
#   Adicion      +
#   Sustraendo   -

# ¿Qué es un diccionario Python?
#       Es una estructura que permite almacenar informacion de forma organizada, se compone compone de una coleccion de clave y valor.
#   las claves dan acceso al valor, tuyos puedes ser cadenas, listas, tuplas, numeros u otras bibliotecas.
#   Se representan entre llaves { }
#   Los Diccionarios son mutables y no tienen un orden definido.
#   un ejemplo donde se muestra clave : valor, y que el valor es una lista con diferentes elementos:
#                       dictionary = {
#                           'juan' : [65.3,'italia'],
#                           'jose' : [76.4,'portugal'],
#                           'ramon' : [83.5,'españa'],
#                           'alberto' : [63.3,'dominicana'],
#                           'robinson' : [74,'venezuela']
#                       }


# ¿Cuál es la diferencia entre el método ordenado y la función de ordenación?
#   metodo ordenado:Se representa con sort() y se usa ordenar las listas. 
#                   Se usa modificando la lista original.
#                   Acepta elementos de clasificacion  como (reverse = True).


#   Funcion de ordenación: Se representa con sorted() y como la anterior se usa para ordenar listas.
#                           La forma de usarla es creando una lista nueva ordenada en una nueva variante, asi no se modifican los elemnentos originales.
#                           Acepta elementos de clasificacion como (reverse = True) aparte de otros especificos de la funcion.        

# ¿Qué es un operador de asignación?
# Los operadores de asignación son se utilizan para asignarle un valor a una variante. Los operadores de asignacion son:
#   =   igualdad el cual asigna o modifica el valor de la variable. ejemplo: # peso = 35
#   += aumenta el valor de la variable. ejemplo: # peso = 35    # peso += 10    # print(peso) # 45
#   -= disminuye el valor de la variable. ejemplo: # peso = 45    # peso -= 10    # print(peso) # 35
#   *= multiplica el valor de la variable. ejemplo: # peso = 5    # peso *= 5    # print(peso) # 25
#   /= divide el valor de la variable. ejemplo: # peso = 25    # peso /= 5    # print(peso) # 5
#   %= Imprime el restante de una division del valor de la variable. ejemplo: # peso = 26    # peso %= 5    # print(peso) # 1
#   **= Saca el experencial el valor de la variable. ejemplo: # peso = 10    # peso **= 10    # print(peso) # 1000


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
