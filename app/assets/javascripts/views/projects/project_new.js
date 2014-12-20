SatoshiFunder.Views.ProjectNew = Backbone.View.extend({
  initialize: function(options) {
    this.categories = options.categories
    if (this.categories.length == 0) {
      this.categories.fetch();
    }
    this.listenTo(this.categories, 'sync', this.render)
  },

  tagName: 'form',

  id: 'new-project-form',

  template: JST['projects/new'],

  events: {
    'submit': 'submit'
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
        Backbone.history.navigate("#projects/" + that.model.id, { trigger: true });
      },
      error: function (){

      }
    });
  }

});