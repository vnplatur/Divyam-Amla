fetch("products.json")
  .then(response => response.json())
  .then(products => {
    const productList = document.getElementById("home-product-list");

    // show only first 4 products
    const featured = products.slice(0, 4);

    productList.innerHTML = featured.map(item => `
      <div class="col-md-3 mb-4">
        <div class="card shadow-sm h-100">
          <img src="${item.images}" class="card-img-top" alt="${item.name}" style="height:200px; object-fit:cover;">
          <div class="card-body text-center">
            <h5 class="card-title">${item.name}</h5>
            <p class="card-text">${item.desc}</p>
            <p class="fw-bold text-danger">₹${item.price}</p>
            <a href="product-detail.html?id=${item.id}" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-info-circle"></i> Item Details
              </a>
            <button class="btn btn-danger" onclick="addToCart(${item.id}, '${item.name}', ${item.price}, '${item.img}')">Add to Cart</button>
          </div>
        </div>
      </div>
    `).join("");

    // document.querySelectorAll(".addToCart").forEach(button => {
    //   button.addEventListener("click", () => {
    //     const id = button.getAttribute("data-id");
    //     const name = button.getAttribute("data-name");
    //     const price = parseInt(button.getAttribute("data-price"));

    //     let cart = JSON.parse(localStorage.getItem("cart")) || [];

    //     // check if item exists
    //     const existingItem = cart.find(item => item.id == id);
    //     if (existingItem) {
    //       existingItem.qty += 1;
    //     } else {
    //       cart.push({ id, name, price, qty: 1 });
    //     }

    //     localStorage.setItem("cart", JSON.stringify(cart));
    //     alert(`${name} added to cart!`);
    //   });
    // });
  })
  .catch(err => console.error("Error loading products:", err));
  
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
