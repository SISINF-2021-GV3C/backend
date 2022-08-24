// Fichero en donde se realizaran todas las acciones relacionadas con el usario
// en la BD

const e = require('express');

var con = require('../configs/database')
function isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
  
    return true;
  }
class User {
    //Función para crear usuario user={firstName, lastName, email, username, password, tlf}
    static async create(firstName,lastName,email,username,password,country,date){
        var checkNickname = await this.getUserByNickname(username)
       
        if(!checkNickname){
            var sql = "INSERT INTO usuario(nombre,apellido,email,nickname,pass,pais,anyo_nac) values  (\"" +
            firstName + "\", \"" +
            lastName + "\", \"" +
            email + "\",  \"" +
            username + "\", \"" +
            password + "\", \"" +
            country + "\","  +
            date + ")"
            
            let rows = await query(sql);
            console.log("aqui")
            let vacio = isObjEmpty(rows)
            if (!vacio) {
                console.log("Exito")
                return "Usuario registrado"
            }
            else  {
                return "Fallo al hacer el insert"
            }
        }
        else{
            return "El nombre de usuario ya existe"
        }
    }
    static async getAllUsers(result) {
        var sql = "SELECT * FROM usuario ";
        let rows = await query(sql);
        let vacio = isObjEmpty(rows)
        if (!vacio) {
            return rows
        }
        else{
            return false
        }
    }  

    static async getUserByNickname(nickname, result) {
        
        var sql = "SELECT * FROM usuario WHERE nickname = \"" + nickname + "\"";
        let rows = await query(sql);
        let vacio = isObjEmpty(rows)
        if (!vacio) {
            return rows
        }
        else{
            return false
        }
    }  
    static async addFavCoin(nickname,coin){
        if(!this.getUserByNickname){
            return false
        }
        else{
            var sql = "INSERT INTO sigue(nickname,simbolo) values (\"" + nickname + "\",\"" + coin + "\")";
            await query(sql);
            return true
        }
    }
}
let query = function( sql, values ) {
    // devolver una promesa
  return new Promise(( resolve, reject ) => {
   
   con.query(sql,(err, res) => {
    if ( err ) {
      if (err) throw err;
      reject( err )
    } else {
      resolve( res )
    }
  });
  })
  }
  
  
 module.exports = User;