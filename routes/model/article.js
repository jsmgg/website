var db = require('../db/db.js');


module.exports = {
  get(){
    return new Promise( ( resolve , reject )=>{
      db.getConnection().then( connection => {
        //console.log( connection );
        resolve('success');
      }).catch( err => {
        reject('error');
        //console.log( err );
      });
    } );
  }
};