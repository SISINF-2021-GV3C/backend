// Fichero en donde se realizaran todas las acciones relacionadas con el usario
// en la BD

const e = require('express');
var query,isObjEmpty = require('../configs/database')


class User {
    constructor(user) {
    }
    static async getUserByNickname(nickname, result) {
        
        var sql = "SELECT * FROM usuario WHERE nickname = \"" + nickname + "\"";
        let rows = await query(sql);
        let vacio = isObjEmpty(rows)
        if (!vacio) {
            
    
        }
    }    
}
 module.exports = User;