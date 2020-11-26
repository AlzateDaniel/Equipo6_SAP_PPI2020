const { Router } = require('express');
const empleados = Router();
const mysqlConnection = require('../db/db');



//1 Servicio seleccionar registros de empleados
empleados.get ('/empleados', (req,res) => {
    mysqlConnection.query('SELECT * FROM empleados', (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
});

// 2 servicio
//servicio para la tabla usuarios pueda solicitar un registro de usuario por el Id
empleados.get('/empleados/:id_empleado', (req,res)=>{
    const { id_empleado } = req.params;
    mysqlConnection.query('SELECT * FROM empleados WHERE id_empleado = ?',[id_empleado], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// 3 servicio
// servicio para Poder agregar un nuevo empleado y que se inserte en la base de datos
empleados.post('/empleados/nuevo-empleado', (req,res)=>{
    const { nombre_completo,correo,contraseña,servicio,celular } = req.body;
    const empleado = [ nombre_completo,correo,contraseña,servicio,celular ];

    const nuevoEmpleado = `INSERT INTO empleados(nombre_completo,correo,contraseña,servicio,celular) VALUES (?,?,?,?,?)`;

    mysqlConnection.query(nuevoEmpleado, empleado, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `nuevo empleado agregado`});
        }
    });
});


// 4 servicio
// servicio para actualizar el perfil del usuario y se actualize en la base de datos
empleados.put('/empleados/:id_empleado', (req,res)=>{

    const { nombre_completo,correo,contraseña,servicio,celular } = req.body;
    const { id_empleado } = req.params;
   mysqlConnection.query('UPDATE empleados SET nombre_completo = ?,correo = ?,contraseña = ?,servicio = ?,celular = ? WHERE id_empleado = ?',
   [nombre_completo,correo,contraseña,servicio,celular, id_empleado ], (err, rows, fields) => {
       if (!err) {
           res.json({status: 'Empleado actualizado'});
       } else {
           console.log(err);
       }
   });
});


// 5 servicio
// servicio para eliminar un usuario
empleados.delete ('/empleados/:id_empleado', (req,res) => {
    const { id_empleado } = req.params;
    mysqlConnection.query('DELETE FROM empleados WHERE id_empleado = ?', [id_empleado], (err, rows, fields) => {
            if (!err) {
                res.json({status: 'Empleado eliminado'});
            } else {
                console.log(err);
            }
        });
});








module.exports = empleados;