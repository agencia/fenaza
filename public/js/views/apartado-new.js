//apartado-new.js
FENAZA.views.apartadoNew = Backbone.View.extend({
        //... is a table row tag.
        tagName: "div",
        events: {
            "submit #form-apartado": "save"

        },
        collection: FENAZA.data.apartados,
        initialize: function(options) {
            this.template= _.template($('#apartado-new').html());
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template());
            $("#myModalLabel").html("Nuevo Apartado");
            var btnSubmit = $("<button />").addClass("btn btn-success btn-submit").html("Guardar");
            var btnCancel = $("<button />").addClass("btn btn-danger").attr("data-dismiss","modal").html("Cancelar");
            $("#myModalFooter").html(btnCancel);
            $("#myModalFooter").append(btnSubmit);
            $('.btn-submit').on('click', this.submit);
            return this;
        },
        save: function(e){
            e.preventDefault();
            this.collection.create($("#form-apartado").serializeObject(),{wait: true});
            $("#myModal").modal('hide');
        },
        submit: function(){
            $('.btn-submit').off('click');
            $("#form-apartado").submit();
        }

    });