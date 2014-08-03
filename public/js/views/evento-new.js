FENAZA.views.eventoNew = Backbone.View.extend({
        tagName: "div",
        events: {
            "submit #form-evento-new": "save",
            "click .btn-submit": "submit"

        },
        collection: FENAZA.data.eventos,
        initialize: function(options) {
            this.template= _.template($('#evento-new').html());
            this.idApartado = options.idApartado;
        },
        render: function() {
            $("#myModalLabel").html("Nuevo Evento");
            var btnSubmit = $("<button />").addClass("btn btn-success btn-submit").html("Guardar");
            var btnCancel = $("<button />").addClass("btn btn-danger").attr("data-dismiss","modal").html("Cancelar");
            this.$el.html(this.template({idApartado:this.idApartado}));
            $("#myModalFooter").html(btnCancel);
            $("#myModalFooter").append(btnSubmit);
            $('.btn-submit').on('click', this.submit);
            return this;
        },
        save: function(e){
            e.preventDefault();
            var data = $("#form-evento-new").serializeObject();
            var fecha = data.fecha.split("/");
            if(fecha[0].length < 3) {
                data.fecha = fecha[2] + '-' + fecha[1] + '-' + fecha[0];
            }
            
            this.collection.create(data,{wait: true});
            $("#myModal").modal('hide');
        },
        submit: function(e){
            $('.btn-submit').off('click');
            $("#form-evento-new").submit();
        }

    });