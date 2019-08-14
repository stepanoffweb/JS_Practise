'use strict';

// checkbox
const checkbox = document.getElementById('discount-checkbox');

checkbox.addEventListener('change', function() {
    if(this.checked) {
        this.nextElementSibling.classList.add('checked');
    }
    this.nextElementSibling.classList.remove('checked');
});
// end checkbox
// cart
const btnCart = document.getElementById('cart');
const modalCart = document.querySelector('.cart');
const btnClose = document.querySelector('.cart-close');

btnCart.addEventListener('click', () => {
    modalCart.style.cssText = 'display: flex';
    document.body.style.overflow = 'hidden';
});
modalCart.addEventListener('click', () => {
    modalCart.style.cssText = 'display: none';
    document.body.style.overflow = '';
});
// end cart

//  interaction with goods
const cards = document.querySelectorAll('.goods .card'),
    cartWrapper = document.querySelector('.cart-wrapper'),
    cartEmpty = document.getElementById('cart-empty'),
    countGoods = document.querySelector('.counter');

cards.forEach((card) => {
    const btn = card.querySelector('button');
    btn.addEventListener('click', () => {
        const cardClone = card.cloneNode(true);
        cartWrapper.appendChild(cardClone);
        cartEmpty.remove();
        showQuantity();
    });
});

function showQuantity() {
    const cartCards = cartWrapper.querySelectorAll('.card');
     countGoods.textContent = cartCards.length;
}
