SatoshiFunder.Views.ProjectShow = Backbone.View.extend({

  template: JST['projects/show'],

  initialize: function (options) {
    this.listenTo(this.model, 'sync', this.render);
    this.$modalEl = options.$modalEl;
    this.tabView = new SatoshiFunder.Views.HomeView({ model: this.model });
    this.currentTab = '#home';
  },

  events: {
    "click #backers": "addBackerView",
    "click #home": "addHomeView"
  },

  addTabView: function() {
    this._swapView(this.tabView);
  },

  addBackerView: function() {
    this.tabView = new SatoshiFunder.Views.BackersView({ model: this.model });
    this.currentTab = '#backers';

    this._swapView(this.tabView);
  },

  addHomeView: function() {
    this.tabView = new SatoshiFunder.Views.HomeView({ model: this.model });
    this.currentTab = '#home';
    
    this._swapView(this.tabView);
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

    this.addTabView();
    this.addStatsView();
    this.addPledges();
    this.addUserDetailsView();
    return this;
  },

  _swapView: function (view) {
    this._currentView && this._currentView.remove();
    this._currentView = view;
    this.$el.find('.active').removeClass('active');
    this.$el.find(this.currentTab).addClass('active');
    this.$el.find('#project-show-left-column').html(view.render().$el);
  }

});