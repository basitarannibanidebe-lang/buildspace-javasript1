const products = [
  { name: "Laptop", price: 850000 },
  { name: "Mouse", price: 15000 },
  { name: "Keyboard", price: 30000 },
];
let cart = [];

const productsDiv = document.querySelector("#products");
const cartDiv = document.querySelector("#cart");
const cartCount = document.querySelector("#cartCount");
const cartTotal = document.querySelector("#cartTotal");

function formatPrice(amount) {
  return "NGN " + amount.toLocaleString("en-US");
}
function addToCart(product) {
  const existing = cart.find(function (item) {
    return item.name === product.name;
  });

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({ name: product.name, price: product.price, quantity: 1 });
  }
  renderCart();
}

function changeQuantity(name, amount) {
  const item = cart.find(function (i) {
    return i.name === name;
  });
  item.quantity += amount;
  if (item.quantity <= 0) {
    removeFromCart(name);
  } else {
    renderCart();
  }
}

function removeFromCart(name) {
  cart = cart.filter(function (item) {
    return item.name !== name;
  });
  renderCart();
}

function getCartCount() {
  return cart.reduce(function (total, item) {
    return total + item.quantity;
  }, 0);
}

function getCartTotal() {
  return cart.reduce(function (total, item) {
    return total + item.price * item.quantity;
  }, 0);
}
function renderProducts() {
  productsDiv.innerHTML = "";

  products.forEach(function (product) {
    const card = document.createElement("div");
    card.className = "card";

    const info = document.createElement("span");
    info.textContent = `${product.name} - ${formatPrice(product.price)}`;

    const button = document.createElement("button");
    button.textContent = "Add to Cart";
    button.addEventListener("click", function () {
      addToCart(product);
    });

    card.append(info, button);
    productsDiv.append(card);
  });
}

function renderCart() {
  cartDiv.innerHTML = "";
  if (cart.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty";
    empty.textContent = "Your cart is empty.";
    cartDiv.append(empty);
  }

  cart.forEach(function (item) {
    const row = document.createElement("div");
    row.className = "cart-item";

    const info = document.createElement("span");
    info.textContent = `${item.name} - ${formatPrice(item.price * item.quantity)}`;

    const qty = document.createElement("div");
    qty.className = "qty";

    const minus = document.createElement("button");
    minus.textContent = "-";
    minus.addEventListener("click", function () {
      changeQuantity(item.name, -1);
    });

    const number = document.createElement("span");
    number.textContent = item.quantity;

    const plus = document.createElement("button");
    plus.textContent = "+";
    plus.addEventListener("click", function () {
      changeQuantity(item.name, 1);
    });

    const remove = document.createElement("button");
    remove.textContent = "Remove";
    remove.className = "remove";
    remove.addEventListener("click", function () {
      removeFromCart(item.name);
    });

    qty.append(minus, number, plus);
    row.append(info, qty, remove);
    cartDiv.append(row);
  });

  cartCount.textContent = getCartCount();
  cartTotal.textContent = formatPrice(getCartTotal());
}

renderProducts();
renderCart();
