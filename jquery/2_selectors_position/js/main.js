/* Взаимодействия с элементами */

$('h1, h2').css('background', '#885522');
$('h2 span').css('color', 'red'); // inner
$('ul  span').css('text-decoration', 'line-through'); // children
$('h2 > span') // child ('daughter')
$('.prev + li').css('background', '#ff0'); // next
$('.text + ul').css('background', '#f0f'); // next
$('.sisters ~ li').css('border', '2px solid #0ff'); // prev ~ nexts ('sisters')
