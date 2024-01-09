const peso = parseFloat(prompt("Qual é o seu peso?"))
const altura = parseFloat(prompt("Qual é a sua altura em metros?\nexemplo: 1.78"))

let imc = peso / (altura ** 2)

alert("Seu índice de Imc é: " + imc)

if (imc < 18.5){
    alert("Você está abaixo do peso.")
}
else if(imc >= 18.5 &&  imc < 24.9){
    alert("Seu peso está saudável.")
}
else if(imc >= 25 && imc < 29.9){
    alert("Você está com sobrepeso")
}
