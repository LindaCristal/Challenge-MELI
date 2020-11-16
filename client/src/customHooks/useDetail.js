import { useEffect, useState } from "react";
import axios from 'axios';

const _URLBase = process.env.REACT_APP_URL_API_BASE;

const useDetail = (query) => {
  const [detail, setDetail] = useState([]); 

  useEffect(() => {
    if (query && query !== ""){
        if (query && query !== "") {
            return axios.get(`${_URLBase}items/${query}`)
              .then(res => {
                detail = res.data;
                setItems({ detail });
              })
              .catch(err => {
                throw err;
              });
          }
    }
     
  }, [query]);

  return { detail };
};

export default useDetail;