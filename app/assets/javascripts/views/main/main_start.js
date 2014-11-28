SatoshiFunder.Views.Start = Backbone.View.extend({

  template: JST['main/start'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});