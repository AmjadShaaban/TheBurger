var orm = require("../config/orm.js");
var burger = {
  selectAll: cb => orm.selectAll(res => cb(res)),
  insertOne: (burgerName, cb) => orm.insertOne(burgerName, res => cb(res)),
  updateOne: (burgerID, cb) => orm.updateOne(burgerID, res => cb(res))
};
module.exports = burger;