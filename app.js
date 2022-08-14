"use strict"

const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const display = document.querySelector(".display");

let num1 = "";
let num2 = "";
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
            if(num2 === 0){
                display.innerText = "GET LOST"
            }else {
                display.innerText = num1 / num2
            }
            break;
    }
    console.log(num1, operator, num2)


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
            if(num2 === ""){
                display.innerText = number.innerText;
            }else {
                display.innerText += number.innerText;
            }
            num2 = parseInt(display.innerText)
        }
        console.log(num1, operator, num2)
    })
});

operators.forEach(operatorBtn => {
    operatorBtn.addEventListener("click", ()=>{
        if(num1 != "" && num2 != "" || num2 == 0 && operator != ""){
            operate(num1, num2, operator)
            num1 = parseInt(display.innerText)
            num2 = "";
        }
        operator = operatorBtn.innerText
        console.log(num1, operator, num2)
    })
});

equal.addEventListener("click", ()=>{
    if(num1 != "" && num2 != "" && operator != ""){
        operate(num1, num2, operator)
        num1 = parseInt(display.innerText)
        num2 = "";
    }
    console.log(num1, operator, num2)
})

clear.addEventListener("click", ()=>{
    display.innerText = "0";
    num1 = "";
    num2 = "";
    operator = "";
    console.log(num1, operator, num2)
})