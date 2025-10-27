

        function pegarDolar() {
            let numero = document.getElementById("numero").value;
            numero = numero / 5.50           
           document.getElementById('receber').innerHTML = ("Valor convertido Para Dolar é: " + numero .toFixed(2) + " $");           
                }
        function pegarEuro() {
            let numero = document.getElementById("numero").value;
            numero = numero / 6.20           
           document.getElementById('receber').innerHTML = ("Valor convertido Para Euro é: " + numero .toFixed(2) + " €");           
                }
        function pegarPeso() {
            let numero = document.getElementById("numero").value;
            numero = numero / 0.27           
           document.getElementById('receber').innerHTML = ("Valor convertido Para Peso Argentino é: " + numero .toFixed(2) + " AR$");           
                }
        function pegarLibra() {
            let numero = document.getElementById("numero").value;
            numero = numero / 7.10           
           document.getElementById('receber').innerHTML = ("Valor convertido Para Libra é: " + numero .toFixed(2) + " £");           
                }
        function pegarFranco() {
            let numero = document.getElementById("numero").value;
            numero = numero / 5.90           
           document.getElementById('receber').innerHTML = ("Valor convertido Para Franco Suíço é: " + numero .toFixed(2) + " CHF");           
                }
       function voltarPagina() {
            window.location.href = "../../desktop/index.html";
        }