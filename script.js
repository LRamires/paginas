// Define your product data
const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 25 },
    { id: 4, name: 'Product 4', price: 40 },
    { id: 5, name: 'Product 5', price: 52 },
    { id: 6, name: 'Product 6', price: 70 },
    { id: 7, name: 'Product 7', price: 22 },
    { id: 8, name: 'Product 8', price: 4 },
    { id: 9, name: 'Product 9', price: 7 },
    { id: 10, name: 'Product 10', price: 80 },
    { id: 11, name: 'Product 11', price: 220 },
    // Add more products here
];

let cart = [];

// Function to display products on the page
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.innerHTML = `
            <p>${product.name} - $${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productCard);
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
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Function to update cart display
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${item.id})">Remove</button>
        `;
        cartItems.appendChild(cartItem);
    });
}

// Function to open cart modal
function openCart() {
    document.getElementById('cart-modal').style.display = 'block';
}

// Function to close cart modal
function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}

// Function to finalize cart
function checkout() {
    // Call Node.js backend to handle checkout and API integration
    // You can use fetch API to make HTTP requests to your Node.js server
    // Example:
    // fetch('/checkout', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({ cart })
    // })
    // .then(response => response.json())
    // .then(data => {
    //     // Handle response from server
    // })
    // .catch(error => console.error('Error:', error));
}

// Display products when the page loads
displayProducts();
