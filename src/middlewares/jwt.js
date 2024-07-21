const jwt = require('jsonwebtoken');
const secretKey = process.env.JWT_SECRET || "password";
const log = console.log;

module.exports = {
    getToken: (data) => {
        const token = jwt.sign({
            data: data
        }, secretKey, { expiresIn: 60 * 60 });
        return token;
    },
    verifyToken: (token) => {
        try {
            var decoded = jwt.verify(token, secretKey);
            if (decoded) {
                return decoded;
            } else {
                return null;
            }
        } catch (err) {
            log(`[TOKEN ERROR] [${err.message}]`);
            return null;
        }
    }
}