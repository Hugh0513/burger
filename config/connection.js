var mysql = require("mysql");

/*
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "localhost",
  database: "burger_db"
});
*/

Try this. Hope this will help you

mysql://b32fa719432e40:87de815a@us-cdbr-east-04.cleardb.com/heroku_28437b49d76cc53?reconnect=true

var connection = mysql.createConnection({
  host     : 'us-cdbr-east-04.cleardb.com',
  user     : 'b32fa719432e40',
  password : '87de815a',
  database : 'heroku_28437b49d76cc53'
});

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
