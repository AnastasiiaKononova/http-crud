const { Client } = require("pg");
const config = require("../config.json");
const fs = require("fs");
const path = require("path");
// const Cat = require("./Cat");
// const Owner = require("./Owner");

const mode = process.env.NODE_ENV || "development";

const devConf = config[mode];

const client = new Client(devConf);
client.connect();

// // NEED REFACTOR
// Cat._client = client;
// Owner._client = client;


const currentFileName = path.basename(__filename);

const db = {
    client
};

    fs.readdirSync(__dirname)
      .filter(fileName => /.js$/.test(fileName) && fileName !== currentFileName)
      .forEach(fileName => {
        const absPathToFile = path.join(__dirname, fileName);
        const Model = require(absPathToFile);
        Model._client = client;
        db[Model.name] = Model;
        })

module.exports = db;

// module.exports = {
//   client,
//   Cat,
//   Owner
// };


/*
What we want:
Динамічно імпортувати файли моделей 
Кожному заімпортованому файлу давати посилання на клієнта
З поточного index.js експортувати в одному об'єкті всі заімпортовані моделі одразу



Алгоритм дій:
1. Визначити, де ми є (path до директорії з моделями)
2. Прочитати вміст папки
3. Пройтися по всьому масиву з файлами, прочитаними з поточної директорії та заімпортувати їх
4. Кожній заімпортованій моделі роздати посилання на клієнта
5. Кожну заімпортовану модель додати до результуючого об'єкту, який готовий до експорту
*/