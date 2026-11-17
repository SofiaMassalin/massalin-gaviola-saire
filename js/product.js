let queryString = location.search;
let queryStringObj = new URLSearchParams(queryString);
let id = queryStringObj.get('id');

const nombre = document.querySelector('.detalle_nombre');
const marca = document.querySelector('.detalle_marca');
const descripcion = document.querySelector('.detalle_descripcion');
const precio = document.querySelector('.detalle_precio');
const categoria = document.querySelector('.detalle_categoria');
const fotoGrande = document.querySelector('.imggrande');
const fotosChicas = document.querySelector('.imgchicas');
const tags = document.querySelector('.tags_contenedor');
const comentarios = document.querySelector('.textocomentario');


fetch(`https://dummyjson.com/products/${id}`)
  .then(function(response){
    return response.json();
  })
  .then(function(data){
    console.log(data);

    nombre.innerText = data.title;
    marca.innerText = data.brand;
    descripcion.innerText = data.description;
    precio.innerText = `$${data.price}`;

    fotoGrande.innerHTML = `<img class="fotomedio" src="${data.thumbnail}" alt="${data.title}">`;

    categoria.innerHTML = `<a href="./category.html?category=${data.category}">${data.category}</a>`;

    let contenidoFotos = '';
    for (let i = 0; i < data.images.length; i++) {
      if (i < 3) {
        contenidoFotos += `<img class="fotoizq" src="${data.images[i]}" alt="${data.title}">`;
      }
    }
    fotosChicas.innerHTML = contenidoFotos;

    let contenidoTags = `<p class="tags">Stock: ${data.stock}</p>`;
    for (let i = 0; i < data.tags.length; i++) {
      if (i < 3) {
        contenidoTags += `<p class="tags">${data.tags[i]}</p>`;
      }
    }
    tags.innerHTML = contenidoTags;

    let contenidoReviews = '';
    for (let i = 0; i < data.reviews.length; i++) {
      contenidoReviews += `
        <section class="comentario">
          <p>Rating: ${data.reviews[i].rating} / 5</p>
          <p>${data.reviews[i].comment}</p>
          <p>${data.reviews[i].date}</p>
          <p>${data.reviews[i].reviewerName}</p>
        </section>
      `;
    }
    comentarios.innerHTML = contenidoReviews;
  })
  .catch(function(error){
    console.log('El error es: ' + error);
  });