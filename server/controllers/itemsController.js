const itemsService = require('../services/itemsService');

exports.getDetails = (req, res, next) => {
    if (req.params.id) {
        itemsService.getDetails(req.params.id)
            .then((data) => {
                res.json(data);
            }).catch(error => next(error));

    }
}

exports.getItems = (req, res, next) => {
    if (req.query.q) {
        itemsService.getItems(req.query.q)
            .then((data) => {
                res.json(data);
            }).catch(error => next(error));
    }
}