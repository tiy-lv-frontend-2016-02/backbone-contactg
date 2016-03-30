var Backbone = require('js/lib/backbone-parse/backbone-parse');
var indexTemplate = require('templates/index.html');
var Contact = require('js/models/contact');
var $ = require('jquery');

var Router = Backbone.Router.extend({
  initialize: function () {
    Backbone.history.start();
  },
  routes: {
    '': 'index',
    'contact/:contactId': 'contact'
  },
  index: function () {
    $("#container").html(indexTemplate());
  }
});

var router = new Router();

router.on('route:contact', function (contactId){
  var contact = new Contact({
    objectId: contactId
  });

  contact.fetch({
    success:function(contact){
      $("#container").html(contact.get('first_name'));
    }
  })
})

export default router;