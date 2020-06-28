;// Global Object
var common = common || {};

(function(root, $){


	/**
	 * modal
	 *
	 * @param  {[type]} $traget [description]
	 * @param  {[type]} options [description]
	 * @return {[type]}         [description]
	 */
	 common.modal = function($target,$trigger, options){

		var param = $.extend(true, {
			$target :  $target,
			$trigger :  $trigger,
			$bg :  $target.find('.bg'),
			$inner:  $target.find('.inner-wrap > .inner'),
			$cont:  $target.find('.modal-cont'),
			$list:  $target.find('.item-list'),
			$close  :  $target.find('.btn-close a'),
			current : 0,
      		hash:  location.hash,
			isOpen  :  false,
			isAnimate : false,
			duration : 300,
			sliderCrrent: 0,
	    ease     : 'easeInSine'
		}, options);

		function Modal(){
			this.param = param;
			this.init();
		}

		// prototype
		var PROTO = Modal.prototype;

		/**
		 * [init description]
		 * @return {[type]} [description]
		 */
		PROTO.init = function(){
			var self = this;
			self.setEvent();
	      //ハッシュがマッチしていたら処理を実行
	      // if(param.$list.find('.item').is(param.hash)){
	      //   self.setCurrent(param.hash);
	      // }
		};

		/**
		 * [setEvent description]
		 * @return {[type]} [description]
		 */
		PROTO.setEvent = function(){
			var self = this;
     		param.$trigger.addClass('no-scroll');

			//閉じるボタンをクリックした際の処理
			param.$trigger.click(
				function(){
					 param.current = $(this).attr('href');
					self._controller();
					return false;
				}//function
			);//click

			//閉じるボタンをクリックした際の処理
			param.$close.click(
				function(){
					self._controller();
					return false;
				}//function
			);//click
			//背景をクリックした際の処理
			param.$bg.click(
				function(){
				if(param.isAnimate) return false;
					if(param.isOpen){
					param.isAnimate = true;
						self.close(function(){
							param.isOpen = false;
							param.isAnimate = false;
						});//close
					}//isOpen
					return false;
				}//function
			);//click

		var prevWidth = $(window).width();
		var thisWidth = 0;

			$(window).resize(function(){
					//横幅が変わったときにだけ走る
					 thisWidth = $(window).width();
					if(prevWidth !== thisWidth){
						self.sizeSet();
					}
					prevWidth = $(window).width();
			});
		};//setEvent


		/**
		 * [controller description]
		 * @return {[type]} [description]
		 */
		PROTO._controller = function(){
			var self = this;

			if(param.isAnimate) return false;
			//isOpen がfalseなら処理を実行
			//isAnimeがfalseならば実行
			if(!param.isOpen){
				//flagをtrueにする
				param.isAnimate = true;
				self.sizeSet();
				self.open(param.current,function(){
					param.isOpen = true;
					param.isAnimate = false;
					param.$target.trigger('modal-open', [param.current]);
				});
			}else{
				param.isAnimate = true;
				self.close(function(){
					param.isOpen = false;
					param.isAnimate = false;
				});
			}
		};

		PROTO.setCurrent　= function(target){
	  	var self = this;
  		if(param.isAnimate) return false;
  		if(param.isOpen)　return false;
			//flagをtrueにする
			param.isAnimate = true;
			param.current　 = $(target);
			self.open(target,function(){
				param.isAnimate = false;
				param.isOpen = true;
			});
		};//setCurrent　


		/**
		 * [sizeSet description]
		 * @return {[type]} [description]
		 */
		PROTO.sizeSet  = function(){
			var self = this;

			var $target = $(param.current);
			windowW = $(window).width();


			//num番目（クリックしたサムネの番目）の、モーダルのリストの高さと幅を取得
			indexHeigth = $target.height();
			indexwidth = param.$cont.outerWidth();

			//スクロール量
			var scTop = $(window).scrollTop();
			//windowの高さ
			var windowH = $(window).height();



			var setTop = (scTop+(windowH/2))-(indexHeigth/2);


			var pT = (param.$cont.css('padding-top')).replace('px','');
			var pB = (param.$cont.css('padding-bottom')).replace('px','');
			var btnB = (param.$target.find('.btn-close').css('bottom')).replace('px','');
			var p = Number(pT) + Number(pB) + Number(-(btnB));


			//もし上に見切れる場合
			if( setTop <= 50){
				setTop  = 0;
				if(!common.util.isDisplayType('sp') ){
					setTop  = 50;
				}
			}

			if(setTop < scTop){
				setTop = scTop + 50;
			}

			//SPはトップにセット
			if(common.util.isDisplayType('sp')){
				setTop  = scTop + 5;
			}

			//モーダルコンテンツをセンター寄せ
			param.$cont.css({marginLeft:-(indexwidth/2),top : setTop});

			param.$list.css({height: indexHeigth});

			if($('body').height() < scTop + param.$cont.height() + 100){
				$('body').height(scTop + param.$cont.height() + 100);
			}

		};


		/**
		* [open description]
		* @return {[type]} [description]
		*/
		PROTO.open = function(target,callback){
			var self = this;
				var thisSctop = $(window).scrollTop();
				$.sequence(
					function(){
					var indexHeigth;
					var indexwidth;

					//モーダルのリストの
					var	$target = $(target);

					//クラス追加
				    $target.addClass('active');
			      	$('html').addClass('modal-open');
			     	param.$target.addClass('active');

			     	var num = param.$cont.height();


					//num番目（クリックしたサムネの番目）の、モーダルのリストの高さと幅を取得
					indexHeigth = param.$cont.height();
					indexwidth = param.$cont.outerWidth();

					//スクロール量
					var scTop = $(window).scrollTop();
					//windowの高さ
					var windowH = $(window).height();


					var setTop = (scTop+(windowH/2))-(indexHeigth/2);

					var pT = (param.$cont.css('padding-top')).replace('px','');
					var pB = (param.$cont.css('padding-bottom')).replace('px','');
					var btnB = (param.$target.find('.btn-close').css('bottom')).replace('px','');
					var p = Number(pT) + Number(pB) + Number(-(btnB));


					//もし上に見切れる場合
					if( setTop <= 50){
						setTop  = 0;
						if(!common.util.isDisplayType('sp') ){
							setTop  = 50;
						}
					}

					if(setTop < scTop){
						setTop = scTop + 50;
					}

					//SPはトップにセット
					if(common.util.isDisplayType('sp')){
						setTop  = scTop + 5;
					}


					//モーダルコンテンツをセンター寄せ
					param.$cont.css({marginLeft:-(indexwidth/2),top :setTop});

				  	param.$list.css({height: $target.outerHeight()});
						//モーダル立ち上げの処理

					if($('body').height() < scTop + param.$cont.height() + 100){
						$('body').height(scTop + param.$cont.height() + 100);
					}

						return param.$target.css({visibility: 'visible'});
					},function(){
						param.$target.velocity({opacity: 1},param.duration,param.ease,function(){
							callback();
						});
					}
				);//sequence
		};

		/**
		* [close description]
		* @return {[type]} [description]
		*/
		PROTO.close = function(callback){
			var self = this;
			$.sequence(
					function(){
					//モーダルクローズの処理
					$('html').removeClass('modal-open');
						//モーダルのアクティブクラスを削除
					  param.$list.children().removeClass('active');
						return param.$target.removeClass('active');
					},
					function(){
						return param.$target.animate({opacity: 0},300);
					},function(){
						param.$cont.css({marginLeft: 0,marginTop : 0});
						return param.$target.css({visibility: 'hidden'});
					},function(){
						$('body').height('auto');
						callback();
					}
				);//sequence
		};

		return new Modal();
	};


	/*----------------------------------------------------------------------
		DOM READY
	----------------------------------------------------------------------*/


}(window, jQuery));