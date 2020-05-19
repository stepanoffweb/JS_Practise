$(function() {
    $('form').submit(function(event) {
        event.preventDefault();
        let val1 = $('.form-control').val();
        $.ajax({
            url: './send.php',
            type: 'GET',
            dataType: 'html',
            data: {firstName: val1},
        })
        .done(function(data) {
            console.log(data);
        })
        .fail(function() {
            console.log("error");
        })
        .always(function() {
            console.log("complete");
        });
    });
});
