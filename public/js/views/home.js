//home.js

window.FENAZA.views.home = Backbone.View.extend({

  el: $("#fenazapp"),
  events: {
  },

  initialize: function() {
    this.template= _.template($('#home-template').html());
    this.listenTo(FENAZA.data.apartados,'add', this.addOneApartado);
  	this.render();
    FENAZA.data.apartados.each(this.addOneApartado, this);
  },
	addOneApartado: function(apartado) {
          var view = new FENAZA.views.apartado({model: apartado});
            this.$("#list-apartados").append(view.render().el);
        },
  render: function() {

    $('#myModal').modal({show:false});
    
  	this.$el.html(this.template);
  	return this;
  }

});