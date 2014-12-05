SatoshiFunder.Views.CategoriesIndex = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.collection, "sync", this.render)
  },

  template: JST['categories/index'],

  colorize: function() {
    var randColor;
    for (var i = 0; i < 15; i++) {

      this.$('.button-' + i).on("mouseenter", "a", function() {
        randColor = Math.floor(Math.random()*16777215).toString(16);
        $(this).css("background-color","#" + randColor);
      }).on("mouseleave", "a", function() {
        $(this).css("background-color","white");
      });
    }
  },

  render: function () {
    var content = this.template({ categories: this.collection });
    this.$el.html(content);
    this.colorize();
    return this;
  }

});
