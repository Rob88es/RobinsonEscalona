1.
string = "hello world"
number = 5
list = [1, 2, 3]
boolean = True
if boolean == True:
    print("Bien hecho, continua")
else:
    print("vuelve a intentarlo")
print(boolean)

2.
exercise_2 = string[0:3]
print(exercise_2)

3.
exercise_3 = list[0]
print(exercise_3)

4.
exercise_4 = number + 10
print(exercise_4)

5.
exercise_5 = list[-1]
print(exercise_5)

6.
names = 'harry,alex,susie,jared,gail,conner'
list_names = names.split(',')
print(list_names)

7.
exercise_7 = string[0:5].upper() + string [5:]
print(exercise_7)

8.
exercise_8 = f"{string} hoy es {number}"
print(exercise_8)

9. 
print(string)


*¿Cuáles son los tipos de Datos en Python?*

Booleanos: son valores logicos que se usan para tomar decisiones.
boolean = True
if boolean == True:
    print("Bien hecho sigue continua")
else:
    print("vuelve a intentarlo")
print(boolean)

numeros: Son los numeros entero o con decimaciones, se les puede aplicar formulas matematicas.
edad = 2024 - 1988
print(edad)

none: Representa un valor especial, que esta ausente. Se usa cuando todavia no tiene un valor asignado.

cademas: Representa texto que se escribe adentro de la variable con comillas simples ('_'), dobles ("_") o incluso triples ("""_""")('''_''').
ejemplo: string = "hello world"

Bytes: Representa datos binarios.

listas: Son colecciones ordenadas de elementos que se presentan dentro de [_], pueden contener numeros, booleanos, cadenas.
Ejemplo de listas [1, "hola", True] [1, 2, 3]

tuplas: Son como las listas pero no se pueden modificar y las envuelven entre parentesis (_)

tambien estan los conjuntos y diccionarios.


*¿Qué tipo de convención de nomenclatura deberíamos utilizar para las variables en Python?*

Usa letras minúsculas para los nombres de variables. ejemplo: nombre_variable

Usa guiones bajos para separar palabras en nombres compuestos. ejemplo: nombre_variable

Elige nombres descriptivos que representen el contenido de la variable. ejemplo: usuario_ingresado


*¿Qué es un Heredoc en Python?*
Es una forma de tener una cadena con varias lineas y que respete los espacios, sin que se creen los espacios al principio y al final del texto.
ejemplo= """
Heredoc

Es una forma de definir cadenas multilínea en Python de forma clara y legible. 

Es especialmente útil para textos largos o fragmentos de código incrustados en una cadena.
"""

*¿Qué es una interpolación de cadenas?*
Es cuanto en una cadena puedes llamar a una o varias variables para que formen parte de la cadena. Como caso practico nos piden crearle un email a los usuarios con su nombre de usuario.
usuario = 'robinson'
email = f'usuario'@devcamp.com
print(email)


*¿Cuándo deberíamos usar comentarios en Python?*
 Cuando queremos explicar el propósito del código y que hace, cuando se quiere indicar que se va a modificar en el futuro alguna funcion y explicar la razon, para mejorar la legibilidad con codigo, y explcar cuando se desactiva una funcionalidad y cuales fueron las razones. 


*¿Cuáles son las diferencias entre aplicaciones monolíticas y de microservicios?* 
Las monolíticas se trabajan en conjunto cerrado, son mas rápidas, mas seguras, se crean mas rápido, pero si alguna falla, falla todo, y para implementar nuevas funciones se tiene que tener un amplio conocimiento de la aplicación. y las de microservicios se elaboran los modulos por separado, lo que permite usar otras tecnologias, el trabajo se puede hacer mas abierto, si un modulo falla los otros van a seguir funcionando.