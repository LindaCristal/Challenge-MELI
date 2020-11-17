import { useEffect, useState } from "react";
import axios from 'axios';

const _URLBase = process.env.REACT_APP_URL_API_BASE;


const useCategory = (query) => {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    if (query && query !== ""){
      return axios.get(`${_URLBase}items?q=${query}`)
        .then(res => {
          let data = res.data.categories;
          setCategories(data);
        })
        .catch(err => {
          throw err;
        });
    }
    else{
      setCategories([]);

    }
     
  }, [query]);

  return { categories };
};

export default useCategory;