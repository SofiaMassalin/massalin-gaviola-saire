const formulario = document.querySelector('.formulario');
const campoBuscar = document.querySelector('.input_buscar');

formulario.addEventListener('submit', function(e) {
  e.preventDefault();

  if (campoBuscar.value == '') {
    alert('El campo de búsqueda no puede estar vacío');
  } else if (campoBuscar.value.length < 3) {
    alert('El término buscado debe tener al menos 3 caracteres');
  } else {
    formulario.submit();
  }
});