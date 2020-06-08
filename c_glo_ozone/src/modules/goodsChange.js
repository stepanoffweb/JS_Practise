export default function goodsChange() {
    const cards = document.querySelectorAll('.goods .card'),
        cartWrapper = document.querySelector('.cart-wrapper'),
        cartEmpty = document.getElementById('cart-empty'),
        countGoods = document.querySelector('.counter');

    // not optimized - hoisting would be better
    cards.forEach((card) => {
        const btn = card.querySelector('button');
        btn.addEventListener('click', () => {
            const cardClone = card.cloneNode(true),
                removeBtn = cardClone.querySelector('.btn');
            cartWrapper.appendChild(cardClone);
            // cartEmpty.remove();
            showQuantity();

            removeBtn.textContent = 'Удалить из корзины';
            removeBtn.addEventListener('click', () => {
                cardClone.remove();
                showQuantity();
            });
        });
    });

    function showQuantity() {
        const cartCards = cartWrapper.querySelectorAll('.card'),
            cardsPrice = cartWrapper.querySelectorAll('.card-price'),
            cartTotal = document.querySelector('.cart-total span');
        countGoods.textContent = cartCards.length;
        let totalPrice = 0;
        cardsPrice.forEach((cardPrice) => {
            totalPrice += parseFloat(cardPrice.textContent);
            // not optimized - recounting occures every goods adding
        });
        cartTotal.textContent = totalPrice;

        if (cartCards.length) {
            cartEmpty.remove();
        } else {
            cartWrapper.appendChild(cartEmpty);
        }
    }
}
