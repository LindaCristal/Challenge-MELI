import { useEffect, useState } from "react";
import axios from 'axios';

const _URLBase = process.env.REACT_APP_URL_API_BASE;

const useDetail = (id) => {
  const [detail, setDetail] = useState([]);

  useEffect(() => {
    if (id && id !== "") {
      axios.get(`${_URLBase}items/${id}`)
        .then(res => {
          let data = res.data.item;

          setDetail({
            pictures: data.pictures,
            description: data.description,
            condition: data.condition,
            title: data.title,
            sold_quantity: data.sold_quantity,
            price: data.price.amount
          }
          );

        })
        .catch(err => {
          throw err;
        });
    }

  }, [id]);

  return { detail };
};
export default useDetail;