function v(){}const ct=t=>t;function lt(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t()}function I(){return Object.create(null)}function E(t){t.forEach(Q)}function B(t){return typeof t=="function"}function Wt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Ft(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function ut(t){return Object.keys(t).length===0}function at(t,...e){if(t==null)return v;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ht(t,e,n){t.$$.on_destroy.push(at(e,n))}function It(t,e,n,i){if(t){const o=U(t,e,n,i);return t[0](o)}}function U(t,e,n,i){return t[1]&&i?lt(n.ctx.slice(),t[1](i(e))):n.ctx}function Gt(t,e,n,i){if(t[2]&&i){const o=t[2](i(n));if(e.dirty===void 0)return o;if(typeof o=="object"){const u=[],s=Math.max(e.dirty.length,o.length);for(let r=0;r<s;r+=1)u[r]=e.dirty[r]|o[r];return u}return e.dirty|o}return e.dirty}function Jt(t,e,n,i,o,u){if(o){const s=U(e,n,i,u);t.p(s,o)}}function Kt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Qt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Ut(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}const V=typeof window<"u";let ft=V?()=>window.performance.now():()=>Date.now(),W=V?t=>requestAnimationFrame(t):v;const x=new Set;function X(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&W(X)}function dt(t){let e;return x.size===0&&W(X),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}const _t=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in _t;let D=!1;function ht(){D=!0}function mt(){D=!1}function pt(t,e,n,i){for(;t<e;){const o=t+(e-t>>1);n(o)<=i?t=o+1:e=o}return t}function yt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const d=e[l];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let o=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,d=(o>0&&e[n[o]].claim_order<=l?o+1:pt(1,o,h=>e[n[h]].claim_order,l))-1;i[c]=n[d]+1;const a=d+1;n[a]=c,o=Math.max(a,o)}const u=[],s=[];let r=e.length-1;for(let c=n[o]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);r>=c;r--)s.push(e[r]);r--}for(;r>=0;r--)s.push(e[r]);u.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<u.length&&s[c].claim_order>=u[l].claim_order;)l++;const d=l<u.length?u[l]:null;t.insertBefore(s[c],d)}}function gt(t,e){t.appendChild(e)}function Y(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=tt("style");return $t(Y(t),e),e.sheet}function $t(t,e){return gt(t.head||t,e),e.sheet}function xt(t,e){if(D){for(yt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){D&&!n?xt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function Z(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function tt(t){return document.createElement(t)}function wt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function F(t){return document.createTextNode(t)}function Yt(){return F(" ")}function Zt(){return F("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t,e){for(const n in e)vt(t,n,e[n])}function Et(t){return Array.from(t.childNodes)}function kt(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function et(t,e,n,i,o=!1){kt(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const r=t[s];if(e(r)){const c=n(r);return c===void 0?t.splice(s,1):t[s]=c,o||(t.claim_info.last_index=s),r}}for(let s=t.claim_info.last_index-1;s>=0;s--){const r=t[s];if(e(r)){const c=n(r);return c===void 0?t.splice(s,1):t[s]=c,o?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,r}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function nt(t,e,n,i){return et(t,o=>o.nodeName===e,o=>{const u=[];for(let s=0;s<o.attributes.length;s++){const r=o.attributes[s];n[r.name]||u.push(r.name)}u.forEach(s=>o.removeAttribute(s))},()=>i(e))}function ne(t,e,n){return nt(t,e,n,tt)}function ie(t,e,n){return nt(t,e,n,wt)}function Nt(t,e){return et(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>F(e),!0)}function re(t){return Nt(t," ")}function oe(t,e){e=""+e,t.data!==e&&(t.data=e)}function se(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ce(t,e,n){t.classList[n?"add":"remove"](e)}function St(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(t,n,i,e),o}function le(t,e){return new t(e)}const M=new Map;let q=0;function jt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function At(t,e){const n={stylesheet:bt(e),rules:{}};return M.set(t,n),n}function G(t,e,n,i,o,u,s,r=0){const c=16.666/i;let l=`{
`;for(let y=0;y<=1;y+=c){const g=e+(n-e)*u(y);l+=y*100+`%{${s(g,1-g)}}
`}const d=l+`100% {${s(n,1-n)}}
}`,a=`__svelte_${jt(d)}_${r}`,h=Y(t),{stylesheet:f,rules:_}=M.get(h)||At(h,t);_[a]||(_[a]=!0,f.insertRule(`@keyframes ${a} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${o}ms 1 both`,q+=1,a}function Ct(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),o=n.length-i.length;o&&(t.style.animation=i.join(", "),q-=o,q||Mt())}function Mt(){W(()=>{q||(M.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&Z(e)}),M.clear())})}let S;function N(t){S=t}function H(){if(!S)throw new Error("Function called outside component initialization");return S}function ue(t){H().$$.on_mount.push(t)}function ae(t){H().$$.after_update.push(t)}function fe(t){H().$$.on_destroy.push(t)}const $=[],J=[];let w=[];const K=[],it=Promise.resolve();let z=!1;function rt(){z||(z=!0,it.then(ot))}function de(){return rt(),it}function O(t){w.push(t)}const L=new Set;let b=0;function ot(){if(b!==0)return;const t=S;do{try{for(;b<$.length;){const e=$[b];b++,N(e),qt(e.$$)}}catch(e){throw $.length=0,b=0,e}for(N(null),$.length=0,b=0;J.length;)J.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];L.has(n)||(L.add(n),n())}w.length=0}while($.length);for(;K.length;)K.pop()();z=!1,L.clear(),N(t)}function qt(t){if(t.fragment!==null){t.update(),E(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(O)}}function Ot(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}let k;function Dt(){return k||(k=Promise.resolve(),k.then(()=>{k=null})),k}function R(t,e,n){t.dispatchEvent(St(`${e?"intro":"outro"}${n}`))}const C=new Set;let p;function _e(){p={r:0,c:[],p}}function he(){p.r||E(p.c),p=p.p}function Pt(t,e){t&&t.i&&(C.delete(t),t.i(e))}function me(t,e,n,i){if(t&&t.o){if(C.has(t))return;C.add(t),p.c.push(()=>{C.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Tt={duration:0};function pe(t,e,n,i){const o={direction:"both"};let u=e(t,n,o),s=i?0:1,r=null,c=null,l=null;function d(){l&&Ct(t,l)}function a(f,_){const m=f.b-s;return _*=Math.abs(m),{a:s,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:y=ct,tick:g=v,css:P}=u||Tt,T={start:ft()+_,b:f};f||(T.group=p,p.r+=1),r||c?c=T:(P&&(d(),l=G(t,s,f,m,_,y,P)),f&&g(0,1),r=a(T,m),O(()=>R(t,f,"start")),dt(j=>{if(c&&j>c.start&&(r=a(c,m),c=null,R(t,r.b,"start"),P&&(d(),l=G(t,s,r.b,r.duration,0,y,u.css))),r){if(j>=r.end)g(s=r.b,1-s),R(t,r.b,"end"),c||(r.b?d():--r.group.r||E(r.group.c)),r=null;else if(j>=r.start){const st=j-r.start;s=r.a+r.d*y(st/r.duration),g(s,1-s)}}return!!(r||c)}))}return{run(f){B(u)?Dt().then(()=>{u=u(o),h(f)}):h(f)},end(){d(),r=c=null}}}function ye(t,e){const n={},i={},o={$$scope:1};let u=t.length;for(;u--;){const s=t[u],r=e[u];if(r){for(const c in s)c in r||(i[c]=1);for(const c in r)o[c]||(n[c]=r[c],o[c]=1);t[u]=r}else for(const c in s)o[c]=1}for(const s in i)s in n||(n[s]=void 0);return n}function ge(t){return typeof t=="object"&&t!==null?t:{}}const Lt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...Lt];function be(t){t&&t.c()}function $e(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:o,after_update:u}=t.$$;o&&o.m(e,n),i||O(()=>{const s=t.$$.on_mount.map(Q).filter(B);t.$$.on_destroy?t.$$.on_destroy.push(...s):E(s),t.$$.on_mount=[]}),u.forEach(O)}function zt(t,e){const n=t.$$;n.fragment!==null&&(Ot(n.after_update),E(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&($.push(t),rt(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function xe(t,e,n,i,o,u,s,r=[-1]){const c=S;N(t);const l=t.$$={fragment:null,ctx:[],props:u,update:v,not_equal:o,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:I(),dirty:r,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let d=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const _=f.length?f[0]:h;return l.ctx&&o(l.ctx[a],l.ctx[a]=_)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](_),d&&Bt(t,a)),h}):[],l.update(),d=!0,E(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){ht();const a=Et(e.target);l.fragment&&l.fragment.l(a),a.forEach(Z)}else l.fragment&&l.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),mt(),ot()}N(c)}class we{$destroy(){zt(this,1),this.$destroy=v}$on(e,n){if(!B(n))return v;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const o=i.indexOf(n);o!==-1&&i.splice(o,1)}}$set(e){this.$$set&&!ut(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Rt as A,zt as B,wt as C,ie as D,xt as E,v as F,It as G,Jt as H,Kt as I,Gt as J,Ht as K,Ft as L,ce as M,Xt as N,lt as O,ye as P,ge as Q,te as R,we as S,ct as T,O as U,pe as V,fe as W,ee as X,Ut as Y,Qt as Z,Yt as a,Vt as b,re as c,me as d,Zt as e,he as f,Pt as g,Z as h,xe as i,ae as j,tt as k,ne as l,Et as m,vt as n,ue as o,se as p,F as q,Nt as r,Wt as s,de as t,oe as u,_e as v,J as w,le as x,be as y,$e as z};
