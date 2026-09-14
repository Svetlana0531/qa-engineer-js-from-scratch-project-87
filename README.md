# Вычислитель отличий (QA JS)

## Github Actions

[![Node CI](https://github.com/Svetlana0531/qa-engineer-js-from-scratch-project-87/actions/workflows/main.yml/badge.svg)](https://github.com/Svetlana0531/qa-engineer-js-from-scratch-project-87/actions/workflows/main.yml)

## Hexlet tests

[![hexlet-check](https://github.com/Svetlana0531/qa-engineer-js-from-scratch-project-87/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Svetlana0531/qa-engineer-js-from-scratch-project-87/actions)

**Gendiff** — это консольная утилита (CLI), предназначенная для сравнения двух конфигурационных файлов и вывода разницы между ними. Программа умеет находить добавленные, удаленные и измененные ключи, а также работает с глубоко вложенными структурами данных.

Учебный проект Хекслета: https://ru.hexlet.io/programs/qa-engineer-js-from-scratch
Как это должно работать: https://asciinema.org/a/Pe6QypnLEmFWssNAjCOJN1iii

---

## Архитектура и технологии

Проект разработан в рамках обучения на Хекслете и демонстрирует владение ключевыми инженерными практиками:

- **Разработка CLI:** спроектирован удобный интерфейс командной строки, настроен парсинг аргументов и флагов.
- **Работа с данными:** реализована поддержка, валидация и парсинг конфигурационных файлов в форматах **JSON** и **YAML**.
- **Чистая архитектура:** логика приложения строго разделена на независимые слои (чтение -> парсинг -> построение дерева различий (AST) -> форматирование), что делает код масштабируемым и легко поддерживаемым.
- **Автоматическое тестирование:** написана комплексная база **unit-тестов**, полностью покрывающая бизнес-логику и пограничные случаи.

## Стек

- JavaScript

## Установка

```bash
git clone https://github.com/Svetlana0531/qa-engineer-js-from-scratch-project-87.git
cd qa-engineer-js-from-scratch-project-87
```

## Использование

### Here is a demonstration of how the "gendiff" utility works:

https://asciinema.org/a/2G74gwKXDALaLafH

### Here is a demonstration of how the "gendiff" utility works (version with YAML flat comparsion and stylish output):

https://asciinema.org/a/XnPr63WjnB6XsFrF

### Here is a demonstration of "gendiff" output formatted with the --format plain option:

https://asciinema.org/a/0PJtfsCEuZeF5x1D

### Here is a demonstration of "gendiff" JSON output formatting:

https://asciinema.org/a/k7Lccd2I8KtJ0xPZ

---

<details>
<summary>Автоматические тесты Хекслета</summary>

Тесты запускаются на каждый коммит. За запуск отвечает файл `.github/workflows/hexlet-check.yml` — не удаляйте и не переименовывайте ни его, ни репозиторий.

</details>

## О Хекслете

[Хекслет](https://ru.hexlet.io/) — школа программирования: авторские программы обучения с практикой, поддержкой наставников и реальными проектами, которые остаются в резюме. Этот репозиторий — один из таких проектов.
