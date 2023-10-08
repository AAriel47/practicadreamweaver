// JavaScript Document
function al(nom){
   var mostra = document.getElementById(nom);
    alert(mostra.id)
   var mostrar = document.querySelector(nom); 
    alert(getComputedStyle(mostra).getOwnPropertyValue(nom));
}

function crearE(eti, valor){
    var etiqueta = document.createElement(eti);
    
    var texto = document.createTextNode(valor);
    etiqueta.appendChild(texto);
    document.body.appendChild(etiqueta);
alert(texto.length);}


function bo(nom){
    var eliminar = document.getElementById(nom);
    eliminar.parentNode.removeChild(eliminar);
}