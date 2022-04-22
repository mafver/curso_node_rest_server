const { response,request } = require('express')


const usuariosGet = (req=request, res=response) =>{
    // Obtenemos las query de la petición; https://localhost:8081/?nombre
    const { q, nombre = 'no name', apikey, page = 1, limit=100 } = req.query
    res.json({
        msg: 'Get API -- controlador',
        q,
        nombre,
        apikey,
        page,
        limit
        
    })
}
const usuariosPost = (req, res=response) =>{
    const { nombre, edad } = req.body
    res.json({
        msg: 'Post API -- controlador',
        nombre, 
        edad
    })
}

const usuariosPut = (req=request, res=response) =>{
    // Obtenemos datos 
    const { id } = req.params;
    res.json({
        msg: 'Put API -- controlador',
        id
    })
}
const usuariosDelete = (req, res=response) =>{
    res.json({
        msg: 'Delete API -- controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}