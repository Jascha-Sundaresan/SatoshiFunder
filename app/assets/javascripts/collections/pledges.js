SatoshiFunder.Collections.Pledges = Backbone.Collection.extend({
  url: "api/pledges",

  model: SatoshiFunder.Models.Pledge,

  comparator: 'amount'

});
