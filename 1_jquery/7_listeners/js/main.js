/* ====== Базовые события ===== */

$('ul li').click(function (event) {
  console.log('Ты нажал на элемент')
  $('ul').append('<li>Дополнительный элемент</li>')
})	// click()

function addAndStop (e) {
  $('ul').append('<li>Дополнительный элемент</li>')
  // обработчик стоит ТОЛЬКО на первичных элементах DOM. На вновь созданные li клики не действуют
  $('ul').off('click')
}
// для проверки события на новых эл-тах li в ul (динамическое приложение/ тема WP):
$('ul').on('click', 'li', addAndStop)

// ===========================
// В HTML документе есть кнопка "Создать картинку". При клике на кнопку нужно создать картинку и еще одну кнопку. На картинке может быть любое изображение, а вторая кнопка содержит текст "Удалить картинку. При клике на свежесозданную кнопку удаляется картинка и сама кнопка.
// =============================
// Создать два input и кнопку "Отправить". Первый инпут содержит имя пользователя, второй его фамилию.
// При нажатии на кнопку "Отправить" вывести в консоль "Имя + фамилия". Внимание, значения полей нужно заносить в ОБЪЕКТ (т.е. массив {} ). Сообщение в консоль нужно вывести при помощи переменных.
$('.btn').click(function () {
  const person = {}
  person.name = $('.name').val()
  person.surname = $('.surname').val()
  console.log(person)
  console.log(person.name, ' + ', person.surname)
})
