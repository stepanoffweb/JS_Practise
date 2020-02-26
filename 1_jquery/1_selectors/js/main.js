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
