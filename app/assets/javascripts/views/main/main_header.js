SatoshiFunder.Views.Header = Backbone.View.extend({
  initialize: function(options) {
    this.$modalEl = options.$modalEl,
    this.router = options.router
    this.listenTo(this.model, "change:id", this.render)
  },

  template: JST['main/header'],

  events: {
    'click #log-in': 'logInModal',
    'click #sign-up': 'signUpModal',
    'click #sign-out': 'logOut'
  },

  logInModal: function() {
    var modal = new SatoshiFunder.Views.LogIn({ model: this.model });
    this.$modalEl.find('.modal-content').html(modal.render().$el);
  },

  signUpModal: function(){
    var modal = new SatoshiFunder.Views.UserNew({ model: this.model });
    this.$modalEl.find('.modal-content').html(modal.render().$el);
  },

  logOut: function() {
    var that = this;
    this.model.url = 'api/session';

    this.model.destroy({
      success: function (){
        that.model.set('id', false);
        Backbone.history.navigate("", { trigger: true });
      }
    });
    
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  }

});