SatoshiFunder.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$mainEl = options.$mainEl;
    this.$modalEl = options.$modalEl;
    this.categories = new SatoshiFunder.Collections.Categories();
    this.categories.fetch();
    this.projects = new SatoshiFunder.Collections.Projects();
  },

  routes: {
    '': 'root',
    'start': 'start',
    'discover': 'categoriesIndex',
    'categories/:id': 'categoryShow',
    'projects': 'projectsIndex',
    'projects/new': 'projectNew',
    'projects/:id': 'projectShow',
    'users/:id': 'userShow'
  },

  root: function(){
    var view = new SatoshiFunder.Views.Root({ $modalEl: this.$modalEl });
    this._swapView(view);
  },

  start: function(){
    var view = new SatoshiFunder.Views.Start();
    this._swapView(view);
  },

  categoriesIndex: function() {
    var view = new SatoshiFunder.Views.CategoriesIndex({ collection: this.categories });
    this._swapView(view);
  },

  categoryShow: function(id) {
    var category = this.categories.getOrFetch(id);
    var view = new SatoshiFunder.Views.CategoryShow({ model: category })
    this._swapView(view);
  },

  projectsIndex: function() {
    this.projects.fetch();
    var view = new SatoshiFunder.Views.ProjectsIndex({ collection: this.projects });
    this._swapView(view);
  },

  projectNew: function() {
    var project = new SatoshiFunder.Models.Project();
    var view = new SatoshiFunder.Views.ProjectNew({ collection: this.projects, model: project, categories: this.categories });
    this._swapView(view);
  },

  projectShow: function(id){
    var project = this.projects.getOrFetch(id);
    var view = new SatoshiFunder.Views.ProjectShow({ 
      model: project,
      $modalEl: this.$modalEl
    });
    this._swapView(view);
  },

  userShow: function(id) {
    var user = new SatoshiFunder.Models.User({ id: id });
    user.fetch();
    var view = new SatoshiFunder.Views.UserShow({ model: user });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$mainEl.html(view.render().$el);
  }
});
