require('dotenv').config()
// config/database.js
module.exports = {

    'url' : process.env.DB_STRING,
    'dbName': 'Bobs-Burgers'
};
