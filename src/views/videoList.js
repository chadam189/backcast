var VideoListView = Backbone.View.extend({


  initialize: function() {
    this.render();
    this.collection.on('sync', this.render, this);
    return this;
  },
 
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(function (video, index) {
      new VideoListEntryView({
        el: $('.video-list').children()[index], 
        model: video});
    });
    return this;
  },
   
  renderVideo: function (video) {
    // var vid = new Video(video);
    // console.log('here with vidoe', video);
    var videoView = new VideoListEntryView({model: video});
    console.log('video view', videoView.render());
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
