if(!self.define){let e,s={};const a=(a,t)=>(a=new URL(a+".js",t).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(t,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let i={};const r=e=>a(e,n),o={module:{uri:n},exports:i,require:r};s[n]=Promise.all(t.map((e=>o[e]||r(e)))).then((e=>(c(...e),i)))}}define(["./workbox-0ea65fa9"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/124-e9c578f32efe83d5.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/126-38e3a1bb2c1f8cbf.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/141-5f0970626513db3d.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/298-38d6e1ccb3f20f2b.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/35-95885bbe76f90e9b.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/362-c57fac275eb6520e.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/363-4c069874329a1e09.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/550-ec3facf3ebb93205.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/571-b7d47c87165b9073.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/703-b455f404c1dc3dfc.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/768-a47acac00e6ccfe9.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/7cb1fa1f-75c68470e67cf7f6.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/85-0f2ac8b183951384.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/908-1bf77b9c250e451c.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/923-7dbacb6708527679.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/aaea2bcf-87917cc8a8bf460a.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/(recebimento)/recebimento/%5Bid%5D/page-d92c120d3d89e509.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/(recebimento)/recebimento/page-a0bcc0ba82d2e680.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/_not-found-88eac85010893774.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/devolucao/page-66d2b28ad85d36d8.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/estoque/%5Bid%5D/page-780adefe1a332095.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/estoque/page-bdfb79c338471bcc.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/expedicao/page-33c5ee17b0ab5da7.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/layout-8158b5710361cc3d.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/login/page-d876b1ff8c129141.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/naolocalizado/page-9cff9ac1efdaf0b4.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/app/page-86e34fff3e196e49.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/fd9d1056-a5e28c5fc4be3ad8.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/main-8979f1d862208f4e.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/main-app-0b4fedd73217aca5.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-2fff4b69535f1199.js",revision:"ylUTX4OQpRTBCetNQmwBM"},{url:"/_next/static/css/806c82c2f9ff9d5b.css",revision:"806c82c2f9ff9d5b"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/1.0855abec.png",revision:"efbbc3c8c4e3aaa7d1dd96b141a48a91"},{url:"/_next/static/media/2.4045e5d5.png",revision:"45c3cc1c9ba58d3de959c7181776610c"},{url:"/_next/static/media/3.62cf9feb.png",revision:"6fe49c08dcb7639f839c1f0a85a77516"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/carrinho.d45a3833.png",revision:"34d6b531d384056a4c001e044058ab96"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/devolucao.130f5d2c.png",revision:"2c78405e5c70f6607c2d25bcf810814d"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/entrega.d8f797b6.png",revision:"4f6fab1880d8a39742dd4bacd5a81523"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/media/inventario.87683e3a.png",revision:"ce57f1342a75df18d6c426bb307d182a"},{url:"/_next/static/ylUTX4OQpRTBCetNQmwBM/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/ylUTX4OQpRTBCetNQmwBM/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/manifest.json",revision:"a359fa0c8986548b8f868e2630769aa2"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/sw 2.js",revision:"a2e7d947198ad3986a22928de4dc94b9"},{url:"/sw 3.js",revision:"a2e7d947198ad3986a22928de4dc94b9"},{url:"/sw.js 2.map",revision:"e2f389d38542ccaf151be8bebe5c7015"},{url:"/sw.js 3.map",revision:"5f6d0de2c0452d6667b5f7974d6b28fe"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"},{url:"/workbox-631a4576.js 2.map",revision:"dab62607d725fa66e721a2b08d31a6be"},{url:"/workbox-631a4576.js 3.map",revision:"dab62607d725fa66e721a2b08d31a6be"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));