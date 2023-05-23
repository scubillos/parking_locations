var express = require('express');
var router = express.Router();

const Location = require('../models/location');

/* GET locations listing. */
router.get('/', function(req, res, next) {
  Location.findAll().then((locations) => {
    res.statusCode = 200
    res.send({
      data: locations
    });
  });
});

/* FIND location */
router.get('/:id', function(req, res, next) {
  const locationId = req.params.id;
  Location.findByPk(locationId)
    .then(location => {
      if (location) {
        res.statusCode = 200;
        res.send({
          message: 'Locación encontrada',
          data: location.toJSON()
        });
      } else {
        res.statusCode = 404;
        res.send({
          message: `No se encontró ninguna locación con ID ${locationId}`
        });
      }
    })
    .catch(error => {
      res.statusCode = error.statusCode;
      res.send({
        message: error.message
      });
    });
});

/* CREATE locations */
router.post('/', (req, res) => {
  const { name, parking_area_id, parking_number, type } = req.body;

  Location.create({
      name,
      parking_area_id,
      parking_number,
      type
  })
      .then(location => {
        res.statusCode = 201;
        res.send({
          message: 'Locación creada correctamente',
          data: location.toJSON()
        });
      })
      .catch(err => {
        res.statusCode = 400;
        res.send({
          message: 'Error al crear la locación',
          exception: err
        });
      });
});

module.exports = router;
