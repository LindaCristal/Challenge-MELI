var express = require('express');
const axios = require('axios');

var router = express.Router();
var responsePayload = {"author":{"name":"Linda","lastname":"Parra"},"item":{"id":"MLA873576748","title":"Gatos Persas Himalayos ! Excelentes Reservas!","price":{"currency":"ARS","amount":45000,"decimals":0},"condition":"new","free_shipping":false,"sold_quantity":0,"description":"Gatitos persas himalayos pelo largo ojos azules nuevos nacimientos en enero .contado :33.000 machitos hembritas 40.000 \nCaracteristicas : son de pelo largo ojos azules o celestes pueden ser blue point ( gris) o seal point ( chocolate\nFoto 1 madre \nFoto 2 padre\nResto de las fotos son bebes de otras camadas .\nNo se realizan envios fuera de la provincia de Cordoba para preservar su seguridad.\nEsta raza de gatos no se entregan antes de los 65 dias.\nSon para vivir solo en interior , no tienen instinto de supervivencia como un gato comun ademas los roban con facilidad!","picture":"https://http2.mlstatic.com/D_887758-MLA43178592449_082020-O.jpg"}}

router.get('/items/:id', (req, res, next) =>
{
    let id = req.params.id;
    res.json(responsePayload);
});
module.exports = router;
