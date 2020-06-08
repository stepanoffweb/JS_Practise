import filter from './filter'

export default function actionPage () {
  const cards = document.querySelectorAll('.goods .card')
  const discountCheckbox = document.getElementById('discount-checkbox')
  const min = document.getElementById('min')
  const max = document.getElementById('max')
  const search = document.querySelector('.search-wrapper_input')
  const searchBtn = document.querySelector('.search-btn')

  // "Акция" filter
  discountCheckbox.addEventListener('click', filter)
  // cost filter
  min.addEventListener('change', filter)
  max.addEventListener('change', filter)

  // goods search
  searchBtn.addEventListener('click', () => {
    const searchText = new RegExp(search.value.trim(), 'i')
    console.log(searchText) // regexpression is created
    cards.forEach((card) => {
      const title = card.querySelector('.card-title')
      if (!searchText.test(title.textContent)) {
        card.parentNode.style.display = 'none'
      } else {
        card.parentNode.style.display = ''
      }
    })
    search.value = ''
  })
}
