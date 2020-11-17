var express = require('express');
const axios = require('axios');

const _BASEURL = 'https://api.mercadolibre.com/sites/MLA/';


var router = express.Router();

router.get('/items', function (req, res, next) 
{
  let query = req.query.q;

  var request = {
    url: `${_BASEURL}search?q=${query}`,
    method: 'GET'
  };

  axios(request)
    .then(response => {

      const data = response.data;

      var list_categories = [];
      if (data.filters) {
        const filter = data.filters.find(filter => filter.id == "category");

        if (filter) {
          list_categories = filter.values[0].path_from_root.map((cat) => cat.name);
        }
      }

      var items = [];
      if (data.results) {
        items = data.results.slice(0, 4);

        items = items.map(item => {

          // var priceFormat = item.price.toString().split('.');
          // const price = priceFormat[0];
          // const decimals = priceFormat[1] ? priceFormat[1] : '00';

          return {
            id: item.id,
            title: item.title,
            price: {
              currency: item.currency_id,
              amount: item.price,
              decimals: item.decimals
            },
            picture: item.thumbnail ? item.thumbnail : '',
            condition: item.condition,
            free_shipping: item.shipping ? item.shipping.free_shipping : false,
            address: item.address ? item.address.state_name : ''
          }
        });
      }

      var author = {
        name: "Linda",
        lastname: "Parra"
      }

      const result = {
        author: author,
        categories: list_categories,
        items: items
      }

      res.json(result)
    })
    .catch(err => err)
});

module.exports = router;
