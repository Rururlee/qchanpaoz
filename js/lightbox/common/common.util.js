;// Global Object
var common = common || {};

(function($){

  /**
   * @module util
   */
  var util = {};

  util.mediaChange = function(callback){
    var state = util.isOrientation();

    $(window).on('resize.mediaChange', function(){
      if(state !== util.isOrientation()){
        if (callback) callback();
        state = util.isOrientation();
      }
    }).trigger('resize.mediaChange');
  };

  util.isOrientation = function(){
    var w = $(window).width(),
        h = $(window).height();
    return w < h ? 'portrait' : 'landscape';
  };


  util.isDisplayType = (function(){
    var $head = $('head');
    return function(type){
      return $head.css('fontFamily') === type;
    };
  }());

  /*--------------------------------------------------------------------------
   export
   --------------------------------------------------------------------------*/

  common.util = util;

}(jQuery));
