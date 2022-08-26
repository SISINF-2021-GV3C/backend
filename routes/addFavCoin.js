const express = require('express')
const router = express.Router()
//const myPassport = require('../configs/passport')
const User = require('../models/user')
router.post('/', async (req, res) => {
    console.log("Registrando usuario")
    res.setHeader('Content-Type', 'application/json');
    respuesta = {
        "exito": await User.addFavCoin(req.body.username,req.body.coin)
    }
    res.send(respuesta)
    console.log(respuesta)
})
module.exports = router