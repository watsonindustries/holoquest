function $(){}const W=t=>t;function dt(t,e){for(const n in e)t[n]=e[n];return t}function tt(t){return t()}function X(){return Object.create(null)}function v(t){t.forEach(tt)}function O(t){return typeof t=="function"}function zt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let T;function Bt(t,e){return T||(T=document.createElement("a")),T.href=e,t===T.href}function ht(t){return Object.keys(t).length===0}function mt(t,...e){if(t==null)return $;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ft(t,e,n){t.$$.on_destroy.push(mt(e,n))}function Ht(t,e,n,i){if(t){const r=et(t,e,n,i);return t[0](r)}}function et(t,e,n,i){return t[1]&&i?dt(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],o=Math.max(e.dirty.length,r.length);for(let s=0;s<o;s+=1)u[s]=e.dirty[s]|r[s];return u}return e.dirty|r}return e.dirty}function Gt(t,e,n,i,r,u){if(r){const o=et(e,n,i,u);t.p(o,r)}}function It(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Jt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function Kt(t,e){const n={};e=new Set(e);for(const i in t)!e.has(i)&&i[0]!=="$"&&(n[i]=t[i]);return n}function Qt(t,e,n){return t.set(n),e}function Ut(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}const nt=typeof window<"u";let G=nt?()=>window.performance.now():()=>Date.now(),I=nt?t=>requestAnimationFrame(t):$;const N=new Set;function it(t){N.forEach(e=>{e.c(t)||(N.delete(e),e.f())}),N.size!==0&&I(it)}function J(t){let e;return N.size===0&&I(it),{promise:new Promise(n=>{N.add(e={c:t,f:n})}),abort(){N.delete(e)}}}let B=!1;function pt(){B=!0}function yt(){B=!1}function gt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function $t(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const _=e[l];_.claim_order!==void 0&&c.push(_)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,_=(r>0&&e[n[r]].claim_order<=l?r+1:gt(1,r,h=>e[n[h]].claim_order,l))-1;i[c]=n[_]+1;const a=_+1;n[a]=c,r=Math.max(a,r)}const u=[],o=[];let s=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(u.push(e[c-1]);s>=c;s--)o.push(e[s]);s--}for(;s>=0;s--)o.push(e[s]);u.reverse(),o.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<o.length;c++){for(;l<u.length&&o[c].claim_order>=u[l].claim_order;)l++;const _=l<u.length?u[l]:null;t.insertBefore(o[c],_)}}function xt(t,e){t.appendChild(e)}function rt(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function bt(t){const e=ot("style");return wt(rt(t),e),e.sheet}function wt(t,e){return xt(t.head||t,e),e.sheet}function vt(t,e){if(B){for($t(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Vt(t,e,n){B&&!n?vt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function st(t){t.parentNode&&t.parentNode.removeChild(t)}function Xt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function K(t){return document.createTextNode(t)}function Yt(){return K(" ")}function Zt(){return K("")}function te(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function kt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ee(t,e){for(const n in e)kt(t,n,e[n])}function Nt(t){return Array.from(t.childNodes)}function At(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function ct(t,e,n,i,r=!1){At(t);const u=(()=>{for(let o=t.claim_info.last_index;o<t.length;o++){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r||(t.claim_info.last_index=o),s}}for(let o=t.claim_info.last_index-1;o>=0;o--){const s=t[o];if(e(s)){const c=n(s);return c===void 0?t.splice(o,1):t[o]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=o,s}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function ut(t,e,n,i){return ct(t,r=>r.nodeName===e,r=>{const u=[];for(let o=0;o<r.attributes.length;o++){const s=r.attributes[o];n[s.name]||u.push(s.name)}u.forEach(o=>r.removeAttribute(o))},()=>i(e))}function ne(t,e,n){return ut(t,e,n,ot)}function ie(t,e,n){return ut(t,e,n,Et)}function St(t,e){return ct(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>K(e),!0)}function re(t){return St(t," ")}function se(t,e){e=""+e,t.data!==e&&(t.data=e)}function oe(t,e){t.value=e??""}function ce(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function ue(t,e,n){t.classList[n?"add":"remove"](e)}function jt(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function le(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const u=r.textContent.trim();u===`HEAD_${t}_END`?(i-=1,n.push(r)):u===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function ae(t,e){return new t(e)}const R=new Map;let q=0;function Ct(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function Dt(t,e){const n={stylesheet:bt(e),rules:{}};return R.set(t,n),n}function L(t,e,n,i,r,u,o,s=0){const c=16.666/i;let l=`{
`;for(let p=0;p<=1;p+=c){const y=e+(n-e)*u(p);l+=p*100+`%{${o(y,1-y)}}
`}const _=l+`100% {${o(n,1-n)}}
}`,a=`__svelte_${Ct(_)}_${s}`,h=rt(t),{stylesheet:f,rules:d}=R.get(h)||Dt(h,t);d[a]||(d[a]=!0,f.insertRule(`@keyframes ${a} ${_}`,f.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${a} ${i}ms linear ${r}ms 1 both`,q+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),q-=r,q||Mt())}function Mt(){I(()=>{q||(R.forEach(t=>{const{ownerNode:e}=t.stylesheet;e&&st(e)}),R.clear())})}let M;function D(t){M=t}function Q(){if(!M)throw new Error("Function called outside component initialization");return M}function fe(t){Q().$$.on_mount.push(t)}function _e(t){Q().$$.after_update.push(t)}function de(t){Q().$$.on_destroy.push(t)}const k=[],Y=[];let A=[];const Z=[],lt=Promise.resolve();let H=!1;function at(){H||(H=!0,lt.then(ft))}function he(){return at(),lt}function S(t){A.push(t)}const F=new Set;let E=0;function ft(){if(E!==0)return;const t=M;do{try{for(;E<k.length;){const e=k[E];E++,D(e),Ot(e.$$)}}catch(e){throw k.length=0,E=0,e}for(D(null),k.length=0,E=0;Y.length;)Y.pop()();for(let e=0;e<A.length;e+=1){const n=A[e];F.has(n)||(F.add(n),n())}A.length=0}while(k.length);for(;Z.length;)Z.pop()();H=!1,F.clear(),D(t)}function Ot(t){if(t.fragment!==null){t.update(),v(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}function Tt(t){const e=[],n=[];A.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),A=e}let C;function U(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function w(t,e,n){t.dispatchEvent(jt(`${e?"intro":"outro"}${n}`))}const P=new Set;let g;function me(){g={r:0,c:[],p:g}}function pe(){g.r||v(g.c),g=g.p}function Pt(t,e){t&&t.i&&(P.delete(t),t.i(e))}function ye(t,e,n,i){if(t&&t.o){if(P.has(t))return;P.add(t),g.c.push(()=>{P.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const V={duration:0};function ge(t,e,n){const i={direction:"in"};let r=e(t,n,i),u=!1,o,s,c=0;function l(){o&&z(t,o)}function _(){const{delay:h=0,duration:f=300,easing:d=W,tick:m=$,css:p}=r||V;p&&(o=L(t,0,1,f,h,d,p,c++)),m(0,1);const y=G()+h,j=y+f;s&&s.abort(),u=!0,S(()=>w(t,!0,"start")),s=J(x=>{if(u){if(x>=j)return m(1,0),w(t,!0,"end"),l(),u=!1;if(x>=y){const b=d((x-y)/f);m(b,1-b)}}return u})}let a=!1;return{start(){a||(a=!0,z(t),O(r)?(r=r(i),U().then(_)):_())},invalidate(){a=!1},end(){u&&(l(),u=!1)}}}function $e(t,e,n){const i={direction:"out"};let r=e(t,n,i),u=!0,o;const s=g;s.r+=1;function c(){const{delay:l=0,duration:_=300,easing:a=W,tick:h=$,css:f}=r||V;f&&(o=L(t,1,0,_,l,a,f));const d=G()+l,m=d+_;S(()=>w(t,!1,"start")),J(p=>{if(u){if(p>=m)return h(0,1),w(t,!1,"end"),--s.r||v(s.c),!1;if(p>=d){const y=a((p-d)/_);h(1-y,y)}}return u})}return O(r)?U().then(()=>{r=r(i),c()}):c(),{end(l){l&&r.tick&&r.tick(1,0),u&&(o&&z(t,o),u=!1)}}}function xe(t,e,n,i){const r={direction:"both"};let u=e(t,n,r),o=i?0:1,s=null,c=null,l=null;function _(){l&&z(t,l)}function a(f,d){const m=f.b-o;return d*=Math.abs(m),{a:o,b:f.b,d:m,duration:d,start:f.start,end:f.start+d,group:f.group}}function h(f){const{delay:d=0,duration:m=300,easing:p=W,tick:y=$,css:j}=u||V,x={start:G()+d,b:f};f||(x.group=g,g.r+=1),s||c?c=x:(j&&(_(),l=L(t,o,f,m,d,p,j)),f&&y(0,1),s=a(x,m),S(()=>w(t,f,"start")),J(b=>{if(c&&b>c.start&&(s=a(c,m),c=null,w(t,s.b,"start"),j&&(_(),l=L(t,o,s.b,s.duration,0,p,u.css))),s){if(b>=s.end)y(o=s.b,1-o),w(t,s.b,"end"),c||(s.b?_():--s.group.r||v(s.group.c)),s=null;else if(b>=s.start){const _t=b-s.start;o=s.a+s.d*p(_t/s.duration),y(o,1-o)}}return!!(s||c)}))}return{run(f){O(u)?U().then(()=>{u=u(r),h(f)}):h(f)},end(){_(),s=c=null}}}function be(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const o=t[u],s=e[u];if(s){for(const c in o)c in s||(i[c]=1);for(const c in s)r[c]||(n[c]=s[c],r[c]=1);t[u]=s}else for(const c in o)r[c]=1}for(const o in i)o in n||(n[o]=void 0);return n}function we(t){return typeof t=="object"&&t!==null?t:{}}function ve(t){t&&t.c()}function Ee(t,e){t&&t.l(e)}function Rt(t,e,n,i){const{fragment:r,after_update:u}=t.$$;r&&r.m(e,n),i||S(()=>{const o=t.$$.on_mount.map(tt).filter(O);t.$$.on_destroy?t.$$.on_destroy.push(...o):v(o),t.$$.on_mount=[]}),u.forEach(S)}function qt(t,e){const n=t.$$;n.fragment!==null&&(Tt(n.after_update),v(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Lt(t,e){t.$$.dirty[0]===-1&&(k.push(t),at(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ke(t,e,n,i,r,u,o,s=[-1]){const c=M;D(t);const l=t.$$={fragment:null,ctx:[],props:u,update:$,not_equal:r,bound:X(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:X(),dirty:s,skip_bound:!1,root:e.target||c.$$.root};o&&o(l.root);let _=!1;if(l.ctx=n?n(t,e.props||{},(a,h,...f)=>{const d=f.length?f[0]:h;return l.ctx&&r(l.ctx[a],l.ctx[a]=d)&&(!l.skip_bound&&l.bound[a]&&l.bound[a](d),_&&Lt(t,a)),h}):[],l.update(),_=!0,v(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){pt();const a=Nt(e.target);l.fragment&&l.fragment.l(a),a.forEach(st)}else l.fragment&&l.fragment.c();e.intro&&Pt(t.$$.fragment),Rt(t,e.target,e.anchor,e.customElement),yt(),ft()}D(c)}class Ne{$destroy(){qt(this,1),this.$destroy=$}$on(e,n){if(!O(n))return $;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!ht(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{O as $,Rt as A,qt as B,vt as C,Ft as D,Ht as E,Et as F,ie as G,te as H,Gt as I,It as J,Wt as K,v as L,$ as M,ue as N,S as O,xe as P,Qt as Q,dt as R,Ne as S,be as T,we as U,Bt as V,ge as W,$e as X,Xt as Y,le as Z,oe as _,Yt as a,de as a0,ee as a1,Kt as a2,Jt as a3,W as a4,Ut as a5,Vt as b,re as c,ye as d,Zt as e,pe as f,Pt as g,st as h,ke as i,_e as j,ot as k,ne as l,Nt as m,kt as n,fe as o,ce as p,K as q,St as r,zt as s,he as t,se as u,me as v,Y as w,ae as x,ve as y,Ee as z};
