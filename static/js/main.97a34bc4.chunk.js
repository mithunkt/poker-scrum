(this["webpackJsonppoker-scrum"]=this["webpackJsonppoker-scrum"]||[]).push([[0],[,,,,function(e,n,t){e.exports=t(11)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(3),i=t.n(a),c=(t(9),t(1)),s=(t(10),[0,.5,1,2,3,5,8,13,20,40,100,"?","infinity"]);var l=function(){var e=Object(o.useState)(null),n=Object(c.a)(e,2),t=n[0],a=n[1],i=Object(o.useState)(!1),l=Object(c.a)(i,2),u=l[0],d=l[1],f=function(e){a(e.target.id),d(!0)},m=function(e){return"infinity"===e?r.a.createElement(r.a.Fragment,null,"\u221e"):.5===parseFloat(e)?r.a.createElement(r.a.Fragment,null,"\xbd"):e};return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},"Poker Scrum"),r.a.createElement("section",{className:"card-container"},s.map((function(e){return r.a.createElement("div",{className:"card",id:e,key:e,onClick:f},m(e))}))),u&&r.a.createElement("section",{className:"card-selected",onClick:function(e){a(null),d(!1)}},r.a.createElement("span",null,m(t))))},u=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function d(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(r.a.createElement(l,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/poker-scrum",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/poker-scrum","/service-worker.js");u?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):d(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):d(n,e)}))}}()}],[[4,1,2]]]);
//# sourceMappingURL=main.97a34bc4.chunk.js.map