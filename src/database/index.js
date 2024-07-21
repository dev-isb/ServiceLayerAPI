const { Model, knexSnakeCaseMappers } = require("objection");

const knex = require('knex')({
    client: 'mysql',
    connection: {
        host: '192.168.0.43',
        port: 3306,
        user: 'salman',
        password: 'password',
        database: 'asterisk'
    }
    ,
    pool: {
        min: 10,
        max: 20
    },
    ...knexSnakeCaseMappers(),
});

Model.knex(knex);
module.exports = knex