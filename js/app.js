var $ = require('jquery');

$(document).ready(function(){
  var Router = require('./routes/router');

  $('body').on('click', 'a', function (e){
    e.preventDefault();
    var href = $(this).attr('href').substr(1);
    Router.navigate(href, {trigger:true});
  });
});