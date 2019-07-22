const btn = document.getElementById('result'),
inputs = document.getElementsByTagName('input'),
kkalOutput = document.getElementById('kkal'),
costOutput = document.getElementById('cost');

btn.onclick = getResult;

getResult();
function getResult () {
    let kkal =0,
        cost = 0;
    for (let i = 0; i < inputs.length; i++) {
        console.log(inputs.length);
        if (inputs[i].checked) {
            console.log(inputs[i].getAttribute('data-kkal'));
            kkal += parseFloat(inputs[i].getAttribute('data-kkal'));
            cost += parseFloat(inputs[i].getAttribute('data-cost'));
            }
        }

    kkalOutput.innerText = kkal;
    costOutput.innerText = cost;
}


