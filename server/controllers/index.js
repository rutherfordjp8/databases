var models = require('../models/index');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get((results) => {
        res.status(200).json(results);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (results) => {
        console.log(req);
        res.status(201).end();
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get((results) => {
        res.status(200).json(results);
      });
    },
    post: function (req, res) {
      models.users.post(req.body, (results) => {
        res.status(201).end();
      });
    }
  }
};

