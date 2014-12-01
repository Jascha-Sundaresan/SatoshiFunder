SatoshiFunder.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/show'],

  initialize: function () {
    this.listenTo(this.model, 'sync', this.render);
    // this.addHomeView();
  },

  // events: {
  //   "click .pledge": "pledgeShow"
  // },

  // addHomeView: function() {
  // 	var homeView = new SatoshiFunder.Views.HomeView({ model: this.model });
  // 	this.addSubView('#home', homeView);
  // },

  // pledgeShow: function(event) {
  //   event.preventDefault();
  //   debugger
  // },

  addHomeView: function() {
  	var homeView = new SatoshiFunder.Views.HomeView({ model: this.model });
    this.$el.find('#project-show-left-column').html(homeView.render().$el);
  },

  addStatsView: function() {
  	var statsView = new SatoshiFunder.Views.StatsView({ model: this.model });
  	this.$el.find('#stats').html(statsView.render().$el);
  },

  // addUserDetailsView: function() {
  // 	var userDetailsView = new SatoshiFunder.Views.UserDetailsView({ model:  })
  // },

  addPledge: function(pledge) {
    var view = new SatoshiFunder.Views.PledgeSmall({ model: pledge });
    this.$el.find('#pledges').append(view.render().$el);
  },


  addPledges: function() {
    this.model.pledges().each(this.addPledge.bind(this));
  },

  render: function () {
    var content = this.template({ project: this.model });
    this.$el.html(content);

    this.addHomeView();
    this.addStatsView();
    this.addPledges();
    // this.addUserDetailsView();
    // this.attachSubviews();
    return this;
  }

});