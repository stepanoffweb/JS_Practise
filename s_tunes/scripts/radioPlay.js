export const radioPlayInit = () => {
  const radio = document.querySelector('.radio')
  const radioCoverImg = document.querySelector('.radio-cover__img')
  const radioHeader = document.querySelector('.radio-header__big')
  const radioNav = document.querySelector('.radio-navigation')
  const radioItem = document.querySelectorAll('.radio-item')
  const radioStop = document.querySelector('.radio-stop')

  const audio = new Audio()
  audio.type = 'audio/aac'

  radioStop.disabled = true // создаем поле и присваиваем значение (в html его НЕТ!)

  const changePlayIcon = () => {
    if (audio.paused) {
      radio.classList.remove('play')
      radioStop.classList.add('fa-play')
      radioStop.classList.remove('fa-stop')
    } else {
      radio.classList.add('play')
      radioStop.classList.add('fa-stop')
      radioStop.classList.remove('fa-play')
    }
  }

  const selectItem = el => {
    radioItem.forEach(item => item.classList.remove('select'))
    el.classList.add('select')
  }

  radioNav.addEventListener('click', ({target}) => {
    // console.log('target: ', target) // срабатывает на img хотя он не включен в input! тоесть - ДВА target!???
    const parent = target.closest('.radio-item')
    selectItem(parent)
    const title = parent.querySelector('.radio-name').textContent
    radioHeader.textContent = title

    const imgUrl = parent.querySelector('.radio-img').src
    radioCoverImg.src = imgUrl

    radioStop.disabled = false // создаем поле и присваиваем значение (в html его НЕТ!)
    audio.src =  target.dataset.radioStation // data-attrs
    audio.play()
    changePlayIcon()
  })

  radioStop.addEventListener('click', () => {
    if (audio.paused) {
      audio.play()
    } else {
      audio.pause()
    }
    changePlayIcon()
  })


}
