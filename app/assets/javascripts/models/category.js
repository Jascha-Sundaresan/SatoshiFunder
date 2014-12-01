SatoshiFunder.Models.Category = Backbone.Model.extend({
  urlRoot: "/api/categories",

  projects: function () {
    if(!this._projects) {
      this._projects = new SatoshiFunder.Collections.Projects([], { category: this });
    }

    return this._projects;
  },

  parse: function (response) {
    if(response.projects) {
      this.projects().set(response.projects, { parse: true });
      delete response.projects;
    }

    return response;
  }

});
