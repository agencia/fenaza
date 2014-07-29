FENAZA.views.eventoNew = Backbone.View.extend({
        //... is a table row tag.
        tagName: "div",
        events: {
            "submit #form-evento-new": "save"

        },
        initialize: function(options) {
            this.template= _.template($('#evento-new').html());
            this.idApartado = options.idApartado;
        },
        // Re-render the titles of the todo item.
        render: function() {
            console.log(this.idApartado);
            this.$el.html(this.template({idApartado:this.idApartado}));
            return this;
        },
        save: function(e){
            e.preventDefault();
            FENAZA.data.eventos.create($("#form-evento-new").serializeObject());
            console.log("save evento");
        }

    });