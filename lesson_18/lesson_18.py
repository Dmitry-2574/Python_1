
# YMAL
import yaml

shopping_list = [
    {        "name": "Молоко",
        "quantity": 2,
        "unit": "литра",
        "category": "Молочные продукты",
        "priority": "высокая"    },    {        "name": "Хлеб",
        "quantity": 1,
        "unit": "буханка",
        "category": "Хлебобулочные изделия", 
        "priority": "средняя"    },    {        "name": "Яблоки",
        "quantity": 1.5,
        "unit": "кг",
        "category": "Фрукты",
        "priority": "низкая"
    }
]
yaml_string = yaml.dump(shopping_list, allow_unicode=True)
print(yaml_string)
