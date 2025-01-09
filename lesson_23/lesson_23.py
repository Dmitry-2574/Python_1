"""
Lesson 23
09.01.2025

Знакомство с асинхронностью в Python
- asyncio
- await
- async sleep
- aiohttp
- 
"""

# Импортируем модуль для работы с асинхронностью
import asyncio
# Импортируем time.perf_counter()
import time




# Напишем функцию, которая будет выполняться асинхронно
# принемает время выполнения в секундах и название задачи

# async def task(time: int, name: str) -> str:
#     # Выведем сообщение
#     print(f"Начало задачи {name}")
#     # await - позволит перейти к другим задачам
#     # asyncio.sleep - имитация ожидания ввода - вывода
#     await asyncio.sleep(time)
#     # Выведем сообщение
#     print(f"Задача {name} выполнена")
#     return f'{name}: сделано!'


# Функция которая запустит все эти задачи
# async def main():
#     tasks = [task(3, "Пицца"), task(2, "Фильм"), task(1, "Друзья")]
#     results = await asyncio.gather(*tasks)

#     # Выведем результаты
#     print(*results, "Поехали!")


   
    # Выведем результаты
    # print(*results, "Поехали!")

# Функция которая запустит все эти задачи
# async def main():
#     # Условия вечеринки поменялись. Мы приглашаем гостей, когда пицца и фильм есть.
#     # Create task - запустит задачу но дождаться её можно в другом месте
#     pizza = asyncio.create_task(task(3, "Пицца"))
#     film = asyncio.create_task(task(2, "Фильм"))
    
#     # Пока запущены задачи, мы можем выполнять другую логику
#     print("Пицца и фильм в процессе. Как только, так зовем друзей")
    
#     # Но в какой-то момент нам нужно получить результаты ранее запущенных задач
#     # wait - дождется выполнения задачи
#     pizza = await pizza
#     film = await film

#     # Мы дождались 2 задачи и можем пригласить друзей (тоже асинхронно приглашаем 3х друзей
#     # это можно сравнить с whatsap рассылкой :) )
#     print("Приглашаем друзей")
#     friends = await asyncio.gather(
#         task(1, "Друг 1"), task(1, "Друг 2"), task(1, "Друг 3")
#     )

#     print(f"Приглашены друзья: {friends}")
#     print("Вечеринка завершена")
# Мы дождались 2 задачи и можем пригласить друзей (тоже асинхронно приглашаем 3х друзей
    # это можно сравнить с whatsap рассылкой :) )
    # print("Приглашаем друзей")
    # friends = await asyncio.gather(
    #     task(1, "Друг 1"), task(1, "Друг 2"), task(1, "Друг 3")
    # )

    # print(f"Приглашены друзья: {friends}")
    # print("Вечеринка завершена")

# ЗАВТРАК!
# async def main():
#     # Включаем чайник IO bound - оно будет идти конкурентно
#     pot = asyncio.create_task(task(5, "Чайник"))

#     # Достаем колбасу и сыр из холодильника и нарезаем хлеб
#     # CPU bound - оно будет идти последовательно
#     cheese = await task(2, "Сыр и колбаса")
#     bread = await task(2, "Хлеб")

#     # Дождемся чайника
#     hot_water = await pot

#     # Заварить чай
#     # CPU bound - оно будет идти последовательно
#     black_tea = await task(3, "Чай")


# # Засекаем старт
# start_time = time.perf_counter()
# asyncio.run(main())

# # Финиш
# finish_time = time.perf_counter()

# print(f"Время выполнения программы: {finish_time - start_time:.2f} секунд")

import aiohttp



async def get_url(url: str):
    # async with aiohttp.ClientSession() as session:
    #     async with session.get(url) as response:
    #         return await response.text()
    session = aiohttp.ClientSession()
    response = await session.get(url)
    result = await response.json()
    await session.close()
    
    return result

def get_url_by_city(city: str) -> str:
    url = fr'https://api.openweathermap.org/data/2.5/weather?q={city}&appid=23496c2a58b99648af590ee8a29c5348&units=metric&lang=ru'
    return url
       
async def main():
    
    cities = ['Москва', 'Санкт-Петербург', 'Омск']
    task = [asyncio.create_task(get_url(get_url_by_city(city))) for city in cities]
    results = await asyncio.gather(*task)
    print(results)


# Засекаем старт
start_time = time.perf_counter()
asyncio.run(main())

# Финиш
finish_time = time.perf_counter()

print(f"Время выполнения программы: {finish_time - start_time:.2f} секунд")

