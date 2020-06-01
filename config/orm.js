const connection = require('./connection.js');

const orm = {
  selectAll: function(table) {
    let queryStr = 'SELECT * FROM ??';
    connection.query(queryStr, [table], function(err, data) {
      if (err) throw err;
      console.log(data);
    })
  }
}

module.exports = orm;
