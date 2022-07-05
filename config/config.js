const promise = require('bluebird');
const options = {
    promiseLib: promise,
    query: (e) => {}
}

const pgp = require('pg-promise')(options);
const types = pgp.pg.types;
types.setTypeParser(1114, function(stringValue) {
    return stringValue;
});

const databaseConfig = {
    'host': 'delivery-app.postgres.database.azure.com',
    'port': 5432,
    'database': 'delivery_db',
    'user': 'postgre',
    'password': 'servidor@123',
    'ssl': true
};

const db = pgp(databaseConfig);

module.exports = db;