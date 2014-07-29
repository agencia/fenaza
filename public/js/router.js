

  window.FENAZA.router = Backbone.Router.extend({

    initialize: function() {
      
    },
  
    routes: {
      "":                 "home",
      "apartado/:id":  		"apartado",
      "redes":            "redes"
    },

    home: function() {
      FENAZA.app =  new FENAZA.views.home();
      this.nav("home");
    },

    apartado: function(id) {
        FENAZA.app = new FENAZA.views.apartadoDetail({id:id}); 
    },

    redes: function(){
      FENAZA.app = new FENAZA.views.redes();
      this.nav("redes");
    },
    nav : function(activate){
      $("#navbar > div > div.navbar-collapse.collapse > ul:nth-child(1) > li").removeClass("active");
      $("#navbar > div > div.navbar-collapse.collapse > ul:nth-child(1) > li." + activate).addClass("active");
    }

  });
