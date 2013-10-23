(function () {
  'use strict';
  angular.module('bingo', [])
  .factory('BingoCardService', [function () {
    var ITEMS = [
      'chart showing mobile use exploding',
      'Gartner Hype Cycle',
      'word/tag cloud',
      'meme',
      'presenter makes joke about his/her baldness',
      'demo fails due to poor wi-fi',
      'speaker asks everyone to get off wi-fi',
      'talk too crowded, coding in lobby',
      'slide deck crashes, speaker has to improvise',
      'presentation about power and versatility of HTML5 using PowerPoint or Keynote deck',
      'Prezi',
      'Steve Souders name check',
      'Paul Irish name check',
      'more than three presenters on stage, all white dudes',
      '"awesome" used twice in less than 60 seconds',
      '"hot" or "hottest" used without apparent irony',
      'presenter makes joke about his/her age',
      'presenter jokes about audience sleeping',
      'presenter mentions yet another JS MV* framework you never heard of before',
      'PhoneGap',
      'AngularJS',
      'Backbone',
      'Ember',
      'jQuery',
      'Modernizr',
      'presenter cites actual text from a W3C standard',
      '#bada55',
      'attendee wearing suspenders',
      'presenter does not show up',
      'Bootstrap',
      'Foundation',
      'Topcoat',
      'presenter drops f-bomb',
      '"dirty checking" pun',
      'mind blown by slide deck animations',
      'feeling like the dumbest person in the room',
      'feeling like the smartest person in the room',
      'thinking "Best. Something. Ever." and actualy meaning it',
      'at a CSS talk when you thought it would be a JS talk',
      'at a JS talk when you thought it would be a CSS talk',
      'high fiving another attendee',
      'some annoyance defused by recalling low ticket price',
      't-shirt schwag',
      'sticker schwag',
    ];

    return {
      newCard: function () {
        var rv = [];
        var items = ITEMS.slice(0);
        var index;

        for(var i=0 ; i<24 ; i++){
          index = Math.floor(Math.random()*items.length);
          rv[i] = items.splice(index,1)[0];
        }

        return rv;
      }
    };
  }])
  .controller(
    'bingoController',
    ['$scope', 'BingoCardService', function ($scope, BingoCardService) {

      $scope.newCard = function () {
        $scope.items = BingoCardService.newCard();
      };

      $scope.newCard();
    }]
  );
}());