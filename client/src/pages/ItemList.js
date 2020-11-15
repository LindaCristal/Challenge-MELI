
import React from "react";
import Item from "../components/Item";
import shipping from "../assets/ic_shipping.png";



const ItemList = ({ items, onClick }) => {

  // const onSelectItem = (item) => onClick(item);

  const mock = {
    id: "1",
    picture: "https://http2.mlstatic.com/D_NQ_NP_701408-MLA40706646108_022020-O.webp",
    price: "73.999, 00",
    address: "Santa Fe",
    title: "Notebook Hp G6 240n 14,1 Intel I3 4gb 1tb Bidcom Hot Sale",
    leyendasuperior: "nuevo - 24 vendidos",
    Descripcion: "Ideal para toda clase de presupuestos y lista para los negocios ",
    shipping:shipping
  }

  const prueba = [
    mock,
    mock
  ]
  return (
    <div >
      <ul className="list-group notBorder">
        {prueba.map((item) => {
          return (
            <li key={item.id}
              className="list-group-item  "
              onClick={() => alert("click")}>
              <Item props={item}></Item >
            </li>
          );
        })}
      </ul>
    </div>)
};



export default ItemList;
