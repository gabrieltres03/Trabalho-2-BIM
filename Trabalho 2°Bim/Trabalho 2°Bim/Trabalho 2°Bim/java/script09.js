let inputX1 = document.querySelector("#inputX1");
let inputY1 = document.querySelector("#inputY1");
let inputX2 = document.querySelector("#inputX2");
let inputY2 = document.querySelector("#inputY2");
let btDistancia = document.querySelector("#btDistancia");

function distancia(){
    let x1 = Number(inputX1.value);
    let y1 = Number(inputY1.value);
    let x2 = Number(inputX2.value);
    let y2 = Number(inputY2.value);
    alert(
        ('A distância entres os pontos é: ')
        + Math.sqrt( (Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2) ) )
        );
}

btDistancia.onclick = function (){
    distancia();
}