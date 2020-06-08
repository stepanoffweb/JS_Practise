$('li:first').after($('<ul><li class="navy">NavyNavyNavy<br>NavyuNavy</li></ul>')).text('lorem1005000')
$('body').css({
  fontSize: '26px',
  fontWeight: 'bold'
})
// $('button').click(function() {
// 	console.log('Ты кликнул на кнопку');
// }); // Клик мышью

// $('button').dblclick(function() {
// 	console.log('Ты кликнул на кнопку дважды');
// }); // Двойной клик мышью

$('ul li').mouseenter(function (event) {
  $(this).css('color', 'red')
}) // Наведение мыши на элемент

$('ul li').mouseleave(function (event) {
  $(this).css('color', 'brown')
}) // Наведение мыши на элемент

$('ul > li.navy').mouseenter(function (event) {
  $(this).css({
    color: 'yellow',
    // backgroung: '#dedede',
    height: '85px'
  })
}) // UL не имеет фона???

$('ul li').mousedown(function (event) {
  $(this).css('color', 'purple')
}) // Момент нажатия кнопки мыши

$('ul li').mouseup(function (event) {
  $(this).css('color', '#dedede')
}) // Момент "отжатия" кнопки мыши :)

$('ul li:not(.navy)').mouseover(function (event) {
  $(this).css('color', 'blue')
}) // либо поднять выше mouseenter

$('ul li').mouseout(function (event) {
  $(this).css('color', 'green')
})
$('ul li.crimson').mouseout(function (event) {
  $(this).css('color', 'crimson')
})

$('ul li').mousemove(function (event) {
  $(this).toggleClass('blue')
  console.log($(this).outerWidth())
})
