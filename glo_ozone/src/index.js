'use strict';

// checkbox
function toggleCheckbox() {
    const checkbox = document.getElementById('discount-checkbox');

    checkbox.addEventListener('change', function () {
        if (this.checked) {
            this.nextElementSibling.classList.add('checked');
        } else {
            this.nextElementSibling.classList.remove('checked');
        }
    });
}
// end checkbox
// cart
function toggleCart() {
    const btnCart = document.getElementById('cart');
    const modalCart = document.querySelector('.cart');
    const btnClose = document.querySelector('.cart-close');

    btnCart.addEventListener('click', () => {
        modalCart.style.cssText = 'display: flex';
        document.body.style.overflow = 'hidden';
    });
    btnClose.addEventListener('click', () => {
        modalCart.style.cssText = 'display: none';
        document.body.style.overflow = '';
    });
}
// end cart

//  interaction with goods
function goodsChange() {
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
// end interaction with goods

function actionPage() {
    const cards = document.querySelectorAll('.goods .card'),
        discountCheckbox = document.getElementById('discount-checkbox'),
        goods = document.querySelector('.goods'),
        min = document.getElementById('min'),
        max = document.getElementById('max'),
        search = document.querySelector('.search-wrapper_input'),
        searchBtn = document.querySelector('.search-btn');

    discountCheckbox.addEventListener('click', () => {
        cards.forEach((card) => {
            if (discountCheckbox.checked && !card.querySelector('.card-sale') || (card.parentNode.style.display === 'none')) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
    });

    // price filter
    min.addEventListener('change', filterPrice);
    max.addEventListener('change', filterPrice);

    function filterPrice() {
        cards.forEach((card) => {
            const cardPrice = card.querySelector('.card-price'),
                price = parseFloat(cardPrice.textContent);
            if((min.value && price < min.value) || (max.value && price > max.value)) {
                // instead of display:none we operate directly with DOM elements:
                card.parentNode.remove();
            } else {
                goods.appendChild(card.parentNode);
            }
        });
    }

    // goods search
    searchBtn.addEventListener('click', () =>  {
        const searchText = new RegExp(search.value.trim(), 'i');
        console.log(searchText); // regexpression is created
        cards.forEach((card) => {
            const title = card.querySelector('.card-title');
            if(!searchText.test(title.textContent)) {
                card.parentNode.style.display = 'none';
            } else {
                card.parentNode.style.display = '';
            }
        });
        search.value = '';
    });
}
// the "Акции" filter
// get data from the server
function getData() {
    const goodsWrapper = document.querySelector('.goods');
    return fetch('../db/db.json')
        .then((response) => {
            if(response.ok) {
                return response.json();
            } else {
                throw new Error("Данные не были получены, ошибка: "+ response.status);
            }
        })
        .then(data => {return data;})
        .catch((err) => {
            console.warn(err);
            goodsWrapper.innerHTML = '<h1 style="background-color: red; color:white; padding:50px">Упс, что-то пошло не так!</h1> ';
        });
}

function renderCards(data){
    const goodsWrapper = document.querySelector('.goods');
    data.goods.forEach((good) => {
        const card = document.createElement('div');
        card.className = 'col-12 col-md-6 col-lg-4 col-xl-3';
        card.innerHTML = `
                        <div class="card" data-category="${good.category}">
                            ${good.sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' :''}
                            <div class="card-img-wrapper">
                                <span class="card-img-top"
                                    style="background-image: url('${good.img}')"></span>
                            </div>
                            <div class="card-body justify-content-between">
                                <div class="card-price">${good.price} ₽</div>
                                <h5 class="card-title">Игровая приставка Sony PlayStation 3 Super Slim</h5>
                                <button class="btn btn-primary">В корзину</button>
                            </div>
                        </div> `;
        goodsWrapper.appendChild(card);
    });
}

function renderCatalog() {
    const cards = document.querySelectorAll('.goods .card'),
        catalogWrapper = document.querySelector('.catalog'),
        catalogList = document.querySelector('.catalog-list'),
        catalogBtn = document.querySelector('.catalog-button'),
        categories = new Set();

    cards.forEach((card) => {
        categories.add(card.dataset.category);
    });
    categories.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        catalogList.appendChild(li);
    });
    catalogBtn.addEventListener('click',(event) => {
        if(!catalogWrapper.style.display) {
            catalogWrapper.style.display = 'block';
        } else {
            catalogWrapper.style.display = '';
        }
        if(event.target.tagName === 'LI') {
            cards.forEach((card) => {
                if(card.dataset.category === event.target.textContent) {
                    card.parentNode.style.display = '';
                } else {
                    card.parentNode.style.display = 'none';
                }
            });
        }
    });
}

getData().then((data) => {
    renderCards(data);
    toggleCheckbox();
    toggleCart();
    goodsChange();
    renderCatalog();
    actionPage();
});
