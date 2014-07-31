FENAZA.views.eventoEdit = Backbone.View.extend({
        //... is a table row tag.
        tagName: "div",
        events: {
            "submit #form-evento-edit": "save"

        },
        initialize: function(options) {
            this.template= _.template($('#evento-edit').html());
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            $("#myModalLabel").html("Editar Evento");
            var btnSubmit = $("<button />").addClass("btn btn-success btn-submit").html("Guardar");
            var btnCancel = $("<button />").addClass("btn btn-danger").attr("data-dismiss","modal").html("Cancelar");
            $("#myModalFooter").html(btnCancel);
            $("#myModalFooter").append(btnSubmit);
            $('.btn-submit').on('click', this.submit);
            return this;
        },
        save: function(e){
            e.preventDefault();
            console.log("edit");
            this.model.save($("#form-evento-edit").serializeObject());
            $("#myModal").modal('hide');
        },
        submit: function(){
            $('.btn-submit').off('click');
            $("#form-evento-edit").submit();
        }

    });