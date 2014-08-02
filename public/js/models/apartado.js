//apartado.js

FENAZA.models.apartado = Backbone.Model.extend({
        // Default attributes for the todo item.
        defaults: function() {
            return {
                apartado: "Sin nombre",
                key: "Sin email"
            };
        }
    });

FENAZA.collections.apartados = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: FENAZA.models.apartado,
        url: "/apartados",
        wait: true

    });
FENAZA.data.apartados = new FENAZA.collections.apartados();