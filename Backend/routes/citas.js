const { Router } = require('express');
const router = Router();
const mysqlConnection = require('../db/db');


//1 Servicio
router.get ('/citas', (req,res) => {
    mysqlConnection.query('SELECT * FROM citas', (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
});














module.exports = router;