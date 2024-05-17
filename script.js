// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    // Add more products here
];

let cart = [];
let cartId = generateCartId();

// Function to generate a unique cart ID
function generateCartId() {
    return Math.random().toString(36).substr(2, 9);
}

// Function to display products on the page
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product-item');
        productItem.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productItem);
    });
}

// Function to add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCart();
    }
}

// Function to remove product from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Function to finalize cart
function finalizeCart() {
    // Save cart ID and items to a text file
    const data = `Cart ID: ${cartId}\n\nItems:\n${cart.map(item => `${item.name} - $${item.price}`).join('\n')}`;

    // Simulating file download by creating a temporary link
    const link = document.createElement('a');
    link.href = 'data:text/plain;charset=utf-8,' + encodeURIComponent(data);
    link.download = 'cart.txt';
    link.click();

    // Reset cart and generate new cart ID
    cart = [];
    cartId = generateCartId();
    updateCart();
}

// Display products when the page loads
displayProducts();
