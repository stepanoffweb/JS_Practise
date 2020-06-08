document.addEventListener('click', function (event) {
  const e = event || window.event
  const target = e.target
  if (target.tagName === 'IMG') {
    target.classList.contains('bordered') ? target.classList.remove('bordered') : target.classList.add('bordered')
  }
})

// target.style.display = 'none'
// target.classList.toggle('bordered')
