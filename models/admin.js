const e = require('express');

var con = require('../configs/database')
var User = require('./user')
function isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
  
    return true;
  }
class Admin {
    static async deleteUser(nickname){
        if(! await User.getUserByNickname(nickname)){
            return "El usuario no existe"
        }
        else{
            var sql = "DELETE  FROM usuario WHERE nickname = \"" + nickname + "\"";
            await query(sql);
            return true
        }        
    }
    static async  estadisticas(){
        var queryPais = "SELECT pais FROM usuario GROUP BY pais ORDER BY count(pais) DESC LIMIT 3";
        var queryFavCoin = "SELECT simbolo FROM sigue GROUP BY simbolo ORDER BY count(simbolo) LIMIT 3 "
        var queryEdad = "SELECT nickname,anyo_nac from usuario"
        var querySumaUsuarios = "SELECT count(nickname) from usuario"
        var queryGenero = "SELECT count(nickname) from usuario where genero = \"" + "hombre" + "\"";
        var queryGenero2 = "SELECT count(nickname) from usuario where genero = \"" + "mujer" + "\"";
        var pais = await query(queryPais)
        var numeroUsers = await query(querySumaUsuarios)
        var favCoin = await query(queryFavCoin)
        var edad = await query(queryEdad)
        var hombre= await query(queryGenero)
        var mujer = await query(queryGenero2)
        //genero = genero[0].count(nickname)
        //edad = {"edad": edad}
        //numeroUsers = {"numero de usuarios": numeroUsers}
        //pais = {"paises mas famosos": pais}
        var total = {pais,numeroUsers,edad,favCoin,hombre,mujer}

        console.log(hombre) 
        return total
   

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
module.exports = Admin