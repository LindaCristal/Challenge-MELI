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

  const onSubmit = e => {
    e.preventDefault();
    history.push(`/items?query=${value}`);
  };

  return (
    <div >
      <ul className="list-group notBorder">
        {items.map((item) => {
          return (
            <li key={item.id}
              className="list-group-item  "
              onClick={onSubmit}>
              <Item props={item}></Item >
            </li>
          );
        })}
      </ul>
    </div>)
};

export default ItemList;



  // const onSelectItem = (item) => onClick(item);

  // const mock = {
  //   id: "1",
  //   picture: "https://http2.mlstatic.com/D_NQ_NP_701408-MLA40706646108_022020-O.webp",
  //   price: "73.999, 00",
  //   address: "Santa Fe",
  //   title: "Notebook Hp G6 240n 14,1 Intel I3 4gb 1tb Bidcom Hot Sale",
  //   leyendasuperior: "nuevo - 24 vendidos",
  //   Descripcion: "Ideal para toda clase de presupuestos y lista para los negocios ",
  //   shipping:shipping
  // }

  // const prueba = [
  //   mock,
  //   mock
  // ]
