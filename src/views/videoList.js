var VideoListView = Backbone.View.extend({
  el: '.list',

  initialize: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // _.forEach(this, new VideoListEntryView().render());
    // new VideoListEntryView().render();
    // console.log('video collection', this.collection);
    // this.collection.forEach(this.renderVideo, this);

    this.collection.forEach(function (video, index) {
      new VideoListEntryView({el: $('.video-list').children()[index], model: video}, 'video' + (index + 1));
    });
    return this;
    
  },
 
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    // _.forEach(this, new VideoListEntryView().render());
    // new VideoListEntryView().render();
    // console.log('video collection', this.collection);
    // this.collection.forEach(this.renderVideo, this);
    this.$el.html(this.template());
    
    new VideoListEntryView();
    
    var vidListCount = document.getElementsByClassName('video-list');

    this.forEach(function (video, index) {
      new VideoListEntryView({el: $('.video-list').children()[index], model: video});
      // className: 'video' + (index).toString()
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
