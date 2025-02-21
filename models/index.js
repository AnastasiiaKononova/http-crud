const { Client } = require("pg");
const config = require("../config.json");
const Cat = require("./Cat");
const Owner = require("./Owner");

const mode = process.env.NODE_ENV || "development";

const devConf = config[mode];

const client = new Client(devConf);
client.connect();

// NEED REFACTOR
Cat._client = client;
Owner._client = client;

module.exports = {
  client,
  Cat,
  Owner
};
