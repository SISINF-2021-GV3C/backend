const express = require('express')
const router = express.Router()
//const myPassport = require('../configs/passport')
const Admin = require('../models/admin')
router.get('/', async (req, res) => {
    console.log("Obteniendo estadisticas")
    res.setHeader('Content-Type', 'application/json');
    res.send(await Admin.estadisticas())
})

module.exports = router