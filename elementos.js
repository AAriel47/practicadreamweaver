// JavaScript Document
function fuente(f){
var palabra = document.getElementsByTagName("h1");
alert(palabra[0].innerHTML);
alert(palabra[1].innerHTML);
var parrafo = document.getElementsByTagName("p");
    
for(i in parrafo){
    alert(parrafo[i].innerHTML);

}


alert(f);
}

function crear(elemento, valor){
    var elementos = document.createElement(elemento);
    var texto = document.createTextNode(valor);
    elementos.appendChild(texto);
    document.body.appendChild(elementos)
    
}

function eti(ele, texto){
    var etiqueta = document.createElement(ele);
    var conte = document.createTextNode(texto);
    etiqueta.appendChild(conte);
    document.body.appendChild(etiqueta);
}


function cambiar(){

    var cambio = document.getElementById("cambio").innerHTML;

    if(cambio=="Ocultar"){
        document.getElementById("cambio").innerHTML="Mostrar";
    }else if(cambio=="Mostrar"){
        document.getElementById("cambio").innerHTML="Ocultar";
    }
    
}