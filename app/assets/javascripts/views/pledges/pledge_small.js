SatoshiFunder.Views.PledgeSmall = Backbone.View.extend({
  className: 'pledge',

  template: JST['pledges/small'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
  },

  events: {
    "click": "show"
  },

  show: function(event) {
    event.preventDefault();
    debugger
  },

  render: function () {
    var content = this.template({ pledge: this.model });
    this.$el.html(content);
    return this;
  }

});
