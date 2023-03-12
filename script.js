//Addition
function add(number1, number2) {
    let sum = number1 + number2;
    return sum;
}
//Subtraction
function sub(number1, number2){
    let sub = number1 - number2;
    return sub;
}
//Multiplication
function multiply(number1, number2){
    let product = number1 * number2;
    return product;
}
//Division
function divide(number1, number2){
    let division = number1 / number2;
    return division;
}

let digit = []
function storeVal(el){
    digit.push(el.value);
    document.getElementById('dis').innerHTML += el.value;
    console.log(digit);
}

let equals = document.getElementById('equal');
equals.addEventListener('click', operate(...digit));
// Clear
function blah(){
    document.getElementById("dis").innerHTML = '';
    digit.length = 0;
}

//Operation
function operate(){
    let firstNumber = +digit[0];
    let secondNumber = +digit[2];
    let operator = digit[1];
    if(operator === '+'){
        document.getElementById("dis").innerHTML = add(firstNumber, secondNumber);
    }
    if(operator === '-'){
        document.getElementById("dis").innerHTML = sub(firstNumber, secondNumber);
    }
    if(operator === '*'){
        document.getElementById("dis").innerHTML = multiply(firstNumber, secondNumber);
    }
    if(operator === '/'){
        document.getElementById("dis").innerHTML = divide(firstNumber, secondNumber);
    }
}