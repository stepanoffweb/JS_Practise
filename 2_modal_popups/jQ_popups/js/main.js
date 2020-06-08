/* Всё о всплывающих (модальных) окнах */

/* $(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('button[data-popup="true"]'),
 					close = $('.close-btn');
 	link.on('click', function () {
 		overlay.show();
 		modal.show();
 	});
 	close.click(function() {
 		overlay.hide();
 		modal.hide();
 	});
 });	*/ // Самый простой вариант всплывающего окна

/* $(document).ready(function() {
 	var modal = $('.popup'),
 					overlay = $('.overlay'),
 					link = $('button[data-popup="true"]'),
 					close = $('.close-btn');

 	close.click(function() {
 		modal.toggleClass('popup_active');
 		overlay.hide();
 	});
 	link.on('click', function () {
 		console.log(modal);
 		overlay.show();
 		modal.toggleClass('popup_active');
 	});
 }); */	// Красивое появляение окна

$(document).ready(function () {
 	var modal = $('.popup')
 					var overlay = $('.overlay')
 					var link = $('button')
 					var close = $('.close-btn')
 					var fruitName = $('.fruit-name')
  var $btn = ''

 	close.click(function () {
 		modal.toggleClass('popup_active')
    $('.popup button').removeClass('btn-' + $btn)
 		overlay.hide()
 	})
 	link.on('click', function () {
 		fruitName.text($(this).attr('data-fruit'))
    $btn = $(this).attr('data-btn')
    $('.popup button').addClass('btn-' + $btn)
 		overlay.show()
 		modal.toggleClass('popup_active')
 	})
})// Много кнопок - одно окно
