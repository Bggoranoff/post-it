const router = require('../routes');
const models = require('../models');
const utils = require('../utils');
const config = require('./config');

module.exports = (app) => {

    app.get('/auth', function(req, res) {
        const token = req.cookies[config.authCookieName];
        utils.jwt.verifyToken(token)
        .then(({ id }) => models.User.findById(id))
        .then(user => res.send(user))
        .catch(() => res.status(401).send('ERROR!'));
    });

    app.use('/api/user', router.user);

    app.use('/api/poster', router.poster);

    app.use('*', function(req, res, next) {
        res.send('<h1>SOMETHING WENT WRONG!</h1>');
    });

};