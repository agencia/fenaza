window.FENAZA.views.redes = Backbone.View.extend({

  el: $("#fenazapp"),
  events: {
  },

  initialize: function() {
    this.template= _.template($('#redes').html());
    this.listenTo(FENAZA.data.redes,'add', this.addOneRed);
  	this.render();
        FENAZA.data.redes.each(this.addOneRed, this);
  },
	addOneRed: function(red) {
            var view = new FENAZA.views.red({model: red});
            this.$("#list-socialnetworks").append(view.render().el);
        },

  render: function() {
  	this.$el.html(this.template);
  	return this;
  }

});