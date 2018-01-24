var mysql = require('mysql');
var pool = mysql.createPool({  
    host : 'localhost',  
    port : 3306,  
    database : 'website',  
    user : 'root',  
    password : '123456'  
});

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