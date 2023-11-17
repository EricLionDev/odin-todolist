(()=>{"use strict";var n,e,t,r,o,a,i,s,c,l,d,u,f,p,v={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500&family=Merriweather:wght@300;400;700&display=swap);"]),i.push([n.id,':root {\n  --text: #ffffff;\n  --background: #141414;\n  --primary: #376ac8;\n  --secondary: #303030;\n  --accent: #c1fbd2;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: var(--text-color);\n}\n\nbody {\n  background-color: var(--background);\n}\n\n/* site container */\n\n#content-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n  background-color: var(--background);\n}\n\n#nav-menu {\n  flex: 0.5;\n}\n\n#task-menu {\n  flex: 1;\n}\n\n#main-content {\n  flex: 2;\n  border-left: 5px solid var(--secondary);\n  border-right: 5px solid var(--secondary);\n}\n\n/* vvv Menu Stuff vvv */\n\n.menu-title,\n.task-title {\n  color: var(--text);\n  padding: 1rem 1rem;\n  font-size: 2rem;\n  font-family: "Karla";\n}\n\n.menu-section-title {\n  color: var(--text);\n  font-size: 1.25rem;\n  padding: 1rem 1.5rem;\n  font-family: "Karla";\n}\n.menu-list li {\n  font-size: 1rem;\n  color: var(--text);\n  padding: 1rem 2.5rem;\n  font-family: "Merriweather";\n}\n\n.tasks-list li:hover {\n  background-color: var(--secondary);\n}\n\n.lists-list li:nth-child(1):hover,\n.lists-list li:nth-child(2):hover,\n.lists-list li:nth-child(3):hover {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n    1px 1px 0 #000;\n}\n\n.lists-list li:nth-child(1):hover {\n  background-color: var(--primary);\n}\n.lists-list li:nth-child(2):hover {\n  background-color: hsl(0, 54%, 52%);\n}\n\n.lists-list li:nth-child(3):hover {\n  background-color: hsl(53, 88%, 45%);\n}\n\n/* vvv Main Content Stuff vvv */\n\n.current-main-title {\n  color: var(--text);\n  padding: 1rem 0 0 1rem;\n  font-size: 3rem;\n  text-align: left;\n  font-family: "Karla";\n}\n\n/* vvv Task Content Stuff vvv */\n\n.task-title {\n  font-family: "Karla";\n  padding: 1rem;\n}\n.new-task-form {\n  margin: 1rem 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.task-input {\n  background-color: var(--secondary);\n  color: var(--text);\n  width: 90%;\n  margin-bottom: 1rem;\n}\n\n.task-input::placeholder {\n  color: hsl(0, 0%, 80%);\n  font-size: 0.8rem;\n  font-family: "Merriweather";\n}\n\n/* task description input text area */\n.task-description-input {\n  height: 10rem;\n  resize: vertical;\n}\n',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var d=[].concat(n[l]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],d=a[l]||0,u="".concat(l," ").concat(d);a[l]=d+1;var f=t(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var v=o(p,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:v,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var d=t(a[l]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=c}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},m={};function h(n){var e=m[n];if(void 0!==e)return e.exports;var t=m[n]={id:n,exports:{}};return v[n](t,t.exports,h),t.exports}h.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return h.d(e,{a:e}),e},h.d=(n,e)=>{for(var t in e)h.o(e,t)&&!h.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},h.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),h.nc=void 0,n=h(379),e=h.n(n),t=h(795),r=h.n(t),o=h(569),a=h.n(o),i=h(565),s=h.n(i),c=h(216),l=h.n(c),d=h(589),u=h.n(d),f=h(426),(p={}).styleTagTransform=u(),p.setAttributes=s(),p.insert=a().bind(null,"head"),p.domAPI=r(),p.insertStyleElement=l(),e()(f.Z,p),f.Z&&f.Z.locals&&f.Z.locals})();