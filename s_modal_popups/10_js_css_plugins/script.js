const myModal = $.modal({
  title: 'Hello!',
  closable: true,
  content: `<h1>Hello! I'm a new content!</h1>`,
  // width: '900px',
  btns: [
  {text: 'Показать цену', type: 'primary', handler: 'Primary is clicked'},
  {text: 'Удалить', type: 'danger', handler: 'Danger is clicked'}
  ],
  }) // !создается! инстанс


const cards = [
{id:1, text: "Salad", img: 'https://e2.edimdoma.ru/data/ingredients/0000/9296/9296-ed4_wide.jpg?1524483388'},
{id:2, text: "Tomatoes", img: 'https://e1.edimdoma.ru/data/ingredients/0000/2168/2168-ed4_small.jpg?1524484144'},
{id:3, text: "Lemons", img: 'https://e2.edimdoma.ru/data/ingredients/0000/1088/1088-ed4_small.jpg?1487686969'}
]

cards.forEach(card => {
  const wrapper = document.createElement('div')
  wrapper.classList.add('col')
  wrapper.insertAdjacentHTML('afterbegin', `
    <div class="card" >
  <img src="${card.img} class="card-img-top" style="height: 200px;" alt=${card.text}>
  <div class="card-body">
    <h5 class="card-title">${card.text}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary" onClick="(myModal.open())()" >Show price</a>
    <a href="#" class="btn btn-danger" onClick="() => myModal.close()" >Delete</a>
   </div>
   </div> `)
  document.querySelector('.cards').appendChild(wrapper)
})
