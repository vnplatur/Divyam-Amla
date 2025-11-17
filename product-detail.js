// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

fetch("products.json")
  .then((res) => res.json())
  .then((products) => {
    const product = products.find((p) => p.id == productId);
    const container = document.getElementById("product-detail");

    if (!product) {
      container.innerHTML = `<h3 class="text-center text-danger">Product not found!</h3>`;
      return;
    }

    container.innerHTML = `
      <div class="col-md-6">
        <!-- Multiple Images (using same img for demo, replace with array later) -->
        <div class="row g-2">
          <div class="col-12">
            <img src="${
              product.images
            }" class="img-fluid rounded product-img" alt="${product.name}">
          </div>
          <div class="col-4">
            <img src="${product.images}" class="img-fluid rounded" alt="thumb">
          </div>
          <div class="col-4">
            <img src="${product.images}" class="img-fluid rounded" alt="thumb">
          </div>
          <div class="col-4">
            <img src="${product.images}" class="img-fluid rounded" alt="thumb">
          </div>
        </div>
      </div>

      <div class="col-md-6">
        <h2 class="fw-bold">${product.name}</h2>
        <p><strong>Product Code:</strong> #${product.id}</p>
        <p>${product.desc}</p>
        <p><strong>Price:</strong> <span class="text-danger fw-bold">₹${
          product.price
        }</span></p>
        
        ${
          product.manager
            ? `<p><strong>Managed By:</strong> ${product.manager}</p>`
            : ""
        }

        <div class="d-flex gap-3 mt-3">
          <button class="btn btn-danger" onclick="addToCart(${product.id}, '${
      product.name
    }', ${product.price}, '${product.img}')">
            <i class="bi bi-cart"></i> Add to Cart
          </button>
          <a href="https://wa.me/8177800285?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(
            product.name
          )}" 
             target="_blank" class="btn btn-success">
            <i class="bi bi-whatsapp"></i> WhatsApp
          </a>
          <a href="tel:+918177800285" class="btn btn-warning text-white">
            <i class="bi bi-telephone"></i> Call
          </a>
          <a href="mailto:Renuka.p24-26@iiebm.com?subject=Inquiry about ${encodeURIComponent(
            product.name
          )}" 
             class="btn btn-info text-white">
            <i class="bi bi-envelope"></i> Email
          </a>
        </div>
      </div>
    `;
  });

// Add to Cart
function addToCart(id, name, price, img) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const numericPrice = Number(price); // ensure number

  const existing = cart.find((item) => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, name, price: numericPrice, img, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}
