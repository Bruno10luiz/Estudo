var char1 = prompt("Escreva o nome do primeiro personagem: ")
let pwr = parseFloat(prompt("Qual o poder de ataque desse personagem?"))
var char2 = prompt("Escreva o nome do segundo personagem: ")
let health = parseFloat(prompt("Qual a quantidade de pontos de vida ele possui?"))
let def = parseFloat(prompt("Qual a quantidade de pontos de defesa ele possui?"))
let shield = confirm("Ele possui um escudo?")

let damage = 0

if (pwr > def && shield === false){
    damage = pwr - def
    
}
else if (pwr > def && shield === true){
    damage = (pwr - def) / 2 
    
}

health -= damage

alert(char1 + " causou " + damage + " pontos de dano em " + char2)
alert(
  char1 + "\nPoder de ataque: " + pwr + "\n\n" +
  char2 + "\nPontos de vida: " + health +
  "\nPoder de defesa: " + def + "\nPossui escudo: " + shield
)