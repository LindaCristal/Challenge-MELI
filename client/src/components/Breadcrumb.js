import React from "react";
import { useLocation } from "react-router-dom";
import useCategory from '../customHooks/useCategory';

const Breadcrumb = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const value = query.get("query");
    const { categories } = useCategory(value);

    return (

        <nav aria-label="breadcrumb ">
            <ol className="breadcrumb rounded-0 mb-0" >
                {
                    categories.map(i =>
                        <li key={i}
                            className="breadcrumb-item">{i}
                        </li>
                    )
                }

            </ol>
        </nav>

    );
};



export default Breadcrumb;
