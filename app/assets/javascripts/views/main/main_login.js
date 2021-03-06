SatoshiFunder.Views.LogIn = Backbone.View.extend({
  tagName: 'form',

  template: JST['main/login'],

  events: {
    'submit': 'submit',
    'click #guest': 'guest'
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  guest: function(event) {
    event.preventDefault();
    var user = new SatoshiFunder.Models.User({ name: "Guest", password: "123"});
    user.url = "api/session";
    user.save({}, {
      success: function() {
        SatoshiFunder.currentUser.set(user.attributes);
        SatoshiFunder.currentUser.url = "api/users";
        $('#mainModal').modal('hide');
      }
    })
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();
    var user = new SatoshiFunder.Models.User(attrs);
    user.url = "api/session";
    user.save({}, {
      success: function () {
        SatoshiFunder.currentUser.set(user.attributes);
        SatoshiFunder.currentUser.url = "api/users";
        $('#mainModal').modal('hide');
      }
    });
  }

});