//crear 4 variables para comentario, boton y elementos nuevos

var texto = document.getElementById("comentario");
var botton = document.getElementById ("boton");
var contador = document.getElementById("contador");
var nCom = document.getElementById("newComment");

function add(){
  var nuevoTexto = texto.value; //rescatando el valor
  document.getElementById("comentario").value=""; // borrar comentario después de hacer click
//crear nuevos elementos
  var nContenedor = document.createElement("div");
  var nCaja= document.getElementById("caja3");
  var parrafo = document.createElement("p");
  var nodoText = document.createTextNode(nuevoTexto);
  //agregar elementos ya creados
  parrafo.appendChild(nodoText);
  nContenedor.appendChild(parrafo);
  nCaja.appendChild(nContenedor);
}

/*//hacer contador
var contador = document.getElementById("contador").value;
var max = 140;
var text=document.getElementById("comentario").value;
var.long=text.lenght;
text.innerHTML=*/
