import React from "react";
import { useLocation } from "react-router-dom";
import useCategory from '../customHooks/useCategory';


const Breadcrumb = () => {
    const { search } = useLocation();
    const query = new URLSearchParams(search);
    const value = query.get("query");
    const { categories } = useCategory(value);

    return (
        <div class="">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb rounded-0 mb-0" >
                    {
                        categories.map(i =>
                        <li key={i}
                        className="breadcrumb-item"><a href="#">{i}</a></li>
                             )
                    }
                    {/* <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li> */}
                </ol>
            </nav>
        </div>
    );
};



export default Breadcrumb;
