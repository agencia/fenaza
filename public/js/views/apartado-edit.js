FENAZA.views.apartadoEdit = Backbone.View.extend({
        //... is a table row tag.
        tagName: "div",
        events: {
            "submit #form-apartado": "save"

        },
        initialize: function(options) {
            this.template= _.template($('#apartado-item-detail-template').html());
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            $("#myModalLabel").html("Editar Apartado");
            var btnSubmit = $("<button />").addClass("btn btn-success btn-submit").html("Guardar");
            var btnCancel = $("<button />").addClass("btn btn-danger").attr("data-dismiss","modal").html("Cancelar");
            $("#myModalFooter").html(btnCancel);
            $("#myModalFooter").append(btnSubmit);
            $('.btn-submit').on('click', this.submit);
            return this;
        },
        save: function(e){
            e.preventDefault();
            this.model.save($("#form-apartado").serializeObject());
            $("#myModal").modal('hide');
        },
        submit: function(){
            $('.btn-submit').off('click');
            $("#form-apartado").submit();
        }

    });