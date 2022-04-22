require('dotenv').config()
const express = require("express");
const cors = require('cors')

class Server{
    
    constructor() {
        // Variables de inicio.
        this.app = express();
        this.port = process.env.PORT
        this.usuariosPath = '/api/usuarios'
        // Middlewares.
        this.midlewears();


        // Declaramos las rutas de mi aplicación.
        this.routes();
    }

    midlewears(){
        // CORS. Permite que lo enlaces o las rutas sólo ingresen por directorios determinados.
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use( express.json() );
        

        // Definir directorio estático public
        this.app.use( express.static('public'))
    }
    
    routes(){
        this.app.use(this.usuariosPath, require('../routes/users.routes'))
    }

    

    // Escuchamos el puerto.
    listen(){
        this.app.listen(this.port, () => {
            console.log(`Example app listening on port ${this.port}`)
        })
    }

}

module.exports =  Server;