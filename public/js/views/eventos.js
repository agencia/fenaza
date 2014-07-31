FENAZA.views.eventos = Backbone.View.extend({
        //...
        el: $("#fenazapp"),
        tagName: "div",
        events: {
            "click #btn-new-event": "newEvent"

        },
        initialize: function(options) {
            this.template= _.template($('#apartado-detail').html());
            this.model = FENAZA.data.apartados.findWhere({id:options.id});
            this.listenTo(FENAZA.data.eventos,"add",this.addEvento);
            this.render();
            FENAZA.data.eventos.each(this.addEvento,this);
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template({apartado:this.model.toJSON()}));
            return this;
        },
        addEvento:function(evento){
            if(evento.get("idApartado") === this.model.get("id")){
                var view = new FENAZA.views.evento({model:evento});
                this.$("#eventos-list").append(view.render().el);
            }
        },
        newEvent: function(e){
            e.preventDefault();
            var view = new FENAZA.views.eventoNew({idApartado:this.model.get("id")});
            $("#myModal > div > div > div.modal-body").html(view.render().el);
            $("#myModal").modal('show');
        }

    });