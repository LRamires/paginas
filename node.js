const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Endpoint to handle checkout
app.post('/checkout', (req, res) => {
    const cart = req.body.cart;

    // Example: Integration with Nice inContact API
    // Call the API using the provided token and headers
    // Save the cart to a text file
    fs.writeFile('cart.txt', JSON.stringify(cart), (err) => {
        if (err) {
            console.error('Error writing cart to file:', err);
            res.status(500).json({ error: 'Internal Server Error' });
        } else {
            console.log('Cart saved successfully.');
            res.status(200).json({ message: 'Cart saved successfully.' });
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
