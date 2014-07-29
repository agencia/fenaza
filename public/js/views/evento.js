//apartado.js

FENAZA.views.evento = Backbone.View.extend({
        //... is a table row tag.
        tagName: "li",
        events: {
            "click .editar-evento": "detail"

        },
        initialize: function(options) {
            this.template= _.template($('#evento-item').html());
        	this.listenTo(this.model, 'change', this.render);
            //console.log("model "+this.model);
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        detail: function(e){
            e.preventDefault();
            $("#myModal").modal('show');
            var view = new FENAZA.views.apartadoEdit({model:this.model});
            $("#myModal > div > div > div.modal-body").html(view.render().el);
            //#myModal > div > div > div.modal-body
        }

    });