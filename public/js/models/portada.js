//portada.js

FENAZA.models.portada = Backbone.Model.extend({
    idAttribute: 'idPortada',
	url: function(){
		return "/portada/" + this.get('idPortada');
	}
});