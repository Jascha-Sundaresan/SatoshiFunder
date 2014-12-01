SatoshiFunder.Views.StatsView = Backbone.View.extend({

  template: JST['projects/stats'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var backers = 0;
    var pledgeAmount = 0;
    var content = this.template({ project: this.model, backers: backers, pledgeAmount: pledgeAmount });
    this.$el.html(content);

    return this;
  }

});