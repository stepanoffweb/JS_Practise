let nums = document.querySelectorAll('span');

nums.forEach(function(num) {
  let valMax = +num.textContent;
  let val = 0;
  let interval = setInterval ( () =>
    {
    val++;
console.log(val);
    if (val == valMax){
      clearInterval(interval);
    }
    num.innerText = val.toString();
  }, 100);
});



