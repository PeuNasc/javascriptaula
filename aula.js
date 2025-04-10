console.log("Bom dia")

alert("Ola!")
let nome = prompt("Qual seu nome? ")
alert("Bom dia " + nome + "!")
confirm("Deseja continuar? ")
console.log(nome)

document.addEventListener('DOMContentLoaded', () => {
    const html = document.querySelector('html')
    const inputDarkMode = document.getElementById('input-dark-mode')
				
    inputDarkMode.addEventListener('change', () => {
        if(inputDarkMode.checked){
            html.setAttribute("dark", "true")
        }else{
            html.removeAttribute("dark")
        }
    })
})