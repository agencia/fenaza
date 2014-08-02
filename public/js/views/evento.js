//apartado.js

FENAZA.views.evento = Backbone.View.extend({
        //... is a table row tag.
        tagName: "div",
        className: "col-md-4 evento-item-container",
        events: {
            "click .btn-editar": "edit",
            "click .btn-status": "toggleStatus",
            "click .btn-eliminar": "destroy",
            "click .btn-upload": 'upload'

        },
        initialize: function(options) {
            this.template= _.template($('#evento-item').html());
        	this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            //console.log("model "+this.model);
        },
        // Re-render the titles of the todo item.
        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
            this.initFileUpload();
            return this;
        },
        edit: function(e){
            e.preventDefault();
            $("#myModal").modal('show');
            var view = new FENAZA.views.eventoEdit({model:this.model});
            $("#myModal > div > div > div.modal-body").html(view.render().el);
            //#myModal > div > div > div.modal-body
        },
        toggleStatus: function(e){
            e.preventDefault();
            var status = this.model.get("status") ==1 ? 0:1 ;
            this.model.save({status:status} );
        },

        destroy:function(e){
            e.preventDefault();
            if(confirm('¿Está seguro de eliminar este registro?')){
                this.model.destroy();
            }
        },

        upload:function(e){
            e.preventDefault();
            this.$(".fileupload").click();
        },

        initFileUpload:function(){
            var self = this;
            this.$(".fileupload").fileupload({
                url: FENAZA.site + "upload.php",
                dataType: 'json',
                done: function (e, data) {
                    $.each(data.result.files, function (index, file) {
                        self.model.save({'src':'img/' + file.name});
                    });
                },
                progressall: function (e, data) {
                    var progress = parseInt(data.loaded / data.total * 100, 10);
                    $('#progress .progress-bar').css(
                        'width',
                        progress + '%'
                    );
                }
            });
        }

    });