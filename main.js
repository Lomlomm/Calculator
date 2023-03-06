

function main(){
    const display = document.querySelector('#display')
    const buttons = document.querySelectorAll('p')

    buttons.forEach(addEventListener("click", (button) => {
        display.textContent += button.textContent
        console.log(button)
    }))


}


function sum(){

}