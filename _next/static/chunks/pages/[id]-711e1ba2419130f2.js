(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{70859:function(e,t,n){"use strict";n.d(t,{CI:function(){return c},JY:function(){return i},h2:function(){return u},ou:function(){return l},oz:function(){return a},x_:function(){return s}});var r=n(67387),o=n(18879),i=(0,r.Z)(["g","h","p","_","Y","x","6","S","E","W","5","y","c","9","f","A","N","a","A","G","7","t","o","d","Q","L","Y","5","W","S","V","X","p","I","4","J","0","v","k","5"]);(0,r.Z)(o.env.NEXT_GITHUB_BACKEND_TOKEN||"");var a="https://api.github.com",c="https://github.com",u="hankliu62",s="hankliu62.github.com",l="2022-11-28"},47835:function(e,t,n){"use strict";n.d(t,{V8:function(){return O},a5:function(){return w}});var r,o,i,a,c=n(82038),u=n(54317),s=n(80962),l=n.n(s),f=n(59969),d=n.n(f),p=n(70859);function v(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach(function(t){(0,c.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}var m=p.JY.join(""),y=new Map,x=new Map,g=(r=(0,u.Z)(l().mark(function e(t,n){var r,o,i,a,c=arguments;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(a in r=c.length>2&&void 0!==c[2]?c[2]:{},o="".concat(p.oz,"/repos/").concat(p.h2,"/").concat(t,"/issues"),i=r.perPage||10,delete r.perPage,o+="?creator=".concat(p.h2,"&per_page=").concat(i,"&page=").concat(n||1),r)Object.prototype.hasOwnProperty.call(r,a)&&(o+="&".concat(a,"=").concat(r[a]));return e.abrupt("return",d()(o,{headers:{"X-GitHub-Api-Version":p.ou,Authorization:"Bearer ".concat(m)}}).then(function(e){return e.json()}));case 7:case"end":return e.stop()}},e)})),function(e,t){return r.apply(this,arguments)}),j=(o=(0,u.Z)(l().mark(function e(t){var n,r=arguments;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>1&&void 0!==r[1]?r[1]:{},e.abrupt("return",new Promise(function(e){var r=[],o=1;function i(){return a.apply(this,arguments)}function a(){return(a=(0,u.Z)(l().mark(function a(){var c,u,s,f;return l().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g(t,o,b(b({},n),{},{perPage:100}));case 2:if((c=a.sent).length>0){u=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return v(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return v(e,void 0)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(c);try{for(u.s();!(s=u.n()).done;)f=s.value,r.push(f)}catch(e){u.e(e)}finally{u.f()}o++,setTimeout(i,100)}else e(r);case 4:case"end":return a.stop()}},a)}))).apply(this,arguments)}i()}));case 2:case"end":return e.stop()}},e)})),function(e){return o.apply(this,arguments)}),w=(i=(0,u.Z)(l().mark(function e(t,n,r){var o,i=arguments;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(o=i.length>3&&void 0!==i[3]?i[3]:{},r){e.next=3;break}return e.abrupt("return",g(t,n,o));case 3:return e.abrupt("return",new Promise(function(){var e=(0,u.Z)(l().mark(function e(i){var a,c,u,s;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(c=(a=Date.now())-(x.get(t)||0)<36e5,u=[],!c){e.next=7;break}u=y.get(t),e.next=13;break;case 7:return e.next=9,j(t,o);case 9:s=e.sent,y.set(t,s),x.set(t,a),u=s;case 13:i(u.filter(function(e){var t;return e.title&&e.title.toLowerCase().includes(r.toLowerCase())||e.body&&e.body.toLowerCase().includes(r.toLowerCase())||(null===(t=e.labels)||void 0===t?void 0:t.some(function(e){return e.name.toLowerCase().includes(r.toLowerCase())}))}).slice((n-1)*10,10*n));case 14:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()));case 4:case"end":return e.stop()}},e)})),function(e,t,n){return i.apply(this,arguments)}),O=(a=(0,u.Z)(l().mark(function e(t,n){var r;return l().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(p.oz,"/repos/").concat(p.h2,"/").concat(n,"/issues/").concat(t),e.abrupt("return",d()(r,{headers:{"X-GitHub-Api-Version":p.ou,Authorization:"Bearer ".concat(m)}}).then(function(e){return e.json()}));case 2:case"end":return e.stop()}},e)})),function(e,t){return a.apply(this,arguments)})},78017:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return et},default:function(){return en}}),n(33594);var r=n(67320),o=n.n(r);n(91012);var i=n(16410),a=n.n(i);n(49581);var c=n(66946),u=n.n(c);n(89899);var s=n(14535),l=n.n(s);n(30138);var f=n(55772),d=n.n(f);n(45475);var p=n(98959),v=n.n(p);n(69001);var h=n(76217),b=n.n(h);n(8058);var m=n(18851),y=n.n(m);n(74312);var x=n(7832),g=n.n(x);n(38276);var j=n(7040),w=n.n(j);n(60149);var O=n(33290),P=n.n(O),k=n(82038),N=n(54317),S=n(80962),A=n.n(S),_=n(19767),C=n(82187),E=n.n(C),L=n(7672),D=n.n(L),I=n(97125),F=n.n(I),Z=n(113),M=n.n(Z),T=n(47120),Y=n(75271),B=n(5716),V=n(59966),X=n.n(V),G=n(52676),z=["onLoad","showLoading"];function H(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}var U=X()(function(){return Promise.all([n.e(879),n.e(568)]).then(n.bind(n,62568))},{ssr:!1,loadableGenerated:{webpack:function(){return[null]}}});function R(e){var t=e.onLoad,n=e.showLoading,r=(0,B.Z)(e,z),o=(0,Y.useRef)(!1),i=(0,Y.useRef)(),a=(0,Y.useState)(!0),c=a[0],u=a[1];return(0,Y.useLayoutEffect)(function(){!function e(){var n,r=null===(n=i.current)||void 0===n?void 0:n.querySelectorAll(".wmde-markdown");r&&r.length>0?(!o.current&&(u(!1),t&&t()),o.current=!0):setTimeout(e,1e3)}()},[t]),(0,G.jsxs)("div",{ref:i,children:[(0,G.jsx)(U,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?H(Object(n),!0).forEach(function(t){(0,k.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):H(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}({},r)),n&&c&&(0,G.jsx)(P(),{active:!0})]})}var $=n(70859);function J(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var K=n(47835),W=n(45393);function q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,r)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?q(Object(n),!0).forEach(function(t){(0,k.Z)(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):q(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function ee(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var et=!0;function en(e){var t,n,r,i,c,s,f,p,h,m,x=e.id,j=(0,T.useRouter)(),O=(0,Y.useState)(!0),k=O[0],S=O[1],C=(0,Y.useState)(),L=C[0],I=C[1],Z=(0,Y.useState)(!0),B=Z[0],V=Z[1],X=(0,Y.useMemo)(function(){return((null==L?void 0:L.body)||"").split("\r\n").filter(function(e){return e.startsWith("##")})},[L]);function z(){return(z=(0,N.Z)(A().mark(function e(t){return A().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return V(!0),e.prev=1,e.next=4,(0,K.V8)(t,$.x_);case 4:I(e.sent),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),o().error("获取博客文章目失败");case 11:return e.prev=11,V(!1),e.finish(11);case 14:case"end":return e.stop()}},e,null,[[1,8,11,14]])}))).apply(this,arguments)}(0,Y.useEffect)(function(){x&&function(e){z.apply(this,arguments)}(x)},[x]);var H=(0,Y.useMemo)(function(){var e,t=Number.MAX_VALUE,n=[],r=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return ee(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ee(e,void 0)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(X);try{for(r.s();!(e=r.n()).done;){var o=e.value,i=o.replace(/^(#+)\s(.*)/,"$1").length;t=Math.min(i,t);var a=o.replace(/^#+\s/,""),c=a.toLowerCase().replace(/\s/g,"-").replace(/[\u3002\uFF1F\uFF0C\uFF1A\u201C-\u201D\uFF08-\uFF09\u3001\uFF1B\uFF1A]/g,"");n.push({id:c,text:o,href:"#".concat(c),title:a,prefixLength:i})}}catch(e){r.e(e)}finally{r.f()}return n.map(function(e){return Q(Q({},e),{},{minPrefixLength:t,paddingLeft:(e.prefixLength-t)*16+16})})},[X]),U=(i=(r=(0,Y.useState)((null===(t=H[0])||void 0===t?void 0:t.id)||(null===(n=H[0])||void 0===n?void 0:n.title)))[0],c=r[1],s=(0,Y.useCallback)(function(e){return e.map(function(e){var t=e.id,n=document.getElementById(t);if(n){var r=Number.parseFloat(window.getComputedStyle(n).scrollMarginTop);return{id:t,top:window.scrollY+n.getBoundingClientRect().top-r}}})},[]),(0,Y.useEffect)(function(){if(0!==H.length){var e=s(H);return window.addEventListener("scroll",t,{passive:!0}),t(),function(){window.removeEventListener("scroll",t,{passive:!0})}}function t(){if(e.filter(Boolean).length!==H.length&&(e=s(H)),0!==e.filter(Boolean).length){var t,n=window.scrollY,r=e[0].id,o=function(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return J(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(e,void 0)}}(e))){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){c=!0,i=e},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}(e);try{for(o.s();!(t=o.n()).done;){var i=t.value;if(i&&n>=i.top)r=i.id;else break}}catch(e){o.e(e)}finally{o.f()}c(r)}}},[s,H]),i);function q(e){return e.id===U||!!e.children&&e.children.findIndex(function(e){return q(e)})>-1}return j.isFallback||null!=L&&L.number?(0,G.jsx)("div",{className:"flex flex-col bg-white p-6",children:B?(0,G.jsx)(P(),{active:!0}):(0,G.jsxs)(G.Fragment,{children:[(0,G.jsxs)(w(),{className:"!mb-6 !text-base",separator:"/",children:[(0,G.jsx)(w().Item,{children:(0,G.jsx)(M(),{href:"/",children:W.V1.split("-")[1].trim()})}),(0,G.jsx)(w().Item,{children:null==L?void 0:L.title})]}),(0,G.jsxs)("div",{className:"flex space-x-6",children:[(0,G.jsx)("div",{className:"flex-1",children:(0,G.jsx)(l(),{className:"article-card min-h-full !border-[#d9d9d9]",children:(0,G.jsxs)("article",{children:[(0,G.jsx)("header",{children:(0,G.jsx)("h1",{className:"mb-5 text-4xl font-bold",children:L.title})}),(0,G.jsxs)("section",{className:"mb-6 flex items-center space-x-8",children:[(0,G.jsxs)(g(),{onClick:function(e){(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault(),window.open("".concat($.CI,"/").concat($.h2,"/").concat($.x_,"/articles/").concat(null==L?void 0:L.number),"_blank")},className:"group cursor-pointer",children:[(0,G.jsx)(_.Z,{className:"group-hover:text-[#1171ee]"}),(0,G.jsx)("span",{className:"group-hover:text-[#1171ee]",children:"#".concat(null==L?void 0:L.number)})]},"list-vertical-id"),(0,G.jsx)(g(),{onClick:function(e){var t;(null==e?void 0:e.stopPropagation)&&e.stopPropagation(),(null==e?void 0:e.preventDefault)&&e.preventDefault(),window.open("".concat($.CI,"/").concat(null==L||null===(t=L.user)||void 0===t?void 0:t.login),"_blank")},className:"group cursor-pointer",children:(0,G.jsx)("span",{className:"group-hover:text-sky-500",children:null==L||null===(f=L.user)||void 0===f?void 0:f.login})},"list-vertical-user"),(0,G.jsx)(g(),{children:(0,G.jsx)("span",{className:"text-[#8a919f]",children:(null==L?void 0:L.created_at)&&D()(null==L?void 0:L.created_at).format("YYYY-MM-DD HH:mm:ss")})}),(0,G.jsx)(g(),{children:(0,G.jsx)("div",{className:"flex items-center justify-start",children:((null==L?void 0:L.labels)||[]).map(function(e){return(0,G.jsx)(y(),{color:"#".concat(e.color),children:e.name},e.id)})})}),(0,G.jsx)(g(),{children:(0,G.jsx)(v(),{title:"难度: ".concat(null!==(p=L.milestone)&&void 0!==p&&p.number?(null===(h=L.milestone)||void 0===h?void 0:h.number)+"颗\uD83C\uDF1F":"未设置"),children:(0,G.jsx)(b(),{defaultValue:(null===(m=L.milestone)||void 0===m?void 0:m.number)||0,disabled:!0})})},"list-difficulty")]}),(0,G.jsx)(d(),{className:"mb-6 mt-0"}),(0,G.jsx)("section",{children:(0,G.jsx)(R,{source:L.body||"",showLoading:!0})})]})})}),(0,G.jsx)("div",{className:"w-64 bg-white",children:(0,G.jsx)(a(),{offsetTop:24,children:(0,G.jsx)(u(),{className:"question-menus-collapse",defaultActiveKey:["menu"],onChange:function(e){S(e.includes("labels"))},expandIconPosition:"end",children:(0,G.jsx)(u().Panel,{header:(0,G.jsx)("span",{className:"text-base",children:"目录"}),extra:(0,G.jsx)("div",{className:"-mr-2",children:k?"收起":"展开"}),children:(0,G.jsx)("ul",{className:"max-h-[620px] list-none space-y-3 overflow-y-auto text-slate-500 dark:text-slate-400",children:H.map(function(e){return(0,G.jsx)("li",{id:e.text,className:E()("border-0 !border-l-2 border-solid border-transparent pr-[16px] text-base",{"!border-sky-500":q(e)}),children:(0,G.jsx)(M(),{href:e.href,className:E()("w-full overflow-hidden !text-[#515767]",q(e)?"!text-sky-500":"!hover:text-slate-600 !dark:hover:text-slate-300"),children:(0,G.jsx)("div",{className:"truncate",style:{paddingLeft:"".concat(e.paddingLeft,"px")},children:e.title})})},e.title)})})},"menu")})})})]})]})}):(0,G.jsx)(F(),{statusCode:404})}},83898:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/[id]",function(){return n(78017)}])}},function(e){e.O(0,[236,252,283,869,888,774,179],function(){return e(e.s=83898)}),_N_E=e.O()}]);