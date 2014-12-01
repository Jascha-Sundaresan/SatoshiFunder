SatoshiFunder.Models.Project = Backbone.Model.extend({
  urlRoot: "/api/projects",

  user:function() {

  },

  pledges: function () {
    if(!this._pledges) {
      this._pledges = new SatoshiFunder.Collections.Pledges([], { project: this });
    }

    return this._pledges;
  },

  parse: function (response) {
    if(response.pledges) {
      this.pledges().set(response.pledges, { parse: true });
      delete response.pledges;
    }

    return response;
  }

});
