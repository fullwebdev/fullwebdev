(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"deckgo_slide_qrcode",(function(){return u}));var i=n(16),r=function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{d(i.next(e))}catch(e){o(e)}}function a(e){try{d(i.throw(e))}catch(e){o(e)}}function d(e){e.done?r(e.value):new n((function(t){t(e.value)})).then(s,a)}d((i=i.apply(e,t||[])).next())}))},o=function(e,t){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,i&&(r=2&o[0]?i.return:o[0]?i.throw||((r=i.return)&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(r=(r=s.trys).length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}};function s(e){return new Promise((function(t){e?(e.forEach((function(e){e.hasAttribute("data-src")&&(e.setAttribute("src",""+e.getAttribute("data-src")),e.removeAttribute("data-src"),e.classList.contains("deckgo-reveal")||e.style.setProperty("visibility","inherit")),e.style.setProperty("pointer-events","none")})),t()):t()}))}function a(e){var t=this;return new Promise((function(n){e?(e.forEach((function(e){return r(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,e.lazyLoad()];case 1:return t.sent(),[2]}}))}))})),n()):n()}))}function d(e,t){var n=this;return new Promise((function(i){return r(n,void 0,void 0,(function(){var n,r;return o(this,(function(o){switch(o.label){case 0:return n=[],(r=function(e,t){var n=e.querySelectorAll(t),i=e.shadowRoot?e.shadowRoot.querySelectorAll(t):[];return Array.from(n).concat(Array.from(i))}(e,t))&&r.length>0?(r.forEach((function(e){n.push(e.lazyLoadContent())})),[4,Promise.all(n)]):[3,2];case 1:o.sent(),i(),o.label=2;case 2:return i(),[2]}}))}))}))}function l(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){var t;return o(this,(function(i){switch(i.label){case 0:return(t=[]).push(function(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,s(c(e,"img"))];case 1:return t.sent(),n(),[2]}}))}))}))}(e)),t.push(function(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,a(c(e,"deckgo-lazy-img"))];case 1:return t.sent(),n(),[2]}}))}))}))}(e)),[4,Promise.all(t)];case 1:return i.sent(),n(),[2]}}))}))}))}function c(e,t){var n=e.querySelectorAll("[slot] "+t),i=e.shadowRoot?e.shadowRoot.querySelectorAll(t):[];return Array.from(n).concat(Array.from(i))}var u=function(){function e(e){var t=this;Object(i.g)(this,e),this.customActions=!1,this.customBackground=!1,this.onResizeContent=function(){return r(t,void 0,void 0,(function(){var e;return o(this,(function(t){switch(t.label){case 0:return[4,this.initQRCodeSize()];case 1:return t.sent(),(e=this.el.shadowRoot.querySelector("deckgo-qrcode"))?[4,e.generate()]:[3,3];case 2:t.sent(),t.label=3;case 3:return[2]}}))}))},this.slideDidLoad=Object(i.d)(this,"slideDidLoad",7)}return e.prototype.componentDidLoad=function(){return r(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,(t=this.el,new Promise((function(e){var n=c(t,"img");n?((n=n.filter((function(e){return e.getAttribute("data-src")}))).forEach((function(e){e.style.setProperty("visibility","hidden")})),e()):e()})))];case 1:return e.sent(),this.initWindowResize(),this.slideDidLoad.emit(),[2]}var t}))}))},e.prototype.initWindowResize=function(){var e,t,n;window&&window.addEventListener("resize",(e=this.onResizeContent,function(i){n&&clearTimeout(n),n=setTimeout(e,t>0?t:300,i)}))},e.prototype.initQRCodeSize=function(){var e=this;return new Promise((function(t){var n=e.el.shadowRoot.querySelector("div.deckgo-slide-qrcode");if(n){var i=n.clientWidth,r=n.clientHeight,o=n.querySelector("deckgo-qrcode");o&&o.style.setProperty("--deckgo-qrcode-size",i>r?r+"px":"calc("+i+"px - 32px)")}t()}))},e.prototype.beforeSwipe=function(e,t){return new Promise((function(e){e(!0)}))},e.prototype.afterSwipe=function(){return new Promise((function(e){e()}))},e.prototype.lazyLoadContent=function(){var e=this;return new Promise((function(t){return r(e,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return(e=[]).push(function(e){var t=this;return new Promise((function(n){return r(t,void 0,void 0,(function(){var t;return o(this,(function(i){switch(i.label){case 0:return(t=[]).push(l(e)),t.push(d(e,"deckgo-gif")),t.push(d(e,"deckgo-youtube")),[4,Promise.all(t)];case 1:return i.sent(),n(),[2]}}))}))}))}(this.el)),e.push(this.initQRCodeSize()),[4,Promise.all(e)];case 1:return n.sent(),t(),[2]}}))}))}))},e.prototype.revealContent=function(){return Promise.resolve()},e.prototype.hideContent=function(){return Promise.resolve()},e.prototype.render=function(){return Object(i.f)(i.a,{class:{"deckgo-slide-container":!0}},Object(i.f)("div",{class:"deckgo-slide"},Object(i.f)("slot",{name:"title"}),Object(i.f)("div",{class:"deckgo-slide-qrcode"},Object(i.f)("slot",{name:"content"}),Object(i.f)("deckgo-qrcode",{content:this.content})),Object(i.f)("slot",{name:"notes"}),Object(i.f)("slot",{name:"actions"}),Object(i.f)("slot",{name:"background"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(i.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px}@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:start;align-items:flex-start;-ms-flex-pack:start;justify-content:flex-start}div.deckgo-slide-qrcode{height:100%;width:100%;display:-ms-flexbox;display:flex;-ms-flex-flow:row;flex-flow:row;-ms-flex-align:var(--slide-qrcode-align,center);align-items:var(--slide-qrcode-align,center);text-align:var(--slide-qrcode-text-align,center)}div.deckgo-slide-qrcode>*{-ms-flex:1 50%;flex:1 50%}div.deckgo-slide-qrcode deckgo-qrcode{background:var(--slide-qrcode-background)}::slotted([slot=title]){display:var(--slide-qrcode-title-display,inherit)}::slotted([slot=content]){-ms-flex:1 50%;flex:1 50%}"},enumerable:!0,configurable:!0}),e}()}}]);