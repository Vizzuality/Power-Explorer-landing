
var RocketLauncher = function(IntroductionView, SignalsView,
  DescriptionView, FeaturesView) {
    'use strict';

    new IntroductionView();
    new SignalsView();
    new DescriptionView();
    new FeaturesView();
};


window.onload = function() {
  'use strict';

   new RocketLauncher();
};
