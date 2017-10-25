var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    return this;
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },
  
  events: {
    'click .video-list-entry-title': 'handleClick'
  },
  
  handleClick: function() {
    this.model.select();
  },

  template: templateURL('src/templates/videoListEntry.html')

});
