const $="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function j(i,t,n,e){let s,h,u;const a=t||[0],c=(n=n||0)>>>3,w=e===-1?3:0;for(s=0;s<i.length;s+=1)u=s+c,h=u>>>2,a.length<=h&&a.push(0),a[h]|=i[s]<<8*(w+e*(u%4));return{value:a,binLen:8*i.length+n}}function C(i,t,n){switch(t){case"UTF8":case"UTF16BE":case"UTF16LE":break;default:throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE")}switch(i){case"HEX":return function(e,s,h){return function(u,a,c,w){let A,f,o,N;if(u.length%2!=0)throw new Error("String of HEX type must be in byte increments");const m=a||[0],p=(c=c||0)>>>3,I=w===-1?3:0;for(A=0;A<u.length;A+=2){if(f=parseInt(u.substr(A,2),16),isNaN(f))throw new Error("String of HEX type contains invalid characters");for(N=(A>>>1)+p,o=N>>>2;m.length<=o;)m.push(0);m[o]|=f<<8*(I+w*(N%4))}return{value:m,binLen:4*u.length+c}}(e,s,h,n)};case"TEXT":return function(e,s,h){return function(u,a,c,w,A){let f,o,N,m,p,I,E,R,g=0;const H=c||[0],b=(w=w||0)>>>3;if(a==="UTF8")for(E=A===-1?3:0,N=0;N<u.length;N+=1)for(f=u.charCodeAt(N),o=[],128>f?o.push(f):2048>f?(o.push(192|f>>>6),o.push(128|63&f)):55296>f||57344<=f?o.push(224|f>>>12,128|f>>>6&63,128|63&f):(N+=1,f=65536+((1023&f)<<10|1023&u.charCodeAt(N)),o.push(240|f>>>18,128|f>>>12&63,128|f>>>6&63,128|63&f)),m=0;m<o.length;m+=1){for(I=g+b,p=I>>>2;H.length<=p;)H.push(0);H[p]|=o[m]<<8*(E+A*(I%4)),g+=1}else for(E=A===-1?2:0,R=a==="UTF16LE"&&A!==1||a!=="UTF16LE"&&A===1,N=0;N<u.length;N+=1){for(f=u.charCodeAt(N),R===!0&&(m=255&f,f=m<<8|f>>>8),I=g+b,p=I>>>2;H.length<=p;)H.push(0);H[p]|=f<<8*(E+A*(I%4)),g+=2}return{value:H,binLen:8*g+w}}(e,t,s,h,n)};case"B64":return function(e,s,h){return function(u,a,c,w){let A,f,o,N,m,p,I,E=0;const R=a||[0],g=(c=c||0)>>>3,H=w===-1?3:0,b=u.indexOf("=");if(u.search(/^[a-zA-Z0-9=+/]+$/)===-1)throw new Error("Invalid character in base-64 string");if(u=u.replace(/=/g,""),b!==-1&&b<u.length)throw new Error("Invalid '=' found in base-64 string");for(f=0;f<u.length;f+=4){for(m=u.substr(f,4),N=0,o=0;o<m.length;o+=1)A=$.indexOf(m.charAt(o)),N|=A<<18-6*o;for(o=0;o<m.length-1;o+=1){for(I=E+g,p=I>>>2;R.length<=p;)R.push(0);R[p]|=(N>>>16-8*o&255)<<8*(H+w*(I%4)),E+=1}}return{value:R,binLen:8*E+c}}(e,s,h,n)};case"BYTES":return function(e,s,h){return function(u,a,c,w){let A,f,o,N;const m=a||[0],p=(c=c||0)>>>3,I=w===-1?3:0;for(f=0;f<u.length;f+=1)A=u.charCodeAt(f),N=f+p,o=N>>>2,m.length<=o&&m.push(0),m[o]|=A<<8*(I+w*(N%4));return{value:m,binLen:8*u.length+c}}(e,s,h,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(e,s,h){return function(u,a,c,w){return j(new Uint8Array(u),a,c,w)}(e,s,h,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(e,s,h){return j(e,s,h,n)};default:throw new Error("format must be HEX, TEXT, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}function _(i,t,n,e){switch(i){case"HEX":return function(s){return function(h,u,a,c){const w="0123456789abcdef";let A,f,o="";const N=u/8,m=a===-1?3:0;for(A=0;A<N;A+=1)f=h[A>>>2]>>>8*(m+a*(A%4)),o+=w.charAt(f>>>4&15)+w.charAt(15&f);return c.outputUpper?o.toUpperCase():o}(s,t,n,e)};case"B64":return function(s){return function(h,u,a,c){let w,A,f,o,N,m="";const p=u/8,I=a===-1?3:0;for(w=0;w<p;w+=3)for(o=w+1<p?h[w+1>>>2]:0,N=w+2<p?h[w+2>>>2]:0,f=(h[w>>>2]>>>8*(I+a*(w%4))&255)<<16|(o>>>8*(I+a*((w+1)%4))&255)<<8|N>>>8*(I+a*((w+2)%4))&255,A=0;A<4;A+=1)m+=8*w+6*A<=u?$.charAt(f>>>6*(3-A)&63):c.b64Pad;return m}(s,t,n,e)};case"BYTES":return function(s){return function(h,u,a){let c,w,A="";const f=u/8,o=a===-1?3:0;for(c=0;c<f;c+=1)w=h[c>>>2]>>>8*(o+a*(c%4))&255,A+=String.fromCharCode(w);return A}(s,t,n)};case"ARRAYBUFFER":try{new ArrayBuffer(0)}catch{throw new Error("ARRAYBUFFER not supported by this environment")}return function(s){return function(h,u,a){let c;const w=u/8,A=new ArrayBuffer(w),f=new Uint8Array(A),o=a===-1?3:0;for(c=0;c<w;c+=1)f[c]=h[c>>>2]>>>8*(o+a*(c%4))&255;return A}(s,t,n)};case"UINT8ARRAY":try{new Uint8Array(0)}catch{throw new Error("UINT8ARRAY not supported by this environment")}return function(s){return function(h,u,a){let c;const w=u/8,A=a===-1?3:0,f=new Uint8Array(w);for(c=0;c<w;c+=1)f[c]=h[c>>>2]>>>8*(A+a*(c%4))&255;return f}(s,t,n)};default:throw new Error("format must be HEX, B64, BYTES, ARRAYBUFFER, or UINT8ARRAY")}}const l=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],K=[3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428],y=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],B="Chosen SHA variant is not supported";function X(i,t){let n,e;const s=i.binLen>>>3,h=t.binLen>>>3,u=s<<3,a=4-s<<3;if(s%4!=0){for(n=0;n<h;n+=4)e=s+n>>>2,i.value[e]|=t.value[n>>>2]<<u,i.value.push(0),i.value[e+1]|=t.value[n>>>2]>>>a;return(i.value.length<<2)-4>=h+s&&i.value.pop(),{value:i.value,binLen:i.binLen+t.binLen}}return{value:i.value.concat(t.value),binLen:i.binLen+t.binLen}}function V(i){const t={outputUpper:!1,b64Pad:"=",outputLen:-1},n=i||{},e="Output length must be a multiple of 8";if(t.outputUpper=n.outputUpper||!1,n.b64Pad&&(t.b64Pad=n.b64Pad),n.outputLen){if(n.outputLen%8!=0)throw new Error(e);t.outputLen=n.outputLen}else if(n.shakeLen){if(n.shakeLen%8!=0)throw new Error(e);t.outputLen=n.shakeLen}if(typeof t.outputUpper!="boolean")throw new Error("Invalid outputUpper formatting option");if(typeof t.b64Pad!="string")throw new Error("Invalid b64Pad formatting option");return t}function T(i,t,n,e){const s=i+" must include a value and format";if(!t){if(!e)throw new Error(s);return e}if(t.value===void 0||!t.format)throw new Error(s);return C(t.format,t.encoding||"UTF8",n)(t.value)}class O{constructor(t,n,e){const s=e||{};if(this.t=n,this.i=s.encoding||"UTF8",this.numRounds=s.numRounds||1,isNaN(this.numRounds)||this.numRounds!==parseInt(this.numRounds,10)||1>this.numRounds)throw new Error("numRounds must a integer >= 1");this.o=t,this.h=[],this.u=0,this.l=!1,this.A=0,this.H=!1,this.S=[],this.p=[]}update(t){let n,e=0;const s=this.m>>>5,h=this.C(t,this.h,this.u),u=h.binLen,a=h.value,c=u>>>5;for(n=0;n<c;n+=s)e+this.m<=u&&(this.R=this.U(a.slice(n,n+s),this.R),e+=this.m);return this.A+=e,this.h=a.slice(e>>>5),this.u=u%this.m,this.l=!0,this}getHash(t,n){let e,s,h=this.v;const u=V(n);if(this.K){if(u.outputLen===-1)throw new Error("Output length must be specified in options");h=u.outputLen}const a=_(t,h,this.T,u);if(this.H&&this.F)return a(this.F(u));for(s=this.g(this.h.slice(),this.u,this.A,this.B(this.R),h),e=1;e<this.numRounds;e+=1)this.K&&h%32!=0&&(s[s.length-1]&=16777215>>>24-h%32),s=this.g(s,h,0,this.L(this.o),h);return a(s)}setHMACKey(t,n,e){if(!this.M)throw new Error("Variant does not support HMAC");if(this.l)throw new Error("Cannot set MAC key after calling update");const s=C(n,(e||{}).encoding||"UTF8",this.T);this.k(s(t))}k(t){const n=this.m>>>3,e=n/4-1;let s;if(this.numRounds!==1)throw new Error("Cannot set numRounds with MAC");if(this.H)throw new Error("MAC key already set");for(n<t.binLen/8&&(t.value=this.g(t.value,t.binLen,0,this.L(this.o),this.v));t.value.length<=e;)t.value.push(0);for(s=0;s<=e;s+=1)this.S[s]=909522486^t.value[s],this.p[s]=1549556828^t.value[s];this.R=this.U(this.S,this.R),this.A=this.m,this.H=!0}getHMAC(t,n){const e=V(n);return _(t,this.v,this.T,e)(this.Y())}Y(){let t;if(!this.H)throw new Error("Cannot call getHMAC without first setting MAC key");const n=this.g(this.h.slice(),this.u,this.A,this.B(this.R),this.v);return t=this.U(this.p,this.L(this.o)),t=this.g(n,this.v,this.m,t,this.v),t}}function U(i,t){return i<<t|i>>>32-t}function L(i,t){return i>>>t|i<<32-t}function tt(i,t){return i>>>t}function Z(i,t,n){return i^t^n}function et(i,t,n){return i&t^~i&n}function nt(i,t,n){return i&t^i&n^t&n}function ut(i){return L(i,2)^L(i,13)^L(i,22)}function v(i,t){const n=(65535&i)+(65535&t);return(65535&(i>>>16)+(t>>>16)+(n>>>16))<<16|65535&n}function ct(i,t,n,e){const s=(65535&i)+(65535&t)+(65535&n)+(65535&e);return(65535&(i>>>16)+(t>>>16)+(n>>>16)+(e>>>16)+(s>>>16))<<16|65535&s}function k(i,t,n,e,s){const h=(65535&i)+(65535&t)+(65535&n)+(65535&e)+(65535&s);return(65535&(i>>>16)+(t>>>16)+(n>>>16)+(e>>>16)+(s>>>16)+(h>>>16))<<16|65535&h}function wt(i){return L(i,7)^L(i,18)^tt(i,3)}function at(i){return L(i,6)^L(i,11)^L(i,25)}function ft(i){return[1732584193,4023233417,2562383102,271733878,3285377520]}function st(i,t){let n,e,s,h,u,a,c;const w=[];for(n=t[0],e=t[1],s=t[2],h=t[3],u=t[4],c=0;c<80;c+=1)w[c]=c<16?i[c]:U(w[c-3]^w[c-8]^w[c-14]^w[c-16],1),a=c<20?k(U(n,5),et(e,s,h),u,1518500249,w[c]):c<40?k(U(n,5),Z(e,s,h),u,1859775393,w[c]):c<60?k(U(n,5),nt(e,s,h),u,2400959708,w[c]):k(U(n,5),Z(e,s,h),u,3395469782,w[c]),u=h,h=s,s=U(e,30),e=n,n=a;return t[0]=v(n,t[0]),t[1]=v(e,t[1]),t[2]=v(s,t[2]),t[3]=v(h,t[3]),t[4]=v(u,t[4]),t}function lt(i,t,n,e){let s;const h=15+(t+65>>>9<<4),u=t+n;for(;i.length<=h;)i.push(0);for(i[t>>>5]|=128<<24-t%32,i[h]=4294967295&u,i[h-1]=u/4294967296|0,s=0;s<i.length;s+=16)e=st(i.slice(s,s+16),e);return e}class At extends O{constructor(t,n,e){if(t!=="SHA-1")throw new Error(B);super(t,n,e);const s=e||{};this.M=!0,this.F=this.Y,this.T=-1,this.C=C(this.t,this.i,this.T),this.U=st,this.B=function(h){return h.slice()},this.L=ft,this.g=lt,this.R=[1732584193,4023233417,2562383102,271733878,3285377520],this.m=512,this.v=160,this.K=!1,s.hmacKey&&this.k(T("hmacKey",s.hmacKey,this.T))}}function q(i){let t;return t=i=="SHA-224"?K.slice():y.slice(),t}function D(i,t){let n,e,s,h,u,a,c,w,A,f,o;const N=[];for(n=t[0],e=t[1],s=t[2],h=t[3],u=t[4],a=t[5],c=t[6],w=t[7],o=0;o<64;o+=1)N[o]=o<16?i[o]:ct(L(m=N[o-2],17)^L(m,19)^tt(m,10),N[o-7],wt(N[o-15]),N[o-16]),A=k(w,at(u),et(u,a,c),l[o],N[o]),f=v(ut(n),nt(n,e,s)),w=c,c=a,a=u,u=v(h,A),h=s,s=e,e=n,n=v(A,f);var m;return t[0]=v(n,t[0]),t[1]=v(e,t[1]),t[2]=v(s,t[2]),t[3]=v(h,t[3]),t[4]=v(u,t[4]),t[5]=v(a,t[5]),t[6]=v(c,t[6]),t[7]=v(w,t[7]),t}class mt extends O{constructor(t,n,e){if(t!=="SHA-224"&&t!=="SHA-256")throw new Error(B);super(t,n,e);const s=e||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=C(this.t,this.i,this.T),this.U=D,this.B=function(h){return h.slice()},this.L=q,this.g=function(h,u,a,c){return function(w,A,f,o,N){let m,p;const I=15+(A+65>>>9<<4),E=A+f;for(;w.length<=I;)w.push(0);for(w[A>>>5]|=128<<24-A%32,w[I]=4294967295&E,w[I-1]=E/4294967296|0,m=0;m<w.length;m+=16)o=D(w.slice(m,m+16),o);return p=N==="SHA-224"?[o[0],o[1],o[2],o[3],o[4],o[5],o[6]]:o,p}(h,u,a,c,t)},this.R=q(t),this.m=512,this.v=t==="SHA-224"?224:256,this.K=!1,s.hmacKey&&this.k(T("hmacKey",s.hmacKey,this.T))}}class r{constructor(t,n){this.N=t,this.I=n}}function G(i,t){let n;return t>32?(n=64-t,new r(i.I<<t|i.N>>>n,i.N<<t|i.I>>>n)):t!==0?(n=32-t,new r(i.N<<t|i.I>>>n,i.I<<t|i.N>>>n)):i}function S(i,t){let n;return t<32?(n=32-t,new r(i.N>>>t|i.I<<n,i.I>>>t|i.N<<n)):(n=64-t,new r(i.I>>>t|i.N<<n,i.N>>>t|i.I<<n))}function it(i,t){return new r(i.N>>>t,i.I>>>t|i.N<<32-t)}function Nt(i,t,n){return new r(i.N&t.N^i.N&n.N^t.N&n.N,i.I&t.I^i.I&n.I^t.I&n.I)}function pt(i){const t=S(i,28),n=S(i,34),e=S(i,39);return new r(t.N^n.N^e.N,t.I^n.I^e.I)}function d(i,t){let n,e;n=(65535&i.I)+(65535&t.I),e=(i.I>>>16)+(t.I>>>16)+(n>>>16);const s=(65535&e)<<16|65535&n;return n=(65535&i.N)+(65535&t.N)+(e>>>16),e=(i.N>>>16)+(t.N>>>16)+(n>>>16),new r((65535&e)<<16|65535&n,s)}function It(i,t,n,e){let s,h;s=(65535&i.I)+(65535&t.I)+(65535&n.I)+(65535&e.I),h=(i.I>>>16)+(t.I>>>16)+(n.I>>>16)+(e.I>>>16)+(s>>>16);const u=(65535&h)<<16|65535&s;return s=(65535&i.N)+(65535&t.N)+(65535&n.N)+(65535&e.N)+(h>>>16),h=(i.N>>>16)+(t.N>>>16)+(n.N>>>16)+(e.N>>>16)+(s>>>16),new r((65535&h)<<16|65535&s,u)}function Et(i,t,n,e,s){let h,u;h=(65535&i.I)+(65535&t.I)+(65535&n.I)+(65535&e.I)+(65535&s.I),u=(i.I>>>16)+(t.I>>>16)+(n.I>>>16)+(e.I>>>16)+(s.I>>>16)+(h>>>16);const a=(65535&u)<<16|65535&h;return h=(65535&i.N)+(65535&t.N)+(65535&n.N)+(65535&e.N)+(65535&s.N)+(u>>>16),u=(i.N>>>16)+(t.N>>>16)+(n.N>>>16)+(e.N>>>16)+(s.N>>>16)+(h>>>16),new r((65535&u)<<16|65535&h,a)}function M(i,t){return new r(i.N^t.N,i.I^t.I)}function gt(i){const t=S(i,19),n=S(i,61),e=it(i,6);return new r(t.N^n.N^e.N,t.I^n.I^e.I)}function vt(i){const t=S(i,1),n=S(i,8),e=it(i,7);return new r(t.N^n.N^e.N,t.I^n.I^e.I)}function Ht(i){const t=S(i,14),n=S(i,18),e=S(i,41);return new r(t.N^n.N^e.N,t.I^n.I^e.I)}const bt=[new r(l[0],3609767458),new r(l[1],602891725),new r(l[2],3964484399),new r(l[3],2173295548),new r(l[4],4081628472),new r(l[5],3053834265),new r(l[6],2937671579),new r(l[7],3664609560),new r(l[8],2734883394),new r(l[9],1164996542),new r(l[10],1323610764),new r(l[11],3590304994),new r(l[12],4068182383),new r(l[13],991336113),new r(l[14],633803317),new r(l[15],3479774868),new r(l[16],2666613458),new r(l[17],944711139),new r(l[18],2341262773),new r(l[19],2007800933),new r(l[20],1495990901),new r(l[21],1856431235),new r(l[22],3175218132),new r(l[23],2198950837),new r(l[24],3999719339),new r(l[25],766784016),new r(l[26],2566594879),new r(l[27],3203337956),new r(l[28],1034457026),new r(l[29],2466948901),new r(l[30],3758326383),new r(l[31],168717936),new r(l[32],1188179964),new r(l[33],1546045734),new r(l[34],1522805485),new r(l[35],2643833823),new r(l[36],2343527390),new r(l[37],1014477480),new r(l[38],1206759142),new r(l[39],344077627),new r(l[40],1290863460),new r(l[41],3158454273),new r(l[42],3505952657),new r(l[43],106217008),new r(l[44],3606008344),new r(l[45],1432725776),new r(l[46],1467031594),new r(l[47],851169720),new r(l[48],3100823752),new r(l[49],1363258195),new r(l[50],3750685593),new r(l[51],3785050280),new r(l[52],3318307427),new r(l[53],3812723403),new r(l[54],2003034995),new r(l[55],3602036899),new r(l[56],1575990012),new r(l[57],1125592928),new r(l[58],2716904306),new r(l[59],442776044),new r(l[60],593698344),new r(l[61],3733110249),new r(l[62],2999351573),new r(l[63],3815920427),new r(3391569614,3928383900),new r(3515267271,566280711),new r(3940187606,3454069534),new r(4118630271,4000239992),new r(116418474,1914138554),new r(174292421,2731055270),new r(289380356,3203993006),new r(460393269,320620315),new r(685471733,587496836),new r(852142971,1086792851),new r(1017036298,365543100),new r(1126000580,2618297676),new r(1288033470,3409855158),new r(1501505948,4234509866),new r(1607167915,987167468),new r(1816402316,1246189591)];function J(i){return i==="SHA-384"?[new r(3418070365,K[0]),new r(1654270250,K[1]),new r(2438529370,K[2]),new r(355462360,K[3]),new r(1731405415,K[4]),new r(41048885895,K[5]),new r(3675008525,K[6]),new r(1203062813,K[7])]:[new r(y[0],4089235720),new r(y[1],2227873595),new r(y[2],4271175723),new r(y[3],1595750129),new r(y[4],2917565137),new r(y[5],725511199),new r(y[6],4215389547),new r(y[7],327033209)]}function Q(i,t){let n,e,s,h,u,a,c,w,A,f,o,N;const m=[];for(n=t[0],e=t[1],s=t[2],h=t[3],u=t[4],a=t[5],c=t[6],w=t[7],o=0;o<80;o+=1)o<16?(N=2*o,m[o]=new r(i[N],i[N+1])):m[o]=It(gt(m[o-2]),m[o-7],vt(m[o-15]),m[o-16]),A=Et(w,Ht(u),(I=a,E=c,new r((p=u).N&I.N^~p.N&E.N,p.I&I.I^~p.I&E.I)),bt[o],m[o]),f=d(pt(n),Nt(n,e,s)),w=c,c=a,a=u,u=d(h,A),h=s,s=e,e=n,n=d(A,f);var p,I,E;return t[0]=d(n,t[0]),t[1]=d(e,t[1]),t[2]=d(s,t[2]),t[3]=d(h,t[3]),t[4]=d(u,t[4]),t[5]=d(a,t[5]),t[6]=d(c,t[6]),t[7]=d(w,t[7]),t}class dt extends O{constructor(t,n,e){if(t!=="SHA-384"&&t!=="SHA-512")throw new Error(B);super(t,n,e);const s=e||{};this.F=this.Y,this.M=!0,this.T=-1,this.C=C(this.t,this.i,this.T),this.U=Q,this.B=function(h){return h.slice()},this.L=J,this.g=function(h,u,a,c){return function(w,A,f,o,N){let m,p;const I=31+(A+129>>>10<<5),E=A+f;for(;w.length<=I;)w.push(0);for(w[A>>>5]|=128<<24-A%32,w[I]=4294967295&E,w[I-1]=E/4294967296|0,m=0;m<w.length;m+=32)o=Q(w.slice(m,m+32),o);return p=N==="SHA-384"?[o[0].N,o[0].I,o[1].N,o[1].I,o[2].N,o[2].I,o[3].N,o[3].I,o[4].N,o[4].I,o[5].N,o[5].I]:[o[0].N,o[0].I,o[1].N,o[1].I,o[2].N,o[2].I,o[3].N,o[3].I,o[4].N,o[4].I,o[5].N,o[5].I,o[6].N,o[6].I,o[7].N,o[7].I],p}(h,u,a,c,t)},this.R=J(t),this.m=1024,this.v=t==="SHA-384"?384:512,this.K=!1,s.hmacKey&&this.k(T("hmacKey",s.hmacKey,this.T))}}const Rt=[new r(0,1),new r(0,32898),new r(2147483648,32906),new r(2147483648,2147516416),new r(0,32907),new r(0,2147483649),new r(2147483648,2147516545),new r(2147483648,32777),new r(0,138),new r(0,136),new r(0,2147516425),new r(0,2147483658),new r(0,2147516555),new r(2147483648,139),new r(2147483648,32905),new r(2147483648,32771),new r(2147483648,32770),new r(2147483648,128),new r(0,32778),new r(2147483648,2147483658),new r(2147483648,2147516545),new r(2147483648,32896),new r(0,2147483649),new r(2147483648,2147516424)],Lt=[[0,36,3,41,18],[1,44,10,45,2],[62,6,43,15,61],[28,55,25,21,56],[27,20,39,8,14]];function x(i){let t;const n=[];for(t=0;t<5;t+=1)n[t]=[new r(0,0),new r(0,0),new r(0,0),new r(0,0),new r(0,0)];return n}function St(i){let t;const n=[];for(t=0;t<5;t+=1)n[t]=i[t].slice();return n}function P(i,t){let n,e,s,h;const u=[],a=[];if(i!==null)for(e=0;e<i.length;e+=2)t[(e>>>1)%5][(e>>>1)/5|0]=M(t[(e>>>1)%5][(e>>>1)/5|0],new r(i[e+1],i[e]));for(n=0;n<24;n+=1){for(h=x(),e=0;e<5;e+=1)u[e]=(c=t[e][0],w=t[e][1],A=t[e][2],f=t[e][3],o=t[e][4],new r(c.N^w.N^A.N^f.N^o.N,c.I^w.I^A.I^f.I^o.I));for(e=0;e<5;e+=1)a[e]=M(u[(e+4)%5],G(u[(e+1)%5],1));for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)t[e][s]=M(t[e][s],a[e]);for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)h[s][(2*e+3*s)%5]=G(t[e][s],Lt[e][s]);for(e=0;e<5;e+=1)for(s=0;s<5;s+=1)t[e][s]=M(h[e][s],new r(~h[(e+1)%5][s].N&h[(e+2)%5][s].N,~h[(e+1)%5][s].I&h[(e+2)%5][s].I));t[0][0]=M(t[0][0],Rt[n])}var c,w,A,f,o;return t}function rt(i){let t,n,e=0;const s=[0,0],h=[4294967295&i,i/4294967296&2097151];for(t=6;t>=0;t--)n=h[t>>2]>>>8*t&255,n===0&&e===0||(s[e+1>>2]|=n<<8*(e+1),e+=1);return e=e!==0?e:1,s[0]|=e,{value:e+1>4?s:[s[0]],binLen:8+8*e}}function z(i){return X(rt(i.binLen),i)}function W(i,t){let n,e=rt(t);e=X(e,i);const s=t>>>2,h=(s-e.value.length%s)%s;for(n=0;n<h;n++)e.value.push(0);return e.value}class Kt extends O{constructor(t,n,e){let s=6,h=0;super(t,n,e);const u=e||{};if(this.numRounds!==1){if(u.kmacKey||u.hmacKey)throw new Error("Cannot set numRounds with MAC");if(this.o==="CSHAKE128"||this.o==="CSHAKE256")throw new Error("Cannot set numRounds for CSHAKE variants")}switch(this.T=1,this.C=C(this.t,this.i,this.T),this.U=P,this.B=St,this.L=x,this.R=x(),this.K=!1,t){case"SHA3-224":this.m=h=1152,this.v=224,this.M=!0,this.F=this.Y;break;case"SHA3-256":this.m=h=1088,this.v=256,this.M=!0,this.F=this.Y;break;case"SHA3-384":this.m=h=832,this.v=384,this.M=!0,this.F=this.Y;break;case"SHA3-512":this.m=h=576,this.v=512,this.M=!0,this.F=this.Y;break;case"SHAKE128":s=31,this.m=h=1344,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"SHAKE256":s=31,this.m=h=1088,this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"KMAC128":s=4,this.m=h=1344,this.X(e),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"KMAC256":s=4,this.m=h=1088,this.X(e),this.v=-1,this.K=!0,this.M=!1,this.F=this._;break;case"CSHAKE128":this.m=h=1344,s=this.O(e),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;case"CSHAKE256":this.m=h=1088,s=this.O(e),this.v=-1,this.K=!0,this.M=!1,this.F=null;break;default:throw new Error(B)}this.g=function(a,c,w,A,f){return function(o,N,m,p,I,E,R){let g,H,b=0;const F=[],Y=I>>>5,ot=N>>>5;for(g=0;g<ot&&N>=I;g+=Y)p=P(o.slice(g,g+Y),p),N-=I;for(o=o.slice(g),N%=I;o.length<Y;)o.push(0);for(g=N>>>3,o[g>>2]^=E<<g%4*8,o[Y-1]^=2147483648,p=P(o,p);32*F.length<R&&(H=p[b%5][b/5|0],F.push(H.I),!(32*F.length>=R));)F.push(H.N),b+=1,64*b%I==0&&(P(null,p),b=0);return F}(a,c,0,A,h,s,f)},u.hmacKey&&this.k(T("hmacKey",u.hmacKey,this.T))}O(t,n){const e=function(h){const u=h||{};return{funcName:T("funcName",u.funcName,1,{value:[],binLen:0}),customization:T("Customization",u.customization,1,{value:[],binLen:0})}}(t||{});n&&(e.funcName=n);const s=X(z(e.funcName),z(e.customization));if(e.customization.binLen!==0||e.funcName.binLen!==0){const h=W(s,this.m>>>3);for(let u=0;u<h.length;u+=this.m>>>5)this.R=this.U(h.slice(u,u+(this.m>>>5)),this.R),this.A+=this.m;return 4}return 31}X(t){const n=function(s){const h=s||{};return{kmacKey:T("kmacKey",h.kmacKey,1),funcName:{value:[1128353099],binLen:32},customization:T("Customization",h.customization,1,{value:[],binLen:0})}}(t||{});this.O(t,n.funcName);const e=W(z(n.kmacKey),this.m>>>3);for(let s=0;s<e.length;s+=this.m>>>5)this.R=this.U(e.slice(s,s+(this.m>>>5)),this.R),this.A+=this.m;this.H=!0}_(t){const n=X({value:this.h.slice(),binLen:this.u},function(e){let s,h,u=0;const a=[0,0],c=[4294967295&e,e/4294967296&2097151];for(s=6;s>=0;s--)h=c[s>>2]>>>8*s&255,h===0&&u===0||(a[u>>2]|=h<<8*u,u+=1);return u=u!==0?u:1,a[u>>2]|=u<<8*u,{value:u+1>4?a:[a[0]],binLen:8+8*u}}(t.outputLen));return this.g(n.value,n.binLen,this.A,this.B(this.R),t.outputLen)}}class ht{constructor(t,n,e){if(t=="SHA-1")this.P=new At(t,n,e);else if(t=="SHA-224"||t=="SHA-256")this.P=new mt(t,n,e);else if(t=="SHA-384"||t=="SHA-512")this.P=new dt(t,n,e);else{if(t!="SHA3-224"&&t!="SHA3-256"&&t!="SHA3-384"&&t!="SHA3-512"&&t!="SHAKE128"&&t!="SHAKE256"&&t!="CSHAKE128"&&t!="CSHAKE256"&&t!="KMAC128"&&t!="KMAC256")throw new Error(B);this.P=new Kt(t,n,e)}}update(t){return this.P.update(t),this}getHash(t,n){return this.P.getHash(t,n)}setHMACKey(t,n,e){this.P.setHMACKey(t,n,e)}getHMAC(t,n){return this.P.getHMAC(t,n)}}function yt(i){const t=new ht("SHA-1","TEXT");return t.update(i),t.getHash("HEX")}function Tt(i){const t=new ht("SHA-256","TEXT");return t.update(i.join("")),t.getHash("HEX")}export{Tt as c,yt as s};