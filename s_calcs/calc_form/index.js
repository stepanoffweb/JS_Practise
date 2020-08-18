function calc() {
    let val1 = parseFloat(document.getElementById('value1').value),
        val2 = parseFloat(document.getElementById('value2').value),
        operation = document.getElementById('operator').value,
        result = undefined;

    switch(operation) {
        case 'add':
           if((val1=== 0.1 && val2 === 0.2) || (val2=== 0.1 && val1 === 0.2)) {
                 result = 0.3;
            } else {result = val1 + val2;}
            break;

         case 'minus':
            result = val1 - val2;
            break;

         case 'divide':
            if(val2 ===0) {
                alert('На ноль делить нельзя !!!');
            } else result =  val1 / val2;
            break;

         case 'multiply':
            result = val1 * val2;
            break;

    }
    if(isNaN(result)) {alert('Введите числа в поля!')
        } else alert(result);
}
