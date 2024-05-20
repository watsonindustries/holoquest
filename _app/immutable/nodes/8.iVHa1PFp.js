import{s as $t,a as ft,c as wt,o as Xt,h as zt}from"../chunks/scheduler.CJVYrxIg.js";import{S as Gt,i as Vt,e as x,s as G,C as mt,t as pt,c as B,f as V,g as ot,b as j,D as dt,j as Nt,d as O,l as U,G as D,n as jt,m as R,E as At,o as qt,p as Qt,y as gt,w as It,J as vt,F as St,u as Jt}from"../chunks/index.BQ69NQ52.js";import{s as W,u as Zt,a as Wt}from"../chunks/store.CAuuRsX2.js";import{e as te}from"../chunks/qr-scanner.min.4zogFLvw.js";import{e as ee,f as ht}from"../chunks/const.CMVshlAV.js";import{S as H,T as tt}from"../chunks/custom.DgUHssZa.js";import{C as ne,u as se}from"../chunks/client.DNB36mQv.js";import{I as Et,S as bt,Q as Ct,T as ie}from"../chunks/index.DrjdoYrR.js";const Mt="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function yt(i,t,n,e){let s,o,u;const l=t||[0],c=(n=n||0)>>>3,a=e===-1?3:0;for(s=0;s<i.length;s+=1)u=s+c,o=u>>>2,l.length<=o&&l.push(0),l[o]|=i[s]<<8*(a+e*(u%4));return{value:l,binLen:8*i.length+n}}function X(i,t,n){switch(t){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(i){case"HEX":return function(e,s,o){return function(u,l,c,a){let f,w,h,d;if(u.length%2!=0)throw new Error("String of HEX type must be in byte increments");const m=l||[0],N=(c=c||0)>>>3,A=a===-1?3:0;for(f=0;f<u.length;f+=2){if(w=parseInt(u.substr(f,2),16),isNaN(w))throw new Error("String of HEX type contains invalid characters");for(d=(f>>>1)+N,h=d>>>2;m.length<=h;)m.push(0);m[h]|=w<<8*(A+a*(d%4))}return{value:m,binLen:4*u.length+c}}(e,s,o,n)};case"TEXT":return function(e,s,o){return function(u,l,c,a,f){let w,h,d,m,N,A,g,y,I=0;const v=c||[0],S=(a=a||0)>>>3;if(l==="UTF8")for(g=f===-1?3:0,d=0;d<u.length;d+=1)for(w=u.charCodeAt(d),h=[],128>w?h.push(w):2048>w?(h.push(192|w>>>6),h.push(128|63&w)):55296>w||57344<=w?h.push(224|w>>>12,128|w>>>6&63,128|63&w):(d+=1,w=65536+((1023&w)<<10|1023&u.charCodeAt(d)),h.push(240|w>>>18,128|w>>>12&63,128|w>>>6&63,128|63&w)),m=0;m<h.length;m+=1){for(A=I+S,N=A>>>2;v.length<=N;)v.push(0);v[N]|=h[m]<<8*(g+f*(A%4)),I+=1}else for(g=f===-1?2:0,y=l==="UTF16LE"&&f!==1||l!=="UTF16LE"&&f===1,d=0;d<u.length;d+=1){for(w=u.charCodeAt(d),y===!0&&(m=255&w,w=m<<8|w>>>8),A=I+S,N=A>>>2;v.length<=N;)v.push(0);v[N]|=w<<8*(g+f*(A%4)),I+=2}return{value:v,binLen:8*I+a}}(e,t,s,o,n)};case"B64":return function(e,s,o){return function(u,l,c,a){let f,w,h,d,m,N,A,g=0;const y=l||[0],I=(c=c||0)>>>3,v=a===-1?3:0,S=u.indexOf("=");if(u.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(u=u.replace(/=/g,""),S!==-1&&S<u.length)throw new Error("Invalid '=' found in base-64 string");for(w=0;w<u.length;w+=4){for(m=u.substr(w,4),d=0,h=0;h<m.length;h+=1)f=Mt.indexOf(m.charAt(h)),d|=f<<18-6*h;for(h=0;h<m.length-1;h+=1){for(A=g+I,N=A>>>2;y.length<=N;)y.push(0);y[N]|=(d>>>16-8*h&255)<<8*(v+a*(A%4)),g+=1}}return{value:y,binLen:8*g+c}}(e,s,o,n)};case"BYTES":return function(e,s,o){return function(u,l,c,a){let f,w,h,d;const m=l||[0],N=(c=c||0)>>>3,A=a===-1?3:0;for(w=0;w<u.length;w+=1)f=u.charCodeAt(w),d=w+N,h=d>>>2,m.length<=h&&m.push(0),m[h]|=f<<8*(A+a*(d%4));return{value:m,binLen:8*u.length+c}}(e,s,o,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(e,s,o){return function(u,l,c,a){return yt(new Uint8Array(u),l,c,a)}(e,s,o,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(e,s,o){return yt(e,s,o,n)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function Rt(i,t,n,e){switch(i){case"HEX":return function(s){return function(o,u,l,c){const a="0123456789abcdef";let f,w,h="";const d=u/8,m=l===-1?3:0;for(f=0;f<d;f+=1)w=o[f>>>2]>>>8*(m+l*(f%4)),h+=a.charAt(w>>>4&15)+a.charAt(15&w);return c.outputUpper?h.toUpperCase():h}(s,t,n,e)};case"B64":return function(s){return function(o,u,l,c){let a,f,w,h,d,m="";const N=u/8,A=l===-1?3:0;for(a=0;a<N;a+=3)for(h=a+1<N?o[a+1>>>2]:0,d=a+2<N?o[a+2>>>2]:0,w=(o[a>>>2]>>>8*(A+l*(a%4))&255)<<16|(h>>>8*(A+l*((a+1)%4))&255)<<8|d>>>8*(A+l*((a+2)%4))&255,f=0;f<4;f+=1)m+=8*a+6*f<=u?Mt.charAt(w>>>6*(3-f)&63):c.b64Pad;return m}(s,t,n,e)};case"BYTES":return function(s){return function(o,u,l){let c,a,f="";const w=u/8,h=l===-1?3:0;for(c=0;c<w;c+=1)a=o[c>>>2]>>>8*(h+l*(c%4))&255,f+=String.fromCharCode(a);return f}(s,t,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(s){return function(o,u,l){let c;const a=u/8,f=new ArrayBuffer(a),w=new Uint8Array(f),h=l===-1?3:0;for(c=0;c<a;c+=1)w[c]=o[c>>>2]>>>8*(h+l*(c%4))&255;return f}(s,t,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(s){return function(o,u,l){let c;const a=u/8,f=l===-1?3:0,w=new Uint8Array(a);for(c=0;c<a;c+=1)w[c]=o[c>>>2]>>>8*(f+l*(c%4))&255;return w}(s,t,n)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}const p=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],k=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],M=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],J="Chosen SHA variant is not supported";function nt(i,t){let n,e;const s=i.binLen>>>3,o=t.binLen>>>3,u=s<<3,l=4-s<<3;if(s%4!=0){for(n=0;n<o;n+=4)e=s+n>>>2,i.value[e]|=t.value[n>>>2]<<u,i.value.push(0),i.value[e+1]|=t.value[n>>>2]>>>l;return(i.value.length<<2)-4>=o+s&&i.value.pop(),{value:i.value,binLen:i.binLen+t.binLen}}return{value:i.value.concat(t.value),binLen:i.binLen+t.binLen}}function Ht(i){const t={outputUpper:!1,b64Pad:"=",outputLen:-1},n=i||{},e="Output length must be a multiple of 8";if(t.outputUpper=n.outputUpper||!1,n.b64Pad&&(t.b64Pad=n.b64Pad),n.outputLen){if(n.outputLen%8!=0)throw new Error(e);t.outputLen=n.outputLen}else if(n.shakeLen){if(n.shakeLen%8!=0)throw new Error(e);t.outputLen=n.shakeLen}if(typeof t.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof t.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return t}function Y(i,t,n,e){const s=i+" must include a value and format";if(!t){if(!e)throw new Error(s);return e}if(t.value===void 0||!t.format)throw new Error(s);return X(t.format,t.encoding||"UTF8",n)(t.value)}class st{constructor(t,n,e){const s=e||{};if(this.t=n,this.i=s.encoding||"UTF8",this.numRounds=s.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=t,this.h=[],this.u=0,this.l=!1,this.A=0,this.H=!1,this.S=[],this.p=[]}update(t){let n,e=0;const s=this.m>>>5,o=this.C(t,this.h,this.u),u=o.binLen,l=o.value,c=u>>>5;for(n=0;n<c;n+=s)e+this.m<=u&&(this.R=this.U(l.slice(n,n+s),this.R),e+=this.m);return this.A+=e,this.h=l.slice(e>>>5),this.u=u%this.m,this.l=!0,this}getHash(t,n){let e,s,o=this.v;const u=Ht(n);if(this.K){if(u.outputLen===-1)throw new Error("Output length must be specified in options");o=u.outputLen}const l=Rt(t,o,this.T,u);if(this.H&&this.F)return l(this.F(u));for(s=this.g(this.h.slice(),this.u,this.A,this.B(this.R),o),e=1;e<this.numRounds;e+=1)this.K&&o%32!=0&&(s[s.length-1]&=16777215>>>24-o%32),s=this.g(s,o,0,this.L(this.o),o);return l(s)}setHMACKey(t,n,e){if(!this.M)throw new Error("Variant does not support HMAC");if(this.l)throw new Error("Cannot set MAC key after calling update");const s=X(n,(e||{}).encoding||"UTF8",this.T);this.k(s(t))}k(t){const n=this.m>>>3,e=n/4-1;let s;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.H)throw new Error("MAC key already set");for(n<t.binLen/8&&(t.value=this.g(t.value,t.binLen,0,this.L(this.o),this.v));t.value.length<=e;)t.value.push(0);for(s=0;s<=e;s+=1)this.S[s]=909522486^t.value[s],this.p[s]=1549556828^t.value[s];this.R=this.U(this.S,this.R),this.A=this.m,this.H=!0}getHMAC(t,n){const e=Ht(n);return Rt(t,this.v,this.T,e)(this.Y())}Y(){let t;if(!this.H)throw new Error("Cannot call getHMAC without first setting MAC key");const n=this.g(this.h.slice(),this.u,this.A,this.B(this.R),this.v);return t=this.U(this.p,this.L(this.o)),t=this.g(n,this.v,this.m,t,this.v),t}}function $(i,t){return i<<t|i>>>32-t}function K(i,t){return i>>>t|i<<32-t}function Pt(i,t){return i>>>t}function Tt(i,t,n){return i^t^n}function xt(i,t,n){return i&t^~i&n}function Bt(i,t,n){return i&t^i&n^t&n}function re(i){return K(i,2)^K(i,13)^K(i,22)}function C(i,t){const n=(65535&i)+(65535&t);return(65535&(i>>>16)+(t>>>16)+(n>>>16))<<16|65535&n}function oe(i,t,n,e){const s=(65535&i)+(65535&t)+(65535&n)+(65535&e);return(65535&(i>>>16)+(t>>>16)+(n>>>16)+(e>>>16)+(s>>>16))<<16|65535&s}function Q(i,t,n,e,s){const o=(65535&i)+(65535&t)+(65535&n)+(65535&e)+(65535&s);return(65535&(i>>>16)+(t>>>16)+(n>>>16)+(e>>>16)+(s>>>16)+(o>>>16))<<16|65535&o}function he(i){return K(i,7)^K(i,18)^Pt(i,3)}function ue(i){return K(i,6)^K(i,11)^K(i,25)}function ae(i){return[1732584193,4023233417,2562383102,271733878,3285377520]}function Yt(i,t){let n,e,s,o,u,l,c;const a=[];for(n=t[0],e=t[1],s=t[2],o=t[3],u=t[4],c=0;c<80;c+=1)a[c]=c<16?i[c]:$(a[c-3]^a[c-8]^a[c-14]^a[c-16],1),l=c<20?Q($(n,5),xt(e,s,o),u,1518500249,a[c]):c<40?Q($(n,5),Tt(e,s,o),u,1859775393,a[c]):c<60?Q($(n,5),Bt(e,s,o),u,2400959708,a[c]):Q($(n,5),Tt(e,s,o),u,3395469782,a[c]),u=o,o=s,s=$(e,30),e=n,n=l;return t[0]=C(n,t[0]),t[1]=C(e,t[1]),t[2]=C(s,t[2]),t[3]=C(o,t[3]),t[4]=C(u,t[4]),t}function ce(i,t,n,e){let s;const o=15+(t+65>>>9<<4),u=t+n;for(;i.length<=o;)i.push(0);for(i[t>>>5]|=128<<24-t%32,i[o]=4294967295&u,i[o-1]=u/4294967296|0,s=0;s<i.length;s+=16)e=Yt(i.slice(s,s+16),e);return e}class le extends st{constructor(t,n,e){if(t!=="SHA-1")throw new Error(J);super(t,n,e);const s=e||{};this.M=!0,this.F=this.Y,this.T=-1,this.C=X(this.t,this.i,this.T),this.U=Yt,this.B=function(o){return o.slice()},this.L=ae,this.g=ce,this.R=[1732584193,4023233417,2562383102,271733878,3285377520],this.m=512,this.v=160,this.K=!1,s.hmacKey&&this.k(Y("hmacKey",s.hmacKey,this.T))}}function Lt(i){let t;return t=i=="SHA-224"?k.slice():M.slice(),t}function Ut(i,t){let n,e,s,o,u,l,c,a,f,w,h;const d=[];for(n=t[0],e=t[1],s=t[2],o=t[3],u=t[4],l=t[5],c=t[6],a=t[7],h=0;h<64;h+=1)d[h]=h<16?i[h]:oe(K(m=d[h-2],17)^K(m,19)^Pt(m,10),d[h-7],he(d[h-15]),d[h-16]),f=Q(a,ue(u),xt(u,l,c),p[h],d[h]),w=C(re(n),Bt(n,e,s)),a=c,c=l,l=u,u=C(o,f),o=s,s=e,e=n,n=C(f,w);var m;return t[0]=C(n,t[0]),t[1]=C(e,t[1]),t[2]=C(s,t[2]),t[3]=C(o,t[3]),t[4]=C(u,t[4]),t[5]=C(l,t[5]),t[6]=C(c,t[6]),t[7]=C(a,t[7]),t}class fe extends st{constructor(t,n,e){if(t!=="SHA-224"&&t!=="SHA-256")throw new Error(J);super(t,n,e);const s=e||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=X(this.t,this.i,this.T),this.U=Ut,this.B=function(o){return o.slice()},this.L=Lt,this.g=function(o,u,l,c){return function(a,f,w,h,d){let m,N;const A=15+(f+65>>>9<<4),g=f+w;for(;a.length<=A;)a.push(0);for(a[f>>>5]|=128<<24-f%32,a[A]=4294967295&g,a[A-1]=g/4294967296|0,m=0;m<a.length;m+=16)h=Ut(a.slice(m,m+16),h);return N=d==="SHA-224"?[h[0],h[1],h[2],h[3],h[4],h[5],h[6]]:h,N}(o,u,l,c,t)},this.R=Lt(t),this.m=512,this.v=t==="SHA-224"?224:256,this.K=!1,s.hmacKey&&this.k(Y("hmacKey",s.hmacKey,this.T))}}class r{constructor(t,n){this.N=t,this.I=n}}function Kt(i,t){let n;return t>32?(n=64-t,new r(i.I<<t|i.N>>>n,i.N<<t|i.I>>>n)):t!==0?(n=32-t,new r(i.N<<t|i.I>>>n,i.I<<t|i.N>>>n)):i}function F(i,t){let n;return t<32?(n=32-t,new r(i.N>>>t|i.I<<n,i.I>>>t|i.N<<n)):(n=64-t,new r(i.I>>>t|i.N<<n,i.N>>>t|i.I<<n))}function Ot(i,t){return new r(i.N>>>t,i.I>>>t|i.N<<32-t)}function we(i,t,n){return new r(i.N&t.N^i.N&n.N^t.N&n.N,i.I&t.I^i.I&n.I^t.I&n.I)}function me(i){const t=F(i,28),n=F(i,34),e=F(i,39);return new r(t.N^n.N^e.N,t.I^n.I^e.I)}function L(i,t){let n,e;n=(65535&i.I)+(65535&t.I),e=(i.I>>>16)+(t.I>>>16)+(n>>>16);const s=(65535&e)<<16|65535&n;return n=(65535&i.N)+(65535&t.N)+(e>>>16),e=(i.N>>>16)+(t.N>>>16)+(n>>>16),new r((65535&e)<<16|65535&n,s)}function pe(i,t,n,e){let s,o;s=(65535&i.I)+(65535&t.I)+(65535&n.I)+(65535&e.I),o=(i.I>>>16)+(t.I>>>16)+(n.I>>>16)+(e.I>>>16)+(s>>>16);const u=(65535&o)<<16|65535&s;return s=(65535&i.N)+(65535&t.N)+(65535&n.N)+(65535&e.N)+(o>>>16),o=(i.N>>>16)+(t.N>>>16)+(n.N>>>16)+(e.N>>>16)+(s>>>16),new r((65535&o)<<16|65535&s,u)}function de(i,t,n,e,s){let o,u;o=(65535&i.I)+(65535&t.I)+(65535&n.I)+(65535&e.I)+(65535&s.I),u=(i.I>>>16)+(t.I>>>16)+(n.I>>>16)+(e.I>>>16)+(s.I>>>16)+(o>>>16);const l=(65535&u)<<16|65535&o;return o=(65535&i.N)+(65535&t.N)+(65535&n.N)+(65535&e.N)+(65535&s.N)+(u>>>16),u=(i.N>>>16)+(t.N>>>16)+(n.N>>>16)+(e.N>>>16)+(s.N>>>16)+(o>>>16),new r((65535&u)<<16|65535&o,l)}function q(i,t){return new r(i.N^t.N,i.I^t.I)}function Ne(i){const t=F(i,19),n=F(i,61),e=Ot(i,6);return new r(t.N^n.N^e.N,t.I^n.I^e.I)}function Ae(i){const t=F(i,1),n=F(i,8),e=Ot(i,7);return new r(t.N^n.N^e.N,t.I^n.I^e.I)}function ge(i){const t=F(i,14),n=F(i,18),e=F(i,41);return new r(t.N^n.N^e.N,t.I^n.I^e.I)}const Ie=[new r(p[0],3609767458),new r(p[1],602891725),new r(p[2],3964484399),new r(p[3],2173295548),new r(p[4],4081628472),new r(p[5],3053834265),new r(p[6],2937671579),new r(p[7],3664609560),new r(p[8],2734883394),new r(p[9],1164996542),new r(p[10],1323610764),new r(p[11],3590304994),new r(p[12],4068182383),new r(p[13],991336113),new r(p[14],633803317),new r(p[15],3479774868),new r(p[16],2666613458),new r(p[17],944711139),new r(p[18],2341262773),new r(p[19],2007800933),new r(p[20],1495990901),new r(p[21],1856431235),new r(p[22],3175218132),new r(p[23],2198950837),new r(p[24],3999719339),new r(p[25],766784016),new r(p[26],2566594879),new r(p[27],3203337956),new r(p[28],1034457026),new r(p[29],2466948901),new r(p[30],3758326383),new r(p[31],168717936),new r(p[32],1188179964),new r(p[33],1546045734),new r(p[34],1522805485),new r(p[35],2643833823),new r(p[36],2343527390),new r(p[37],1014477480),new r(p[38],1206759142),new r(p[39],344077627),new r(p[40],1290863460),new r(p[41],3158454273),new r(p[42],3505952657),new r(p[43],106217008),new r(p[44],3606008344),new r(p[45],1432725776),new r(p[46],1467031594),new r(p[47],851169720),new r(p[48],3100823752),new r(p[49],1363258195),new r(p[50],3750685593),new r(p[51],3785050280),new r(p[52],3318307427),new r(p[53],3812723403),new r(p[54],2003034995),new r(p[55],3602036899),new r(p[56],1575990012),new r(p[57],1125592928),new r(p[58],2716904306),new r(p[59],442776044),new r(p[60],593698344),new r(p[61],3733110249),new r(p[62],2999351573),new r(p[63],3815920427),new r(3391569614,3928383900),new r(3515267271,566280711),new r(3940187606,3454069534),new r(4118630271,4000239992),new r(116418474,1914138554),new r(174292421,2731055270),new r(289380356,3203993006),new r(460393269,320620315),new r(685471733,587496836),new r(852142971,1086792851),new r(1017036298,365543100),new r(1126000580,2618297676),new r(1288033470,3409855158),new r(1501505948,4234509866),new r(1607167915,987167468),new r(1816402316,1246189591)];function Ft(i){return i==="SHA-384"?[new r(3418070365,k[0]),new r(1654270250,k[1]),new r(2438529370,k[2]),new r(355462360,k[3]),new r(1731405415,k[4]),new r(41048885895,k[5]),new r(3675008525,k[6]),new r(1203062813,k[7])]:[new r(M[0],4089235720),new r(M[1],2227873595),new r(M[2],4271175723),new r(M[3],1595750129),new r(M[4],2917565137),new r(M[5],725511199),new r(M[6],4215389547),new r(M[7],327033209)]}function _t(i,t){let n,e,s,o,u,l,c,a,f,w,h,d;const m=[];for(n=t[0],e=t[1],s=t[2],o=t[3],u=t[4],l=t[5],c=t[6],a=t[7],h=0;h<80;h+=1)h<16?(d=2*h,m[h]=new r(i[d],i[d+1])):m[h]=pe(Ne(m[h-2]),m[h-7],Ae(m[h-15]),m[h-16]),f=de(a,ge(u),(A=l,g=c,new r((N=u).N&A.N^~N.N&g.N,N.I&A.I^~N.I&g.I)),Ie[h],m[h]),w=L(me(n),we(n,e,s)),a=c,c=l,l=u,u=L(o,f),o=s,s=e,e=n,n=L(f,w);var N,A,g;return t[0]=L(n,t[0]),t[1]=L(e,t[1]),t[2]=L(s,t[2]),t[3]=L(o,t[3]),t[4]=L(u,t[4]),t[5]=L(l,t[5]),t[6]=L(c,t[6]),t[7]=L(a,t[7]),t}class ve extends st{constructor(t,n,e){if(t!=="SHA-384"&&t!=="SHA-512")throw new Error(J);super(t,n,e);const s=e||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=X(this.t,this.i,this.T),this.U=_t,this.B=function(o){return o.slice()},this.L=Ft,this.g=function(o,u,l,c){return function(a,f,w,h,d){let m,N;const A=31+(f+129>>>10<<5),g=f+w;for(;a.length<=A;)a.push(0);for(a[f>>>5]|=128<<24-f%32,a[A]=4294967295&g,a[A-1]=g/4294967296|0,m=0;m<a.length;m+=32)h=_t(a.slice(m,m+32),h);return N=d==="SHA-384"?[h[0].N,h[0].I,h[1].N,h[1].I,h[2].N,h[2].I,h[3].N,h[3].I,h[4].N,h[4].I,h[5].N,h[5].I]:[h[0].N,h[0].I,h[1].N,h[1].I,h[2].N,h[2].I,h[3].N,h[3].I,h[4].N,h[4].I,h[5].N,h[5].I,h[6].N,h[6].I,h[7].N,h[7].I],N}(o,u,l,c,t)},this.R=Ft(t),this.m=1024,this.v=t==="SHA-384"?384:512,this.K=!1,s.hmacKey&&this.k(Y("hmacKey",s.hmacKey,this.T))}}const Se=[new r(0,1),new r(0,32898),new r(2147483648,32906),new r(2147483648,2147516416),new r(0,32907),new r(0,2147483649),new r(2147483648,2147516545),new r(2147483648,32777),new r(0,138),new r(0,136),new r(0,2147516425),new r(0,2147483658),new r(0,2147516555),new r(2147483648,139),new r(2147483648,32905),new r(2147483648,32771),new r(2147483648,32770),new r(2147483648,128),new r(0,32778),new r(2147483648,2147483658),new r(2147483648,2147516545),new r(2147483648,32896),new r(0,2147483649),new r(2147483648,2147516424)],Ee=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function at(i){let t;const n=[];for(t=0;t<5;t+=1)n[t]=[new r(0,0),new r(0,0),new r(0,0),new r(0,0),new r(0,0)];return n}function be(i){let t;const n=[];for(t=0;t<5;t+=1)n[t]=i[t].slice();return n}function et(i,t){let n,e,s,o;const u=[],l=[];if(i!==null)for(e=0;e<i.length;e+=2)t[(e>>>1)%5][(e>>>1)/5|0]=q(t[(e>>>1)%5][(e>>>1)/5|0],new r(i[e+1],i[e]));for(n=0;n<24;n+=1){for(o=at(),e=0;e<5;e+=1)u[e]=(c=t[e][0],a=t[e][1],f=t[e][2],w=t[e][3],h=t[e][4],new r(c.N^a.N^f.N^w.N^h.N,c.I^a.I^f.I^w.I^h.I));for(e=0;e<5;e+=1)l[e]=q(u[(e+4)%5],Kt(u[(e+1)%5],1));for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)t[e][s]=q(t[e][s],l[e]);for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)o[s][(2*e+3*s)%5]=Kt(t[e][s],Ee[e][s]);for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)t[e][s]=q(o[e][s],new r(~o[(e+1)%5][s].N&o[(e+2)%5][s].N,~o[(e+1)%5][s].I&o[(e+2)%5][s].I));t[0][0]=q(t[0][0],Se[n])}var c,a,f,w,h;return t}function Dt(i){let t,n,e=0;const s=[0,0],o=[4294967295&i,i/4294967296&2097151];for(t=6;t>=0;t--)n=o[t>>2]>>>8*t&255,n===0&&e===0||(s[e+1>>2]|=n<<8*(e+1),e+=1);return e=e!==0?e:1,s[0]|=e,{value:e+1>4?s:[s[0]],binLen:8+8*e}}function ut(i){return nt(Dt(i.binLen),i)}function kt(i,t){let n,e=Dt(t);e=nt(e,i);const s=t>>>2,o=(s-e.value.length%s)%s;for(n=0;n<o;n++)e.value.push(0);return e.value}class Ce extends st{constructor(t,n,e){let s=6,o=0;super(t,n,e);const u=e||{};if(this.numRounds!==1){if(u.kmacKey||u.hmacKey)throw new Error("Cannot set numRounds with MAC");if(this.o==="CSHAKE128"||this.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(this.T=1,this.C=X(this.t,this.i,this.T),this.U=et,this.B=be,this.L=at,this.R=at(),this.K=!1,t){case"SHA3-224":this.m=o=1152,this.v=224,this.M=!0,this.F=this.Y;break;case"SHA3-256":this.m=o=1088,this.v=256,this.M=!0,this.F=this.Y;break;case"SHA3-384":this.m=o=832,this.v=384,this.M=!0,this.F=this.Y;break;case"SHA3-512":this.m=o=576,this.v=512,this.M=!0,this.F=this.Y;break;case"SHAKE128":s=31,this.m=o=1344,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"SHAKE256":s=31,this.m=o=1088,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"KMAC128":s=4,this.m=o=1344,this.X(e),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"KMAC256":s=4,this.m=o=1088,this.X(e),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"CSHAKE128":this.m=o=1344,s=this.O(e),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"CSHAKE256":this.m=o=1088,s=this.O(e),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;default:throw new Error(J)}this.g=function(l,c,a,f,w){return function(h,d,m,N,A,g,y){let I,v,S=0;const _=[],P=A>>>5,T=d>>>5;for(I=0;I<T&&d>=A;I+=P)N=et(h.slice(I,I+P),N),d-=A;for(h=h.slice(I),d%=A;h.length<P;)h.push(0);for(I=d>>>3,h[I>>2]^=g<<I%4*8,h[P-1]^=2147483648,N=et(h,N);32*_.length<y&&(v=N[S%5][S/5|0],_.push(v.I),!(32*_.length>=y));)_.push(v.N),S+=1,64*S%A==0&&(et(null,N),S=0);return _}(l,c,0,f,o,s,w)},u.hmacKey&&this.k(Y("hmacKey",u.hmacKey,this.T))}O(t,n){const e=function(o){const u=o||{};return{funcName:Y("funcName",u.funcName,1,{value:[],binLen:0}),customization:Y("Customization",u.customization,1,{value:[],binLen:0})}}(t||{});n&&(e.funcName=n);const s=nt(ut(e.funcName),ut(e.customization));if(e.customization.binLen!==0||e.funcName.binLen!==0){const o=kt(s,this.m>>>3);for(let u=0;u<o.length;u+=this.m>>>5)this.R=this.U(o.slice(u,u+(this.m>>>5)),this.R),this.A+=this.m;return 4}return 31}X(t){const n=function(s){const o=s||{};return{kmacKey:Y("kmacKey",o.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:Y("Customization",o.customization,1,{value:[],binLen:0})}}(t||{});this.O(t,n.funcName);const e=kt(ut(n.kmacKey),this.m>>>3);for(let s=0;s<e.length;s+=this.m>>>5)this.R=this.U(e.slice(s,s+(this.m>>>5)),this.R),this.A+=this.m;this.H=!0}_(t){const n=nt({value:this.h.slice(),binLen:this.u},function(e){let s,o,u=0;const l=[0,0],c=[4294967295&e,e/4294967296&2097151];for(s=6;s>=0;s--)o=c[s>>2]>>>8*s&255,o===0&&u===0||(l[u>>2]|=o<<8*u,u+=1);return u=u!==0?u:1,l[u>>2]|=u<<8*u,{value:u+1>4?l:[l[0]],binLen:8+8*u}}(t.outputLen));return this.g(n.value,n.binLen,this.A,this.B(this.R),t.outputLen)}}class ye{constructor(t,n,e){if(t=="SHA-1")this.P=new le(t,n,e);else if(t=="SHA-224"||t=="SHA-256")this.P=new fe(t,n,e);else if(t=="SHA-384"||t=="SHA-512")this.P=new ve(t,n,e);else{if(t!="SHA3-224"&&t!="SHA3-256"&&t!="SHA3-384"&&t!="SHA3-512"&&t!="SHAKE128"&&t!="SHAKE256"&&t!="CSHAKE128"&&t!="CSHAKE256"&&t!="KMAC128"&&t!="KMAC256")throw new Error(J);this.P=new Ce(t,n,e)}}update(t){return this.P.update(t),this}getHash(t,n){return this.P.getHash(t,n)}setHMACKey(t,n,e){this.P.setHMACKey(t,n,e)}getHMAC(t,n){return this.P.getHMAC(t,n)}}function Re(i){const t=new ye("SHA-1","TEXT");return t.update(i),t.getHash("HEX")}function He(i){let t,n,e="Scanner",s,o,u="Press Scan, and scan the QR code of the stamp!",l,c,a,f,w,h=i[0]===H.SCANNING?"Stop":"Scan",d,m,N,A="<video></video>",g,y,I,v,S,_,P,T,it,ct;return f=new Et({props:{src:i[0]===H.SCANNING?bt:Ct,theme:"solid",class:"color-gray-900",size:"32px"}}),S=new Et({props:{src:ie,theme:"solid",class:"color-gray-900",size:"28px"}}),{c(){t=x("div"),n=x("h1"),n.textContent=e,s=G(),o=x("p"),o.textContent=u,l=G(),c=x("div"),a=x("button"),mt(f.$$.fragment),w=G(),d=pt(h),m=G(),N=x("div"),N.innerHTML=A,y=G(),I=x("div"),v=x("a"),mt(S.$$.fragment),_=pt(`
			View collected stamps`),this.h()},l(E){t=B(E,"DIV",{class:!0});var b=V(t);n=B(b,"H1",{class:!0,"data-svelte-h":!0}),ot(n)!=="svelte-eclbcz"&&(n.textContent=e),s=j(b),o=B(b,"P",{class:!0,"data-svelte-h":!0}),ot(o)!=="svelte-1a2fql6"&&(o.textContent=u),l=j(b),c=B(b,"DIV",{class:!0});var z=V(c);a=B(z,"BUTTON",{class:!0});var Z=V(a);dt(f.$$.fragment,Z),w=j(Z),d=Nt(Z,h),Z.forEach(O),z.forEach(O),m=j(b),N=B(b,"DIV",{id:!0,class:!0,"data-svelte-h":!0}),ot(N)!=="svelte-1l8i0qj"&&(N.innerHTML=A),y=j(b),I=B(b,"DIV",{class:!0});var lt=V(I);v=B(lt,"A",{class:!0,href:!0});var rt=V(v);dt(S.$$.fragment,rt),_=Nt(rt,`
			View collected stamps`),rt.forEach(O),lt.forEach(O),b.forEach(O),this.h()},h(){U(n,"class","text-center font-geologica text-4xl font-bold text-primary"),U(o,"class","px-2 text-center text-xl"),U(a,"class","text btn mx-auto w-10/12 max-w-screen-lg gap-2 rounded-full text-white"),D(a,"btn-primary",i[0]===H.STOPPED),D(a,"btn-error",i[0]===H.SCANNING),U(c,"class","flex flex-col justify-center space-y-4"),U(N,"id","scanner-preview-area"),U(N,"class","h-96"),D(N,"hidden",i[0]===H.STOPPED),U(v,"class","text btn-secondary btn mx-auto mt-2 w-10/12 max-w-screen-lg gap-2 rounded-full text-white"),U(v,"href","/"),U(I,"class","flex flex-col justify-center space-y-4"),U(t,"class","space-y-4")},m(E,b){jt(E,t,b),R(t,n),R(t,s),R(t,o),R(t,l),R(t,c),R(c,a),At(f,a,null),R(a,w),R(a,d),R(t,m),R(t,N),R(t,y),R(t,I),R(I,v),At(S,v,null),R(v,_),T=!0,it||(ct=qt(a,"click",i[1]),it=!0)},p(E,[b]){const z={};b&1&&(z.src=E[0]===H.SCANNING?bt:Ct),f.$set(z),(!T||b&1)&&h!==(h=E[0]===H.SCANNING?"Stop":"Scan")&&Qt(d,h),(!T||b&1)&&D(a,"btn-primary",E[0]===H.STOPPED),(!T||b&1)&&D(a,"btn-error",E[0]===H.SCANNING),(!T||b&1)&&D(N,"hidden",E[0]===H.STOPPED)},i(E){T||(gt(f.$$.fragment,E),ft(()=>{T&&(g||(g=vt(N,ht,{},!0)),g.run(1))}),gt(S.$$.fragment,E),P||ft(()=>{P=Jt(t,ht,{delay:500}),P.start()}),T=!0)},o(E){It(f.$$.fragment,E),g||(g=vt(N,ht,{},!1)),g.run(0),It(S.$$.fragment,E),T=!1},d(E){E&&O(t),St(f),E&&g&&g.end(),St(S),it=!1,ct()}}}function Te(i,t,n){let e,s;wt(i,Zt,m=>n(6,e=m)),wt(i,Wt,m=>n(7,s=m));let o="STOPPED",u,l,c="";const a=ee.map(m=>m.hash);let f=function(){return 0};const w=new ne(s);function h(){o===H.SCANNING?(n(0,o=H.STOPPED),l.pause()):o===H.STOPPED&&(n(0,o=H.SCANNING),l.start().catch(m=>{console.error(m),W({type:tt.ERROR,message:"Failed to start scanner!"})}))}function d(m){c=m.data,h();let N=Re(c);if(a.includes(N)){localStorage.setItem(N,c),w.pushCollected();let A=f();try{e&&se(e,A)}catch{console.error("Can't update score!")}W({type:tt.SUCCESS,message:"Stamp Saved!"}),A==10&&setTimeout(()=>{W({type:tt.SUCCESS,message:"Stamp Rally completed!"}),w.pushRallyCompleted()},1e3)}else W({type:tt.ERROR,message:"Invalid Stamp!"})}return Xt(()=>{u=document.querySelector("video"),l=new te(u,d,{highlightScanRegion:!0,highlightCodeOutline:!0}),u.setAttribute("playsinline","true"),u.setAttribute("autoplay","true"),u.setAttribute("muted","true"),f=()=>Object.keys(localStorage).filter(m=>a.includes(m)).length}),zt(()=>{console.log("Destroying Scanner"),l==null||l.destroy()}),[o,h]}class xe extends Gt{constructor(t){super(),Vt(this,t,Te,He,$t,{})}}export{xe as component};