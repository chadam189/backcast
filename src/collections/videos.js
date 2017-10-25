var Videos = Backbone.Collection.extend({

  model: Video,
  
  url: 'https://www.googleapis.com/youtube/v3/search',
  
  search: function(query) {
    this.fetch({
      url: this.url,
      type: 'GET',
      dataType: 'json',
      data: {
        maxResults: '5',
        part: 'snippet',
        q: query,
        key: window.YOUTUBE_API_KEY
      }, success: function () {
        console.log('we did it');
      }, error: function () {
        console.log('we effed it up it');
      }
    });
  },
  
  parse: function(data) {
    return data.items;
  },

});
