const Sequelize = require('sequelize');

const host = '127.0.0.1';
const port = 5432;
const username = 'postgres';
const password = '1234';
const database = 'postgres';
const dialect = 'postgres';

var sequelize = new Sequelize({
    host,
    port,
    username,
    password,
    database,
    dialect,
    define: {
        timestamps: true,
        underscored: true
    }
});

async function sequelizeConnection() {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

module.exports = { sequelize, sequelizeConnection };
