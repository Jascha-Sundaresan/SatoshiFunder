window.SatoshiFunder = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    var router = new SatoshiFunder.Routers.Router({
      $mainEl: $('#Content'),
      $modalEl: $('#mainModal')
    });

    if (!this.currentUser) {
      this.currentUser = new SatoshiFunder.Models.User();
    };

    var view = new SatoshiFunder.Views.Header({ model: this.currentUser, $modalEl: $('#mainModal'), router: router });
    $('#Header').html(view.render().$el);

    Backbone.history.start();
  },

  initialize_with_user: function(user_params) {
    this.currentUser = new SatoshiFunder.Models.User(user_params);
    this.initialize();
  }
};