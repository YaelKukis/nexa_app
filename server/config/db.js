const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false
  }
});

connection.connect((err) => {
  if (err) {
    // לטפל בהצגה של השגיאה 
    console.log("Database connection failed");
    console.log(err);
    return;
  }

  console.log("Connected to MySQL");
});

module.exports = connection;