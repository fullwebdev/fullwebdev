(window.webpackJsonp=window.webpackJsonp||[]).push([[199],{195:function(e,t,n){"use strict";n.r(t),n.d(t,"deckgo_slide_youtube",(function(){return h})),n.d(t,"deckgo_youtube",(function(){return p}));var i=n(11),r=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}u((i=i.apply(e,t||[])).next())}))},o=function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=s.trys,(r=r.length>0&&r[r.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function s(e){return new Promise((function(t){e?(e.forEach((function(e){e.hasAttribute("data-src")&&(e.setAttribute("src",""+e.getAttribute("data-src")),e.removeAttribute("data-src"),e.classList.contains("deckgo-reveal")||e.style.setProperty("visibility","inherit")),e.style.setProperty("pointer-events","none")})),t()):t()}))}function a(e){var t=this;return new Promise((function(n){e?(e.forEach((function(e){return r(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,e.lazyLoad()];case 1:return t.sent(),[2]}}))}))})),n()):n()}))}function u(e,t){var n=this;return new Promise((function(i){return r(n,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return n=[],(r=function(e,t){var n=e.querySelectorAll(t),i=e.shadowRoot?e.shadowRoot.querySelectorAll(t):[];return Array.from(n).concat(Array.from(i))}(e,t))&&r.length>0?(r.forEach((function(e){n.push(e.lazyLoadContent())})),[4,Promise.all(n)]):[3,2];case 1:o.sent(),i(),o.label=2;case 2:return i(),[2]}}))}))}))}function d(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){var t;return o(this,(function(i){switch(i.label){case 0:return(t=[]).push(function(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,s(c(e,"img"))];case 1:return t.sent(),n(),[2]}}))}))}))}(e)),t.push(function(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,a(c(e,"deckgo-lazy-img"))];case 1:return t.sent(),n(),[2]}}))}))}))}(e)),[4,Promise.all(t)];case 1:return i.sent(),n(),[2]}}))}))}))}function c(e,t){var n=e.querySelectorAll("[slot] "+t),i=e.shadowRoot?e.shadowRoot.querySelectorAll(t):[];return Array.from(n).concat(Array.from(i))}function l(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){var t;return o(this,(function(i){switch(i.label){case 0:return(t=[]).push(d(e)),t.push(u(e,"deckgo-gif")),t.push(u(e,"deckgo-youtube")),[4,Promise.all(t)];case 1:return i.sent(),n(),[2]}}))}))}))}var h=function(){function e(e){var t=this;Object(i.g)(this,e),this.isPlaying=!1,this.customActions=!1,this.customBackground=!1,this.onResizeContent=function(){return r(t,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.initSize()];case 1:return e.sent(),[4,this.resizeContent()];case 2:return e.sent(),[2]}}))}))},this.slideDidLoad=Object(i.d)(this,"slideDidLoad",7)}return e.prototype.componentDidLoad=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,(t=this.el,new Promise((function(e){var n=c(t,"img");n?((n=n.filter((function(e){return e.getAttribute("data-src")}))).forEach((function(e){e.style.setProperty("visibility","hidden")})),e()):e()})))];case 1:return e.sent(),this.initWindowResize(),[4,this.initFrameTitle()];case 2:return e.sent(),[4,this.initSize()];case 3:return e.sent(),this.slideDidLoad.emit(),[2]}var t}))}))},e.prototype.beforeSwipe=function(e,t){return new Promise((function(e){e(!0)}))},e.prototype.afterSwipe=function(){var e=this;return new Promise((function(t){return r(e,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.playPauseVideo(!1)];case 1:return e.sent(),t(),[2]}}))}))}))},e.prototype.lazyLoadContent=function(){var e=this;return new Promise((function(t){return r(e,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,l(this.el)];case 1:return e.sent(),[4,this.initSize()];case 2:return e.sent(),[4,this.resizeContent()];case 3:return e.sent(),t(),[2]}}))}))}))},e.prototype.revealContent=function(){return Promise.resolve()},e.prototype.hideContent=function(){return Promise.resolve()},e.prototype.play=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.playPauseVideo(!0)];case 1:return e.sent(),[2]}}))}))},e.prototype.pause=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.playPauseVideo(!1)];case 1:return e.sent(),[2]}}))}))},e.prototype.toggle=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.playPauseVideo(!this.isPlaying)];case 1:return e.sent(),[2]}}))}))},e.prototype.playPauseVideo=function(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){var t;return o(this,(function(i){switch(i.label){case 0:return(t=this.el.shadowRoot.querySelector("deckgo-youtube"))?e?[4,t.play()]:[3,2]:(n(),[2]);case 1:return i.sent(),[3,4];case 2:return[4,t.pause()];case 3:i.sent(),i.label=4;case 4:return this.isPlaying=e,n(),[2]}}))}))}))},e.prototype.initFrameTitle=function(){var e=this;return new Promise((function(t){var n=e.el.querySelector("[slot='title']");n&&(e.frameTitle=n.innerHTML),t()}))},e.prototype.initSize=function(){var e=this;return new Promise((function(t){if(e.width>0&&e.height>0)e.videoWidth=e.width,e.videoHeight=e.height;else{var n=e.el.shadowRoot.querySelector("div.deckgo-youtube-container");n&&(e.videoWidth=n.clientWidth,e.videoHeight=n.clientHeight)}t()}))},e.prototype.initWindowResize=function(){var e,t,n;window&&window.addEventListener("resize",(e=this.onResizeContent,function(i){n&&clearTimeout(n),n=setTimeout(e,t>0?t:300,i)}))},e.prototype.resizeContent=function(){return r(this,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return(e=this.el.shadowRoot.querySelector("deckgo-youtube"))?[4,e.updateIFrame(this.videoWidth,this.videoHeight)]:[3,2];case 1:t.sent(),t.label=2;case 2:return[2]}}))}))},e.prototype.render=function(){return Object(i.f)(i.a,{class:{"deckgo-slide-container":!0}},Object(i.f)("div",{class:"deckgo-slide"},Object(i.f)("slot",{name:"title"}),Object(i.f)("slot",{name:"content"}),Object(i.f)("div",{class:"deckgo-youtube-container"},this.renderVideo()),Object(i.f)("slot",{name:"notes"}),Object(i.f)("slot",{name:"actions"}),Object(i.f)("slot",{name:"background"})))},e.prototype.renderVideo=function(){return Object(i.f)("deckgo-youtube",{src:this.src,width:this.videoWidth,height:this.videoHeight,"frame-title":this.frameTitle})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px}@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}div.deckgo-youtube-container{width:calc(var(--slide-width) - var(--slide-padding-end, 64px) - var(--slide-padding-start, 64px));height:calc(((var(--slide-height) - var(--slide-padding-end, 64px) - var(--slide-padding-start, 64px)) * 9) / 16);display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}@media screen and (max-width:1024px){div.deckgo-youtube-container{width:calc(var(--slide-width) - var(--slide-padding-end, 32px) - var(--slide-padding-start, 32px));height:calc(((var(--slide-height) - var(--slide-padding-end, 32px) - var(--slide-padding-start, 32px)) * 9) / 16)}}"},enumerable:!0,configurable:!0}),e}(),p=function(){function e(e){Object(i.g)(this,e),this.loading=!1}return e.prototype.componentDidLoad=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.addPreconnectLink()];case 1:return e.sent(),[2]}}))}))},e.prototype.addPreconnectLink=function(){var e=this;return new Promise((function(t){if(e.src){var n=document.head.querySelectorAll("link[rel='preconnect']");if(n&&n.length>0)t();else{var i=document.createElement("link");i.rel="preconnect",i.href="https://www.youtube.com",document.head.appendChild(i),t()}}else t()}))},e.prototype.updateIFrame=function(e,t){return r(this,void 0,void 0,(function(){var n;return o(this,(function(i){return(n=this.el.shadowRoot.querySelector("iframe"))&&(n.width=""+e,n.height=""+t),[2]}))}))},e.prototype.lazyLoadContent=function(){return this.createIFrame()},e.prototype.onSrcUpdate=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.createIFrame()];case 1:return e.sent(),[2]}}))}))},e.prototype.createIFrame=function(){var e=this;return new Promise((function(t){return r(e,void 0,void 0,(function(){var e,n,i,r,s,a;return o(this,(function(o){switch(o.label){case 0:return this.src?this.loading||(e=this.el.shadowRoot.querySelector("iframe"))&&!e.parentElement?(t(),[2]):(this.loading=!0,e&&e.parentElement.removeChild(e),n=document.createElement("iframe"),(i=document.createAttribute("allow")).value="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",(r=document.createAttribute("allowfullscreen")).value="",n.setAttributeNode(i),n.setAttributeNode(r),s=n,[4,this.formatSrc()]):(t(),[2]);case 1:return s.src=o.sent(),n.width=""+this.width,n.height=""+this.height,n.frameBorder="0",n.title=this.frameTitle,(a=this.el.shadowRoot.querySelector("div"))?(a.appendChild(n),this.loading=!1,t(),[2]):(t(),[2])}}))}))}))},e.prototype.formatSrc=function(){var e=this;return new Promise((function(t){return r(e,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return[4,this.findVideoId()];case 1:return e=n.sent(),t(e?"https://www.youtube.com/embed/"+e+"?enablejsapi=1":this.src),[2]}}))}))}))},e.prototype.findVideoId=function(){var e=this;return new Promise((function(t){var n=new URL(e.src),i=n.searchParams.get("v");if(!i&&("youtu.be"===n.host&&n.pathname)){var r=n.pathname.split("/");r&&r.length>=2&&(i=n.pathname.split("/")[1])}t(i)}))},e.prototype.play=function(){return this.playPauseVideo(!0)},e.prototype.pause=function(){return this.playPauseVideo(!1)},e.prototype.playPauseVideo=function(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){var t;return o(this,(function(i){return(t=this.el.shadowRoot.querySelector("iframe"))?(t.contentWindow.postMessage(JSON.stringify({event:"command",func:e?"playVideo":"pauseVideo",args:""}),"*"),n(),[2]):(n(),[2])}))}))}))},e.prototype.render=function(){return Object(i.f)("div",null)},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{src:["onSrcUpdate"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return""},enumerable:!0,configurable:!0}),e}()}}]);