import { useEffect, useState } from "react";


const useItems = (query) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    if (query && query !== "")
      {}
  }, [query]);

  return { items };
};

export default useItems;