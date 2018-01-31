// funcion para añadir comentario
function add() {
  var texto = document.getElementById('comentario');
  var botton = document.getElementById('boton');
  var nuevoTexto = texto.value; // rescatando el valor
  var hora = moment().format('LT');
  document.getElementById('comentario').value = ''; // borrar comentario después de hacer click
  // crear nuevos elementos
  var nContenedor = document.createElement('div');
  var nCaja = document.getElementById('caja3');
  var parrafo = document.createElement('p');
  var parrafo2 = document.createElement('p');
  var nodoText = document.createTextNode(nuevoTexto);
  var nodoHour = document.createTextNode(hora);
  // agregar elementos ya creados
  parrafo.appendChild(nodoText);
  parrafo2.appendChild(nodoHour);
  nContenedor.appendChild(parrafo);
  nContenedor.appendChild(parrafo2);
  nCaja.appendChild(nContenedor);
  // deshabilitar y cambiar boton(aun no funciona)
  if (nuevoTexto.length >= 1 || nuevoTexto.length >= 140) {
    boton.disabled = false;
  } else {
    boton.disabled = true;
  }
}

// hacer contador
function contar() {
  var max = '140'; // var max para
  var cadena = document.getElementById('comentario').value; // rescatar texto ingresado por el usuario
  var longitud = cadena.length; // largo del texto rescatado desde comentario
  contador.innerHTML = max - longitud; // innerHTML modifica el HTML, modificamos 140 por el valor de esta resta
  // cambiar color de contador (funciona mas o menos xD)
  if (longitud >= 120) {
    document.getElementById('contador').style.backgroundColor = 'purple';
  } else if (longitud >= 130) {
    document.getElementById('contador').style.backgroundColor = 'red';
  }
}

