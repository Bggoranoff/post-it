const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.port || 9999,
        dbURL: 'mongodb://localhost:27017/posters-db',
        authCookieName: 'auth-token'
    },
    production: {}
}

module.exports = config[env];