
var IntroductionView = Backbone.View.extend({

  el: '.introduction',

  events: {
    'click .play-video': 'launchModal',
    'click .next' : 'scrollDown',
  },

  initialize: function() {
    $(window).on('scroll', _.bind(this.doParalaxEfect, this));
    this.bg = $('.bg');
    this.doParalaxEfect();
    //this.launchModal();
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

  getScroll: function() {
    return window.pageYOffset;
  },

  doParalaxEfect: function() {
    var scroll = this.getScroll();

    var translateY =  scroll - (scroll / 2);

    this.bg.css({
      '-webkit-transform': 'translate3d(0,' + translateY + 'px, 0)',
      '-moz-transform': 'translate3d(0,' + translateY + 'px, 0)',
      '-ms-transform': 'translate3d(0,' + translateY + 'px, 0)',
      '-o-transform': 'translate3d(0,' + translateY + 'px, 0)',
      'transform' :  'translate3d(0,' + translateY + 'px)'
     });
  }

});
