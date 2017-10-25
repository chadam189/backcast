var SearchView = Backbone.View.extend({
  
  
  initialize: function() {
    this.render();
  },
  
  events: {
    'click .btn': 'newSearch'
  },
  
  newSearch: function () {
    let searchText = this.$('.form-control').val();
    debugger;
    this.collection.search(searchText);
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
