var models = require('../models');
var parseUrl = require('parse-url');

module.exports = {
  messages: {
    get: function (req, res) {
      var queryArgs = module.exports.handleSearch.parseSearch(req.url);
      models.messages.get((results) => {
        res.status(200).json(results);
      }, queryArgs);
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, (results) => {
        console.log(req.body);
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
  },

  handleSearch: {
    parseSearch: function(url) {
      var queries = parseUrl(url).search.split('&');
      queries = queries.map(function(query) {
        return query.split('=');
      });
      console.log('parse search queries', queries);
      if (this[queries[0][0]]) {
        return this[queries[0][0]](queries[0][1]);
      }
    },
    order: function (value) {
      console.log('order value', value);
      if (value === '-createdAt') {
        return 'ORDER BY createdAt DESC';
      }
    },
    username: null,
    roomname: null
    
  }
};

