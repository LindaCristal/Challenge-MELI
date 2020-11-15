import React from "react";
import SearchBox from "../components/SearchBox";

const PageBase = ({ children }) => {

    return (
        <>
            <SearchBox></SearchBox>
            <div className="container px-0">
            { children }
            </div>
        </>
    )
}


export default PageBase
