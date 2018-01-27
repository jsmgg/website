var db = require('../db/db.js');

/*
http://www.runoob.com/nodejs/nodejs-mysql.html

var  addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(0,?,?,?,?)';
var  addSqlParams = ['菜鸟工具', 'https://c.runoob.com','23453', 'CN'];
connection.query(addSql,addSqlParams,function (err, result) {
        if(err){
         console.log('[INSERT ERROR] - ',err.message);
         return;
        }        
       //console.log('INSERT ID:',result.insertId);        
       console.log('INSERT ID:',result);        
});
*/
module.exports = {
  get(){
    return new Promise( ( resolve , reject )=>{
      db.getConnection().then( connection => {
        //console.log( connection );
        connection.query('select * from article where id='+connection.escape('2'), (err, rows)=>{
          if( err ){
            console.log( err );
            reject(err);
          } else {
            resolve('success'+rows[0].content);
            //console.log( rows[0] );
          }
        });

        
      }).catch( err => {
        reject('error');
        //console.log( err );
      });
    } );
  }
};