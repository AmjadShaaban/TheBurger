var connection = require("../config/connection.js");
var orm = {
  selectAll: cb => {
    let query = "SELECT * FROM burgers";
    connection.query(query, (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },
  insertOne: (name, cb) => {
    let query = "INSERT INTO burgers SET ?";
    connection.query(query, [{
      burger_name: name
    }], (err, result) => {
      if (err) throw err;
      cb(result);
    })
  },
  updateOne: (id, cb) => {
    let query = "UPDATE burgers SET ? WHERE ?";
    connection.query(query, [{
      devoured: true
    }, {
      id: id
    }], (err, result) => {
      if (err) throw err;
      cb(result);
    })
  }
}
module.exports = orm;