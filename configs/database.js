'use strict';
// Fichero donde se establece la conexión con la BD además se crea la función
// query que será usada por todos los modelos para realizar consultas en la BD.
const mysql = require('mysql');
// Información de la BD
const con = mysql.createConnection({
    host: "ec2-18-206-137-85.compute-1.amazonaws.com",
    user: "root",
    password: "Proyectosoftware22!",
    database: "sisinf_grupo_V3C"
  });
// Comprobación de la conexión a la BD
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });
// Función que lanza una query a traves de una promesa para las operaciones 
// asíncronas
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
  function isObjEmpty(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) return false;
    }
  
    return true;
  }
module.exports = {con,query,isObjEmpty};