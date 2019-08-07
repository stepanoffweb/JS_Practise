// Remember: AJAX POST requests require a server, so you need  Firefox or Open Server. With GET it's OK:
$(document).ready(function () {
    getRate();
    $('input[type=date]').on('input', getHistoryRate);
});

function getRate () {
    $.get('https://api.coindesk.com/v1/bpi/currentprice.json',
        function (data) {
            data = JSON.parse(data);
            console.log(data);
        }
    );
}

function getHistoryRate () {
    let start = $('#date1').val(),
        end = $('#date2').val();
        console.log(end);
    if(end !== undefined) {
        $.get('https://api.coindesk.com/v1/bpi/historical/close.json',

            {
                'start': start,
                'end': end
            },
            function (data) {
                data = JSON.parse(data);
                console.log(data);
            }
        );
    }
}


