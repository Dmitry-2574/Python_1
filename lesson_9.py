"""
Методы словарей
"""

"""
.get(key, default=None) - получает значение по ключу, если ключ не найден возвращает default значение
.keys() - возвращает список всех ключей словаря
.values() - возвращает список всех значений словаря
.items() - возвращает список кортежей (ключ, значение) из словаря
.update(other_dict) - обновляет словарь, добавляя элементы из другого словаря
.pop(key, default=None) - удаляет элемент по ключу и возвращает его значение, если ключ не найден возвращает default

.clear() - очищает словарь (удаляет все элементы)
.copy() - создает поверхностную копию словаря
.setdefault(key, default=None) - возвращает значение ключа, если его нет - создает ключ с default значением
.popitem() - удаляет и возвращает последнюю пару (ключ, значение)
.fromkeys(sequence, value=None) - создает словарь с ключами из sequence и значением value
"""

students = [
    {
        "имя": "Алишер",
        "фамилия": "Нурмагомедов",
        "возраст": 19,
        "хобби": "программирование и киберспорт"
    },
    {
        "имя": "Зарина",
        "фамилия": "Каримова",
        "возраст": 20,
        "хобби": "рисование аниме и косплей"
    },
    {
        "имя": "Тимур",
        "фамилия": "Бекмамбетов",
        "возраст": 18,
        "хобби": "создание видеороликов и монтаж"
    },
    {
        "имя": "Айгуль",
        "фамилия": "Сатыбалдиева",
        "возраст": 21,
        "хобби": "игра на домбре и народные танцы"
    },
    {
        "имя": "Руслан",
        "фамилия": "Ахметов",
        "возраст": 22,
        "хобби": "бокс и шахматы"
    }
]

first_student = students[0]

# Хотим получить имя
name = first_student["имя"]
# Пытаемся получить группу
# group = first_student['группа'] # KeyError

# Попытаемся обработать это исключение
try:
    group = first_student['группа']
except KeyError:
    group = 'Неизвестно'

# Метод get()
group = first_student.get('группа') # None (второй аргумент выставлен по умолчанию)
group = first_student.get('группа', 'Неизвестно') # Неизвестно

############## Update ##############
# Как бы мы обновляли словарь раньше? Отчество и группа


# first_student['отчество'] = 'Алишерович'
# first_student['группа'] = '2-22-2'

new_data = {
    'отчество': 'Алишерович',
    'группа': '2-22-2'
}

first_student['отчество'] = new_data['отчество']
first_student['группа'] = new_data['группа']

first_student.update(new_data)

# Пройдите по списку словарей со студентами, и добавьте каждому ключ "группа" значение на ваш выбор

# for student in students:
#     student['группа'] = 'Блестящие'

[student.update({'группа': 'Ария'}) for student in students]

new_data = [{**student, 'группа': 'Ария'} for student in students]

# Если бы мы не знали что есть распаковка словарей
# Так же если нам надо НЕ ВСЕ ключи, или надо сделать что-то с ключами и или значениями (Допустим заменить ключи на английски :))
new_data = [{ 
                                    "name": student['имя'],
                                    "last_name": student['фамилия'],
                                    "age": student['возраст'],
                                    "hobbies": student['хобби'],
                                    'group': 'Ария',
                                    
                                    } for student in students]

print(new_data)

######### Распаковка словарей #########

# Как это в списках?
fruits = ['apple', 'banana', 'orange']
print(*fruits)
print(fruits[0], fruits[1], fruits[2])

one, *other = fruits

#### Словари

student_a = {
        "имя": "Руслан",
        "фамилия": "Ахметов",
        "возраст": 22,
        "хобби": "бокс и шахматы"
    }

new_data = {
    'отчество': 'Алишерович',
    'группа': '2-22-2'
}

new_student = {**student_a, **new_data}

print(new_student)
print(*new_student)

# Вариант от Ивана
for x in range(len(students)):
    students[x].update(
        {
            'группа': 'Python412'
        }
    )
 

# ОСТАЛОСЬ
# .pop(key, default=None) - удаляет элемент по ключу и возвращает его значение, если ключ не найден возвращает default

# .setdefault(key, default=None) - возвращает значение ключа, если его нет - создает ключ с default значением
# .popitem() - удаляет и возвращает последнюю пару (ключ, значение)
# .fromkeys(sequence, value=None) - создает словарь с ключами из seq