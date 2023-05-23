var express = require('express');
var router = express.Router();

const Area = require('../models/area');

/* GET areas listing. */
router.get('/', function(req, res, next) {
  Area.findAll().then((areas) => {
    res.statusCode = 200
    res.send({
      data: areas
    });
  });
});

/* FIND area */
router.get('/:id', function(req, res, next) {
  const areaId = req.params.id;
  Area.findByPk(areaId)
    .then(area => {
      if (area) {
        res.statusCode = 200;
        res.send({
          message: 'Area encontrada',
          data: area.toJSON()
        });
      } else {
        res.statusCode = 404;
        res.send({
          message: `No se encontró ninguna Area con ID ${areaId}`
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

/* CREATE areas */
router.post('/', (req, res) => {
  const { name, status } = req.body;

  Area.create({
      name,
      status
  })
      .then(area => {
        res.statusCode = 201;
        res.send({
          message: 'Area creada correctamente',
          data: area.toJSON()
        });
      })
      .catch(err => {
        res.statusCode = 400;
        res.send({
          message: 'Error al crear area'
        });
      });
});

module.exports = router;
