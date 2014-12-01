SatoshiFunder.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    // this.addHomeView();
  },

  // addHomeView: function() {
  // 	var homeView = new SatoshiFunder.Views.HomeView({ model: this.model });
  // 	this.addSubView('#home', homeView);
  // },

  addHomeView: function() {
  	var homeView = new SatoshiFunder.Views.HomeView({ model: this.model });
    this.$el.find('#home').html(homeView.render().$el);
  },

  addStatsView: function() {
  	var statsView = new SatoshiFunder.Views.StatsView({ model: this.model });
  	this.$el.find('#stats').html(statsView.render().$el);
  },

  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);

    this.addHomeView();
    this.addStatsView();
    // this.attachSubviews();
    return this;
  }

});