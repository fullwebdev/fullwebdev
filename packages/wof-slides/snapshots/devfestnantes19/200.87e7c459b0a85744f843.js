(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{224:function(t,r,n){"use strict";n.r(r),n.d(r,"scopeCss",(function(){return k}));var e=function(){for(var t=0,r=0,n=arguments.length;r<n;r++)t+=arguments[r].length;var e=Array(t),s=0;for(r=0;r<n;r++)for(var o=arguments[r],c=0,a=o.length;c<a;c++,s++)e[s]=o[c];return e},s=")(?:\\(((?:\\([^)(]*\\)|[^)(]*)+?)\\))?([^,{]*)",o=new RegExp("(-shadowcsshost"+s,"gim"),c=new RegExp("(-shadowcsscontext"+s,"gim"),a=new RegExp("(-shadowcssslotted"+s,"gim"),i=/-shadowcsshost-no-combinator([^\s]*)/,u=[/::shadow/g,/::content/g],h=/-shadowcsshost/gim,l=/:host/gim,p=/::slotted/gim,f=/:host-context/gim,g=/\/\*\s*[\s\S]*?\*\//g,d=/\/\*\s*#\s*source(Mapping)?URL=[\s\S]+?\*\//g,m=/(\s*)([^;\{\}]+?)(\s*)((?:{%BLOCK%}?\s*;?)|(?:\s*;))/g,v=/([{}])/g,w=function(t,r){var n=_(t),e=0;return n.escapedString.replace(m,(function(){for(var t=[],s=0;s<arguments.length;s++)t[s]=arguments[s];var o=t[2],c="",a=t[4],i="";a&&a.startsWith("{%BLOCK%")&&(c=n.blocks[e++],a=a.substring("%BLOCK%".length+1),i="{");var u={selector:o,content:c},h=r(u);return""+t[1]+h.selector+t[3]+i+h.content+a}))},_=function(t){for(var r=t.split(v),n=[],e=[],s=0,o=[],c=0;c<r.length;c++){var a=r[c];"}"===a&&s--,s>0?o.push(a):(o.length>0&&(e.push(o.join("")),n.push("%BLOCK%"),o=[]),n.push(a)),"{"===a&&s++}return o.length>0&&(e.push(o.join("")),n.push("%BLOCK%")),{escapedString:n.join(""),blocks:e}},x=function(t,r,n){return t.replace(r,(function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];if(t[2]){for(var e=t[2].split(","),s=[],o=0;o<e.length;o++){var c=e[o].trim();if(!c)break;s.push(n("-shadowcsshost-no-combinator",c,t[3]))}return s.join(",")}return"-shadowcsshost-no-combinator"+t[3]}))},b=function(t,r,n){return t+r.replace("-shadowcsshost","")+n},O=function(t,r,n){return r.indexOf("-shadowcsshost")>-1?b(t,r,n):t+r+n+", "+r+" "+t+n},W=function(t,r){return!function(t){return t=t.replace(/\[/g,"\\[").replace(/\]/g,"\\]"),new RegExp("^("+t+")([>\\s~+[.,{:][\\s\\S]*)?$","m")}(r).test(t)},j=function(t,r,n){for(var e,s="."+(r=r.replace(/\[is=([^\]]*)\]/g,(function(t){for(var r=[],n=1;n<arguments.length;n++)r[n-1]=arguments[n];return r[0]}))),o=function(t){var e=t.trim();if(!e)return"";if(t.indexOf("-shadowcsshost-no-combinator")>-1)e=function(t,r,n){if(h.lastIndex=0,h.test(t)){var e="."+n;return t.replace(i,(function(t,r){return r.replace(/([^:]*)(:*)(.*)/,(function(t,r,n,s){return r+e+n+s}))})).replace(h,e+" ")}return r+" "+t}(t,r,n);else{var o=t.replace(h,"");if(o.length>0){var c=o.match(/([^:]*)(:*)(.*)/);c&&(e=c[1]+s+c[2]+c[3])}}return e},c=function(t){var r=[],n=0;return{content:(t=t.replace(/(\[[^\]]*\])/g,(function(t,e){var s="__ph-"+n+"__";return r.push(e),n++,s}))).replace(/(:nth-[-\w]+)(\([^)]+\))/g,(function(t,e,s){var o="__ph-"+n+"__";return r.push(s),n++,e+o})),placeholders:r}}(t),a="",u=0,l=/( |>|\+|~(?!=))\s*/g,p=!((t=c.content).indexOf("-shadowcsshost-no-combinator")>-1);null!==(e=l.exec(t));){var f=e[1],g=t.slice(u,e.index).trim();a+=((p=p||g.indexOf("-shadowcsshost-no-combinator")>-1)?o(g):g)+" "+f+" ",u=l.lastIndex}var d,m=t.substring(u);return a+=(p=p||m.indexOf("-shadowcsshost-no-combinator")>-1)?o(m):m,d=c.placeholders,a.replace(/__ph-(\d+)__/g,(function(t,r){return d[+r]}))},C=function(t,r,n,e,s){return w(t,(function(t){var s=t.selector,o=t.content;return"@"!==t.selector[0]?s=function(t,r,n,e){return t.split(",").map((function(t){return e&&t.indexOf("."+e)>-1?t.trim():W(t,r)?j(t,r,n).trim():t.trim()})).join(", ")}(t.selector,r,n,e):(t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document"))&&(o=C(t.content,r,n,e)),{selector:s.replace(/\s{2,}/g," ").trim(),content:o}}))},L=function(t,r,n,e,s){return t=function(t){return u.reduce((function(t,r){return t.replace(r," ")}),t)}(t=function(t,r){var n=a;return t.replace(n,(function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];if(t[2]){var e=t[2].trim(),s=t[3],o="."+r+" > "+e+s;return o}return"-shadowcsshost-no-combinator"+t[3]}))}(t=function(t){return x(t,c,O)}(t=function(t){return x(t,o,b)}(t=t.replace(f,"-shadowcsscontext").replace(l,"-shadowcsshost").replace(p,"-shadowcssslotted"))),e)),r&&(t=C(t,r,n,e)),(t=(t=t.replace(/-shadowcsshost-no-combinator/g,"."+n)).replace(/>\s*\*\s+([^{, ]+)/gm," $1 ")).trim()},k=function(t,r,n){var s=r+"-h",o=r+"-s",c=t.match(d)||[];t=function(t){return t.replace(g,"")}(t);var a=[];if(n){var i=function(t){var r="/*!@___"+a.length+"___*/",n="/*!@"+t.selector+"*/";return a.push({placeholder:r,comment:n}),t.selector=r+t.selector,t};t=w(t,(function(t){return"@"!==t.selector[0]?i(t):t.selector.startsWith("@media")||t.selector.startsWith("@supports")||t.selector.startsWith("@page")||t.selector.startsWith("@document")?(t.content=w(t.content,i),t):t}))}var u=L(t,r,s,o);return t=e([u],c).join("\n"),n&&a.forEach((function(r){var n=r.placeholder,e=r.comment;t=t.replace(n,e)})),t};
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
 */}}]);