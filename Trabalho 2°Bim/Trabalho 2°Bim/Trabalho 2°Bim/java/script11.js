let inputSalario = document.querySelector("#inputSalario");
let btSalario = document.querySelector("#btSalario");
let h3Salario01 = document.querySelector("#h3Salario01");
let h3Salario02 = document.querySelector("#h3Salario02");
let h3Salario03 = document.querySelector("#h3Salario03");

function salarios(){
    let salario = Number(inputSalario.value);
    let salario01 = Number((salario));
    let salario02 = Number(((salario) + (salario * 15/100)));
    let salario03 = Number( (salario02) - (salario02 * 8/100) );
    h3Salario01.innerHTML = ( ('Salario Inicial = R$') + (salario01).toFixed(2));
    h3Salario02.innerHTML = ( ('Salario C/ Aumento = R$') + (salario02).toFixed(2));
    h3Salario03.innerHTML = ( ('Salario Final = R$') + (salario03).toFixed(2));
}

btSalario.onclick = function(){
    salarios();
}