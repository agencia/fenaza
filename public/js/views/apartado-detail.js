FENAZA.views.apartadoDetail = Backbone.View.extend({
        //... is a table row tag.
        tagName: "div",
        events: {
            "click #btn-new-date": "newDate"

        },
        initialize: function(options) {
            this.template= _.template($('#apartado-detail').html());
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },
        newDate: function(e){
            e.preventDefault();
        }

    });