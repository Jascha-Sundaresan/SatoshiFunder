SatoshiFunder.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$mainEl = options.$mainEl;
    this.categories = new SatoshiFunder.Collections.Categories();
    this.categories.fetch();
    this.projects = new SatoshiFunder.Collections.Projects();
    this.projects.fetch();
  },

  routes: {
    '': 'root',
    'start': 'start',
    'discover': 'categoriesIndex',
    'projects': 'projectsIndex',
    'projects/:id': 'projectShow'
  },

  categoriesIndex: function() {
    var view = new SatoshiFunder.Views.CategoriesIndex({ collection: this.categories });
    this._swapView(view);
  },

  root: function(){
    var view = new SatoshiFunder.Views.Root();
    this._swapView(view);
  },

  start: function(){
    var view = new SatoshiFunder.Views.Start();
    this._swapView(view);
  },

  projectsIndex: function() {
    var view = new SatoshiFunder.Views.ProjectsIndex({ collection: this.projects });
    this._swapView(view);
  },

  projectShow: function(id){
    var project = this.projects.getOrFetch(id);
    var view = new SatoshiFunder.Views.ProjectShow({ model: project });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$mainEl.html(view.render().$el);
  }
});
