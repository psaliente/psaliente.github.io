"use strict";(self.webpackChunkpsaliente_github_io=self.webpackChunkpsaliente_github_io||[]).push([[488],{488:(e,n,t)=>{t.r(n),t.d(n,{getCLS:()=>I,getFCP:()=>S,getFID:()=>B,getINP:()=>K,getLCP:()=>U,getTTFB:()=>W,onCLS:()=>I,onFCP:()=>S,onFID:()=>B,onINP:()=>K,onLCP:()=>U,onTTFB:()=>W});var i,r,a,o,c,u=-1,f=function(e){addEventListener("pageshow",(function(n){n.persisted&&(u=n.timeStamp,e(n))}),!0)},s=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=s();return e&&e.activationStart||0},l=function(e,n){var t=s(),i="navigate";return u>=0?i="back-forward-cache":t&&(i=document.prerendering||d()>0?"prerender":document.wasDiscarded?"restore":t.type.replace(/_/g,"-")),{name:e,value:void 0===n?-1:n,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:i}},p=function(e,n,t){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var i=new PerformanceObserver((function(e){Promise.resolve().then((function(){n(e.getEntries())}))}));return i.observe(Object.assign({type:e,buffered:!0},t||{})),i}}catch(e){}},v=function(e,n,t,i){var r,a;return function(o){n.value>=0&&(o||i)&&((a=n.value-(r||0))||void 0===r)&&(r=n.value,n.delta=a,n.rating=function(e,n){return e>n[1]?"poor":e>n[0]?"needs-improvement":"good"}(n.value,t),e(n))}},m=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},h=function(e){var n=function(n){"pagehide"!==n.type&&"hidden"!==document.visibilityState||e(n)};addEventListener("visibilitychange",n,!0),addEventListener("pagehide",n,!0)},g=function(e){var n=!1;return function(t){n||(e(t),n=!0)}},y=-1,T=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},E=function(e){"hidden"===document.visibilityState&&y>-1&&(y="visibilitychange"===e.type?e.timeStamp:0,L())},C=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},L=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},b=function(){return y<0&&(y=T(),C(),f((function(){setTimeout((function(){y=T(),C()}),0)}))),{get firstHiddenTime(){return y}}},w=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},S=function(e,n){n=n||{},w((function(){var t,i=[1800,3e3],r=b(),a=l("FCP"),o=p("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(o.disconnect(),e.startTime<r.firstHiddenTime&&(a.value=Math.max(e.startTime-d(),0),a.entries.push(e),t(!0)))}))}));o&&(t=v(e,a,i,n.reportAllChanges),f((function(r){a=l("FCP"),t=v(e,a,i,n.reportAllChanges),m((function(){a.value=performance.now()-r.timeStamp,t(!0)}))})))}))},I=function(e,n){n=n||{},S(g((function(){var t,i=[.1,.25],r=l("CLS",0),a=0,o=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var n=o[0],t=o[o.length-1];a&&e.startTime-t.startTime<1e3&&e.startTime-n.startTime<5e3?(a+=e.value,o.push(e)):(a=e.value,o=[e])}})),a>r.value&&(r.value=a,r.entries=o,t())},u=p("layout-shift",c);u&&(t=v(e,r,i,n.reportAllChanges),h((function(){c(u.takeRecords()),t(!0)})),f((function(){a=0,r=l("CLS",0),t=v(e,r,i,n.reportAllChanges),m((function(){return t()}))})),setTimeout(t,0))})))},P={passive:!0,capture:!0},A=new Date,F=function(e,n){i||(i=n,r=e,a=new Date,D(removeEventListener),k())},k=function(){if(r>=0&&r<a-A){var e={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+r};o.forEach((function(n){n(e)})),o=[]}},M=function(e){if(e.cancelable){var n=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,n){var t=function(){F(e,n),r()},i=function(){r()},r=function(){removeEventListener("pointerup",t,P),removeEventListener("pointercancel",i,P)};addEventListener("pointerup",t,P),addEventListener("pointercancel",i,P)}(n,e):F(n,e)}},D=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return e(n,M,P)}))},B=function(e,n){n=n||{},w((function(){var t,a=[100,300],c=b(),u=l("FID"),s=function(e){e.startTime<c.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),t(!0))},d=function(e){e.forEach(s)},m=p("first-input",d);t=v(e,u,a,n.reportAllChanges),m&&h(g((function(){d(m.takeRecords()),m.disconnect()}))),m&&f((function(){var c;u=l("FID"),t=v(e,u,a,n.reportAllChanges),o=[],r=-1,i=null,D(addEventListener),c=s,o.push(c),k()}))}))},x=0,R=1/0,_=0,H=function(e){e.forEach((function(e){e.interactionId&&(R=Math.min(R,e.interactionId),_=Math.max(_,e.interactionId),x=_?(_-R)/7+1:0)}))},N=function(){return c?x:performance.interactionCount||0},O=function(){"interactionCount"in performance||c||(c=p("event",H,{type:"event",buffered:!0,durationThreshold:0}))},q=0,j=function(){return N()-q},z=[],G={},J=function(e){var n=z[z.length-1],t=G[e.interactionId];if(t||z.length<10||e.duration>n.latency){if(t)t.entries.push(e),t.latency=Math.max(t.latency,e.duration);else{var i={id:e.interactionId,latency:e.duration,entries:[e]};G[i.id]=i,z.push(i)}z.sort((function(e,n){return n.latency-e.latency})),z.splice(10).forEach((function(e){delete G[e.id]}))}},K=function(e,n){n=n||{},w((function(){var t=[200,500];O();var i,r=l("INP"),a=function(e){e.forEach((function(e){e.interactionId&&J(e),"first-input"===e.entryType&&!z.some((function(n){return n.entries.some((function(n){return e.duration===n.duration&&e.startTime===n.startTime}))}))&&J(e)}));var n,t=(n=Math.min(z.length-1,Math.floor(j()/50)),z[n]);t&&t.latency!==r.value&&(r.value=t.latency,r.entries=t.entries,i())},o=p("event",a,{durationThreshold:n.durationThreshold||40});i=v(e,r,t,n.reportAllChanges),o&&(o.observe({type:"first-input",buffered:!0}),h((function(){a(o.takeRecords()),r.value<0&&j()>0&&(r.value=0,r.entries=[]),i(!0)})),f((function(){z=[],q=N(),r=l("INP"),i=v(e,r,t,n.reportAllChanges)})))}))},Q={},U=function(e,n){n=n||{},w((function(){var t,i=[2500,4e3],r=b(),a=l("LCP"),o=function(e){var n=e[e.length-1];if(n){var i=Math.max(n.startTime-d(),0);i<r.firstHiddenTime&&(a.value=i,a.entries=[n],t())}},c=p("largest-contentful-paint",o);if(c){t=v(e,a,i,n.reportAllChanges);var u=g((function(){Q[a.id]||(o(c.takeRecords()),c.disconnect(),Q[a.id]=!0,t(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,u,!0)})),h(u),f((function(r){a=l("LCP"),t=v(e,a,i,n.reportAllChanges),m((function(){a.value=performance.now()-r.timeStamp,Q[a.id]=!0,t(!0)}))}))}}))},V=function e(n){document.prerendering?w((function(){return e(n)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(n)}),!0):setTimeout(n,0)},W=function(e,n){n=n||{};var t=[800,1800],i=l("TTFB"),r=v(e,i,t,n.reportAllChanges);V((function(){var a=s();if(a){var o=a.responseStart;if(o<=0||o>performance.now())return;i.value=Math.max(o-d(),0),i.entries=[a],r(!0),f((function(){i=l("TTFB",0),(r=v(e,i,t,n.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=488.51726c0b.chunk.js.map