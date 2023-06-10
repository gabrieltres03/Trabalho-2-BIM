let inputDia2 = document.querySelector("#inputDia2");
let inputDia1 = document.querySelector("#inputDia1");
let btResult = document.querySelector("#btResult");
let h2Result07 = document.querySelector("#h2Result07");

function dias (){
    let dataDia = Number(inputDia1.value);
    let dataMes = Number(inputDia2.value);
    let mes = (dataMes * 30);

    h2Result07.innerHTML = 'Ja se passaram ' + (dataDia + mes - 30) + ' Dias'
   
}

btResult.onclick = function(){
    dias();
}