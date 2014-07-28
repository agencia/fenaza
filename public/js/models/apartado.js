//apartado.js

FENAZA.models.apartado = Backbone.Model.extend({
        // Default attributes for the todo item.
        defaults: function() {
            return {
                apartado: "Sin nombre",
                key: "Sin email",
                img: ""
            };
        }
    });

FENAZA.collections.apartados = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: FENAZA.models.apartado,
        url: "/apartados/index"

    });
FENAZA.data.apartados = new FENAZA.collections.apartados();