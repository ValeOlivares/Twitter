//funcion para añadir comentario
function add(){
  var texto = document.getElementById("comentario");
  var botton = document.getElementById ("boton");
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

//hacer contador
function contar() {
  var counter = document.getElementById("contador");
  var max = "140";
  var cadena = document.getElementById("comentario").value;
  var longitud = cadena.length; // largo del texto rescatado desde comentario
  contador.innerHTML= max - longitud; // innerHTML modifica el HTML, modificamos 140 por el valor de esta resta
  document.getElementById("contador")="140";
  }
