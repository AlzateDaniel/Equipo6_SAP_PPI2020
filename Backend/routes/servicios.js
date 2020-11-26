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

// 2 servicio
//servicio para la tabla servicios pueda solicitar un registro de usuario por el Id
servicios.get('/servicios/:id_servicio', (req,res)=>{
    const { id_servicio } = req.params;
    mysqlConnection.query('SELECT * FROM servicios WHERE id_servicio = ?',[id_servicio], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// 3 servicio
// servicio para eliminar un usuario
servicios.delete ('/servicios/:id_servicio', (req,res) => {
    const { id_servicio } = req.params;
    mysqlConnection.query('DELETE FROM servicios WHERE id_servicio = ?', [id_servicio], (err, rows, fields) => {
            if (!err) {
                res.json({status: 'Servicio eliminado'});
            } else {
                console.log(err);
            }
        });
});









module.exports = servicios;