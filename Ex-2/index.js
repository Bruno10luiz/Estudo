let name = prompt("Qual é seu nome?")
let veiculo1 = prompt("Qual a velocidade do veículo 1? ")
let veiculo2 = prompt("Qual a velocidade do veículo 2? ")

if (veiculo1 > veiculo2){
    alert(name + ", o veículo 1 está mais rápido que o veículo 2.")
}
else if (veiculo2 > veiculo1){
    alert(name + ", o veículo 2 está mais rápido que o veículo 1.")
}
else if (veiculo1 == veiculo2){
    alert(name + ", os veículos estão na mesma velocidade.")
}