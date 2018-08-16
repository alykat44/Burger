var mysql = require("mysql");

var connection = mysql.createConnection({

    
        host: process.env.db_host || "localhost",
        user: process.env.db_user ||  "root",
        password: process.env.db_pw || "Memphis40",
        database: process.env.db || "burgers_db"
    });
  connection.connect(function (err) {
      if (err) {
          console.log("error connecting: " + err.stack);
          return;
      }
      console.log("connected as id" + connection.threadId);

  });

// Make connection
module.exports = connection;