//apartado.js

FENAZA.models.apartado = Backbone.Model.extend({
        // Default attributes for the todo item.
        defaults: function() {
            return {
                apartado: "Sin nombre",
                key: "Sin email"
            };
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
            return json;
        }
    });

FENAZA.collections.apartados = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: FENAZA.models.apartado,
        url: "/apartados",
        wait: true

    });
FENAZA.data.apartados = new FENAZA.collections.apartados();