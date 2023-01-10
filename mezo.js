$(document).ready(function(){$(tocList).empty();var t=null,a=null,e=0;$(".amp-content h2, .amp-content h3").each(function(){var n="<a name='"+e+"'></a>";$(this).before(n);var o="<li><a href='#"+e+"'>"+$(this).text()+"</a></li>";$(this).is("h2 , h3")?(a=$("<ul></ul>"),(t=$(o)).append(a),t.appendTo("#tocList")):a.append(o),e++})});
if (document['getElementById']('a3lan-title')) {
    document['getElementsByClassName']('a3lan-title')[0]['innerHTML'] = document['getElementById']('a3lan-title')['innerHTML'];
    document['getElementById']('a3lan-title')['remove']()
};
if (document['getElementById']('a3lan-first')) {
    document['getElementsByClassName']('a3lan-first')[0]['innerHTML'] = document['getElementById']('a3lan-first')['innerHTML'];
    document['getElementById']('a3lan-first')['remove']()
};
if (document['getElementById']('a3lan-Center')) {
    document['getElementsByClassName']('a3lan-Center')[0]['innerHTML'] = document['getElementById']('a3lan-Center')['innerHTML'];
    document['getElementById']('a3lan-Center')['remove']()
};
if (document['getElementById']('a3lan-End')) {
    document['getElementsByClassName']('a3lan-End')[0]['innerHTML'] = document['getElementById']('a3lan-End')['innerHTML'];
    document['getElementById']('a3lan-End')['remove']()
};
if (document['getElementById']('a3lan-lates')) {
    document['getElementsByClassName']('a3lan-lates')[0]['innerHTML'] = document['getElementById']('a3lan-lates')['innerHTML'];
    document['getElementById']('a3lan-lates')['remove']()
};
(function(a){a.fn.lazyload=function(b){var c={threshold:0,failurelimit:0,event:"scroll",effect:"show",container:window};if(b){a.extend(c,b)}var d=this;if("scroll"==c.event){a(c.container).bind("scroll",function(b){var e=0;d.each(function(){if(a.abovethetop(this,c)||a.leftofbegin(this,c)){}else if(!a.belowthefold(this,c)&&!a.rightoffold(this,c)){a(this).trigger("appear")}else{if(e++>c.failurelimit){return false}}});var f=a.grep(d,function(a){return!a.loaded});d=a(f)})}this.each(function(){var b=this;if(undefined==a(b).attr("original")){a(b).attr("original",a(b).attr("src"))}if("scroll"!=c.event||undefined==a(b).attr("src")||c.placeholder==a(b).attr("src")||a.abovethetop(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.rightoffold(b,c)){if(c.placeholder){a(b).attr("src",c.placeholder)}else{a(b).removeAttr("src")}b.loaded=false}else{b.loaded=true}a(b).one("appear",function(){if(!this.loaded){a("<img />").bind("load",function(){a(b).hide().attr("src",a(b).attr("original"))[c.effect](c.effectspeed);b.loaded=true}).attr("src",a(b).attr("original"))}});if("scroll"!=c.event){a(b).bind(c.event,function(c){if(!b.loaded){a(b).trigger("appear")}})}});a(c.container).trigger(c.event);return this};a.belowthefold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).height()+a(window).scrollTop()}else{var d=a(c.container).offset().top+a(c.container).height()}return d<=a(b).offset().top-c.threshold};a.rightoffold=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).width()+a(window).scrollLeft()}else{var d=a(c.container).offset().left+a(c.container).width()}return d<=a(b).offset().left-c.threshold};a.abovethetop=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollTop()}else{var d=a(c.container).offset().top}return d>=a(b).offset().top+c.threshold+a(b).height()};a.leftofbegin=function(b,c){if(c.container===undefined||c.container===window){var d=a(window).scrollLeft()}else{var d=a(c.container).offset().left}return d>=a(b).offset().left+c.threshold+a(b).width()};a.extend(a.expr[":"],{"below-the-fold":"$.belowthefold(a, {threshold : 0, container: window})","above-the-fold":"!$.belowthefold(a, {threshold : 0, container: window})","right-of-fold":"$.rightoffold(a, {threshold : 0, container: window})","left-of-fold":"!$.rightoffold(a, {threshold : 0, container: window})"})})(jQuery);$(function(){$("img").lazyload({placeholder:"https://4.bp.blogspot.com/-oA8G9t61JXk/VtLrtkAzObI/AAAAAAAAFTY/EjT6jl2MEFM/s1600/bloggersstand.gif",effect:"fadeIn",threshold:"-50"})});
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);
var olderLink=$("a.blog-pager-older-link").attr("href");olderLink&&$(".loadMorePosts").show(),$(".loadMorePosts a").on("click",(function(o){$(".loadMorePosts").hide(),$.ajax({url:olderLink,success:function(o){var e=$(o).find(".blog-posts");e.children(".status-msg-wrap").remove(),$(".blog-posts").append(e.html()),(olderLink=$(o).find(".blog-pager-older-link").attr("href"))?$(".loadMorePosts").show():$(".noMorePosts").show()},beforeSend:function(){$(".loadMore > #loader").show()},complete:function(){$(".loadMore > #loader").hide()}}),o.preventDefault()}));
$(document).ready((function(){const o=$(".to-top");$(window).scroll((function(){$(window).scrollTop()>100?o.addClass("active"):o.removeClass("active")}))}));
$(document).ready(function(){$("body").toggleClass(localStorage.toggled),$("#arabes1").on("click",function(){"nightmode"!=localStorage.toggled?($("body").toggleClass("nightmode",!0),localStorage.toggled="nightmode",$(".section-center").css("display","block")):($("body").toggleClass("nightmode",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("nightmode")?$("#arabes1").prop("checked",!0):$("#arabes1").prop("checked",!1)}); 
var head, newLine, el, title, link, ToC = "<nav class='table-of-contents' role='navigation'><span onclick='toc()'>جدول المحتويات</span><ul class='content-list' style='display:none'>";
$("article h2, article h3").attr("id", function(arr) { return "" + arr; });
$("article h2, article h3").each(function(){
    el = $(this);
    title = el.text();
    link = "#"+el.attr("id");
    ToC += newLine = "<li><a href='"+link+"'>"+title+"</a></li>";
});
ToC += "</ul></nav>";
$(".toc-pro").prepend(ToC);

function toc() {
    $(".table-of-contents .content-list").toggle();
}

$(".search-btn").click(function() {
    $(".search-box, .overlay").show();
});

$(".fa-times, .close-btn, .overlay").click(function() {
    $(".search-box, .overlay").hide();
});

$(".optionsBtn").click(function() {
    $(this).toggleClass("rotated");
    $(".search-btn, .arabes1, .to-top").toggle();
});
