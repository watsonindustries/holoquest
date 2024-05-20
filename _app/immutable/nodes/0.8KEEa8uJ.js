import{s as ye,c as ie,o as Ze,B as vt,C as bt,D as _t,E as Et,r as yt,n as wt,a as $t,b as fe,j as Rt}from"../chunks/scheduler.CJVYrxIg.js";import{S as we,i as $e,e as g,C as N,s as w,c as p,f as v,D as B,b as $,d as f,l as d,n as oe,m as u,E as D,y as T,w as S,F as M,t as Z,g as lt,j as ee,o as re,A as Ct,x as Tt,G as _e,p as At,J as ct}from"../chunks/index.BQ69NQ52.js";import{I as W,W as jt,U as ht,T as Lt,Q as Ht,a as Nt,b as Bt,B as Dt,g as Mt,c as It}from"../chunks/index.DrjdoYrR.js";import{b as Xe,n as Ke,u as qe,a as ut,s as Ee,t as Ut}from"../chunks/store.CAuuRsX2.js";import{f as ft,s as Pt}from"../chunks/const.CMVshlAV.js";import{T as G}from"../chunks/custom.DgUHssZa.js";import{r as Ot,C as zt}from"../chunks/client.DNB36mQv.js";const xt=!0,Vt=()=>({}),Cs=Object.freeze(Object.defineProperty({__proto__:null,csr:xt,load:Vt},Symbol.toStringTag,{value:"Module"}));function Jt(e){let t,s,n,r,i,o,a,c,h,l,_,E;return n=new W({props:{src:jt,theme:"solid",class:"color-gray-900",size:"20"}}),{c(){t=g("button"),s=g("div"),N(n.$$.fragment),r=w(),i=g("span"),o=g("span"),c=w(),h=g("span"),this.h()},l(b){t=p(b,"BUTTON",{class:!0,"data-tip":!0});var y=v(t);s=p(y,"DIV",{class:!0});var P=v(s);B(n.$$.fragment,P),r=$(P),i=p(P,"SPAN",{class:!0});var L=v(i);o=p(L,"SPAN",{class:!0}),v(o).forEach(f),c=$(L),h=p(L,"SPAN",{class:!0}),v(h).forEach(f),L.forEach(f),P.forEach(f),y.forEach(f),this.h()},h(){d(o,"class",a="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 "+e[1]),d(h,"class",l="relative inline-flex h-3 w-3 rounded-full "+e[1]),d(i,"class","absolute -right-1 -top-1 flex h-3 w-3"),d(s,"class","indicator relative"),d(t,"class","btn-ghost btn-circle btn tooltip tooltip-left"),d(t,"data-tip",_=e[0]==="open"?"Connected":"Disconnected")},m(b,y){oe(b,t,y),u(t,s),D(n,s,null),u(s,r),u(s,i),u(i,o),u(i,c),u(i,h),E=!0},p(b,[y]){(!E||y&2&&a!==(a="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 "+b[1]))&&d(o,"class",a),(!E||y&2&&l!==(l="relative inline-flex h-3 w-3 rounded-full "+b[1]))&&d(h,"class",l),(!E||y&1&&_!==(_=b[0]==="open"?"Connected":"Disconnected"))&&d(t,"data-tip",_)},i(b){E||(T(n.$$.fragment,b),E=!0)},o(b){S(n.$$.fragment,b),E=!1},d(b){b&&f(t),M(n)}}}function Ft(e){switch(e){case"connecting":return"bg-warning";case"open":return"bg-success";case"closing":return"bg-warning";case"closed":return"bg-error"}}function Wt(e,t,s){let n,r;ie(e,Xe,o=>s(2,r=o));let i="connecting";return r==null||r.onClose(()=>{console.log("Lost connection to server"),s(0,i="closed")}),r==null||r.onOpen(()=>{console.log("Connection to server reestablished"),s(0,i="open")}),Ze(()=>{setTimeout(()=>{s(0,i=r==null?void 0:r.connectionState())},5e3)}),e.$$.update=()=>{e.$$.dirty&1&&s(1,n=Ft(i))},[i,n]}class Gt extends we{constructor(t){super(),$e(this,t,Wt,Jt,ye,{})}}function dt(e){let t,s,n,r,i,o,a;return n=new W({props:{src:Dt,theme:"solid",class:"color-gray-900",size:"20"}}),{c(){t=g("li"),s=g("a"),N(n.$$.fragment),r=Z("Debug"),this.h()},l(c){t=p(c,"LI",{});var h=v(t);s=p(h,"A",{href:!0});var l=v(s);B(n.$$.fragment,l),r=ee(l,"Debug"),l.forEach(f),h.forEach(f),this.h()},h(){d(s,"href","/debug")},m(c,h){oe(c,t,h),u(t,s),D(n,s,null),u(s,r),i=!0,o||(a=re(s,"click",e[9]),o=!0)},p:wt,i(c){i||(T(n.$$.fragment,c),i=!0)},o(c){S(n.$$.fragment,c),i=!1},d(c){c&&f(t),M(n),o=!1,a()}}}function Kt(e){let t,s,n,r,i,o,a='<label for="drawer-nav" class="btn-ghost btn-square btn"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block h-6 w-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></label>',c,h,l='<a class="btn-ghost btn bg-gradient-to-br from-primary to-secondary bg-clip-text font-geologica text-xl normal-case text-transparent" href="/">HoloQuest</a>',_,E,b,y,P,L,Re,Ae,O,te,je,k,ae,z,K,Le,He,le,x,q,Ne,Be,ce,V,Q,De,Me,he,J,X,Ie,Ue,ue,F,Y,Pe,Oe,se,ze,tt;y=new W({props:{src:ht,size:"20",theme:"solid"}}),L=new Gt({});const xe=e[3].default,R=vt(xe,e,e[2],null);K=new W({props:{src:Lt,theme:"solid",class:"color-gray-900",size:"20"}}),q=new W({props:{src:Ht,theme:"solid",class:"color-gray-900",size:"20"}}),Q=new W({props:{src:ht,theme:"solid",class:"color-gray-900",size:"20"}}),X=new W({props:{src:Nt,theme:"solid",class:"color-gray-900",size:"20"}}),Y=new W({props:{src:Bt,theme:"solid",class:"color-gray-900",size:"20"}});let C=e[1]&&dt(e);return{c(){t=g("div"),s=g("input"),n=w(),r=g("div"),i=g("div"),o=g("div"),o.innerHTML=a,c=w(),h=g("div"),h.innerHTML=l,_=w(),E=g("div"),b=g("a"),N(y.$$.fragment),P=w(),N(L.$$.fragment),Re=w(),R&&R.c(),Ae=w(),O=g("div"),te=g("label"),je=w(),k=g("ul"),ae=g("li"),z=g("a"),N(K.$$.fragment),Le=Z("Stamp Sheet"),He=w(),le=g("li"),x=g("a"),N(q.$$.fragment),Ne=Z("Scanner"),Be=w(),ce=g("li"),V=g("a"),N(Q.$$.fragment),De=Z("Profile"),Me=w(),he=g("li"),J=g("a"),N(X.$$.fragment),Ie=Z("Leaderboard"),Ue=w(),ue=g("li"),F=g("a"),N(Y.$$.fragment),Pe=Z("About"),Oe=w(),C&&C.c(),this.h()},l(m){t=p(m,"DIV",{class:!0});var A=v(t);s=p(A,"INPUT",{id:!0,type:!0,class:!0}),n=$(A),r=p(A,"DIV",{class:!0});var me=v(r);i=p(me,"DIV",{class:!0});var ne=v(i);o=p(ne,"DIV",{class:!0,"data-svelte-h":!0}),lt(o)!=="svelte-8ft18"&&(o.innerHTML=a),c=$(ne),h=p(ne,"DIV",{class:!0,"data-svelte-h":!0}),lt(h)!=="svelte-qptiw7"&&(h.innerHTML=l),_=$(ne),E=p(ne,"DIV",{class:!0});var ve=v(E);b=p(ve,"A",{href:!0,class:!0});var st=v(b);B(y.$$.fragment,st),st.forEach(f),P=$(ve),B(L.$$.fragment,ve),ve.forEach(f),ne.forEach(f),Re=$(me),R&&R.l(me),me.forEach(f),Ae=$(A),O=p(A,"DIV",{class:!0});var be=v(O);te=p(be,"LABEL",{for:!0,class:!0}),v(te).forEach(f),je=$(be),k=p(be,"UL",{class:!0});var H=v(k);ae=p(H,"LI",{});var nt=v(ae);z=p(nt,"A",{href:!0});var Ve=v(z);B(K.$$.fragment,Ve),Le=ee(Ve,"Stamp Sheet"),Ve.forEach(f),nt.forEach(f),He=$(H),le=p(H,"LI",{});var it=v(le);x=p(it,"A",{href:!0});var Je=v(x);B(q.$$.fragment,Je),Ne=ee(Je,"Scanner"),Je.forEach(f),it.forEach(f),Be=$(H),ce=p(H,"LI",{});var rt=v(ce);V=p(rt,"A",{href:!0});var Fe=v(V);B(Q.$$.fragment,Fe),De=ee(Fe,"Profile"),Fe.forEach(f),rt.forEach(f),Me=$(H),he=p(H,"LI",{});var ot=v(he);J=p(ot,"A",{href:!0});var We=v(J);B(X.$$.fragment,We),Ie=ee(We,"Leaderboard"),We.forEach(f),ot.forEach(f),Ue=$(H),ue=p(H,"LI",{});var at=v(ue);F=p(at,"A",{href:!0});var Ge=v(F);B(Y.$$.fragment,Ge),Pe=ee(Ge,"About"),Ge.forEach(f),at.forEach(f),Oe=$(H),C&&C.l(H),H.forEach(f),be.forEach(f),A.forEach(f),this.h()},h(){d(s,"id","drawer-nav"),d(s,"type","checkbox"),d(s,"class","drawer-toggle"),d(o,"class","absolute left-1 flex-none lg:hidden"),d(h,"class","flex"),d(b,"href","/profile"),d(b,"class","btn-ghost btn-circle btn"),d(E,"class","absolute right-1 flex"),d(i,"class","navbar relative mb-4 flex w-full justify-center bg-base-300"),d(r,"class","drawer-content flex flex-col"),d(te,"for","drawer-nav"),d(te,"class","drawer-overlay"),d(z,"href","/"),d(x,"href","/scanner"),d(V,"href","/profile"),d(J,"href","/leaderboard"),d(F,"href","/about"),d(k,"class","menu h-full w-60 bg-base-200 p-4 text-xl"),d(O,"class","drawer-side"),d(t,"class","drawer")},m(m,A){oe(m,t,A),u(t,s),u(t,n),u(t,r),u(r,i),u(i,o),u(i,c),u(i,h),u(i,_),u(i,E),u(E,b),D(y,b,null),u(E,P),D(L,E,null),u(r,Re),R&&R.m(r,null),u(t,Ae),u(t,O),u(O,te),u(O,je),u(O,k),u(k,ae),u(ae,z),D(K,z,null),u(z,Le),u(k,He),u(k,le),u(le,x),D(q,x,null),u(x,Ne),u(k,Be),u(k,ce),u(ce,V),D(Q,V,null),u(V,De),u(k,Me),u(k,he),u(he,J),D(X,J,null),u(J,Ie),u(k,Ue),u(k,ue),u(ue,F),D(Y,F,null),u(F,Pe),u(k,Oe),C&&C.m(k,null),se=!0,ze||(tt=[re(z,"click",e[4]),re(x,"click",e[5]),re(V,"click",e[6]),re(J,"click",e[7]),re(F,"click",e[8])],ze=!0)},p(m,[A]){R&&R.p&&(!se||A&4)&&bt(R,xe,m,m[2],se?Et(xe,m[2],A,null):_t(m[2]),null),m[1]?C?(C.p(m,A),A&2&&T(C,1)):(C=dt(m),C.c(),T(C,1),C.m(k,null)):C&&(Ct(),S(C,1,1,()=>{C=null}),Tt())},i(m){se||(T(y.$$.fragment,m),T(L.$$.fragment,m),T(R,m),T(K.$$.fragment,m),T(q.$$.fragment,m),T(Q.$$.fragment,m),T(X.$$.fragment,m),T(Y.$$.fragment,m),T(C),se=!0)},o(m){S(y.$$.fragment,m),S(L.$$.fragment,m),S(R,m),S(K.$$.fragment,m),S(q.$$.fragment,m),S(Q.$$.fragment,m),S(X.$$.fragment,m),S(Y.$$.fragment,m),S(C),se=!1},d(m){m&&f(t),M(y),M(L),R&&R.d(m),M(K),M(q),M(Q),M(X),M(Y),C&&C.d(),ze=!1,yt(tt)}}}function qt(e,t,s){let{$$slots:n={},$$scope:r}=t,i,o=!0;Ze(()=>{s(0,i=document.querySelector(".drawer-toggle")),s(1,o=localStorage.getItem("debug")==="true")});const a=()=>{s(0,i.checked=!1,i)},c=()=>{s(0,i.checked=!1,i)},h=()=>{s(0,i.checked=!1,i)},l=()=>{s(0,i.checked=!1,i)},_=()=>{s(0,i.checked=!1,i)},E=()=>{s(0,i.checked=!1,i)};return e.$$set=b=>{"$$scope"in b&&s(2,r=b.$$scope)},[i,o,r,n,a,c,h,l,_,E]}class Qt extends we{constructor(t){super(),$e(this,t,qt,Kt,ye,{})}}function Xt(e){let t,s,n,r,i,o,a,c;return{c(){t=g("div"),s=g("div"),n=g("div"),r=g("span"),i=Z(e[1]),this.h()},l(h){t=p(h,"DIV",{class:!0});var l=v(t);s=p(l,"DIV",{class:!0});var _=v(s);n=p(_,"DIV",{class:!0});var E=v(n);r=p(E,"SPAN",{});var b=v(r);i=ee(b,e[1]),b.forEach(f),E.forEach(f),_.forEach(f),l.forEach(f),this.h()},h(){d(n,"class","text-center"),d(s,"class",o="alert alert-"+e[0]),_e(s,"alert-success",e[0]===G.SUCCESS),_e(s,"alert-error",e[0]===G.ERROR),d(t,"class","toast-center toast-bottom toast -z-50 w-60")},m(h,l){oe(h,t,l),u(t,s),u(s,n),u(n,r),u(r,i),c=!0},p(h,[l]){(!c||l&2)&&At(i,h[1]),(!c||l&1&&o!==(o="alert alert-"+h[0]))&&d(s,"class",o),(!c||l&1)&&_e(s,"alert-success",h[0]===G.SUCCESS),(!c||l&1)&&_e(s,"alert-error",h[0]===G.ERROR)},i(h){c||($t(()=>{c&&(a||(a=ct(s,ft,{},!0)),a.run(1))}),c=!0)},o(h){a||(a=ct(s,ft,{},!1)),a.run(0),c=!1},d(h){h&&f(t),h&&a&&a.end()}}}function Yt(e,t,s){let{type:n=G.SUCCESS}=t,{message:r}=t;return e.$$set=i=>{"type"in i&&s(0,n=i.type),"message"in i&&s(1,r=i.message)},[n,r]}class Zt extends we{constructor(t){super(),$e(this,t,Yt,Xt,ye,{type:0,message:1})}}var ge=e=>typeof e=="function"?e:function(){return e},es=typeof self<"u"?self:null,de=typeof window<"u"?window:null,pe=es||de||pe,ts="2.0.0",I={connecting:0,open:1,closing:2,closed:3},ss=1e4,ns=1e3,j={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},U={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},Ye={longpoll:"longpoll",websocket:"websocket"},is={complete:4},Ce=class{constructor(e,t,s,n){this.channel=e,this.event=t,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=n,this.timeoutTimer=null,this.recHooks=[],this.sent=!1}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}matchReceive({status:e,response:t,_ref:s}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},kt=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=null,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},rs=class{constructor(e,t,s){this.state=j.closed,this.topic=e,this.params=ge(t||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Ce(this,U.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new kt(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=j.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(n=>n.send()),this.pushBuffer=[]}),this.joinPush.receive("error",()=>{this.state=j.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic} ${this.joinRef()}`),this.state=j.closed,this.socket.remove(this)}),this.onError(n=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.isJoining()&&this.joinPush.reset(),this.state=j.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic} (${this.joinRef()})`,this.joinPush.timeout),new Ce(this,U.leave,ge({}),this.timeout).send(),this.state=j.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(U.reply,(n,r)=>{this.trigger(this.replyEventName(r),n)})}join(e=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}onClose(e){this.on(U.close,e)}onError(e){return this.on(U.error,t=>e(t))}on(e,t){let s=this.bindingRef++;return this.bindings.push({event:e,ref:s,callback:t}),s}off(e,t){this.bindings=this.bindings.filter(s=>!(s.event===e&&(typeof t>"u"||t===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,s=this.timeout){if(t=t||{},!this.joinedOnce)throw new Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let n=new Ce(this,e,function(){return t},s);return this.canPush()?n.send():(n.startTimeout(),this.pushBuffer.push(n)),n}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=j.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(U.close,"leave")},s=new Ce(this,U.leave,ge({}),e);return s.receive("ok",()=>t()).receive("timeout",()=>t()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(e,t,s){return t}isMember(e,t,s,n){return this.topic!==e?!1:n&&n!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:e,event:t,payload:s,joinRef:n}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=j.joining,this.joinPush.resend(e))}trigger(e,t,s,n){let r=this.onMessage(e,t,s,n);if(t&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let i=this.bindings.filter(o=>o.event===e);for(let o=0;o<i.length;o++)i[o].callback(r,s,n||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===j.closed}isErrored(){return this.state===j.errored}isJoined(){return this.state===j.joined}isJoining(){return this.state===j.joining}isLeaving(){return this.state===j.leaving}},Se=class{static request(e,t,s,n,r,i,o){if(pe.XDomainRequest){let a=new pe.XDomainRequest;return this.xdomainRequest(a,e,t,n,r,i,o)}else{let a=new pe.XMLHttpRequest;return this.xhrRequest(a,e,t,s,n,r,i,o)}}static xdomainRequest(e,t,s,n,r,i,o){return e.timeout=r,e.open(t,s),e.onload=()=>{let a=this.parseJSON(e.responseText);o&&o(a)},i&&(e.ontimeout=i),e.onprogress=()=>{},e.send(n),e}static xhrRequest(e,t,s,n,r,i,o,a){return e.open(t,s,!0),e.timeout=i,e.setRequestHeader("Content-Type",n),e.onerror=()=>a&&a(null),e.onreadystatechange=()=>{if(e.readyState===is.complete&&a){let c=this.parseJSON(e.responseText);a(c)}},o&&(e.ontimeout=o),e.send(r),e}static parseJSON(e){if(!e||e==="")return null;try{return JSON.parse(e)}catch{return console&&console.log("failed to parse JSON response",e),null}}static serialize(e,t){let s=[];for(var n in e){if(!Object.prototype.hasOwnProperty.call(e,n))continue;let r=t?`${t}[${n}]`:n,i=e[n];typeof i=="object"?s.push(this.serialize(i,r)):s.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}return s.join("&")}static appendParams(e,t){if(Object.keys(t).length===0)return e;let s=e.match(/\?/)?"&":"?";return`${e}${s}${this.serialize(t)}`}},Qe=class{constructor(e){this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=I.connecting,this.poll()}normalizeEndpoint(e){return e.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+Ye.websocket),"$1/"+Ye.longpoll)}endpointURL(){return Se.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,s){this.close(e,t,s),this.readyState=I.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===I.open||this.readyState===I.connecting}poll(){this.ajax("GET","application/json",null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:s,messages:n}=e;this.token=s}else t=0;switch(t){case 200:n.forEach(r=>{setTimeout(()=>this.onmessage({data:r}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=I.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${t}`)}})}send(e){this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e){this.awaitingBatchAck=!0,this.ajax("POST","application/x-ndjson",e.join(`
`),()=>this.onerror("timeout"),t=>{this.awaitingBatchAck=!1,!t||t.status!==200?(this.onerror(t&&t.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(e,t,s){for(let r of this.reqs)r.abort();this.readyState=I.closed;let n=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",n)):this.onclose(n)}ajax(e,t,s,n,r){let i,o=()=>{this.reqs.delete(i),n()};i=Se.request(e,this.endpointURL(),t,s,this.timeout,o,a=>{this.reqs.delete(i),this.isActive()&&r(a)}),this.reqs.add(i)}},Te={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let s=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(s))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[s,n,r,i,o]=JSON.parse(e);return t({join_ref:s,ref:n,topic:r,event:i,payload:o})}},binaryEncode(e){let{join_ref:t,ref:s,event:n,topic:r,payload:i}=e,o=this.META_LENGTH+t.length+s.length+r.length+n.length,a=new ArrayBuffer(this.HEADER_LENGTH+o),c=new DataView(a),h=0;c.setUint8(h++,this.KINDS.push),c.setUint8(h++,t.length),c.setUint8(h++,s.length),c.setUint8(h++,r.length),c.setUint8(h++,n.length),Array.from(t,_=>c.setUint8(h++,_.charCodeAt(0))),Array.from(s,_=>c.setUint8(h++,_.charCodeAt(0))),Array.from(r,_=>c.setUint8(h++,_.charCodeAt(0))),Array.from(n,_=>c.setUint8(h++,_.charCodeAt(0)));var l=new Uint8Array(a.byteLength+i.byteLength);return l.set(new Uint8Array(a),0),l.set(new Uint8Array(i),a.byteLength),l.buffer},binaryDecode(e){let t=new DataView(e),s=t.getUint8(0),n=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(e,t,n);case this.KINDS.reply:return this.decodeReply(e,t,n);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,n)}},decodePush(e,t,s){let n=t.getUint8(1),r=t.getUint8(2),i=t.getUint8(3),o=this.HEADER_LENGTH+this.META_LENGTH-1,a=s.decode(e.slice(o,o+n));o=o+n;let c=s.decode(e.slice(o,o+r));o=o+r;let h=s.decode(e.slice(o,o+i));o=o+i;let l=e.slice(o,e.byteLength);return{join_ref:a,ref:null,topic:c,event:h,payload:l}},decodeReply(e,t,s){let n=t.getUint8(1),r=t.getUint8(2),i=t.getUint8(3),o=t.getUint8(4),a=this.HEADER_LENGTH+this.META_LENGTH,c=s.decode(e.slice(a,a+n));a=a+n;let h=s.decode(e.slice(a,a+r));a=a+r;let l=s.decode(e.slice(a,a+i));a=a+i;let _=s.decode(e.slice(a,a+o));a=a+o;let E=e.slice(a,e.byteLength),b={status:_,response:E};return{join_ref:c,ref:h,topic:l,event:U.reply,payload:b}},decodeBroadcast(e,t,s){let n=t.getUint8(1),r=t.getUint8(2),i=this.HEADER_LENGTH+2,o=s.decode(e.slice(i,i+n));i=i+n;let a=s.decode(e.slice(i,i+r));i=i+r;let c=e.slice(i,e.byteLength);return{join_ref:null,ref:null,topic:o,event:a,payload:c}}},os=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=t.timeout||ss,this.transport=t.transport||pe.WebSocket||Qe,this.establishedConnections=0,this.defaultEncoder=Te.encode.bind(Te),this.defaultDecoder=Te.decode.bind(Te),this.closeWasClean=!1,this.binaryType=t.binaryType||"arraybuffer",this.connectClock=1,this.transport!==Qe?(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let s=null;de&&de.addEventListener&&(de.addEventListener("pagehide",n=>{this.conn&&(this.disconnect(),s=this.connectClock)}),de.addEventListener("pageshow",n=>{s===this.connectClock&&(s=null,this.connect())})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.rejoinAfterMs=n=>t.rejoinAfterMs?t.rejoinAfterMs(n):[1e3,2e3,5e3][n-1]||1e4,this.reconnectAfterMs=n=>t.reconnectAfterMs?t.reconnectAfterMs(n):[10,50,100,150,200,250,500,1e3,2e3][n-1]||5e3,this.logger=t.logger||null,this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=ge(t.params||{}),this.endPoint=`${e}/${Ye.websocket}`,this.vsn=t.vsn||ts,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new kt(()=>{this.teardown(()=>this.connect())},this.reconnectAfterMs)}getLongPollTransport(){return Qe}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,this.reconnectTimer.reset(),this.sendBuffer=[],this.conn&&(this.conn.close(),this.conn=null),this.transport=e}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let e=Se.appendParams(Se.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)!=="/"?e:e.charAt(1)==="/"?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`}disconnect(e,t,s){this.connectClock++,this.closeWasClean=!0,this.reconnectTimer.reset(),this.teardown(e,t,s)}connect(e){e&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=ge(e)),!this.conn&&(this.connectClock++,this.closeWasClean=!1,this.conn=new this.transport(this.endPointURL()),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=t=>this.onConnError(t),this.conn.onmessage=t=>this.onConnMessage(t),this.conn.onclose=t=>this.onConnClose(t))}log(e,t,s){this.logger(e,t,s)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:t});let n=this.onMessage(r=>{r.ref===t&&(this.off([n]),e(Date.now()-s))});return!0}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.resetHeartbeat(),this.stateChangeCallbacks.open.forEach(([,e])=>e())}heartbeatTimeout(){this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.triggerChanError(),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),ns,"heartbeat timeout"))}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,s){if(!this.conn)return e&&e();this.waitForBufferDone(()=>{this.conn&&(t?this.conn.close(t,s||""):this.conn.close()),this.waitForSocketClosed(()=>{this.conn&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t=1){if(t===5||!this.conn||!this.conn.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(e,t+1)},150*t)}waitForSocketClosed(e,t=1){if(t===5||!this.conn||this.conn.readyState===I.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(e,t+1)},150*t)}onConnClose(e){let t=e&&e.code;this.hasLogger()&&this.log("transport","close",e),this.triggerChanError(),this.clearHeartbeats(),!this.closeWasClean&&t!==1e3&&this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(([,s])=>s(e))}onConnError(e){this.hasLogger()&&this.log("transport",e);let t=this.transport,s=this.establishedConnections;this.stateChangeCallbacks.error.forEach(([,n])=>{n(e,t,s)}),(t===this.transport||s>0)&&this.triggerChanError()}triggerChanError(){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(U.error)})}connectionState(){switch(this.conn&&this.conn.readyState){case I.connecting:return"connecting";case I.open:return"open";case I.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t.joinRef()!==e.joinRef())}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([s])=>e.indexOf(s)===-1)}channel(e,t={}){let s=new rs(e,t,this);return this.channels.push(s),s}push(e){if(this.hasLogger()){let{topic:t,event:s,payload:n,ref:r,join_ref:i}=e;this.log("push",`${t} ${s} (${i}, ${r})`,n)}this.isConnected()?this.encode(e,t=>this.conn.send(t)):this.sendBuffer.push(()=>this.encode(e,t=>this.conn.send(t)))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){this.pendingHeartbeatRef&&!this.isConnected()||(this.pendingHeartbeatRef=this.makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs))}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,t=>{let{topic:s,event:n,payload:r,ref:i,join_ref:o}=t;i&&i===this.pendingHeartbeatRef&&(this.clearHeartbeats(),this.pendingHeartbeatRef=null,this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)),this.hasLogger()&&this.log("receive",`${r.status||""} ${s} ${n} ${i&&"("+i+")"||""}`,r);for(let a=0;a<this.channels.length;a++){const c=this.channels[a];c.isMember(s,n,r,o)&&c.trigger(n,r,i,o)}for(let a=0;a<this.stateChangeCallbacks.message.length;a++){let[,c]=this.stateChangeCallbacks.message[a];c(t)}})}leaveOpenTopic(e){let t=this.channels.find(s=>s.topic===e&&(s.isJoined()||s.isJoining()));t&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${e}"`),t.leave())}},et={};Object.defineProperty(et,"__esModule",{value:!0});var St=et.generateNickname=void 0;const as=["Soratomo","Robosa","35P","Hoshiyomi","Kabumin","Rosetai","Senpai","Sukonbu","Matsurisu","Aqua_Crew","Shiokko","Human","Chocomaid","Subatomo","Mion_Family","Onigiriya","Koronesuki","Kaitakusha","Fandead","Elfriend","Shirogane","Houshou","Heimin","Tatsunoko","Watamate","Lu_Knight"],ls=["Dead_Beat","KFP","Chimken","Takodachi","Chumbud","Teamate","Gator","Irystocrat","Sapling","Kronie","Hooman","Brat","Baerat"],ke={ADJECTIVES:["Lovely","Confident","Robust","Dynamic","Brave","Calm","Sad","Wise","Wild","Clean","Crazy","Sneaky","Silly","Lucid","Leader"],FANNAMES:ls.concat(as)};function gt({min:e=0,max:t=100}){return Math.floor(Math.random()*(t-e+1)+e)}function cs(){const e=ke.ADJECTIVES[gt({max:ke.ADJECTIVES.length-1})],t=ke.FANNAMES[gt({max:ke.FANNAMES.length-1})];return`${e}_${t}`}St=et.generateNickname=cs;const hs=e=>({}),pt=e=>({class:"overscroll-y-none"});function mt(e){let t,s;const n=[e[0]];let r={};for(let i=0;i<n.length;i+=1)r=Rt(r,n[i]);return t=new Zt({props:r}),{c(){N(t.$$.fragment)},l(i){B(t.$$.fragment,i)},m(i,o){D(t,i,o),s=!0},p(i,o){const a=o&1?Mt(n,[It(i[0])]):{};t.$set(a)},i(i){s||(T(t.$$.fragment,i),s=!0)},o(i){S(t.$$.fragment,i),s=!1},d(i){M(t,i)}}}function us(e){let t,s,n,r=e[0]&&mt(e);const i=e[1].default,o=vt(i,e,e[2],pt);return{c(){t=g("div"),r&&r.c(),s=w(),o&&o.c(),this.h()},l(a){t=p(a,"DIV",{class:!0});var c=v(t);r&&r.l(c),c.forEach(f),s=$(a),o&&o.l(a),this.h()},h(){d(t,"class","toast-center toast-bottom toast z-50")},m(a,c){oe(a,t,c),r&&r.m(t,null),oe(a,s,c),o&&o.m(a,c),n=!0},p(a,c){a[0]?r?(r.p(a,c),c&1&&T(r,1)):(r=mt(a),r.c(),T(r,1),r.m(t,null)):r&&(Ct(),S(r,1,1,()=>{r=null}),Tt()),o&&o.p&&(!n||c&4)&&bt(o,i,a,a[2],n?Et(i,a[2],c,hs):_t(a[2]),pt)},i(a){n||(T(r),T(o,a),n=!0)},o(a){S(r),S(o,a),n=!1},d(a){a&&(f(t),f(s)),r&&r.d(),o&&o.d(a)}}}function fs(e){let t,s;return t=new Qt({props:{$$slots:{default:[us]},$$scope:{ctx:e}}}),{c(){N(t.$$.fragment)},l(n){B(t.$$.fragment,n)},m(n,r){D(t,n,r),s=!0},p(n,[r]){const i={};r&5&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){s||(T(t.$$.fragment,n),s=!0)},o(n){S(t.$$.fragment,n),s=!1},d(n){M(t,n)}}}function ds(e,t,s){let n,r,i,o,a;ie(e,ut,l=>s(3,n=l)),ie(e,Xe,l=>s(4,r=l)),ie(e,Ke,l=>s(5,i=l)),ie(e,qe,l=>s(6,o=l)),ie(e,Ut,l=>s(0,a=l));let{$$slots:c={},$$scope:h}=t;return Ze(async()=>{if(fe(Ke,i=localStorage.getItem("nickname")||St(),i),fe(qe,o=localStorage.getItem("userToken"),o),Ke.subscribe(l=>{localStorage.setItem("nickname",l)}),!o)try{const l=await Ot(i);fe(qe,o=l.data.id,o),localStorage.setItem("userToken",o)}catch(l){console.error("Failed to register user: ",l)}fe(Xe,r=new os(Pt,{params:{userToken:o}}),r),fe(ut,n=r.channel("notifications"),n),n.on("shout",l=>{console.log("Received shout:",l)}),n.on("ping",l=>{console.log("Received ping:",l),console.log("Sending pong..."),n==null||n.push("pong",{body:"pong"})}),n.on("collected-broadcast",l=>{console.log("Received collected-broadcast:",l),l.nickname!==i&&Ee({type:G.SUCCESS,message:`User ${l.nickname} found a stamp!`})}),n.on("rally-completed",l=>{console.log("Received rally-completed:",l),l.nickname!==i&&Ee({type:G.SUCCESS,message:`User ${l.nickname} completed the rally!`})}),n.on("msg",l=>{console.log("Received msg:",l),Ee({type:G.SUCCESS,message:l.message})});try{r.connect()}catch(l){console.error(l)}try{n.join().receive("ok",l=>{console.log("Joined notifications channel successfully",l)})}catch(l){console.error(l)}localStorage.getItem("debug")==="true"&&Object.assign(window,{socket:r,notificationsChannel:n,setToast:Ee,notificationsClient:new zt(n)})}),e.$$set=l=>{"$$scope"in l&&s(2,h=l.$$scope)},[a,c,h]}class Ts extends we{constructor(t){super(),$e(this,t,ds,fs,ye,{})}}export{Ts as component,Cs as universal};
