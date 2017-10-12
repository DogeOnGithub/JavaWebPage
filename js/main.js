	// 幻灯片
	var
		$item = $(".carousel-inner .item");
		$btn = $(".carousel-btn .btn");
		$prev = $(".carousel .prev");
		$next = $(".carousel .next");
		i = 0;
	// 默认
	// 幻灯片以及小按钮的变换规则
	function slide(num){
		$item.eq(num).fadeIn(1000).css({"display":"block"});;
		$item.not($item.eq(num)).fadeOut("slow");
		$btn.eq(num).addClass("active");
		$btn.not($btn.eq(num)).removeClass("active");
	}
	// 小按钮设置
	$btn.on("click",function(){
		i = $(this).index();
		slide(i);
	})
	// 上一个
	$prev.on("click",function(){
		i <= -5 ? i = 0 : i = i - 1;
		slide(i);
	})
	// 下一个
	$next.on("click",function(){
		i >= 5 ? i = 0 : i++;
		slide(i);
	})
	// 幻灯片自动播放
	function car(){
		cartime = setInterval(function(){
			i >= 5 ? i = 0 : i++;
			slide(i);
		},5000);
	}
	car();
	// 鼠标悬停
	$(".carousel").hover(function(){
		clearInterval(cartime);
	},car)
	// 10产品轮播
	function goods(btn,unit,list){
		list.css({"margin-left":-unit+"px","transition":"margin-left 0.5s ease"});
		btn.addClass("btn-default");
		$(".title-more a").not(btn).removeClass("btn-default");
	}
	// 小米明星单品与推荐
	var 
		$slist = $(".sgoods-list");
		$sprev = $(".title-more .s-prev");
		$snext = $(".title-more .s-next");
		$rlist = $(".reco-list");
		$rprev = $(".title-more .reco-prev");
		$rnext = $(".title-more .reco-next");
	
	$sprev.on("click",function(){
		goods($(this),0,$slist);
	})
	
	$snext.on("click",function(){
		goods($(this),1224,$slist);
	})
	setInterval(function(){
		leng = parseInt($slist.css("margin-left"));
		if(leng >= 0){
			goods($(this),1224,$slist);
			goods($(this),1224,$rlist);
		}else{
			goods($(this),0,$slist);
			goods($(this),0,$rlist);
		}
	},10000)
	// 推荐
	$rprev.click(function(){
		goods($(this),0,$rlist);
	})
	$rnext.click(function(){
		goods($(this),1224,$rlist);
	})
	// 主要内容
	var
		$hlist = $(".home-ce .goods-list");
		$htext = $(".home-ce .more-text")
		$ilist = $(".ide .goods-list");
		$itext = $(".ide .more-text");
		$clist = $(".asst .goods-list");
		$ctext = $(".asst .more-text");
		$parlist = $(".parts .goods-list");
		$partext = $(".parts .more-text");
		$pialist = $(".pia .goods-list");
		$piatext = $(".pia .more-text");
		$gitem = $(".goods-item");
		$mtext = $(".more-text");

	// 商品鼠标经过样式
	$gitem.hover(function(){
		$(this).addClass("item-active");
	},function(){
		$(this).removeClass("item-active");
	})
	// 主要内容变换函数
	function fade(t,list,mtext){
		$(t).addClass("active");
		mtext.not($(t)).removeClass("active");
		var index = $(t).index();
		list.eq(index).css({"display":"block"});
		list.not(list.eq(index)).css({"display":"none"});
	}

	$htext.mouseover(function(){
		fade(this,$hlist,$htext);
	})
	$itext.mouseover(function(){
		fade(this,$ilist,$itext);
	})
	$ctext.mouseover(function(){
		fade(this,$clist,$ctext);
	})
	$partext.mouseover(function(){
		fade(this,$parlist,$partext);
	})
	$piatext.mouseover(function(){
		fade(this,$pialist,$piatext);
	})
	// 对热评产品中的评论进行截取
	$(".review-text").each(function(){
		if($(this).text().length > 50 ){
			var text = $(this).text().substring(0,50)+"...";
			$(this).text(text);
		}
	})
	// 热评轮播
	var
		$pprev = $(".other-photo .o-prev");
		$pnext = $(".other-photo .o-next");
		$ptext = $(".other-photo .other-silde");

		$tprev = $(".other-theme .o-prev");
		$tnext = $(".other-theme .o-next");
		$ttext = $(".other-theme .other-silde");

		$gprev = $(".other-game .o-prev");
		$gnext = $(".other-game .o-next");
		$gtext = $(".other-game .other-silde");

		$aprev = $(".other-app .o-prev");
		$anext = $(".other-app .o-next");
		$atext = $(".other-app .other-silde");

	function cnext(text){
		o = text.find(".active").attr("data-num");
		if(o == 3){
			return false;
		}else {
			text.find(".btn").eq(o).addClass("active");
			text.find(".btn").not(text.find(".btn").eq(o)).removeClass("active");
			n = "-"+o*100+"%";
			text.css({"margin-left":n, "transition":"margin-left 0.5s ease"});
			o++;
			if(o == 3){
				text.find(".o-next").addClass("btn-default");
			}else{
				text.find(".o-prev").removeClass("btn-default");
			}
		}
	}
	function cprev(text){
		o = text.find(".active").attr("data-num")-1;
		if(o == 0){
			return false;
		}else {
			o--;
			text.find(".btn").eq(o).addClass("active");
			text.find(".btn").not(text.find(".btn").eq(o)).removeClass("active");
			n = "-"+o*100+"%";
			text.css({"margin-left":n, "transition":"margin-left 0.5s ease"});
			if(o == 0){
				text.find(".o-prev").addClass("btn-default");
			}else{
				text.find(".o-next").removeClass("btn-default");
			}
		}
	}


	$pprev.on("click",function(){
		cprev($ptext);
	})
	$pnext.on("click",function(){
		cnext($ptext);
	})

	$tprev.on("click",function(){
		cprev($ttext);
	})
	$tnext.on("click",function(){
		cnext($ttext);
	})

	$gprev.on("click",function(){
		cprev($gtext);
	})
	$gnext.on("click",function(){
		cnext($gtext);
	})

	$aprev.on("click",function(){
		cprev($atext);
	})
	$anext.on("click",function(){
		cnext($atext);
	})

	// 导航条
	$nav = $(".header-nav .item")
	$mainnav = $(".main-nav")
	$nav.hover(function(){
		set = setTimeout(function(){
			$mainnav.slideDown();
		},800)
	},function(){
		clearTimeout(set);
		$mainnav.mouseleave(function(){
			$mainnav.slideUp();
		})
	})
	// $nav.mouseenter(function(){
	// 	set = setTimeout(function(){
	// 		$mainnav.slideDown();
	// 	},800)
	// })
	// $nav.mouseleave(function(){
	// 	clearTimeout(set);
	// 	$mainnav.mouseenter(function(){
	// 		$mainnav.mouseleave(function(){
	// 			$mainnav.slideUp();
	// 			alert(1);
	// 		})
	// 		return;
	// 	})
	// 	$mainnav.slideUp();
	// })
	// $(".navlist").mouseleave(function(){
	// 	clearTimeout(set);
	// 	$mainnav.slideUp();
	// })
	// $mainnav.mouseleave(function(){
	// 	clearTimeout(set);
	// 	$mainnav.slideUp();
	// })

