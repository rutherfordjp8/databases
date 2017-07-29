var db = require('../db');

module.exports = {
  messages: {
    get: function (callback, queryArgs) {
      queryArgs = queryArgs || '';
      var queryString = 'SELECT messages.id, messages.text, messages.roomname, messages.createdAt, users.username FROM messages INNER JOIN users ON messages.user_id = users.id ' + queryArgs;
      console.log('queryArgs in models', queryArgs);
      db.query(queryString, function (err, results, fields) {
        if (err) {
          throw err;
        } 
        callback(results);
      });
      
    }, // a function which produces all the messages
    post: function (message, callback) {
      db.query(`INSERT IGNORE INTO users (username) VALUES("${message.username}")`, function(err, results, fields) {
        if (err) {
          throw err;
        }
        db.query(`SELECT id FROM users WHERE username = "${message.username}"`, function(err, results, fields) {
          if (err) {
            throw err;
          }
          console.log('SELECT ID FROM USER: ', results);
          db.query(`INSERT INTO messages (text, user_id, roomname) VALUES("${message.text}", ${results[0].id}, "${message.roomname}")`, function (err, results, fields) {
            if (err) {
              throw err;
            } 
            callback ? callback(results) : null;
          });
        });
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

