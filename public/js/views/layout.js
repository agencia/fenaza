window.FENAZA.views.layout = Backbone.View.extend({
  events: {
  },

  initialize: function() {
    this.navtemplate = _.template($('#nav-bar').html());
    this.render();
  },
  render: function() {
    $("#fenazapp").before(this.navtemplate);
    return this;
  }

});