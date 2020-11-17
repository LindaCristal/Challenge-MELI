import React from "react";
import { useHistory, useLocation } from "react-router-dom";
import Item from "../components/Item";
import useItems from '../customHooks/useItems';

const ItemList = () => {

  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const value = query.get("query");
  const { items } = useItems(value);
  const history = useHistory();

  const onClick = e => {
    history.push(`/items/${e}`);
  };
 if (items)
 
  return (
    <div >
      <ul className="list-group notBorder">
        {items.map((item) => {
          return (
            <li key={item.id}
              className="list-group-item  "
              onClick={()=> onClick(item.id)}>
              <Item props={item}></Item >
            </li>
          );
        })}
      </ul>
    </div>)
};

export default ItemList;



