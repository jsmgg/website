var db = require('../db/db.js');
var pageSize = 20;
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
  /*
    获取key字段内容为value的 第page页数据，每页显示size条数据
  */
  get(value,key,page,size){
    return new Promise( ( resolve , reject )=>{
      db.getConnection().then( connection => {
        var sql = 'select * from article where status=1';
        size = size || pageSize; 
        page = page||1;
        if( key ) {
          sql += ' and ' + key+'='+connection.escape(value);
        }
        sql += ' order by id desc';
        sql += ' limit '+ (page-1) * size + ',' + size;
        console.log( sql );

        connection.query(sql, (err, rows)=>{
          connection.release();
          if( err ){
            //console.log( err );
            reject(err);
          } else {
            resolve(rows);
            //console.log( rows );
          }
        });
      }).catch( err => {
        reject( err );
        //console.log( err );
      });
    } );
  },
  /*
    获取key字段内容为value的评论总条数
  */
  getNum(value,key){
    return new Promise( (resolve, reject ) => {
      db.getConnection().then( connection => {
        var sql = 'select count(id) as num from article where status = 1';
        if( key ){
          sql += ' and '+key+'='+connection.escape(value);
        }
        connection.query(  sql, (err,rows)=>{
          connection.release();
          if( err ) {
            reject(err)
          } else {
            resolve( rows.length? rows[0].num : 0 );
          }
        })
      }).catch(err=>{
        reject( err );
      })
    } )
  },
  add(obj){
    return new Promise( (resolve, reject) => {
      db.getConnection().then( connection => {
        let sql = 'insert into article(title,content,img,star,renum,status,cid) VALUES(?,?,?,0,0,1,?)';
        let {title,content,img,cid} = obj; 
        let params = [title,content,img,cid];//[connection.escape(title), connection.escape(content),connection.escape(img),connection.escape(cid)];
        connection.query(sql,params,(err,result)=>{
          clearDB && connection.release();
          if( err ){
            reject( err );
          } else {
            //console.log(result);
            resolve({
              code:200,
              id:result.insertId
            });
          }
        });
      }).catch(err=>{
        reject( err );
      });
    });
  },
  remove(value,key){
    return new Promise((resolve, reject)=>{
      db.getConnection().then( connection=>{
        let sql = 'update article set status = 0 WHERE '+key+' = ?';
        let params = [value];
        connection.query(sql,params,(err,result)=>{
          connection.release();
          if( err ){
            reject( err );
          } else {
            resolve({
              code:200,
              num:result.affectedRows
            });
          }
        })
      }).catch(err=>{
        reject( err );
      })
    })
  }
};





























