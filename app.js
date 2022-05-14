const express = require('express');
const enviroment = require('./env');

const app = express();

const enviromentObject = enviroment()  
const host = enviromentObject.host;
const port = enviromentObject.port;

app.use(express.static('public'));

app.get('', (req, res) => {
    let ts = Date.now();
    let date = new Date(ts);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log('Access done at ' + year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds)
    res.sendFile('index.html', {"root": __dirname});
});

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
});