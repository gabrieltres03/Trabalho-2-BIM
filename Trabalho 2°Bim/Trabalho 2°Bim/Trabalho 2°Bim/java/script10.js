let inputAcidente = document.querySelector("#inputAcidente");
let btCoverter = document.querySelector("#btCoverter");
let h3Result01 = document.querySelector("#h3Result01");
let h3Result02 = document.querySelector("#h3Result02");
let h3Result03 = document.querySelector("#h3Result03");

function conversao(){
    let dias = Number(inputAcidente.value);
    if(dias > 0 < 30){
        h3Result01.innerHTML = ((dias) + (' Dias'));
        h3Result02.innerHTML = ('0 Meses');
        h3Result03.innerHTML = ('0 Anos');
    }
    if(dias > 30 < 360){
        h3Result01.innerHTML = ((dias) + (' Dias'));
        h3Result02.innerHTML = ((dias / 30) + (' Mes(es)'));
        h3Result03.innerHTML = ('0 Ano(s)');
    }
    if( dias >= 360){
        h3Result01.innerHTML = ((dias) + (' Dias'));
        h3Result02.innerHTML = ((dias / 30) + (' Mes(es)'));
        h3Result03.innerHTML = ((dias / 360) + (' Ano(s)'));
    }
}

btCoverter.onclick = function(){
    conversao();
}