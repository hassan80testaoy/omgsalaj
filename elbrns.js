if (!data:view.isPost) {
document.addEventListener("DOMContentLoaded", function() {
// $(tocList).empty();
var tocList = document.querySelector("#tocList");
tocList.innerHTML = "";
var t = null, a = null, e = 0;
document.querySelectorAll(".amp-content h2, .amp-content h3").forEach(function(el) {
var n = "<a name='" + e + "'></a>";
el.insertAdjacentHTML("beforebegin", n);
var o = "<li><a href='#" + e + "'>" + el.textContent + "</a></li>";
el.matches("h2 , h3") ? (a = document.createElement("ul"), (t = document.createElement("li")).append(a), t.innerHTML = o, tocList.append(t)) : a.innerHTML += o;
e++;
});
});

if (document.querySelector("#a3lan-title")) {
document.querySelector(".a3lan-title").innerHTML = document.querySelector("#a3lan-title").innerHTML;
document.querySelector("#a3lan-title").remove();
};
if (document.querySelector("#a3lan-first")) {
document.querySelector(".a3lan-first").innerHTML = document.querySelector("#a3lan-first").innerHTML;
document.querySelector("#a3lan-first").remove();
};
if (document.querySelector("#a3lan-Center")) {
document.querySelector(".a3lan-Center").innerHTML = document.querySelector("#a3lan-Center").innerHTML;
document.querySelector("#a3lan-Center").remove();
};
if (document.querySelector("#a3lan-End")) {
document.querySelector(".a3lan-End").innerHTML = document.querySelector("#a3lan-End").innerHTML;
document.querySelector("#a3lan-End").remove();
};
if (document.querySelector("#a3lan-lates")) {
document.querySelector(".a3lan-lates").innerHTML = document.querySelector("#a3lan-lates").innerHTML;
document.querySelector("#a3lan-lates").remove();
};
}
if (!not data:view.isSingleItem) {
var olderLink=$("a.blog-pager-older-link").attr("href");olderLink&&$(".loadMorePosts").show(),$(".loadMorePosts a").on("click",(function(o){$(".loadMorePosts").hide(),$.ajax({url:olderLink,success:function(o){var e=$(o).find(".blog-posts");e.children(".status-msg-wrap").remove(),$(".blog-posts").append(e.html()),(olderLink=$(o).find(".blog-pager-older-link").attr("href"))?$(".loadMorePosts").show():$(".noMorePosts").show()},beforeSend:function(){$(".loadMore > #loader").show()},complete:function(){$(".loadMore > #loader").hide()}}),o.preventDefault()}));
}
if (data:view.isHomepage || data:view.isPost || data:view.isError) {
  $(document).ready((function(){const o=$(".to-top");$(window).scroll((function(){$(window).scrollTop()>100?o.addClass("active"):o.removeClass("active")}))}));
$(document).ready(function(){$("body").toggleClass(localStorage.toggled),$("#arabes1").on("click",function(){"nightmode"!=localStorage.toggled?($("body").toggleClass("nightmode",!0),localStorage.toggled="nightmode",$(".section-center").css("display","block")):($("body").toggleClass("nightmode",!1),localStorage.toggled="",$(".section-center").css("display",""))}),$("body").hasClass("nightmode")?$("#arabes1").prop("checked",!0):$("#arabes1").prop("checked",!1)});  
}
