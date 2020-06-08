/* кое-что о всплывающих (модальных) окнах (не хватает fadeIn| Out по opacity) */

// Самый простой вариант
// $(document).ready(function() {
//     var modal = $('.popup'),
//         overlay = $('.overlay'),
//         link = $('button[data-popup="true"]'),
//         close = $('.close-btn');
//     link.on('click', function() {
//         overlay.show();
//         modal.show();
//     });
//     close.click(function() {
//         overlay.hide();
//         modal.hide();
//     });
// });

// вылет окна из-за края экрана + много кнопок - одно окно (обработчики на элементы по атрибутам 'data-') + вставка текста из значения атрибута кнопки
$(document).ready(function () {
  var modal = $('.popup')
  var overlay = $('.overlay')
  var link = $('button[data-popup="true"]')
  var close = $('.close-btn')
  var fruitName = $('.fruit-name')

  close.click(function () {
    modal.toggleClass('popup_active')
    overlay.hide()
  })
  link.on('click', function () {
    fruitName.text($(this).attr('data-fruit'))
    overlay.show()
    modal.toggleClass('popup_active')
  })
})

// функции jQuery hide()| show() изменяют display: none| block, что не позволяет анимировать появление
