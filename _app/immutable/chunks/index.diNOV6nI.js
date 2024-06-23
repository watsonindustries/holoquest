import{i as x,e as u}from"./scheduler.COW4diEM.js";function _(n){const t=n-1;return t*t*t+1}function S(n,{delay:t=0,duration:o=400,easing:s=x}={}){const c=+getComputedStyle(n).opacity;return{delay:t,duration:o,easing:s,css:a=>`opacity: ${a*c}`}}function U(n,{delay:t=0,duration:o=400,easing:s=_,x:c=0,y:a=0,opacity:f=0}={}){const e=getComputedStyle(n),r=+e.opacity,y=e.transform==="none"?"":e.transform,p=r*(1-f),[l,m]=u(c),[$,d]=u(a);return{delay:t,duration:o,easing:s,css:(i,g)=>`
			transform: ${y} translate(${(1-i)*l}${m}, ${(1-i)*$}${d});
			opacity: ${r-p*g}`}}export{U as a,_ as c,S as f};
