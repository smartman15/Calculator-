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
    if(b == 0) return "Don't divide by 0!!"
    else return a / b;
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


let num1 = "", num2 = "", operator = "", result;
let menu = document.querySelector(".calculator-base");
let display = document.querySelector("div.display");

menu.addEventListener('click', (event) =>{
    let target = event.target;

    if(target.classList.contains("number")){
        // if operator hasnt been pressed yet, assign number to num1
        // else, assign number to num2
        if(operator == ""){
            num1 += target.textContent;
            display.textContent = num1;
        }
        else{
            num2 += target.textContent;
            display.textContent = num2;
        }
    }

    else if(target.classList.contains("operator")){
        // after pressing =, set num1 to result to use for next operations
        // empty num2
        if(target.textContent == "="){
            if(num1 != "" && num2 != "" && operator != ""){
                result = operate(Number(num1), Number(num2), operator);
                
                // if result is a string (due to division by 0, display error)
                if(typeof result == "string"){
                    num1 = "";
                    num2 = "";
                    display.textContent = result;
                }

                // else, do calculations like normal
                else{
                    num1 = result;
                    num2 = "";
                    display.textContent = Math.round(result);
                }
                
            }

            
        }
        else{
            operator = target.textContent;
            display.textContent = operator;
        }
        
    }
    else if(target.classList.contains("clear")){
        num1 = num2 = operator = "";
        display.textContent = "";
    }
});