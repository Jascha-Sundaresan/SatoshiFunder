SatoshiFunder.Views.StatsView = Backbone.View.extend({

  template: JST['projects/stats'],

  initialize: function () {
    this.listenTo(this.model, 'change sync', this.render);
  },

  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);

    return this;
  }

});