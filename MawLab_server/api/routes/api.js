// Dependencias
var express = require('express');
var router = express.Router();

// Modelo
var Product = require('../models/product')
Product.methods(['get', 'put', 'post', 'delete']);
Product.register(router, '/products')

// return Router
module.exports = router;
