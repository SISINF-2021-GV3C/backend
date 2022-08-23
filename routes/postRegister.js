const express = require('express')
const router = express.Router()
//const myPassport = require('../configs/passport')
const User = require('../models/user')
router.post('/', async (req, res) => {
    console.log("Registrando usuario")
    res.setHeader('Content-Type', 'application/json');
    respuesta = {
        "exito": await User.create(req.body.firstName,req.body.lastName,req.body.email,req.body.username,req.body.password,req.body.tlf)
    }
    res.send(respuesta)
   console.log(respuesta)
})
module.exports = router