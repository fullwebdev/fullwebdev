(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{266:function(n,a,i){"use strict";i.r(a),i.d(a,"mdTransitionAnimation",(function(){return o}));var e=i(259),o=function(n,a){var i="back"===a.direction,o=a.enteringEl,r=a.leavingEl,c=t(o),s=c.querySelector("ion-toolbar"),d=Object(e.a)();if(d.addElement(c).fill("both").beforeRemoveClass("ion-page-invisible"),i?d.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)"):d.duration(a.duration||280).easing("cubic-bezier(0.36,0.66,0.04,1)").fromTo("transform","translateY(40px)","translateY(0px)").fromTo("opacity",.01,1),s){var u=Object(e.a)();u.addElement(s),d.addAnimation(u)}if(r&&i){d.duration(a.duration||200).easing("cubic-bezier(0.47,0,0.745,0.715)");var l=Object(e.a)();l.addElement(t(r)).fromTo("transform","translateY(0px)","translateY(40px)").fromTo("opacity",1,0),d.addAnimation(l)}return d},t=function(n){if(n.classList.contains("ion-page"))return n;var a=n.querySelector(":scope > .ion-page, :scope > ion-nav, :scope > ion-tabs");return a||n}}}]);