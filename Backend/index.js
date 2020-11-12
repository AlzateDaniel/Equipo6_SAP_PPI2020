'use strict';

// Para inicilizar en express
const express = require('express');
// Para subir archivos
const multer = require('multer');
// uuid para cambiar el nombre de los archivos
const { uuid } = require('uuidv4');
//path para utilizar el dirname
const path = require('path');
// Inicializamos express
const app = express();

//Base de datos
const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'DanielAlzate',
    password: '1001470183Dam',
    database: 'beautyservices',
    multipleStatements: true
});
mysqlConnection.connect((error)=>{
    if(error){
        console.error(error);
        return;
    }else{
        console.log('Y conexion de base ¡Exitosa!')
    }
});




// Esta es la parte donde se realiza la parte de subir una imagen o archivo
//Multer Middlwares
const storage = multer.diskStorage({
    //Creamos la carpeta si no existe
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, uuid() + path.extname(file.originalname));
    }
});

app.use(multer({storage}).single('image'));

// Routes
app.use(require('./routes/routes'));







//Establecemos el puerto
app.set('port', process.env.PORT || 4000);

//Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor de BeautyServices corriendo ${app.get('port')}`);
});