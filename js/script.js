function fib(times) {
  if (typeof(times) != 'number' || times == 0 || !Number.isInteger(times) ){
    return '';
  }
    let result = '';
    let num1 = 0, 
        num2 = 1,
        num3 = 0;
    for (let i = 0; i < times ; i++){
        if (i + 1 === times) {
            result += `${num1}`;
        } else {
            result += `${num1} `;
        }   
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
     

        
    }
     
    return result;
}
console.log(fib(4));
