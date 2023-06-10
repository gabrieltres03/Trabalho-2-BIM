let inputCavalo = document.querySelector("#inputCavalo");
let btCavalo = document.querySelector("#btCavalo");
let h2Result02 = document.querySelector("#h2Result02");

function result(){
    let cavalos = Number(inputCavalo.value);
    let calculo = Number(cavalos * 4)
    h2Result02.innerHTML = cavalos + ' Cavalo(s), Precisam de '
    + calculo + ' Ferraduras.';
}

btCavalo.onclick = function(){
    result();
}