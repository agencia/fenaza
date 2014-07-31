//red.js

FENAZA.models.evento = Backbone.Model.extend({
    
        idAttribute: 'idEvento',
        fecha_es : function(){
        	if (this.get("fecha")){
                var fecha = this.get("fecha").split("-");
                return fecha[2] + "/" + fecha[1] + "/" + fecha[0];
            } else {
                return "";
            }
        },
        modificado : function(){
            if (this.get("updated_at")){
                var fechaYhora = this.get("updated_at").split(" ");
                var fecha = fechaYhora[0].split('-');
                return fecha[2] + "/" + fecha[1] + "/" + fecha[0] + " " + fechaYhora[1];
            } else {
                return "";
            }

        },
        toJSON: function () {
            var json = Backbone.Model.prototype.toJSON.call(this);
            json.modificado = this.modificado(this.get('updated_at'));
            json.fecha_es = this.fecha_es(this.get('fecha'));
            return json;
        }
    });

FENAZA.collections.eventos = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: FENAZA.models.evento,
        url: "/eventos"

    });
FENAZA.data.eventos = new FENAZA.collections.eventos();