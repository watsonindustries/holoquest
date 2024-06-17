import{e as x,f}from"./scheduler.CJajW1xV.js";function _(n){const t=n-1;return t*t*t+1}function S(n,{delay:t=0,duration:o=400,easing:s=x}={}){const c=+getComputedStyle(n).opacity;return{delay:t,duration:o,easing:s,css:a=>`opacity: ${a*c}`}}function U(n,{delay:t=0,duration:o=400,easing:s=_,x:c=0,y:a=0,opacity:u=0}={}){const e=getComputedStyle(n),r=+e.opacity,y=e.transform==="none"?"":e.transform,p=r*(1-u),[l,m]=f(c),[$,d]=f(a);return{delay:t,duration:o,easing:s,css:(i,g)=>`
			transform: ${y} translate(${(1-i)*l}${m}, ${(1-i)*$}${d});
			opacity: ${r-p*g}`}}export{U as a,_ as c,S as f};
