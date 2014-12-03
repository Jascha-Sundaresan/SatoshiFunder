SatoshiFunder.Views.PledgeSmall = Backbone.View.extend({
  className: 'pledge',

  attributes: {
    'data-toggle': 'modal',
    'data-target': '#mainModal'
  },

  template: JST['pledges/small'],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.$modalEl = options.$modalEl;
  },

  events: {
    "click": "show"
  },

  show: function(event) {
    event.preventDefault();
    var modal = new SatoshiFunder.Views.PledgeShow({ model: this.model });
    this.$modalEl.find('.modal-content').html(modal.render().$el);
  },

  render: function () {
    var content = this.template({ pledge: this.model });
    this.$el.html(content);
    return this;
  }

});
