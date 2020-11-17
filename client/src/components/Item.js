import React from 'react';
import shippingImg from '../assets/ic_shipping.png';

const Item = ({ props }) => {
    const showShipping = () => {
        if (props.free_shipping)
            return (
                <img src={shippingImg}
                    alt="Generic placeholder image"
                    className="item-shipping" />
            )
    }

    const numberFormat = new Intl.NumberFormat("de-DE").format(props.price);

    return (
        <div className="notBorder">
            <div className="media pt-0 py-3">
                <img className="align-self-center col-3 rounded-lg thumbnail"
                    src={props.picture}
                    alt="Generic placeholder image" />
                <div className="media-body">
                    <div className="row">
                        <div className=" align-self-center col-12">
                            <h5 className="mt-0">${numberFormat}
                                <span>{showShipping()}</span>
                            </h5>
                            <br />
                        </div>

                    </div>
                    <p className="mb-0">{props.title}</p>
                </div>
                <div className="col-3 ">
                    <p>{props.address}</p>
                </div>
            </div>
        </div>
    );

}
export default Item;