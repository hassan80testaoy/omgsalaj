    <script>
    //<![CDATA[
var olderLink = $('a.blog-pager-older-link')['attr']('href');
olderLink && $('.loadMorePosts')['show'](), $('.loadMorePosts a')['on']('click', function(_0xe79bx3) {
    $('.loadMorePosts')['hide'](), $['ajax']({
        url: olderLink,
        success: function(_0xe79bx3) {
            var _0xe79bx4 = $(_0xe79bx3)['find']('.blog-posts');
            _0xe79bx4['children']('.status-msg-wrap')['remove'](), $('.blog-posts')['append'](_0xe79bx4['html']()), (olderLink = $(_0xe79bx3)['find']('.blog-pager-older-link')['attr']('href')) ? $('.loadMorePosts')['show']() : $('.noMorePosts')['show']()
        },
        beforeSend: function() {
            $('.loadMore > #loader')['show']()
        },
        complete: function() {
            $('.loadMore > #loader')['hide']()
        }
    }), _0xe79bx3['preventDefault']()
});
 
//]]>
</script>
