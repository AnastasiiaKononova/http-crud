const express = require('express');
const CatController = require('./controllers/Cat.controller');
const OwnerController = require('./controllers/Owner.controller');
const bodyParser = express.json();
const app = express();

app.use(bodyParser);

app.get('/cats', CatController.getAll);
app.get('/cats/:catId', CatController.getOne);

app.delete('/cats/:catId', CatController.deleteOne);
app.post('/cats', CatController.createOne);
app.put('/cats/:catId', CatController.updateOne);

app.get('/owners', OwnerController.getAll);
app.get('/owners/:ownerId', OwnerController.getOne);
app.post('/owners', OwnerController.createOne);
app.put('/owners/:ownerId', OwnerController.updateOne);
app.delete('/owners/:ownerId', OwnerController.deleteOne);

app.patch('/owners/:ownerId/:catId', OwnerController.addCat);

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