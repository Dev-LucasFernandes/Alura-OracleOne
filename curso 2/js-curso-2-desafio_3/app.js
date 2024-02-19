
// FUNÇÃO AUX
function exibirTextoNaTela(id, texto) {
    let campo = document.getElementById(id);
    campo.innerHTML = texto;
};

//DESAFIO 1----------------
calcularImc = (altura,peso) => {
    let result = altura / (peso * peso);
    return console.log(result);
};

calcularImc(103,1.70);

//DESAFIO 2-----------------------
fatorial = (n) => {
    let result = n;
    if (n === 0 || n === 1) 
      return 1; 
    while (n > 1) { 
      n--;
      result *= n;
    }
    return console.log(result);
  };
fatorial(8);

//DESAFIO 3 --------------------
conversorDollar = (valor) => {
    const result = valor * 4.80;
    return console.log(result);
};

conversorDollar(3);

//DESAFIO 4-----------------------

perimetroRetangulo = (base, altura) => {
    const result = 2 * (base + altura);
    return exibirTextoNaTela('retangulo',`O perímetro de uma sala retangular é ${result}.`)
};

perimetroRetangulo(4,5)

//DESAFIO 5 ------------------------------------

perimetroCirculo = (raio) => {
    const pi = 3.14
    const result = 2 * pi  * raio
    return exibirTextoNaTela('circulo', `O perímetro de uma sala circular é ${result}`)
}

perimetroCirculo(4);

//DESAFIO 6 --------------------

tabuada = (n) => {
    if (n === 0) {
        exibirTextoNaTela('tabuada', '0 não tem tabuada')
    };
    for (let index = 1; index <= 10; index++) {
        let result = n * index;
       console.log(`${n} x ${index} = ${result}`);
    };
};
tabuada(4);