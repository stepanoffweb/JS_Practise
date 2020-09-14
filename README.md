# JS_Practise [![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
 Содержание проекта подразделяется на ветки с отдельными работоспособными приложениями/ паттернами с законченным функционалом. There will be my own samples of the most common JavaScript tasks (sliders, accordions, tabs, modal windows etc.)
 - ветки с префиксом с_ содержат комплексные проекты с законченным функционалом (complex)
 - ветки с префиксом s_ - модули с несколькими простыми взамиосвязанными операциями (simple)
 - ветки с префиксом е_ - папки с наборои однотипных атомарных операций (elementary)
***
## c_glo_ozone
Простой проект, демонстрирующий возможности JS при выполнении стандартных задач фронтенда: поиск, создание, удаление элементов DOM с применением элементов современного синтаксиса (arrow functions, spread operator, async/await) и модульный подход при работе с проектом со сборкой Webpack'ом.
## c_quiz_lending
Простой проект  на vanilla JS: сбор пользовательских данных в модальном окне с пагинацией и отправка их на сторонний сервер (_firebase.google.com_).
## s_sliders
  - простые примеры различных реализаций слайдеров
## s_animation
  - простые примеры различных анимаций 
## s_constructor
  - приложение позволяет формировать html-блоки с произвольными стилями и текстом, добавляемыми через поля пользовательского ввода
  - используются принципы SOLID (Open-Closed), ООП, модульность и масштабируемость
  - деплой на хостинг firebase (https://english-book-a3618.web.app)
## s_modal_popups
Реализация модальных окон с помощью сторонних библиотек, плагинов, vanillaJS
## s_scroll
Реализация прокрутки на веб-странице средствами JS
## s_chat_app
Обмен данными в режиме реального времени между сервером и подключенными клиентами с использованием библиотеки socket.io
## s_tunes
Простой плеер, воспроизводящий видео mp4/аудио  mp3/ потоковое аудио aac - 'радиостанции'
## s_quiz
ПРиложение - сборщик вопросов от разных пользователей: авторизация, валидация пользовательского ввода, сборка c Webpack, БД Firebase, деплой на хостинг Firebase.
## s_modal_plugins
Модальное окно как плагин на ЧИСТОМ JS/CSS, События, Прототипы, Замыкания, Promise, Делегирование событий.
## s_selector
Создаем плагин Select. Суть плагина - закрытый механизм с открытыми методами, параметрами для удобной работы при минимальном погружении в алгоритм его работы:
в конструктор передать селектор родителя и опции самого создаваемого эл-та и колбэк для обработки выбранного элемента
#№ s_calcs
Различные калькуляторы

## e_event_handle
Набор модулей с различными примерами обработчиков событий
