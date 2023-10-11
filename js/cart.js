const subtotalElement = document.querySelector(".subtotal .font-weight-bold");
var subtotal;
function cambioPago(event){
  let formaDePago = event.value;
  if (formaDePago == 1) {
    costoTotal = subtotal*0.9
  } else if (formaDePago == 2){
    costoTotal = subtotal*0.93
  } else {
    costoTotal = subtotal
  }
  console.log(costoTotal)
  subtotalElement.textContent = `$${costoTotal.toFixed(2)}`;
}

document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("container");
    
    // Obtén el carrito desde localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    // Recorre el carrito y crea filas en la tabla para cada producto
    cart.forEach(function (product) {
      console.log(product)
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${product.name}</td>
        <td>${product.cantidad}</td>
        <td>${product.price}</td>
        <td>${product.price * product.cantidad}</td>
      `;
      
      cartContainer.appendChild(row);
    });
    
    // Calcula el subtotal
    subtotal = cart.reduce(function (total, product) {
      return total + parseFloat(product.price.replace("$", ""))*product.cantidad;
    }, 0);
    
    // Actualiza el subtotal en la tabla
    
    subtotalElement.textContent = `$${subtotal.toFixed(2)}`;

const checkbox = document.getElementById("activarCampos");
const boleta = document.getElementById("boleta");
const campos = boleta.querySelectorAll('input[type="text"], input[type="number"]');

checkbox.addEventListener('change', function() {
  campos.forEach(function(input) {
      input.disabled = !checkbox.checked;
  });
});

const inicio = document.getElementById("volverInicio");

inicio.addEventListener("click", () =>{
  window.location.href = "index.html";
})
});
  