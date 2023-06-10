let inputP = document.querySelector("#inputP");
let inputM = document.querySelector("#inputM");
let inputG = document.querySelector("#inputG");
let btValor = document.querySelector("#btValor");

function venda(){
    let p = Number(inputP.value);
    let m = Number(inputM.value);
    let g = Number(inputG.value);
    if(p, m, g >= 0){
        alert('\n\n Valor da camiseta P: R$10,00 \n\n Valor da camiseta M: R$12,00 \n\n Valor da camiseta G: R$15,00');
        alert(('Camisetas Selecionadas:\n\n')
        + (p + ' Pequena.') + ('\n\n') + (m + ' Média.') + ('\n\n') + (g + ' Grande.') + ('\n\n'));
        alert( ('\n\n') + ('Valor a Pagar: R$')
        + ( (p*10) + (m*12) + (g*15)).toFixed(2));
    }
}

btValor.onclick = function(){
    venda();
}