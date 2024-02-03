function tarefa1() {
    let escolha = +prompt(`Informe o Número escolhido!`);
    for (let x = 0; x <= 10; x++) {
        console.log(`${escolha} * ${x} = ${escolha * x}`);
    }
}

function tarefa2() {
    let f = 1;
    let escolha = +prompt(`Informe o Número escolhido!`);
    for (let x = 1; x <= escolha; x++) {
        f = x * f;
    }
    alert(`O fatorial de ${escolha} é: ${f}`);
}

function tarefaBonus() {

    let randomNumber = Math.floor(Math.random() * 100 + 1)
    let tentativas = 1;
    let escolha = +prompt("Escolha um number de 0 a 100");

    while (escolha != randomNumber) {
        
        if (escolha > randomNumber) {
            escolha = +prompt(`Você escolheu um número muito alto.`);
        } else {
            escolha = +prompt(`Você escolheu um número muito baixo.`);

        }
        tentativas++;
    }
    alert(`Parabéns Você Acertou com ${tentativas}!`);

}