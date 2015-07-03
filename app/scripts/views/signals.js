
var SignalsView = Backbone.View.extend({

  el: '.signals',

  events: {
    'click .link-signals' : 'moveLeft',
    'click .back' : 'moveRight'
  },

  initialize: function() {
    this.video = document.querySelector('#signals-video');
    this.isPlaying = false;

    var startlimit = $('.signals').offset().top - 200,
      endlimit = $('.signals').offset().top + $('.signals').height();

    $(window).on('scroll', _.bind(function() {

      if (this.checkYOffset() > startlimit  &&
        this.checkYOffset() < endlimit &&
        !this.isPlaying) {
        this.playVideo();
      }

      if (this.checkYOffset() < startlimit / 2 && this.isPlaying ||
        this.checkYOffset() > endlimit && this.isPlaying) {
        this.stopVideo();
      }
    }, this));

  },

  checkYOffset: function() {
    return window.pageYOffset;
  },

  playVideo: function() {
    $(this.video).removeClass('invisible');
    this.video.play();
    this.isPlaying = true;
  },

  stopVideo: function() {
    $(this.video).addClass('invisible');
    this.video.pause();
    this.video.currentTime = 0;

    this.isPlaying = false;
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


