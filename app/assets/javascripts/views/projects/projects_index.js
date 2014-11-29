SatoshiFunder.Views.ProjectsIndex = Backbone.View.extend({
  initialize: function() {
    this.listenTo(this.collection, "sync add remove change:title", this.render)
  },

  template: JST['projects/index'],

  render: function () {
    var content = this.template({ projects: this.collection });
    this.$el.html(content);
    return this;
  }

});