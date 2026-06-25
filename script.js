let number = parseFloat(prompt("Insira um número: "));

if(number > 0) {
    alert(`${number} é positivo`);
} else if(number < 0) {
    alert(`${number} é negativo`);
} else if(number == 0) {
    alert(`${number} é nulo`);
} else {
    alert("Isto não é um número");
}