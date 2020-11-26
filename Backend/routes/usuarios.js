const { Router } = require('express');
const usuarios = Router();
const mysqlConnection = require('../db/db');


//1 Servicio
//servicio para ver las tablas de los usuarios
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
//servicio para la tabla usuarios pueda solicitar un registro de usuario por el Id
usuarios.get('/usuarios/:id_user', (req,res)=>{
    const { id_user } = req.params;
    mysqlConnection.query('SELECT * FROM usuarios WHERE id_user = ?',[id_user], (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

// 3 servicio
// servicio para agregar un nuevo usuario a la base de datos
usuarios.post('/usuarios/nuevo-usuario', (req,res)=>{
    const { nombres,correo,contraseña,barrio,direccion,celular } = req.body;
    const usuario = [nombres,correo,contraseña,barrio,direccion,celular ];

    const nuevoUsuario = `INSERT INTO usuarios(nombres,correo,contraseña,barrio,direccion,celular) VALUES (?,?,?,?,?,?)`;

    mysqlConnection.query(nuevoUsuario,usuario, (err, results, fields)=>{
        if(err){
            return console.error(err.message);
        }else{
            res.json({message:`nuevo cliente agregado`});
        } 
    });
});


//4 Servicio
// servicio para actualizar el perfil del usuario y se actualize en la base de datos
usuarios.put('/usuarios/:id_user', (req,res)=>{

    const { nombres,correo,contraseña,barrio,direccion,celular } = req.body;
    const { id_user } = req.params;
   mysqlConnection.query('UPDATE usuarios SET nombres = ?,correo = ?,contraseña = ?,barrio = ?,direccion = ?,barrio = ? WHERE id_user = ?',
   [nombres,correo,contraseña,barrio,direccion,celular,id_user ], (err, rows, fields) => {
       if (!err) {
           res.json({status: 'Usuario actualizado'});
       } else {
           console.log(err);
       }
   });
});


// 5 servicio
// servicio para eliminar un usuario
usuarios.delete ('/usuarios/:id_user', (req,res) => {
    const { id_user } = req.params;
    mysqlConnection.query('DELETE FROM usuarios WHERE id_user = ?', [id_user], (err, rows, fields) => {
            if (!err) {
                res.json({status: 'Usuario eliminado'});
            } else {
                console.log(err);
            }
        });
});









module.exports = usuarios;