const display = document.querySelector(".displaytxt");
const buttons = document.querySelectorAll(".number p");
buttons.forEach( (button) =>  {
    button.addEventListener("click", () => {
        display.textContent+=`${button.textContent}`
    })
})

const operators = document.querySelectorAll(".operators .number p");
var selected = "prueba";
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        selected = operator.textContent;
    })
})

function result(){
    const equals = document.querySelector("#equal");
    equals.addEventListener("click", () => {
        var numbers = display.textContent.split(selected)
        var result;
        switch (selected) {
            case "+":
                result = parseFloat(numbers[0]) + parseFloat(numbers[1])
                break;
            case "-":
                result = parseFloat(numbers[0]) - parseFloat(numbers[1])
                break;
            case "/":
                result = parseFloat(numbers[0]) / parseFloat(numbers[1])
                break;
            case "x":
                result = parseFloat(numbers[0]) * parseFloat(numbers[1])
                break;
        }
        display.textContent = result; 
    })
}

function clear(){
    const clear = document.querySelector("#clear")
    clear.addEventListener("click", () => {
        display.textContent = "";
    })
}

result()
clear()