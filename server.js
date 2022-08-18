if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const passport = require('passport')
const User = require('./models/user')
//const myPassport = require('./configs/passport')
const func = require('./configs/api')
//const flash = require('express-flash')

const session = require('express-session')
const cors = require('cors')
var con = require('./configs/database')
app.use(cors())
app.use(session({
    secret: "secret",
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())


app.use(express.json()) //Asi en req.body podremos leer objeto json
//myPassport.initialize(passport)

console.log("Funciona")


const getCoins = require('./routes/getCoins')
app.use('/getCoins',getCoins)
const server = app.listen(3000)

module.exports = { app}

