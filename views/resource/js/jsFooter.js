var footerText='<ul class="sidbar"><li class="qq"><div id="BizQQWPA" style="top: 0px;"><a href="https://jq.qq.com/?_wv=1027&k=5wxuxro" target="_blank"><span></span><span class="active"></span></a></div></li><li class="wecha"><div><span></span><span class="active"></span></div></li><li class="weico"><div><a href="http://weibo.com" target="_blank"><span></span><span class="active"></span></a></div></li><li class="code"><img src="../resource/images/11.jpg" alt=""><p>扫码关注</p></li></ul>';
document.write(footerText);
var returnurl=window.location.href;
$(function() {
	var href = window.location.href;
	var active = null;
	$(".nav a").each(function(i) {
		if ($(this).attr("href") == href) {
			return active = i
		};
	});
	if (active != null || active == 0) {
		$(".nav li").eq(active).addClass("active");
	};
	$('.sidbar .wecha div').hover(function() {
		$(".sidbar .code").show();
	}, function() {
		$(".sidbar .code").hide();
	});
	$(window).scroll(function() {
		if ($(window).scrollTop() > 400) {
			$("#top").fadeIn(500);
		} else {
			$("#top").fadeOut(500);
		};
	});
	$("#top").click(function() {
		$('body,html').animate({
			scrollTop: 0
		}, 1000);
		return false;
	});
});