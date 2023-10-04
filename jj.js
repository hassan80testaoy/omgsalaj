window.addEventListener('load', function() {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(function() {
      loadStylesheet();
    });
  } else {
    loadStylesheet();
  }
});

function loadStylesheet() {
  var link2 = document.createElement('link');
  link2.rel = 'stylesheet';
  link2.href = '//cdnjs.cloudflare.com/ajax/libs/font-awesome/4.3.0/css/font-awesome.min.css';
  document.head.appendChild(link2);
}
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
var lazyadsense=!1;window.addEventListener("scroll",function(){(0!=document.documentElement.scrollTop&&!1===lazyadsense||0!=document.body.scrollTop&&!1===lazyadsense)&&(!function(){var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(e,a)}(),lazyadsense=!0)},!0);
$(document).ready((function(){const o=$(".to-top");$(window).scroll((function(){$(window).scrollTop()>100?o.addClass("active"):o.removeClass("active")}))}));
$(document).ready(function(){$("body").toggleClass(localStorage.toggled),$("#arabes1").on("click",function(){"nightmode"!=localStorage.toggled?($("body").toggleClass("nightmode",!0),localStorage.toggled="nightmode",$(".section-center").css("display","block")):($("body").toggleClass("nightmode",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("nightmode")?$("#arabes1").prop("checked",!0):$("#arabes1").prop("checked",!1)}); 
var head, newLine, el, title, link, ToC = "<nav class='table-of-contents' role='navigation'><span onclick='toc()'><i class='fa fa-bars'></i>جدول المحتويات</span><ul class='content-list' style='display:none'>";
$("article h2, article h3").attr("id", function(arr) { return "" + arr; });
$("article h2, article h3").each(function(){
    el = $(this);
    title = el.text();
    link = "#"+el.attr("id");
    if (el.is("h3")) {
    ToC += newLine = "<li style='margin-right:30px'><a href='"+link+"'>"+title+"</a></li>";
} else {
    ToC += newLine = "<li><a href='"+link+"'>"+title+"</a></li>";
}
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
    $(".search-btn, .arabes1, .to-top, .home-btn").toggle();
});
var cookieChoices = {};
