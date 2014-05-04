$(
  function() {
    $('.share a').click(
      function (event) {
        event.preventDefault();
        var $this = $(this);
        window.open(
          $this.attr('href'),
          $this.attr('title'),
          'width=640,height=300'
        );
      }
    );
    $("h2, h3").each(
      function (idx, element) {
        var $element = $(element),
          icon = '<i class="fa fa-link"></i>',
          id = $element.attr('id');
        if (id) {
          $element.prepend(
            $("<a/>").addClass("header-link").attr("href", "#" + id).html(icon)
          );
        }
      }
    );
  }
);

// Google Analytics
var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-1963507-16']);
_gaq.push(['_trackPageview']);
(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();

// Disqus
var disqus_shortname = 'xdsd';
(function() {
  var dsq = document.createElement('script'); dsq.type = 'text/javascript'; dsq.async = true;
  dsq.src = '//' + disqus_shortname + '.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
})();
