$('.top-left .main-item a').click(function(){
	var index=$(this).parent().index();
	if(index == 0){
		$(this).addClass('fir');
	}
	$(this).addClass('cur');
	$(this).parent().siblings().children('a').removeClass();
	$('.home-con .home-content').eq(index).show().siblings().hide();
});

$('.home-c1 .home-content-nav-n a').click(function(){
	$(this).addClass('current');
	$(this).parent('li').siblings().children('a').removeClass('current');
	$('.home-c1 .home-content-main>div').eq($(this).parent('li').index()).show().siblings().hide();
	$('input[name="radio11"]')[1].checked = true;
	homeCm($('.home-cm2 .home-content-main-info .home1-date'),4);
	$('.home-cm2 .home-content-main-info>div').show();
	$('.smart-search, .multipass,.clear-').hide();
});
$('input[name="radio1"]').click(function(){
	var index=$(this).index();
	if(index==0){
		homeCm($('.home-cm1 .home-content-main-info .home1-date'),0);
	}else if(index==2){
		homeCm($('.home-cm1 .home-content-main-info .home1-date'),2);
	}
});
$('input[name="radio11"]').click(function(){
	var index=$(this).index();
	if(index==0){
		$('.home-cm2 .home-content-main-info>div').show();
		$('.smart-search, .multipass,.clear-').hide();
		homeCm($('.home-cm2 .home-content-main-info .home1-date'),0);
	}else if(index==2){
		$('.home-cm2 .home-content-main-info>div').show();
		$('.smart-search, .multipass,.clear-').hide();
		homeCm($('.home-cm2 .home-content-main-info .home1-date'),4);
	}else if(index==4){
		$('.home-cm2 .home-content-main-info>div').hide();
		$('.smart-search, .clear-').show();
	}else{
		$('.home-cm2 .home-content-main-info>div').hide();
		$('.multipass, .clear-').show();
	}	
});
$('.home-content-main-info .home1-date').click(function(){
	$(this).parent().siblings('.home-content-main-radio').children('input')[1].checked=true;
	if($(this).parent().parent() == 0){
		homeCm($(this),2);
	}else{
		homeCm($(this),4);
	}
});
function homeCm(e,index){
	if(index==0){
		e.removeClass('return1');
		e.children('input').val('');
		e.children('p').html('');
	}else if(index==2){
		e.addClass('return1');
		e.children('input').val('2019-02-01');
		e.children('p').html('后天');
	}else if(index == 4){
		e.addClass('return1');
		e.children('input').val('2019-02-20');
		e.children('p').html('周三');
	}
};
$('.home1-change').click(function(){
	var temp1=$(this).siblings('.home1-go-reach').eq(0).children('input').val();
	var temp2=$(this).siblings('.home1-go-reach').eq(1).children('input').val();
	$(this).siblings('.home1-go-reach').eq(0).children('input').val(temp2);
	$(this).siblings('.home1-go-reach').eq(1).children('input').val(temp1);
});
$('.home-c2 .home-content-nav-n a').click(function(){
	$(this).addClass('current');
	$(this).parent().siblings().children('a').removeClass('current');
	$('.home-c2 .home-content-main>div').eq($(this).parent().index()).show().siblings().hide();
});
$('input[name="radio2"]').click(function(){
	if($(this).index() == 0){
		$('.home2-cm1 .home-content-main-info input').eq(0).val('广州');
	} else {
		$('.home2-cm1 .home-content-main-info input').eq(0).val('香港');
	}
});
$('.home-c3 .change').click(function(){
	var temp1=$('.home-c3 .home-content-main-info input').eq(0).val();
	var temp2=$('.home-c3 .home-content-main-info input').eq(2).val();
	$('.home-c3 .home-content-main-info input').eq(0).val(temp2);
	$('.home-c3 .home-content-main-info input').eq(2).val(temp1);
});
$('.home-c4 .home-content-nav-n a').click(function(){
	var index = $(this).parent().index();
	$(this).addClass('current');
	$(this).parent().siblings().children('a').removeClass('current');
	if(index == 4){
		$('.home-c4 .home-content-main>div').eq(index-1).show().siblings().hide();
		$('.home-c4 .home-content-footer>ul').eq(index-1).show().siblings().hide();
	}else{
		$('.home-c4 .home-content-main>div').eq(index).show().siblings().hide();
		$('.home-c4 .home-content-footer>ul').eq(index).show().siblings().hide();
	}
});
$('.home-c5 .home-content-nav .parentcard-piao').hover(function(){
	$(this).children('.icon').css('background-position-y','-19px');
	$(this).children('.pop').show();
},function(){
	$(this).children('.icon').css('background-position-y','0');
	$(this).children('.pop').hide();
});
$('.home-c5 .home-content-nav-n a').click(function(){
	$(this).addClass('current');
	$(this).parent().siblings().children('a').removeClass('current');
	$('.home-c5 .home-content-main>div').eq($(this).parent().index()).show().siblings().hide();
});

/*----------便捷查找酒店*/
$('.home-c6 .home6-footer-nav a').click(function(){
	$(this).addClass('current');
	$(this).parent().siblings().children('a').removeClass('current');
	$('.home-c6 .home6-footer-main>ol').eq($(this).parent().index()).show().siblings().hide();
})
$('.home-c7 .home-content-nav-n a').click(function(){
	$(this).addClass('current');
	$(this).parent().siblings().children('a').removeClass('current');
	$('.home-c7 .home-content-main>div').eq($(this).parent().index()).show().siblings().hide();
	$('.home-c7 .home-content-footer>img').eq($(this).parent().index()).show().siblings().hide();
})
	
$('input[name="radio3"]').click(function(){
	var index=$(this).index();
	if(index==0){
		$('.home7-cm1 .home-content-main-info>div').show();
		$('.home7-train, .artport').hide();
	}else if(index==2){
		$('.home7-cm1 .home-content-main-info>div').hide();
		$('.artport, .clear-').show();	
	}else if(index==4){
		$('.home7-cm1 .home-content-main-info>div').show();
		$('.home7-plane, .artport').hide();
	}else{
		$('.home7-cm1 .home-content-main-info>div').show();
		$('.home7-plane, .artport').hide();
	}
})
$('input[name="radio4"]').click(function(){
	var index=$(this).index();
	if(index==0){
		$('.home-c8 .home-content-main-info .home8-return').show();			
	}else if(index==2){
		$('.home-c8 .home-content-main-info .home8-return').hide();
	}
})