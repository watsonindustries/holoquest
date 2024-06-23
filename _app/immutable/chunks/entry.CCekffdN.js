import{t as ct,o as lt}from"./scheduler.BFm2QQji.js";import{w as pe}from"./index.B6cPi1aI.js";import{v as ft}from"./environment.XFuBTZJF.js";import{H as ne,S as ge,R as $e}from"./control.CYgJF_JY.js";new URL("sveltekit-internal://");function ut(e,n){return e==="/"||n==="ignore"?e:n==="never"?e.endsWith("/")?e.slice(0,-1):e:n==="always"&&!e.endsWith("/")?e+"/":e}function dt(e){return e.split("%25").map(decodeURI).join("%25")}function ht(e){for(const n in e)e[n]=decodeURIComponent(e[n]);return e}function ce({href:e}){return e.split("#")[0]}const pt=["href","pathname","search","toString","toJSON"];function gt(e,n,t){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(r,o){if(o==="get"||o==="getAll"||o==="has")return i=>(t(i),r[o](i));n();const s=Reflect.get(r,o);return typeof s=="function"?s.bind(r):s}}),enumerable:!0,configurable:!0});for(const r of pt)Object.defineProperty(a,r,{get(){return n(),e[r]},enumerable:!0,configurable:!0});return a}const mt="/__data.json",_t=".html__data.json";function yt(e){return e.endsWith(".html")?e.replace(/\.html$/,_t):e.replace(/\/$/,"")+mt}function wt(...e){let n=5381;for(const t of e)if(typeof t=="string"){let a=t.length;for(;a;)n=n*33^t.charCodeAt(--a)}else if(ArrayBuffer.isView(t)){const a=new Uint8Array(t.buffer,t.byteOffset,t.byteLength);let r=a.length;for(;r;)n=n*33^a[--r]}else throw new TypeError("value must be a string or TypedArray");return(n>>>0).toString(36)}function vt(e){const n=atob(e),t=new Uint8Array(n.length);for(let a=0;a<n.length;a++)t[a]=n.charCodeAt(a);return t.buffer}const Ce=window.fetch;window.fetch=(e,n)=>((e instanceof Request?e.method:(n==null?void 0:n.method)||"GET")!=="GET"&&M.delete(me(e)),Ce(e,n));const M=new Map;function bt(e,n){const t=me(e,n),a=document.querySelector(t);if(a!=null&&a.textContent){let{body:r,...o}=JSON.parse(a.textContent);const s=a.getAttribute("data-ttl");return s&&M.set(t,{body:r,init:o,ttl:1e3*Number(s)}),a.getAttribute("data-b64")!==null&&(r=vt(r)),Promise.resolve(new Response(r,o))}return window.fetch(e,n)}function Et(e,n,t){if(M.size>0){const a=me(e,t),r=M.get(a);if(r){if(performance.now()<r.ttl&&["default","force-cache","only-if-cached",void 0].includes(t==null?void 0:t.cache))return new Response(r.body,r.init);M.delete(a)}}return window.fetch(n,t)}function me(e,n){let a=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(n!=null&&n.headers||n!=null&&n.body){const r=[];n.headers&&r.push([...new Headers(n.headers)].join(",")),n.body&&(typeof n.body=="string"||ArrayBuffer.isView(n.body))&&r.push(n.body),a+=`[data-hash="${wt(...r)}"]`}return a}const kt=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function St(e){const n=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${Rt(e).map(a=>{const r=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(a);if(r)return n.push({name:r[1],matcher:r[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const o=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(a);if(o)return n.push({name:o[1],matcher:o[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!a)return;const s=a.split(/\[(.+?)\](?!\])/);return"/"+s.map((c,f)=>{if(f%2){if(c.startsWith("x+"))return le(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return le(String.fromCharCode(...c.slice(2).split("-").map(l=>parseInt(l,16))));const u=kt.exec(c),[,h,g,d,_]=u;return n.push({name:d,matcher:_,optional:!!h,rest:!!g,chained:g?f===1&&s[0]==="":!1}),g?"(.*?)":h?"([^/]*)?":"([^/]+?)"}return le(c)}).join("")}).join("")}/?$`),params:n}}function At(e){return!/^\([^)]+\)$/.test(e)}function Rt(e){return e.slice(1).split("/").filter(At)}function It(e,n,t){const a={},r=e.slice(1),o=r.filter(i=>i!==void 0);let s=0;for(let i=0;i<n.length;i+=1){const c=n[i];let f=r[i-s];if(c.chained&&c.rest&&s&&(f=r.slice(i-s,i+1).filter(u=>u).join("/"),s=0),f===void 0){c.rest&&(a[c.name]="");continue}if(!c.matcher||t[c.matcher](f)){a[c.name]=f;const u=n[i+1],h=r[i+1];u&&!u.rest&&u.optional&&h&&c.chained&&(s=0),!u&&!h&&Object.keys(a).length===o.length&&(s=0);continue}if(c.optional&&c.chained){s++;continue}return}if(!s)return a}function le(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function Lt({nodes:e,server_loads:n,dictionary:t,matchers:a}){const r=new Set(n);return Object.entries(t).map(([i,[c,f,u]])=>{const{pattern:h,params:g}=St(i),d={id:i,exec:_=>{const l=h.exec(_);if(l)return It(l,g,a)},errors:[1,...u||[]].map(_=>e[_]),layouts:[0,...f||[]].map(s),leaf:o(c)};return d.errors.length=d.layouts.length=Math.max(d.errors.length,d.layouts.length),d});function o(i){const c=i<0;return c&&(i=~i),[c,e[i]]}function s(i){return i===void 0?i:[r.has(i),e[i]]}}function Ve(e,n=JSON.parse){try{return n(sessionStorage[e])}catch{}}function Ie(e,n,t=JSON.stringify){const a=t(n);try{sessionStorage[e]=a}catch{}}var je;const P=((je=globalThis.__sveltekit_1nt8yjg)==null?void 0:je.base)??"";var De;const Pt=((De=globalThis.__sveltekit_1nt8yjg)==null?void 0:De.assets)??P,Fe="sveltekit:snapshot",Me="sveltekit:scroll",qe="sveltekit:states",Tt="sveltekit:pageurl",D="sveltekit:history",G="sveltekit:navigation",W={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},K=location.origin;function Ge(e){if(e instanceof URL)return e;let n=document.baseURI;if(!n){const t=document.getElementsByTagName("base");n=t.length?t[0].href:document.URL}return new URL(e,n)}function _e(){return{x:pageXOffset,y:pageYOffset}}function O(e,n){return e.getAttribute(`data-sveltekit-${n}`)}const Le={...W,"":W.hover};function He(e){let n=e.assignedSlot??e.parentNode;return(n==null?void 0:n.nodeType)===11&&(n=n.host),n}function Be(e,n){for(;e&&e!==n;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=He(e)}}function ue(e,n){let t;try{t=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI)}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,r=!t||!!a||ae(t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),o=(t==null?void 0:t.origin)===K&&e.hasAttribute("download");return{url:t,external:r,target:a,download:o}}function z(e){let n=null,t=null,a=null,r=null,o=null,s=null,i=e;for(;i&&i!==document.documentElement;)a===null&&(a=O(i,"preload-code")),r===null&&(r=O(i,"preload-data")),n===null&&(n=O(i,"keepfocus")),t===null&&(t=O(i,"noscroll")),o===null&&(o=O(i,"reload")),s===null&&(s=O(i,"replacestate")),i=He(i);function c(f){switch(f){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:Le[a??"off"],preload_data:Le[r??"off"],keepfocus:c(n),noscroll:c(t),reload:c(o),replace_state:c(s)}}function Pe(e){const n=pe(e);let t=!0;function a(){t=!0,n.update(s=>s)}function r(s){t=!1,n.set(s)}function o(s){let i;return n.subscribe(c=>{(i===void 0||t&&c!==i)&&s(i=c)})}return{notify:a,set:r,subscribe:o}}function Ut(){const{set:e,subscribe:n}=pe(!1);let t;async function a(){clearTimeout(t);try{const r=await fetch(`${Pt}/_app/version.json`,{headers:{pragma:"no-cache","cache-control":"no-cache"}});if(!r.ok)return!1;const s=(await r.json()).version!==ft;return s&&(e(!0),clearTimeout(t)),s}catch{return!1}}return{subscribe:n,check:a}}function ae(e,n){return e.origin!==K||!e.pathname.startsWith(n)}const xt=-1,Nt=-2,Ot=-3,jt=-4,Dt=-5,$t=-6;function Ct(e,n){if(typeof e=="number")return r(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const t=e,a=Array(t.length);function r(o,s=!1){if(o===xt)return;if(o===Ot)return NaN;if(o===jt)return 1/0;if(o===Dt)return-1/0;if(o===$t)return-0;if(s)throw new Error("Invalid input");if(o in a)return a[o];const i=t[o];if(!i||typeof i!="object")a[o]=i;else if(Array.isArray(i))if(typeof i[0]=="string"){const c=i[0],f=n==null?void 0:n[c];if(f)return a[o]=f(r(i[1]));switch(c){case"Date":a[o]=new Date(i[1]);break;case"Set":const u=new Set;a[o]=u;for(let d=1;d<i.length;d+=1)u.add(r(i[d]));break;case"Map":const h=new Map;a[o]=h;for(let d=1;d<i.length;d+=2)h.set(r(i[d]),r(i[d+1]));break;case"RegExp":a[o]=new RegExp(i[1],i[2]);break;case"Object":a[o]=Object(i[1]);break;case"BigInt":a[o]=BigInt(i[1]);break;case"null":const g=Object.create(null);a[o]=g;for(let d=1;d<i.length;d+=2)g[i[d]]=r(i[d+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(i.length);a[o]=c;for(let f=0;f<i.length;f+=1){const u=i[f];u!==Nt&&(c[f]=r(u))}}else{const c={};a[o]=c;for(const f in i){const u=i[f];c[f]=r(u)}}return a[o]}return r(0)}const Ke=new Set(["load","prerender","csr","ssr","trailingSlash","config"]);[...Ke];const Vt=new Set([...Ke]);[...Vt];function Ft(e){return e.filter(n=>n!=null)}const Mt="x-sveltekit-invalidated",qt="x-sveltekit-trailing-slash";function J(e){return e instanceof ne||e instanceof ge?e.status:500}function Gt(e){return e instanceof ge?e.text:"Internal Error"}const N=Ve(Me)??{},H=Ve(Fe)??{},U={url:Pe({}),page:Pe({}),navigating:pe(null),updated:Ut()};function ye(e){N[e]=_e()}function Ht(e,n){let t=e+1;for(;N[t];)delete N[t],t+=1;for(t=n+1;H[t];)delete H[t],t+=1}function C(e){return location.href=e.href,new Promise(()=>{})}function Te(){}let re,de,X,T,he,V;const Ye=[],Z=[];let R=null;const We=[],ze=[];let j=[],y={branch:[],error:null,url:null},we=!1,Q=!1,Ue=!0,B=!1,F=!1,Je=!1,ve=!1,be,S,L,I,ee;const q=new Set;async function on(e,n,t){var r,o;document.URL!==location.href&&(location.href=location.href),V=e,re=Lt(e),T=document.documentElement,he=n,de=e.nodes[0],X=e.nodes[1],de(),X(),S=(r=history.state)==null?void 0:r[D],L=(o=history.state)==null?void 0:o[G],S||(S=L=Date.now(),history.replaceState({...history.state,[D]:S,[G]:L},""));const a=N[S];a&&(history.scrollRestoration="manual",scrollTo(a.x,a.y)),t?await Qt(he,t):Xt(location.href,{replaceState:!0}),Zt()}function Bt(){Ye.length=0,ve=!1}function Xe(e){Z.some(n=>n==null?void 0:n.snapshot)&&(H[e]=Z.map(n=>{var t;return(t=n==null?void 0:n.snapshot)==null?void 0:t.capture()}))}function Ze(e){var n;(n=H[e])==null||n.forEach((t,a)=>{var r,o;(o=(r=Z[a])==null?void 0:r.snapshot)==null||o.restore(t)})}function xe(){ye(S),Ie(Me,N),Xe(L),Ie(Fe,H)}async function Qe(e,n,t,a){return Y({type:"goto",url:Ge(e),keepfocus:n.keepFocus,noscroll:n.noScroll,replace_state:n.replaceState,state:n.state,redirect_count:t,nav_token:a,accept:()=>{n.invalidateAll&&(ve=!0)}})}async function Kt(e){if(e.id!==(R==null?void 0:R.id)){const n={};q.add(n),R={id:e.id,token:n,promise:tt({...e,preload:n}).then(t=>(q.delete(n),t.type==="loaded"&&t.state.error&&(R=null),t))}}return R.promise}async function fe(e){const n=re.find(t=>t.exec(nt(e)));n&&await Promise.all([...n.layouts,n.leaf].map(t=>t==null?void 0:t[1]()))}function et(e,n,t){var o;y=e.state;const a=document.querySelector("style[data-sveltekit]");a&&a.remove(),I=e.props.page,be=new V.root({target:n,props:{...e.props,stores:U,components:Z},hydrate:t}),Ze(L);const r={from:null,to:{params:y.params,route:{id:((o=y.route)==null?void 0:o.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};j.forEach(s=>s(r)),Q=!0}async function te({url:e,params:n,branch:t,status:a,error:r,route:o,form:s}){let i="never";if(P&&(e.pathname===P||e.pathname===P+"/"))i="always";else for(const d of t)(d==null?void 0:d.slash)!==void 0&&(i=d.slash);e.pathname=ut(e.pathname,i),e.search=e.search;const c={type:"loaded",state:{url:e,params:n,branch:t,error:r,route:o},props:{constructors:Ft(t).map(d=>d.node.component),page:I}};s!==void 0&&(c.props.form=s);let f={},u=!I,h=0;for(let d=0;d<Math.max(t.length,y.branch.length);d+=1){const _=t[d],l=y.branch[d];(_==null?void 0:_.data)!==(l==null?void 0:l.data)&&(u=!0),_&&(f={...f,..._.data},u&&(c.props[`data_${h}`]=f),h+=1)}return(!y.url||e.href!==y.url.href||y.error!==r||s!==void 0&&s!==I.form||u)&&(c.props.page={error:r,params:n,route:{id:(o==null?void 0:o.id)??null},state:{},status:a,url:new URL(e),form:s??null,data:u?f:I.data}),c}async function Ee({loader:e,parent:n,url:t,params:a,route:r,server_data_node:o}){var u,h,g;let s=null,i=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},f=await e();if((u=f.universal)!=null&&u.load){let d=function(...l){for(const m of l){const{href:b}=new URL(m,t);c.dependencies.add(b)}};const _={route:new Proxy(r,{get:(l,m)=>(i&&(c.route=!0),l[m])}),params:new Proxy(a,{get:(l,m)=>(i&&c.params.add(m),l[m])}),data:(o==null?void 0:o.data)??null,url:gt(t,()=>{i&&(c.url=!0)},l=>{i&&c.search_params.add(l)}),async fetch(l,m){let b;l instanceof Request?(b=l.url,m={body:l.method==="GET"||l.method==="HEAD"?void 0:await l.blob(),cache:l.cache,credentials:l.credentials,headers:l.headers,integrity:l.integrity,keepalive:l.keepalive,method:l.method,mode:l.mode,redirect:l.redirect,referrer:l.referrer,referrerPolicy:l.referrerPolicy,signal:l.signal,...m}):b=l;const A=new URL(b,t);return i&&d(A.href),A.origin===t.origin&&(b=A.href.slice(t.origin.length)),Q?Et(b,A.href,m):bt(b,m)},setHeaders:()=>{},depends:d,parent(){return i&&(c.parent=!0),n()},untrack(l){i=!1;try{return l()}finally{i=!0}}};s=await f.universal.load.call(null,_)??null}return{node:f,loader:e,server:o,universal:(h=f.universal)!=null&&h.load?{type:"data",data:s,uses:c}:null,data:s??(o==null?void 0:o.data)??null,slash:((g=f.universal)==null?void 0:g.trailingSlash)??(o==null?void 0:o.slash)}}function Ne(e,n,t,a,r,o){if(ve)return!0;if(!r)return!1;if(r.parent&&e||r.route&&n||r.url&&t)return!0;for(const s of r.search_params)if(a.has(s))return!0;for(const s of r.params)if(o[s]!==y.params[s])return!0;for(const s of r.dependencies)if(Ye.some(i=>i(new URL(s))))return!0;return!1}function ke(e,n){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?n??null:null}function Yt(e,n){if(!e)return new Set(n.searchParams.keys());const t=new Set([...e.searchParams.keys(),...n.searchParams.keys()]);for(const a of t){const r=e.searchParams.getAll(a),o=n.searchParams.getAll(a);r.every(s=>o.includes(s))&&o.every(s=>r.includes(s))&&t.delete(a)}return t}function Oe({error:e,url:n,route:t,params:a}){return{type:"loaded",state:{error:e,url:n,route:t,params:a,branch:[]},props:{page:I,constructors:[]}}}async function tt({id:e,invalidating:n,url:t,params:a,route:r,preload:o}){if((R==null?void 0:R.id)===e)return q.delete(R.token),R.promise;const{errors:s,layouts:i,leaf:c}=r,f=[...i,c];s.forEach(p=>p==null?void 0:p().catch(()=>{})),f.forEach(p=>p==null?void 0:p[1]().catch(()=>{}));let u=null;const h=y.url?e!==y.url.pathname+y.url.search:!1,g=y.route?r.id!==y.route.id:!1,d=Yt(y.url,t);let _=!1;const l=f.map((p,v)=>{var x;const E=y.branch[v],k=!!(p!=null&&p[0])&&((E==null?void 0:E.loader)!==p[1]||Ne(_,g,h,d,(x=E.server)==null?void 0:x.uses,a));return k&&(_=!0),k});if(l.some(Boolean)){try{u=await ot(t,l)}catch(p){const v=await $(p,{url:t,params:a,route:{id:e}});return q.has(o)?Oe({error:v,url:t,params:a,route:r}):oe({status:J(p),error:v,url:t,route:r})}if(u.type==="redirect")return u}const m=u==null?void 0:u.nodes;let b=!1;const A=f.map(async(p,v)=>{var ie;if(!p)return;const E=y.branch[v],k=m==null?void 0:m[v];if((!k||k.type==="skip")&&p[1]===(E==null?void 0:E.loader)&&!Ne(b,g,h,d,(ie=E.universal)==null?void 0:ie.uses,a))return E;if(b=!0,(k==null?void 0:k.type)==="error")throw k;return Ee({loader:p[1],url:t,params:a,route:r,parent:async()=>{var Re;const Ae={};for(let se=0;se<v;se+=1)Object.assign(Ae,(Re=await A[se])==null?void 0:Re.data);return Ae},server_data_node:ke(k===void 0&&p[0]?{type:"skip"}:k??null,p[0]?E==null?void 0:E.server:void 0)})});for(const p of A)p.catch(()=>{});const w=[];for(let p=0;p<f.length;p+=1)if(f[p])try{w.push(await A[p])}catch(v){if(v instanceof $e)return{type:"redirect",location:v.location};if(q.has(o))return Oe({error:await $(v,{params:a,url:t,route:{id:r.id}}),url:t,params:a,route:r});let E=J(v),k;if(m!=null&&m.includes(v))E=v.status??E,k=v.error;else if(v instanceof ne)k=v.body;else{if(await U.updated.check())return await C(t);k=await $(v,{params:a,url:t,route:{id:r.id}})}const x=await Wt(p,w,s);return x?await te({url:t,params:a,branch:w.slice(0,x.idx).concat(x.node),status:E,error:k,route:r}):await rt(t,{id:r.id},k,E)}else w.push(void 0);return await te({url:t,params:a,branch:w,status:200,error:null,route:r,form:n?void 0:null})}async function Wt(e,n,t){for(;e--;)if(t[e]){let a=e;for(;!n[a];)a-=1;try{return{idx:a+1,node:{node:await t[e](),loader:t[e],data:{},server:null,universal:null}}}catch{continue}}}async function oe({status:e,error:n,url:t,route:a}){const r={};let o=null;if(V.server_loads[0]===0)try{const f=await ot(t,[!0]);if(f.type!=="data"||f.nodes[0]&&f.nodes[0].type!=="data")throw 0;o=f.nodes[0]??null}catch{(t.origin!==K||t.pathname!==location.pathname||we)&&await C(t)}const i=await Ee({loader:de,url:t,params:r,route:a,parent:()=>Promise.resolve({}),server_data_node:ke(o)}),c={node:await X(),loader:X,universal:null,server:null,data:null};return await te({url:t,params:r,branch:[i,c],status:e,error:n,route:null})}function Se(e,n){if(!e||ae(e,P))return;let t;try{t=V.hooks.reroute({url:new URL(e)})??e.pathname}catch{return}const a=nt(t);for(const r of re){const o=r.exec(a);if(o)return{id:e.pathname+e.search,invalidating:n,route:r,params:ht(o),url:e}}}function nt(e){return dt(e.slice(P.length)||"/")}function at({url:e,type:n,intent:t,delta:a}){let r=!1;const o=st(y,t,e,n);a!==void 0&&(o.navigation.delta=a);const s={...o.navigation,cancel:()=>{r=!0,o.reject(new Error("navigation cancelled"))}};return B||We.forEach(i=>i(s)),r?null:o}async function Y({type:e,url:n,popped:t,keepfocus:a,noscroll:r,replace_state:o,state:s={},redirect_count:i=0,nav_token:c={},accept:f=Te,block:u=Te}){const h=Se(n,!1),g=at({url:n,type:e,delta:t==null?void 0:t.delta,intent:h});if(!g){u();return}const d=S,_=L;f(),B=!0,Q&&U.navigating.set(g.navigation),ee=c;let l=h&&await tt(h);if(!l){if(ae(n,P))return await C(n);l=await rt(n,{id:null},await $(new ge(404,"Not Found",`Not found: ${n.pathname}`),{url:n,params:{},route:{id:null}}),404)}if(n=(h==null?void 0:h.url)||n,ee!==c)return g.reject(new Error("navigation aborted")),!1;if(l.type==="redirect")if(i>=20)l=await oe({status:500,error:await $(new Error("Redirect loop"),{url:n,params:{},route:{id:null}}),url:n,route:{id:null}});else return Qe(new URL(l.location,n).href,{},i+1,c),!1;else l.props.page.status>=400&&await U.updated.check()&&await C(n);if(Bt(),ye(d),Xe(_),l.props.page.url.pathname!==n.pathname&&(n.pathname=l.props.page.url.pathname),s=t?t.state:s,!t){const w=o?0:1,p={[D]:S+=w,[G]:L+=w,[qe]:s};(o?history.replaceState:history.pushState).call(history,p,"",n),o||Ht(S,L)}if(R=null,l.props.page.state=s,Q){y=l.state,l.props.page&&(l.props.page.url=n);const w=(await Promise.all(ze.map(p=>p(g.navigation)))).filter(p=>typeof p=="function");if(w.length>0){let p=function(){j=j.filter(v=>!w.includes(v))};w.push(p),j.push(...w)}be.$set(l.props),Je=!0}else et(l,he,!1);const{activeElement:m}=document;await ct();const b=t?t.scroll:r?_e():null;if(Ue){const w=n.hash&&document.getElementById(decodeURIComponent(n.hash.slice(1)));b?scrollTo(b.x,b.y):w?w.scrollIntoView():scrollTo(0,0)}const A=document.activeElement!==m&&document.activeElement!==document.body;!a&&!A&&en(),Ue=!0,l.props.page&&(I=l.props.page),B=!1,e==="popstate"&&Ze(L),g.fulfil(void 0),j.forEach(w=>w(g.navigation)),U.navigating.set(null)}async function rt(e,n,t,a){return e.origin===K&&e.pathname===location.pathname&&!we?await oe({status:a,error:t,url:e,route:n}):await C(e)}function zt(){let e;T.addEventListener("mousemove",o=>{const s=o.target;clearTimeout(e),e=setTimeout(()=>{a(s,2)},20)});function n(o){a(o.composedPath()[0],1)}T.addEventListener("mousedown",n),T.addEventListener("touchstart",n,{passive:!0});const t=new IntersectionObserver(o=>{for(const s of o)s.isIntersecting&&(fe(s.target.href),t.unobserve(s.target))},{threshold:0});function a(o,s){const i=Be(o,T);if(!i)return;const{url:c,external:f,download:u}=ue(i,P);if(f||u)return;const h=z(i);if(!h.reload)if(s<=h.preload_data){const g=Se(c,!1);g&&Kt(g)}else s<=h.preload_code&&fe(c.pathname)}function r(){t.disconnect();for(const o of T.querySelectorAll("a")){const{url:s,external:i,download:c}=ue(o,P);if(i||c)continue;const f=z(o);f.reload||(f.preload_code===W.viewport&&t.observe(o),f.preload_code===W.eager&&fe(s.pathname))}}j.push(r),r()}function $(e,n){if(e instanceof ne)return e.body;const t=J(e),a=Gt(e);return V.hooks.handleError({error:e,event:n,status:t,message:a})??{message:a}}function Jt(e,n){lt(()=>(e.push(n),()=>{const t=e.indexOf(n);e.splice(t,1)}))}function sn(e){Jt(ze,e)}function Xt(e,n={}){return e=Ge(e),e.origin!==K?Promise.reject(new Error("goto: invalid URL")):Qe(e,n,0)}function Zt(){var n;history.scrollRestoration="manual",addEventListener("beforeunload",t=>{let a=!1;if(xe(),!B){const r=st(y,void 0,null,"leave"),o={...r.navigation,cancel:()=>{a=!0,r.reject(new Error("navigation cancelled"))}};We.forEach(s=>s(o))}a?(t.preventDefault(),t.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&xe()}),(n=navigator.connection)!=null&&n.saveData||zt(),T.addEventListener("click",async t=>{var g;if(t.button||t.which!==1||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.defaultPrevented)return;const a=Be(t.composedPath()[0],T);if(!a)return;const{url:r,external:o,target:s,download:i}=ue(a,P);if(!r)return;if(s==="_parent"||s==="_top"){if(window.parent!==window)return}else if(s&&s!=="_self")return;const c=z(a);if(!(a instanceof SVGAElement)&&r.protocol!==location.protocol&&!(r.protocol==="https:"||r.protocol==="http:")||i)return;if(o||c.reload){at({url:r,type:"link"})?B=!0:t.preventDefault();return}const[u,h]=r.href.split("#");if(h!==void 0&&u===ce(location)){const[,d]=y.url.href.split("#");if(d===h){t.preventDefault(),h===""||h==="top"&&a.ownerDocument.getElementById("top")===null?window.scrollTo({top:0}):(g=a.ownerDocument.getElementById(h))==null||g.scrollIntoView();return}if(F=!0,ye(S),e(r),!c.replace_state)return;F=!1}t.preventDefault(),await new Promise(d=>{requestAnimationFrame(()=>{setTimeout(d,0)}),setTimeout(d,100)}),Y({type:"link",url:r,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??r.href===location.href})}),T.addEventListener("submit",t=>{if(t.defaultPrevented)return;const a=HTMLFormElement.prototype.cloneNode.call(t.target),r=t.submitter;if(((r==null?void 0:r.formMethod)||a.method)!=="get")return;const s=new URL((r==null?void 0:r.hasAttribute("formaction"))&&(r==null?void 0:r.formAction)||a.action);if(ae(s,P))return;const i=t.target,c=z(i);if(c.reload)return;t.preventDefault(),t.stopPropagation();const f=new FormData(i),u=r==null?void 0:r.getAttribute("name");u&&f.append(u,(r==null?void 0:r.getAttribute("value"))??""),s.search=new URLSearchParams(f).toString(),Y({type:"form",url:s,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??s.href===location.href})}),addEventListener("popstate",async t=>{var a;if((a=t.state)!=null&&a[D]){const r=t.state[D];if(ee={},r===S)return;const o=N[r],s=t.state[qe]??{},i=new URL(t.state[Tt]??location.href),c=t.state[G],f=ce(location)===ce(y.url);if(c===L&&(Je||f)){e(i),N[S]=_e(),o&&scrollTo(o.x,o.y),s!==I.state&&(I={...I,state:s},be.$set({page:I})),S=r;return}const h=r-S;await Y({type:"popstate",url:i,popped:{state:s,scroll:o,delta:h},accept:()=>{S=r,L=c},block:()=>{history.go(-h)},nav_token:ee})}else if(!F){const r=new URL(location.href);e(r)}}),addEventListener("hashchange",()=>{F&&(F=!1,history.replaceState({...history.state,[D]:++S,[G]:L},"",location.href))});for(const t of document.querySelectorAll("link"))t.rel==="icon"&&(t.href=t.href);addEventListener("pageshow",t=>{t.persisted&&U.navigating.set(null)});function e(t){y.url=t,U.page.set({...I,url:t}),U.page.notify()}}async function Qt(e,{status:n=200,error:t,node_ids:a,params:r,route:o,data:s,form:i}){we=!0;const c=new URL(location.href);({params:r={},route:o={id:null}}=Se(c,!1)||{});let f;try{const u=a.map(async(d,_)=>{const l=s[_];return l!=null&&l.uses&&(l.uses=it(l.uses)),Ee({loader:V.nodes[d],url:c,params:r,route:o,parent:async()=>{const m={};for(let b=0;b<_;b+=1)Object.assign(m,(await u[b]).data);return m},server_data_node:ke(l)})}),h=await Promise.all(u),g=re.find(({id:d})=>d===o.id);if(g){const d=g.layouts;for(let _=0;_<d.length;_++)d[_]||h.splice(_,0,void 0)}f=await te({url:c,params:r,branch:h,status:n,error:t,form:i,route:g??null})}catch(u){if(u instanceof $e){await C(new URL(u.location,location.href));return}f=await oe({status:J(u),error:await $(u,{url:c,params:r,route:o}),url:c,route:o})}f.props.page&&(f.props.page.state={}),et(f,e,!0)}async function ot(e,n){var r;const t=new URL(e);t.pathname=yt(e.pathname),e.pathname.endsWith("/")&&t.searchParams.append(qt,"1"),t.searchParams.append(Mt,n.map(o=>o?"1":"0").join(""));const a=await Ce(t.href);if(!a.ok){let o;throw(r=a.headers.get("content-type"))!=null&&r.includes("application/json")?o=await a.json():a.status===404?o="Not Found":a.status===500&&(o="Internal Error"),new ne(a.status,o)}return new Promise(async o=>{var h;const s=new Map,i=a.body.getReader(),c=new TextDecoder;function f(g){return Ct(g,{Promise:d=>new Promise((_,l)=>{s.set(d,{fulfil:_,reject:l})})})}let u="";for(;;){const{done:g,value:d}=await i.read();if(g&&!u)break;for(u+=!d&&u?`
`:c.decode(d,{stream:!0});;){const _=u.indexOf(`
`);if(_===-1)break;const l=JSON.parse(u.slice(0,_));if(u=u.slice(_+1),l.type==="redirect")return o(l);if(l.type==="data")(h=l.nodes)==null||h.forEach(m=>{(m==null?void 0:m.type)==="data"&&(m.uses=it(m.uses),m.data=f(m.data))}),o(l);else if(l.type==="chunk"){const{id:m,data:b,error:A}=l,w=s.get(m);s.delete(m),A?w.reject(f(A)):w.fulfil(f(b))}}}})}function it(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function en(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const n=document.body,t=n.getAttribute("tabindex");n.tabIndex=-1,n.focus({preventScroll:!0,focusVisible:!1}),t!==null?n.setAttribute("tabindex",t):n.removeAttribute("tabindex");const a=getSelection();if(a&&a.type!=="None"){const r=[];for(let o=0;o<a.rangeCount;o+=1)r.push(a.getRangeAt(o));setTimeout(()=>{if(a.rangeCount===r.length){for(let o=0;o<a.rangeCount;o+=1){const s=r[o],i=a.getRangeAt(o);if(s.commonAncestorContainer!==i.commonAncestorContainer||s.startContainer!==i.startContainer||s.endContainer!==i.endContainer||s.startOffset!==i.startOffset||s.endOffset!==i.endOffset)return}a.removeAllRanges()}})}}}function st(e,n,t,a){var c,f;let r,o;const s=new Promise((u,h)=>{r=u,o=h});return s.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:t&&{params:(n==null?void 0:n.params)??null,route:{id:((f=n==null?void 0:n.route)==null?void 0:f.id)??null},url:t},willUnload:!n,type:a,complete:s},fulfil:r,reject:o}}export{on as a,Xt as g,sn as o,U as s};
