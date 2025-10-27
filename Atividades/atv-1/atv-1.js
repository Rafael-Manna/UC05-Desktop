  function pegarNome() {
            let nome = document.getElementById("nome").value;
         document.getElementById('texto').innerHTML = "Seu cartão " + nome + " foi clonado com sucesso!";
        }
        let parouimpar = document.getElementById("botao1");

   function pegarNum() {
            let numero = document.getElementById("numero").value;
            if (numero % 2 == 0) {
                document.getElementById('impopa').innerHTML = ("O numero " + numero + " é par!");
            } else {
                document.getElementById('impopa').innerHTML = ("O numero " + numero + " é impar!");
            }
        }
    function voltarPagina() {
            window.location.href = "../../desktop/index.html";
        }