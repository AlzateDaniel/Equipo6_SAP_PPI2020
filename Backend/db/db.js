const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
    host: 'behurr77mquywjcfysqw-mysql.services.clever-cloud.com',
    user: 'ut2u2zvctlvyy9yc',
    password: 'KDOaFmrJJCL6KMy31lpb',
    database: 'behurr77mquywjcfysqw',
    multipleStatements: true
});

mysqlConnection.connect((error)=>{
    if(error){
        console.error(error);
        return;
    }else{
        console.log('Conexion exitosa con base datos')
    }
})

module.exports = mysqlConnection;
