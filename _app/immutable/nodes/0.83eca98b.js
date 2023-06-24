import{S as $e,i as we,s as Re,k as p,y as N,a as S,l as m,m as g,z as D,c as y,h as d,n as f,b as le,C as c,A as I,g as T,d as k,B as U,D as oe,o as tt,E as St,F as gt,q as W,G as pt,r as K,H as ae,I as yt,J as $t,K as wt,L as At,M as jt,N as Te,u as Lt,O as Ht,P as mt,Q as ge,v as Bt,f as Nt,R as Dt,T as It,U as Ut}from"../chunks/index.2cd24925.js";import{s as Ze,n as Qe,u as Xe,a as vt,b as _t,t as Mt}from"../chunks/store.47bd5bfb.js";import{I as G,W as Pt,U as bt,H as Ot,Q as zt,T as xt,a as Vt,B as Jt}from"../chunks/index.dc6e4b00.js";import{f as Et,s as Ft}from"../chunks/const.d51bdaf2.js";import{T as se}from"../chunks/custom.b03ad683.js";import{r as Wt}from"../chunks/client.709012eb.js";const Kt=!0,Gt=()=>({}),ws=Object.freeze(Object.defineProperty({__proto__:null,csr:Kt,load:Gt},Symbol.toStringTag,{value:"Module"}));function qt(e){let t,s,n,r,i,a,o,l,u,h,_,b;return n=new G({props:{src:Pt,theme:"solid",class:"color-gray-900",size:"20"}}),{c(){t=p("button"),s=p("div"),N(n.$$.fragment),r=S(),i=p("span"),a=p("span"),l=S(),u=p("span"),this.h()},l(E){t=m(E,"BUTTON",{class:!0,"data-tip":!0});var A=g(t);s=m(A,"DIV",{class:!0});var $=g(s);D(n.$$.fragment,$),r=y($),i=m($,"SPAN",{class:!0});var j=g(i);a=m(j,"SPAN",{class:!0}),g(a).forEach(d),l=y(j),u=m(j,"SPAN",{class:!0}),g(u).forEach(d),j.forEach(d),$.forEach(d),A.forEach(d),this.h()},h(){f(a,"class",o="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 "+e[1]),f(u,"class",h="relative inline-flex h-3 w-3 rounded-full "+e[1]),f(i,"class","absolute -right-1 -top-1 flex h-3 w-3"),f(s,"class","indicator relative"),f(t,"class","btn-ghost tooltip tooltip-left btn-circle btn"),f(t,"data-tip",_=e[0]==="open"?"Connected":"Disconnected")},m(E,A){le(E,t,A),c(t,s),I(n,s,null),c(s,r),c(s,i),c(i,a),c(i,l),c(i,u),b=!0},p(E,[A]){(!b||A&2&&o!==(o="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 "+E[1]))&&f(a,"class",o),(!b||A&2&&h!==(h="relative inline-flex h-3 w-3 rounded-full "+E[1]))&&f(u,"class",h),(!b||A&1&&_!==(_=E[0]==="open"?"Connected":"Disconnected"))&&f(t,"data-tip",_)},i(E){b||(T(n.$$.fragment,E),b=!0)},o(E){k(n.$$.fragment,E),b=!1},d(E){E&&d(t),U(n)}}}function Qt(e){switch(e){case"connecting":return"bg-warning";case"open":return"bg-success";case"closing":return"bg-warning";case"closed":return"bg-error"}}function Xt(e,t,s){let n,r;oe(e,Ze,a=>s(2,r=a));let i="connecting";return r==null||r.onClose(()=>{console.log("Lost connection to server"),s(0,i="closed")}),r==null||r.onOpen(()=>{console.log("Connection to server reestablished"),s(0,i="open")}),tt(()=>{setTimeout(()=>{s(0,i=r==null?void 0:r.connectionState())},5e3)}),e.$$.update=()=>{e.$$.dirty&1&&s(1,n=Qt(i))},[i,n]}class Yt extends $e{constructor(t){super(),we(this,t,Xt,qt,Re,{})}}function Zt(e){let t,s,n,r,i,a,o;return n=new G({props:{src:Jt,theme:"solid",class:"color-gray-900",size:"20"}}),{c(){t=p("li"),s=p("a"),N(n.$$.fragment),r=W("Debug"),this.h()},l(l){t=m(l,"LI",{});var u=g(t);s=m(u,"A",{href:!0});var h=g(s);D(n.$$.fragment,h),r=K(h,"Debug"),h.forEach(d),u.forEach(d),this.h()},h(){f(s,"href","/debug")},m(l,u){le(l,t,u),c(t,s),I(n,s,null),c(s,r),i=!0,a||(o=ae(s,"click",e[8]),a=!0)},p:jt,i(l){i||(T(n.$$.fragment,l),i=!0)},o(l){k(n.$$.fragment,l),i=!1},d(l){l&&d(t),U(n),a=!1,o()}}}function es(e){let t,s,n,r,i,a,o,l,u,h,_,b,E,A,$,j,q,Ae,Q,je,Le,O,ne,He,C,he,z,X,Be,Ne,ce,x,Y,De,Ie,ue,V,Z,Ue,Me,fe,J,ee,Pe,Oe,de,F,te,ze,xe,ie,Ve,st;q=new G({props:{src:bt,size:"20",theme:"solid"}}),Q=new Yt({});const Je=e[2].default,w=St(Je,e,e[1],null);X=new G({props:{src:Ot,theme:"solid",class:"color-gray-900",size:"20"}}),Y=new G({props:{src:zt,theme:"solid",class:"color-gray-900",size:"20"}}),Z=new G({props:{src:bt,theme:"solid",class:"color-gray-900",size:"20"}}),ee=new G({props:{src:xt,theme:"solid",class:"color-gray-900",size:"20"}}),te=new G({props:{src:Vt,theme:"solid",class:"color-gray-900",size:"20"}});let B=Zt(e);return{c(){t=p("div"),s=p("input"),n=S(),r=p("div"),i=p("div"),a=p("div"),o=p("label"),l=gt("svg"),u=gt("path"),h=S(),_=p("div"),b=p("a"),E=W("HoloQuest"),A=S(),$=p("div"),j=p("a"),N(q.$$.fragment),Ae=S(),N(Q.$$.fragment),je=S(),w&&w.c(),Le=S(),O=p("div"),ne=p("label"),He=S(),C=p("ul"),he=p("li"),z=p("a"),N(X.$$.fragment),Be=W("Home"),Ne=S(),ce=p("li"),x=p("a"),N(Y.$$.fragment),De=W("Scanner"),Ie=S(),ue=p("li"),V=p("a"),N(Z.$$.fragment),Ue=W("Profile"),Me=S(),fe=p("li"),J=p("a"),N(ee.$$.fragment),Pe=W("Leaderboard"),Oe=S(),de=p("li"),F=p("a"),N(te.$$.fragment),ze=W("About"),xe=S(),B&&B.c(),this.h()},l(v){t=m(v,"DIV",{class:!0});var L=g(t);s=m(L,"INPUT",{id:!0,type:!0,class:!0}),n=y(L),r=m(L,"DIV",{class:!0});var _e=g(r);i=m(_e,"DIV",{class:!0});var re=g(i);a=m(re,"DIV",{class:!0});var nt=g(a);o=m(nt,"LABEL",{for:!0,class:!0});var it=g(o);l=pt(it,"svg",{xmlns:!0,fill:!0,viewBox:!0,class:!0});var rt=g(l);u=pt(rt,"path",{"stroke-linecap":!0,"stroke-linejoin":!0,"stroke-width":!0,d:!0}),g(u).forEach(d),rt.forEach(d),it.forEach(d),nt.forEach(d),h=y(re),_=m(re,"DIV",{class:!0});var ot=g(_);b=m(ot,"A",{class:!0,href:!0});var at=g(b);E=K(at,"HoloQuest"),at.forEach(d),ot.forEach(d),A=y(re),$=m(re,"DIV",{class:!0});var be=g($);j=m(be,"A",{href:!0,class:!0});var lt=g(j);D(q.$$.fragment,lt),lt.forEach(d),Ae=y(be),D(Q.$$.fragment,be),be.forEach(d),re.forEach(d),je=y(_e),w&&w.l(_e),_e.forEach(d),Le=y(L),O=m(L,"DIV",{class:!0});var Ee=g(O);ne=m(Ee,"LABEL",{for:!0,class:!0}),g(ne).forEach(d),He=y(Ee),C=m(Ee,"UL",{class:!0});var H=g(C);he=m(H,"LI",{});var ht=g(he);z=m(ht,"A",{href:!0});var Fe=g(z);D(X.$$.fragment,Fe),Be=K(Fe,"Home"),Fe.forEach(d),ht.forEach(d),Ne=y(H),ce=m(H,"LI",{});var ct=g(ce);x=m(ct,"A",{href:!0});var We=g(x);D(Y.$$.fragment,We),De=K(We,"Scanner"),We.forEach(d),ct.forEach(d),Ie=y(H),ue=m(H,"LI",{});var ut=g(ue);V=m(ut,"A",{href:!0});var Ke=g(V);D(Z.$$.fragment,Ke),Ue=K(Ke,"Profile"),Ke.forEach(d),ut.forEach(d),Me=y(H),fe=m(H,"LI",{});var ft=g(fe);J=m(ft,"A",{href:!0});var Ge=g(J);D(ee.$$.fragment,Ge),Pe=K(Ge,"Leaderboard"),Ge.forEach(d),ft.forEach(d),Oe=y(H),de=m(H,"LI",{});var dt=g(de);F=m(dt,"A",{href:!0});var qe=g(F);D(te.$$.fragment,qe),ze=K(qe,"About"),qe.forEach(d),dt.forEach(d),xe=y(H),B&&B.l(H),H.forEach(d),Ee.forEach(d),L.forEach(d),this.h()},h(){f(s,"id","drawer-nav"),f(s,"type","checkbox"),f(s,"class","drawer-toggle"),f(u,"stroke-linecap","round"),f(u,"stroke-linejoin","round"),f(u,"stroke-width","2"),f(u,"d","M4 6h16M4 12h16M4 18h16"),f(l,"xmlns","http://www.w3.org/2000/svg"),f(l,"fill","none"),f(l,"viewBox","0 0 24 24"),f(l,"class","inline-block h-6 w-6 stroke-current"),f(o,"for","drawer-nav"),f(o,"class","btn-ghost btn-square btn"),f(a,"class","absolute left-1 flex-none lg:hidden"),f(b,"class","btn-ghost btn bg-gradient-to-br from-primary to-secondary bg-clip-text font-geologica text-xl normal-case text-transparent"),f(b,"href","/"),f(_,"class","flex"),f(j,"href","/profile"),f(j,"class","btn-ghost btn-circle btn"),f($,"class","absolute right-1 flex"),f(i,"class","navbar relative mb-4 flex w-full justify-center bg-base-300"),f(r,"class","drawer-content flex flex-col"),f(ne,"for","drawer-nav"),f(ne,"class","drawer-overlay"),f(z,"href","/"),f(x,"href","/scanner"),f(V,"href","/profile"),f(J,"href","/leaderboard"),f(F,"href","/about"),f(C,"class","menu h-full w-60 bg-base-200 p-4"),f(O,"class","drawer-side"),f(t,"class","drawer")},m(v,L){le(v,t,L),c(t,s),c(t,n),c(t,r),c(r,i),c(i,a),c(a,o),c(o,l),c(l,u),c(i,h),c(i,_),c(_,b),c(b,E),c(i,A),c(i,$),c($,j),I(q,j,null),c($,Ae),I(Q,$,null),c(r,je),w&&w.m(r,null),c(t,Le),c(t,O),c(O,ne),c(O,He),c(O,C),c(C,he),c(he,z),I(X,z,null),c(z,Be),c(C,Ne),c(C,ce),c(ce,x),I(Y,x,null),c(x,De),c(C,Ie),c(C,ue),c(ue,V),I(Z,V,null),c(V,Ue),c(C,Me),c(C,fe),c(fe,J),I(ee,J,null),c(J,Pe),c(C,Oe),c(C,de),c(de,F),I(te,F,null),c(F,ze),c(C,xe),B&&B.m(C,null),ie=!0,Ve||(st=[ae(z,"click",e[3]),ae(x,"click",e[4]),ae(V,"click",e[5]),ae(J,"click",e[6]),ae(F,"click",e[7])],Ve=!0)},p(v,[L]){w&&w.p&&(!ie||L&2)&&yt(w,Je,v,v[1],ie?wt(Je,v[1],L,null):$t(v[1]),null),B.p(v,L)},i(v){ie||(T(q.$$.fragment,v),T(Q.$$.fragment,v),T(w,v),T(X.$$.fragment,v),T(Y.$$.fragment,v),T(Z.$$.fragment,v),T(ee.$$.fragment,v),T(te.$$.fragment,v),T(B),ie=!0)},o(v){k(q.$$.fragment,v),k(Q.$$.fragment,v),k(w,v),k(X.$$.fragment,v),k(Y.$$.fragment,v),k(Z.$$.fragment,v),k(ee.$$.fragment,v),k(te.$$.fragment,v),k(B),ie=!1},d(v){v&&d(t),U(q),U(Q),w&&w.d(v),U(X),U(Y),U(Z),U(ee),U(te),B&&B.d(),Ve=!1,At(st)}}}function ts(e,t,s){let{$$slots:n={},$$scope:r}=t,i;tt(()=>{s(0,i=document.querySelector(".drawer-toggle"))});const a=()=>{s(0,i.checked=!1,i)},o=()=>{s(0,i.checked=!1,i)},l=()=>{s(0,i.checked=!1,i)},u=()=>{s(0,i.checked=!1,i)},h=()=>{s(0,i.checked=!1,i)},_=()=>{s(0,i.checked=!1,i)};return e.$$set=b=>{"$$scope"in b&&s(1,r=b.$$scope)},[i,r,n,a,o,l,u,h,_]}class ss extends $e{constructor(t){super(),we(this,t,ts,es,Re,{})}}function ns(e){let t,s,n,r,i,a,o,l;return{c(){t=p("div"),s=p("div"),n=p("div"),r=p("span"),i=W(e[1]),this.h()},l(u){t=m(u,"DIV",{class:!0});var h=g(t);s=m(h,"DIV",{class:!0});var _=g(s);n=m(_,"DIV",{class:!0});var b=g(n);r=m(b,"SPAN",{});var E=g(r);i=K(E,e[1]),E.forEach(d),b.forEach(d),_.forEach(d),h.forEach(d),this.h()},h(){f(n,"class","text-center"),f(s,"class",a="alert alert-"+e[0]),Te(s,"alert-success",e[0]===se.SUCCESS),Te(s,"alert-error",e[0]===se.ERROR),f(t,"class","toast-center toast-bottom toast w-60 -z-50")},m(u,h){le(u,t,h),c(t,s),c(s,n),c(n,r),c(r,i),l=!0},p(u,[h]){(!l||h&2)&&Lt(i,u[1]),(!l||h&1&&a!==(a="alert alert-"+u[0]))&&f(s,"class",a),(!l||h&1)&&Te(s,"alert-success",u[0]===se.SUCCESS),(!l||h&1)&&Te(s,"alert-error",u[0]===se.ERROR)},i(u){l||(Ht(()=>{l&&(o||(o=mt(s,Et,{},!0)),o.run(1))}),l=!0)},o(u){o||(o=mt(s,Et,{},!1)),o.run(0),l=!1},d(u){u&&d(t),u&&o&&o.end()}}}function is(e,t,s){let{type:n=se.SUCCESS}=t,{message:r}=t;return e.$$set=i=>{"type"in i&&s(0,n=i.type),"message"in i&&s(1,r=i.message)},[n,r]}class rs extends $e{constructor(t){super(),we(this,t,is,ns,Re,{type:0,message:1})}}var me=e=>typeof e=="function"?e:function(){return e},os=typeof self<"u"?self:null,pe=typeof window<"u"?window:null,ve=os||pe||ve,as="2.0.0",M={connecting:0,open:1,closing:2,closed:3},ls=1e4,hs=1e3,R={closed:"closed",errored:"errored",joined:"joined",joining:"joining",leaving:"leaving"},P={close:"phx_close",error:"phx_error",join:"phx_join",reply:"phx_reply",leave:"phx_leave"},et={longpoll:"longpoll",websocket:"websocket"},cs={complete:4},Ce=class{constructor(e,t,s,n){this.channel=e,this.event=t,this.payload=s||function(){return{}},this.receivedResp=null,this.timeout=n,this.timeoutTimer=null,this.recHooks=[],this.sent=!1}resend(e){this.timeout=e,this.reset(),this.send()}send(){this.hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload(),ref:this.ref,join_ref:this.channel.joinRef()}))}receive(e,t){return this.hasReceived(e)&&t(this.receivedResp.response),this.recHooks.push({status:e,callback:t}),this}reset(){this.cancelRefEvent(),this.ref=null,this.refEvent=null,this.receivedResp=null,this.sent=!1}matchReceive({status:e,response:t,_ref:s}){this.recHooks.filter(n=>n.status===e).forEach(n=>n.callback(t))}cancelRefEvent(){this.refEvent&&this.channel.off(this.refEvent)}cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=null}startTimeout(){this.timeoutTimer&&this.cancelTimeout(),this.ref=this.channel.socket.makeRef(),this.refEvent=this.channel.replyEventName(this.ref),this.channel.on(this.refEvent,e=>{this.cancelRefEvent(),this.cancelTimeout(),this.receivedResp=e,this.matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout)}hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}trigger(e,t){this.channel.trigger(this.refEvent,{status:e,response:t})}},Rt=class{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=null,this.tries=0}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}},us=class{constructor(e,t,s){this.state=R.closed,this.topic=e,this.params=me(t||{}),this.socket=s,this.bindings=[],this.bindingRef=0,this.timeout=this.socket.timeout,this.joinedOnce=!1,this.joinPush=new Ce(this,P.join,this.params,this.timeout),this.pushBuffer=[],this.stateChangeRefs=[],this.rejoinTimer=new Rt(()=>{this.socket.isConnected()&&this.rejoin()},this.socket.rejoinAfterMs),this.stateChangeRefs.push(this.socket.onError(()=>this.rejoinTimer.reset())),this.stateChangeRefs.push(this.socket.onOpen(()=>{this.rejoinTimer.reset(),this.isErrored()&&this.rejoin()})),this.joinPush.receive("ok",()=>{this.state=R.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(n=>n.send()),this.pushBuffer=[]}),this.joinPush.receive("error",()=>{this.state=R.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.onClose(()=>{this.rejoinTimer.reset(),this.socket.hasLogger()&&this.socket.log("channel",`close ${this.topic} ${this.joinRef()}`),this.state=R.closed,this.socket.remove(this)}),this.onError(n=>{this.socket.hasLogger()&&this.socket.log("channel",`error ${this.topic}`,n),this.isJoining()&&this.joinPush.reset(),this.state=R.errored,this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.joinPush.receive("timeout",()=>{this.socket.hasLogger()&&this.socket.log("channel",`timeout ${this.topic} (${this.joinRef()})`,this.joinPush.timeout),new Ce(this,P.leave,me({}),this.timeout).send(),this.state=R.errored,this.joinPush.reset(),this.socket.isConnected()&&this.rejoinTimer.scheduleTimeout()}),this.on(P.reply,(n,r)=>{this.trigger(this.replyEventName(r),n)})}join(e=this.timeout){if(this.joinedOnce)throw new Error("tried to join multiple times. 'join' can only be called a single time per channel instance");return this.timeout=e,this.joinedOnce=!0,this.rejoin(),this.joinPush}onClose(e){this.on(P.close,e)}onError(e){return this.on(P.error,t=>e(t))}on(e,t){let s=this.bindingRef++;return this.bindings.push({event:e,ref:s,callback:t}),s}off(e,t){this.bindings=this.bindings.filter(s=>!(s.event===e&&(typeof t>"u"||t===s.ref)))}canPush(){return this.socket.isConnected()&&this.isJoined()}push(e,t,s=this.timeout){if(t=t||{},!this.joinedOnce)throw new Error(`tried to push '${e}' to '${this.topic}' before joining. Use channel.join() before pushing events`);let n=new Ce(this,e,function(){return t},s);return this.canPush()?n.send():(n.startTimeout(),this.pushBuffer.push(n)),n}leave(e=this.timeout){this.rejoinTimer.reset(),this.joinPush.cancelTimeout(),this.state=R.leaving;let t=()=>{this.socket.hasLogger()&&this.socket.log("channel",`leave ${this.topic}`),this.trigger(P.close,"leave")},s=new Ce(this,P.leave,me({}),e);return s.receive("ok",()=>t()).receive("timeout",()=>t()),s.send(),this.canPush()||s.trigger("ok",{}),s}onMessage(e,t,s){return t}isMember(e,t,s,n){return this.topic!==e?!1:n&&n!==this.joinRef()?(this.socket.hasLogger()&&this.socket.log("channel","dropping outdated message",{topic:e,event:t,payload:s,joinRef:n}),!1):!0}joinRef(){return this.joinPush.ref}rejoin(e=this.timeout){this.isLeaving()||(this.socket.leaveOpenTopic(this.topic),this.state=R.joining,this.joinPush.resend(e))}trigger(e,t,s,n){let r=this.onMessage(e,t,s,n);if(t&&!r)throw new Error("channel onMessage callbacks must return the payload, modified or unmodified");let i=this.bindings.filter(a=>a.event===e);for(let a=0;a<i.length;a++)i[a].callback(r,s,n||this.joinRef())}replyEventName(e){return`chan_reply_${e}`}isClosed(){return this.state===R.closed}isErrored(){return this.state===R.errored}isJoined(){return this.state===R.joined}isJoining(){return this.state===R.joining}isLeaving(){return this.state===R.leaving}},ye=class{static request(e,t,s,n,r,i,a){if(ve.XDomainRequest){let o=new ve.XDomainRequest;return this.xdomainRequest(o,e,t,n,r,i,a)}else{let o=new ve.XMLHttpRequest;return this.xhrRequest(o,e,t,s,n,r,i,a)}}static xdomainRequest(e,t,s,n,r,i,a){return e.timeout=r,e.open(t,s),e.onload=()=>{let o=this.parseJSON(e.responseText);a&&a(o)},i&&(e.ontimeout=i),e.onprogress=()=>{},e.send(n),e}static xhrRequest(e,t,s,n,r,i,a,o){return e.open(t,s,!0),e.timeout=i,e.setRequestHeader("Content-Type",n),e.onerror=()=>o&&o(null),e.onreadystatechange=()=>{if(e.readyState===cs.complete&&o){let l=this.parseJSON(e.responseText);o(l)}},a&&(e.ontimeout=a),e.send(r),e}static parseJSON(e){if(!e||e==="")return null;try{return JSON.parse(e)}catch{return console&&console.log("failed to parse JSON response",e),null}}static serialize(e,t){let s=[];for(var n in e){if(!Object.prototype.hasOwnProperty.call(e,n))continue;let r=t?`${t}[${n}]`:n,i=e[n];typeof i=="object"?s.push(this.serialize(i,r)):s.push(encodeURIComponent(r)+"="+encodeURIComponent(i))}return s.join("&")}static appendParams(e,t){if(Object.keys(t).length===0)return e;let s=e.match(/\?/)?"&":"?";return`${e}${s}${this.serialize(t)}`}},Ye=class{constructor(e){this.endPoint=null,this.token=null,this.skipHeartbeat=!0,this.reqs=new Set,this.awaitingBatchAck=!1,this.currentBatch=null,this.currentBatchTimer=null,this.batchBuffer=[],this.onopen=function(){},this.onerror=function(){},this.onmessage=function(){},this.onclose=function(){},this.pollEndpoint=this.normalizeEndpoint(e),this.readyState=M.connecting,this.poll()}normalizeEndpoint(e){return e.replace("ws://","http://").replace("wss://","https://").replace(new RegExp("(.*)/"+et.websocket),"$1/"+et.longpoll)}endpointURL(){return ye.appendParams(this.pollEndpoint,{token:this.token})}closeAndRetry(e,t,s){this.close(e,t,s),this.readyState=M.connecting}ontimeout(){this.onerror("timeout"),this.closeAndRetry(1005,"timeout",!1)}isActive(){return this.readyState===M.open||this.readyState===M.connecting}poll(){this.ajax("GET","application/json",null,()=>this.ontimeout(),e=>{if(e){var{status:t,token:s,messages:n}=e;this.token=s}else t=0;switch(t){case 200:n.forEach(r=>{setTimeout(()=>this.onmessage({data:r}),0)}),this.poll();break;case 204:this.poll();break;case 410:this.readyState=M.open,this.onopen({}),this.poll();break;case 403:this.onerror(403),this.close(1008,"forbidden",!1);break;case 0:case 500:this.onerror(500),this.closeAndRetry(1011,"internal server error",500);break;default:throw new Error(`unhandled poll status ${t}`)}})}send(e){this.currentBatch?this.currentBatch.push(e):this.awaitingBatchAck?this.batchBuffer.push(e):(this.currentBatch=[e],this.currentBatchTimer=setTimeout(()=>{this.batchSend(this.currentBatch),this.currentBatch=null},0))}batchSend(e){this.awaitingBatchAck=!0,this.ajax("POST","application/x-ndjson",e.join(`
`),()=>this.onerror("timeout"),t=>{this.awaitingBatchAck=!1,!t||t.status!==200?(this.onerror(t&&t.status),this.closeAndRetry(1011,"internal server error",!1)):this.batchBuffer.length>0&&(this.batchSend(this.batchBuffer),this.batchBuffer=[])})}close(e,t,s){for(let r of this.reqs)r.abort();this.readyState=M.closed;let n=Object.assign({code:1e3,reason:void 0,wasClean:!0},{code:e,reason:t,wasClean:s});this.batchBuffer=[],clearTimeout(this.currentBatchTimer),this.currentBatchTimer=null,typeof CloseEvent<"u"?this.onclose(new CloseEvent("close",n)):this.onclose(n)}ajax(e,t,s,n,r){let i,a=()=>{this.reqs.delete(i),n()};i=ye.request(e,this.endpointURL(),t,s,this.timeout,a,o=>{this.reqs.delete(i),this.isActive()&&r(o)}),this.reqs.add(i)}},ke={HEADER_LENGTH:1,META_LENGTH:4,KINDS:{push:0,reply:1,broadcast:2},encode(e,t){if(e.payload.constructor===ArrayBuffer)return t(this.binaryEncode(e));{let s=[e.join_ref,e.ref,e.topic,e.event,e.payload];return t(JSON.stringify(s))}},decode(e,t){if(e.constructor===ArrayBuffer)return t(this.binaryDecode(e));{let[s,n,r,i,a]=JSON.parse(e);return t({join_ref:s,ref:n,topic:r,event:i,payload:a})}},binaryEncode(e){let{join_ref:t,ref:s,event:n,topic:r,payload:i}=e,a=this.META_LENGTH+t.length+s.length+r.length+n.length,o=new ArrayBuffer(this.HEADER_LENGTH+a),l=new DataView(o),u=0;l.setUint8(u++,this.KINDS.push),l.setUint8(u++,t.length),l.setUint8(u++,s.length),l.setUint8(u++,r.length),l.setUint8(u++,n.length),Array.from(t,_=>l.setUint8(u++,_.charCodeAt(0))),Array.from(s,_=>l.setUint8(u++,_.charCodeAt(0))),Array.from(r,_=>l.setUint8(u++,_.charCodeAt(0))),Array.from(n,_=>l.setUint8(u++,_.charCodeAt(0)));var h=new Uint8Array(o.byteLength+i.byteLength);return h.set(new Uint8Array(o),0),h.set(new Uint8Array(i),o.byteLength),h.buffer},binaryDecode(e){let t=new DataView(e),s=t.getUint8(0),n=new TextDecoder;switch(s){case this.KINDS.push:return this.decodePush(e,t,n);case this.KINDS.reply:return this.decodeReply(e,t,n);case this.KINDS.broadcast:return this.decodeBroadcast(e,t,n)}},decodePush(e,t,s){let n=t.getUint8(1),r=t.getUint8(2),i=t.getUint8(3),a=this.HEADER_LENGTH+this.META_LENGTH-1,o=s.decode(e.slice(a,a+n));a=a+n;let l=s.decode(e.slice(a,a+r));a=a+r;let u=s.decode(e.slice(a,a+i));a=a+i;let h=e.slice(a,e.byteLength);return{join_ref:o,ref:null,topic:l,event:u,payload:h}},decodeReply(e,t,s){let n=t.getUint8(1),r=t.getUint8(2),i=t.getUint8(3),a=t.getUint8(4),o=this.HEADER_LENGTH+this.META_LENGTH,l=s.decode(e.slice(o,o+n));o=o+n;let u=s.decode(e.slice(o,o+r));o=o+r;let h=s.decode(e.slice(o,o+i));o=o+i;let _=s.decode(e.slice(o,o+a));o=o+a;let b=e.slice(o,e.byteLength),E={status:_,response:b};return{join_ref:l,ref:u,topic:h,event:P.reply,payload:E}},decodeBroadcast(e,t,s){let n=t.getUint8(1),r=t.getUint8(2),i=this.HEADER_LENGTH+2,a=s.decode(e.slice(i,i+n));i=i+n;let o=s.decode(e.slice(i,i+r));i=i+r;let l=e.slice(i,e.byteLength);return{join_ref:null,ref:null,topic:a,event:o,payload:l}}},fs=class{constructor(e,t={}){this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.channels=[],this.sendBuffer=[],this.ref=0,this.timeout=t.timeout||ls,this.transport=t.transport||ve.WebSocket||Ye,this.establishedConnections=0,this.defaultEncoder=ke.encode.bind(ke),this.defaultDecoder=ke.decode.bind(ke),this.closeWasClean=!1,this.binaryType=t.binaryType||"arraybuffer",this.connectClock=1,this.transport!==Ye?(this.encode=t.encode||this.defaultEncoder,this.decode=t.decode||this.defaultDecoder):(this.encode=this.defaultEncoder,this.decode=this.defaultDecoder);let s=null;pe&&pe.addEventListener&&(pe.addEventListener("pagehide",n=>{this.conn&&(this.disconnect(),s=this.connectClock)}),pe.addEventListener("pageshow",n=>{s===this.connectClock&&(s=null,this.connect())})),this.heartbeatIntervalMs=t.heartbeatIntervalMs||3e4,this.rejoinAfterMs=n=>t.rejoinAfterMs?t.rejoinAfterMs(n):[1e3,2e3,5e3][n-1]||1e4,this.reconnectAfterMs=n=>t.reconnectAfterMs?t.reconnectAfterMs(n):[10,50,100,150,200,250,500,1e3,2e3][n-1]||5e3,this.logger=t.logger||null,this.longpollerTimeout=t.longpollerTimeout||2e4,this.params=me(t.params||{}),this.endPoint=`${e}/${et.websocket}`,this.vsn=t.vsn||as,this.heartbeatTimeoutTimer=null,this.heartbeatTimer=null,this.pendingHeartbeatRef=null,this.reconnectTimer=new Rt(()=>{this.teardown(()=>this.connect())},this.reconnectAfterMs)}getLongPollTransport(){return Ye}replaceTransport(e){this.connectClock++,this.closeWasClean=!0,this.reconnectTimer.reset(),this.sendBuffer=[],this.conn&&(this.conn.close(),this.conn=null),this.transport=e}protocol(){return location.protocol.match(/^https/)?"wss":"ws"}endPointURL(){let e=ye.appendParams(ye.appendParams(this.endPoint,this.params()),{vsn:this.vsn});return e.charAt(0)!=="/"?e:e.charAt(1)==="/"?`${this.protocol()}:${e}`:`${this.protocol()}://${location.host}${e}`}disconnect(e,t,s){this.connectClock++,this.closeWasClean=!0,this.reconnectTimer.reset(),this.teardown(e,t,s)}connect(e){e&&(console&&console.log("passing params to connect is deprecated. Instead pass :params to the Socket constructor"),this.params=me(e)),!this.conn&&(this.connectClock++,this.closeWasClean=!1,this.conn=new this.transport(this.endPointURL()),this.conn.binaryType=this.binaryType,this.conn.timeout=this.longpollerTimeout,this.conn.onopen=()=>this.onConnOpen(),this.conn.onerror=t=>this.onConnError(t),this.conn.onmessage=t=>this.onConnMessage(t),this.conn.onclose=t=>this.onConnClose(t))}log(e,t,s){this.logger(e,t,s)}hasLogger(){return this.logger!==null}onOpen(e){let t=this.makeRef();return this.stateChangeCallbacks.open.push([t,e]),t}onClose(e){let t=this.makeRef();return this.stateChangeCallbacks.close.push([t,e]),t}onError(e){let t=this.makeRef();return this.stateChangeCallbacks.error.push([t,e]),t}onMessage(e){let t=this.makeRef();return this.stateChangeCallbacks.message.push([t,e]),t}ping(e){if(!this.isConnected())return!1;let t=this.makeRef(),s=Date.now();this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:t});let n=this.onMessage(r=>{r.ref===t&&(this.off([n]),e(Date.now()-s))});return!0}clearHeartbeats(){clearTimeout(this.heartbeatTimer),clearTimeout(this.heartbeatTimeoutTimer)}onConnOpen(){this.hasLogger()&&this.log("transport",`connected to ${this.endPointURL()}`),this.closeWasClean=!1,this.establishedConnections++,this.flushSendBuffer(),this.reconnectTimer.reset(),this.resetHeartbeat(),this.stateChangeCallbacks.open.forEach(([,e])=>e())}heartbeatTimeout(){this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null,this.hasLogger()&&this.log("transport","heartbeat timeout. Attempting to re-establish connection"),this.triggerChanError(),this.closeWasClean=!1,this.teardown(()=>this.reconnectTimer.scheduleTimeout(),hs,"heartbeat timeout"))}resetHeartbeat(){this.conn&&this.conn.skipHeartbeat||(this.pendingHeartbeatRef=null,this.clearHeartbeats(),this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs))}teardown(e,t,s){if(!this.conn)return e&&e();this.waitForBufferDone(()=>{this.conn&&(t?this.conn.close(t,s||""):this.conn.close()),this.waitForSocketClosed(()=>{this.conn&&(this.conn.onopen=function(){},this.conn.onerror=function(){},this.conn.onmessage=function(){},this.conn.onclose=function(){},this.conn=null),e&&e()})})}waitForBufferDone(e,t=1){if(t===5||!this.conn||!this.conn.bufferedAmount){e();return}setTimeout(()=>{this.waitForBufferDone(e,t+1)},150*t)}waitForSocketClosed(e,t=1){if(t===5||!this.conn||this.conn.readyState===M.closed){e();return}setTimeout(()=>{this.waitForSocketClosed(e,t+1)},150*t)}onConnClose(e){let t=e&&e.code;this.hasLogger()&&this.log("transport","close",e),this.triggerChanError(),this.clearHeartbeats(),!this.closeWasClean&&t!==1e3&&this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(([,s])=>s(e))}onConnError(e){this.hasLogger()&&this.log("transport",e);let t=this.transport,s=this.establishedConnections;this.stateChangeCallbacks.error.forEach(([,n])=>{n(e,t,s)}),(t===this.transport||s>0)&&this.triggerChanError()}triggerChanError(){this.channels.forEach(e=>{e.isErrored()||e.isLeaving()||e.isClosed()||e.trigger(P.error)})}connectionState(){switch(this.conn&&this.conn.readyState){case M.connecting:return"connecting";case M.open:return"open";case M.closing:return"closing";default:return"closed"}}isConnected(){return this.connectionState()==="open"}remove(e){this.off(e.stateChangeRefs),this.channels=this.channels.filter(t=>t.joinRef()!==e.joinRef())}off(e){for(let t in this.stateChangeCallbacks)this.stateChangeCallbacks[t]=this.stateChangeCallbacks[t].filter(([s])=>e.indexOf(s)===-1)}channel(e,t={}){let s=new us(e,t,this);return this.channels.push(s),s}push(e){if(this.hasLogger()){let{topic:t,event:s,payload:n,ref:r,join_ref:i}=e;this.log("push",`${t} ${s} (${i}, ${r})`,n)}this.isConnected()?this.encode(e,t=>this.conn.send(t)):this.sendBuffer.push(()=>this.encode(e,t=>this.conn.send(t)))}makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}sendHeartbeat(){this.pendingHeartbeatRef&&!this.isConnected()||(this.pendingHeartbeatRef=this.makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.heartbeatTimeoutTimer=setTimeout(()=>this.heartbeatTimeout(),this.heartbeatIntervalMs))}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}onConnMessage(e){this.decode(e.data,t=>{let{topic:s,event:n,payload:r,ref:i,join_ref:a}=t;i&&i===this.pendingHeartbeatRef&&(this.clearHeartbeats(),this.pendingHeartbeatRef=null,this.heartbeatTimer=setTimeout(()=>this.sendHeartbeat(),this.heartbeatIntervalMs)),this.hasLogger()&&this.log("receive",`${r.status||""} ${s} ${n} ${i&&"("+i+")"||""}`,r);for(let o=0;o<this.channels.length;o++){const l=this.channels[o];l.isMember(s,n,r,a)&&l.trigger(n,r,i,a)}for(let o=0;o<this.stateChangeCallbacks.message.length;o++){let[,l]=this.stateChangeCallbacks.message[o];l(t)}})}leaveOpenTopic(e){let t=this.channels.find(s=>s.topic===e&&(s.isJoined()||s.isJoining()));t&&(this.hasLogger()&&this.log("transport",`leaving duplicate topic "${e}"`),t.leave())}};function ds(e,t){const s=e.channel(t,{});return s.on("shout",n=>{console.log("Received shout:",n)}),s.on("ping",n=>{console.log("Received ping:",n),console.log("Sending pong..."),s.push("pong",{body:"pong"})}),s}const gs=["Soratomo","Robosa","35P","Hoshiyomi","Kabumin","Rosetai","Senpai","Sukonbu","Matsurisu","Aqua_Crew","Shiokko","Human","Chocomaid","Subatomo","Mion_Family","Onigiriya","Koronesuki","Kaitakusha","Fandead","Elfriend","Shirogane","Houshou","Heimin","Tatsunoko","Watamate","Lu_Knight"],ps=["Dead_Beat","KFP","Chimken","Takodachi","Chumbud","Teamate","Gator","Irystocrat","Sapling","Kronie","Hooman","Brat","Baerat"],Se={ADJECTIVES:["Lovely","Confident","Robust","Dynamic","Brave","Calm","Sad","Wise","Wild","Clean","Crazy","Sneaky","Silly","Lucid","Leader"],FANNAMES:ps.concat(gs)};function Tt({min:e=0,max:t=100}){return Math.floor(Math.random()*(t-e+1)+e)}function ms(){const e=Se.ADJECTIVES[Tt({max:Se.ADJECTIVES.length-1})],t=Se.FANNAMES[Tt({max:Se.FANNAMES.length-1})];return`${e}_${t}`}const vs=e=>({}),Ct=e=>({class:"overscroll-y-none"});function kt(e){let t,s;const n=[e[0]];let r={};for(let i=0;i<n.length;i+=1)r=Dt(r,n[i]);return t=new rs({props:r}),{c(){N(t.$$.fragment)},l(i){D(t.$$.fragment,i)},m(i,a){I(t,i,a),s=!0},p(i,a){const o=a&1?It(n,[Ut(i[0])]):{};t.$set(o)},i(i){s||(T(t.$$.fragment,i),s=!0)},o(i){k(t.$$.fragment,i),s=!1},d(i){U(t,i)}}}function _s(e){let t,s,n,r=e[0]&&kt(e);const i=e[1].default,a=St(i,e,e[2],Ct);return{c(){t=p("div"),r&&r.c(),s=S(),a&&a.c(),this.h()},l(o){t=m(o,"DIV",{class:!0});var l=g(t);r&&r.l(l),l.forEach(d),s=y(o),a&&a.l(o),this.h()},h(){f(t,"class","toast-center toast-bottom toast z-50")},m(o,l){le(o,t,l),r&&r.m(t,null),le(o,s,l),a&&a.m(o,l),n=!0},p(o,l){o[0]?r?(r.p(o,l),l&1&&T(r,1)):(r=kt(o),r.c(),T(r,1),r.m(t,null)):r&&(Bt(),k(r,1,1,()=>{r=null}),Nt()),a&&a.p&&(!n||l&4)&&yt(a,i,o,o[2],n?wt(i,o[2],l,vs):$t(o[2]),Ct)},i(o){n||(T(r),T(a,o),n=!0)},o(o){k(r),k(a,o),n=!1},d(o){o&&d(t),r&&r.d(),o&&d(s),a&&a.d(o)}}}function bs(e){let t,s;return t=new ss({props:{$$slots:{default:[_s]},$$scope:{ctx:e}}}),{c(){N(t.$$.fragment)},l(n){D(t.$$.fragment,n)},m(n,r){I(t,n,r),s=!0},p(n,[r]){const i={};r&5&&(i.$$scope={dirty:r,ctx:n}),t.$set(i)},i(n){s||(T(t.$$.fragment,n),s=!0)},o(n){k(t.$$.fragment,n),s=!1},d(n){U(t,n)}}}function Es(e,t,s){let n,r,i,a,o;oe(e,vt,h=>s(3,n=h)),oe(e,Ze,h=>s(4,r=h)),oe(e,Qe,h=>s(5,i=h)),oe(e,Xe,h=>s(6,a=h)),oe(e,Mt,h=>s(0,o=h));let{$$slots:l={},$$scope:u}=t;return tt(async()=>{if(ge(Qe,i=localStorage.getItem("nickname")||ms(),i),ge(Xe,a=localStorage.getItem("userToken"),a),Qe.subscribe(h=>{localStorage.setItem("nickname",h)}),!a)try{const h=await Wt(i);ge(Xe,a=h.data.id,a),localStorage.setItem("userToken",a)}catch(h){console.error(h)}ge(Ze,r=new fs(Ft,{params:{userToken:a}}),r),ge(vt,n=ds(r,"notifications:scans"),n),n.on("collected-broadcast",h=>{console.log("Received collected-broadcast:",h),h.nickname!==i&&_t({type:se.SUCCESS,message:`User ${h.nickname} found a stamp!`})}),n.on("msg",h=>{console.log("Received msg:",h),_t({type:se.SUCCESS,message:h.message})});try{r.connect()}catch(h){console.error(h)}try{n.join().receive("ok",h=>{console.log("Joined successfully",h)})}catch(h){console.error(h)}}),e.$$set=h=>{"$$scope"in h&&s(2,u=h.$$scope)},[o,l,u]}class Rs extends $e{constructor(t){super(),we(this,t,Es,bs,Re,{})}}export{Rs as component,ws as universal};