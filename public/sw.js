if(!self.define){let e,a={};const i=(i,n)=>(i=new URL(i+".js",n).href,a[i]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=a,document.head.appendChild(e)}else e=i,importScripts(i),a()})).then((()=>{let e=a[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,s)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(a[o])return;let r={};const d=e=>i(e,o),c={module:{uri:o},exports:r,require:d};a[o]=Promise.all(n.map((e=>c[e]||d(e)))).then((e=>(s(...e),r)))}}define(["./workbox-e13f827e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/192.png",revision:"35ecab25ee534986637648f2dea3c65f"},{url:"/256.png",revision:"6343d10b813f80b53d821af6d5e320fc"},{url:"/512.png",revision:"8be5635ef35a306d08548f99db893080"},{url:"/_next/static/N4maSJrTEogz9t6JhcKqs/_buildManifest.js",revision:"b6da6a9b9533fb8b03f61b81b113259b"},{url:"/_next/static/N4maSJrTEogz9t6JhcKqs/_middlewareManifest.js",revision:"468e9a0ecca0c65bcb0ee673b762445d"},{url:"/_next/static/N4maSJrTEogz9t6JhcKqs/_ssgManifest.js",revision:"5352cb582146311d1540f6075d1f265e"},{url:"/_next/static/chunks/169-114f363f8bc849d2.js",revision:"114f363f8bc849d2"},{url:"/_next/static/chunks/191-fea050a445b16848.js",revision:"fea050a445b16848"},{url:"/_next/static/chunks/229-0a544a4bea8e0712.js",revision:"0a544a4bea8e0712"},{url:"/_next/static/chunks/400-2a8fe449ec571f87.js",revision:"2a8fe449ec571f87"},{url:"/_next/static/chunks/413-19db9d1314b0478d.js",revision:"19db9d1314b0478d"},{url:"/_next/static/chunks/496-1c16a28d8c0cc57b.js",revision:"1c16a28d8c0cc57b"},{url:"/_next/static/chunks/503-9fc6036cf2cc212a.js",revision:"9fc6036cf2cc212a"},{url:"/_next/static/chunks/766-62c540cbda0f4c36.js",revision:"62c540cbda0f4c36"},{url:"/_next/static/chunks/844-5b766a9077fe281c.js",revision:"5b766a9077fe281c"},{url:"/_next/static/chunks/875-6efb18f49a8a20f6.js",revision:"6efb18f49a8a20f6"},{url:"/_next/static/chunks/eabe11fc-386481b74fb74c50.js",revision:"386481b74fb74c50"},{url:"/_next/static/chunks/framework-01395af778c6fb71.js",revision:"01395af778c6fb71"},{url:"/_next/static/chunks/main-bdd9c05417d771c3.js",revision:"bdd9c05417d771c3"},{url:"/_next/static/chunks/pages/%5Bfolder%5D-fc67e7271ad559a5.js",revision:"fc67e7271ad559a5"},{url:"/_next/static/chunks/pages/%5Bfolder%5D/%5Bid%5D-c2c765e49abe3c23.js",revision:"c2c765e49abe3c23"},{url:"/_next/static/chunks/pages/%5Bfolder%5D/%5Bid%5D/edit-f95a58b2547f7bd2.js",revision:"f95a58b2547f7bd2"},{url:"/_next/static/chunks/pages/%5Bfolder%5D/publicview-3c3101777e0d3243.js",revision:"3c3101777e0d3243"},{url:"/_next/static/chunks/pages/Home-fa29da3da77e2589.js",revision:"fa29da3da77e2589"},{url:"/_next/static/chunks/pages/_app-8f8f5f8d280770bc.js",revision:"8f8f5f8d280770bc"},{url:"/_next/static/chunks/pages/_error-d742f979193aeae4.js",revision:"d742f979193aeae4"},{url:"/_next/static/chunks/pages/index-4f585c7c6c754c46.js",revision:"4f585c7c6c754c46"},{url:"/_next/static/chunks/pages/login-db17084c9d46b145.js",revision:"db17084c9d46b145"},{url:"/_next/static/chunks/pages/login2-f1fc9573d9619b3a.js",revision:"f1fc9573d9619b3a"},{url:"/_next/static/chunks/pages/signup-953f64cc199249d1.js",revision:"953f64cc199249d1"},{url:"/_next/static/chunks/pages/signup2-b1110031ca186e17.js",revision:"b1110031ca186e17"},{url:"/_next/static/chunks/pages/usersettings-5d1fea928288facd.js",revision:"5d1fea928288facd"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"99442aec5788bccac9b2f0ead2afdd6b"},{url:"/_next/static/chunks/webpack-df0abd02c35d3cf6.js",revision:"df0abd02c35d3cf6"},{url:"/_next/static/css/149b18973e5508c7.css",revision:"149b18973e5508c7"},{url:"/_next/static/css/6495f08df7a23393.css",revision:"6495f08df7a23393"},{url:"/_next/static/css/c2ef37f45d26e9cd.css",revision:"c2ef37f45d26e9cd"},{url:"/_next/static/media/roboto-all-300-normal.39add8fb.woff",revision:"39add8fb"},{url:"/_next/static/media/roboto-cyrillic-300-normal.88798412.woff2",revision:"88798412"},{url:"/_next/static/media/roboto-cyrillic-ext-300-normal.cd7c5715.woff2",revision:"cd7c5715"},{url:"/_next/static/media/roboto-greek-300-normal.25dc89b0.woff2",revision:"25dc89b0"},{url:"/_next/static/media/roboto-greek-ext-300-normal.bc5ce703.woff2",revision:"bc5ce703"},{url:"/_next/static/media/roboto-latin-300-normal.a4eae32d.woff2",revision:"a4eae32d"},{url:"/_next/static/media/roboto-latin-ext-300-normal.37d4965d.woff2",revision:"37d4965d"},{url:"/_next/static/media/roboto-vietnamese-300-normal.b3d3e960.woff2",revision:"b3d3e960"},{url:"/android/android-launchericon-144-144.png",revision:"f01f537661d334098ed96df26b0bd656"},{url:"/android/android-launchericon-192-192.png",revision:"35ecab25ee534986637648f2dea3c65f"},{url:"/android/android-launchericon-48-48.png",revision:"1edc6f38bef796ee251888284ff3ada4"},{url:"/android/android-launchericon-512-512.png",revision:"8be5635ef35a306d08548f99db893080"},{url:"/android/android-launchericon-72-72.png",revision:"6533cb4478f0ed827d07a23c2617276d"},{url:"/android/android-launchericon-96-96.png",revision:"c11766197ad40d31d75c4a481df5a616"},{url:"/favicon.ico",revision:"c30c7d42707a47a3f4591831641e50dc"},{url:"/favicon/16.png",revision:"3f39b54dd128624d3f5f40c28dfc9c43"},{url:"/favicon/32.png",revision:"7f0b264017f0d6dff2533a2351b5f031"},{url:"/favicon/apple-icon.png",revision:"5e0cbfd62390e676bc27a4bc0711d1bd"},{url:"/icon-192x192.png",revision:"85dd3b872756f89c5e49ffad17a1384d"},{url:"/icon-256x256.png",revision:"65e058b60932b783696ae59fba42b9c7"},{url:"/icon-384x384.png",revision:"f1c12a0718deddadb4c7f59ae457a55e"},{url:"/icon-512x512.png",revision:"295f785c64593ff44d2bd7f2d8e3304e"},{url:"/icons.json",revision:"965cab08d476eba05fc40045a6fe8547"},{url:"/ios/100.png",revision:"0b4df52a43ab40fea3303e8293f70f3b"},{url:"/ios/1024.png",revision:"da3ca052589c4383b37cdace72d72358"},{url:"/ios/114.png",revision:"38540aeba45f69206f1b73ddb0c9da29"},{url:"/ios/120.png",revision:"e7e70320f6fd3256cf7f38a0a29db0d2"},{url:"/ios/128.png",revision:"0b363a34bb7369885c5cf3e63bfe89c3"},{url:"/ios/144.png",revision:"f01f537661d334098ed96df26b0bd656"},{url:"/ios/152.png",revision:"9b186f05c5bbf3174246b21e2a0896f9"},{url:"/ios/16.png",revision:"3f39b54dd128624d3f5f40c28dfc9c43"},{url:"/ios/167.png",revision:"86c28f5025299bd9c98191815763d6cf"},{url:"/ios/180.png",revision:"1023b40b655e95ff594dc3cff7b28fd7"},{url:"/ios/192.png",revision:"35ecab25ee534986637648f2dea3c65f"},{url:"/ios/20.png",revision:"53b70ea770f5a043e7bb7f059312a620"},{url:"/ios/256.png",revision:"6343d10b813f80b53d821af6d5e320fc"},{url:"/ios/29.png",revision:"fae8dad41056f24c5fb5d49e27efb974"},{url:"/ios/32.png",revision:"7f0b264017f0d6dff2533a2351b5f031"},{url:"/ios/40.png",revision:"e01394482a4a5c634d34f36c39947b12"},{url:"/ios/50.png",revision:"c5689d94b93d523f425e15b0c32657e2"},{url:"/ios/512.png",revision:"8be5635ef35a306d08548f99db893080"},{url:"/ios/57.png",revision:"5e0cbfd62390e676bc27a4bc0711d1bd"},{url:"/ios/58.png",revision:"0263acb4deecda82192d18f3d4ae3fe8"},{url:"/ios/60.png",revision:"c916626722d4efa2d1a5d580dd116318"},{url:"/ios/64.png",revision:"48b6e01817a7475d3b36e9e1c92f57bf"},{url:"/ios/72.png",revision:"6533cb4478f0ed827d07a23c2617276d"},{url:"/ios/76.png",revision:"c4ef28fb1f4cb33a11c1015dfc847dbd"},{url:"/ios/80.png",revision:"1cfacf65c214561848f8dfcfb01077c4"},{url:"/ios/87.png",revision:"87dc60ccc6e2a11c9031aeb43223269a"},{url:"/manifest.json",revision:"fb73ec002c7832eb1805b5191815f6e7"},{url:"/static/ok.png",revision:"583663162f2bd70809528d770b5288d1"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"},{url:"/windows11/LargeTile.scale-100.png",revision:"f58c85418e27dc5981bfcbdf36607a67"},{url:"/windows11/LargeTile.scale-125.png",revision:"188e1a0182a92a69363e6b56a99bb4db"},{url:"/windows11/LargeTile.scale-150.png",revision:"b6f604ef5b590faed99205123387968f"},{url:"/windows11/LargeTile.scale-200.png",revision:"26a1877148459b4fb92f1dd33e82ac97"},{url:"/windows11/LargeTile.scale-400.png",revision:"828de240ff0e86ea9c6c94be4629f666"},{url:"/windows11/SmallTile.scale-100.png",revision:"52cfe39d14586799a48deabf833276d1"},{url:"/windows11/SmallTile.scale-125.png",revision:"5617a70cad101b1ee9f00277b7158ce1"},{url:"/windows11/SmallTile.scale-150.png",revision:"0d5441521550e807695fd6f00994e94d"},{url:"/windows11/SmallTile.scale-200.png",revision:"e459d66a055a0db9270c5b2c06ad4c39"},{url:"/windows11/SmallTile.scale-400.png",revision:"32d3ddcef4e47945565904c9185d8a4b"},{url:"/windows11/SplashScreen.scale-100.png",revision:"8762ee1478f1f357a15fa08c5e6d8f34"},{url:"/windows11/SplashScreen.scale-125.png",revision:"afde907e629bd2ed2a19441870da17b2"},{url:"/windows11/SplashScreen.scale-150.png",revision:"16b04f6dd1164a7cb322946a4aba753a"},{url:"/windows11/SplashScreen.scale-200.png",revision:"7b48af5b8b10c5b16e26168ba00587ee"},{url:"/windows11/SplashScreen.scale-400.png",revision:"5a76505a992c6aa47177d1ed4ac034ac"},{url:"/windows11/Square150x150Logo.scale-100.png",revision:"122355a766c0a7d1d3b3bd89276bfd7a"},{url:"/windows11/Square150x150Logo.scale-125.png",revision:"e70c48d87943b8be8241d51522acabf7"},{url:"/windows11/Square150x150Logo.scale-150.png",revision:"41648706451ce743a171a43a2d66a6b5"},{url:"/windows11/Square150x150Logo.scale-200.png",revision:"04a3df7fa95b63fd10eaf23f85f5e0df"},{url:"/windows11/Square150x150Logo.scale-400.png",revision:"1457b9122789b79a0f06d85c41e2976a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-16.png",revision:"03de701860f3f0077239d4cc673d07ac"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-20.png",revision:"71172eaa1376ccf529ada241a0c9fd53"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-24.png",revision:"2c326e7483144cfa76898852f48647bc"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-256.png",revision:"1a55de69ce31ed86dd3a70ea72ce54d1"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-30.png",revision:"f962a684bba6eac7e0d8e89990ee02e9"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-32.png",revision:"4c7b775ac7b76d09619fdb8548db0235"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-36.png",revision:"af3b1cb71359ff3140780ce755cdb6df"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-40.png",revision:"a96b6ea3311aec025c7c08c34e03cde7"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-44.png",revision:"994b07ff018e542d731487c742d0c21a"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-48.png",revision:"e2033a27d78c64dd369643e6da4485b0"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-60.png",revision:"044dfa1d049bd6c5bd6f5122ab8ef4cb"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-64.png",revision:"d27919a0f41cbb1b173fc561f07c898b"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-72.png",revision:"f2d614aa9f28aa3198c71722794468ac"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-80.png",revision:"822206364d62b3451ad7c40e3d24daf6"},{url:"/windows11/Square44x44Logo.altform-lightunplated_targetsize-96.png",revision:"f26568bbbbd4c19a5d498db1137fd026"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-16.png",revision:"03de701860f3f0077239d4cc673d07ac"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-20.png",revision:"71172eaa1376ccf529ada241a0c9fd53"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-24.png",revision:"2c326e7483144cfa76898852f48647bc"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-256.png",revision:"1a55de69ce31ed86dd3a70ea72ce54d1"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-30.png",revision:"f962a684bba6eac7e0d8e89990ee02e9"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-32.png",revision:"4c7b775ac7b76d09619fdb8548db0235"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-36.png",revision:"af3b1cb71359ff3140780ce755cdb6df"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-40.png",revision:"a96b6ea3311aec025c7c08c34e03cde7"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-44.png",revision:"994b07ff018e542d731487c742d0c21a"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-48.png",revision:"e2033a27d78c64dd369643e6da4485b0"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-60.png",revision:"044dfa1d049bd6c5bd6f5122ab8ef4cb"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-64.png",revision:"d27919a0f41cbb1b173fc561f07c898b"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-72.png",revision:"f2d614aa9f28aa3198c71722794468ac"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-80.png",revision:"822206364d62b3451ad7c40e3d24daf6"},{url:"/windows11/Square44x44Logo.altform-unplated_targetsize-96.png",revision:"f26568bbbbd4c19a5d498db1137fd026"},{url:"/windows11/Square44x44Logo.scale-100.png",revision:"994b07ff018e542d731487c742d0c21a"},{url:"/windows11/Square44x44Logo.scale-125.png",revision:"1fce31b17b520118647bf389b2431d2f"},{url:"/windows11/Square44x44Logo.scale-150.png",revision:"957fd172fb3c42bdd957dad4b993ec6f"},{url:"/windows11/Square44x44Logo.scale-200.png",revision:"117708d8d8e5f2a2e2d640377ac68da1"},{url:"/windows11/Square44x44Logo.scale-400.png",revision:"4499f267657eae2f9a03cd742ef2193d"},{url:"/windows11/Square44x44Logo.targetsize-16.png",revision:"03de701860f3f0077239d4cc673d07ac"},{url:"/windows11/Square44x44Logo.targetsize-20.png",revision:"71172eaa1376ccf529ada241a0c9fd53"},{url:"/windows11/Square44x44Logo.targetsize-24.png",revision:"2c326e7483144cfa76898852f48647bc"},{url:"/windows11/Square44x44Logo.targetsize-256.png",revision:"1a55de69ce31ed86dd3a70ea72ce54d1"},{url:"/windows11/Square44x44Logo.targetsize-30.png",revision:"f962a684bba6eac7e0d8e89990ee02e9"},{url:"/windows11/Square44x44Logo.targetsize-32.png",revision:"4c7b775ac7b76d09619fdb8548db0235"},{url:"/windows11/Square44x44Logo.targetsize-36.png",revision:"af3b1cb71359ff3140780ce755cdb6df"},{url:"/windows11/Square44x44Logo.targetsize-40.png",revision:"a96b6ea3311aec025c7c08c34e03cde7"},{url:"/windows11/Square44x44Logo.targetsize-44.png",revision:"994b07ff018e542d731487c742d0c21a"},{url:"/windows11/Square44x44Logo.targetsize-48.png",revision:"e2033a27d78c64dd369643e6da4485b0"},{url:"/windows11/Square44x44Logo.targetsize-60.png",revision:"044dfa1d049bd6c5bd6f5122ab8ef4cb"},{url:"/windows11/Square44x44Logo.targetsize-64.png",revision:"d27919a0f41cbb1b173fc561f07c898b"},{url:"/windows11/Square44x44Logo.targetsize-72.png",revision:"f2d614aa9f28aa3198c71722794468ac"},{url:"/windows11/Square44x44Logo.targetsize-80.png",revision:"822206364d62b3451ad7c40e3d24daf6"},{url:"/windows11/Square44x44Logo.targetsize-96.png",revision:"f26568bbbbd4c19a5d498db1137fd026"},{url:"/windows11/StoreLogo.scale-100.png",revision:"c5689d94b93d523f425e15b0c32657e2"},{url:"/windows11/StoreLogo.scale-125.png",revision:"7c719905f64f2ffeb9b67498d1ff13d5"},{url:"/windows11/StoreLogo.scale-150.png",revision:"b95f35b69db34daeb1149b123ef00a53"},{url:"/windows11/StoreLogo.scale-200.png",revision:"0b4df52a43ab40fea3303e8293f70f3b"},{url:"/windows11/StoreLogo.scale-400.png",revision:"f13504e09b00a5493c607520133f2193"},{url:"/windows11/Wide310x150Logo.scale-100.png",revision:"7bd1b22ba19f0778ff640eaafdced0a2"},{url:"/windows11/Wide310x150Logo.scale-125.png",revision:"3e591fe6ab129b95445749a5a4d0f38e"},{url:"/windows11/Wide310x150Logo.scale-150.png",revision:"f78ed271675c0a17ae2e81f54ff89459"},{url:"/windows11/Wide310x150Logo.scale-200.png",revision:"8762ee1478f1f357a15fa08c5e6d8f34"},{url:"/windows11/Wide310x150Logo.scale-400.png",revision:"7b48af5b8b10c5b16e26168ba00587ee"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:a,event:i,state:n})=>a&&"opaqueredirect"===a.type?new Response(a.body,{status:200,statusText:"OK",headers:a.headers}):a}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const a=e.pathname;return!a.startsWith("/api/auth/")&&!!a.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
