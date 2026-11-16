const seccion1 = document.querySelector('.container_recomendados');
const seccion2 = document.querySelector('.container_masvendidos');


fetch('https://dummyjson.com/products/category/groceries')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let contenido = '';

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

    seccion1.innerHTML = contenido;
  })
  .catch(function(error){
    console.log('El error es: ' + error);
  });


fetch('https://dummyjson.com/products/category/kitchen-accessories')
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    let contenido = '';

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

    seccion2.innerHTML = contenido;
  })
  .catch(function(error){
    console.log('El error es: ' + error);
  });