if(navigator.userAgent.match(/IEMobile\/10\.0/)){var msViewportStyle=document.createElement("style");msViewportStyle.appendChild(document.createTextNode("@-ms-viewport{width:auto!important}"));document.getElementsByTagName("head")[0].appendChild(msViewportStyle)}var webName="H-ui前端框架";var webSite="http://www.h-ui.net/";function addFavorite(){try{window.external.addFavorite(webSite,webName)}catch(e){try{window.sidebar.addPanel(webName,webSite,"")}catch(e){alert("加入收藏失败，请使用Ctrl+D进行添加")}}}function addFavoritepage(){var sURL=window.location.href;var sTitle=document.title;try{window.external.addFavorite(sURL,sTitle)}catch(e){try{window.sidebar.addPanel(sTitle,sURL,"")}catch(e){alert("加入收藏失败，请使用Ctrl+D进行添加")}}}function setHome(obj){try{obj.style.behavior="url(#default#homepage)";obj.setHomePage(webSite)}catch(e){if(window.netscape){try{netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect")}catch(e){alert("此操作被浏览器拒绝！\n请在浏览器地址栏输入about:config并回车\n然后将 [signed.applets.codebase_principal_support]的值设置为'true',双击即可。")}var prefs=Components.classes["@mozilla.org/preferences-service;1"].getService(Components.interfaces.nsIPrefBranch);prefs.setCharPref("browser.startup.homepage",url)}}}function marquee(height,speed,delay){var scrollT;var pause=false;var ScrollBox=document.getElementById("marquee");if(document.getElementById("holder").offsetHeight<=height){return}var _tmp=ScrollBox.innerHTML.replace("holder","holder2");ScrollBox.innerHTML+=_tmp;ScrollBox.onmouseover=function(){pause=true};ScrollBox.onmouseout=function(){pause=false};ScrollBox.scrollTop=0;function start(){scrollT=setInterval(scrolling,speed);if(!pause){ScrollBox.scrollTop+=2}}function scrolling(){if(ScrollBox.scrollTop%height!=0){ScrollBox.scrollTop+=2;if(ScrollBox.scrollTop>=ScrollBox.scrollHeight/2){ScrollBox.scrollTop=0}}else{clearInterval(scrollT);setTimeout(start,delay)}}setTimeout(start,delay)}(function($){$.fn.togglePassword=function(options){var s=$.extend($.fn.togglePassword.defaults,options),input=$(this);$(s.el).bind(s.ev,function(){"password"==$(input).attr("type")?$(input).attr("type","text"):$(input).attr("type","password")})};$.fn.togglePassword.defaults={ev:"click"}}(jQuery));function Huimodal_alert(info,speed){$(document.body).append('<div id="modal-alert" class="modal hide modal-alert">'+'<div class="modal-alert-info">'+info+"</div>"+"</div>");$("#modal-alert").fadeIn();setTimeout("Huimodal_alert_hide()",speed)}function Huimodal_alert_hide(){$("#modal-alert").fadeOut("normal",function(){$("#modal-alert").remove()})}$(function(){jQuery.Huihover=function(obj){$(obj).hover(function(){$(this).addClass("hover")},function(){$(this).removeClass("hover")})};jQuery.Huifocusblur=function(obj){$(obj).focus(function(){$(this).addClass("focus").removeClass("inputError")});$(obj).blur(function(){$(this).removeClass("focus")})};$.Huifocusblur(".input-text,.textarea");$(".btn-loading").click(function(){var $btn=$(this);var btnval=$btn.val();$btn.addClass("disabled").val("loading").attr("disabled","disabled");setTimeout(function(){$btn.removeClass("disabled").val(btnval).removeAttr("disabled")},3000)});jQuery.Huiselect=function(divselectid,inputselectid){var inputselect=$(inputselectid);$(divselectid+" cite").click(function(){var ul=$(divselectid+" ul");ul.slideToggle()});$(divselectid+" ul li a").click(function(){var txt=$(this).text();$(divselectid+" cite").html(txt);var value=$(this).attr("selectid");inputselect.val(value);$(divselectid+" ul").hide()});$(document).click(function(){$(divselectid+" ul").hide()})};$.Huiselect("#divselect","#inputselect");jQuery.Huitab=function(tabBar,tabCon,class_name,tabEvent,i){var $tab_menu=$(tabBar);$tab_menu.removeClass(class_name);$(tabBar).eq(i).addClass(class_name);$(tabCon).hide();$(tabCon).eq(i).show();$tab_menu.bind(tabEvent,function(){$tab_menu.removeClass(class_name);$(this).addClass(class_name);var index=$tab_menu.index(this);$(tabCon).hide();$(tabCon).eq(index).show()})};jQuery.Huifold=function(obj,obj_c,speed,obj_type,Event){if(obj_type==2){$(obj+":first").find("b").html("-");$(obj_c+":first").show()}$(obj).bind(Event,function(){if($(this).next().is(":visible")){if(obj_type==2){return false}else{$(this).next().slideUp(speed).end().removeClass("selected");$(this).find("b").html("+")}}else{if(obj_type==3){$(this).next().slideDown(speed).end().addClass("selected");$(this).find("b").html("-")}else{$(obj_c).slideUp(speed);$(obj).removeClass("selected");$(obj).find("b").html("+");$(this).next().slideDown(speed).end().addClass("selected");$(this).find("b").html("-")}}})};$("table thead th input:checkbox").on("click",function(){var that=this;$(this).closest("table").find("tr > td:first-child input:checkbox").each(function(){this.checked=that.checked;$(this).closest("tr").toggleClass("selected")})});$(document).on("change",".input-file",function(){var uploadVal=$(this).val();$(this).parent().find(".upload-url").val(uploadVal)});$.Huihover(".dropDown");$(".dropDown_click").click(function(){$(".dropDown").removeClass("open");if($(this).hasClass("open")){$(this).removeClass("open")}else{$(this).addClass("open")}return false});$("body").click(function(){$(".dropDown").removeClass("open")});$(".dropDown-menu li a").click(function(){$(".dropDown").removeClass("open")});$(".dropDown_hover").hover(function(){$(this).addClass("open")},function(){$(this).removeClass("open")});$(".menu_dropdown dl dt").click(function(){if($(this).parent("dl").hasClass("selected")){$(this).next().children("ul").slideUp(400);$(this).parent("dl").removeClass("selected")}else{$(this).parent("dl").addClass("selected");$(this).next().children("ul").slideToggle(500)}});$(".placeholder").click(function(){$(this).hide();$(this).parents("p").find(".input-text").focus()});function inputfocus(obj){if($(obj).val()==""){$(obj).parent().find(".placeholder").hide()}}function inputblur(obj){if($(obj).val()==""){$(obj).parent().find(".placeholder").show()}}$.Huifocusblur(".searchTxt");$.Huihover(".ac_results li");$(".ac_results li").click(function(event){$(".searchTxt").addClass("focus").val($(this).find("p").text());$(".ac_results").hide();b_onclick();return false});$(".searchTxt").focus(function(){$(".ac_results").show();return false});$(".ac_results").blur(function(){$(this).hide()});$("body").click(function(){$(".ac_results").hide()});$(".searchTxt").click(function(){$(".ac_results").show();return false});function BindEnter(obj){var searchBtn=$("#searchBtn");if(obj.keyCode==13){searchBtn.click();obj.returnValue=false}}var $backToTopTxt="返回顶部";$backToTopEle=$('<a href="javascript:void(0)" class="toTop" title=backToTopTxt alt=backToTopTxt></a>').appendTo($("body")).text($backToTopTxt).attr("title",$backToTopTxt).click(function(){$("html, body").animate({scrollTop:0},120)}),$backToTopFun=function(){var st=$(document).scrollTop(),winh=$(window).height();(st>0)?$backToTopEle.show():$backToTopEle.hide();if(!window.XMLHttpRequest){$backToTopEle.css("top",st+winh-166)}};$(window).bind("scroll",$backToTopFun);$backToTopFun();var tags_a=$(".tags a");tags_a.each(function(){var x=9;var y=0;var rand=parseInt(Math.random()*(x-y+1)+y);$(this).addClass("tags"+rand)});var dual=$(".dual");var dual_close=$("a.dual_close");var screen_w=screen.width;if(screen_w>1024){dual.show()}$(window).scroll(function(){var scrollTop=$(window).scrollTop();dual.stop().animate({top:scrollTop+260})});dual_close.click(function(){$(this).parent().hide();return false});$("#fontbig").click(function(){$("#fontSmall").css("color","#0B3B8C");$(this).css("color","#666");$("#cnt_main_article").css("font-size","18px")});$("#fontSmall").click(function(){$("#fontbig").css("color","#0B3B8C");$(this).css("color","#666");$("#cnt_main_article").css("font-size","14px")});$("#banner").slideDown("slow");$("a.preview").hover(function(){$(this).addClass("active");$("#tooltip-preview").remove();var winW=$(window).width();var winW5=winW/2;this.myTitle=this.title;this.title="";var midimg=$(this).attr("data-preview");if(midimg==""){return}var imgT=$(this).parents(".imgItem").offset().top;var imgL=$(this).parents(".imgItem").offset().left;var imgW=$(this).parents(".imgItem").width();var imgH=$(this).parents(".imgItem").height();var ww=(imgL+imgW/2);if(ww<winW5){var tooltipLeft=(imgW+imgL)+"px"}else{var tooltipRight=(winW-imgL)+"px"}var tooltip_keleyi_com="<div id='tooltip-preview' style='top:"+imgT+"px;right:"+tooltipRight+";left:"+tooltipLeft+"'><span id='tooltip-keleyi-div' class='loading' style='width:50px; height:50px'></span></div>";$("body").append(tooltip_keleyi_com);var midimgW=$(this).attr("data-width");var midimgH=$(this).attr("data-height");var imgTitle=this.myTitle?"<br />"+this.myTitle+" 产品预览图":"";var image=new Image();image.onload=function(){if($("a.preview.active").attr("data-preview")==midimg){var midingW2=this.width;var midingH2=this.height;$("#tooltip-keleyi-div").css({"width":midingW2+"px","height":midingH2+"px"});$("#tooltip-keleyi-div").append(this)}};image.src=midimg},function(){$(this).removeClass("active");this.title=this.myTitle;$("#tooltip-preview").remove()});$.Huihover(".Huialert .icon-remove");$(".Huialert .icon-remove").on("click",function(){var Huialert=$(this).parents(".Huialert");Huialert.fadeOut("normal",function(){Huialert.remove()})});var $that=$(".hui-tags"),$taginput=$that.find(".hui-tags-input"),$taglable=$that.find(".hui-tags-lable"),$tagswp=$that.find(".hui-tags-iptwrap"),$taglist=$that.find(".hui-tags-list"),$taghas=$taglist.find(".hui-tags-has"),time1;$taglable.show();$taginput.val("");$taginput.blur(function(){time1=setTimeout(function(){$taglist.slideUp()},400)});$taginput.focus(function(){clearTimeout(time1)});$that.on("click",function(){$taginput.focus();$taglist.slideDown()});$taginput.on("keydown",function(event){$taglable.hide();var v=$taginput.val();if(v!=""){if(event.keyCode==13||event.keyCode==108||event.keyCode==32){v=$taginput.val();$('<span class="hui-tags-token">'+v+"</span>").insertBefore($tagswp);$taginput.val("")}}else{if(event.keyCode==8){if($that.find(".hui-tags-token:last").length>0){$that.find(".hui-tags-token:last").remove()}else{$taglable.show()}}}});$taghas.find("span").click(function(){var taghasV=$(this).text();$('<span class="hui-tags-token">'+taghasV+"</span>").insertBefore($tagswp);$taginput.focus()});$(document).on("click",".hui-tags-token",function(){$(this).remove();if($that.find(".hui-tags-token:last").length==0){$taglable.show()}})});function displayimg(){$("#banner").slideUp(1000,function(){$("#top").slideDown(1000)})}setTimeout("displayimg()",4000);