const imoveis = []
let opcao = ""

do {
    opcao = prompt("Existem " + imoveis.length + " imóveis cadastrados no sistema." + "\n1.Adicionar um imóvel" + "\n2.Mostrar todos os imóveis salvos." + "\n3.Sair")
    switch (opcao) {
        case "1":
            const imovel = {}
            imovel.prop = prompt("Qual o nome do proprietário?")
            imovel.quartos = prompt("Quantos quartos existem no imóvel?")
            imovel.banheiro = prompt("Quantos banheiros existem no imóvel?")
            imovel.garagem = prompt("Possui garagem? Sim/Não")

            const confirmacao = confirm("Deseja salvar este imóvel?" +
                "\nProprietário: " + imovel.prop +
                "\nQuartos:" + imovel.quartos +
                "\nBanheiros: " + imovel.banheiro +
                "\nPossui garagem? " + imovel.garagem)

            if (confirmacao) {
                imoveis.push(imovel)
            } else { alert("As informações não foram salvas.") }

            break
        case "2":
            for (let i = 0; i < imoveis.length; i++) {
                alert("Imóvel " + (i + 1) +
                    "\nProprietário: " + imoveis[i].prop +
                    "\nQuartos: " + imoveis[i].quartos +
                    "\nBanheiros: " + imoveis[i].banheiro +
                    "\nPossui garagem? " + imoveis[i].garagem)
            }
            break
        case "3":
            alert("Saindo do sistema...")
            break
        default:
            alert("Opção inválida, por favor digite uma opção válida!")
    }
} while (opcao !== "3")
