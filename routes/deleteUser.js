const express = require('express')
const router = express.Router()
const passport = require('passport')
const myPassport = require('../configs/passport')
const Admin = require('../models/admin')
const User = require('../models/user')

router.post('/', async (req, res) => {
    let respuesta = await Admin.deleteUser(req.body.username)
    res.send(respuesta)
})


module.exports = router