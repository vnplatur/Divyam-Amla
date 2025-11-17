let cartItems = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  const cartTable = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  cartTable.innerHTML = "";
  let total = 0;

  if (cartItems.length === 0) {
    cartTable.innerHTML = `<tr><td colspan="5" class="text-center">Your cart is empty</td></tr>`;
    cartTotal.textContent = "₹0";
    return;
  }

  cartItems.forEach((item, index) => {
    const itemTotal = item.price * item.qty;
    total += itemTotal;

    cartTable.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>₹${item.price}</td>
        <td>
          <input type="number" value="${item.qty}" min="1" class="form-control w-50 mx-auto" 
            onchange="updateQty(${index}, this.value)">
        </td>
        <td>₹${itemTotal}</td>
        <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Remove</button></td>
      </tr>
    `;
  });

  cartTotal.textContent = `₹${total}`;
}

function updateQty(index, qty) {
  cartItems[index].qty = parseInt(qty);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCart();
}

function removeItem(index) {
  cartItems.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cartItems));
  renderCart();
}

renderCart();
