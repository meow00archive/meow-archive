const express = require('express');
const app = express();

app.get('/', (req, res)  => {
    res.send('Response Complate');
})

app.listen(() => {
    console.log('Server On : http://meow-archive.life/');
})