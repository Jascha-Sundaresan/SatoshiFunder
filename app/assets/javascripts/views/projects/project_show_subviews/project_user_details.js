SatoshiFunder.Views.UserDetailsView = Backbone.View.extend({

  template: JST['projects/user'],

  initialize: function () {
    this.listenTo(this.model, 'change sync', this.render);
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);

    return this;
  }

});