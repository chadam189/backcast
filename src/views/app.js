var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(exampleVideoData);
    return this;
  },


  render: function() {
    this.$el.html(this.template());
    this.videos = new Videos(exampleVideoData);
    // addEventSystem(this);
    new VideoPlayerView({
      collection: this.videos,
      el: this.$('.player')});
    
    new SearchView({
      el: this.$('.search'),
      collection: this.videos
    });
    
    new VideoListView({
      collection: this.videos,
      el: this.$('.list') 
    });
    return this;
  },

  template: templateURL('src/templates/app.html')

});


