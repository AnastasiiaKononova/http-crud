const express = require('express');
const CatController = require('./controllers/Cat.controller');

const app = express();

app.get('/cats', CatController.getAll);

module.exports = app;




/*

Маршрутизація базується на end-point (ручки):
метод+путь(url)

GET http://localhost:5000/users/ HTTP/1.1

CREATE - post
READ - get
UPDATE - put
DELETE - delete
*/