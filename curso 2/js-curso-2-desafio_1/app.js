const titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

consoles = () => {
    console.log('O botão foi clicado');
};

alerta = () => {
    alert('Eu amo JS');
};

cidade = () => {
   nome = prompt('Escreva o nome de uma cidade');
   alert(`Eu estive em ${nome} e lembrei de você.`);
};

let resultado = '';
sum = () => {
    alert('escolha dois numeros');
    primeiro = prompt('Primeiro 1');
    segundo = prompt('Segundo 2');
    resultado = Number(primeiro) + Number(segundo);
    alert(`a soma deles é ${resultado}`);
};