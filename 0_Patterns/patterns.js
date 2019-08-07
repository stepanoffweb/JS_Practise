window.addEventListener('DOMContentLoaded', function () {

});
// проходим условие на отсутствие значения
function(e) {
  e = e || event;}
// Получаем от пользователя строки в цикле
for (let i=0; i< 7; i++) {
    if (i==2) {
        arr[i] = prompt('Введите число c 3 в начале');
    } else if (i==3) {
        arr[i] = prompt('Введите число с 7 в начале');
    } else {
        arr[i] = prompt('Введите многозначное число');
    }
}
// Выводим в консоль совпадения с шаблоном
for (let i=0; i< arr.length; i++) {
    let re1 = /(^3\d*)/,
        re2 = /(^7\d*)/;
    if (arr[i].match(re1) != null || arr[i].match(re2) != null) {
        console.log(arr[i]);
    }
}
// заполнение массива заданного размера случайными  числами из диапазона:
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

var arr = [];
for (var i = 0; i < 42; i++) {
    arr.push(i);
shuffle(arr);
console.log(arr);}
// Это заполнение массива из N элементов N разными числами в диапазоне от 0 до N, результат такого заполнения называется перестановкой. Получившийся массив не будет содержать случайных чисел, а лишь конкретные числа в случайном порядке.

function random(min, max, l) {
    var arr = [],
        m = [],
        n = 0;
    if (max - min < l - 1) {return;}
    for (var i = 0; i <= (max - min); i++) {m[i] = i + min;}
    for ( i = 0; i < l; i++) {
        n = Math.floor(Math.random() * (m.length));
        arr[i] = m.splice(n, 1)[0];
    }
    return arr;
}
// Создаем массив из L элементов, взятых случайным образом из диапазона [min, max]
// В цикле вводим пользовательские данные с проверколй типов:
// var i = 0;
// do {
//     let costsName = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         costsSum = +prompt("Во сколько обойдется?", '');
//         if (isNaN(costsName) && (typeof(costsName)) != null && (typeof(costsSum)) != null && !isNaN(costsSum) && costsName != '' && costsSum != '' && costsName.length < 50) {
//             appData.expenses[costsName] = costsSum;
//             i++;
//         } else {i--;}
// } while (i < 2);



// То же самое в while:
// var i = 0;
// while (i< 2) {
//     let costsName = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         costsSum = +prompt("Во сколько обойдется?", '');
//         if (isNaN(costsName) && typeof(costsName) != null && typeof(costsSum) != null && !isNaN(costsSum) && costsName != '' && costsSum != '' && costsName.length < 50) {
//             appData.expenses[costsName] = costsSum;
//             i++;
//         } else {
//             i--;
//         }
// }
