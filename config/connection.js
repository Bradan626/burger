// Node Dependency
var mysql = require("mysql2");
var connection;

// For Heroku Deployment vs. Local MySQL Database
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "js5no3hpkrya6jln",
    password: "pnhjzrh30ia2bnfi",
    port: 3306,
    database: "cbqj9o2jh5guflf8"
  });
}

// Export the Connection
module.exports = connection;
