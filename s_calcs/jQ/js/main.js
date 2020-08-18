$(function () {
  var mCount = $('.m-count')
  var floorNumber = $('.floor-number')
  var typeOfHouse = $('input[name="typeOfHouse"]').val()
  var project = $('input[type="checkbox"]')
  var price = $('#price')
  var basePrice = 30000
  var design = 0

  function finalPrice () {
    return (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design
  }

  mCount.change(function () {
    if ($(this).val() > 20) {
      $(this).tooltip('destroy')
      price.text(finalPrice)
    } else {
      $(this).tooltip('show') // bootstrap's feature
    }
  })
  floorNumber.change(function (event) {
    price.text(finalPrice)
  })
  $('input[name="typeOfHouse"]').change(function (event) {
    typeOfHouse = $(this).val()
    price.text(finalPrice)
    if ($(this).val() == 1) {
      $('img').attr('src', 'img/1.jpg')
    } else {
      $('img').attr('src', 'img/2.png')
    }
  })
  project.change(function (event) {
    if ($(this).is(':checked')) {
      design = 15000
      price.text(finalPrice)
    } else {
      design = 0
      price.text(finalPrice)
    }
  })

  price.text('900000')
})
