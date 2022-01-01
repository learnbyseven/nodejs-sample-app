const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { unsubscribe } = require('./user/userRoutes');
const app = express();
const users = require('./user/userRoutes');
app.listen(80);

app.use(express.static('public'));
app.use((req, res, next) => {
    console.log('Req executed from Source IP', req.ip);
    next();
})

app.get('/')

app.get('/coffee', (req, res) => {
    res.json({'service': 'COFFEE', 'Host': req.hostname, 'SourceIP': req.ip})
});

app.get('/coffee/latte', (req, res) => {
    res.json({'service': 'LATTE', 'Host': req.hostname, 'SourceIP': req.ip})
});

app.get('/tea', (req, res) => {
    res.json({'service': 'TEA', 'Host': req.hostname, 'SourceIP': req.ip})
});

app.get('/tea/green', (req, res) => {
    res.json({'service': 'GREEN-TEA', 'Host': req.hostname, 'SourceIP': req.ip})
});

app.get('/', (req, res) => {
    res.json({'HOME': 'CAFESHOP', 'Host': req.hostname, 'SourceIP': req.ip})
});

app.get('/healthz', (req, res) => {
    res.json({'Health': 'OK'})
});
app.get('/mode', (req, res) => {
    res.json({'Mode': 'Maintenance'})
});

app.use(users);


