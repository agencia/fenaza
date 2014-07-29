//home.js

window.FENAZA.views.home = Backbone.View.extend({

  el: $("#fenazapp"),
  events: {
  },

  initialize: function() {

    this.template= _.template($('#home-template').html());
    this.liApartado= _.template($('#apartado-item-template').html());

  	this.render();
        FENAZA.data.redes.each(this.addOneRed, this);
    FENAZA.data.apartados.each(this.addOneApartado, this);
  },
	addOneRed: function(red) {
            var view = new FENAZA.views.red({model: red});
            this.$("#list-socialnetworks").append(view.render().el);
        },
	addOneApartado: function(apartado) {
          var view = new FENAZA.views.apartado({model: apartado});
            this.$("#list-apartados").append(view.render().el);
        },
  render: function() {

    $('#myModal').modal({show:false});
    
  	this.$el.html(this.template);
  	return this;
  },
  other: function(id){
  	console.log("call this function with id: " + id);
  }

});