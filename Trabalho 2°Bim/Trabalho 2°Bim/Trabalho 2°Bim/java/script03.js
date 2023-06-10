let inputBroas = document.querySelector("#inputBroas");
let inputPaes = document.querySelector("#inputPaes");
let btSoma = document.querySelector("#btSoma");
let h2Result03 = document.querySelector("#h2Result03");
let h3ContaPoup = document.querySelector("#h3ContaPoup");

function soma (){
    let broas = Number(inputBroas.value);
    let paes = Number(inputPaes.value);
    let calculo = Number((broas * 1.50) + (paes * 0.12));
    h2Result03.innerHTML = (('Total arrecado: R$') + (calculo).toFixed(2));
    h3ContaPoup.innerHTML = (('Você deve guardar R$') + 
    ( (calculo * 10/100)).toFixed(2) + (' Na Poupança'));

}

btSoma.onclick = function(){
    soma();
}