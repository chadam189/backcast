var VideoPlayerView = Backbone.View.extend({
  el: '.player',
  
  initialize: function() {
    this.$el.html(this.template());
    return this;
  },

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
