"""
Урок 18

12.12.2024

Python: CSV и YAML форматы. Конфигурация приложений. Урок: 18


1. YAML конфигурация:
    - Установка и импорт PyYAML
    - pip install py
    - Синтаксис YAML файлов
    - Методы load() и dump()
    - Преимущества над JSON


2. Работа с CSV файлами:
    - Модуль csv и его основные классы
    - DictReader и DictWriter
    - Диалекты CSV
    - Практика с табличными данными

    
3. Создание конфигурации приложения:
    - Структура конфигурационного файла
    - Реализация конфига в YAML
    - Валидация конфигурации
    - Обработка ошибок при чтении

4. Упаковка приложения:
    - Структура проекта с внешним конфигом
    - Настройка PyInstaller
    - Размещение конфига рядом с exe
    - Относительные пути в приложении

5. Практика:
    - Доработка приложения с внешней конфигурацией
    - Реализация чтения/записи CSV
    - Создание YAML конфига
    - Сборка финального приложения
"""

# PyYAML - библиотека для работы c YAML
# pip install pyyaml

# import yaml


# # Список покупок
# shopping_list = [
#     {
#         "name": "Молоко",
#         "quantity": 2,
#         "unit": "литра",
#         "category": "Молочные продукты",
#         "priority": "высокая",
#     },
#     {
#         "name": "Хлеб",
#         "quantity": 1,
#         "unit": "буханка",
#         "category": "Хлебобулочные изделия",
#         "priority": "средняя",
#     },
#     {
#         "name": "Яблоки",
#         "quantity": 1.5,
#         "unit": "кг",
#         "category": "Фрукты",
#         "priority": "низкая",
#     },
# ]

# shop_list = ["молоко", "кефир", "бананы"]

# # Методы yaml

# # yaml.dump() - запись данных в YAML файл
# # yaml.load() - чтение данных из YAML файла

# yaml_string = yaml.dump(shop_list, allow_unicode=True)
# print(yaml_string)

# # Читаем config.yaml и печатаем его
# with open("lesson_18\config.yaml", "r", encoding="utf-8") as file:
#     yaml_data = yaml.load(file, Loader=yaml.Loader)
#     print(yaml_data)


# CITY = yaml_data["city"]
# TIMEOUT = yaml_data["timeout"]

# print(CITY, TIMEOUT)

import csv

table_list = [
    ["first_name", "middle_name", "last_name"],
    ["Владимир", "Александрович", "Монин"],
    ["Семен", "Константинович", "Беляев"],
    ["Дмитрий", "Владимирович", "Бобов"],
    ["Иван", "Петрович", "Бунько"],
    ["Никита", "Федорович", "Вахрамеев"],
    ["Екатерина", "Александровна", "Голосняк"],
    ["Спартак", "Витальевич", "Добровольский"],
    ["Григорий", "Сергеевич", "Калинин"],
    ["Вадим", "Валерьевич", "Козлов"],
    ["Андрей", "Викторович", "Курочкин"],
    ["Размик", "Арпикович", "Мнацаканян"],
    ["Алексей", "Николаевич", "Охонько"],
    ["Даниил", "Дмитриевич", "Рукавишников"],
    ["Алексей", "Владимирович", "Черноусов"],
    ["Павел", "Алексеевич", "Шарапов"],
    ["Кирилл", "Русланович", "Шарахудинов"],
    ["Дмитрий", "Вячеславович", "Юдин"],
]
 
# Список словарей
table_dict = [
    {"first_name": "Владимир", "middle_name": "Александрович", "last_name": "Монин"},
    {"first_name": "Семен", "middle_name": "Константинович", "last_name": "Беляев"},
    {"first_name": "Дмитрий", "middle_name": "Владимирович", "last_name": "Бобов"},
    {"first_name": "Иван", "middle_name": "Петрович", "last_name": "Бунько"},
    {"first_name": "Никита", "middle_name": "Федорович", "last_name": "Вахрамеев"},
    {"first_name": "Екатерина", "middle_name": "Александровна", "last_name": "Голосняк"},
    {"first_name": "Спартак", "middle_name": "Витальевич", "last_name": "Добровольский"},
    {"first_name": "Григорий", "middle_name": "Сергеевич", "last_name": "Калинин"},
    {"first_name": "Вадим", "middle_name": "Валерьевич", "last_name": "Козлов"},
    {"first_name": "Андрей", "middle_name": "Викторович", "last_name": "Курочкин"},
    {"first_name": "Размик", "middle_name": "Арпикович", "last_name": "Мнацаканян"},
    {"first_name": "Алексей", "middle_name": "Николаевич", "last_name": "Охонько"},
    {"first_name": "Даниил", "middle_name": "Дмитриевич", "last_name": "Рукавишников"},
    {"first_name": "Алексей", "middle_name": "Владимирович", "last_name": "Черноусов"},
    {"first_name": "Павел", "middle_name": "Алексеевич", "last_name": "Шарапов"},
    {"first_name": "Кирилл", "middle_name": "Русланович", "last_name": "Шарахудинов"},
    {"first_name": "Дмитрий", "middle_name": "Вячеславович", "last_name": "Юдин"}
]



# запись в csv

with open("table_list.csv", "w", encoding="utf-8-sig") as file:
    writer = csv.writer(file, delimiter=";", lineterminator="\n")
    
    writer.writerows(table_list)


