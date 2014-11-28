SatoshiFunder.Routers.Router = Backbone.Router.extend({
  initialize: function(options){
    this.$mainEl = options.$mainEl;
  },

  routes: {
    '': 'root',
    'start': 'start',
    'discover': 'discover',
    'projects/:id': 'show'
  },

  discover: function() {
    SatoshiFunder.Collections.categories.fetch();
    var view = new SatoshiFunder.Views.CategoriesIndex({ collection: SatoshiFunder.Collections.categories });
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

  show: function(id){
    var project = SatoshiFunder.Collections.projects.getOrFetch(id);
    var view = new SatoshiFunder.Views.ProjectShow({ model: project });
    this._swapView(view);
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$mainEl.html(view.render().$el);
  }
});
