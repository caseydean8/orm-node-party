const orm = require('./config/orm.js');
// log all party names and client names
orm.selectAll('parties');
// orm.selectAll('client_name');