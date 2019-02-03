// Node Dependency
var mysql = require('mysql2');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root', 
        port: 3306,
        database: 'burgers_db' 
    });
}


// Export the Connection
module.exports = connection;