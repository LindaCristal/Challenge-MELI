import React from "react";


const ItemDetail = ({item}) => {
    
  const mock = {
    id: "1",
    picture: "https://http2.mlstatic.com/D_NQ_NP_945168-MLA42306498947_062020-O.webp",
    price: "$73.999",
    address: "mock",
    title: "Notebook Hp G6 240n 14,1 Intel I3 4gb 1tb Bidcom Hot Sale",
    leyendasuperior: "nuevo - 24 vendidos",
    Descripcion:"Ideal para toda clase de presupuestos y lista para los negocios. La económica notebook HP 240 ofrece la tecnología más reciente y un chasis duradero que ayuda a protegerla. Completá todas tus tareas de forma rápida y eficaz."
  }

    return (
        <div class="container">
            <div class="row">
                <div class="col-8">
                    <img className="align-self-center mr-3 img-detail"
                        src={mock.picture}
                        alt="Generic placeholder image" />
                </div>
                <div class="col">
                    <form>
                        <div class="form-group">
                        <p className="item-c">{mock.leyendasuperior}</p>
                            <p className="font-weight-bold item-title">{mock.title}</p>
                            <p className="item-price">{mock.price}</p>
                        </div>
                        <button type="button" class="btn btn-primary btn-lg btn-block">Comprar</button>
                    </form>
                </div>

                <div class="w-100 d-none d-md-block center"></div>
                <div class="col-8">
                    <h3>Descripción del producto</h3>
                    <br/>
                <p>{mock.Descripcion}</p>
                    
                </div>
            </div>
        </div>
    );



};



export default ItemDetail;
