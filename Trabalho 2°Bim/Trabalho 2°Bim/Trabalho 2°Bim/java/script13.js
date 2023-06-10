let inputPizza = document.querySelector("#inputPizza");
let btPizza = document.querySelector("#btPizza");
let h2Result13 = document.querySelector("#h2Result13");

function area(){
    let pizza = Number(inputPizza.value);
    h2Result13.innerHTML = (
        ('A área da pizza é: ') + ( (3.14) * Math.pow(pizza,2))
    );
}
btPizza.onclick = function(){
    area();
}