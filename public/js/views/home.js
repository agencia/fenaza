//home.js

window.FENAZA.views.home = Backbone.View.extend({

  el: $("#fenazapp"),
  events: {
  },

  initialize: function() {
    this.template= _.template($('#home-template').html());  	this.render();
  },
  render: function() {

    $('#myModal').modal({show:false});
    //console.log(FENAZA.portada);
  	this.$el.html(this.template({portada:FENAZA.portada.toJSON()}));
  	return this;
  }

});