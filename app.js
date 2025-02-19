const express = require('express');
const CatController = require('./controllers/Cat.controller');
const bodyParser = express.json();
const app = express();

app.get('/cats', CatController.getAll);
app.get('/cats/:catId', CatController.getOne);

app.delete('/cats/:catId', CatController.deleteOne);
app.post('/cats', bodyParser, CatController.createOne);
app.put('/cats/:catId', bodyParser, CatController.updateOne);

module.exports = app;




/*

Маршрутизація базується на end-point (ручки):
метод+путь(url)

GET http://localhost:5000/users/ HTTP/1.1

CREATE - post
READ - +getAll, getOne
UPDATE - put
DELETE - delete
*/