import{S as J,i as K,s as U,k as b,a as x,q as P,l as y,m as A,h as u,c as V,r as Q,n as m,b as C,E,u as le,L as H,M as R,F as ae,N as W,y as z,z as F,O as T,A as G,g as $,d as j,B as O,f as ie,P as oe,o as ce,Q as fe,R as ue,T as me,v as de}from"../chunks/index.109b436a.js";import{f as X,e as Z}from"../chunks/const.20bb8ed5.js";import{I as ne,C as Y,X as ee,Q as _e}from"../chunks/index.74714e33.js";const he=!0,xe=Object.freeze(Object.defineProperty({__proto__:null,csr:he},Symbol.toStringTag,{value:"Module"}));function pe(n){let e,t;return{c(){e=b("span"),t=P("?"),this.h()},l(l){e=y(l,"SPAN",{class:!0});var r=A(e);t=Q(r,"?"),r.forEach(u),this.h()},h(){m(e,"class","font-sans text-6xl font-semibold text-secondary")},m(l,r){C(l,e,r),E(e,t)},p:ae,d(l){l&&u(e)}}}function ge(n){let e,t;return{c(){e=b("img"),this.h()},l(l){e=y(l,"IMG",{src:!0,alt:!0,class:!0}),this.h()},h(){W(e.src,t=n[3])||m(e,"src",t),m(e,"alt",n[1]),m(e,"class","h-16 w-16 rounded-full")},m(l,r){C(l,e,r)},p(l,r){r&8&&!W(e.src,t=l[3])&&m(e,"src",t),r&2&&m(e,"alt",l[1])},d(l){l&&u(e)}}}function ve(n){let e,t,l,r,s,i,o;function _(v,g){return v[2]?ge:pe}let h=_(n),c=h(n);return{c(){e=b("div"),t=b("div"),l=b("div"),c.c(),r=x(),s=b("div"),i=P(n[1]),this.h()},l(v){e=y(v,"DIV",{class:!0});var g=A(e);t=y(g,"DIV",{class:!0});var I=A(t);l=y(I,"DIV",{class:!0});var D=A(l);c.l(D),D.forEach(u),I.forEach(u),r=V(g),s=y(g,"DIV",{class:!0});var w=A(s);i=Q(w,n[1]),w.forEach(u),g.forEach(u),this.h()},h(){m(l,"class","flex h-24 w-24 items-center justify-center rounded-full bg-white"),m(t,"class","flex h-28 w-28 items-center justify-center rounded-full bg-gray-200"),m(s,"class","mt-2 text-center"),m(e,"class","flex flex-col items-center")},m(v,g){C(v,e,g),E(e,t),E(t,l),c.m(l,null),E(e,r),E(e,s),E(s,i)},p(v,[g]){n=v,h===(h=_(n))&&c?c.p(n,g):(c.d(1),c=h(n),c&&(c.c(),c.m(l,null))),g&2&&le(i,n[1])},i(v){o||H(()=>{o=R(e,X,{duration:200,delay:150*n[0]+1e3}),o.start()})},o:ae,d(v){v&&u(e),c.d()}}}const be="https://4.bp.blogspot.com/-ZMzPgyP64Zg/WFuJyby0eDI/AAAAAAABAmk/I_UtFowN0ecaQiqgYGpTsKGTqFzMLESdwCLcB/s800/nenga_hanko_kingashinnen_maru.png";function ye(n,e,t){let{id:l}=e,{name:r}=e,{collected:s=!1}=e,{img:i=be}=e;return n.$$set=o=>{"id"in o&&t(0,l=o.id),"name"in o&&t(1,r=o.name),"collected"in o&&t(2,s=o.collected),"img"in o&&t(3,i=o.img)},[l,r,s,i]}class Ee extends J{constructor(e){super(),K(this,e,ye,ve,U,{id:0,name:1,collected:2,img:3})}}function Ae(n){let e,t,l,r,s=n[0]?"Complete quest":"Collect more stamps",i,o;return l=new ne({props:{src:n[0]?Y:ee,theme:"solid",class:"color-gray-900 h-8 w-8"}}),{c(){e=b("div"),t=b("a"),z(l.$$.fragment),r=x(),i=P(s),this.h()},l(_){e=y(_,"DIV",{class:!0});var h=A(e);t=y(h,"A",{href:!0,class:!0,tabindex:!0,"aria-disabled":!0});var c=A(t);F(l.$$.fragment,c),r=V(c),i=Q(c,s),c.forEach(u),h.forEach(u),this.h()},h(){m(t,"href",n[1]),m(t,"class","btn-xl btn-success btn gap-2 rounded-full"),m(t,"tabindex","-1"),m(t,"aria-disabled","true"),T(t,"btn-disabled",!n[0]),T(t,"animate-pulse",n[0]),m(e,"class","mb-4 flex justify-center")},m(_,h){C(_,e,h),E(e,t),G(l,t,null),E(t,r),E(t,i),o=!0},p(_,[h]){const c={};h&1&&(c.src=_[0]?Y:ee),l.$set(c),(!o||h&1)&&s!==(s=_[0]?"Complete quest":"Collect more stamps")&&le(i,s),(!o||h&2)&&m(t,"href",_[1]),(!o||h&1)&&T(t,"btn-disabled",!_[0]),(!o||h&1)&&T(t,"animate-pulse",_[0])},i(_){o||($(l.$$.fragment,_),o=!0)},o(_){j(l.$$.fragment,_),o=!1},d(_){_&&u(e),O(l)}}}function Ce(n,e,t){let{active:l=!1}=e,{href:r="/result"}=e;return n.$$set=s=>{"active"in s&&t(0,l=s.active),"href"in s&&t(1,r=s.href)},[l,r]}class Ie extends J{constructor(e){super(),K(this,e,Ce,Ae,U,{active:0,href:1})}}function te(n,e,t){const l=n.slice();return l[3]=e[t],l}function se(n){let e,t;const l=[n[3],{collected:n[1](n[3])},{id:n[3].id}];let r={};for(let s=0;s<l.length;s+=1)r=fe(r,l[s]);return e=new Ee({props:r}),{c(){z(e.$$.fragment)},l(s){F(e.$$.fragment,s)},m(s,i){G(e,s,i),t=!0},p(s,i){const o=i&2?ue(l,[i&0&&me(s[3]),{collected:s[1](s[3])},i&0&&{id:s[3].id}]):{};e.$set(o)},i(s){t||($(e.$$.fragment,s),t=!0)},o(s){j(e.$$.fragment,s),t=!1},d(s){O(e,s)}}}function Se(n){let e,t,l,r,s,i,o,_,h,c,v,g,I,D,w,B,k,L;i=new ne({props:{src:_e,theme:"solid",class:"h-8 w-8"}});let q=Z,d=[];for(let a=0;a<q.length;a+=1)d[a]=se(te(n,q,a));const re=a=>j(d[a],1,1,()=>{d[a]=null});return k=new Ie({props:{active:n[0]}}),{c(){e=b("div"),t=b("h1"),l=P("Stamps"),r=x(),s=b("a"),z(i.$$.fragment),o=P(`
		Scan stamp`),h=x(),c=b("div"),g=x(),I=b("div");for(let a=0;a<d.length;a+=1)d[a].c();D=x(),w=b("div"),B=x(),z(k.$$.fragment),this.h()},l(a){e=y(a,"DIV",{class:!0});var f=A(e);t=y(f,"H1",{class:!0});var S=A(t);l=Q(S,"Stamps"),S.forEach(u),r=V(f),s=y(f,"A",{href:!0,class:!0,tabindex:!0,"aria-disabled":!0});var p=A(s);F(i.$$.fragment,p),o=Q(p,`
		Scan stamp`),p.forEach(u),f.forEach(u),h=V(a),c=y(a,"DIV",{class:!0}),A(c).forEach(u),g=V(a),I=y(a,"DIV",{class:!0});var M=A(I);for(let N=0;N<d.length;N+=1)d[N].l(M);M.forEach(u),D=V(a),w=y(a,"DIV",{class:!0}),A(w).forEach(u),B=V(a),F(k.$$.fragment,a),this.h()},h(){m(t,"class","text-center font-geologica text-4xl font-bold text-primary"),m(s,"href","/scanner"),m(s,"class","btn-xl btn-info btn mx-auto w-6/12 justify-center gap-2 rounded-full font-bold text-base-100"),m(s,"tabindex","-1"),m(s,"aria-disabled","true"),m(e,"class","flex flex-col justify-center space-y-6"),m(c,"class","divider mx-auto w-10/12"),m(I,"class","grid grid-cols-2 gap-4 bg-base-100 p-4"),m(w,"class","divider mx-auto w-10/12")},m(a,f){C(a,e,f),E(e,t),E(t,l),E(e,r),E(e,s),G(i,s,null),E(s,o),C(a,h,f),C(a,c,f),C(a,g,f),C(a,I,f);for(let S=0;S<d.length;S+=1)d[S]&&d[S].m(I,null);C(a,D,f),C(a,w,f),C(a,B,f),G(k,a,f),L=!0},p(a,[f]){if(f&2){q=Z;let p;for(p=0;p<q.length;p+=1){const M=te(a,q,p);d[p]?(d[p].p(M,f),$(d[p],1)):(d[p]=se(M),d[p].c(),$(d[p],1),d[p].m(I,null))}for(de(),p=q.length;p<d.length;p+=1)re(p);ie()}const S={};f&1&&(S.active=a[0]),k.$set(S)},i(a){if(!L){$(i.$$.fragment,a),_||H(()=>{_=R(e,X,{delay:1e3}),_.start()}),v||H(()=>{v=R(c,X,{delay:1e3}),v.start()});for(let f=0;f<q.length;f+=1)$(d[f]);$(k.$$.fragment,a),L=!0}},o(a){j(i.$$.fragment,a),d=d.filter(Boolean);for(let f=0;f<d.length;f+=1)j(d[f]);j(k.$$.fragment,a),L=!1},d(a){a&&u(e),O(i),a&&u(h),a&&u(c),a&&u(g),a&&u(I),oe(d,a),a&&u(D),a&&u(w),a&&u(B),O(k,a)}}}function we(n,e,t){let l=!1,r=function(i){return!1};function s(){return Z.every(r)}return ce(()=>{t(1,r=function(i){return localStorage.getItem(i.hash)!==null}),s()&&(console.log("All stamps collected!"),t(0,l=!0))}),[l,r]}class Ve extends J{constructor(e){super(),K(this,e,we,Se,U,{})}}export{Ve as component,xe as universal};
