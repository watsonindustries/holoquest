import{w as J}from"./index.B1bZ0tlg.js";var f={local:{},session:{}};function N(r){return r==="local"?localStorage:sessionStorage}function R(r,u,O){var w,p,g,v,b,m,h,_;const d=(w=void 0)!=null?w:JSON,s=(p=void 0)!=null?p:"local",I=(g=void 0)!=null?g:!0,L=(b=(v=void 0)!=null?v:void 0)!=null?b:e=>console.error(`Error when writing value from persisted store "${r}" to ${s}`,e),E=(m=void 0)!=null?m:(e,o)=>console.error(`Error when parsing ${e?'"'+e+'"':"value"} from persisted store "${r}"`,o),S=(h=void 0)!=null?h:e=>e,y=(_=void 0)!=null?_:e=>e,V=typeof window<"u"&&typeof document<"u",a=V?N(s):null;function $(e,o){const l=y(o);try{a==null||a.setItem(e,d.stringify(l))}catch(c){L(c)}}function T(){function e(t){try{return d.parse(t)}catch(i){E(t,i)}}const o=a==null?void 0:a.getItem(r);if(o==null)return u;const l=e(o);return l==null?u:S(l)}if(!f[s][r]){const e=T(),o=J(e,t=>{if(V&&s=="local"&&I){const i=n=>{if(n.key===r&&n.newValue){let z;try{z=d.parse(n.newValue)}catch(x){E(n.newValue,x);return}const W=S(z);t(W)}};return window.addEventListener("storage",i),()=>window.removeEventListener("storage",i)}}),{subscribe:l,set:c}=o;f[s][r]={set(t){c(t),$(r,t)},update(t){return o.update(i=>{const n=t(i);return $(r,n),n})},reset(){this.set(u)},subscribe:l}}return f[s][r]}export{R as p};
