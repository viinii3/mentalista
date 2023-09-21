

    let numeroSecreto = parseInt(Math.random() * 20);
    let tentativas = 3;

    function Chutar() {
    let resultado = document.getElementById("resultado");
    let Chutar = parseInt(document.getElementById("valor").value);
    console.log(Chutar);

    if (Chutar == numeroSecreto) {
        resultado.innerHTML =
        "parabéns você 😀acertou😀... não esqueça de recarregar a pagina para tentar mais uma vez😊";
    } else if (Chutar > 20 || Chutar < 0) {
        resultado.innerHTML = "opa... detectei algo errado aqui🤨, tente digita um numero de 0 a 20";
    } else {
        resultado.innerHTML =
        "ERROOUU infelizmente o número secreto era " +
        numeroSecreto +
        "😫 ...mas não esqueça de recarregar a pagina para tentar novamente😁😏";
    }
    }