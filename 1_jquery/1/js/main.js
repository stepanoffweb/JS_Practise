/* Базовые селекторы */
console.log($.support)
$('body').css('paddingTop', '150px');
$('.wrapper').width(500).css('margin', '0 auto');
// $('p').after($(<span></span>));
// $('span').text('This is Wonderful APPENDING!!!');
    $(".append").css({
        textTransform: 'uppercase',
        fontSize: '55px'
    });
$('p .forward').hide();
$('h1').css({
    textAlign: 'center',
    backgroundColor: '#0f0',
});

// $('a[download]').css('border', '1px solid red'); // Простой атрибут
// $('a[href="http://ya.ru"]').css('border', '1px solid red'); // Полное соответсвие
// $('a[href!="http://ya.ru"]').css('border', '1px solid red'); // Полное несоответствие
// $('a[href^="http"]').css('border', '1px solid red'); // Начинается с ...
// $('a[href$=".com"]').css('border', '1px solid red'); // Заканчивается на ...
// $('a[href*="google"]').css('border', '1px solid red'); // Содержит ...
// $('a[data-target|="main"]').css('border', '1px solid red'); // Имеет префикс - ...
// $('a[href][download]').css('border', '1px solid red'); // Имеет одновременно несколько атрибутов
// $('p:first').css('border', '1px solid red'); // Первый элемент
// $('p:last').css('border', '1px solid red');// Последний элемент
// $('a:eq(2)').css('border', '1px solid red');// Элемент под номером ... (нумерация с 0)
// $('*:not(h2,p)').css('border', '1px solid red');// Исключает из найденных элементов selector
// $('li:odd').css('border', '1px solid red');// Четные найденные элементы
// $('li:even').css('border', '1px solid red'); // Нечетные найденные элементы
// $('li:gt(0)').css('border', '1px solid red');// Элементы чей порядковый номер больше n
// $('li:lt(3)').css('border', '1px solid red');// Элементы чей порядковый номер меньше n
// $('*:header').css('border', '1px solid red');// Только те элементы, которые являются заголовками
// $('li:animated').css('border', '1px solid red'); // Только те элементы, которые задействованы в анимации
// $('li:hidden').css('border', '1px solid red'); // Скрытые элементы
// $('li:visible').css('border', '1px solid red');// Видимые элементы
// $('li:lang(ru)').css('border', '1px solid red'); // Фильтрация по языку
// $('li:contains(файл)').css('border', 'solid 1px red'); // содержит текст
// $('p:empty').text('Любой текст')  // пустой
// $('h2:has(span)').css('border', '1px solid #000'); // имеет внутри селектор
// $('span:parent').css('border', '1px solid #000'); // обращение к родителю??? "если эл-т имеет родителя... бред"
