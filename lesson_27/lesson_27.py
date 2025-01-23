"""
Lesson 27
23.01.2025

ООП. Инкапсуляция. Продолжение.
- Класс "Шифр Цезаря" основанный на сдвиге по таблице кодирования UTF-8
- ord() - возвращает код символа в таблице UTF-8
- chr() - возвращает символ по коду в таблице UTF-8
"""

# print(ord("A"))  # 65
# print(chr(65))  # A


# class UtfCeasarCipher:
#     max_indent = 10

#     def __init__(self):
#         self.__indent_index = 1

#     @property
#     def indent_index(self):
#         return self.__indent_index
    
#     @indent_index.setter
#     def indent_index(self, value: int):
#         if not isinstance(value, int):
#             raise TypeError("Индекс должен быть числом")
        
#         if abs(value) > self.max_indent:
#             raise ValueError(f"Индекс сдвига должен быть меньше {self.max_indent}")
        
#         self.__indent_index = value

#     def __shift_indent(self, message: str, direction: bool):
#         """
#         Приватный метод для сдвига всего послания на __indent_index
#         :param message: текст сообщения
#         :param direction: True - кодируем, False - декодируем
#         :return: Результат
#         """

#         result = ""

#         for char in message:
#             # chr - возвращает символ по коду в таблице UTF-8
#             # ord - возвращает код символа в таблице UTF-8
#             if direction:
#                 new_char = chr(ord(char) + self.__indent_index)
#             else:
#                 new_char = chr(ord(char) - self.__indent_index)

#             result += new_char

#         return result
    
#     def encode(self, message: str) -> str:
#         """
#         Публичный интерфейс для взаимодействия с классом
#         Метод кодирования
#         :param message: текст сообщения
#         :return: Результат
#         """
#         return self.__shift_indent(message, True)
    
#     def decode(self, message: str) -> str:
#         """
#         Публичный интерфейс для взаимодействия с классом
#         Метод декодирования
#         :param message: текст сообщения
#         :return: Результат
#         """
#         return self.__shift_indent(message, False)



# # Тестируем
# if __name__ == "__main__":
#     cipher = UtfCeasarCipher()
    
#     while True:
#         # Тут 2 потенциальных места для исключений
#         # 1. Ввод индекса сдвига - int - ValueError
#         # 2. Установка в Setter - ValueError
#         try:
#             indent = int(input("Введите индекс сдвига: "))
#             cipher.indent_index = indent

#         except ValueError as e:
#             print(e)
#             print("Индекс сдвига должен быть числом")
#             continue

#         user_message = input("Введите сообщение: ")
#         encoded_message = cipher.encode(user_message)
#         decoded_message = cipher.decode(encoded_message)

#         print(f"Закодированное сообщение: {encoded_message}")
#         print(f"Декодированное сообщение: {decoded_message}")
"""
ООП. Инкапсуляция. Продолжение.
- Класс "Шифр Цезаря" основанный на сдвиге по таблице кодирования UTF-8
- ord() - возвращает код символа в таблице UTF-8
- chr() - возвращает символ по коду в таблице UTF-8

Employee и  Organisaton как пример взаимодействия классов
Класс ManagerEmployee и потребность в наследовании при незначительных вариациях логики и атрибутов
Базовый пример наследования в коде. DRY - избегаем повторения кода (а так же сложных аннотаций типов)
"""
# class Employee:
#     def __init__(self, name: str, age: int, salary: int | float, position: str):
#         self.name = name
#         self.age = age
#         self.salary = salary
#         self.position = position

#     def __str__(self):
#         return f"Сотрудник: {self.name}, возраст: {self.age}, зарплата: {self.salary}, должность: {self.position}"

#     def drink_coffee(self):
#         print(f"{self.name} в должности {self.position} выпил кофе")

#     def work(self):
#         print(f"{self.name} поработал")


# class ManagerEmployee(Employee):
#         def hit_coworker(self, coworker):
#             print(f"{self.name} ударил {coworker.name}")

#         def work(self):
#             print(f"{self.name} мотивирует коллег")


# class Accountant(Employee):
#     def work(self):
#         print(f"{self.name} считает деньги")


# class Organisaton:
#     def __init__(self, name: str, employees: list[Employee]):
#         self.name = name
#         self.employees = employees

#     def add_employee(self, employee: Employee):
#         self.employees.append(employee)

#     def delete_employee(self, employee: Employee):
#         self.employees.remove(employee)


# # Тест
# organisation = Organisaton("ООО Рога и Копыта", [])
# # Создадим сотрудников
# base_employee = Employee("Андрей", 25, 100000, "Программист")
# manager_employee = ManagerEmployee("Владимир", 30, 150000, "Менеджер")
# accountant = Accountant("Алексей", 35, 120000, "Бухгалтер")

# # Добавим сотрудников в организацию
# organisation.add_employee(base_employee)
# organisation.add_employee(manager_employee)
# organisation.add_employee(accountant)

# # Вызов метода работа
# [employee.work() for employee in organisation.employees]


"""
ООП. Инкапсуляция. Продолжение.
- Класс "Шифр Цезаря" основанный на сдвиге по таблице кодирования UTF-8
- ord() - возвращает код символа в таблице UTF-8
- chr() - возвращает символ по коду в таблице UTF-8

Employee и  Organisaton как пример взаимодействия классов
Класс ManagerEmployee и потребность в наследовании при незначительных вариациях логики и атрибутов
Базовый пример наследования в коде. DRY - избегаем повторения кода (а так же сложных аннотаций типов)
Animal и Dog базовый вариант наследования
self.__class__.__name__
"""

class Animal:
    def voise(self):
        # self. - экземпляр
        # __class__ обращение к своему классу
        # __name__ получение имени класса в виде строки
        print(f"{self.__class__.__name__} подаёт голос")


class Dog(Animal):
    pass


dog = Dog()
animal = Animal()
dog.voise() # Dog подает голос
animal.voise() # Animal подает голос
