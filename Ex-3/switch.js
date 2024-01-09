const metros = prompt("Escreva a quantidade em metros a ser convertida: ")
const unidade = prompt("Escreva a unidade medida para ser convertida:\nmilímetro (mm)" +
"\n1) centímetro (cm)" +
"\n2) decímetro (dm)" +
"\n3) decâmetro (dam)" +
"\n4) hectômetro (hm)" +
"\n5) quilômetro (km) ")

switch (unidade) {
    case "1":
      alert("Resultado: " + medida + "m = " + medida * 1000 + "mm")
      break
    case "2":
      alert("Resultado: " + medida + "m = " + medida * 100 + "cm")
      break
    case "3":
      alert("Resultado: " + medida + "m = " + medida * 10 + "dm")
      break
    case "4":
      alert("Resultado: " + medida + "m = " + medida / 10 + "dam")
      break
    case "5":
      alert("Resultado: " + medida + "m = " + medida / 100 + "hm")
      break
    case "6":
      alert("Resultado: " + medida + "m = " + medida / 1000 + "km")
      break
    default:
    alert("Opção inválida!")
    break  
  }