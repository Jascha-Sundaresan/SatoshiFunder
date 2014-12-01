SatoshiFunder.Views.ProjectSmall = Backbone.View.extend({
  tagName: 'li',

  className: 'project-small',

  template: JST['projects/small'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);

    return this;
  }

});