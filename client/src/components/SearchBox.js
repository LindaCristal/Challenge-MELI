import React, { useState } from 'react';
import logo_small from "../assets/logo__small.png";

const SearchBox = () => {

    const [value, setValue] = useState("");

    const onChange = e => {
        setValue(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();
        alert(value)
      };

    return (
        <div className="header">
            <ul className="nav justify-content-center pt-3 container" >
                <li className="nav-item mr-4 ">
                    <img src={logo_small} alt="Mercado Libre"></img>
                </li>
                <li className="nav-item flex-grow-1 " >
                    <form  onSubmit={onSubmit} >
                        <div className="input-group mb-3 ">
                            <input type="text"
                                class="form-control"
                                placeholder="Nunca dejes de buscar"
                                value={value}
                                onChange={onChange}
                                required
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-secondary"
                                    type="submit" id="button-addon2">dibujar lupita
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