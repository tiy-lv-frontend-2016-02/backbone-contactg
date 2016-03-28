var Backbone = require('../backbone-parse');
var ContactModel = require('../models/contact');

var ContactsCollection = Backbone.Collection.extend({
  model: ContactModel,
  _parse_class_name: 'Contact'
});

var Contacts = new ContactsCollection();

module.exports = Contacts;