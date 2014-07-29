//red.js

FENAZA.models.evento = Backbone.Model.extend({
        // Default attributes for the todo item.
        url: "/eventos"
    });

FENAZA.collections.eventos = Backbone.Collection.extend({
        // Reference to this collection's model.
        model: FENAZA.models.evento,
        url: "/eventos"

    });
FENAZA.data.eventos = new FENAZA.collections.eventos();