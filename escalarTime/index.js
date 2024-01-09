function addPlayer() {
    const position = document.getElementById('position').value
    const name = document.getElementById('name').value
    const number = document.getElementById('number').value

    const confirmacao = confirm("Deseja cadastrar o jogador" + name + " na posição " + position + " com o número " + number)

    if (confirmacao) {
        const teamList = document.getElementById('team-list')
        const playerItem = document.createElement('li')
        playerItem.id = "player-" + number
        playerItem.innerText = name + ": " + position + "(" + number + ")"
        teamList.appendChild(playerItem)
    }


}

function removePlayer() {
    const number = document.getElementById('numberToRemove').value
    const playerToRemove = document.getElementById('player-' + number)

    const confirmacao = confirm("Deseja remover" + playerToRemove.innerText + "?")

    if (confirmacao) {
        document.getElementById('team-list').removeChild(playerToRemove) //playerToRemove.remove()
        document.getElementById('numberToRemove').value = ""
    }
}

