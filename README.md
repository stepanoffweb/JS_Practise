# s_quiz
Webpack + html-webpack-plugin + clean-webpack-plugin + muicss

2.  Плавный кроссбраузерный скролл по клику на элемент навикации:
	- получение ID нужного блока из атрибута ссылки на него: getAttribute("href").substr(1)
 - использование нативной браузерной функции scrollIntoView() с параметрами
 - поиск и применение полифила для обеспечения ее работы в отсталых браузерах (IE, Safari, ...) 
  	- Polyfill.io (inline html)
  	- npmjs.com smoothscroll-polyfill (stand-alone file)

## Запуск 
	- скачать папку
	- запустить в браузере index.html из нужной директории
