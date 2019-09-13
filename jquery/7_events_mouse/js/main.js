/* ====== События, связанные с мышью ===== */

$('.btn-first').click(function() {
    $(document).text('Hello, friend!');
}); // Клик мышью

$('.btn-second').dblclick(function() {
    console.log('Ты кликнул на вторую кнопку дважды');
}); // Двойной клик мышью

$('ul li').mousedown(function(event) {
    $(this).css('color', 'red');
}); // Момент нажатия кнопки мыши

$('ul li').mouseup(function(event) {
    $(this).css('color', '#333');
}); // Момент "отжатия" кнопки мыши

$('ul li').mouseover(function(event) {
    $(this).css('color', 'blue');
}); // Мышь наезжает на площадь элемента

$('ul li').mouseout(function(event) {
    $(this).css('color', 'black');
}); // Мышь покидает площадь элемента

$('ul li').mouseenter(function(event) {
    $(this).css('color', 'yellow');
}); // As the .mouseenter() method is just a shorthand for .on( "mouseenter", handler ), detaching is possible using .off( "mouseenter" )

$('ul li').mouseleave(function(event) {
    $(this).css('color', 'yellow');
});
// The 'mouseenter' event differs from 'mouseover' in the way it handles event bubbling. If 'mouseove'r' were used, then when the mouse pointer moved over the Inner element, the handler would be triggered. This is usually undesirable behavior. The 'mouseenter' event, on the other hand, only triggers its handler when the mouse enters the element it is bound to, not a descendant. So in this example, the handler is triggered when the mouse enters the Outer element, but not the Inner element.

$('ul li').mousemove(function(event) {
    $(this).toggleClass('green');
}); // Движение мыши над элементом
