SatoshiFunder.Views.UserNew = Backbone.View.extend({
  tagName: 'form',

  template: JST['users/new'],

  events: {
    'click #submit': 'submit'
  },

  render: function () {
    var content = this.template({ user: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON();

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        Backbone.history.navigate("#projects", { trigger: true });
      }
    });
  }

});