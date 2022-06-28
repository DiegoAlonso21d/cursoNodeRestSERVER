const{response, request}=require('express');

   const usuariosGet= (req=request, res=response) => {
    const query=req.query;

    res.json({
        msg:'get API - controlador',
        query
    });
}


const usuariosPut = (req, res) => {

    const id= req.params.id;

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const usuariosPost = (req, res) => {
    const {nombre,edad}=req.body;

    res.status(201).json({
        ok: true,
        msg: 'post API',
        nombre,edad
    });
}

const usuariosDelete = (req, res) => {
    res.json({
        ok: true,
        msg: 'delete API'
    });
}


const usuariosPatch = (req, res) => {
    res.json({
        ok: true,
        msg: 'patch API'
    });
}






module.exports={
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}