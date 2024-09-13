const {Pool} = require("pg");
const config = require("dotenv").config();

const conexionPg = new Pool({
    host: process.env.host,    
    port: process.env.port_db,           
    user: process.env.user,   
    password: process.env.password, 
    database: process.env.database
});

conexionPg.connect((err, client, release) => {
    if (err) {
        return console.error('Error al conectar a la base de datos', err.stack);
    }
    console.log('Conexión exitosa a la base de datos');
    release();
});


module.exports = conexionPg;