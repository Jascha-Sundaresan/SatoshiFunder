SatoshiFunder.Collections.Categories = Backbone.Collection.extend({
  
  model: SatoshiFunder.Models.Category,
  
  url: "/api/categories",

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
