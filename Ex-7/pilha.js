const baralho = []
let opcao = ""

do{
    opcao = prompt("Cartas no baralho: " + baralho.length + "\n1.Adicionar carta ao baralho." + "\n2.Puxar carta do baralho."
    + "\n3. Sair.")
    switch(opcao){
        case "1": 
        const novaCarta = prompt("Qual o nome da carta?")
        baralho.push(novaCarta)
        break
        case "2":
        const puxarCarta = baralho.pop()
        if (!puxarCarta){
            alert("Não existe nenhuma carta no baralho")

        }else { alert("você puxou um(a) " + puxarCarta)}
        break
        case "3":
        alert("Saindo...")
        break
        default:
        alert("Opção inválida!")
        break
    }

}while( opcao !== "3")