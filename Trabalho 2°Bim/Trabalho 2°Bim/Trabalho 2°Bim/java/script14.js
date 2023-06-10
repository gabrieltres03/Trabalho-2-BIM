let inputDivisao = document.querySelector("#inputDivisao");
let btDivisao = document.querySelector("#btDivisao");
let h3Andre = document.querySelector("#h3Andre");
let h3Carlos = document.querySelector("#h3Carlos");
let h3Felipe = document.querySelector("#h3Felipe");

function divisao(){
    let valor = Number(inputDivisao.value);
    let carlos = Math.floor(valor/3);
    let andre = Math.floor(valor/3);
    let felipe = (valor);
    h3Andre.innerHTML =   ('Carlos deve pagar = R$') +  ((carlos).toFixed(2))
    h3Carlos.innerHTML =   ('André deve pagar = R$') +  ((andre).toFixed(2))
    h3Felipe.innerHTML =    (('Felipe deve pagar = R$') +  (felipe - (carlos + andre)).toFixed(2))
}

btDivisao.onclick = function(){
    divisao();
}