const display = document.querySelector(".displaytxt");
const buttons = document.querySelectorAll("#num .number p");
buttons.forEach( (button) =>  {
    button.addEventListener("click", () => {
        display.textContent+=`${button.textContent}`
    })
})

const operators = document.querySelectorAll(".operators .number p");
var selected = "prueba";
var num1 = 0; 
operators.forEach((operator) => {
    operator.addEventListener("click", () => {
        selected = operator.textContent;
        num1 = display.textContent
        display.textContent = ""
    })
})

function result(){
    const equals = document.querySelector("#equal");
    equals.addEventListener("click", () => {
        var num2 = display.textContent
        var result;
        switch (selected) {
            case "+":
                result = parseFloat(num1) + parseFloat(num2)
                break;
            case "-":
                result = parseFloat(num1) - parseFloat(num2)
                break;
            case "/":
                result = parseFloat(num1) / parseFloat(num2)
                break;
            case "x":
                result = parseFloat(num1) * parseFloat(num2)
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

function deleteF(){
    const deleteV = document.querySelector("#delete")
    deleteV.addEventListener("click", () => {
        var display_array = display.textContent.split("")
        display_array.pop()
        display.textContent = display_array.join("")
    })
}

deleteF()
result()
clear()