const crypto = require('crypto');

const SALT = '9409ab6ee328ea15af1720057be9521a';

const hashPassword = (password) => {
    const hash = crypto.pbkdf2Sync(password, SALT, 1000, 64, `sha512`).toString(`hex`);
    return hash
}

module.exports = hashPassword;