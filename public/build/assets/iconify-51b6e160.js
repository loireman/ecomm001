import{e as I}from"./app-e54fc346.js";const T=/^[a-z0-9]+(-[a-z0-9]+)*$/,A=(t,e,n,r="")=>{const o=t.split(":");if(t.slice(0,1)==="@"){if(o.length<2||o.length>3)return null;r=o.shift().slice(1)}if(o.length>3||!o.length)return null;if(o.length>1){const c=o.pop(),l=o.pop(),f={provider:o.length>0?o[0]:r,prefix:l,name:c};return e&&!M(f)?null:f}const i=o[0],s=i.split("-");if(s.length>1){const c={provider:r,prefix:s.shift(),name:s.join("-")};return e&&!M(c)?null:c}if(n&&r===""){const c={provider:r,prefix:"",name:i};return e&&!M(c,n)?null:c}return null},M=(t,e)=>t?!!((t.provider===""||t.provider.match(T))&&(e&&t.prefix===""||t.prefix.match(T))&&t.name.match(T)):!1,dt=Object.freeze({left:0,top:0,width:16,height:16}),F=Object.freeze({rotate:0,vFlip:!1,hFlip:!1}),K=Object.freeze({...dt,...F}),U=Object.freeze({...K,body:"",hidden:!1});function Et(t,e){const n={};!t.hFlip!=!e.hFlip&&(n.hFlip=!0),!t.vFlip!=!e.vFlip&&(n.vFlip=!0);const r=((t.rotate||0)+(e.rotate||0))%4;return r&&(n.rotate=r),n}function tt(t,e){const n=Et(t,e);for(const r in U)r in F?r in t&&!(r in n)&&(n[r]=F[r]):r in e?n[r]=e[r]:r in t&&(n[r]=t[r]);return n}function Lt(t,e){const n=t.icons,r=t.aliases||Object.create(null),o=Object.create(null);function i(s){if(n[s])return o[s]=[];if(!(s in o)){o[s]=null;const c=r[s]&&r[s].parent,l=c&&i(c);l&&(o[s]=[c].concat(l))}return o[s]}return(e||Object.keys(n).concat(Object.keys(r))).forEach(i),o}function Mt(t,e,n){const r=t.icons,o=t.aliases||Object.create(null);let i={};function s(c){i=tt(r[c]||o[c],i)}return s(e),n.forEach(s),tt(t,i)}function ht(t,e){const n=[];if(typeof t!="object"||typeof t.icons!="object")return n;t.not_found instanceof Array&&t.not_found.forEach(o=>{e(o,null),n.push(o)});const r=Lt(t);for(const o in r){const i=r[o];i&&(e(o,Mt(t,o,i)),n.push(o))}return n}const Ot={provider:"",aliases:{},not_found:{},...dt};function R(t,e){for(const n in e)if(n in t&&typeof t[n]!=typeof e[n])return!1;return!0}function pt(t){if(typeof t!="object"||t===null)return null;const e=t;if(typeof e.prefix!="string"||!t.icons||typeof t.icons!="object"||!R(t,Ot))return null;const n=e.icons;for(const o in n){const i=n[o];if(!o.match(T)||typeof i.body!="string"||!R(i,U))return null}const r=e.aliases||Object.create(null);for(const o in r){const i=r[o],s=i.parent;if(!o.match(T)||typeof s!="string"||!n[s]&&!r[s]||!R(i,U))return null}return e}const et=Object.create(null);function Ft(t,e){return{provider:t,prefix:e,icons:Object.create(null),missing:new Set}}function v(t,e){const n=et[t]||(et[t]=Object.create(null));return n[e]||(n[e]=Ft(t,e))}function G(t,e){return pt(e)?ht(e,(n,r)=>{r?t.icons[n]=r:t.missing.add(n)}):[]}function At(t,e,n){try{if(typeof n.body=="string")return t.icons[e]={...n},!0}catch{}return!1}let P=!1;function gt(t){return typeof t=="boolean"&&(P=t),P}function Dt(t){const e=typeof t=="string"?A(t,!0,P):t;if(e){const n=v(e.provider,e.prefix),r=e.name;return n.icons[r]||(n.missing.has(r)?null:void 0)}}function Nt(t,e){const n=A(t,!0,P);if(!n)return!1;const r=v(n.provider,n.prefix);return At(r,n.name,e)}function Rt(t,e){if(typeof t!="object")return!1;if(typeof e!="string"&&(e=t.provider||""),P&&!e&&!t.prefix){let o=!1;return pt(t)&&(t.prefix="",ht(t,(i,s)=>{s&&Nt(i,s)&&(o=!0)})),o}const n=t.prefix;if(!M({provider:e,prefix:n,name:"a"}))return!1;const r=v(e,n);return!!G(r,t)}const mt=Object.freeze({width:null,height:null}),yt=Object.freeze({...mt,...F}),Bt=/(-?[0-9.]*[0-9]+[0-9.]*)/g,Ut=/^-?[0-9.]*[0-9]+[0-9.]*$/g;function nt(t,e,n){if(e===1)return t;if(n=n||100,typeof t=="number")return Math.ceil(t*e*n)/n;if(typeof t!="string")return t;const r=t.split(Bt);if(r===null||!r.length)return t;const o=[];let i=r.shift(),s=Ut.test(i);for(;;){if(s){const c=parseFloat(i);isNaN(c)?o.push(i):o.push(Math.ceil(c*e*n)/n)}else o.push(i);if(i=r.shift(),i===void 0)return o.join("");s=!s}}const zt=t=>t==="unset"||t==="undefined"||t==="none";function Qt(t,e){const n={...K,...t},r={...yt,...e},o={left:n.left,top:n.top,width:n.width,height:n.height};let i=n.body;[n,r].forEach(w=>{const g=[],C=w.hFlip,m=w.vFlip;let u=w.rotate;C?m?u+=2:(g.push("translate("+(o.width+o.left).toString()+" "+(0-o.top).toString()+")"),g.push("scale(-1 1)"),o.top=o.left=0):m&&(g.push("translate("+(0-o.left).toString()+" "+(o.height+o.top).toString()+")"),g.push("scale(1 -1)"),o.top=o.left=0);let b;switch(u<0&&(u-=Math.floor(u/4)*4),u=u%4,u){case 1:b=o.height/2+o.top,g.unshift("rotate(90 "+b.toString()+" "+b.toString()+")");break;case 2:g.unshift("rotate(180 "+(o.width/2+o.left).toString()+" "+(o.height/2+o.top).toString()+")");break;case 3:b=o.width/2+o.left,g.unshift("rotate(-90 "+b.toString()+" "+b.toString()+")");break}u%2===1&&(o.left!==o.top&&(b=o.left,o.left=o.top,o.top=b),o.width!==o.height&&(b=o.width,o.width=o.height,o.height=b)),g.length&&(i='<g transform="'+g.join(" ")+'">'+i+"</g>")});const s=r.width,c=r.height,l=o.width,f=o.height;let a,d;s===null?(d=c===null?"1em":c==="auto"?f:c,a=nt(d,l/f)):(a=s==="auto"?l:s,d=c===null?nt(a,f/l):c==="auto"?f:c);const p={},y=(w,g)=>{zt(g)||(p[w]=g.toString())};return y("width",a),y("height",d),p.viewBox=o.left.toString()+" "+o.top.toString()+" "+l.toString()+" "+f.toString(),{attributes:p,body:i}}const qt=/\sid="(\S+)"/g,Ht="IconifyId"+Date.now().toString(16)+(Math.random()*16777216|0).toString(16);let $t=0;function Vt(t,e=Ht){const n=[];let r;for(;r=qt.exec(t);)n.push(r[1]);if(!n.length)return t;const o="suffix"+(Math.random()*16777216|Date.now()).toString(16);return n.forEach(i=>{const s=typeof e=="function"?e(i):e+($t++).toString(),c=i.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");t=t.replace(new RegExp('([#;"])('+c+')([")]|\\.[a-z])',"g"),"$1"+s+o+"$3")}),t=t.replace(new RegExp(o,"g"),""),t}const z=Object.create(null);function Kt(t,e){z[t]=e}function Q(t){return z[t]||z[""]}function W(t){let e;if(typeof t.resources=="string")e=[t.resources];else if(e=t.resources,!(e instanceof Array)||!e.length)return null;return{resources:e,path:t.path||"/",maxURL:t.maxURL||500,rotate:t.rotate||750,timeout:t.timeout||5e3,random:t.random===!0,index:t.index||0,dataAfterTimeout:t.dataAfterTimeout!==!1}}const J=Object.create(null),_=["https://api.simplesvg.com","https://api.unisvg.com"],O=[];for(;_.length>0;)_.length===1||Math.random()>.5?O.push(_.shift()):O.push(_.pop());J[""]=W({resources:["https://api.iconify.design"].concat(O)});function Gt(t,e){const n=W(e);return n===null?!1:(J[t]=n,!0)}function X(t){return J[t]}const Wt=()=>{let t;try{if(t=fetch,typeof t=="function")return t}catch{}};let ot=Wt();function Jt(t,e){const n=X(t);if(!n)return 0;let r;if(!n.maxURL)r=0;else{let o=0;n.resources.forEach(s=>{o=Math.max(o,s.length)});const i=e+".json?icons=";r=n.maxURL-o-n.path.length-i.length}return r}function Xt(t){return t===404}const Yt=(t,e,n)=>{const r=[],o=Jt(t,e),i="icons";let s={type:i,provider:t,prefix:e,icons:[]},c=0;return n.forEach((l,f)=>{c+=l.length+1,c>=o&&f>0&&(r.push(s),s={type:i,provider:t,prefix:e,icons:[]},c=l.length),s.icons.push(l)}),r.push(s),r};function Zt(t){if(typeof t=="string"){const e=X(t);if(e)return e.path}return"/"}const te=(t,e,n)=>{if(!ot){n("abort",424);return}let r=Zt(e.provider);switch(e.type){case"icons":{const i=e.prefix,c=e.icons.join(","),l=new URLSearchParams({icons:c});r+=i+".json?"+l.toString();break}case"custom":{const i=e.uri;r+=i.slice(0,1)==="/"?i.slice(1):i;break}default:n("abort",400);return}let o=503;ot(t+r).then(i=>{const s=i.status;if(s!==200){setTimeout(()=>{n(Xt(s)?"abort":"next",s)});return}return o=501,i.json()}).then(i=>{if(typeof i!="object"||i===null){setTimeout(()=>{i===404?n("abort",i):n("next",o)});return}setTimeout(()=>{n("success",i)})}).catch(()=>{n("next",o)})},ee={prepare:Yt,send:te};function ne(t){const e={loaded:[],missing:[],pending:[]},n=Object.create(null);t.sort((o,i)=>o.provider!==i.provider?o.provider.localeCompare(i.provider):o.prefix!==i.prefix?o.prefix.localeCompare(i.prefix):o.name.localeCompare(i.name));let r={provider:"",prefix:"",name:""};return t.forEach(o=>{if(r.name===o.name&&r.prefix===o.prefix&&r.provider===o.provider)return;r=o;const i=o.provider,s=o.prefix,c=o.name,l=n[i]||(n[i]=Object.create(null)),f=l[s]||(l[s]=v(i,s));let a;c in f.icons?a=e.loaded:s===""||f.missing.has(c)?a=e.missing:a=e.pending;const d={provider:i,prefix:s,name:c};a.push(d)}),e}function bt(t,e){t.forEach(n=>{const r=n.loaderCallbacks;r&&(n.loaderCallbacks=r.filter(o=>o.id!==e))})}function oe(t){t.pendingCallbacksFlag||(t.pendingCallbacksFlag=!0,setTimeout(()=>{t.pendingCallbacksFlag=!1;const e=t.loaderCallbacks?t.loaderCallbacks.slice(0):[];if(!e.length)return;let n=!1;const r=t.provider,o=t.prefix;e.forEach(i=>{const s=i.icons,c=s.pending.length;s.pending=s.pending.filter(l=>{if(l.prefix!==o)return!0;const f=l.name;if(t.icons[f])s.loaded.push({provider:r,prefix:o,name:f});else if(t.missing.has(f))s.missing.push({provider:r,prefix:o,name:f});else return n=!0,!0;return!1}),s.pending.length!==c&&(n||bt([t],i.id),i.callback(s.loaded.slice(0),s.missing.slice(0),s.pending.slice(0),i.abort))})}))}let re=0;function ie(t,e,n){const r=re++,o=bt.bind(null,n,r);if(!e.pending.length)return o;const i={id:r,icons:e,callback:t,abort:o};return n.forEach(s=>{(s.loaderCallbacks||(s.loaderCallbacks=[])).push(i)}),o}function se(t,e=!0,n=!1){const r=[];return t.forEach(o=>{const i=typeof o=="string"?A(o,e,n):o;i&&r.push(i)}),r}var ce={resources:[],index:0,timeout:2e3,rotate:750,random:!1,dataAfterTimeout:!1};function le(t,e,n,r){const o=t.resources.length,i=t.random?Math.floor(Math.random()*o):t.index;let s;if(t.random){let h=t.resources.slice(0);for(s=[];h.length>1;){const x=Math.floor(Math.random()*h.length);s.push(h[x]),h=h.slice(0,x).concat(h.slice(x+1))}s=s.concat(h)}else s=t.resources.slice(i).concat(t.resources.slice(0,i));const c=Date.now();let l="pending",f=0,a,d=null,p=[],y=[];typeof r=="function"&&y.push(r);function w(){d&&(clearTimeout(d),d=null)}function g(){l==="pending"&&(l="aborted"),w(),p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function C(h,x){x&&(y=[]),typeof h=="function"&&y.push(h)}function m(){return{startTime:c,payload:e,status:l,queriesSent:f,queriesPending:p.length,subscribe:C,abort:g}}function u(){l="failed",y.forEach(h=>{h(void 0,a)})}function b(){p.forEach(h=>{h.status==="pending"&&(h.status="aborted")}),p=[]}function jt(h,x,k){const E=x!=="success";switch(p=p.filter(S=>S!==h),l){case"pending":break;case"failed":if(E||!t.dataAfterTimeout)return;break;default:return}if(x==="abort"){a=k,u();return}if(E){a=k,p.length||(s.length?N():u());return}if(w(),b(),!t.random){const S=t.resources.indexOf(h.resource);S!==-1&&S!==t.index&&(t.index=S)}l="completed",y.forEach(S=>{S(k)})}function N(){if(l!=="pending")return;w();const h=s.shift();if(h===void 0){if(p.length){d=setTimeout(()=>{w(),l==="pending"&&(b(),u())},t.timeout);return}u();return}const x={status:"pending",resource:h,callback:(k,E)=>{jt(x,k,E)}};p.push(x),f++,d=setTimeout(N,t.rotate),n(h,e,x.callback)}return setTimeout(N),m}function wt(t){const e={...ce,...t};let n=[];function r(){n=n.filter(c=>c().status==="pending")}function o(c,l,f){const a=le(e,c,l,(d,p)=>{r(),f&&f(d,p)});return n.push(a),a}function i(c){return n.find(l=>c(l))||null}return{query:o,find:i,setIndex:c=>{e.index=c},getIndex:()=>e.index,cleanup:r}}function rt(){}const B=Object.create(null);function fe(t){if(!B[t]){const e=X(t);if(!e)return;const n=wt(e),r={config:e,redundancy:n};B[t]=r}return B[t]}function ae(t,e,n){let r,o;if(typeof t=="string"){const i=Q(t);if(!i)return n(void 0,424),rt;o=i.send;const s=fe(t);s&&(r=s.redundancy)}else{const i=W(t);if(i){r=wt(i);const s=t.resources?t.resources[0]:"",c=Q(s);c&&(o=c.send)}}return!r||!o?(n(void 0,424),rt):r.query(e,o,n)().abort}const it="iconify2",j="iconify",xt=j+"-count",st=j+"-version",It=36e5,ue=168;function q(t,e){try{return t.getItem(e)}catch{}}function Y(t,e,n){try{return t.setItem(e,n),!0}catch{}}function ct(t,e){try{t.removeItem(e)}catch{}}function H(t,e){return Y(t,xt,e.toString())}function $(t){return parseInt(q(t,xt))||0}const D={local:!0,session:!0},St={local:new Set,session:new Set};let Z=!1;function de(t){Z=t}let L=typeof window>"u"?{}:window;function vt(t){const e=t+"Storage";try{if(L&&L[e]&&typeof L[e].length=="number")return L[e]}catch{}D[t]=!1}function Ct(t,e){const n=vt(t);if(!n)return;const r=q(n,st);if(r!==it){if(r){const c=$(n);for(let l=0;l<c;l++)ct(n,j+l.toString())}Y(n,st,it),H(n,0);return}const o=Math.floor(Date.now()/It)-ue,i=c=>{const l=j+c.toString(),f=q(n,l);if(typeof f=="string"){try{const a=JSON.parse(f);if(typeof a=="object"&&typeof a.cached=="number"&&a.cached>o&&typeof a.provider=="string"&&typeof a.data=="object"&&typeof a.data.prefix=="string"&&e(a,c))return!0}catch{}ct(n,l)}};let s=$(n);for(let c=s-1;c>=0;c--)i(c)||(c===s-1?(s--,H(n,s)):St[t].add(c))}function kt(){if(!Z){de(!0);for(const t in D)Ct(t,e=>{const n=e.data,r=e.provider,o=n.prefix,i=v(r,o);if(!G(i,n).length)return!1;const s=n.lastModified||-1;return i.lastModifiedCached=i.lastModifiedCached?Math.min(i.lastModifiedCached,s):s,!0})}}function he(t,e){const n=t.lastModifiedCached;if(n&&n>=e)return n===e;if(t.lastModifiedCached=e,n)for(const r in D)Ct(r,o=>{const i=o.data;return o.provider!==t.provider||i.prefix!==t.prefix||i.lastModified===e});return!0}function pe(t,e){Z||kt();function n(r){let o;if(!D[r]||!(o=vt(r)))return;const i=St[r];let s;if(i.size)i.delete(s=Array.from(i).shift());else if(s=$(o),!H(o,s+1))return;const c={cached:Math.floor(Date.now()/It),provider:t.provider,data:e};return Y(o,j+s.toString(),JSON.stringify(c))}e.lastModified&&!he(t,e.lastModified)||Object.keys(e.icons).length&&(e.not_found&&(e=Object.assign({},e),delete e.not_found),n("local")||n("session"))}function lt(){}function ge(t){t.iconsLoaderFlag||(t.iconsLoaderFlag=!0,setTimeout(()=>{t.iconsLoaderFlag=!1,oe(t)}))}function me(t,e){t.iconsToLoad?t.iconsToLoad=t.iconsToLoad.concat(e).sort():t.iconsToLoad=e,t.iconsQueueFlag||(t.iconsQueueFlag=!0,setTimeout(()=>{t.iconsQueueFlag=!1;const{provider:n,prefix:r}=t,o=t.iconsToLoad;delete t.iconsToLoad;let i;if(!o||!(i=Q(n)))return;i.prepare(n,r,o).forEach(c=>{ae(n,c,l=>{if(typeof l!="object")c.icons.forEach(f=>{t.missing.add(f)});else try{const f=G(t,l);if(!f.length)return;const a=t.pendingIcons;a&&f.forEach(d=>{a.delete(d)}),pe(t,l)}catch(f){console.error(f)}ge(t)})})}))}const ye=(t,e)=>{const n=se(t,!0,gt()),r=ne(n);if(!r.pending.length){let l=!0;return e&&setTimeout(()=>{l&&e(r.loaded,r.missing,r.pending,lt)}),()=>{l=!1}}const o=Object.create(null),i=[];let s,c;return r.pending.forEach(l=>{const{provider:f,prefix:a}=l;if(a===c&&f===s)return;s=f,c=a,i.push(v(f,a));const d=o[f]||(o[f]=Object.create(null));d[a]||(d[a]=[])}),r.pending.forEach(l=>{const{provider:f,prefix:a,name:d}=l,p=v(f,a),y=p.pendingIcons||(p.pendingIcons=new Set);y.has(d)||(y.add(d),o[f][a].push(d))}),i.forEach(l=>{const{provider:f,prefix:a}=l;o[f][a].length&&me(l,o[f][a])}),e?ie(e,r,i):lt};function be(t,e){const n={...t};for(const r in e){const o=e[r],i=typeof o;r in mt?(o===null||o&&(i==="string"||i==="number"))&&(n[r]=o):i===typeof n[r]&&(n[r]=r==="rotate"?o%4:o)}return n}const we=/[\s,]+/;function xe(t,e){e.split(we).forEach(n=>{switch(n.trim()){case"horizontal":t.hFlip=!0;break;case"vertical":t.vFlip=!0;break}})}function Ie(t,e=0){const n=t.replace(/^-?[0-9.]*/,"");function r(o){for(;o<0;)o+=4;return o%4}if(n===""){const o=parseInt(t);return isNaN(o)?0:r(o)}else if(n!==t){let o=0;switch(n){case"%":o=25;break;case"deg":o=90}if(o){let i=parseFloat(t.slice(0,t.length-n.length));return isNaN(i)?0:(i=i/o,i%1===0?r(i):0)}}return e}function Se(t,e){let n=t.indexOf("xlink:")===-1?"":' xmlns:xlink="http://www.w3.org/1999/xlink"';for(const r in e)n+=" "+r+'="'+e[r]+'"';return'<svg xmlns="http://www.w3.org/2000/svg"'+n+">"+t+"</svg>"}function ve(t){return t.replace(/"/g,"'").replace(/%/g,"%25").replace(/#/g,"%23").replace(/</g,"%3C").replace(/>/g,"%3E").replace(/\s+/g," ")}function Ce(t){return'url("data:image/svg+xml,'+ve(t)+'")'}const _t={...yt,inline:!1},ke={xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink","aria-hidden":!0,role:"img"},_e={display:"inline-block"},V={backgroundColor:"currentColor"},Tt={backgroundColor:"transparent"},ft={Image:"var(--svg)",Repeat:"no-repeat",Size:"100% 100%"},at={webkitMask:V,mask:V,background:Tt};for(const t in at){const e=at[t];for(const n in ft)e[t+n]=ft[n]}const Te={..._t,inline:!0};function ut(t){return t+(t.match(/^[-0-9.]+$/)?"px":"")}const Pe=(t,e,n,r)=>{const o=n?Te:_t,i=be(o,e),s=e.mode||"svg",c={},l=e.style||{},f={...s==="svg"?ke:{},ref:r};for(let m in e){const u=e[m];if(u!==void 0)switch(m){case"icon":case"style":case"children":case"onLoad":case"mode":case"_ref":case"_inline":break;case"inline":case"hFlip":case"vFlip":i[m]=u===!0||u==="true"||u===1;break;case"flip":typeof u=="string"&&xe(i,u);break;case"color":c.color=u;break;case"rotate":typeof u=="string"?i[m]=Ie(u):typeof u=="number"&&(i[m]=u);break;case"ariaHidden":case"aria-hidden":u!==!0&&u!=="true"&&delete f["aria-hidden"];break;default:o[m]===void 0&&(f[m]=u)}}const a=Qt(t,i),d=a.attributes;if(i.inline&&(c.verticalAlign="-0.125em"),s==="svg"){f.style={...c,...l},Object.assign(f,d);let m=0,u=e.id;return typeof u=="string"&&(u=u.replace(/-/g,"_")),f.dangerouslySetInnerHTML={__html:Vt(a.body,u?()=>u+"ID"+m++:"iconifyReact")},I.createElement("svg",f)}const{body:p,width:y,height:w}=t,g=s==="mask"||(s==="bg"?!1:p.indexOf("currentColor")!==-1),C=Se(p,{...d,width:y+"",height:w+""});return f.style={...c,"--svg":Ce(C),width:ut(d.width),height:ut(d.height),..._e,...g?V:Tt,...l},I.createElement("span",f)};gt(!0);Kt("",ee);if(typeof document<"u"&&typeof window<"u"){kt();const t=window;if(t.IconifyPreload!==void 0){const e=t.IconifyPreload,n="Invalid IconifyPreload syntax.";typeof e=="object"&&e!==null&&(e instanceof Array?e:[e]).forEach(r=>{try{(typeof r!="object"||r===null||r instanceof Array||typeof r.icons!="object"||typeof r.prefix!="string"||!Rt(r))&&console.error(n)}catch{console.error(n)}})}if(t.IconifyProviders!==void 0){const e=t.IconifyProviders;if(typeof e=="object"&&e!==null)for(let n in e){const r="IconifyProviders["+n+"] is invalid.";try{const o=e[n];if(typeof o!="object"||!o||o.resources===void 0)continue;Gt(n,o)||console.error(r)}catch{console.error(r)}}}}class Pt extends I.Component{constructor(e){super(e),this.state={icon:null}}_abortLoading(){this._loading&&(this._loading.abort(),this._loading=null)}_setData(e){this.state.icon!==e&&this.setState({icon:e})}_checkIcon(e){const n=this.state,r=this.props.icon;if(typeof r=="object"&&r!==null&&typeof r.body=="string"){this._icon="",this._abortLoading(),(e||n.icon===null)&&this._setData({data:r});return}let o;if(typeof r!="string"||(o=A(r,!1,!0))===null){this._abortLoading(),this._setData(null);return}const i=Dt(o);if(!i){(!this._loading||this._loading.name!==r)&&(this._abortLoading(),this._icon="",this._setData(null),i!==null&&(this._loading={name:r,abort:ye([o],this._checkIcon.bind(this,!1))}));return}if(this._icon!==r||n.icon===null){this._abortLoading(),this._icon=r;const s=["iconify"];o.prefix!==""&&s.push("iconify--"+o.prefix),o.provider!==""&&s.push("iconify--"+o.provider),this._setData({data:i,classes:s}),this.props.onLoad&&this.props.onLoad(r)}}componentDidMount(){this._checkIcon(!1)}componentDidUpdate(e){e.icon!==this.props.icon&&this._checkIcon(!0)}componentWillUnmount(){this._abortLoading()}render(){const e=this.props,n=this.state.icon;if(n===null)return e.children?e.children:I.createElement("span",{});let r=e;return n.classes&&(r={...e,className:(typeof e.className=="string"?e.className+" ":"")+n.classes.join(" ")}),Pe({...K,...n.data},r,e._inline,e._ref)}}const Ee=I.forwardRef(function(e,n){const r={...e,_ref:n,_inline:!1};return I.createElement(Pt,r)});I.forwardRef(function(e,n){const r={...e,_ref:n,_inline:!0};return I.createElement(Pt,r)});export{Ee as I};
