var db = require('../db/index');

module.exports = {
  messages: {
    get: function (callback) {
      
      db.query('SELECT * FROM messages', function (err, results, fields) {
        if (err) {
          throw err;
        } 
        callback(results);
      });
      
    }, // a function which produces all the messages
    post: function (message, callback) {

      db.query(`INSERT INTO messages (text, username, roomname) VALUES("${message.text}", "${message.username}", "${message.roomname}")`, function (err, results, fields) {
        if (err) {
          throw err;
        } 
        callback ? callback(results) : null;
      });
      
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (callback) {
      
      db.query('SELECT * FROM users', function (err, results, fields) {
        if (err) {
          throw err;
        } 
        callback(results);
      });
      
    },
    post: function (username, callback) {
      
      db.query('INSERT INTO users SET ?', username, function (err, results, fields) {
        if (err) {
          throw err;
        } 
        callback ? callback(results) : null;
      });
      
    } 
  }
};

