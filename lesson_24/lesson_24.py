"""
для to_thread() подходят только настоящие I/O операции:

Файловые операции (чтение/запись)
Сетевые запросы
Операции с базами данных
Пользовательский ввод/вывод
Любые другие операции, где есть ожидание внешнего ресурса
"""

# import asyncio

# # Синхронная функция получить строку от пользователя
# def get_user_input():
#     return input("Введите текст: ")

# # Асинхронная функция которая использует to_thread для запуска синхронной функции в отдельном потоке

# async def test_input():
#     task = asyncio.to_thread(get_user_input)
#     print("Пока вы думаете...")
#     print("Код продолжает работать...")
    
#     result = await task
#     print(f"Вы ввели: {result}")


# asyncio.run(test_input())

"""
Lesson 24
14.01.2025
Знакомство с ООП в Python
"""

# Классы
# Класс - это шаблон для создания объектов
# Объект - это экземпляр класса

# Нейминг
"""
UpperCamelCase - для классов
Используем существительные и прилагательные
"""

# class Car:
#     mark = "Ёмобиль" # Поле или атрибут класса

# car = Car()
# car_1 = Car()
# print(car)
# print(type(car))

# print(car_1)

# print(car.mark)
# print(car_1.mark)




"""
 Dunder underscope методы, дандер методы, или магические методы
__init__ - инициализатор
"""

class SimpleCar:
    mark = "Lada"

simple_car_1 = SimpleCar()
simple_car_2 = SimpleCar()

simple_car_1.mark = "BMW"
simple_car_1.color = "red"

print(simple_car_1.mark)
print(simple_car_1.color)

class Car:
    def __init__(self, mark: str, color: str):
        self.mark = mark
        self.color = color
        print(self)

    def drive(self):
        print(f"Машина {self.mark} едет")


# car1 = Car() # TypeError: Car.__init__() missing 1 required positional argument: 'mark'

car1 = Car("BMW", "чёрный")
car2 = Car("Audi", "зелёная")

print(car1.mark)
print(car2.mark)

car1.drive()
car2.drive()       