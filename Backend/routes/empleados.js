const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//1 Servicio
router.get ('/empleados', (req,res) => {
    mysqlConnection.query('SELECT * FROM empleados', (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
});














module.exports = router;