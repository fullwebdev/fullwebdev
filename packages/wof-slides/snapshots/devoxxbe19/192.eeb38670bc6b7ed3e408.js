(window.webpackJsonp=window.webpackJsonp||[]).push([[192],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"deckgo_slide_title",(function(){return p}));var r=n(7),i=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function a(e){try{l(r.next(e))}catch(e){o(e)}}function s(e){try{l(r.throw(e))}catch(e){o(e)}}function l(e){e.done?i(e.value):new n((function(t){t(e.value)})).then(a,s)}l((r=r.apply(e,t||[])).next())}))},o=function(e,t){var n,r,i,o,a={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!(i=(i=a.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){a.label=o[1];break}if(6===o[0]&&a.label<i[1]){a.label=i[1],i=o;break}if(i&&a.label<i[2]){a.label=i[2],a.ops.push(o);break}i[2]&&a.ops.pop(),a.trys.pop();continue}o=t.call(e,a)}catch(e){o=[6,e],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};function a(e,t){var n=this;return new Promise((function(r){return i(n,void 0,void 0,(function(){var n,i;return o(this,(function(o){switch(o.label){case 0:return n=[],(i=function(e,t){var n=e.querySelectorAll(t),r=e.shadowRoot?e.shadowRoot.querySelectorAll(t):[];return Array.from(n).concat(Array.from(r))}(e,t))&&i.length>0?(i.forEach((function(e){n.push(e.lazyLoadContent())})),[4,Promise.all(n)]):[3,2];case 1:o.sent(),r(),o.label=2;case 2:return r(),[2]}}))}))}))}function s(e){return new Promise((function(t){e?(e.forEach((function(e){e.hasAttribute("data-src")&&(e.setAttribute("src",""+e.getAttribute("data-src")),e.removeAttribute("data-src"),e.classList.contains("deckgo-reveal")||e.style.setProperty("visibility","inherit")),e.style.setProperty("pointer-events","none")})),t()):t()}))}function l(e){var t=this;return new Promise((function(n){e?(e.forEach((function(e){return i(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,e.lazyLoad()];case 1:return t.sent(),[2]}}))}))})),n()):n()}))}function d(e){var t=this;return new Promise((function(n){return i(t,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return(t=[]).push(function(e){var t=this;return new Promise((function(n){return i(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,s(u(e,"img"))];case 1:return t.sent(),n(),[2]}}))}))}))}(e)),t.push(function(e){var t=this;return new Promise((function(n){return i(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return[4,l(u(e,"deckgo-lazy-img"))];case 1:return t.sent(),n(),[2]}}))}))}))}(e)),[4,Promise.all(t)];case 1:return r.sent(),n(),[2]}}))}))}))}function u(e,t){var n=e.querySelectorAll("[slot] "+t),r=e.shadowRoot?e.shadowRoot.querySelectorAll(t):[];return Array.from(n).concat(Array.from(r))}function c(e){var t=this;return new Promise((function(n){return i(t,void 0,void 0,(function(){var t,r,i;return o(this,(function(o){switch(o.label){case 0:return t=e.querySelectorAll("deckgo-reveal, deckgo-reveal-list"),r=!0,t?(i=Array.from(t).find((function(e){return!e.allElementsRevealed})))?[4,i.reveal()]:[3,2]:[3,2];case 1:o.sent(),r=!1,o.label=2;case 2:return n(r),[2]}}))}))}))}function f(e){var t=this;return new Promise((function(n){return i(t,void 0,void 0,(function(){var t,r,i;return o(this,(function(o){switch(o.label){case 0:return t=e.querySelectorAll("deckgo-reveal, deckgo-reveal-list"),r=!0,t?(i=Array.from(t).reverse().find((function(e){return!e.allElementsHidden})))?[4,i.hide()]:[3,2]:[3,2];case 1:o.sent(),r=!1,o.label=2;case 2:return n(r),[2]}}))}))}))}var p=function(){function e(e){Object(r.g)(this,e),this.customActions=!1,this.customBackground=!1,this.slideDidLoad=Object(r.d)(this,"slideDidLoad",7)}return e.prototype.componentDidLoad=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,(t=this.el,new Promise((function(e){var n=u(t,"img");n?((n=n.filter((function(e){return e.getAttribute("data-src")}))).forEach((function(e){e.style.setProperty("visibility","hidden")})),e()):e()})))];case 1:return e.sent(),this.slideDidLoad.emit(),[2]}var t}))}))},e.prototype.beforeSwipe=function(e,t){return function(e,t,n){var r=this;return new Promise((function(a){return i(r,void 0,void 0,(function(){var r;return o(this,(function(i){switch(i.label){case 0:return n?t?[4,c(e)]:[3,2]:[3,5];case 1:return r=i.sent(),[3,4];case 2:return[4,f(e)];case 3:r=i.sent(),i.label=4;case 4:return a(r),[3,6];case 5:a(!0),i.label=6;case 6:return[2]}}))}))}))}(this.el,e,t)},e.prototype.afterSwipe=function(){return new Promise((function(e){e()}))},e.prototype.lazyLoadContent=function(){return function(e){var t=this;return new Promise((function(n){return i(t,void 0,void 0,(function(){var t;return o(this,(function(r){switch(r.label){case 0:return(t=[]).push(d(e)),t.push(a(e,"deckgo-gif")),t.push(a(e,"deckgo-youtube")),[4,Promise.all(t)];case 1:return r.sent(),n(),[2]}}))}))}))}(this.el)},e.prototype.revealContent=function(){return function(e){var t=this;return new Promise((function(n){return i(t,void 0,void 0,(function(){var t,r,i,a,s;return o(this,(function(o){switch(o.label){case 0:if(!((t=e.querySelectorAll("deckgo-reveal, deckgo-reveal-list"))&&t.length>0))return[3,2];for(r=[],i=0,a=Array.from(t);i<a.length;i++)s=a[i],r.push(s.revealAll());return[4,Promise.all(r)];case 1:o.sent(),o.label=2;case 2:return n(),[2]}}))}))}))}(this.el)},e.prototype.hideContent=function(){return function(e){var t=this;return new Promise((function(n){return i(t,void 0,void 0,(function(){var t,r,i,a,s;return o(this,(function(o){switch(o.label){case 0:if(!((t=e.querySelectorAll("deckgo-reveal, deckgo-reveal-list"))&&t.length>0))return[3,2];for(r=[],i=0,a=Array.from(t);i<a.length;i++)s=a[i],r.push(s.hideAll());return[4,Promise.all(r)];case 1:o.sent(),o.label=2;case 2:return n(),[2]}}))}))}))}(this.el)},e.prototype.render=function(){return Object(r.f)(r.a,{class:{"deckgo-slide-container":!0}},Object(r.f)("div",{class:"deckgo-slide"},Object(r.f)("slot",{name:"title"}),Object(r.f)("slot",{name:"content"}),Object(r.f)("slot",{name:"notes"}),Object(r.f)("slot",{name:"actions"}),Object(r.f)("slot",{name:"background"})))},Object.defineProperty(e.prototype,"el",{get:function(){return Object(r.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px}@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}::slotted([slot=content]),::slotted([slot=title]){text-align:center}"},enumerable:!0,configurable:!0}),e}()}}]);