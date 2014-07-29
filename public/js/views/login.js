//login.js

window.FENAZA.views.login = Backbone.View.extend({

  el: $("#fenazapp"),
  loginForm: "#form-login",
  events: {
  	"submit #form-login" : "login"
  },

  initialize: function() {

    this.template= _.template($('#login-template').html())
  	this.render();
  },

  render: function() {
  	this.$el.html(this.template);
  	console.log("init template");
  	return this;
  },

  login: function(event){
  	event.preventDefault();
  	$.ajax(
  		FENAZA.site + $(this.loginForm).attr("action"),{
  		type: "post",
  		data: $(this.loginForm).serialize(),
  		dataType: "json",
  		success: function(data, textStatus, jqXHR){
  			FENAZA.load(data);
  		},
  		error: function(jqXHR,textStatus,errorThrown){
  			if(jqXHR.status == 400){
  				$("#loginMsg").html("Error en Login");
  				$("#loginMsg").fadeIn(500).delay(4000).fadeOut(500);
  				$("#loginMsg").html();
  			}
  		}
  	});
  }

});