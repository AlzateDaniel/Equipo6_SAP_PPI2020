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
        console.log('¡Conexion exitosa con base datos!')
    }
})

module.exports = mysqlConnection;
