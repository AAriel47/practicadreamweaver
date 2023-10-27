// JavaScript Document
function resal(ele, n){
    if (n==1){
            ele.style.backgroundColor="green";
    }else if(n==2){
            ele.style.backgroundColor="blue";
    }
}

function trans(){
   alert("hola");
    var posi = document.getElementById("fi");
    posi.innerHTML.transform.translate=300;
}
function esconder(){
    var control=document.getElementById("inter").value;
    var ocu=document.getElementById("ocultar");

    alert(control);
    if(control=="Ocultar"){
        ocu.style.visibility="hidden";
        document.getElementById("inter").value="Mostrar"
    
    }else if(control=="Mostrar"){
        ocu.style.visibility="visible";
        document.getElementById("inter").value="Ocultar";
    }

}