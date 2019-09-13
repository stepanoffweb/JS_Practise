/* ====== События клавиатуры ===== */


$('input').keypress(function(eventObject) {
	console.log(eventObject.which);
}); // Ввод кода СИМВОЛА с клавиатуры

// ввод кодов КЛАВИШ (при смене раскладки НЕ меняются!)
$('input').keydown(function(event) {
	console.log($(this).val())
}); // браузер еще не отобразил а мы уже считали

$('input').keyup(function(event) {
	$('.text-place').text($(this).val())
}); // Клавиша больше не в нажатом состоянии
