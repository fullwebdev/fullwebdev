(window.webpackJsonp=window.webpackJsonp||[]).push([[168],{213:function(t,e,n){"use strict";n.r(e),n.d(e,"deckgo_slide_countdown",(function(){return r}));var i=n(14),o=function(t,e,n,i){return new(n||(n=Promise))((function(o,s){function r(t){try{a(i.next(t))}catch(t){s(t)}}function d(t){try{a(i.throw(t))}catch(t){s(t)}}function a(t){t.done?o(t.value):new n((function(e){e(t.value)})).then(r,d)}a((i=i.apply(t,e||[])).next())}))},s=function(t,e){var n,i,o,s,r={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:d(0),throw:d(1),return:d(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function d(s){return function(d){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;r;)try{if(n=1,i&&(o=2&s[0]?i.return:s[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;switch(i=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return r.label++,{value:s[1],done:!1};case 5:r.label++,i=s[1],s=[0];continue;case 7:s=r.ops.pop(),r.trys.pop();continue;default:if(!(o=(o=r.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){r=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){r.label=s[1];break}if(6===s[0]&&r.label<o[1]){r.label=o[1],o=s;break}if(o&&r.label<o[2]){r.label=o[2],r.ops.push(s);break}o[2]&&r.ops.pop(),r.trys.pop();continue}s=e.call(t,r)}catch(t){s=[6,t],i=0}finally{n=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,d])}}},r=function(){function t(t){Object(i.f)(this,t),this.days=0,this.hours=0,this.minutes=0,this.seconds=0,this.mDays=0,this.mHours=0,this.mMinutes=0,this.mSeconds=0,this.mTotalSeconds=0,this.mCountdownInterval=-1,this.customActions=!1,this.customBackground=!1,this.slideDidLoad=Object(i.d)(this,"slideDidLoad",7)}return t.prototype.componentDidLoad=function(){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.clearUp()];case 1:return t.sent(),[4,this.init()];case 2:return t.sent(),[4,this.startCountdown()];case 3:return t.sent(),this.slideDidLoad.emit(),[2]}}))}))},t.prototype.componentDidUnload=function(){return o(this,void 0,void 0,(function(){return s(this,(function(t){return this.clearUp(),[2]}))}))},t.prototype.beforeSwipe=function(t,e){return Promise.resolve(!0)},t.prototype.afterSwipe=function(){var t=this;return new Promise((function(e){return o(t,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.clearUp()];case 1:return t.sent(),e(),[2]}}))}))}))},t.prototype.lazyLoadContent=function(){return Promise.resolve()},t.prototype.revealContent=function(){return Promise.resolve()},t.prototype.hideContent=function(){return Promise.resolve()},t.prototype.start=function(){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.startCountdown()];case 1:return t.sent(),[2]}}))}))},t.prototype.stop=function(){return o(this,void 0,void 0,(function(){return s(this,(function(t){switch(t.label){case 0:return[4,this.clearUp()];case 1:return t.sent(),[2]}}))}))},t.prototype.clearUp=function(){var t=this;return new Promise((function(e){t.mCountdownInterval>-1&&(clearInterval(t.mCountdownInterval),t.mCountdownInterval=-1),e()}))},t.prototype.init=function(){var t=this;return new Promise((function(e){return o(t,void 0,void 0,(function(){var t,n,i,o;return s(this,(function(s){return this.until&&void 0!==this.until&&""!==this.until&&(t=new Date(this.until),n=new Date,t&&t.getTime()>n.getTime())?((i=(t.getTime()-n.getTime())/36e5)>=24?(o=i/24,this.mDays=o>=99?99:Math.floor(o),this.mHours=Math.floor(o%1*24)):(this.mDays=0,this.mHours=Math.floor(i)),i=i%1*60,this.mMinutes=Math.floor(i),i=i%1*60,this.mSeconds=Math.floor(i),this.mTotalSeconds=24*this.mDays*60*60+60*this.mHours*60+60*this.mMinutes+this.mSeconds,e(),[2]):(this.mDays=this.days,this.mHours=this.hours,this.mMinutes=this.minutes,this.mSeconds=this.seconds,this.mTotalSeconds=24*this.mDays*60*60+60*this.mHours*60+60*this.mMinutes+this.mSeconds,e(),[2])}))}))}))},t.prototype.startCountdown=function(){var t=this;return new Promise((function(e){t.mCountdownInterval=setInterval((function(){return o(t,void 0,void 0,(function(){return s(this,(function(t){return this.mTotalSeconds>0?(--this.mSeconds,this.mMinutes>=0&&this.mSeconds<0&&(this.mSeconds=59,--this.mMinutes),this.mHours>=0&&this.mMinutes<0&&(this.mMinutes=59,--this.mHours),--this.mTotalSeconds):(clearInterval(this.mCountdownInterval),this.mCountdownInterval=-1),[2]}))}))}),1e3),e()}))},t.prototype.render=function(){return Object(i.e)(i.a,{class:{"deckgo-slide-container":!0}},Object(i.e)("div",{class:"deckgo-slide"},Object(i.e)("slot",{name:"title"}),this.renderCountdown(),Object(i.e)("slot",{name:"notes"}),Object(i.e)("slot",{name:"actions"}),Object(i.e)("slot",{name:"background"})))},t.prototype.renderCountdown=function(){return this.mDays>=1?Object(i.e)("div",{class:"deckgo-countdown-container"},this.renderCountdownTime("days",this.mDays),this.renderCountdownTime("hours",this.mHours),this.renderCountdownTime("minutes",this.mMinutes)):Object(i.e)("div",{class:"deckgo-countdown-container"},this.renderCountdownTime("hours",this.mHours),this.renderCountdownTime("minutes",this.mMinutes),this.renderCountdownTime("seconds",this.mSeconds))},t.prototype.renderCountdownTime=function(t,e){return Object(i.e)("div",{class:"time-container"},Object(i.e)("slot",{name:t}),Object(i.e)("div",{class:"figure-container"},Object(i.e)("div",{class:"figure tens"},Object(i.e)("span",null,""+(e>=10?Math.floor(e/10)%10:0))),Object(i.e)("div",{class:"figure unit"},Object(i.e)("span",null,""+e%10))))},Object.defineProperty(t,"style",{get:function(){return":host{position:relative;background:var(--background);color:var(--color);height:100%;z-index:var(--zIndex,1);--slide-padding-top-default:64px;--slide-padding-end-default:64px;--slide-padding-bottom-default:64px;--slide-padding-start-default:64px}@media screen and (max-width:1024px){:host{--slide-padding-top-default:16px;--slide-padding-end-default:32px;--slide-padding-bottom-default:16px;--slide-padding-start-default:32px}}div.deckgo-slide{display:-ms-flexbox;display:flex;padding:var(--slide-padding-top,var(--slide-padding-top-default)) var(--slide-padding-end,var(--slide-padding-end-default)) var(--slide-padding-bottom,var(--slide-padding-bottom-default)) var(--slide-padding-start,var(--slide-padding-start-default));width:calc(var(--slide-width) - var(--slide-padding-start, var(--slide-padding-start-default)) - var(--slide-padding-end, var(--slide-padding-end-default)));height:calc(var(--slide-height) - var(--slide-padding-top, var(--slide-padding-top-default)) - var(--slide-padding-bottom, var(--slide-padding-bottom-default)));-webkit-touch-callout:var(--slide-user-select,none);-webkit-user-select:var(--slide-user-select,none);-moz-user-select:var(--slide-user-select,none);-ms-user-select:var(--slide-user-select,none);user-select:var(--slide-user-select,none);user-drag:none;-webkit-user-drag:none}::slotted(ol),::slotted(ul){-webkit-padding-start:var(--slide-padding-start,var(--slide-padding-start-default));padding-inline-start:var(--slide-padding-start,var(--slide-padding-start-default))}::slotted([slot=notes]){display:none}::slotted([slot=actions]){position:absolute;top:var(--slide-actions-top,32px);right:var(--slide-actions-end,32px);left:var(--slide-actions-start);display:var(--slide-actions-display)}::slotted([slot=background]){position:var(--slide-background-position,absolute);top:var(--slide-background-top,0);right:var(--slide-background-end);left:var(--slide-background-start,0);pointer-events:none;z-index:-1;width:var(--slide-background-width);height:var(--slide-background-height)}@media print{div.deckgo-slide{padding:0;page-break-after:always;height:100vh}::slotted([slot=actions]){display:none}::slotted([slot=background]){display:var(--slide-background-print-display,none)}}div.deckgo-slide{-ms-flex-direction:column;flex-direction:column;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}::slotted([slot=content]),::slotted([slot=title]){text-align:center}div.deckgo-countdown-container{padding-bottom:var(--slide-countdown-container-padding-bottom,64px);width:inherit;max-width:var(--slide-countdown-digits-max-width,36em);display:grid;grid-template-columns:repeat(auto-fit,minmax(var(--slide-countdown-digits-minmax-width,12em),1fr))}div.deckgo-countdown-container div.time-container{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}div.deckgo-countdown-container div.time-container div.figure-container{display:-ms-flexbox;display:flex;text-align:center}div.deckgo-countdown-container div.time-container div.figure-container div.figure{width:var(--slide-countdown-digits-width,4em);height:var(--slide-countdown-digits-height,4em);background:var(--slide-countdown-digits-background,#fff);border-radius:var(--slide-countdown-digits-border-radius,.5em);-webkit-box-shadow:var(--slide-countdown-digits-box-shadow,0 3px 4px 0 rgba(0,0,0,.2),inset 2px 4px 0 0 hsla(0,0%,100%,.08));box-shadow:var(--slide-countdown-digits-box-shadow,0 3px 4px 0 rgba(0,0,0,.2),inset 2px 4px 0 0 hsla(0,0%,100%,.08));display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;-ms-flex-direction:column;flex-direction:column}div.deckgo-countdown-container div.time-container div.figure-container div.figure:first-of-type{margin-right:var(--slide-countdown-digit-margin-right,.625em)}div.deckgo-countdown-container div.time-container div.figure-container div.figure>span{font-size:var(--slide-countdown-digits-font-size,3em);font-weight:var(--slide-countdown-digits-font-weight);color:var(--slide-countdown-digits-color)}"},enumerable:!0,configurable:!0}),t}()}}]);