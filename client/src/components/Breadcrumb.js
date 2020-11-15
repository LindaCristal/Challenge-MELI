import React from "react";


const Breadcrumb = () => {

    return (
        <div class="">
            <nav aria-label="breadcrumb ">
                <ol class="breadcrumb rounded-0 mb-0" >
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item"><a href="#">Library</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Data</li>
                </ol>
            </nav>
        </div>
    );
};



export default Breadcrumb;
