const axios = require('axios').default;

const _BASEURL = 'https://api.mercadolibre.com';

const author = {
    name: "Linda",
    lastname: "Parra"
}

exports.getItems = (query) => {

    let itemList = `${_BASEURL}/sites/MLA/search?q=${query}`;

    return axios.get(itemList)
        .then((response) => {

            const data = response.data;

            var listCategories = [];
            if (data.filters) {
                const filter = data.filters
                    .find(filter => filter.id == "category");

                if (filter) {
                    listCategories = filter.values[0].path_from_root
                        .map((categories) => categories.name);
                }
            }

            var items = [];
            if (data.results) {
                items = data.results.slice(0, 4);

                items = items.map(item => {
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

            return {
                author: author,
                categories: listCategories,
                items: items
            }
        })
}

exports.getDetails = (id) => {

    let item = `${_BASEURL}/items/${id}`;
    let description = `${_BASEURL}/items/${id}/description`;

    const requestItem = axios.get(item);
    const requestDesciption = axios.get(description);

    return axios.all([requestItem, requestDesciption])
        .then(axios.spread((requestItem, requestDesciption) => {
            const data = requestItem.data;

            var url_picture = '';
            if (data.pictures) {
                url_picture = data.pictures.length ? data.pictures[0].secure_url : '';
            }
            const free_shipping = data.shipping ? data.shipping.free_shipping : false;         

            var item = {
                id: data.id,
                title: data.title,
                price: data.price,
                picture: url_picture,
                condition: data.condition,
                free_shipping: free_shipping,
                sold_quantity: data.sold_quantity,
                description: requestDesciption.data.plain_text
            }

            return {
                author: author,
                item: item
            }
        }))

}