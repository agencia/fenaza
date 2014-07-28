//red.js

FENAZA.views.red = Backbone.View.extend({
        //... is a table row tag.
        tagName: "li",
        // Cache the template function for a single item.
        //editTemplate: _.template($('#red-item-edit-template').html()),
        events: {
        	"click .editar-red": "edit"

        },
        initialize: function() {
            this.template= _.template($('#red-item-template').html());
        	this.listenTo(this.model, 'change', this.render);
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
//      this.$el.toggleClass('done', this.model.get('done'));
//      this.input = this.$('.edit');
            return this;
        },

        edit: function(event){
        	event.preventDefault();
        	var newurl = prompt("Editar url", this.model.get("url"));
        	if(newurl != null)
        		this.model.save({"url": newurl});
        }

    });