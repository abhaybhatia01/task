const mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'abhay#2002',
  database : 'new_schema'
});
 
connection.connect((err)=>{
    if(err)throw err;
    console.log("connection created")
});
 
connection.query('SELECT 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});
 

module.exports.connection = connection