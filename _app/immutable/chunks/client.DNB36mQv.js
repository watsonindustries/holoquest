var i=Object.defineProperty;var h=(n,e,s)=>e in n?i(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var o=(n,e,s)=>(h(n,typeof e!="symbol"?e+"":e,s),s);import{a}from"./const.CMVshlAV.js";import{n as c,a as p}from"./store.CAuuRsX2.js";import{g as u}from"./scheduler.CJVYrxIg.js";var d={BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const l=d.VITE_HOLOQUEST_API_TOKEN,t={Accept:"application/vnd.api+json","Content-Type":"application/vnd.api+json",Authorization:`Bearer ${l}`};async function y(n=""){return await(await fetch(`${a}/accounts/users/`,{method:"POST",headers:t,body:`{"data":{"type":"user","attributes":{"nickname":"${n}"}}}`})).json()}async function b(n,e){return await(await fetch(`${a}/accounts/users/${n}`,{method:"PATCH",headers:t,body:`{"data":{"type":"user","attributes":{"nickname":"${e}"}}}`})).json()}async function _(){return await(await fetch(`${a}/leaderboard`,{method:"GET",headers:t})).json()}async function $(n,e){return await(await fetch(`${a}/accounts/users/${n}`,{method:"PATCH",headers:t,body:`{"data":{"type":"user","attributes":{"stamps_collected":${e}}}}`})).json()}class C{constructor(e){o(this,"nickname",u(c));o(this,"channel");this.channel=e,c.subscribe(s=>{this.nickname=s}),p.subscribe(s=>{this.channel=s})}pushMessage(e){var s;(s=this.channel)==null||s.push("message",{nickname:this.nickname,message:e})}pushCollected(){var e;(e=this.channel)==null||e.push("collected",{nickname:this.nickname})}pushRallyCompleted(){var e;(e=this.channel)==null||e.push("rally-completed",{nickname:this.nickname})}}export{C,_ as f,y as r,b as s,$ as u};
