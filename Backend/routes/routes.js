const { Router } =require('express');
const router = Router();

// Para subir archivos
const multer = require('multer');
// uuid para cambiar el nombre de los archivos
const { uuid } = require('uuidv4');
//path para utilizar el dirname
const path = require('path');




// Para que guarde los archivos en public y dentro en una carpeta llamada uploads
const storage = multer.diskStorage({
    destination: path.join(__dirname, '../public/uploads'),
    filename:  (req, file, cb) => {
        cb(null, file.originalname);
    }
})



const cargaImagen = multer({
    storage,
    limits: {fileSize: 1000000}
}).single('image');


// Esta es la funcion para realizar la subida de una imagen o un documento a la carpeta dentro de public y uploads
router.post('/images/upload', (req, res) => {
    cargaImagen(req, res, (err) => {
        if (err) {
            err.message = 'Error al cargar el archivo.';
            return res.send(err);
        }
        console.log(req.file);
        res.send('Imagen cargada!');
    });
});


module.exports = router;
