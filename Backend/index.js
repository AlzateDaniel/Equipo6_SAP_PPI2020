'use strict';

const express = require('express');

//Importaciones de las tablas
const usuarios = require('./routes/usuarios');
const empleados = require('./routes/empleados');
const servicios = require('./routes/servicios');
const citas = require('./routes/citas');

const path = require('path');
// Inicializamos express
const app = express();


// Para subir archivos
const multer = require('multer');
// uuid para cambiar el nombre de los archivos
const { uuid } = require('uuidv4');




// Middlewares
app.use(express.json());


//Servidor
app.get('/', (req, res) => {
    res.send('Servidor BeautyServices corriendo');
});


//Rutas
app.use('/api', usuarios);
app.use('/api/empleados', empleados);
app.use('/api/servicios', servicios);
app.use('/api/citas', citas);



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
app.set('port', 4000);

//Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor de BeautyServices corriendo en el puerto ${app.get('port')}`);
});