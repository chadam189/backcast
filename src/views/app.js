var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(exampleVideoData);
    this.vidList = new VideoListView({collection: this.videos});
    // console.log('videos', this.vidList)
    // this.vidList.render();
    this.render();
    this.vidList.render();  
  },


  render: function() {
    this.$el.html(this.template());
    new SearchView().render();
    new VideoPlayerView().render();
    // this.vidList.render(this.vidList);
    // this.collection.forEach(this.renderVideo, this);
    return this;
  },

  template: templateURL('src/templates/app.html')

});
