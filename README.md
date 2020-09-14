# s_animation
 * progressBar изменение progress.value через setInterval
 * words_change 
 	- вместо цикла - setInterval
	 - условие в одну строку (если индекс + 1 делится без остатка на длину массива -> он обнуляется! последовательно перебирая
 перед этим значения по нарастающей)
 * backChanging
 	задание рандомного цвета через hsl (hew, saturation, lightness)
 * imgZoom
  	вычисление координат положения курсора для задания transform-origin и примененияscale к данной точке изображения как к его центру 
 * runningLetters
	 разбиение строки slice(0, index) с приращиванием индекса и выдачей результата elem.innerText в цикле setTimeout() 
 * heartsFlow
	 анимация через @keyframes (конечное состояние) + создаем в скрипте div с innerText (emoji) .createElement -> .classList.add() -> .innerText -> .style.animationDuration|transform|left (рандомные значения для каждого элемента с position: fixed) -> .remove() после таймаута равного времени анимации
