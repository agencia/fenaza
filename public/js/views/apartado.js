//apartado.js

FENAZA.views.apartado = Backbone.View.extend({
        //... is a table row tag.
        tagName: "tr",
        events: {
            "click .editar-apartado": "detail",
            "click .btn-status": "changeStatus",
            "click .btn-delete": "destroy"

        },
        initialize: function(options) {
            this.template= _.template($('#apartado-item').html());
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
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
        },
        changeStatus:function(e){
            e.preventDefault();
            var status = this.model.get("status") ==1 ? 0:1 ;
            this.model.save({status:status} );
            console.log("update " +status);
        },

        destroy:function(e){
            e.preventDefault();
            if(confirm('¿Está seguro de eliminar este registro?')){
                this.model.destroy();
            }
        }

    });