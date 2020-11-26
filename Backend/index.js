'use strict';

const express = require('express');
const bodyParser = require('body-parser')

//Importaciones de las tablas
const usuarios = require('./routes/usuarios');
const empleados = require('./routes/empleados');
const servicios = require('./routes/servicios');
const citas = require('./routes/citas');

const path = require('path');
// Inicializamos expresss
const app = express();

// Para subir archivos
const multer = require('multer');
// uuid para cambiar el nombre de los archivos
const { uuid } = require('uuidv4');

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


//Rutas
app.use('/api', usuarios);
app.use('/api', empleados);
app.use('/api', servicios);
app.use('/api', citas);

// Middlewares
app.use(express.json());

//Servidor
app.get('/', (req, res) => {
    res.send('Servidor BeautyServices corriendo');
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
app.set('port', 4001);

//Iniciamos el servidor
app.listen(app.get('port'), () => {
    console.log(`Servidor de BeautyServices corriendo en el puerto ${app.get('port')}`);
});