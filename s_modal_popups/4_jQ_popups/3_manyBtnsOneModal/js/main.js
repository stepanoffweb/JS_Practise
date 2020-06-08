/* Всё о всплывающих (модальных) окнах */

/* $(document).ready(function() {
   let modal = $('.popup'),
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
 });  */ // Самый простой вариант всплывающего окна

/* $(document).ready(function() {
   let modal = $('.popup'),
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
 }); */ // Красивое появляение окна

$(document).ready(function () {
  const modal = $('.popup')
  const overlay = $('.overlay')
  const link = $('button')
  const close = $('.close-btn')
  const fruitName = $('.fruit-name')
  let $btn = ''

  link.on('click', function (e) {
    if (e.currentTarget.classList.contains('submit')) {
      overlay.hide()
      $('.popup button').removeClass('btn-' + $btn)
      modal.toggleClass('popup_active')
      return
    }

    fruitName.text($(this).attr('data-fruit'))
    $btn = $(this).attr('data-btn')
    $('.popup button').addClass('btn-' + $btn)
    overlay.show()
    modal.toggleClass('popup_active')
  })

  close.click(function () {
    modal.toggleClass('popup_active')
    $('.popup button').removeClass('btn-' + $btn)
    overlay.hide()
  })
}) // Много кнопок - одно окно
