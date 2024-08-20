function anadirElemento() {
  const lista = document.getElementById("miLista");
  const input = document.getElementById("miInput");
  const nuevoTexto = input.value;

  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nuevoTexto;

  lista.appendChild(nuevoElemento);

  input.value = '';
}

function eliminarUltimoElemento() {
  const lista = document.getElementById("miLista");

  if (lista.hasChildNodes()) {
      lista.removeChild(lista.lastChild);
  }
}
