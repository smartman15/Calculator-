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
    switch(operator){
        case '+':
            add(num1, num2);
            break;
        case '-':
            substract(num1, num2);
            break;
        case '*':
            multiply(num1, num2);
            break;
        case '/':
            divide(num1, num2);
            break;
        default:
            console.log('error');
    }
}


let num1 = null, num2 = null, operator = null;
let menu = document.querySelector(".calculator-base");

menu.addEventListener('click', (event) =>{
    let target = event.target;

    if(target.classList.contains("number")){
        if(num1 == null){
            num1 = Number(target.textContent);
        }
        else if(num2 == null){
            num2 = Number(target.textContent);
        }
        console.log(num2);
    }
    else if(target.classList.contains("operator")){
        if(target.textContent == "="){
            result = operate(num1, num2, operator);
        }
        else{
            operator = target.textContent;
        }
        
    }
    else if(target.classList.contains("clear")){
        console.log("clear button was clicked");
    }
});