/* ====== Базовые события ===== */
// Обрабатывают не только имевшиеся элементы,но и динамически добавленные т.к. вешаются на document и работают по всплытию

$('ul li').click(function(event) {
	console.log('Ты нажал на элемент');
	$('ul').append('<li>Дополнительный элемент</li>');
});	// click()

function addAndStop(e) {
	$('ul').append('<li>Дополнительный элемент</li>');
	$('ul').off('click');
}

$('ul').on('click', 'li', addAndStop);
