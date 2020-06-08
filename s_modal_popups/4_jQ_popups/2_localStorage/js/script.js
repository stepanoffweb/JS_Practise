$(document).ready(function () {
  console.log(localStorage.getItem('agreeBtn'));
  if (localStorage.getItem('agreeBtn') != 1) {
    // localStorage.clear();
    setTimeout(function () {
      $('#exampleModal').modal('show')
      $('#agree-btn').on('click', function () {
        localStorage.setItem('agreeBtn', 1)
        $('#exampleModal').modal('hide')
      })
    }, 4000)
    return
  }
  alert('Hello, my friend!!! You see - I remember you :)')
})

// Это хранилище актуально для всех страниц сайта (домена) и => скрипт нужно подключать к каждой. Лучше проверку проводить при загрузке страницы и не грузить лишний код.
