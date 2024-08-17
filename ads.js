// الكود الأول
var script1 = document.createElement('script');
script1.type = 'text/javascript';
script1.src = '//lipsgig.com/89/5d/3e/895d3e5e6ad867827119fc77ea3d9831.js';
document.head.appendChild(script1);
// الكود الثاني
var uid = '257071';
var wid = '725656';
var pop_tag = document.createElement('script');
pop_tag.src = '//cdn.popcash.net/show.js';
document.body.appendChild(pop_tag);
pop_tag.onerror = function() {
  pop_tag = document.createElement('script');
  pop_tag.src = '//cdn2.popcash.net/show.js';
  document.body.appendChild(pop_tag);
};
