// Load all products
fetch("products.json")
  .then(res => res.json())
  .then(products => {
    const productList = document.getElementById("all-products");

    productList.innerHTML = products.map(item => `
      <div class="col-md-3 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${item.images}" class="card-img-top" alt="${item.name}">
          <div class="card-body text-center">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.desc}</p>
            <p class="fw-bold text-danger">₹${item.price}</p>
            <div class="d-flex justify-content-around">
              <a href="product-detail.html?id=${item.id}" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-info-circle"></i> Item Details
              </a>
              <button class="btn btn-danger btn-sm" 
                onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.images}')">
                <i class="bi bi-cart"></i> Add TO Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    `).join("");
  });

// Add to Cart
function addToCart(id, name, price, img) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  const numericPrice = Number(price); // ensure number

  const existing = cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ id, name, price: numericPrice, img, qty: 1 });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${name} added to cart!`);
}

