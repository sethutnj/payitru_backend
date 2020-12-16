const Mysqli = require ( 'mysqli' );
const Api = require('mysqli/lib/api');

let conn = new Mysqli({
    host : 'localhost' , //  IP/domain name  
    post : 3306 , // Port, default 3306  
    user : 'root' , // Username  
    passwd : '' , // password  
    db : 'coin' //You  can specify the database or not [optional]  
  });
/*
  let conn = new Mysqli({
    host : 'www.pdb14.runhosting.com' , //  IP/domain name  
    post : 3306 , // Port, default 3306  
    user : '1883413_mathil' , // Username  
    passwd : 'Sethu96000' , // password  
    db : '1883413_mathil' //You  can specify the database or not [optional]  
  });
  */
  let db = conn.emit(false,'');
  module.exports = {
      database : db
  };