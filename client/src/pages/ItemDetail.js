import React from "react";
import useDetail from '../customHooks/useDetail';
import { useParams } from "react-router-dom";

const ItemDetail = () => {

    let { id } = useParams();
    const { detail } = useDetail(id);

    const numberFormat = new Intl.NumberFormat("de-DE").format(detail.price);

    return (
        <div className="container ">
            <div className="row">
                <div className="col-8">
                    <img className="img-thumbnail mr-3 img-detail p-0 mt-3 mx-auto d-block notBorder"
                        src={detail.picture}
                        alt="Generic placeholder image" />
                </div>
                <div className="col-3">
                    <form>
                        <div className="form-group ">
                            <p className="item-c mt-5">{detail.condition === "new" ? "Nuevo" : "Usado"} - {detail.sold_quantity} {detail.sold_quantity > 1 ? " vendidos" : "vendido"} </p>
                            <p className="font-weight-bold item-title">{detail.title}</p>
                            <p className="item-price">${numberFormat}{detail.decimals}</p>
                        </div>
                        <button type="button" className="btn btn-primary btn-lg btn-block">Comprar</button>
                    </form>
                </div>
                <div className="w-100 d-none d-md-block center"></div>
                <div className="col-8">
                    <br />
                    <br />
                    <h3 className="font-description-title">Descripción del producto</h3>
                    <br />
                    <p className="font-description">{detail.description}</p>
                </div>
            </div>

        </div>
    );
};

export default ItemDetail;