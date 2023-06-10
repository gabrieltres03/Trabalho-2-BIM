let inputComprimento = document.querySelector("#inputComprimento");
let inputLargura = document.querySelector("#inputLargura");
let btArea = document.querySelector("#btArea");
let h2Result01 = document.querySelector("#h2Result01");

function calcular(){
    let comprimento = Number(inputComprimento.value);
    let largura = Number(inputLargura.value);
    let calculo = (comprimento * largura);
    h2Result01.innerHTML = ("A área do terreno é: ") + (calculo).toFixed(1) + (" m²");
}

btArea.onclick = function(){
    calcular();
}

