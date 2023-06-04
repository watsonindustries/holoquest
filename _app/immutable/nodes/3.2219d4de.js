import{S as M,i as O,s as R,k as d,q as y,a as L,l as v,m as b,r as D,h as l,c as N,n as q,b as _,E as n,F as $,o as j,R as z,u as K,N as G}from"../chunks/index.11e3f03e.js";import{e as J}from"../chunks/qr-scanner.min.4880ecae.js";function B(m,t,i){const o=m.slice();return o[3]=t[i],o}function X(m){let t,i,o,f,c,x,C,w,A,p,Q,k,P,H,E,h,I,u,S=m[1],r=[];for(let e=0;e<S.length;e+=1)r[e]=F(B(m,S,e));return{c(){t=d("div"),i=L(),o=d("p"),f=y("Debug mode is enabled"),c=L(),x=d("p"),C=y("Collected stamps: "),w=y(m[0]),A=L(),p=d("p"),Q=y("Available cameras:"),k=L(),P=d("ul");for(let e=0;e<r.length;e+=1)r[e].c();H=L(),E=d("button"),h=y("Delete all stamps"),this.h()},l(e){t=v(e,"DIV",{class:!0}),b(t).forEach(l),i=N(e),o=v(e,"P",{class:!0});var s=b(o);f=D(s,"Debug mode is enabled"),s.forEach(l),c=N(e),x=v(e,"P",{});var a=b(x);C=D(a,"Collected stamps: "),w=D(a,m[0]),a.forEach(l),A=N(e),p=v(e,"P",{});var T=b(p);Q=D(T,"Available cameras:"),T.forEach(l),k=N(e),P=v(e,"UL",{});var V=b(P);for(let U=0;U<r.length;U+=1)r[U].l(V);V.forEach(l),H=N(e),E=v(e,"BUTTON",{class:!0});var W=b(E);h=D(W,"Delete all stamps"),W.forEach(l),this.h()},h(){q(t,"class","divider"),q(o,"class","font-bold text-primary"),q(E,"class","btn-error btn mx-auto w-6/12 gap-2 rounded-full")},m(e,s){_(e,t,s),_(e,i,s),_(e,o,s),n(o,f),_(e,c,s),_(e,x,s),n(x,C),n(x,w),_(e,A,s),_(e,p,s),n(p,Q),_(e,k,s),_(e,P,s);for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(P,null);_(e,H,s),_(e,E,s),n(E,h),I||(u=z(E,"click",m[2]),I=!0)},p(e,s){if(s&1&&K(w,e[0]),s&2){S=e[1];let a;for(a=0;a<S.length;a+=1){const T=B(e,S,a);r[a]?r[a].p(T,s):(r[a]=F(T),r[a].c(),r[a].m(P,null))}for(;a<r.length;a+=1)r[a].d(1);r.length=S.length}},d(e){e&&l(t),e&&l(i),e&&l(o),e&&l(c),e&&l(x),e&&l(A),e&&l(p),e&&l(k),e&&l(P),G(r,e),e&&l(H),e&&l(E),I=!1,u()}}}function F(m){let t,i=m[3].label+"",o;return{c(){t=d("li"),o=y(i),this.h()},l(f){t=v(f,"LI",{class:!0});var c=b(t);o=D(c,i),c.forEach(l),this.h()},h(){q(t,"class","font-mono text-base")},m(f,c){_(f,t,c),n(t,o)},p(f,c){c&2&&i!==(i=f[3].label+"")&&K(o,i)},d(f){f&&l(t)}}}function Y(m){let t,i,o,f,c,x,C,w,A,p,Q,k,P,H,E,h=X(m);return{c(){t=d("div"),i=d("p"),o=y("HoloQuest companion app"),f=L(),c=d("p"),x=y("Developed by "),C=d("a"),w=y("Watson Industries"),A=L(),p=d("p"),Q=y("Contact "),k=d("a"),P=y("@danirukun"),H=y(` about
		questions`),E=L(),h&&h.c(),this.h()},l(I){t=v(I,"DIV",{class:!0});var u=b(t);i=v(u,"P",{});var S=b(i);o=D(S,"HoloQuest companion app"),S.forEach(l),f=N(u),c=v(u,"P",{});var r=b(c);x=D(r,"Developed by "),C=v(r,"A",{href:!0,class:!0});var e=b(C);w=D(e,"Watson Industries"),e.forEach(l),r.forEach(l),A=N(u),p=v(u,"P",{});var s=b(p);Q=D(s,"Contact "),k=v(s,"A",{href:!0,class:!0});var a=b(k);P=D(a,"@danirukun"),a.forEach(l),H=D(s,` about
		questions`),s.forEach(l),E=N(u),h&&h.l(u),u.forEach(l),this.h()},h(){q(C,"href","https://watsonindustries.live"),q(C,"class","link-primary link"),q(k,"href","https://twitter.com/DaniruKun"),q(k,"class","link-secondary link"),q(t,"class","mx-4 my-4 space-y-8 text-center text-2xl")},m(I,u){_(I,t,u),n(t,i),n(i,o),n(t,f),n(t,c),n(c,x),n(c,C),n(C,w),n(t,A),n(t,p),n(p,Q),n(p,k),n(k,P),n(p,H),n(t,E),h&&h.m(t,null)},p(I,[u]){h.p(I,u)},i:$,o:$,d(I){I&&l(t),h&&h.d()}}}function Z(m,t,i){let o=0,f=[];return j(async()=>{i(1,f=await J.listCameras(!0)),i(0,o=localStorage.length)}),[o,f,()=>localStorage.clear()]}class te extends M{constructor(t){super(),O(this,t,Z,Y,R,{})}}export{te as component};