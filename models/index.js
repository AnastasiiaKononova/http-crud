const { Client } = require("pg");
const config = require("../config.json");
const Cat = require("./Cat");

const mode = process.env.NODE_ENV || "development";

const devConf = config[mode];

const client = new Client(devConf);
client.connect();

Cat._client = client;

module.exports = {
  client,
  Cat,
};
