//init.js

window.FENAZA = {
	site: "http://fenaza.local/",
	views: {},
	models: {},
	collections: {},
	data: {},
	load : function(data){
		this.data.redes.add(data.redes);
		this.data.apartados.add(data.apartados);
		this.data.eventos.add(data.eventos);
		this.app= new FENAZA.views.layout();
		new this.router();
 		Backbone.history.start();
	}
};


var init = function(){
	$.ajax(FENAZA.site + 'user',{
		dataType: "json",
		error: function(jqXHR,textStatus,errorThrown){
			//console.log(jqXHR.status);
			if(jqXHR.status == 401)
				FENAZA.app = new FENAZA.views.login();
			else {
				console.log("error: " + jqXHR.status);
			}
		},
		success : function(data){
			FENAZA.load(data);
		}
	});
};

$.get("./templates/index.php", function(data){
    $("body").append(data);

    init();
});

