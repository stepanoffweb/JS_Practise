'use strict';

<<<<<<< HEAD
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
=======
import getData from './modules/getData';
import renderCards from './modules/renderCards';
import renderCatalog from './modules/renderCatalog';
import toggleCheckbox from './modules/toggleCheckbox';
import toggleCart from './modules/toggleCart';
import goodsChange from './modules/goodsChange';
import actionPage from './modules/actionPage';


(async function(){
    const DB = await getData()
        renderCards(DB);
        renderCatalog();
        toggleCheckbox();
        toggleCart();
        goodsChange();
        actionPage();
}());


>>>>>>> master
