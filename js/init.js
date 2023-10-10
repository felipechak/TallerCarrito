const stockProducts = [
    {
      "_id": "65248c545cb756e91972b323",
      "stock": 8,
      "name": "Diaz Harris",
      "costo": 5433,
      "description": "Culpa cillum excepteur duis mollit labore reprehenderit occaecat nulla et.\r\n"
    },
    {
      "_id": "65248c546105ad6f0f39f09f",
      "stock": 0,
      "name": "Barrett Griffin",
      "costo": 6157,
      "description": "Magna laboris cupidatat labore mollit nulla proident quis veniam do proident elit quis non. \r\n"
    },
    {
      "_id": "65248c54315b422cff8d37f3",
      "stock": 10,
      "name": "Bowman Rush",
      "costo": 58,
      "description": "Dolore aute commodo reprehenderit aute aute enim ad proident commodo laborum esse. \r\n"
    },
    {
      "_id": "65248c54fac8f1711958d5e0",
      "stock": 9,
      "name": "Ramsey Campbell",
      "costo": 7053,
      "description": "Id Lorem culpa aute dolor enim Lorem consequat do pariatur consequat veniam est nisi. \r\n"
    },
    {
      "_id": "65248c5462f44a799d3be7f0",
      "stock": 3,
      "name": "Stella Olsen",
      "costo": 9537,
      "description": "Aliquip sint dolor culpa reprehenderit irure enim culpa dolore sunt dolore laborum voluptate. .\r\n"
    },
    {
      "_id": "65248c549e3816b6cb9fc245",
      "stock": 9,
      "name": "Katherine Bridges",
      "costo": 5635,
      "description": "Magna in exercitation exercitation aute. \r\n"
    },
    {
      "_id": "65248c54554ee05fc518a2f6",
      "stock": 2,
      "name": "Spears Blackburn",
      "costo": 2802,
      "description": "Sit eiusmod culpa duis adipisicing Lorem eu sint sint ex ea dolore consectetur ex laborum.\r\n"
    },
    {
      "_id": "65248c54f40aa917f6311109",
      "stock": 2,
      "name": "Marion Chang",
      "costo": 9131,
      "description": "Pariatur mollit ad Lorem minim magna ad aute. Eiusmod cupidatat occaecat enim sunt aliqua ipsum.\r\n"
    },
    {
      "_id": "65248c5445b294df05617e5b",
      "stock": 7,
      "name": "Camacho Collier",
      "costo": 5163,
      "description": "Est anim amet labore fugiat occaecat aliqua irure consectetur ullamco occaecat dolore.\r\n"
    },
    {
      "_id": "65248c54c05ff86a37e9925b",
      "stock": 5,
      "name": "Mccoy Ratliff",
      "costo": 7879,
      "description": "Veniam minim nisi fugiat labore est ad elit adipisicing sint cillum in pariatur commodo.\r\n"
    },
    {
      "_id": "65248c54429f604094e8ed35",
      "stock": 4,
      "name": "Russell Klein",
      "costo": 4411,
      "description": "Nisi voluptate aliquip consequat magna labore laborum id minim. \r\n"
    },
    {
      "_id": "65248c541fc8dbf4420dc882",
      "stock": 7,
      "name": "Rita Fernandez",
      "costo": 1331,
      "description": "Quis duis et excepteur aliqua enim officia ut anim officia eu commodo nisi exercitation. \r\n"
    },
    {
      "_id": "65248c54333049c23496b7d8",
      "stock": 3,
      "name": "Katie Hudson",
      "costo": 7843,
      "description": "Qui laborum sint qui mollit aliquip amet esse. \r\n"
    },
    {
      "_id": "65248c546e578909ee46c482",
      "stock": 3,
      "name": "Brittany West",
      "costo": 3186,
      "description": "Nostrud ullamco occaecat sunt exercitation nisi et dolore proident in. \r\n"
    },
    {
      "_id": "65248c548fc1542f3b0abcbc",
      "stock": 6,
      "name": "Crosby Velazquez",
      "costo": 9137,
      "description": "Magna aute ex velit quis amet ad et anim. \r\n"
    },
    {
      "_id": "65248c541d312c6dc43c7926",
      "stock": 6,
      "name": "Barber Parker",
      "costo": 4588,
      "description": "Esse tempor incididunt ad nulla. \r\n"
    },
    {
      "_id": "65248c54aaacedac15b33e2a",
      "stock": 6,
      "name": "Briggs Cox",
      "costo": 5966,
      "description": "Sint aliqua anim exercitation cillum duis voluptate aute sit non magna anim est excepteur anim. \r\n"
    },
    {
      "_id": "65248c5486fe154c8e8e64b0",
      "stock": 4,
      "name": "Louella Stanley",
      "costo": 7152,
      "description": "Qui aute cupidatat reprehenderit in ea. .\r\n"
    },
    {
      "_id": "65248c5433c6dd1f4336321d",
      "stock": 0,
      "name": "Nannie Combs",
      "costo": 1997,
      "description": "Sit sit cillum sit elit voluptate esse laboris irure amet.\r\n"
    },
    {
      "_id": "65248c5480cceb28a7d2c042",
      "stock": 7,
      "name": "Baker Tate",
      "costo": 5782,
      "description": "Officia et anim sit nostrud culpa quis magna qui. \r\n"
    }
  ]

document.addEventListener('DOMContentLoaded', () => {

    const contenedor = document.getElementById("productContainer");   
    
    stockProducts.forEach(function (element) {
        const relatedProductHtml = contenedorToHtml(element);
        contenedor.innerHTML += relatedProductHtml;
    });

})


const contenedorToHtml = (elem) => {
    return `<div class="row">
    <div class="col-md-8 mb-8">
        <div class="card">
            <img src="https://picsum.photos/200" alt="Producto 1" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">${elem.name}</h3>
                <p > Id:</p><p class="card-text">Id: ${elem._id}</p>
                <p>Stock:</p><p class="card-text product-stock">${elem.stock}</p>
                <p>Precio:</p><p class="card-text product-price">${elem.costo}</p>
                <p>Descripcion:</p><p class="card-text">${elem.description}</p>
                <button class="btn btn-primary" data-id="${elem._id}" id="agregar">Agregar al carrito</button>
            </div>
        </div>
    </div>`
  };


//Funcion agregar al carrito
document.addEventListener("DOMContentLoaded", function () {
    const addToCartButtons = document.querySelectorAll("#agregar");
    
    addToCartButtons.forEach(function (button, index) {
      button.addEventListener("click", function () {
        const productName = document.querySelectorAll(".card-title")[index].innerText;
        const productPrice = document.querySelectorAll(".product-price")[index].innerText;
        const productStock = document.querySelectorAll(".product-stock")[index].innerText;
        const product = {
          id: button.dataset.id,
          cantidad: 1,
          name: productName,
          price: productPrice,
          stock: productStock,
        };
        
        // Verifica si ya hay elementos en el carrito en localStorage
        let cart = localStorage.getItem("cart") !== null ? JSON.parse(localStorage.getItem("cart")) : [];

        //console.log(document.querySelectorAll(".card-title")[index])
        // Agrega el producto al carrito
        if (cart.filter((elem) => elem.id === product.id).length > 0) {
            cart.forEach(p => {
                if (p.id === product.id) {
                    p.cantidad += 1
                }
            })
        }else{
            cart.push(product);
        }
        // Guarda el carrito actualizado en localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        
        alert("Producto agregado al carrito");
      });
    });
  });
  