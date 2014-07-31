//apartado-list.js
//home.js

window.FENAZA.views.apartados = Backbone.View.extend({

  el: $("#fenazapp"),
  events: {
  	"click #btnNuevoApartado": "nuevo"
  },

  initialize: function() {
    this.template= _.template($('#apartado-list').html());
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
  	this.$el.html(this.template());
  	return this;
  },
  nuevo:function(){
  	$("#myModal").modal('show');
    var view = new FENAZA.views.apartadoNew();
    $("#myModal > div > div > div.modal-body").html(view.render().el);
  }

});