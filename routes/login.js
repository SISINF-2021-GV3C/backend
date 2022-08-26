
const express = require('express')
const router = express.Router()
const passport = require('passport')
const myPassport = require('../configs/passport')
const User = require('../models/user')

router.post('/', async (req, res) => {
    let respuesta = await User.login(req.body.username,req.body.password)
    if(respuesta == "exito"){
        res.sendStatus(200)
    }
    else{
        res.sendStatus(400)
    }
})


module.exports = router