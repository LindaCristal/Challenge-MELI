import React from 'react';

const Item = ({ props }) => {
    return (
        <div className="media">
            <img className="align-self-center mr-3"
                src={props.picture}
                alt="Generic placeholder image" />
            <div className="media-body">
                <div className="row">
                    <div className="col-9">
                        <h5 className="mt-0">{props.price}</h5>
                    </div>
                    <div className="col">
                        <p>{props.address}</p>
                    </div>
                </div>
                <p className="mb-0">{props.title}</p>
            </div>
        </div>
    );

}
export default Item;