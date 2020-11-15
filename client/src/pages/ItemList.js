import React from "react";
import Item from "../components/Item";


const ItemList = () => {
    const mock = {
        picture: "",
        price: "mock",
        address: "mock",
        title: "mock",
    }
    return (
        <div>
            <ul>
                <li>                
                    <Item props={mock}></Item>
                </li>
            </ul>

        </div>)
};



export default ItemList;
