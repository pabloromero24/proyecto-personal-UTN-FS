var express = require('express');
var router = express.Router();
var novedadesModel = require('../../models/novedadesModel');

router.get('/', async function(req, res, next) {

var novedades = await novedadesModel.getNovedades();

  res.render('admin/novedades', {
    layout: 'admin/layout',
    persona: req.session.nombre,
    novedades
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  });
});

router.post('/agregar', async (req, res, next) => {
  try {

    console.log(req.body)
    if (req.body.nombre != "" && req.body.descripcion != "" && req.body.precio != ""){
      await novedadesModel.insertProducto(req.body);
      res.redirect('/admin/novedades')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, 
        message: 'Todos los campos son requeridos' 
      })
    }
  } catch (error) {
    console.log(error)
    res.render('admin/agregar', {
      layout:'admin/layout',
      error: true,
      message: 'No se cargó el producto'
    });
  }
});

router.get('/confirmar-eliminar/:id', (req, res) => {
  const id = req.params.id;
  res.render('admin/confirmar-eliminar', { id });
});

router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await novedadesModel.deleteNovedadById(id);
  res.redirect('/admin/novedades')
});

router.get('/modificar/:id', async (req, res, next) => {

  let id = req.params.id;
  let novedad = await novedadesModel.getNovedadesById(id);
  res.render('admin/modificar', {
    layout: 'admin/layout',
    novedad
  });
});

router.post('/modificar', async (req, res, next) => {
  try {
    let obj = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio
    }

    await novedadesModel.modificarNovedadesById(obj, req.body.id);
    res.redirect('/admin/novedades');
  }
  catch (error) {
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/modificar',
      error: true, 
      message: 'No se cargó el producto'
    })
  }
})

module.exports = router;