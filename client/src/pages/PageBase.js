import React from "react";
import SearchBox from "../components/SearchBox";
import Breadcrumb from "../components/Breadcrumb";

const PageBase = ({ children }) => {

    return (
        <>
            <SearchBox></SearchBox>            
            <div className="container px-0 page-container">
            <Breadcrumb></Breadcrumb>
                {children}
            </div>

        </>
    )
}


export default PageBase
