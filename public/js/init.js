//init.js

window.FENAZA = {
	site: "http://fenaza.local/",
	views: {},
	models: {},
	collections: {},
	data: {}
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
			FENAZA.app =  new FENAZA.views.home();
			FENAZA.data.redes.add(data.redes);
			FENAZA.data.apartados.add(data.apartados);
			new FENAZA.router();
 			Backbone.history.start();

		}
	});
};

$.get("./templates/index.php", function(data){
    $("body").append(data);

    init();
});
