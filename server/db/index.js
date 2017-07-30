// var mysql = require('mysql');
var Sequelize = require('sequelize');
var db = new Sequelize('chat', 'root', 'plantlife');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

// module.exports = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'plantlife',
//   database: 'chat'
// });

module.exports.User = db.define('users', {
  username: Sequelize.STRING
});

module.exports.Message = db.define('messages', {
  user_id: Sequelize.INTEGER,
  text: Sequelize.STRING,
  roomname: Sequelize.STRING
});
