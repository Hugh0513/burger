var mysql = require("mysql");

/*
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "localhost",
  database: "burger_db"
});


var connection = mysql.createConnection({
  host     : 'k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
  user     : 'hgo8s3x2qhn977nn',
  password : 't5qpsfumfahkyij7',
  database : 'burger_db'
});
*/

var connection = mysql.createConnection({
  host     : '9841ffc5@us-cdbr-iron-east-05.cleardb.net',
  user     : 'b4beff7f3b59c3',
  password : 'cad145c790528d4',
  database : 'heroku_630caa16134d790'
});


// JAWSDB_URL='mysql://hgo8s3x2qhn977nn:t5qpsfumfahkyij7@k3xio06abqa902qt.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/nzq7gylhl2vzej8k'

// var CLEARDB_DATABASE_URL='mysql://b4beff7f3b59c3:9841ffc5@us-cdbr-iron-east-05.cleardb.net/heroku_630caa16134d790?reconnect=true';

//var connection = mysql.createConnection(CLEARDB_DATABASE_URL);

connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
