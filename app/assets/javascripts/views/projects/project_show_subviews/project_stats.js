SatoshiFunder.Views.StatsView = Backbone.View.extend({

  template: JST['projects/stats'],

  initialize: function (options) {
    this.$modalEl = options.$modalEl;
    this.listenTo(this.model, 'sync', this.render);
    this.listenTo(this.model, 'sync', this.runCounter);
  },

  events: {
    "click #pledge-button": "pledgeShow"
  },

  pledgeShow: function(event) {
    event.preventDefault();
    var modal = new SatoshiFunder.Views.PledgeShow({ model: this.model.pledges().first() })
    this.$modalEl.find('.modal-content').html(modal.render().$el);
  },

  runCounter: function() {    
    var pledge_total = new countUp("total-pledged", 0, this.model.get('total_pledged'));
    pledge_total.start();
  },


  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);
    return this;
  }

});