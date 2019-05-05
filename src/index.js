const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.listen('8080', () => {
  console.log('start');
});

app.all('/*', (req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	next();
});

app.get('/', (req, res) => {
    res.send('good');
  });

app.post('/save-state', (req, res) => {
    res.send(``)
    if(!req.body.btnState) {
      console.log(`Кнопка нажата`);
      fs.appendFileSync('src/log.txt', 'Кнопка нажата ');
    } else {
    console.log(`Кнопка отжата`) ;
    fs.appendFileSync('src/log.txt', 'Кнопка отжата ');
  }
});