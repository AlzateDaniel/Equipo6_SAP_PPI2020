const { Router } = require('express');
const servicios = Router();
const mysqlConnection = require('../db/db');

//1 Servicio
servicios.get ('/servicios', (req,res) => {
    mysqlConnection.query('SELECT * FROM servicios', (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
});






module.exports = servicios;