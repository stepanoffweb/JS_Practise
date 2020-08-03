const myModal = $.modal({
  title: 'Hello!',
  closable: true,
  content: '<h1>Hello! I\'m a new content!</h1>',
  close () {
    myModal.close()
  },
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

let cards = [
  { id: 1, price: 10, text: 'Salad', img: 'https://e2.edimdoma.ru/data/ingredients/0000/9296/9296-ed4_wide.jpg?1524483388' },
  { id: 2, price: 30, text: 'Tomatoes', img: 'https://e1.edimdoma.ru/data/ingredients/0000/2168/2168-ed4_small.jpg?1524484144' },
  { id: 3, price: 50, text: 'Lemons', img: 'https://e2.edimdoma.ru/data/ingredients/0000/1088/1088-ed4_small.jpg?1487686969' }
]

const render = () => {
  document.querySelector('.cards').innerHTML = ''// иначе каждый рендеринг будет дорисовывать новый массив
  // проще реализовать полную отрисовку подготовленного из массива участка html:
  // const toHtml = card => `
  //     <div class="col"  >
  //       <div class="card"  >
  //         <img src=${card.img} class="card-img-top" style="height: 200px;" alt=${card.text}>
  //         <div class="card-body">
  //           <h5 class="card-title">${card.text}</h5>
  //           <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //           <a href="#" class="btn btn-primary" data-btn="price" data-id=${card.id}>Show price</a>
  //           <a href="#" class="btn btn-danger" data-btn="delete" data-id=${card.id}>Delete</a>
  //          </div>
  //      </div>
  //    </div> `
  // const html = cards.map(toHtml)
  // document.querySelector('.cards').innerHTML = html

  cards.forEach(card => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('col')
    wrapper.insertAdjacentHTML('afterbegin', `
      <div class="card"  >
        <img src=${card.img} class="card-img-top" style="height: 200px;" alt=${card.text}>
        <div class="card-body">
          <h5 class="card-title">${card.text}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-primary" data-btn="price" data-id=${card.id}>Show price</a>
          <a href="#" class="btn btn-danger" data-btn="delete" data-id=${card.id}>Delete</a>
         </div>
     </div> `)

    document.querySelector('.cards').appendChild(wrapper)
  })
}
render()

document.addEventListener('click', e => {
  e.preventDefault()

  const btnType = e.target.dataset.btn
  const id = +e.target.dataset.id
  const card = cards.find(el => el.id === id)

  if (btnType === 'price') {
    myModal.setContent(`Price is: <b style="font-size: 1.5rem"> ${card.price}$ </b>`)
    myModal.setHeader(card.text)
    myModal.open()
  } // зачем нужен else ?
  if (btnType === 'delete') {
    $.confirm({
      title: 'Warning!!!',
      content: '<h1>Do you wanna delete the card?</h1>',
    })
    .then(() => {
      cards = cards.filter(card => card.id != id)
      render()
    }).catch(() => {console.log('reject = canсel')})
  }
})
