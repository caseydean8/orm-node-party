const connection = require('./connection.js');

const orm = {
  selectAll: function(column, table) {
    let queryStr = 'SELECT ?? FROM ??';
    connection.query(queryStr, [column, table], function(err, data) {
      if (err) throw err;
      console.log(`===== ${table} =====`);
      data.forEach(element => {
        console.log(element[column]);
      });
    });
  },
    selectWhere: function(table, column, columnVal, colName) {
      let queryStr = "select * from ?? where ?? = ?";
      connection.query(queryStr, [table, column, columnVal], function(err, data) {
        if (err) throw err;
        console.log(`====== Adult Parties ======`);
        data.forEach(element => {
          console.log(element[colName]);
        });
      });
    },
    leftJoin: function(whatToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol) {
      let queryStr = 'SELECT ?? FROM ?? AS tOne';
      queryStr += ' left join ?? as tTwo';
      queryStr += ' on tOne.?? = tTwo.??';
      console.log(queryStr);
      connection.query(queryStr, [whatToSelect, tableOne, tableTwo, tableOneCol, tableTwoCol], function(err, data) {
        if (err) console.log(err);
        console.log(data);
      });
    }
}

module.exports = orm;
