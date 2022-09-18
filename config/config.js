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
    connectionString: 'postgres://qqqnoxmhirdbfe:d01ac07b87e2ef9539fdded8d84e0ae060d6e7b252df0b8367d53823fb98fa1f@ec2-54-86-106-48.compute-1.amazonaws.com:5432/dal6u286vedn51',
    max: 30,
};

const db = pgp(databaseConfig);

module.exports = db;