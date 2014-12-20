SatoshiFunder.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/show'],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.$modalEl = options.$modalEl
  },

  addHomeView: function() {
  	var homeView = new SatoshiFunder.Views.HomeView({ model: this.model });
    this.$el.find('#home').addClass('active')
    
    this.$el.find('#project-show-left-column').html(homeView.render().$el);
  },

  addStatsView: function() {
  	var statsView = new SatoshiFunder.Views.StatsView({ model: this.model, $modalEl: this.$modalEl });
  	this.$el.find('#stats').html(statsView.render().$el);
  },

  addUserDetailsView: function() {
  	var userDetailsView = new SatoshiFunder.Views.UserDetailsView({ model: this.model.user() });
    this.$el.find('#user-details').html(userDetailsView.render().$el);
  },

  addPledge: function(pledge) {
    var view = new SatoshiFunder.Views.PledgeSmall({ 
      model: pledge,
      $modalEl: this.$modalEl
    });
    this.$el.find('#pledges').append(view.render().$el);
  },

  addPledges: function() {
    this.model.pledges().slice(1).forEach(this.addPledge.bind(this));
  },

  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);

    this.addHomeView();
    this.addStatsView();
    this.addPledges();
    this.addUserDetailsView();
    return this;
  }

});