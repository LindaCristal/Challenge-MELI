import { useEffect, useState } from "react";

const useDetail = (query) => {
  const [detail, setDetail] = useState([]); 

  useEffect(() => {
    if (query && query !== ""){}
     
  }, [query]);

  return { detail };
};

export default useDetail;