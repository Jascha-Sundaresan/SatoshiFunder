SatoshiFunder.Views.CategoryShow = Backbone.View.extend({
  initialize: function(){
    this.listenTo(this.model, "sync", this.render)
  },

  template: JST['categories/show'],

  addProject: function(project) {
    var view = new SatoshiFunder.Views.ProjectSmall({ model: project });
    this.$el.find('#project-list').append(view.render().$el);
  },


  addProjects: function() {
    this.model.projects().each(this.addProject.bind(this));
  },


  render: function () {
    var content = this.template({ category: this.model });
    this.$el.html(content);
    this.addProjects();
    return this;
  }

});
