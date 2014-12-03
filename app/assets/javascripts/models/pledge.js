SatoshiFunder.Models.Pledge = Backbone.Model.extend({
  submitBack: function(amount) {
    var that = this;
    $.ajax({
      type: 'POST',
      url: '/api/backs',
      dataType: 'json',
      data: { back: {
        amount: amount,
        pledge_id: this.id
      }},
      success: function(){
        that.project().fetch();

      }
    })
  },

  project: function() {
    return this.collection.project
  }
});
