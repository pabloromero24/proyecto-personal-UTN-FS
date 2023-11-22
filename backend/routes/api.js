var express = require('express');
var router = express.Router();
var novedadesModel = require('./../models/novedadesModel');
const cloudinary = require('cloudinary').v2;


router.get('/novedades', async function (req, res, next) {
    let categoria = req.query.categoria;
    let novedades = await novedadesModel.getNovedades(categoria);

    

    novedades = novedades.map(novedades => {
        if (novedades.img_id) {
            const imagen = cloudinary.url(novedades.img_id, {
                width: 1000,
                height: 1000,
                crop: 'fill'
            });
            return {
                ...novedades,
                imagen
            }
        } else {
            return {
                ...novedades,
                imagen: ''
            }
        }
    });
    res.json(novedades);
});

module.exports = router;