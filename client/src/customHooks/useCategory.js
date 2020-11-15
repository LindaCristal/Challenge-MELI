import { useEffect, useState } from "react";



const useCategory = (query) => {
  const [categories, setCategories] = useState([]); 

  useEffect(() => {
    if (query && query !== ""){
      setCategories(["mock 1", "mock 2"])
    }
     
  }, [query]);

  return { categories };
};

export default useCategory;