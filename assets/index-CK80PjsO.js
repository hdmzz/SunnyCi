const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/raw-Dt1HMqYc-CCYStf-G.js","assets/basedecoder-DvumDe3Y-gdlnpIMU.js","assets/lzw-DpvbRwG5-A0qWj5O6.js","assets/jpeg-CdeCw_eT-DCUfbGmp.js","assets/deflate-CUkHh1nh-BnvLddrI.js","assets/pako.esm-CPws4d4z-DQSVoCko.js","assets/packbits-DQnG8s9w-Bbhgek_W.js","assets/lerc-DSZpxyNj-nniGGsAj.js","assets/webimage-BcnuJlio-D2DpIK8k.js"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const s of a.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(n){if(n.ep)return;n.ep=!0;const a=t(n);fetch(n.href,a)}})();const tu="modulepreload",iu=function(r){return"https://hdmzz.github.io/"+r},$o={},er=function(e,t,i){let n=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(t.map(l=>{if(l=iu(l),l in $o)return;$o[l]=!0;const c=l.endsWith(".css"),h=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${h}`))return;const d=document.createElement("link");if(d.rel=c?"stylesheet":tu,c||(d.as="script"),d.crossOrigin="",d.href=l,o&&d.setAttribute("nonce",o),document.head.appendChild(d),c)return new Promise((u,f)=>{d.addEventListener("load",u),d.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function a(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return n.then(s=>{for(const o of s||[])o.status==="rejected"&&a(o.reason);return e().catch(a)})},Pi=(r,e=Pi,t=e.f||(e.f=["assets/raw-Dt1HMqYc.js","assets/basedecoder-DvumDe3Y.js","assets/lzw-DpvbRwG5.js","assets/jpeg-CdeCw_eT.js","assets/deflate-CUkHh1nh.js","assets/pako.esm-CPws4d4z.js","assets/packbits-DQnG8s9w.js","assets/lerc-DSZpxyNj.js","assets/webimage-BcnuJlio.js"]))=>r.map(i=>t[i]);var ru=Object.defineProperty,Pc=r=>{throw TypeError(r)},nu=(r,e,t)=>e in r?ru(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,Ae=(r,e,t)=>nu(r,typeof e!="symbol"?e+"":e,t),Lc=(r,e,t)=>e.has(r)||Pc("Cannot "+t),je=(r,e,t)=>(Lc(r,e,"read from private field"),t?t.call(r):e.get(r)),nr=(r,e,t)=>e.has(r)?Pc("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t),ar=(r,e,t,i)=>(Lc(r,e,"write to private field"),e.set(r,t),t);(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))t(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const uo="169",Ar={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Tr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},au=0,Qo=1,su=2,Uc=1,Ic=2,di=3,Ri=0,Lt=1,ii=2,wi=0,Rr=1,el=2,tl=3,il=4,ou=5,Xi=100,lu=101,cu=102,hu=103,uu=104,du=200,pu=201,fu=202,mu=203,gs=204,_s=205,gu=206,_u=207,vu=208,xu=209,yu=210,Mu=211,Su=212,Eu=213,Tu=214,vs=0,xs=1,ys=2,Ur=3,Ms=4,Ss=5,Es=6,Ts=7,po=0,bu=1,wu=2,Ai=0,Au=1,Ru=2,Cu=3,Pu=4,Lu=5,Uu=6,Iu=7,Dc=300,Ir=301,Dr=302,bs=303,ws=304,xa=306,As=1e3,Yi=1001,Rs=1002,Ct=1003,Du=1004,En=1005,Yt=1006,La=1007,qi=1008,mi=1009,Nc=1010,Oc=1011,cn=1012,fo=1013,Ki=1014,pi=1015,_n=1016,mo=1017,go=1018,Nr=1020,Fc=35902,Bc=1021,zc=1022,Bt=1023,Gc=1024,kc=1025,Cr=1026,Or=1027,Hc=1028,_o=1029,Vc=1030,vo=1031,xo=1033,ra=33776,na=33777,aa=33778,sa=33779,Cs=35840,Ps=35841,Ls=35842,Us=35843,Is=36196,Ds=37492,Ns=37496,Os=37808,Fs=37809,Bs=37810,zs=37811,Gs=37812,ks=37813,Hs=37814,Vs=37815,Ws=37816,Xs=37817,js=37818,Ys=37819,qs=37820,Ks=37821,oa=36492,Zs=36494,Js=36495,Wc=36283,$s=36284,Qs=36285,eo=36286,Nu=3200,Ou=3201,Xc=0,Fu=1,bi="",ei="srgb",Li="srgb-linear",yo="display-p3",ya="display-p3-linear",ua="linear",Qe="srgb",da="rec709",pa="p3",sr=7680,rl=519,Bu=512,zu=513,Gu=514,jc=515,ku=516,Hu=517,Vu=518,Wu=519,nl=35044,al="300 es",fi=2e3,fa=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const n=i.indexOf(t);n!==-1&&i.splice(n,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const t=this._listeners[e.type];if(t!==void 0){e.target=this;const i=t.slice(0);for(let n=0,a=i.length;n<a;n++)i[n].call(this,e);e.target=null}}}const xt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const en=Math.PI/180,hn=180/Math.PI;function tr(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(xt[r&255]+xt[r>>8&255]+xt[r>>16&255]+xt[r>>24&255]+"-"+xt[e&255]+xt[e>>8&255]+"-"+xt[e>>16&15|64]+xt[e>>24&255]+"-"+xt[t&63|128]+xt[t>>8&255]+"-"+xt[t>>16&255]+xt[t>>24&255]+xt[i&255]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]).toLowerCase()}function mt(r,e,t){return Math.max(e,Math.min(t,r))}function Mo(r,e){return(r%e+e)%e}function Xu(r,e,t,i,n){return i+(r-e)*(n-i)/(t-e)}function ju(r,e,t){return r!==e?(t-r)/(e-r):0}function tn(r,e,t){return(1-t)*r+t*e}function Yu(r,e,t,i){return tn(r,e,1-Math.exp(-t*i))}function qu(r,e=1){return e-Math.abs(Mo(r,e*2)-e)}function Ku(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Zu(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function Ju(r,e){return r+Math.floor(Math.random()*(e-r+1))}function $u(r,e){return r+Math.random()*(e-r)}function Qu(r){return r*(.5-Math.random())}function ed(r){r!==void 0&&(sl=r);let e=sl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function td(r){return r*en}function id(r){return r*hn}function rd(r){return(r&r-1)===0&&r!==0}function nd(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function ad(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function sd(r,e,t,i,n){const a=Math.cos,s=Math.sin,o=a(t/2),l=s(t/2),c=a((e+i)/2),h=s((e+i)/2),d=a((e-i)/2),u=s((e-i)/2),f=a((i-e)/2),g=s((i-e)/2);switch(n){case"XYX":r.set(o*h,l*d,l*u,o*c);break;case"YZY":r.set(l*u,o*h,l*d,o*c);break;case"ZXZ":r.set(l*d,l*u,o*h,o*c);break;case"XZX":r.set(o*h,l*g,l*f,o*c);break;case"YXY":r.set(l*f,o*h,l*g,o*c);break;case"ZYZ":r.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function Sr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function St(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const od={DEG2RAD:en,RAD2DEG:hn,generateUUID:tr,clamp:mt,euclideanModulo:Mo,mapLinear:Xu,inverseLerp:ju,lerp:tn,damp:Yu,pingpong:qu,smoothstep:Ku,smootherstep:Zu,randInt:Ju,randFloat:$u,randFloatSpread:Qu,seededRandom:ed,degToRad:td,radToDeg:id,isPowerOfTwo:rd,ceilPowerOfTwo:nd,floorPowerOfTwo:ad,setQuaternionFromProperEuler:sd,normalize:St,denormalize:Sr};class ae{constructor(e=0,t=0){ae.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),a=this.x-e.x,s=this.y-e.y;return this.x=a*i-s*n+e.x,this.y=a*n+s*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,t,i,n,a,s,o,l,c){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c)}set(e,t,i,n,a,s,o,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=s,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],_=n[0],p=n[3],m=n[6],b=n[1],M=n[4],E=n[7],N=n[2],R=n[5],A=n[8];return a[0]=s*_+o*b+l*N,a[3]=s*p+o*M+l*R,a[6]=s*m+o*E+l*A,a[1]=c*_+h*b+d*N,a[4]=c*p+h*M+d*R,a[7]=c*m+h*E+d*A,a[2]=u*_+f*b+g*N,a[5]=u*p+f*M+g*R,a[8]=u*m+f*E+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*s*h-t*o*c-i*a*h+i*o*l+n*a*c-n*s*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*s-o*c,u=o*l-h*a,f=c*a-s*l,g=t*d+i*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(n*c-h*i)*_,e[2]=(o*i-n*s)*_,e[3]=u*_,e[4]=(h*t-n*l)*_,e[5]=(n*a-o*t)*_,e[6]=f*_,e[7]=(i*l-c*t)*_,e[8]=(s*t-i*a)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,a,s,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*s+c*o)+s+e,-n*c,n*l,-n*(-c*s+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ua=new Ge;function Yc(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ma(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ld(){const r=ma("canvas");return r.style.display="block",r}const ol={};function la(r){r in ol||(ol[r]=!0,console.warn(r))}function cd(r,e,t){return new Promise(function(i,n){function a(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:n();break;case r.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}function hd(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function ud(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ll=new Ge().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),cl=new Ge().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Vr={[Li]:{transfer:ua,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r,fromReference:r=>r},[ei]:{transfer:Qe,primaries:da,luminanceCoefficients:[.2126,.7152,.0722],toReference:r=>r.convertSRGBToLinear(),fromReference:r=>r.convertLinearToSRGB()},[ya]:{transfer:ua,primaries:pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.applyMatrix3(cl),fromReference:r=>r.applyMatrix3(ll)},[yo]:{transfer:Qe,primaries:pa,luminanceCoefficients:[.2289,.6917,.0793],toReference:r=>r.convertSRGBToLinear().applyMatrix3(cl),fromReference:r=>r.applyMatrix3(ll).convertLinearToSRGB()}},dd=new Set([Li,ya]),qe={enabled:!0,_workingColorSpace:Li,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(r){if(!dd.has(r))throw new Error(`Unsupported working color space, "${r}".`);this._workingColorSpace=r},convert:function(r,e,t){if(this.enabled===!1||e===t||!e||!t)return r;const i=Vr[e].toReference,n=Vr[t].fromReference;return n(i(r))},fromWorkingColorSpace:function(r,e){return this.convert(r,this._workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this._workingColorSpace)},getPrimaries:function(r){return Vr[r].primaries},getTransfer:function(r){return r===bi?ua:Vr[r].transfer},getLuminanceCoefficients:function(r,e=this._workingColorSpace){return r.fromArray(Vr[e].luminanceCoefficients)}};function Pr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ia(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let or;class pd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{or===void 0&&(or=ma("canvas")),or.width=e.width,or.height=e.height;const i=or.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=or}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ma("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),a=n.data;for(let s=0;s<a.length;s++)a[s]=Pr(a[s]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Pr(t[i]/255)*255):t[i]=Pr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fd=0,qc=class{constructor(r=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fd++}),this.uuid=tr(),this.data=r,this.dataReady=!0,this.version=0}set needsUpdate(r){r===!0&&this.version++}toJSON(r){const e=r===void 0||typeof r=="string";if(!e&&r.images[this.uuid]!==void 0)return r.images[this.uuid];const t={uuid:this.uuid,url:""},i=this.data;if(i!==null){let n;if(Array.isArray(i)){n=[];for(let a=0,s=i.length;a<s;a++)i[a].isDataTexture?n.push(Da(i[a].image)):n.push(Da(i[a]))}else n=Da(i);t.url=n}return e||(r.images[this.uuid]=t),t}};function Da(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?pd.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;class Tt extends Ui{constructor(e=Tt.DEFAULT_IMAGE,t=Tt.DEFAULT_MAPPING,i=Yi,n=Yi,a=Yt,s=qi,o=Bt,l=mi,c=Tt.DEFAULT_ANISOTROPY,h=bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=tr(),this.name="",this.source=new qc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=a,this.minFilter=s,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ae(0,0),this.repeat=new ae(1,1),this.center=new ae(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Dc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case As:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case Rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case As:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case Rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=Dc;Tt.DEFAULT_ANISOTROPY=1;class nt{constructor(e=0,t=0,i=0,n=1){nt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=this.w,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n+s[12]*a,this.y=s[1]*t+s[5]*i+s[9]*n+s[13]*a,this.z=s[2]*t+s[6]*i+s[10]*n+s[14]*a,this.w=s[3]*t+s[7]*i+s[11]*n+s[15]*a,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,a;const s=e.elements,o=s[0],l=s[4],c=s[8],h=s[1],d=s[5],u=s[9],f=s[2],g=s[6],_=s[10];if(Math.abs(l-h)<.01&&Math.abs(c-f)<.01&&Math.abs(u-g)<.01){if(Math.abs(l+h)<.1&&Math.abs(c+f)<.1&&Math.abs(u+g)<.1&&Math.abs(o+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const m=(o+1)/2,b=(d+1)/2,M=(_+1)/2,E=(l+h)/4,N=(c+f)/4,R=(u+g)/4;return m>b&&m>M?m<.01?(i=0,n=.707106781,a=.707106781):(i=Math.sqrt(m),n=E/i,a=N/i):b>M?b<.01?(i=.707106781,n=0,a=.707106781):(n=Math.sqrt(b),i=E/n,a=R/n):M<.01?(i=.707106781,n=.707106781,a=0):(a=Math.sqrt(M),i=N/a,n=R/a),this.set(i,n,a,t),this}let p=Math.sqrt((g-u)*(g-u)+(c-f)*(c-f)+(h-l)*(h-l));return Math.abs(p)<.001&&(p=1),this.x=(g-u)/p,this.y=(c-f)/p,this.z=(h-l)/p,this.w=Math.acos((o+d+_-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gd extends Ui{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new nt(0,0,e,t),this.scissorTest=!1,this.viewport=new nt(0,0,e,t);const n={width:e,height:t,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const a=new Tt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);a.flipY=!1,a.generateMipmaps=i.generateMipmaps,a.internalFormat=i.internalFormat,this.textures=[];const s=i.count;for(let o=0;o<s;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,a=this.textures.length;n<a;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,n=e.textures.length;i<n;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends gd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Kc extends Tt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class _d extends Tt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ji{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,a,s,o){let l=i[n+0],c=i[n+1],h=i[n+2],d=i[n+3];const u=a[s+0],f=a[s+1],g=a[s+2],_=a[s+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=u,e[t+1]=f,e[t+2]=g,e[t+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let p=1-o;const m=l*u+c*f+h*g+d*_,b=m>=0?1:-1,M=1-m*m;if(M>Number.EPSILON){const N=Math.sqrt(M),R=Math.atan2(N,m*b);p=Math.sin(p*R)/N,o=Math.sin(o*R)/N}const E=o*b;if(l=l*p+u*E,c=c*p+f*E,h=h*p+g*E,d=d*p+_*E,p===1-o){const N=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=N,c*=N,h*=N,d*=N}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,n,a,s){const o=i[n],l=i[n+1],c=i[n+2],h=i[n+3],d=a[s],u=a[s+1],f=a[s+2],g=a[s+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,n=e._y,a=e._z,s=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(n/2),d=o(a/2),u=l(i/2),f=l(n/2),g=l(a/2);switch(s){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],a=t[8],s=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=i+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(a-c)*f,this._z=(s-n)*f}else if(i>o&&i>d){const f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+s)/f,this._z=(a+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-i-d);this._w=(a-c)/f,this._x=(n+s)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-i-o);this._w=(s-n)/f,this._x=(a+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(mt(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,a=e._z,s=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+s*o+n*c-a*l,this._y=n*h+s*l+a*o-i*c,this._z=a*h+s*c+i*l-n*o,this._w=s*h-i*o-n*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,a=this._z,s=this._w;let o=s*e._w+i*e._x+n*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=s,this._x=i,this._y=n,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*s+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,u=Math.sin(t*h)/c;return this._w=s*d+this._w*u,this._x=i*d+this._x*u,this._y=n*d+this._y*u,this._z=a*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,i=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(hl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(hl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*n,this.y=a[1]*t+a[4]*i+a[7]*n,this.z=a[2]*t+a[5]*i+a[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,a=e.elements,s=1/(a[3]*t+a[7]*i+a[11]*n+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*n+a[12])*s,this.y=(a[1]*t+a[5]*i+a[9]*n+a[13])*s,this.z=(a[2]*t+a[6]*i+a[10]*n+a[14])*s,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,a=e.x,s=e.y,o=e.z,l=e.w,c=2*(s*n-o*i),h=2*(o*t-a*n),d=2*(a*i-s*t);return this.x=t+l*c+s*d-o*h,this.y=i+l*h+o*c-a*d,this.z=n+l*d+a*h-s*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n,this.y=a[1]*t+a[5]*i+a[9]*n,this.z=a[2]*t+a[6]*i+a[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,a=e.z,s=t.x,o=t.y,l=t.z;return this.x=n*l-a*o,this.y=a*s-i*l,this.z=i*o-n*s,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(mt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Na=new C,hl=new Ji;class vn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Vt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Vt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let s=0,o=a.count;s<o;s++)e.isMesh===!0?e.getVertexPosition(s,Vt):Vt.fromBufferAttribute(a,s),Vt.applyMatrix4(e.matrixWorld),this.expandByPoint(Vt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tn.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Tn.copy(i.boundingBox)),Tn.applyMatrix4(e.matrixWorld),this.union(Tn)}const n=e.children;for(let a=0,s=n.length;a<s;a++)this.expandByObject(n[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vt),Vt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),bn.subVectors(this.max,Wr),lr.subVectors(e.a,Wr),cr.subVectors(e.b,Wr),hr.subVectors(e.c,Wr),_i.subVectors(cr,lr),vi.subVectors(hr,cr),Oi.subVectors(lr,hr);let t=[0,-_i.z,_i.y,0,-vi.z,vi.y,0,-Oi.z,Oi.y,_i.z,0,-_i.x,vi.z,0,-vi.x,Oi.z,0,-Oi.x,-_i.y,_i.x,0,-vi.y,vi.x,0,-Oi.y,Oi.x,0];return!Oa(t,lr,cr,hr,bn)||(t=[1,0,0,0,1,0,0,0,1],!Oa(t,lr,cr,hr,bn))?!1:(wn.crossVectors(_i,vi),t=[wn.x,wn.y,wn.z],Oa(t,lr,cr,hr,bn))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new C,new C,new C,new C,new C,new C,new C,new C],Vt=new C,Tn=new vn,lr=new C,cr=new C,hr=new C,_i=new C,vi=new C,Oi=new C,Wr=new C,bn=new C,wn=new C,Fi=new C;function Oa(r,e,t,i,n){for(let a=0,s=r.length-3;a<=s;a+=3){Fi.fromArray(r,a);const o=n.x*Math.abs(Fi.x)+n.y*Math.abs(Fi.y)+n.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=i.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const vd=new vn,Xr=new C,Fa=new C;class Ma{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):vd.setFromPoints(e).getCenter(i);let n=0;for(let a=0,s=e.length;a<s;a++)n=Math.max(n,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xr.subVectors(e,this.center);const t=Xr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Xr,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fa.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xr.copy(e.center).add(Fa)),this.expandByPoint(Xr.copy(e.center).sub(Fa))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const oi=new C,Ba=new C,An=new C,xi=new C,za=new C,Rn=new C,Ga=new C;class Sa{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(oi.copy(this.origin).addScaledVector(this.direction,t),oi.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Ba.copy(e).add(t).multiplyScalar(.5),An.copy(t).sub(e).normalize(),xi.copy(this.origin).sub(Ba);const a=e.distanceTo(t)*.5,s=-this.direction.dot(An),o=xi.dot(this.direction),l=-xi.dot(An),c=xi.lengthSq(),h=Math.abs(1-s*s);let d,u,f,g;if(h>0)if(d=s*l-o,u=s*o-l,g=a*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+s*u+2*o)+u*(s*d+u+2*l)+c}else u=a,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*l)+c;else u=-a,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-s*a+o)),u=d>0?-a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-a,-l),a),f=u*(u+2*l)+c):(d=Math.max(0,-(s*a+o)),u=d>0?a:Math.min(Math.max(-a,-l),a),f=-d*d+u*(u+2*l)+c);else u=s>0?-a:a,d=Math.max(0,-(s*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Ba).addScaledVector(An,u),f}intersectSphere(e,t){oi.subVectors(e.center,this.origin);const i=oi.dot(this.direction),n=oi.dot(oi)-i*i,a=e.radius*e.radius;if(n>a)return null;const s=Math.sqrt(a-n),o=i-s,l=i+s;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,a,s,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(i=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(a=(e.min.y-u.y)*h,s=(e.max.y-u.y)*h):(a=(e.max.y-u.y)*h,s=(e.min.y-u.y)*h),i>s||a>n||((a>i||isNaN(i))&&(i=a),(s<n||isNaN(n))&&(n=s),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),i>l||o>n)||((o>i||i!==i)&&(i=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,oi)!==null}intersectTriangle(e,t,i,n,a){za.subVectors(t,e),Rn.subVectors(i,e),Ga.crossVectors(za,Rn);let s=this.direction.dot(Ga),o;if(s>0){if(n)return null;o=1}else if(s<0)o=-1,s=-s;else return null;xi.subVectors(this.origin,e);const l=o*this.direction.dot(Rn.crossVectors(xi,Rn));if(l<0)return null;const c=o*this.direction.dot(za.cross(xi));if(c<0||l+c>s)return null;const h=-o*xi.dot(Ga);return h<0?null:this.at(h/s,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class et{constructor(e,t,i,n,a,s,o,l,c,h,d,u,f,g,_,p){et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,a,s,o,l,c,h,d,u,f,g,_,p)}set(e,t,i,n,a,s,o,l,c,h,d,u,f,g,_,p){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=a,m[5]=s,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new et().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/ur.setFromMatrixColumn(e,0).length(),a=1/ur.setFromMatrixColumn(e,1).length(),s=1/ur.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*s,t[9]=i[9]*s,t[10]=i[10]*s,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,a=e.z,s=Math.cos(i),o=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const u=s*h,f=s*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=s*l}else if(e.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=s*c,t[1]=s*d,t[5]=s*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=s*l}else if(e.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-s*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=s*h,t[9]=_-u*o,t[2]=-s*c,t[6]=o,t[10]=s*l}else if(e.order==="ZYX"){const u=s*h,f=s*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=s*l}else if(e.order==="YZX"){const u=s*l,f=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=s*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){const u=s*l,f=s*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=s*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,yd)}lookAt(e,t,i){const n=this.elements;return Dt.subVectors(e,t),Dt.lengthSq()===0&&(Dt.z=1),Dt.normalize(),yi.crossVectors(i,Dt),yi.lengthSq()===0&&(Math.abs(i.z)===1?Dt.x+=1e-4:Dt.z+=1e-4,Dt.normalize(),yi.crossVectors(i,Dt)),yi.normalize(),Cn.crossVectors(Dt,yi),n[0]=yi.x,n[4]=Cn.x,n[8]=Dt.x,n[1]=yi.y,n[5]=Cn.y,n[9]=Dt.y,n[2]=yi.z,n[6]=Cn.z,n[10]=Dt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,a=this.elements,s=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],_=i[6],p=i[10],m=i[14],b=i[3],M=i[7],E=i[11],N=i[15],R=n[0],A=n[4],I=n[8],ie=n[12],v=n[1],S=n[5],B=n[9],z=n[13],V=n[2],Y=n[6],G=n[10],$=n[14],k=n[3],ne=n[7],ue=n[11],Re=n[15];return a[0]=s*R+o*v+l*V+c*k,a[4]=s*A+o*S+l*Y+c*ne,a[8]=s*I+o*B+l*G+c*ue,a[12]=s*ie+o*z+l*$+c*Re,a[1]=h*R+d*v+u*V+f*k,a[5]=h*A+d*S+u*Y+f*ne,a[9]=h*I+d*B+u*G+f*ue,a[13]=h*ie+d*z+u*$+f*Re,a[2]=g*R+_*v+p*V+m*k,a[6]=g*A+_*S+p*Y+m*ne,a[10]=g*I+_*B+p*G+m*ue,a[14]=g*ie+_*z+p*$+m*Re,a[3]=b*R+M*v+E*V+N*k,a[7]=b*A+M*S+E*Y+N*ne,a[11]=b*I+M*B+E*G+N*ue,a[15]=b*ie+M*z+E*$+N*Re,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],a=e[12],s=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15];return g*(+a*l*d-n*c*d-a*o*u+i*c*u+n*o*f-i*l*f)+_*(+t*l*f-t*c*u+a*s*u-n*s*f+n*c*h-a*l*h)+p*(+t*c*d-t*o*f-a*s*d+i*s*f+a*o*h-i*c*h)+m*(-n*o*h-t*l*d+t*o*u+n*s*d-i*s*u+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],a=e[3],s=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],b=d*p*c-_*u*c+_*l*f-o*p*f-d*l*m+o*u*m,M=g*u*c-h*p*c-g*l*f+s*p*f+h*l*m-s*u*m,E=h*_*c-g*d*c+g*o*f-s*_*f-h*o*m+s*d*m,N=g*d*l-h*_*l-g*o*u+s*_*u+h*o*p-s*d*p,R=t*b+i*M+n*E+a*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=b*A,e[1]=(_*u*a-d*p*a-_*n*f+i*p*f+d*n*m-i*u*m)*A,e[2]=(o*p*a-_*l*a+_*n*c-i*p*c-o*n*m+i*l*m)*A,e[3]=(d*l*a-o*u*a-d*n*c+i*u*c+o*n*f-i*l*f)*A,e[4]=M*A,e[5]=(h*p*a-g*u*a+g*n*f-t*p*f-h*n*m+t*u*m)*A,e[6]=(g*l*a-s*p*a-g*n*c+t*p*c+s*n*m-t*l*m)*A,e[7]=(s*u*a-h*l*a+h*n*c-t*u*c-s*n*f+t*l*f)*A,e[8]=E*A,e[9]=(g*d*a-h*_*a-g*i*f+t*_*f+h*i*m-t*d*m)*A,e[10]=(s*_*a-g*o*a+g*i*c-t*_*c-s*i*m+t*o*m)*A,e[11]=(h*o*a-s*d*a-h*i*c+t*d*c+s*i*f-t*o*f)*A,e[12]=N*A,e[13]=(h*_*n-g*d*n+g*i*u-t*_*u-h*i*p+t*d*p)*A,e[14]=(g*o*n-s*_*n-g*i*l+t*_*l+s*i*p-t*o*p)*A,e[15]=(s*d*n-h*o*n+h*i*l-t*d*l-s*i*u+t*o*u)*A,this}scale(e){const t=this.elements,i=e.x,n=e.y,a=e.z;return t[0]*=i,t[4]*=n,t[8]*=a,t[1]*=i,t[5]*=n,t[9]*=a,t[2]*=i,t[6]*=n,t[10]*=a,t[3]*=i,t[7]*=n,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),a=1-i,s=e.x,o=e.y,l=e.z,c=a*s,h=a*o;return this.set(c*s+i,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+i,h*l-n*s,0,c*l-n*o,h*l+n*s,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,a,s){return this.set(1,i,a,0,e,1,s,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,a=t._x,s=t._y,o=t._z,l=t._w,c=a+a,h=s+s,d=o+o,u=a*c,f=a*h,g=a*d,_=s*h,p=s*d,m=o*d,b=l*c,M=l*h,E=l*d,N=i.x,R=i.y,A=i.z;return n[0]=(1-(_+m))*N,n[1]=(f+E)*N,n[2]=(g-M)*N,n[3]=0,n[4]=(f-E)*R,n[5]=(1-(u+m))*R,n[6]=(p+b)*R,n[7]=0,n[8]=(g+M)*A,n[9]=(p-b)*A,n[10]=(1-(u+_))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let a=ur.set(n[0],n[1],n[2]).length();const s=ur.set(n[4],n[5],n[6]).length(),o=ur.set(n[8],n[9],n[10]).length();this.determinant()<0&&(a=-a),e.x=n[12],e.y=n[13],e.z=n[14],Wt.copy(this);const l=1/a,c=1/s,h=1/o;return Wt.elements[0]*=l,Wt.elements[1]*=l,Wt.elements[2]*=l,Wt.elements[4]*=c,Wt.elements[5]*=c,Wt.elements[6]*=c,Wt.elements[8]*=h,Wt.elements[9]*=h,Wt.elements[10]*=h,t.setFromRotationMatrix(Wt),i.x=a,i.y=s,i.z=o,this}makePerspective(e,t,i,n,a,s,o=fi){const l=this.elements,c=2*a/(t-e),h=2*a/(i-n),d=(t+e)/(t-e),u=(i+n)/(i-n);let f,g;if(o===fi)f=-(s+a)/(s-a),g=-2*s*a/(s-a);else if(o===fa)f=-s/(s-a),g=-s*a/(s-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,a,s,o=fi){const l=this.elements,c=1/(t-e),h=1/(i-n),d=1/(s-a),u=(t+e)*c,f=(i+n)*h;let g,_;if(o===fi)g=(s+a)*d,_=-2*d;else if(o===fa)g=a*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ur=new C,Wt=new et,xd=new C(0,0,0),yd=new C(1,1,1),yi=new C,Cn=new C,Dt=new C,ul=new et,dl=new Ji;class ri{constructor(e=0,t=0,i=0,n=ri.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,a=n[0],s=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(mt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-s,a)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-mt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(mt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-s,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-mt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-s,c));break;case"YZX":this._z=Math.asin(mt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-mt(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ul.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ul,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return dl.setFromEuler(this),this.setFromQuaternion(dl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ri.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Md=0;const pl=new C,dr=new Ji,li=new et,Pn=new C,jr=new C,Sd=new C,Ed=new Ji,fl=new C(1,0,0),ml=new C(0,1,0),gl=new C(0,0,1),_l={type:"added"},Td={type:"removed"},pr={type:"childadded",child:null},ka={type:"childremoved",child:null};class gt extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=tr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new C,t=new ri,i=new Ji,n=new C(1,1,1);function a(){i.setFromEuler(t,!1)}function s(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new et},normalMatrix:{value:new Ge}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.multiply(dr),this}rotateOnWorldAxis(e,t){return dr.setFromAxisAngle(e,t),this.quaternion.premultiply(dr),this}rotateX(e){return this.rotateOnAxis(fl,e)}rotateY(e){return this.rotateOnAxis(ml,e)}rotateZ(e){return this.rotateOnAxis(gl,e)}translateOnAxis(e,t){return pl.copy(e).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(fl,e)}translateY(e){return this.translateOnAxis(ml,e)}translateZ(e){return this.translateOnAxis(gl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Pn.copy(e):Pn.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(jr,Pn,this.up):li.lookAt(Pn,jr,this.up),this.quaternion.setFromRotationMatrix(li),n&&(li.extractRotation(n.matrixWorld),dr.setFromRotationMatrix(li),this.quaternion.premultiply(dr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_l),pr.child=e,this.dispatchEvent(pr),pr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Td),ka.child=e,this.dispatchEvent(ka),ka.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_l),pr.child=e,this.dispatchEvent(pr),pr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,e,Sd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const n=this.children;for(let a=0,s=n.length;a<s;a++)n[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.visibility=this._visibility,n.active=this._active,n.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.geometryCount=this._geometryCount,n.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere={center:n.boundingSphere.center.toArray(),radius:n.boundingSphere.radius}),this.boundingBox!==null&&(n.boundingBox={min:n.boundingBox.min.toArray(),max:n.boundingBox.max.toArray()}));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));n.material=o}else n.material=a(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];n.animations.push(a(e.animations,l))}}if(t){const o=s(e.geometries),l=s(e.materials),c=s(e.textures),h=s(e.images),d=s(e.shapes),u=s(e.skeletons),f=s(e.animations),g=s(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function s(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}gt.DEFAULT_UP=new C(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xt=new C,ci=new C,Ha=new C,hi=new C,fr=new C,mr=new C,vl=new C,Va=new C,Wa=new C,Xa=new C,ja=new nt,Ya=new nt,qa=new nt;class qt{constructor(e=new C,t=new C,i=new C){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Xt.subVectors(e,t),n.cross(Xt);const a=n.lengthSq();return a>0?n.multiplyScalar(1/Math.sqrt(a)):n.set(0,0,0)}static getBarycoord(e,t,i,n,a){Xt.subVectors(n,t),ci.subVectors(i,t),Ha.subVectors(e,t);const s=Xt.dot(Xt),o=Xt.dot(ci),l=Xt.dot(Ha),c=ci.dot(ci),h=ci.dot(Ha),d=s*c-o*o;if(d===0)return a.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(s*h-o*l)*u;return a.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,hi)===null?!1:hi.x>=0&&hi.y>=0&&hi.x+hi.y<=1}static getInterpolation(e,t,i,n,a,s,o,l){return this.getBarycoord(e,t,i,n,hi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,hi.x),l.addScaledVector(s,hi.y),l.addScaledVector(o,hi.z),l)}static getInterpolatedAttribute(e,t,i,n,a,s){return ja.setScalar(0),Ya.setScalar(0),qa.setScalar(0),ja.fromBufferAttribute(e,t),Ya.fromBufferAttribute(e,i),qa.fromBufferAttribute(e,n),s.setScalar(0),s.addScaledVector(ja,a.x),s.addScaledVector(Ya,a.y),s.addScaledVector(qa,a.z),s}static isFrontFacing(e,t,i,n){return Xt.subVectors(i,t),ci.subVectors(e,t),Xt.cross(ci).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xt.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Xt.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,a){return qt.getInterpolation(e,this.a,this.b,this.c,t,i,n,a)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,a=this.c;let s,o;fr.subVectors(n,i),mr.subVectors(a,i),Va.subVectors(e,i);const l=fr.dot(Va),c=mr.dot(Va);if(l<=0&&c<=0)return t.copy(i);Wa.subVectors(e,n);const h=fr.dot(Wa),d=mr.dot(Wa);if(h>=0&&d<=h)return t.copy(n);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return s=l/(l-h),t.copy(i).addScaledVector(fr,s);Xa.subVectors(e,a);const f=fr.dot(Xa),g=mr.dot(Xa);if(g>=0&&f<=g)return t.copy(a);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(mr,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return vl.subVectors(a,n),o=(d-h)/(d-h+(f-g)),t.copy(n).addScaledVector(vl,o);const m=1/(p+_+u);return s=_*m,o=u*m,t.copy(i).addScaledVector(fr,s).addScaledVector(mr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Mi={h:0,s:0,l:0},Ln={h:0,s:0,l:0};function Ka(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ke{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ei){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,qe.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=qe.workingColorSpace){return this.r=e,this.g=t,this.b=i,qe.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=qe.workingColorSpace){if(e=Mo(e,1),t=mt(t,0,1),i=mt(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,s=2*i-a;this.r=Ka(s,a,e+1/3),this.g=Ka(s,a,e),this.b=Ka(s,a,e-1/3)}return qe.toWorkingColorSpace(this,n),this}setStyle(e,t=ei){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const s=n[1],o=n[2];switch(s){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=n[1],s=a.length;if(s===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(s===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ei){const i=Zc[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pr(e.r),this.g=Pr(e.g),this.b=Pr(e.b),this}copyLinearToSRGB(e){return this.r=Ia(e.r),this.g=Ia(e.g),this.b=Ia(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ei){return qe.fromWorkingColorSpace(yt.copy(this),e),Math.round(mt(yt.r*255,0,255))*65536+Math.round(mt(yt.g*255,0,255))*256+Math.round(mt(yt.b*255,0,255))}getHexString(e=ei){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=qe.workingColorSpace){qe.fromWorkingColorSpace(yt.copy(this),t);const i=yt.r,n=yt.g,a=yt.b,s=Math.max(i,n,a),o=Math.min(i,n,a);let l,c;const h=(o+s)/2;if(o===s)l=0,c=0;else{const d=s-o;switch(c=h<=.5?d/(s+o):d/(2-s-o),s){case i:l=(n-a)/d+(n<a?6:0);break;case n:l=(a-i)/d+2;break;case a:l=(i-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=qe.workingColorSpace){return qe.fromWorkingColorSpace(yt.copy(this),t),e.r=yt.r,e.g=yt.g,e.b=yt.b,e}getStyle(e=ei){qe.fromWorkingColorSpace(yt.copy(this),e);const t=yt.r,i=yt.g,n=yt.b;return e!==ei?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(Mi),this.setHSL(Mi.h+e,Mi.s+t,Mi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Mi),e.getHSL(Ln);const i=tn(Mi.h,Ln.h,t),n=tn(Mi.s,Ln.s,t),a=tn(Mi.l,Ln.l,t);return this.setHSL(i,n,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,n=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*n,this.g=a[1]*t+a[4]*i+a[7]*n,this.b=a[2]*t+a[5]*i+a[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const yt=new ke;ke.NAMES=Zc;let bd=0;class zr extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:bd++}),this.uuid=tr(),this.name="",this.type="Material",this.blending=Rr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gs,this.blendDst=_s,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ke(0,0,0),this.blendAlpha=0,this.depthFunc=Ur,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=sr,this.stencilZFail=sr,this.stencilZPass=sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const n=this[t];if(n===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rr&&(i.blending=this.blending),this.side!==Ri&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==gs&&(i.blendSrc=this.blendSrc),this.blendDst!==_s&&(i.blendDst=this.blendDst),this.blendEquation!==Xi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ur&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==rl&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==sr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==sr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==sr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(a){const s=[];for(const o in a){const l=a[o];delete l.metadata,s.push(l)}return s}if(t){const a=n(e.textures),s=n(e.images);a.length>0&&(i.textures=a),s.length>0&&(i.images=s)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let a=0;a!==n;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Jc extends zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ke(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const lt=new C,Un=new ae;class Zt{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=nl,this.updateRanges=[],this.gpuType=pi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,a=this.itemSize;n<a;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Un.fromBufferAttribute(this,t),Un.applyMatrix3(e),this.setXY(t,Un.x,Un.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix3(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyMatrix4(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.applyNormalMatrix(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)lt.fromBufferAttribute(this,t),lt.transformDirection(e),this.setXYZ(t,lt.x,lt.y,lt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Sr(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=St(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=St(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),n=St(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,a){return e*=this.itemSize,this.normalized&&(t=St(t,this.array),i=St(i,this.array),n=St(n,this.array),a=St(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nl&&(e.usage=this.usage),e}}class $c extends Zt{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Qc extends Zt{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class _t extends Zt{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wd=0;const Gt=new et,Za=new gt,gr=new C,Nt=new vn,Yr=new vn,ft=new C;class Ut extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=tr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yc(e)?Qc:$c)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ge().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gt.makeRotationFromQuaternion(e),this.applyMatrix4(Gt),this}rotateX(e){return Gt.makeRotationX(e),this.applyMatrix4(Gt),this}rotateY(e){return Gt.makeRotationY(e),this.applyMatrix4(Gt),this}rotateZ(e){return Gt.makeRotationZ(e),this.applyMatrix4(Gt),this}translate(e,t,i){return Gt.makeTranslation(e,t,i),this.applyMatrix4(Gt),this}scale(e,t,i){return Gt.makeScale(e,t,i),this.applyMatrix4(Gt),this}lookAt(e){return Za.lookAt(e),Za.updateMatrix(),this.applyMatrix4(Za.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(gr).negate(),this.translate(gr.x,gr.y,gr.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const a=e[i];t.push(a.x,a.y,a.z||0)}return this.setAttribute("position",new _t(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const a=t[i];Nt.setFromBufferAttribute(a),this.morphTargetsRelative?(ft.addVectors(this.boundingBox.min,Nt.min),this.boundingBox.expandByPoint(ft),ft.addVectors(this.boundingBox.max,Nt.max),this.boundingBox.expandByPoint(ft)):(this.boundingBox.expandByPoint(Nt.min),this.boundingBox.expandByPoint(Nt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ma);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){const i=this.boundingSphere.center;if(Nt.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const o=t[a];Yr.setFromBufferAttribute(o),this.morphTargetsRelative?(ft.addVectors(Nt.min,Yr.min),Nt.expandByPoint(ft),ft.addVectors(Nt.max,Yr.max),Nt.expandByPoint(ft)):(Nt.expandByPoint(Yr.min),Nt.expandByPoint(Yr.max))}Nt.getCenter(i);let n=0;for(let a=0,s=e.count;a<s;a++)ft.fromBufferAttribute(e,a),n=Math.max(n,i.distanceToSquared(ft));if(t)for(let a=0,s=t.length;a<s;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)ft.fromBufferAttribute(o,c),l&&(gr.fromBufferAttribute(e,c),ft.add(gr)),n=Math.max(n,i.distanceToSquared(ft))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,n=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zt(new Float32Array(4*i.count),4));const s=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<i.count;I++)o[I]=new C,l[I]=new C;const c=new C,h=new C,d=new C,u=new ae,f=new ae,g=new ae,_=new C,p=new C;function m(I,ie,v){c.fromBufferAttribute(i,I),h.fromBufferAttribute(i,ie),d.fromBufferAttribute(i,v),u.fromBufferAttribute(a,I),f.fromBufferAttribute(a,ie),g.fromBufferAttribute(a,v),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const S=1/(f.x*g.y-g.x*f.y);isFinite(S)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(S),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(S),o[I].add(_),o[ie].add(_),o[v].add(_),l[I].add(p),l[ie].add(p),l[v].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,ie=b.length;I<ie;++I){const v=b[I],S=v.start,B=v.count;for(let z=S,V=S+B;z<V;z+=3)m(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const M=new C,E=new C,N=new C,R=new C;function A(I){N.fromBufferAttribute(n,I),R.copy(N);const ie=o[I];M.copy(ie),M.sub(N.multiplyScalar(N.dot(ie))).normalize(),E.crossVectors(R,ie);const v=E.dot(l[I])<0?-1:1;s.setXYZW(I,M.x,M.y,M.z,v)}for(let I=0,ie=b.length;I<ie;++I){const v=b[I],S=v.start,B=v.count;for(let z=S,V=S+B;z<V;z+=3)A(e.getX(z+0)),A(e.getX(z+1)),A(e.getX(z+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Zt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);const n=new C,a=new C,s=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let u=0,f=e.count;u<f;u+=3){const g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);n.fromBufferAttribute(t,g),a.fromBufferAttribute(t,_),s.fromBufferAttribute(t,p),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),a.fromBufferAttribute(t,u+1),s.fromBufferAttribute(t,u+2),h.subVectors(s,a),d.subVectors(n,a),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ft.fromBufferAttribute(e,t),ft.normalize(),e.setXYZ(t,ft.x,ft.y,ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Zt(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ut,i=this.index.array,n=this.attributes;for(const o in n){const l=n[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=e(u,i);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let o=0,l=s.length;o<l;o++){const c=s[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,a=!0)}a&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(e.data.groups=JSON.parse(JSON.stringify(s)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const s=e.groups;for(let c=0,h=s.length;c<h;c++){const d=s[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const xl=new et,Bi=new Sa,In=new Ma,yl=new C,Dn=new C,Nn=new C,On=new C,Ja=new C,Fn=new C,Ml=new C,Bn=new C;class Pt extends gt{constructor(e=new Ut,t=new Jc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,a=i.morphAttributes.position,s=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const o=this.morphTargetInfluences;if(a&&o){Fn.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(Ja.fromBufferAttribute(d,e),s?Fn.addScaledVector(Ja,h):Fn.addScaledVector(Ja.sub(t),h))}t.add(Fn)}return t}raycast(e,t){const i=this.geometry,n=this.material,a=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),In.copy(i.boundingSphere),In.applyMatrix4(a),Bi.copy(e.ray).recast(e.near),!(In.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(In,yl)===null||Bi.origin.distanceToSquared(yl)>(e.far-e.near)**2))&&(xl.copy(a).invert(),Bi.copy(e.ray).applyMatrix4(xl),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let n;const a=this.geometry,s=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,u=a.groups,f=a.drawRange;if(o!==null)if(Array.isArray(s))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=s[p.materialIndex],b=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let E=b,N=M;E<N;E+=3){const R=o.getX(E),A=o.getX(E+1),I=o.getX(E+2);n=zn(this,m,e,i,c,h,d,R,A,I),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=o.getX(p),M=o.getX(p+1),E=o.getX(p+2);n=zn(this,s,e,i,c,h,d,b,M,E),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(s))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=s[p.materialIndex],b=Math.max(p.start,f.start),M=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let E=b,N=M;E<N;E+=3){const R=E,A=E+1,I=E+2;n=zn(this,m,e,i,c,h,d,R,A,I),n&&(n.faceIndex=Math.floor(E/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const b=p,M=p+1,E=p+2;n=zn(this,s,e,i,c,h,d,b,M,E),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}}function Ad(r,e,t,i,n,a,s,o){let l;if(e.side===Lt?l=i.intersectTriangle(s,a,n,!0,o):l=i.intersectTriangle(n,a,s,e.side===Ri,o),l===null)return null;Bn.copy(o),Bn.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Bn);return c<t.near||c>t.far?null:{distance:c,point:Bn.clone(),object:r}}function zn(r,e,t,i,n,a,s,o,l,c){r.getVertexPosition(o,Dn),r.getVertexPosition(l,Nn),r.getVertexPosition(c,On);const h=Ad(r,e,t,i,Dn,Nn,On,Ml);if(h){const d=new C;qt.getBarycoord(Ml,Dn,Nn,On,d),n&&(h.uv=qt.getInterpolatedAttribute(n,o,l,c,d,new ae)),a&&(h.uv1=qt.getInterpolatedAttribute(a,o,l,c,d,new ae)),s&&(h.normal=qt.getInterpolatedAttribute(s,o,l,c,d,new C),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:l,c,normal:new C,materialIndex:0};qt.getNormal(Dn,Nn,On,u.normal),h.face=u,h.barycoord=d}return h}class xn extends Ut{constructor(e=1,t=1,i=1,n=1,a=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:a,depthSegments:s};const o=this;n=Math.floor(n),a=Math.floor(a),s=Math.floor(s);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,i,t,e,s,a,0),g("z","y","x",1,-1,i,t,-e,s,a,1),g("x","z","y",1,1,e,i,t,n,s,2),g("x","z","y",1,-1,e,i,-t,n,s,3),g("x","y","z",1,-1,e,t,i,n,a,4),g("x","y","z",-1,-1,e,t,-i,n,a,5),this.setIndex(l),this.setAttribute("position",new _t(c,3)),this.setAttribute("normal",new _t(h,3)),this.setAttribute("uv",new _t(d,2));function g(_,p,m,b,M,E,N,R,A,I,ie){const v=E/A,S=N/I,B=E/2,z=N/2,V=R/2,Y=A+1,G=I+1;let $=0,k=0;const ne=new C;for(let ue=0;ue<G;ue++){const Re=ue*S-z;for(let Ve=0;Ve<Y;Ve++){const Xe=Ve*v-B;ne[_]=Xe*b,ne[p]=Re*M,ne[m]=V,c.push(ne.x,ne.y,ne.z),ne[_]=0,ne[p]=0,ne[m]=R>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(Ve/A),d.push(1-ue/I),$+=1}}for(let ue=0;ue<I;ue++)for(let Re=0;Re<A;Re++){const Ve=u+Re+Y*ue,Xe=u+Re+Y*(ue+1),X=u+(Re+1)+Y*(ue+1),Q=u+(Re+1)+Y*ue;l.push(Ve,Xe,Q),l.push(Xe,X,Q),k+=6}o.addGroup(f,k,ie),f+=k,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fr(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?n.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Et(r){const e={};for(let t=0;t<r.length;t++){const i=Fr(r[t]);for(const n in i)e[n]=i[n]}return e}function Rd(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function eh(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:qe.workingColorSpace}const Cd={clone:Fr,merge:Et};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ci extends zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fr(e.uniforms),this.uniformsGroups=Rd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class th extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Si=new C,Sl=new ae,El=new ae;class kt extends th{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=hn*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(en*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return hn*2*Math.atan(Math.tan(en*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){Si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Si.x,Si.y).multiplyScalar(-e/Si.z),Si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Si.x,Si.y).multiplyScalar(-e/Si.z)}getViewSize(e,t){return this.getViewBounds(e,Sl,El),t.subVectors(El,Sl)}setViewOffset(e,t,i,n,a,s){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(en*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,a=-.5*n;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,c=s.fullHeight;a+=s.offsetX*n/l,t-=s.offsetY*i/c,n*=s.width/l,i*=s.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+n,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const _r=-90,vr=1;class Ud extends gt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const n=new kt(_r,vr,e,t);n.layers=this.layers,this.add(n);const a=new kt(_r,vr,e,t);a.layers=this.layers,this.add(a);const s=new kt(_r,vr,e,t);s.layers=this.layers,this.add(s);const o=new kt(_r,vr,e,t);o.layers=this.layers,this.add(o);const l=new kt(_r,vr,e,t);l.layers=this.layers,this.add(l);const c=new kt(_r,vr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,n,a,s,o,l]=t;for(const c of t)this.remove(c);if(e===fi)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fa)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,s,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,n),e.render(t,a),e.setRenderTarget(i,1,n),e.render(t,s),e.setRenderTarget(i,2,n),e.render(t,o),e.setRenderTarget(i,3,n),e.render(t,l),e.setRenderTarget(i,4,n),e.render(t,c),i.texture.generateMipmaps=_,e.setRenderTarget(i,5,n),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class ih extends Tt{constructor(e,t,i,n,a,s,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ir,super(e,t,i,n,a,s,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Id extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ih(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Yt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new xn(5,5,5),a=new Ci({name:"CubemapFromEquirect",uniforms:Fr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Lt,blending:wi});a.uniforms.tEquirect.value=t;const s=new Pt(n,a),o=t.minFilter;return t.minFilter===qi&&(t.minFilter=Yt),new Ud(1,10,this).update(e,s),t.minFilter=o,s.geometry.dispose(),s.material.dispose(),this}clear(e,t,i,n){const a=e.getRenderTarget();for(let s=0;s<6;s++)e.setRenderTarget(this,s),e.clear(t,i,n);e.setRenderTarget(a)}}const $a=new C,Dd=new C,Nd=new Ge;class Ti{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=$a.subVectors(i,t).cross(Dd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta($a),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/n;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Nd.getNormalMatrix(e),n=this.coplanarPoint($a).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const zi=new Ma,Gn=new C;class Eo{constructor(e=new Ti,t=new Ti,i=new Ti,n=new Ti,a=new Ti,s=new Ti){this.planes=[e,t,i,n,a,s]}set(e,t,i,n,a,s){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(a),o[5].copy(s),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=fi){const i=this.planes,n=e.elements,a=n[0],s=n[1],o=n[2],l=n[3],c=n[4],h=n[5],d=n[6],u=n[7],f=n[8],g=n[9],_=n[10],p=n[11],m=n[12],b=n[13],M=n[14],E=n[15];if(i[0].setComponents(l-a,u-c,p-f,E-m).normalize(),i[1].setComponents(l+a,u+c,p+f,E+m).normalize(),i[2].setComponents(l+s,u+h,p+g,E+b).normalize(),i[3].setComponents(l-s,u-h,p-g,E-b).normalize(),i[4].setComponents(l-o,u-d,p-_,E-M).normalize(),t===fi)i[5].setComponents(l+o,u+d,p+_,E+M).normalize();else if(t===fa)i[5].setComponents(o,d,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(zi)}intersectsSprite(e){return zi.center.set(0,0,0),zi.radius=.7071067811865476,zi.applyMatrix4(e.matrixWorld),this.intersectsSphere(zi)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Gn.x=n.normal.x>0?e.max.x:e.min.x,Gn.y=n.normal.y>0?e.max.y:e.min.y,Gn.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Gn)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function rh(){let r=null,e=!1,t=null,i=null;function n(a,s){t(a,s),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){r=a}}}function Od(r){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=r.createBuffer();r.bindBuffer(l,u),r.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(r.bindBuffer(c,o),d.length===0)r.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){const g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){const _=d[f];r.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function s(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:n,remove:a,update:s}}class $i extends Ut{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const a=e/2,s=t/2,o=Math.floor(i),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const b=m*u-s;for(let M=0;M<c;M++){const E=M*d-a;g.push(E,-b,0),_.push(0,0,1),p.push(M/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){const M=b+c*m,E=b+c*(m+1),N=b+1+c*(m+1),R=b+1+c*m;f.push(M,E,R),f.push(E,N,R)}this.setIndex(f),this.setAttribute("position",new _t(g,3)),this.setAttribute("normal",new _t(_,3)),this.setAttribute("uv",new _t(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $i(e.width,e.height,e.widthSegments,e.heightSegments)}}var Fd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Bd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Gd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Hd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Wd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Xd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,jd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Yd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Kd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Zd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Jd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ip=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,np=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ap=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,op=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,lp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,hp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,up=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,mp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,_p=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,vp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,xp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ep=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Tp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,bp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Rp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Cp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Pp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Lp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Up=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ip=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Np=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Op=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Bp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Hp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Vp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,jp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Kp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Zp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$p=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,tf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,rf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,of=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,hf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,df=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,pf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ff=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_f=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,yf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Mf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Sf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ef=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Tf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,bf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Af=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Uf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,If=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Nf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Of=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ff=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gf=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Xf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,jf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Kf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Jf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$f=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,em=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,im=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,um=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,pm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Fd,alphahash_pars_fragment:Bd,alphamap_fragment:zd,alphamap_pars_fragment:Gd,alphatest_fragment:kd,alphatest_pars_fragment:Hd,aomap_fragment:Vd,aomap_pars_fragment:Wd,batching_pars_vertex:Xd,batching_vertex:jd,begin_vertex:Yd,beginnormal_vertex:qd,bsdfs:Kd,iridescence_fragment:Zd,bumpmap_pars_fragment:Jd,clipping_planes_fragment:$d,clipping_planes_pars_fragment:Qd,clipping_planes_pars_vertex:ep,clipping_planes_vertex:tp,color_fragment:ip,color_pars_fragment:rp,color_pars_vertex:np,color_vertex:ap,common:sp,cube_uv_reflection_fragment:op,defaultnormal_vertex:lp,displacementmap_pars_vertex:cp,displacementmap_vertex:hp,emissivemap_fragment:up,emissivemap_pars_fragment:dp,colorspace_fragment:pp,colorspace_pars_fragment:fp,envmap_fragment:mp,envmap_common_pars_fragment:gp,envmap_pars_fragment:_p,envmap_pars_vertex:vp,envmap_physical_pars_fragment:Cp,envmap_vertex:xp,fog_vertex:yp,fog_pars_vertex:Mp,fog_fragment:Sp,fog_pars_fragment:Ep,gradientmap_pars_fragment:Tp,lightmap_pars_fragment:bp,lights_lambert_fragment:wp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Rp,lights_toon_fragment:Pp,lights_toon_pars_fragment:Lp,lights_phong_fragment:Up,lights_phong_pars_fragment:Ip,lights_physical_fragment:Dp,lights_physical_pars_fragment:Np,lights_fragment_begin:Op,lights_fragment_maps:Fp,lights_fragment_end:Bp,logdepthbuf_fragment:zp,logdepthbuf_pars_fragment:Gp,logdepthbuf_pars_vertex:kp,logdepthbuf_vertex:Hp,map_fragment:Vp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:jp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:qp,morphinstance_vertex:Kp,morphcolor_vertex:Zp,morphnormal_vertex:Jp,morphtarget_pars_vertex:$p,morphtarget_vertex:Qp,normal_fragment_begin:ef,normal_fragment_maps:tf,normal_pars_fragment:rf,normal_pars_vertex:nf,normal_vertex:af,normalmap_pars_fragment:sf,clearcoat_normal_fragment_begin:of,clearcoat_normal_fragment_maps:lf,clearcoat_pars_fragment:cf,iridescence_pars_fragment:hf,opaque_fragment:uf,packing:df,premultiplied_alpha_fragment:pf,project_vertex:ff,dithering_fragment:mf,dithering_pars_fragment:gf,roughnessmap_fragment:_f,roughnessmap_pars_fragment:vf,shadowmap_pars_fragment:xf,shadowmap_pars_vertex:yf,shadowmap_vertex:Mf,shadowmask_pars_fragment:Sf,skinbase_vertex:Ef,skinning_pars_vertex:Tf,skinning_vertex:bf,skinnormal_vertex:wf,specularmap_fragment:Af,specularmap_pars_fragment:Rf,tonemapping_fragment:Cf,tonemapping_pars_fragment:Pf,transmission_fragment:Lf,transmission_pars_fragment:Uf,uv_pars_fragment:If,uv_pars_vertex:Df,uv_vertex:Nf,worldpos_vertex:Of,background_vert:Ff,background_frag:Bf,backgroundCube_vert:zf,backgroundCube_frag:Gf,cube_vert:kf,cube_frag:Hf,depth_vert:Vf,depth_frag:Wf,distanceRGBA_vert:Xf,distanceRGBA_frag:jf,equirect_vert:Yf,equirect_frag:qf,linedashed_vert:Kf,linedashed_frag:Zf,meshbasic_vert:Jf,meshbasic_frag:$f,meshlambert_vert:Qf,meshlambert_frag:em,meshmatcap_vert:tm,meshmatcap_frag:im,meshnormal_vert:rm,meshnormal_frag:nm,meshphong_vert:am,meshphong_frag:sm,meshphysical_vert:om,meshphysical_frag:lm,meshtoon_vert:cm,meshtoon_frag:hm,points_vert:um,points_frag:dm,shadow_vert:pm,shadow_frag:fm,sprite_vert:mm,sprite_frag:gm},ce={common:{diffuse:{value:new ke(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ae(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ke(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ke(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new ke(16777215)},opacity:{value:1},center:{value:new ae(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},ti={basic:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Et([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},specular:{value:new ke(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Et([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new ke(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Et([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new ke(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Et([ce.points,ce.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Et([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Et([ce.common,ce.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Et([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Et([ce.sprite,ce.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Et([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Et([ce.lights,ce.fog,{color:{value:new ke(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};ti.physical={uniforms:Et([ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ae(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new ke(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ae},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new ke(0)},specularColor:{value:new ke(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ae},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const kn={r:0,b:0,g:0},Gi=new ri,_m=new et;function vm(r,e,t,i,n,a,s){const o=new ke(0);let l=a===!0?0:1,c,h,d=null,u=0,f=null;function g(b){let M=b.isScene===!0?b.background:null;return M&&M.isTexture&&(M=(b.backgroundBlurriness>0?t:e).get(M)),M}function _(b){let M=!1;const E=g(b);E===null?m(o,l):E&&E.isColor&&(m(E,1),M=!0);const N=r.xr.getEnvironmentBlendMode();N==="additive"?i.buffers.color.setClear(0,0,0,1,s):N==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,s),(r.autoClear||M)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function p(b,M){const E=g(M);E&&(E.isCubeTexture||E.mapping===xa)?(h===void 0&&(h=new Pt(new xn(1,1,1),new Ci({name:"BackgroundCubeMaterial",uniforms:Fr(ti.backgroundCube.uniforms),vertexShader:ti.backgroundCube.vertexShader,fragmentShader:ti.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),Gi.copy(M.backgroundRotation),Gi.x*=-1,Gi.y*=-1,Gi.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Gi.y*=-1,Gi.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(_m.makeRotationFromEuler(Gi)),h.material.toneMapped=qe.getTransfer(E.colorSpace)!==Qe,(d!==E||u!==E.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,d=E,u=E.version,f=r.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new Pt(new $i(2,2),new Ci({name:"BackgroundMaterial",uniforms:Fr(ti.background.uniforms),vertexShader:ti.background.vertexShader,fragmentShader:ti.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=qe.getTransfer(E.colorSpace)!==Qe,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(d!==E||u!==E.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,d=E,u=E.version,f=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,M){b.getRGB(kn,eh(r)),i.buffers.color.setClear(kn.r,kn.g,kn.b,M,s)}return{getClearColor:function(){return o},setClearColor:function(b,M=1){o.set(b),l=M,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,m(o,l)},render:_,addToRenderList:p}}function xm(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),i={},n=u(null);let a=n,s=!1;function o(v,S,B,z,V){let Y=!1;const G=d(z,B,S);a!==G&&(a=G,c(a.object)),Y=f(v,z,B,V),Y&&g(v,z,B,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,E(v,S,B,z),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(v){return r.bindVertexArray(v)}function h(v){return r.deleteVertexArray(v)}function d(v,S,B){const z=B.wireframe===!0;let V=i[v.id];V===void 0&&(V={},i[v.id]=V);let Y=V[S.id];Y===void 0&&(Y={},V[S.id]=Y);let G=Y[z];return G===void 0&&(G=u(l()),Y[z]=G),G}function u(v){const S=[],B=[],z=[];for(let V=0;V<t;V++)S[V]=0,B[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:S,enabledAttributes:B,attributeDivisors:z,object:v,attributes:{},index:null}}function f(v,S,B,z){const V=a.attributes,Y=S.attributes;let G=0;const $=B.getAttributes();for(const k in $)if($[k].location>=0){const ne=V[k];let ue=Y[k];if(ue===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ue=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ue=v.instanceColor)),ne===void 0||ne.attribute!==ue||ue&&ne.data!==ue.data)return!0;G++}return a.attributesNum!==G||a.index!==z}function g(v,S,B,z){const V={},Y=S.attributes;let G=0;const $=B.getAttributes();for(const k in $)if($[k].location>=0){let ne=Y[k];ne===void 0&&(k==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),k==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor));const ue={};ue.attribute=ne,ne&&ne.data&&(ue.data=ne.data),V[k]=ue,G++}a.attributes=V,a.attributesNum=G,a.index=z}function _(){const v=a.newAttributes;for(let S=0,B=v.length;S<B;S++)v[S]=0}function p(v){m(v,0)}function m(v,S){const B=a.newAttributes,z=a.enabledAttributes,V=a.attributeDivisors;B[v]=1,z[v]===0&&(r.enableVertexAttribArray(v),z[v]=1),V[v]!==S&&(r.vertexAttribDivisor(v,S),V[v]=S)}function b(){const v=a.newAttributes,S=a.enabledAttributes;for(let B=0,z=S.length;B<z;B++)S[B]!==v[B]&&(r.disableVertexAttribArray(B),S[B]=0)}function M(v,S,B,z,V,Y,G){G===!0?r.vertexAttribIPointer(v,S,B,V,Y):r.vertexAttribPointer(v,S,B,z,V,Y)}function E(v,S,B,z){_();const V=z.attributes,Y=B.getAttributes(),G=S.defaultAttributeValues;for(const $ in Y){const k=Y[$];if(k.location>=0){let ne=V[$];if(ne===void 0&&($==="instanceMatrix"&&v.instanceMatrix&&(ne=v.instanceMatrix),$==="instanceColor"&&v.instanceColor&&(ne=v.instanceColor)),ne!==void 0){const ue=ne.normalized,Re=ne.itemSize,Ve=e.get(ne);if(Ve===void 0)continue;const Xe=Ve.buffer,X=Ve.type,Q=Ve.bytesPerElement,se=X===r.INT||X===r.UNSIGNED_INT||ne.gpuType===fo;if(ne.isInterleavedBufferAttribute){const oe=ne.data,Ie=oe.stride,Se=ne.offset;if(oe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<k.locationSize;Ce++)m(k.location+Ce,oe.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Ce=0;Ce<k.locationSize;Ce++)p(k.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let Ce=0;Ce<k.locationSize;Ce++)M(k.location+Ce,Re/k.locationSize,X,ue,Ie*Q,(Se+Re/k.locationSize*Ce)*Q,se)}else{if(ne.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)m(k.location+oe,ne.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let oe=0;oe<k.locationSize;oe++)p(k.location+oe);r.bindBuffer(r.ARRAY_BUFFER,Xe);for(let oe=0;oe<k.locationSize;oe++)M(k.location+oe,Re/k.locationSize,X,ue,Re*Q,Re/k.locationSize*oe*Q,se)}}else if(G!==void 0){const ue=G[$];if(ue!==void 0)switch(ue.length){case 2:r.vertexAttrib2fv(k.location,ue);break;case 3:r.vertexAttrib3fv(k.location,ue);break;case 4:r.vertexAttrib4fv(k.location,ue);break;default:r.vertexAttrib1fv(k.location,ue)}}}}b()}function N(){I();for(const v in i){const S=i[v];for(const B in S){const z=S[B];for(const V in z)h(z[V].object),delete z[V];delete S[B]}delete i[v]}}function R(v){if(i[v.id]===void 0)return;const S=i[v.id];for(const B in S){const z=S[B];for(const V in z)h(z[V].object),delete z[V];delete S[B]}delete i[v.id]}function A(v){for(const S in i){const B=i[S];if(B[v.id]===void 0)continue;const z=B[v.id];for(const V in z)h(z[V].object),delete z[V];delete B[v.id]}}function I(){ie(),s=!0,a!==n&&(a=n,c(a.object))}function ie(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:I,resetDefaultState:ie,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:p,disableUnusedAttributes:b}}function ym(r,e,t){let i;function n(c){i=c}function a(c,h){r.drawArrays(i,c,h),t.update(h,i,1)}function s(c,h,d){d!==0&&(r.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let u=0;for(let f=0;f<d;f++)u+=h[f];t.update(u,i,1)}function l(c,h,d,u){if(d===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)s(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(i,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)t.update(g,i,u[_])}}this.setMode=n,this.render=a,this.renderInstances=s,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Mm(r,e,t,i){let n;function a(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(A){return!(A!==Bt&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const I=A===_n&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==mi&&i.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==pi&&!I)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),E=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:M,maxFragmentUniforms:E,vertexTextures:N,maxSamples:R}}function Sm(r){const e=this;let t=null,i=0,n=!1,a=!1;const s=new Ti,o=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||i!==0||n;return n=u,i=d.length,f},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=r.get(d);if(!n||g===null||g.length===0||a&&!p)a?h(null):c();else{const b=a?0:i,M=b*4;let E=m.clippingState||null;l.value=E,E=h(g,u,M,f);for(let N=0;N!==M;++N)E[N]=t[N];m.clippingState=E,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let M=0,E=f;M!==_;++M,E+=4)s.copy(d[M]).applyMatrix4(b,o),s.normal.toArray(p,E),p[E+3]=s.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}function Em(r){let e=new WeakMap;function t(s,o){return o===bs?s.mapping=Ir:o===ws&&(s.mapping=Dr),s}function i(s){if(s&&s.isTexture){const o=s.mapping;if(o===bs||o===ws)if(e.has(s)){const l=e.get(s).texture;return t(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const c=new Id(l.height);return c.fromEquirectangularTexture(r,s),e.set(s,c),s.addEventListener("dispose",n),t(c.texture,s.mapping)}else return null}}return s}function n(s){const o=s.target;o.removeEventListener("dispose",n);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}class nh extends th{constructor(e=-1,t=1,i=1,n=-1,a=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=a,this.far=s,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,a,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=a,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let a=i-e,s=i+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,s=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,s,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const br=4,Tl=[.125,.215,.35,.446,.526,.582],ji=20,Qa=new nh,bl=new ke;let es=null,ts=0,is=0,rs=!1;const Hi=(1+Math.sqrt(5))/2,xr=1/Hi,wl=[new C(-Hi,xr,0),new C(Hi,xr,0),new C(-xr,0,Hi),new C(xr,0,Hi),new C(0,Hi,-xr),new C(0,Hi,xr),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)];class Al{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){es=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const a=this._allocateTargets();return a.depthBuffer=!0,this._sceneToCubeUV(e,i,n,a),t>0&&this._blur(a,0,0,t),this._applyPMREM(a),this._cleanup(a),a}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(es,ts,is),this._renderer.xr.enabled=rs,e.scissorTest=!1,Hn(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ir||e.mapping===Dr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),es=this._renderer.getRenderTarget(),ts=this._renderer.getActiveCubeFace(),is=this._renderer.getActiveMipmapLevel(),rs=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Yt,minFilter:Yt,generateMipmaps:!1,type:_n,format:Bt,colorSpace:Li,depthBuffer:!1},n=Rl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rl(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Tm(a)),this._blurMaterial=bm(a,e,t)}return n}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Qa)}_sceneToCubeUV(e,t,i,n){const a=new kt(90,1,t,i),s=[1,-1,1,1,1,1],o=[1,1,1,-1,-1,-1],l=this._renderer,c=l.autoClear,h=l.toneMapping;l.getClearColor(bl),l.toneMapping=Ai,l.autoClear=!1;const d=new Jc({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),u=new Pt(new xn,d);let f=!1;const g=e.background;g?g.isColor&&(d.color.copy(g),e.background=null,f=!0):(d.color.copy(bl),f=!0);for(let _=0;_<6;_++){const p=_%3;p===0?(a.up.set(0,s[_],0),a.lookAt(o[_],0,0)):p===1?(a.up.set(0,0,s[_]),a.lookAt(0,o[_],0)):(a.up.set(0,s[_],0),a.lookAt(0,0,o[_]));const m=this._cubeSize;Hn(n,p*m,_>2?m:0,m,m),l.setRenderTarget(n),f&&l.render(u,a),l.render(e,a)}u.geometry.dispose(),u.material.dispose(),l.toneMapping=h,l.autoClear=c,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Ir||e.mapping===Dr;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cl());const a=n?this._cubemapMaterial:this._equirectMaterial,s=new Pt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Hn(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(s,Qa)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const n=this._lodPlanes.length;for(let a=1;a<n;a++){const s=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=wl[(n-a-1)%wl.length];this._blur(e,a-1,a,s,o)}t.autoClear=i}_blur(e,t,i,n,a){const s=this._pingPongRenderTarget;this._halfBlur(e,s,t,i,n,"latitudinal",a),this._halfBlur(s,e,i,i,n,"longitudinal",a)}_halfBlur(e,t,i,n,a,s,o){const l=this._renderer,c=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new Pt(this._lodPlanes[n],c),u=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*f):2*Math.PI/(2*ji-1),_=a/g,p=isFinite(a)?1+Math.floor(h*_):ji;p>ji&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ji}`);const m=[];let b=0;for(let A=0;A<ji;++A){const I=A/_,ie=Math.exp(-I*I/2);m.push(ie),A===0?b+=ie:A<p&&(b+=2*ie)}for(let A=0;A<m.length;A++)m[A]=m[A]/b;u.envMap.value=e.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=s==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:M}=this;u.dTheta.value=g,u.mipInt.value=M-i;const E=this._sizeLods[n],N=3*E*(n>M-br?n-M+br:0),R=4*(this._cubeSize-E);Hn(t,N,R,3*E,2*E),l.setRenderTarget(t),l.render(d,Qa)}}function Tm(r){const e=[],t=[],i=[];let n=r;const a=r-br+1+Tl.length;for(let s=0;s<a;s++){const o=Math.pow(2,n);t.push(o);let l=1/o;s>r-br?l=Tl[s-r+br-1]:s===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,p=2,m=1,b=new Float32Array(_*g*f),M=new Float32Array(p*g*f),E=new Float32Array(m*g*f);for(let R=0;R<f;R++){const A=R%3*2/3-1,I=R>2?0:-1,ie=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(ie,_*g*R),M.set(u,p*g*R);const v=[R,R,R,R,R,R];E.set(v,m*g*R)}const N=new Ut;N.setAttribute("position",new Zt(b,_)),N.setAttribute("uv",new Zt(M,p)),N.setAttribute("faceIndex",new Zt(E,m)),e.push(N),n>br&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Rl(r,e,t){const i=new Zi(r,e,t);return i.texture.mapping=xa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Hn(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function bm(r,e,t){const i=new Float32Array(ji),n=new C(0,1,0);return new Ci({name:"SphericalGaussianBlur",defines:{n:ji,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Cl(){return new Ci({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function Pl(){return new Ci({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:wi,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wm(r){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===bs||l===ws,h=l===Ir||l===Dr;if(c||h){let d=e.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new Al(r)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&n(f)?(t===null&&(t=new Al(r)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function n(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function s(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:s}}function Am(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const n=t(i);return n===null&&la("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function Rm(r,e,t,i){const n={},a=new WeakMap;function s(d){const u=d.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)e.remove(_[p])}u.removeEventListener("dispose",s),delete n[u.id];const f=a.get(u);f&&(e.remove(f),a.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",s),n[u.id]=!0,t.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)e.update(u[g],r.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)e.update(_[p],r.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const b=f.array;_=f.version;for(let M=0,E=b.length;M<E;M+=3){const N=b[M+0],R=b[M+1],A=b[M+2];u.push(N,R,R,A,A,N)}}else if(g!==void 0){const b=g.array;_=g.version;for(let M=0,E=b.length/3-1;M<E;M+=3){const N=M+0,R=M+1,A=M+2;u.push(N,R,R,A,A,N)}}else return;const p=new(Yc(u)?Qc:$c)(u,1);p.version=_;const m=a.get(d);m&&e.remove(m),a.set(d,p)}function h(d){const u=a.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Cm(r,e,t){let i;function n(u){i=u}let a,s;function o(u){a=u.type,s=u.bytesPerElement}function l(u,f){r.drawElements(i,f,a,u*s),t.update(f,i,1)}function c(u,f,g){g!==0&&(r.drawElementsInstanced(i,f,a,u*s,g),t.update(f,i,g))}function h(u,f,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,a,u,0,g);let _=0;for(let p=0;p<g;p++)_+=f[p];t.update(_,i,1)}function d(u,f,g,_){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/s,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(i,f,0,a,u,0,_,0,g);let m=0;for(let b=0;b<g;b++)m+=f[b];for(let b=0;b<_.length;b++)t.update(m,i,_[b])}}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Pm(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,s,o){switch(t.calls++,s){case r.TRIANGLES:t.triangles+=o*(a/3);break;case r.LINES:t.lines+=o*(a/2);break;case r.LINE_STRIP:t.lines+=o*(a-1);break;case r.LINE_LOOP:t.lines+=o*a;break;case r.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function Lm(r,e,t){const i=new WeakMap,n=new nt;function a(s,o,l){const c=s.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=i.get(o);if(u===void 0||u.count!==d){let f=function(){I.dispose(),i.delete(o),o.removeEventListener("dispose",f)};u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),_===!0&&(E=2),p===!0&&(E=3);let N=o.attributes.position.count*E,R=1;N>e.maxTextureSize&&(R=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const A=new Float32Array(N*R*4*d),I=new Kc(A,N,R,d);I.type=pi,I.needsUpdate=!0;const ie=E*4;for(let v=0;v<d;v++){const S=m[v],B=b[v],z=M[v],V=N*R*4*v;for(let Y=0;Y<S.count;Y++){const G=Y*ie;g===!0&&(n.fromBufferAttribute(S,Y),A[V+G+0]=n.x,A[V+G+1]=n.y,A[V+G+2]=n.z,A[V+G+3]=0),_===!0&&(n.fromBufferAttribute(B,Y),A[V+G+4]=n.x,A[V+G+5]=n.y,A[V+G+6]=n.z,A[V+G+7]=0),p===!0&&(n.fromBufferAttribute(z,Y),A[V+G+8]=n.x,A[V+G+9]=n.y,A[V+G+10]=n.z,A[V+G+11]=z.itemSize===4?n.w:1)}}u={count:d,texture:I,size:new ae(N,R)},i.set(o,u),o.addEventListener("dispose",f)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",s.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",u.size)}return{update:a}}function Um(r,e,t,i){let n=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(n.get(d)!==c&&(e.update(d),n.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),n.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),n.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;n.get(u)!==c&&(u.update(),n.set(u,c))}return d}function s(){n=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:s}}class ah extends Tt{constructor(e,t,i,n,a,s,o,l,c,h=Cr){if(h!==Cr&&h!==Or)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===Cr&&(i=Ki),i===void 0&&h===Or&&(i=Nr),super(null,n,a,s,o,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Ct,this.minFilter=l!==void 0?l:Ct,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const sh=new Tt,Ll=new ah(1,1),oh=new Kc,lh=new _d,ch=new ih,Ul=[],Il=[],Dl=new Float32Array(16),Nl=new Float32Array(9),Ol=new Float32Array(4);function Gr(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let a=Ul[n];if(a===void 0&&(a=new Float32Array(n),Ul[n]=a),e!==0){i.toArray(a,0);for(let s=1,o=0;s!==e;++s)o+=t,r[s].toArray(a,o)}return a}function dt(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function pt(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Ea(r,e){let t=Il[e];t===void 0&&(t=new Int32Array(e),Il[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function Im(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Dm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2fv(this.addr,e),pt(t,e)}}function Nm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;r.uniform3fv(this.addr,e),pt(t,e)}}function Om(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4fv(this.addr,e),pt(t,e)}}function Fm(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Ol.set(i),r.uniformMatrix2fv(this.addr,!1,Ol),pt(t,i)}}function Bm(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Nl.set(i),r.uniformMatrix3fv(this.addr,!1,Nl),pt(t,i)}}function zm(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(dt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),pt(t,e)}else{if(dt(t,i))return;Dl.set(i),r.uniformMatrix4fv(this.addr,!1,Dl),pt(t,i)}}function Gm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function km(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2iv(this.addr,e),pt(t,e)}}function Hm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3iv(this.addr,e),pt(t,e)}}function Vm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4iv(this.addr,e),pt(t,e)}}function Wm(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Xm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;r.uniform2uiv(this.addr,e),pt(t,e)}}function jm(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;r.uniform3uiv(this.addr,e),pt(t,e)}}function Ym(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;r.uniform4uiv(this.addr,e),pt(t,e)}}function qm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n);let a;this.type===r.SAMPLER_2D_SHADOW?(Ll.compareFunction=jc,a=Ll):a=sh,t.setTexture2D(e||a,n)}function Km(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||lh,n)}function Zm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||ch,n)}function Jm(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||oh,n)}function $m(r){switch(r){case 5126:return Im;case 35664:return Dm;case 35665:return Nm;case 35666:return Om;case 35674:return Fm;case 35675:return Bm;case 35676:return zm;case 5124:case 35670:return Gm;case 35667:case 35671:return km;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Wm;case 36294:return Xm;case 36295:return jm;case 36296:return Ym;case 35678:case 36198:case 36298:case 36306:case 35682:return qm;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}function Qm(r,e){r.uniform1fv(this.addr,e)}function eg(r,e){const t=Gr(e,this.size,2);r.uniform2fv(this.addr,t)}function tg(r,e){const t=Gr(e,this.size,3);r.uniform3fv(this.addr,t)}function ig(r,e){const t=Gr(e,this.size,4);r.uniform4fv(this.addr,t)}function rg(r,e){const t=Gr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function ng(r,e){const t=Gr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function ag(r,e){const t=Gr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sg(r,e){r.uniform1iv(this.addr,e)}function og(r,e){r.uniform2iv(this.addr,e)}function lg(r,e){r.uniform3iv(this.addr,e)}function cg(r,e){r.uniform4iv(this.addr,e)}function hg(r,e){r.uniform1uiv(this.addr,e)}function ug(r,e){r.uniform2uiv(this.addr,e)}function dg(r,e){r.uniform3uiv(this.addr,e)}function pg(r,e){r.uniform4uiv(this.addr,e)}function fg(r,e,t){const i=this.cache,n=e.length,a=Ea(t,n);dt(i,a)||(r.uniform1iv(this.addr,a),pt(i,a));for(let s=0;s!==n;++s)t.setTexture2D(e[s]||sh,a[s])}function mg(r,e,t){const i=this.cache,n=e.length,a=Ea(t,n);dt(i,a)||(r.uniform1iv(this.addr,a),pt(i,a));for(let s=0;s!==n;++s)t.setTexture3D(e[s]||lh,a[s])}function gg(r,e,t){const i=this.cache,n=e.length,a=Ea(t,n);dt(i,a)||(r.uniform1iv(this.addr,a),pt(i,a));for(let s=0;s!==n;++s)t.setTextureCube(e[s]||ch,a[s])}function _g(r,e,t){const i=this.cache,n=e.length,a=Ea(t,n);dt(i,a)||(r.uniform1iv(this.addr,a),pt(i,a));for(let s=0;s!==n;++s)t.setTexture2DArray(e[s]||oh,a[s])}function vg(r){switch(r){case 5126:return Qm;case 35664:return eg;case 35665:return tg;case 35666:return ig;case 35674:return rg;case 35675:return ng;case 35676:return ag;case 5124:case 35670:return sg;case 35667:case 35671:return og;case 35668:case 35672:return lg;case 35669:case 35673:return cg;case 5125:return hg;case 36294:return ug;case 36295:return dg;case 36296:return pg;case 35678:case 36198:case 36298:case 36306:case 35682:return fg;case 35679:case 36299:case 36307:return mg;case 35680:case 36300:case 36308:case 36293:return gg;case 36289:case 36303:case 36311:case 36292:return _g}}class xg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=$m(t.type)}}class yg{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vg(t.type)}}class Mg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let a=0,s=n.length;a!==s;++a){const o=n[a];o.setValue(e,t[o.id],i)}}}const ns=/(\w+)(\])?(\[|\.)?/g;function Fl(r,e){r.seq.push(e),r.map[e.id]=e}function Sg(r,e,t){const i=r.name,n=i.length;for(ns.lastIndex=0;;){const a=ns.exec(i),s=ns.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&s+2===n){Fl(t,c===void 0?new xg(o,r,e):new yg(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new Mg(o),Fl(t,h)),t=h}}}class ca{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let n=0;n<i;++n){const a=e.getActiveUniform(t,n),s=e.getUniformLocation(t,a.name);Sg(a,s,this)}}setValue(e,t,i,n){const a=this.map[t];a!==void 0&&a.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let a=0,s=t.length;a!==s;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,a=e.length;n!==a;++n){const s=e[n];s.id in t&&i.push(s)}return i}}function Bl(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}const Eg=37297;let Tg=0;function bg(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let s=n;s<a;s++){const o=s+1;i.push(`${o===e?">":" "} ${o}: ${t[s]}`)}return i.join(`
`)}function wg(r){const e=qe.getPrimaries(qe.workingColorSpace),t=qe.getPrimaries(r);let i;switch(e===t?i="":e===pa&&t===da?i="LinearDisplayP3ToLinearSRGB":e===da&&t===pa&&(i="LinearSRGBToLinearDisplayP3"),r){case Li:case ya:return[i,"LinearTransferOETF"];case ei:case yo:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",r),[i,"LinearTransferOETF"]}}function zl(r,e,t){const i=r.getShaderParameter(e,r.COMPILE_STATUS),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const a=/ERROR: 0:(\d+)/.exec(n);if(a){const s=parseInt(a[1]);return t.toUpperCase()+`

`+n+`

`+bg(r.getShaderSource(e),s)}else return n}function Ag(r,e){const t=wg(e);return`vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Rg(r,e){let t;switch(e){case Au:t="Linear";break;case Ru:t="Reinhard";break;case Cu:t="Cineon";break;case Pu:t="ACESFilmic";break;case Uu:t="AgX";break;case Iu:t="Neutral";break;case Lu:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Vn=new C;function Cg(){qe.getLuminanceCoefficients(Vn);const r=Vn.x.toFixed(4),e=Vn.y.toFixed(4),t=Vn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Pg(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function Lg(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Ug(r,e){const t={},i=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){const a=r.getActiveAttrib(e,n),s=a.name;let o=1;a.type===r.FLOAT_MAT2&&(o=2),a.type===r.FLOAT_MAT3&&(o=3),a.type===r.FLOAT_MAT4&&(o=4),t[s]={type:a.type,location:r.getAttribLocation(e,s),locationSize:o}}return t}function Kr(r){return r!==""}function Gl(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function kl(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ig=/^[ \t]*#include +<([\w\d./]+)>/gm;function to(r){return r.replace(Ig,Ng)}const Dg=new Map;function Ng(r,e){let t=ze[e];if(t===void 0){const i=Dg.get(e);if(i!==void 0)t=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return to(t)}const Og=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Hl(r){return r.replace(Og,Fg)}function Fg(r,e,t,i){let n="";for(let a=parseInt(e);a<parseInt(t);a++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return n}function Vl(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Bg(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Uc?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Ic?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===di&&(e="SHADOWMAP_TYPE_VSM"),e}function zg(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ir:case Dr:e="ENVMAP_TYPE_CUBE";break;case xa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Gg(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Dr:e="ENVMAP_MODE_REFRACTION";break}return e}function kg(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case po:e="ENVMAP_BLENDING_MULTIPLY";break;case bu:e="ENVMAP_BLENDING_MIX";break;case wu:e="ENVMAP_BLENDING_ADD";break}return e}function Hg(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Vg(r,e,t,i){const n=r.getContext(),a=t.defines;let s=t.vertexShader,o=t.fragmentShader;const l=Bg(t),c=zg(t),h=Gg(t),d=kg(t),u=Hg(t),f=Pg(t),g=Lg(a),_=n.createProgram();let p,m,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`)):(p=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),m=[Vl(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?ze.tonemapping_pars_fragment:"",t.toneMapping!==Ai?Rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ag("linearToOutputTexel",t.outputColorSpace),Cg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),s=to(s),s=Gl(s,t),s=kl(s,t),o=to(o),o=Gl(o,t),o=kl(o,t),s=Hl(s),o=Hl(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===al?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===al?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const M=b+p+s,E=b+m+o,N=Bl(n,n.VERTEX_SHADER,M),R=Bl(n,n.FRAGMENT_SHADER,E);n.attachShader(_,N),n.attachShader(_,R),t.index0AttributeName!==void 0?n.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(_,0,"position"),n.linkProgram(_);function A(S){if(r.debug.checkShaderErrors){const B=n.getProgramInfoLog(_).trim(),z=n.getShaderInfoLog(N).trim(),V=n.getShaderInfoLog(R).trim();let Y=!0,G=!0;if(n.getProgramParameter(_,n.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(n,_,N,R);else{const $=zl(n,N,"vertex"),k=zl(n,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(_,n.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+B+`
`+$+`
`+k)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(z===""||V==="")&&(G=!1);G&&(S.diagnostics={runnable:Y,programLog:B,vertexShader:{log:z,prefix:p},fragmentShader:{log:V,prefix:m}})}n.deleteShader(N),n.deleteShader(R),I=new ca(n,_),ie=Ug(n,_)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let ie;this.getAttributes=function(){return ie===void 0&&A(this),ie};let v=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=n.getProgramParameter(_,Eg)),v},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Tg++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=N,this.fragmentShader=R,this}let Wg=0;class Xg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),a=this._getShaderStage(i),s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new jg(e),t.set(e,i)),i}}class jg{constructor(e){this.id=Wg++,this.code=e,this.usedTimes=0}}function Yg(r,e,t,i,n,a,s){const o=new So,l=new Xg,c=new Set,h=[],d=n.logarithmicDepthBuffer,u=n.reverseDepthBuffer,f=n.vertexTextures;let g=n.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,B,z,V){const Y=z.fog,G=V.geometry,$=v.isMeshStandardMaterial?z.environment:null,k=(v.isMeshStandardMaterial?t:e).get(v.envMap||$),ne=k&&k.mapping===xa?k.image.height:null,ue=_[v.type];v.precision!==null&&(g=n.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const Re=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,Ve=Re!==void 0?Re.length:0;let Xe=0;G.morphAttributes.position!==void 0&&(Xe=1),G.morphAttributes.normal!==void 0&&(Xe=2),G.morphAttributes.color!==void 0&&(Xe=3);let X,Q,se,oe;if(ue){const At=ti[ue];X=At.vertexShader,Q=At.fragmentShader}else X=v.vertexShader,Q=v.fragmentShader,l.update(v),se=l.getVertexShaderID(v),oe=l.getFragmentShaderID(v);const Ie=r.getRenderTarget(),Se=V.isInstancedMesh===!0,Ce=V.isBatchedMesh===!0,K=!!v.map,Z=!!v.matcap,w=!!k,Te=!!v.aoMap,ee=!!v.lightMap,_e=!!v.bumpMap,le=!!v.normalMap,Pe=!!v.displacementMap,ye=!!v.emissiveMap,T=!!v.metalnessMap,x=!!v.roughnessMap,D=v.anisotropy>0,W=v.clearcoat>0,J=v.dispersion>0,j=v.iridescence>0,Ee=v.sheen>0,he=v.transmission>0,ge=D&&!!v.anisotropyMap,He=W&&!!v.clearcoatMap,re=W&&!!v.clearcoatNormalMap,Me=W&&!!v.clearcoatRoughnessMap,Ne=j&&!!v.iridescenceMap,Oe=j&&!!v.iridescenceThicknessMap,ve=Ee&&!!v.sheenColorMap,We=Ee&&!!v.sheenRoughnessMap,Fe=!!v.specularMap,Je=!!v.specularColorMap,P=!!v.specularIntensityMap,fe=he&&!!v.transmissionMap,H=he&&!!v.thicknessMap,q=!!v.gradientMap,pe=!!v.alphaMap,de=v.alphaTest>0,$e=!!v.alphaHash,ot=!!v.extensions;let wt=Ai;v.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(wt=r.toneMapping);const Ye={shaderID:ue,shaderType:v.type,shaderName:v.name,vertexShader:X,fragmentShader:Q,defines:v.defines,customVertexShaderID:se,customFragmentShaderID:oe,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:Ce,batchingColor:Ce&&V._colorsTexture!==null,instancing:Se,instancingColor:Se&&V.instanceColor!==null,instancingMorph:Se&&V.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Ie===null?r.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Li,alphaToCoverage:!!v.alphaToCoverage,map:K,matcap:Z,envMap:w,envMapMode:w&&k.mapping,envMapCubeUVHeight:ne,aoMap:Te,lightMap:ee,bumpMap:_e,normalMap:le,displacementMap:f&&Pe,emissiveMap:ye,normalMapObjectSpace:le&&v.normalMapType===Fu,normalMapTangentSpace:le&&v.normalMapType===Xc,metalnessMap:T,roughnessMap:x,anisotropy:D,anisotropyMap:ge,clearcoat:W,clearcoatMap:He,clearcoatNormalMap:re,clearcoatRoughnessMap:Me,dispersion:J,iridescence:j,iridescenceMap:Ne,iridescenceThicknessMap:Oe,sheen:Ee,sheenColorMap:ve,sheenRoughnessMap:We,specularMap:Fe,specularColorMap:Je,specularIntensityMap:P,transmission:he,transmissionMap:fe,thicknessMap:H,gradientMap:q,opaque:v.transparent===!1&&v.blending===Rr&&v.alphaToCoverage===!1,alphaMap:pe,alphaTest:de,alphaHash:$e,combine:v.combine,mapUv:K&&p(v.map.channel),aoMapUv:Te&&p(v.aoMap.channel),lightMapUv:ee&&p(v.lightMap.channel),bumpMapUv:_e&&p(v.bumpMap.channel),normalMapUv:le&&p(v.normalMap.channel),displacementMapUv:Pe&&p(v.displacementMap.channel),emissiveMapUv:ye&&p(v.emissiveMap.channel),metalnessMapUv:T&&p(v.metalnessMap.channel),roughnessMapUv:x&&p(v.roughnessMap.channel),anisotropyMapUv:ge&&p(v.anisotropyMap.channel),clearcoatMapUv:He&&p(v.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Me&&p(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ne&&p(v.iridescenceMap.channel),iridescenceThicknessMapUv:Oe&&p(v.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&p(v.sheenColorMap.channel),sheenRoughnessMapUv:We&&p(v.sheenRoughnessMap.channel),specularMapUv:Fe&&p(v.specularMap.channel),specularColorMapUv:Je&&p(v.specularColorMap.channel),specularIntensityMapUv:P&&p(v.specularIntensityMap.channel),transmissionMapUv:fe&&p(v.transmissionMap.channel),thicknessMapUv:H&&p(v.thicknessMap.channel),alphaMapUv:pe&&p(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(le||D),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!G.attributes.uv&&(K||pe),fog:!!Y,useFog:v.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:u,skinning:V.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:Xe,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&B.length>0,shadowMapType:r.shadowMap.type,toneMapping:wt,decodeVideoTexture:K&&v.map.isVideoTexture===!0&&qe.getTransfer(v.map.colorSpace)===Qe,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===ii,flipSided:v.side===Lt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ot&&v.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&v.extensions.multiDraw===!0||Ce)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ye.vertexUv1s=c.has(1),Ye.vertexUv2s=c.has(2),Ye.vertexUv3s=c.has(3),c.clear(),Ye}function b(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const B in v.defines)S.push(B),S.push(v.defines[B]);return v.isRawShaderMaterial===!1&&(M(S,v),E(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function M(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){o.disableAll(),S.supportsVertexTextures&&o.enable(0),S.instancing&&o.enable(1),S.instancingColor&&o.enable(2),S.instancingMorph&&o.enable(3),S.matcap&&o.enable(4),S.envMap&&o.enable(5),S.normalMapObjectSpace&&o.enable(6),S.normalMapTangentSpace&&o.enable(7),S.clearcoat&&o.enable(8),S.iridescence&&o.enable(9),S.alphaTest&&o.enable(10),S.vertexColors&&o.enable(11),S.vertexAlphas&&o.enable(12),S.vertexUv1s&&o.enable(13),S.vertexUv2s&&o.enable(14),S.vertexUv3s&&o.enable(15),S.vertexTangents&&o.enable(16),S.anisotropy&&o.enable(17),S.alphaHash&&o.enable(18),S.batching&&o.enable(19),S.dispersion&&o.enable(20),S.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reverseDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.alphaToCoverage&&o.enable(20),v.push(o.mask)}function N(v){const S=_[v.type];let B;if(S){const z=ti[S];B=Cd.clone(z.uniforms)}else B=v.uniforms;return B}function R(v,S){let B;for(let z=0,V=h.length;z<V;z++){const Y=h[z];if(Y.cacheKey===S){B=Y,++B.usedTimes;break}}return B===void 0&&(B=new Vg(r,S,v,a),h.push(B)),B}function A(v){if(--v.usedTimes===0){const S=h.indexOf(v);h[S]=h[h.length-1],h.pop(),v.destroy()}}function I(v){l.remove(v)}function ie(){l.dispose()}return{getParameters:m,getProgramCacheKey:b,getUniforms:N,acquireProgram:R,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:ie}}function qg(){let r=new WeakMap;function e(s){return r.has(s)}function t(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function i(s){r.delete(s)}function n(s,o,l){r.get(s)[o]=l}function a(){r=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:a}}function Kg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Wl(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Xl(){const r=[];let e=0;const t=[],i=[],n=[];function a(){e=0,t.length=0,i.length=0,n.length=0}function s(d,u,f,g,_,p){let m=r[e];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},r[e]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),e++,m}function o(d,u,f,g,_,p){const m=s(d,u,f,g,_,p);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):t.push(m)}function l(d,u,f,g,_,p){const m=s(d,u,f,g,_,p);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):t.unshift(m)}function c(d,u){t.length>1&&t.sort(d||Kg),i.length>1&&i.sort(u||Wl),n.length>1&&n.sort(u||Wl)}function h(){for(let d=e,u=r.length;d<u;d++){const f=r[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:a,push:o,unshift:l,finish:h,sort:c}}function Zg(){let r=new WeakMap;function e(i,n){const a=r.get(i);let s;return a===void 0?(s=new Xl,r.set(i,[s])):n>=a.length?(s=new Xl,a.push(s)):s=a[n],s}function t(){r=new WeakMap}return{get:e,dispose:t}}function Jg(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new ke};break;case"SpotLight":t={position:new C,direction:new C,color:new ke,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new ke,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new ke,groundColor:new ke};break;case"RectAreaLight":t={color:new ke,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function $g(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ae,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Qg=0;function e_(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function t_(r){const e=new Jg,t=$g(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new C);const n=new C,a=new et,s=new et;function o(c){let h=0,d=0,u=0;for(let ie=0;ie<9;ie++)i.probe[ie].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,b=0,M=0,E=0,N=0,R=0,A=0;c.sort(e_);for(let ie=0,v=c.length;ie<v;ie++){const S=c[ie],B=S.color,z=S.intensity,V=S.distance,Y=S.shadow&&S.shadow.map?S.shadow.map.texture:null;if(S.isAmbientLight)h+=B.r*z,d+=B.g*z,u+=B.b*z;else if(S.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(S.sh.coefficients[G],z);A++}else if(S.isDirectionalLight){const G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),S.castShadow){const $=S.shadow,k=t.get(S);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,i.directionalShadow[f]=k,i.directionalShadowMap[f]=Y,i.directionalShadowMatrix[f]=S.shadow.matrix,b++}i.directional[f]=G,f++}else if(S.isSpotLight){const G=e.get(S);G.position.setFromMatrixPosition(S.matrixWorld),G.color.copy(B).multiplyScalar(z),G.distance=V,G.coneCos=Math.cos(S.angle),G.penumbraCos=Math.cos(S.angle*(1-S.penumbra)),G.decay=S.decay,i.spot[_]=G;const $=S.shadow;if(S.map&&(i.spotLightMap[N]=S.map,N++,$.updateMatrices(S),S.castShadow&&R++),i.spotLightMatrix[_]=$.matrix,S.castShadow){const k=t.get(S);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,i.spotShadow[_]=k,i.spotShadowMap[_]=Y,E++}_++}else if(S.isRectAreaLight){const G=e.get(S);G.color.copy(B).multiplyScalar(z),G.halfWidth.set(S.width*.5,0,0),G.halfHeight.set(0,S.height*.5,0),i.rectArea[p]=G,p++}else if(S.isPointLight){const G=e.get(S);if(G.color.copy(S.color).multiplyScalar(S.intensity),G.distance=S.distance,G.decay=S.decay,S.castShadow){const $=S.shadow,k=t.get(S);k.shadowIntensity=$.intensity,k.shadowBias=$.bias,k.shadowNormalBias=$.normalBias,k.shadowRadius=$.radius,k.shadowMapSize=$.mapSize,k.shadowCameraNear=$.camera.near,k.shadowCameraFar=$.camera.far,i.pointShadow[g]=k,i.pointShadowMap[g]=Y,i.pointShadowMatrix[g]=S.shadow.matrix,M++}i.point[g]=G,g++}else if(S.isHemisphereLight){const G=e.get(S);G.skyColor.copy(S.color).multiplyScalar(z),G.groundColor.copy(S.groundColor).multiplyScalar(z),i.hemi[m]=G,m++}}p>0&&(r.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ce.LTC_FLOAT_1,i.rectAreaLTC2=ce.LTC_FLOAT_2):(i.rectAreaLTC1=ce.LTC_HALF_1,i.rectAreaLTC2=ce.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;const I=i.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==_||I.rectAreaLength!==p||I.hemiLength!==m||I.numDirectionalShadows!==b||I.numPointShadows!==M||I.numSpotShadows!==E||I.numSpotMaps!==N||I.numLightProbes!==A)&&(i.directional.length=f,i.spot.length=_,i.rectArea.length=p,i.point.length=g,i.hemi.length=m,i.directionalShadow.length=b,i.directionalShadowMap.length=b,i.pointShadow.length=M,i.pointShadowMap.length=M,i.spotShadow.length=E,i.spotShadowMap.length=E,i.directionalShadowMatrix.length=b,i.pointShadowMatrix.length=M,i.spotLightMatrix.length=E+N-R,i.spotLightMap.length=N,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=A,I.directionalLength=f,I.pointLength=g,I.spotLength=_,I.rectAreaLength=p,I.hemiLength=m,I.numDirectionalShadows=b,I.numPointShadows=M,I.numSpotShadows=E,I.numSpotMaps=N,I.numLightProbes=A,i.version=Qg++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,b=c.length;m<b;m++){const M=c[m];if(M.isDirectionalLight){const E=i.directional[d];E.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(p),d++}else if(M.isSpotLight){const E=i.spot[f];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(M.matrixWorld),n.setFromMatrixPosition(M.target.matrixWorld),E.direction.sub(n),E.direction.transformDirection(p),f++}else if(M.isRectAreaLight){const E=i.rectArea[g];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),s.identity(),a.copy(M.matrixWorld),a.premultiply(p),s.extractRotation(a),E.halfWidth.set(M.width*.5,0,0),E.halfHeight.set(0,M.height*.5,0),E.halfWidth.applyMatrix4(s),E.halfHeight.applyMatrix4(s),g++}else if(M.isPointLight){const E=i.point[u];E.position.setFromMatrixPosition(M.matrixWorld),E.position.applyMatrix4(p),u++}else if(M.isHemisphereLight){const E=i.hemi[_];E.direction.setFromMatrixPosition(M.matrixWorld),E.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:i}}function jl(r){const e=new t_(r),t=[],i=[];function n(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function s(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:n,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:s}}function i_(r){let e=new WeakMap;function t(n,a=0){const s=e.get(n);let o;return s===void 0?(o=new jl(r),e.set(n,[o])):a>=s.length?(o=new jl(r),s.push(o)):o=s[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}class r_ extends zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Nu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class n_ extends zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const a_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,s_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function o_(r,e,t){let i=new Eo;const n=new ae,a=new ae,s=new nt,o=new r_({depthPacking:Ou}),l=new n_,c={},h=t.maxTextureSize,d={[Ri]:Lt,[Lt]:Ri,[ii]:ii},u=new Ci({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ae},radius:{value:4}},vertexShader:a_,fragmentShader:s_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Ut;g.setAttribute("position",new Zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Pt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Uc;let m=this.type;this.render=function(R,A,I){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const ie=r.getRenderTarget(),v=r.getActiveCubeFace(),S=r.getActiveMipmapLevel(),B=r.state;B.setBlending(wi),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const z=m!==di&&this.type===di,V=m===di&&this.type!==di;for(let Y=0,G=R.length;Y<G;Y++){const $=R[Y],k=$.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;n.copy(k.mapSize);const ne=k.getFrameExtents();if(n.multiply(ne),a.copy(k.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(a.x=Math.floor(h/ne.x),n.x=a.x*ne.x,k.mapSize.x=a.x),n.y>h&&(a.y=Math.floor(h/ne.y),n.y=a.y*ne.y,k.mapSize.y=a.y)),k.map===null||z===!0||V===!0){const Re=this.type!==di?{minFilter:Ct,magFilter:Ct}:{};k.map!==null&&k.map.dispose(),k.map=new Zi(n.x,n.y,Re),k.map.texture.name=$.name+".shadowMap",k.camera.updateProjectionMatrix()}r.setRenderTarget(k.map),r.clear();const ue=k.getViewportCount();for(let Re=0;Re<ue;Re++){const Ve=k.getViewport(Re);s.set(a.x*Ve.x,a.y*Ve.y,a.x*Ve.z,a.y*Ve.w),B.viewport(s),k.updateMatrices($,Re),i=k.getFrustum(),E(A,I,k.camera,$,this.type)}k.isPointLightShadow!==!0&&this.type===di&&b(k,I),k.needsUpdate=!1}m=this.type,p.needsUpdate=!1,r.setRenderTarget(ie,v,S)};function b(R,A){const I=e.update(_);u.defines.VSM_SAMPLES!==R.blurSamples&&(u.defines.VSM_SAMPLES=R.blurSamples,f.defines.VSM_SAMPLES=R.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Zi(n.x,n.y)),u.uniforms.shadow_pass.value=R.map.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,r.setRenderTarget(R.mapPass),r.clear(),r.renderBufferDirect(A,null,I,u,_,null),f.uniforms.shadow_pass.value=R.mapPass.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,r.setRenderTarget(R.map),r.clear(),r.renderBufferDirect(A,null,I,f,_,null)}function M(R,A,I,ie){let v=null;const S=I.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(S!==void 0)v=S;else if(v=I.isPointLight===!0?l:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const B=v.uuid,z=A.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let Y=V[z];Y===void 0&&(Y=v.clone(),V[z]=Y,A.addEventListener("dispose",N)),v=Y}if(v.visible=A.visible,v.wireframe=A.wireframe,ie===di?v.side=A.shadowSide!==null?A.shadowSide:A.side:v.side=A.shadowSide!==null?A.shadowSide:d[A.side],v.alphaMap=A.alphaMap,v.alphaTest=A.alphaTest,v.map=A.map,v.clipShadows=A.clipShadows,v.clippingPlanes=A.clippingPlanes,v.clipIntersection=A.clipIntersection,v.displacementMap=A.displacementMap,v.displacementScale=A.displacementScale,v.displacementBias=A.displacementBias,v.wireframeLinewidth=A.wireframeLinewidth,v.linewidth=A.linewidth,I.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const B=r.properties.get(v);B.light=I}return v}function E(R,A,I,ie,v){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&v===di)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,R.matrixWorld);const B=e.update(R),z=R.material;if(Array.isArray(z)){const V=B.groups;for(let Y=0,G=V.length;Y<G;Y++){const $=V[Y],k=z[$.materialIndex];if(k&&k.visible){const ne=M(R,k,ie,v);R.onBeforeShadow(r,R,A,I,B,ne,$),r.renderBufferDirect(I,null,B,ne,R,$),R.onAfterShadow(r,R,A,I,B,ne,$)}}}else if(z.visible){const V=M(R,z,ie,v);R.onBeforeShadow(r,R,A,I,B,V,null),r.renderBufferDirect(I,null,B,V,R,null),R.onAfterShadow(r,R,A,I,B,V,null)}}const S=R.children;for(let B=0,z=S.length;B<z;B++)E(S[B],A,I,ie,v)}function N(R){R.target.removeEventListener("dispose",N);for(const A in c){const I=c[A],ie=R.target.uuid;ie in I&&(I[ie].dispose(),delete I[ie])}}}const l_={[vs]:xs,[ys]:Es,[Ms]:Ts,[Ur]:Ss,[xs]:vs,[Es]:ys,[Ts]:Ms,[Ss]:Ur};function c_(r){function e(){let P=!1;const fe=new nt;let H=null;const q=new nt(0,0,0,0);return{setMask:function(pe){H!==pe&&!P&&(r.colorMask(pe,pe,pe,pe),H=pe)},setLocked:function(pe){P=pe},setClear:function(pe,de,$e,ot,wt){wt===!0&&(pe*=ot,de*=ot,$e*=ot),fe.set(pe,de,$e,ot),q.equals(fe)===!1&&(r.clearColor(pe,de,$e,ot),q.copy(fe))},reset:function(){P=!1,H=null,q.set(-1,0,0,0)}}}function t(){let P=!1,fe=!1,H=null,q=null,pe=null;return{setReversed:function(de){fe=de},setTest:function(de){de?se(r.DEPTH_TEST):oe(r.DEPTH_TEST)},setMask:function(de){H!==de&&!P&&(r.depthMask(de),H=de)},setFunc:function(de){if(fe&&(de=l_[de]),q!==de){switch(de){case vs:r.depthFunc(r.NEVER);break;case xs:r.depthFunc(r.ALWAYS);break;case ys:r.depthFunc(r.LESS);break;case Ur:r.depthFunc(r.LEQUAL);break;case Ms:r.depthFunc(r.EQUAL);break;case Ss:r.depthFunc(r.GEQUAL);break;case Es:r.depthFunc(r.GREATER);break;case Ts:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}q=de}},setLocked:function(de){P=de},setClear:function(de){pe!==de&&(r.clearDepth(de),pe=de)},reset:function(){P=!1,H=null,q=null,pe=null}}}function i(){let P=!1,fe=null,H=null,q=null,pe=null,de=null,$e=null,ot=null,wt=null;return{setTest:function(Ye){P||(Ye?se(r.STENCIL_TEST):oe(r.STENCIL_TEST))},setMask:function(Ye){fe!==Ye&&!P&&(r.stencilMask(Ye),fe=Ye)},setFunc:function(Ye,At,ai){(H!==Ye||q!==At||pe!==ai)&&(r.stencilFunc(Ye,At,ai),H=Ye,q=At,pe=ai)},setOp:function(Ye,At,ai){(de!==Ye||$e!==At||ot!==ai)&&(r.stencilOp(Ye,At,ai),de=Ye,$e=At,ot=ai)},setLocked:function(Ye){P=Ye},setClear:function(Ye){wt!==Ye&&(r.clearStencil(Ye),wt=Ye)},reset:function(){P=!1,fe=null,H=null,q=null,pe=null,de=null,$e=null,ot=null,wt=null}}}const n=new e,a=new t,s=new i,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,p=null,m=null,b=null,M=null,E=null,N=null,R=new ke(0,0,0),A=0,I=!1,ie=null,v=null,S=null,B=null,z=null;const V=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,G=0;const $=r.getParameter(r.VERSION);$.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec($)[1]),Y=G>=1):$.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),Y=G>=2);let k=null,ne={};const ue=r.getParameter(r.SCISSOR_BOX),Re=r.getParameter(r.VIEWPORT),Ve=new nt().fromArray(ue),Xe=new nt().fromArray(Re);function X(P,fe,H,q){const pe=new Uint8Array(4),de=r.createTexture();r.bindTexture(P,de),r.texParameteri(P,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(P,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $e=0;$e<H;$e++)P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY?r.texImage3D(fe,0,r.RGBA,1,1,q,0,r.RGBA,r.UNSIGNED_BYTE,pe):r.texImage2D(fe+$e,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,pe);return de}const Q={};Q[r.TEXTURE_2D]=X(r.TEXTURE_2D,r.TEXTURE_2D,1),Q[r.TEXTURE_CUBE_MAP]=X(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[r.TEXTURE_2D_ARRAY]=X(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),Q[r.TEXTURE_3D]=X(r.TEXTURE_3D,r.TEXTURE_3D,1,1),n.setClear(0,0,0,1),a.setClear(1),s.setClear(0),se(r.DEPTH_TEST),a.setFunc(Ur),ee(!1),_e(Qo),se(r.CULL_FACE),w(wi);function se(P){c[P]!==!0&&(r.enable(P),c[P]=!0)}function oe(P){c[P]!==!1&&(r.disable(P),c[P]=!1)}function Ie(P,fe){return h[P]!==fe?(r.bindFramebuffer(P,fe),h[P]=fe,P===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=fe),P===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=fe),!0):!1}function Se(P,fe){let H=u,q=!1;if(P){H=d.get(fe),H===void 0&&(H=[],d.set(fe,H));const pe=P.textures;if(H.length!==pe.length||H[0]!==r.COLOR_ATTACHMENT0){for(let de=0,$e=pe.length;de<$e;de++)H[de]=r.COLOR_ATTACHMENT0+de;H.length=pe.length,q=!0}}else H[0]!==r.BACK&&(H[0]=r.BACK,q=!0);q&&r.drawBuffers(H)}function Ce(P){return f!==P?(r.useProgram(P),f=P,!0):!1}const K={[Xi]:r.FUNC_ADD,[lu]:r.FUNC_SUBTRACT,[cu]:r.FUNC_REVERSE_SUBTRACT};K[hu]=r.MIN,K[uu]=r.MAX;const Z={[du]:r.ZERO,[pu]:r.ONE,[fu]:r.SRC_COLOR,[gs]:r.SRC_ALPHA,[yu]:r.SRC_ALPHA_SATURATE,[vu]:r.DST_COLOR,[gu]:r.DST_ALPHA,[mu]:r.ONE_MINUS_SRC_COLOR,[_s]:r.ONE_MINUS_SRC_ALPHA,[xu]:r.ONE_MINUS_DST_COLOR,[_u]:r.ONE_MINUS_DST_ALPHA,[Mu]:r.CONSTANT_COLOR,[Su]:r.ONE_MINUS_CONSTANT_COLOR,[Eu]:r.CONSTANT_ALPHA,[Tu]:r.ONE_MINUS_CONSTANT_ALPHA};function w(P,fe,H,q,pe,de,$e,ot,wt,Ye){if(P===wi){g===!0&&(oe(r.BLEND),g=!1);return}if(g===!1&&(se(r.BLEND),g=!0),P!==ou){if(P!==_||Ye!==I){if((p!==Xi||M!==Xi)&&(r.blendEquation(r.FUNC_ADD),p=Xi,M=Xi),Ye)switch(P){case Rr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case el:r.blendFunc(r.ONE,r.ONE);break;case tl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case il:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}else switch(P){case Rr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case el:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case tl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case il:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",P);break}m=null,b=null,E=null,N=null,R.set(0,0,0),A=0,_=P,I=Ye}return}pe=pe||fe,de=de||H,$e=$e||q,(fe!==p||pe!==M)&&(r.blendEquationSeparate(K[fe],K[pe]),p=fe,M=pe),(H!==m||q!==b||de!==E||$e!==N)&&(r.blendFuncSeparate(Z[H],Z[q],Z[de],Z[$e]),m=H,b=q,E=de,N=$e),(ot.equals(R)===!1||wt!==A)&&(r.blendColor(ot.r,ot.g,ot.b,wt),R.copy(ot),A=wt),_=P,I=!1}function Te(P,fe){P.side===ii?oe(r.CULL_FACE):se(r.CULL_FACE);let H=P.side===Lt;fe&&(H=!H),ee(H),P.blending===Rr&&P.transparent===!1?w(wi):w(P.blending,P.blendEquation,P.blendSrc,P.blendDst,P.blendEquationAlpha,P.blendSrcAlpha,P.blendDstAlpha,P.blendColor,P.blendAlpha,P.premultipliedAlpha),a.setFunc(P.depthFunc),a.setTest(P.depthTest),a.setMask(P.depthWrite),n.setMask(P.colorWrite);const q=P.stencilWrite;s.setTest(q),q&&(s.setMask(P.stencilWriteMask),s.setFunc(P.stencilFunc,P.stencilRef,P.stencilFuncMask),s.setOp(P.stencilFail,P.stencilZFail,P.stencilZPass)),Pe(P.polygonOffset,P.polygonOffsetFactor,P.polygonOffsetUnits),P.alphaToCoverage===!0?se(r.SAMPLE_ALPHA_TO_COVERAGE):oe(r.SAMPLE_ALPHA_TO_COVERAGE)}function ee(P){ie!==P&&(P?r.frontFace(r.CW):r.frontFace(r.CCW),ie=P)}function _e(P){P!==au?(se(r.CULL_FACE),P!==v&&(P===Qo?r.cullFace(r.BACK):P===su?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):oe(r.CULL_FACE),v=P}function le(P){P!==S&&(Y&&r.lineWidth(P),S=P)}function Pe(P,fe,H){P?(se(r.POLYGON_OFFSET_FILL),(B!==fe||z!==H)&&(r.polygonOffset(fe,H),B=fe,z=H)):oe(r.POLYGON_OFFSET_FILL)}function ye(P){P?se(r.SCISSOR_TEST):oe(r.SCISSOR_TEST)}function T(P){P===void 0&&(P=r.TEXTURE0+V-1),k!==P&&(r.activeTexture(P),k=P)}function x(P,fe,H){H===void 0&&(k===null?H=r.TEXTURE0+V-1:H=k);let q=ne[H];q===void 0&&(q={type:void 0,texture:void 0},ne[H]=q),(q.type!==P||q.texture!==fe)&&(k!==H&&(r.activeTexture(H),k=H),r.bindTexture(P,fe||Q[P]),q.type=P,q.texture=fe)}function D(){const P=ne[k];P!==void 0&&P.type!==void 0&&(r.bindTexture(P.type,null),P.type=void 0,P.texture=void 0)}function W(){try{r.compressedTexImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function J(){try{r.compressedTexImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function j(){try{r.texSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ee(){try{r.texSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function he(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function ge(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function He(){try{r.texStorage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function re(){try{r.texStorage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Me(){try{r.texImage2D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Ne(){try{r.texImage3D.apply(r,arguments)}catch(P){console.error("THREE.WebGLState:",P)}}function Oe(P){Ve.equals(P)===!1&&(r.scissor(P.x,P.y,P.z,P.w),Ve.copy(P))}function ve(P){Xe.equals(P)===!1&&(r.viewport(P.x,P.y,P.z,P.w),Xe.copy(P))}function We(P,fe){let H=l.get(fe);H===void 0&&(H=new WeakMap,l.set(fe,H));let q=H.get(P);q===void 0&&(q=r.getUniformBlockIndex(fe,P.name),H.set(P,q))}function Fe(P,fe){const H=l.get(fe).get(P);o.get(fe)!==H&&(r.uniformBlockBinding(fe,H,P.__bindingPointIndex),o.set(fe,H))}function Je(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),c={},k=null,ne={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,p=null,m=null,b=null,M=null,E=null,N=null,R=new ke(0,0,0),A=0,I=!1,ie=null,v=null,S=null,B=null,z=null,Ve.set(0,0,r.canvas.width,r.canvas.height),Xe.set(0,0,r.canvas.width,r.canvas.height),n.reset(),a.reset(),s.reset()}return{buffers:{color:n,depth:a,stencil:s},enable:se,disable:oe,bindFramebuffer:Ie,drawBuffers:Se,useProgram:Ce,setBlending:w,setMaterial:Te,setFlipSided:ee,setCullFace:_e,setLineWidth:le,setPolygonOffset:Pe,setScissorTest:ye,activeTexture:T,bindTexture:x,unbindTexture:D,compressedTexImage2D:W,compressedTexImage3D:J,texImage2D:Me,texImage3D:Ne,updateUBOMapping:We,uniformBlockBinding:Fe,texStorage2D:He,texStorage3D:re,texSubImage2D:j,texSubImage3D:Ee,compressedTexSubImage2D:he,compressedTexSubImage3D:ge,scissor:Oe,viewport:ve,reset:Je}}function Yl(r,e,t,i){const n=h_(i);switch(t){case Bc:return r*e;case Gc:return r*e;case kc:return r*e*2;case Hc:return r*e/n.components*n.byteLength;case _o:return r*e/n.components*n.byteLength;case Vc:return r*e*2/n.components*n.byteLength;case vo:return r*e*2/n.components*n.byteLength;case zc:return r*e*3/n.components*n.byteLength;case Bt:return r*e*4/n.components*n.byteLength;case xo:return r*e*4/n.components*n.byteLength;case ra:case na:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case aa:case sa:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Ps:case Us:return Math.max(r,16)*Math.max(e,8)/4;case Cs:case Ls:return Math.max(r,8)*Math.max(e,8)/2;case Is:case Ds:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ns:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Os:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Fs:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Bs:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case zs:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Gs:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ks:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Hs:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Vs:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Ws:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case Xs:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case js:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ys:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case qs:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Ks:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case oa:case Zs:case Js:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Wc:case $s:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Qs:case eo:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function h_(r){switch(r){case mi:case Nc:return{byteLength:1,components:1};case cn:case Oc:case _n:return{byteLength:2,components:1};case mo:case go:return{byteLength:2,components:4};case Ki:case fo:case pi:return{byteLength:4,components:1};case Fc:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function u_(r,e,t,i,n,a,s){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ae,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,x){return f?new OffscreenCanvas(T,x):ma("canvas")}function _(T,x,D){let W=1;const J=ye(T);if((J.width>D||J.height>D)&&(W=D/Math.max(J.width,J.height)),W<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const j=Math.floor(W*J.width),Ee=Math.floor(W*J.height);d===void 0&&(d=g(j,Ee));const he=x?g(j,Ee):d;return he.width=j,he.height=Ee,he.getContext("2d").drawImage(T,0,0,j,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Ee+")."),he}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function p(T){return T.generateMipmaps&&T.minFilter!==Ct&&T.minFilter!==Yt}function m(T){r.generateMipmap(T)}function b(T,x,D,W,J=!1){if(T!==null){if(r[T]!==void 0)return r[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let j=x;if(x===r.RED&&(D===r.FLOAT&&(j=r.R32F),D===r.HALF_FLOAT&&(j=r.R16F),D===r.UNSIGNED_BYTE&&(j=r.R8)),x===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(j=r.R8UI),D===r.UNSIGNED_SHORT&&(j=r.R16UI),D===r.UNSIGNED_INT&&(j=r.R32UI),D===r.BYTE&&(j=r.R8I),D===r.SHORT&&(j=r.R16I),D===r.INT&&(j=r.R32I)),x===r.RG&&(D===r.FLOAT&&(j=r.RG32F),D===r.HALF_FLOAT&&(j=r.RG16F),D===r.UNSIGNED_BYTE&&(j=r.RG8)),x===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(j=r.RG8UI),D===r.UNSIGNED_SHORT&&(j=r.RG16UI),D===r.UNSIGNED_INT&&(j=r.RG32UI),D===r.BYTE&&(j=r.RG8I),D===r.SHORT&&(j=r.RG16I),D===r.INT&&(j=r.RG32I)),x===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(j=r.RGB8UI),D===r.UNSIGNED_SHORT&&(j=r.RGB16UI),D===r.UNSIGNED_INT&&(j=r.RGB32UI),D===r.BYTE&&(j=r.RGB8I),D===r.SHORT&&(j=r.RGB16I),D===r.INT&&(j=r.RGB32I)),x===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(j=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(j=r.RGBA16UI),D===r.UNSIGNED_INT&&(j=r.RGBA32UI),D===r.BYTE&&(j=r.RGBA8I),D===r.SHORT&&(j=r.RGBA16I),D===r.INT&&(j=r.RGBA32I)),x===r.RGB&&D===r.UNSIGNED_INT_5_9_9_9_REV&&(j=r.RGB9_E5),x===r.RGBA){const Ee=J?ua:qe.getTransfer(W);D===r.FLOAT&&(j=r.RGBA32F),D===r.HALF_FLOAT&&(j=r.RGBA16F),D===r.UNSIGNED_BYTE&&(j=Ee===Qe?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT_4_4_4_4&&(j=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(j=r.RGB5_A1)}return(j===r.R16F||j===r.R32F||j===r.RG16F||j===r.RG32F||j===r.RGBA16F||j===r.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function M(T,x){let D;return T?x===null||x===Ki||x===Nr?D=r.DEPTH24_STENCIL8:x===pi?D=r.DEPTH32F_STENCIL8:x===cn&&(D=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ki||x===Nr?D=r.DEPTH_COMPONENT24:x===pi?D=r.DEPTH_COMPONENT32F:x===cn&&(D=r.DEPTH_COMPONENT16),D}function E(T,x){return p(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ct&&T.minFilter!==Yt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function N(T){const x=T.target;x.removeEventListener("dispose",N),A(x),x.isVideoTexture&&h.delete(x)}function R(T){const x=T.target;x.removeEventListener("dispose",R),ie(x)}function A(T){const x=i.get(T);if(x.__webglInit===void 0)return;const D=T.source,W=u.get(D);if(W){const J=W[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&I(T),Object.keys(W).length===0&&u.delete(D)}i.remove(T)}function I(T){const x=i.get(T);r.deleteTexture(x.__webglTexture);const D=T.source,W=u.get(D);delete W[x.__cacheKey],s.memory.textures--}function ie(T){const x=i.get(T);if(T.depthTexture&&T.depthTexture.dispose(),T.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(x.__webglFramebuffer[W]))for(let J=0;J<x.__webglFramebuffer[W].length;J++)r.deleteFramebuffer(x.__webglFramebuffer[W][J]);else r.deleteFramebuffer(x.__webglFramebuffer[W]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[W])}else{if(Array.isArray(x.__webglFramebuffer))for(let W=0;W<x.__webglFramebuffer.length;W++)r.deleteFramebuffer(x.__webglFramebuffer[W]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let W=0;W<x.__webglColorRenderbuffer.length;W++)x.__webglColorRenderbuffer[W]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[W]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const D=T.textures;for(let W=0,J=D.length;W<J;W++){const j=i.get(D[W]);j.__webglTexture&&(r.deleteTexture(j.__webglTexture),s.memory.textures--),i.remove(D[W])}i.remove(T)}let v=0;function S(){v=0}function B(){const T=v;return T>=n.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+n.maxTextures),v+=1,T}function z(T){const x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function V(T,x){const D=i.get(T);if(T.isVideoTexture&&le(T),T.isRenderTargetTexture===!1&&T.version>0&&D.__version!==T.version){const W=T.image;if(W===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(D,T,x);return}}t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+x)}function Y(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Xe(D,T,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+x)}function G(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){Xe(D,T,x);return}t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+x)}function $(T,x){const D=i.get(T);if(T.version>0&&D.__version!==T.version){X(D,T,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+x)}const k={[As]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[Rs]:r.MIRRORED_REPEAT},ne={[Ct]:r.NEAREST,[Du]:r.NEAREST_MIPMAP_NEAREST,[En]:r.NEAREST_MIPMAP_LINEAR,[Yt]:r.LINEAR,[La]:r.LINEAR_MIPMAP_NEAREST,[qi]:r.LINEAR_MIPMAP_LINEAR},ue={[Bu]:r.NEVER,[Wu]:r.ALWAYS,[zu]:r.LESS,[jc]:r.LEQUAL,[Gu]:r.EQUAL,[Vu]:r.GEQUAL,[ku]:r.GREATER,[Hu]:r.NOTEQUAL};function Re(T,x){if(x.type===pi&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Yt||x.magFilter===La||x.magFilter===En||x.magFilter===qi||x.minFilter===Yt||x.minFilter===La||x.minFilter===En||x.minFilter===qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(T,r.TEXTURE_WRAP_S,k[x.wrapS]),r.texParameteri(T,r.TEXTURE_WRAP_T,k[x.wrapT]),(T===r.TEXTURE_3D||T===r.TEXTURE_2D_ARRAY)&&r.texParameteri(T,r.TEXTURE_WRAP_R,k[x.wrapR]),r.texParameteri(T,r.TEXTURE_MAG_FILTER,ne[x.magFilter]),r.texParameteri(T,r.TEXTURE_MIN_FILTER,ne[x.minFilter]),x.compareFunction&&(r.texParameteri(T,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(T,r.TEXTURE_COMPARE_FUNC,ue[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Ct||x.minFilter!==En&&x.minFilter!==qi||x.type===pi&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(T,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,n.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Ve(T,x){let D=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",N));const W=x.source;let J=u.get(W);J===void 0&&(J={},u.set(W,J));const j=z(x);if(j!==T.__cacheKey){J[j]===void 0&&(J[j]={texture:r.createTexture(),usedTimes:0},s.memory.textures++,D=!0),J[j].usedTimes++;const Ee=J[T.__cacheKey];Ee!==void 0&&(J[T.__cacheKey].usedTimes--,Ee.usedTimes===0&&I(x)),T.__cacheKey=j,T.__webglTexture=J[j].texture}return D}function Xe(T,x,D){let W=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(W=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(W=r.TEXTURE_3D);const J=Ve(T,x),j=x.source;t.bindTexture(W,T.__webglTexture,r.TEXTURE0+D);const Ee=i.get(j);if(j.version!==Ee.__version||J===!0){t.activeTexture(r.TEXTURE0+D);const he=qe.getPrimaries(qe.workingColorSpace),ge=x.colorSpace===bi?null:qe.getPrimaries(x.colorSpace),He=x.colorSpace===bi||he===ge?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,He);let re=_(x.image,!1,n.maxTextureSize);re=Pe(x,re);const Me=a.convert(x.format,x.colorSpace),Ne=a.convert(x.type);let Oe=b(x.internalFormat,Me,Ne,x.colorSpace,x.isVideoTexture);Re(W,x);let ve;const We=x.mipmaps,Fe=x.isVideoTexture!==!0,Je=Ee.__version===void 0||J===!0,P=j.dataReady,fe=E(x,re);if(x.isDepthTexture)Oe=M(x.format===Or,x.type),Je&&(Fe?t.texStorage2D(r.TEXTURE_2D,1,Oe,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,Oe,re.width,re.height,0,Me,Ne,null));else if(x.isDataTexture)if(We.length>0){Fe&&Je&&t.texStorage2D(r.TEXTURE_2D,fe,Oe,We[0].width,We[0].height);for(let H=0,q=We.length;H<q;H++)ve=We[H],Fe?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ve.width,ve.height,Me,Ne,ve.data):t.texImage2D(r.TEXTURE_2D,H,Oe,ve.width,ve.height,0,Me,Ne,ve.data);x.generateMipmaps=!1}else Fe?(Je&&t.texStorage2D(r.TEXTURE_2D,fe,Oe,re.width,re.height),P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,re.width,re.height,Me,Ne,re.data)):t.texImage2D(r.TEXTURE_2D,0,Oe,re.width,re.height,0,Me,Ne,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Fe&&Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Oe,We[0].width,We[0].height,re.depth);for(let H=0,q=We.length;H<q;H++)if(ve=We[H],x.format!==Bt)if(Me!==null)if(Fe){if(P)if(x.layerUpdates.size>0){const pe=Yl(ve.width,ve.height,x.format,x.type);for(const de of x.layerUpdates){const $e=ve.data.subarray(de*pe/ve.data.BYTES_PER_ELEMENT,(de+1)*pe/ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,de,ve.width,ve.height,1,Me,$e,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,re.depth,Me,ve.data,0,0)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,H,Oe,ve.width,ve.height,re.depth,0,ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?P&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,H,0,0,0,ve.width,ve.height,re.depth,Me,Ne,ve.data):t.texImage3D(r.TEXTURE_2D_ARRAY,H,Oe,ve.width,ve.height,re.depth,0,Me,Ne,ve.data)}else{Fe&&Je&&t.texStorage2D(r.TEXTURE_2D,fe,Oe,We[0].width,We[0].height);for(let H=0,q=We.length;H<q;H++)ve=We[H],x.format!==Bt?Me!==null?Fe?P&&t.compressedTexSubImage2D(r.TEXTURE_2D,H,0,0,ve.width,ve.height,Me,ve.data):t.compressedTexImage2D(r.TEXTURE_2D,H,Oe,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,ve.width,ve.height,Me,Ne,ve.data):t.texImage2D(r.TEXTURE_2D,H,Oe,ve.width,ve.height,0,Me,Ne,ve.data)}else if(x.isDataArrayTexture)if(Fe){if(Je&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,Oe,re.width,re.height,re.depth),P)if(x.layerUpdates.size>0){const H=Yl(re.width,re.height,x.format,x.type);for(const q of x.layerUpdates){const pe=re.data.subarray(q*H/re.data.BYTES_PER_ELEMENT,(q+1)*H/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,q,re.width,re.height,1,Me,Ne,pe)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,Me,Ne,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Oe,re.width,re.height,re.depth,0,Me,Ne,re.data);else if(x.isData3DTexture)Fe?(Je&&t.texStorage3D(r.TEXTURE_3D,fe,Oe,re.width,re.height,re.depth),P&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,Me,Ne,re.data)):t.texImage3D(r.TEXTURE_3D,0,Oe,re.width,re.height,re.depth,0,Me,Ne,re.data);else if(x.isFramebufferTexture){if(Je)if(Fe)t.texStorage2D(r.TEXTURE_2D,fe,Oe,re.width,re.height);else{let H=re.width,q=re.height;for(let pe=0;pe<fe;pe++)t.texImage2D(r.TEXTURE_2D,pe,Oe,H,q,0,Me,Ne,null),H>>=1,q>>=1}}else if(We.length>0){if(Fe&&Je){const H=ye(We[0]);t.texStorage2D(r.TEXTURE_2D,fe,Oe,H.width,H.height)}for(let H=0,q=We.length;H<q;H++)ve=We[H],Fe?P&&t.texSubImage2D(r.TEXTURE_2D,H,0,0,Me,Ne,ve):t.texImage2D(r.TEXTURE_2D,H,Oe,Me,Ne,ve);x.generateMipmaps=!1}else if(Fe){if(Je){const H=ye(re);t.texStorage2D(r.TEXTURE_2D,fe,Oe,H.width,H.height)}P&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Me,Ne,re)}else t.texImage2D(r.TEXTURE_2D,0,Oe,Me,Ne,re);p(x)&&m(W),Ee.__version=j.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function X(T,x,D){if(x.image.length!==6)return;const W=Ve(T,x),J=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,T.__webglTexture,r.TEXTURE0+D);const j=i.get(J);if(J.version!==j.__version||W===!0){t.activeTexture(r.TEXTURE0+D);const Ee=qe.getPrimaries(qe.workingColorSpace),he=x.colorSpace===bi?null:qe.getPrimaries(x.colorSpace),ge=x.colorSpace===bi||Ee===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const He=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,Me=[];for(let q=0;q<6;q++)!He&&!re?Me[q]=_(x.image[q],!0,n.maxCubemapSize):Me[q]=re?x.image[q].image:x.image[q],Me[q]=Pe(x,Me[q]);const Ne=Me[0],Oe=a.convert(x.format,x.colorSpace),ve=a.convert(x.type),We=b(x.internalFormat,Oe,ve,x.colorSpace),Fe=x.isVideoTexture!==!0,Je=j.__version===void 0||W===!0,P=J.dataReady;let fe=E(x,Ne);Re(r.TEXTURE_CUBE_MAP,x);let H;if(He){Fe&&Je&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,We,Ne.width,Ne.height);for(let q=0;q<6;q++){H=Me[q].mipmaps;for(let pe=0;pe<H.length;pe++){const de=H[pe];x.format!==Bt?Oe!==null?Fe?P&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,de.width,de.height,Oe,de.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,We,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Fe?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,0,0,de.width,de.height,Oe,ve,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe,We,de.width,de.height,0,Oe,ve,de.data)}}}else{if(H=x.mipmaps,Fe&&Je){H.length>0&&fe++;const q=ye(Me[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,We,q.width,q.height)}for(let q=0;q<6;q++)if(re){Fe?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Me[q].width,Me[q].height,Oe,ve,Me[q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,We,Me[q].width,Me[q].height,0,Oe,ve,Me[q].data);for(let pe=0;pe<H.length;pe++){const de=H[pe].image[q].image;Fe?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,de.width,de.height,Oe,ve,de.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,We,de.width,de.height,0,Oe,ve,de.data)}}else{Fe?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,0,0,Oe,ve,Me[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,0,We,Oe,ve,Me[q]);for(let pe=0;pe<H.length;pe++){const de=H[pe];Fe?P&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,0,0,Oe,ve,de.image[q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+q,pe+1,We,Oe,ve,de.image[q])}}}p(x)&&m(r.TEXTURE_CUBE_MAP),j.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Q(T,x,D,W,J,j){const Ee=a.convert(D.format,D.colorSpace),he=a.convert(D.type),ge=b(D.internalFormat,Ee,he,D.colorSpace);if(!i.get(x).__hasExternalTextures){const He=Math.max(1,x.width>>j),re=Math.max(1,x.height>>j);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?t.texImage3D(J,j,ge,He,re,x.depth,0,Ee,he,null):t.texImage2D(J,j,ge,He,re,0,Ee,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,T),_e(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,W,J,i.get(D).__webglTexture,0,ee(x)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,W,J,i.get(D).__webglTexture,j),t.bindFramebuffer(r.FRAMEBUFFER,null)}function se(T,x,D){if(r.bindRenderbuffer(r.RENDERBUFFER,T),x.depthBuffer){const W=x.depthTexture,J=W&&W.isDepthTexture?W.type:null,j=M(x.stencilBuffer,J),Ee=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=ee(x);_e(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,j,x.width,x.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,j,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,j,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ee,r.RENDERBUFFER,T)}else{const W=x.textures;for(let J=0;J<W.length;J++){const j=W[J],Ee=a.convert(j.format,j.colorSpace),he=a.convert(j.type),ge=b(j.internalFormat,Ee,he,j.colorSpace),He=ee(x);D&&_e(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,He,ge,x.width,x.height):_e(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,He,ge,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,ge,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function oe(T,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),V(x.depthTexture,0);const D=i.get(x.depthTexture).__webglTexture,W=ee(x);if(x.depthTexture.format===Cr)_e(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,D,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,D,0);else if(x.depthTexture.format===Or)_e(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,D,0,W):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,D,0);else throw new Error("Unknown depthTexture format")}function Ie(T){const x=i.get(T),D=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){const W=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),W){const J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,W.removeEventListener("dispose",J)};W.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=W}if(T.depthTexture&&!x.__autoAllocateDepthBuffer){if(D)throw new Error("target.depthTexture not supported in Cube render targets");oe(x.__webglFramebuffer,T)}else if(D){x.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[W]),x.__webglDepthbuffer[W]===void 0)x.__webglDepthbuffer[W]=r.createRenderbuffer(),se(x.__webglDepthbuffer[W],T,!1);else{const J=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,j=x.__webglDepthbuffer[W];r.bindRenderbuffer(r.RENDERBUFFER,j),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,j)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),se(x.__webglDepthbuffer,T,!1);else{const W=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,J),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,J)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Se(T,x,D){const W=i.get(T);x!==void 0&&Q(W.__webglFramebuffer,T,T.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&Ie(T)}function Ce(T){const x=T.texture,D=i.get(T),W=i.get(x);T.addEventListener("dispose",R);const J=T.textures,j=T.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(W.__webglTexture===void 0&&(W.__webglTexture=r.createTexture()),W.__version=x.version,s.memory.textures++),j){D.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer[he]=[];for(let ge=0;ge<x.mipmaps.length;ge++)D.__webglFramebuffer[he][ge]=r.createFramebuffer()}else D.__webglFramebuffer[he]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){D.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)D.__webglFramebuffer[he]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(Ee)for(let he=0,ge=J.length;he<ge;he++){const He=i.get(J[he]);He.__webglTexture===void 0&&(He.__webglTexture=r.createTexture(),s.memory.textures++)}if(T.samples>0&&_e(T)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let he=0;he<J.length;he++){const ge=J[he];D.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[he]);const He=a.convert(ge.format,ge.colorSpace),re=a.convert(ge.type),Me=b(ge.internalFormat,He,re,ge.colorSpace,T.isXRRenderTarget===!0),Ne=ee(T);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ne,Me,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,D.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),T.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),se(D.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(j){t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Re(r.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)Q(D.__webglFramebuffer[he][ge],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else Q(D.__webglFramebuffer[he],T,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(x)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ee){for(let he=0,ge=J.length;he<ge;he++){const He=J[he],re=i.get(He);t.bindTexture(r.TEXTURE_2D,re.__webglTexture),Re(r.TEXTURE_2D,He),Q(D.__webglFramebuffer,T,He,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),p(He)&&m(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(he=T.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,W.__webglTexture),Re(he,x),x.mipmaps&&x.mipmaps.length>0)for(let ge=0;ge<x.mipmaps.length;ge++)Q(D.__webglFramebuffer[ge],T,x,r.COLOR_ATTACHMENT0,he,ge);else Q(D.__webglFramebuffer,T,x,r.COLOR_ATTACHMENT0,he,0);p(x)&&m(he),t.unbindTexture()}T.depthBuffer&&Ie(T)}function K(T){const x=T.textures;for(let D=0,W=x.length;D<W;D++){const J=x[D];if(p(J)){const j=T.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:r.TEXTURE_2D,Ee=i.get(J).__webglTexture;t.bindTexture(j,Ee),m(j),t.unbindTexture()}}}const Z=[],w=[];function Te(T){if(T.samples>0){if(_e(T)===!1){const x=T.textures,D=T.width,W=T.height;let J=r.COLOR_BUFFER_BIT;const j=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ee=i.get(T),he=x.length>1;if(he)for(let ge=0;ge<x.length;ge++)t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ge=0;ge<x.length;ge++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const He=i.get(x[ge]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,He,0)}r.blitFramebuffer(0,0,D,W,0,0,D,W,J,r.NEAREST),l===!0&&(Z.length=0,w.length=0,Z.push(r.COLOR_ATTACHMENT0+ge),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Z.push(j),w.push(j),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,w)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Z))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let ge=0;ge<x.length;ge++){t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.RENDERBUFFER,Ee.__webglColorRenderbuffer[ge]);const He=i.get(x[ge]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ee.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ge,r.TEXTURE_2D,He,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const x=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function ee(T){return Math.min(n.maxSamples,T.samples)}function _e(T){const x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function le(T){const x=s.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Pe(T,x){const D=T.colorSpace,W=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||D!==Li&&D!==bi&&(qe.getTransfer(D)===Qe?(W!==Bt||J!==mi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",D)),x}function ye(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=S,this.setTexture2D=V,this.setTexture2DArray=Y,this.setTexture3D=G,this.setTextureCube=$,this.rebindTextures=Se,this.setupRenderTarget=Ce,this.updateRenderTargetMipmap=K,this.updateMultisampleRenderTarget=Te,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=_e}function d_(r,e){function t(i,n=bi){let a;const s=qe.getTransfer(n);if(i===mi)return r.UNSIGNED_BYTE;if(i===mo)return r.UNSIGNED_SHORT_4_4_4_4;if(i===go)return r.UNSIGNED_SHORT_5_5_5_1;if(i===Fc)return r.UNSIGNED_INT_5_9_9_9_REV;if(i===Nc)return r.BYTE;if(i===Oc)return r.SHORT;if(i===cn)return r.UNSIGNED_SHORT;if(i===fo)return r.INT;if(i===Ki)return r.UNSIGNED_INT;if(i===pi)return r.FLOAT;if(i===_n)return r.HALF_FLOAT;if(i===Bc)return r.ALPHA;if(i===zc)return r.RGB;if(i===Bt)return r.RGBA;if(i===Gc)return r.LUMINANCE;if(i===kc)return r.LUMINANCE_ALPHA;if(i===Cr)return r.DEPTH_COMPONENT;if(i===Or)return r.DEPTH_STENCIL;if(i===Hc)return r.RED;if(i===_o)return r.RED_INTEGER;if(i===Vc)return r.RG;if(i===vo)return r.RG_INTEGER;if(i===xo)return r.RGBA_INTEGER;if(i===ra||i===na||i===aa||i===sa)if(s===Qe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ra)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===sa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ra)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===sa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cs||i===Ps||i===Ls||i===Us)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Cs)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ps)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ls)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Us)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Is||i===Ds||i===Ns)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===Is||i===Ds)return s===Qe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Ns)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Os||i===Fs||i===Bs||i===zs||i===Gs||i===ks||i===Hs||i===Vs||i===Ws||i===Xs||i===js||i===Ys||i===qs||i===Ks)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===Os)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Fs)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bs)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===zs)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Gs)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ks)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hs)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vs)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ws)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xs)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===js)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Ys)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===qs)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Ks)return s===Qe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===oa||i===Zs||i===Js)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===oa)return s===Qe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zs)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Js)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Wc||i===$s||i===Qs||i===eo)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===oa)return a.COMPRESSED_RED_RGTC1_EXT;if(i===$s)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Qs)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===eo)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Nr?r.UNSIGNED_INT_24_8:r[i]!==void 0?r[i]:null}return{convert:t}}class p_ extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Zr extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f_={type:"move"};class as{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,a=null,s=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){s=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,i),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&a!==null&&(n=a),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(f_)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=s!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Zr;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}const m_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class __{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,i){if(this.texture===null){const n=new Tt,a=e.properties.get(n);a.__webglTexture=t.texture,(t.depthNear!=i.depthNear||t.depthFar!=i.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Ci({vertexShader:m_,fragmentShader:g_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new $i(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v_ extends Ui{constructor(e,t){super();const i=this;let n=null,a=1,s=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new __,p=t.getContextAttributes();let m=null,b=null;const M=[],E=[],N=new ae;let R=null;const A=new kt;A.layers.enable(1),A.viewport=new nt;const I=new kt;I.layers.enable(2),I.viewport=new nt;const ie=[A,I],v=new p_;v.layers.enable(1),v.layers.enable(2);let S=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let Q=M[X];return Q===void 0&&(Q=new as,M[X]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(X){let Q=M[X];return Q===void 0&&(Q=new as,M[X]=Q),Q.getGripSpace()},this.getHand=function(X){let Q=M[X];return Q===void 0&&(Q=new as,M[X]=Q),Q.getHandSpace()};function z(X){const Q=E.indexOf(X.inputSource);if(Q===-1)return;const se=M[Q];se!==void 0&&(se.update(X.inputSource,X.frame,c||s),se.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",V),n.removeEventListener("inputsourceschange",Y);for(let X=0;X<M.length;X++){const Q=E[X];Q!==null&&(E[X]=null,M[X].disconnect(Q))}S=null,B=null,_.reset(),e.setRenderTarget(m),f=null,u=null,d=null,n=null,b=null,Xe.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||s},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(X){if(n=X,n!==null){if(m=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",V),n.addEventListener("inputsourceschange",Y),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),n.renderState.layers===void 0){const Q={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:a};f=new XRWebGLLayer(n,t,Q),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new Zi(f.framebufferWidth,f.framebufferHeight,{format:Bt,type:mi,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let Q=null,se=null,oe=null;p.depth&&(oe=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=p.stencil?Or:Cr,se=p.stencil?Nr:Ki);const Ie={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:a};d=new XRWebGLBinding(n,t),u=d.createProjectionLayer(Ie),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new Zi(u.textureWidth,u.textureHeight,{format:Bt,type:mi,depthTexture:new ah(u.textureWidth,u.textureHeight,se,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,s=await n.requestReferenceSpace(o),Xe.setContext(n),Xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function Y(X){for(let Q=0;Q<X.removed.length;Q++){const se=X.removed[Q],oe=E.indexOf(se);oe>=0&&(E[oe]=null,M[oe].disconnect(se))}for(let Q=0;Q<X.added.length;Q++){const se=X.added[Q];let oe=E.indexOf(se);if(oe===-1){for(let Se=0;Se<M.length;Se++)if(Se>=E.length){E.push(se),oe=Se;break}else if(E[Se]===null){E[Se]=se,oe=Se;break}if(oe===-1)break}const Ie=M[oe];Ie&&Ie.connect(se)}}const G=new C,$=new C;function k(X,Q,se){G.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(se.matrixWorld);const oe=G.distanceTo($),Ie=Q.projectionMatrix.elements,Se=se.projectionMatrix.elements,Ce=Ie[14]/(Ie[10]-1),K=Ie[14]/(Ie[10]+1),Z=(Ie[9]+1)/Ie[5],w=(Ie[9]-1)/Ie[5],Te=(Ie[8]-1)/Ie[0],ee=(Se[8]+1)/Se[0],_e=Ce*Te,le=Ce*ee,Pe=oe/(-Te+ee),ye=Pe*-Te;if(Q.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ye),X.translateZ(Pe),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Ie[10]===-1)X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const T=Ce+Pe,x=K+Pe,D=_e-ye,W=le+(oe-ye),J=Z*K/x*T,j=w*K/x*T;X.projectionMatrix.makePerspective(D,W,J,j,T,x),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ne(X,Q){Q===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(Q.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(n===null)return;let Q=X.near,se=X.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(se=_.depthFar)),v.near=I.near=A.near=Q,v.far=I.far=A.far=se,(S!==v.near||B!==v.far)&&(n.updateRenderState({depthNear:v.near,depthFar:v.far}),S=v.near,B=v.far);const oe=X.parent,Ie=v.cameras;ne(v,oe);for(let Se=0;Se<Ie.length;Se++)ne(Ie[Se],oe);Ie.length===2?k(v,A,I):v.projectionMatrix.copy(A.projectionMatrix),ue(X,v,oe)};function ue(X,Q,se){se===null?X.matrix.copy(Q.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(Q.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(Q.projectionMatrix),X.projectionMatrixInverse.copy(Q.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=hn*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let Re=null;function Ve(X,Q){if(h=Q.getViewerPose(c||s),g=Q,h!==null){const se=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let oe=!1;se.length!==v.cameras.length&&(v.cameras.length=0,oe=!0);for(let Se=0;Se<se.length;Se++){const Ce=se[Se];let K=null;if(f!==null)K=f.getViewport(Ce);else{const w=d.getViewSubImage(u,Ce);K=w.viewport,Se===0&&(e.setRenderTargetTextures(b,w.colorTexture,u.ignoreDepthValues?void 0:w.depthStencilTexture),e.setRenderTarget(b))}let Z=ie[Se];Z===void 0&&(Z=new kt,Z.layers.enable(Se),Z.viewport=new nt,ie[Se]=Z),Z.matrix.fromArray(Ce.transform.matrix),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.projectionMatrix.fromArray(Ce.projectionMatrix),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert(),Z.viewport.set(K.x,K.y,K.width,K.height),Se===0&&(v.matrix.copy(Z.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),oe===!0&&v.cameras.push(Z)}const Ie=n.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Se=d.getDepthInformation(se[0]);Se&&Se.isValid&&Se.texture&&_.init(e,Se,n.renderState)}}for(let se=0;se<M.length;se++){const oe=E[se],Ie=M[se];oe!==null&&Ie!==void 0&&Ie.update(oe,Q,c||s)}Re&&Re(X,Q),Q.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Xe=new rh;Xe.setAnimationLoop(Ve),this.setAnimationLoop=function(X){Re=X},this.dispose=function(){}}}const ki=new ri,x_=new et;function y_(r,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function i(p,m){m.color.getRGB(p.fogColor.value,eh(r)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,b,M,E){m.isMeshBasicMaterial||m.isMeshLambertMaterial?a(p,m):m.isMeshToonMaterial?(a(p,m),d(p,m)):m.isMeshPhongMaterial?(a(p,m),h(p,m)):m.isMeshStandardMaterial?(a(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,E)):m.isMeshMatcapMaterial?(a(p,m),g(p,m)):m.isMeshDepthMaterial?a(p,m):m.isMeshDistanceMaterial?(a(p,m),_(p,m)):m.isMeshNormalMaterial?a(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,M):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function a(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Lt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Lt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const b=e.get(m),M=b.envMap,E=b.envMapRotation;M&&(p.envMap.value=M,ki.copy(E),ki.x*=-1,ki.y*=-1,ki.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(ki.y*=-1,ki.z*=-1),p.envMapRotation.value.setFromMatrix4(x_.makeRotationFromEuler(ki)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=M*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,b){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Lt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function M_(r,e,t,i){let n={},a={},s=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,M){const E=M.program;i.uniformBlockBinding(b,E)}function c(b,M){let E=n[b.id];E===void 0&&(g(b),E=h(b),n[b.id]=E,b.addEventListener("dispose",p));const N=M.program;i.updateUBOMapping(b,N);const R=e.render.frame;a[b.id]!==R&&(u(b),a[b.id]=R)}function h(b){const M=d();b.__bindingPointIndex=M;const E=r.createBuffer(),N=b.__size,R=b.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,N,R),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,E),E}function d(){for(let b=0;b<o;b++)if(s.indexOf(b)===-1)return s.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(b){const M=n[b.id],E=b.uniforms,N=b.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let R=0,A=E.length;R<A;R++){const I=Array.isArray(E[R])?E[R]:[E[R]];for(let ie=0,v=I.length;ie<v;ie++){const S=I[ie];if(f(S,R,ie,N)===!0){const B=S.__offset,z=Array.isArray(S.value)?S.value:[S.value];let V=0;for(let Y=0;Y<z.length;Y++){const G=z[Y],$=_(G);typeof G=="number"||typeof G=="boolean"?(S.__data[0]=G,r.bufferSubData(r.UNIFORM_BUFFER,B+V,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=0,S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=0,S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=0):(G.toArray(S.__data,V),V+=$.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,B,S.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(b,M,E,N){const R=b.value,A=M+"_"+E;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const I=N[A];if(typeof R=="number"||typeof R=="boolean"){if(I!==R)return N[A]=R,!0}else if(I.equals(R)===!1)return I.copy(R),!0}return!1}function g(b){const M=b.uniforms;let E=0;const N=16;for(let A=0,I=M.length;A<I;A++){const ie=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,S=ie.length;v<S;v++){const B=ie[v],z=Array.isArray(B.value)?B.value:[B.value];for(let V=0,Y=z.length;V<Y;V++){const G=z[V],$=_(G),k=E%N,ne=k%$.boundary,ue=k+ne;E+=ne,ue!==0&&N-ue<$.storage&&(E+=N-ue),B.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=E,E+=$.storage}}}const R=E%N;return R>0&&(E+=N-R),b.__size=E,b.__cache={},this}function _(b){const M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),M}function p(b){const M=b.target;M.removeEventListener("dispose",p);const E=s.indexOf(M.__bindingPointIndex);s.splice(E,1),r.deleteBuffer(n[M.id]),delete n[M.id],delete a[M.id]}function m(){for(const b in n)r.deleteBuffer(n[b]);s=[],n={},a={}}return{bind:l,update:c,dispose:m}}class S_{constructor(e={}){const{canvas:t=ld(),context:i=null,depth:n=!0,stencil:a=!1,alpha:s=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=s;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ei,this.toneMapping=Ai,this.toneMappingExposure=1;const M=this;let E=!1,N=0,R=0,A=null,I=-1,ie=null;const v=new nt,S=new nt;let B=null;const z=new ke(0);let V=0,Y=t.width,G=t.height,$=1,k=null,ne=null;const ue=new nt(0,0,Y,G),Re=new nt(0,0,Y,G);let Ve=!1;const Xe=new Eo;let X=!1,Q=!1;const se=new et,oe=new et,Ie=new C,Se=new nt,Ce={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let K=!1;function Z(){return A===null?$:1}let w=i;function Te(y,U){return t.getContext(y,U)}try{const y={alpha:!0,depth:n,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${uo}`),t.addEventListener("webglcontextlost",q,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",de,!1),w===null){const U="webgl2";if(w=Te(U,y),w===null)throw Te(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let ee,_e,le,Pe,ye,T,x,D,W,J,j,Ee,he,ge,He,re,Me,Ne,Oe,ve,We,Fe,Je,P;function fe(){ee=new Am(w),ee.init(),Fe=new d_(w,ee),_e=new Mm(w,ee,e,Fe),le=new c_(w),_e.reverseDepthBuffer&&le.buffers.depth.setReversed(!0),Pe=new Pm(w),ye=new qg,T=new u_(w,ee,le,ye,_e,Fe,Pe),x=new Em(M),D=new wm(M),W=new Od(w),Je=new xm(w,W),J=new Rm(w,W,Pe,Je),j=new Um(w,J,W,Pe),Oe=new Lm(w,_e,T),re=new Sm(ye),Ee=new Yg(M,x,D,ee,_e,Je,re),he=new y_(M,ye),ge=new Zg,He=new i_(ee),Ne=new vm(M,x,D,le,j,u,l),Me=new o_(M,j,_e),P=new M_(w,Pe,_e,le),ve=new ym(w,ee,Pe),We=new Cm(w,ee,Pe),Pe.programs=Ee.programs,M.capabilities=_e,M.extensions=ee,M.properties=ye,M.renderLists=ge,M.shadowMap=Me,M.state=le,M.info=Pe}fe();const H=new v_(M,w);this.xr=H,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const y=ee.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=ee.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(y){y!==void 0&&($=y,this.setSize(Y,G,!1))},this.getSize=function(y){return y.set(Y,G)},this.setSize=function(y,U,O=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=y,G=U,t.width=Math.floor(y*$),t.height=Math.floor(U*$),O===!0&&(t.style.width=y+"px",t.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(Y*$,G*$).floor()},this.setDrawingBufferSize=function(y,U,O){Y=y,G=U,$=O,t.width=Math.floor(y*O),t.height=Math.floor(U*O),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(v)},this.getViewport=function(y){return y.copy(ue)},this.setViewport=function(y,U,O,F){y.isVector4?ue.set(y.x,y.y,y.z,y.w):ue.set(y,U,O,F),le.viewport(v.copy(ue).multiplyScalar($).round())},this.getScissor=function(y){return y.copy(Re)},this.setScissor=function(y,U,O,F){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,U,O,F),le.scissor(S.copy(Re).multiplyScalar($).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(y){le.setScissorTest(Ve=y)},this.setOpaqueSort=function(y){k=y},this.setTransparentSort=function(y){ne=y},this.getClearColor=function(y){return y.copy(Ne.getClearColor())},this.setClearColor=function(){Ne.setClearColor.apply(Ne,arguments)},this.getClearAlpha=function(){return Ne.getClearAlpha()},this.setClearAlpha=function(){Ne.setClearAlpha.apply(Ne,arguments)},this.clear=function(y=!0,U=!0,O=!0){let F=0;if(y){let L=!1;if(A!==null){const te=A.texture.format;L=te===xo||te===vo||te===_o}if(L){const te=A.texture.type,me=te===mi||te===Ki||te===cn||te===Nr||te===mo||te===go,xe=Ne.getClearColor(),be=Ne.getClearAlpha(),De=xe.r,Ue=xe.g,Le=xe.b;me?(f[0]=De,f[1]=Ue,f[2]=Le,f[3]=be,w.clearBufferuiv(w.COLOR,0,f)):(g[0]=De,g[1]=Ue,g[2]=Le,g[3]=be,w.clearBufferiv(w.COLOR,0,g))}else F|=w.COLOR_BUFFER_BIT}U&&(F|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(F|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",q,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",de,!1),ge.dispose(),He.dispose(),ye.dispose(),x.dispose(),D.dispose(),j.dispose(),Je.dispose(),P.dispose(),Ee.dispose(),H.dispose(),H.removeEventListener("sessionstart",Wo),H.removeEventListener("sessionend",Xo),Di.stop()};function q(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function pe(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const y=Pe.autoReset,U=Me.enabled,O=Me.autoUpdate,F=Me.needsUpdate,L=Me.type;fe(),Pe.autoReset=y,Me.enabled=U,Me.autoUpdate=O,Me.needsUpdate=F,Me.type=L}function de(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function $e(y){const U=y.target;U.removeEventListener("dispose",$e),ot(U)}function ot(y){wt(y),ye.remove(y)}function wt(y){const U=ye.get(y).programs;U!==void 0&&(U.forEach(function(O){Ee.releaseProgram(O)}),y.isShaderMaterial&&Ee.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,O,F,L,te){U===null&&(U=Ce);const me=L.isMesh&&L.matrixWorld.determinant()<0,xe=Jh(y,U,O,F,L);le.setMaterial(F,me);let be=O.index,De=1;if(F.wireframe===!0){if(be=J.getWireframeAttribute(O),be===void 0)return;De=2}const Ue=O.drawRange,Le=O.attributes.position;let Ke=Ue.start*De,it=(Ue.start+Ue.count)*De;te!==null&&(Ke=Math.max(Ke,te.start*De),it=Math.min(it,(te.start+te.count)*De)),be!==null?(Ke=Math.max(Ke,0),it=Math.min(it,be.count)):Le!=null&&(Ke=Math.max(Ke,0),it=Math.min(it,Le.count));const at=it-Ke;if(at<0||at===1/0)return;Je.setup(L,F,xe,O,be);let ht,tt=ve;if(be!==null&&(ht=W.get(be),tt=We,tt.setIndex(ht)),L.isMesh)F.wireframe===!0?(le.setLineWidth(F.wireframeLinewidth*Z()),tt.setMode(w.LINES)):tt.setMode(w.TRIANGLES);else if(L.isLine){let we=F.linewidth;we===void 0&&(we=1),le.setLineWidth(we*Z()),L.isLineSegments?tt.setMode(w.LINES):L.isLineLoop?tt.setMode(w.LINE_LOOP):tt.setMode(w.LINE_STRIP)}else L.isPoints?tt.setMode(w.POINTS):L.isSprite&&tt.setMode(w.TRIANGLES);if(L.isBatchedMesh)if(L._multiDrawInstances!==null)tt.renderMultiDrawInstances(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount,L._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))tt.renderMultiDraw(L._multiDrawStarts,L._multiDrawCounts,L._multiDrawCount);else{const we=L._multiDrawStarts,Mt=L._multiDrawCounts,Ni=L._multiDrawCount,Ht=be?W.get(be).bytesPerElement:1,rr=ye.get(F).currentProgram.getUniforms();for(let It=0;It<Ni;It++)rr.setValue(w,"_gl_DrawID",It),tt.render(we[It]/Ht,Mt[It])}else if(L.isInstancedMesh)tt.renderInstances(Ke,at,L.count);else if(O.isInstancedBufferGeometry){const we=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Mt=Math.min(O.instanceCount,we);tt.renderInstances(Ke,at,Mt)}else tt.render(Ke,at)};function Ye(y,U,O){y.transparent===!0&&y.side===ii&&y.forceSinglePass===!1?(y.side=Lt,y.needsUpdate=!0,Sn(y,U,O),y.side=Ri,y.needsUpdate=!0,Sn(y,U,O),y.side=ii):Sn(y,U,O)}this.compile=function(y,U,O=null){O===null&&(O=y),p=He.get(O),p.init(U),b.push(p),O.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),y!==O&&y.traverseVisible(function(L){L.isLight&&L.layers.test(U.layers)&&(p.pushLight(L),L.castShadow&&p.pushShadow(L))}),p.setupLights();const F=new Set;return y.traverse(function(L){if(!(L.isMesh||L.isPoints||L.isLine||L.isSprite))return;const te=L.material;if(te)if(Array.isArray(te))for(let me=0;me<te.length;me++){const xe=te[me];Ye(xe,O,L),F.add(xe)}else Ye(te,O,L),F.add(te)}),b.pop(),p=null,F},this.compileAsync=function(y,U,O=null){const F=this.compile(y,U,O);return new Promise(L=>{function te(){if(F.forEach(function(me){ye.get(me).currentProgram.isReady()&&F.delete(me)}),F.size===0){L(y);return}setTimeout(te,10)}ee.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let At=null;function ai(y){At&&At(y)}function Wo(){Di.stop()}function Xo(){Di.start()}const Di=new rh;Di.setAnimationLoop(ai),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(y){At=y,H.setAnimationLoop(y),y===null?Di.stop():Di.start()},H.addEventListener("sessionstart",Wo),H.addEventListener("sessionend",Xo),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(U),U=H.getCamera()),y.isScene===!0&&y.onBeforeRender(M,y,U,A),p=He.get(y,b.length),p.init(U),b.push(p),oe.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Xe.setFromProjectionMatrix(oe),Q=this.localClippingEnabled,X=re.init(this.clippingPlanes,Q),_=ge.get(y,m.length),_.init(),m.push(_),H.enabled===!0&&H.isPresenting===!0){const te=M.xr.getDepthSensingMesh();te!==null&&Aa(te,U,-1/0,M.sortObjects)}Aa(y,U,0,M.sortObjects),_.finish(),M.sortObjects===!0&&_.sort(k,ne),K=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,K&&Ne.addToRenderList(_,y),this.info.render.frame++,X===!0&&re.beginShadows();const O=p.state.shadowsArray;Me.render(O,y,U),X===!0&&re.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=_.opaque,L=_.transmissive;if(p.setupLights(),U.isArrayCamera){const te=U.cameras;if(L.length>0)for(let me=0,xe=te.length;me<xe;me++){const be=te[me];Yo(F,L,y,be)}K&&Ne.render(y);for(let me=0,xe=te.length;me<xe;me++){const be=te[me];jo(_,y,be,be.viewport)}}else L.length>0&&Yo(F,L,y,U),K&&Ne.render(y),jo(_,y,U);A!==null&&(T.updateMultisampleRenderTarget(A),T.updateRenderTargetMipmap(A)),y.isScene===!0&&y.onAfterRender(M,y,U),Je.resetDefaultState(),I=-1,ie=null,b.pop(),b.length>0?(p=b[b.length-1],X===!0&&re.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Aa(y,U,O,F){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)O=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)p.pushLight(y),y.castShadow&&p.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||Xe.intersectsSprite(y)){F&&Se.setFromMatrixPosition(y.matrixWorld).applyMatrix4(oe);const te=j.update(y),me=y.material;me.visible&&_.push(y,te,me,O,Se.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(!y.frustumCulled||Xe.intersectsObject(y))){const te=j.update(y),me=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),Se.copy(y.boundingSphere.center)):(te.boundingSphere===null&&te.computeBoundingSphere(),Se.copy(te.boundingSphere.center)),Se.applyMatrix4(y.matrixWorld).applyMatrix4(oe)),Array.isArray(me)){const xe=te.groups;for(let be=0,De=xe.length;be<De;be++){const Ue=xe[be],Le=me[Ue.materialIndex];Le&&Le.visible&&_.push(y,te,Le,O,Se.z,Ue)}}else me.visible&&_.push(y,te,me,O,Se.z,null)}}const L=y.children;for(let te=0,me=L.length;te<me;te++)Aa(L[te],U,O,F)}function jo(y,U,O,F){const L=y.opaque,te=y.transmissive,me=y.transparent;p.setupLightsView(O),X===!0&&re.setGlobalState(M.clippingPlanes,O),F&&le.viewport(v.copy(F)),L.length>0&&Mn(L,U,O),te.length>0&&Mn(te,U,O),me.length>0&&Mn(me,U,O),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function Yo(y,U,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[F.id]===void 0&&(p.state.transmissionRenderTarget[F.id]=new Zi(1,1,{generateMipmaps:!0,type:ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float")?_n:mi,minFilter:qi,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qe.workingColorSpace}));const L=p.state.transmissionRenderTarget[F.id],te=F.viewport||v;L.setSize(te.z,te.w);const me=M.getRenderTarget();M.setRenderTarget(L),M.getClearColor(z),V=M.getClearAlpha(),V<1&&M.setClearColor(16777215,.5),M.clear(),K&&Ne.render(O);const xe=M.toneMapping;M.toneMapping=Ai;const be=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),p.setupLightsView(F),X===!0&&re.setGlobalState(M.clippingPlanes,F),Mn(y,O,F),T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L),ee.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let Ue=0,Le=U.length;Ue<Le;Ue++){const Ke=U[Ue],it=Ke.object,at=Ke.geometry,ht=Ke.material,tt=Ke.group;if(ht.side===ii&&it.layers.test(F.layers)){const we=ht.side;ht.side=Lt,ht.needsUpdate=!0,qo(it,O,F,at,ht,tt),ht.side=we,ht.needsUpdate=!0,De=!0}}De===!0&&(T.updateMultisampleRenderTarget(L),T.updateRenderTargetMipmap(L))}M.setRenderTarget(me),M.setClearColor(z,V),be!==void 0&&(F.viewport=be),M.toneMapping=xe}function Mn(y,U,O){const F=U.isScene===!0?U.overrideMaterial:null;for(let L=0,te=y.length;L<te;L++){const me=y[L],xe=me.object,be=me.geometry,De=F===null?me.material:F,Ue=me.group;xe.layers.test(O.layers)&&qo(xe,U,O,be,De,Ue)}}function qo(y,U,O,F,L,te){y.onBeforeRender(M,U,O,F,L,te),y.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),L.onBeforeRender(M,U,O,F,y,te),L.transparent===!0&&L.side===ii&&L.forceSinglePass===!1?(L.side=Lt,L.needsUpdate=!0,M.renderBufferDirect(O,U,F,L,y,te),L.side=Ri,L.needsUpdate=!0,M.renderBufferDirect(O,U,F,L,y,te),L.side=ii):M.renderBufferDirect(O,U,F,L,y,te),y.onAfterRender(M,U,O,F,L,te)}function Sn(y,U,O){U.isScene!==!0&&(U=Ce);const F=ye.get(y),L=p.state.lights,te=p.state.shadowsArray,me=L.state.version,xe=Ee.getParameters(y,L.state,te,U,O),be=Ee.getProgramCacheKey(xe);let De=F.programs;F.environment=y.isMeshStandardMaterial?U.environment:null,F.fog=U.fog,F.envMap=(y.isMeshStandardMaterial?D:x).get(y.envMap||F.environment),F.envMapRotation=F.environment!==null&&y.envMap===null?U.environmentRotation:y.envMapRotation,De===void 0&&(y.addEventListener("dispose",$e),De=new Map,F.programs=De);let Ue=De.get(be);if(Ue!==void 0){if(F.currentProgram===Ue&&F.lightsStateVersion===me)return Zo(y,xe),Ue}else xe.uniforms=Ee.getUniforms(y),y.onBeforeCompile(xe,M),Ue=Ee.acquireProgram(xe,be),De.set(be,Ue),F.uniforms=xe.uniforms;const Le=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=re.uniform),Zo(y,xe),F.needsLights=Qh(y),F.lightsStateVersion=me,F.needsLights&&(Le.ambientLightColor.value=L.state.ambient,Le.lightProbe.value=L.state.probe,Le.directionalLights.value=L.state.directional,Le.directionalLightShadows.value=L.state.directionalShadow,Le.spotLights.value=L.state.spot,Le.spotLightShadows.value=L.state.spotShadow,Le.rectAreaLights.value=L.state.rectArea,Le.ltc_1.value=L.state.rectAreaLTC1,Le.ltc_2.value=L.state.rectAreaLTC2,Le.pointLights.value=L.state.point,Le.pointLightShadows.value=L.state.pointShadow,Le.hemisphereLights.value=L.state.hemi,Le.directionalShadowMap.value=L.state.directionalShadowMap,Le.directionalShadowMatrix.value=L.state.directionalShadowMatrix,Le.spotShadowMap.value=L.state.spotShadowMap,Le.spotLightMatrix.value=L.state.spotLightMatrix,Le.spotLightMap.value=L.state.spotLightMap,Le.pointShadowMap.value=L.state.pointShadowMap,Le.pointShadowMatrix.value=L.state.pointShadowMatrix),F.currentProgram=Ue,F.uniformsList=null,Ue}function Ko(y){if(y.uniformsList===null){const U=y.currentProgram.getUniforms();y.uniformsList=ca.seqWithValue(U.seq,y.uniforms)}return y.uniformsList}function Zo(y,U){const O=ye.get(y);O.outputColorSpace=U.outputColorSpace,O.batching=U.batching,O.batchingColor=U.batchingColor,O.instancing=U.instancing,O.instancingColor=U.instancingColor,O.instancingMorph=U.instancingMorph,O.skinning=U.skinning,O.morphTargets=U.morphTargets,O.morphNormals=U.morphNormals,O.morphColors=U.morphColors,O.morphTargetsCount=U.morphTargetsCount,O.numClippingPlanes=U.numClippingPlanes,O.numIntersection=U.numClipIntersection,O.vertexAlphas=U.vertexAlphas,O.vertexTangents=U.vertexTangents,O.toneMapping=U.toneMapping}function Jh(y,U,O,F,L){U.isScene!==!0&&(U=Ce),T.resetTextureUnits();const te=U.fog,me=F.isMeshStandardMaterial?U.environment:null,xe=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Li,be=(F.isMeshStandardMaterial?D:x).get(F.envMap||me),De=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,Ue=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Le=!!O.morphAttributes.position,Ke=!!O.morphAttributes.normal,it=!!O.morphAttributes.color;let at=Ai;F.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(at=M.toneMapping);const ht=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,tt=ht!==void 0?ht.length:0,we=ye.get(F),Mt=p.state.lights;if(X===!0&&(Q===!0||y!==ie)){const zt=y===ie&&F.id===I;re.setState(F,y,zt)}let Ni=!1;F.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Mt.state.version||we.outputColorSpace!==xe||L.isBatchedMesh&&we.batching===!1||!L.isBatchedMesh&&we.batching===!0||L.isBatchedMesh&&we.batchingColor===!0&&L.colorTexture===null||L.isBatchedMesh&&we.batchingColor===!1&&L.colorTexture!==null||L.isInstancedMesh&&we.instancing===!1||!L.isInstancedMesh&&we.instancing===!0||L.isSkinnedMesh&&we.skinning===!1||!L.isSkinnedMesh&&we.skinning===!0||L.isInstancedMesh&&we.instancingColor===!0&&L.instanceColor===null||L.isInstancedMesh&&we.instancingColor===!1&&L.instanceColor!==null||L.isInstancedMesh&&we.instancingMorph===!0&&L.morphTexture===null||L.isInstancedMesh&&we.instancingMorph===!1&&L.morphTexture!==null||we.envMap!==be||F.fog===!0&&we.fog!==te||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==re.numPlanes||we.numIntersection!==re.numIntersection)||we.vertexAlphas!==De||we.vertexTangents!==Ue||we.morphTargets!==Le||we.morphNormals!==Ke||we.morphColors!==it||we.toneMapping!==at||we.morphTargetsCount!==tt)&&(Ni=!0):(Ni=!0,we.__version=F.version);let Ht=we.currentProgram;Ni===!0&&(Ht=Sn(F,U,L));let rr=!1,It=!1,Ra=!1;const st=Ht.getUniforms(),gi=we.uniforms;if(le.useProgram(Ht.program)&&(rr=!0,It=!0,Ra=!0),F.id!==I&&(I=F.id,It=!0),rr||ie!==y){_e.reverseDepthBuffer?(se.copy(y.projectionMatrix),hd(se),ud(se),st.setValue(w,"projectionMatrix",se)):st.setValue(w,"projectionMatrix",y.projectionMatrix),st.setValue(w,"viewMatrix",y.matrixWorldInverse);const zt=st.map.cameraPosition;zt!==void 0&&zt.setValue(w,Ie.setFromMatrixPosition(y.matrixWorld)),_e.logarithmicDepthBuffer&&st.setValue(w,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&st.setValue(w,"isOrthographic",y.isOrthographicCamera===!0),ie!==y&&(ie=y,It=!0,Ra=!0)}if(L.isSkinnedMesh){st.setOptional(w,L,"bindMatrix"),st.setOptional(w,L,"bindMatrixInverse");const zt=L.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),st.setValue(w,"boneTexture",zt.boneTexture,T))}L.isBatchedMesh&&(st.setOptional(w,L,"batchingTexture"),st.setValue(w,"batchingTexture",L._matricesTexture,T),st.setOptional(w,L,"batchingIdTexture"),st.setValue(w,"batchingIdTexture",L._indirectTexture,T),st.setOptional(w,L,"batchingColorTexture"),L._colorsTexture!==null&&st.setValue(w,"batchingColorTexture",L._colorsTexture,T));const Ca=O.morphAttributes;if((Ca.position!==void 0||Ca.normal!==void 0||Ca.color!==void 0)&&Oe.update(L,O,Ht),(It||we.receiveShadow!==L.receiveShadow)&&(we.receiveShadow=L.receiveShadow,st.setValue(w,"receiveShadow",L.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(gi.envMap.value=be,gi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&U.environment!==null&&(gi.envMapIntensity.value=U.environmentIntensity),It&&(st.setValue(w,"toneMappingExposure",M.toneMappingExposure),we.needsLights&&$h(gi,Ra),te&&F.fog===!0&&he.refreshFogUniforms(gi,te),he.refreshMaterialUniforms(gi,F,$,G,p.state.transmissionRenderTarget[y.id]),ca.upload(w,Ko(we),gi,T)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ca.upload(w,Ko(we),gi,T),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&st.setValue(w,"center",L.center),st.setValue(w,"modelViewMatrix",L.modelViewMatrix),st.setValue(w,"normalMatrix",L.normalMatrix),st.setValue(w,"modelMatrix",L.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const zt=F.uniformsGroups;for(let Pa=0,eu=zt.length;Pa<eu;Pa++){const Jo=zt[Pa];P.update(Jo,Ht),P.bind(Jo,Ht)}}return Ht}function $h(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Qh(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(y,U,O){ye.get(y.texture).__webglTexture=U,ye.get(y.depthTexture).__webglTexture=O;const F=ye.get(y);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||ee.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(y,U){const O=ye.get(y);O.__webglFramebuffer=U,O.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,O=0){A=y,N=U,R=O;let F=!0,L=null,te=!1,me=!1;if(y){const xe=ye.get(y);if(xe.__useDefaultFramebuffer!==void 0)le.bindFramebuffer(w.FRAMEBUFFER,null),F=!1;else if(xe.__webglFramebuffer===void 0)T.setupRenderTarget(y);else if(xe.__hasExternalTextures)T.rebindTextures(y,ye.get(y.texture).__webglTexture,ye.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){const Ue=y.depthTexture;if(xe.__boundDepthTexture!==Ue){if(Ue!==null&&ye.has(Ue)&&(y.width!==Ue.image.width||y.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");T.setupDepthRenderbuffer(y)}}const be=y.texture;(be.isData3DTexture||be.isDataArrayTexture||be.isCompressedArrayTexture)&&(me=!0);const De=ye.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(De[U])?L=De[U][O]:L=De[U],te=!0):y.samples>0&&T.useMultisampledRTT(y)===!1?L=ye.get(y).__webglMultisampledFramebuffer:Array.isArray(De)?L=De[O]:L=De,v.copy(y.viewport),S.copy(y.scissor),B=y.scissorTest}else v.copy(ue).multiplyScalar($).floor(),S.copy(Re).multiplyScalar($).floor(),B=Ve;if(le.bindFramebuffer(w.FRAMEBUFFER,L)&&F&&le.drawBuffers(y,L),le.viewport(v),le.scissor(S),le.setScissorTest(B),te){const xe=ye.get(y.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+U,xe.__webglTexture,O)}else if(me){const xe=ye.get(y.texture),be=U||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,xe.__webglTexture,O||0,be)}I=-1},this.readRenderTargetPixels=function(y,U,O,F,L,te,me){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){le.bindFramebuffer(w.FRAMEBUFFER,xe);try{const be=y.texture,De=be.format,Ue=be.type;if(!_e.textureFormatReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!_e.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-F&&O>=0&&O<=y.height-L&&w.readPixels(U,O,F,L,Fe.convert(De),Fe.convert(Ue),te)}finally{const be=A!==null?ye.get(A).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(y,U,O,F,L,te,me){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=ye.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&me!==void 0&&(xe=xe[me]),xe){const be=y.texture,De=be.format,Ue=be.type;if(!_e.textureFormatReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!_e.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=y.width-F&&O>=0&&O<=y.height-L){le.bindFramebuffer(w.FRAMEBUFFER,xe);const Le=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Le),w.bufferData(w.PIXEL_PACK_BUFFER,te.byteLength,w.STREAM_READ),w.readPixels(U,O,F,L,Fe.convert(De),Fe.convert(Ue),0);const Ke=A!==null?ye.get(A).__webglFramebuffer:null;le.bindFramebuffer(w.FRAMEBUFFER,Ke);const it=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await cd(w,it,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Le),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,te),w.deleteBuffer(Le),w.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(y,U=null,O=0){y.isTexture!==!0&&(la("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,y=arguments[1]);const F=Math.pow(2,-O),L=Math.floor(y.image.width*F),te=Math.floor(y.image.height*F),me=U!==null?U.x:0,xe=U!==null?U.y:0;T.setTexture2D(y,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,me,xe,L,te),le.unbindTexture()},this.copyTextureToTexture=function(y,U,O=null,F=null,L=0){y.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,y=arguments[1],U=arguments[2],L=arguments[3]||0,O=null);let te,me,xe,be,De,Ue;O!==null?(te=O.max.x-O.min.x,me=O.max.y-O.min.y,xe=O.min.x,be=O.min.y):(te=y.image.width,me=y.image.height,xe=0,be=0),F!==null?(De=F.x,Ue=F.y):(De=0,Ue=0);const Le=Fe.convert(U.format),Ke=Fe.convert(U.type);T.setTexture2D(U,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const it=w.getParameter(w.UNPACK_ROW_LENGTH),at=w.getParameter(w.UNPACK_IMAGE_HEIGHT),ht=w.getParameter(w.UNPACK_SKIP_PIXELS),tt=w.getParameter(w.UNPACK_SKIP_ROWS),we=w.getParameter(w.UNPACK_SKIP_IMAGES),Mt=y.isCompressedTexture?y.mipmaps[L]:y.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Mt.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Mt.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,xe),w.pixelStorei(w.UNPACK_SKIP_ROWS,be),y.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,L,De,Ue,te,me,Le,Ke,Mt.data):y.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,L,De,Ue,Mt.width,Mt.height,Le,Mt.data):w.texSubImage2D(w.TEXTURE_2D,L,De,Ue,te,me,Le,Ke,Mt),w.pixelStorei(w.UNPACK_ROW_LENGTH,it),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,at),w.pixelStorei(w.UNPACK_SKIP_PIXELS,ht),w.pixelStorei(w.UNPACK_SKIP_ROWS,tt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,we),L===0&&U.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),le.unbindTexture()},this.copyTextureToTexture3D=function(y,U,O=null,F=null,L=0){y.isTexture!==!0&&(la("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,F=arguments[1]||null,y=arguments[2],U=arguments[3],L=arguments[4]||0);let te,me,xe,be,De,Ue,Le,Ke,it;const at=y.isCompressedTexture?y.mipmaps[L]:y.image;O!==null?(te=O.max.x-O.min.x,me=O.max.y-O.min.y,xe=O.max.z-O.min.z,be=O.min.x,De=O.min.y,Ue=O.min.z):(te=at.width,me=at.height,xe=at.depth,be=0,De=0,Ue=0),F!==null?(Le=F.x,Ke=F.y,it=F.z):(Le=0,Ke=0,it=0);const ht=Fe.convert(U.format),tt=Fe.convert(U.type);let we;if(U.isData3DTexture)T.setTexture3D(U,0),we=w.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)T.setTexture2DArray(U,0),we=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,U.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,U.unpackAlignment);const Mt=w.getParameter(w.UNPACK_ROW_LENGTH),Ni=w.getParameter(w.UNPACK_IMAGE_HEIGHT),Ht=w.getParameter(w.UNPACK_SKIP_PIXELS),rr=w.getParameter(w.UNPACK_SKIP_ROWS),It=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,at.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,at.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,be),w.pixelStorei(w.UNPACK_SKIP_ROWS,De),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ue),y.isDataTexture||y.isData3DTexture?w.texSubImage3D(we,L,Le,Ke,it,te,me,xe,ht,tt,at.data):U.isCompressedArrayTexture?w.compressedTexSubImage3D(we,L,Le,Ke,it,te,me,xe,ht,at.data):w.texSubImage3D(we,L,Le,Ke,it,te,me,xe,ht,tt,at),w.pixelStorei(w.UNPACK_ROW_LENGTH,Mt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ni),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Ht),w.pixelStorei(w.UNPACK_SKIP_ROWS,rr),w.pixelStorei(w.UNPACK_SKIP_IMAGES,It),L===0&&U.generateMipmaps&&w.generateMipmap(we),le.unbindTexture()},this.initRenderTarget=function(y){ye.get(y).__webglFramebuffer===void 0&&T.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?T.setTextureCube(y,0):y.isData3DTexture?T.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?T.setTexture2DArray(y,0):T.setTexture2D(y,0),le.unbindTexture()},this.resetState=function(){N=0,R=0,A=null,le.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===yo?"display-p3":"srgb",t.unpackColorSpace=qe.workingColorSpace===ya?"display-p3":"srgb"}}class E_ extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ri,this.environmentIntensity=1,this.environmentRotation=new ri,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class hh extends Tt{constructor(e=null,t=1,i=1,n,a,s,o,l,c=Ct,h=Ct,d,u){super(null,s,o,l,c,h,n,a,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ta extends zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ke(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ga=new C,_a=new C,ql=new et,qr=new Sa,Wn=new Ma,ss=new C,Kl=new C;class io extends gt{constructor(e=new Ut,t=new Ta){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,a=t.count;n<a;n++)ga.fromBufferAttribute(t,n-1),_a.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=ga.distanceTo(_a);e.setAttribute("lineDistance",new _t(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,a=e.params.Line.threshold,s=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wn.copy(i.boundingSphere),Wn.applyMatrix4(n),Wn.radius+=a,e.ray.intersectsSphere(Wn)===!1)return;ql.copy(n).invert(),qr.copy(e.ray).applyMatrix4(ql);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){const u=Math.max(0,s.start),f=Math.min(h.count,s.start+s.count);for(let g=u,_=f-1;g<_;g+=c){const p=h.getX(g),m=h.getX(g+1),b=Xn(this,e,qr,l,p,m);b&&t.push(b)}if(this.isLineLoop){const g=h.getX(f-1),_=h.getX(u),p=Xn(this,e,qr,l,g,_);p&&t.push(p)}}else{const u=Math.max(0,s.start),f=Math.min(d.count,s.start+s.count);for(let g=u,_=f-1;g<_;g+=c){const p=Xn(this,e,qr,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Xn(this,e,qr,l,f-1,u);g&&t.push(g)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,t=Object.keys(e);if(t.length>0){const i=e[t[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let n=0,a=i.length;n<a;n++){const s=i[n].name||String(n);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=n}}}}}function Xn(r,e,t,i,n,a){const s=r.geometry.attributes.position;if(ga.fromBufferAttribute(s,n),_a.fromBufferAttribute(s,a),t.distanceSqToSegment(ga,_a,ss,Kl)>i)return;ss.applyMatrix4(r.matrixWorld);const o=e.ray.origin.distanceTo(ss);if(!(o<e.near||o>e.far))return{distance:o,point:Kl.clone().applyMatrix4(r.matrixWorld),index:n,face:null,faceIndex:null,barycoord:null,object:r}}const Zl=new C,Jl=new C;class uh extends io{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,a=t.count;n<a;n+=2)Zl.fromBufferAttribute(t,n),Jl.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Zl.distanceTo(Jl);e.setAttribute("lineDistance",new _t(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ni{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),a=0;t.push(0);for(let s=1;s<=e;s++)i=this.getPoint(s/e),a+=i.distanceTo(n),t.push(a),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const a=i.length;let s;t?s=t:s=e*i[a-1];let o=0,l=a-1,c;for(;o<=l;)if(n=Math.floor(o+(l-o)/2),c=i[n]-s,c<0)o=n+1;else if(c>0)l=n-1;else{l=n;break}if(n=l,i[n]===s)return n/(a-1);const h=i[n],d=i[n+1]-h,u=(s-h)/d;return(n+u)/(a-1)}getTangent(e,t){let i=e-1e-4,n=e+1e-4;i<0&&(i=0),n>1&&(n=1);const a=this.getPoint(i),s=this.getPoint(n),o=t||(a.isVector2?new ae:new C);return o.copy(s).sub(a).normalize(),o}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new C,n=[],a=[],s=[],o=new C,l=new et;for(let f=0;f<=e;f++){const g=f/e;n[f]=this.getTangentAt(g,new C)}a[0]=new C,s[0]=new C;let c=Number.MAX_VALUE;const h=Math.abs(n[0].x),d=Math.abs(n[0].y),u=Math.abs(n[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),a[0].crossVectors(n[0],o),s[0].crossVectors(n[0],a[0]);for(let f=1;f<=e;f++){if(a[f]=a[f-1].clone(),s[f]=s[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(mt(n[f-1].dot(n[f]),-1,1));a[f].applyMatrix4(l.makeRotationAxis(o,g))}s[f].crossVectors(n[f],a[f])}if(t===!0){let f=Math.acos(mt(a[0].dot(a[e]),-1,1));f/=e,n[0].dot(o.crossVectors(a[0],a[e]))>0&&(f=-f);for(let g=1;g<=e;g++)a[g].applyMatrix4(l.makeRotationAxis(n[g],f*g)),s[g].crossVectors(n[g],a[g])}return{tangents:n,normals:a,binormals:s}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class bo extends ni{constructor(e=0,t=0,i=1,n=1,a=0,s=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=a,this.aEndAngle=s,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ae){const i=t,n=Math.PI*2;let a=this.aEndAngle-this.aStartAngle;const s=Math.abs(a)<Number.EPSILON;for(;a<0;)a+=n;for(;a>n;)a-=n;a<Number.EPSILON&&(s?a=0:a=n),this.aClockwise===!0&&!s&&(a===n?a=-n:a=a-n);const o=this.aStartAngle+e*a;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class T_ extends bo{constructor(e,t,i,n,a,s){super(e,t,i,i,n,a,s),this.isArcCurve=!0,this.type="ArcCurve"}}function wo(){let r=0,e=0,t=0,i=0;function n(a,s,o,l){r=a,e=o,t=-3*a+3*s-2*o-l,i=2*a-2*s+o+l}return{initCatmullRom:function(a,s,o,l,c){n(s,o,c*(o-a),c*(l-s))},initNonuniformCatmullRom:function(a,s,o,l,c,h,d){let u=(s-a)/c-(o-a)/(c+h)+(o-s)/h,f=(o-s)/h-(l-s)/(h+d)+(l-o)/d;u*=h,f*=h,n(s,o,u,f)},calc:function(a){const s=a*a,o=s*a;return r+e*a+t*s+i*o}}}const jn=new C,os=new wo,ls=new wo,cs=new wo;class b_ extends ni{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new C){const i=t,n=this.points,a=n.length,s=(a-(this.closed?0:1))*e;let o=Math.floor(s),l=s-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/a)+1)*a:l===0&&o===a-1&&(o=a-2,l=1);let c,h;this.closed||o>0?c=n[(o-1)%a]:(jn.subVectors(n[0],n[1]).add(n[0]),c=jn);const d=n[o%a],u=n[(o+1)%a];if(this.closed||o+2<a?h=n[(o+2)%a]:(jn.subVectors(n[a-1],n[a-2]).add(n[a-1]),h=jn),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),os.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,p),ls.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,p),cs.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(os.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),ls.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),cs.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(os.calc(l),ls.calc(l),cs.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new C().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function $l(r,e,t,i,n){const a=(i-e)*.5,s=(n-t)*.5,o=r*r,l=r*o;return(2*t-2*i+a+s)*l+(-3*t+3*i-2*a-s)*o+a*r+t}function w_(r,e){const t=1-r;return t*t*e}function A_(r,e){return 2*(1-r)*r*e}function R_(r,e){return r*r*e}function rn(r,e,t,i){return w_(r,e)+A_(r,t)+R_(r,i)}function C_(r,e){const t=1-r;return t*t*t*e}function P_(r,e){const t=1-r;return 3*t*t*r*e}function L_(r,e){return 3*(1-r)*r*r*e}function U_(r,e){return r*r*r*e}function nn(r,e,t,i,n){return C_(r,e)+P_(r,t)+L_(r,i)+U_(r,n)}class dh extends ni{constructor(e=new ae,t=new ae,i=new ae,n=new ae){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ae){const i=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(nn(e,n.x,a.x,s.x,o.x),nn(e,n.y,a.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class I_ extends ni{constructor(e=new C,t=new C,i=new C,n=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new C){const i=t,n=this.v0,a=this.v1,s=this.v2,o=this.v3;return i.set(nn(e,n.x,a.x,s.x,o.x),nn(e,n.y,a.y,s.y,o.y),nn(e,n.z,a.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ph extends ni{constructor(e=new ae,t=new ae){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ae){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ae){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class D_ extends ni{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class fh extends ni{constructor(e=new ae,t=new ae,i=new ae){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ae){const i=t,n=this.v0,a=this.v1,s=this.v2;return i.set(rn(e,n.x,a.x,s.x),rn(e,n.y,a.y,s.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class N_ extends ni{constructor(e=new C,t=new C,i=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new C){const i=t,n=this.v0,a=this.v1,s=this.v2;return i.set(rn(e,n.x,a.x,s.x),rn(e,n.y,a.y,s.y),rn(e,n.z,a.z,s.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class mh extends ni{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ae){const i=t,n=this.points,a=(n.length-1)*e,s=Math.floor(a),o=a-s,l=n[s===0?s:s-1],c=n[s],h=n[s>n.length-2?n.length-1:s+1],d=n[s>n.length-3?n.length-1:s+2];return i.set($l(o,l.x,c.x,h.x,d.x),$l(o,l.y,c.y,h.y,d.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new ae().fromArray(n))}return this}}var ro=Object.freeze({__proto__:null,ArcCurve:T_,CatmullRomCurve3:b_,CubicBezierCurve:dh,CubicBezierCurve3:I_,EllipseCurve:bo,LineCurve:ph,LineCurve3:D_,QuadraticBezierCurve:fh,QuadraticBezierCurve3:N_,SplineCurve:mh});class O_ extends ni{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ro[i](t,e))}return this}getPoint(e,t){const i=e*this.getLength(),n=this.getCurveLengths();let a=0;for(;a<n.length;){if(n[a]>=i){const s=n[a]-i,o=this.curves[a],l=o.getLength(),c=l===0?0:1-s/l;return o.getPointAt(c,t)}a++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let i;for(let n=0,a=this.curves;n<a.length;n++){const s=a[n],o=s.isEllipseCurve?e*2:s.isLineCurve||s.isLineCurve3?1:s.isSplineCurve?e*s.points.length:e,l=s.getPoints(o);for(let c=0;c<l.length;c++){const h=l[c];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){const n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){const n=e.curves[t];this.curves.push(new ro[n.type]().fromJSON(n))}return this}}class Ql extends O_{constructor(e){super(),this.type="Path",this.currentPoint=new ae,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const i=new ph(this.currentPoint.clone(),new ae(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){const a=new fh(this.currentPoint.clone(),new ae(e,t),new ae(i,n));return this.curves.push(a),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,a,s){const o=new dh(this.currentPoint.clone(),new ae(e,t),new ae(i,n),new ae(a,s));return this.curves.push(o),this.currentPoint.set(a,s),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),i=new mh(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,a,s){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,i,n,a,s),this}absarc(e,t,i,n,a,s){return this.absellipse(e,t,i,i,n,a,s),this}ellipse(e,t,i,n,a,s,o,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,i,n,a,s,o,l),this}absellipse(e,t,i,n,a,s,o,l){const c=new bo(e,t,i,n,a,s,o,l);if(this.curves.length>0){const d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class gh extends Ql{constructor(e){super(e),this.uuid=tr(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){const n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){const n=e.holes[t];this.holes.push(new Ql().fromJSON(n))}return this}}const F_={triangulate:function(r,e,t=2){const i=e&&e.length,n=i?e[0]*t:r.length;let a=_h(r,0,n,t,!0);const s=[];if(!a||a.next===a.prev)return s;let o,l,c,h,d,u,f;if(i&&(a=H_(r,e,a,t)),r.length>80*t){o=c=r[0],l=h=r[1];for(let g=t;g<n;g+=t)d=r[g],u=r[g+1],d<o&&(o=d),u<l&&(l=u),d>c&&(c=d),u>h&&(h=u);f=Math.max(c-o,h-l),f=f!==0?32767/f:0}return un(a,s,t,o,l,f,0),s}};function _h(r,e,t,i,n){let a,s;if(n===Q_(r,e,t,i)>0)for(a=e;a<t;a+=i)s=ec(a,r[a],r[a+1],s);else for(a=t-i;a>=e;a-=i)s=ec(a,r[a],r[a+1],s);return s&&ba(s,s.next)&&(pn(s),s=s.next),s}function Qi(r,e){if(!r)return r;e||(e=r);let t=r,i;do if(i=!1,!t.steiner&&(ba(t,t.next)||rt(t.prev,t,t.next)===0)){if(pn(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function un(r,e,t,i,n,a,s){if(!r)return;!s&&a&&Y_(r,i,n,a);let o=r,l,c;for(;r.prev!==r.next;){if(l=r.prev,c=r.next,a?z_(r,i,n,a):B_(r)){e.push(l.i/t|0),e.push(r.i/t|0),e.push(c.i/t|0),pn(r),r=c.next,o=c.next;continue}if(r=c,r===o){s?s===1?(r=G_(Qi(r),e,t),un(r,e,t,i,n,a,2)):s===2&&k_(r,e,t,i,n,a):un(Qi(r),e,t,i,n,a,1);break}}}function B_(r){const e=r.prev,t=r,i=r.next;if(rt(e,t,i)>=0)return!1;const n=e.x,a=t.x,s=i.x,o=e.y,l=t.y,c=i.y,h=n<a?n<s?n:s:a<s?a:s,d=o<l?o<c?o:c:l<c?l:c,u=n>a?n>s?n:s:a>s?a:s,f=o>l?o>c?o:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&wr(n,o,a,l,s,c,g.x,g.y)&&rt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function z_(r,e,t,i){const n=r.prev,a=r,s=r.next;if(rt(n,a,s)>=0)return!1;const o=n.x,l=a.x,c=s.x,h=n.y,d=a.y,u=s.y,f=o<l?o<c?o:c:l<c?l:c,g=h<d?h<u?h:u:d<u?d:u,_=o>l?o>c?o:c:l>c?l:c,p=h>d?h>u?h:u:d>u?d:u,m=no(f,g,e,t,i),b=no(_,p,e,t,i);let M=r.prevZ,E=r.nextZ;for(;M&&M.z>=m&&E&&E.z<=b;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==n&&M!==s&&wr(o,h,l,d,c,u,M.x,M.y)&&rt(M.prev,M,M.next)>=0||(M=M.prevZ,E.x>=f&&E.x<=_&&E.y>=g&&E.y<=p&&E!==n&&E!==s&&wr(o,h,l,d,c,u,E.x,E.y)&&rt(E.prev,E,E.next)>=0))return!1;E=E.nextZ}for(;M&&M.z>=m;){if(M.x>=f&&M.x<=_&&M.y>=g&&M.y<=p&&M!==n&&M!==s&&wr(o,h,l,d,c,u,M.x,M.y)&&rt(M.prev,M,M.next)>=0)return!1;M=M.prevZ}for(;E&&E.z<=b;){if(E.x>=f&&E.x<=_&&E.y>=g&&E.y<=p&&E!==n&&E!==s&&wr(o,h,l,d,c,u,E.x,E.y)&&rt(E.prev,E,E.next)>=0)return!1;E=E.nextZ}return!0}function G_(r,e,t){let i=r;do{const n=i.prev,a=i.next.next;!ba(n,a)&&vh(n,i,i.next,a)&&dn(n,a)&&dn(a,n)&&(e.push(n.i/t|0),e.push(i.i/t|0),e.push(a.i/t|0),pn(i),pn(i.next),i=r=a),i=i.next}while(i!==r);return Qi(i)}function k_(r,e,t,i,n,a){let s=r;do{let o=s.next.next;for(;o!==s.prev;){if(s.i!==o.i&&Z_(s,o)){let l=xh(s,o);s=Qi(s,s.next),l=Qi(l,l.next),un(s,e,t,i,n,a,0),un(l,e,t,i,n,a,0);return}o=o.next}s=s.next}while(s!==r)}function H_(r,e,t,i){const n=[];let a,s,o,l,c;for(a=0,s=e.length;a<s;a++)o=e[a]*i,l=a<s-1?e[a+1]*i:r.length,c=_h(r,o,l,i,!1),c===c.next&&(c.steiner=!0),n.push(K_(c));for(n.sort(V_),a=0;a<n.length;a++)t=W_(n[a],t);return t}function V_(r,e){return r.x-e.x}function W_(r,e){const t=X_(r,e);if(!t)return e;const i=xh(t,r);return Qi(i,i.next),Qi(t,t.next)}function X_(r,e){let t=e,i=-1/0,n;const a=r.x,s=r.y;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){const u=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=a&&u>i&&(i=u,n=t.x<t.next.x?t:t.next,u===a))return n}t=t.next}while(t!==e);if(!n)return null;const o=n,l=n.x,c=n.y;let h=1/0,d;t=n;do a>=t.x&&t.x>=l&&a!==t.x&&wr(s<c?a:i,s,l,c,s<c?i:a,s,t.x,t.y)&&(d=Math.abs(s-t.y)/(a-t.x),dn(t,r)&&(d<h||d===h&&(t.x>n.x||t.x===n.x&&j_(n,t)))&&(n=t,h=d)),t=t.next;while(t!==o);return n}function j_(r,e){return rt(r.prev,r,e.prev)<0&&rt(e.next,r,r.next)<0}function Y_(r,e,t,i){let n=r;do n.z===0&&(n.z=no(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==r);n.prevZ.nextZ=null,n.prevZ=null,q_(n)}function q_(r){let e,t,i,n,a,s,o,l,c=1;do{for(t=r,r=null,a=null,s=0;t;){for(s++,i=t,o=0,e=0;e<c&&(o++,i=i.nextZ,!!i);e++);for(l=c;o>0||l>0&&i;)o!==0&&(l===0||!i||t.z<=i.z)?(n=t,t=t.nextZ,o--):(n=i,i=i.nextZ,l--),a?a.nextZ=n:r=n,n.prevZ=a,a=n;t=i}a.nextZ=null,c*=2}while(s>1);return r}function no(r,e,t,i,n){return r=(r-t)*n|0,e=(e-i)*n|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function K_(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function wr(r,e,t,i,n,a,s,o){return(n-s)*(e-o)>=(r-s)*(a-o)&&(r-s)*(i-o)>=(t-s)*(e-o)&&(t-s)*(a-o)>=(n-s)*(i-o)}function Z_(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!J_(r,e)&&(dn(r,e)&&dn(e,r)&&$_(r,e)&&(rt(r.prev,r,e.prev)||rt(r,e.prev,e))||ba(r,e)&&rt(r.prev,r,r.next)>0&&rt(e.prev,e,e.next)>0)}function rt(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function ba(r,e){return r.x===e.x&&r.y===e.y}function vh(r,e,t,i){const n=qn(rt(r,e,t)),a=qn(rt(r,e,i)),s=qn(rt(t,i,r)),o=qn(rt(t,i,e));return!!(n!==a&&s!==o||n===0&&Yn(r,t,e)||a===0&&Yn(r,i,e)||s===0&&Yn(t,r,i)||o===0&&Yn(t,e,i))}function Yn(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function qn(r){return r>0?1:r<0?-1:0}function J_(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&vh(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function dn(r,e){return rt(r.prev,r,r.next)<0?rt(r,e,r.next)>=0&&rt(r,r.prev,e)>=0:rt(r,e,r.prev)<0||rt(r,r.next,e)<0}function $_(r,e){let t=r,i=!1;const n=(r.x+e.x)/2,a=(r.y+e.y)/2;do t.y>a!=t.next.y>a&&t.next.y!==t.y&&n<(t.next.x-t.x)*(a-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==r);return i}function xh(r,e){const t=new ao(r.i,r.x,r.y),i=new ao(e.i,e.x,e.y),n=r.next,a=e.prev;return r.next=e,e.prev=r,t.next=n,n.prev=t,i.next=t,t.prev=i,a.next=i,i.prev=a,i}function ec(r,e,t,i){const n=new ao(r,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function pn(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function ao(r,e,t){this.i=r,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Q_(r,e,t,i){let n=0;for(let a=e,s=t-i;a<t;a+=i)n+=(r[s]-r[a])*(r[a+1]+r[s+1]),s=a;return n}class an{static area(e){const t=e.length;let i=0;for(let n=t-1,a=0;a<t;n=a++)i+=e[n].x*e[a].y-e[a].x*e[n].y;return i*.5}static isClockWise(e){return an.area(e)<0}static triangulateShape(e,t){const i=[],n=[],a=[];tc(e),ic(i,e);let s=e.length;t.forEach(tc);for(let l=0;l<t.length;l++)n.push(s),s+=t[l].length,ic(i,t[l]);const o=F_.triangulate(i,n);for(let l=0;l<o.length;l+=3)a.push(o.slice(l,l+3));return a}}function tc(r){const e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function ic(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}class Ao extends Ut{constructor(e=new gh([new ae(.5,.5),new ae(-.5,.5),new ae(-.5,-.5),new ae(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const i=this,n=[],a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];s(c)}this.setAttribute("position",new _t(n,3)),this.setAttribute("uv",new _t(a,2)),this.computeVertexNormals();function s(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1;let u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:e0;let M,E=!1,N,R,A,I;m&&(M=m.getSpacedPoints(h),E=!0,u=!1,N=m.computeFrenetFrames(h,!1),R=new C,A=new C,I=new C),u||(p=0,f=0,g=0,_=0);const ie=o.extractPoints(c);let v=ie.shape;const S=ie.holes;if(!an.isClockWise(v)){v=v.reverse();for(let K=0,Z=S.length;K<Z;K++){const w=S[K];an.isClockWise(w)&&(S[K]=w.reverse())}}const B=an.triangulateShape(v,S),z=v;for(let K=0,Z=S.length;K<Z;K++){const w=S[K];v=v.concat(w)}function V(K,Z,w){return Z||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(Z,w)}const Y=v.length,G=B.length;function $(K,Z,w){let Te,ee,_e;const le=K.x-Z.x,Pe=K.y-Z.y,ye=w.x-K.x,T=w.y-K.y,x=le*le+Pe*Pe,D=le*T-Pe*ye;if(Math.abs(D)>Number.EPSILON){const W=Math.sqrt(x),J=Math.sqrt(ye*ye+T*T),j=Z.x-Pe/W,Ee=Z.y+le/W,he=w.x-T/J,ge=w.y+ye/J,He=((he-j)*T-(ge-Ee)*ye)/(le*T-Pe*ye);Te=j+le*He-K.x,ee=Ee+Pe*He-K.y;const re=Te*Te+ee*ee;if(re<=2)return new ae(Te,ee);_e=Math.sqrt(re/2)}else{let W=!1;le>Number.EPSILON?ye>Number.EPSILON&&(W=!0):le<-Number.EPSILON?ye<-Number.EPSILON&&(W=!0):Math.sign(Pe)===Math.sign(T)&&(W=!0),W?(Te=-Pe,ee=le,_e=Math.sqrt(x)):(Te=le,ee=Pe,_e=Math.sqrt(x/2))}return new ae(Te/_e,ee/_e)}const k=[];for(let K=0,Z=z.length,w=Z-1,Te=K+1;K<Z;K++,w++,Te++)w===Z&&(w=0),Te===Z&&(Te=0),k[K]=$(z[K],z[w],z[Te]);const ne=[];let ue,Re=k.concat();for(let K=0,Z=S.length;K<Z;K++){const w=S[K];ue=[];for(let Te=0,ee=w.length,_e=ee-1,le=Te+1;Te<ee;Te++,_e++,le++)_e===ee&&(_e=0),le===ee&&(le=0),ue[Te]=$(w[Te],w[_e],w[le]);ne.push(ue),Re=Re.concat(ue)}for(let K=0;K<p;K++){const Z=K/p,w=f*Math.cos(Z*Math.PI/2),Te=g*Math.sin(Z*Math.PI/2)+_;for(let ee=0,_e=z.length;ee<_e;ee++){const le=V(z[ee],k[ee],Te);se(le.x,le.y,-w)}for(let ee=0,_e=S.length;ee<_e;ee++){const le=S[ee];ue=ne[ee];for(let Pe=0,ye=le.length;Pe<ye;Pe++){const T=V(le[Pe],ue[Pe],Te);se(T.x,T.y,-w)}}}const Ve=g+_;for(let K=0;K<Y;K++){const Z=u?V(v[K],Re[K],Ve):v[K];E?(A.copy(N.normals[0]).multiplyScalar(Z.x),R.copy(N.binormals[0]).multiplyScalar(Z.y),I.copy(M[0]).add(A).add(R),se(I.x,I.y,I.z)):se(Z.x,Z.y,0)}for(let K=1;K<=h;K++)for(let Z=0;Z<Y;Z++){const w=u?V(v[Z],Re[Z],Ve):v[Z];E?(A.copy(N.normals[K]).multiplyScalar(w.x),R.copy(N.binormals[K]).multiplyScalar(w.y),I.copy(M[K]).add(A).add(R),se(I.x,I.y,I.z)):se(w.x,w.y,d/h*K)}for(let K=p-1;K>=0;K--){const Z=K/p,w=f*Math.cos(Z*Math.PI/2),Te=g*Math.sin(Z*Math.PI/2)+_;for(let ee=0,_e=z.length;ee<_e;ee++){const le=V(z[ee],k[ee],Te);se(le.x,le.y,d+w)}for(let ee=0,_e=S.length;ee<_e;ee++){const le=S[ee];ue=ne[ee];for(let Pe=0,ye=le.length;Pe<ye;Pe++){const T=V(le[Pe],ue[Pe],Te);E?se(T.x,T.y+M[h-1].y,M[h-1].x+w):se(T.x,T.y,d+w)}}}Xe(),X();function Xe(){const K=n.length/3;if(u){let Z=0,w=Y*Z;for(let Te=0;Te<G;Te++){const ee=B[Te];oe(ee[2]+w,ee[1]+w,ee[0]+w)}Z=h+p*2,w=Y*Z;for(let Te=0;Te<G;Te++){const ee=B[Te];oe(ee[0]+w,ee[1]+w,ee[2]+w)}}else{for(let Z=0;Z<G;Z++){const w=B[Z];oe(w[2],w[1],w[0])}for(let Z=0;Z<G;Z++){const w=B[Z];oe(w[0]+Y*h,w[1]+Y*h,w[2]+Y*h)}}i.addGroup(K,n.length/3-K,0)}function X(){const K=n.length/3;let Z=0;Q(z,Z),Z+=z.length;for(let w=0,Te=S.length;w<Te;w++){const ee=S[w];Q(ee,Z),Z+=ee.length}i.addGroup(K,n.length/3-K,1)}function Q(K,Z){let w=K.length;for(;--w>=0;){const Te=w;let ee=w-1;ee<0&&(ee=K.length-1);for(let _e=0,le=h+p*2;_e<le;_e++){const Pe=Y*_e,ye=Y*(_e+1),T=Z+Te+Pe,x=Z+ee+Pe,D=Z+ee+ye,W=Z+Te+ye;Ie(T,x,D,W)}}}function se(K,Z,w){l.push(K),l.push(Z),l.push(w)}function oe(K,Z,w){Se(K),Se(Z),Se(w);const Te=n.length/3,ee=b.generateTopUV(i,n,Te-3,Te-2,Te-1);Ce(ee[0]),Ce(ee[1]),Ce(ee[2])}function Ie(K,Z,w,Te){Se(K),Se(Z),Se(Te),Se(Z),Se(w),Se(Te);const ee=n.length/3,_e=b.generateSideWallUV(i,n,ee-6,ee-3,ee-2,ee-1);Ce(_e[0]),Ce(_e[1]),Ce(_e[3]),Ce(_e[1]),Ce(_e[2]),Ce(_e[3])}function Se(K){n.push(l[K*3+0]),n.push(l[K*3+1]),n.push(l[K*3+2])}function Ce(K){a.push(K.x),a.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return t0(t,i,e)}static fromJSON(e,t){const i=[];for(let a=0,s=e.shapes.length;a<s;a++){const o=t[e.shapes[a]];i.push(o)}const n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new ro[n.type]().fromJSON(n)),new Ao(i,e.options)}}const e0={generateTopUV:function(r,e,t,i,n){const a=e[t*3],s=e[t*3+1],o=e[i*3],l=e[i*3+1],c=e[n*3],h=e[n*3+1];return[new ae(a,s),new ae(o,l),new ae(c,h)]},generateSideWallUV:function(r,e,t,i,n,a){const s=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[i*3],h=e[i*3+1],d=e[i*3+2],u=e[n*3],f=e[n*3+1],g=e[n*3+2],_=e[a*3],p=e[a*3+1],m=e[a*3+2];return Math.abs(o-h)<Math.abs(s-c)?[new ae(s,1-l),new ae(c,1-d),new ae(u,1-g),new ae(_,1-m)]:[new ae(o,1-l),new ae(h,1-d),new ae(f,1-g),new ae(p,1-m)]}};function t0(r,e,t){if(t.shapes=[],Array.isArray(r))for(let i=0,n=r.length;i<n;i++){const a=r[i];t.shapes.push(a.uuid)}else t.shapes.push(r.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class fn extends zr{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ke(16777215),this.specular=new ke(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ke(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Xc,this.normalScale=new ae(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ri,this.combine=po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class yh extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ke(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const hs=new et,rc=new C,nc=new C;class i0{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ae(512,512),this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Eo,this._frameExtents=new ae(1,1),this._viewportCount=1,this._viewports=[new nt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;rc.setFromMatrixPosition(e.matrixWorld),t.position.copy(rc),nc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(nc),t.updateMatrixWorld(),hs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hs),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class r0 extends i0{constructor(){super(new nh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class n0 extends yh{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new r0}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class a0 extends yh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ac=new et;class s0{constructor(e,t,i=0,n=1/0){this.ray=new Sa(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ac.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ac),this}intersectObject(e,t=!0,i=[]){return so(e,this,i,t),i.sort(sc),i}intersectObjects(e,t=!0,i=[]){for(let n=0,a=e.length;n<a;n++)so(e[n],this,i,t);return i.sort(sc),i}}function sc(r,e){return r.distance-e.distance}function so(r,e,t,i){let n=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){const a=r.children;for(let s=0,o=a.length;s<o;s++)so(a[s],e,t,!0)}}class oc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(mt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class o0 extends uh{constructor(e=10,t=10,i=4473924,n=8947848){i=new ke(i),n=new ke(n);const a=t/2,s=e/t,o=e/2,l=[],c=[];for(let u=0,f=0,g=-o;u<=t;u++,g+=s){l.push(-o,0,g,o,0,g),l.push(g,0,-o,g,0,o);const _=u===a?i:n;_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3,_.toArray(c,f),f+=3}const h=new Ut;h.setAttribute("position",new _t(l,3)),h.setAttribute("color",new _t(c,3));const d=new Ta({vertexColors:!0,toneMapped:!1});super(h,d),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const lc=new C,Kn=new C,cc=new C;class l0 extends gt{constructor(e,t,i){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=i,this.type="DirectionalLightHelper",t===void 0&&(t=1);let n=new Ut;n.setAttribute("position",new _t([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const a=new Ta({fog:!1,toneMapped:!1});this.lightPlane=new io(n,a),this.add(this.lightPlane),n=new Ut,n.setAttribute("position",new _t([0,0,0,0,0,1],3)),this.targetLine=new io(n,a),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),lc.setFromMatrixPosition(this.light.matrixWorld),Kn.setFromMatrixPosition(this.light.target.matrixWorld),cc.subVectors(Kn,lc),this.lightPlane.lookAt(Kn),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Kn),this.targetLine.scale.z=cc.length()}}class c0 extends uh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Ut;n.setAttribute("position",new _t(t,3)),n.setAttribute("color",new _t(i,3));const a=new Ta({vertexColors:!0,toneMapped:!1});super(n,a),this.type="AxesHelper"}setColors(e,t,i){const n=new ke,a=this.geometry.attributes.color.array;return n.set(e),n.toArray(a,0),n.toArray(a,3),n.set(t),n.toArray(a,6),n.toArray(a,9),n.set(i),n.toArray(a,12),n.toArray(a,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class h0 extends Ui{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:uo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=uo);var Ot=63710088e-1,u0={centimeters:Ot*100,centimetres:Ot*100,degrees:360/(2*Math.PI),feet:Ot*3.28084,inches:Ot*39.37,kilometers:Ot/1e3,kilometres:Ot/1e3,meters:Ot,metres:Ot,miles:Ot/1609.344,millimeters:Ot*1e3,millimetres:Ot*1e3,nauticalmiles:Ot/1852,radians:1,yards:Ot*1.0936};function d0(r,e,t={}){const i={type:"Feature"};return(t.id===0||t.id)&&(i.id=t.id),t.bbox&&(i.bbox=t.bbox),i.properties=e||{},i.geometry=r,i}function Mh(r,e,t={}){if(!r)throw new Error("coordinates is required");if(!Array.isArray(r))throw new Error("coordinates must be an Array");if(r.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!uc(r[0])||!uc(r[1]))throw new Error("coordinates must contain numbers");return d0({type:"Point",coordinates:r},e,t)}function p0(r,e="kilometers"){const t=u0[e];if(!t)throw new Error(e+" units is invalid");return r/t}function hc(r){return r%(2*Math.PI)*180/Math.PI}function us(r){return r%360*Math.PI/180}function uc(r){return!isNaN(r)&&r!==null&&!Array.isArray(r)}function f0(r){if(!r)throw new Error("coord is required");if(!Array.isArray(r)){if(r.type==="Feature"&&r.geometry!==null&&r.geometry.type==="Point")return[...r.geometry.coordinates];if(r.type==="Point")return[...r.coordinates]}if(Array.isArray(r)&&r.length>=2&&!Array.isArray(r[0])&&!Array.isArray(r[1]))return[...r];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function m0(r,e,t,i={}){const n=f0(r),a=us(n[0]),s=us(n[1]),o=us(t),l=p0(e,i.units),c=Math.asin(Math.sin(s)*Math.cos(l)+Math.cos(s)*Math.sin(l)*Math.cos(o)),h=a+Math.atan2(Math.sin(o)*Math.sin(l)*Math.cos(s),Math.cos(l)-Math.sin(s)*Math.sin(c)),d=hc(h),u=hc(c);return Mh([d,u],i.properties)}var dc=m0;class g0{static createTurfPoint(e){return Mh([e[1],e[0]])}static originRadiusToBbox(e,t){const[i,n]=dc(this.createTurfPoint(e),t,-45,"kilometers").geometry.coordinates,[a,s]=dc(this.createTurfPoint(e),t,135,"kilometers").geometry.coordinates;return[i,s,a,n]}}function Ro(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var mn={},_0=Math.PI/180,v0=180/Math.PI;function Sh(r){var e=pc(r[0]+1,r[2]),t=pc(r[0],r[2]),i=fc(r[1]+1,r[2]),n=fc(r[1],r[2]);return[t,i,e,n]}function x0(r){var e=Sh(r),t={type:"Polygon",coordinates:[[[e[0],e[3]],[e[0],e[1]],[e[2],e[1]],[e[2],e[3]],[e[0],e[3]]]]};return t}function pc(r,e){return r/Math.pow(2,e)*360-180}function fc(r,e){var t=Math.PI-2*Math.PI*r/Math.pow(2,e);return v0*Math.atan(.5*(Math.exp(t)-Math.exp(-t)))}function oo(r,e,t){var i=Rh(r,e,t);return i[0]=Math.floor(i[0]),i[1]=Math.floor(i[1]),i}function Eh(r){return[[r[0]*2,r[1]*2,r[2]+1],[r[0]*2+1,r[1]*2,r[2]+1],[r[0]*2+1,r[1]*2+1,r[2]+1],[r[0]*2,r[1]*2+1,r[2]+1]]}function Th(r){return[r[0]>>1,r[1]>>1,r[2]-1]}function bh(r){return Eh(Th(r))}function y0(r,e){for(var t=bh(r),i=0;i<t.length;i++)if(!wh(e,t[i]))return!1;return!0}function wh(r,e){for(var t=0;t<r.length;t++)if(Ah(r[t],e))return!0;return!1}function Ah(r,e){return r[0]===e[0]&&r[1]===e[1]&&r[2]===e[2]}function M0(r){for(var e="",t=r[2];t>0;t--){var i=0,n=1<<t-1;r[0]&n&&i++,r[1]&n&&(i+=2),e+=i.toString()}return e}function S0(r){for(var e=0,t=0,i=r.length,n=i;n>0;n--){var a=1<<n-1,s=+r[i-n];s===1&&(e|=a),s===2&&(t|=a),s===3&&(e|=a,t|=a)}return[e,t,i]}function E0(r){var e=oo(r[0],r[1],32),t=oo(r[2],r[3],32),i=[e[0],e[1],t[0],t[1]],n=T0(i);if(n===0)return[0,0,0];var a=i[0]>>>32-n,s=i[1]>>>32-n;return[a,s,n]}function T0(r){for(var e=28,t=0;t<e;t++){var i=1<<32-(t+1);if((r[0]&i)!==(r[2]&i)||(r[1]&i)!==(r[3]&i))return t}return e}function Rh(r,e,t){var i=Math.sin(e*_0),n=Math.pow(2,t),a=n*(r/360+.5),s=n*(.5-.25*Math.log((1+i)/(1-i))/Math.PI);return a=a%n,a<0&&(a=a+n),[a,s,t]}var b0={tileToGeoJSON:x0,tileToBBOX:Sh,getChildren:Eh,getParent:Th,getSiblings:bh,hasTile:wh,hasSiblings:y0,tilesEqual:Ah,tileToQuadkey:M0,quadkeyToTile:S0,pointToTile:oo,bboxToTile:E0,pointToTileFraction:Rh},Br=b0;mn.geojson=function(r,e){return{type:"FeatureCollection",features:Co(r,e).map(w0)}};function w0(r){return{type:"Feature",geometry:Br.tileToGeoJSON(r),properties:{}}}mn.tiles=Co;mn.indexes=function(r,e){return Co(r,e).map(Br.tileToQuadkey)};function Co(r,e){var t,i,n=r.coordinates,a=e.max_zoom,s={},o=[];if(r.type==="Point")return[Br.pointToTile(n[0],n[1],a)];if(r.type==="MultiPoint")for(t=0;t<n.length;t++)i=Br.pointToTile(n[t][0],n[t][1],a),s[jt(i[0],i[1],i[2])]=!0;else if(r.type==="LineString")lo(s,n,a);else if(r.type==="MultiLineString")for(t=0;t<n.length;t++)lo(s,n[t],a);else if(r.type==="Polygon")mc(s,o,n,a);else if(r.type==="MultiPolygon")for(t=0;t<n.length;t++)mc(s,o,n[t],a);else throw new Error("Geometry type not implemented");if(e.min_zoom!==a){var l=o.length;for(gc(s,o),t=0;t<l;t++){var c=o[t];s[jt(c[0],c[1],c[2])]=!0}return A0(s,o,e)}return gc(s,o),o}function A0(r,e,t){for(var i=[],n=t.max_zoom;n>t.min_zoom;n--){for(var a={},s=[],o=0;o<e.length;o++){var l=e[o];if(l[0]%2===0&&l[1]%2===0){var c=jt(l[0]+1,l[1],n),h=jt(l[0],l[1]+1,n),d=jt(l[0]+1,l[1]+1,n);if(r[c]&&r[h]&&r[d]){r[jt(l[0],l[1],l[2])]=!1,r[c]=!1,r[h]=!1,r[d]=!1;var u=[l[0]/2,l[1]/2,n-1];n-1===t.min_zoom?i.push(u):(a[jt(l[0]/2,l[1]/2,n-1)]=!0,s.push(u))}}}for(o=0;o<e.length;o++)l=e[o],r[jt(l[0],l[1],l[2])]&&i.push(l);r=a,e=s}return i}function mc(r,e,t,i){for(var n=[],a=0;a<t.length;a++){var s=[];lo(r,t[a],i,s);for(var o=0,l=s.length,c=l-1;o<l;c=o++){var h=(o+1)%l,d=s[o][1];(d>s[c][1]||d>s[h][1])&&(d<s[c][1]||d<s[h][1])&&d!==s[h][1]&&n.push(s[o])}}for(n.sort(R0),a=0;a<n.length;a+=2){d=n[a][1];for(var u=n[a][0]+1;u<n[a+1][0];u++){var f=jt(u,d,i);r[f]||e.push([u,d,i])}}}function R0(r,e){return r[1]-e[1]||r[0]-e[0]}function lo(r,e,t,i){for(var n,a,s=0;s<e.length-1;s++){var o=Br.pointToTileFraction(e[s][0],e[s][1],t),l=Br.pointToTileFraction(e[s+1][0],e[s+1][1],t),c=o[0],h=o[1],d=l[0],u=l[1],f=d-c,g=u-h;if(!(g===0&&f===0)){var _=f>0?1:-1,p=g>0?1:-1,m=Math.floor(c),b=Math.floor(h),M=f===0?1/0:Math.abs(((f>0?1:0)+m-c)/f),E=g===0?1/0:Math.abs(((g>0?1:0)+b-h)/g),N=Math.abs(_/f),R=Math.abs(p/g);for((m!==n||b!==a)&&(r[jt(m,b,t)]=!0,i&&b!==a&&i.push([m,b]),n=m,a=b);M<1||E<1;)M<E?(M+=N,m+=_):(E+=R,b+=p),r[jt(m,b,t)]=!0,i&&b!==a&&i.push([m,b]),n=m,a=b}}i&&b===i[0][1]&&i.pop()}function gc(r,e){for(var t=Object.keys(r),i=0;i<t.length;i++)e.push(C0(+t[i]))}function jt(r,e,t){var i=2*(1<<t);return(i*e+r)*32+t}function C0(r){var e=r%32,t=2*(1<<e),i=(r-e)/32,n=i%t,a=(i-n)/t%t;return[n,a,e]}function P0(r){for(var e=new Array(r),t=0;t<r;++t)e[t]=t;return e}var L0=P0;/*!
* Determine if an object is a Buffer
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/var U0=function(r){return r!=null&&(Ch(r)||I0(r)||!!r._isBuffer)};function Ch(r){return!!r.constructor&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}function I0(r){return typeof r.readFloatLE=="function"&&typeof r.slice=="function"&&Ch(r.slice(0,0))}var D0=L0,N0=U0,O0=typeof Float64Array<"u";function F0(r,e){return r[0]-e[0]}function B0(){var r=this.stride,e=new Array(r.length),t;for(t=0;t<e.length;++t)e[t]=[Math.abs(r[t]),t];e.sort(F0);var i=new Array(e.length);for(t=0;t<i.length;++t)i[t]=e[t][1];return i}function z0(r,e){var t=["View",e,"d",r].join("");e<0&&(t="View_Nil"+r);var i=r==="generic";if(e===-1){var n="function "+t+"(a){this.data=a;};var proto="+t+".prototype;proto.dtype='"+r+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+t+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+t+"(a){return new "+t+"(a);}",_=new Function(n);return _()}else if(e===0){var n="function "+t+"(a,d) {this.data = a;this.offset = d};var proto="+t+".prototype;proto.dtype='"+r+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+t+"_copy() {return new "+t+"(this.data,this.offset)};proto.pick=function "+t+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+t+"_get(){return "+(i?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+t+"_set(v){return "+(i?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+t+"(a,b,c,d){return new "+t+"(a,d)}",_=new Function("TrivialArray",n);return _(va[r][0])}var n=["'use strict'"],a=D0(e),s=a.map(function(p){return"i"+p}),o="this.offset+"+a.map(function(p){return"this.stride["+p+"]*i"+p}).join("+"),l=a.map(function(p){return"b"+p}).join(","),c=a.map(function(p){return"c"+p}).join(",");n.push("function "+t+"(a,"+l+","+c+",d){this.data=a","this.shape=["+l+"]","this.stride=["+c+"]","this.offset=d|0}","var proto="+t+".prototype","proto.dtype='"+r+"'","proto.dimension="+e),n.push("Object.defineProperty(proto,'size',{get:function "+t+"_size(){return "+a.map(function(p){return"this.shape["+p+"]"}).join("*"),"}})"),e===1?n.push("proto.order=[0]"):(n.push("Object.defineProperty(proto,'order',{get:"),e<4?(n.push("function "+t+"_order(){"),e===2?n.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):e===3&&n.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):n.push("ORDER})")),n.push("proto.set=function "+t+"_set("+s.join(",")+",v){"),i?n.push("return this.data.set("+o+",v)}"):n.push("return this.data["+o+"]=v}"),n.push("proto.get=function "+t+"_get("+s.join(",")+"){"),i?n.push("return this.data.get("+o+")}"):n.push("return this.data["+o+"]}"),n.push("proto.index=function "+t+"_index(",s.join(),"){return "+o+"}"),n.push("proto.hi=function "+t+"_hi("+s.join(",")+"){return new "+t+"(this.data,"+a.map(function(p){return["(typeof i",p,"!=='number'||i",p,"<0)?this.shape[",p,"]:i",p,"|0"].join("")}).join(",")+","+a.map(function(p){return"this.stride["+p+"]"}).join(",")+",this.offset)}");var h=a.map(function(p){return"a"+p+"=this.shape["+p+"]"}),d=a.map(function(p){return"c"+p+"=this.stride["+p+"]"});n.push("proto.lo=function "+t+"_lo("+s.join(",")+"){var b=this.offset,d=0,"+h.join(",")+","+d.join(","));for(var u=0;u<e;++u)n.push("if(typeof i"+u+"==='number'&&i"+u+">=0){d=i"+u+"|0;b+=c"+u+"*d;a"+u+"-=d}");n.push("return new "+t+"(this.data,"+a.map(function(p){return"a"+p}).join(",")+","+a.map(function(p){return"c"+p}).join(",")+",b)}"),n.push("proto.step=function "+t+"_step("+s.join(",")+"){var "+a.map(function(p){return"a"+p+"=this.shape["+p+"]"}).join(",")+","+a.map(function(p){return"b"+p+"=this.stride["+p+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var u=0;u<e;++u)n.push("if(typeof i"+u+"==='number'){d=i"+u+"|0;if(d<0){c+=b"+u+"*(a"+u+"-1);a"+u+"=ceil(-a"+u+"/d)}else{a"+u+"=ceil(a"+u+"/d)}b"+u+"*=d}");n.push("return new "+t+"(this.data,"+a.map(function(p){return"a"+p}).join(",")+","+a.map(function(p){return"b"+p}).join(",")+",c)}");for(var f=new Array(e),g=new Array(e),u=0;u<e;++u)f[u]="a[i"+u+"]",g[u]="b[i"+u+"]";n.push("proto.transpose=function "+t+"_transpose("+s+"){"+s.map(function(p,m){return p+"=("+p+"===undefined?"+m+":"+p+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+t+"(this.data,"+f.join(",")+","+g.join(",")+",this.offset)}"),n.push("proto.pick=function "+t+"_pick("+s+"){var a=[],b=[],c=this.offset");for(var u=0;u<e;++u)n.push("if(typeof i"+u+"==='number'&&i"+u+">=0){c=(c+this.stride["+u+"]*i"+u+")|0}else{a.push(this.shape["+u+"]);b.push(this.stride["+u+"])}");n.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),n.push("return function construct_"+t+"(data,shape,stride,offset){return new "+t+"(data,"+a.map(function(p){return"shape["+p+"]"}).join(",")+","+a.map(function(p){return"stride["+p+"]"}).join(",")+",offset)}");var _=new Function("CTOR_LIST","ORDER",n.join(`
`));return _(va[r],B0)}function G0(r){if(N0(r))return"buffer";if(O0)switch(Object.prototype.toString.call(r)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(r)?"array":"generic"}var va={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function k0(r,e,t,i){if(r===void 0){var c=va.array[0];return c([])}else typeof r=="number"&&(r=[r]);e===void 0&&(e=[r.length]);var n=e.length;if(t===void 0){t=new Array(n);for(var a=n-1,s=1;a>=0;--a)t[a]=s,s*=e[a]}if(i===void 0){i=0;for(var a=0;a<n;++a)t[a]<0&&(i-=(e[a]-1)*t[a])}for(var o=G0(r),l=va[o];l.length<=n+1;)l.push(z0(o,l.length-1));var c=l[n+1];return c(r,e,t,i)}var H0=k0;const V0=Ro(H0);function _c(r,e,t){const i=new Image;i.crossOrigin="Anonymous",i.onload=()=>{const n=document.createElement("canvas");n.width=i.width,n.height=i.height;const a=n.getContext("2d");a==null||a.drawImage(i,0,0);const s=a==null?void 0:a.getImageData(0,0,i.width,i.height);if(s===void 0)throw new Error("pixels undefined");const o=new Uint8Array(s.data),l=V0(o,[i.width,i.height,4],[4,4*i.width,1],0);e(null,l)},i.onerror=n=>{e(n,null)},i.src=r}class sn{static getZoomPositionElevation(e){const t={};return e.forEach(i=>{const n=[i[0]-2,Math.floor(i[1]/4),Math.floor(i[2]/4)].join(",");t[n]?t[n].push(i):t[n]=[i]}),Object.keys(t).map(i=>i.split(",").map(n=>parseFloat(n)))}static urlBuilder(e){return`https://data.geopf.fr/wfs/ows?SERVICE=WFS&REQUEST=GetFeature&typeName=BDTOPO_V3:batiment&VERSION=2.0.0&SRSNAME=EPSG:4326&outputFormat=application/json&BBOX=${e.northWest[0]},${e.southEast[1]},${e.southEast[0]},${e.northWest[1]},EPSG:4326`}static getUri(e,t,i){let n="",a="";switch(i){case"mapbox-terrain-rgb":n="https://api.mapbox.com/v4/mapbox.terrain-rgb",a="@2x.pngraw";break;case"mapbox-satellite":n="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles",a="@2x";break;default:return console.log("No Uri generated"),""}return`${n}/${e.join("/")}${a}?access_token=${t}`}static async getRgbTile({uri:e}){return new Promise((t,i)=>{_c(e,(n,a)=>{n?i(n):t(a)})})}static async getPngMap(e){return new Promise((t,i)=>{_c(e,(n,a)=>{n?i(n):t(a)})})}static async fetchTile(e,t,i){const n=this.getUri(e,t,i);return await this.getRgbTile({uri:n})}static async fetchPngMap(e){return await this.getPngMap(e)}static greyModelUrlBuilder(e,t){return`https://portal.opentopography.org/API/globaldem?demtype=SRTMGL1_E&south=${e.south}&north=${e.north}&west=${e.west}&east=${e.est}&outputFormat=GTiff&API_Key=${t}`}}const Zn=Math.PI/180,Jn=180/Math.PI,$n=6378137,Ei=20037508342789244e-9,Qn="900913",W0="WGS84",yr={};function vc(r){return Number(r)===r&&r%1!==0}var ct,Vi,Jr,$r,Er,Wi;class X0{constructor(e={}){if(nr(this,ct),nr(this,Vi),nr(this,Jr),nr(this,$r),nr(this,Er),nr(this,Wi),ar(this,ct,e.size||256),ar(this,Vi,e.antimeridian?2:1),!yr[je(this,ct)]){let t=je(this,ct);const i=yr[je(this,ct)]={};i.Bc=[],i.Cc=[],i.zc=[],i.Ac=[];for(let n=0;n<30;n++)i.Bc.push(t/360),i.Cc.push(t/(2*Math.PI)),i.zc.push(t/2),i.Ac.push(t),t*=2}ar(this,Jr,yr[je(this,ct)].Bc),ar(this,$r,yr[je(this,ct)].Cc),ar(this,Er,yr[je(this,ct)].zc),ar(this,Wi,yr[je(this,ct)].Ac)}px(e,t){if(vc(t)){const i=je(this,ct)*Math.pow(2,t),n=i/2,a=i/360,s=i/(2*Math.PI),o=i,l=Math.min(Math.max(Math.sin(Zn*e[1]),-.9999),.9999);let c=n+e[0]*a,h=n+.5*Math.log((1+l)/(1-l))*-s;return c>o*je(this,Vi)&&(c=o*je(this,Vi)),h>o&&(h=o),[c,h]}else{const i=je(this,Er)[t],n=Math.min(Math.max(Math.sin(Zn*e[1]),-.9999),.9999);let a=Math.round(i+e[0]*je(this,Jr)[t]),s=Math.round(i+.5*Math.log((1+n)/(1-n))*-je(this,$r)[t]);return a>je(this,Wi)[t]*je(this,Vi)&&(a=je(this,Wi)[t]*je(this,Vi)),s>je(this,Wi)[t]&&(s=je(this,Wi)[t]),[a,s]}}ll(e,t){if(vc(t)){const i=je(this,ct)*Math.pow(2,t),n=i/360,a=i/(2*Math.PI),s=i/2,o=(e[1]-s)/-a,l=(e[0]-s)/n,c=Jn*(2*Math.atan(Math.exp(o))-.5*Math.PI);return[l,c]}else{const i=(e[1]-je(this,Er)[t])/-je(this,$r)[t],n=(e[0]-je(this,Er)[t])/je(this,Jr)[t],a=Jn*(2*Math.atan(Math.exp(i))-.5*Math.PI);return[n,a]}}convert(e,t){return t===Qn?[...this.forward(e.slice(0,2)),...this.forward(e.slice(2,4))]:[...this.inverse(e.slice(0,2)),...this.inverse(e.slice(2,4))]}inverse(e){return[e[0]*Jn/$n,(Math.PI*.5-2*Math.atan(Math.exp(-e[1]/$n)))*Jn]}forward(e){const t=[$n*e[0]*Zn,$n*Math.log(Math.tan(Math.PI*.25+.5*e[1]*Zn))];return t[0]>Ei&&(t[0]=Ei),t[0]<-Ei&&(t[0]=-Ei),t[1]>Ei&&(t[1]=Ei),t[1]<-Ei&&(t[1]=-Ei),t}bbox(e,t,i,n,a){n&&(t=Math.pow(2,i)-1-t);const s=[e*je(this,ct),(+t+1)*je(this,ct)],o=[(+e+1)*je(this,ct),t*je(this,ct)],l=[...this.ll(s,i),...this.ll(o,i)];return a===Qn?this.convert(l,Qn):l}xyz(e,t,i,n){const a=n===Qn?this.convert(e,W0):e,s=[a[0],a[1]],o=[a[2],a[3]],l=this.px(s,t),c=this.px(o,t),h=[Math.floor(l[0]/je(this,ct)),Math.floor((c[0]-1)/je(this,ct))],d=[Math.floor(c[1]/je(this,ct)),Math.floor((l[1]-1)/je(this,ct))],u={minX:Math.min.apply(Math,h)<0?0:Math.min.apply(Math,h),minY:Math.min.apply(Math,d)<0?0:Math.min.apply(Math,d),maxX:Math.max.apply(Math,h),maxY:Math.max.apply(Math,d)};if(i){const f={minY:Math.pow(2,t)-1-u.maxY,maxY:Math.pow(2,t)-1-u.minY};u.minY=f.minY,u.maxY=f.maxY}return u}}ct=new WeakMap,Vi=new WeakMap,Jr=new WeakMap,$r=new WeakMap,Er=new WeakMap,Wi=new WeakMap;const xc={type:"change"},Po={type:"start"},Ph={type:"end"},ea=new Sa,yc=new Ti,j0=Math.cos(70*od.DEG2RAD),ut=new C,Rt=2*Math.PI,Ze={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ds=1e-6;class Y0 extends h0{constructor(e,t=null){super(e,t),this.state=Ze.NONE,this.enabled=!0,this.target=new C,this.cursor=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ar.ROTATE,MIDDLE:Ar.DOLLY,RIGHT:Ar.PAN},this.touches={ONE:Tr.ROTATE,TWO:Tr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new C,this._lastQuaternion=new Ji,this._lastTargetPosition=new C,this._quat=new Ji().setFromUnitVectors(e.up,new C(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new oc,this._sphericalDelta=new oc,this._scale=1,this._panOffset=new C,this._rotateStart=new ae,this._rotateEnd=new ae,this._rotateDelta=new ae,this._panStart=new ae,this._panEnd=new ae,this._panDelta=new ae,this._dollyStart=new ae,this._dollyEnd=new ae,this._dollyDelta=new ae,this._dollyDirection=new C,this._mouse=new ae,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=K0.bind(this),this._onPointerDown=q0.bind(this),this._onPointerUp=Z0.bind(this),this._onContextMenu=rv.bind(this),this._onMouseWheel=Q0.bind(this),this._onKeyDown=ev.bind(this),this._onTouchStart=tv.bind(this),this._onTouchMove=iv.bind(this),this._onMouseDown=J0.bind(this),this._onMouseMove=$0.bind(this),this._interceptControlDown=nv.bind(this),this._interceptControlUp=av.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(xc),this.update(),this.state=Ze.NONE}update(e=null){const t=this.object.position;ut.copy(t).sub(this.target),ut.applyQuaternion(this._quat),this._spherical.setFromVector3(ut),this.autoRotate&&this.state===Ze.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,n=this.maxAzimuthAngle;isFinite(i)&&isFinite(n)&&(i<-Math.PI?i+=Rt:i>Math.PI&&(i-=Rt),n<-Math.PI?n+=Rt:n>Math.PI&&(n-=Rt),i<=n?this._spherical.theta=Math.max(i,Math.min(n,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+n)/2?Math.max(i,this._spherical.theta):Math.min(n,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const s=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=s!=this._spherical.radius}if(ut.setFromSpherical(this._spherical),ut.applyQuaternion(this._quatInverse),t.copy(this.target).add(ut),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let s=null;if(this.object.isPerspectiveCamera){const o=ut.length();s=this._clampDistance(o*this._scale);const l=o-s;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new C(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new C(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),s=ut.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;s!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(s).add(this.object.position):(ea.origin.copy(this.object.position),ea.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ea.direction))<j0?this.object.lookAt(this.target):(yc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ea.intersectPlane(yc,this.target))))}else if(this.object.isOrthographicCamera){const s=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),s!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>ds||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ds||this._lastTargetPosition.distanceToSquared(this.target)>ds?(this.dispatchEvent(xc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Rt/60*this.autoRotateSpeed*e:Rt/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){ut.setFromMatrixColumn(t,0),ut.multiplyScalar(-e),this._panOffset.add(ut)}_panUp(e,t){this.screenSpacePanning===!0?ut.setFromMatrixColumn(t,1):(ut.setFromMatrixColumn(t,0),ut.crossVectors(this.object.up,ut)),ut.multiplyScalar(e),this._panOffset.add(ut)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const n=this.object.position;ut.copy(n).sub(this.target);let a=ut.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),n=e-i.left,a=t-i.top,s=i.width,o=i.height;this._mouse.x=n/s*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Rt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._rotateStart.set(i,n)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panStart.set(i,n)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),n=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(n,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Rt*this._rotateDelta.x/t.clientHeight),this._rotateUp(Rt*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),n=.5*(e.pageY+t.y);this._panEnd.set(i,n)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,n=e.pageY-t.y,a=Math.sqrt(i*i+n*n);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const s=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(s,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ae,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function q0(r){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(r.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(r)&&(this._addPointer(r),r.pointerType==="touch"?this._onTouchStart(r):this._onMouseDown(r)))}function K0(r){this.enabled!==!1&&(r.pointerType==="touch"?this._onTouchMove(r):this._onMouseMove(r))}function Z0(r){switch(this._removePointer(r),this._pointers.length){case 0:this.domElement.releasePointerCapture(r.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Ph),this.state=Ze.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function J0(r){let e;switch(r.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ar.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(r),this.state=Ze.DOLLY;break;case Ar.ROTATE:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ze.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ze.ROTATE}break;case Ar.PAN:if(r.ctrlKey||r.metaKey||r.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(r),this.state=Ze.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(r),this.state=Ze.PAN}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Po)}function $0(r){switch(this.state){case Ze.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(r);break;case Ze.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(r);break;case Ze.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(r);break}}function Q0(r){this.enabled===!1||this.enableZoom===!1||this.state!==Ze.NONE||(r.preventDefault(),this.dispatchEvent(Po),this._handleMouseWheel(this._customWheelEvent(r)),this.dispatchEvent(Ph))}function ev(r){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(r)}function tv(r){switch(this._trackPointer(r),this._pointers.length){case 1:switch(this.touches.ONE){case Tr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(r),this.state=Ze.TOUCH_ROTATE;break;case Tr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(r),this.state=Ze.TOUCH_PAN;break;default:this.state=Ze.NONE}break;case 2:switch(this.touches.TWO){case Tr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(r),this.state=Ze.TOUCH_DOLLY_PAN;break;case Tr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(r),this.state=Ze.TOUCH_DOLLY_ROTATE;break;default:this.state=Ze.NONE}break;default:this.state=Ze.NONE}this.state!==Ze.NONE&&this.dispatchEvent(Po)}function iv(r){switch(this._trackPointer(r),this.state){case Ze.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(r),this.update();break;case Ze.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(r),this.update();break;case Ze.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(r),this.update();break;case Ze.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(r),this.update();break;default:this.state=Ze.NONE}}function rv(r){this.enabled!==!1&&r.preventDefault()}function nv(r){r.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function av(r){r.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function sv(r,e=!1){const t=r[0].index!==null,i=new Set(Object.keys(r[0].attributes)),n=new Set(Object.keys(r[0].morphAttributes)),a={},s={},o=r[0].morphTargetsRelative,l=new Ut;let c=0;for(let h=0;h<r.length;++h){const d=r[h];let u=0;if(t!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in d.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;s[f]===void 0&&(s[f]=[]),s[f].push(d.morphAttributes[f])}if(e){let f;if(t)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(t){let h=0;const d=[];for(let u=0;u<r.length;++u){const f=r[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=r[u].attributes.position.count}l.setIndex(d)}for(const h in a){const d=Mc(a[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(const h in s){const d=s[h][0].length;if(d===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){const f=[];for(let _=0;_<s[h].length;++_)f.push(s[h][_][u]);const g=Mc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Mc(r){let e,t,i,n=-1,a=0;for(let c=0;c<r.length;++c){const h=r[c];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;a+=h.count*t}const s=new e(a),o=new Zt(s,t,i);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const d=l/t;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<t;g++){const _=h.getComponent(u,g);o.setComponent(u+d,g,_)}}else s.set(h.array,l);l+=h.count*t}return n!==void 0&&(o.gpuType=n),o}const ov="modulepreload",lv=function(r){return"/"+r},Sc={},ir=function(r,e,t){let i=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),s=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));i=Promise.allSettled(e.map(o=>{if(o=lv(o),o in Sc)return;Sc[o]=!0;const l=o.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${c}`))return;const h=document.createElement("link");if(h.rel=l?"stylesheet":ov,l||(h.as="script"),h.crossOrigin="",h.href=o,s&&h.setAttribute("nonce",s),document.head.appendChild(h),l)return new Promise((d,u)=>{h.addEventListener("load",d),h.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})}))}function n(a){const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=a,window.dispatchEvent(s),!s.defaultPrevented)throw a}return i.then(a=>{for(const s of a||[])s.status==="rejected"&&n(s.reason);return r().catch(n)})},ui=128;//! Attention ll signifi lon lat ici et pas lat lon
const Ec=new X0({size:128}),cv=r=>{let e=49152,t=384,i=[[],[],[],[]];for(let n=0;n<t;n+=3)i[0].push(n+1+r),i[1].push(n/3*t+1+r),i[2].push(n+1+e-t+r),i[3].push((n/3+1)*t-2+r);return i},ta=cv(1),hv=(()=>{let r=512,e=512,t=4,i=[];for(let n=0;n<t;n++)for(let a=0;a<t;a++)i.push([[a*(e/t-1)+a,(a+1)*e/t],[n*(r/t-1)+n,(n+1)*r/t]]);return i})();class uv{constructor(e,t,i,n,a,s,o){Ae(this,"unitsPerMeter"),Ae(this,"projectCoords"),Ae(this,"mapBoxToken"),Ae(this,"dataElevationCovered"),Ae(this,"apiSatellite"),Ae(this,"apiRgb"),Ae(this,"watcher"),Ae(this,"onSatelliteMat"),this.mapBoxToken=i,this.projectCoords=t,this.unitsPerMeter=e,this.dataElevationCovered=[],this.apiSatellite=n,this.apiRgb=a,this.watcher=s,o?this.onSatelliteMat=o:this.onSatelliteMat=void 0}fetch(e,t){const i=sn.getZoomPositionElevation(e);let n=0;i.forEach(async a=>{const s=await sn.fetchTile(a,this.mapBoxToken,this.apiRgb);if(s!==null)this.dataElevationCovered=this.dataElevationCovered.concat(this.addTile(s,a,e,t));else throw new Error("no tile added l-87 RgbModel");n++,n===i.length&&this.build()})}addTile(e,t,i,n){let a=[];if(e){let c,h,d;for(let u=0;u<e.data.length;u+=4)c=e.data[u],h=e.data[u+1],d=e.data[u+2],a.push(-1e4+(c*256**2+h*256+d)*.1)}else a=new Array(262144).fill(0);let s=[];for(let c=0;c<4;c++)for(let h=0;h<4;h++)s.push([t[0]+2,t[1]*4+c,t[2]*4+h].join("/"));let o=i.map(c=>c.join("/"));const l=[];return s.forEach((c,h)=>{if(!o.includes(c))return;let d=c.split("/").map(p=>parseInt(p)),u=hv[h],f=[];for(let p=u[0][0];p<u[0][1];p++)for(let m=u[1][0];m<u[1][1];m++)f.push(a[p*512+m]);let g=[],_=0;for(let p=0;p<ui;p++)for(let m=0;m<ui;m++){let b=Ec.ll([d[1]*128+m,d[2]*128+p],d[0]);g.push(...this.projectCoords(b,n.northWest,n.southEast),f[_]*this.unitsPerMeter),_++}l.push([d,g,t])}),l}async build(){let e=0,t=null;this.onSatelliteMat!==void 0&&(t=n=>{e++,e===this.dataElevationCovered.length&&this.watcher({what:"rgb-dem",data:n})});const i=this._build(t);t||this.watcher({what:"rgb-dem",data:i})}_build(e){const{dataElevationCovered:t,apiSatellite:i,mapBoxToken:n}=this;t.sort((c,h)=>c[0].join("/")>h[0].join("/")?1:-1);const a={};t.forEach((c,h)=>{a[c[0].join("/")]=h});const s=[],o=[];t.forEach(([c,h,d])=>{let u=this.resolveSeams(h,this.getNeighborsInfo(t,a,c));const f=new $i(1,1,u[0],u[1]);f.setAttribute("position",new _t(new Float32Array(h),3)),f.computeBoundingBox(),o.push(f);const g=new Pt(f,new fn({color:"white",side:2}));g.receiveShadow=!0,g.userData={isRgb:!0},s.push(g),e!==null&&this.resolveTexture(c,i,n,_=>{_&&(g.material=new fn({side:2,map:_,wireframe:!1})),e&&e(s)})});const l=sv(o,!1);return console.log(l),s}resolveSeams(e,t){let i=[ui-1,ui-1];if(Object.entries(t).forEach(([n,a])=>{n==="2"?(this._stitchWithNei2(e,a),i[1]++):n==="3"&&(this._stitchWithNei3(e,a),i[0]++)}),i[0]===ui&&i[1]===ui){let n=t[6];if(n)e.push(n[0],n[1],n[2]);else{let a=e.length;e.push(e[a-3],e[a-2],e[a-1])}}return i}_stitchWithNei2(e,t){for(let i=0;i<ui;i++){let n=ta[2][i]+ui*3,a=ta[0][i];e[n-2]=t[a-2],e[n-1]=t[a-1],e[n]=t[a]}}_stitchWithNei3(e,t){for(let i=0;i<ui;i++){let n=ta[3][i]+(1+i)*3,a=ta[1][i];e.splice(n-2,0,t[a-2]),e.splice(n-1,0,t[a-1]),e.splice(n,0,t[a])}}getNeighborsInfo(e,t,i){const n={};return this.getNeighbors8(i).forEach((a,s)=>{const o=a.join("/");if(o in t){const l=e[t[o]][1];n[s]=l}}),n}getNeighbors8(e){const t=[[0,0,-1],[0,-1,0],[0,0,1],[0,1,0],[0,-1,-1],[0,-1,1],[0,1,1],[0,1,-1]],i=[];return t.forEach(n=>{const a=n.map((s,o)=>s+e[o]);i.push(a)}),i}async resolveTexture(e,t,i,n){const a=await sn.fetchTile(e,i,t),s=new hh(a.data,a.shape[0],a.shape[1],Bt);s.flipY=!0,s.needsUpdate=!0,n&&n(s)}georeference(e){this.dataElevationCovered.forEach(t=>{const[i,n]=t;for(let a=0;a<n.length;a+=3){const[s,o,l]=n.slice(a,a+3),c=Ec.ll([s,o],i[0]),[h,d]=this.projectCoords(c,e.northWest,e.southEast);n[a]=h,n[a+1]=d,n[a+2]=l}})}}function vt(r){return(e,...t)=>dv(r,e,t)}function kr(r,e){return vt(Lh(r,e).get)}const{apply:dv,construct:Nx,defineProperty:Ox,get:Fx,getOwnPropertyDescriptor:Lh,getPrototypeOf:Lo,has:Bx,ownKeys:pv,set:zx,setPrototypeOf:Gx}=Reflect,{iterator:yn,species:kx,toStringTag:fv,for:Hx}=Symbol,mv=Object,{create:Uo,defineProperty:gv,freeze:Vx,is:Wx}=mv,_v=Array,vv=_v.prototype,Uh=vv[yn],xv=vt(Uh),Ih=ArrayBuffer,yv=Ih.prototype;kr(yv,"byteLength");const Tc=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;Tc&&kr(Tc.prototype,"byteLength");const Dh=Lo(Uint8Array);Dh.from;const bt=Dh.prototype;bt[yn];vt(bt.keys);vt(bt.values);vt(bt.entries);vt(bt.set);vt(bt.reverse);vt(bt.fill);vt(bt.copyWithin);vt(bt.sort);vt(bt.slice);vt(bt.subarray);kr(bt,"buffer");kr(bt,"byteOffset");kr(bt,"length");kr(bt,fv);const Mv=Uint8Array,Nh=Uint16Array,Io=Uint32Array,Sv=Float32Array,gn=Lo([][yn]()),Oh=vt(gn.next),Ev=vt(function*(){}().next),Tv=Lo(gn),bv=DataView.prototype,wv=vt(bv.getUint16),Do=WeakMap,Fh=Do.prototype,Bh=vt(Fh.get),Av=vt(Fh.set),zh=new Do,Rv=Uo(null,{next:{value:function(){const r=Bh(zh,this);return Oh(r)}},[yn]:{value:function(){return this}}});function Cv(r){if(r[yn]===Uh&&gn.next===Oh)return r;const e=Uo(Rv);return Av(zh,e,xv(r)),e}const Pv=new Do,Lv=Uo(Tv,{next:{value:function(){const r=Bh(Pv,this);return Ev(r)},writable:!0,configurable:!0}});for(const r of pv(gn))r!=="next"&&gv(Lv,r,Lh(gn,r));const Gh=new Ih(4),Uv=new Sv(Gh),Iv=new Io(Gh),Jt=new Nh(512),$t=new Mv(512);for(let r=0;r<256;++r){const e=r-127;e<-24?(Jt[r]=0,Jt[r|256]=32768,$t[r]=24,$t[r|256]=24):e<-14?(Jt[r]=1024>>-e-14,Jt[r|256]=1024>>-e-14|32768,$t[r]=-e-1,$t[r|256]=-e-1):e<=15?(Jt[r]=e+15<<10,Jt[r|256]=e+15<<10|32768,$t[r]=13,$t[r|256]=13):e<128?(Jt[r]=31744,Jt[r|256]=64512,$t[r]=24,$t[r|256]=24):(Jt[r]=31744,Jt[r|256]=64512,$t[r]=13,$t[r|256]=13)}const No=new Io(2048);for(let r=1;r<1024;++r){let e=r<<13,t=0;for(;!(e&8388608);)e<<=1,t-=8388608;e&=-8388609,t+=947912704,No[r]=e|t}for(let r=1024;r<2048;++r)No[r]=939524096+(r-1024<<13);const Hr=new Io(64);for(let r=1;r<31;++r)Hr[r]=r<<23;Hr[31]=1199570944;Hr[32]=2147483648;for(let r=33;r<63;++r)Hr[r]=2147483648+(r-32<<23);Hr[63]=3347054592;const kh=new Nh(64);for(let r=1;r<64;++r)r!==32&&(kh[r]=1024);function Dv(r){const e=r>>10;return Iv[0]=No[kh[e]+(r&1023)]+Hr[e],Uv[0]}function Hh(r,e,...t){return Dv(wv(r,e,...Cv(t)))}var Oo={exports:{}};function Vh(r,e,t){const i=t&&t.debug||!1;i&&console.log("[xml-utils] getting "+e+" in "+r);const n=typeof r=="object"?r.outer:r,a=n.slice(0,n.indexOf(">")+1),s=['"',"'"];for(let o=0;o<s.length;o++){const l=s[o],c=e+"\\="+l+"([^"+l+"]*)"+l;i&&console.log("[xml-utils] pattern:",c);const h=new RegExp(c).exec(a);if(i&&console.log("[xml-utils] match:",h),h)return h[1]}}Oo.exports=Vh;Oo.exports.default=Vh;var Nv=Oo.exports;const ps=Ro(Nv);var Fo={exports:{}},Bo={exports:{}},zo={exports:{}};function Wh(r,e,t){const i=new RegExp(e).exec(r.slice(t));return i?t+i.index:-1}zo.exports=Wh;zo.exports.default=Wh;var Ov=zo.exports,Go={exports:{}};function Xh(r,e,t){const i=new RegExp(e).exec(r.slice(t));return i?t+i.index+i[0].length-1:-1}Go.exports=Xh;Go.exports.default=Xh;var Fv=Go.exports,ko={exports:{}};function jh(r,e){const t=new RegExp(e,"g"),i=r.match(t);return i?i.length:0}ko.exports=jh;ko.exports.default=jh;var Bv=ko.exports;const zv=Ov,fs=Fv,bc=Bv;function Yh(r,e,t){const i=t&&t.debug||!1,n=!(t&&typeof t.nested===!1),a=t&&t.startIndex||0;i&&console.log("[xml-utils] starting findTagByName with",e," and ",t);const s=zv(r,`<${e}[ 
>/]`,a);if(i&&console.log("[xml-utils] start:",s),s===-1)return;const o=r.slice(s+e.length);let l=fs(o,"^[^<]*[ /]>",0);const c=l!==-1&&o[l-1]==="/";if(i&&console.log("[xml-utils] selfClosing:",c),c===!1)if(n){let f=0,g=1,_=0;for(;(l=fs(o,"[ /]"+e+">",f))!==-1;){const p=o.substring(f,l+1);if(g+=bc(p,"<"+e+`[ 
	>]`),_+=bc(p,"</"+e+">"),_>=g)break;f=l}}else l=fs(o,"[ /]"+e+">",0);const h=s+e.length+l+1;if(i&&console.log("[xml-utils] end:",h),h===-1)return;const d=r.slice(s,h);let u;return c?u=null:u=d.slice(d.indexOf(">")+1,d.lastIndexOf("<")),{inner:u,outer:d,start:s,end:h}}Bo.exports=Yh;Bo.exports.default=Yh;var Gv=Bo.exports;const kv=Gv;function qh(r,e,t){const i=[],n=t&&t.debug||!1,a=t&&typeof t.nested=="boolean"?t.nested:!0;let s=t&&t.startIndex||0,o;for(;o=kv(r,e,{debug:n,startIndex:s});)a?s=o.start+1+e.length:s=o.end,i.push(o);return n&&console.log("findTagsByName found",i.length,"tags"),i}Fo.exports=qh;Fo.exports.default=qh;var Hv=Fo.exports;const Vv=Ro(Hv),on={315:"Artist",258:"BitsPerSample",265:"CellLength",264:"CellWidth",320:"ColorMap",259:"Compression",33432:"Copyright",306:"DateTime",338:"ExtraSamples",266:"FillOrder",289:"FreeByteCounts",288:"FreeOffsets",291:"GrayResponseCurve",290:"GrayResponseUnit",316:"HostComputer",270:"ImageDescription",257:"ImageLength",256:"ImageWidth",271:"Make",281:"MaxSampleValue",280:"MinSampleValue",272:"Model",254:"NewSubfileType",274:"Orientation",262:"PhotometricInterpretation",284:"PlanarConfiguration",296:"ResolutionUnit",278:"RowsPerStrip",277:"SamplesPerPixel",305:"Software",279:"StripByteCounts",273:"StripOffsets",255:"SubfileType",263:"Threshholding",282:"XResolution",283:"YResolution",326:"BadFaxLines",327:"CleanFaxData",343:"ClipPath",328:"ConsecutiveBadFaxLines",433:"Decode",434:"DefaultImageColor",269:"DocumentName",336:"DotRange",321:"HalftoneHints",346:"Indexed",347:"JPEGTables",285:"PageName",297:"PageNumber",317:"Predictor",319:"PrimaryChromaticities",532:"ReferenceBlackWhite",339:"SampleFormat",340:"SMinSampleValue",341:"SMaxSampleValue",559:"StripRowCounts",330:"SubIFDs",292:"T4Options",293:"T6Options",325:"TileByteCounts",323:"TileLength",324:"TileOffsets",322:"TileWidth",301:"TransferFunction",318:"WhitePoint",344:"XClipPathUnits",286:"XPosition",529:"YCbCrCoefficients",531:"YCbCrPositioning",530:"YCbCrSubSampling",345:"YClipPathUnits",287:"YPosition",37378:"ApertureValue",40961:"ColorSpace",36868:"DateTimeDigitized",36867:"DateTimeOriginal",34665:"Exif IFD",36864:"ExifVersion",33434:"ExposureTime",41728:"FileSource",37385:"Flash",40960:"FlashpixVersion",33437:"FNumber",42016:"ImageUniqueID",37384:"LightSource",37500:"MakerNote",37377:"ShutterSpeedValue",37510:"UserComment",33723:"IPTC",34675:"ICC Profile",700:"XMP",42112:"GDAL_METADATA",42113:"GDAL_NODATA",34377:"Photoshop",33550:"ModelPixelScale",33922:"ModelTiepoint",34264:"ModelTransformation",34735:"GeoKeyDirectory",34736:"GeoDoubleParams",34737:"GeoAsciiParams",50674:"LercParameters"},Qt={};for(const r in on)on.hasOwnProperty(r)&&(Qt[on[r]]=parseInt(r,10));const Wv=[Qt.BitsPerSample,Qt.ExtraSamples,Qt.SampleFormat,Qt.StripByteCounts,Qt.StripOffsets,Qt.StripRowCounts,Qt.TileByteCounts,Qt.TileOffsets,Qt.SubIFDs],ms={1:"BYTE",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",6:"SBYTE",7:"UNDEFINED",8:"SSHORT",9:"SLONG",10:"SRATIONAL",11:"FLOAT",12:"DOUBLE",13:"IFD",16:"LONG8",17:"SLONG8",18:"IFD8"},Be={};for(const r in ms)ms.hasOwnProperty(r)&&(Be[ms[r]]=parseInt(r,10));const Ft={WhiteIsZero:0,BlackIsZero:1,RGB:2,Palette:3,TransparencyMask:4,CMYK:5,YCbCr:6,CIELab:8,ICCLab:9},Xv={Unspecified:0,Assocalpha:1,Unassalpha:2},Xx={Version:0,AddCompression:1},jx={None:0,Deflate:1,Zstandard:2},jv={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"};function Yv(r,e){const{width:t,height:i}=r,n=new Uint8Array(t*i*3);let a;for(let s=0,o=0;s<r.length;++s,o+=3)a=256-r[s]/e*256,n[o]=a,n[o+1]=a,n[o+2]=a;return n}function qv(r,e){const{width:t,height:i}=r,n=new Uint8Array(t*i*3);let a;for(let s=0,o=0;s<r.length;++s,o+=3)a=r[s]/e*256,n[o]=a,n[o+1]=a,n[o+2]=a;return n}function Kv(r,e){const{width:t,height:i}=r,n=new Uint8Array(t*i*3),a=e.length/3,s=e.length/3*2;for(let o=0,l=0;o<r.length;++o,l+=3){const c=r[o];n[l]=e[c]/65536*256,n[l+1]=e[c+a]/65536*256,n[l+2]=e[c+s]/65536*256}return n}function Zv(r){const{width:e,height:t}=r,i=new Uint8Array(e*t*3);for(let n=0,a=0;n<r.length;n+=4,a+=3){const s=r[n],o=r[n+1],l=r[n+2],c=r[n+3];i[a]=255*((255-s)/256)*((255-c)/256),i[a+1]=255*((255-o)/256)*((255-c)/256),i[a+2]=255*((255-l)/256)*((255-c)/256)}return i}function Jv(r){const{width:e,height:t}=r,i=new Uint8ClampedArray(e*t*3);for(let n=0,a=0;n<r.length;n+=3,a+=3){const s=r[n],o=r[n+1],l=r[n+2];i[a]=s+1.402*(l-128),i[a+1]=s-.34414*(o-128)-.71414*(l-128),i[a+2]=s+1.772*(o-128)}return i}const $v=.95047,Qv=1,ex=1.08883;function tx(r){const{width:e,height:t}=r,i=new Uint8Array(e*t*3);for(let n=0,a=0;n<r.length;n+=3,a+=3){const s=r[n+0],o=r[n+1]<<24>>24,l=r[n+2]<<24>>24;let c=(s+16)/116,h=o/500+c,d=c-l/200,u,f,g;h=$v*(h*h*h>.008856?h*h*h:(h-16/116)/7.787),c=Qv*(c*c*c>.008856?c*c*c:(c-16/116)/7.787),d=ex*(d*d*d>.008856?d*d*d:(d-16/116)/7.787),u=h*3.2406+c*-1.5372+d*-.4986,f=h*-.9689+c*1.8758+d*.0415,g=h*.0557+c*-.204+d*1.057,u=u>.0031308?1.055*u**(1/2.4)-.055:12.92*u,f=f>.0031308?1.055*f**(1/2.4)-.055:12.92*f,g=g>.0031308?1.055*g**(1/2.4)-.055:12.92*g,i[a]=Math.max(0,Math.min(1,u))*255,i[a+1]=Math.max(0,Math.min(1,f))*255,i[a+2]=Math.max(0,Math.min(1,g))*255}return i}const Kh=new Map;function Ii(r,e){Array.isArray(r)||(r=[r]),r.forEach(t=>Kh.set(t,e))}async function ix(r){const e=Kh.get(r.Compression);if(!e)throw new Error(`Unknown compression method identifier: ${r.Compression}`);const t=await e();return new t(r)}Ii([void 0,1],()=>ir(()=>er(()=>import("./raw-Dt1HMqYc-CCYStf-G.js"),__vite__mapDeps([0,1])),Pi([0,1])).then(r=>r.default));Ii(5,()=>ir(()=>er(()=>import("./lzw-DpvbRwG5-A0qWj5O6.js"),__vite__mapDeps([2,1])),Pi([2,1])).then(r=>r.default));Ii(6,()=>{throw new Error("old style JPEG compression is not supported.")});Ii(7,()=>ir(()=>er(()=>import("./jpeg-CdeCw_eT-DCUfbGmp.js"),__vite__mapDeps([3,1])),Pi([3,1])).then(r=>r.default));Ii([8,32946],()=>ir(()=>er(()=>import("./deflate-CUkHh1nh-BnvLddrI.js"),__vite__mapDeps([4,5,1])),Pi([4,5,1])).then(r=>r.default));Ii(32773,()=>ir(()=>er(()=>import("./packbits-DQnG8s9w-Bbhgek_W.js"),__vite__mapDeps([6,1])),Pi([6,1])).then(r=>r.default));Ii(34887,()=>ir(()=>er(()=>import("./lerc-DSZpxyNj-nniGGsAj.js"),__vite__mapDeps([7,5,1])),Pi([7,5,1])).then(async r=>(await r.zstd.init(),r)).then(r=>r.default));Ii(50001,()=>ir(()=>er(()=>import("./webimage-BcnuJlio-D2DpIK8k.js"),__vite__mapDeps([8,1])),Pi([8,1])).then(r=>r.default));function wa(r,e,t,i=1){return new(Object.getPrototypeOf(r)).constructor(e*t*i)}function rx(r,e,t,i,n){const a=e/i,s=t/n;return r.map(o=>{const l=wa(o,i,n);for(let c=0;c<n;++c){const h=Math.min(Math.round(s*c),t-1);for(let d=0;d<i;++d){const u=Math.min(Math.round(a*d),e-1),f=o[h*e+u];l[c*i+d]=f}}return l})}function Lr(r,e,t){return(1-t)*r+t*e}function nx(r,e,t,i,n){const a=e/i,s=t/n;return r.map(o=>{const l=wa(o,i,n);for(let c=0;c<n;++c){const h=s*c,d=Math.floor(h),u=Math.min(Math.ceil(h),t-1);for(let f=0;f<i;++f){const g=a*f,_=g%1,p=Math.floor(g),m=Math.min(Math.ceil(g),e-1),b=o[d*e+p],M=o[d*e+m],E=o[u*e+p],N=o[u*e+m],R=Lr(Lr(b,M,_),Lr(E,N,_),h%1);l[c*i+f]=R}}return l})}function ax(r,e,t,i,n,a="nearest"){switch(a.toLowerCase()){case"nearest":return rx(r,e,t,i,n);case"bilinear":case"linear":return nx(r,e,t,i,n);default:throw new Error(`Unsupported resampling method: '${a}'`)}}function sx(r,e,t,i,n,a){const s=e/i,o=t/n,l=wa(r,i,n,a);for(let c=0;c<n;++c){const h=Math.min(Math.round(o*c),t-1);for(let d=0;d<i;++d){const u=Math.min(Math.round(s*d),e-1);for(let f=0;f<a;++f){const g=r[h*e*a+u*a+f];l[c*i*a+d*a+f]=g}}}return l}function ox(r,e,t,i,n,a){const s=e/i,o=t/n,l=wa(r,i,n,a);for(let c=0;c<n;++c){const h=o*c,d=Math.floor(h),u=Math.min(Math.ceil(h),t-1);for(let f=0;f<i;++f){const g=s*f,_=g%1,p=Math.floor(g),m=Math.min(Math.ceil(g),e-1);for(let b=0;b<a;++b){const M=r[d*e*a+p*a+b],E=r[d*e*a+m*a+b],N=r[u*e*a+p*a+b],R=r[u*e*a+m*a+b],A=Lr(Lr(M,E,_),Lr(N,R,_),h%1);l[c*i*a+f*a+b]=A}}}return l}function lx(r,e,t,i,n,a,s="nearest"){switch(s.toLowerCase()){case"nearest":return sx(r,e,t,i,n,a);case"bilinear":case"linear":return ox(r,e,t,i,n,a);default:throw new Error(`Unsupported resampling method: '${s}'`)}}function cx(r,e,t){let i=0;for(let n=e;n<t;++n)i+=r[n];return i}function co(r,e,t){switch(r){case 1:if(e<=8)return new Uint8Array(t);if(e<=16)return new Uint16Array(t);if(e<=32)return new Uint32Array(t);break;case 2:if(e===8)return new Int8Array(t);if(e===16)return new Int16Array(t);if(e===32)return new Int32Array(t);break;case 3:switch(e){case 16:case 32:return new Float32Array(t);case 64:return new Float64Array(t)}break}throw Error("Unsupported data format/bitsPerSample")}function hx(r,e){return(r===1||r===2)&&e<=32&&e%8===0?!1:!(r===3&&(e===16||e===32||e===64))}function ux(r,e,t,i,n,a,s){const o=new DataView(r),l=t===2?s*a:s*a*i,c=t===2?1:i,h=co(e,n,l),d=parseInt("1".repeat(n),2);if(e===1){let u;t===1?u=i*n:u=n;let f=a*u;f&7&&(f=f+7&-8);for(let g=0;g<s;++g){const _=g*f;for(let p=0;p<a;++p){const m=_+p*c*n;for(let b=0;b<c;++b){const M=m+b*n,E=(g*a+p)*c+b,N=Math.floor(M/8),R=M%8;if(R+n<=8)h[E]=o.getUint8(N)>>8-n-R&d;else if(R+n<=16)h[E]=o.getUint16(N)>>16-n-R&d;else if(R+n<=24){const A=o.getUint16(N)<<8|o.getUint8(N+2);h[E]=A>>24-n-R&d}else h[E]=o.getUint32(N)>>32-n-R&d}}}}return h.buffer}class dx{constructor(e,t,i,n,a,s){this.fileDirectory=e,this.geoKeys=t,this.dataView=i,this.littleEndian=n,this.tiles=a?{}:null,this.isTiled=!e.StripOffsets;const o=e.PlanarConfiguration;if(this.planarConfiguration=typeof o>"u"?1:o,this.planarConfiguration!==1&&this.planarConfiguration!==2)throw new Error("Invalid planar configuration.");this.source=s}getFileDirectory(){return this.fileDirectory}getGeoKeys(){return this.geoKeys}getWidth(){return this.fileDirectory.ImageWidth}getHeight(){return this.fileDirectory.ImageLength}getSamplesPerPixel(){return typeof this.fileDirectory.SamplesPerPixel<"u"?this.fileDirectory.SamplesPerPixel:1}getTileWidth(){return this.isTiled?this.fileDirectory.TileWidth:this.getWidth()}getTileHeight(){return this.isTiled?this.fileDirectory.TileLength:typeof this.fileDirectory.RowsPerStrip<"u"?Math.min(this.fileDirectory.RowsPerStrip,this.getHeight()):this.getHeight()}getBlockWidth(){return this.getTileWidth()}getBlockHeight(e){return this.isTiled||(e+1)*this.getTileHeight()<=this.getHeight()?this.getTileHeight():this.getHeight()-e*this.getTileHeight()}getBytesPerPixel(){let e=0;for(let t=0;t<this.fileDirectory.BitsPerSample.length;++t)e+=this.getSampleByteSize(t);return e}getSampleByteSize(e){if(e>=this.fileDirectory.BitsPerSample.length)throw new RangeError(`Sample index ${e} is out of range.`);return Math.ceil(this.fileDirectory.BitsPerSample[e]/8)}getReaderForSample(e){const t=this.fileDirectory.SampleFormat?this.fileDirectory.SampleFormat[e]:1,i=this.fileDirectory.BitsPerSample[e];switch(t){case 1:if(i<=8)return DataView.prototype.getUint8;if(i<=16)return DataView.prototype.getUint16;if(i<=32)return DataView.prototype.getUint32;break;case 2:if(i<=8)return DataView.prototype.getInt8;if(i<=16)return DataView.prototype.getInt16;if(i<=32)return DataView.prototype.getInt32;break;case 3:switch(i){case 16:return function(n,a){return Hh(this,n,a)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64}break}throw Error("Unsupported data format/bitsPerSample")}getSampleFormat(e=0){return this.fileDirectory.SampleFormat?this.fileDirectory.SampleFormat[e]:1}getBitsPerSample(e=0){return this.fileDirectory.BitsPerSample[e]}getArrayForSample(e,t){const i=this.getSampleFormat(e),n=this.getBitsPerSample(e);return co(i,n,t)}async getTileOrStrip(e,t,i,n,a){const s=Math.ceil(this.getWidth()/this.getTileWidth()),o=Math.ceil(this.getHeight()/this.getTileHeight());let l;const{tiles:c}=this;this.planarConfiguration===1?l=t*s+e:this.planarConfiguration===2&&(l=i*s*o+t*s+e);let h,d;this.isTiled?(h=this.fileDirectory.TileOffsets[l],d=this.fileDirectory.TileByteCounts[l]):(h=this.fileDirectory.StripOffsets[l],d=this.fileDirectory.StripByteCounts[l]);const u=(await this.source.fetch([{offset:h,length:d}],a))[0];let f;return c===null||!c[l]?(f=(async()=>{let g=await n.decode(this.fileDirectory,u);const _=this.getSampleFormat(),p=this.getBitsPerSample();return hx(_,p)&&(g=ux(g,_,this.planarConfiguration,this.getSamplesPerPixel(),p,this.getTileWidth(),this.getBlockHeight(t))),g})(),c!==null&&(c[l]=f)):f=c[l],{x:e,y:t,sample:i,data:await f}}async _readRaster(e,t,i,n,a,s,o,l,c){const h=this.getTileWidth(),d=this.getTileHeight(),u=this.getWidth(),f=this.getHeight(),g=Math.max(Math.floor(e[0]/h),0),_=Math.min(Math.ceil(e[2]/h),Math.ceil(u/h)),p=Math.max(Math.floor(e[1]/d),0),m=Math.min(Math.ceil(e[3]/d),Math.ceil(f/d)),b=e[2]-e[0];let M=this.getBytesPerPixel();const E=[],N=[];for(let I=0;I<t.length;++I)this.planarConfiguration===1?E.push(cx(this.fileDirectory.BitsPerSample,0,t[I])/8):E.push(0),N.push(this.getReaderForSample(t[I]));const R=[],{littleEndian:A}=this;for(let I=p;I<m;++I)for(let ie=g;ie<_;++ie){let v;this.planarConfiguration===1&&(v=this.getTileOrStrip(ie,I,0,a,c));for(let S=0;S<t.length;++S){const B=S,z=t[S];this.planarConfiguration===2&&(M=this.getSampleByteSize(z),v=this.getTileOrStrip(ie,I,z,a,c));const V=v.then(Y=>{const G=Y.data,$=new DataView(G),k=this.getBlockHeight(Y.y),ne=Y.y*d,ue=Y.x*h,Re=ne+k,Ve=(Y.x+1)*h,Xe=N[B],X=Math.min(k,k-(Re-e[3]),f-ne),Q=Math.min(h,h-(Ve-e[2]),u-ue);for(let se=Math.max(0,e[1]-ne);se<X;++se)for(let oe=Math.max(0,e[0]-ue);oe<Q;++oe){const Ie=(se*h+oe)*M,Se=Xe.call($,Ie+E[B],A);let Ce;n?(Ce=(se+ne-e[1])*b*t.length+(oe+ue-e[0])*t.length+B,i[Ce]=Se):(Ce=(se+ne-e[1])*b+oe+ue-e[0],i[B][Ce]=Se)}});R.push(V)}}if(await Promise.all(R),s&&e[2]-e[0]!==s||o&&e[3]-e[1]!==o){let I;return n?I=lx(i,e[2]-e[0],e[3]-e[1],s,o,t.length,l):I=ax(i,e[2]-e[0],e[3]-e[1],s,o,l),I.width=s,I.height=o,I}return i.width=s||e[2]-e[0],i.height=o||e[3]-e[1],i}async readRasters({window:e,samples:t=[],interleave:i,pool:n=null,width:a,height:s,resampleMethod:o,fillValue:l,signal:c}={}){const h=e||[0,0,this.getWidth(),this.getHeight()];if(h[0]>h[2]||h[1]>h[3])throw new Error("Invalid subsets");const d=h[2]-h[0],u=h[3]-h[1],f=d*u,g=this.getSamplesPerPixel();if(!t||!t.length)for(let m=0;m<g;++m)t.push(m);else for(let m=0;m<t.length;++m)if(t[m]>=g)return Promise.reject(new RangeError(`Invalid sample index '${t[m]}'.`));let _;if(i){const m=this.fileDirectory.SampleFormat?Math.max.apply(null,this.fileDirectory.SampleFormat):1,b=Math.max.apply(null,this.fileDirectory.BitsPerSample);_=co(m,b,f*t.length),l&&_.fill(l)}else{_=[];for(let m=0;m<t.length;++m){const b=this.getArrayForSample(t[m],f);Array.isArray(l)&&m<l.length?b.fill(l[m]):l&&!Array.isArray(l)&&b.fill(l),_.push(b)}}const p=n||await ix(this.fileDirectory);return await this._readRaster(h,t,_,i,p,a,s,o,c)}async readRGB({window:e,interleave:t=!0,pool:i=null,width:n,height:a,resampleMethod:s,enableAlpha:o=!1,signal:l}={}){const c=e||[0,0,this.getWidth(),this.getHeight()];if(c[0]>c[2]||c[1]>c[3])throw new Error("Invalid subsets");const h=this.fileDirectory.PhotometricInterpretation;if(h===Ft.RGB){let m=[0,1,2];if(this.fileDirectory.ExtraSamples!==Xv.Unspecified&&o){m=[];for(let b=0;b<this.fileDirectory.BitsPerSample.length;b+=1)m.push(b)}return this.readRasters({window:e,interleave:t,samples:m,pool:i,width:n,height:a,resampleMethod:s,signal:l})}let d;switch(h){case Ft.WhiteIsZero:case Ft.BlackIsZero:case Ft.Palette:d=[0];break;case Ft.CMYK:d=[0,1,2,3];break;case Ft.YCbCr:case Ft.CIELab:d=[0,1,2];break;default:throw new Error("Invalid or unsupported photometric interpretation.")}const u={window:c,interleave:!0,samples:d,pool:i,width:n,height:a,resampleMethod:s,signal:l},{fileDirectory:f}=this,g=await this.readRasters(u),_=2**this.fileDirectory.BitsPerSample[0];let p;switch(h){case Ft.WhiteIsZero:p=Yv(g,_);break;case Ft.BlackIsZero:p=qv(g,_);break;case Ft.Palette:p=Kv(g,f.ColorMap);break;case Ft.CMYK:p=Zv(g);break;case Ft.YCbCr:p=Jv(g);break;case Ft.CIELab:p=tx(g);break;default:throw new Error("Unsupported photometric interpretation.")}if(!t){const m=new Uint8Array(p.length/3),b=new Uint8Array(p.length/3),M=new Uint8Array(p.length/3);for(let E=0,N=0;E<p.length;E+=3,++N)m[N]=p[E],b[N]=p[E+1],M[N]=p[E+2];p=[m,b,M]}return p.width=g.width,p.height=g.height,p}getTiePoints(){if(!this.fileDirectory.ModelTiepoint)return[];const e=[];for(let t=0;t<this.fileDirectory.ModelTiepoint.length;t+=6)e.push({i:this.fileDirectory.ModelTiepoint[t],j:this.fileDirectory.ModelTiepoint[t+1],k:this.fileDirectory.ModelTiepoint[t+2],x:this.fileDirectory.ModelTiepoint[t+3],y:this.fileDirectory.ModelTiepoint[t+4],z:this.fileDirectory.ModelTiepoint[t+5]});return e}getGDALMetadata(e=null){const t={};if(!this.fileDirectory.GDAL_METADATA)return null;const i=this.fileDirectory.GDAL_METADATA;let n=Vv(i,"Item");e===null?n=n.filter(a=>ps(a,"sample")===void 0):n=n.filter(a=>Number(ps(a,"sample"))===e);for(let a=0;a<n.length;++a){const s=n[a];t[ps(s,"name")]=s.inner}return t}getGDALNoData(){if(!this.fileDirectory.GDAL_NODATA)return null;const e=this.fileDirectory.GDAL_NODATA;return Number(e.substring(0,e.length-1))}getOrigin(){const e=this.fileDirectory.ModelTiepoint,t=this.fileDirectory.ModelTransformation;if(e&&e.length===6)return[e[3],e[4],e[5]];if(t)return[t[3],t[7],t[11]];throw new Error("The image does not have an affine transformation.")}getResolution(e=null){const t=this.fileDirectory.ModelPixelScale,i=this.fileDirectory.ModelTransformation;if(t)return[t[0],-t[1],t[2]];if(i)return i[1]===0&&i[4]===0?[i[0],-i[5],i[10]]:[Math.sqrt(i[0]*i[0]+i[4]*i[4]),-Math.sqrt(i[1]*i[1]+i[5]*i[5]),i[10]];if(e){const[n,a,s]=e.getResolution();return[n*e.getWidth()/this.getWidth(),a*e.getHeight()/this.getHeight(),s*e.getWidth()/this.getWidth()]}throw new Error("The image does not have an affine transformation.")}pixelIsArea(){return this.geoKeys.GTRasterTypeGeoKey===1}getBoundingBox(e=!1){const t=this.getHeight(),i=this.getWidth();if(this.fileDirectory.ModelTransformation&&!e){const[n,a,s,o,l,c,h,d]=this.fileDirectory.ModelTransformation,u=[[0,0],[0,t],[i,0],[i,t]].map(([_,p])=>[o+n*_+a*p,d+l*_+c*p]),f=u.map(_=>_[0]),g=u.map(_=>_[1]);return[Math.min(...f),Math.min(...g),Math.max(...f),Math.max(...g)]}else{const n=this.getOrigin(),a=this.getResolution(),s=n[0],o=n[1],l=s+a[0]*i,c=o+a[1]*t;return[Math.min(s,l),Math.min(o,c),Math.max(s,l),Math.max(o,c)]}}}class px{constructor(e){this._dataView=new DataView(e)}get buffer(){return this._dataView.buffer}getUint64(e,t){const i=this.getUint32(e,t),n=this.getUint32(e+4,t);let a;if(t){if(a=i+2**32*n,!Number.isSafeInteger(a))throw new Error(`${a} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return a}if(a=2**32*i+n,!Number.isSafeInteger(a))throw new Error(`${a} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return a}getInt64(e,t){let i=0;const n=(this._dataView.getUint8(e+(t?7:0))&128)>0;let a=!0;for(let s=0;s<8;s++){let o=this._dataView.getUint8(e+(t?s:7-s));n&&(a?o!==0&&(o=~(o-1)&255,a=!1):o=~o&255),i+=o*256**s}return n&&(i=-i),i}getUint8(e,t){return this._dataView.getUint8(e,t)}getInt8(e,t){return this._dataView.getInt8(e,t)}getUint16(e,t){return this._dataView.getUint16(e,t)}getInt16(e,t){return this._dataView.getInt16(e,t)}getUint32(e,t){return this._dataView.getUint32(e,t)}getInt32(e,t){return this._dataView.getInt32(e,t)}getFloat16(e,t){return Hh(this._dataView,e,t)}getFloat32(e,t){return this._dataView.getFloat32(e,t)}getFloat64(e,t){return this._dataView.getFloat64(e,t)}}class fx{constructor(e,t,i,n){this._dataView=new DataView(e),this._sliceOffset=t,this._littleEndian=i,this._bigTiff=n}get sliceOffset(){return this._sliceOffset}get sliceTop(){return this._sliceOffset+this.buffer.byteLength}get littleEndian(){return this._littleEndian}get bigTiff(){return this._bigTiff}get buffer(){return this._dataView.buffer}covers(e,t){return this.sliceOffset<=e&&this.sliceTop>=e+t}readUint8(e){return this._dataView.getUint8(e-this._sliceOffset,this._littleEndian)}readInt8(e){return this._dataView.getInt8(e-this._sliceOffset,this._littleEndian)}readUint16(e){return this._dataView.getUint16(e-this._sliceOffset,this._littleEndian)}readInt16(e){return this._dataView.getInt16(e-this._sliceOffset,this._littleEndian)}readUint32(e){return this._dataView.getUint32(e-this._sliceOffset,this._littleEndian)}readInt32(e){return this._dataView.getInt32(e-this._sliceOffset,this._littleEndian)}readFloat32(e){return this._dataView.getFloat32(e-this._sliceOffset,this._littleEndian)}readFloat64(e){return this._dataView.getFloat64(e-this._sliceOffset,this._littleEndian)}readUint64(e){const t=this.readUint32(e),i=this.readUint32(e+4);let n;if(this._littleEndian){if(n=t+2**32*i,!Number.isSafeInteger(n))throw new Error(`${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return n}if(n=2**32*t+i,!Number.isSafeInteger(n))throw new Error(`${n} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return n}readInt64(e){let t=0;const i=(this._dataView.getUint8(e+(this._littleEndian?7:0))&128)>0;let n=!0;for(let a=0;a<8;a++){let s=this._dataView.getUint8(e+(this._littleEndian?a:7-a));i&&(n?s!==0&&(s=~(s-1)&255,n=!1):s=~s&255),t+=s*256**a}return i&&(t=-t),t}readOffset(e){return this._bigTiff?this.readUint64(e):this.readUint32(e)}}class mx{async fetch(e,t=void 0){return Promise.all(e.map(i=>this.fetchSlice(i,t)))}async fetchSlice(e){throw new Error(`fetching of slice ${e} not possible, not implemented`)}get fileSize(){return null}async close(){}}class Ho extends Error{constructor(e){super(e),Error.captureStackTrace&&Error.captureStackTrace(this,Ho),this.name="AbortError"}}class gx extends mx{constructor(e){super(),this.arrayBuffer=e}fetchSlice(e,t){if(t&&t.aborted)throw new Ho("Request aborted");return this.arrayBuffer.slice(e.offset,e.offset+e.length)}}function _x(r){return new gx(r)}function ho(r){switch(r){case Be.BYTE:case Be.ASCII:case Be.SBYTE:case Be.UNDEFINED:return 1;case Be.SHORT:case Be.SSHORT:return 2;case Be.LONG:case Be.SLONG:case Be.FLOAT:case Be.IFD:return 4;case Be.RATIONAL:case Be.SRATIONAL:case Be.DOUBLE:case Be.LONG8:case Be.SLONG8:case Be.IFD8:return 8;default:throw new RangeError(`Invalid field type: ${r}`)}}function vx(r){const e=r.GeoKeyDirectory;if(!e)return null;const t={};for(let i=4;i<=e[3]*4;i+=4){const n=jv[e[i]],a=e[i+1]?on[e[i+1]]:null,s=e[i+2],o=e[i+3];let l=null;if(!a)l=o;else{if(l=r[a],typeof l>"u"||l===null)throw new Error(`Could not get value of geoKey '${n}'.`);typeof l=="string"?l=l.substring(o,o+s-1):l.subarray&&(l=l.subarray(o,o+s),s===1&&(l=l[0]))}t[n]=l}return t}function Mr(r,e,t,i){let n=null,a=null;const s=ho(e);switch(e){case Be.BYTE:case Be.ASCII:case Be.UNDEFINED:n=new Uint8Array(t),a=r.readUint8;break;case Be.SBYTE:n=new Int8Array(t),a=r.readInt8;break;case Be.SHORT:n=new Uint16Array(t),a=r.readUint16;break;case Be.SSHORT:n=new Int16Array(t),a=r.readInt16;break;case Be.LONG:case Be.IFD:n=new Uint32Array(t),a=r.readUint32;break;case Be.SLONG:n=new Int32Array(t),a=r.readInt32;break;case Be.LONG8:case Be.IFD8:n=new Array(t),a=r.readUint64;break;case Be.SLONG8:n=new Array(t),a=r.readInt64;break;case Be.RATIONAL:n=new Uint32Array(t*2),a=r.readUint32;break;case Be.SRATIONAL:n=new Int32Array(t*2),a=r.readInt32;break;case Be.FLOAT:n=new Float32Array(t),a=r.readFloat32;break;case Be.DOUBLE:n=new Float64Array(t),a=r.readFloat64;break;default:throw new RangeError(`Invalid field type: ${e}`)}if(e===Be.RATIONAL||e===Be.SRATIONAL)for(let o=0;o<t;o+=2)n[o]=a.call(r,i+o*s),n[o+1]=a.call(r,i+(o*s+4));else for(let o=0;o<t;++o)n[o]=a.call(r,i+o*s);return e===Be.ASCII?new TextDecoder("utf-8").decode(n):n}class xx{constructor(e,t,i){this.fileDirectory=e,this.geoKeyDirectory=t,this.nextIFDByteOffset=i}}class ia extends Error{constructor(e){super(`No image at index ${e}`),this.index=e}}class yx{async readRasters(e={}){const{window:t,width:i,height:n}=e;let{resX:a,resY:s,bbox:o}=e;const l=await this.getImage();let c=l;const h=await this.getImageCount(),d=l.getBoundingBox();if(t&&o)throw new Error('Both "bbox" and "window" passed.');if(i||n){if(t){const[g,_]=l.getOrigin(),[p,m]=l.getResolution();o=[g+t[0]*p,_+t[1]*m,g+t[2]*p,_+t[3]*m]}const f=o||d;if(i){if(a)throw new Error("Both width and resX passed");a=(f[2]-f[0])/i}if(n){if(s)throw new Error("Both width and resY passed");s=(f[3]-f[1])/n}}if(a||s){const f=[];for(let g=0;g<h;++g){const _=await this.getImage(g),{SubfileType:p,NewSubfileType:m}=_.fileDirectory;(g===0||p===2||m&1)&&f.push(_)}f.sort((g,_)=>g.getWidth()-_.getWidth());for(let g=0;g<f.length;++g){const _=f[g],p=(d[2]-d[0])/_.getWidth(),m=(d[3]-d[1])/_.getHeight();if(c=_,a&&a>p||s&&s>m)break}}let u=t;if(o){const[f,g]=l.getOrigin(),[_,p]=c.getResolution(l);u=[Math.round((o[0]-f)/_),Math.round((o[1]-g)/p),Math.round((o[2]-f)/_),Math.round((o[3]-g)/p)],u=[Math.min(u[0],u[2]),Math.min(u[1],u[3]),Math.max(u[0],u[2]),Math.max(u[1],u[3])]}return c.readRasters({...e,window:u})}}class Vo extends yx{constructor(e,t,i,n,a={}){super(),this.source=e,this.littleEndian=t,this.bigTiff=i,this.firstIFDOffset=n,this.cache=a.cache||!1,this.ifdRequests=[],this.ghostValues=null}async getSlice(e,t){const i=this.bigTiff?4048:1024;return new fx((await this.source.fetch([{offset:e,length:typeof t<"u"?t:i}]))[0],e,this.littleEndian,this.bigTiff)}async parseFileDirectoryAt(e){const t=this.bigTiff?20:12,i=this.bigTiff?8:2;let n=await this.getSlice(e);const a=this.bigTiff?n.readUint64(e):n.readUint16(e),s=a*t+(this.bigTiff?16:6);n.covers(e,s)||(n=await this.getSlice(e,s));const o={};let l=e+(this.bigTiff?8:2);for(let d=0;d<a;l+=t,++d){const u=n.readUint16(l),f=n.readUint16(l+2),g=this.bigTiff?n.readUint64(l+4):n.readUint32(l+4);let _,p;const m=ho(f),b=l+(this.bigTiff?12:8);if(m*g<=(this.bigTiff?8:4))_=Mr(n,f,g,b);else{const M=n.readOffset(b),E=ho(f)*g;if(n.covers(M,E))_=Mr(n,f,g,M);else{const N=await this.getSlice(M,E);_=Mr(N,f,g,M)}}g===1&&Wv.indexOf(u)===-1&&!(f===Be.RATIONAL||f===Be.SRATIONAL)?p=_[0]:p=_,o[on[u]]=p}const c=vx(o),h=n.readOffset(e+i+t*a);return new xx(o,c,h)}async requestIFD(e){if(this.ifdRequests[e])return this.ifdRequests[e];if(e===0)return this.ifdRequests[e]=this.parseFileDirectoryAt(this.firstIFDOffset),this.ifdRequests[e];if(!this.ifdRequests[e-1])try{this.ifdRequests[e-1]=this.requestIFD(e-1)}catch(t){throw t instanceof ia?new ia(e):t}return this.ifdRequests[e]=(async()=>{const t=await this.ifdRequests[e-1];if(t.nextIFDByteOffset===0)throw new ia(e);return this.parseFileDirectoryAt(t.nextIFDByteOffset)})(),this.ifdRequests[e]}async getImage(e=0){const t=await this.requestIFD(e);return new dx(t.fileDirectory,t.geoKeyDirectory,this.dataView,this.littleEndian,this.cache,this.source)}async getImageCount(){let e=0,t=!0;for(;t;)try{await this.requestIFD(e),++e}catch(i){if(i instanceof ia)t=!1;else throw i}return e}async getGhostValues(){const e=this.bigTiff?16:8;if(this.ghostValues)return this.ghostValues;const t="GDAL_STRUCTURAL_METADATA_SIZE=",i=t.length+100;let n=await this.getSlice(e,i);if(t===Mr(n,Be.ASCII,t.length,e)){const a=Mr(n,Be.ASCII,i,e).split(`
`)[0],s=Number(a.split("=")[1].split(" ")[0])+a.length;s>i&&(n=await this.getSlice(e,s));const o=Mr(n,Be.ASCII,s,e);this.ghostValues={},o.split(`
`).filter(l=>l.length>0).map(l=>l.split("=")).forEach(([l,c])=>{this.ghostValues[l]=c})}return this.ghostValues}static async fromSource(e,t,i){const n=(await e.fetch([{offset:0,length:1024}],i))[0],a=new px(n),s=a.getUint16(0,0);let o;if(s===18761)o=!0;else if(s===19789)o=!1;else throw new TypeError("Invalid byte order value.");const l=a.getUint16(2,o);let c;if(l===42)c=!1;else if(l===43){if(c=!0,a.getUint16(4,o)!==8)throw new Error("Unsupported offset byte-size.")}else throw new TypeError("Invalid magic number.");const h=c?a.getUint64(8,o):a.getUint32(4,o);return new Vo(e,o,c,h,t)}close(){return typeof this.source.close=="function"?this.source.close():!1}}async function Mx(r,e){return Vo.fromSource(_x(r),e)}const wc=2*Math.PI*6378.137/2;function Ac(r,e){const t=e*wc/180,i=Math.log(Math.tan((90+r)*Math.PI/360))/(Math.PI/180);return{x:t,y:i*wc/180}}class Sx{constructor(e,t,i){Ae(this,"latitude"),Ae(this,"longitude"),Ae(this,"altitude"),this.latitude=e,this.longitude=t,this.altitude=i}}class Ex{constructor(e,t){Ae(this,"world"),Ae(this,"gps"),Ae(this,"scale"),Ae(this,"center"),this.world={x:0,y:0,z:0},this.gps=new Sx(e.latitude,e.longitude,e.altitude),this.scale=100,this.center={latitude:t[0],longitude:t[1]}}ComputeWorldCoordinate(){const e=Ac(this.gps.latitude,this.gps.longitude),t=Ac(this.center.latitude,this.center.longitude);return this.world.x=(t.x-e.x)*this.scale,this.world.y=(t.y-e.y)*this.scale,this.world.z=this.gps.altitude,this}}async function Tx(r){try{const e=await fetch(r).then(a=>a.blob()),t=await new Promise(a=>{const s=new Image;s.src=URL.createObjectURL(e),s.onload=()=>a(s)}),i=document.createElement("canvas"),n=i.getContext("2d");return i.width=t.width,i.height=t.height,n==null||n.drawImage(t,0,0),n==null?void 0:n.getImageData(0,0,t.width,t.height)}catch(e){throw console.log(e),new Error("une erreur est survenue getPng Pixel GReyModel")}}class Rc{constructor(e,t,i,n){Ae(this,"token"),Ae(this,"data"),Ae(this,"dataPng"),Ae(this,"watcher"),Ae(this,"terrainMat"),Ae(this,"terrainRasterBbox"),Ae(this,"center"),Ae(this,"source"),this.token=e,this.watcher=t,this.data=void 0,this.dataPng=void 0,this.terrainMat=new fn({color:"white",side:2,wireframe:!0}),this.terrainRasterBbox=[],this.center=i,this.source=n,console.log(n)}async fetchTIF(e){const t=await fetch(e).then(a=>{if(!a.ok)throw new Error(a.statusText);return a.arrayBuffer()}),i=await(await Mx(t)).getImage();this.terrainRasterBbox=i.getBoundingBox(),console.log(this.terrainRasterBbox);const n=await i.readRasters({interleave:!0});this.data=n,this.data&&this.build()}async fetchPNG(e){try{const t=await Tx(e);this.dataPng=t==null?void 0:t.data,this.dataPng&&this.build()}catch(t){throw console.log(t),new Error("Fecth png grey model failed")}}async build(){let e=[];this.data!==void 0?e=await this._build():this.dataPng!==void 0&&(e=await this._buildPng()),this.watcher({what:"grey-dem",data:e})}async _build(e=1){if(!this.data)throw new Error("Data is undefined");const t=this.data,{width:i,height:n}=t,a=new $i(1,1,i-1,n-1);new Array(a.attributes.position.count).fill(1).forEach((o,l)=>{a.attributes.position.setZ(l,t[l]/e)});const s=new Pt(a,this.terrainMat);return s.userData={isGrey:!0},s.receiveShadow=!0,[s]}async _buildPng(){var e,t;if(!this.dataPng)throw new Error("dataPng is undefined");const i=this.dataPng,n=512,a=512,s=new $i(n,a,n-1,a-1),o=s.attributes.position,l=this.source&&this.source.bbox?this.source.bbox[3]-this.source.bbox[1]:0,c=this.source&&this.source.bbox?this.source.bbox[2]-this.source.bbox[0]:0;console.log(i);for(let d=0;d<n;d++)for(let u=0;u<a;u++){const f=(d+u*n)*4,g=i[f]/255*50,_=((e=this.source)==null?void 0:e.bbox[1])+d/n*l,p=((t=this.source)==null?void 0:t.bbox[0])+u/a*c,m=new Ex({latitude:p,longitude:_,altitude:0},this.center).ComputeWorldCoordinate(),b=d+u*n;o.setXYZ(b,m.world.y,m.world.x,g)}const h=new Pt(s,this.terrainMat);return this.resolveTexture(d=>{d&&(h.material=new fn({side:ii,map:d,wireframe:!1}))}),h.userData={isRgb:!0},h.receiveShadow=!0,[h]}async resolveTexture(e){var t;const i=(t=this.source)==null?void 0:t.wmsrColorUrlBuilder(.02,"HR.ORTHOIMAGERY.ORTHOPHOTOS","EPSG:4326","normal"),n=await sn.fetchPngMap(i),a=new hh(n.data,n.shape[0],n.shape[1],Bt);a.flipY=!0,a.needsUpdate=!0,e&&e(a)}}class Kt{constructor(e){Ae(this,"unitsSide"),Ae(this,"isNode"),Ae(this,"apiVector"),Ae(this,"apiRgb"),Ae(this,"apiSatellite"),Ae(this,"tokenMapBox"),Ae(this,"tokenOpenTopo"),Ae(this,"source"),this.unitsSide=e.unitsSide,this.isNode=!1,this.apiVector="mapbox-terrain-vector",this.apiRgb="mapbox-terrain-rgb",this.apiSatellite="mapbox-satellite",this.tokenMapBox=e.tokenMapBox,this.tokenOpenTopo=e.tokenOpenTopo,this.source=e.source}addSource(e){this.source=e}async getTerrainRgb(e,t,i){const n=await this.getTerrain(e,t,i);return Kt.createDemGroups("dem-rgb",n)}getTerrain(e,t,i){return new Promise(async(n,a)=>{try{const s=this.createWatcher(n),o=this.unitsSide,l=Kt.getUnitsPerMeters(this.unitsSide,t),c=(p,m,b)=>Kt.projectCoord(o,p,m,b),{tokenMapBox:h,apiSatellite:d,apiRgb:u}=this,f=Kt.getBbox(e,t);console.log("ici hugogeobbox",f);const g=Kt.getZoomPositionCovered(f.feature,i),_=()=>{};new uv(l,c,h,d,u,s,_).fetch(g,f)}catch(s){console.log(s),a(s)}})}static createDemGroups(e,t){const i=new Zr;if(!t||t.length===0)return console.warn("No objects provided to createDemGroups"),i;for(let n=0;n<t.length;n++)t[n]instanceof Pt?(t[n].name=e,i.add(t[n])):console.warn(`Object at index ${n} is not a THREE.Mesh`);return i}static getUnitsPerMeters(e,t){return e/(t*2**.5*1e3)}static projectCoord(e,t,i,n){return[e*(-.5+(t[0]-i[0])/(n[0]-i[0])),e*(-.5-(t[1]-n[1])/(n[1]-i[1]))]}static getBbox(e,t){const i=[{type:"Feature",geometry:{properties:{},type:"Polygon",coordinates:[[]]}}][0],[n,a,s,o]=g0.originRadiusToBbox(e,t),l=[n,o],c=[s,a];return i.geometry.coordinates[0]=[l,[c[0],l[1]],c,[l[0],c[1]],l],{feature:i,northWest:l,southEast:c}}static getZoomPositionCovered(e,t){const i={min_zoom:t,max_zoom:t};return console.log(mn),mn.tiles(e.geometry,i).map(([n,a,s])=>[s,n,a])}createWatcher(e){let t=!0,i=!0;const n={value:[]},a=()=>!t||!i;return a()&&e(n.value),s=>{const{what:o,data:l}=s;o==="rgb-dem"&&(t=!1,n.value=l),o==="grey-dem"&&(i=!1,n.value=l),a()&&(console.log("watcher says all shit is done"),e(n.value))}}calculateBoundingBox(e,t){const i=t/111,n=t/(111*Math.cos(e.lat*(Math.PI/180))),a=e.lat+i,s=e.lat-i,o=e.lon+n,l=e.lon-n;return{north:a,south:s,est:o,west:l}}async getTerrainGrey(e,t){return new Promise(async(i,n)=>{try{const a=this.createWatcher(i);if(this.source&&this.source.format==="png"){if(await new Rc(this.tokenOpenTopo,a,e,this.source).fetchPNG(this.source.url)===void 0)throw new Error("Error mesh")}else{const s=this.calculateBoundingBox({lat:e[0],lon:e[1]},t);console.log(s);const o=sn.greyModelUrlBuilder(s,this.tokenOpenTopo);if(await new Rc(this.tokenOpenTopo,a,e,this.source).fetchTIF(o)===void 0)throw new Error("Error mesh")}}catch(a){n(a)}})}}class bx extends Ui{constructor(e){super(),Ae(this,"scene"),Ae(this,"camera"),Ae(this,"renderer"),Ae(this,"controls"),Ae(this,"container"),Ae(this,"light"),Ae(this,"layers"),this.scene=new E_,this.camera=new kt(75,window.innerWidth/window.innerHeight,.001,1e5),this.camera.position.z=5,this.camera.position.y=10,this.renderer=new S_({antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Ic,this.light=new n0(16777215,1),this.scene.add(new a0),this.light.position.set(0,10,20),this.light.castShadow=!0,this.light.shadow.camera.left=-50,this.light.shadow.camera.right=50,this.light.shadow.camera.top=50,this.light.shadow.camera.bottom=-50,this.light.shadow.camera.near=.5,this.light.shadow.camera.far=500,this.light.shadow.bias=-5e-4,this.light.shadow.mapSize.width=2048,this.light.shadow.mapSize.height=2048,this.layers=[];const t=new l0(this.light,1),i=()=>{this.controls.update(),this.renderer.render(this.scene,this.camera)};this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setAnimationLoop(i);const n=new c0(4);this.scene.add(n,this.light,t),this.controls=new Y0(this.camera,this.renderer.domElement),e.appendChild(this.renderer.domElement),this.container=e,window.addEventListener("resize",()=>{this.onResize()})}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}addLayer(...e){e.forEach(t=>{this.layers.push(t),this.scene.add(t)}),this.render()}removeLayer(){this.layers.forEach(e=>{this.scene.remove(e)}),this.layers=[],this.render()}render(){this.renderer.render(this.scene,this.camera)}}class wx{constructor(e,t,i,n,a,s){Ae(this,"data"),Ae(this,"buildingsArray"),Ae(this,"center"),Ae(this,"radius"),Ae(this,"unitsPerMeter"),Ae(this,"view"),Ae(this,"source"),Ae(this,"bbox"),Ae(this,"terrain"),this.data={},this.buildingsArray=[],this.center=e,this.radius=t,this.view=n,this.source=a,this.bbox=Kt.getBbox(e,t),this.unitsPerMeter=i,this.terrain=s.children}async getBuildings(e){if(!e)throw new Error("No url given!! getBuilding Function");return(await fetch(e).then(t=>{if(!t.ok)throw new Error(`Something happened maybe the url Given is not correct: ${t.status}`);return t.json()})).features}shortest(e,t){const i=t.geometry.getAttribute("position").array;let n=0,a=1e5;for(let s=0;s<i.length;s+=3){let o=Math.sqrt((e.x-i[s])**2+(e.z-i[s+1])**2);o<=a&&(a=o,n=i[s+2])}return n}async Building(){const e=new fn({color:"red",side:2,wireframe:!1}),t=this.source.url;console.log(t);const i=await this.getBuildings(t),n=[],a=[];for(let s=0;s<i.length;s++){//!pb a regler asynchrone toute les altitude ne sont pas calcuees du premier coup 
const o=i[s],l=o.properties.hauteur?o.properties.hauteur:.01,c=o.properties.altitude_minimale_sol/255*55,h=await this.addBuilding(o.geometry.coordinates,l,c);n.push(h)}for(let s=0;s<n.length;s++){const o=new Pt(n[s],e);o.castShadow=!0,o.receiveShadow=!0,a.push(o)}return Kt.createDemGroups("Buildings",a)}async addBuilding(e,t,i){const n=[];let a;for(let s=0;s<e.length;s++){const o=e[s];s===0?a=this.genShape(o):n.push(this.genShape(o))}if(a)for(let s=0;s<n.length;s++)a==null||a.holes.push(n[s]);else throw new Error("Shape was not init");return await this.genGeometry(a,{curveSegment:1,depth:-.5*t,bevelEnabled:!1,altitude:i})}genShape(e){const t=new gh;for(let i=0;i<e.length;i++)e[i].forEach((n,a)=>{const s=Kt.projectCoord(1e3,[n[0],n[1]],this.bbox.northWest,this.bbox.southEast);a===0?t.moveTo(s[1],s[0]):t.lineTo(s[1],s[0])});return t}async genGeometry(e,t){return new Promise(async i=>{await new Promise(s=>setTimeout(s,0));const n=new Ao(e,t);n.rotateX(Math.PI/2),n.rotateY(Math.PI/2),n.computeBoundingSphere();const a=await this.getAltitude(n);n.translate(0,a,0),i(n)})}async getAltitude(e){return new Promise(async t=>{var i;await new Promise(l=>setTimeout(l,0));const n=new s0,a=new C(0,1,0),s=5;let o=0;for(let l=0;l<this.terrain.length;l+=s){const c=this.terrain.slice(l,l+s);n.set((i=e.boundingSphere)==null?void 0:i.center,a);for(const h of c){const d=n.intersectObject(h);if(d.length>0){o=d[0].point.y;break}}}t(o)})}}class Ax{constructor(e,t,i){Ae(this,"center"),Ae(this,"radius"),Ae(this,"url"),Ae(this,"format"),Ae(this,"bbox"),this.radius=t,this.center=e,this.bbox=[0,0,0,0],this.format=i}generateBboxFromCenter(e,t,i,n){if(e==="EPSG:4326"){const a=t-n,s=t+n,o=i-n,l=i+n;return this.bbox=[a,o,s,l],[a,o,s,l]}else if(e==="EPSG:3857"){const a=u=>u*Math.PI/180,s=i*6378137*Math.PI/180,o=Math.log(Math.tan(Math.PI/4+a(t)/2))*6378137,l=s-n,c=s+n,h=o-n,d=o+n;return this.bbox=[l,h,c,d],[l,h,c,d]}else throw new Error(`CRS non supporté : ${e}`)}}class Rx extends Ax{constructor(e,t,i){super(e,t,""),Ae(this,"center"),Ae(this,"radius"),Ae(this,"layerName"),this.center=e,this.radius=.005,super.generateBboxFromCenter("EPSG:4326",...e,this.radius),this.layerName=i.layer,this.url=this.wfsUrlBuilder()}wfsUrlBuilder(){return`https://data.geopf.fr/wfs/ows?SERVICE=WFS&REQUEST=GetFeature&typeName=${this.layerName}&VERSION=2.0.0&SRSNAME=EPSG:4326&outputFormat=application/json&BBOX=${this.bbox[1]},${this.bbox[0]},${this.bbox[3]},${this.bbox[2]},EPSG:4326`}}class Cx{static getCurrentPosition(){return new Promise((e,t)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(e,t):t(new Error("Geolocation is not supported by this browser."))})}}const ha=1,Px=document.getElementById("viewerDiv"),Lx=new o0(60,150,new ke(5592405),new ke(3355443)),ln=new bx(Px);ln.addLayer(Lx);const Ux=new Kt({tokenMapBox:"pk.eyJ1IjoiZWwtb3NvIiwiYSI6ImNsbzRhbXhzcDAwMzMydXBoYmJxbW11ZjMifQ.fw-spr6aqF4LYqfNKiGw_w",tokenOpenTopo:"1beba77d1c58069e0c5b7ac410586699",unitsSide:1e3}),Ix=Kt.getUnitsPerMeters(1e3,ha);let Qr=[45.7736192,4.8398336];async function Zh(){const r=await Cx.getCurrentPosition(),{latitude:e,longitude:t}=r.coords;e&&t&&(Qr=[e,t]);const i=await Ux.getTerrainRgb(Qr,ha,18),n=new Rx(Qr,ha,{layer:"BDTOPO_V3:batiment"});i.rotation.x=-Math.PI/2,ln.addLayer(i);const a=await new wx(Qr,ha,Ix,ln,n,i).Building();ln.addLayer(a)}Zh();const Cc=document.getElementById("goButton"),Dx=document.getElementById("coordsInput");Cc==null||Cc.addEventListener("click",()=>{const r=Dx.value.split(",").map(Number);r.length===2&&!isNaN(r[0])&&!isNaN(r[1])?(ln.removeLayer(),Qr=[r[0],r[1]],Zh()):alert("not a valid center bitch!")});export{Xx as H,jx as k,Ro as w};
