const display = document.querySelector(".displaytxt");
const buttons = document.querySelectorAll(".number p");

buttons.forEach( (button) =>  {
    button.addEventListener("click", () => {
        display.textContent+=`${button.textContent}`
    })
})

function operator(){
    const operators = document.querySelectorAll(".operators .number");
    operators.forEach((operator) => {
        operator.addEventListener("click", () => {
            var selected = operator.textContent
        })
    })
}

function result(){
    const equals = document.querySelector("#equal");
    equals.addEventListener("click", () => {
        var text = display.textContent
        selected 

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