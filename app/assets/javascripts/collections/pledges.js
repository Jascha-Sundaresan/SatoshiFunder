SatoshiFunder.Collections.Pledges = Backbone.Collection.extend({
  url: "api/pledges",

  model: SatoshiFunder.Models.Pledge,

  comparator: 'amount',

  initialize: function (models, options) {
    this.project = options.project
  }

});
