let opcao = ""
let fila = []

do {
    let pacientes = ""
    for (let i = 0; i < fila.length; i++){
        pacientes += (i + 1) + "º - " + fila[i] + "\n"
    }
    opcao = prompt("Pacientes: " + pacientes + "\nEscolha uma opção: \n1. Adicionar paciente \n 2. Consultar paciente \n3. Sair")
    switch(opcao){
        case "1":
        const adicionarPaciente = prompt("Qual o nome do paciente?")
        fila.push(adicionarPaciente)
        break
        case  "2":
        const consultarPaciente = fila.shift()
        alert(consultarPaciente + " foi removido da fila.")
        break
        case "3":
        alert("Saindo do consultório.")
        break
        default:
        alert("Opção inválida. Tente novamente!")
        break
    }
    
}while(opcao !== "3") 


