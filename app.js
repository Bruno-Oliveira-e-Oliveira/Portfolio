const express = require('express');
const enviroment = require('./env');

const app = express();

const enviromentObject = enviroment()  
const host = enviromentObject.host;
const port = enviromentObject.port;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('', (req, res, next) => {
    console.log('Access done at ' + getDateNow())
    res.render('index');
});

app.use((req, res, next) => {
    console.log('Page not found. (' + getDateNow() +')');
    res.status(404).render('error', {statuscode: 404});
});

app.use((err, req, res, next) => {
    console.log('An unhandled exception occurred. (' + getDateNow() +')');
    res.status(500).render('error', {statuscode: 500});
});

app.listen(port, () =>{
    console.log('------------------------------------------------------------');
    console.log(`Listening on port ${port}`)
    console.log('------------------------------------------------------------');
});

function getDateNow() {
    let ts = Date.now();
    let date = new Date(ts);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dateNow = year + '-' + month + '-' + day + ' ' + hour + ':' + minutes + ':' + seconds;

    return dateNow;
}