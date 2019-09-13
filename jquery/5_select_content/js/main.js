/* ====== Фильтры ===== */

/* Фильтры по содержимому в jQuery */

// $('li:contains(файл)').css('border', 'solid 1px red'); // содержит текст
$('p:empty').text('<h1>Любой текст</h1>')  // пустой
// $('h2:has(span)').css('border', '1px solid #000'); // имеет внутри селектор
$('span:parent').css('border', '2px solid #000'); // имеет родителя :))

