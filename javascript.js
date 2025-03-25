function add(a, b){
    return a + b;
}

function substract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(num1, num2, operator){
    let result;
    switch(operator){
        case '+':
            result = add(num1, num2);
            break;
        case '-':
            result = substract(num1, num2);
            break;
        case '*':
            result = multiply(num1, num2);
            break;
        case '/':
            result = divide(num1, num2);
            break;
        default:
            console.log('error');
    }
    return result;
}


let num1 = null, num2 = null, operator = null, result;
let menu = document.querySelector(".calculator-base");
let display = document.querySelector("div.display");

menu.addEventListener('click', (event) =>{
    let target = event.target;

    if(target.classList.contains("number")){
        if(num1 == null){
            num1 = Number(target.textContent);
            display.textContent = num1;
        }
        else if(num2 == null){
            num2 = Number(target.textContent);
            display.textContent = num2;
        }
    }
    else if(target.classList.contains("operator")){
        if(target.textContent == "="){
            result = operate(num1, num2, operator);
            display.textContent = result;
        }
        else{
            operator = target.textContent;
            display.textContent = operator;
        }
        
    }
    else if(target.classList.contains("clear")){
        console.log("clear button was clicked");
    }
});