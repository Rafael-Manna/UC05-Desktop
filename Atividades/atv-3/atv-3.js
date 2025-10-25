function pegarMedia(){
    let n1 = parseFloat(document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let n3 = parseFloat(document.getElementById("numero3").value);
    let n4 = parseFloat(document.getElementById("numero4").value);
    let media = (n1 + n2 + n3 + n4) / 4;
    if (media >= 7) {
        document.getElementById('media').innerHTML = "A média das notas é: " + media.toFixed(2) + ". Aluno aprovado!";
    }
    else if (media < 7 && media >= 4) {
        document.getElementById('media').innerHTML = "A média das notas é: " + media.toFixed(2) + ". Aluno em recuperação!";
    }
    else {
        document.getElementById('media').innerHTML = "A média das notas é: " + media.toFixed(2) + ". Aluno reprovado!";
    }
}