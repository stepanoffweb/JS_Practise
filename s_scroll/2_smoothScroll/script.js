document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('.smooth-scroll')

  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault()
      const blockId = e.target.getAttribute('href').substr(1)

      document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    })
  }
})
