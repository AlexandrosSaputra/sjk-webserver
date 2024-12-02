const express = require('express');
const app = express();
const port = 3000;

app.get('/sjk-webserver.vercel.app', (req, res) => {
    res.send('Hello, World!');
});

app.listen(port, () => {
    console.log(`Server berjalan di https://sjk-webserver.vercel.app/`);
});