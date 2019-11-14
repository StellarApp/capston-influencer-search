const connection = require('./connection');

const syncAndSeed = async() => {
    await connection.sync({force: true})
}

module.exports = syncAndSeed;