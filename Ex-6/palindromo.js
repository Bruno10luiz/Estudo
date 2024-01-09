const palavra = prompt("Qual a palavra que deseja checar?")
let palindromo = ""

for(i = palavra.length - 1; i >= 0; i--){
    palindromo += palavra[i]
}
if(palavra === palindromo){
    alert(palavra + " é um palíndromo!")
}else{
    alert(palavra + " não é um palíndromo\n\n" + palavra + "!" )
}