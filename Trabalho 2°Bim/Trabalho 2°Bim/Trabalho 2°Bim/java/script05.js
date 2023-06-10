let inputPago = document.querySelector("#inputPago");
let inputGasolina = document.querySelector("#inputGasolina");
let btLitros = document.querySelector("#btLitros");

function litros (){
    let pago = Number(inputPago.value);
    let gasolina = Number(inputGasolina.value);
    if(pago && gasolina > 0){
        alert(('O total de litros abastecido é= ') + (pago / gasolina) + ('L.'));
    }
}

btLitros.onclick = function(){
    litros();
}