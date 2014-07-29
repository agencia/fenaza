

  window.FENAZA.router = Backbone.Router.extend({

    initialize: function() {
      
    },
  
    routes: {
      "":                 "home",
      "apartado/:id":  		"apartado"
    },

    home: function() {
      FENAZA.app =  new FENAZA.views.home();
    },

    apartado: function(id) {
      //var self = this;

        FENAZA.app = new FENAZA.views.apartadoDetail({id:id}); 
        // do something...
        //self.navigate("/");

      //FENAZA.app.other(id);
    }

  });
