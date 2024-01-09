const turista = prompt("Qual é o seu nome?")
cidades = ""
contagem = 0

let continuar = prompt("Você ja visitou alguma cidade? Sim/Não")

while (continuar === "Sim"){
    let cidade = prompt("Qual cidade você visitou?")

    cidades += "- " + cidade + "\n"
    contagem++

    continuar = prompt("Você ja visitou alguma cidade? Sim/Não")
}
alert("Você visitou " + contagem + " cidades " + "\nVocê visitou as seguintes cidades: " +  "\n" + cidades)