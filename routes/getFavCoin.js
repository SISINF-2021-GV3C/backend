const express = require('express')
const router = express.Router()
//const myPassport = require('../configs/passport')
const User = require('../models/user')
router.get('/', async (req, res) => {
    console.log("Obteniendo usuarios")
    res.setHeader('Content-Type', 'application/json');
    respuesta = await User.getFavCoin(req.query.username)
    res.send(respuesta)
})

module.exports = router