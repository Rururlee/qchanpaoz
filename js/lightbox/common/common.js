;// Global Object
var Common = Common || {};

(function($){

/*----------------------------------------------------------------------
	ieFix
----------------------------------------------------------------------*/
/**
 * ieFix
 */
Common.ieFix = function(){
	var PARAM = {
		duration		: 300,
		easing  		: 'easeInOutSine'
	};

	/**
	 * [IeFix]
	 */
	var IeFix = function(){
		this.param = PARAM;
		this.init();
	};

	// prototype
	var PROTO = IeFix.prototype;

	// init: 初期化
	PROTO.init = function(){
		this.set();
	};

	/**
	 * [set 初期設定]
	 */
	PROTO.set = function(){
		var self = this;

		// header
		self.alpha($('.g-nav').find('a img'),0);

	};

	/**
	 * [alpha]
	 */
	PROTO.alpha = function($t,num){
		$t.hover(
			function () {
				$(this).stop(true, false).animate({'opacity':num},PARAM.duration,PARAM.easing);
			},
			function () {
				$(this).stop(true, false).animate({'opacity':1},PARAM.duration,PARAM.easing);
			}
		);
	};

	// @return インスタンスを返す
	return new IeFix();
};

/*----------------------------------------------------------------------
	mode
----------------------------------------------------------------------*/
Common.mode = function(){

	var timer = false;
	$(window).resize(function() {
			if (timer !== false) {
					clearTimeout(timer);
			}
			timer = setTimeout(function(){

				$('body').removeClass();
				bodyAddClass($(window).width());

			}, 200);
	});

	var bodyAddClass = function(w){
		if(w > 750){
			if($.isBrowser('ie', 9)){
				$('body').addClass('mode-ie9');
			} else {
				$('body').addClass('mode-pc');
			}
		} else {
			$('body').addClass('mode-sp');
		}
	};

	bodyAddClass($(window).width());

};

/*----------------------------------------------------------------------
	globalNavi: グローバルナビ
----------------------------------------------------------------------*/
/**
 * globalNavi [グローバルナビ]
 */
Common.globalNavi = function($target){
	var PARAM = {
		$target		:	$target,
		$trigger	: $target.find('.menu-trigger a'),
		$wrapper	:	$target.find('nav'),
		$cover		:	$target.find('.cover'),

		ease      : 'easeInOutSine',
		duration  : 600,

		_isOpen 	: false,
		_isAnima 	: false,
		height		:	null
	};

	/**
	 * [globalNavi コンストラクタ]
	 */
	var globalNavi = function(){
		this.param = PARAM;
		this.init();
	};

	// prototype
	var PROTO = globalNavi.prototype;

	// init: 初期化
	PROTO.init = function(){
		this.windowMonitoring();
		this.setClickEvent();
	};

	/**
	 * [setClickEvent 初期設定]
	 */
	PROTO.windowMonitoring = function(){
		var self = this;

		setTimeout(function(){
			self.heightController();
		},200);

		var timer = false;


		AMP.mediaquery.on('change', function(event){



		});//mediaquery


		$(window).resize(function() {
				if (timer !== false) {
						clearTimeout(timer);
				}
				timer = setTimeout(function() {
					self.reset();
					self.heightController();
				}, 200);
		});
	};

	/**
	 * [reset]
	 */
	PROTO.reset = function(){
			if($(window).width() > 750){
				PARAM._isOpen = false; PARAM._isAnima = false;
				PARAM.$wrapper.css({'display':'block',opacity: 1});
				PARAM.$cover.css({'display':'none',opacity: 0});
				$('html').removeClass('menu-open');
			} else if(PARAM._isOpen === false){
				PARAM.$wrapper.css({'display':'none',opacity: 0});
				PARAM.$trigger.removeClass('active');
				$('html').removeClass('menu-open');
			}
	};

	/**
	 * [heightController]
	 */
	PROTO.heightController = function(){
		var self = this;
		self.getHeight();
		self.setHeight();
	};

	/**
	 * [getHeight PARAMに現在のheightを設定]
	 */
	PROTO.getHeight = function(){
		PARAM.height = $('body').outerHeight();
	};

	/**
	 * [setHeight PARAMに現在のheightを設定]
	 */
	PROTO.setHeight = function(){
		var adjust = 0;
		if($('#Page').hasClass('page-index')){
			//トップページなら 452 FBの高さをプラス
			adjust = 452;
		}

		PARAM.$cover.outerHeight(PARAM.height + adjust);
	};

	/**
	 * [setClickEvent 初期設定]
	 */
	PROTO.setClickEvent = function(){
		var self = this;

		PARAM.$trigger.on('click',function(){
			self.controller();
			return false;
		});


		PARAM.$cover.on('click',function(){
			self.controller();
			return false;
		});
	};

	/**
	 * [controller イベントの設定]
	 */
	PROTO.controller = function(){
		var self = this;

		if(PARAM._isAnima){
			return false;
		}

		if(PARAM._isOpen){
			$('html').toggleClass('menu-open');
			PARAM.$trigger.removeClass('active');
			PARAM.$trigger.addClass('def');
			self.close();
		} else {
			$('html').toggleClass('menu-open');
			PARAM.$trigger.removeClass('def');
			PARAM.$trigger.addClass('active');
			self.open();
		}
	};

	/**
	 * [open イベントの設定]
	 */
	PROTO.open = function(){
		var self = this;
		PARAM._isOpen = true; PARAM._isAnima = true;
		PARAM.$wrapper.css({'display':'block'}).stop(true, false).animate({opacity:1},PARAM.duration,PARAM.ease);
		PARAM.$cover.css({'display':'block'}).stop(true, false).animate({opacity:1},PARAM.duration,PARAM.ease, function(){
			PARAM._isAnima = false;
		});
		// self.animaInline();
	};

	PROTO.close = function(){
		PARAM._isOpen = false; PARAM._isAnima = true;
		PARAM.$wrapper.stop(true, false).animate({opacity:0},PARAM.duration,PARAM.ease,function(){
			$(this).css({'display':'none'});
			PARAM._isAnima = false;
		});
		PARAM.$cover.stop(true, false).animate({opacity:0},PARAM.duration,PARAM.ease,function(){
			$(this).css({'display':'none'});
			PARAM._isAnima = false;
		});
	};

	/**
	 * [animaInline アニメーション]
	 */
	PROTO.animaInline = function(){
		var l = PARAM.$wrapper.find('li').length -1;
		var delay = 150;
		var duration = 300;
		var totalTime = l*delay+duration;

		PARAM.$wrapper.find('li').css({opacity: 0}).each(function(i){
			$(this).delay(delay * i).animate({opacity:1}, duration);
		});

		setTimeout(function(){
				PARAM._isAnima = false;
		},totalTime);
	};
	// @return インスタンスを返す
	return new globalNavi();
};





/*----------------------------------------------------------------------
	globalNaviPc: グローバルナビ
----------------------------------------------------------------------*/
	/**
	 * globalNaviPc [グローバルナビ]
	 */
	Common.globalNaviPc = function($target){


		function GlobalNaviPc(){
			this.$body = $('body');
			this.$header = $('#Header');
			this.$headerInner = $('#Header .inner-wrap');
			this.$li = this.$header.find('.nav00, .nav02');
			this.$headerTop  = this.$header.offset().top + (this.$header.height()*3);
			this.scTop  = $(window).scrollTop();
			this.isTween = false;
			this.ease  = 'easeOutQuart';
			this.activeClass  = '_fixed';
			this.init();
		}

		// prototype
		var p = GlobalNaviPc.prototype;

		p.init = function(){
			var self = this;
			self.setEvent();
		};//init

		p.setEvent = function(){
			var self = this;
			//スクロール時
			$(window).scroll(function(){
				if(!common.util.isDisplayType('sp')){
					self.controller();
					self.fixedNavLeft();
				}
			});//scroll

			//リサイズ時
			$(window).resize(function(){
				if(!common.util.isDisplayType('sp')){
					self.fixedNavLeft();
					self.controller();
				}
			});//resize

			// メディアチェンジ
			AMP.mediaquery.on('change', function(event){
				if(common.util.isDisplayType('sp')){
					self.spReset();
				}

				self.setDropdown();
			});//

			//
			this.$li.hover(
				function(){
					self.dropdownOpen(self.$li.index(this));
				},
				function(){
					self.dropdownClose(self.$li.index(this));
				}
			);

		};//setEvent

		//sp表示の場合スタイルリセット
		p.spReset = function(){
			var self = this;
			self.$headerInner.removeAttr('style');
			self.$header.removeClass(self.activeClass);
		};


		//fixednaviの横スクロール
		p.fixedNavLeft = function(){
			var self = this;
			var wWidth = $(window).width();
			var w = self.$body.css('min-width').replace('px','');
			var minW = Number(w);

			if(wWidth < minW){
			//windowサイズが最小幅より小さい場合
				var scLeft = $(window).scrollLeft();
				self.$headerInner.css({left: -scLeft,width : minW});
			}else if(wWidth >= 1920){
				var lt = (wWidth - 1920)/2;
				self.$headerInner.css({left: (lt),width : 1920});
			}else{
				self.$headerInner.css({left: 0,width: '100%'});
			}//if

		};

		//fixedの判定
		p.controller = function(){
			var self = this;
			self.scTop  = $(window).scrollTop();
			var offSet = self.$headerTop;

			if(self.scTop >= offSet){
				//こえた
				if(!self.$header.hasClass(self.activeClass) && !self.isTween){
					self.isTween = true;
					self.tween(function(){
						self.isTween = false;
					});
				}
			}else if(self.scTop <= offSet){
				//戻る
				if(self.$header.hasClass(self.activeClass)){
					self.isTween = true;
					self.offTween(function(){
						self.isTween = false;
					});
				}

			}//if offsettop
		};//controller

		//tween
		p.tween = function(callback){
		var self = this;
			$.sequence(
			function(){
				self.$header.addClass(self.activeClass);
				return self.$headerInner.css({top: -(self.$header.height())});
			},function(){
				return self.$headerInner.delay(300).stop().animate({top: 0},300, self.ease);
			},function(){
				callback();
			});

		};//tween

		//offTween
		p.offTween = function(callback){
			var self = this;
			$.sequence(
			function(){
				self.$header.removeClass(self.activeClass);
			},function(){
				callback();
			});
		};//offTween


		p.dropdownClose = function(index){
			if(common.util.isDisplayType('sp')){
				return false;
			}

			var $target;

			if(AMP.isNumber(index)){
				$target = this.$li.eq(index).find('.dropdown');
			} else {
				$target = this.$li.find('.dropdown');
			}

			$target
			.velocity('stop')
			.velocity({opacity: 0}, {display: 'none', easing: 'easeInSine'});
		};

		p.dropdownOpen = function(index){
			if(common.util.isDisplayType('sp')){
				return false;
			}


			this.$li.eq(index).find('.dropdown')
			.velocity('stop')
			.velocity({opacity: 1},{display: 'block', easing: 'easeInSine'});
		};

		// dropdownのPC/SPスタイルの切り替え
		p.setDropdown = function(){
			var isSP = common.util.isDisplayType('sp'),
			$dropdown = this.$li.find('.dropdown');

			if(isSP){
				$dropdown.css({display: 'block', opacity: 1});
			} else {
				$dropdown.css({display: 'none', opacity: 0});
			}

			return this;
		};


		return new GlobalNaviPc();

	};


/*----------------------------------------------------------------------
	hash
----------------------------------------------------------------------*/
/**
 * hash
 */
/**
 * urlにhashがある場合は、そのidまでスクロールさせます
 * @param  {Number} adjust 位置調整
 */
Common.hash = function(adjust){
	if (adjust === void 0) {
		adjust = $('#Header').height();
	}

	$('body').imagesLoaded(function() {
		if(location.hash){
				setTimeout(function() {
					var p = location.hash;
					if($(p).length){
						var q =  $(p).offset().top - adjust;
					}
					var hashId = p.indexOf("#");
					if(0 === hashId){
							$('html,body').animate({ scrollTop: q}, 0);
							return false;
					}
				}, 50);
			}
	});

};


/*----------------------------------------------------------------------
	loadingBar
----------------------------------------------------------------------*/
/**
 * loadingBar
 */
Common.loadingBar = function($target, options){
	var PARAM = $.extend(true, {
		$target		:	$target,
		$back			:	$target.find('.progress-back'),
		$front		:	$target.find('.progress'),
		ease      : 'linear',
		duration  : 250,
		callback : function(){}
	}, options);

	/**
	 * [LoadingBar コンストラクタ]
	 */
	var LoadingBar = function(){
		this.param = PARAM;
		this.init();
	};

	// prototype
	var PROTO = LoadingBar.prototype;

	// init: 初期化
	PROTO.init = function(){
      var self = this;
      this.set();
	};

	/**
	 * [set 初期設定]
	 */
	PROTO.set = function(){
		var self = this;

		self.animaStart();

		setTimeout(function(){
			var loader = new Common.Loader({
				completeFunc: function(){
					self.animaEnd();
							//callbackで処理を読む
					PARAM.callback();
				}
			});
		},200);

	};

	/**
	 * [animaStart イベントの設定]
	 */
	PROTO.animaStart = function(){
      var self = this;
		PARAM.$back.addClass('anima01');
	};

	/**
	 * [animaEnd イベントの設定]
	 */
	PROTO.animaEnd = function(){
      	var self = this;
		PARAM.$back.animate({'margin-left':'100%'},PARAM.duration,PARAM.ease);
		if($('body').hasClass('mode-pc')){
			PARAM.$front.css({'right':0}).delay(25).animate({width:0},PARAM.duration,PARAM.ease);
		}

		// Common.globalNavi($('#Header'));

	};

	// @return インスタンスを返す
	return new LoadingBar();
};


/*----------------------------------------------------------------------
	accordion　アコーディオン
----------------------------------------------------------------------*/

  Common.accordion  = function($target, options){

    var param = $.extend(true, {
      $wrap: $target,
      $trigger: $target.find('.acc-trigger'),
      $target:  $target.find('.acc-trigger').attr('href'),
      $targetH: $($target.find('.acc-trigger').attr('href')).outerHeight(),
      hash:  location.hash,
      isAnime :  false,
      duration:  500,
      easing  :  'ease-out',
      callback: function(){}
    }, options);

    function Accordion(){
      this.param = param;
      this.init();
    }

    // prototype
    var p = Accordion.prototype;

    /**
     * [init description]
     * @return {[type]} [description]
     */
    p.init = function(){
      var self = this;
      param.$trigger.addClass('no-scroll');
      self.setHeight();
      self.setEvent();
      self.setCurrent();
      $(param.$target).css({'overflow':'hidden'});
    };

    /**
     * [setEvent description]
     * @return {[type]} [description]
     */
    p.setEvent = function(){
      var self = this;
      param.$trigger.click(function(){
        self._controller();
        return false;
      });
      //151111
      //p.current();
    };


    /**
     * [setEvent description]
     * @return {[type]} [description]
     */
    p.setCurrent = function(){
      var self = this;
      if(!param.hash) return false;
      var hash = param.hash.slice(1);
      if(hash ==  param.$wrap.attr('id')){
        //ターゲットとハッシュがマッチしたら処理を実行
        self._controller();
        $(window).scrollTop(param.$trigger.offset().top);
      }
    };

    /**
     * [setHeight description]
     * @return {[type]} [description]
     */
    p.setHeight = function(){
      var self = this;
      if(!$(param.$target).hasClass('acc-open')){
        $(param.$target).css({opacity: 0,height:'auto'});
        param.$targetH = $(param.$target).height();
        $(param.$target).css({height:'0',opacity: 1});
      }else{
        $(param.$target).css({height:'auto'});
        param.$targetH = $(param.$target).height();
        $(param.$target).css({height:param.$targetH});
      }

    };

    /**
     * [current description]
     * @return {[type]} [description]
     */
    p.current = function(){
      var self = this;
      if(location.hash){
        //ハッシュがついてる場合
        param.thisNum  = location.hash;
        this._controller();
      }
    };//_controller

    /**
     * [_controller description]
     * @return {[type]} [description]
     */

    p._controller = function(){
      var self = this;
      if(param.isAnime) return false;
      param.isAnime = true;
      if(!$(param.$target).hasClass('acc-open')){
        self.open(function(){
          param.callback();
          param.isAnime = false;
        });
      }else{
        self.close(function(){
          param.isAnime = false;
          param.callback();
        });
      }
    };//_controller

    /**
     * [open description]
     * @return {[type]} [description]
     */
    p.open = function(callback){
      var self = this;
      $.sequence(function(){
        param.$trigger.addClass('active');
        $(param.$target).addClass('acc-open');
        $(param.$target).addClass('acc-open');
        return $(param.$target).velocity({
          height:param.$targetH,
          transitionProperty       : 'height',
        },param.duration,param.easing);
      },function(){
        callback();
      });//sequence
    };//open

    /**
     * [close description]
     * @return {[type]} [description]
     */
    p.close = function(callback){
      var self = this;
      $.sequence(function(){
        param.$trigger.removeClass('active');
        $(param.$target).removeClass('acc-open');
        return $(param.$target).velocity({
          height:'0',
          transitionProperty       : 'height',
        },(param.duration*0.8),param.easing);
      },function(){
        $(param.$target).css({
          'overflow':'hidden'
        });
        callback();
      });
    };//close

    return new Accordion();
  };





	/*----------------------------------------------------------------------
		loadFadeIn 　//ローディングは走らない場合のページフェードイン処理
	----------------------------------------------------------------------*/

	Common.loadFadeIn = function($target, options){

		var param = $.extend(true, {
			$target :  $('#loading'),
		    ease     : 'easeInSine',
		    duration : 700,
		    callback : function(){}
		}, options);


		function LoadFadeIn(){
			this.param = param;
			this.init();
		}

		// prototype
		var p = LoadFadeIn.prototype;

		/**
		* init
		* @method tween
		* @return {SceneTween}0
		*/
		p.init = function(){
			var self = this;
			self.tween();

		};//init

		/**
		* tween
		* @method tween
		* @return {SceneTween}
		*/
		p.tween = function(){
			var self = this;
			param.$target.stop(true, false).delay(0).animate({opacity: 0},param.duration,param.ease,function(){
				param.$target.css({display:'none'});
				param.callback();
			});

		};//init

		return new LoadFadeIn();

	};

	/*--------------------------------------------------------------------------
		common.pageTop トップへ戻るボタン
	--------------------------------------------------------------------------*/
		Common.pageTop = function(){
		param = {
			$target: $('#Footer').find('.pagetop'),
			$windowH : $(window).height() * .6,
			$scTop : $(window).scrollTop(),
			isDisp : false
		};

			var init = function(){
				dispControl();
				$(window).scroll(function(){
						dispControl();
				});
			};//init

			var dispControl = function(){
				param.$scTop = $(window).scrollTop();
				//windowの高さを超えたら実行
				if(param.$scTop > param.$windowH){
					if(!param.isDisp){
							param.$target.addClass('disp');
							param.isDisp = true;
						}
				}else{//windowの高さがブラウザサイズよりちいさければ実行
						if(param.isDisp){//flagaがtrueなら処理を実行
							param.$target.removeClass('disp');
							param.isDisp = false;
						}//if
				}//if
			};//dispControl

			init();
		};



/*--------------------------------------------------------------------------
		common.languageActive 翻訳設定
--------------------------------------------------------------------------*/
	Common.languageSet = function(){


		//翻訳ボタンのURLｾｯﾄ
		var urlSet = function(){
			var thisPath = location.pathname,
			languageBtn = $('#Header .language-btn ,#Footer .language-btn'),
			index = '',
			isJa =  true;

			//　'/'でおわる場合
			if((thisPath.length)-1 == thisPath.lastIndexOf('/')){
				index = 'index.shtml';
			}

			if(thisPath.indexOf('/BRAMONCHER/ns/tl.cgi/http://www.mon-cher.com')　!= -1){
					//まっちした場合
					thisPath = thisPath.replace('/BRAMONCHER/ns/tl.cgi/http://www.mon-cher.com','');
				}

			languageBtn.each(function(){
				var thisHref =  $(this).find('a').attr('href');

				$(this).find('a').attr('href',thisHref + 'http://www.mon-cher.com' +  thisPath + index);

				});

		};


		//翻訳ボタンのアクティブ設定
		var btnActive = function(){
			var hash = location.search;
			var s = hash.indexOf('TLANG');
			var language = hash.slice((s + 6),(s + 8));
			language = String(language);

			var href = location.href;
			var params = href.split("/");

			if(params[2] == 'brangista.j-server.com' && language){
				Library.active($('#Footer .ft-nav .box-bt li .' + language + ' img'));
				Library.active($('#Header .nav-language li .' + language + ' img'));
			}else{
				Library.active($('#Footer .ft-nav .box-bt li .jp img'));
				Library.active($('#Header .nav-language li .jp img'));
			}
		};

		urlSet();
		btnActive();
	};



/*--------------------------------------------------------------------------
		common.selectLang 翻訳設定
--------------------------------------------------------------------------*/
	Common.SelectLang = (function() {

		function SelectLang ($target) {
			this.isOpen = false;
			this.$target = $target;
			this.$selectedArea = $target.find('.selected');
			this.$selectList = $target.find('.select');
			this.openClass = 'is-open';

			this._init();
		}


		var p = SelectLang.prototype;

		/**
		 * 初期化
		 */
		p._init = function () {
			var self = this;

			self.$selectedArea.click(function () {
				self._toggle();
			});

			self.$selectList.find('a').click(function () {
				self._toggle();
			});

			$(document).click(function(event) {
				if (!$.contains(self.$target.find('.selected')[0], event.target)) {
					if (self.isOpen) {
						self.isOpen = false;
						self.$target.removeClass(self.openClass);
					}
				}
			});
		};

		/**
		 * トグル
		 */
		p._toggle = function () {
			var self = this;

			if (self.isOpen) {
				self.close();
			} else {
				self.open();
			}
		};

		/**
		 * クローズ
		 */
		p.close = function () {
			var self = this;

			self.isOpen = false;
			self.$target.removeClass(self.openClass);
		};

		/**
		 * オープン
		 */
		p.open = function () {
			var self = this;

			self.isOpen = true;
			self.$target.addClass(self.openClass);
		};


		// return class
		return SelectLang;
	})();


/*----------------------------------------------------------------------
	DOM READY
----------------------------------------------------------------------*/
jQuery(function($){
	Library.rollover();

	Common.mode();

	Common.hash();

	Common.languageSet();

	Common.selectLang = new Common.SelectLang($('.hd_gnav__sp .lang-select'));
	Common.globalNavi = new Common.GlobalNavi($('#Header'));

	// ブレークポイントに応じて画像を出力します
	var mediaImagesChange = new AMP.$.MediaImageChange();
  	mediaImagesChange.start();


  // ブレイクポイント
  AMP.mediaquery.on('change.globalNavi', function(mediaEvent){
  	Common.selectLang.close();
  });




	//Common.pageTop();

	Library.scroll($('#Footer .pagetop a'));


 	/*
	$('body').imagesLoaded(function(){
		if($.isBrowser('ie', 9)){
			Common.ieFix();
		}
	});
	*/



});

}(jQuery));
