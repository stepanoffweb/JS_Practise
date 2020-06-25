const myModal = $.modal({
  title: 'Hello!',
  closable: true,
  content: '<h1>Hello! I\'m a new content!</h1>',
  width: '400px',
  btns: [
  // {text: 'Показать цену', type: 'primary', handler: () => {
  //   myModal.close()
  // } },
    {
      text: 'OK',
      type: 'danger',
      handler () {
        myModal.close()
      }
    }
  ]
}) // !создается! инстанс

const modalDelete = $.modal({
  title: 'Warning!!!',
  content: '<h1>Do you wanna delete the card?</h1>',
  btns: [
    {
      text: 'Cancel',
      type: 'primary',
      handler () {
        modalDelete.close()
      }
    },
    {
      text: 'OK',
      type: 'danger',
      handler () {
        modalDelete.destroy()
        modalDelete.close()
      }
    }
  ]
})

const cards = [
  { id: 1, price: 10, text: 'Salad', img: 'https://e2.edimdoma.ru/data/ingredients/0000/9296/9296-ed4_wide.jpg?1524483388' },
  { id: 2, price: 30, text: 'Tomatoes', img: 'https://e1.edimdoma.ru/data/ingredients/0000/2168/2168-ed4_small.jpg?1524484144' },
  { id: 3, price: 50, text: 'Lemons', img: 'https://e2.edimdoma.ru/data/ingredients/0000/1088/1088-ed4_small.jpg?1487686969' }
]

const listener = {}
cards.forEach(card => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('col')
  wrapper.insertAdjacentHTML('afterbegin', `
    <div class="card" >
  <img src="${card.img} class="card-img-top" style="height: 200px;" alt=${card.text}>
  <div class="card-body">
    <h5 class="card-title">${card.text}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" data-price="price" >Show price</a>
    <a href="#" class="btn btn-danger" data-delete="delete" >Delete</a>
   </div>
   </div> `)
  listener[card.id] = (e) => {
    if (e.target.dataset.price) {
      myModal.open()
      myModal.setContent(`Price is: <b style="font-size: 1.5rem"> ${card.price}$ </b>`)
      myModal.setHeader(card.text)
    }
    if (e.target.dataset.delete) {
      modalDelete.open()
      modalDelete.setContent(`<h1>Do you wanna delete the ${card.text} card?</h1>`)// не работает...
      modalDelete.getNode(e.target.parentNode.parentNode.parentNode)
      modalDelete.getListener(listener[card.id])
    }
  }
  wrapper.addEventListener('click', listener[card.id])
  document.querySelector('.cards').appendChild(wrapper)
})
