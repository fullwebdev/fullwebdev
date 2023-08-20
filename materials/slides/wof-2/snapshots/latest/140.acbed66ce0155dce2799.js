(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{192:function(t,n,e){"use strict";e.r(n),e.d(n,"scopeCss",(function(){return L}));
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 *
 * This file is a port of shadowCSS from webcomponents.js to TypeScript.
 * https://github.com/webcomponents/webcomponentsjs/blob/4efecd7e0e/src/ShadowCSS/ShadowCSS.js
 * https://github.com/angular/angular/blob/master/packages/compiler/src/shadow_css.ts
 */
var r=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",s=new RegExp("(-shadowcsshost"+r,"gim"),o=new RegExp("(-shadowcsscontext"+r,"gim"),c=new RegExp("(-shadowcssslotted"+r,"gim"),a=/-shadowcsshost-no-combinator([^\s]*)/,i=[/::shadow/g,/::content/g],u=/-shadowcsshost/gim,h=/:host/gim,l=/::slotted/gim,p=/:host-context/gim,f=/\/\*\s*[\s\S]*?\*\//g,d=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,g=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,m=/([{}])/g,v=function(t,n){var e=w(t),r=0;return e.escapedString.replace(g,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=e.blocks[r++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:o,content:c},h=n(u);return""+t[1]+h.selector+t[3]+i+h.content+a}))},w=function(t){for(var n=t.split(m),e=[],r=[],s=0,o=[],c=0;c<n.length;c++){var a=n[c];"}"===a&&s--,s>0?o.push(a):(o.length>0&&(r.push(o.join("")),e.push("%BLOCK%"),o=[]),e.push(a)),"{"===a&&s++}return o.length>0&&(r.push(o.join("")),e.push("%BLOCK%")),{escapedString:e.join(""),blocks:r}},_=function(t,n,e){return t.replace(n,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(t[2]){for(var r=t[2].split(","),s=[],o=0;o<r.length;o++){var c=r[o].trim();if(!c)break;s.push(e("-shadowcsshost-no-combinator",c,t[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},x=function(t,n,e){return t+n.replace("-shadowcsshost","")+e},b=function(t,n,e){return n.indexOf("-shadowcsshost")>-1?x(t,n,e):t+n+e+", "+n+" "+t+e},O=function(t,n){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(n).test(t)},W=function(t,n,e){for(var r,s="."+(n=n.replace(/\[is=([^\]]*)\]/g,(function(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];return n[0]}))),o=function(t){var r=t.trim();if(!r)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)r=function(t,n,e){if(u.lastIndex=0,u.test(t)){var r="."+e;return t.replace(a,(function(t,n){return n.replace(/([^:]*)(:*)(.*)/,(function(t,n,e,s){return n+r+e+s}))})).replace(u,r+" ")}return n+" "+t}(t,n,e);else{var o=t.replace(u,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(r=c[1]+s+c[2]+c[3])}}return r},c=function(t){var n=[],e=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,r){var s="__ph-"+e+"__";return n.push(r),e++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,r,s){var o="__ph-"+e+"__";return n.push(s),e++,r+o})),placeholders:n}}(t),i="",h=0,l=/( |>|\+|~(?!=))\s*/g,p=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(r=l.exec(t));){var f=r[1],d=t.slice(h,r.index).trim();i+=((p=p||d.indexOf("-shadowcsshost-no-combinator")>-1)?o(d):d)+" "+f+" ",h=l.lastIndex}var g,m=t.substring(h);return i+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?o(m):m,g=c.placeholders,i.replace(/__ph-(\d+)__/g,(function(t,n){return g[+n]}))},j=function(t,n,e,r,s){return v(t,(function(t){var s=t.selector,o=t.content;return"@"!==t.selector[0]?s=function(t,n,e,r){return t.split(",").map((function(t){return r&&t.indexOf("."+r)>-1?t.trim():O(t,n)?W(t,n,e).trim():t.trim()})).join(", ")}(t.selector,n,e,r):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=j(t.content,n,e,r)),{selector:s.replace(/\s{2,}/g," ").trim(),content:o}}))},C=function(t,n,e,r,a){return t=function(t){return i.reduce((function(t,n){return t.replace(n," ")}),t)}(t=function(t,n){var e=c;return t.replace(e,(function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];if(t[2]){var r=t[2].trim(),s=t[3],o="."+n+" > "+r+s;return o}return"-shadowcsshost-no-combinator"+t[3]}))}(t=function(t){return _(t,o,b)}(t=function(t){return _(t,s,x)}(t=t.replace(p,"-shadowcsscontext").replace(h,"-shadowcsshost").replace(l,"-shadowcssslotted"))),r)),n&&(t=j(t,n,e,r)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+e)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()},L=function(t,n,e){var r=n+"-h",s=n+"-s",o=t.match(d)||[];t=function(t){return t.replace(f,"")}(t);var c=[];if(e){var a=function(t){var n="/*!@___"+c.length+"___*/",e="/*!@"+t.selector+"*/";return c.push({placeholder:n,comment:e}),t.selector=n+t.selector,t};t=v(t,(function(t){return"@"!==t.selector[0]?a(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=v(t.content,a),t):t}))}var i=C(t,n,r,s);return t=[i].concat(o).join("\n"),e&&c.forEach((function(n){var e=n.placeholder,r=n.comment;t=t.replace(e,r)})),t}}}]);