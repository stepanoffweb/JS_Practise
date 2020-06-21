const myModal = $.modal({
  title: 'Hello!',
  closable: false,
  }) // !создается! инстанс

document.addEventListener('click', (e) => {
  if (e.target === document.querySelector('.modal-close') || e.target === document.querySelector('.modal-overlay')) {
    myModal.close()
  }
})
