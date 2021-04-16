// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
  controls: true,
  progress: true,
  history: true,
  center: false,
  width: 1929,
  height: 1080,

  theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
  transition: Reveal.getQueryHash().transition || 'none', // default/cube/page/concave/zoom/linear/fade/none

  keyboard: {
    32: function() {
      var video = document.querySelector('.present video');
      if (video.paused == true) {
        video.play();
      } else {
        video.pause();
      }
    }
  },

  slideNumber: 'c/t',
  showSlideNumber: 'speaker',

  // Optional libraries used to extend on reveal.js
  dependencies: [
    {
      src: './js/classList.js',
      condition: function() {
        return !document.body.classList;
      }
    },
    {
      src: './plugin/markdown/marked.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: './plugin/markdown/markdown.js',
      condition: function() {
        return !!document.querySelector('[data-markdown]');
      }
    },
    {
      src: './plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        hljs.initHighlightingOnLoad();
      }
    },
    {
      src: './plugin/zoom-js/zoom.js',
      async: true,
      condition: function() {
        return !!document.body.classList;
      }
    },
    {
      src: './plugin/notes/notes.js',
      async: true,
      condition: function() {
        return !!document.body.classList;
      }
    }
    // { src: 'node_modules/reveal.js/plugin/search/search.js', async: true, condition: function() { return !!document.body.classList; } }
    // { src: 'node_modules/reveal.js/plugin/remotes/remotes.js', async: true, condition: function() { return !!document.body.classList; } }
  ]
});
