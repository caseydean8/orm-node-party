const orm = require('./config/orm.js');
// log all party names and client names
orm.selectAll('party_name', 'parties');

orm.selectAll('client_name', 'clients');

orm.selectWhere('parties', 'party_type', 'grown-up', 'party_name');

orm.leftJoin(['client_name', 'party_name'], 'clients', 'parties', 'id', 'client_id');
