require("./css/reset.css")
require("./css/style.css")

require("./fontello/iconfont.css")

var $=require ("./js/lib/jquery.min.js")
var Tab=require("./js/com/tab.js")
var CarouselFade=require("./js/com/carousel-fade.js")
var CarouselSlide=require("./js/com/carousel-slide.js")
// var Exposure=require("./js/com/exposure.js")
var Event=require("./js/com/event.js")


// Tab.init($('.tab'));
// $(".goods-tab").on("mouseleave",function(){
// 		$(".goods-tab .tab-nav li").removeClass('active');
// 		$(".goods-tab .panel").removeClass('active');
// })


$(".carousel-fade").each(function(){
	new CarouselFade($(this));
})
$(".carousel-slide").each(function(){
	new CarouselSlide($(this));
})


//设置大屏轮播的背景色
var colorList=["#dd182a","#190634","#20a0dd","#200001",]
Event.on('carousel', function(idx){
	$(".show-case").css({"background":colorList[idx],"transition":"all 1s"})
});


//顶部消息显示与否
$('.top-close').on('click',function(){
	$(".top").css({"display":"none"})
	$(".top-open").css({"display":"block"})

})
$('.top-open').on('click',function(){
	$(".top").css({"display":"block"})
	$(".top-open").css({"display":"none"})

})




var	navArr=['.js-f1' ,'.js-f2','.js-f3','.js-f4','.js-f5','.js-f6' ,'.js-f7','.js-f8','.js-f9','.js-f10','.js-f11','.js-f12','.js-getmore'],
	contentArr=['.floor1' ,'.floor2','.floor3','.floor4','.floor5' ,'.floor6','.floor7','.floor8','.floor9' ,'.floor10','.floor11','.floor12','.getmore'];

setGuide()
guideStatus()

setTopBar()
topBarStatus()

$(window).on('scroll',function(){
	topBarStatus()
	guideStatus();
	setGuide();
})







// 顶部导航栏下拉动画
$('.content-abs').slideUp().css({"opacity":"1"});
$(".tool-bar-rela").on('mouseenter',function(){
	$(this).find('.content-abs').slideDown(100);
})
$(".tool-bar-rela").on('mouseleave',function(){
	$(this).find('.content-abs').slideUp(100);
})

//右侧工具栏动画
$(".icon-wrap").find($(".tip")).css({ 
		'opacity':0,
		'left':0
}); 
$(".icon-wrap").on('mouseleave',function(){
	$(this).find($(".tip")).css({ 
		'left':0
	}); 
})
$(".icon-wrap").on('mouseenter',function(){
	$(this).find($(".tip")).removeAttr('style')
})





//设置页面滚动动画
for(var i=0; i<navArr.length; i++){
	(function(i){
		$(navArr[i]).on('click',function(){
			$('html,body').animate({scrollTop: $(contentArr[i]).offset().top-50}, 500);
		})
	})(i)
}



//设置顶部工具条内容
function setTopBar(){
	var $goodsList=$('.goods-list').clone(),
		$searchBox=$('.search-box').clone();

	$('.top-fix-sort').append($goodsList);
	$('.top-fix-search').append($searchBox);
	
}

//设置顶部工具条是否可见
function topBarStatus(){
	if($(window).scrollTop()>800){
		$(".top-fix-bar").css({"display":"block"})
	}else{
		$(".top-fix-bar").css({"display":"none"})
	}
}


//设置左侧导航条是否可见
function guideStatus(){
	var bottomDis1=$('.getmore').offset().top+$('.getmore').outerHeight(),
		bottomDis2=$('.guide-list').offset().top+$('.guide-list').outerHeight();
	
	if ((isVisible($('.floor1'))|
	 isVisible($('.floor2'))|
	 isVisible($('.floor3'))|
	 isVisible($('.floor4'))|
	 isVisible($('.floor5'))|
	 isVisible($('.floor6'))|
	 isVisible($('.floor7'))|
	 isVisible($('.floor8'))|
	 isVisible($('.floor9'))|
	 isVisible($('.floor10'))|
	 isVisible($('.floor11'))|
	 isVisible($('.floor12'))|
	 isVisible($('.getmore')))
	&&(bottomDis1-bottomDis2)>200) {
		$(".guide-list").css({"display":"block"})
	}
	else{
		$(".guide-list").css({"display":"none"})
	}
}

//设置页面滚动时左侧导航条样式
function setGuide(){
	for(var i=0; i<navArr.length; i++){
		$(navArr[i]).removeClass('active');
		if(halfVisible($(contentArr[i]))){
			$(navArr[i]).addClass('active');
		}
	}
}

function isVisible($target){
		var winH=$(window).height(),
		    scrollTop=$(window).scrollTop(),
		    offsetTop=$target.offset().top,
		    $targetH=$target.innerHeight();
		return ((winH+scrollTop>offsetTop)&&(scrollTop<offsetTop+$targetH));
	}
function halfVisible($target){
	var winH=$(window).height(),
	    scrollTop=$(window).scrollTop(),
	    offsetTop=$target.offset().top,
	    $targetH=$target.outerHeight(true);
	return ((scrollTop+winH/2>=offsetTop)&&(offsetTop+$targetH>scrollTop+winH/2))
}



Tab.init($('.tab'));
$(".goods-tab").on("mouseleave",function(){
		$(".goods-tab .tab-nav li").removeClass('active');
		$(".goods-tab .panel").removeClass('active');
})











// 	GoTop=require("./js/com/gotop.js"),
// 	Exposure=require("./js/com/exposure.js"),
// 	WaterFall=require("./js/com/waterfall.js"),
// 	Ajax=require("./js/com/ajax.js");


	

// 	GoTop.init();

// 	Exposure.one($('.about-ul>li'), function(){
// 		var $this = $(this);
// 		$this.css({"opacity":"1"});
// 	 });

// 	WaterFall.init($('.portfolio ul'));

// 	Ajax.init($(".load"));


// 	var navArr=['.nav-service a' ,'.nav-portfolio a','.nav-about a','.nav-team a','.nav-contact a'],
// 		contentArr=['.service' ,'.portfolio','.about','.team','.contact'];

// 	$(window).on('scroll',function(){
// 		for(var i=0; i<navArr.length; i++){
// 			$(navArr[i]).removeClass('nav-active');
// 			if(halfVisible($(contentArr[i]))){
// 				$(navArr[i]).addClass('nav-active');
// 			}
// 		}
// 		if($(window).scrollTop()>0){
// 			$(".slide").on('mouseenter',function(){
// 				$('.nav').slideDown();
// 		})
// 			$('.nav').slideUp();
// 		}else{
// 			$('.nav').slideDown();
// 		}
// 	})


// 	function halfVisible($target){
// 		var winH=$(window).height(),
// 		    scrollTop=$(window).scrollTop(),
// 		    offsetTop=$target.offset().top,
// 		    $targetH=$target.outerHeight(true);
// 		return ((scrollTop+winH/2>=offsetTop)&&(offsetTop+$targetH>scrollTop+winH/2))
// 	}


// 	for(var i=0; i<navArr.length; i++){
// 			(function(i){
// 				$(navArr[i]).on('click',function(){
// 					$('html,body').animate({scrollTop: $(contentArr[i]).offset().top}, 800);
// 				})
// 			})(i)
// 		}

	



	



	

	
