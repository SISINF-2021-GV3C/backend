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
const register = require('./routes/postRegister')
const login = require('./routes/login.js')
const principal = require('./routes/get')
const addFav = require('./routes/addFavCoin')
const getUser = require('./routes/getUsers')
const deleteUser = require('./routes/deleteUser')
const estadisticas = require('./routes/estadisticas')
const deleteFav = require('./routes/deleteFavCoin')
const getFavCoin = require('./routes/getFavCoin')

app.use('/getCoins',getCoins)
app.use('/register',register)
app.use('/addFavCoin',addFav)
app.use('/deleteFavCoin',deleteFav)
app.use('/getFavCoin',getFavCoin)
app.use(principal)
app.use('/getUsers',getUser)
app.use('/login',login)
app.use('/deleteUser',deleteUser)
app.use('/estadisticas',estadisticas)

const server = app.listen(80)

module.exports = { app}

