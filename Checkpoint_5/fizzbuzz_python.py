def Ejercicio_fizzbuzz(max_value):
  for num in range(1, max_value):
    fizz = 3
    buzz = 5
    if num % fizz == 0 and num % buzz == 0:
      print("FizzBuzz")
    elif num % fizz == 0:
      print("Fizz")
    elif num % buzz == 0:
      print("Buzz")
    else:
      print(num)


Ejercicio_fizzbuzz(101)