const models = require('../models');

module.exports = {
    get: function (req, res, next) {
        const limit = +req.query.limit;
        if (limit) {
            models.Poster.find().populate('author').sort({ _id: -1 }).limit(limit)
            .then((posters) => res.send(posters))
            .catch(next);
            return;
        }
        models.Poster.find().populate('author')
        .then((posters) => res.send(posters))
        .catch(next);
    },
    getOne: function(req, res, next) {
        const id = req.params.id;
        models.Poster.findOne({ _id: id }).populate('author')
        .then(poster => res.send(poster))
        .catch(next);
        return;
    },
    post: function (req, res, next) {
        const { title, price, category, imageUrl, description } = req.body;
        const { _id } = req.user;
        let priceNumber = price == 'Low' ? 20 : (price == 'Medium' ? 50 : 100);
        models.Poster.create({ title, price: priceNumber, category, imageUrl, description, author: _id })
            .then((createdPoster) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdPoster } }),
                    models.Poster.findOne({ _id: createdPoster._id })
                ])
            })
            .then(([modifiedUser, createdPoster]) => {
                res.send(createdPoster);
            })
            .catch(next);
    },
    put: function (req, res, next) {
        const id = req.params.id;
        const { description } = req.body;
        models.Poster.updateOne({ _id: id }, { description })
            .then((updatedPoster) => res.send(updatedPoster))
            .catch(next);
    },
    delete: function (req, res, next) {
        const id = req.params.id;
        models.Poster.deleteOne({ _id: id })
            .then((deletedPoster) => res.send(deletedPoster))
            .catch(next);
    }
}