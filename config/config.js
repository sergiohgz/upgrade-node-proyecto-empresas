const dotenv = require('dotenv'); // require('dotenv').config();
dotenv.config();
console.log('ENTORNO:', process.env);
const PORT = process.env.PORT || 3000;
const DB_URL = process.env.DB_URL;
const SECRET_SESSION = process.env.SECRET_SESSION;

module.exports = {
    PORT,
    DB_URL,
    SECRET_SESSION,
};
