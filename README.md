# Friend Lee Test

## Начало работы
Эти инструкции помогут вам получить копию проекта и запустить его на вашей локальной машине в целях разработки и тестирования.

## Установка
Пошаговая инструкция, которая показывает, как запустить среду разработки.


Склонируйте репозиторий на свой локальный компьютер.

```bash
git clone https://https://github.com/shtramvasov/friendlee-test.git
````

Установите зависимости

```
npm install
```

## Запуск локально

Чтобы запустить сервер разработки, выполните следующую команду:

```
npm run dev
```

Проект должен запуститься на __`http://localhost:5173`.__

#Сборка для продакшна
Чтобы собрать проект для продакшна, выполните следующую команду:

```
npm run build
```
Скомпилированные файлы будут храниться в директории dist.

___ 

__`Примечание`__: перед запуском проекта необходимо установить все зависимости, выполнив команду `npm install`.