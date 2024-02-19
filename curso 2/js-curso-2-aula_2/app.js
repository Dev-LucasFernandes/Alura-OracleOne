let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
};

exibirMensagemInicial = () => {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
};
exibirMensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
        let mensagem =  `Você acertou o número secreto com ${tentativas} ${palavraTentativa}!`
        exibirTextoNaTela('h1', 'Acertou!');
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++
        limparCampo()
    };
};

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
};

limparCampo = () => {
    chute = document.querySelector('input');
    chute.value = '';
}

reiniciarJogo = () => {
    numeroSecreto = gerarNumeroAleatorio()
    limparCampo()
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true);
};








