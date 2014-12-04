SatoshiFunder.Views.StatsView = Backbone.View.extend({

  template: JST['projects/stats'],

  initialize: function (options) {
    this.$modalEl = options.$modalEl;
    this.listenTo(this.model, 'change sync', this.render);
  },

  events: {
    "click #pledge-button": "pledgeShow"
  },

  pledgeShow: function(event) {
    event.preventDefault();
    var modal = new SatoshiFunder.Views.PledgeShow({ model: this.model.pledges().first() })
    this.$modalEl.find('.modal-content').html(modal.render().$el);
  },


  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);

    return this;
  }

});