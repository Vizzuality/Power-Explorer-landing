
var IntroductionView = Backbone.View.extend({

  el: '.introduction',

  events: {
    // 'click .play-video': 'launchModal',
    'click .next' : 'scrollDown',
    'click #join-button': 'launchJoinModal',
  },

  initialize: function() {
    this.bg = $('.bg');
    this.setListeners();
    this.doParallaxEffect();
    //this.launchModal();
    this.launchJoinModal();
  },

  setListeners: function() {
    $(window).on('scroll', _.bind(this.doParallaxEffect, this));
    $(window).on('scroll', _.bind(this.showNext, this));
  },

  showNext: function() {
    var limitShow = $('.signals').offset().top / 4.5;

    if (this.getScroll() >= limitShow) {
      $('.next').addClass('unrevealed');
    } else {
      $('.next').removeClass('unrevealed');
    }

  },

  scrollDown: function(e) {
    if(e) {
      e.preventDefault();

      $('body').animate({
        scrollTop: $('.signals').offset().top
      }, 500, 'swing');
    }
  },

  launchModal: function(e) {
    //var $video = this.$el.find('video');

    // this.$el.find('.play-video').on('click', function(e) {
    e.preventDefault();

    //   $('#modal-intro').foundation('reveal', 'open');
    //   $video[0].play();
    // });
  },

  launchJoinModal: function(e) {
    // var $video = this.$el.find('video');

    this.$el.find('#join-button').on('click', function(e) {
      e.preventDefault();
      $('#modal-join').foundation('reveal', 'open');
    });
  },

  getScroll: function() {
    return window.pageYOffset;
  },

  doParallaxEffect: function() {
    var scroll = this.getScroll(),
      translateY = scroll - (scroll / 2);

    this.bg.css({
      '-webkit-transform': 'translate3d(0,' + translateY + 'px, 0)',
      '-moz-transform': 'translate3d(0,' + translateY + 'px, 0)',
      '-ms-transform': 'translate3d(0,' + translateY + 'px, 0)',
      '-o-transform': 'translate3d(0,' + translateY + 'px, 0)',
      'transform' :  'translate3d(0,' + translateY + 'px)'
    });
  }

});
