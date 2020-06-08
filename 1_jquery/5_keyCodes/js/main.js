$('input').keydown(function (event) {
  console.log($(this).val())
}) // !!! консоль после отпускания запишет предыдущий знак! -> последний знак не поймается!!! Только код клавиши!

// $('input').keyup(function(event) {
// 	$('p.text-place').text($(this).val())
// }); // Клавиша больше не в нажатом состоянии

$('input').keypress(function (event) {
  console.log(event.which)
}) // поведение как у keydown но! позволяет брать коды символов
