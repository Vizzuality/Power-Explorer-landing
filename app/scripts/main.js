
var RocketLauncher = function() {
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
