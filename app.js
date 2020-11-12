const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>El código secreto es HcUy6Re2LLBRtj</h1>');
});

app.listen(3000, () => console.log('Listening on port 3000!'));