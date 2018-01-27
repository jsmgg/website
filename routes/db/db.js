var mysql = require('mysql');
var config = require('../../config');

var pool = mysql.createPool(config.database);

module.exports = {
  getConnection(){
    return new Promise((resolve, reject)=>{
      pool.getConnection((err, connection)=>{
        if( err ){
          reject( err )
        } else {
          resolve( connection );
        }
      });
    })
  }
};