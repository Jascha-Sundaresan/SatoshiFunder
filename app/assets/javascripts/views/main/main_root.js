SatoshiFunder.Views.Root = Backbone.View.extend({

  template: JST['main/root'],

  render: function () {
    var content = this.template();
    this.$el.html(content);
    return this;
  }

});