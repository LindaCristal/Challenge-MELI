var express = require('express');
const axios = require('axios');
const _BASEURL = 'https://api.mercadolibre.com';

var router = express.Router();

router.get('/items/:id', function (req, res, next) {

    let id = req.params.id;
    let item = `${_BASEURL}/items/${id}`;
    let description = `${_BASEURL}/items/${id}/description`;

    const requestItem = axios.get(item);
    const requestDesciption = axios.get(description);

    axios.all([requestItem, requestDesciption])
        .then(axios.spread((requestItem, requestDesciption) => {

            const data = requestItem.data;

            var url_picture = '';
            if (data.pictures) {
                url_picture = data.pictures.length ? data.pictures[0].secure_url : '';
            }
            const free_shipping = data.shipping ? data.shipping.free_shipping : false;

            var price_array = data.price.toString().split('.');

            const price = price_array[0];
            const decimals = price_array[1] ? price_array[1] : '00';

            var priceParse = {
                currency: data.currency_id,
                amount: price,
                decimals: decimals
            }

            var item = {
                id: data.id,
                title: data.title,
                price: priceParse,
                picture: url_picture,
                condition: data.condition,
                free_shipping: free_shipping,
                sold_quantity: data.sold_quantity,
                description: requestDesciption.data.plain_text
            }

            var author = {
                name: "Linda",
                lastname: "Parra"
            }

            var response = {
                author: author,
                item: item
            }

            res.json(response)
            
        })).catch(err => next(error))

});
module.exports = router;
