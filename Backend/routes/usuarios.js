const { Router } = require('express');
const usuarios = Router();
const mysqlConnection = require('../db/db');

//1 Servicio
usuarios.get ('/usuarios', (req,res) => {
    mysqlConnection.query('SELECT * FROM usuarios', (err, rows, fields) => {
            if (!err) {
                res.json(rows);
            } else {
                console.log(err);
            }
        });
});


// 2 servicio
// TABLA: Registro de usuario
// OBJETIVO: Poder agregar un nuevo usuario y que se inserte en la base de datos
usuarios.post('/nuevo-usuario', (req,res)=>{
    const { nombre_completo,correo,contraseña,barrio,direccion,celular } = req.body;
    const usuario = [ nombre_completo,correo,contraseña,barrio,direccion,celular ];

    const nuevoUsuario = `INSERT INTO usuarios(nombre_completo,correo,contraseña,barrio,direccion,celular) VALUES (?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoUsuario, usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message: `nuevo cliente agregado`});
        }
    });
});




module.exports = usuarios;