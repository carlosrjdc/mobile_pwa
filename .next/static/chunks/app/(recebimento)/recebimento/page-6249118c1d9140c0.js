(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[969],{2528:function(e,t,r){Promise.resolve().then(r.bind(r,8178)),Promise.resolve().then(r.bind(r,3113))},7461:function(e,t,r){"use strict";r.d(t,{Z:function(){return i}});var n=r(4090),a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.320.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),i=(e,t)=>{let r=(0,n.forwardRef)((r,i)=>{let{color:s="currentColor",size:u=24,strokeWidth:c=2,absoluteStrokeWidth:l,className:d="",children:f,...p}=r;return(0,n.createElement)("svg",{ref:i,...a,width:u,height:u,stroke:s,strokeWidth:l?24*Number(c)/Number(u):c,className:["lucide","lucide-".concat(o(e)),d].join(" "),...p},[...t.map(e=>{let[t,r]=e;return(0,n.createElement)(t,r)}),...Array.isArray(f)?f:[f]])});return r.displayName="".concat(e),r}},7907:function(e,t,r){"use strict";var n=r(5313);r.o(n,"useParams")&&r.d(t,{useParams:function(){return n.useParams}}),r.o(n,"useRouter")&&r.d(t,{useRouter:function(){return n.useRouter}})},699:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(4090),a="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},o=n.useState,i=n.useEffect,s=n.useLayoutEffect,u=n.useDebugValue;function c(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!a(e,r)}catch(e){return!0}}var l=void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=o({inst:{value:r,getSnapshot:t}}),a=n[0].inst,l=n[1];return s(function(){a.value=r,a.getSnapshot=t,c(a)&&l({inst:a})},[e,r,t]),i(function(){return c(a)&&l({inst:a}),e(function(){c(a)&&l({inst:a})})},[e]),u(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:l},220:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(4090),a=r(2362),o="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},i=a.useSyncExternalStore,s=n.useRef,u=n.useEffect,c=n.useMemo,l=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,a){var d=s(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var p=i(e,(d=c(function(){function e(e){if(!u){if(u=!0,i=e,e=n(e),void 0!==a&&f.hasValue){var t=f.value;if(a(t,e))return s=t}return s=e}if(t=s,o(i,e))return t;var r=n(e);return void 0!==a&&a(t,r)?t:(i=e,s=r)}var i,s,u=!1,c=void 0===r?null:r;return[function(){return e(t())},null===c?void 0:function(){return e(c())}]},[t,r,n,a]))[0],d[1]);return u(function(){f.hasValue=!0,f.value=p},[p]),l(p),p}},2362:function(e,t,r){"use strict";e.exports=r(699)},9292:function(e,t,r){"use strict";e.exports=r(220)},8178:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(3827);/**
 * @license lucide-react v0.320.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let a=(0,r(7461).Z)("Undo2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);var o=r(7907),i=r(4090);function s(){let e=(0,o.useRouter)();return(0,i.useEffect)(()=>{let t=t=>{"Escape"===t.key&&e.back()};return window.addEventListener("keydown",t),()=>{window.removeEventListener("keydown",t)}},[e]),(0,n.jsxs)("div",{className:"bg-primary flex justify-between px-2 py-2 items-center",children:[(0,n.jsx)(a,{className:"text-secondary",onClick:()=>e.back(),size:40}),(0,n.jsx)("strong",{className:"text-secondary",children:"MENU"})]})}},5671:function(e,t,r){"use strict";r.d(t,{SZ:function(){return u},Zb:function(){return i},aY:function(){return c},ll:function(){return s}});var n=r(3827),a=r(4090),o=r(2169);let i=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",r),...a})});i.displayName="Card",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex flex-col space-y-1.5 p-6",r),...a})}).displayName="CardHeader";let s=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("h3",{ref:t,className:(0,o.cn)("text-2xl font-semibold leading-none tracking-tight",r),...a})});s.displayName="CardTitle";let u=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("p",{ref:t,className:(0,o.cn)("text-sm text-muted-foreground",r),...a})});u.displayName="CardDescription";let c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("p-6 pt-0",r),...a})});c.displayName="CardContent",a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)("div",{ref:t,className:(0,o.cn)("flex items-center p-6 pt-0",r),...a})}).displayName="CardFooter"},2647:function(e,t,r){"use strict";r.d(t,{_:function(){return c}});var n=r(3827),a=r(4090),o=r(4602),i=r(7742),s=r(2169);let u=(0,i.j)("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),c=a.forwardRef((e,t)=>{let{className:r,...a}=e;return(0,n.jsx)(o.f,{ref:t,className:(0,s.cn)(u(),r),...a})});c.displayName=o.f.displayName},2169:function(e,t,r){"use strict";r.d(t,{cn:function(){return o}});var n=r(3167),a=r(1367);function o(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.m6)((0,n.W)(t))}},3113:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return g}});var n=r(3827),a=r(5671),o=r(2647),i=r(4090),s=r(2110),u=r(9586);let c="horizontal",l=["horizontal","vertical"],d=(0,i.forwardRef)((e,t)=>{let{decorative:r,orientation:n=c,...a}=e,o=f(n)?n:c;return(0,i.createElement)(u.WV.div,(0,s.Z)({"data-orientation":o},r?{role:"none"}:{"aria-orientation":"vertical"===o?o:void 0,role:"separator"},a,{ref:t}))});function f(e){return l.includes(e)}d.propTypes={orientation(e,t,r){let n=e[t],a=String(n);return n&&!f(n)?Error("Invalid prop `orientation` of value `".concat(a,"` supplied to `").concat(r,"`, expected one of:\n  - horizontal\n  - vertical\n\nDefaulting to `").concat(c,"`.")):null}};var p=r(2169);let m=i.forwardRef((e,t)=>{let{className:r,orientation:a="horizontal",decorative:o=!0,...i}=e;return(0,n.jsx)(d,{ref:t,decorative:o,orientation:a,className:(0,p.cn)("shrink-0 bg-border","horizontal"===a?"h-[1px] w-full":"h-full w-[1px]",r),...i})});m.displayName=d.displayName;var v=r(7907),h=r(5230);let y=[{placa:"LLh3456",ocr:"3455432",tipo:"refrigerado",direcao:"carlos"},{placa:"LLh3457",ocr:"3455432",tipo:"refrigerado"},{placa:"LLh3458",ocr:"3421432",tipo:"refrigerado"}],x=y.filter(e=>"carlos"===e.direcao),b=y.filter(e=>"carlos"!==e.direcao);function g(){return(0,n.jsxs)("div",{className:"h-screen",children:[x&&(0,n.jsx)("div",{className:"font-semibold py-2 text-center bg-secondary-foreground text-secondary my-1",children:"DEDICADO"}),x&&x.map((e,t)=>(0,n.jsx)(w,{item:e},t)),x&&(0,n.jsx)(m,{className:"my-3 bg-secondary "}),b.map((e,t)=>(0,n.jsx)(w,{item:e},t))]})}function w(e){let{item:t}=e,r=(0,h.ZP)(e=>e.infoCarro),i=(0,h.ZP)(e=>e.SET_OCR_PLACA),s=(0,v.useRouter)();async function u(e,t){i({ocr:e,placa:t,horarioInicio:null===r.inicioDescarga?new Date:r.inicioDescarga}),s.push("/recebimento/"+e)}return(0,n.jsx)("div",{className:"mx-1 my-2",children:(0,n.jsx)(a.Zb,{children:(0,n.jsxs)(a.aY,{onClick:()=>u(t.ocr,t.placa),className:"flex flex-col justify-center p-3 gap-2 bg-slate-100/90",children:[(0,n.jsxs)("div",{className:"flex gap-4 justify-between",children:[(0,n.jsx)(a.ll,{className:"text-xl font-bold text-primary ",children:t.ocr}),(0,n.jsx)(a.SZ,{children:t.tipo})]}),(0,n.jsx)("div",{className:"flex items-center justify-between",children:(0,n.jsxs)(o._,{className:"text-lg text-secondary-foreground font-semibold",children:["Placa: ",t.placa]})})]})})})}},5230:function(e,t,r){"use strict";r.d(t,{T6:function(){return a},aD:function(){return o}});var n=r(2020);let a=(0,n.Ue)(e=>({anomalia:{causaNConformidade:"",localAvariaPallet:"",localAvariaVeiculo:"",origemNConformidade:"",quantidade:0,setorNConformidade:"",tipoNConformidade:""},ADD_ANOMALIA(t){e(e=>({anomalia:{...t}}))}})),o=(0,n.Ue)(e=>({produtos:[],async ADD_PRODUTO(t){e(e=>({produtos:[...e.produtos,t]}))},REMOVE_PRODUTO(t){e(e=>({produtos:e.produtos.filter(e=>e.id!==t)}))},UPDATE_PRODUTO(t){e(e=>({produtos:e.produtos.map(e=>e.id===t.id?{...e,lote:t.lote,quantidade:t.quantidade,peso:t.peso,unidade:t.unidade}:e)}))}})),i=(0,n.Ue)(e=>({infoCarro:{ocr:"",doca:"",placa:"",lacre:"",inicioDescarga:null,terminoDescarga:null,lote:void 0,fotoCarretaAberta:null,fotoLacre:null,fotoCarretaFechada:null,temperatura:0},SET_INFO_INICIAL:t=>e(e=>({infoCarro:{...e.infoCarro,doca:t.doca,lacre:t.lacre,fotoCarretaFechada:t.fotoCarretaFechada,fotoLacre:t.fotoLacre}})),SET_OCR_PLACA:t=>e(e=>({infoCarro:{...e.infoCarro,ocr:t.ocr,placa:t.placa,inicioDescarga:t.horarioInicio}})),SET_INFO_TEMPERATURA:t=>e(e=>({infoCarro:{...e.infoCarro,temperatura:t.temperatura,fotoCarretaAberta:t.fotoCarretaAberta}}))}));t.ZP=i},4602:function(e,t,r){"use strict";r.d(t,{f:function(){return i}});var n=r(2110),a=r(4090),o=r(9586);let i=(0,a.forwardRef)((e,t)=>(0,a.createElement)(o.WV.label,(0,n.Z)({},e,{ref:t,onMouseDown:t=>{var r;null===(r=e.onMouseDown)||void 0===r||r.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},9586:function(e,t,r){"use strict";r.d(t,{WV:function(){return s},jH:function(){return u}});var n=r(2110),a=r(4090),o=r(9542),i=r(9143);let s=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,t)=>{let r=(0,a.forwardRef)((e,r)=>{let{asChild:o,...s}=e,u=o?i.g7:t;return(0,a.useEffect)(()=>{window[Symbol.for("radix-ui")]=!0},[]),(0,a.createElement)(u,(0,n.Z)({},s,{ref:r}))});return r.displayName="Primitive.".concat(t),{...e,[t]:r}},{});function u(e,t){e&&(0,o.flushSync)(()=>e.dispatchEvent(t))}},2020:function(e,t,r){"use strict";r.d(t,{Ue:function(){return f}});let n=e=>{let t;let r=new Set,n=(e,n)=>{let a="function"==typeof e?e(t):e;if(!Object.is(a,t)){let e=t;t=(null!=n?n:"object"!=typeof a||null===a)?a:Object.assign({},t,a),r.forEach(r=>r(t,e))}},a=()=>t,o={setState:n,getState:a,getInitialState:()=>i,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},i=t=e(n,a,o);return o},a=e=>e?n(e):n;var o=r(4090),i=r(9292);let{useDebugValue:s}=o,{useSyncExternalStoreWithSelector:u}=i,c=!1,l=e=>e,d=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?a(e):e,r=(e,r)=>(function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:l,r=arguments.length>2?arguments[2]:void 0;r&&!c&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),c=!0);let n=u(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return s(n),n})(t,e,r);return Object.assign(r,t),r},f=e=>e?d(e):d}},function(e){e.O(0,[363,971,362,744],function(){return e(e.s=2528)}),_N_E=e.O()}]);