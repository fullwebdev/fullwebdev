(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{219:function(t,e,i){"use strict";i.r(e),i.d(e,"deckgo_slide_big_img",(function(){return h}));var n=i(17),r=function(t,e,i,n){return new(i||(i=Promise))((function(r,s){function o(t){try{l(n.next(t))}catch(t){s(t)}}function a(t){try{l(n.throw(t))}catch(t){s(t)}}function l(t){t.done?r(t.value):new i((function(e){e(t.value)})).then(o,a)}l((n=n.apply(t,e||[])).next())}))},s=function(t,e){var i,n,r,s,o={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(i)throw new TypeError("Generator is already executing.");for(;o;)try{if(i=1,n&&(r=2&s[0]?n.return:s[0]?n.throw||((r=n.return)&&r.call(n),0):n.next)&&!(r=r.call(n,s[1])).done)return r;switch(n=0,r&&(s=[2&s[0],r.value]),s[0]){case 0:case 1:r=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,n=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(r=o.trys,(r=r.length>0&&r[r.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!r||s[1]>r[0]&&s[1]<r[3])){o.label=s[1];break}if(6===s[0]&&o.label<r[1]){o.label=r[1],r=s;break}if(r&&o.label<r[2]){o.label=r[2],o.ops.push(s);break}r[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],n=0}finally{i=r=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};function o(t,e){var i=this;return new Promise((function(n){return r(i,void 0,void 0,(function(){var i,r;return s(this,(function(s){switch(s.label){case 0:return i=[],(r=function(t,e){var i=t.querySelectorAll(e),n=t.shadowRoot?t.shadowRoot.querySelectorAll(e):[];return Array.from(i).concat(Array.from(n))}(t,e))&&r.length>0?(r.forEach((function(t){i.push(t.lazyLoadContent())})),[4,Promise.all(i)]):[3,2];case 1:s.sent(),n(),s.label=2;case 2:return n(),[2]}}))}))}))}function a(t){return new Promise((function(e){t?(t.forEach((function(t){t.hasAttribute("data-src")&&(t.setAttribute("src",""+t.getAttribute("data-src")),t.removeAttribute("data-src"),t.classList.contains("deckgo-reveal")||t.style.setProperty("visibility","inherit")),t.style.setProperty("pointer-events","none")})),e()):e()}))}function l(t){var e=this;return new Promise((function(i){t?(t.forEach((function(t){return r(e,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,t.lazyLoad()];case 1:return e.sent(),[2]}}))}))})),i()):i()}))}function d(t){var e=this;return new Promise((function(i){return r(e,void 0,void 0,(function(){var e;return s(this,(function(n){switch(n.label){case 0:return(e=[]).push(function(t){var e=this;return new Promise((function(i){return r(e,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,a(c(t,"img"))];case 1:return e.sent(),i(),[2]}}))}))}))}(t)),e.push(function(t){var e=this;return new Promise((function(i){return r(e,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return[4,l(c(t,"deckgo-lazy-img"))];case 1:return e.sent(),i(),[2]}}))}))}))}(t)),[4,Promise.all(e)];case 1:return n.sent(),i(),[2]}}))}))}))}function c(t,e){var i=t.querySelectorAll("[slot] "+e),n=t.shadowRoot?t.shadowRoot.querySelectorAll(e):[];return Array.from(i).concat(Array.from(n))}var u=function(t){return t.charAt(0).toUpperCase()+t.slice(1)},h=function(){function t(t){Object(n.g)(this,t),this.customActions=!1,this.customBackground=!1,this.imgSrc="",this.imgDivisions="",this.axis="x",this.reverse=!1,this.currentStep=-1,this.slideDidLoad=Object(n.d)(this,"slideDidLoad",7)}return Object.defineProperty(t.prototype,"divisions",{get:function(){return this.imgDivisions.split(";").map((function(t){var e=parseInt(t);return isNaN(e)?0:e}))},enumerable:!0,configurable:!0}),t.prototype.componentDidLoad=function(){return r(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,(e=this.el,new Promise((function(t){var i=c(e,"img");i?((i=i.filter((function(t){return t.getAttribute("data-src")}))).forEach((function(t){t.style.setProperty("visibility","hidden")})),t()):t()})))];case 1:return t.sent(),this.crop=this.el.shadowRoot.querySelector(".deckgo-big-img-container"),this.bigImg=this.el.shadowRoot.querySelector("img"),this.slideDidLoad.emit(),[2]}var e}))}))},t.prototype.next=function(){var t=this;return new Promise((function(e){t.prevNext(!0),e()}))},t.prototype.prev=function(){var t=this;return new Promise((function(e){t.prevNext(!1),e()}))},t.prototype.prevNext=function(t){var e=this,i="x"===this.axis?"width":"height",n="y"===this.axis?"width":"height",r="margin"+("x"===this.axis?"Left":"Top");if(-1===this.currentStep&&t?this.currentStep=this.reverse?this.divisions.length:0:this.currentStep===this.divisions.length&&!t&&this.reverse?this.currentStep=-1:this.currentStep=this.currentStep+(this.reverse?-1:1)*(t?1:-1),-1===this.currentStep)this.bigImg.classList.remove("cropped"),this.bigImg.style[r]="",this.bigImg.style[n]="",this.crop.style[i]="",this.crop.style[n]="";else{this.crop.style[n]="100%",this.bigImg.style[n]="100%",this.bigImg.classList.add("cropped");var s=0===this.currentStep?0:this.divisions[this.currentStep-1],o=function(){var t=e.bigImg["client"+u(i)],n=e.bigImg["natural"+u(i)],r=t/n;return{length:((e.currentStep===e.divisions.length?n:e.divisions[e.currentStep])-s)*r,shift:-s*r}},a=o();a.length>this.el.shadowRoot.querySelector(".deckgo-big-img-container").clientHeight&&(this.crop.style[n]="",a=o()),this.crop.style[i]=a.length+"px",this.bigImg.style[r]=a.shift+"px"}},t.prototype.isEnd=function(){return this.reverse?0===this.currentStep:this.currentStep===this.divisions.length},t.prototype.isBeginning=function(){return-1===this.currentStep},t.prototype.beforeSwipe=function(t){var e=this;return new Promise((function(i){return r(e,void 0,void 0,(function(){return s(this,(function(e){switch(e.label){case 0:return!this.divisions[0]||(t?this.isEnd():this.isBeginning())?(i(!0),[2]):t?[4,this.next()]:[3,2];case 1:return e.sent(),[3,4];case 2:return[4,this.prev()];case 3:e.sent(),e.label=4;case 4:return i(!1),[2]}}))}))}))},t.prototype.afterSwipe=function(){return new Promise((function(t){t()}))},t.prototype.lazyLoadContent=function(){return function(t){var e=this;return new Promise((function(i){return r(e,void 0,void 0,(function(){var e;return s(this,(function(n){switch(n.label){case 0:return(e=[]).push(d(t)),e.push(o(t,"deckgo-gif")),e.push(o(t,"deckgo-youtube")),[4,Promise.all(e)];case 1:return n.sent(),i(),[2]}}))}))}))}(this.el)},t.prototype.revealContent=function(){return function(t){var e=this;return new Promise((function(i){return r(e,void 0,void 0,(function(){var e,n,r,o,a;return s(this,(function(s){switch(s.label){case 0:if(!((e=t.querySelectorAll("deckgo-reveal, deckgo-reveal-list"))&&e.length>0))return[3,2];for(n=[],r=0,o=Array.from(e);r<o.length;r++)a=o[r],n.push(a.revealAll());return[4,Promise.all(n)];case 1:s.sent(),s.label=2;case 2:return i(),[2]}}))}))}))}(this.el)},t.prototype.hideContent=function(){return function(t){var e=this;return new Promise((function(i){return r(e,void 0,void 0,(function(){var e,n,r,o,a;return s(this,(function(s){switch(s.label){case 0:if(!((e=t.querySelectorAll("deckgo-reveal, deckgo-reveal-list"))&&e.length>0))return[3,2];for(n=[],r=0,o=Array.from(e);r<o.length;r++)a=o[r],n.push(a.hideAll());return[4,Promise.all(n)];case 1:s.sent(),s.label=2;case 2:return i(),[2]}}))}))}))}(this.el)},t.prototype.render=function(){return Object(n.f)(n.a,{class:{"deckgo-slide-container":!0}},Object(n.f)("div",{class:"deckgo-slide"},Object(n.f)("slot",{name:"title"}),Object(n.f)("div",{class:"deckgo-big-img-container"},Object(n.f)("img",{"data-src":this.imgSrc,alt:this.imgAlt}),Object(n.f)("slot",{name:"notes"}),Object(n.f)("slot",{name:"actions"}),Object(n.f)("slot",{name:"background"}))))},Object.defineProperty(t.prototype,"el",{get:function(){return Object(n.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px}@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;margin:0 0}div.deckgo-slide .deckgo-big-img-container{overflow:hidden;text-align:center}div.deckgo-slide .deckgo-big-img-container img{max-width:var(--slide-img-max-width)}div.deckgo-slide .deckgo-big-img-container img:not(.cropped){max-width:100%;max-height:100%}::slotted([slot=title]){display:none}"},enumerable:!0,configurable:!0}),t}()}}]);