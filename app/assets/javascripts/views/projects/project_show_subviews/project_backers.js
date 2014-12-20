SatoshiFunder.Views.BackersView = Backbone.View.extend({

  template: JST['projects/backers'],

  initialize: function() {
    this.listenTo(this.model, 'sync', this.render);
  },

  render: function () {
    var content = this.template({ backers: this.model.backers() });
    this.$el.html(content);

    return this;
  }


})