const express = require('express');
const enviroment = require('./env');

const app = express();

const enviromentObject = enviroment()  
const host = enviromentObject.host;
const port = enviromentObject.port;

app.use(express.static('public'));

app.get('', (req, res) => {
    res.sendFile('index.html', {"root": __dirname});
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});