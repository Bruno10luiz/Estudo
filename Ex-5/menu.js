let opcao = "";

do {
  opcao = prompt(
    "Escolha uma das opções abaixo:\n1)...\n2)...\n3)...\n4)...\n5)Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Você escolheu a opção 1");
      alert("retornando ao menu...");
      break;
    case "2":
      alert("Você escolheu a opção 2");
      alert("retornando ao menu...");
      break;

    case "3":
      alert("Você escolheu a opção 3");
      alert("retornando ao menu...");
      break;

    case "4":
      alert("Você escolheu a opção 4");
      alert("retornando ao menu...");
      break;
    case "5":
      alert("Você escolheu a opção encerrar");
      alert("Encerrando...");
      break;

    default:
      alert("Opção inválida!");
      break;
  }
} while (opcao !== "5");
