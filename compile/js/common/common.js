app.constant("$appVersion","1.0.1"),app.provider("$componentLoader",["$ocLazyLoadProvider",function(e){return e.config({modules:[]}),{$get:function(){return"componentLoaderProvider"},web3:["$ocLazyLoad",function(e){return e.load({files:["https://cdn.jsdelivr.net/gh/ethereum/web3.js@1.0.0-beta.34/dist/web3.min.js"]})}],wowJs:["$ocLazyLoad",function(e){return e.load({files:["/node_modules/wowjs/dist/wow.min.js"]})}],maskedInput:["$ocLazyLoad",function(e){return e.load({files:["/node_modules/jquery.maskedinput/src/jquery.maskedinput.js"]})}]}}]),app.factory("$requestProvider",["$q","$injector","$appVersion",function(r,n,o){var t=0;return{request:function(e){return t++,-1!==e.url.indexOf(".tpl.html")&&(e.params=e.params||{},e.params.version=o),e},response:function(e){t--;var o=n.get("$rootScope");return 0===t&&(o.isLoading=!1),e},responseError:function(e){var o=n.get("$rootScope");n.get("$state");return 0===--t&&(o.isLoading=!1),r.reject(e)}}}]);