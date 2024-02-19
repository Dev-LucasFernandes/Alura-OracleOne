alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random()* numeroMaximo + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt(`escolha um número entre 1 e ${numeroMaximo}`);
    if (numeroSecreto == chute) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secrto é maior que ${chute}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

// esse bloco foi trocado pelo operador ternário.
//if (tentativas > 1 ) {
   // alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
   // alert(`Isso ai! você descobriu o numero secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}
 