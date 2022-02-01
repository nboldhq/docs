<template>
  <div id="disqus_thread"></div>
</template>

 <script>
export default {
  mounted() {
    var disqus_config = function() {
      this.page.url = window.location.origin + window.location.pathname;
      this.page.identifier = window.location.pathname;
       this.page.title = this.$page.frontmatter.title ;
    };
    (function() {
      // DON'T EDIT BELOW THIS LINE
      var d = document,
        s = d.createElement("script");
      s.src = "https://insidesalestim.disqus.com/embed.js";
      s.setAttribute("data-timestamp", +new Date());
      (d.head || d.body).appendChild(s);
    })();
  }
};
</script>
