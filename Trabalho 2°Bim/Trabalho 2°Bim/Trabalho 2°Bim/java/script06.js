let inputQuilo = document.querySelector("#inputQuilo");
let btPagar = document.querySelector("#btPagar");

function pagar (){
    let quilos = Number(inputQuilo.value);
    let preco = (quilos - 0.4);
    if(quilos > 0){
        alert(('O Valor a ser pago é: R$') 
        + (preco * 12.0).toFixed(2) + ('.'));
    }
}

btPagar.onclick = function(){
    pagar();
}