var VideoListEntryView = Backbone.View.extend({
  defaults: {
    el: '.video-list'
  },

  initialize: function(idName) {
    this.$el.html(this.template(this.model.attributes));
    // this.$el.arrt('id', idName);
    // $('.' + this.id + '.video-list-entry-title').text(this.model.attributes.snippet.title);
    // $('.video-list-entry-title').text(this.model.attributes.snippet.title);
    // $('.video-list-entry-detail').text(this.model.attributes.snippet.description);
    // $('.media-object').attr('src', this.model.attributes.snippet.thumbnails.default.url);
    // this.$el.html(this.template());
    // this.$el.append(this.template);
    return this;
  },

  render: function() {
    // this.$el.html(this.template(this.model.attributes));
    this.$el.html(this.template());
    // this.$el.append(this.template);
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
