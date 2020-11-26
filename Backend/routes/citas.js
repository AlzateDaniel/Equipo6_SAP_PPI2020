const { Router } = require('express');
const citas = Router();
const mysqlConnection = require('../db/db');


//1 Servicio
citas.get ('/citas', (req,res) => {
    mysqlConnection.query('SELECT * FROM citas', (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
});



// 2 servicio
// servicio para agregar una nueva cita 
citas.post('/citas/nueva-cita', (req,res)=>{
    console.log(req.body);
    const { id_user, id_servicio, id_empleado, fecha_cita, hora_cita } = req.body;
    const cita = [ id_user, id_servicio, id_empleado, fecha_cita, hora_cita  ];

    const nuevaCita = `INSERT INTO citas( id_user, id_servicio, id_empleado, fecha_cita, hora_cita ) VALUES (?,?,?,?,?)`;
    
    mysqlConnection.query(nuevaCita,cita, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`nueva cita agregada`});
        } 
    });
});



// 3 servicio
// servicio para actualizar el perfil del usuario y se actualize en la base de datos
citas.put('/citas/:id_cita', (req,res)=>{

    const { fecha_cita, hora_cita } = req.body;
    const { id_cita } = req.params;
   mysqlConnection.query('UPDATE citas SET fecha_cita = ?,hora_cita = ? WHERE id_cita = ?',
   [ fecha_cita, hora_cita, id_cita ], (err, rows, fields) => {
       if (!err) {
           res.json({status: 'Cita actualizada'});
       } else {
           console.log(err);
       }
   });
});

// 4 servicio
// servicio para eliminar un usuario
citas.delete ('/citas/:id_cita', (req,res) => {
    const { id_cita } = req.params;
    mysqlConnection.query('DELETE FROM citas WHERE id_cita = ?', [id_cita], (err, rows, fields) => {
            if (!err) {
                res.json({status: 'Cita eliminada'});
            } else {
                console.log(err);
            }
        });
});







module.exports = citas;