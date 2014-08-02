//home.js

window.FENAZA.views.home = Backbone.View.extend({

  el: $("#fenazapp"),
  events: {
    "click .btn-subir": "upload"
  },

  initialize: function() {
    this.template = _.template($('#home-template').html());
    this.render();
    this.listenTo(FENAZA.portada, 'change', this.render);

    $('#myModal').modal({show:false});
  },

  render: function() {
  	this.$el.html(this.template({portada:FENAZA.portada.toJSON()}));
    this.initFileUpload();
  	return this;
  },

  upload: function(){
    $("#fileupload").trigger('click');
  },

  close: function(){
    $("#fileupload").fileupload('destroy');
  },

  initFileUpload:function(){
        $("#fileupload").fileupload({
        url: "/upload.php",
        dataType: 'json',
        done: function (e, data) {
            $.each(data.result.files, function (index, file) {
                FENAZA.portada.save({'src':'img/' + file.name});
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