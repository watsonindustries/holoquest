function b(){}const W=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function Z(t){return t()}function V(){return Object.create(null)}function v(t){t.forEach(Z)}function D(t){return typeof t=="function"}function Bt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function _t(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return b;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Wt(t,e,n,i){if(t){const r=tt(t,e,n,i);return t[0](r)}}function tt(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Ht(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)l[s]=e.dirty[s]|r[s];return l}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,l){if(r){const o=tt(e,n,i,l);t.p(o,r)}}function Gt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Kt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Qt(t,e,n){return t.set(n),e}function Ut(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const et=typeof window<"u";let H=et?()=>window.performance.now():()=>Date.now(),I=et?t=>requestAnimationFrame(t):b;const N=new Set;function nt(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&I(nt)}function G(t){let e;return N.size===0&&I(nt),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}const mt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;"WeakMap"in mt;let z=!1;function pt(){z=!0}function yt(){z=!1}function gt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function bt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let a=0;a<e.length;a++){const d=e[a];d.claim_order!==void 0&&c.push(d)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const a=e[c].claim_order,d=(r>0&&e[n[r]].claim_order<=a?r+1:gt(1,r,h=>e[n[h]].claim_order,a))-1;i[c]=n[d]+1;const u=d+1;n[u]=c,r=Math.max(u,r)}const l=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(l.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);l.reverse(),o.sort((c,a)=>c.claim_order-a.claim_order);for(let c=0,a=0;c<o.length;c++){for(;a<l.length&&o[c].claim_order>=l[a].claim_order;)a++;const d=a<l.length?l[a]:null;t.insertBefore(o[c],d)}}function $t(t,e){t.appendChild(e)}function it(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=st("style");return wt(it(t),e),e.sheet}function wt(t,e){return $t(t.head||t,e),e.sheet}function vt(t,e){if(z){for(bt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){z&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function st(t){return document.createElement(t)}function kt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function J(t){return document.createTextNode(t)}function Yt(){return J(" ")}function Zt(){return J("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Et(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t,e){for(const n in e)Et(t,n,e[n])}function Nt(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ot(t,e,n,i,r=!1){St(t);const l=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function ct(t,e,n,i){return ot(t,r=>r.nodeName===e,r=>{const l=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||l.push(s.name)}l.forEach(o=>r.removeAttribute(o))},()=>i(e))}function ne(t,e,n){return ct(t,e,n,st)}function ie(t,e,n){return ct(t,e,n,kt)}function jt(t,e){return ot(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>J(e),!0)}function re(t){return jt(t," ")}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function ce(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function le(t,e,n){t.classList[n?"add":"remove"](e)}function At(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function ae(t,e){return new t(e)}const T=new Map;let q=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Mt(t,e){const n={stylesheet:xt(e),rules:{}};return T.set(t,n),n}function L(t,e,n,i,r,l,o,s=0){const c=16.666/i;let a=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*l(p);a+=p*100+`%{${o(y,1-y)}}
`}const d=a+`100% {${o(n,1-n)}}
}`,u=`__svelte_${Ct(d)}_${s}`,h=it(t),{stylesheet:f,rules:_}=T.get(h)||Mt(h,t);_[u]||(_[u]=!0,f.insertRule(`@keyframes ${u} ${d}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${u} ${i}ms linear ${r}ms 1 both`,q+=1,u}function R(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?l=>l.indexOf(e)<0:l=>l.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Ot())}function Ot(){I(()=>{q||(T.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&rt(e)}),T.clear())})}let O;function M(t){O=t}function K(){if(!O)throw new Error("Function called outside component initialization");return O}function ue(t){K().$$.on_mount.push(t)}function fe(t){K().$$.after_update.push(t)}function de(t){K().$$.on_destroy.push(t)}const E=[],X=[];let S=[];const Y=[],lt=Promise.resolve();let F=!1;function at(){F||(F=!0,lt.then(ut))}function _e(){return at(),lt}function j(t){S.push(t)}const B=new Set;let k=0;function ut(){if(k!==0)return;const t=O;do{try{for(;k<E.length;){const e=E[k];k++,M(e),Dt(e.$$)}}catch(e){throw E.length=0,k=0,e}for(M(null),E.length=0,k=0;X.length;)X.pop()();for(let e=0;e<S.length;e+=1){const n=S[e];B.has(n)||(B.add(n),n())}S.length=0}while(E.length);for(;Y.length;)Y.pop()();F=!1,B.clear(),M(t)}function Dt(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(j)}}function Pt(t){const e=[],n=[];S.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),S=e}let C;function Q(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function w(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const P=new Set;let g;function he(){g={r:0,c:[],p:g}}function me(){g.r||v(g.c),g=g.p}function Tt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function pe(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),g.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const U={duration:0};function ye(t,e,n){const i={direction:"in"};let r=e(t,n,i),l=!1,o,s,c=0;function a(){o&&R(t,o)}function d(){const{delay:h=0,duration:f=300,easing:_=W,tick:m=b,css:p}=r||U;p&&(o=L(t,0,1,f,h,_,p,c++)),m(0,1);const y=H()+h,A=y+f;s&&s.abort(),l=!0,j(()=>w(t,!0,"start")),s=G($=>{if(l){if($>=A)return m(1,0),w(t,!0,"end"),a(),l=!1;if($>=y){const x=_(($-y)/f);m(x,1-x)}}return l})}let u=!1;return{start(){u||(u=!0,R(t),D(r)?(r=r(i),Q().then(d)):d())},invalidate(){u=!1},end(){l&&(a(),l=!1)}}}function ge(t,e,n){const i={direction:"out"};let r=e(t,n,i),l=!0,o;const s=g;s.r+=1;function c(){const{delay:a=0,duration:d=300,easing:u=W,tick:h=b,css:f}=r||U;f&&(o=L(t,1,0,d,a,u,f));const _=H()+a,m=_+d;j(()=>w(t,!1,"start")),G(p=>{if(l){if(p>=m)return h(0,1),w(t,!1,"end"),--s.r||v(s.c),!1;if(p>=_){const y=u((p-_)/d);h(1-y,y)}}return l})}return D(r)?Q().then(()=>{r=r(i),c()}):c(),{end(a){a&&r.tick&&r.tick(1,0),l&&(o&&R(t,o),l=!1)}}}function be(t,e,n,i){const r={direction:"both"};let l=e(t,n,r),o=i?0:1,s=null,c=null,a=null;function d(){a&&R(t,a)}function u(f,_){const m=f.b-o;return _*=Math.abs(m),{a:o,b:f.b,d:m,duration:_,start:f.start,end:f.start+_,group:f.group}}function h(f){const{delay:_=0,duration:m=300,easing:p=W,tick:y=b,css:A}=l||U,$={start:H()+_,b:f};f||($.group=g,g.r+=1),s||c?c=$:(A&&(d(),a=L(t,o,f,m,_,p,A)),f&&y(0,1),s=u($,m),j(()=>w(t,f,"start")),G(x=>{if(c&&x>c.start&&(s=u(c,m),c=null,w(t,s.b,"start"),A&&(d(),a=L(t,o,s.b,s.duration,0,p,l.css))),s){if(x>=s.end)y(o=s.b,1-o),w(t,s.b,"end"),c||(s.b?d():--s.group.r||v(s.group.c)),s=null;else if(x>=s.start){const ft=x-s.start;o=s.a+s.d*p(ft/s.duration),y(o,1-o)}}return!!(s||c)}))}return{run(f){D(l)?Q().then(()=>{l=l(r),h(f)}):h(f)},end(){d(),s=c=null}}}function $e(t,e){const n={},i={},r={$$scope:1};let l=t.length;for(;l--;){const o=t[l],s=e[l];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(n[c]=s[c],r[c]=1);t[l]=s}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function xe(t){return typeof t=="object"&&t!==null?t:{}}const qt=["allowfullscreen","allowpaymentrequest","async","autofocus","autoplay","checked","controls","default","defer","disabled","formnovalidate","hidden","inert","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","selected"];[...qt];function we(t){t&&t.c()}function ve(t,e){t&&t.l(e)}function Lt(t,e,n,i){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),i||j(()=>{const o=t.$$.on_mount.map(Z).filter(D);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),l.forEach(j)}function Rt(t,e){const n=t.$$;n.fragment!==null&&(Pt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function zt(t,e){t.$$.dirty[0]===-1&&(E.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ke(t,e,n,i,r,l,o,s=[-1]){const c=O;M(t);const a=t.$$={fragment:null,ctx:[],props:l,update:b,not_equal:r,bound:V(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:V(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(a.root);let d=!1;if(a.ctx=n?n(t,e.props||{},(u,h,...f)=>{const _=f.length?f[0]:h;return a.ctx&&r(a.ctx[u],a.ctx[u]=_)&&(!a.skip_bound&&a.bound[u]&&a.bound[u](_),d&&zt(t,u)),h}):[],a.update(),d=!0,v(a.before_update),a.fragment=i?i(a.ctx):!1,e.target){if(e.hydrate){pt();const u=Nt(e.target);a.fragment&&a.fragment.l(u),u.forEach(rt)}else a.fragment&&a.fragment.c();e.intro&&Tt(t.$$.fragment),Lt(t,e.target,e.anchor,e.customElement),yt(),ut()}M(c)}class Ee{$destroy(){Rt(this,1),this.$destroy=b}$on(e,n){if(!D(n))return b;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{Jt as $,Lt as A,Rt as B,vt as C,Ft as D,Wt as E,kt as F,ie as G,It as H,Gt as I,Ht as J,le as K,j as L,be as M,Qt as N,dt as O,$e as P,xe as Q,b as R,Ee as S,ye as T,te as U,ge as V,v as W,Xt as X,de as Y,ee as Z,Kt as _,Yt as a,W as a0,Ut as a1,oe as a2,D as a3,Vt as b,re as c,pe as d,Zt as e,me as f,Tt as g,rt as h,ke as i,fe as j,st as k,ne as l,Nt as m,Et as n,ue as o,ce as p,J as q,jt as r,Bt as s,_e as t,se as u,he as v,X as w,ae as x,we as y,ve as z};