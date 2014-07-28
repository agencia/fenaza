//red.js

FENAZA.models.red = Backbone.Model.extend({
        // Default attributes for the todo item.
        defaults: function() {
            return {
                red: "Sin nombre",
                key: "Sin email",
                url: ""
            };
        }
    });

FENAZA.collections.redes = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: FENAZA.models.red,
        url: "/redes"

    });
FENAZA.data.redes = new FENAZA.collections.redes();