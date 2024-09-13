const express = require('express');
const router = express.Router();
const { obtenerBodegas,crearBodega,eliminarBodega,actualizarBodega} = require('../controller/bodega.controller');

//rutas de la bodega
router.get('/bodegas', obtenerBodegas);
router.post('/crearbodega',crearBodega);
router.delete('/borrarbodega',eliminarBodega);
router.put('/actualizarbodega',actualizarBodega);


module.exports = router;
