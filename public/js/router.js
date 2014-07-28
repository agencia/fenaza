//router.js
 $(function(){
window.FENAZA.router = Backbone.Router.extend({

  routes: {
    "":                 "home",
    "apartado/:id":  		"apartado"
  },

  home: function() {
    
  },

  apartado: function(id) {
    var self = this;

      FENAZA.app = new FENAZA.views.apartadoDetalle({id:id}); 
      // do something...
      self.navigate("/");
    });

    //FENAZA.app.other(id);
  }

});
});