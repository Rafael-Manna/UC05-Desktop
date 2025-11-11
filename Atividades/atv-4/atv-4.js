function voltarPagina() {
    window.location.href = "../../desktop/index.html";
}

function calculadora() {
    const visor = document.getElementById('visor');

    //botao de limpar
    const limpar = document.getElementById('limpar');
    limpar.addEventListener('click', () => {
        visor.value = "";
    });

    // botao c
    const backspace = document.getElementById('backspace');
    backspace.addEventListener('click', () => {
        visor.value = visor.value.slice(0, -1);
    });

    // botoes numericos
    const numeros = document.querySelectorAll('.num');
    numeros.forEach(botao => {
        botao.addEventListener('click', () => {
            visor.value += botao.textContent;
        });
    });

    // Botoes de operadores
    const operadores = document.querySelectorAll('.op');
    operadores.forEach(botao => {
        botao.addEventListener('click', () => {
            visor.value += botao.textContent;
        });
    });

    // botao igual
    const igual = document.getElementById('igual');
    igual.addEventListener('click', () => {
        try {
            // Substitui "x" ou "*" por "*" e avalia
            visor.value = eval(visor.value.replace('x', '*'));
        } catch (e) {
            visor.value = "Erro";
        }
    });
}

window.addEventListener('load', calculadora);
