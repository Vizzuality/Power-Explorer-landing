
var IntroductionView = Backbone.View.extend({

  el: '.introduction',

  initialize: function() {
    this.launchModal();
  },

  launchModal: function() {
    var $video = this.$el.find('video');

    this.$el.find('.play-video').on('click', function(e) {
      e.preventDefault();

      $('#modal-intro').foundation('reveal', 'open');
      $video[0].play();
    });
  }

});
