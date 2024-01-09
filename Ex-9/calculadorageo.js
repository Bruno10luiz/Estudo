let menu = ""

function areaTriangulo(base, altura) {
    let resultadoTriangulo = (base * altura) / 2
    return alert("A área do triangulo é de: " + resultadoTriangulo)

}

function areaRetangulo(base, altura) {
    let resultadoRetangulo = base * altura
    return alert("A área do retângulo é de: " + resultadoRetangulo)
}

function areaQuadrado(lado) {
    let resultadoQuadrado = lado * lado
    return alert("A área do quadrado é de: " + resultadoQuadrado)
}

function areaTrapezio(baseMaior, baseMenor, altura) {
    let resultadoTrapezio = (baseMaior + baseMenor) * altura / 2
    return alert("A área do trapézio é de: " + resultadoTrapezio)
}

function areaCirculo(raio) {
    let resultadoCirculo = 3.14 * (raio * raio)
    return alert("A área do círculo é de: " + resultadoCirculo)
}

do {
    menu = prompt("Deseja calcular a área de qual forma geométrica?" +
        "\n1.Area do triângulo" +
        "\n2Área do retângulo." +
        "\n3.Área do quadrado" +
        "\n4.Área do trapézio" +
        "\n5.Área do círculo" +
        "\n6.Sair")
    switch (menu) {
        case "1":
            let baseTriangulo = parseFloat(prompt("Digite a a base do triângulo."))
            let alturaTriangulo = parseFloat(prompt("Digite a a altura do triângulo."))
            areaTriangulo(baseTriangulo, alturaTriangulo)
            break
        case "2":
            let baseRetangulo = parseFloat(prompt("Digite a a base do triângulo."))
            let alturaRetangulo = parseFloat(prompt("Digite a a altura do triângulo."))
            areaRetangulo(baseRetangulo, alturaRetangulo)
            break
        case "3":
            let ladoQuadrado = parseFloat(prompt("Qual o lado do quadrado? "))
            areaQuadrado(ladoQuadrado)
            break
        case "4":
            let baseMaior = parseFloat(prompt("Qual o tamanho da Maior base do Trapézio?"))
            let baseMenor = parseFloat(prompt("Qual o tamanho do menor lado do trapézio?"))
            let alturaTrapezio = parseFloat(prompt("Qual a altura do trapézio?"))
            areaTrapezio(baseMaior, baseMenor, alturaTrapezio)
            break
        case "5":
            let raioCirculo = parseFloat(prompt("Qual o raio do círculo?"))
            areaCirculo(raioCirculo)
            break
        case "6":
            alert("Saindo da calculadora!")
            break
        default:
            alert("Digite uma opção válida!")

    }

} while (menu !== "6")

/*
function calcularAreaTriangulo() {
  const base = parseFloat(prompt("Informe a base do triângulo:"))
  const altura = parseFloat(prompt("Informe a altura do triângulo:"))
  return base * altura / 2

  function calcularAreaRetangulo() {
  const base = parseFloat(prompt("Informe a base do retângulo:"))
  const altura = parseFloat(prompt("Informe a altura do retângulo:"))
  return base * altura
}
function calcularAreaQuadrado() {
  const lado = parseFloat(prompt("Informe a área do quadrado:"))
  return lado * lado
}
}
function calcularAreaTrapezio() {
  const baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"))
  const baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"))
  const altura = parseFloat(prompt("Informe a altura do trapézio:"))
  return (baseMaior + baseMenor) * altura / 2
}
function calcularAreaCirculo() {
  const raio = parseFloat(prompt("Informe o raio do círculo:"))
  return (3.14 * raio * raio)
}
function exibirMenu() {
  return prompt(
    "Calculadora Geométrica\n" +
    "1. Calcular área de triângulo\n" +
    "2. Calcular área de retângulo\n" +
    "3. Calcular área de quadrado\n" +
    "4. Calcular área de trapézio\n" +
    "5. Calcular área de círculo\n" +
    "6. Sair\n"
  )
}
function executar() {
  let opcao = ""

  do {
    opcao = exibirMenu()
    let resultado

    switch (opcao) {
      case "1":
        resultado = calcularAreaTriangulo()
        break
      case "2":
        resultado = calcularAreaRetangulo()
        break
      case "3":
        resultado = calcularAreaQuadrado()
        break
      case "4":
        resultado = calcularAreaTrapezio()
        break
      case "5":
        resultado = calcularAreaCirculo()
        break
      case "6":
        alert("Saindo...")
        break
      default:
        alert("Opção inválida!")
        break
    }

    if (resultado) {
      alert("Resultado: " + resultado)
    }

  } while (opcao !== "6");
} 

executar()
*/