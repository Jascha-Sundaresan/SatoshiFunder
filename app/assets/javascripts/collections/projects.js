SatoshiFunder.Collections.Projects = Backbone.Collection.extend({

  model: SatoshiFunder.Models.Project,
  
  url: "/api/projects",

  getOrFetch: function (id) {
    var model = this.get(id),
      that = this;
    if(!model) {
      model = new this.model({ id: id });
      model.fetch({
        success: function () {
          that.add(model);
        },
      });
    } else {
      model.fetch();
    }
    return model;
  }


});