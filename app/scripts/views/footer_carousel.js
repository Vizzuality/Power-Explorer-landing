
var FooterCarousel = Backbone.View.extend({

  el: '#footerCarousel',

  initialize: function() {
    if (!this.$el.length) {
      return;
    }
    //INIT
    this.$el.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 3000,
      slide: 'li'
    });
  }

});
