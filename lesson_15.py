
def is_palidrom(word: str) -> bool:
    """
    Проверка слова на палиндром
    :param word: слово для проверки
    """
    word = word.replace(' ','').lower()
    return word == word[::-1]
# Базовая аннотациия
"""
str
"""
user_word = input('Введите слово: ')

if is_palidrom(user_word):
    print(f'{user_word} - это палиндром')
else:
    print(f'{user_word} - это не палиндром')

    

