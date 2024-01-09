let numero = parseFloat(prompt("Você deseja a tabuada de qual número?"))
let resultado = ""

for (let i = 1; i <= 20 ; i++) {
    resultado += "- " + (i * numero) + "\n"
    }
alert("A tabuada do número " + numero + ": " + resultado)