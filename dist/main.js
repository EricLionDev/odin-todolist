(()=>{"use strict";var n={426:(n,e,t)=>{t.d(e,{Z:()=>s});var r=t(81),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Karla:wght@300;400;500&family=Merriweather:wght@300;400;700&display=swap);"]),i.push([n.id,':root {\n  --text: #ffffff;\n  --background: #141414;\n  --primary: #376ac8;\n  --secondary: #303030;\n  --accent: #c1fbd2;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  color: var(--text-color);\n}\n\nbody {\n  background-color: var(--background);\n}\n\n/* site container */\n\n#content-container {\n  display: flex;\n  flex-direction: row;\n  height: 100vh;\n  background-color: var(--background);\n}\n\n#nav-menu {\n  flex: 0.5;\n}\n\n#task-menu {\n  flex: 1;\n}\n\n#main-content {\n  flex: 2;\n  border-left: 5px solid var(--secondary);\n  border-right: 5px solid var(--secondary);\n}\n\n/* vvv Menu Stuff vvv */\n\n.menu-title,\n.task-area-title {\n  color: var(--text);\n  padding: 1rem 1rem;\n  font-size: 2rem;\n  font-family: "Karla";\n}\n\n.menu-section-title {\n  color: var(--text);\n  font-size: 1.25rem;\n  padding: 1rem 1.5rem;\n  font-family: "Karla";\n}\n.menu-list li {\n  font-size: 1rem;\n  color: var(--text);\n  padding: 1rem 2.5rem;\n  font-family: "Merriweather";\n}\n\n.tasks-list li:hover,\n.lists-list li:hover {\n  background-color: var(--secondary);\n}\n\n/* .lists-list li:nth-child(1):hover,\n.lists-list li:nth-child(2):hover,\n.lists-list li:nth-child(3):hover {\n  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,\n    1px 1px 0 #000;\n}\n\n.lists-list li:nth-child(1):hover {\n  background-color: var(--primary);\n}\n.lists-list li:nth-child(2):hover {\n  background-color: hsl(0, 54%, 52%);\n}\n\n.lists-list li:nth-child(3):hover {\n  background-color: hsl(53, 88%, 45%);\n} */\n\n/* vvv Main Content Stuff vvv */\n\n.current-main-title {\n  color: var(--text);\n  padding: 1rem 0 0 1rem;\n  font-size: 3rem;\n  text-align: left;\n  font-family: "Karla";\n}\n\n/* vvv Task Content Stuff vvv */\n\n.task-area-title {\n  font-family: "Karla";\n  padding: 1rem;\n}\n.new-task-form {\n  margin: 1rem 1rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.task-input {\n  background-color: var(--secondary);\n  color: var(--text);\n  width: 100%;\n  margin-bottom: 0.25rem;\n}\n\n.task-input::placeholder {\n  color: hsl(0, 0%, 80%);\n  font-size: 0.8rem;\n  font-family: "Merriweather";\n}\n\n.new-task-label {\n  color: var(--text);\n  font-family: "Karla";\n}\n\n.new-task-wrapper {\n  width: 90%;\n}\n#new-task-date {\n  width: 100%;\n}\n\n/* task description input text area */\n.task-description-input {\n  height: 10rem;\n  resize: vertical;\n  border-width: 2px;\n  margin-bottom: 0;\n}\n\n/* submit button */\n\n.task-submit-btn {\n  background-color: var(--secondary);\n  color: var(--text);\n  width: 20%;\n  padding: 0.25rem;\n  margin-top: 0.5rem;\n}\n',""]);const s=i},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);r&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=r.base?l[0]+r.base:l[0],d=a[c]||0,u="".concat(c," ").concat(d);a[c]=d+1;var p=t(u),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=r(n,o),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),l=t.n(s),c=t(216),d=t.n(c),u=t(589),p=t.n(u),f=t(426),m={};m.styleTagTransform=p(),m.setAttributes=l(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=d(),e()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals;const v=[];var h=document.getElementById("new-task-list"),g=0;class y{constructor(){var n=document.getElementById("new-task-title"),e=document.getElementById("new-task-description"),t=document.getElementById("new-task-date"),r=document.getElementById("new-task-list");this.id=g,this.name=n.value,this.description=e.value,this.list=r.value,this.due_date=t.value,g++,v.push(this),localStorage.setItem("tasklist",JSON.stringify(v)),console.log(this.name,this.description),function(){var n=document.getElementById("new-task-title"),e=document.getElementById("new-task-description"),t=document.getElementById("new-task-date"),r=document.getElementById("new-task-list");n.value="",e.value="",t.value="",r.value="new-list",x()}()}}function x(){var n=document.getElementById("new-list-input-wrapper");"new-list"==h.value?(n.style.display="block",console.log(n.style.display)):(n.style.display="none",console.log(n.style.display))}function b(){return new y}document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("new-task-btn"),e=document.getElementById("new-task-list");n&&n.addEventListener("click",b),e&&(console.log("yes"+e.value),e.addEventListener("change",(()=>{console.log("running func"),x()})))}))})()})();