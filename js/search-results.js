let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let busqueda = queryStringObj.get('search');

const titulo = document.querySelector('.skincarekit');
const seccionResultados = document.querySelector('.contenedor_productos_categoria');

titulo.innerText = busqueda;


fetch(`https://dummyjson.com/products/search?q=${busqueda}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    let contenido = '';

    if (data.products.length == 0) {
      contenido = `<p>No hay resultados para el término: ${busqueda}</p>`;
    } else {
      for (let i = 0; i < data.products.length; i++) {
        contenido += `
          <article class="contenedor_producto">
            <img class="fotoproducto" src="${data.products[i].thumbnail}" alt="${data.products[i].title}">
            <h3 class="nombre_producto">${data.products[i].title}</h3>
            <p class="descripcion_producto">${data.products[i].description}</p>
            <p class="descripcion_producto">precio: $${data.products[i].price}</p>
            <a href="./product.html?id=${data.products[i].id}" class="casiboton">ver detalle</a>
          </article>
        `;
      }
    }

    seccionResultados.innerHTML = contenido;
  })
  .catch(function(error){
    console.log('El error es: ' + error);
  });
