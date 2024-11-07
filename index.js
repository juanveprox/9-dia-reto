const pantalla = document.getElementById("pantalla");

function aggValor(valor){
    pantalla.value += valor;
}

function calcular(){
    pantalla.value = eval(pantalla.value);
}

function borrar(){
    pantalla.value = " ";
}