(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{249:function(e,t,r){"use strict";r.r(t),r.d(t,"deckgo_lazy_img",(function(){return l}));var n=r(23),i=function(e,t,r,n){return new(r||(r=Promise))((function(i,o){function s(e){try{c(n.next(e))}catch(e){o(e)}}function a(e){try{c(n.throw(e))}catch(e){o(e)}}function c(e){e.done?i(e.value):new r((function(t){t(e.value)})).then(s,a)}c((n=n.apply(e,t||[])).next())}))},o=function(e,t){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=s.trys,(i=i.length>0&&i[i.length-1])||6!==o[0]&&2!==o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=t.call(e,s)}catch(e){o=[6,e],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},s=function(e){if(1===e.nodeType){if("script"===e.nodeName.toLowerCase())return!1;for(var t=0;t<e.attributes.length;t++){var r=e.attributes[t].value;if(a(r)&&0===r.toLowerCase().indexOf("on"))return!1}for(t=0;t<e.childNodes.length;t++)if(!s(e.childNodes[t]))return!1}return!0},a=function(e){return"string"==typeof e},c=new Map,u=function(e){var t=c.get(e);return t||(t=fetch(e).then((function(e){return e.status<=299?e.text():Promise.resolve(null)})).then((function(e){return function(e){if(e){var t=document.createElement("div");t.innerHTML=e;for(var r=t.childNodes.length-1;r>=0;r--)"svg"!==t.childNodes[r].nodeName.toLowerCase()&&t.removeChild(t.childNodes[r]);var n=t.firstElementChild;if(n&&"svg"===n.nodeName.toLowerCase()&&(n.setAttribute("class","s-ion-icon"),s(n)))return t.innerHTML}return""}(e)})),c.set(e,t)),t},l=function(){function e(e){var t=this;Object(n.g)(this,e),this.observerRootMargin="100px 0px",this.imgLoaded=!1,this.onIntersection=function(e){return i(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return!e||e.length<=0?[2]:[4,this.handleIntersection(e[0])];case 1:return t.sent(),[2]}}))}))},this.lazyImgDidLoad=Object(n.d)(this,"lazyImgDidLoad",7)}return e.prototype.componentDidLoad=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.init()];case 1:return e.sent(),this.lazyImgDidLoad.emit(),[2]}}))}))},e.prototype.handleAttrImgSrc=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.init()];case 1:return e.sent(),[2]}}))}))},e.prototype.init=function(){return i(this,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return"loading"in HTMLImageElement.prototype?[4,this.loadImmediately()]:[3,2];case 1:return e.sent(),[3,6];case 2:return window&&"IntersectionObserver"in window?[4,this.deferIntersectionObserverLoad()]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,this.loadImmediately()];case 5:e.sent(),e.label=6;case 6:return[2]}}))}))},e.prototype.loadImmediately=function(){return this.load()},e.prototype.deferIntersectionObserverLoad=function(){var e=this;return new Promise((function(t){e.observer=new IntersectionObserver(e.onIntersection,{rootMargin:e.observerRootMargin,threshold:e.observerThreshold}),e.observer.observe(e.el.shadowRoot.host),t()}))},e.prototype.lazyLoad=function(){var e=this;return new Promise((function(t){return i(e,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return[4,this.load()];case 1:return e.sent(),t(),[2]}}))}))}))},e.prototype.handleIntersection=function(e){var t=this;return new Promise((function(r){return i(t,void 0,void 0,(function(){return o(this,(function(t){switch(t.label){case 0:return e.isIntersecting?(this.observer&&this.observer.disconnect(),[4,this.load()]):[3,2];case 1:t.sent(),t.label=2;case 2:return r(),[2]}}))}))}))},e.prototype.load=function(){var e=this;return new Promise((function(t){return i(e,void 0,void 0,(function(){return o(this,(function(e){switch(e.label){case 0:return this.svgSrc?[4,this.loadSvg()]:[3,2];case 1:return e.sent(),[3,4];case 2:return[4,this.loadImg()];case 3:e.sent(),e.label=4;case 4:return t(),[2]}}))}))}))},e.prototype.loadImg=function(){var e=this;return new Promise((function(t){var r=e.el.shadowRoot.querySelector("img");r?(e.imgSrc&&r.setAttribute("src",e.imgSrc),e.imgSrcSet&&r.setAttribute("srcset",e.imgSrcSet),t()):t()}))},e.prototype.loadSvg=function(){var e=this;return new Promise((function(t){return i(e,void 0,void 0,(function(){var e,r;return o(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,u(this.svgSrc)];case 1:return e.svgContent=n.sent(),[3,3];case 2:return r=n.sent(),console.error(r),[3,3];case 3:return t(),[2]}}))}))}))},e.prototype.loadError=function(){var e=this;return new Promise((function(t){var r=e.el.shadowRoot.querySelector("img");r&&e.imgErrorSrc&&r.src!==e.imgErrorSrc?(r.src!==e.imgSrc&&r.srcset!==e.imgSrcSet||(r.src=e.imgErrorSrc),t()):t()}))},e.prototype.render=function(){return this.svgContent?Object(n.f)(n.a,null,Object(n.f)("div",{innerHTML:this.svgContent})):Object(n.f)(n.a,null,this.renderImage())},e.prototype.renderImage=function(){var e=this;return Object(n.f)("img",{alt:this.imgLoaded?this.imgAlt?this.imgAlt:this.imgSrc:"",loading:"lazy",sizes:this.imgSizes?this.imgSizes:void 0,intrinsicsize:this.intrinsicsize,onLoad:function(){return e.imgLoaded=!0},onError:function(){return e.loadError()}})},Object.defineProperty(e.prototype,"el",{get:function(){return Object(n.e)(this)},enumerable:!0,configurable:!0}),Object.defineProperty(e,"watchers",{get:function(){return{imgSrc:["handleAttrImgSrc"]}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return":host{fill:currentColor}img,svg{pointer-events:var(--deckgo-lazy-img-pointer-events,none);height:var(--deckgo-lazy-img-height);width:var(--deckgo-lazy-img-width);max-height:var(--deckgo-lazy-img-max-height);max-width:var(--deckgo-lazy-img-max-width,100%);min-height:var(--deckgo-lazy-img-min-height);min-width:var(--deckgo-lazy-img-min-width);float:var(--deckgo-lazy-img-float);padding:var(--deckgo-lazy-img-padding);vertical-align:var(--deckgo-lazy-img-vertical-align);display:var(--deckgo-lazy-img-display);border-radius:var(--deckgo-lazy-img-border-radius);-o-object-fit:var(--deckgo-lazy-img-object-fit);object-fit:var(--deckgo-lazy-img-object-fit)}"},enumerable:!0,configurable:!0}),e}()}}]);