SatoshiFunder.Views.UserNew = Backbone.View.extend({
  tagName: 'form',

  template: JST['users/new'],

  events: {
    'submit': 'submit'
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var user = new SatoshiFunder.Models.User(attrs);
    user.save({}, {
      success: function () {
        SatoshiFunder.currentUser.set(user.attributes);
        $('#mainModal').modal('hide');
        Backbone.history.navigate("#discover", { trigger: true });
      }
    });
  }

});
