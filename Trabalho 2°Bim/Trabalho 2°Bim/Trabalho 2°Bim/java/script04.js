let inputNome = document.querySelector("#inputNome");
let inputIdade = document.querySelector("#inputIdade");
let btDias = document.querySelector("#btDias");
let h2Result04 = document.querySelector("#h2Result04");

function viveu (){
    let nome = String(inputNome.value);
    let idade = String(inputIdade.value);
    h2Result04.innerHTML = ( (nome) + (' Já viveu: ') + (idade * 365) + (' Dias.') );
}

btDias.onclick = function(){
    viveu();
}