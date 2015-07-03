
var FeaturesView = Backbone.View.extend({
  el: '.features',

  events: {
    'click .learn-more': 'setFeature',
    'click .link-feature': 'setFeature'
  },

  setFeature: function(e) {
    var $currentFeature,
      $item;

    if (e) {
      e.preventDefault();
      $currentFeature = $(e.currentTarget).closest('.features-item');
      $item = $(e.currentTarget).data('item');
    }

    if ($currentFeature) {
      $currentFeature.addClass('is-hidden');
    }


    $('.inline').addClass('unrevealed fix-height');


    $('.inline .features-item').removeClass('is-hidden current');
    $('#item-' + $item).addClass('current');

    // Reveals slider and slide
    $('.expose-container').removeClass('unrevealed is-hidden');
    $('.expose-container .slide').addClass('unrevealed');
    $('.expose-container #slide-' + $item).removeClass('unrevealed');

    // Hide two-columns list
    $('.features-list').first().addClass('is-hidden');

    // Shows row list
    window.setTimeout(function() {
      $('.inline').removeClass('unrevealed');
    }, 150);

  }

});
