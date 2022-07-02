'use strict';
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(stoppable) {
 return typeof stoppable;
} : function(obj) {
 return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};
function _defineProperty(obj, key, value) {
 if (key in obj) {
   Object.defineProperty(obj, key, {
     value : value,
     enumerable : true,
     configurable : true,
     writable : true
   });
 } else {
   obj[key] = value;
 }
 return obj;
}
var _0x48c1 = ["theiaStickySidebar", "fn", "", "modern", "relative", "TSS", "extend", "additionalMarginTop", "additionalMarginBottom", "TSS: Body width smaller than options.minWidth. Init is delayed.", "log", "scroll.", "namespace", "unbind", "on", "resize.", "initialized", "width", "body", "minWidth", "#theia-sticky-sidebar-stylesheet-", "length", '<style id="theia-sticky-sidebar-stylesheet-', '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>', "append", "head", "sidebar",
"options", "container", "containerSelector", "parent", "-webkit-transform", "none", "css", "parents", "defaultPosition", "visible", "border-box", "stickySidebar", ".theiaStickySidebar", "find", "remove", "type", "match", "filter", "script", "children", "addClass", "<div>", "marginBottom", "margin-bottom", "paddingTop", "padding-top", "paddingBottom", "padding-bottom", "top", "offset", "outerHeight", "stickySidebarPaddingTop", "stickySidebarPaddingBottom", "previousScrollTop", "fixedScrollTop", "onScroll",
":visible", "is", "disableOnResponsiveLayouts", "float", "outerWidth", "scrollTop", "static", "height", "position", "fixed", "sidebarBehavior", "stick-to-top", "stick-to-bottom", "min", "max", "absolute", "scrollLeft", "px", "translateY(", "px)", "left", "padding-left", "0px", "transform", "updateSidebarHeight", "undefined", "1px", "each", "getBoundingClientRect", "menu", "a", ".LinkList ul > li", "eq", "text", "charAt", "_", '<ul class="sub-menu m-sub"/>', "replace", ".sub-menu", "appendTo", '<ul class="sub-menu2 m-sub"/>',
".sub-menu2", "has-sub", "li", ".LinkList ul li ul", "lazy", "data-image", "attr", "round", "w", "-h", "-p-k-no-nu", "/s72-c", "/", "/w72-h", "/w72-h72-p-k-no-nu", "=w72-h", "=w72-h72-p-k-no-nu", "=", "load resize scroll", "onload", "style", "background-image:url(", "src", ")", "replaceText", "firstChild", "nodeType", "nodeValue", "test", "before", "push", "nextSibling", "jQuery", "use strict", "data", "tagName", "h1,h2,h3", "toc", "tocHeadings", ",", "split", "headings", "map", "li:last", "<", "/>",
"unshift", "splice", "href", "#", "id", "<a/>", "<li/>", "?", "getElementById", "content", "noConflict", "[data-toc]", "call", "onclick", ".toggle-setting .fa-cog", "querySelector", "fa-spin", "toggle", "classList", ".close-settings .fa-cog", "open", ".settings-box", ".toggle-settings .fa-cog", "color_option", "getItem", "--bg", "setProperty", "documentElement", "active", "color", "dataset", "add", "forEach", ".colors-list li", "querySelectorAll", "click", "target", "setItem", ".active", "parentElement",
"active-color", "html", "addEventListener", "--color", "colors", ".reset-options", "clear", "reload", "location", '<div style="font: 14px -apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;position: fixed;overflow-x: hidden;background:#f8f8f8;top: 0;left: 0;right: 0;bottom: 0;width: 100%;height: 100%;z-index: 1;text-align: center;"><div style="position: relative;padding: 2em;width: 80%;max-width: 600px;min-width: 200px;margin: 5em auto;background: white;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);"><div><div style="color: #fff; position: absolute; margin: 0 auto; left: 0; right: 0; top: -25px; width: 50px; height: 50px; line-height: 50px; border-radius: 50%; -webkit-border-radius: 50%; z-index: 9; background: #0033a9; padding: 0; text-align: center; box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); -webkit-box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.26); font-size: 2em; font-family: arial; text-decoration: none;"><span>\u00a9</span></div><h4 style="text-align: center; font-size: 26px; margin: 30px 0 15px;line-height: normal;">\u0639\u0641\u0648\u0627\u064b..!!</h4></div><div style="position: relative;padding: 5px;text-align: right;font-size: 14px;"><p>\u0644\u0627 \u064a\u0645\u0643\u0646\u0643 \u0625\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0642\u0627\u0644\u0628 .. \u0647\u0630\u0627 \u0627\u0644\u062a\u0648\u0642\u0641 \u064a\u062d\u062f\u062b \u062a\u0644\u0642\u0627\u0626\u064a\u0627\u064b \u0628\u0633\u0628\u0628 \u0645\u0627\u064a\u0644\u064a ..</p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">1</span>-\u0627\u0644\u0639\u0628\u062b \u0628\u062d\u0642\u0648\u0642 \u0645\u0644\u0643\u064a\u0629 \u0627\u0644\u062a\u0635\u0645\u064a\u0645!..\u0643\u0625\u062e\u0641\u0627\u0621 \u062a\u0648\u0642\u064a\u0639 \u0627\u0644\u0645\u0635\u0645\u0645</p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">2</span>-\u0644\u0627 \u062a\u0645\u0644\u0643 \u0631\u062e\u0635\u0629\u061f .. \u0644\u0644\u062d\u0635\u0648\u0644 \u0639\u0644\u0649 \u062a\u0641\u0639\u064a\u0644 \u0627\u0644\u0642\u0627\u0644\u0628 \u064a\u0631\u062c\u0649<a style="color: #0033a9;font-size: 14px; font-weight: 400;" href="https://www.facebook.com/shrktsmile"> \u0637\u0644\u0628 \u0631\u062e\u0635\u0629 </a></p><p><span style="font-size: 17px; font-weight: bold; color: #0033a9;">3</span>-\u062a\u0645\u0644\u0643 \u0631\u062e\u0635\u0629 \u0648\u0645\u0639 \u0630\u0644\u0643 \u0644\u0627 \u062a\u0633\u062a\u0637\u064a\u0639 \u0625\u0633\u062a\u062e\u062f\u0627\u0645 \u0647\u0630\u0627 \u0627\u0644\u0642\u0627\u0644\u0628 .. \u064a\u0631\u062c\u0649 \u0627\u0644\u062a\u0648\u0627\u0635\u0644 \u0628\u0640  <a style="color: #0033a9;font-size: 14px; font-weight: 400;" href="https://www.facebook.com/shrktsmile"> \u0641\u0631\u064a\u0642 \u0627\u0644\u062f\u0639\u0645 </a></p></div><div style="text-align: center; overflow: hidden;"><a style="color: #fff;background:#0033a9;text-decoration: none;display: block;max-width: 180px;padding: 10px 12px;margin: 5px auto;font-size: 14px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;background-image: none;border: 0;box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);-webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.2), 0px 1px 1px 0 rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12);" href="https://smile-template.blogspot.com/">\u0627\u0644\u0635\u0641\u062d\u0629 \u0627\u0644\u0631\u0633\u0645\u064a\u0629</a></div></div></div>',
"https://smile-template.blogspot.com/", "assign", "toLowerCase", "#license-key", "json", "/feeds/posts/default?alt=json-in-script&start-index=1&max-results=1", "GET", "jsonp", "feed", "exec", "ajax", "www.blogger", "indexOf", "draft.blogger", "template-editor", "post-preview", "b/layout-preview", "b/blog-preview", "b/preview", "b/html-preview", "b/app-preview", "translate.google", "webcache.googleusercontent", "https://www.blogger.com/feeds/4617181328938317578/pages/default/1365862887068220537?alt=json-in-script&orderby=published",
"parse", "Blog_id", "create", "key", "js_script", "$t", "entry", "</div>", "Smile", '<a  href="', "link1", '" target="_blank" tooltip="', "team1", '" style="width: 30px;height: 30px;background-size: 30px 60px;-webkit-transition: all 0.15s ease-in-out;transition: all 0.15s ease-in-out;position: relative;display: inline-block!important;vertical-align: middle;visibility: visible!important; opacity: 1!important; z-index: 0 !important;" /><style>#smile-right a{background:url(https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgRc-vgikfGqLuuBuTNvFRaZDS-IW9FyadUzNIcsDAb-Y8AMXolGY1LAWNWLUo5sU2gf1A-QzI6dVK-qXSuThB_5gSRBSEFlaidil9aN-UQZYttjCi_ZpAoR4p6XTG5fzmC5LKosrA5VVK9A_r2UW9nbtSEgXYc9kZ7ri6NjxgF53uWuITedCqTb4yE/s1600/Copy.png) top no-repeat;}#smile-right a:hover{background-position:bottom}#smile-right a:after{font-size: 0.6rem;padding: 3px 10px;position: absolute;top:2px;right: 25px;z-index:100;content:attr(tooltip);background:var(--bg);color:#ffffff;opacity:0;visibility:hidden;-webkit-transition:all 0.1s ease-in-out 0.1s;transition:all 0.1s ease-in-out 0.1s;border-radius:100px;line-height:1rem;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap;}#smile-right a:hover:after{opacity:1;visibility:visible;right:30px}#smile-right a:hover:after{opacity:1;visibility:visible;right:30px}</style>',
"#smile-right", "impo", "opacity", "visibility", "hidden", ":hidden", ".impo", '<span class="error-msg">', "</span>", '<div class="loader"/>', "/feeds/posts/default?alt=json&max-results=", "recent", "list1", "/feeds/comments/default?alt=json&max-results=", "/feeds/posts/default/-/", "?alt=json&max-results=", "comments", "link", "alternate", "rel", "title", "img:first", "lastIndexOf", "substring", "/d", "media$thumbnail", "url", "<img", "/default.", "/0.", "name", "author", "true", "postAuthor", '<span class="entry-author"><span class="author">',
"</span><span class='spp'>-</span></span>", "published", " ", ", ", "postDate", '<span class="entry-time"><time class="published" datetime="', '">', "</time></span>", '<div class="entry-meta">', "featured1", "featured2", "featured3", "category", '<span class="entry-category">', "term", '<span class="entry-excerpt excerpt">', "substr", "trim", "\u2026</span>", "/s220", "/w55-h55-p-k-no-nu", "gd$image", "//img1.blogblog.com/img/blank.gif", "//img1.blogblog.com/img/b16-rounded.gif", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/w55-h55-p-k-no-nu/avatar.jpg",
'<article class="list1-item item-', '"><a class="entry-image-link cmm-avatar" href="', '"><span class="entry-thumb" data-image="', '"/></a><h2 class="entry-title"><a href="', '</a></h2><p class="cmm-snippet excerpt">', "</p></article>", "featured", ".id-", "-", " .entry-category{background-color:", ";color:#fff}.id-", " .loader:after{border-color:", ";border-right-color:rgba(155,155,155,0.2)}", " .title-wrap{border-bottom-color:", "}.id-", " .title-wrap > h3,.id-", " .title-wrap > h3{color:#fff}.id-",
" .title-wrap > a.more:hover,.id-", " .entry-header:not(.entry-info) .entry-title a:hover{color:", " .title-wrap > h3:after{border-left-color:", "}.rtl .id-", " .title-wrap > h3:after{border-right-color:", "msimple", "featured4", "featured5", "block1", "block2", "col-left", "col-right", "grid1", "grid2", "videos", "side1", "list2", "geterror404", "prepend", "#page-skin-2", "type-", " id-", " show", " column-widget id-", "show", "related", '<ul class="mega-items">', '<div class="featured-items ',
'<div class="block1-items">', '<div class="block2-items">', '<div class="column-items">', '<div class="grid1-items total-', '<div class="grid2-items">', '<div class="videos-items total-', '<div class="side1-items">', '<div class="list1-items">', '<div class="list2-items">', '<div class="related-posts total-', '<article class="mega-item"><div class="mega-content"><a class="entry-image-link" href="', "</a></h2>", "</div></article>", '<article class="featured-item item-', '"><div class="featured-item-inner"><a class="entry-image-link before-mask" href="',
'"/></a>', '<div class="entry-header entry-info"><h2 class="entry-title"><a href="', '</div></div></article><div class="featured-scroll">', "</div></div></article>", '<article class="block-item item-', '"><div class="block-inner">', '<a class="entry-image-link before-mask" href="', '"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="', '"><a class="entry-image-link" href="', '"/></a><div class="entry-header"><h2 class="entry-title"><a href="', '"><div class="entry-image"><a class="entry-image-link" href="',
'"/></a></div><div class="entry-header"><h2 class="entry-title"><a href="', '<article class="column-item item-', '"><div class="column-inner">', '<article class="grid-item item-', '"><div class="entry-image">', '<a class="entry-image-link" href="', "</a></h2></div></article>", '<article class="videos-item item-', '"><div class="videos-inner">', '"/><span class="video-icon"/></a><div class="entry-header entry-info"><h2 class="entry-title"><a href="', '<article class="side1-item item-', '"><div class="side1-inner">',
'<article class="list2-item item-', '"><div class="entry-header">', '<h2 class="entry-title"><a href="', '<article class="related-item post item-', "</ul>", "/search", "/search/label/", "a:first", "</div></div>", "span.entry-thumb", "<ul>", "getmega", "getfeatured", "getblock", "viewAll", '<a class="more" href="/search/label/', '"><span>', "</span></a>", ".widget-title", "getwidget", "getrelated", "$", "//4.bp.blogspot.com/-oSjP8F09qxo/Wy1J9dp7b0I/AAAAAAAACF0/ggcRfLCFQ9s2SSaeL9BFSE2wyTYzQaTyQCK4BGAYYCw/s35-r/avatar.jpg",
"//resources.blogblog.com/img/blank.gif", "#smile-main-menu", "home-icon", "homepage home-icon", "home-text", "homepage", "#smile-main-menu-nav > li > a", "show-menu", "#smile-main-menu .widget", "#featured-wrapper", "search-active", "toggleClass", ".search-toggle", ".blog-posts-title a.more span,.related-title a.more span", "$ads={1}", '<div id="smile-new-before-adds"/>', "replaceWith", "$ads={2}", '<div id="smile-new-after-adds"/>', ".post-body b", "#before-adds", "#smile-new-before-adds", "#after-adds",
"#smile-new-after-adds", "#smile-main-before-adds .widget", "#smile-main-after-adds .widget", "left-sidebar", "<style>.is-single #main-wrapper{float:right}.is-single #sidebar-wrapper{float:left}</style>", "right-sidebar", "<style>.is-single #main-wrapper{float:left}.is-single #sidebar-wrapper{float:right}</style>", "full-width", "<style>.is-single #main-wrapper{width:100%}.is-single #sidebar-wrapper{display:none}</style>", "screen", "focus", "_blank", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=",
",height=", ",left=", ",top=", ".smile-share-links .window", "show-hidden", ".show-hid a", ".smile-share-links", '<li class="', '"><a href="', '" title="', '" target="_blank"/></li>', ".author-description span li", ".description-links", ".about-author .author-description span a", "label", "has-sub mega-menu", "#smile-main-menu li", "#featured .HTML .widget-content", "results", ".smile-content-blocks .HTML .widget-content", ".smile-widget-ready .HTML .widget-content", "data-label", ".related-tag",
".smile-related-content", '<div class="fb-comments" data-width="100%" data-href="', '" order_by="time" data-colorscheme="', '" data-numposts="5"></div>', "comments-system-", ".entry-meta .entry-comments-link", ".avatar-image-container img", "blogger", "disqus", "#comments", "facebook", "hide", "comments-system-blogger", ".comments .toplevel-thread > ol > .comment .comment-actions .comment-reply", ".comments .toplevel-thread > #top-continue", ".smile-blog-post-comments", ".index-post .entry-image-link .entry-thumb, .PopularPosts .entry-image-link .entry-thumb, .FeaturedPost .entry-image-link .entry-thumb,.about-author .author-avatar",
"clone", "#smile-main-menu-nav", "main-mobile-nav", ".mega-items", "data-text", "a.home-icon", ".mega-menu > a", "nav-active", ".mobile-menu-toggle, .hide-smile-mobile-menu, .overlay", '<div class="submenu-toggle"/>', ".smile-mobile-menu .has-sub", ".submenu-toggle", ".smile-mobile-menu .mega-menu", "hasClass", "preventDefault", "slideToggle", "> .m-sub", "removeClass", ".m-sub", ".smile-mobile-menu ul li .submenu-toggle", "#smile-mobile-menu", "#main-navbar-menu ul.menu", ".mobile-navbar-menu",
"#main-navbar-social ul.social", ".mobile-navbar-social", "#footer-wrapper", "is-fixed", "scroll", ".main-menu-wrap .main-menu", ".nav-outer", "#main-wrapper,#sidebar-wrapper", '<img src="$1"/>', '<div class="responsive-video-wrap"><iframe id="youtube" width="100%" height="358" src="https://www.youtube.com/embed/$1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>', "p.comment-content", "fadeIn", "fadeOut", "on-footer",
"animate", "html, body", ".back-top", "{toc}", "Table of Contents", '<div class="toc-wrap"><div class="toc-inner"><a href="javascript:;" class="toc-title" role="button" title="', '"><span class="toc-title-text">', '</span></a><ol id="toc"></ol></div></div>', "is-expanded", "#toc", ".toc-title", ".blog-post", "h2,h3,h4", "html,body", "#toc li a", "{contactform}", '<div class="contact-form"/>', "#ContactForm1", ".contact-form", ".blog-post b", "www.youtube.com", '<div class="responsive-video-wrap"/>',
"wrap", "#post-body iframe", "font-size", "#post-body", "#font-size", "+=2", "#up-font", "-=2", "#down-font", ".darkmode-toggle span", "darkTheme", "yes", "dark", ".darkmode-toggle .no", ".darkmode-toggle .yes", "darkmode", "no", ".read-option span", "rdTheme", "readingmode", ".read-option .no", ".read-option .yes", "read", ".box-option span", "boxTheme", "noboxed", ".box-option .no", ".box-option .yes", "box", "getAttribute", "item", "a.prev-post", "a.next-post", "get", "h1.entry-title", "<div class='nav-content'><span>",
"</span><p class='truncate'>", "</p></div>", ".post-nav", "ready", "div", "archivepage", '<div class="caregory-div"><h3 class="Category-archivepage">', '</h3></div><ol class="clear">', ".blogspot.", "http://", "https://", "<li><a class='rico-archivepage-posts' title='", "' href='", "'>", "</a></li>", "innerHTML", "#archivepage", "</ol>", "then", "/feeds/posts/summary/-/", "?alt=json&max-results=1000", "application/json", "/feeds/posts/summary?alt=json&max-results=0", "post-body", "random", "floor",
"/feeds/posts/default?alt=json-in-script&orderby=updated&start-index=", "&max-results=5", "<ol>", '<li><a href="', '" target="_blank">', "#SmileRandom", "seconds", "count", "degrees", "timerHTML", "<div class='clom radialtimer'><div class='n'></div><div class='slice'><div class='q'></div><div class='pie r'></div><div class='pie l'></div></div></div><div class='clom radialbtn'><a class='areload' data-href='false' id='btn_reload'>", "</a></div>", "interval", "timerContainer", "number", "slice", "pie",
"pieRight", "pieLeft", "quarter", "history", "/p/", ".html", "ranQuerydata", "getQueryVariable", "data-href", "ranQuerybtn", "false", "javascript:void(0)", "disabled", "&", "search", "init", ".n", ".slice", ".pie", ".pie.r", ".pie.l", ".q", ".areload", "start", "pushState", "nc", "mth", "rotate(180deg)", "rotate(", "deg)", "setInterval", "pageName", "redirect", "waitingMessage", "\u200f\u062c\u0627\u0631\u064a \u062a\u0647\u064a\u0626\u0629 \u0627\u0644\u0631\u0627\u0628\u0637", "linkReady", "\u0627\u0644\u0631\u0627\u0628\u0637 \u062c\u0627\u0647\u0632",
"linkError", "\u0631\u0627\u0628\u0637 \u0645\u0639\u0637\u0644", "waitingTimer", "10", "autoRedirectSites", "nobuttonn", "Redirect", "origin", "hostname", "(", "|", "|blogger.com|bp.blogspot.com|whatsapp:)", "more", ".html?&url=", ".post-body a", "#TransBreakNews", "protocol", "//", "/feeds/posts/default?alt=json-in-script&amp;max-results=10", "slideDown", "#recentbreaking ul", "slideUp", "#recentbreaking li:first", "#recentbreaking", "<span>< /span>", "<strong>", "</strong>", "createElement", "levelmaxblock",
'<div id="AdBlockBlocker"><div class="inner"><img src="', '" alt="adblock" width="800px" height="600px" title="adblock"/></div></div>', "overflow", "text/javascript", "async", "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js", "onerror", "adblock", "getElementsByTagName", "insertBefore", "parentNode", "onselectstart", "return false", "onmousedown", "display", ".toc", ".range_slider", ".toggle-settings", ".toggle-setting", "page", '<span><a href="', '">1</a></span>', '<span><a href="/search/label/',
"?&max-results=", " ... ", '<span class="current">', '<span><a href="#" onclick="redirectpage(', ');return false">', "</a></span>", '<span><a href="#" onclick="redirectlabel(', "pageArea", "getElementsByName", "blog-pager", "openSearch$totalResults", "?updated-max", "?&max", "?q=", "#PageNo=", "feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata", "&max-results=", "' + home_page + 'feeds/posts/summary/-/' + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1",
"feeds/posts/summary?start-index=", "&max-results=1&alt=json-in-script&callback=finddatepost", "setAttribute", "appendChild", "feeds/posts/summary/-/", "?start-index=", "/search?updated-max=", "?updated-max="];
(function($) {
 $[_0x48c1[1]][_0x48c1[0]] = function(params) {
   function overloadSelect(context, halRoles) {
     var sectionText = callback(context, halRoles);
     if (!sectionText) {
       console[_0x48c1[10]](_0x48c1[9]);
       $(document)[_0x48c1[14]](_0x48c1[11] + context[_0x48c1[12]], function(context, halRoles) {
         return function(mmCoreSplitViewBlock) {
           var sectionText = callback(context, halRoles);
           if (sectionText) {
             $(this)[_0x48c1[13]](mmCoreSplitViewBlock);
           }
         };
       }(context, halRoles));
       $(window)[_0x48c1[14]](_0x48c1[15] + context[_0x48c1[12]], function(context, halRoles) {
         return function(mmCoreSplitViewBlock) {
           var sectionText = callback(context, halRoles);
           if (sectionText) {
             $(this)[_0x48c1[13]](mmCoreSplitViewBlock);
           }
         };
       }(context, halRoles));
     }
   }
   function callback(context, halRoles) {
     if (context[_0x48c1[16]] === true) {
       return true;
     }
     if ($(_0x48c1[18])[_0x48c1[17]]() < context[_0x48c1[19]]) {
       return false;
     }
     fetch(context, halRoles);
     return true;
   }
   function fetch(context, url) {
     context[_0x48c1[16]] = true;
     var $realtime = $(_0x48c1[20] + context[_0x48c1[12]]);
     if ($realtime[_0x48c1[21]] === 0) {
       $(_0x48c1[25])[_0x48c1[24]]($(_0x48c1[22] + context[_0x48c1[12]] + _0x48c1[23]));
     }
     url[_0x48c1[90]](function() {
       function success() {
         args[_0x48c1[61]] = 0;
         args[_0x48c1[26]][_0x48c1[33]]({
           "min-height" : _0x48c1[89]
         });
         args[_0x48c1[38]][_0x48c1[33]]({
           "position" : _0x48c1[69],
           "width" : _0x48c1[2],
           "transform" : _0x48c1[32]
         });
       }
       function complete(isCalled) {
         var value = isCalled[_0x48c1[70]]();
         isCalled[_0x48c1[46]]()[_0x48c1[90]](function() {
           value = Math[_0x48c1[77]](value, $(this)[_0x48c1[70]]());
         });
         return value;
       }
       var args = {};
       args[_0x48c1[26]] = $(this);
       args[_0x48c1[27]] = context || {};
       args[_0x48c1[28]] = $(args[_0x48c1[27]][_0x48c1[29]]);
       if (args[_0x48c1[28]][_0x48c1[21]] == 0) {
         args[_0x48c1[28]] = args[_0x48c1[26]][_0x48c1[30]]();
       }
       args[_0x48c1[26]][_0x48c1[34]]()[_0x48c1[33]](_0x48c1[31], _0x48c1[32]);
       args[_0x48c1[26]][_0x48c1[33]]({
         "position" : args[_0x48c1[27]][_0x48c1[35]],
         "overflow" : _0x48c1[36],
         "-webkit-box-sizing" : _0x48c1[37],
         "-moz-box-sizing" : _0x48c1[37],
         "box-sizing" : _0x48c1[37]
       });
       args[_0x48c1[38]] = args[_0x48c1[26]][_0x48c1[40]](_0x48c1[39]);
       if (args[_0x48c1[38]][_0x48c1[21]] == 0) {
         var regNamedQueries = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
         args[_0x48c1[26]][_0x48c1[40]](_0x48c1[45])[_0x48c1[44]](function(isSlidingUp, canCreateDiscussions) {
           return canCreateDiscussions[_0x48c1[42]][_0x48c1[21]] === 0 || canCreateDiscussions[_0x48c1[42]][_0x48c1[43]](regNamedQueries);
         })[_0x48c1[41]]();
         args[_0x48c1[38]] = $(_0x48c1[48])[_0x48c1[47]](_0x48c1[0])[_0x48c1[24]](args[_0x48c1[26]][_0x48c1[46]]());
         args[_0x48c1[26]][_0x48c1[24]](args[_0x48c1[38]]);
       }
       args[_0x48c1[49]] = parseInt(args[_0x48c1[26]][_0x48c1[33]](_0x48c1[50]));
       args[_0x48c1[51]] = parseInt(args[_0x48c1[26]][_0x48c1[33]](_0x48c1[52]));
       args[_0x48c1[53]] = parseInt(args[_0x48c1[26]][_0x48c1[33]](_0x48c1[54]));
       var i = args[_0x48c1[38]][_0x48c1[56]]()[_0x48c1[55]];
       var offset = args[_0x48c1[38]][_0x48c1[57]]();
       args[_0x48c1[38]][_0x48c1[33]](_0x48c1[52], 1);
       args[_0x48c1[38]][_0x48c1[33]](_0x48c1[54], 1);
       i = i - args[_0x48c1[38]][_0x48c1[56]]()[_0x48c1[55]];
       offset = args[_0x48c1[38]][_0x48c1[57]]() - offset - i;
       if (i == 0) {
         args[_0x48c1[38]][_0x48c1[33]](_0x48c1[52], 0);
         args[_0x48c1[58]] = 0;
       } else {
         args[_0x48c1[58]] = 1;
       }
       if (offset == 0) {
         args[_0x48c1[38]][_0x48c1[33]](_0x48c1[54], 0);
         args[_0x48c1[59]] = 0;
       } else {
         args[_0x48c1[59]] = 1;
       }
       args[_0x48c1[60]] = null;
       args[_0x48c1[61]] = 0;
       success();
       args[_0x48c1[62]] = function(padding) {
         if (!padding[_0x48c1[38]][_0x48c1[64]](_0x48c1[63])) {
           return;
         }
         if ($(_0x48c1[18])[_0x48c1[17]]() < padding[_0x48c1[27]][_0x48c1[19]]) {
           success();
           return;
         }
         if (padding[_0x48c1[27]][_0x48c1[65]]) {
           var _0xc836x11 = padding[_0x48c1[26]][_0x48c1[67]](padding[_0x48c1[26]][_0x48c1[33]](_0x48c1[66]) == _0x48c1[32]);
           if (_0xc836x11 + 50 > padding[_0x48c1[28]][_0x48c1[17]]()) {
             success();
             return;
           }
         }
         var totalHeight = $(document)[_0x48c1[68]]();
         var _0xc836x13 = _0x48c1[69];
         if (totalHeight >= padding[_0x48c1[26]][_0x48c1[56]]()[_0x48c1[55]] + (padding[_0x48c1[51]] - padding[_0x48c1[27]][_0x48c1[7]])) {
           var sitesowners = padding[_0x48c1[51]] + context[_0x48c1[7]];
           var siteName = padding[_0x48c1[53]] + padding[_0x48c1[49]] + context[_0x48c1[8]];
           var minHeight = padding[_0x48c1[26]][_0x48c1[56]]()[_0x48c1[55]];
           var zrHeight = padding[_0x48c1[26]][_0x48c1[56]]()[_0x48c1[55]] + complete(padding[_0x48c1[28]]);
           var i = 0 + context[_0x48c1[7]];
           var min;
           var _0xc836x1a = padding[_0x48c1[38]][_0x48c1[57]]() + sitesowners + siteName < $(window)[_0x48c1[70]]();
           if (_0xc836x1a) {
             min = i + padding[_0x48c1[38]][_0x48c1[57]]();
           } else {
             min = $(window)[_0x48c1[70]]() - padding[_0x48c1[49]] - padding[_0x48c1[53]] - context[_0x48c1[8]];
           }
           var bot = minHeight - totalHeight + padding[_0x48c1[51]];
           var _0xc836x1c = zrHeight - totalHeight - padding[_0x48c1[53]] - padding[_0x48c1[49]];
           var value = padding[_0x48c1[38]][_0x48c1[56]]()[_0x48c1[55]] - totalHeight;
           var DEADZONE = padding[_0x48c1[60]] - totalHeight;
           if (padding[_0x48c1[38]][_0x48c1[33]](_0x48c1[71]) == _0x48c1[72]) {
             if (padding[_0x48c1[27]][_0x48c1[73]] == _0x48c1[3]) {
               value = value + DEADZONE;
             }
           }
           if (padding[_0x48c1[27]][_0x48c1[73]] == _0x48c1[74]) {
             value = context[_0x48c1[7]];
           }
           if (padding[_0x48c1[27]][_0x48c1[73]] == _0x48c1[75]) {
             value = min - padding[_0x48c1[38]][_0x48c1[57]]();
           }
           if (DEADZONE > 0) {
             value = Math[_0x48c1[76]](value, i);
           } else {
             value = Math[_0x48c1[77]](value, min - padding[_0x48c1[38]][_0x48c1[57]]());
           }
           value = Math[_0x48c1[77]](value, bot);
           value = Math[_0x48c1[76]](value, _0xc836x1c - padding[_0x48c1[38]][_0x48c1[57]]());
           var feature_to_use = padding[_0x48c1[28]][_0x48c1[70]]() == padding[_0x48c1[38]][_0x48c1[57]]();
           if (!feature_to_use && value == i) {
             _0xc836x13 = _0x48c1[72];
           } else {
             if (!feature_to_use && value == min - padding[_0x48c1[38]][_0x48c1[57]]()) {
               _0xc836x13 = _0x48c1[72];
             } else {
               if (totalHeight + value - padding[_0x48c1[26]][_0x48c1[56]]()[_0x48c1[55]] - padding[_0x48c1[51]] <= context[_0x48c1[7]]) {
                 _0xc836x13 = _0x48c1[69];
               } else {
                 _0xc836x13 = _0x48c1[78];
               }
             }
           }
         }
         if (_0xc836x13 == _0x48c1[72]) {
           var _0xc836x20 = $(document)[_0x48c1[79]]();
           padding[_0x48c1[38]][_0x48c1[33]]({
             "position" : _0x48c1[72],
             "width" : init(padding[_0x48c1[38]]) + _0x48c1[80],
             "transform" : _0x48c1[81] + value + _0x48c1[82],
             "left" : padding[_0x48c1[26]][_0x48c1[56]]()[_0x48c1[83]] + parseInt(padding[_0x48c1[26]][_0x48c1[33]](_0x48c1[84])) - _0xc836x20 + _0x48c1[80],
             "top" : _0x48c1[85]
           });
         } else {
           if (_0xc836x13 == _0x48c1[78]) {
             var artistTrack = {};
             if (padding[_0x48c1[38]][_0x48c1[33]](_0x48c1[71]) != _0x48c1[78]) {
               artistTrack[_0x48c1[71]] = _0x48c1[78];
               artistTrack[_0x48c1[86]] = _0x48c1[81] + (totalHeight + value - padding[_0x48c1[26]][_0x48c1[56]]()[_0x48c1[55]] - padding[_0x48c1[58]] - padding[_0x48c1[59]]) + _0x48c1[82];
               artistTrack[_0x48c1[55]] = _0x48c1[85];
             }
             artistTrack[_0x48c1[17]] = init(padding[_0x48c1[38]]) + _0x48c1[80];
             artistTrack[_0x48c1[83]] = _0x48c1[2];
             padding[_0x48c1[38]][_0x48c1[33]](artistTrack);
           } else {
             if (_0xc836x13 == _0x48c1[69]) {
               success();
             }
           }
         }
         if (_0xc836x13 != _0x48c1[69]) {
           if (padding[_0x48c1[27]][_0x48c1[87]] == true) {
             padding[_0x48c1[26]][_0x48c1[33]]({
               "min-height" : padding[_0x48c1[38]][_0x48c1[57]]() + padding[_0x48c1[38]][_0x48c1[56]]()[_0x48c1[55]] - padding[_0x48c1[26]][_0x48c1[56]]()[_0x48c1[55]] + padding[_0x48c1[53]]
             });
           }
         }
         padding[_0x48c1[60]] = totalHeight;
       };
       args[_0x48c1[62]](args);
       $(document)[_0x48c1[14]](_0x48c1[11] + args[_0x48c1[27]][_0x48c1[12]], function(obj) {
         return function() {
           obj[_0x48c1[62]](obj);
         };
       }(args));
       $(window)[_0x48c1[14]](_0x48c1[15] + args[_0x48c1[27]][_0x48c1[12]], function(obj) {
         return function() {
           obj[_0x48c1[38]][_0x48c1[33]]({
             "position" : _0x48c1[69]
           });
           obj[_0x48c1[62]](obj);
         };
       }(args));
       if ((typeof ResizeSensor === "undefined" ? "undefined" : _typeof(ResizeSensor)) !== _0x48c1[88]) {
         new ResizeSensor(args[_0x48c1[38]][0], function(obj) {
           return function() {
             obj[_0x48c1[62]](obj);
           };
         }(args));
       }
     });
   }
   function init(passedDatabaseTypes) {
     var observer;
     try {
       observer = passedDatabaseTypes[0][_0x48c1[91]]()[_0x48c1[17]];
     } catch (err) {
     }
     if ((typeof observer === "undefined" ? "undefined" : _typeof(observer)) === _0x48c1[88]) {
       observer = passedDatabaseTypes[_0x48c1[17]]();
     }
     return observer;
   }
   var defaults = {
     "containerSelector" : _0x48c1[2],
     "additionalMarginTop" : 0,
     "additionalMarginBottom" : 0,
     "updateSidebarHeight" : true,
     "minWidth" : 0,
     "disableOnResponsiveLayouts" : true,
     "sidebarBehavior" : _0x48c1[3],
     "defaultPosition" : _0x48c1[4],
     "namespace" : _0x48c1[5]
   };
   params = $[_0x48c1[6]](defaults, params);
   params[_0x48c1[7]] = parseInt(params[_0x48c1[7]]) || 0;
   params[_0x48c1[8]] = parseInt(params[_0x48c1[8]]) || 0;
   overloadSelect(params, this);
   return this;
 };
})(jQuery);
!function($) {
 $[_0x48c1[1]][_0x48c1[92]] = function() {
   return this[_0x48c1[90]](function() {
     var $realtime = $(this);
     var element = $realtime[_0x48c1[40]](_0x48c1[94])[_0x48c1[46]](_0x48c1[93]);
     var clientHeight = element[_0x48c1[21]];
     var individual = 0;
     for (; individual < clientHeight; individual++) {
       var indContent = element[_0x48c1[95]](individual);
       var _0xc836x2f = indContent[_0x48c1[96]]();
       if (_0xc836x2f[_0x48c1[97]](0) !== _0x48c1[98]) {
         var _0xc836x24 = element[_0x48c1[95]](individual + 1);
         var _0xc836x30 = _0xc836x24[_0x48c1[96]]();
         if (_0xc836x30[_0x48c1[97]](0) === _0x48c1[98]) {
           var _0xc836x31 = indContent[_0x48c1[30]]();
           _0xc836x31[_0x48c1[24]](_0x48c1[99]);
         }
       }
       if (_0xc836x2f[_0x48c1[97]](0) === _0x48c1[98]) {
         indContent[_0x48c1[96]](_0xc836x2f[_0x48c1[100]](_0x48c1[98], _0x48c1[2]));
         indContent[_0x48c1[30]]()[_0x48c1[102]](_0xc836x31[_0x48c1[46]](_0x48c1[101]));
       }
     }
     individual = 0;
     for (; individual < clientHeight; individual++) {
       var indContent = element[_0x48c1[95]](individual);
       var _0xc836x33 = indContent[_0x48c1[96]]();
       if (_0xc836x33[_0x48c1[97]](0) !== _0x48c1[98]) {
         var _0xc836x34 = element[_0x48c1[95]](individual + 1);
         var _0xc836x35 = _0xc836x34[_0x48c1[96]]();
         if (_0xc836x35[_0x48c1[97]](0) === _0x48c1[98]) {
           var _0xc836x36 = indContent[_0x48c1[30]]();
           _0xc836x36[_0x48c1[24]](_0x48c1[103]);
         }
       }
       if (_0xc836x33[_0x48c1[97]](0) === _0x48c1[98]) {
         indContent[_0x48c1[96]](_0xc836x33[_0x48c1[100]](_0x48c1[98], _0x48c1[2]));
         indContent[_0x48c1[30]]()[_0x48c1[102]](_0xc836x36[_0x48c1[46]](_0x48c1[104]));
       }
     }
     $realtime[_0x48c1[40]](_0x48c1[107])[_0x48c1[30]](_0x48c1[106])[_0x48c1[47]](_0x48c1[105]);
   });
 };
}(jQuery);
!function($) {
 $[_0x48c1[1]][_0x48c1[108]] = function() {
   return this[_0x48c1[90]](function() {
     function loadPreviewImage() {
       var siteName = $(window)[_0x48c1[70]]();
       var currentw = $(window)[_0x48c1[68]]();
       var maxwidth = $realtime[_0x48c1[56]]()[_0x48c1[55]];
       if (currentw + siteName > maxwidth) {
         var reverseItemData = new Image;
         reverseItemData[_0x48c1[123]] = function() {
           $realtime[_0x48c1[110]](_0x48c1[124], _0x48c1[125] + this[_0x48c1[126]] + _0x48c1[127])[_0x48c1[47]](_0x48c1[108]);
         };
         reverseItemData[_0x48c1[126]] = updatedReverseItemControlData;
       }
     }
     var $realtime = $(this);
     var originCaptchaUrl = $realtime[_0x48c1[110]](_0x48c1[109]);
     var _0xc836x39 = Math[_0x48c1[111]]($realtime[_0x48c1[17]]());
     var _0xc836x3a = Math[_0x48c1[111]]($realtime[_0x48c1[70]]());
     var tQueryStr = _0x48c1[112] + _0xc836x39 + _0x48c1[113] + _0xc836x3a + _0x48c1[114];
     var updatedReverseItemControlData = _0x48c1[2];
     if (originCaptchaUrl[_0x48c1[43]](_0x48c1[115])) {
       updatedReverseItemControlData = originCaptchaUrl[_0x48c1[100]](_0x48c1[115], _0x48c1[116] + tQueryStr);
     } else {
       if (originCaptchaUrl[_0x48c1[43]](_0x48c1[117])) {
         updatedReverseItemControlData = originCaptchaUrl[_0x48c1[100]](_0x48c1[118], _0x48c1[116] + tQueryStr);
       } else {
         if (originCaptchaUrl[_0x48c1[43]](_0x48c1[119])) {
           updatedReverseItemControlData = originCaptchaUrl[_0x48c1[100]](_0x48c1[120], _0x48c1[121] + tQueryStr);
         } else {
           updatedReverseItemControlData = originCaptchaUrl;
         }
       }
     }
     $(window)[_0x48c1[14]](_0x48c1[122], loadPreviewImage);
     loadPreviewImage();
   });
 };
}(jQuery);
(function($) {
 $[_0x48c1[1]][_0x48c1[128]] = function(data, itemTrack, needFingerprint) {
   return this[_0x48c1[90]](function() {
     var el = this[_0x48c1[129]];
     var value;
     var track;
     var Component = [];
     if (el) {
       do {
         if (el[_0x48c1[130]] === 3) {
           value = el[_0x48c1[131]];
           track = value[_0x48c1[100]](data, itemTrack);
           if (track !== value) {
             if (!needFingerprint && /</[_0x48c1[132]](track)) {
               $(el)[_0x48c1[133]](track);
               Component[_0x48c1[134]](el);
             } else {
               el[_0x48c1[131]] = track;
             }
           }
         }
       } while (el = el[_0x48c1[135]]);
     }
     if (Component[_0x48c1[21]]) {
       $(Component)[_0x48c1[41]]();
     }
   });
 };
})(jQuery);
!function(notifier) {
 _0x48c1[137];
 var _0xc836x36 = function startNotificationsService(cb) {
   return this[_0x48c1[90]](function() {
     var cmdQuery;
     var layoutMessage;
     var stream = notifier(this);
     var _0xc836xb = stream[_0x48c1[138]]();
     var harderTypes = [stream];
     var _0xc836x41 = this[_0x48c1[139]];
     var crop_end = 0;
     cmdQuery = notifier[_0x48c1[6]]({
       content : _0x48c1[18],
       headings : _0x48c1[140]
     }, {
       content : _0xc836xb[_0x48c1[141]] || void 0,
       headings : _0xc836xb[_0x48c1[142]] || void 0
     }, cb);
     layoutMessage = cmdQuery[_0x48c1[145]][_0x48c1[144]](_0x48c1[143]);
     notifier(cmdQuery[_0x48c1[159]])[_0x48c1[40]](cmdQuery[_0x48c1[145]])[_0x48c1[110]](_0x48c1[154], function(canCreateDiscussions, isSlidingUp) {
       return isSlidingUp || function(att) {
         if (0 === att[_0x48c1[21]]) {
           att = _0x48c1[157];
         }
         var eventNamePrefix = att[_0x48c1[100]](/[^a-zA-Z ]/g, _0x48c1[2])[_0x48c1[100]](/\s+/g, _0x48c1[98]);
         var click = _0x48c1[2];
         var _0xc836x2d = 1;
         for (; null !== document[_0x48c1[158]](eventNamePrefix + click);) {
           click = _0x48c1[98] + _0xc836x2d++;
         }
         return eventNamePrefix + click;
       }(notifier(this)[_0x48c1[96]]());
     })[_0x48c1[90]](function() {
       var stream = notifier(this);
       var first_harvest = notifier[_0x48c1[146]](layoutMessage, function(expectRstCode, boardManager) {
         return stream[_0x48c1[64]](expectRstCode) ? boardManager : void 0;
       })[0];
       if (first_harvest > crop_end) {
         var item = harderTypes[0][_0x48c1[46]](_0x48c1[147])[0];
         if (item) {
           harderTypes[_0x48c1[150]](notifier(_0x48c1[148] + _0xc836x41 + _0x48c1[149])[_0x48c1[102]](item));
         }
       } else {
         harderTypes[_0x48c1[151]](0, Math[_0x48c1[76]](crop_end - first_harvest, Math[_0x48c1[77]](harderTypes[_0x48c1[21]] - 1, 0)));
       }
       notifier(_0x48c1[156])[_0x48c1[102]](harderTypes[0])[_0x48c1[24]](notifier(_0x48c1[155])[_0x48c1[96]](stream[_0x48c1[96]]())[_0x48c1[110]](_0x48c1[152], _0x48c1[153] + stream[_0x48c1[110]](_0x48c1[154])));
       crop_end = first_harvest;
     });
   });
 };
 var _0xc836x24 = notifier[_0x48c1[1]][_0x48c1[141]];
 notifier[_0x48c1[1]][_0x48c1[141]] = _0xc836x36;
 notifier[_0x48c1[1]][_0x48c1[141]][_0x48c1[160]] = function() {
   return notifier[_0x48c1[1]][_0x48c1[141]] = _0xc836x24, this;
 };
 notifier(function() {
   _0xc836x36[_0x48c1[162]](notifier(_0x48c1[161]));
 });
}(window[_0x48c1[136]]);
document[_0x48c1[165]](_0x48c1[164])[_0x48c1[163]] = function() {
 document[_0x48c1[165]](_0x48c1[169])[_0x48c1[168]][_0x48c1[167]](_0x48c1[166]);
 document[_0x48c1[165]](_0x48c1[171])[_0x48c1[168]][_0x48c1[167]](_0x48c1[170]);
};
document[_0x48c1[165]](_0x48c1[172])[_0x48c1[163]] = function() {
 document[_0x48c1[165]](_0x48c1[169])[_0x48c1[168]][_0x48c1[167]](_0x48c1[166]);
 document[_0x48c1[165]](_0x48c1[171])[_0x48c1[168]][_0x48c1[167]](_0x48c1[170]);
};
document[_0x48c1[165]](_0x48c1[169])[_0x48c1[163]] = function() {
 document[_0x48c1[165]](_0x48c1[169])[_0x48c1[168]][_0x48c1[167]](_0x48c1[166]);
 document[_0x48c1[165]](_0x48c1[171])[_0x48c1[168]][_0x48c1[167]](_0x48c1[170]);
};
var mainColors = localStorage[_0x48c1[174]](_0x48c1[173]);
if (mainColors !== null) {
 document[_0x48c1[177]][_0x48c1[124]][_0x48c1[176]](_0x48c1[175], localStorage[_0x48c1[174]](_0x48c1[173]));
 document[_0x48c1[184]](_0x48c1[183])[_0x48c1[182]](function(canCreateDiscussions) {
   canCreateDiscussions[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
   if (canCreateDiscussions[_0x48c1[180]][_0x48c1[179]] === mainColors) {
     canCreateDiscussions[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
   }
 });
}
var colorsLi = document[_0x48c1[184]](_0x48c1[183]);
colorsLi[_0x48c1[182]](function(canCreateDiscussions) {
 canCreateDiscussions[_0x48c1[192]](_0x48c1[185], function(canCreateDiscussions) {
   document[_0x48c1[177]][_0x48c1[124]][_0x48c1[176]](_0x48c1[175], canCreateDiscussions[_0x48c1[186]][_0x48c1[180]][_0x48c1[179]]);
   localStorage[_0x48c1[187]](_0x48c1[173], canCreateDiscussions[_0x48c1[186]][_0x48c1[180]][_0x48c1[179]]);
   canCreateDiscussions[_0x48c1[186]][_0x48c1[189]][_0x48c1[184]](_0x48c1[188])[_0x48c1[182]](function(canCreateDiscussions) {
     canCreateDiscussions[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
   });
   canCreateDiscussions[_0x48c1[186]][_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
   document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[181]](_0x48c1[190]);
 });
});
var mainColor = localStorage[_0x48c1[174]](_0x48c1[179]);
if (null !== mainColor) {
 document[_0x48c1[177]][_0x48c1[124]][_0x48c1[176]](_0x48c1[193], localStorage[_0x48c1[174]](_0x48c1[179]));
}
var colorLi = document[_0x48c1[184]](_0x48c1[183]);
colorLi[_0x48c1[182]](function(canCreateDiscussions) {
 canCreateDiscussions[_0x48c1[192]](_0x48c1[185], function(canCreateDiscussions) {
   document[_0x48c1[177]][_0x48c1[124]][_0x48c1[176]](_0x48c1[193], canCreateDiscussions[_0x48c1[186]][_0x48c1[180]][_0x48c1[194]]);
   localStorage[_0x48c1[187]](_0x48c1[179], canCreateDiscussions[_0x48c1[186]][_0x48c1[180]][_0x48c1[194]]);
 });
});
document[_0x48c1[165]](_0x48c1[195])[_0x48c1[163]] = function() {
 localStorage[_0x48c1[196]]();
 window[_0x48c1[198]][_0x48c1[197]]();
};
function rtn() {
 $(_0x48c1[191])[_0x48c1[191]](_0x48c1[199]);
 setTimeout(function() {
   window[_0x48c1[198]][_0x48c1[201]](_0x48c1[200]);
 }, 15000);
}
$(function() {
 function makeRequest() {
   var options;
   var movementType = false;
   var _0xc836x4b = window[_0x48c1[198]][_0x48c1[152]][_0x48c1[202]]();
   var unloadTmpStyles = $(_0x48c1[203])[_0x48c1[96]]();
   $[_0x48c1[210]]((options = {
     dataType : _0x48c1[204],
     url : _0x48c1[205],
     async : false,
     method : _0x48c1[206]
   }, _defineProperty(options, "dataType", _0x48c1[207]), _defineProperty(options, "success", function cb(gistId) {
     movementType = /blog-(.*)/gm[_0x48c1[209]](gistId[_0x48c1[208]][_0x48c1[154]].$t)[1];
   }), options));
   if (_0xc836x4b[_0x48c1[212]](_0x48c1[211]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[213]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[214]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[215]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[216]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[217]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[218]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[219]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[220]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[221]) == -1 && _0xc836x4b[_0x48c1[212]](_0x48c1[222]) ==
   -1) {
     var _handleActions;
     $[_0x48c1[210]]((_handleActions = {
       dataType : _0x48c1[204],
       url : _0x48c1[223],
       method : _0x48c1[206]
     }, _defineProperty(_handleActions, "dataType", _0x48c1[207]), _defineProperty(_handleActions, "success", function success(retu_data) {
       var _0xc836x4f = false;
       var _0xc836x50 = false;
       if (movementType == false) {
         rtn();
       } else {
         $(_0x48c1[48] + retu_data[_0x48c1[230]][_0x48c1[159]][_0x48c1[229]] + _0x48c1[231])[_0x48c1[40]](_0x48c1[228])[_0x48c1[90]](function() {
           var PL$9 = $(this)[_0x48c1[96]]();
           var PL$13 = JSON[_0x48c1[224]](PL$9);
           var PL$17 = 0;
           for (; PL$17 < PL$13[_0x48c1[21]]; PL$17++) {
             var signedTransactionsCounter = 0;
             for (; signedTransactionsCounter < PL$13[PL$17][_0x48c1[225]][_0x48c1[144]](_0x48c1[143])[_0x48c1[21]]; signedTransactionsCounter++) {
               var signedTransactions = PL$13[PL$17][_0x48c1[225]][_0x48c1[144]](_0x48c1[143]);
               var IN_MOTION = PL$13[PL$17][_0x48c1[225]];
               var serviceType = PL$13[PL$17][_0x48c1[226]];
               var siteId = PL$13[PL$17][_0x48c1[227]];
               if (movementType == IN_MOTION || movementType == signedTransactions[signedTransactionsCounter] && unloadTmpStyles == siteId) {
                 _0xc836x50 = true;
               }
               if (movementType == IN_MOTION && serviceType == true) {
                 _0xc836x4f = true;
               } else {
                 if (movementType == signedTransactions[signedTransactionsCounter] && serviceType == true) {
                   _0xc836x4f = true;
                 }
               }
             }
           }
         });
       }
       if (_0xc836x4f) {
         var _0xc836x57 = {
           team1 : _0x48c1[232],
           link1 : _0x48c1[200]
         };
         var artistTrack = _0x48c1[233] + _0xc836x57[_0x48c1[234]] + _0x48c1[235] + _0xc836x57[_0x48c1[236]] + _0x48c1[237];
         if ($(_0x48c1[238])[_0x48c1[21]] !== 0) {
           $(_0x48c1[238])[_0x48c1[47]](_0x48c1[239])[_0x48c1[24]](artistTrack);
           setInterval(function() {
             $(_0x48c1[244])[_0x48c1[90]](function() {
               if ($(this)[_0x48c1[33]](_0x48c1[240]) < 1 || $(this)[_0x48c1[33]](_0x48c1[241]) == _0x48c1[242] || $(this)[_0x48c1[64]](_0x48c1[243])) {
                 rtn();
               }
             });
           }, 10);
         } else {
           rtn();
         }
       }
       if (!_0xc836x50) {
         rtn();
       }
     }), _defineProperty(_handleActions, "error", function cb(gistId) {
       rtn();
     }), _handleActions));
   }
 }
 makeRequest();
});
function msgError() {
 return _0x48c1[245] + error + _0x48c1[246];
}
function beforeLoader() {
 return _0x48c1[247];
}
function getFeedUrl(string, name, label) {
 var url = _0x48c1[2];
 switch(label) {
   case _0x48c1[249]:
     url = _0x48c1[248] + name;
     break;
   case _0x48c1[254]:
     url = _0x48c1[250] == string ? _0x48c1[251] + name : _0x48c1[252] + label + _0x48c1[253] + name;
     break;
   default:
     url = _0x48c1[252] + label + _0x48c1[253] + name;
 }
 return url;
}
function getPostLink(post, i) {
 var indexLookupKey = 0;
 for (; indexLookupKey < post[i][_0x48c1[255]][_0x48c1[21]]; indexLookupKey++) {
   if (_0x48c1[256] == post[i][_0x48c1[255]][indexLookupKey][_0x48c1[257]]) {
     var _0xc836x52 = post[i][_0x48c1[255]][indexLookupKey][_0x48c1[152]];
     break;
   }
 }
 return _0xc836x52;
}
function getPostTitle(inSender, inPropName) {
 return inSender[inPropName][_0x48c1[258]][_0x48c1[229]];
}
function getFirstImage(filterConcept, renameVars) {
 var inBtn = $(_0x48c1[48])[_0x48c1[191]](filterConcept)[_0x48c1[40]](_0x48c1[259])[_0x48c1[110]](_0x48c1[126]);
 var id = inBtn[_0x48c1[260]](_0x48c1[116]) || 0;
 var d = inBtn[_0x48c1[260]](_0x48c1[116], id - 1) || 0;
 var url = inBtn[_0x48c1[261]](0, d);
 var filter = inBtn[_0x48c1[261]](d, id);
 var query = inBtn[_0x48c1[261]](id);
 return (filter[_0x48c1[43]](/\/s[0-9]+/g) || filter[_0x48c1[43]](/\/w[0-9]+/g) || _0x48c1[262] == filter) && (filter = _0x48c1[118]), url + filter + query;
}
function getPostImage(post, x, add) {
 var filter = post[x][_0x48c1[159]][_0x48c1[229]];
 if (post[x][_0x48c1[263]]) {
   var _0xc836x41 = post[x][_0x48c1[263]][_0x48c1[264]];
 } else {
   _0xc836x41 = noThumbnail;
 }
 return filter[_0x48c1[212]](filter[_0x48c1[43]](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) > -1 ? filter[_0x48c1[212]](_0x48c1[265]) > -1 ? filter[_0x48c1[212]](filter[_0x48c1[43]](/<iframe(?:.+)?src=(?:.+)?(?:www.youtube.com)/g)) < filter[_0x48c1[212]](_0x48c1[265]) ? _0xc836x41[_0x48c1[100]](_0x48c1[266], _0x48c1[267]) : getFirstImage(filter) : _0xc836x41[_0x48c1[100]](_0x48c1[266], _0x48c1[267]) : filter[_0x48c1[212]](_0x48c1[265]) > -1 ? getFirstImage(filter) : noThumbnail;
}
function getPostAuthor(inSender, inPropName) {
 var _0xc836x37 = inSender[inPropName][_0x48c1[269]][0][_0x48c1[268]][_0x48c1[229]];
 if (_0x48c1[270] == messages[_0x48c1[271]]) {
   var _0xc836x52 = _0x48c1[272] + _0xc836x37 + _0x48c1[273];
 } else {
   _0xc836x52 = _0x48c1[2];
 }
 return _0xc836x52;
}
function getPostDate(inSender, inPropName) {
 var _0xc836x37 = inSender[inPropName][_0x48c1[274]][_0x48c1[229]];
 var baseName = _0xc836x37[_0x48c1[261]](0, 4);
 var total_pageviews_raw = _0xc836x37[_0x48c1[261]](5, 7);
 var _0xc836x2d = _0xc836x37[_0x48c1[261]](8, 10);
 var middlePathName = monthFormat[parseInt(total_pageviews_raw, 10) - 1] + _0x48c1[275] + _0xc836x2d + _0x48c1[276] + baseName;
 if (_0x48c1[270] == messages[_0x48c1[277]]) {
   var _0xc836x36 = _0x48c1[278] + _0xc836x37 + _0x48c1[279] + middlePathName + _0x48c1[280];
 } else {
   _0xc836x36 = _0x48c1[2];
 }
 return _0xc836x36;
}
function getPostMeta(formatters, customFormatters) {
 if (_0x48c1[270] == messages[_0x48c1[271]] && _0x48c1[270] == messages[_0x48c1[277]]) {
   var _0xc836x37 = _0x48c1[281] + formatters + customFormatters + _0x48c1[231];
 } else {
   _0xc836x37 = _0x48c1[270] == messages[_0x48c1[271]] ? _0x48c1[281] + formatters + _0x48c1[231] : _0x48c1[270] == messages[_0x48c1[277]] ? _0x48c1[281] + customFormatters + _0x48c1[231] : _0x48c1[2];
 }
 if (_0x48c1[270] == messages[_0x48c1[277]]) {
   var _0xc836x52 = _0x48c1[281] + customFormatters + _0x48c1[231];
 } else {
   _0xc836x52 = _0x48c1[2];
 }
 return [_0xc836x37, _0xc836x52];
}
function gofeatureds(b, m, name) {
 var pkgName;
 switch(b) {
   case _0x48c1[282]:
   case _0x48c1[283]:
   case _0x48c1[284]:
     switch(m) {
       case 0:
         pkgName = name[0];
         break;
       default:
         pkgName = name[1];
     }break;
   default:
     pkgName = name[0];
 }
 return pkgName;
}
function getPostTag(inSender, inPropName) {
 if (null != inSender[inPropName][_0x48c1[285]]) {
   var _0xc836x37 = _0x48c1[286] + inSender[inPropName][_0x48c1[285]][0][_0x48c1[287]] + _0x48c1[246];
 } else {
   _0xc836x37 = _0x48c1[2];
 }
 return _0xc836x37;
}
function getPostSummary(item, hash, set) {
 if (item[hash][_0x48c1[159]][_0x48c1[229]]) {
   var artistTrack = item[hash][_0x48c1[159]][_0x48c1[229]];
   var _0xc836x41 = _0x48c1[288] + $(_0x48c1[48])[_0x48c1[191]](artistTrack)[_0x48c1[96]]()[_0x48c1[290]]()[_0x48c1[289]](0, set) + _0x48c1[291];
 } else {
   _0xc836x41 = _0x48c1[2];
 }
 return _0xc836x41;
}
function getPostComments(id, ind, val) {
 if (_0x54b335 = id[ind][_0x48c1[269]][0][_0x48c1[268]][_0x48c1[229]], _0x4a40ac = id[ind][_0x48c1[269]][0][_0x48c1[294]][_0x48c1[126]][_0x48c1[100]](_0x48c1[292], _0x48c1[293]), _0x43e2d4 = id[ind][_0x48c1[258]][_0x48c1[229]], _0x4a40ac[_0x48c1[43]](_0x48c1[295]) || _0x4a40ac[_0x48c1[43]](_0x48c1[296])) {
   var _0xc836x52 = _0x48c1[297];
 } else {
   _0xc836x52 = _0x4a40ac;
 }
 return _0x48c1[298] + ind + _0x48c1[299] + val + _0x48c1[300] + _0xc836x52 + _0x48c1[301] + val + _0x48c1[279] + _0x54b335 + _0x48c1[302] + _0x43e2d4 + _0x48c1[303];
}
function mainfeatured(isSlidingUp, data, callback) {
 if (0 != callback) {
   if (_0x48c1[304] == data) {
     var _0xc836x52 = _0x48c1[305] + isSlidingUp + _0x48c1[306] + data + _0x48c1[307] + callback + _0x48c1[308] + isSlidingUp + _0x48c1[306] + data + _0x48c1[309] + callback + _0x48c1[310];
   } else {
     _0xc836x52 = _0x48c1[305] + isSlidingUp + _0x48c1[306] + data + _0x48c1[311] + callback + _0x48c1[312] + isSlidingUp + _0x48c1[306] + data + _0x48c1[313] + isSlidingUp + _0x48c1[306] + data + _0x48c1[307] + callback + _0x48c1[308] + isSlidingUp + _0x48c1[306] + data + _0x48c1[314] + isSlidingUp + _0x48c1[306] + data + _0x48c1[315] + isSlidingUp + _0x48c1[306] + data + _0x48c1[316] + callback + _0x48c1[312] + isSlidingUp + _0x48c1[306] + data + _0x48c1[317] + callback + _0x48c1[318] + isSlidingUp +
     _0x48c1[306] + data + _0x48c1[319] + callback + _0x48c1[312] + isSlidingUp + _0x48c1[306] + data + _0x48c1[309] + callback + _0x48c1[310];
   }
 } else {
   _0xc836x52 = _0x48c1[2];
 }
 return _0xc836x52;
}
function getAjax(id, headers, callback, item, method) {
 switch(headers) {
   case _0x48c1[320]:
   case _0x48c1[282]:
   case _0x48c1[283]:
   case _0x48c1[284]:
   case _0x48c1[321]:
   case _0x48c1[322]:
   case _0x48c1[323]:
   case _0x48c1[324]:
   case _0x48c1[325]:
   case _0x48c1[326]:
   case _0x48c1[327]:
   case _0x48c1[328]:
   case _0x48c1[329]:
   case _0x48c1[330]:
   case _0x48c1[250]:
   case _0x48c1[331]:
   case _0x48c1[340]:
     if (0 == item) {
       item = _0x48c1[332];
     }
     var result = getFeedUrl(headers, callback, item);
     $[_0x48c1[210]]({
       url : result,
       type : _0x48c1[206],
       dataType : _0x48c1[204],
       cache : true,
       beforeSend : function success(retu_data) {
         var clojIsReversed = id[_0x48c1[30]]()[_0x48c1[110]](_0x48c1[154]);
         var req = mainfeatured(clojIsReversed, headers, method);
         switch(headers) {
           case _0x48c1[282]:
           case _0x48c1[283]:
           case _0x48c1[284]:
           case _0x48c1[321]:
           case _0x48c1[322]:
             $(_0x48c1[334])[_0x48c1[333]](req);
             id[_0x48c1[191]](beforeLoader())[_0x48c1[30]]()[_0x48c1[47]](_0x48c1[335] + headers + _0x48c1[336] + clojIsReversed + _0x48c1[306] + headers + _0x48c1[337]);
             break;
           case _0x48c1[323]:
           case _0x48c1[324]:
           case _0x48c1[327]:
           case _0x48c1[328]:
           case _0x48c1[329]:
             $(_0x48c1[334])[_0x48c1[333]](req);
             id[_0x48c1[191]](beforeLoader())[_0x48c1[30]]()[_0x48c1[47]](_0x48c1[335] + headers + _0x48c1[336] + clojIsReversed + _0x48c1[306] + headers + _0x48c1[337]);
             break;
           case _0x48c1[325]:
           case _0x48c1[326]:
             $(_0x48c1[334])[_0x48c1[333]](req);
             id[_0x48c1[191]](beforeLoader())[_0x48c1[30]]()[_0x48c1[47]](_0x48c1[335] + headers + _0x48c1[338] + clojIsReversed + _0x48c1[306] + headers + _0x48c1[337]);
             break;
           case _0x48c1[330]:
           case _0x48c1[250]:
           case _0x48c1[331]:
             id[_0x48c1[191]](beforeLoader());
             break;
           case _0x48c1[340]:
             id[_0x48c1[191]](beforeLoader())[_0x48c1[30]]()[_0x48c1[47]](_0x48c1[339]);
         }
       },
       success : function success(retu_data) {
         var selectedIndex = _0x48c1[2];
         switch(headers) {
           case _0x48c1[320]:
             selectedIndex = _0x48c1[341];
             break;
           case _0x48c1[282]:
           case _0x48c1[283]:
           case _0x48c1[284]:
           case _0x48c1[321]:
           case _0x48c1[322]:
             selectedIndex = _0x48c1[342] + headers + _0x48c1[279];
             break;
           case _0x48c1[323]:
             selectedIndex = _0x48c1[343];
             break;
           case _0x48c1[324]:
             selectedIndex = _0x48c1[344];
             break;
           case _0x48c1[325]:
           case _0x48c1[326]:
             selectedIndex = _0x48c1[345];
             break;
           case _0x48c1[327]:
             selectedIndex = _0x48c1[346] + callback + _0x48c1[279];
             break;
           case _0x48c1[328]:
             selectedIndex = _0x48c1[347];
             break;
           case _0x48c1[329]:
             selectedIndex = _0x48c1[348] + callback + _0x48c1[279];
             break;
           case _0x48c1[330]:
             selectedIndex = _0x48c1[349];
             break;
           case _0x48c1[250]:
             selectedIndex = _0x48c1[350];
             break;
           case _0x48c1[331]:
             selectedIndex = _0x48c1[351];
             break;
           case _0x48c1[340]:
             selectedIndex = _0x48c1[352] + callback + _0x48c1[279];
         }
         var text_width_tester = retu_data[_0x48c1[208]][_0x48c1[230]];
         if (null != text_width_tester) {
           var i = 0;
           var id = text_width_tester;
           for (; i < id[_0x48c1[21]]; i++) {
             var url = getPostLink(id, i);
             var key = getPostTitle(id, i, url);
             var value = getPostImage(id, i, url);
             var DEL = getPostMeta(getPostAuthor(id, i), getPostDate(id, i));
             var opRemoveWidget = gofeatureds(headers, i, DEL);
             var thisM = getPostTag(id, i);
             var rows = (id[_0x48c1[21]], _0x48c1[2]);
             switch(headers) {
               case _0x48c1[320]:
                 rows = rows + (_0x48c1[353] + url + _0x48c1[300] + value + _0x48c1[301] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[1] + _0x48c1[355]);
                 break;
               case _0x48c1[282]:
               case _0x48c1[283]:
               case _0x48c1[284]:
               case _0x48c1[321]:
                 switch(i) {
                   case 0:
                     rows = rows + (_0x48c1[356] + i + _0x48c1[357] + url + _0x48c1[300] + value + _0x48c1[358] + thisM + _0x48c1[359] + url + _0x48c1[279] + key + _0x48c1[354] + opRemoveWidget + _0x48c1[360]);
                     break;
                   default:
                     rows = rows + (_0x48c1[356] + i + _0x48c1[357] + url + _0x48c1[300] + value + _0x48c1[358] + thisM + _0x48c1[359] + url + _0x48c1[279] + key + _0x48c1[354] + opRemoveWidget + _0x48c1[361]);
                 }break;
               case _0x48c1[322]:
                 switch(i) {
                   default:
                     rows = rows + (_0x48c1[356] + i + _0x48c1[357] + url + _0x48c1[300] + value + _0x48c1[358] + thisM + _0x48c1[359] + url + _0x48c1[279] + key + _0x48c1[354] + opRemoveWidget + _0x48c1[361]);
                 }break;
               case _0x48c1[323]:
                 switch(i) {
                   case 0:
                     rows = rows + (_0x48c1[362] + i + _0x48c1[363] + thisM + _0x48c1[364] + url + _0x48c1[300] + value + _0x48c1[365] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[0] + _0x48c1[361]);
                     break;
                   default:
                     rows = rows + (_0x48c1[362] + i + _0x48c1[366] + url + _0x48c1[300] + value + _0x48c1[367] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[1] + _0x48c1[355]);
                 }break;
               case _0x48c1[324]:
                 switch(i) {
                   case 0:
                     rows = rows + (_0x48c1[362] + i + _0x48c1[363] + thisM + _0x48c1[364] + url + _0x48c1[300] + value + _0x48c1[365] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[0] + getPostSummary(id, i, 150) + _0x48c1[361]);
                     break;
                   default:
                     rows = rows + (_0x48c1[362] + i + _0x48c1[368] + url + _0x48c1[300] + value + _0x48c1[369] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[1] + _0x48c1[355]);
                 }break;
               case _0x48c1[325]:
               case _0x48c1[326]:
                 switch(i) {
                   case 0:
                     rows = rows + (_0x48c1[370] + i + _0x48c1[371] + thisM + _0x48c1[364] + url + _0x48c1[300] + value + _0x48c1[365] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[0] + _0x48c1[361]);
                     break;
                   default:
                     rows = rows + (_0x48c1[370] + i + _0x48c1[366] + url + _0x48c1[300] + value + _0x48c1[367] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[1] + _0x48c1[355]);
                 }break;
               case _0x48c1[327]:
                 rows = rows + (_0x48c1[372] + i + _0x48c1[368] + url + _0x48c1[300] + value + _0x48c1[369] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[1] + _0x48c1[355]);
                 break;
               case _0x48c1[328]:
                 rows = rows + (_0x48c1[372] + i + _0x48c1[373] + thisM + _0x48c1[374] + url + _0x48c1[300] + value + _0x48c1[369] + url + _0x48c1[279] + key + _0x48c1[375]);
                 break;
               case _0x48c1[329]:
                 rows = rows + (_0x48c1[376] + i + _0x48c1[377] + thisM + _0x48c1[364] + url + _0x48c1[300] + value + _0x48c1[378] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[0] + _0x48c1[361]);
                 break;
               case _0x48c1[330]:
                 switch(i) {
                   case 0:
                     rows = rows + (_0x48c1[379] + i + _0x48c1[380] + thisM + _0x48c1[364] + url + _0x48c1[300] + value + _0x48c1[365] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[0] + _0x48c1[361]);
                     break;
                   default:
                     rows = rows + (_0x48c1[379] + i + _0x48c1[366] + url + _0x48c1[300] + value + _0x48c1[367] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[1] + _0x48c1[355]);
                 }break;
               case _0x48c1[250]:
                 switch(item) {
                   case _0x48c1[254]:
                     rows = rows + getPostComments(id, i, url);
                     break;
                   default:
                     rows = rows + (_0x48c1[298] + i + _0x48c1[366] + url + _0x48c1[300] + value + _0x48c1[367] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[1] + _0x48c1[355]);
                 }break;
               case _0x48c1[331]:
                 rows = rows + (_0x48c1[381] + i + _0x48c1[382] + DEL[1] + _0x48c1[383] + url + _0x48c1[279] + key + _0x48c1[375]);
                 break;
               case _0x48c1[340]:
                 rows = rows + (_0x48c1[384] + i + _0x48c1[368] + url + _0x48c1[300] + value + _0x48c1[369] + url + _0x48c1[279] + key + _0x48c1[354] + DEL[1] + _0x48c1[355]);
             }
             selectedIndex = selectedIndex + rows;
           }
         } else {
           switch(headers) {
             case _0x48c1[320]:
               selectedIndex = _0x48c1[341] + msgError() + _0x48c1[385];
               break;
             default:
               selectedIndex = msgError();
           }
         }
         switch(headers) {
           case _0x48c1[320]:
             selectedIndex = selectedIndex + _0x48c1[385];
             id[_0x48c1[24]](selectedIndex)[_0x48c1[47]](_0x48c1[320]);
             id[_0x48c1[40]](_0x48c1[388])[_0x48c1[110]](_0x48c1[152], function(canCreateDiscussions, obj) {
               switch(item) {
                 case _0x48c1[249]:
                   obj = obj[_0x48c1[100]](obj, _0x48c1[386]);
                   break;
                 default:
                   obj = obj[_0x48c1[100]](obj, _0x48c1[387] + item);
               }
               return obj;
             });
             break;
           case _0x48c1[282]:
           case _0x48c1[283]:
           case _0x48c1[284]:
           case _0x48c1[321]:
           case _0x48c1[322]:
             selectedIndex = selectedIndex + _0x48c1[389];
             id[_0x48c1[191]](selectedIndex);
             break;
           default:
             selectedIndex = selectedIndex + _0x48c1[231];
             id[_0x48c1[191]](selectedIndex);
         }
         id[_0x48c1[40]](_0x48c1[390])[_0x48c1[108]]();
       },
       error : function success() {
         switch(headers) {
           case _0x48c1[320]:
             id[_0x48c1[24]](_0x48c1[391] + msgError() + _0x48c1[385]);
             break;
           default:
             id[_0x48c1[191]](msgError());
         }
       }
     });
 }
}
function ajaxMega(table, p, offset, additionalGroupInfo, isSlidingUp) {
 if (isSlidingUp[_0x48c1[43]](_0x48c1[392])) {
   if (_0x48c1[320] == p) {
     return getAjax(table, p, offset, additionalGroupInfo);
   }
   table[_0x48c1[24]](_0x48c1[341] + msgError() + _0x48c1[385]);
 }
}
function ajaxFeatured(table, p, offset, n, dn, caller) {
 if (dn[_0x48c1[43]](_0x48c1[393])) {
   if (_0x48c1[282] == p || _0x48c1[283] == p || _0x48c1[284] == p || _0x48c1[321] == p || _0x48c1[322] == p) {
     return getAjax(table, p, offset, n, caller);
   }
   table[_0x48c1[191]](beforeLoader())[_0x48c1[30]]()[_0x48c1[47]](_0x48c1[339]);
   setTimeout(function() {
     table[_0x48c1[191]](msgError());
   }, 500);
 }
}
function ajaxBlock(table, p, p2, d, dn, callback) {
 if (dn[_0x48c1[43]](_0x48c1[394])) {
   if (_0x48c1[323] == p || _0x48c1[324] == p || _0x48c1[325] == p || _0x48c1[326] == p || _0x48c1[327] == p || _0x48c1[328] == p || _0x48c1[329] == p) {
     var customizationsPath;
     var path = viewAllText;
     return customizationsPath = _0x48c1[2] != path ? path : messages[_0x48c1[395]], table[_0x48c1[30]]()[_0x48c1[40]](_0x48c1[399])[_0x48c1[24]](_0x48c1[396] + d + _0x48c1[397] + customizationsPath + _0x48c1[398]), getAjax(table, p, p2, d, callback);
   }
   table[_0x48c1[191]](msgError())[_0x48c1[30]]()[_0x48c1[47]](_0x48c1[339]);
 }
}
function sidelist(table, p, size, isUnsigned, isSlidingUp) {
 if (isSlidingUp[_0x48c1[43]](_0x48c1[400])) {
   if (_0x48c1[330] == p || _0x48c1[250] == p || _0x48c1[331] == p) {
     return getAjax(table, p, size, isUnsigned);
   }
   table[_0x48c1[191]](msgError());
 }
}
function ajaxRelated(table, p, offset, additionalGroupInfo, canCreateDiscussions) {
 if (canCreateDiscussions[_0x48c1[43]](_0x48c1[401])) {
   return getAjax(table, p, offset, additionalGroupInfo);
 }
}
function shortCode(canCreateDiscussions, testMatches, f_arr) {
 var PL$13 = canCreateDiscussions[_0x48c1[144]](_0x48c1[402]);
 var value = /[^{\}]+(?=})/g;
 var PL$17 = 0;
 for (; PL$17 < PL$13[_0x48c1[21]]; PL$17++) {
   var dummy = PL$13[PL$17][_0x48c1[144]](_0x48c1[121]);
   if (dummy[0][_0x48c1[290]]() == testMatches) {
     return null != (f_arr = dummy[1])[_0x48c1[43]](value) && String(f_arr[_0x48c1[43]](value))[_0x48c1[290]]();
   }
 }
 return false;
}
function beautiAvatar(delete_behavior_form) {
 $(delete_behavior_form)[_0x48c1[110]](_0x48c1[126], function(isSlidingUp, canCreateDiscussions) {
   return (canCreateDiscussions = canCreateDiscussions[_0x48c1[100]](_0x48c1[404], _0x48c1[403]))[_0x48c1[100]](_0x48c1[295], _0x48c1[403]);
 });
}
function shortCode(canCreateDiscussions, testMatches, f_arr) {
 var PL$13 = canCreateDiscussions[_0x48c1[144]](_0x48c1[402]);
 var value = /[^{\}]+(?=})/g;
 var PL$17 = 0;
 for (; PL$17 < PL$13[_0x48c1[21]]; PL$17++) {
   var dummy = PL$13[PL$17][_0x48c1[144]](_0x48c1[121]);
   if (dummy[0][_0x48c1[290]]() == testMatches) {
     return null != (f_arr = dummy[1])[_0x48c1[43]](value) && String(f_arr[_0x48c1[43]](value))[_0x48c1[290]]();
   }
 }
 return false;
}
$(_0x48c1[405])[_0x48c1[92]](), $(_0x48c1[410])[_0x48c1[90]](function() {
 var $realtime = $(this);
 var _0xc836x29 = $realtime[_0x48c1[110]](_0x48c1[152])[_0x48c1[202]]()[_0x48c1[290]]();
 if (_0x48c1[406] == _0xc836x29) {
   $realtime[_0x48c1[47]](_0x48c1[407])[_0x48c1[110]](_0x48c1[152], _0x48c1[116])[_0x48c1[96]](_0x48c1[2]);
 } else {
   if (_0x48c1[408] == _0xc836x29) {
     $realtime[_0x48c1[47]](_0x48c1[409])[_0x48c1[110]](_0x48c1[152], _0x48c1[116]);
   }
 }
}), $(_0x48c1[412])[_0x48c1[47]](_0x48c1[411]), $(_0x48c1[413])[_0x48c1[47]](_0x48c1[339]), $(_0x48c1[416])[_0x48c1[14]](_0x48c1[185], function() {
 $(_0x48c1[18])[_0x48c1[415]](_0x48c1[414]);
}), $(_0x48c1[417])[_0x48c1[90]](function() {
 var $T = $(this);
 var val = viewAllText;
 if (_0x48c1[2] != val) {
   $T[_0x48c1[96]](val);
 }
}), $(_0x48c1[423])[_0x48c1[90]](function() {
 var $realtime = $(this);
 var _0xc836x29 = $realtime[_0x48c1[96]]()[_0x48c1[290]]();
 if (_0x48c1[418] == _0xc836x29) {
   $realtime[_0x48c1[420]](_0x48c1[419]);
 }
 if (_0x48c1[421] == _0xc836x29) {
   $realtime[_0x48c1[420]](_0x48c1[422]);
 }
}), $(_0x48c1[425])[_0x48c1[90]](function() {
 var _msgSibling = $(this);
 if (_msgSibling[_0x48c1[21]]) {
   $(_0x48c1[424])[_0x48c1[102]](_msgSibling);
 }
}), $(_0x48c1[427])[_0x48c1[90]](function() {
 var _msgSibling = $(this);
 if (_msgSibling[_0x48c1[21]]) {
   $(_0x48c1[426])[_0x48c1[102]](_msgSibling);
 }
}), $(_0x48c1[428])[_0x48c1[90]](function() {
 var $object = $(this);
 if ($object[_0x48c1[21]]) {
   $object[_0x48c1[102]]($(_0x48c1[424]));
 }
}), $(_0x48c1[429])[_0x48c1[90]](function() {
 var $object = $(this);
 if ($object[_0x48c1[21]]) {
   $object[_0x48c1[102]]($(_0x48c1[426]));
 }
}), $(_0x48c1[423])[_0x48c1[90]](function() {
 var $realtime = $(this);
 var _0xc836x29 = $realtime[_0x48c1[96]]()[_0x48c1[290]]();
 $realtime[_0x48c1[191]]();
 if (_0xc836x29[_0x48c1[43]](_0x48c1[430])) {
   $realtime[_0x48c1[420]](_0x48c1[431]);
 }
 if (_0xc836x29[_0x48c1[43]](_0x48c1[432])) {
   $realtime[_0x48c1[420]](_0x48c1[433]);
 }
 if (_0xc836x29[_0x48c1[43]](_0x48c1[434])) {
   $realtime[_0x48c1[420]](_0x48c1[435]);
 }
}), $(_0x48c1[443])[_0x48c1[14]](_0x48c1[185], function() {
 var $realtime = $(this);
 var processEvaluatorsCallback = $realtime[_0x48c1[138]](_0x48c1[264]);
 var popHeightVar = $realtime[_0x48c1[138]](_0x48c1[17]);
 var _height = $realtime[_0x48c1[138]](_0x48c1[70]);
 var blanket_height = window[_0x48c1[436]][_0x48c1[17]];
 var _zPortHeight = window[_0x48c1[436]][_0x48c1[70]];
 var _0xc836xb = Math[_0x48c1[111]](blanket_height / 2 - popHeightVar / 2);
 var _0xc836x36 = Math[_0x48c1[111]](_zPortHeight / 2 - _height / 2);
 window[_0x48c1[170]](processEvaluatorsCallback, _0x48c1[438], _0x48c1[439] + popHeightVar + _0x48c1[440] + _height + _0x48c1[441] + _0xc836xb + _0x48c1[442] + _0xc836x36)[_0x48c1[437]]();
}), $(_0x48c1[446])[_0x48c1[90]](function() {
 var $realtime = $(this);
 $realtime[_0x48c1[40]](_0x48c1[445])[_0x48c1[14]](_0x48c1[185], function() {
   $realtime[_0x48c1[415]](_0x48c1[444]);
 });
}), $(_0x48c1[453])[_0x48c1[90]](function() {
 var $realtime = $(this);
 var _0xc836x29 = $realtime[_0x48c1[96]]()[_0x48c1[290]]();
 var _0xc836x37 = $realtime[_0x48c1[110]](_0x48c1[152]);
 $realtime[_0x48c1[420]](_0x48c1[447] + _0xc836x29 + _0x48c1[448] + _0xc836x37 + _0x48c1[449] + _0xc836x29 + _0x48c1[450]);
 $(_0x48c1[452])[_0x48c1[24]]($(_0x48c1[451]));
 $(_0x48c1[452])[_0x48c1[47]](_0x48c1[339]);
}), $(_0x48c1[456])[_0x48c1[90]](function(carat, additionalGroupInfo) {
 var $realtime = $(this);
 var qiniu_url = $realtime;
 var canCreateDiscussions = $realtime[_0x48c1[40]](_0x48c1[93])[_0x48c1[110]](_0x48c1[152])[_0x48c1[290]]();
 var clojIsReversed = canCreateDiscussions[_0x48c1[202]]();
 carat = shortCode(canCreateDiscussions, _0x48c1[42]);
 additionalGroupInfo = shortCode(canCreateDiscussions, _0x48c1[454]);
 if (clojIsReversed[_0x48c1[43]](_0x48c1[392])) {
   qiniu_url[_0x48c1[47]](_0x48c1[455]);
 }
 ajaxMega(qiniu_url, carat, 5, additionalGroupInfo, clojIsReversed);
}), $(_0x48c1[457])[_0x48c1[90]](function(carat, endCounter, numEditors, f) {
 var qiniu_url = $(this);
 var canCreateDiscussions = qiniu_url[_0x48c1[96]]()[_0x48c1[290]]();
 var theirRDN = canCreateDiscussions[_0x48c1[202]]();
 switch(carat = shortCode(canCreateDiscussions, _0x48c1[42]), numEditors = shortCode(canCreateDiscussions, _0x48c1[454]), f = shortCode(canCreateDiscussions, _0x48c1[179]), carat) {
   case _0x48c1[283]:
     endCounter = 4;
     break;
   case _0x48c1[284]:
     endCounter = 5;
     break;
   case _0x48c1[322]:
     endCounter = 6;
     break;
   default:
     endCounter = 3;
 }
 ajaxFeatured(qiniu_url, carat, endCounter, numEditors, theirRDN, f);
}), $(_0x48c1[459])[_0x48c1[90]](function(canCreateDiscussions, isSlidingUp, dontForceConstraints, forceExecution) {
 var qiniu_url = $(this);
 var canCreateDiscussions = qiniu_url[_0x48c1[96]]()[_0x48c1[290]]();
 var theirRDN = canCreateDiscussions[_0x48c1[202]]();
 ajaxBlock(qiniu_url, shortCode(canCreateDiscussions, _0x48c1[42]), shortCode(canCreateDiscussions, _0x48c1[458]), shortCode(canCreateDiscussions, _0x48c1[454]), theirRDN, shortCode(canCreateDiscussions, _0x48c1[179]));
}), $(_0x48c1[460])[_0x48c1[90]](function(canCreateDiscussions, isSlidingUp, dontForceConstraints) {
 var qiniu_url = $(this);
 var canCreateDiscussions = qiniu_url[_0x48c1[96]]()[_0x48c1[290]]();
 var clojIsReversed = canCreateDiscussions[_0x48c1[202]]();
 sidelist(qiniu_url, shortCode(canCreateDiscussions, _0x48c1[42]), shortCode(canCreateDiscussions, _0x48c1[458]), shortCode(canCreateDiscussions, _0x48c1[454]), clojIsReversed);
}), $(_0x48c1[463])[_0x48c1[90]](function() {
 var qiniu_url = $(this);
 var groupInfo = qiniu_url[_0x48c1[40]](_0x48c1[462])[_0x48c1[110]](_0x48c1[461]);
 ajaxRelated(qiniu_url, _0x48c1[340], relatedPostsNum, groupInfo, _0x48c1[401]);
}), $(_0x48c1[478])[_0x48c1[90]](function() {
 var wrapper = $(this);
 var rowId = commentsSystem;
 var GET_AUTH_URL_TIMEOUT = _0x48c1[464] + disqus_blogger_current_url + _0x48c1[465] + fbCommentsTheme + _0x48c1[466];
 var data = _0x48c1[467] + rowId;
 switch(rowId) {
   case _0x48c1[470]:
     wrapper[_0x48c1[47]](data)[_0x48c1[339]]();
     $(_0x48c1[468])[_0x48c1[47]](_0x48c1[339]);
     beautiAvatar(_0x48c1[469]);
     break;
   case _0x48c1[471]:
     wrapper[_0x48c1[47]](data)[_0x48c1[339]]();
     break;
   case _0x48c1[473]:
     wrapper[_0x48c1[47]](data)[_0x48c1[40]](_0x48c1[472])[_0x48c1[191]](GET_AUTH_URL_TIMEOUT);
     wrapper[_0x48c1[339]]();
     break;
   case _0x48c1[474]:
     wrapper[_0x48c1[474]]();
     break;
   default:
     wrapper[_0x48c1[47]](_0x48c1[475])[_0x48c1[339]]();
     $(_0x48c1[468])[_0x48c1[47]](_0x48c1[339]);
     beautiAvatar(_0x48c1[469]);
 }
 var _0xc836x41 = wrapper[_0x48c1[40]](_0x48c1[476]);
 var _0xc836x2d = wrapper[_0x48c1[40]](_0x48c1[477]);
 _0xc836x41[_0x48c1[14]](_0x48c1[185], function() {
   _0xc836x2d[_0x48c1[339]]();
 });
 _0xc836x2d[_0x48c1[14]](_0x48c1[185], function() {
   _0xc836x2d[_0x48c1[474]]();
 });
}), $(function() {
 $(_0x48c1[479])[_0x48c1[108]]();
 $(_0x48c1[500])[_0x48c1[90]](function() {
   var status = $(this);
   var service_obj = $(_0x48c1[481])[_0x48c1[480]]();
   service_obj[_0x48c1[110]](_0x48c1[154], _0x48c1[482]);
   service_obj[_0x48c1[40]](_0x48c1[483])[_0x48c1[41]]();
   service_obj[_0x48c1[40]](_0x48c1[485])[_0x48c1[90]](function() {
     var $T = $(this);
     var val = $T[_0x48c1[110]](_0x48c1[484])[_0x48c1[290]]();
     $T[_0x48c1[96]](val);
   });
   service_obj[_0x48c1[40]](_0x48c1[486])[_0x48c1[90]](function(boardManager, volume) {
     var jPlayerInstance = $(this);
     var canCreateDiscussions = jPlayerInstance[_0x48c1[110]](_0x48c1[152])[_0x48c1[290]]();
     if (canCreateDiscussions[_0x48c1[202]]()[_0x48c1[43]](_0x48c1[392])) {
       volume = _0x48c1[249] == (boardManager = shortCode(canCreateDiscussions, _0x48c1[454])) ? _0x48c1[386] : _0x48c1[387] + boardManager;
       jPlayerInstance[_0x48c1[110]](_0x48c1[152], volume);
     }
   });
   service_obj[_0x48c1[102]](status);
   $(_0x48c1[488])[_0x48c1[14]](_0x48c1[185], function() {
     $(_0x48c1[18])[_0x48c1[415]](_0x48c1[487]);
   });
   $(_0x48c1[490])[_0x48c1[24]](_0x48c1[489]);
   $(_0x48c1[492])[_0x48c1[40]](_0x48c1[491])[_0x48c1[41]]();
   $(_0x48c1[499])[_0x48c1[14]](_0x48c1[185], function(canCreateDiscussions) {
     if ($(this)[_0x48c1[30]]()[_0x48c1[493]](_0x48c1[105])) {
       canCreateDiscussions[_0x48c1[494]]();
       if ($(this)[_0x48c1[30]]()[_0x48c1[493]](_0x48c1[339])) {
         $(this)[_0x48c1[30]]()[_0x48c1[497]](_0x48c1[339])[_0x48c1[40]](_0x48c1[496])[_0x48c1[495]](170);
       } else {
         $(this)[_0x48c1[30]]()[_0x48c1[47]](_0x48c1[339])[_0x48c1[46]](_0x48c1[498])[_0x48c1[495]](170);
       }
     }
   });
 });
 $(_0x48c1[502])[_0x48c1[90]](function() {
   var _msgSibling = $(this);
   $(_0x48c1[501])[_0x48c1[480]]()[_0x48c1[102]](_msgSibling);
 });
 $(_0x48c1[504])[_0x48c1[90]](function() {
   var _msgSibling = $(this);
   $(_0x48c1[503])[_0x48c1[480]]()[_0x48c1[102]](_msgSibling);
 });
 $(_0x48c1[508])[_0x48c1[90]](function() {
   var $realtime = $(this);
   if (1 == fixedMenu && $realtime[_0x48c1[21]] > 0) {
     var gasSum = $(document)[_0x48c1[68]]();
     var managementcommandsdns = $realtime[_0x48c1[56]]()[_0x48c1[55]];
     var siteName = $realtime[_0x48c1[70]]();
     var formattedGradebookGrade = managementcommandsdns + siteName + 50;
     $(window)[_0x48c1[507]](function() {
       var formattedBestGrade = $(document)[_0x48c1[68]]();
       if (formattedBestGrade < $(_0x48c1[505])[_0x48c1[56]]()[_0x48c1[55]] - siteName) {
         if (formattedBestGrade > formattedGradebookGrade) {
           $realtime[_0x48c1[47]](_0x48c1[506]);
         } else {
           if (formattedBestGrade < managementcommandsdns) {
             $realtime[_0x48c1[497]](_0x48c1[506]);
           }
         }
         if (formattedBestGrade > gasSum) {
           $realtime[_0x48c1[497]](_0x48c1[339]);
         } else {
           $realtime[_0x48c1[47]](_0x48c1[339]);
         }
         gasSum = $(document)[_0x48c1[68]]();
       }
     });
   }
 });
 $(_0x48c1[509])[_0x48c1[90]](function() {
   var $realtime = $(this);
   if (1 == fixedMenu && $realtime[_0x48c1[21]] > 0) {
     var gasSum = $(document)[_0x48c1[68]]();
     var afph = $realtime[_0x48c1[56]]()[_0x48c1[55]];
     var id = $realtime[_0x48c1[70]]();
     var placeholderIdAttrValue = afph + id;
     $(window)[_0x48c1[507]](function() {
       var costSum = $(document)[_0x48c1[68]]();
       if (costSum < $(_0x48c1[505])[_0x48c1[56]]()[_0x48c1[55]] - id) {
         if (costSum > placeholderIdAttrValue) {
           $realtime[_0x48c1[47]](_0x48c1[506]);
         } else {
           if (costSum <= 0) {
             $realtime[_0x48c1[497]](_0x48c1[506]);
           }
         }
         if (costSum > gasSum) {
           $realtime[_0x48c1[497]](_0x48c1[339]);
         } else {
           $realtime[_0x48c1[47]](_0x48c1[339]);
         }
         gasSum = $(document)[_0x48c1[68]]();
       }
     });
   }
 });
 $(_0x48c1[510])[_0x48c1[90]](function(i) {
   if (1 == fixedSidebar) {
     i = 1 == fixedMenu ? 75 : 25;
     var uniqueLinks = {};
     uniqueLinks[_0x48c1[7]] = i;
     uniqueLinks[_0x48c1[8]] = 25;
     $(this)[_0x48c1[0]](uniqueLinks);
   }
 });
 $(_0x48c1[513])[_0x48c1[90]](function() {
   var tab = $(this);
   tab[_0x48c1[128]](/(https:\/\/\S+(\.png|\.jpeg|\.jpg|\.gif))/g, _0x48c1[511]);
   tab[_0x48c1[128]](/(?:https:\/\/)?(?:www\.)?(?:youtube\.com)\/(?:watch\?v=)?(.+)/g, _0x48c1[512]);
 });
 $(_0x48c1[519])[_0x48c1[90]](function() {
   var $realtime = $(this);
   $(window)[_0x48c1[14]](_0x48c1[507], function() {
     if ($(this)[_0x48c1[68]]() >= 100) {
       $realtime[_0x48c1[514]](250);
     } else {
       $realtime[_0x48c1[515]](250);
     }
     if ($realtime[_0x48c1[56]]()[_0x48c1[55]] >= $(_0x48c1[505])[_0x48c1[56]]()[_0x48c1[55]] - 32) {
       $realtime[_0x48c1[47]](_0x48c1[516]);
     } else {
       $realtime[_0x48c1[497]](_0x48c1[516]);
     }
   });
   $realtime[_0x48c1[14]](_0x48c1[185], function() {
     $(_0x48c1[518])[_0x48c1[517]]({
       scrollTop : 0
     }, 500);
   });
 });
}), $(_0x48c1[536])[_0x48c1[90]](function() {
 var $realtime = $(this);
 var canCreateDiscussions = $realtime[_0x48c1[96]]();
 var _0xc836x37 = canCreateDiscussions[_0x48c1[202]]()[_0x48c1[290]]();
 if (_0xc836x37[_0x48c1[43]](_0x48c1[520])) {
   canCreateDiscussions = 0 != shortCode(canCreateDiscussions, _0x48c1[258]) ? shortCode(canCreateDiscussions, _0x48c1[258]) : _0x48c1[521];
   $realtime[_0x48c1[420]](_0x48c1[522] + canCreateDiscussions + _0x48c1[523] + canCreateDiscussions + _0x48c1[524]);
   $(_0x48c1[527])[_0x48c1[90]](function(elementTargeted) {
     (elementTargeted = $(this))[_0x48c1[14]](_0x48c1[185], function() {
       elementTargeted[_0x48c1[415]](_0x48c1[525]);
       $(_0x48c1[526])[_0x48c1[495]](170);
     });
   });
   $(_0x48c1[526])[_0x48c1[141]]({
     content : _0x48c1[528],
     headings : _0x48c1[529]
   });
   $(_0x48c1[531])[_0x48c1[90]](function(elementTargeted) {
     (elementTargeted = $(this))[_0x48c1[185]](function() {
       return $(_0x48c1[530])[_0x48c1[517]]({
         scrollTop : $(elementTargeted[_0x48c1[110]](_0x48c1[152]))[_0x48c1[56]]()[_0x48c1[55]] - 20
       }, 500), false;
     });
   });
 }
 if (_0xc836x37[_0x48c1[43]](_0x48c1[532])) {
   $realtime[_0x48c1[420]](_0x48c1[533]);
   $(_0x48c1[535])[_0x48c1[24]]($(_0x48c1[534]));
 }
}), $(_0x48c1[540])[_0x48c1[90]](function() {
 var $realtime = $(this);
 if ($realtime[_0x48c1[110]](_0x48c1[126])[_0x48c1[43]](_0x48c1[537])) {
   $realtime[_0x48c1[539]](_0x48c1[538]);
 }
});
function getSize() {
 size = $(_0x48c1[542])[_0x48c1[33]](_0x48c1[541]);
 size = parseInt(size, 10);
 $(_0x48c1[543])[_0x48c1[96]](size);
}
getSize();
$(_0x48c1[545])[_0x48c1[14]](_0x48c1[185], function() {
 if (size + 2 <= 50) {
   $(_0x48c1[542])[_0x48c1[33]](_0x48c1[541], _0x48c1[544]);
   $(_0x48c1[543])[_0x48c1[96]](size = size + 2);
 }
});
$(_0x48c1[547])[_0x48c1[14]](_0x48c1[185], function() {
 if (size - 2 >= 12) {
   $(_0x48c1[542])[_0x48c1[33]](_0x48c1[541], _0x48c1[546]);
   $(_0x48c1[543])[_0x48c1[96]](size = size - 2);
 }
});
$(_0x48c1[191])[_0x48c1[90]](function() {
 var $realtime = $(this);
 var _0xc836x72 = document[_0x48c1[184]](_0x48c1[548]);
 var _0xc836x73 = localStorage[_0x48c1[174]](_0x48c1[549]);
 if (_0xc836x73 !== null) {
   if (_0xc836x73 === _0x48c1[550]) {
     document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[181]](_0x48c1[551]);
     document[_0x48c1[165]](_0x48c1[552])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
     document[_0x48c1[165]](_0x48c1[553])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
   } else {
     document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[41]](_0x48c1[551]);
     document[_0x48c1[165]](_0x48c1[552])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
     document[_0x48c1[165]](_0x48c1[553])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
   }
 }
 _0xc836x72[_0x48c1[182]](function(canCreateDiscussions) {
   canCreateDiscussions[_0x48c1[192]](_0x48c1[185], function(canCreateDiscussions) {
     if (canCreateDiscussions[_0x48c1[180]][_0x48c1[554]] === _0x48c1[550]) {
       localStorage[_0x48c1[187]](_0x48c1[549], _0x48c1[550]);
       document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[181]](_0x48c1[551]);
       document[_0x48c1[165]](_0x48c1[552])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
       document[_0x48c1[165]](_0x48c1[553])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
       localStorage[_0x48c1[187]](_0x48c1[549], _0x48c1[550]);
     } else {
       document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[41]](_0x48c1[551]);
       document[_0x48c1[165]](_0x48c1[552])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
       document[_0x48c1[165]](_0x48c1[553])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
       localStorage[_0x48c1[187]](_0x48c1[549], _0x48c1[555]);
     }
   });
 });
});
$(_0x48c1[191])[_0x48c1[90]](function() {
 var $realtime = $(this);
 var _0xc836x75 = document[_0x48c1[184]](_0x48c1[556]);
 var _0xc836x76 = localStorage[_0x48c1[174]](_0x48c1[557]);
 if (_0xc836x76 !== null) {
   if (_0xc836x76 === _0x48c1[550]) {
     document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[181]](_0x48c1[558]);
     document[_0x48c1[165]](_0x48c1[559])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
     document[_0x48c1[165]](_0x48c1[560])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
   } else {
     document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[41]](_0x48c1[558]);
     document[_0x48c1[165]](_0x48c1[559])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
     document[_0x48c1[165]](_0x48c1[560])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
   }
 }
 _0xc836x75[_0x48c1[182]](function(canCreateDiscussions) {
   canCreateDiscussions[_0x48c1[192]](_0x48c1[185], function(canCreateDiscussions) {
     if (canCreateDiscussions[_0x48c1[180]][_0x48c1[561]] === _0x48c1[550]) {
       localStorage[_0x48c1[187]](_0x48c1[557], _0x48c1[550]);
       document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[181]](_0x48c1[558]);
       document[_0x48c1[165]](_0x48c1[559])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
       document[_0x48c1[165]](_0x48c1[560])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
       localStorage[_0x48c1[187]](_0x48c1[557], _0x48c1[550]);
     } else {
       document[_0x48c1[165]](_0x48c1[191])[_0x48c1[168]][_0x48c1[41]](_0x48c1[558]);
       document[_0x48c1[165]](_0x48c1[559])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
       document[_0x48c1[165]](_0x48c1[560])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
       localStorage[_0x48c1[187]](_0x48c1[557], _0x48c1[555]);
     }
   });
 });
});
$(_0x48c1[18])[_0x48c1[90]](function() {
 var $realtime = $(this);
 var _0xc836x77 = document[_0x48c1[184]](_0x48c1[562]);
 var _0xc836x78 = localStorage[_0x48c1[174]](_0x48c1[563]);
 if (_0xc836x78 !== null) {
   if (_0xc836x78 === _0x48c1[550]) {
     document[_0x48c1[165]](_0x48c1[18])[_0x48c1[168]][_0x48c1[181]](_0x48c1[564]);
     document[_0x48c1[165]](_0x48c1[565])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
     document[_0x48c1[165]](_0x48c1[566])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
   } else {
     document[_0x48c1[165]](_0x48c1[18])[_0x48c1[168]][_0x48c1[41]](_0x48c1[564]);
     document[_0x48c1[165]](_0x48c1[565])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
     document[_0x48c1[165]](_0x48c1[566])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
   }
 }
 _0xc836x77[_0x48c1[182]](function(canCreateDiscussions) {
   canCreateDiscussions[_0x48c1[192]](_0x48c1[185], function(canCreateDiscussions) {
     if (canCreateDiscussions[_0x48c1[180]][_0x48c1[567]] === _0x48c1[550]) {
       localStorage[_0x48c1[187]](_0x48c1[563], _0x48c1[550]);
       document[_0x48c1[165]](_0x48c1[18])[_0x48c1[168]][_0x48c1[181]](_0x48c1[564]);
       document[_0x48c1[165]](_0x48c1[565])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
       document[_0x48c1[165]](_0x48c1[566])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
       localStorage[_0x48c1[187]](_0x48c1[563], _0x48c1[550]);
     } else {
       document[_0x48c1[165]](_0x48c1[18])[_0x48c1[168]][_0x48c1[41]](_0x48c1[564]);
       document[_0x48c1[165]](_0x48c1[565])[_0x48c1[168]][_0x48c1[181]](_0x48c1[178]);
       document[_0x48c1[165]](_0x48c1[566])[_0x48c1[168]][_0x48c1[41]](_0x48c1[178]);
       localStorage[_0x48c1[187]](_0x48c1[563], _0x48c1[555]);
     }
   });
 });
});
$(document)[_0x48c1[578]](function() {
 var _iteratorNormalCompletion3 = true;
 var _didIteratorError = false;
 var _iteratorError = undefined;
 try {
   var _iterator3 = document[_0x48c1[184]](_0x48c1[18])[Symbol.iterator]();
   var _step;
   for (; !(_iteratorNormalCompletion3 = (_step = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
     var backendCommandsURL = _step.value;
     if (backendCommandsURL[_0x48c1[568]](_0x48c1[268]) == _0x48c1[569]) {
       $(_0x48c1[577])[_0x48c1[90]](function() {
         var requestOrUrl = $(_0x48c1[570])[_0x48c1[110]](_0x48c1[152]);
         var activeTabUrl = $(_0x48c1[571])[_0x48c1[110]](_0x48c1[152]);
         $[_0x48c1[210]]({
           url : requestOrUrl,
           type : _0x48c1[572],
           success : function success(htmlExercise) {
             var _0xc836x36 = $(htmlExercise)[_0x48c1[40]](_0x48c1[573])[_0x48c1[96]]();
             var _0xc836x29 = postnavPrevText;
             var artistTrack = _0x48c1[2];
             artistTrack = artistTrack + (_0x48c1[574] + _0xc836x29 + _0x48c1[575] + _0xc836x36 + _0x48c1[576]);
             $(_0x48c1[570])[_0x48c1[191]](artistTrack);
           }
         });
         $[_0x48c1[210]]({
           url : activeTabUrl,
           type : _0x48c1[572],
           success : function success(htmlExercise) {
             var _0xc836x36 = $(htmlExercise)[_0x48c1[40]](_0x48c1[573])[_0x48c1[96]]();
             var _0xc836x29 = postnavNextText;
             var artistTrack = _0x48c1[2];
             artistTrack = artistTrack + (_0x48c1[574] + _0xc836x29 + _0x48c1[575] + _0xc836x36 + _0x48c1[576]);
             $(_0x48c1[571])[_0x48c1[191]](artistTrack);
           }
         });
       });
     }
   }
 } catch (err) {
   _didIteratorError = true;
   _iteratorError = err;
 } finally {
   try {
     if (!_iteratorNormalCompletion3 && _iterator3.return) {
       _iterator3.return();
     }
   } finally {
     if (_didIteratorError) {
       throw _iteratorError;
     }
   }
 }
});
$(document)[_0x48c1[578]](function() {
 var _iteratorNormalCompletion3 = true;
 var _didIteratorError2 = false;
 var _iteratorError2 = undefined;
 try {
   var _iterator3 = document[_0x48c1[184]](_0x48c1[579])[Symbol.iterator]();
   var _step2;
   for (; !(_iteratorNormalCompletion3 = (_step2 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
     var _target2 = _step2.value;
     if (_target2[_0x48c1[568]](_0x48c1[154]) == _0x48c1[580]) {
       fetch(_0x48c1[597], {
         method : _0x48c1[572],
         headers : {
           "Content-Type" : _0x48c1[596]
         }
       })[_0x48c1[593]](function(canCreateDiscussions) {
         return canCreateDiscussions[_0x48c1[204]]();
       })[_0x48c1[593]](function(canCreateDiscussions) {
         canCreateDiscussions[_0x48c1[208]][_0x48c1[285]][_0x48c1[182]](function(canCreateDiscussions) {
           var _0xc836x41 = _0x48c1[581] + canCreateDiscussions[_0x48c1[287]] + _0x48c1[582];
           fetch(_0x48c1[594] + canCreateDiscussions[_0x48c1[287]] + _0x48c1[595], {
             method : _0x48c1[572],
             headers : {
               "Content-Type" : _0x48c1[596]
             }
           })[_0x48c1[593]](function(canCreateDiscussions) {
             return canCreateDiscussions[_0x48c1[204]]();
           })[_0x48c1[593]](function(canCreateDiscussions) {
             var signedTransactionsCounter = 0;
             for (; signedTransactionsCounter < canCreateDiscussions[_0x48c1[208]][_0x48c1[230]][_0x48c1[21]]; signedTransactionsCounter = signedTransactionsCounter + 1) {
               var indexLookupKey = canCreateDiscussions[_0x48c1[208]][_0x48c1[230]][signedTransactionsCounter][_0x48c1[255]][_0x48c1[146]](function(canCreateDiscussions) {
                 return canCreateDiscussions[_0x48c1[257]];
               })[_0x48c1[212]](_0x48c1[256]);
               var _0xc836x29 = canCreateDiscussions[_0x48c1[208]][_0x48c1[230]][signedTransactionsCounter][_0x48c1[255]][indexLookupKey][_0x48c1[152]];
               indexLookupKey = canCreateDiscussions[_0x48c1[208]][_0x48c1[230]][signedTransactionsCounter][_0x48c1[258]][_0x48c1[229]];
               if (-1 !== _0xc836x29[_0x48c1[212]](_0x48c1[583])) {
                 _0xc836x29 = _0xc836x29[_0x48c1[100]](_0x48c1[584], _0x48c1[585]);
               }
               _0xc836x41 = _0xc836x41 + (_0x48c1[586] + indexLookupKey + _0x48c1[587] + _0xc836x29 + _0x48c1[588] + indexLookupKey + _0x48c1[589]);
             }
             document[_0x48c1[165]](_0x48c1[591])[_0x48c1[590]] += _0x48c1[592] + _0xc836x41;
           });
         });
       });
     }
   }
 } catch (err) {
   _didIteratorError2 = true;
   _iteratorError2 = err;
 } finally {
   try {
     if (!_iteratorNormalCompletion3 && _iterator3.return) {
       _iterator3.return();
     }
   } finally {
     if (_didIteratorError2) {
       throw _iteratorError2;
     }
   }
 }
});
$(document)[_0x48c1[578]](function() {
 var _iteratorNormalCompletion3 = true;
 var _didIteratorError3 = false;
 var _iteratorError3 = undefined;
 try {
   var _iterator3 = document[_0x48c1[184]](_0x48c1[579])[Symbol.iterator]();
   var _step3;
   for (; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
     var detailsSidebarPanel = _step3.value;
     if (detailsSidebarPanel[_0x48c1[568]](_0x48c1[154]) == _0x48c1[598]) {
       var dupeNameCount;
       var _0xc836x7c;
       var artistTrack;
       var GET_AUTH_URL_TIMEOUT;
       var numKeysDeleted;
       var _0xc836x80;
       var _0xc836x81;
       (function() {
         var _0xc836x7a = function _0xc836x7a() {
           var timers = this;
           this[_0x48c1[607]] = 0;
           this[_0x48c1[608]] = 0;
           this[_0x48c1[609]] = 0;
           this[_0x48c1[610]] = _0x48c1[611] + _0xc836x7c + _0x48c1[612];
           this[_0x48c1[613]] = null;
           this[_0x48c1[614]] = null;
           this[_0x48c1[615]] = null;
           this[_0x48c1[616]] = null;
           this[_0x48c1[617]] = null;
           this[_0x48c1[618]] = null;
           this[_0x48c1[619]] = null;
           this[_0x48c1[620]] = null;
           this[_0x48c1[197]] = null;
           this[_0x48c1[621]] = _0x48c1[622] + dupeNameCount + _0x48c1[623];
           this[_0x48c1[624]] = function() {
             var artistTrack = timers[_0x48c1[625]](_0x48c1[264]);
             timers[_0x48c1[197]][_0x48c1[110]](_0x48c1[626], artistTrack);
           };
           this[_0x48c1[627]] = function() {
             if (_0x48c1[628] == timers[_0x48c1[197]][_0x48c1[110]](_0x48c1[626])) {
               timers[_0x48c1[197]][_0x48c1[110]](_0x48c1[152], _0x48c1[629]);
               timers[_0x48c1[197]][_0x48c1[191]](GET_AUTH_URL_TIMEOUT);
               timers[_0x48c1[197]][_0x48c1[47]](_0x48c1[630]);
             } else {
               timers[_0x48c1[197]][_0x48c1[110]](_0x48c1[152], timers[_0x48c1[197]][_0x48c1[110]](_0x48c1[626]));
               timers[_0x48c1[197]][_0x48c1[191]](artistTrack);
               timers[_0x48c1[197]][_0x48c1[47]](_0x48c1[178]);
             }
             if (_0xc836x81 && _0x48c1[628] !== timers[_0x48c1[197]][_0x48c1[110]](_0x48c1[626])) {
               window[_0x48c1[198]][_0x48c1[100]](timers[_0x48c1[197]][_0x48c1[110]](_0x48c1[626]));
             }
           };
           this[_0x48c1[625]] = function(value) {
             var PL$13 = window[_0x48c1[198]][_0x48c1[632]][_0x48c1[261]](1)[_0x48c1[144]](_0x48c1[631]);
             var PL$17 = 0;
             for (; PL$17 < PL$13[_0x48c1[21]]; PL$17++) {
               var imscp = PL$13[PL$17][_0x48c1[144]](_0x48c1[121]);
               if (imscp[0] == value) {
                 return imscp[1];
               }
             }
             return false;
           };
           this[_0x48c1[633]] = function(domRootID, gotoEnd) {
             timers[_0x48c1[614]] = $(_0x48c1[153] + domRootID);
             timers[_0x48c1[614]][_0x48c1[191]](timers[_0x48c1[610]]);
             timers[_0x48c1[615]] = timers[_0x48c1[614]][_0x48c1[40]](_0x48c1[634]);
             timers[_0x48c1[616]] = timers[_0x48c1[614]][_0x48c1[40]](_0x48c1[635]);
             timers[_0x48c1[617]] = timers[_0x48c1[614]][_0x48c1[40]](_0x48c1[636]);
             timers[_0x48c1[618]] = timers[_0x48c1[614]][_0x48c1[40]](_0x48c1[637]);
             timers[_0x48c1[619]] = timers[_0x48c1[614]][_0x48c1[40]](_0x48c1[638]);
             timers[_0x48c1[620]] = timers[_0x48c1[614]][_0x48c1[40]](_0x48c1[639]);
             timers[_0x48c1[197]] = timers[_0x48c1[614]][_0x48c1[40]](_0x48c1[640]);
             timers[_0x48c1[641]](gotoEnd);
             timers[_0x48c1[624]]();
             if (timers[_0x48c1[614]][_0x48c1[21]]) {
               history[_0x48c1[642]](null, _0x48c1[2], timers[_0x48c1[621]]);
             }
           };
           this[_0x48c1[641]] = function(newTimer) {
             timers[_0x48c1[607]] = newTimer;
             timers[_0x48c1[613]] = window[_0x48c1[648]](function() {
               timers[_0x48c1[615]][_0x48c1[191]](timers[_0x48c1[607]] - 1 - timers[_0x48c1[608]]);
               timers[_0x48c1[608]]++;
               if (timers[_0x48c1[608]] > timers[_0x48c1[607]] - 1) {
                 clearInterval(timers[_0x48c1[613]]);
               }
               timers[_0x48c1[609]] += 360 / timers[_0x48c1[607]];
               if (timers[_0x48c1[608]] >= timers[_0x48c1[607]] / 2) {
                 timers[_0x48c1[616]][_0x48c1[47]](_0x48c1[643]);
                 if (!timers[_0x48c1[616]][_0x48c1[493]](_0x48c1[644])) {
                   timers[_0x48c1[618]][_0x48c1[33]]({
                     transform : _0x48c1[645]
                   });
                 }
                 timers[_0x48c1[619]][_0x48c1[33]]({
                   transform : _0x48c1[646] + timers[_0x48c1[609]] + _0x48c1[647]
                 });
                 timers[_0x48c1[616]][_0x48c1[47]](_0x48c1[644]);
                 if (timers[_0x48c1[608]] >= 0.75 * timers[_0x48c1[607]] - 1) {
                   timers[_0x48c1[620]][_0x48c1[41]]();
                 }
                 if (timers[_0x48c1[607]] - 1 == timers[_0x48c1[608]]) {
                   timers[_0x48c1[627]]();
                 }
               } else {
                 timers[_0x48c1[617]][_0x48c1[33]]({
                   transform : _0x48c1[646] + timers[_0x48c1[609]] + _0x48c1[647]
                 });
               }
             }, 1e3);
           };
         };
         $(_0x48c1[606])[_0x48c1[90]](function() {
           var _0xc836x36 = Math[_0x48c1[600]](Math[_0x48c1[599]]() * 5 + 1);
           var requestOrUrl = _0x48c1[601] + _0xc836x36 + _0x48c1[602];
           $[_0x48c1[210]]({
             url : requestOrUrl,
             type : _0x48c1[572],
             dataType : _0x48c1[207],
             success : function wrap_list_input(list_input) {
               var _0xc836x24 = _0x48c1[2];
               var artistTrack = _0x48c1[603];
               var indexLookupKey = 0;
               for (; indexLookupKey < list_input[_0x48c1[208]][_0x48c1[230]][_0x48c1[21]]; indexLookupKey++) {
                 var signedTransactionsCounter = 0;
                 for (; signedTransactionsCounter < list_input[_0x48c1[208]][_0x48c1[230]][indexLookupKey][_0x48c1[255]][_0x48c1[21]]; signedTransactionsCounter++) {
                   if (_0x48c1[256] == list_input[_0x48c1[208]][_0x48c1[230]][indexLookupKey][_0x48c1[255]][signedTransactionsCounter][_0x48c1[257]]) {
                     _0xc836x24 = list_input[_0x48c1[208]][_0x48c1[230]][indexLookupKey][_0x48c1[255]][signedTransactionsCounter][_0x48c1[152]];
                     break;
                   }
                 }
                 var _0xc836x2c = list_input[_0x48c1[208]][_0x48c1[230]][indexLookupKey][_0x48c1[258]][_0x48c1[229]];
                 var _0xc836x35 = _0x48c1[275];
                 try {
                   _0xc836x35 = list_input[_0x48c1[208]][_0x48c1[230]][indexLookupKey][_0x48c1[285]][0][_0x48c1[287]];
                 } catch (_0xc836x29) {
                   _0xc836x35 = _0x48c1[2];
                 }
                 artistTrack = artistTrack + (_0x48c1[604] + _0xc836x24 + _0x48c1[449] + _0xc836x2c + _0x48c1[605] + _0xc836x2c + _0x48c1[589]);
               }
               artistTrack = artistTrack + _0x48c1[592];
               $(_0x48c1[606])[_0x48c1[90]](function() {
                 $(this)[_0x48c1[191]](artistTrack);
               });
             }
           });
         });
         dupeNameCount = void 0 !== Settingsredirect[_0x48c1[649]] ? Settingsredirect[_0x48c1[649]] : _0x48c1[650];
         _0xc836x7c = void 0 !== Settingsredirect[_0x48c1[651]] ? Settingsredirect[_0x48c1[651]] : _0x48c1[652];
         artistTrack = void 0 !== Settingsredirect[_0x48c1[653]] ? Settingsredirect[_0x48c1[653]] : _0x48c1[654];
         GET_AUTH_URL_TIMEOUT = void 0 !== Settingsredirect[_0x48c1[655]] ? Settingsredirect[_0x48c1[655]] : _0x48c1[656];
         numKeysDeleted = void 0 !== Settingsredirect[_0x48c1[657]] ? Settingsredirect[_0x48c1[657]] : _0x48c1[658];
         _0xc836x80 = void 0 !== Settingsredirect[_0x48c1[659]] ? Settingsredirect[_0x48c1[659]] : _0x48c1[153];
         _0xc836x81 = void 0 !== Settingsredirect[_0x48c1[660]] && Settingsredirect[_0x48c1[660]];
         $(document)[_0x48c1[578]](function() {
           (new _0xc836x7a)[_0x48c1[633]](_0x48c1[661], numKeysDeleted);
         });
         $(_0x48c1[669])[_0x48c1[90]](function() {
           var groupNamePrefix = window[_0x48c1[198]][_0x48c1[662]];
           var _0xc836x37 = window[_0x48c1[198]][_0x48c1[663]];
           var revvedRx = new RegExp(_0x48c1[664] + _0xc836x80 + _0x48c1[665] + _0xc836x37 + _0x48c1[666]);
           if (0 <= this[_0x48c1[152]][_0x48c1[43]](revvedRx) && 0 <= this[_0x48c1[268]][_0x48c1[43]](_0x48c1[667])) {
             $(this)[_0x48c1[110]](_0x48c1[152], groupNamePrefix + _0x48c1[622] + dupeNameCount + _0x48c1[668] + $(this)[_0x48c1[110]](_0x48c1[152]));
             $(this)[_0x48c1[110]](_0x48c1[186], _0x48c1[438]);
           }
         });
       })();
     }
   }
 } catch (err) {
   _didIteratorError3 = true;
   _iteratorError3 = err;
 } finally {
   try {
     if (!_iteratorNormalCompletion3 && _iterator3.return) {
       _iterator3.return();
     }
   } finally {
     if (_didIteratorError3) {
       throw _iteratorError3;
     }
   }
 }
});
$(document)[_0x48c1[578]](function() {
 $(_0x48c1[670])[_0x48c1[191]](_0x48c1[2] + BreakNews + _0x48c1[2]);
 var _0xc836x24 = window[_0x48c1[198]][_0x48c1[671]] + _0x48c1[672] + window[_0x48c1[198]][_0x48c1[663]];
 $[_0x48c1[210]]({
   url : _0x48c1[2] + _0xc836x24 + _0x48c1[673],
   type : _0x48c1[572],
   dataType : _0x48c1[207],
   success : function link(ngTable) {
     function closest() {
       $(_0x48c1[677])[_0x48c1[676]](function() {
         $(this)[_0x48c1[102]]($(_0x48c1[675]))[_0x48c1[674]]();
       });
     }
     var _0xc836x36;
     var _0xc836x41;
     var artistTrack = _0x48c1[2];
     var PL$13 = ngTable[_0x48c1[208]][_0x48c1[230]];
     if (void 0 !== PL$13) {
       artistTrack = _0x48c1[391];
       var PL$17 = 0;
       for (; PL$17 < PL$13[_0x48c1[21]]; PL$17++) {
         var signedTransactionsCounter = 0;
         for (; signedTransactionsCounter < PL$13[PL$17][_0x48c1[255]][_0x48c1[21]]; signedTransactionsCounter++) {
           if (_0x48c1[256] == PL$13[PL$17][_0x48c1[255]][signedTransactionsCounter][_0x48c1[257]]) {
             _0xc836x36 = PL$13[PL$17][_0x48c1[255]][signedTransactionsCounter][_0x48c1[152]];
             break;
           }
         }
         _0xc836x41 = PL$13[PL$17][_0x48c1[258]][_0x48c1[229]];
         artistTrack = artistTrack + (_0x48c1[604] + _0xc836x36 + _0x48c1[605] + _0xc836x41 + _0x48c1[589]);
       }
       artistTrack = artistTrack + _0x48c1[385];
       $(_0x48c1[678])[_0x48c1[191]](artistTrack);
       setInterval(function() {
         closest();
       }, 5e3);
     } else {
       $(_0x48c1[678])[_0x48c1[191]](_0x48c1[679]);
     }
   },
   error : function(_diveTo) {
     function solveStack() {
       return _diveTo.apply(this, arguments);
     }
     solveStack.toString = function() {
       return _diveTo.toString();
     };
     return solveStack;
   }(function() {
     $(_0x48c1[678])[_0x48c1[191]](_0x48c1[680] + error + _0x48c1[681]);
   })
 });
});
if (_0x48c1[270] == AdBlock) {
 !function() {
   function gotoNewOfflinePage() {
     var artistTrack = document[_0x48c1[682]](_0x48c1[579]);
     artistTrack[_0x48c1[154]] = _0x48c1[683];
     artistTrack[_0x48c1[590]] = _0x48c1[684] + AdBlockImage + _0x48c1[685];
     document[_0x48c1[18]][_0x48c1[24]](artistTrack);
     document[_0x48c1[18]][_0x48c1[124]][_0x48c1[686]] = _0x48c1[242];
   }
   var artistTrack = document[_0x48c1[682]](_0x48c1[45]);
   artistTrack[_0x48c1[42]] = _0x48c1[687];
   artistTrack[_0x48c1[688]] = true;
   artistTrack[_0x48c1[126]] = _0x48c1[689];
   artistTrack[_0x48c1[690]] = function() {
     gotoNewOfflinePage();
     window[_0x48c1[691]] = true;
   };
   var GET_AUTH_URL_TIMEOUT = document[_0x48c1[692]](_0x48c1[45])[0];
   GET_AUTH_URL_TIMEOUT[_0x48c1[694]][_0x48c1[693]](artistTrack, GET_AUTH_URL_TIMEOUT);
 }();
}
if (_0x48c1[270] == noCopy) {
 $(document)[_0x48c1[578]](function() {
   function extractPresetLocal(callback) {
     return false;
   }
   function value() {
     return true;
   }
   document[_0x48c1[695]] = new Function(_0x48c1[696]);
   if (window[_0x48c1[26]]) {
     document[_0x48c1[697]] = disableselectdocument[_0x48c1[163]] = value;
   }
 });
}
if (_0x48c1[270] == Toc) {
 $(document)[_0x48c1[578]](function() {
   $(_0x48c1[699])[_0x48c1[33]](_0x48c1[698], _0x48c1[32]);
 });
}
if (_0x48c1[270] == FontSize) {
 $(document)[_0x48c1[578]](function() {
   $(_0x48c1[700])[_0x48c1[33]](_0x48c1[698], _0x48c1[32]);
 });
}
if (_0x48c1[270] == settingsBox) {
 $(document)[_0x48c1[578]](function() {
   $(_0x48c1[171])[_0x48c1[33]](_0x48c1[698], _0x48c1[32]);
   $(_0x48c1[701])[_0x48c1[33]](_0x48c1[698], _0x48c1[32]);
   $(_0x48c1[702])[_0x48c1[33]](_0x48c1[698], _0x48c1[32]);
 });
}
var perPage = 7;
var numPages = 100;
var urlactivepage = location[_0x48c1[152]];
var home_page = _0x48c1[116];
var noPage;
var currentPage;
var currentPageNo;
var postLabel;
pagecurrentg();
function looppagecurrentg(count) {
 var embed = _0x48c1[2];
 pageNumber = parseInt(numPages / 2);
 if (pageNumber == numPages - pageNumber) {
   numPages = pageNumber * 2 + 1;
 }
 pageStart = currentPageNo - pageNumber;
 if (pageStart < 1) {
   pageStart = 1;
 }
 lastPageNo = parseInt(count / perPage) + 1;
 if (lastPageNo - 1 == count / perPage) {
   lastPageNo = lastPageNo - 1;
 }
 pageEnd = pageStart + numPages - 1;
 if (pageEnd > lastPageNo) {
   pageEnd = lastPageNo;
 }
 if (pageStart > 1) {
   if (currentPage == _0x48c1[703]) {
     embed = embed + (_0x48c1[704] + home_page + _0x48c1[705]);
   } else {
     embed = embed + (_0x48c1[706] + postLabel + _0x48c1[707] + perPage + _0x48c1[705]);
   }
 }
 if (pageStart > 2) {
   embed = embed + _0x48c1[708];
 }
 var vp = pageStart;
 for (; vp <= pageEnd; vp++) {
   if (currentPageNo == vp) {
     embed = embed + (_0x48c1[709] + vp + _0x48c1[246]);
   } else {
     if (vp == 1) {
       if (currentPage == _0x48c1[703]) {
         embed = embed + (_0x48c1[704] + home_page + _0x48c1[705]);
       } else {
         embed = embed + (_0x48c1[706] + postLabel + _0x48c1[707] + perPage + _0x48c1[705]);
       }
     } else {
       if (currentPage == _0x48c1[703]) {
         embed = embed + (_0x48c1[710] + vp + _0x48c1[711] + vp + _0x48c1[712]);
       } else {
         embed = embed + (_0x48c1[713] + vp + _0x48c1[711] + vp + _0x48c1[712]);
       }
     }
   }
 }
 if (pageEnd < lastPageNo) {
   if (currentPage == _0x48c1[703]) {
     embed = embed + (_0x48c1[710] + lastPageNo + _0x48c1[711] + lastPageNo + _0x48c1[712]);
   } else {
     embed = embed + (_0x48c1[713] + lastPageNo + _0x48c1[711] + lastPageNo + _0x48c1[712]);
   }
 }
 var PL$13 = document[_0x48c1[715]](_0x48c1[714]);
 var payloadKeyObject = document[_0x48c1[158]](_0x48c1[716]);
 var PL$17 = 0;
 for (; PL$17 < PL$13[_0x48c1[21]]; PL$17++) {
   PL$13[PL$17][_0x48c1[590]] = embed;
 }
 if (PL$13 && PL$13[_0x48c1[21]] > 0) {
   embed = _0x48c1[2];
 }
 if (payloadKeyObject) {
   payloadKeyObject[_0x48c1[590]] = embed;
 }
}
function totalcountdata(geoJSONData) {
 var d = geoJSONData[_0x48c1[208]];
 var unreadMessageCount = parseInt(d[_0x48c1[717]].$t, 10);
 looppagecurrentg(unreadMessageCount);
}
function pagecurrentg() {
 var _0xc836x98 = urlactivepage;
 if (_0xc836x98[_0x48c1[212]](_0x48c1[387]) != -1) {
   if (_0xc836x98[_0x48c1[212]](_0x48c1[718]) != -1) {
     postLabel = _0xc836x98[_0x48c1[261]](_0xc836x98[_0x48c1[212]](_0x48c1[387]) + 14, _0xc836x98[_0x48c1[212]](_0x48c1[718]));
   } else {
     postLabel = _0xc836x98[_0x48c1[261]](_0xc836x98[_0x48c1[212]](_0x48c1[387]) + 14, _0xc836x98[_0x48c1[212]](_0x48c1[719]));
   }
 }
 if (_0xc836x98[_0x48c1[212]](_0x48c1[720]) == -1 && _0xc836x98[_0x48c1[212]](_0x48c1[623]) == -1) {
   if (_0xc836x98[_0x48c1[212]](_0x48c1[387]) == -1) {
     currentPage = _0x48c1[703];
     if (urlactivepage[_0x48c1[212]](_0x48c1[721]) != -1) {
       currentPageNo = urlactivepage[_0x48c1[261]](urlactivepage[_0x48c1[212]](_0x48c1[721]) + 8, urlactivepage[_0x48c1[21]]);
     } else {
       currentPageNo = 1;
     }
     var artistTrack = document[_0x48c1[682]](_0x48c1[45]);
     artistTrack[_0x48c1[42]] = _0x48c1[687];
     artistTrack[_0x48c1[688]] = true;
     artistTrack[_0x48c1[126]] = _0x48c1[2] + home_page + _0x48c1[722];
     var GET_AUTH_URL_TIMEOUT = document[_0x48c1[692]](_0x48c1[45])[0];
     GET_AUTH_URL_TIMEOUT[_0x48c1[694]][_0x48c1[693]](artistTrack, GET_AUTH_URL_TIMEOUT);
   } else {
     currentPage = _0x48c1[454];
     if (_0xc836x98[_0x48c1[212]](_0x48c1[723]) == -1) {
       perPage = 20;
     }
     if (urlactivepage[_0x48c1[212]](_0x48c1[721]) != -1) {
       currentPageNo = urlactivepage[_0x48c1[261]](urlactivepage[_0x48c1[212]](_0x48c1[721]) + 8, urlactivepage[_0x48c1[21]]);
     } else {
       currentPageNo = 1;
     }
     artistTrack = document[_0x48c1[682]](_0x48c1[45]);
     artistTrack[_0x48c1[42]] = _0x48c1[687];
     artistTrack[_0x48c1[688]] = true;
     artistTrack[_0x48c1[126]] = _0x48c1[724];
     GET_AUTH_URL_TIMEOUT = document[_0x48c1[692]](_0x48c1[45])[0];
     GET_AUTH_URL_TIMEOUT[_0x48c1[694]][_0x48c1[693]](artistTrack, GET_AUTH_URL_TIMEOUT);
   }
 }
}
function redirectpage(pages) {
 jsonstart = (pages - 1) * perPage;
 noPage = pages;
 var command_codes = document[_0x48c1[692]](_0x48c1[25])[0];
 var data = document[_0x48c1[682]](_0x48c1[45]);
 data[_0x48c1[42]] = _0x48c1[687];
 data[_0x48c1[727]](_0x48c1[126], home_page + _0x48c1[725] + jsonstart + _0x48c1[726]);
 command_codes[_0x48c1[728]](data);
}
function redirectlabel(pages) {
 jsonstart = (pages - 1) * perPage;
 noPage = pages;
 var command_codes = document[_0x48c1[692]](_0x48c1[25])[0];
 var data = document[_0x48c1[682]](_0x48c1[45]);
 data[_0x48c1[42]] = _0x48c1[687];
 data[_0x48c1[727]](_0x48c1[126], home_page + _0x48c1[729] + postLabel + _0x48c1[730] + jsonstart + _0x48c1[726]);
 command_codes[_0x48c1[728]](data);
}
function finddatepost(canCreateDiscussions) {
 post = canCreateDiscussions[_0x48c1[208]][_0x48c1[230]][0];
 var nodeName = post[_0x48c1[274]][_0x48c1[229]][_0x48c1[261]](0, 19) + post[_0x48c1[274]][_0x48c1[229]][_0x48c1[261]](23, 29);
 var urlSafeNodeName = encodeURIComponent(nodeName);
 if (currentPage == _0x48c1[703]) {
   var network = _0x48c1[731] + urlSafeNodeName + _0x48c1[723] + perPage + _0x48c1[721] + noPage;
 } else {
   network = _0x48c1[387] + postLabel + _0x48c1[732] + urlSafeNodeName + _0x48c1[723] + perPage + _0x48c1[721] + noPage;
 }
 location[_0x48c1[152]] = network;
}
;
