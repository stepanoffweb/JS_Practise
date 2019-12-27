$(function() {
    var mCount = $('.m-count'),
        floorNumber = $('.floor-number'),
        typeOfHouse = $('input[name="typeOfHouse"]').val(),
        project = $('input[type="checkbox"]'),
        price = $('#price'),
        basePrice = 15000,
        design = 0,
        finalPrice = function() {
	        return (+mCount.val() * basePrice) * +floorNumber.val() * +typeOfHouse + design;
        };


    mCount.change(function() {
        if ($(this).val() > 20) {
            $(this).tooltip('destroy');
            price.text(finalPrice);
        } else {
            $(this).tooltip('toggle');
        }
    });
    floorNumber.change(function(event) {
        price.text(finalPrice);
    });
    $('input[name="typeOfHouse"]').change(function(event) {
        typeOfHouse = $(this).val();
        price.text(finalPrice);
        if ($(this).val() == 1) {
            $('img').attr('src', 'img/1.jpg');
        } else {
            $('img').attr('src', 'img/2.png');
        }

    });
    project.change(function(event) {
        if ($(this).is(':checked')) {
            design = 15000;
            price.text(finalPrice);
        } else {
            design = 0;
            price.text(finalPrice);
        }
    });

    price.text('900000');
});
