const express = require('express');
const bodyParser = express.json();
const app = express();
const catRouter = require('./routes/CatRouter');
const ownerRouter = require('./routes/OwnerRouter');


app.use(bodyParser);

// error handling

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