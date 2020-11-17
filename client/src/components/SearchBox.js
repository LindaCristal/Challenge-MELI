import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import logo_small from "../assets/logo__small.png";
import lupa from "../assets/ic_Search.png";
import breadcrumbs from "../components/Breadcrumb"


const SearchBox = () => {
    const [value, setValue] = useState("");
    const history = useHistory();

    const onChange = e => {
        setValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();          
         history.push(`/items?query=${value}`);
        setValue("");    
    };

    const Default = (e) => {
        e.preventDefault();
        history.push(`/`);
        setValue("");        
    };


    return (
        <div className="header">
            <ul className="nav justify-content-center pt-3 container" >
                <li className="nav-item mr-3 ">
                    <img src={logo_small}
                        alt="Mercado Libre codo a codo"
                        onClick={Default}></img>
                </li>
                <li className="nav-item flex-grow-1 " >
                    <form onSubmit={onSubmit} >
                        <div className="input-group mb-3 ml-3">
                            <input type="text"
                                className="form-control notBorder font-placeholder"
                                placeholder="Nunca dejes de buscar"
                                value={value}
                                onChange={onChange}
                                required />
                            <div className="input-group-append">
                                <button className="btn btn-lupa btn-outline-secondary"
                                    type="submit" id="button-addon2">
                                    <img src={lupa} ></img>
                                </button>
                            </div>
                        </div>
                    </form>
                </li>
            </ul>
        </div>
    )
}

export default SearchBox;