if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,c)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let n={};const r=e=>a(e,t),d={module:{uri:t},exports:n,require:r};s[t]=Promise.all(i.map((e=>d[e]||r(e)))).then((e=>(c(...e),n)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"66ee6992554a61b78448aa25b0b3211e"},{url:"/_next/static/FVkp-XDTtqHB9zLgdcW3H/_buildManifest.js",revision:"99cbfc8e47280db2e913e1a36c69a9fd"},{url:"/_next/static/FVkp-XDTtqHB9zLgdcW3H/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/13633bf0-544c8e3a6f77fac2.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/173-35a0553d80ae19c4.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/181-3e106e532fda97f1.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/245.3a84a787669c147b.js",revision:"3a84a787669c147b"},{url:"/_next/static/chunks/437-e506ab3cc835d3e0.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/453-4be7c31ba7b8e9f8.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/46-1100a4653220e823.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/485-977b8e9aea931526.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/4bd1b696-94e0ca77ee6ec5da.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/517-c135806ab3e311fa.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/565-08275147fb616bc3.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/642-b0a82db378da7773.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/651-1a6fae833d934c2c.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/812-426970539fab2ff4.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/844-54c957634e5886e0.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/885-8d8e7c727b64a874.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/_not-found/page-5ae57f6181ddc533.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/layout-9f1abc2c96d24e1b.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/meeting/detail/%5Bid%5D/@description/page-89117ff07671fcbb.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/meeting/detail/%5Bid%5D/@reviews/page-bd60329bf661dbc5.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/meeting/detail/%5Bid%5D/layout-17d3d3c54f79e7d7.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/meeting/detail/%5Bid%5D/page-c62578ce9e1a3af1.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/meeting/list/page-8a5feba10060cd4d.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/myprofile/@meeting/page-b74cdcd1a242de56.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/myprofile/@profile/page-6c175d1ac20040ef.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/myprofile/layout-b171aed00a1de82a.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/page-2df55b0ff9934352.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/user/signin/page-cc8a27f5462d3c3d.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/app/user/signup/page-8446d7ccb7845a50.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/c16f53c3-ad430893d493137d.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/framework-895c1583be5f925a.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/main-8095a07fc7fe687c.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/main-app-b4bece7ce17fb393.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/pages/_app-abffdcde9d309a0c.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/pages/_error-94b8133dd8229633.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-39c24cd17da39b3c.js",revision:"FVkp-XDTtqHB9zLgdcW3H"},{url:"/_next/static/css/0acef4df005bbe6c.css",revision:"0acef4df005bbe6c"},{url:"/_next/static/css/14a7164f13104b1b.css",revision:"14a7164f13104b1b"},{url:"/_next/static/css/7d7bae49d5e0d686.css",revision:"7d7bae49d5e0d686"},{url:"/_next/static/media/calendar.6eca7a71.svg",revision:"cd7c28aab95466a1a293cf27c85bfb2f"},{url:"/_next/static/media/logo.90969502.svg",revision:"e9dd98c03b12327e4a9a222257d1111f"},{url:"/_next/static/media/logoYW.5c4f1fb9.svg",revision:"534e3df5d0d3278d29573d6b0a31769a"},{url:"/assets/X.svg",revision:"73eaf4a69d8072906acc641214ea3496"},{url:"/assets/card/example_image.png",revision:"1cc276b03bbedaac5b4cfbb3ed26668d"},{url:"/assets/card/location-marker.svg",revision:"0cb6aeb07cd2efce4fd460087caa673a"},{url:"/assets/card/user.svg",revision:"dc00c71676d1788d370441fa4b2e3ae7"},{url:"/assets/chat.svg",revision:"8fa5e61b183ea081ca12e41d53859113"},{url:"/assets/chevron_down.svg",revision:"af28a9d9a29bf231ea76505b1f6eb4bb"},{url:"/assets/fallback/img.png",revision:"1cc276b03bbedaac5b4cfbb3ed26668d"},{url:"/assets/logo.svg",revision:"e9dd98c03b12327e4a9a222257d1111f"},{url:"/assets/mainLogo/logoYW.svg",revision:"534e3df5d0d3278d29573d6b0a31769a"},{url:"/assets/profile/avatar.svg",revision:"e10b2248457d04b926e4682be480cab1"},{url:"/assets/profile/editAvatar.svg",revision:"cb0feda6c1397c0cf3b43fd2d574ebc3"},{url:"/assets/profile/profileCardBg.svg",revision:"4a80c1eed0048e3c43627f23abf3925e"},{url:"/assets/profile/userProfileDefault.svg",revision:"d7e12551b1895a960260da2734cb4d39"},{url:"/assets/review/heart_empty.svg",revision:"91a2ccc7f7592c3f8251020f7f5441b6"},{url:"/assets/review/heart_full.svg",revision:"c17613b5bb48a0f089cecc66a3c57dea"},{url:"/assets/user/kakaoLogo.svg",revision:"1df9b044c9b5b089457463c5d44929ed"},{url:"/assets/user/unVisibility.svg",revision:"945ff85906008c34d22dfbd9531ff8df"},{url:"/assets/user/visibility.svg",revision:"52fbac21f69771d43aed8c87b8224807"},{url:"/calendar.svg",revision:"cd7c28aab95466a1a293cf27c85bfb2f"},{url:"/file.svg",revision:"d09f95206c3fa0bb9bd9fefabfd0ea71"},{url:"/globe.svg",revision:"2aaafa6a49b6563925fe440891e32717"},{url:"/icons/icon-192x192.png",revision:"0fe4816708274be8df415b21169da547"},{url:"/icons/icon-512x512.png",revision:"5420cda2b5ea2f9d06016b3ee7e12795"},{url:"/manifest.json",revision:"8e4f63b8523ea28e75a6aa5c2c492c0a"},{url:"/mockServiceWorker.js",revision:"c1c6b48b4d03254de8baf1e7c959ca31"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"c0af2f507b369b085b35ef4bbe3bcf1e"},{url:"/window.svg",revision:"a2760511c65806022ad20adf74370ff3"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:i})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
