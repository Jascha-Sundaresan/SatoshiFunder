SatoshiFunder.Views.ProjectNew = Backbone.View.extend({
  initialize: function(options) {
    this.categories = options.categories
  },

  tagName: 'form',

  template: JST['projects/new'],

  events: {
    'click button': 'submit'
  },

  render: function () {
    var content = this.template({ categories: this.categories, project: this.model });
    this.$el.html(content);
    return this;
  },

  submit: function (event) {
    event.preventDefault();
    var attrs = this.$el.serializeJSON(),
      that = this;

    this.model.set(attrs);
    this.model.save({}, {
      success: function () {
        that.collection.add(that.model, { merge: true });
        Backbone.history.navigate("#projects", { trigger: true });
      }
    });
  }

});