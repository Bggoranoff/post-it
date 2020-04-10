const models = require('../models');
const config = require('../config/config');
const utils = require('../utils')

module.exports = {
    get: function (req, res, next) {
        models.User.find()
            .then((users) => res.send(users))
            .catch(next);
    },
    post: {
        register: function (req, res, next) {
            const { fullname, username, email, password, pictureUrl, bio, birthdate } = req.body;
            console.log(fullname);
            models.User.create({ fullname, username, email, password, birthdate, bio, pictureUrl })
                .then((createdUser) => res.send(createdUser))
                .catch(next);
        },
        login: function (req, res, next) {
            const { username, password } = req.body;
            models.User.findOne({ username })
                .then((user) => !!user ? Promise.all([user, user.matchPassword(password)]) : [null, null])
                .then(([user, match]) => {
                    if (!match) {
                        res.status(401).send('Invalid username or password!');
                        return;
                    }
                    const token = utils.jwt.createToken({ id: user._id });
                    res.cookie(config.authCookieName, token).send(user);
                })
                .catch(next);
        },
        logout: function (req, res, next) {
            const token = req.cookies[config.authCookieName];
            models.TokenBlacklist.create({ token })
                .then(() => {
                    res.clearCookie(config.authCookieName).send('Logged out successfully!');
                })
                .catch(next);
        }
    },
    put: function (req, res, next) {
        const id = req.params.id;
        const { username, password } = req.body;
        models.User.update({ _id: id }, { username, password })
            .then((updatedUser) => res.send(updatedUser))
            .catch(next);
    },
    delete: function (req, res, next) {
        const id = req.params.id;
        models.User.deleteOne({ _id: id })
            .then((removedUser) => res.send(removedUser))
            .catch(next);
    }
}