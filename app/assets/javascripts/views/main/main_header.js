SatoshiFunder.Views.Header = Backbone.View.extend({
  initialize: function(options) {
    this.$modalEl = options.$modalEl,
    this.router = options.router
    this.listenTo(this.model, "change:name", this.render)
  },

  template: JST['main/header'],

  events: {
    'click #log-in': 'logInModal',
    'click #sign-up': 'signUpModal',
    'click #sign-out': 'logOut'
  },

  logInModal: function() {
    user = new SatoshiFunder.Models.User();
    var modal = new SatoshiFunder.Views.LogIn({ model: user });
    this.$modalEl.find('.modal-content').html(modal.render().$el);
  },

  signUpModal: function(){
    user = new SatoshiFunder.Models.User();
    var modal = new SatoshiFunder.Views.UserNew({ model: user });
    this.$modalEl.find('.modal-content').html(modal.render().$el);
  },

  logOut: function() {
    this.model.url = 'api/session';
    this.model.destroy();
    Backbone.history.navigate("", { trigger: true });
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }

});