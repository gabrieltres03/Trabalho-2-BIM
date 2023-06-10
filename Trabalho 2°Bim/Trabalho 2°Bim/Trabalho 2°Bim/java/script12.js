let inputNumero = document.querySelector("#inputNumero");
let btResul12 = document.querySelector("#btResul12");

function resultado(){
    let numero = Number(inputNumero.value);
    if(numero < 1000 ){
        alert( ('Centena(s) = ' + (numero / 100).toFixed(3))
    + ('\n\n') + ('Dezena(s) = ' + (numero / 10).toFixed(3))
    + ('\n\n') + ("Unidade(s) = " + (numero).toFixed(3)) );
}
}

btResul12.onclick = function(){
    resultado();
}