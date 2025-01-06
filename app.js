const express = require('express');
const app = express();

// Endpoint untuk route '/'
app.get('/', (req, res) => {
    res.send('Hello, World. This is Alex!');
});

// Ekspor aplikasi untuk digunakan oleh Vercel
module.exports = app;