var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    // this.$el.html(this.template());
    this.render();
    this.videos = new Videos(exampleVideoData);
    new VideoPlayerView();
    new SearchView();
    new VideoListView({collection: this.videos});
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
