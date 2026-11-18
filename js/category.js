
let queryString = location.search;
let params = new URLSearchParams(queryString);
let categoria = params.get('category');

// 2. Capturar los elementos del DOM
let contenedor = document.querySelector('#productos');
let titulo = document.querySelector('.titulo_categoria');


titulo.innerText = categoria.replaceAll('-', ' ');

fetch(`https://dummyjson.com/products/category/${categoria}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    let productos = data.products;   
    let html = '';

    for (let i = 0; i < productos.length; i++) {
        html += `
            <article class="contenedor_producto">
                <img class="fotoproducto" src="${productos[i].thumbnail}" alt="${productos[i].title}">
                <h3 class="nombre_producto">${productos[i].title}</h3>
                <p class="descripcion_producto">${productos[i].description}</p>
                <p class="descripcion_producto">precio: $${productos[i].price}</p>
                <a class="casiboton" href="./product.html?id=${productos[i].id}">ver detalle</a>
            </article>
        `;
    }

    contenedor.innerHTML = html;
})
.catch(function(error){
    console.log('El error es: ' + error);
});