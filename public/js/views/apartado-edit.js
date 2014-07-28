FENAZA.views.apartadoEdit = Backbone.View.extend({
        //... is a table row tag.
        tagName: "div",
        events: {
            "submit #form-apartado-edit": "save"

        },
        initialize: function(options) {
            this.template= _.template($('#apartado-item-detail-template').html());
        	this.listenTo(this.model, 'change', this.render);
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        save: function(e){
            e.preventDefault();
            this.model.save($("#form-apartado-edit").serializeObject());
        }

    });