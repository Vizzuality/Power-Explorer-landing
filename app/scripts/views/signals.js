
var SignalsView = Backbone.View.extend({

  el: '.signals',

  events: {
    'click #link-signals' : 'moveLeft',
    'click .back' : 'moveRight'
  },

  initialize: function() {
    this.initVars();
    this.setListeners();

    if (!this.checkIsIpad()) {
      this.checkPlayVideo();
    } else {
      $('.video-container').addClass('unrevealed');
      $('.gif-container').removeClass('unrevealed');
    }
  },

  initVars: function(){
    // Video
    this.video = document.querySelector('#signals-video');
    this.isPlaying = false;

    // Sliders
    this.$slides = [
      this.$el.find('.slide-1'),
      this.$el.find('.slide-2')
    ];

    // Offsets
    this.startlimit = $('.signals').offset().top - 200;
    this.endlimit = $('.signals').offset().top + $('.signals').height();
  },

  setListeners: function() {
    $(window).on('scroll', _.bind(function() {
      this.checkPlayVideo();
    }, this));
  },

  checkIsIpad: function() {
    return navigator.platform === 'iPad' ? true : false;
  },

  checkPlayVideo: function() {
    if (this.checkYOffset() > this.startlimit  &&
        this.checkYOffset() < this.endlimit &&
        !this.isPlaying) {
        this.playVideo();
      }

    if (this.checkYOffset() < this.startlimit / 2 && this.isPlaying ||
      this.checkYOffset() > this.endlimit && this.isPlaying) {
      this.stopVideo();
    }
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
    if (e) {
      e.preventDefault();
    }

    this.$slides.forEach(function(slide) {
      slide.removeClass('move m-right').addClass('move m-left');
    });
  },

  moveRight: function(e) {
    if (e) {
      e.preventDefault();
    }

    this.$slides.forEach(function(slide) {
      slide.removeClass('move m-left').addClass('move m-right');
    });
  }

});


