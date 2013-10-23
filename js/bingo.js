(function () {

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
  ];

  window.onload = init;

  function init() {
    newCard();
    document.getElementById("new-card").onclick = newCard;
  }

  function newCard() {
    function setItem(thisItem){
      var currentItem = "item" + thisItem;
      var index = Math.floor(Math.random()*items.length);
      document.getElementById(currentItem).innerHTML = items.splice(index,1)[0];
    }

    var items = ITEMS.slice(0);

    for(var i=0 ; i<24 ; i++){
        setItem(i);
      }
  }
}());