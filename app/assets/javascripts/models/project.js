SatoshiFunder.Models.Project = Backbone.Model.extend({
  urlRoot: "/api/projects",

  user:function() {
    if(!this._user) {
      this._user = new SatoshiFunder.Models.User();
    }

    return this._user;
  },

  pledges: function () {
    if(!this._pledges) {
      this._pledges = new SatoshiFunder.Collections.Pledges([], {project: this});
    }

    return this._pledges;
  },

  backers: function() {
    if(!this._backers) {
      this._backers = new SatoshiFunder.Collections.Backers();
    }

    return this._backers;
  },

  parse: function (response) {
    if(response.pledges) {
      this.pledges().set(response.pledges, { parse: true });
      delete response.pledges;
    }

    if(response.backers) {
      this.backers().set(response.backers, { parse: true });
      delete response.backers;
    }

    if(response.user) {
      this.user().set(response.user, { parse: true });
      delete response.user;
    }

    return response;
  }

});
