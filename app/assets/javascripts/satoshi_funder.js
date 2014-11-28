window.SatoshiFunder = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new SatoshiFunder.Routers.Router({
      $mainEl: $("#Content")
    });
    Backbone.history.start();
  }
};

$(document).ready(function(){
  SatoshiFunder.initialize();
});
