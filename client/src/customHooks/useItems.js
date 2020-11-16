import { useEffect, useState } from "react";
import axios from 'axios';

const _URLBase = process.env.REACT_APP_URL_API_BASE;

const useItems = (query) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (query && query !== "") {
      axios.get(`${_URLBase}items?q=${query}`)
        .then(res => {
          let data = res.data.items.map((i) => {
            return {
              id: i.id,
              address: i.address,
              condition: i.condition,
              free_shipping: i.free_shipping,
              picture: i.picture,
              price: i.price.amount,
              priceDecimal: i.price.decimals,
              title: i.title
            }
          });

          setItems([...data]);
        })
        .catch(err => {
          throw err;
        });
    }

  }, [query]);

  return { items };
};

export default useItems;