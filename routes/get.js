const express = require('express')
const router = express.Router()
//const myPassport = require('../configs/passport')
const Api = require('../configs/api')
router.get('/', async (req, res) => {
    console.log("combrobando")
 
    res.send("Funciona correctamente...")
})
module.exports = router