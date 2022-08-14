"use strict"

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");

let num1 = 0;
let num2 = 0;
let operator = "";

function operate(num1, num2, operator){
    switch(operator){
        case "+":
            display.innerText = num1 + num2
            break;
        case "-":
            display.innerText = num1 - num2
            break;
        case "*":
            display.innerText = num1 * num2
            break;
        case "/":
            display.innerText = num1 / num2
            break;
    }
}

numbers.forEach(number => {
    number.addEventListener("click", ()=>{
        if(operator === ""){
            if(display.innerText === "0"){
                display.innerText = number.innerText
            }else {
                display.innerText += number.innerText
            }
            num1 = parseInt(display.innerText)
        }else {
            if(num2 === 0){
                display.innerText = number.innerText;
            }else {
                display.innerText += number.innerText;
            }
            num2 = parseInt(display.innerText)
        }
        console.log(num1, num2, operator)

    })
});

operators.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", ()=>{
        operator = operatorBtn.innerText
        if(num1 && num2 && operator){
            operate(num1, num2, operator)
        }
    })
});

equal.addEventListener("click", ()=>{
    if(num1 && num2 && operator){
        operate(num1, num2, operator)
    }
})

clear.addEventListener("click", ()=>{
    display.innerText = 0;
    num1 = 0;
    num2 = 0;
    operator = "";
console.log(num1, num2, operator)

})