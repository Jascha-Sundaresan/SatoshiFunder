SatoshiFunder.Views.PledgeShow = Backbone.View.extend({
  tagName: 'form',

  template: JST['pledges/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    'submit': 'submit'
  },

  render: function () {
    var content = this.template({ pledge: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    this.model.submitBack(attrs.amount);
  }
});