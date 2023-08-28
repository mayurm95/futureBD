const {config}  = require('dotenv');
config();

module.exports.configration = {
    port: process.env.PORT
};
