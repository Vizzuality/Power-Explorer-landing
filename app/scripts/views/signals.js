
var SignalsView = Backbone.View.extend({


  el: '.signals',

  events: {
    'click .link-signals' : 'moveLeft',
    'click .back' : 'moveRight'
  },

  moveLeft: function(e) {
    e.preventDefault();

    this.$el.find('.slide-1').removeClass('move m-right');
    this.$el.find('.slide-2').removeClass('move m-right');

    this.$el.find('.slide-1').addClass('move m-left');
    this.$el.find('.slide-2').addClass('move m-left');
  },

  moveRight: function(e) {
    e.preventDefault();

    this.$el.find('.slide-1').removeClass('move m-left');
    this.$el.find('.slide-2').removeClass('move left');

    this.$el.find('.slide-1').addClass('move m-right');
    this.$el.find('.slide-2').addClass('move m-right');
  }

});


