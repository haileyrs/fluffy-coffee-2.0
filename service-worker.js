if(!self.define){let f,e={};const l=(l,i)=>(l=new URL(l+".js",i).href,e[l]||new Promise((e=>{if("document"in self){const f=document.createElement("script");f.src=l,f.onload=e,document.head.appendChild(f)}else f=l,importScripts(l),e()})).then((()=>{let f=e[l];if(!f)throw new Error(`Module ${l} didn’t register its module`);return f})));self.define=(i,u)=>{const o=f||("document"in self?document.currentScript.src:"")||location.href;if(e[o])return;let r={};const n=f=>l(f,o),s={module:{uri:o},exports:r,require:n};e[o]=Promise.all(i.map((f=>s[f]||n(f)))).then((f=>(u(...f),r)))}}define(["./workbox-4f586afe"],(function(f){"use strict";f.setCacheNameDetails({prefix:"app"}),self.addEventListener("message",(f=>{f.data&&"SKIP_WAITING"===f.data.type&&self.skipWaiting()})),f.precacheAndRoute([{url:"/fluffy-coffee-2.0/css/app.eb4648e8.css",revision:null},{url:"/fluffy-coffee-2.0/css/chunk-vendors.16513862.css",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0091.1e845db6.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0106.5eb890ad.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0126.a109b83b.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0214.5294dae7.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0240.43395186.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0272.ad82ff6d.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0312.d7572dbc.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0346.4bbbb2e5.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0438.ddeaae1f.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0460.be5eb337.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_0504.e0ad565b.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_8619.0edf90ef.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_9351.a1d516b4.jpg",revision:null},{url:"/fluffy-coffee-2.0/img/IMG_9956.17a3948a.jpg",revision:null},{url:"/fluffy-coffee-2.0/index.html",revision:"ba18d0f6824acda2a014266bddfb2497"},{url:"/fluffy-coffee-2.0/js/app.41970c5c.js",revision:null},{url:"/fluffy-coffee-2.0/js/chunk-vendors.6c2c6231.js",revision:null},{url:"/fluffy-coffee-2.0/logo.ico",revision:"533500ab2e59cb3d39f62a00538e4ae6"},{url:"/fluffy-coffee-2.0/manifest.json",revision:"833d8182528a24c31b14f9eb0af10af2"},{url:"/fluffy-coffee-2.0/robots.txt",revision:"735ab4f94fbcd57074377afca324c813"}],{})}));
//# sourceMappingURL=service-worker.js.map