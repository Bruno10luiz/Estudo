let opcao = "";
let carteira = 0;

let dinheiro = parseFloat(
  prompt("Qual a quantidade de dinheiro você possui em caixa?")
);
carteira += dinheiro;
do {
  opcao = prompt(
    "Seja bem-vindo!Seu saldo é de: " +
      "R$" +
      carteira +
      "\nEscolha uma opção para continuar:\n1)Adicionar saldo. \n2)Sacar saldo.\n3)Sair"
  );
  switch (opcao) {
    case "1":
      let addSaldo = parseFloat(prompt("Qual a quantia do depósito?"));
      carteira += addSaldo;
      alert("Tudo certo! Você acrescentou " + addSaldo + " a sua carteira!");
      break;
    case "2":
      let sacSaldo = prompt("Qual a quantia do saque?");
      carteira -= sacSaldo;
      alert("Tudo certo! Você sacou " + sacSaldo + " da sua carteira!");
      break;
    case "3":
      alert("Encerrando aplicativo...");
      break;
    default:
      alert("Opção inválida!");
  }
} while (opcao !== "3");
