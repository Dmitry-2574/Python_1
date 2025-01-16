"""
Lesson 25
16.01.2025

ООП. 
- Методы и атрибуты классов
- Методы и атрибуты экземпляров
- self
- __call__
"""

from email.mime import image


class Dog:
    name = "Бобик"

    def __init__(self, color: str):
        print(f"Обрабатываем в __init__ экземпляр класса {self}")
        self.color = color

    # Посмотрим на полный конструктор. __new__
    def __new__(cls, *args, **kwargs):
        print(f"Создаём экземпляр класса {cls}")
        instance = super().__new__(cls)
        print(f'Это уже созданная собака {instance}')
        return instance

"""
Первый экземпляр
Создаём экземпляр класса <class '__main__.Dog'>
Это уже созданная собака <__main__.Dog object at 0x0000015BC7596B40>
Обрабатываем в __init__ экземпляр класса <__main__.Dog object at 0x0000015BC7596B40>

Второй
Создаём экземпляр класса <class '__main__.Dog'>
Это уже созданная собака <__main__.Dog object at 0x0000015BC7596B70>
Обрабатываем в __init__ экземпляр класса <__main__.Dog object at 0x0000015BC7596B70>
"""

dog = Dog("черный")
dog1 = Dog("белая")
dog1.name = "Стрелка"

Dog.name = "Шарик"

print(dog.name, dog.color)
print(dog1.name, dog1.color)

print(dog1.__class__.name) # Но Шарик мы можем достать - если таки обратиться к классу этого экземпляра

# __dict__ - коллекция которая даст нам все атрибуты экземпляра
print(dog.__dict__) # {'color': 'черный'}
print(dog1.__dict__) # {'color': 'белая', 'name': 'Стрелка'}

print(dir(dog1))  # атрибуты и методы экземпляра

"""
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getstate__', '__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', '__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__setattr__', '__sizeof__', '__str__', '__subclasshook__', '__weakref__', 'color', 'name']
"""

"""
Lesson 25
16.01.2025

ООП. 
- Методы и атрибуты классов
- Методы и атрибуты экземпляров
- self
- __call__
"""


class JpegImage:
    """
    Класс - муляж для демонстрации полиморфизма на примере работы с разными типами изображений
    """

    def __init__(self, file_path: str):
        self.file_path = file_path

    def open(self):
        """
        Метод имитирующий открытие файла
        """
        print(f"Открываем {self.file_path}")

    def crop(self, heigth, width):
        """
        Метод имитирующий обрезку файла
        :param heigth: Выоста
        :param width: ширина
        """
        print(f"Обрезаем файл {self.file_path} до ширины: {width} и высоты {heigth}")


class PngImage:
    """
    Класс - муляж для демонстрации полиморфизма на примере работы с разными типами изображений
    """

    def __init__(self, file_path: str):
        self.file_path = file_path

    def open(self):
        """
        Метод имитирующий открытие файла
        """
        print(f"Открываем {self.file_path}")

    def crop(self, heigth, width):
        """
        Метод имитирующий обрезку файла
        :param heigth: Выоста
        :param width: ширина
        """
        print(f"Обрезаем файл {self.file_path} до ширины: {width} и высоты {heigth}")


image_jpeg_1 = JpegImage("image_1.jpeg")
image_jpeg_2 = JpegImage("image_2.jpeg")
image_png_1 = PngImage("image_1.png")
image_png_2 = PngImage("image_2.png")


images = [image_jpeg_1, image_jpeg_2, image_png_1, image_png_2]

for image in images:
    image.open()
    image.crop(100, 100)




"""
Lesson 25
16.01.2025

ООП. 
- Методы и атрибуты классов
- Методы и атрибуты экземпляров
- self
- __call__
- @classmethod
- @staticmethod
- __call__
- Пример полиморфизма на классах - болванках Image
"""

import json


class JsonFile:
    def __init__(self, file_path: str):
        self.file_path = file_path

    def read(self):
        with open(self.file_path, "r", encoding="utf-8") as file:
            result = json.load(file)
            return result

    def write(self, data: list[dict]):
        with open(self.file_path, "w", encoding="utf-8") as file:
            json.dump(data, file, ensure_ascii=False, indent=4)

    def append(self, data: list[dict]):
        # 0. Проверка типов данных
        if not isinstance(data, list):
            raise TypeError("Метод append принимает только список")
        if not all(isinstance(item, dict) for item in data):
            raise TypeError("Все элементы должны быть словарями")
        # 1. Прочитать файл
        file = self.read()
        # 2. Добавить новые данные
        file.extend(data)
        # 3. Записать в файл
        self.write(file)


data = [
    {"name": "Владимир", "age": 25, "is_married": True},
    {"name": "Андрей", "age": 25, "is_married": True},
]

new_data= [
    {"name": "Алексей", "age": 25, "is_married": True},

]

json_file = JsonFile("data.json")
json_file.write(data)
json_file.append(new_data)
