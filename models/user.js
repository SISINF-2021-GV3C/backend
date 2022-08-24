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
    constructor(user) {
    }
    //Función para crear usuario user={firstName, lastName, email, username, password, tlf}
    static async create(firstName,lastName,email,username,password,tlf){
        if(true){//!this.getUserByNickname
            var sql = "INSERT INTO usuario(nombre,apellido,email,nickname,pass) values  (\"" +
            firstName + "\", \"" +
            lastName + "\", \"" +
            email + "\",  \"" +
            username + "\", \"" +
            password + "\")"
            
            let rows = await query(sql);
            let vacio = isObjEmpty(rows)
            if (!vacio) {
                return rows
        
                return true
            }
            else  {
                return false
            }
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