SatoshiFunder.Views.Root = Backbone.View.extend({
  initialize: function(options) {
    this.$modalEl = options.$modalEl
  },

  template: JST['main/root'],

  events: {
    "click #sign-up": "signUpModal"
  },

  signUpModal: function(){
    var modal = new SatoshiFunder.Views.UserNew({ model: this.model });
    this.$modalEl.find('.modal-content').html(modal.render().$el);
  },

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});