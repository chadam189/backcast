var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
    this.listenTo(this.collection, 'select', this.selectVideo);
    this.listenTo(this.collection, 'sync', this.render);
  },
  // asdf 
  selectVideo: function(video) {
    this.model = video;
    this.render();
  },
  
  render: function() {
    this.model = this.collection.models[0];
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});









