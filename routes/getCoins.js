const express = require('express')
const router = express.Router()
//const myPassport = require('../configs/passport')
const Api = require('../configs/api')
router.get('/', async (req, res) => {
    console.log("Obteniendo monedas")
    res.setHeader('Content-Type', 'application/json');
    respuesta = {
        "exito": await Api.getCoins()
    }
    res.send(respuesta)
})
module.exports = router