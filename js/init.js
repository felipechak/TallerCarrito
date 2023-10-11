const stockProducts = [
    {
      "_id": "65248c545cb756e91972b323",
      "stock": 8,
      "name": "Diaz Harris",
      "costo": 5433,
      "description": "Culpa cillum excepteur duis mollit labore reprehenderit occaecat nulla et.\r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52214474104_4d410806c7_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c546105ad6f0f39f09f",
      "stock": 0,
      "name": "Barrett Griffin",
      "costo": 6157,
      "description": "Magna laboris cupidatat labore mollit nulla proident quis veniam do proident elit quis non. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52222187950_f698683ab5_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c54315b422cff8d37f3",
      "stock": 10,
      "name": "Bowman Rush",
      "costo": 58,
      "description": "Dolore aute commodo reprehenderit aute aute enim ad proident commodo laborum esse. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52750642974_d92f69439c_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c54fac8f1711958d5e0",
      "stock": 9,
      "name": "Ramsey Campbell",
      "costo": 7053,
      "description": "Id Lorem culpa aute dolor enim Lorem consequat do pariatur consequat veniam est nisi. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52383984787_bfe7aba4a6_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c5462f44a799d3be7f0",
      "stock": 3,
      "name": "Stella Olsen",
      "costo": 9537,
      "description": "Aliquip sint dolor culpa reprehenderit irure enim culpa dolore sunt dolore laborum voluptate. .\r\n",
      "image": "https://loremflickr.com/cache/resized/4877_32200178648_745aac544e_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c549e3816b6cb9fc245",
      "stock": 9,
      "name": "Katherine Bridges",
      "costo": 5635,
      "description": "Magna in exercitation exercitation aute. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_53096134104_31fbc4d17c_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c54554ee05fc518a2f6",
      "stock": 2,
      "name": "Spears Blackburn",
      "costo": 2802,
      "description": "Sit eiusmod culpa duis adipisicing Lorem eu sint sint ex ea dolore consectetur ex laborum.\r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52764188094_a51549f3e7_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c54f40aa917f6311109",
      "stock": 2,
      "name": "Marion Chang",
      "costo": 9131,
      "description": "Pariatur mollit ad Lorem minim magna ad aute. Eiusmod cupidatat occaecat enim sunt aliqua ipsum.\r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52209392834_f0325562ca_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c5445b294df05617e5b",
      "stock": 7,
      "name": "Camacho Collier",
      "costo": 5163,
      "description": "Est anim amet labore fugiat occaecat aliqua irure consectetur ullamco occaecat dolore.\r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52764188094_a51549f3e7_320_240_nofilter.jpg "
    },
    {
      "_id": "65248c54c05ff86a37e9925b",
      "stock": 5,
      "name": "Mccoy Ratliff",
      "costo": 7879,
      "description": "Veniam minim nisi fugiat labore est ad elit adipisicing sint cillum in pariatur commodo.\r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52886923341_9db4d78a42_n_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c54429f604094e8ed35",
      "stock": 4,
      "name": "Russell Klein",
      "costo": 4411,
      "description": "Nisi voluptate aliquip consequat magna labore laborum id minim. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52246730837_f157bd5e46_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c541fc8dbf4420dc882",
      "stock": 7,
      "name": "Rita Fernandez",
      "costo": 1331,
      "description": "Quis duis et excepteur aliqua enim officia ut anim officia eu commodo nisi exercitation. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_53212263290_e70669e559_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c54333049c23496b7d8",
      "stock": 3,
      "name": "Katie Hudson",
      "costo": 7843,
      "description": "Qui laborum sint qui mollit aliquip amet esse. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52221968719_7785389bb3_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c546e578909ee46c482",
      "stock": 3,
      "name": "Brittany West",
      "costo": 3186,
      "description": "Nostrud ullamco occaecat sunt exercitation nisi et dolore proident in. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52930196820_c6c6e53e9f_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c548fc1542f3b0abcbc",
      "stock": 6,
      "name": "Crosby Velazquez",
      "costo": 9137,
      "description": "Magna aute ex velit quis amet ad et anim. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52893558487_b5dcac7206_n_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c541d312c6dc43c7926",
      "stock": 6,
      "name": "Barber Parker",
      "costo": 4588,
      "description": "Esse tempor incididunt ad nulla. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52579342719_2a2af8651d_n_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c54aaacedac15b33e2a",
      "stock": 6,
      "name": "Briggs Cox",
      "costo": 5966,
      "description": "Sint aliqua anim exercitation cillum duis voluptate aute sit non magna anim est excepteur anim. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52379175588_562053f053_n_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c5486fe154c8e8e64b0",
      "stock": 4,
      "name": "Louella Stanley",
      "costo": 7152,
      "description": "Qui aute cupidatat reprehenderit in ea. .\r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52954535382_bf1ae9207e_n_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c5433c6dd1f4336321d",
      "stock": 0,
      "name": "Nannie Combs",
      "costo": 1997,
      "description": "Sit sit cillum sit elit voluptate esse laboris irure amet.\r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52286707607_f152963408_n_320_240_nofilter.jpg"
    },
    {
      "_id": "65248c5480cceb28a7d2c042",
      "stock": 7,
      "name": "Baker Tate",
      "costo": 5782,
      "description": "Officia et anim sit nostrud culpa quis magna qui. \r\n",
      "image": "https://loremflickr.com/cache/resized/65535_52750893698_5b1c16297f_320_240_nofilter.jpg"
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
    return `<div class="row item">
    <div class="col-md-8 mb-8">
        <div class="card">
            <img src="${elem.image}" alt="Producto 1" class="card-img-top">
            <div class="card-body">
                <h3 class="card-title">${elem.name}</h3>
                <p class="card-text"><strong>Id:</strong> ${elem._id} </p>
                <p class="card-text product-stock"><strong>Stock:</strong> ${elem.stock}</p>
                <p class="card-text product-price"><strong>Precio:</strong> ${elem.costo}</p>
                <p class="card-text"><strong>Descripcion:</strong> ${elem.description}</p>
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

        // Agrega el producto al carrito
        if (cart.filter((elem) => elem.id === product.id).length > 0) {
            cart.forEach(p => {
                if (p.id === product.id) {
                    p.cantidad += 1
                }
            })
        } else {
            cart.push(product);
        }
        // Guarda el carrito actualizado en localStorage
        localStorage.setItem("cart", JSON.stringify(cart));
        
        alert("Producto agregado al carrito");
      });
    });
  });
  