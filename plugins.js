         //<![CDATA[
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

    //]]>
