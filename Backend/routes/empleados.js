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
// TABLA: Registro de Empleado
// OBJETIVO: Poder agregar un nuevo empleado y que se inserte en la base de datos
empleados.post('/nuevo-empleado', (req,res)=>{
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







module.exports = empleados;