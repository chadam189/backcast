var SearchView = Backbone.View.extend({
  
  el: '.search',

  render: function() {
    //console.log('hi');
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
