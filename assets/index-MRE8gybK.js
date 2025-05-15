const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/raw-Dt1HMqYc.js","assets/basedecoder-DvumDe3Y.js","assets/lzw-DpvbRwG5.js","assets/jpeg-CdeCw_eT.js","assets/deflate-CUkHh1nh.js","assets/pako.esm-CPws4d4z.js","assets/packbits-DQnG8s9w.js","assets/lerc-CL43XwvN.js","assets/webimage-BcnuJlio.js"])))=>i.map(i=>d[i]);
var Nd=Object.defineProperty;var Wl=i=>{throw TypeError(i)};var Ud=(i,t,e)=>t in i?Nd(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;var lt=(i,t,e)=>Ud(i,typeof t!="symbol"?t+"":t,e),Xl=(i,t,e)=>t.has(i)||Wl("Cannot "+e);var Zt=(i,t,e)=>(Xl(i,t,"read from private field"),e?e.call(i):t.get(i)),mn=(i,t,e)=>t.has(i)?Wl("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(i):t.set(i,e),gn=(i,t,e,n)=>(Xl(i,t,"write to private field"),n?n.call(i,e):t.set(i,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vh="169",us={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Od=0,$l=1,Fd=2,ku=1,Hu=2,Oi=3,rn=0,$e=1,Si=2,en=0,fs=1,ql=2,Yl=3,jl=4,Bd=5,bn=100,zd=101,Gd=102,kd=103,Hd=104,Vd=200,Wd=201,Xd=202,$d=203,ko=204,Ho=205,qd=206,Yd=207,jd=208,Kd=209,Zd=210,Jd=211,Qd=212,tp=213,ep=214,Vo=0,Wo=1,Xo=2,ys=3,$o=4,qo=5,Yo=6,jo=7,Wh=0,ip=1,np=2,nn=0,sp=1,rp=2,ap=3,op=4,hp=5,lp=6,cp=7,Vu=300,Ss=301,Es=302,Ko=303,Zo=304,Na=306,Jo=1e3,wn=1001,Qo=1002,Xe=1003,up=1004,Cr=1005,di=1006,qa=1007,Tn=1008,ki=1009,Wu=1010,Xu=1011,rr=1012,Xh=1013,Rn=1014,zi=1015,vr=1016,$h=1017,qh=1018,bs=1020,$u=35902,qu=1021,Yu=1022,ei=1023,ju=1024,Ku=1025,ds=1026,As=1027,Zu=1028,Yh=1029,Ju=1030,jh=1031,Kh=1033,la=33776,ca=33777,ua=33778,fa=33779,th=35840,eh=35841,ih=35842,nh=35843,sh=36196,rh=37492,ah=37496,oh=37808,hh=37809,lh=37810,ch=37811,uh=37812,fh=37813,dh=37814,ph=37815,mh=37816,gh=37817,_h=37818,vh=37819,xh=37820,Mh=37821,da=36492,yh=36494,Sh=36495,Qu=36283,Eh=36284,bh=36285,Ah=36286,fp=3200,dp=3201,Zh=0,pp=1,Ji="",ui="srgb",cn="srgb-linear",Jh="display-p3",Ua="display-p3-linear",Ma="linear",he="srgb",ya="rec709",Sa="p3",zn=7680,Kl=519,mp=512,gp=513,_p=514,tf=515,vp=516,xp=517,Mp=518,yp=519,Zl=35044,Jl="300 es",Gi=2e3,Ea=2001;class un{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Re=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Ql=1234567;const qs=Math.PI/180,ar=180/Math.PI;function Un(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Re[i&255]+Re[i>>8&255]+Re[i>>16&255]+Re[i>>24&255]+"-"+Re[t&255]+Re[t>>8&255]+"-"+Re[t>>16&15|64]+Re[t>>24&255]+"-"+Re[e&63|128]+Re[e>>8&255]+"-"+Re[e>>16&255]+Re[e>>24&255]+Re[n&255]+Re[n>>8&255]+Re[n>>16&255]+Re[n>>24&255]).toLowerCase()}function Me(i,t,e){return Math.max(t,Math.min(e,i))}function Qh(i,t){return(i%t+t)%t}function Sp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Ep(i,t,e){return i!==t?(e-i)/(t-i):0}function Ys(i,t,e){return(1-e)*i+e*t}function bp(i,t,e,n){return Ys(i,t,1-Math.exp(-e*n))}function Ap(i,t=1){return t-Math.abs(Qh(i,t*2)-t)}function wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Tp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Cp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Rp(i,t){return i+Math.random()*(t-i)}function Pp(i){return i*(.5-Math.random())}function Lp(i){i!==void 0&&(Ql=i);let t=Ql+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Ip(i){return i*qs}function Dp(i){return i*ar}function Np(i){return(i&i-1)===0&&i!==0}function Up(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Op(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fp(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),h=a(e/2),l=r((t+n)/2),c=a((t+n)/2),u=r((t-n)/2),f=a((t-n)/2),p=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*c,h*u,h*f,o*l);break;case"YZY":i.set(h*f,o*c,h*u,o*l);break;case"ZXZ":i.set(h*u,h*f,o*c,o*l);break;case"XZX":i.set(o*c,h*g,h*p,o*l);break;case"YXY":i.set(h*p,o*c,h*g,o*l);break;case"ZYZ":i.set(h*g,h*p,o*c,o*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function es(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Bp={DEG2RAD:qs,RAD2DEG:ar,generateUUID:Un,clamp:Me,euclideanModulo:Qh,mapLinear:Sp,inverseLerp:Ep,lerp:Ys,damp:bp,pingpong:Ap,smoothstep:wp,smootherstep:Tp,randInt:Cp,randFloat:Rp,randFloatSpread:Pp,seededRandom:Lp,degToRad:Ip,radToDeg:Dp,isPowerOfTwo:Np,ceilPowerOfTwo:Up,floorPowerOfTwo:Op,setQuaternionFromProperEuler:Fp,normalize:De,denormalize:es};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qt{constructor(t,e,n,s,r,a,o,h,l){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,l)}set(t,e,n,s,r,a,o,h,l){const c=this.elements;return c[0]=t,c[1]=s,c[2]=o,c[3]=e,c[4]=r,c[5]=h,c[6]=n,c[7]=a,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],h=n[6],l=n[1],c=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],d=s[3],m=s[6],y=s[1],x=s[4],S=s[7],R=s[2],T=s[5],C=s[8];return r[0]=a*_+o*y+h*R,r[3]=a*d+o*x+h*T,r[6]=a*m+o*S+h*C,r[1]=l*_+c*y+u*R,r[4]=l*d+c*x+u*T,r[7]=l*m+c*S+u*C,r[2]=f*_+p*y+g*R,r[5]=f*d+p*x+g*T,r[8]=f*m+p*S+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8];return e*a*c-e*o*l-n*r*c+n*o*h+s*r*l-s*a*h}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],u=c*a-o*l,f=o*h-c*r,p=l*r-a*h,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*l-c*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(c*e-s*h)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*h-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const h=Math.cos(r),l=Math.sin(r);return this.set(n*h,n*l,-n*(h*a+l*o)+a+t,-s*l,s*h,-s*(-l*a+h*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(Ya.makeScale(t,e)),this}rotate(t){return this.premultiply(Ya.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ya.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new qt;function ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function or(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zp(){const i=or("canvas");return i.style.display="block",i}const tc={};function pa(i){i in tc||(tc[i]=!0,console.warn(i))}function Gp(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function kp(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Hp(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ec=new qt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ic=new qt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Us={[cn]:{transfer:Ma,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[ui]:{transfer:he,primaries:ya,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ua]:{transfer:Ma,primaries:Sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ic),fromReference:i=>i.applyMatrix3(ec)},[Jh]:{transfer:he,primaries:Sa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ic),fromReference:i=>i.applyMatrix3(ec).convertLinearToSRGB()}},Vp=new Set([cn,Ua]),ne={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Vp.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Us[t].toReference,s=Us[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Us[i].primaries},getTransfer:function(i){return i===Ji?Ma:Us[i].transfer},getLuminanceCoefficients:function(i,t=this._workingColorSpace){return i.fromArray(Us[t].luminanceCoefficients)}};function ps(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ja(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Gn;class Wp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Gn===void 0&&(Gn=or("canvas")),Gn.width=t.width,Gn.height=t.height;const n=Gn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Gn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=or("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=ps(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ps(e[n]/255)*255):e[n]=ps(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xp=0,nf=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xp++}),this.uuid=Un(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ka(s[a].image)):r.push(Ka(s[a]))}else r=Ka(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function Ka(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wp.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let $p=0;class Be extends un{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,n=wn,s=wn,r=di,a=Tn,o=ei,h=ki,l=Be.DEFAULT_ANISOTROPY,c=Ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:$p++}),this.uuid=Un(),this.name="",this.source=new nf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=h,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Jo:t.x=t.x-Math.floor(t.x);break;case wn:t.x=t.x<0?0:1;break;case Qo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Jo:t.y=t.y-Math.floor(t.y);break;case wn:t.y=t.y<0?0:1;break;case Qo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=Vu;Be.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,n=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const h=t.elements,l=h[0],c=h[4],u=h[8],f=h[1],p=h[5],g=h[9],_=h[2],d=h[6],m=h[10];if(Math.abs(c-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(c+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+d)<.1&&Math.abs(l+p+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const x=(l+1)/2,S=(p+1)/2,R=(m+1)/2,T=(c+f)/4,C=(u+_)/4,P=(g+d)/4;return x>S&&x>R?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=T/n,r=C/n):S>R?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=T/s,r=P/s):R<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(R),n=C/r,s=P/r),this.set(n,s,r,e),this}let y=Math.sqrt((d-g)*(d-g)+(u-_)*(u-_)+(f-c)*(f-c));return Math.abs(y)<.001&&(y=1),this.x=(d-g)/y,this.y=(u-_)/y,this.z=(f-c)/y,this.w=Math.acos((l+p+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class qp extends un{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:di,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Be(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pn extends qp{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sf extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Yp extends Be{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Xe,this.minFilter=Xe,this.wrapR=wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ln{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let h=n[s+0],l=n[s+1],c=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||h!==f||l!==p||c!==g){let d=1-o;const m=h*f+l*p+c*g+u*_,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const R=Math.sqrt(x),T=Math.atan2(R,m*y);d=Math.sin(d*T)/R,o=Math.sin(o*T)/R}const S=o*y;if(h=h*d+f*S,l=l*d+p*S,c=c*d+g*S,u=u*d+_*S,d===1-o){const R=1/Math.sqrt(h*h+l*l+c*c+u*u);h*=R,l*=R,c*=R,u*=R}}t[e]=h,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],h=n[s+1],l=n[s+2],c=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+c*u+h*p-l*f,t[e+1]=h*g+c*f+l*u-o*p,t[e+2]=l*g+c*p+o*f-h*u,t[e+3]=c*g-o*u-h*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,h=Math.sin,l=o(n/2),c=o(s/2),u=o(r/2),f=h(n/2),p=h(s/2),g=h(r/2);switch(a){case"XYZ":this._x=f*c*u+l*p*g,this._y=l*p*u-f*c*g,this._z=l*c*g+f*p*u,this._w=l*c*u-f*p*g;break;case"YXZ":this._x=f*c*u+l*p*g,this._y=l*p*u-f*c*g,this._z=l*c*g-f*p*u,this._w=l*c*u+f*p*g;break;case"ZXY":this._x=f*c*u-l*p*g,this._y=l*p*u+f*c*g,this._z=l*c*g+f*p*u,this._w=l*c*u-f*p*g;break;case"ZYX":this._x=f*c*u-l*p*g,this._y=l*p*u+f*c*g,this._z=l*c*g-f*p*u,this._w=l*c*u+f*p*g;break;case"YZX":this._x=f*c*u+l*p*g,this._y=l*p*u+f*c*g,this._z=l*c*g-f*p*u,this._w=l*c*u-f*p*g;break;case"XZY":this._x=f*c*u-l*p*g,this._y=l*p*u-f*c*g,this._z=l*c*g+f*p*u,this._w=l*c*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],h=e[9],l=e[2],c=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(c-h)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(c-h)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(h+c)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(h+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,h=e._y,l=e._z,c=e._w;return this._x=n*c+a*o+s*l-r*h,this._y=s*c+a*h+r*o-n*l,this._z=r*c+a*l+n*h-s*o,this._w=a*c-n*o-s*h-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const h=1-o*o;if(h<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const l=Math.sqrt(h),c=Math.atan2(l,o),u=Math.sin((1-e)*c)/l,f=Math.sin(e*c)/l;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(nc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(nc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,h=t.w,l=2*(a*s-o*n),c=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+h*l+a*u-o*c,this.y=n+h*c+o*l-r*u,this.z=s+h*u+r*c-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,h=e.z;return this.x=s*h-r*o,this.y=r*a-n*h,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Za.copy(this).projectOnVector(t),this.sub(Za)}reflect(t){return this.sub(Za.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Me(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Za=new L,nc=new Ln;class Ps{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,hi):hi.fromBufferAttribute(r,a),hi.applyMatrix4(t.matrixWorld),this.expandByPoint(hi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Rr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Rr.copy(n.boundingBox)),Rr.applyMatrix4(t.matrixWorld),this.union(Rr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hi),hi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),Pr.subVectors(this.max,Os),kn.subVectors(t.a,Os),Hn.subVectors(t.b,Os),Vn.subVectors(t.c,Os),Wi.subVectors(Hn,kn),Xi.subVectors(Vn,Hn),_n.subVectors(kn,Vn);let e=[0,-Wi.z,Wi.y,0,-Xi.z,Xi.y,0,-_n.z,_n.y,Wi.z,0,-Wi.x,Xi.z,0,-Xi.x,_n.z,0,-_n.x,-Wi.y,Wi.x,0,-Xi.y,Xi.x,0,-_n.y,_n.x,0];return!Ja(e,kn,Hn,Vn,Pr)||(e=[1,0,0,0,1,0,0,0,1],!Ja(e,kn,Hn,Vn,Pr))?!1:(Lr.crossVectors(Wi,Xi),e=[Lr.x,Lr.y,Lr.z],Ja(e,kn,Hn,Vn,Pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pi),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Pi=[new L,new L,new L,new L,new L,new L,new L,new L],hi=new L,Rr=new Ps,kn=new L,Hn=new L,Vn=new L,Wi=new L,Xi=new L,_n=new L,Os=new L,Pr=new L,Lr=new L,vn=new L;function Ja(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){vn.fromArray(i,r);const o=s.x*Math.abs(vn.x)+s.y*Math.abs(vn.y)+s.z*Math.abs(vn.z),h=t.dot(vn),l=e.dot(vn),c=n.dot(vn);if(Math.max(-Math.max(h,l,c),Math.min(h,l,c))>o)return!1}return!0}const jp=new Ps,Fs=new L,Qa=new L;class Oa{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):jp.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(Qa)),this.expandByPoint(Fs.copy(t.center).sub(Qa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new L,to=new L,Ir=new L,$i=new L,eo=new L,Dr=new L,io=new L;class Fa{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Li)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Li.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Li.copy(this.origin).addScaledVector(this.direction,e),Li.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){to.copy(t).add(e).multiplyScalar(.5),Ir.copy(e).sub(t).normalize(),$i.copy(this.origin).sub(to);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Ir),o=$i.dot(this.direction),h=-$i.dot(Ir),l=$i.lengthSq(),c=Math.abs(1-a*a);let u,f,p,g;if(c>0)if(u=a*h-o,f=a*o-h,g=r*c,u>=0)if(f>=-g)if(f<=g){const _=1/c;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*h)+l}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*h)+l;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*h)+l;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-h),r),p=-u*u+f*(f+2*h)+l):f<=g?(u=0,f=Math.min(Math.max(-r,-h),r),p=f*(f+2*h)+l):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-h),r),p=-u*u+f*(f+2*h)+l);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*h)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(to).addScaledVector(Ir,f),p}intersectSphere(t,e){Li.subVectors(t.center,this.origin);const n=Li.dot(this.direction),s=Li.dot(Li)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,h=n+a;return h<0?null:o<0?this.at(h,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,h;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),c>=0?(r=(t.min.y-f.y)*c,a=(t.max.y-f.y)*c):(r=(t.max.y-f.y)*c,a=(t.min.y-f.y)*c),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,h=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,h=(t.min.z-f.z)*u),n>h||o>s)||((o>n||n!==n)&&(n=o),(h<s||s!==s)&&(s=h),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,Li)!==null}intersectTriangle(t,e,n,s,r){eo.subVectors(e,t),Dr.subVectors(n,t),io.crossVectors(eo,Dr);let a=this.direction.dot(io),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;$i.subVectors(this.origin,t);const h=o*this.direction.dot(Dr.crossVectors($i,Dr));if(h<0)return null;const l=o*this.direction.dot(eo.cross($i));if(l<0||h+l>a)return null;const c=-o*$i.dot(io);return c<0?null:this.at(c/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class le{constructor(t,e,n,s,r,a,o,h,l,c,u,f,p,g,_,d){le.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,h,l,c,u,f,p,g,_,d)}set(t,e,n,s,r,a,o,h,l,c,u,f,p,g,_,d){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=h,m[2]=l,m[6]=c,m[10]=u,m[14]=f,m[3]=p,m[7]=g,m[11]=_,m[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new le().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Wn.setFromMatrixColumn(t,0).length(),r=1/Wn.setFromMatrixColumn(t,1).length(),a=1/Wn.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),h=Math.cos(s),l=Math.sin(s),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*c,p=a*u,g=o*c,_=o*u;e[0]=h*c,e[4]=-h*u,e[8]=l,e[1]=p+g*l,e[5]=f-_*l,e[9]=-o*h,e[2]=_-f*l,e[6]=g+p*l,e[10]=a*h}else if(t.order==="YXZ"){const f=h*c,p=h*u,g=l*c,_=l*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*l,e[1]=a*u,e[5]=a*c,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*h}else if(t.order==="ZXY"){const f=h*c,p=h*u,g=l*c,_=l*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*c,e[9]=_-f*o,e[2]=-a*l,e[6]=o,e[10]=a*h}else if(t.order==="ZYX"){const f=a*c,p=a*u,g=o*c,_=o*u;e[0]=h*c,e[4]=g*l-p,e[8]=f*l+_,e[1]=h*u,e[5]=_*l+f,e[9]=p*l-g,e[2]=-l,e[6]=o*h,e[10]=a*h}else if(t.order==="YZX"){const f=a*h,p=a*l,g=o*h,_=o*l;e[0]=h*c,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*c,e[9]=-o*c,e[2]=-l*c,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*h,p=a*l,g=o*h,_=o*l;e[0]=h*c,e[4]=-u,e[8]=l*c,e[1]=f*u+_,e[5]=a*c,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*c,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Kp,t,Zp)}lookAt(t,e,n){const s=this.elements;return Ze.subVectors(t,e),Ze.lengthSq()===0&&(Ze.z=1),Ze.normalize(),qi.crossVectors(n,Ze),qi.lengthSq()===0&&(Math.abs(n.z)===1?Ze.x+=1e-4:Ze.z+=1e-4,Ze.normalize(),qi.crossVectors(n,Ze)),qi.normalize(),Nr.crossVectors(Ze,qi),s[0]=qi.x,s[4]=Nr.x,s[8]=Ze.x,s[1]=qi.y,s[5]=Nr.y,s[9]=Ze.y,s[2]=qi.z,s[6]=Nr.z,s[10]=Ze.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],h=n[8],l=n[12],c=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],d=n[10],m=n[14],y=n[3],x=n[7],S=n[11],R=n[15],T=s[0],C=s[4],P=s[8],tt=s[12],v=s[1],E=s[5],W=s[9],z=s[13],k=s[2],K=s[6],B=s[10],nt=s[14],H=s[3],dt=s[7],pt=s[11],V=s[15];return r[0]=a*T+o*v+h*k+l*H,r[4]=a*C+o*E+h*K+l*dt,r[8]=a*P+o*W+h*B+l*pt,r[12]=a*tt+o*z+h*nt+l*V,r[1]=c*T+u*v+f*k+p*H,r[5]=c*C+u*E+f*K+p*dt,r[9]=c*P+u*W+f*B+p*pt,r[13]=c*tt+u*z+f*nt+p*V,r[2]=g*T+_*v+d*k+m*H,r[6]=g*C+_*E+d*K+m*dt,r[10]=g*P+_*W+d*B+m*pt,r[14]=g*tt+_*z+d*nt+m*V,r[3]=y*T+x*v+S*k+R*H,r[7]=y*C+x*E+S*K+R*dt,r[11]=y*P+x*W+S*B+R*pt,r[15]=y*tt+x*z+S*nt+R*V,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],h=t[9],l=t[13],c=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],d=t[11],m=t[15];return g*(+r*h*u-s*l*u-r*o*f+n*l*f+s*o*p-n*h*p)+_*(+e*h*p-e*l*f+r*a*f-s*a*p+s*l*c-r*h*c)+d*(+e*l*u-e*o*p-r*a*u+n*a*p+r*o*c-n*l*c)+m*(-s*o*c-e*h*u+e*o*f+s*a*u-n*a*f+n*h*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],h=t[6],l=t[7],c=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],d=t[14],m=t[15],y=u*d*l-_*f*l+_*h*p-o*d*p-u*h*m+o*f*m,x=g*f*l-c*d*l-g*h*p+a*d*p+c*h*m-a*f*m,S=c*_*l-g*u*l+g*o*p-a*_*p-c*o*m+a*u*m,R=g*u*h-c*_*h-g*o*f+a*_*f+c*o*d-a*u*d,T=e*y+n*x+s*S+r*R;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=y*C,t[1]=(_*f*r-u*d*r-_*s*p+n*d*p+u*s*m-n*f*m)*C,t[2]=(o*d*r-_*h*r+_*s*l-n*d*l-o*s*m+n*h*m)*C,t[3]=(u*h*r-o*f*r-u*s*l+n*f*l+o*s*p-n*h*p)*C,t[4]=x*C,t[5]=(c*d*r-g*f*r+g*s*p-e*d*p-c*s*m+e*f*m)*C,t[6]=(g*h*r-a*d*r-g*s*l+e*d*l+a*s*m-e*h*m)*C,t[7]=(a*f*r-c*h*r+c*s*l-e*f*l-a*s*p+e*h*p)*C,t[8]=S*C,t[9]=(g*u*r-c*_*r-g*n*p+e*_*p+c*n*m-e*u*m)*C,t[10]=(a*_*r-g*o*r+g*n*l-e*_*l-a*n*m+e*o*m)*C,t[11]=(c*o*r-a*u*r-c*n*l+e*u*l+a*n*p-e*o*p)*C,t[12]=R*C,t[13]=(c*_*s-g*u*s+g*n*f-e*_*f-c*n*d+e*u*d)*C,t[14]=(g*o*s-a*_*s-g*n*h+e*_*h+a*n*d-e*o*d)*C,t[15]=(a*u*s-c*o*s+c*n*h-e*u*h-a*n*f+e*o*f)*C,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,h=t.z,l=r*a,c=r*o;return this.set(l*a+n,l*o-s*h,l*h+s*o,0,l*o+s*h,c*o+n,c*h-s*a,0,l*h-s*o,c*h+s*a,r*h*h+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,h=e._w,l=r+r,c=a+a,u=o+o,f=r*l,p=r*c,g=r*u,_=a*c,d=a*u,m=o*u,y=h*l,x=h*c,S=h*u,R=n.x,T=n.y,C=n.z;return s[0]=(1-(_+m))*R,s[1]=(p+S)*R,s[2]=(g-x)*R,s[3]=0,s[4]=(p-S)*T,s[5]=(1-(f+m))*T,s[6]=(d+y)*T,s[7]=0,s[8]=(g+x)*C,s[9]=(d-y)*C,s[10]=(1-(f+_))*C,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Wn.set(s[0],s[1],s[2]).length();const a=Wn.set(s[4],s[5],s[6]).length(),o=Wn.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],li.copy(this);const l=1/r,c=1/a,u=1/o;return li.elements[0]*=l,li.elements[1]*=l,li.elements[2]*=l,li.elements[4]*=c,li.elements[5]*=c,li.elements[6]*=c,li.elements[8]*=u,li.elements[9]*=u,li.elements[10]*=u,e.setFromRotationMatrix(li),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Gi){const h=this.elements,l=2*r/(e-t),c=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===Gi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ea)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return h[0]=l,h[4]=0,h[8]=u,h[12]=0,h[1]=0,h[5]=c,h[9]=f,h[13]=0,h[2]=0,h[6]=0,h[10]=p,h[14]=g,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Gi){const h=this.elements,l=1/(e-t),c=1/(n-s),u=1/(a-r),f=(e+t)*l,p=(n+s)*c;let g,_;if(o===Gi)g=(a+r)*u,_=-2*u;else if(o===Ea)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return h[0]=2*l,h[4]=0,h[8]=0,h[12]=-f,h[1]=0,h[5]=2*c,h[9]=0,h[13]=-p,h[2]=0,h[6]=0,h[10]=_,h[14]=-g,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Wn=new L,li=new le,Kp=new L(0,0,0),Zp=new L(1,1,1),qi=new L,Nr=new L,Ze=new L,sc=new le,rc=new Ln;class gi{constructor(t=0,e=0,n=0,s=gi.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],h=s[1],l=s[5],c=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(h,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(h,r));break;case"ZYX":this._y=Math.asin(-Me(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(h,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Me(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return rc.setFromEuler(this),this.setFromQuaternion(rc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}gi.DEFAULT_ORDER="XYZ";class tl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jp=0;const ac=new L,Xn=new Ln,Ii=new le,Ur=new L,Bs=new L,Qp=new L,tm=new Ln,oc=new L(1,0,0),hc=new L(0,1,0),lc=new L(0,0,1),cc={type:"added"},em={type:"removed"},$n={type:"childadded",child:null},no={type:"childremoved",child:null};class Te extends un{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jp++}),this.uuid=Un(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Te.DEFAULT_UP.clone();const t=new L,e=new gi,n=new Ln,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new le},normalMatrix:{value:new qt}}),this.matrix=new le,this.matrixWorld=new le,this.matrixAutoUpdate=Te.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.multiply(Xn),this}rotateOnWorldAxis(t,e){return Xn.setFromAxisAngle(t,e),this.quaternion.premultiply(Xn),this}rotateX(t){return this.rotateOnAxis(oc,t)}rotateY(t){return this.rotateOnAxis(hc,t)}rotateZ(t){return this.rotateOnAxis(lc,t)}translateOnAxis(t,e){return ac.copy(t).applyQuaternion(this.quaternion),this.position.add(ac.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(oc,t)}translateY(t){return this.translateOnAxis(hc,t)}translateZ(t){return this.translateOnAxis(lc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ur.copy(t):Ur.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Bs,Ur,this.up):Ii.lookAt(Ur,Bs,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),Xn.setFromRotationMatrix(Ii),this.quaternion.premultiply(Xn.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cc),$n.child=t,this.dispatchEvent($n),$n.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(em),no.child=t,this.dispatchEvent(no),no.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ii.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ii),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cc),$n.child=t,this.dispatchEvent($n),$n.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Qp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,tm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,h){return o[h.uuid]===void 0&&(o[h.uuid]=h.toJSON(t)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const h=o.shapes;if(Array.isArray(h))for(let l=0,c=h.length;l<c;l++){const u=h[l];r(t.shapes,u)}else r(t.shapes,h)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let h=0,l=this.material.length;h<l;h++)o.push(r(t.materials,this.material[h]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const h=this.animations[o];s.animations.push(r(t.animations,h))}}if(e){const o=a(t.geometries),h=a(t.materials),l=a(t.textures),c=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),h.length>0&&(n.materials=h),l.length>0&&(n.textures=l),c.length>0&&(n.images=c),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const h=[];for(const l in o){const c=o[l];delete c.metadata,h.push(c)}return h}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Te.DEFAULT_UP=new L(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new L,Di=new L,so=new L,Ni=new L,qn=new L,Yn=new L,uc=new L,ro=new L,ao=new L,oo=new L,ho=new de,lo=new de,co=new de;class pi{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),ci.subVectors(t,e),s.cross(ci);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){ci.subVectors(s,e),Di.subVectors(n,e),so.subVectors(t,e);const a=ci.dot(ci),o=ci.dot(Di),h=ci.dot(so),l=Di.dot(Di),c=Di.dot(so),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(l*h-o*c)*f,g=(a*c-o*h)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Ni)===null?!1:Ni.x>=0&&Ni.y>=0&&Ni.x+Ni.y<=1}static getInterpolation(t,e,n,s,r,a,o,h){return this.getBarycoord(t,e,n,s,Ni)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(r,Ni.x),h.addScaledVector(a,Ni.y),h.addScaledVector(o,Ni.z),h)}static getInterpolatedAttribute(t,e,n,s,r,a){return ho.setScalar(0),lo.setScalar(0),co.setScalar(0),ho.fromBufferAttribute(t,e),lo.fromBufferAttribute(t,n),co.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ho,r.x),a.addScaledVector(lo,r.y),a.addScaledVector(co,r.z),a}static isFrontFacing(t,e,n,s){return ci.subVectors(n,e),Di.subVectors(t,e),ci.cross(Di).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ci.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ci.cross(Di).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return pi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return pi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return pi.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return pi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return pi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;qn.subVectors(s,n),Yn.subVectors(r,n),ro.subVectors(t,n);const h=qn.dot(ro),l=Yn.dot(ro);if(h<=0&&l<=0)return e.copy(n);ao.subVectors(t,s);const c=qn.dot(ao),u=Yn.dot(ao);if(c>=0&&u<=c)return e.copy(s);const f=h*u-c*l;if(f<=0&&h>=0&&c<=0)return a=h/(h-c),e.copy(n).addScaledVector(qn,a);oo.subVectors(t,r);const p=qn.dot(oo),g=Yn.dot(oo);if(g>=0&&p<=g)return e.copy(r);const _=p*l-h*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(Yn,o);const d=c*g-p*u;if(d<=0&&u-c>=0&&p-g>=0)return uc.subVectors(r,s),o=(u-c)/(u-c+(p-g)),e.copy(s).addScaledVector(uc,o);const m=1/(d+_+f);return a=_*m,o=f*m,e.copy(n).addScaledVector(qn,a).addScaledVector(Yn,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},Or={h:0,s:0,l:0};function uo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Xt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ui){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=n,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ne.workingColorSpace){if(t=Qh(t,1),e=Me(e,0,1),n=Me(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=uo(a,r,t+1/3),this.g=uo(a,r,t),this.b=uo(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=ui){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ui){const n=rf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ps(t.r),this.g=ps(t.g),this.b=ps(t.b),this}copyLinearToSRGB(t){return this.r=ja(t.r),this.g=ja(t.g),this.b=ja(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ui){return ne.fromWorkingColorSpace(Pe.copy(this),t),Math.round(Me(Pe.r*255,0,255))*65536+Math.round(Me(Pe.g*255,0,255))*256+Math.round(Me(Pe.b*255,0,255))}getHexString(t=ui){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(Pe.copy(this),e);const n=Pe.r,s=Pe.g,r=Pe.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let h,l;const c=(o+a)/2;if(o===a)h=0,l=0;else{const u=a-o;switch(l=c<=.5?u/(a+o):u/(2-a-o),a){case n:h=(s-r)/u+(s<r?6:0);break;case s:h=(r-n)/u+2;break;case r:h=(n-s)/u+4;break}h/=6}return t.h=h,t.s=l,t.l=c,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(Pe.copy(this),e),t.r=Pe.r,t.g=Pe.g,t.b=Pe.b,t}getStyle(t=ui){ne.fromWorkingColorSpace(Pe.copy(this),t);const e=Pe.r,n=Pe.g,s=Pe.b;return t!==ui?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Yi),this.setHSL(Yi.h+t,Yi.s+e,Yi.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yi),t.getHSL(Or);const n=Ys(Yi.h,Or.h,e),s=Ys(Yi.s,Or.s,e),r=Ys(Yi.l,Or.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pe=new Xt;Xt.NAMES=rf;let im=0;class On extends un{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Un(),this.name="",this.type="Material",this.blending=fs,this.side=rn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ko,this.blendDst=Ho,this.blendEquation=bn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=zn,this.stencilZFail=zn,this.stencilZPass=zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==fs&&(n.blending=this.blending),this.side!==rn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ko&&(n.blendSrc=this.blendSrc),this.blendDst!==Ho&&(n.blendDst=this.blendDst),this.blendEquation!==bn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ys&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const h=r[o];delete h.metadata,a.push(h)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class el extends On{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ve=new L,Fr=new ut;class bi{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zl,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Fr.fromBufferAttribute(this,e),Fr.applyMatrix3(t),this.setXY(e,Fr.x,Fr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix3(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyMatrix4(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.applyNormalMatrix(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ve.fromBufferAttribute(this,e),ve.transformDirection(t),this.setXYZ(e,ve.x,ve.y,ve.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=es(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=es(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=es(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=es(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=es(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}}class af extends bi{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class of extends bi{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends bi{constructor(t,e,n){super(new Float32Array(t),e,n)}}let nm=0;const ni=new le,fo=new Te,jn=new L,Je=new Ps,zs=new Ps,be=new L;class ai extends un{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Un(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?of:af)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new qt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ni.makeRotationFromQuaternion(t),this.applyMatrix4(ni),this}rotateX(t){return ni.makeRotationX(t),this.applyMatrix4(ni),this}rotateY(t){return ni.makeRotationY(t),this.applyMatrix4(ni),this}rotateZ(t){return ni.makeRotationZ(t),this.applyMatrix4(ni),this}translate(t,e,n){return ni.makeTranslation(t,e,n),this.applyMatrix4(ni),this}scale(t,e,n){return ni.makeScale(t,e,n),this.applyMatrix4(ni),this}lookAt(t){return fo.lookAt(t),fo.updateMatrix(),this.applyMatrix4(fo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jn).negate(),this.translate(jn.x,jn.y,jn.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ps);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Je.setFromBufferAttribute(r),this.morphTargetsRelative?(be.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(be),be.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(be)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Oa);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];zs.setFromBufferAttribute(o),this.morphTargetsRelative?(be.addVectors(Je.min,zs.min),Je.expandByPoint(be),be.addVectors(Je.max,zs.max),Je.expandByPoint(be)):(Je.expandByPoint(zs.min),Je.expandByPoint(zs.max))}Je.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)be.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(be));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],h=this.morphTargetsRelative;for(let l=0,c=o.count;l<c;l++)be.fromBufferAttribute(o,l),h&&(jn.fromBufferAttribute(t,l),be.add(jn)),s=Math.max(s,n.distanceToSquared(be))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bi(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],h=[];for(let P=0;P<n.count;P++)o[P]=new L,h[P]=new L;const l=new L,c=new L,u=new L,f=new ut,p=new ut,g=new ut,_=new L,d=new L;function m(P,tt,v){l.fromBufferAttribute(n,P),c.fromBufferAttribute(n,tt),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,tt),g.fromBufferAttribute(r,v),c.sub(l),u.sub(l),p.sub(f),g.sub(f);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(_.copy(c).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(E),d.copy(u).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(E),o[P].add(_),o[tt].add(_),o[v].add(_),h[P].add(d),h[tt].add(d),h[v].add(d))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let P=0,tt=y.length;P<tt;++P){const v=y[P],E=v.start,W=v.count;for(let z=E,k=E+W;z<k;z+=3)m(t.getX(z+0),t.getX(z+1),t.getX(z+2))}const x=new L,S=new L,R=new L,T=new L;function C(P){R.fromBufferAttribute(s,P),T.copy(R);const tt=o[P];x.copy(tt),x.sub(R.multiplyScalar(R.dot(tt))).normalize(),S.crossVectors(T,tt);const E=S.dot(h[P])<0?-1:1;a.setXYZW(P,x.x,x.y,x.z,E)}for(let P=0,tt=y.length;P<tt;++P){const v=y[P],E=v.start,W=v.count;for(let z=E,k=E+W;z<k;z+=3)C(t.getX(z+0)),C(t.getX(z+1)),C(t.getX(z+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new bi(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,a=new L,o=new L,h=new L,l=new L,c=new L,u=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),d=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),o.fromBufferAttribute(n,g),h.fromBufferAttribute(n,_),l.fromBufferAttribute(n,d),o.add(c),h.add(c),l.add(c),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,h.x,h.y,h.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),c.subVectors(a,r),u.subVectors(s,r),c.cross(u),n.setXYZ(f+0,c.x,c.y,c.z),n.setXYZ(f+1,c.x,c.y,c.z),n.setXYZ(f+2,c.x,c.y,c.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)be.fromBufferAttribute(t,e),be.normalize(),t.setXYZ(e,be.x,be.y,be.z)}toNonIndexed(){function t(o,h){const l=o.array,c=o.itemSize,u=o.normalized,f=new l.constructor(h.length*c);let p=0,g=0;for(let _=0,d=h.length;_<d;_++){o.isInterleavedBufferAttribute?p=h[_]*o.data.stride+o.offset:p=h[_]*c;for(let m=0;m<c;m++)f[g++]=l[p++]}return new bi(f,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ai,n=this.index.array,s=this.attributes;for(const o in s){const h=s[o],l=t(h,n);e.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const h=[],l=r[o];for(let c=0,u=l.length;c<u;c++){const f=l[c],p=t(f,n);h.push(p)}e.morphAttributes[o]=h}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,h=a.length;o<h;o++){const l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const l in h)h[l]!==void 0&&(t[l]=h[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const h in n){const l=n[h];t.data.attributes[h]=l.toJSON(t.data)}const s={};let r=!1;for(const h in this.morphAttributes){const l=this.morphAttributes[h],c=[];for(let u=0,f=l.length;u<f;u++){const p=l[u];c.push(p.toJSON(t.data))}c.length>0&&(s[h]=c,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const l in s){const c=s[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],u=r[l];for(let f=0,p=u.length;f<p;f++)c.push(u[f].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let l=0,c=a.length;l<c;l++){const u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const h=t.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const fc=new le,xn=new Fa,Br=new Oa,dc=new L,zr=new L,Gr=new L,kr=new L,po=new L,Hr=new L,pc=new L,Vr=new L;class Ie extends Te{constructor(t=new ai,e=new el){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){Hr.set(0,0,0);for(let h=0,l=r.length;h<l;h++){const c=o[h],u=r[h];c!==0&&(po.fromBufferAttribute(u,t),a?Hr.addScaledVector(po,c):Hr.addScaledVector(po.sub(e),c))}e.add(Hr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),xn.copy(t.ray).recast(t.near),!(Br.containsPoint(xn.origin)===!1&&(xn.intersectSphere(Br,dc)===null||xn.origin.distanceToSquared(dc)>(t.far-t.near)**2))&&(fc.copy(r).invert(),xn.copy(t.ray).applyMatrix4(fc),!(n.boundingBox!==null&&xn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,h=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=a[d.materialIndex],y=Math.max(d.start,p.start),x=Math.min(o.count,Math.min(d.start+d.count,p.start+p.count));for(let S=y,R=x;S<R;S+=3){const T=o.getX(S),C=o.getX(S+1),P=o.getX(S+2);s=Wr(this,m,t,n,l,c,u,T,C,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const y=o.getX(d),x=o.getX(d+1),S=o.getX(d+2);s=Wr(this,a,t,n,l,c,u,y,x,S),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(h!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const d=f[g],m=a[d.materialIndex],y=Math.max(d.start,p.start),x=Math.min(h.count,Math.min(d.start+d.count,p.start+p.count));for(let S=y,R=x;S<R;S+=3){const T=S,C=S+1,P=S+2;s=Wr(this,m,t,n,l,c,u,T,C,P),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(h.count,p.start+p.count);for(let d=g,m=_;d<m;d+=3){const y=d,x=d+1,S=d+2;s=Wr(this,a,t,n,l,c,u,y,x,S),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function sm(i,t,e,n,s,r,a,o){let h;if(t.side===$e?h=n.intersectTriangle(a,r,s,!0,o):h=n.intersectTriangle(s,r,a,t.side===rn,o),h===null)return null;Vr.copy(o),Vr.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Vr);return l<e.near||l>e.far?null:{distance:l,point:Vr.clone(),object:i}}function Wr(i,t,e,n,s,r,a,o,h,l){i.getVertexPosition(o,zr),i.getVertexPosition(h,Gr),i.getVertexPosition(l,kr);const c=sm(i,t,e,n,zr,Gr,kr,pc);if(c){const u=new L;pi.getBarycoord(pc,zr,Gr,kr,u),s&&(c.uv=pi.getInterpolatedAttribute(s,o,h,l,u,new ut)),r&&(c.uv1=pi.getInterpolatedAttribute(r,o,h,l,u,new ut)),a&&(c.normal=pi.getInterpolatedAttribute(a,o,h,l,u,new L),c.normal.dot(n.direction)>0&&c.normal.multiplyScalar(-1));const f={a:o,b:h,c:l,normal:new L,materialIndex:0};pi.getNormal(zr,Gr,kr,f.normal),c.face=f,c.barycoord=u}return c}class xr extends ai{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const h=[],l=[],c=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(h),this.setAttribute("position",new ye(l,3)),this.setAttribute("normal",new ye(c,3)),this.setAttribute("uv",new ye(u,2));function g(_,d,m,y,x,S,R,T,C,P,tt){const v=S/C,E=R/P,W=S/2,z=R/2,k=T/2,K=C+1,B=P+1;let nt=0,H=0;const dt=new L;for(let pt=0;pt<B;pt++){const V=pt*E-z;for(let ct=0;ct<K;ct++){const mt=ct*v-W;dt[_]=mt*y,dt[d]=V*x,dt[m]=k,l.push(dt.x,dt.y,dt.z),dt[_]=0,dt[d]=0,dt[m]=T>0?1:-1,c.push(dt.x,dt.y,dt.z),u.push(ct/C),u.push(1-pt/P),nt+=1}}for(let pt=0;pt<P;pt++)for(let V=0;V<C;V++){const ct=f+V+K*pt,mt=f+V+K*(pt+1),G=f+(V+1)+K*(pt+1),$=f+(V+1)+K*pt;h.push(ct,mt,$),h.push(mt,G,$),H+=6}o.addGroup(p,H,tt),p+=H,f+=nt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new xr(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=ws(i[e]);for(const s in n)t[s]=n[s]}return t}function rm(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function hf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const am={clone:ws,merge:Ne};var om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class an extends On{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=om,this.fragmentShader=hm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ws(t.uniforms),this.uniformsGroups=rm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class lf extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new le,this.projectionMatrix=new le,this.projectionMatrixInverse=new le,this.coordinateSystem=Gi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ji=new L,mc=new ut,gc=new ut;class ri extends lf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=ar*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(qs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ar*2*Math.atan(Math.tan(qs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ji.x,ji.y).multiplyScalar(-t/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-t/ji.z)}getViewSize(t,e){return this.getViewBounds(t,mc,gc),e.subVectors(gc,mc)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(qs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const h=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/h,e-=a.offsetY*n/l,s*=a.width/h,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Kn=-90,Zn=1;class lm extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new ri(Kn,Zn,t,e);s.layers=this.layers,this.add(s);const r=new ri(Kn,Zn,t,e);r.layers=this.layers,this.add(r);const a=new ri(Kn,Zn,t,e);a.layers=this.layers,this.add(a);const o=new ri(Kn,Zn,t,e);o.layers=this.layers,this.add(o);const h=new ri(Kn,Zn,t,e);h.layers=this.layers,this.add(h);const l=new ri(Kn,Zn,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,h]=e;for(const l of e)this.remove(l);if(t===Gi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(t===Ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,h,l,c]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,h),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,c),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class il extends Be{constructor(t,e,n,s,r,a,o,h,l,c){t=t!==void 0?t:[],e=e!==void 0?e:Ss,super(t,e,n,s,r,a,o,h,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class cm extends Pn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new il(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:di}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new xr(5,5,5),r=new an({name:"CubemapFromEquirect",uniforms:ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:$e,blending:en});r.uniforms.tEquirect.value=e;const a=new Ie(s,r),o=e.minFilter;return e.minFilter===Tn&&(e.minFilter=di),new lm(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const mo=new L,um=new L,fm=new qt;class Zi{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=mo.subVectors(n,e).cross(um.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(mo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||fm.getNormalMatrix(t),s=this.coplanarPoint(mo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Mn=new Oa,Xr=new L;class nl{constructor(t=new Zi,e=new Zi,n=new Zi,s=new Zi,r=new Zi,a=new Zi){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Gi){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],h=s[3],l=s[4],c=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],d=s[11],m=s[12],y=s[13],x=s[14],S=s[15];if(n[0].setComponents(h-r,f-l,d-p,S-m).normalize(),n[1].setComponents(h+r,f+l,d+p,S+m).normalize(),n[2].setComponents(h+a,f+c,d+g,S+y).normalize(),n[3].setComponents(h-a,f-c,d-g,S-y).normalize(),n[4].setComponents(h-o,f-u,d-_,S-x).normalize(),e===Gi)n[5].setComponents(h+o,f+u,d+_,S+x).normalize();else if(e===Ea)n[5].setComponents(o,u,_,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Mn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Mn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Mn)}intersectsSprite(t){return Mn.center.set(0,0,0),Mn.radius=.7071067811865476,Mn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Mn)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Xr.x=s.normal.x>0?t.max.x:t.min.x,Xr.y=s.normal.y>0?t.max.y:t.min.y,Xr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function cf(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function dm(i){const t=new WeakMap;function e(o,h){const l=o.array,c=o.usage,u=l.byteLength,f=i.createBuffer();i.bindBuffer(h,f),i.bufferData(h,l,c),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,h,l){const c=h.array,u=h.updateRanges;if(i.bindBuffer(l,o),u.length===0)i.bufferSubData(l,0,c);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(l,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}h.clearUpdateRanges()}h.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const h=t.get(o);h&&(i.deleteBuffer(h.buffer),t.delete(o))}function a(o,h){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const c=t.get(o);(!c||c.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=t.get(o);if(l===void 0)t.set(o,e(o,h));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,h),l.version=o.version}}return{get:s,remove:r,update:a}}class on extends ai{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),h=Math.floor(s),l=o+1,c=h+1,u=t/o,f=e/h,p=[],g=[],_=[],d=[];for(let m=0;m<c;m++){const y=m*f-a;for(let x=0;x<l;x++){const S=x*u-r;g.push(S,-y,0),_.push(0,0,1),d.push(x/o),d.push(1-m/h)}}for(let m=0;m<h;m++)for(let y=0;y<o;y++){const x=y+l*m,S=y+l*(m+1),R=y+1+l*(m+1),T=y+1+l*m;p.push(x,S,T),p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new on(t.width,t.height,t.widthSegments,t.heightSegments)}}var pm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,mm=`#ifdef USE_ALPHAHASH
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
#endif`,gm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_m=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Mm=`#ifdef USE_AOMAP
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
#endif`,ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sm=`#ifdef USE_BATCHING
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
#endif`,Em=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Am=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Tm=`#ifdef USE_IRIDESCENCE
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
#endif`,Cm=`#ifdef USE_BUMPMAP
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
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Pm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Im=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Nm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Um=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Om=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Fm=`#define PI 3.141592653589793
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
} // validated`,Bm=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,zm=`vec3 transformedNormal = objectNormal;
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
#endif`,Gm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xm=`
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
}`,$m=`#ifdef USE_ENVMAP
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
#endif`,qm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Ym=`#ifdef USE_ENVMAP
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
#endif`,jm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Km=`#ifdef USE_ENVMAP
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
#endif`,Zm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,t0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,e0=`#ifdef USE_GRADIENTMAP
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
}`,i0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,s0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#endif`,a0=`#ifdef USE_ENVMAP
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,f0=`struct PhysicalMaterial {
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
}`,d0=`
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
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
#endif`,m0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,g0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,M0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,E0=`#if defined( USE_POINTS_UV )
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
#endif`,b0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,A0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,w0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,T0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,C0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,L0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,I0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,U0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,B0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,z0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,G0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,k0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,H0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,V0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,W0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,X0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Y0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,j0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,K0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,J0=`float getShadowMask() {
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
}`,Q0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tg=`#ifdef USE_SKINNING
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
#endif`,eg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ig=`#ifdef USE_SKINNING
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
#endif`,ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ag=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,og=`#ifdef USE_TRANSMISSION
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
#endif`,hg=`#ifdef USE_TRANSMISSION
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
#endif`,lg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,cg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,fg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pg=`uniform sampler2D t2D;
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
}`,mg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,_g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,vg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xg=`#include <common>
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
}`,Mg=`#if DEPTH_PACKING == 3200
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
}`,yg=`#define DISTANCE
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
}`,Sg=`#define DISTANCE
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
}`,Eg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ag=`uniform float scale;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Tg=`#include <common>
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
}`,Cg=`uniform vec3 diffuse;
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
}`,Rg=`#define LAMBERT
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
}`,Pg=`#define LAMBERT
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
}`,Lg=`#define MATCAP
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
}`,Ig=`#define MATCAP
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
}`,Dg=`#define NORMAL
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
}`,Ng=`#define NORMAL
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
}`,Ug=`#define PHONG
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
}`,Og=`#define PHONG
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
}`,Fg=`#define STANDARD
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
}`,Bg=`#define STANDARD
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
}`,zg=`#define TOON
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
}`,Gg=`#define TOON
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
}`,kg=`uniform float size;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#include <common>
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
}`,Wg=`uniform vec3 color;
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
}`,Xg=`uniform float rotation;
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
}`,$g=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:pm,alphahash_pars_fragment:mm,alphamap_fragment:gm,alphamap_pars_fragment:_m,alphatest_fragment:vm,alphatest_pars_fragment:xm,aomap_fragment:Mm,aomap_pars_fragment:ym,batching_pars_vertex:Sm,batching_vertex:Em,begin_vertex:bm,beginnormal_vertex:Am,bsdfs:wm,iridescence_fragment:Tm,bumpmap_pars_fragment:Cm,clipping_planes_fragment:Rm,clipping_planes_pars_fragment:Pm,clipping_planes_pars_vertex:Lm,clipping_planes_vertex:Im,color_fragment:Dm,color_pars_fragment:Nm,color_pars_vertex:Um,color_vertex:Om,common:Fm,cube_uv_reflection_fragment:Bm,defaultnormal_vertex:zm,displacementmap_pars_vertex:Gm,displacementmap_vertex:km,emissivemap_fragment:Hm,emissivemap_pars_fragment:Vm,colorspace_fragment:Wm,colorspace_pars_fragment:Xm,envmap_fragment:$m,envmap_common_pars_fragment:qm,envmap_pars_fragment:Ym,envmap_pars_vertex:jm,envmap_physical_pars_fragment:a0,envmap_vertex:Km,fog_vertex:Zm,fog_pars_vertex:Jm,fog_fragment:Qm,fog_pars_fragment:t0,gradientmap_pars_fragment:e0,lightmap_pars_fragment:i0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:s0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:h0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:u0,lights_physical_pars_fragment:f0,lights_fragment_begin:d0,lights_fragment_maps:p0,lights_fragment_end:m0,logdepthbuf_fragment:g0,logdepthbuf_pars_fragment:_0,logdepthbuf_pars_vertex:v0,logdepthbuf_vertex:x0,map_fragment:M0,map_pars_fragment:y0,map_particle_fragment:S0,map_particle_pars_fragment:E0,metalnessmap_fragment:b0,metalnessmap_pars_fragment:A0,morphinstance_vertex:w0,morphcolor_vertex:T0,morphnormal_vertex:C0,morphtarget_pars_vertex:R0,morphtarget_vertex:P0,normal_fragment_begin:L0,normal_fragment_maps:I0,normal_pars_fragment:D0,normal_pars_vertex:N0,normal_vertex:U0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:B0,clearcoat_pars_fragment:z0,iridescence_pars_fragment:G0,opaque_fragment:k0,packing:H0,premultiplied_alpha_fragment:V0,project_vertex:W0,dithering_fragment:X0,dithering_pars_fragment:$0,roughnessmap_fragment:q0,roughnessmap_pars_fragment:Y0,shadowmap_pars_fragment:j0,shadowmap_pars_vertex:K0,shadowmap_vertex:Z0,shadowmask_pars_fragment:J0,skinbase_vertex:Q0,skinning_pars_vertex:tg,skinning_vertex:eg,skinnormal_vertex:ig,specularmap_fragment:ng,specularmap_pars_fragment:sg,tonemapping_fragment:rg,tonemapping_pars_fragment:ag,transmission_fragment:og,transmission_pars_fragment:hg,uv_pars_fragment:lg,uv_pars_vertex:cg,uv_vertex:ug,worldpos_vertex:fg,background_vert:dg,background_frag:pg,backgroundCube_vert:mg,backgroundCube_frag:gg,cube_vert:_g,cube_frag:vg,depth_vert:xg,depth_frag:Mg,distanceRGBA_vert:yg,distanceRGBA_frag:Sg,equirect_vert:Eg,equirect_frag:bg,linedashed_vert:Ag,linedashed_frag:wg,meshbasic_vert:Tg,meshbasic_frag:Cg,meshlambert_vert:Rg,meshlambert_frag:Pg,meshmatcap_vert:Lg,meshmatcap_frag:Ig,meshnormal_vert:Dg,meshnormal_frag:Ng,meshphong_vert:Ug,meshphong_frag:Og,meshphysical_vert:Fg,meshphysical_frag:Bg,meshtoon_vert:zg,meshtoon_frag:Gg,points_vert:kg,points_frag:Hg,shadow_vert:Vg,shadow_frag:Wg,sprite_vert:Xg,sprite_frag:$g},vt={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},yi={basic:{uniforms:Ne([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ne([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ne([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ne([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ne([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Xt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ne([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ne([vt.points,vt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ne([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ne([vt.common,vt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ne([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ne([vt.sprite,vt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ne([vt.common,vt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ne([vt.lights,vt.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};yi.physical={uniforms:Ne([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const $r={r:0,b:0,g:0},yn=new gi,qg=new le;function Yg(i,t,e,n,s,r,a){const o=new Xt(0);let h=r===!0?0:1,l,c,u=null,f=0,p=null;function g(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?e:t).get(x)),x}function _(y){let x=!1;const S=g(y);S===null?m(o,h):S&&S.isColor&&(m(S,1),x=!0);const R=i.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,a):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,x){const S=g(x);S&&(S.isCubeTexture||S.mapping===Na)?(c===void 0&&(c=new Ie(new xr(1,1,1),new an({name:"BackgroundCubeMaterial",uniforms:ws(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:$e,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(R,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(c)),yn.copy(x.backgroundRotation),yn.x*=-1,yn.y*=-1,yn.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(yn.y*=-1,yn.z*=-1),c.material.uniforms.envMap.value=S,c.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(qg.makeRotationFromEuler(yn)),c.material.toneMapped=ne.getTransfer(S.colorSpace)!==he,(u!==S||f!==S.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=S,f=S.version,p=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new Ie(new on(2,2),new an({name:"BackgroundMaterial",uniforms:ws(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=ne.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(u!==S||f!==S.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,u=S,f=S.version,p=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null))}function m(y,x){y.getRGB($r,hf(i)),n.buffers.color.setClear($r.r,$r.g,$r.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),h=x,m(o,h)},getClearAlpha:function(){return h},setClearAlpha:function(y){h=y,m(o,h)},render:_,addToRenderList:d}}function jg(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(v,E,W,z,k){let K=!1;const B=u(z,W,E);r!==B&&(r=B,l(r.object)),K=p(v,z,W,k),K&&g(v,z,W,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(v,E,W,z),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function h(){return i.createVertexArray()}function l(v){return i.bindVertexArray(v)}function c(v){return i.deleteVertexArray(v)}function u(v,E,W){const z=W.wireframe===!0;let k=n[v.id];k===void 0&&(k={},n[v.id]=k);let K=k[E.id];K===void 0&&(K={},k[E.id]=K);let B=K[z];return B===void 0&&(B=f(h()),K[z]=B),B}function f(v){const E=[],W=[],z=[];for(let k=0;k<e;k++)E[k]=0,W[k]=0,z[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:W,attributeDivisors:z,object:v,attributes:{},index:null}}function p(v,E,W,z){const k=r.attributes,K=E.attributes;let B=0;const nt=W.getAttributes();for(const H in nt)if(nt[H].location>=0){const pt=k[H];let V=K[H];if(V===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(V=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(V=v.instanceColor)),pt===void 0||pt.attribute!==V||V&&pt.data!==V.data)return!0;B++}return r.attributesNum!==B||r.index!==z}function g(v,E,W,z){const k={},K=E.attributes;let B=0;const nt=W.getAttributes();for(const H in nt)if(nt[H].location>=0){let pt=K[H];pt===void 0&&(H==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),H==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const V={};V.attribute=pt,pt&&pt.data&&(V.data=pt.data),k[H]=V,B++}r.attributes=k,r.attributesNum=B,r.index=z}function _(){const v=r.newAttributes;for(let E=0,W=v.length;E<W;E++)v[E]=0}function d(v){m(v,0)}function m(v,E){const W=r.newAttributes,z=r.enabledAttributes,k=r.attributeDivisors;W[v]=1,z[v]===0&&(i.enableVertexAttribArray(v),z[v]=1),k[v]!==E&&(i.vertexAttribDivisor(v,E),k[v]=E)}function y(){const v=r.newAttributes,E=r.enabledAttributes;for(let W=0,z=E.length;W<z;W++)E[W]!==v[W]&&(i.disableVertexAttribArray(W),E[W]=0)}function x(v,E,W,z,k,K,B){B===!0?i.vertexAttribIPointer(v,E,W,k,K):i.vertexAttribPointer(v,E,W,z,k,K)}function S(v,E,W,z){_();const k=z.attributes,K=W.getAttributes(),B=E.defaultAttributeValues;for(const nt in K){const H=K[nt];if(H.location>=0){let dt=k[nt];if(dt===void 0&&(nt==="instanceMatrix"&&v.instanceMatrix&&(dt=v.instanceMatrix),nt==="instanceColor"&&v.instanceColor&&(dt=v.instanceColor)),dt!==void 0){const pt=dt.normalized,V=dt.itemSize,ct=t.get(dt);if(ct===void 0)continue;const mt=ct.buffer,G=ct.type,$=ct.bytesPerElement,st=G===i.INT||G===i.UNSIGNED_INT||dt.gpuType===Xh;if(dt.isInterleavedBufferAttribute){const Z=dt.data,yt=Z.stride,Tt=dt.offset;if(Z.isInstancedInterleavedBuffer){for(let It=0;It<H.locationSize;It++)m(H.location+It,Z.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let It=0;It<H.locationSize;It++)d(H.location+It);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let It=0;It<H.locationSize;It++)x(H.location+It,V/H.locationSize,G,pt,yt*$,(Tt+V/H.locationSize*It)*$,st)}else{if(dt.isInstancedBufferAttribute){for(let Z=0;Z<H.locationSize;Z++)m(H.location+Z,dt.meshPerAttribute);v.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Z=0;Z<H.locationSize;Z++)d(H.location+Z);i.bindBuffer(i.ARRAY_BUFFER,mt);for(let Z=0;Z<H.locationSize;Z++)x(H.location+Z,V/H.locationSize,G,pt,V*$,V/H.locationSize*Z*$,st)}}else if(B!==void 0){const pt=B[nt];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(H.location,pt);break;case 3:i.vertexAttrib3fv(H.location,pt);break;case 4:i.vertexAttrib4fv(H.location,pt);break;default:i.vertexAttrib1fv(H.location,pt)}}}}y()}function R(){P();for(const v in n){const E=n[v];for(const W in E){const z=E[W];for(const k in z)c(z[k].object),delete z[k];delete E[W]}delete n[v]}}function T(v){if(n[v.id]===void 0)return;const E=n[v.id];for(const W in E){const z=E[W];for(const k in z)c(z[k].object),delete z[k];delete E[W]}delete n[v.id]}function C(v){for(const E in n){const W=n[E];if(W[v.id]===void 0)continue;const z=W[v.id];for(const k in z)c(z[k].object),delete z[k];delete W[v.id]}}function P(){tt(),a=!0,r!==s&&(r=s,l(r.object))}function tt(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:tt,dispose:R,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:d,disableUnusedAttributes:y}}function Kg(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),e.update(c,n,u))}function o(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let p=0;for(let g=0;g<u;g++)p+=c[g];e.update(p,n,1)}function h(l,c,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)a(l[g],c[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,c,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=c[_];for(let _=0;_<f.length;_++)e.update(g,n,f[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=h}function Zg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(C){return!(C!==ei&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const P=C===vr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==ki&&n.convert(C)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zi&&!P)}function h(C){if(C==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=h(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control");if(f===!0){const C=t.get("EXT_clip_control");C.clipControlEXT(C.LOWER_LEFT_EXT,C.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),R=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:h,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:R,maxSamples:T}}function Jg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Zi,o=new qt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=c(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,d=u.clipShadows,m=i.get(u);if(!s||g===null||g.length===0||r&&!d)r?c(null):l();else{const y=r?0:n,x=y*4;let S=m.clippingState||null;h.value=S,S=c(g,f,x,p);for(let R=0;R!==x;++R)S[R]=e[R];m.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=y}};function l(){h.value!==e&&(h.value=e,h.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function c(u,f,p,g){const _=u!==null?u.length:0;let d=null;if(_!==0){if(d=h.value,g!==!0||d===null){const m=p+_*4,y=f.matrixWorldInverse;o.getNormalMatrix(y),(d===null||d.length<m)&&(d=new Float32Array(m));for(let x=0,S=p;x!==_;++x,S+=4)a.copy(u[x]).applyMatrix4(y,o),a.normal.toArray(d,S),d[S+3]=a.constant}h.value=d,h.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Qg(i){let t=new WeakMap;function e(a,o){return o===Ko?a.mapping=Ss:o===Zo&&(a.mapping=Es),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ko||o===Zo)if(t.has(a)){const h=t.get(a).texture;return e(h,a.mapping)}else{const h=a.image;if(h&&h.height>0){const l=new cm(h.height);return l.fromEquirectangularTexture(i,a),t.set(a,l),a.addEventListener("dispose",s),e(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uf extends lf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,h=s-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=c*this.view.offsetY,h=o-c*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const ss=4,_c=[.125,.215,.35,.446,.526,.582],An=20,go=new uf,vc=new Xt;let _o=null,vo=0,xo=0,Mo=!1;const En=(1+Math.sqrt(5))/2,Jn=1/En,xc=[new L(-En,Jn,0),new L(En,Jn,0),new L(-Jn,0,En),new L(Jn,0,En),new L(0,En,-Jn),new L(0,En,Jn),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Mc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ec(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Sc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(_o,vo,xo),this._renderer.xr.enabled=Mo,t.scissorTest=!1,qr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ss||t.mapping===Es?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),_o=this._renderer.getRenderTarget(),vo=this._renderer.getActiveCubeFace(),xo=this._renderer.getActiveMipmapLevel(),Mo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:di,minFilter:di,generateMipmaps:!1,type:vr,format:ei,colorSpace:cn,depthBuffer:!1},s=yc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=t_(r)),this._blurMaterial=e_(r,t,e)}return s}_compileMaterial(t){const e=new Ie(this._lodPlanes[0],t);this._renderer.compile(e,go)}_sceneToCubeUV(t,e,n,s){const o=new ri(90,1,e,n),h=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],c=this._renderer,u=c.autoClear,f=c.toneMapping;c.getClearColor(vc),c.toneMapping=nn,c.autoClear=!1;const p=new el({name:"PMREM.Background",side:$e,depthWrite:!1,depthTest:!1}),g=new Ie(new xr,p);let _=!1;const d=t.background;d?d.isColor&&(p.color.copy(d),t.background=null,_=!0):(p.color.copy(vc),_=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,h[m],0),o.lookAt(l[m],0,0)):y===1?(o.up.set(0,0,h[m]),o.lookAt(0,l[m],0)):(o.up.set(0,h[m],0),o.lookAt(0,0,l[m]));const x=this._cubeSize;qr(s,y*x,m>2?x:0,x,x),c.setRenderTarget(s),_&&c.render(g,o),c.render(t,o)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=f,c.autoClear=u,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ss||t.mapping===Es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ec()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Sc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ie(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const h=this._cubeSize;qr(e,0,0,3*h,2*h),n.setRenderTarget(e),n.render(a,go)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=xc[(s-r-1)%xc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const h=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ie(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*An-1),_=r/g,d=isFinite(r)?1+Math.floor(c*_):An;d>An&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${An}`);const m=[];let y=0;for(let C=0;C<An;++C){const P=C/_,tt=Math.exp(-P*P/2);m.push(tt),C===0?y+=tt:C<d&&(y+=2*tt)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;f.envMap.value=t.texture,f.samples.value=d,f.weights.value=m,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;const S=this._sizeLods[s],R=3*S*(s>x-ss?s-x+ss:0),T=4*(this._cubeSize-S);qr(e,R,T,3*S,2*S),h.setRenderTarget(e),h.render(u,go)}}function t_(i){const t=[],e=[],n=[];let s=i;const r=i-ss+1+_c.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let h=1/o;a>i-ss?h=_c[a-i+ss-1]:a===0&&(h=0),n.push(h);const l=1/(o-2),c=-l,u=1+l,f=[c,c,u,c,u,u,c,c,u,u,c,u],p=6,g=6,_=3,d=2,m=1,y=new Float32Array(_*g*p),x=new Float32Array(d*g*p),S=new Float32Array(m*g*p);for(let T=0;T<p;T++){const C=T%3*2/3-1,P=T>2?0:-1,tt=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];y.set(tt,_*g*T),x.set(f,d*g*T);const v=[T,T,T,T,T,T];S.set(v,m*g*T)}const R=new ai;R.setAttribute("position",new bi(y,_)),R.setAttribute("uv",new bi(x,d)),R.setAttribute("faceIndex",new bi(S,m)),t.push(R),s>ss&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function yc(i,t,e){const n=new Pn(i,t,e);return n.texture.mapping=Na,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function e_(i,t,e){const n=new Float32Array(An),s=new L(0,1,0);return new an({name:"SphericalGaussianBlur",defines:{n:An,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:sl(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Sc(){return new an({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:sl(),fragmentShader:`

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
		`,blending:en,depthTest:!1,depthWrite:!1})}function Ec(){return new an({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:sl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:en,depthTest:!1,depthWrite:!1})}function sl(){return`

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
	`}function i_(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const h=o.mapping,l=h===Ko||h===Zo,c=h===Ss||h===Es;if(l||c){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new Mc(i)),u=l?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return l&&p&&p.height>0||c&&p&&s(p)?(e===null&&(e=new Mc(i)),u=l?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let h=0;const l=6;for(let c=0;c<l;c++)o[c]!==void 0&&h++;return h===l}function r(o){const h=o.target;h.removeEventListener("dispose",r);const l=t.get(h);l!==void 0&&(t.delete(h),l.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function n_(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&pa("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function s_(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let d=0,m=_.length;d<m;d++)t.remove(_[d])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function h(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let d=0,m=_.length;d<m;d++)t.update(_[d],i.ARRAY_BUFFER)}}function l(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const y=p.array;_=p.version;for(let x=0,S=y.length;x<S;x+=3){const R=y[x+0],T=y[x+1],C=y[x+2];f.push(R,T,T,C,C,R)}}else if(g!==void 0){const y=g.array;_=g.version;for(let x=0,S=y.length/3-1;x<S;x+=3){const R=x+0,T=x+1,C=x+2;f.push(R,T,T,C,C,R)}}else return;const d=new(ef(f)?of:af)(f,1);d.version=_;const m=r.get(u);m&&t.remove(m),r.set(u,d)}function c(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:h,getWireframeAttribute:c}}function r_(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function h(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function c(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let d=0;for(let m=0;m<g;m++)d+=p[m];e.update(d,n,1)}function u(f,p,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<f.length;m++)l(f[m]/a,p[m],_[m]);else{d.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let m=0;for(let y=0;y<g;y++)m+=p[y];for(let y=0;y<_.length;y++)e.update(m,n,_[y])}}this.setMode=s,this.setIndex=o,this.render=h,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function a_(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function o_(i,t,e){const n=new WeakMap,s=new de;function r(a,o,h){const l=a.morphTargetInfluences,c=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=c!==void 0?c.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let tt=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",tt)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;p===!0&&(x=1),g===!0&&(x=2),_===!0&&(x=3);let S=o.attributes.position.count*x,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*R*4*u),C=new sf(T,S,R,u);C.type=zi,C.needsUpdate=!0;const P=x*4;for(let v=0;v<u;v++){const E=d[v],W=m[v],z=y[v],k=S*R*4*v;for(let K=0;K<E.count;K++){const B=K*P;p===!0&&(s.fromBufferAttribute(E,K),T[k+B+0]=s.x,T[k+B+1]=s.y,T[k+B+2]=s.z,T[k+B+3]=0),g===!0&&(s.fromBufferAttribute(W,K),T[k+B+4]=s.x,T[k+B+5]=s.y,T[k+B+6]=s.z,T[k+B+7]=0),_===!0&&(s.fromBufferAttribute(z,K),T[k+B+8]=s.x,T[k+B+9]=s.y,T[k+B+10]=s.z,T[k+B+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new ut(S,R)},n.set(o,f),o.addEventListener("dispose",tt)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)h.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let p=0;for(let _=0;_<l.length;_++)p+=l[_];const g=o.morphTargetsRelative?1:1-p;h.getUniforms().setValue(i,"morphTargetBaseInfluence",g),h.getUniforms().setValue(i,"morphTargetInfluences",l)}h.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),h.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function h_(i,t,e,n){let s=new WeakMap;function r(h){const l=n.render.frame,c=h.geometry,u=t.get(h,c);if(s.get(u)!==l&&(t.update(u),s.set(u,l)),h.isInstancedMesh&&(h.hasEventListener("dispose",o)===!1&&h.addEventListener("dispose",o),s.get(h)!==l&&(e.update(h.instanceMatrix,i.ARRAY_BUFFER),h.instanceColor!==null&&e.update(h.instanceColor,i.ARRAY_BUFFER),s.set(h,l))),h.isSkinnedMesh){const f=h.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return u}function a(){s=new WeakMap}function o(h){const l=h.target;l.removeEventListener("dispose",o),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:a}}class ff extends Be{constructor(t,e,n,s,r,a,o,h,l,c=ds){if(c!==ds&&c!==As)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&c===ds&&(n=Rn),n===void 0&&c===As&&(n=bs),super(null,s,r,a,o,h,c,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Xe,this.minFilter=h!==void 0?h:Xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const df=new Be,bc=new ff(1,1),pf=new sf,mf=new Yp,gf=new il,Ac=[],wc=[],Tc=new Float32Array(16),Cc=new Float32Array(9),Rc=new Float32Array(4);function Ls(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Ac[s];if(r===void 0&&(r=new Float32Array(s),Ac[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ba(i,t){let e=wc[t];e===void 0&&(e=new Int32Array(t),wc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function l_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function c_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function u_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function f_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function d_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Rc.set(n),i.uniformMatrix2fv(this.addr,!1,Rc),Ee(e,n)}}function p_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Cc.set(n),i.uniformMatrix3fv(this.addr,!1,Cc),Ee(e,n)}}function m_(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;Tc.set(n),i.uniformMatrix4fv(this.addr,!1,Tc),Ee(e,n)}}function g_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function __(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function v_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function x_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function M_(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function y_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function S_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function E_(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function b_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(bc.compareFunction=tf,r=bc):r=df,e.setTexture2D(t||r,s)}function A_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||mf,s)}function w_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||gf,s)}function T_(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||pf,s)}function C_(i){switch(i){case 5126:return l_;case 35664:return c_;case 35665:return u_;case 35666:return f_;case 35674:return d_;case 35675:return p_;case 35676:return m_;case 5124:case 35670:return g_;case 35667:case 35671:return __;case 35668:case 35672:return v_;case 35669:case 35673:return x_;case 5125:return M_;case 36294:return y_;case 36295:return S_;case 36296:return E_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return A_;case 35680:case 36300:case 36308:case 36293:return w_;case 36289:case 36303:case 36311:case 36292:return T_}}function R_(i,t){i.uniform1fv(this.addr,t)}function P_(i,t){const e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function L_(i,t){const e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function I_(i,t){const e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function D_(i,t){const e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function N_(i,t){const e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function U_(i,t){const e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function O_(i,t){i.uniform1iv(this.addr,t)}function F_(i,t){i.uniform2iv(this.addr,t)}function B_(i,t){i.uniform3iv(this.addr,t)}function z_(i,t){i.uniform4iv(this.addr,t)}function G_(i,t){i.uniform1uiv(this.addr,t)}function k_(i,t){i.uniform2uiv(this.addr,t)}function H_(i,t){i.uniform3uiv(this.addr,t)}function V_(i,t){i.uniform4uiv(this.addr,t)}function W_(i,t,e){const n=this.cache,s=t.length,r=Ba(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||df,r[a])}function X_(i,t,e){const n=this.cache,s=t.length,r=Ba(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||mf,r[a])}function $_(i,t,e){const n=this.cache,s=t.length,r=Ba(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||gf,r[a])}function q_(i,t,e){const n=this.cache,s=t.length,r=Ba(e,s);Se(n,r)||(i.uniform1iv(this.addr,r),Ee(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||pf,r[a])}function Y_(i){switch(i){case 5126:return R_;case 35664:return P_;case 35665:return L_;case 35666:return I_;case 35674:return D_;case 35675:return N_;case 35676:return U_;case 5124:case 35670:return O_;case 35667:case 35671:return F_;case 35668:case 35672:return B_;case 35669:case 35673:return z_;case 5125:return G_;case 36294:return k_;case 36295:return H_;case 36296:return V_;case 35678:case 36198:case 36298:case 36306:case 35682:return W_;case 35679:case 36299:case 36307:return X_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return q_}}class j_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=C_(e.type)}}class K_{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Y_(e.type)}}class Z_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const yo=/(\w+)(\])?(\[|\.)?/g;function Pc(i,t){i.seq.push(t),i.map[t.id]=t}function J_(i,t,e){const n=i.name,s=n.length;for(yo.lastIndex=0;;){const r=yo.exec(n),a=yo.lastIndex;let o=r[1];const h=r[2]==="]",l=r[3];if(h&&(o=o|0),l===void 0||l==="["&&a+2===s){Pc(e,l===void 0?new j_(o,i,t):new K_(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Z_(o),Pc(e,u)),e=u}}}class ma{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);J_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],h=n[o.id];h.needsUpdate!==!1&&o.setValue(t,h.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Lc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Q_=37297;let tv=0;function ev(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function iv(i){const t=ne.getPrimaries(ne.workingColorSpace),e=ne.getPrimaries(i);let n;switch(t===e?n="":t===Sa&&e===ya?n="LinearDisplayP3ToLinearSRGB":t===ya&&e===Sa&&(n="LinearSRGBToLinearDisplayP3"),i){case cn:case Ua:return[n,"LinearTransferOETF"];case ui:case Jh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Ic(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ev(i.getShaderSource(t),a)}else return s}function nv(i,t){const e=iv(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function sv(i,t){let e;switch(t){case sp:e="Linear";break;case rp:e="Reinhard";break;case ap:e="Cineon";break;case op:e="ACESFilmic";break;case lp:e="AgX";break;case cp:e="Neutral";break;case hp:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Yr=new L;function rv(){ne.getLuminanceCoefficients(Yr);const i=Yr.x.toFixed(4),t=Yr.y.toFixed(4),e=Yr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function av(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vs).join(`
`)}function ov(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function hv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Vs(i){return i!==""}function Dc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const lv=/^[ \t]*#include +<([\w\d./]+)>/gm;function wh(i){return i.replace(lv,uv)}const cv=new Map;function uv(i,t){let e=$t[t];if(e===void 0){const n=cv.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return wh(e)}const fv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Uc(i){return i.replace(fv,dv)}function dv(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Oc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pv(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===ku?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Hu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Oi&&(t="SHADOWMAP_TYPE_VSM"),t}function mv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ss:case Es:t="ENVMAP_TYPE_CUBE";break;case Na:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Es:t="ENVMAP_MODE_REFRACTION";break}return t}function _v(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Wh:t="ENVMAP_BLENDING_MULTIPLY";break;case ip:t="ENVMAP_BLENDING_MIX";break;case np:t="ENVMAP_BLENDING_ADD";break}return t}function vv(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xv(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const h=pv(e),l=mv(e),c=gv(e),u=_v(e),f=vv(e),p=av(e),g=ov(r),_=s.createProgram();let d,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),d.length>0&&(d+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Vs).join(`
`),m.length>0&&(m+=`
`)):(d=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vs).join(`
`),m=[Oc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+h:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==nn?"#define TONE_MAPPING":"",e.toneMapping!==nn?$t.tonemapping_pars_fragment:"",e.toneMapping!==nn?sv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,nv("linearToOutputTexel",e.outputColorSpace),rv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Vs).join(`
`)),a=wh(a),a=Dc(a,e),a=Nc(a,e),o=wh(o),o=Dc(o,e),o=Nc(o,e),a=Uc(a),o=Uc(o),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,d=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,m=["#define varying in",e.glslVersion===Jl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Jl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+d+a,S=y+m+o,R=Lc(s,s.VERTEX_SHADER,x),T=Lc(s,s.FRAGMENT_SHADER,S);s.attachShader(_,R),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function C(E){if(i.debug.checkShaderErrors){const W=s.getProgramInfoLog(_).trim(),z=s.getShaderInfoLog(R).trim(),k=s.getShaderInfoLog(T).trim();let K=!0,B=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,R,T);else{const nt=Ic(s,R,"vertex"),H=Ic(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+W+`
`+nt+`
`+H)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(z===""||k==="")&&(B=!1);B&&(E.diagnostics={runnable:K,programLog:W,vertexShader:{log:z,prefix:d},fragmentShader:{log:k,prefix:m}})}s.deleteShader(R),s.deleteShader(T),P=new ma(s,_),tt=hv(s,_)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let tt;this.getAttributes=function(){return tt===void 0&&C(this),tt};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,Q_)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=tv++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=T,this}let Mv=0;class yv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sv(t),e.set(t,n)),n}}class Sv{constructor(t){this.id=Mv++,this.code=t,this.usedTimes=0}}function Ev(i,t,e,n,s,r,a){const o=new tl,h=new yv,l=new Set,c=[],u=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(v){return l.add(v),v===0?"uv":`uv${v}`}function m(v,E,W,z,k){const K=z.fog,B=k.geometry,nt=v.isMeshStandardMaterial?z.environment:null,H=(v.isMeshStandardMaterial?e:t).get(v.envMap||nt),dt=H&&H.mapping===Na?H.image.height:null,pt=_[v.type];v.precision!==null&&(g=s.getMaxPrecision(v.precision),g!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",g,"instead."));const V=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ct=V!==void 0?V.length:0;let mt=0;B.morphAttributes.position!==void 0&&(mt=1),B.morphAttributes.normal!==void 0&&(mt=2),B.morphAttributes.color!==void 0&&(mt=3);let G,$,st,Z;if(pt){const ke=yi[pt];G=ke.vertexShader,$=ke.fragmentShader}else G=v.vertexShader,$=v.fragmentShader,h.update(v),st=h.getVertexShaderID(v),Z=h.getFragmentShaderID(v);const yt=i.getRenderTarget(),Tt=k.isInstancedMesh===!0,It=k.isBatchedMesh===!0,Ft=!!v.map,q=!!v.matcap,w=!!H,at=!!v.aoMap,rt=!!v.lightMap,it=!!v.bumpMap,ht=!!v.normalMap,bt=!!v.displacementMap,gt=!!v.emissiveMap,A=!!v.metalnessMap,M=!!v.roughnessMap,U=v.anisotropy>0,Y=v.clearcoat>0,J=v.dispersion>0,j=v.iridescence>0,Dt=v.sheen>0,_t=v.transmission>0,Ct=U&&!!v.anisotropyMap,Yt=Y&&!!v.clearcoatMap,ot=Y&&!!v.clearcoatNormalMap,Rt=Y&&!!v.clearcoatRoughnessMap,Gt=j&&!!v.iridescenceMap,kt=j&&!!v.iridescenceThicknessMap,Pt=Dt&&!!v.sheenColorMap,jt=Dt&&!!v.sheenRoughnessMap,Vt=!!v.specularMap,ae=!!v.specularColorMap,I=!!v.specularIntensityMap,At=_t&&!!v.transmissionMap,X=_t&&!!v.thicknessMap,Q=!!v.gradientMap,St=!!v.alphaMap,wt=v.alphaTest>0,Kt=!!v.alphaHash,_e=!!v.extensions;let Ge=nn;v.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(Ge=i.toneMapping);const Jt={shaderID:pt,shaderType:v.type,shaderName:v.name,vertexShader:G,fragmentShader:$,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:Z,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:g,batching:It,batchingColor:It&&k._colorsTexture!==null,instancing:Tt,instancingColor:Tt&&k.instanceColor!==null,instancingMorph:Tt&&k.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:yt===null?i.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:cn,alphaToCoverage:!!v.alphaToCoverage,map:Ft,matcap:q,envMap:w,envMapMode:w&&H.mapping,envMapCubeUVHeight:dt,aoMap:at,lightMap:rt,bumpMap:it,normalMap:ht,displacementMap:p&&bt,emissiveMap:gt,normalMapObjectSpace:ht&&v.normalMapType===pp,normalMapTangentSpace:ht&&v.normalMapType===Zh,metalnessMap:A,roughnessMap:M,anisotropy:U,anisotropyMap:Ct,clearcoat:Y,clearcoatMap:Yt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Rt,dispersion:J,iridescence:j,iridescenceMap:Gt,iridescenceThicknessMap:kt,sheen:Dt,sheenColorMap:Pt,sheenRoughnessMap:jt,specularMap:Vt,specularColorMap:ae,specularIntensityMap:I,transmission:_t,transmissionMap:At,thicknessMap:X,gradientMap:Q,opaque:v.transparent===!1&&v.blending===fs&&v.alphaToCoverage===!1,alphaMap:St,alphaTest:wt,alphaHash:Kt,combine:v.combine,mapUv:Ft&&d(v.map.channel),aoMapUv:at&&d(v.aoMap.channel),lightMapUv:rt&&d(v.lightMap.channel),bumpMapUv:it&&d(v.bumpMap.channel),normalMapUv:ht&&d(v.normalMap.channel),displacementMapUv:bt&&d(v.displacementMap.channel),emissiveMapUv:gt&&d(v.emissiveMap.channel),metalnessMapUv:A&&d(v.metalnessMap.channel),roughnessMapUv:M&&d(v.roughnessMap.channel),anisotropyMapUv:Ct&&d(v.anisotropyMap.channel),clearcoatMapUv:Yt&&d(v.clearcoatMap.channel),clearcoatNormalMapUv:ot&&d(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Rt&&d(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Gt&&d(v.iridescenceMap.channel),iridescenceThicknessMapUv:kt&&d(v.iridescenceThicknessMap.channel),sheenColorMapUv:Pt&&d(v.sheenColorMap.channel),sheenRoughnessMapUv:jt&&d(v.sheenRoughnessMap.channel),specularMapUv:Vt&&d(v.specularMap.channel),specularColorMapUv:ae&&d(v.specularColorMap.channel),specularIntensityMapUv:I&&d(v.specularIntensityMap.channel),transmissionMapUv:At&&d(v.transmissionMap.channel),thicknessMapUv:X&&d(v.thicknessMap.channel),alphaMapUv:St&&d(v.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ht||U),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!B.attributes.uv&&(Ft||St),fog:!!K,useFog:v.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:f,skinning:k.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ct,morphTextureStride:mt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&W.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ge,decodeVideoTexture:Ft&&v.map.isVideoTexture===!0&&ne.getTransfer(v.map.colorSpace)===he,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Si,flipSided:v.side===$e,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:_e&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_e&&v.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Jt.vertexUv1s=l.has(1),Jt.vertexUv2s=l.has(2),Jt.vertexUv3s=l.has(3),l.clear(),Jt}function y(v){const E=[];if(v.shaderID?E.push(v.shaderID):(E.push(v.customVertexShaderID),E.push(v.customFragmentShaderID)),v.defines!==void 0)for(const W in v.defines)E.push(W),E.push(v.defines[W]);return v.isRawShaderMaterial===!1&&(x(E,v),S(E,v),E.push(i.outputColorSpace)),E.push(v.customProgramCacheKey),E.join()}function x(v,E){v.push(E.precision),v.push(E.outputColorSpace),v.push(E.envMapMode),v.push(E.envMapCubeUVHeight),v.push(E.mapUv),v.push(E.alphaMapUv),v.push(E.lightMapUv),v.push(E.aoMapUv),v.push(E.bumpMapUv),v.push(E.normalMapUv),v.push(E.displacementMapUv),v.push(E.emissiveMapUv),v.push(E.metalnessMapUv),v.push(E.roughnessMapUv),v.push(E.anisotropyMapUv),v.push(E.clearcoatMapUv),v.push(E.clearcoatNormalMapUv),v.push(E.clearcoatRoughnessMapUv),v.push(E.iridescenceMapUv),v.push(E.iridescenceThicknessMapUv),v.push(E.sheenColorMapUv),v.push(E.sheenRoughnessMapUv),v.push(E.specularMapUv),v.push(E.specularColorMapUv),v.push(E.specularIntensityMapUv),v.push(E.transmissionMapUv),v.push(E.thicknessMapUv),v.push(E.combine),v.push(E.fogExp2),v.push(E.sizeAttenuation),v.push(E.morphTargetsCount),v.push(E.morphAttributeCount),v.push(E.numDirLights),v.push(E.numPointLights),v.push(E.numSpotLights),v.push(E.numSpotLightMaps),v.push(E.numHemiLights),v.push(E.numRectAreaLights),v.push(E.numDirLightShadows),v.push(E.numPointLightShadows),v.push(E.numSpotLightShadows),v.push(E.numSpotLightShadowsWithMaps),v.push(E.numLightProbes),v.push(E.shadowMapType),v.push(E.toneMapping),v.push(E.numClippingPlanes),v.push(E.numClipIntersection),v.push(E.depthPacking)}function S(v,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),v.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reverseDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.alphaToCoverage&&o.enable(20),v.push(o.mask)}function R(v){const E=_[v.type];let W;if(E){const z=yi[E];W=am.clone(z.uniforms)}else W=v.uniforms;return W}function T(v,E){let W;for(let z=0,k=c.length;z<k;z++){const K=c[z];if(K.cacheKey===E){W=K,++W.usedTimes;break}}return W===void 0&&(W=new xv(i,E,v,r),c.push(W)),W}function C(v){if(--v.usedTimes===0){const E=c.indexOf(v);c[E]=c[c.length-1],c.pop(),v.destroy()}}function P(v){h.remove(v)}function tt(){h.dispose()}return{getParameters:m,getProgramCacheKey:y,getUniforms:R,acquireProgram:T,releaseProgram:C,releaseShaderCache:P,programs:c,dispose:tt}}function bv(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,h){i.get(a)[o]=h}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Av(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Fc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Bc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,d){let m=i[t];return m===void 0?(m={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:d},i[t]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=p,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=_,m.group=d),t++,m}function o(u,f,p,g,_,d){const m=a(u,f,p,g,_,d);p.transmission>0?n.push(m):p.transparent===!0?s.push(m):e.push(m)}function h(u,f,p,g,_,d){const m=a(u,f,p,g,_,d);p.transmission>0?n.unshift(m):p.transparent===!0?s.unshift(m):e.unshift(m)}function l(u,f){e.length>1&&e.sort(u||Av),n.length>1&&n.sort(f||Fc),s.length>1&&s.sort(f||Fc)}function c(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:h,finish:c,sort:l}}function wv(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Bc,i.set(n,[a])):s>=r.length?(a=new Bc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Tv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Xt};break;case"SpotLight":e={position:new L,direction:new L,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Xt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Xt,groundColor:new Xt};break;case"RectAreaLight":e={color:new Xt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Cv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Rv=0;function Pv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lv(i){const t=new Tv,e=Cv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const s=new L,r=new le,a=new le;function o(l){let c=0,u=0,f=0;for(let tt=0;tt<9;tt++)n.probe[tt].set(0,0,0);let p=0,g=0,_=0,d=0,m=0,y=0,x=0,S=0,R=0,T=0,C=0;l.sort(Pv);for(let tt=0,v=l.length;tt<v;tt++){const E=l[tt],W=E.color,z=E.intensity,k=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)c+=W.r*z,u+=W.g*z,f+=W.b*z;else if(E.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(E.sh.coefficients[B],z);C++}else if(E.isDirectionalLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const nt=E.shadow,H=e.get(E);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,n.directionalShadow[p]=H,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=E.shadow.matrix,y++}n.directional[p]=B,p++}else if(E.isSpotLight){const B=t.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(W).multiplyScalar(z),B.distance=k,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,n.spot[_]=B;const nt=E.shadow;if(E.map&&(n.spotLightMap[R]=E.map,R++,nt.updateMatrices(E),E.castShadow&&T++),n.spotLightMatrix[_]=nt.matrix,E.castShadow){const H=e.get(E);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=K,S++}_++}else if(E.isRectAreaLight){const B=t.get(E);B.color.copy(W).multiplyScalar(z),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),n.rectArea[d]=B,d++}else if(E.isPointLight){const B=t.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const nt=E.shadow,H=e.get(E);H.shadowIntensity=nt.intensity,H.shadowBias=nt.bias,H.shadowNormalBias=nt.normalBias,H.shadowRadius=nt.radius,H.shadowMapSize=nt.mapSize,H.shadowCameraNear=nt.camera.near,H.shadowCameraFar=nt.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=E.shadow.matrix,x++}n.point[g]=B,g++}else if(E.isHemisphereLight){const B=t.get(E);B.skyColor.copy(E.color).multiplyScalar(z),B.groundColor.copy(E.groundColor).multiplyScalar(z),n.hemi[m]=B,m++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=c,n.ambient[1]=u,n.ambient[2]=f;const P=n.hash;(P.directionalLength!==p||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==d||P.hemiLength!==m||P.numDirectionalShadows!==y||P.numPointShadows!==x||P.numSpotShadows!==S||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+R-T,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,P.directionalLength=p,P.pointLength=g,P.spotLength=_,P.rectAreaLength=d,P.hemiLength=m,P.numDirectionalShadows=y,P.numPointShadows=x,P.numSpotShadows=S,P.numSpotMaps=R,P.numLightProbes=C,n.version=Rv++)}function h(l,c){let u=0,f=0,p=0,g=0,_=0;const d=c.matrixWorldInverse;for(let m=0,y=l.length;m<y;m++){const x=l[m];if(x.isDirectionalLight){const S=n.directional[u];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),u++}else if(x.isSpotLight){const S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(d),p++}else if(x.isRectAreaLight){const S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),a.identity(),r.copy(x.matrixWorld),r.premultiply(d),a.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(d),f++}else if(x.isHemisphereLight){const S=n.hemi[_];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(d),_++}}}return{setup:o,setupView:h,state:n}}function zc(i){const t=new Lv(i),e=[],n=[];function s(c){l.camera=c,e.length=0,n.length=0}function r(c){e.push(c)}function a(c){n.push(c)}function o(){t.setup(e)}function h(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:h,pushLight:r,pushShadow:a}}function Iv(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new zc(i),t.set(s,[o])):r>=a.length?(o=new zc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Dv extends On{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Nv extends On{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Uv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ov=`uniform sampler2D shadow_pass;
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
}`;function Fv(i,t,e){let n=new nl;const s=new ut,r=new ut,a=new de,o=new Dv({depthPacking:dp}),h=new Nv,l={},c=e.maxTextureSize,u={[rn]:$e,[$e]:rn,[Si]:Si},f=new an({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:Uv,fragmentShader:Ov}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new ai;g.setAttribute("position",new bi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ie(g,f),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ku;let m=this.type;this.render=function(T,C,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||T.length===0)return;const tt=i.getRenderTarget(),v=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),W=i.state;W.setBlending(en),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const z=m!==Oi&&this.type===Oi,k=m===Oi&&this.type!==Oi;for(let K=0,B=T.length;K<B;K++){const nt=T[K],H=nt.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",nt,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const dt=H.getFrameExtents();if(s.multiply(dt),r.copy(H.mapSize),(s.x>c||s.y>c)&&(s.x>c&&(r.x=Math.floor(c/dt.x),s.x=r.x*dt.x,H.mapSize.x=r.x),s.y>c&&(r.y=Math.floor(c/dt.y),s.y=r.y*dt.y,H.mapSize.y=r.y)),H.map===null||z===!0||k===!0){const V=this.type!==Oi?{minFilter:Xe,magFilter:Xe}:{};H.map!==null&&H.map.dispose(),H.map=new Pn(s.x,s.y,V),H.map.texture.name=nt.name+".shadowMap",H.camera.updateProjectionMatrix()}i.setRenderTarget(H.map),i.clear();const pt=H.getViewportCount();for(let V=0;V<pt;V++){const ct=H.getViewport(V);a.set(r.x*ct.x,r.y*ct.y,r.x*ct.z,r.y*ct.w),W.viewport(a),H.updateMatrices(nt,V),n=H.getFrustum(),S(C,P,H.camera,nt,this.type)}H.isPointLightShadow!==!0&&this.type===Oi&&y(H,P),H.needsUpdate=!1}m=this.type,d.needsUpdate=!1,i.setRenderTarget(tt,v,E)};function y(T,C){const P=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Pn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,P,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,P,p,_,null)}function x(T,C,P,tt){let v=null;const E=P.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(E!==void 0)v=E;else if(v=P.isPointLight===!0?h:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const W=v.uuid,z=C.uuid;let k=l[W];k===void 0&&(k={},l[W]=k);let K=k[z];K===void 0&&(K=v.clone(),k[z]=K,C.addEventListener("dispose",R)),v=K}if(v.visible=C.visible,v.wireframe=C.wireframe,tt===Oi?v.side=C.shadowSide!==null?C.shadowSide:C.side:v.side=C.shadowSide!==null?C.shadowSide:u[C.side],v.alphaMap=C.alphaMap,v.alphaTest=C.alphaTest,v.map=C.map,v.clipShadows=C.clipShadows,v.clippingPlanes=C.clippingPlanes,v.clipIntersection=C.clipIntersection,v.displacementMap=C.displacementMap,v.displacementScale=C.displacementScale,v.displacementBias=C.displacementBias,v.wireframeLinewidth=C.wireframeLinewidth,v.linewidth=C.linewidth,P.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const W=i.properties.get(v);W.light=P}return v}function S(T,C,P,tt,v){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===Oi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,T.matrixWorld);const z=t.update(T),k=T.material;if(Array.isArray(k)){const K=z.groups;for(let B=0,nt=K.length;B<nt;B++){const H=K[B],dt=k[H.materialIndex];if(dt&&dt.visible){const pt=x(T,dt,tt,v);T.onBeforeShadow(i,T,C,P,z,pt,H),i.renderBufferDirect(P,null,z,pt,T,H),T.onAfterShadow(i,T,C,P,z,pt,H)}}}else if(k.visible){const K=x(T,k,tt,v);T.onBeforeShadow(i,T,C,P,z,K,null),i.renderBufferDirect(P,null,z,K,T,null),T.onAfterShadow(i,T,C,P,z,K,null)}}const W=T.children;for(let z=0,k=W.length;z<k;z++)S(W[z],C,P,tt,v)}function R(T){T.target.removeEventListener("dispose",R);for(const P in l){const tt=l[P],v=T.target.uuid;v in tt&&(tt[v].dispose(),delete tt[v])}}}const Bv={[Vo]:Wo,[Xo]:Yo,[$o]:jo,[ys]:qo,[Wo]:Vo,[Yo]:Xo,[jo]:$o,[qo]:ys};function zv(i){function t(){let I=!1;const At=new de;let X=null;const Q=new de(0,0,0,0);return{setMask:function(St){X!==St&&!I&&(i.colorMask(St,St,St,St),X=St)},setLocked:function(St){I=St},setClear:function(St,wt,Kt,_e,Ge){Ge===!0&&(St*=_e,wt*=_e,Kt*=_e),At.set(St,wt,Kt,_e),Q.equals(At)===!1&&(i.clearColor(St,wt,Kt,_e),Q.copy(At))},reset:function(){I=!1,X=null,Q.set(-1,0,0,0)}}}function e(){let I=!1,At=!1,X=null,Q=null,St=null;return{setReversed:function(wt){At=wt},setTest:function(wt){wt?st(i.DEPTH_TEST):Z(i.DEPTH_TEST)},setMask:function(wt){X!==wt&&!I&&(i.depthMask(wt),X=wt)},setFunc:function(wt){if(At&&(wt=Bv[wt]),Q!==wt){switch(wt){case Vo:i.depthFunc(i.NEVER);break;case Wo:i.depthFunc(i.ALWAYS);break;case Xo:i.depthFunc(i.LESS);break;case ys:i.depthFunc(i.LEQUAL);break;case $o:i.depthFunc(i.EQUAL);break;case qo:i.depthFunc(i.GEQUAL);break;case Yo:i.depthFunc(i.GREATER);break;case jo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=wt}},setLocked:function(wt){I=wt},setClear:function(wt){St!==wt&&(i.clearDepth(wt),St=wt)},reset:function(){I=!1,X=null,Q=null,St=null}}}function n(){let I=!1,At=null,X=null,Q=null,St=null,wt=null,Kt=null,_e=null,Ge=null;return{setTest:function(Jt){I||(Jt?st(i.STENCIL_TEST):Z(i.STENCIL_TEST))},setMask:function(Jt){At!==Jt&&!I&&(i.stencilMask(Jt),At=Jt)},setFunc:function(Jt,ke,Ri){(X!==Jt||Q!==ke||St!==Ri)&&(i.stencilFunc(Jt,ke,Ri),X=Jt,Q=ke,St=Ri)},setOp:function(Jt,ke,Ri){(wt!==Jt||Kt!==ke||_e!==Ri)&&(i.stencilOp(Jt,ke,Ri),wt=Jt,Kt=ke,_e=Ri)},setLocked:function(Jt){I=Jt},setClear:function(Jt){Ge!==Jt&&(i.clearStencil(Jt),Ge=Jt)},reset:function(){I=!1,At=null,X=null,Q=null,St=null,wt=null,Kt=null,_e=null,Ge=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,h=new WeakMap;let l={},c={},u=new WeakMap,f=[],p=null,g=!1,_=null,d=null,m=null,y=null,x=null,S=null,R=null,T=new Xt(0,0,0),C=0,P=!1,tt=null,v=null,E=null,W=null,z=null;const k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,B=0;const nt=i.getParameter(i.VERSION);nt.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(nt)[1]),K=B>=1):nt.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),K=B>=2);let H=null,dt={};const pt=i.getParameter(i.SCISSOR_BOX),V=i.getParameter(i.VIEWPORT),ct=new de().fromArray(pt),mt=new de().fromArray(V);function G(I,At,X,Q){const St=new Uint8Array(4),wt=i.createTexture();i.bindTexture(I,wt),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Kt=0;Kt<X;Kt++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(At,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,St):i.texImage2D(At+Kt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,St);return wt}const $={};$[i.TEXTURE_2D]=G(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=G(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=G(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=G(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),st(i.DEPTH_TEST),r.setFunc(ys),rt(!1),it($l),st(i.CULL_FACE),w(en);function st(I){l[I]!==!0&&(i.enable(I),l[I]=!0)}function Z(I){l[I]!==!1&&(i.disable(I),l[I]=!1)}function yt(I,At){return c[I]!==At?(i.bindFramebuffer(I,At),c[I]=At,I===i.DRAW_FRAMEBUFFER&&(c[i.FRAMEBUFFER]=At),I===i.FRAMEBUFFER&&(c[i.DRAW_FRAMEBUFFER]=At),!0):!1}function Tt(I,At){let X=f,Q=!1;if(I){X=u.get(At),X===void 0&&(X=[],u.set(At,X));const St=I.textures;if(X.length!==St.length||X[0]!==i.COLOR_ATTACHMENT0){for(let wt=0,Kt=St.length;wt<Kt;wt++)X[wt]=i.COLOR_ATTACHMENT0+wt;X.length=St.length,Q=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,Q=!0);Q&&i.drawBuffers(X)}function It(I){return p!==I?(i.useProgram(I),p=I,!0):!1}const Ft={[bn]:i.FUNC_ADD,[zd]:i.FUNC_SUBTRACT,[Gd]:i.FUNC_REVERSE_SUBTRACT};Ft[kd]=i.MIN,Ft[Hd]=i.MAX;const q={[Vd]:i.ZERO,[Wd]:i.ONE,[Xd]:i.SRC_COLOR,[ko]:i.SRC_ALPHA,[Zd]:i.SRC_ALPHA_SATURATE,[jd]:i.DST_COLOR,[qd]:i.DST_ALPHA,[$d]:i.ONE_MINUS_SRC_COLOR,[Ho]:i.ONE_MINUS_SRC_ALPHA,[Kd]:i.ONE_MINUS_DST_COLOR,[Yd]:i.ONE_MINUS_DST_ALPHA,[Jd]:i.CONSTANT_COLOR,[Qd]:i.ONE_MINUS_CONSTANT_COLOR,[tp]:i.CONSTANT_ALPHA,[ep]:i.ONE_MINUS_CONSTANT_ALPHA};function w(I,At,X,Q,St,wt,Kt,_e,Ge,Jt){if(I===en){g===!0&&(Z(i.BLEND),g=!1);return}if(g===!1&&(st(i.BLEND),g=!0),I!==Bd){if(I!==_||Jt!==P){if((d!==bn||x!==bn)&&(i.blendEquation(i.FUNC_ADD),d=bn,x=bn),Jt)switch(I){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.ONE,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ql:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Yl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}m=null,y=null,S=null,R=null,T.set(0,0,0),C=0,_=I,P=Jt}return}St=St||At,wt=wt||X,Kt=Kt||Q,(At!==d||St!==x)&&(i.blendEquationSeparate(Ft[At],Ft[St]),d=At,x=St),(X!==m||Q!==y||wt!==S||Kt!==R)&&(i.blendFuncSeparate(q[X],q[Q],q[wt],q[Kt]),m=X,y=Q,S=wt,R=Kt),(_e.equals(T)===!1||Ge!==C)&&(i.blendColor(_e.r,_e.g,_e.b,Ge),T.copy(_e),C=Ge),_=I,P=!1}function at(I,At){I.side===Si?Z(i.CULL_FACE):st(i.CULL_FACE);let X=I.side===$e;At&&(X=!X),rt(X),I.blending===fs&&I.transparent===!1?w(en):w(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),s.setMask(I.colorWrite);const Q=I.stencilWrite;a.setTest(Q),Q&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),bt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):Z(i.SAMPLE_ALPHA_TO_COVERAGE)}function rt(I){tt!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),tt=I)}function it(I){I!==Od?(st(i.CULL_FACE),I!==v&&(I===$l?i.cullFace(i.BACK):I===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Z(i.CULL_FACE),v=I}function ht(I){I!==E&&(K&&i.lineWidth(I),E=I)}function bt(I,At,X){I?(st(i.POLYGON_OFFSET_FILL),(W!==At||z!==X)&&(i.polygonOffset(At,X),W=At,z=X)):Z(i.POLYGON_OFFSET_FILL)}function gt(I){I?st(i.SCISSOR_TEST):Z(i.SCISSOR_TEST)}function A(I){I===void 0&&(I=i.TEXTURE0+k-1),H!==I&&(i.activeTexture(I),H=I)}function M(I,At,X){X===void 0&&(H===null?X=i.TEXTURE0+k-1:X=H);let Q=dt[X];Q===void 0&&(Q={type:void 0,texture:void 0},dt[X]=Q),(Q.type!==I||Q.texture!==At)&&(H!==X&&(i.activeTexture(X),H=X),i.bindTexture(I,At||$[I]),Q.type=I,Q.texture=At)}function U(){const I=dt[H];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function Y(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Dt(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ct(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Yt(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Gt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function kt(I){ct.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ct.copy(I))}function Pt(I){mt.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),mt.copy(I))}function jt(I,At){let X=h.get(At);X===void 0&&(X=new WeakMap,h.set(At,X));let Q=X.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(At,I.name),X.set(I,Q))}function Vt(I,At){const Q=h.get(At).get(I);o.get(At)!==Q&&(i.uniformBlockBinding(At,Q,I.__bindingPointIndex),o.set(At,Q))}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},H=null,dt={},c={},u=new WeakMap,f=[],p=null,g=!1,_=null,d=null,m=null,y=null,x=null,S=null,R=null,T=new Xt(0,0,0),C=0,P=!1,tt=null,v=null,E=null,W=null,z=null,ct.set(0,0,i.canvas.width,i.canvas.height),mt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:st,disable:Z,bindFramebuffer:yt,drawBuffers:Tt,useProgram:It,setBlending:w,setMaterial:at,setFlipSided:rt,setCullFace:it,setLineWidth:ht,setPolygonOffset:bt,setScissorTest:gt,activeTexture:A,bindTexture:M,unbindTexture:U,compressedTexImage2D:Y,compressedTexImage3D:J,texImage2D:Rt,texImage3D:Gt,updateUBOMapping:jt,uniformBlockBinding:Vt,texStorage2D:Yt,texStorage3D:ot,texSubImage2D:j,texSubImage3D:Dt,compressedTexSubImage2D:_t,compressedTexSubImage3D:Ct,scissor:kt,viewport:Pt,reset:ae}}function Gc(i,t,e,n){const s=Gv(n);switch(e){case qu:return i*t;case ju:return i*t;case Ku:return i*t*2;case Zu:return i*t/s.components*s.byteLength;case Yh:return i*t/s.components*s.byteLength;case Ju:return i*t*2/s.components*s.byteLength;case jh:return i*t*2/s.components*s.byteLength;case Yu:return i*t*3/s.components*s.byteLength;case ei:return i*t*4/s.components*s.byteLength;case Kh:return i*t*4/s.components*s.byteLength;case la:case ca:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ua:case fa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case eh:case nh:return Math.max(i,16)*Math.max(t,8)/4;case th:case ih:return Math.max(i,8)*Math.max(t,8)/2;case sh:case rh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case ah:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case oh:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case hh:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case lh:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case ch:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case uh:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case fh:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case dh:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case ph:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case mh:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case gh:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case _h:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case vh:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case xh:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Mh:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case da:case yh:case Sh:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qu:case Eh:return Math.ceil(i/4)*Math.ceil(t/4)*8;case bh:case Ah:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Gv(i){switch(i){case ki:case Wu:return{byteLength:1,components:1};case rr:case Xu:case vr:return{byteLength:2,components:1};case $h:case qh:return{byteLength:2,components:4};case Rn:case Xh:case zi:return{byteLength:4,components:1};case $u:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function kv(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ut,c=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return p?new OffscreenCanvas(A,M):or("canvas")}function _(A,M,U){let Y=1;const J=gt(A);if((J.width>U||J.height>U)&&(Y=U/Math.max(J.width,J.height)),Y<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(Y*J.width),Dt=Math.floor(Y*J.height);u===void 0&&(u=g(j,Dt));const _t=M?g(j,Dt):u;return _t.width=j,_t.height=Dt,_t.getContext("2d").drawImage(A,0,0,j,Dt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Dt+")."),_t}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function d(A){return A.generateMipmaps&&A.minFilter!==Xe&&A.minFilter!==di}function m(A){i.generateMipmap(A)}function y(A,M,U,Y,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===i.RED&&(U===i.FLOAT&&(j=i.R32F),U===i.HALF_FLOAT&&(j=i.R16F),U===i.UNSIGNED_BYTE&&(j=i.R8)),M===i.RED_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.R8UI),U===i.UNSIGNED_SHORT&&(j=i.R16UI),U===i.UNSIGNED_INT&&(j=i.R32UI),U===i.BYTE&&(j=i.R8I),U===i.SHORT&&(j=i.R16I),U===i.INT&&(j=i.R32I)),M===i.RG&&(U===i.FLOAT&&(j=i.RG32F),U===i.HALF_FLOAT&&(j=i.RG16F),U===i.UNSIGNED_BYTE&&(j=i.RG8)),M===i.RG_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RG8UI),U===i.UNSIGNED_SHORT&&(j=i.RG16UI),U===i.UNSIGNED_INT&&(j=i.RG32UI),U===i.BYTE&&(j=i.RG8I),U===i.SHORT&&(j=i.RG16I),U===i.INT&&(j=i.RG32I)),M===i.RGB_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGB8UI),U===i.UNSIGNED_SHORT&&(j=i.RGB16UI),U===i.UNSIGNED_INT&&(j=i.RGB32UI),U===i.BYTE&&(j=i.RGB8I),U===i.SHORT&&(j=i.RGB16I),U===i.INT&&(j=i.RGB32I)),M===i.RGBA_INTEGER&&(U===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),U===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),U===i.UNSIGNED_INT&&(j=i.RGBA32UI),U===i.BYTE&&(j=i.RGBA8I),U===i.SHORT&&(j=i.RGBA16I),U===i.INT&&(j=i.RGBA32I)),M===i.RGB&&U===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),M===i.RGBA){const Dt=J?Ma:ne.getTransfer(Y);U===i.FLOAT&&(j=i.RGBA32F),U===i.HALF_FLOAT&&(j=i.RGBA16F),U===i.UNSIGNED_BYTE&&(j=Dt===he?i.SRGB8_ALPHA8:i.RGBA8),U===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),U===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&t.get("EXT_color_buffer_float"),j}function x(A,M){let U;return A?M===null||M===Rn||M===bs?U=i.DEPTH24_STENCIL8:M===zi?U=i.DEPTH32F_STENCIL8:M===rr&&(U=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Rn||M===bs?U=i.DEPTH_COMPONENT24:M===zi?U=i.DEPTH_COMPONENT32F:M===rr&&(U=i.DEPTH_COMPONENT16),U}function S(A,M){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Xe&&A.minFilter!==di?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function R(A){const M=A.target;M.removeEventListener("dispose",R),C(M),M.isVideoTexture&&c.delete(M)}function T(A){const M=A.target;M.removeEventListener("dispose",T),tt(M)}function C(A){const M=n.get(A);if(M.__webglInit===void 0)return;const U=A.source,Y=f.get(U);if(Y){const J=Y[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(A),Object.keys(Y).length===0&&f.delete(U)}n.remove(A)}function P(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const U=A.source,Y=f.get(U);delete Y[M.__cacheKey],a.memory.textures--}function tt(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Y=0;Y<6;Y++){if(Array.isArray(M.__webglFramebuffer[Y]))for(let J=0;J<M.__webglFramebuffer[Y].length;J++)i.deleteFramebuffer(M.__webglFramebuffer[Y][J]);else i.deleteFramebuffer(M.__webglFramebuffer[Y]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[Y])}else{if(Array.isArray(M.__webglFramebuffer))for(let Y=0;Y<M.__webglFramebuffer.length;Y++)i.deleteFramebuffer(M.__webglFramebuffer[Y]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Y=0;Y<M.__webglColorRenderbuffer.length;Y++)M.__webglColorRenderbuffer[Y]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[Y]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const U=A.textures;for(let Y=0,J=U.length;Y<J;Y++){const j=n.get(U[Y]);j.__webglTexture&&(i.deleteTexture(j.__webglTexture),a.memory.textures--),n.remove(U[Y])}n.remove(A)}let v=0;function E(){v=0}function W(){const A=v;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),v+=1,A}function z(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function k(A,M){const U=n.get(A);if(A.isVideoTexture&&ht(A),A.isRenderTargetTexture===!1&&A.version>0&&U.__version!==A.version){const Y=A.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{mt(U,A,M);return}}e.bindTexture(i.TEXTURE_2D,U.__webglTexture,i.TEXTURE0+M)}function K(A,M){const U=n.get(A);if(A.version>0&&U.__version!==A.version){mt(U,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,U.__webglTexture,i.TEXTURE0+M)}function B(A,M){const U=n.get(A);if(A.version>0&&U.__version!==A.version){mt(U,A,M);return}e.bindTexture(i.TEXTURE_3D,U.__webglTexture,i.TEXTURE0+M)}function nt(A,M){const U=n.get(A);if(A.version>0&&U.__version!==A.version){G(U,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,U.__webglTexture,i.TEXTURE0+M)}const H={[Jo]:i.REPEAT,[wn]:i.CLAMP_TO_EDGE,[Qo]:i.MIRRORED_REPEAT},dt={[Xe]:i.NEAREST,[up]:i.NEAREST_MIPMAP_NEAREST,[Cr]:i.NEAREST_MIPMAP_LINEAR,[di]:i.LINEAR,[qa]:i.LINEAR_MIPMAP_NEAREST,[Tn]:i.LINEAR_MIPMAP_LINEAR},pt={[mp]:i.NEVER,[yp]:i.ALWAYS,[gp]:i.LESS,[tf]:i.LEQUAL,[_p]:i.EQUAL,[Mp]:i.GEQUAL,[vp]:i.GREATER,[xp]:i.NOTEQUAL};function V(A,M){if(M.type===zi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===di||M.magFilter===qa||M.magFilter===Cr||M.magFilter===Tn||M.minFilter===di||M.minFilter===qa||M.minFilter===Cr||M.minFilter===Tn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,H[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,H[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,H[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,dt[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,dt[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,pt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xe||M.minFilter!==Cr&&M.minFilter!==Tn||M.type===zi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const U=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function ct(A,M){let U=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",R));const Y=M.source;let J=f.get(Y);J===void 0&&(J={},f.set(Y,J));const j=z(M);if(j!==A.__cacheKey){J[j]===void 0&&(J[j]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,U=!0),J[j].usedTimes++;const Dt=J[A.__cacheKey];Dt!==void 0&&(J[A.__cacheKey].usedTimes--,Dt.usedTimes===0&&P(M)),A.__cacheKey=j,A.__webglTexture=J[j].texture}return U}function mt(A,M,U){let Y=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Y=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Y=i.TEXTURE_3D);const J=ct(A,M),j=M.source;e.bindTexture(Y,A.__webglTexture,i.TEXTURE0+U);const Dt=n.get(j);if(j.version!==Dt.__version||J===!0){e.activeTexture(i.TEXTURE0+U);const _t=ne.getPrimaries(ne.workingColorSpace),Ct=M.colorSpace===Ji?null:ne.getPrimaries(M.colorSpace),Yt=M.colorSpace===Ji||_t===Ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt);let ot=_(M.image,!1,s.maxTextureSize);ot=bt(M,ot);const Rt=r.convert(M.format,M.colorSpace),Gt=r.convert(M.type);let kt=y(M.internalFormat,Rt,Gt,M.colorSpace,M.isVideoTexture);V(Y,M);let Pt;const jt=M.mipmaps,Vt=M.isVideoTexture!==!0,ae=Dt.__version===void 0||J===!0,I=j.dataReady,At=S(M,ot);if(M.isDepthTexture)kt=x(M.format===As,M.type),ae&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,kt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,kt,ot.width,ot.height,0,Rt,Gt,null));else if(M.isDataTexture)if(jt.length>0){Vt&&ae&&e.texStorage2D(i.TEXTURE_2D,At,kt,jt[0].width,jt[0].height);for(let X=0,Q=jt.length;X<Q;X++)Pt=jt[X],Vt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Pt.width,Pt.height,Rt,Gt,Pt.data):e.texImage2D(i.TEXTURE_2D,X,kt,Pt.width,Pt.height,0,Rt,Gt,Pt.data);M.generateMipmaps=!1}else Vt?(ae&&e.texStorage2D(i.TEXTURE_2D,At,kt,ot.width,ot.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,Rt,Gt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,kt,ot.width,ot.height,0,Rt,Gt,ot.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,kt,jt[0].width,jt[0].height,ot.depth);for(let X=0,Q=jt.length;X<Q;X++)if(Pt=jt[X],M.format!==ei)if(Rt!==null)if(Vt){if(I)if(M.layerUpdates.size>0){const St=Gc(Pt.width,Pt.height,M.format,M.type);for(const wt of M.layerUpdates){const Kt=Pt.data.subarray(wt*St/Pt.data.BYTES_PER_ELEMENT,(wt+1)*St/Pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,wt,Pt.width,Pt.height,1,Rt,Kt,0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Pt.width,Pt.height,ot.depth,Rt,Pt.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,kt,Pt.width,Pt.height,ot.depth,0,Pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,Pt.width,Pt.height,ot.depth,Rt,Gt,Pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,kt,Pt.width,Pt.height,ot.depth,0,Rt,Gt,Pt.data)}else{Vt&&ae&&e.texStorage2D(i.TEXTURE_2D,At,kt,jt[0].width,jt[0].height);for(let X=0,Q=jt.length;X<Q;X++)Pt=jt[X],M.format!==ei?Rt!==null?Vt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,Pt.width,Pt.height,Rt,Pt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,kt,Pt.width,Pt.height,0,Pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Pt.width,Pt.height,Rt,Gt,Pt.data):e.texImage2D(i.TEXTURE_2D,X,kt,Pt.width,Pt.height,0,Rt,Gt,Pt.data)}else if(M.isDataArrayTexture)if(Vt){if(ae&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,kt,ot.width,ot.height,ot.depth),I)if(M.layerUpdates.size>0){const X=Gc(ot.width,ot.height,M.format,M.type);for(const Q of M.layerUpdates){const St=ot.data.subarray(Q*X/ot.data.BYTES_PER_ELEMENT,(Q+1)*X/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,Rt,Gt,St)}M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,Rt,Gt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,kt,ot.width,ot.height,ot.depth,0,Rt,Gt,ot.data);else if(M.isData3DTexture)Vt?(ae&&e.texStorage3D(i.TEXTURE_3D,At,kt,ot.width,ot.height,ot.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,Rt,Gt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,kt,ot.width,ot.height,ot.depth,0,Rt,Gt,ot.data);else if(M.isFramebufferTexture){if(ae)if(Vt)e.texStorage2D(i.TEXTURE_2D,At,kt,ot.width,ot.height);else{let X=ot.width,Q=ot.height;for(let St=0;St<At;St++)e.texImage2D(i.TEXTURE_2D,St,kt,X,Q,0,Rt,Gt,null),X>>=1,Q>>=1}}else if(jt.length>0){if(Vt&&ae){const X=gt(jt[0]);e.texStorage2D(i.TEXTURE_2D,At,kt,X.width,X.height)}for(let X=0,Q=jt.length;X<Q;X++)Pt=jt[X],Vt?I&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,Rt,Gt,Pt):e.texImage2D(i.TEXTURE_2D,X,kt,Rt,Gt,Pt);M.generateMipmaps=!1}else if(Vt){if(ae){const X=gt(ot);e.texStorage2D(i.TEXTURE_2D,At,kt,X.width,X.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Rt,Gt,ot)}else e.texImage2D(i.TEXTURE_2D,0,kt,Rt,Gt,ot);d(M)&&m(Y),Dt.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function G(A,M,U){if(M.image.length!==6)return;const Y=ct(A,M),J=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+U);const j=n.get(J);if(J.version!==j.__version||Y===!0){e.activeTexture(i.TEXTURE0+U);const Dt=ne.getPrimaries(ne.workingColorSpace),_t=M.colorSpace===Ji?null:ne.getPrimaries(M.colorSpace),Ct=M.colorSpace===Ji||Dt===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);const Yt=M.isCompressedTexture||M.image[0].isCompressedTexture,ot=M.image[0]&&M.image[0].isDataTexture,Rt=[];for(let Q=0;Q<6;Q++)!Yt&&!ot?Rt[Q]=_(M.image[Q],!0,s.maxCubemapSize):Rt[Q]=ot?M.image[Q].image:M.image[Q],Rt[Q]=bt(M,Rt[Q]);const Gt=Rt[0],kt=r.convert(M.format,M.colorSpace),Pt=r.convert(M.type),jt=y(M.internalFormat,kt,Pt,M.colorSpace),Vt=M.isVideoTexture!==!0,ae=j.__version===void 0||Y===!0,I=J.dataReady;let At=S(M,Gt);V(i.TEXTURE_CUBE_MAP,M);let X;if(Yt){Vt&&ae&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,jt,Gt.width,Gt.height);for(let Q=0;Q<6;Q++){X=Rt[Q].mipmaps;for(let St=0;St<X.length;St++){const wt=X[St];M.format!==ei?kt!==null?Vt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,wt.width,wt.height,kt,wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,jt,wt.width,wt.height,0,wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,wt.width,wt.height,kt,Pt,wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,jt,wt.width,wt.height,0,kt,Pt,wt.data)}}}else{if(X=M.mipmaps,Vt&&ae){X.length>0&&At++;const Q=gt(Rt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Rt[Q].width,Rt[Q].height,kt,Pt,Rt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,Rt[Q].width,Rt[Q].height,0,kt,Pt,Rt[Q].data);for(let St=0;St<X.length;St++){const Kt=X[St].image[Q].image;Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,Kt.width,Kt.height,kt,Pt,Kt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,jt,Kt.width,Kt.height,0,kt,Pt,Kt.data)}}else{Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,kt,Pt,Rt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,jt,kt,Pt,Rt[Q]);for(let St=0;St<X.length;St++){const wt=X[St];Vt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,kt,Pt,wt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,jt,kt,Pt,wt.image[Q])}}}d(M)&&m(i.TEXTURE_CUBE_MAP),j.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function $(A,M,U,Y,J,j){const Dt=r.convert(U.format,U.colorSpace),_t=r.convert(U.type),Ct=y(U.internalFormat,Dt,_t,U.colorSpace);if(!n.get(M).__hasExternalTextures){const ot=Math.max(1,M.width>>j),Rt=Math.max(1,M.height>>j);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?e.texImage3D(J,j,Ct,ot,Rt,M.depth,0,Dt,_t,null):e.texImage2D(J,j,Ct,ot,Rt,0,Dt,_t,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Y,J,n.get(U).__webglTexture,0,rt(M)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Y,J,n.get(U).__webglTexture,j),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(A,M,U){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const Y=M.depthTexture,J=Y&&Y.isDepthTexture?Y.type:null,j=x(M.stencilBuffer,J),Dt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,_t=rt(M);it(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,_t,j,M.width,M.height):U?i.renderbufferStorageMultisample(i.RENDERBUFFER,_t,j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Dt,i.RENDERBUFFER,A)}else{const Y=M.textures;for(let J=0;J<Y.length;J++){const j=Y[J],Dt=r.convert(j.format,j.colorSpace),_t=r.convert(j.type),Ct=y(j.internalFormat,Dt,_t,j.colorSpace),Yt=rt(M);U&&it(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Yt,Ct,M.width,M.height):it(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Yt,Ct,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,Ct,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Z(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const Y=n.get(M.depthTexture).__webglTexture,J=rt(M);if(M.depthTexture.format===ds)it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Y,0);else if(M.depthTexture.format===As)it(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Y,0);else throw new Error("Unknown depthTexture format")}function yt(A){const M=n.get(A),U=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const Y=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Y){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Y.removeEventListener("dispose",J)};Y.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=Y}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");Z(M.__webglFramebuffer,A)}else if(U){M.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[Y]),M.__webglDepthbuffer[Y]===void 0)M.__webglDepthbuffer[Y]=i.createRenderbuffer(),st(M.__webglDepthbuffer[Y],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[Y];i.bindRenderbuffer(i.RENDERBUFFER,j),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,j)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),st(M.__webglDepthbuffer,A,!1);else{const Y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Y,i.RENDERBUFFER,J)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Tt(A,M,U){const Y=n.get(A);M!==void 0&&$(Y.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),U!==void 0&&yt(A)}function It(A){const M=A.texture,U=n.get(A),Y=n.get(M);A.addEventListener("dispose",T);const J=A.textures,j=A.isWebGLCubeRenderTarget===!0,Dt=J.length>1;if(Dt||(Y.__webglTexture===void 0&&(Y.__webglTexture=i.createTexture()),Y.__version=M.version,a.memory.textures++),j){U.__webglFramebuffer=[];for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer[_t]=[];for(let Ct=0;Ct<M.mipmaps.length;Ct++)U.__webglFramebuffer[_t][Ct]=i.createFramebuffer()}else U.__webglFramebuffer[_t]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){U.__webglFramebuffer=[];for(let _t=0;_t<M.mipmaps.length;_t++)U.__webglFramebuffer[_t]=i.createFramebuffer()}else U.__webglFramebuffer=i.createFramebuffer();if(Dt)for(let _t=0,Ct=J.length;_t<Ct;_t++){const Yt=n.get(J[_t]);Yt.__webglTexture===void 0&&(Yt.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&it(A)===!1){U.__webglMultisampledFramebuffer=i.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let _t=0;_t<J.length;_t++){const Ct=J[_t];U.__webglColorRenderbuffer[_t]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,U.__webglColorRenderbuffer[_t]);const Yt=r.convert(Ct.format,Ct.colorSpace),ot=r.convert(Ct.type),Rt=y(Ct.internalFormat,Yt,ot,Ct.colorSpace,A.isXRRenderTarget===!0),Gt=rt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,Rt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,U.__webglColorRenderbuffer[_t])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(U.__webglDepthRenderbuffer=i.createRenderbuffer(),st(U.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(j){e.bindTexture(i.TEXTURE_CUBE_MAP,Y.__webglTexture),V(i.TEXTURE_CUBE_MAP,M);for(let _t=0;_t<6;_t++)if(M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)$(U.__webglFramebuffer[_t][Ct],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct);else $(U.__webglFramebuffer[_t],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0);d(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Dt){for(let _t=0,Ct=J.length;_t<Ct;_t++){const Yt=J[_t],ot=n.get(Yt);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),V(i.TEXTURE_2D,Yt),$(U.__webglFramebuffer,A,Yt,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,0),d(Yt)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let _t=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(_t=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(_t,Y.__webglTexture),V(_t,M),M.mipmaps&&M.mipmaps.length>0)for(let Ct=0;Ct<M.mipmaps.length;Ct++)$(U.__webglFramebuffer[Ct],A,M,i.COLOR_ATTACHMENT0,_t,Ct);else $(U.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,_t,0);d(M)&&m(_t),e.unbindTexture()}A.depthBuffer&&yt(A)}function Ft(A){const M=A.textures;for(let U=0,Y=M.length;U<Y;U++){const J=M[U];if(d(J)){const j=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Dt=n.get(J).__webglTexture;e.bindTexture(j,Dt),m(j),e.unbindTexture()}}}const q=[],w=[];function at(A){if(A.samples>0){if(it(A)===!1){const M=A.textures,U=A.width,Y=A.height;let J=i.COLOR_BUFFER_BIT;const j=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Dt=n.get(A),_t=M.length>1;if(_t)for(let Ct=0;Ct<M.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglFramebuffer);for(let Ct=0;Ct<M.length;Ct++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),_t){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ct]);const Yt=n.get(M[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Yt,0)}i.blitFramebuffer(0,0,U,Y,0,0,U,Y,J,i.NEAREST),h===!0&&(q.length=0,w.length=0,q.push(i.COLOR_ATTACHMENT0+Ct),A.depthBuffer&&A.resolveDepthBuffer===!1&&(q.push(j),w.push(j),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,w)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,q))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),_t)for(let Ct=0;Ct<M.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,Dt.__webglColorRenderbuffer[Ct]);const Yt=n.get(M[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Dt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,Yt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Dt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&h){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function rt(A){return Math.min(s.maxSamples,A.samples)}function it(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function ht(A){const M=a.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function bt(A,M){const U=A.colorSpace,Y=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||U!==cn&&U!==Ji&&(ne.getTransfer(U)===he?(Y!==ei||J!==ki)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),M}function gt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=E,this.setTexture2D=k,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=nt,this.rebindTextures=Tt,this.setupRenderTarget=It,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=at,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=$,this.useMultisampledRTT=it}function Hv(i,t){function e(n,s=Ji){let r;const a=ne.getTransfer(s);if(n===ki)return i.UNSIGNED_BYTE;if(n===$h)return i.UNSIGNED_SHORT_4_4_4_4;if(n===qh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===$u)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.BYTE;if(n===Xu)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Xh)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===zi)return i.FLOAT;if(n===vr)return i.HALF_FLOAT;if(n===qu)return i.ALPHA;if(n===Yu)return i.RGB;if(n===ei)return i.RGBA;if(n===ju)return i.LUMINANCE;if(n===Ku)return i.LUMINANCE_ALPHA;if(n===ds)return i.DEPTH_COMPONENT;if(n===As)return i.DEPTH_STENCIL;if(n===Zu)return i.RED;if(n===Yh)return i.RED_INTEGER;if(n===Ju)return i.RG;if(n===jh)return i.RG_INTEGER;if(n===Kh)return i.RGBA_INTEGER;if(n===la||n===ca||n===ua||n===fa)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===la)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===la)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===th||n===eh||n===ih||n===nh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===th)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===eh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ih)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===nh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===sh||n===rh||n===ah)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===sh||n===rh)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ah)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===oh||n===hh||n===lh||n===ch||n===uh||n===fh||n===dh||n===ph||n===mh||n===gh||n===_h||n===vh||n===xh||n===Mh)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===oh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ch)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===uh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===fh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===dh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ph)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===mh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===gh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===_h)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===vh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Mh)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===da||n===yh||n===Sh)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===da)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===yh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Sh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===Eh||n===bh||n===Ah)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===da)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Eh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===bh)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ah)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===bs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Vv extends ri{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class rs extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Wv={type:"move"};class So{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,h=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),m=this._getHandJoint(l,_);d!==null&&(m.matrix.fromArray(d.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=d.radius),m.visible=d!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],f=c.position.distanceTo(u.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else h!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(h.matrix.fromArray(r.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,r.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(r.linearVelocity)):h.hasLinearVelocity=!1,r.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(r.angularVelocity)):h.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Wv)))}return o!==null&&(o.visible=s!==null),h!==null&&(h.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new rs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Xv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$v=`
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

}`;class qv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new an({vertexShader:Xv,fragmentShader:$v,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ie(new on(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Yv extends un{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",h=1,l=null,c=null,u=null,f=null,p=null,g=null;const _=new qv,d=e.getContextAttributes();let m=null,y=null;const x=[],S=[],R=new ut;let T=null;const C=new ri;C.layers.enable(1),C.viewport=new de;const P=new ri;P.layers.enable(2),P.viewport=new de;const tt=[C,P],v=new Vv;v.layers.enable(1),v.layers.enable(2);let E=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let $=x[G];return $===void 0&&($=new So,x[G]=$),$.getTargetRaySpace()},this.getControllerGrip=function(G){let $=x[G];return $===void 0&&($=new So,x[G]=$),$.getGripSpace()},this.getHand=function(G){let $=x[G];return $===void 0&&($=new So,x[G]=$),$.getHandSpace()};function z(G){const $=S.indexOf(G.inputSource);if($===-1)return;const st=x[$];st!==void 0&&(st.update(G.inputSource,G.frame,l||a),st.dispatchEvent({type:G.type,data:G.inputSource}))}function k(){s.removeEventListener("select",z),s.removeEventListener("selectstart",z),s.removeEventListener("selectend",z),s.removeEventListener("squeeze",z),s.removeEventListener("squeezestart",z),s.removeEventListener("squeezeend",z),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",K);for(let G=0;G<x.length;G++){const $=S[G];$!==null&&(S[G]=null,x[G].disconnect($))}E=null,W=null,_.reset(),t.setRenderTarget(m),p=null,f=null,u=null,s=null,y=null,mt.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){r=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){o=G,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(G){l=G},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(G){if(s=G,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",z),s.addEventListener("selectstart",z),s.addEventListener("selectend",z),s.addEventListener("squeeze",z),s.addEventListener("squeezestart",z),s.addEventListener("squeezeend",z),s.addEventListener("end",k),s.addEventListener("inputsourceschange",K),d.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(R),s.renderState.layers===void 0){const $={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,$),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Pn(p.framebufferWidth,p.framebufferHeight,{format:ei,type:ki,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}else{let $=null,st=null,Z=null;d.depth&&(Z=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=d.stencil?As:ds,st=d.stencil?bs:Rn);const yt={colorFormat:e.RGBA8,depthFormat:Z,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(yt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),y=new Pn(f.textureWidth,f.textureHeight,{format:ei,type:ki,depthTexture:new ff(f.textureWidth,f.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(h),l=null,a=await s.requestReferenceSpace(o),mt.setContext(s),mt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(G){for(let $=0;$<G.removed.length;$++){const st=G.removed[$],Z=S.indexOf(st);Z>=0&&(S[Z]=null,x[Z].disconnect(st))}for(let $=0;$<G.added.length;$++){const st=G.added[$];let Z=S.indexOf(st);if(Z===-1){for(let Tt=0;Tt<x.length;Tt++)if(Tt>=S.length){S.push(st),Z=Tt;break}else if(S[Tt]===null){S[Tt]=st,Z=Tt;break}if(Z===-1)break}const yt=x[Z];yt&&yt.connect(st)}}const B=new L,nt=new L;function H(G,$,st){B.setFromMatrixPosition($.matrixWorld),nt.setFromMatrixPosition(st.matrixWorld);const Z=B.distanceTo(nt),yt=$.projectionMatrix.elements,Tt=st.projectionMatrix.elements,It=yt[14]/(yt[10]-1),Ft=yt[14]/(yt[10]+1),q=(yt[9]+1)/yt[5],w=(yt[9]-1)/yt[5],at=(yt[8]-1)/yt[0],rt=(Tt[8]+1)/Tt[0],it=It*at,ht=It*rt,bt=Z/(-at+rt),gt=bt*-at;if($.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(gt),G.translateZ(bt),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),yt[10]===-1)G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const A=It+bt,M=Ft+bt,U=it-gt,Y=ht+(Z-gt),J=q*Ft/M*A,j=w*Ft/M*A;G.projectionMatrix.makePerspective(U,Y,J,j,A,M),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function dt(G,$){$===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices($.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(s===null)return;let $=G.near,st=G.far;_.texture!==null&&(_.depthNear>0&&($=_.depthNear),_.depthFar>0&&(st=_.depthFar)),v.near=P.near=C.near=$,v.far=P.far=C.far=st,(E!==v.near||W!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),E=v.near,W=v.far);const Z=G.parent,yt=v.cameras;dt(v,Z);for(let Tt=0;Tt<yt.length;Tt++)dt(yt[Tt],Z);yt.length===2?H(v,C,P):v.projectionMatrix.copy(C.projectionMatrix),pt(G,v,Z)};function pt(G,$,st){st===null?G.matrix.copy($.matrixWorld):(G.matrix.copy(st.matrixWorld),G.matrix.invert(),G.matrix.multiply($.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy($.projectionMatrix),G.projectionMatrixInverse.copy($.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=ar*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return h},this.setFoveation=function(G){h=G,f!==null&&(f.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let V=null;function ct(G,$){if(c=$.getViewerPose(l||a),g=$,c!==null){const st=c.views;p!==null&&(t.setRenderTargetFramebuffer(y,p.framebuffer),t.setRenderTarget(y));let Z=!1;st.length!==v.cameras.length&&(v.cameras.length=0,Z=!0);for(let Tt=0;Tt<st.length;Tt++){const It=st[Tt];let Ft=null;if(p!==null)Ft=p.getViewport(It);else{const w=u.getViewSubImage(f,It);Ft=w.viewport,Tt===0&&(t.setRenderTargetTextures(y,w.colorTexture,f.ignoreDepthValues?void 0:w.depthStencilTexture),t.setRenderTarget(y))}let q=tt[Tt];q===void 0&&(q=new ri,q.layers.enable(Tt),q.viewport=new de,tt[Tt]=q),q.matrix.fromArray(It.transform.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale),q.projectionMatrix.fromArray(It.projectionMatrix),q.projectionMatrixInverse.copy(q.projectionMatrix).invert(),q.viewport.set(Ft.x,Ft.y,Ft.width,Ft.height),Tt===0&&(v.matrix.copy(q.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),Z===!0&&v.cameras.push(q)}const yt=s.enabledFeatures;if(yt&&yt.includes("depth-sensing")){const Tt=u.getDepthInformation(st[0]);Tt&&Tt.isValid&&Tt.texture&&_.init(t,Tt,s.renderState)}}for(let st=0;st<x.length;st++){const Z=S[st],yt=x[st];Z!==null&&yt!==void 0&&yt.update(Z,$,l||a)}V&&V(G,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const mt=new cf;mt.setAnimationLoop(ct),this.setAnimationLoop=function(G){V=G},this.dispose=function(){}}}const Sn=new gi,jv=new le;function Kv(i,t){function e(d,m){d.matrixAutoUpdate===!0&&d.updateMatrix(),m.value.copy(d.matrix)}function n(d,m){m.color.getRGB(d.fogColor.value,hf(i)),m.isFog?(d.fogNear.value=m.near,d.fogFar.value=m.far):m.isFogExp2&&(d.fogDensity.value=m.density)}function s(d,m,y,x,S){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(d,m):m.isMeshToonMaterial?(r(d,m),u(d,m)):m.isMeshPhongMaterial?(r(d,m),c(d,m)):m.isMeshStandardMaterial?(r(d,m),f(d,m),m.isMeshPhysicalMaterial&&p(d,m,S)):m.isMeshMatcapMaterial?(r(d,m),g(d,m)):m.isMeshDepthMaterial?r(d,m):m.isMeshDistanceMaterial?(r(d,m),_(d,m)):m.isMeshNormalMaterial?r(d,m):m.isLineBasicMaterial?(a(d,m),m.isLineDashedMaterial&&o(d,m)):m.isPointsMaterial?h(d,m,y,x):m.isSpriteMaterial?l(d,m):m.isShadowMaterial?(d.color.value.copy(m.color),d.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(d,m){d.opacity.value=m.opacity,m.color&&d.diffuse.value.copy(m.color),m.emissive&&d.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.bumpMap&&(d.bumpMap.value=m.bumpMap,e(m.bumpMap,d.bumpMapTransform),d.bumpScale.value=m.bumpScale,m.side===$e&&(d.bumpScale.value*=-1)),m.normalMap&&(d.normalMap.value=m.normalMap,e(m.normalMap,d.normalMapTransform),d.normalScale.value.copy(m.normalScale),m.side===$e&&d.normalScale.value.negate()),m.displacementMap&&(d.displacementMap.value=m.displacementMap,e(m.displacementMap,d.displacementMapTransform),d.displacementScale.value=m.displacementScale,d.displacementBias.value=m.displacementBias),m.emissiveMap&&(d.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,d.emissiveMapTransform)),m.specularMap&&(d.specularMap.value=m.specularMap,e(m.specularMap,d.specularMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest);const y=t.get(m),x=y.envMap,S=y.envMapRotation;x&&(d.envMap.value=x,Sn.copy(S),Sn.x*=-1,Sn.y*=-1,Sn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Sn.y*=-1,Sn.z*=-1),d.envMapRotation.value.setFromMatrix4(jv.makeRotationFromEuler(Sn)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=m.reflectivity,d.ior.value=m.ior,d.refractionRatio.value=m.refractionRatio),m.lightMap&&(d.lightMap.value=m.lightMap,d.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,d.lightMapTransform)),m.aoMap&&(d.aoMap.value=m.aoMap,d.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,d.aoMapTransform))}function a(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform))}function o(d,m){d.dashSize.value=m.dashSize,d.totalSize.value=m.dashSize+m.gapSize,d.scale.value=m.scale}function h(d,m,y,x){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.size.value=m.size*y,d.scale.value=x*.5,m.map&&(d.map.value=m.map,e(m.map,d.uvTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function l(d,m){d.diffuse.value.copy(m.color),d.opacity.value=m.opacity,d.rotation.value=m.rotation,m.map&&(d.map.value=m.map,e(m.map,d.mapTransform)),m.alphaMap&&(d.alphaMap.value=m.alphaMap,e(m.alphaMap,d.alphaMapTransform)),m.alphaTest>0&&(d.alphaTest.value=m.alphaTest)}function c(d,m){d.specular.value.copy(m.specular),d.shininess.value=Math.max(m.shininess,1e-4)}function u(d,m){m.gradientMap&&(d.gradientMap.value=m.gradientMap)}function f(d,m){d.metalness.value=m.metalness,m.metalnessMap&&(d.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,d.metalnessMapTransform)),d.roughness.value=m.roughness,m.roughnessMap&&(d.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,d.roughnessMapTransform)),m.envMap&&(d.envMapIntensity.value=m.envMapIntensity)}function p(d,m,y){d.ior.value=m.ior,m.sheen>0&&(d.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),d.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(d.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,d.sheenColorMapTransform)),m.sheenRoughnessMap&&(d.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,d.sheenRoughnessMapTransform))),m.clearcoat>0&&(d.clearcoat.value=m.clearcoat,d.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(d.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,d.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(d.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===$e&&d.clearcoatNormalScale.value.negate())),m.dispersion>0&&(d.dispersion.value=m.dispersion),m.iridescence>0&&(d.iridescence.value=m.iridescence,d.iridescenceIOR.value=m.iridescenceIOR,d.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(d.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,d.iridescenceMapTransform)),m.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),m.transmission>0&&(d.transmission.value=m.transmission,d.transmissionSamplerMap.value=y.texture,d.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(d.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,d.transmissionMapTransform)),d.thickness.value=m.thickness,m.thicknessMap&&(d.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=m.attenuationDistance,d.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(d.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(d.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=m.specularIntensity,d.specularColor.value.copy(m.specularColor),m.specularColorMap&&(d.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,d.specularColorMapTransform)),m.specularIntensityMap&&(d.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,m){m.matcap&&(d.matcap.value=m.matcap)}function _(d,m){const y=t.get(m).light;d.referencePosition.value.setFromMatrixPosition(y.matrixWorld),d.nearDistance.value=y.shadow.camera.near,d.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Zv(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function h(y,x){const S=x.program;n.uniformBlockBinding(y,S)}function l(y,x){let S=s[y.id];S===void 0&&(g(y),S=c(y),s[y.id]=S,y.addEventListener("dispose",d));const R=x.program;n.updateUBOMapping(y,R);const T=t.render.frame;r[y.id]!==T&&(f(y),r[y.id]=T)}function c(y){const x=u();y.__bindingPointIndex=x;const S=i.createBuffer(),R=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,R,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function u(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){const x=s[y.id],S=y.uniforms,R=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=S.length;T<C;T++){const P=Array.isArray(S[T])?S[T]:[S[T]];for(let tt=0,v=P.length;tt<v;tt++){const E=P[tt];if(p(E,T,tt,R)===!0){const W=E.__offset,z=Array.isArray(E.value)?E.value:[E.value];let k=0;for(let K=0;K<z.length;K++){const B=z[K],nt=_(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,i.bufferSubData(i.UNIFORM_BUFFER,W+k,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,k),k+=nt.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,W,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(y,x,S,R){const T=y.value,C=x+"_"+S;if(R[C]===void 0)return typeof T=="number"||typeof T=="boolean"?R[C]=T:R[C]=T.clone(),!0;{const P=R[C];if(typeof T=="number"||typeof T=="boolean"){if(P!==T)return R[C]=T,!0}else if(P.equals(T)===!1)return P.copy(T),!0}return!1}function g(y){const x=y.uniforms;let S=0;const R=16;for(let C=0,P=x.length;C<P;C++){const tt=Array.isArray(x[C])?x[C]:[x[C]];for(let v=0,E=tt.length;v<E;v++){const W=tt[v],z=Array.isArray(W.value)?W.value:[W.value];for(let k=0,K=z.length;k<K;k++){const B=z[k],nt=_(B),H=S%R,dt=H%nt.boundary,pt=H+dt;S+=dt,pt!==0&&R-pt<nt.storage&&(S+=R-pt),W.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=S,S+=nt.storage}}}const T=S%R;return T>0&&(S+=R-T),y.__size=S,y.__cache={},this}function _(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function d(y){const x=y.target;x.removeEventListener("dispose",d);const S=a.indexOf(x.__bindingPointIndex);a.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function m(){for(const y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:h,update:l,dispose:m}}class Jv{constructor(t={}){const{canvas:e=zp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,d=null;const m=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ui,this.toneMapping=nn,this.toneMappingExposure=1;const x=this;let S=!1,R=0,T=0,C=null,P=-1,tt=null;const v=new de,E=new de;let W=null;const z=new Xt(0);let k=0,K=e.width,B=e.height,nt=1,H=null,dt=null;const pt=new de(0,0,K,B),V=new de(0,0,K,B);let ct=!1;const mt=new nl;let G=!1,$=!1;const st=new le,Z=new le,yt=new L,Tt=new de,It={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ft=!1;function q(){return C===null?nt:1}let w=n;function at(b,D){return e.getContext(b,D)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:h,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Vh}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",wt,!1),w===null){const D="webgl2";if(w=at(D,b),w===null)throw at(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let rt,it,ht,bt,gt,A,M,U,Y,J,j,Dt,_t,Ct,Yt,ot,Rt,Gt,kt,Pt,jt,Vt,ae,I;function At(){rt=new n_(w),rt.init(),Vt=new Hv(w,rt),it=new Zg(w,rt,t,Vt),ht=new zv(w),it.reverseDepthBuffer&&ht.buffers.depth.setReversed(!0),bt=new a_(w),gt=new bv,A=new kv(w,rt,ht,gt,it,Vt,bt),M=new Qg(x),U=new i_(x),Y=new dm(w),ae=new jg(w,Y),J=new s_(w,Y,bt,ae),j=new h_(w,J,Y,bt),kt=new o_(w,it,A),ot=new Jg(gt),Dt=new Ev(x,M,U,rt,it,ae,ot),_t=new Kv(x,gt),Ct=new wv,Yt=new Iv(rt),Gt=new Yg(x,M,U,ht,j,f,h),Rt=new Fv(x,j,it),I=new Zv(w,bt,it,ht),Pt=new Kg(w,rt,bt),jt=new r_(w,rt,bt),bt.programs=Dt.programs,x.capabilities=it,x.extensions=rt,x.properties=gt,x.renderLists=Ct,x.shadowMap=Rt,x.state=ht,x.info=bt}At();const X=new Yv(x,w);this.xr=X,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return nt},this.setPixelRatio=function(b){b!==void 0&&(nt=b,this.setSize(K,B,!1))},this.getSize=function(b){return b.set(K,B)},this.setSize=function(b,D,O=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=b,B=D,e.width=Math.floor(b*nt),e.height=Math.floor(D*nt),O===!0&&(e.style.width=b+"px",e.style.height=D+"px"),this.setViewport(0,0,b,D)},this.getDrawingBufferSize=function(b){return b.set(K*nt,B*nt).floor()},this.setDrawingBufferSize=function(b,D,O){K=b,B=D,nt=O,e.width=Math.floor(b*O),e.height=Math.floor(D*O),this.setViewport(0,0,b,D)},this.getCurrentViewport=function(b){return b.copy(v)},this.getViewport=function(b){return b.copy(pt)},this.setViewport=function(b,D,O,F){b.isVector4?pt.set(b.x,b.y,b.z,b.w):pt.set(b,D,O,F),ht.viewport(v.copy(pt).multiplyScalar(nt).round())},this.getScissor=function(b){return b.copy(V)},this.setScissor=function(b,D,O,F){b.isVector4?V.set(b.x,b.y,b.z,b.w):V.set(b,D,O,F),ht.scissor(E.copy(V).multiplyScalar(nt).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(b){ht.setScissorTest(ct=b)},this.setOpaqueSort=function(b){H=b},this.setTransparentSort=function(b){dt=b},this.getClearColor=function(b){return b.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(b=!0,D=!0,O=!0){let F=0;if(b){let N=!1;if(C!==null){const ft=C.texture.format;N=ft===Kh||ft===jh||ft===Yh}if(N){const ft=C.texture.type,Et=ft===ki||ft===Rn||ft===rr||ft===bs||ft===$h||ft===qh,Lt=Gt.getClearColor(),Nt=Gt.getClearAlpha(),Bt=Lt.r,zt=Lt.g,Ut=Lt.b;Et?(p[0]=Bt,p[1]=zt,p[2]=Ut,p[3]=Nt,w.clearBufferuiv(w.COLOR,0,p)):(g[0]=Bt,g[1]=zt,g[2]=Ut,g[3]=Nt,w.clearBufferiv(w.COLOR,0,g))}else F|=w.COLOR_BUFFER_BIT}D&&(F|=w.DEPTH_BUFFER_BIT,w.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),O&&(F|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",wt,!1),Ct.dispose(),Yt.dispose(),gt.dispose(),M.dispose(),U.dispose(),j.dispose(),ae.dispose(),I.dispose(),Dt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Ol),X.removeEventListener("sessionend",Fl),pn.stop()};function Q(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const b=bt.autoReset,D=Rt.enabled,O=Rt.autoUpdate,F=Rt.needsUpdate,N=Rt.type;At(),bt.autoReset=b,Rt.enabled=D,Rt.autoUpdate=O,Rt.needsUpdate=F,Rt.type=N}function wt(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Kt(b){const D=b.target;D.removeEventListener("dispose",Kt),_e(D)}function _e(b){Ge(b),gt.remove(b)}function Ge(b){const D=gt.get(b).programs;D!==void 0&&(D.forEach(function(O){Dt.releaseProgram(O)}),b.isShaderMaterial&&Dt.releaseShaderCache(b))}this.renderBufferDirect=function(b,D,O,F,N,ft){D===null&&(D=It);const Et=N.isMesh&&N.matrixWorld.determinant()<0,Lt=Pd(b,D,O,F,N);ht.setMaterial(F,Et);let Nt=O.index,Bt=1;if(F.wireframe===!0){if(Nt=J.getWireframeAttribute(O),Nt===void 0)return;Bt=2}const zt=O.drawRange,Ut=O.attributes.position;let se=zt.start*Bt,oe=(zt.start+zt.count)*Bt;ft!==null&&(se=Math.max(se,ft.start*Bt),oe=Math.min(oe,(ft.start+ft.count)*Bt)),Nt!==null?(se=Math.max(se,0),oe=Math.min(oe,Nt.count)):Ut!=null&&(se=Math.max(se,0),oe=Math.min(oe,Ut.count));const fe=oe-se;if(fe<0||fe===1/0)return;ae.setup(N,F,Lt,O,Nt);let je,Qt=Pt;if(Nt!==null&&(je=Y.get(Nt),Qt=jt,Qt.setIndex(je)),N.isMesh)F.wireframe===!0?(ht.setLineWidth(F.wireframeLinewidth*q()),Qt.setMode(w.LINES)):Qt.setMode(w.TRIANGLES);else if(N.isLine){let Ot=F.linewidth;Ot===void 0&&(Ot=1),ht.setLineWidth(Ot*q()),N.isLineSegments?Qt.setMode(w.LINES):N.isLineLoop?Qt.setMode(w.LINE_LOOP):Qt.setMode(w.LINE_STRIP)}else N.isPoints?Qt.setMode(w.POINTS):N.isSprite&&Qt.setMode(w.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)Qt.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ot=N._multiDrawStarts,Ae=N._multiDrawCounts,te=N._multiDrawCount,oi=Nt?Y.get(Nt).bytesPerElement:1,Bn=gt.get(F).currentProgram.getUniforms();for(let Ke=0;Ke<te;Ke++)Bn.setValue(w,"_gl_DrawID",Ke),Qt.render(Ot[Ke]/oi,Ae[Ke])}else if(N.isInstancedMesh)Qt.renderInstances(se,fe,N.count);else if(O.isInstancedBufferGeometry){const Ot=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,Ae=Math.min(O.instanceCount,Ot);Qt.renderInstances(se,fe,Ae)}else Qt.render(se,fe)};function Jt(b,D,O){b.transparent===!0&&b.side===Si&&b.forceSinglePass===!1?(b.side=$e,b.needsUpdate=!0,Tr(b,D,O),b.side=rn,b.needsUpdate=!0,Tr(b,D,O),b.side=Si):Tr(b,D,O)}this.compile=function(b,D,O=null){O===null&&(O=b),d=Yt.get(O),d.init(D),y.push(d),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),b!==O&&b.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const F=new Set;return b.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ft=N.material;if(ft)if(Array.isArray(ft))for(let Et=0;Et<ft.length;Et++){const Lt=ft[Et];Jt(Lt,O,N),F.add(Lt)}else Jt(ft,O,N),F.add(ft)}),y.pop(),d=null,F},this.compileAsync=function(b,D,O=null){const F=this.compile(b,D,O);return new Promise(N=>{function ft(){if(F.forEach(function(Et){gt.get(Et).currentProgram.isReady()&&F.delete(Et)}),F.size===0){N(b);return}setTimeout(ft,10)}rt.get("KHR_parallel_shader_compile")!==null?ft():setTimeout(ft,10)})};let ke=null;function Ri(b){ke&&ke(b)}function Ol(){pn.stop()}function Fl(){pn.start()}const pn=new cf;pn.setAnimationLoop(Ri),typeof self<"u"&&pn.setContext(self),this.setAnimationLoop=function(b){ke=b,X.setAnimationLoop(b),b===null?pn.stop():pn.start()},X.addEventListener("sessionstart",Ol),X.addEventListener("sessionend",Fl),this.render=function(b,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(D),D=X.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,D,C),d=Yt.get(b,y.length),d.init(D),y.push(d),Z.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),mt.setFromProjectionMatrix(Z),$=this.localClippingEnabled,G=ot.init(this.clippingPlanes,$),_=Ct.get(b,m.length),_.init(),m.push(_),X.enabled===!0&&X.isPresenting===!0){const ft=x.xr.getDepthSensingMesh();ft!==null&&Va(ft,D,-1/0,x.sortObjects)}Va(b,D,0,x.sortObjects),_.finish(),x.sortObjects===!0&&_.sort(H,dt),Ft=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Ft&&Gt.addToRenderList(_,b),this.info.render.frame++,G===!0&&ot.beginShadows();const O=d.state.shadowsArray;Rt.render(O,b,D),G===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const F=_.opaque,N=_.transmissive;if(d.setupLights(),D.isArrayCamera){const ft=D.cameras;if(N.length>0)for(let Et=0,Lt=ft.length;Et<Lt;Et++){const Nt=ft[Et];zl(F,N,b,Nt)}Ft&&Gt.render(b);for(let Et=0,Lt=ft.length;Et<Lt;Et++){const Nt=ft[Et];Bl(_,b,Nt,Nt.viewport)}}else N.length>0&&zl(F,N,b,D),Ft&&Gt.render(b),Bl(_,b,D);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),b.isScene===!0&&b.onAfterRender(x,b,D),ae.resetDefaultState(),P=-1,tt=null,y.pop(),y.length>0?(d=y[y.length-1],G===!0&&ot.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Va(b,D,O,F){if(b.visible===!1)return;if(b.layers.test(D.layers)){if(b.isGroup)O=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(D);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||mt.intersectsSprite(b)){F&&Tt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Z);const Et=j.update(b),Lt=b.material;Lt.visible&&_.push(b,Et,Lt,O,Tt.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||mt.intersectsObject(b))){const Et=j.update(b),Lt=b.material;if(F&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Tt.copy(b.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Tt.copy(Et.boundingSphere.center)),Tt.applyMatrix4(b.matrixWorld).applyMatrix4(Z)),Array.isArray(Lt)){const Nt=Et.groups;for(let Bt=0,zt=Nt.length;Bt<zt;Bt++){const Ut=Nt[Bt],se=Lt[Ut.materialIndex];se&&se.visible&&_.push(b,Et,se,O,Tt.z,Ut)}}else Lt.visible&&_.push(b,Et,Lt,O,Tt.z,null)}}const ft=b.children;for(let Et=0,Lt=ft.length;Et<Lt;Et++)Va(ft[Et],D,O,F)}function Bl(b,D,O,F){const N=b.opaque,ft=b.transmissive,Et=b.transparent;d.setupLightsView(O),G===!0&&ot.setGlobalState(x.clippingPlanes,O),F&&ht.viewport(v.copy(F)),N.length>0&&wr(N,D,O),ft.length>0&&wr(ft,D,O),Et.length>0&&wr(Et,D,O),ht.buffers.depth.setTest(!0),ht.buffers.depth.setMask(!0),ht.buffers.color.setMask(!0),ht.setPolygonOffset(!1)}function zl(b,D,O,F){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[F.id]===void 0&&(d.state.transmissionRenderTarget[F.id]=new Pn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?vr:ki,minFilter:Tn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const ft=d.state.transmissionRenderTarget[F.id],Et=F.viewport||v;ft.setSize(Et.z,Et.w);const Lt=x.getRenderTarget();x.setRenderTarget(ft),x.getClearColor(z),k=x.getClearAlpha(),k<1&&x.setClearColor(16777215,.5),x.clear(),Ft&&Gt.render(O);const Nt=x.toneMapping;x.toneMapping=nn;const Bt=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),d.setupLightsView(F),G===!0&&ot.setGlobalState(x.clippingPlanes,F),wr(b,O,F),A.updateMultisampleRenderTarget(ft),A.updateRenderTargetMipmap(ft),rt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Ut=0,se=D.length;Ut<se;Ut++){const oe=D[Ut],fe=oe.object,je=oe.geometry,Qt=oe.material,Ot=oe.group;if(Qt.side===Si&&fe.layers.test(F.layers)){const Ae=Qt.side;Qt.side=$e,Qt.needsUpdate=!0,Gl(fe,O,F,je,Qt,Ot),Qt.side=Ae,Qt.needsUpdate=!0,zt=!0}}zt===!0&&(A.updateMultisampleRenderTarget(ft),A.updateRenderTargetMipmap(ft))}x.setRenderTarget(Lt),x.setClearColor(z,k),Bt!==void 0&&(F.viewport=Bt),x.toneMapping=Nt}function wr(b,D,O){const F=D.isScene===!0?D.overrideMaterial:null;for(let N=0,ft=b.length;N<ft;N++){const Et=b[N],Lt=Et.object,Nt=Et.geometry,Bt=F===null?Et.material:F,zt=Et.group;Lt.layers.test(O.layers)&&Gl(Lt,D,O,Nt,Bt,zt)}}function Gl(b,D,O,F,N,ft){b.onBeforeRender(x,D,O,F,N,ft),b.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),N.onBeforeRender(x,D,O,F,b,ft),N.transparent===!0&&N.side===Si&&N.forceSinglePass===!1?(N.side=$e,N.needsUpdate=!0,x.renderBufferDirect(O,D,F,N,b,ft),N.side=rn,N.needsUpdate=!0,x.renderBufferDirect(O,D,F,N,b,ft),N.side=Si):x.renderBufferDirect(O,D,F,N,b,ft),b.onAfterRender(x,D,O,F,N,ft)}function Tr(b,D,O){D.isScene!==!0&&(D=It);const F=gt.get(b),N=d.state.lights,ft=d.state.shadowsArray,Et=N.state.version,Lt=Dt.getParameters(b,N.state,ft,D,O),Nt=Dt.getProgramCacheKey(Lt);let Bt=F.programs;F.environment=b.isMeshStandardMaterial?D.environment:null,F.fog=D.fog,F.envMap=(b.isMeshStandardMaterial?U:M).get(b.envMap||F.environment),F.envMapRotation=F.environment!==null&&b.envMap===null?D.environmentRotation:b.envMapRotation,Bt===void 0&&(b.addEventListener("dispose",Kt),Bt=new Map,F.programs=Bt);let zt=Bt.get(Nt);if(zt!==void 0){if(F.currentProgram===zt&&F.lightsStateVersion===Et)return Hl(b,Lt),zt}else Lt.uniforms=Dt.getUniforms(b),b.onBeforeCompile(Lt,x),zt=Dt.acquireProgram(Lt,Nt),Bt.set(Nt,zt),F.uniforms=Lt.uniforms;const Ut=F.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ut.clippingPlanes=ot.uniform),Hl(b,Lt),F.needsLights=Id(b),F.lightsStateVersion=Et,F.needsLights&&(Ut.ambientLightColor.value=N.state.ambient,Ut.lightProbe.value=N.state.probe,Ut.directionalLights.value=N.state.directional,Ut.directionalLightShadows.value=N.state.directionalShadow,Ut.spotLights.value=N.state.spot,Ut.spotLightShadows.value=N.state.spotShadow,Ut.rectAreaLights.value=N.state.rectArea,Ut.ltc_1.value=N.state.rectAreaLTC1,Ut.ltc_2.value=N.state.rectAreaLTC2,Ut.pointLights.value=N.state.point,Ut.pointLightShadows.value=N.state.pointShadow,Ut.hemisphereLights.value=N.state.hemi,Ut.directionalShadowMap.value=N.state.directionalShadowMap,Ut.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ut.spotShadowMap.value=N.state.spotShadowMap,Ut.spotLightMatrix.value=N.state.spotLightMatrix,Ut.spotLightMap.value=N.state.spotLightMap,Ut.pointShadowMap.value=N.state.pointShadowMap,Ut.pointShadowMatrix.value=N.state.pointShadowMatrix),F.currentProgram=zt,F.uniformsList=null,zt}function kl(b){if(b.uniformsList===null){const D=b.currentProgram.getUniforms();b.uniformsList=ma.seqWithValue(D.seq,b.uniforms)}return b.uniformsList}function Hl(b,D){const O=gt.get(b);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.batchingColor=D.batchingColor,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.instancingMorph=D.instancingMorph,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Pd(b,D,O,F,N){D.isScene!==!0&&(D=It),A.resetTextureUnits();const ft=D.fog,Et=F.isMeshStandardMaterial?D.environment:null,Lt=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:cn,Nt=(F.isMeshStandardMaterial?U:M).get(F.envMap||Et),Bt=F.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,zt=!!O.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Ut=!!O.morphAttributes.position,se=!!O.morphAttributes.normal,oe=!!O.morphAttributes.color;let fe=nn;F.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(fe=x.toneMapping);const je=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Qt=je!==void 0?je.length:0,Ot=gt.get(F),Ae=d.state.lights;if(G===!0&&($===!0||b!==tt)){const ii=b===tt&&F.id===P;ot.setState(F,b,ii)}let te=!1;F.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==Ae.state.version||Ot.outputColorSpace!==Lt||N.isBatchedMesh&&Ot.batching===!1||!N.isBatchedMesh&&Ot.batching===!0||N.isBatchedMesh&&Ot.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ot.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ot.instancing===!1||!N.isInstancedMesh&&Ot.instancing===!0||N.isSkinnedMesh&&Ot.skinning===!1||!N.isSkinnedMesh&&Ot.skinning===!0||N.isInstancedMesh&&Ot.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ot.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ot.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ot.instancingMorph===!1&&N.morphTexture!==null||Ot.envMap!==Nt||F.fog===!0&&Ot.fog!==ft||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==ot.numPlanes||Ot.numIntersection!==ot.numIntersection)||Ot.vertexAlphas!==Bt||Ot.vertexTangents!==zt||Ot.morphTargets!==Ut||Ot.morphNormals!==se||Ot.morphColors!==oe||Ot.toneMapping!==fe||Ot.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Ot.__version=F.version);let oi=Ot.currentProgram;te===!0&&(oi=Tr(F,D,N));let Bn=!1,Ke=!1,Wa=!1;const pe=oi.getUniforms(),Vi=Ot.uniforms;if(ht.useProgram(oi.program)&&(Bn=!0,Ke=!0,Wa=!0),F.id!==P&&(P=F.id,Ke=!0),Bn||tt!==b){it.reverseDepthBuffer?(st.copy(b.projectionMatrix),kp(st),Hp(st),pe.setValue(w,"projectionMatrix",st)):pe.setValue(w,"projectionMatrix",b.projectionMatrix),pe.setValue(w,"viewMatrix",b.matrixWorldInverse);const ii=pe.map.cameraPosition;ii!==void 0&&ii.setValue(w,yt.setFromMatrixPosition(b.matrixWorld)),it.logarithmicDepthBuffer&&pe.setValue(w,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&pe.setValue(w,"isOrthographic",b.isOrthographicCamera===!0),tt!==b&&(tt=b,Ke=!0,Wa=!0)}if(N.isSkinnedMesh){pe.setOptional(w,N,"bindMatrix"),pe.setOptional(w,N,"bindMatrixInverse");const ii=N.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),pe.setValue(w,"boneTexture",ii.boneTexture,A))}N.isBatchedMesh&&(pe.setOptional(w,N,"batchingTexture"),pe.setValue(w,"batchingTexture",N._matricesTexture,A),pe.setOptional(w,N,"batchingIdTexture"),pe.setValue(w,"batchingIdTexture",N._indirectTexture,A),pe.setOptional(w,N,"batchingColorTexture"),N._colorsTexture!==null&&pe.setValue(w,"batchingColorTexture",N._colorsTexture,A));const Xa=O.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0)&&kt.update(N,O,oi),(Ke||Ot.receiveShadow!==N.receiveShadow)&&(Ot.receiveShadow=N.receiveShadow,pe.setValue(w,"receiveShadow",N.receiveShadow)),F.isMeshGouraudMaterial&&F.envMap!==null&&(Vi.envMap.value=Nt,Vi.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),F.isMeshStandardMaterial&&F.envMap===null&&D.environment!==null&&(Vi.envMapIntensity.value=D.environmentIntensity),Ke&&(pe.setValue(w,"toneMappingExposure",x.toneMappingExposure),Ot.needsLights&&Ld(Vi,Wa),ft&&F.fog===!0&&_t.refreshFogUniforms(Vi,ft),_t.refreshMaterialUniforms(Vi,F,nt,B,d.state.transmissionRenderTarget[b.id]),ma.upload(w,kl(Ot),Vi,A)),F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(ma.upload(w,kl(Ot),Vi,A),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&pe.setValue(w,"center",N.center),pe.setValue(w,"modelViewMatrix",N.modelViewMatrix),pe.setValue(w,"normalMatrix",N.normalMatrix),pe.setValue(w,"modelMatrix",N.matrixWorld),F.isShaderMaterial||F.isRawShaderMaterial){const ii=F.uniformsGroups;for(let $a=0,Dd=ii.length;$a<Dd;$a++){const Vl=ii[$a];I.update(Vl,oi),I.bind(Vl,oi)}}return oi}function Ld(b,D){b.ambientLightColor.needsUpdate=D,b.lightProbe.needsUpdate=D,b.directionalLights.needsUpdate=D,b.directionalLightShadows.needsUpdate=D,b.pointLights.needsUpdate=D,b.pointLightShadows.needsUpdate=D,b.spotLights.needsUpdate=D,b.spotLightShadows.needsUpdate=D,b.rectAreaLights.needsUpdate=D,b.hemisphereLights.needsUpdate=D}function Id(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(b,D,O){gt.get(b.texture).__webglTexture=D,gt.get(b.depthTexture).__webglTexture=O;const F=gt.get(b);F.__hasExternalTextures=!0,F.__autoAllocateDepthBuffer=O===void 0,F.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),F.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,D){const O=gt.get(b);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(b,D=0,O=0){C=b,R=D,T=O;let F=!0,N=null,ft=!1,Et=!1;if(b){const Nt=gt.get(b);if(Nt.__useDefaultFramebuffer!==void 0)ht.bindFramebuffer(w.FRAMEBUFFER,null),F=!1;else if(Nt.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(Nt.__hasExternalTextures)A.rebindTextures(b,gt.get(b.texture).__webglTexture,gt.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ut=b.depthTexture;if(Nt.__boundDepthTexture!==Ut){if(Ut!==null&&gt.has(Ut)&&(b.width!==Ut.image.width||b.height!==Ut.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const Bt=b.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(Et=!0);const zt=gt.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(zt[D])?N=zt[D][O]:N=zt[D],ft=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?N=gt.get(b).__webglMultisampledFramebuffer:Array.isArray(zt)?N=zt[O]:N=zt,v.copy(b.viewport),E.copy(b.scissor),W=b.scissorTest}else v.copy(pt).multiplyScalar(nt).floor(),E.copy(V).multiplyScalar(nt).floor(),W=ct;if(ht.bindFramebuffer(w.FRAMEBUFFER,N)&&F&&ht.drawBuffers(b,N),ht.viewport(v),ht.scissor(E),ht.setScissorTest(W),ft){const Nt=gt.get(b.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+D,Nt.__webglTexture,O)}else if(Et){const Nt=gt.get(b.texture),Bt=D||0;w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,Nt.__webglTexture,O||0,Bt)}P=-1},this.readRenderTargetPixels=function(b,D,O,F,N,ft,Et){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){ht.bindFramebuffer(w.FRAMEBUFFER,Lt);try{const Nt=b.texture,Bt=Nt.format,zt=Nt.type;if(!it.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!it.textureTypeReadable(zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=b.width-F&&O>=0&&O<=b.height-N&&w.readPixels(D,O,F,N,Vt.convert(Bt),Vt.convert(zt),ft)}finally{const Nt=C!==null?gt.get(C).__webglFramebuffer:null;ht.bindFramebuffer(w.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(b,D,O,F,N,ft,Et){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=gt.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Et!==void 0&&(Lt=Lt[Et]),Lt){const Nt=b.texture,Bt=Nt.format,zt=Nt.type;if(!it.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!it.textureTypeReadable(zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=b.width-F&&O>=0&&O<=b.height-N){ht.bindFramebuffer(w.FRAMEBUFFER,Lt);const Ut=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,Ut),w.bufferData(w.PIXEL_PACK_BUFFER,ft.byteLength,w.STREAM_READ),w.readPixels(D,O,F,N,Vt.convert(Bt),Vt.convert(zt),0);const se=C!==null?gt.get(C).__webglFramebuffer:null;ht.bindFramebuffer(w.FRAMEBUFFER,se);const oe=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Gp(w,oe,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,Ut),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,ft),w.deleteBuffer(Ut),w.deleteSync(oe),ft}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,D=null,O=0){b.isTexture!==!0&&(pa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,b=arguments[1]);const F=Math.pow(2,-O),N=Math.floor(b.image.width*F),ft=Math.floor(b.image.height*F),Et=D!==null?D.x:0,Lt=D!==null?D.y:0;A.setTexture2D(b,0),w.copyTexSubImage2D(w.TEXTURE_2D,O,0,0,Et,Lt,N,ft),ht.unbindTexture()},this.copyTextureToTexture=function(b,D,O=null,F=null,N=0){b.isTexture!==!0&&(pa("WebGLRenderer: copyTextureToTexture function signature has changed."),F=arguments[0]||null,b=arguments[1],D=arguments[2],N=arguments[3]||0,O=null);let ft,Et,Lt,Nt,Bt,zt;O!==null?(ft=O.max.x-O.min.x,Et=O.max.y-O.min.y,Lt=O.min.x,Nt=O.min.y):(ft=b.image.width,Et=b.image.height,Lt=0,Nt=0),F!==null?(Bt=F.x,zt=F.y):(Bt=0,zt=0);const Ut=Vt.convert(D.format),se=Vt.convert(D.type);A.setTexture2D(D,0),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);const oe=w.getParameter(w.UNPACK_ROW_LENGTH),fe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),je=w.getParameter(w.UNPACK_SKIP_PIXELS),Qt=w.getParameter(w.UNPACK_SKIP_ROWS),Ot=w.getParameter(w.UNPACK_SKIP_IMAGES),Ae=b.isCompressedTexture?b.mipmaps[N]:b.image;w.pixelStorei(w.UNPACK_ROW_LENGTH,Ae.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Ae.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Lt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Nt),b.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,N,Bt,zt,ft,Et,Ut,se,Ae.data):b.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,N,Bt,zt,Ae.width,Ae.height,Ut,Ae.data):w.texSubImage2D(w.TEXTURE_2D,N,Bt,zt,ft,Et,Ut,se,Ae),w.pixelStorei(w.UNPACK_ROW_LENGTH,oe),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,fe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,je),w.pixelStorei(w.UNPACK_SKIP_ROWS,Qt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ot),N===0&&D.generateMipmaps&&w.generateMipmap(w.TEXTURE_2D),ht.unbindTexture()},this.copyTextureToTexture3D=function(b,D,O=null,F=null,N=0){b.isTexture!==!0&&(pa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),O=arguments[0]||null,F=arguments[1]||null,b=arguments[2],D=arguments[3],N=arguments[4]||0);let ft,Et,Lt,Nt,Bt,zt,Ut,se,oe;const fe=b.isCompressedTexture?b.mipmaps[N]:b.image;O!==null?(ft=O.max.x-O.min.x,Et=O.max.y-O.min.y,Lt=O.max.z-O.min.z,Nt=O.min.x,Bt=O.min.y,zt=O.min.z):(ft=fe.width,Et=fe.height,Lt=fe.depth,Nt=0,Bt=0,zt=0),F!==null?(Ut=F.x,se=F.y,oe=F.z):(Ut=0,se=0,oe=0);const je=Vt.convert(D.format),Qt=Vt.convert(D.type);let Ot;if(D.isData3DTexture)A.setTexture3D(D,0),Ot=w.TEXTURE_3D;else if(D.isDataArrayTexture||D.isCompressedArrayTexture)A.setTexture2DArray(D,0),Ot=w.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,D.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,D.unpackAlignment);const Ae=w.getParameter(w.UNPACK_ROW_LENGTH),te=w.getParameter(w.UNPACK_IMAGE_HEIGHT),oi=w.getParameter(w.UNPACK_SKIP_PIXELS),Bn=w.getParameter(w.UNPACK_SKIP_ROWS),Ke=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,fe.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,fe.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,Nt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bt),w.pixelStorei(w.UNPACK_SKIP_IMAGES,zt),b.isDataTexture||b.isData3DTexture?w.texSubImage3D(Ot,N,Ut,se,oe,ft,Et,Lt,je,Qt,fe.data):D.isCompressedArrayTexture?w.compressedTexSubImage3D(Ot,N,Ut,se,oe,ft,Et,Lt,je,fe.data):w.texSubImage3D(Ot,N,Ut,se,oe,ft,Et,Lt,je,Qt,fe),w.pixelStorei(w.UNPACK_ROW_LENGTH,Ae),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,te),w.pixelStorei(w.UNPACK_SKIP_PIXELS,oi),w.pixelStorei(w.UNPACK_SKIP_ROWS,Bn),w.pixelStorei(w.UNPACK_SKIP_IMAGES,Ke),N===0&&D.generateMipmaps&&w.generateMipmap(Ot),ht.unbindTexture()},this.initRenderTarget=function(b){gt.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),ht.unbindTexture()},this.resetState=function(){R=0,T=0,C=null,ht.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===Jh?"display-p3":"srgb",e.unpackColorSpace=ne.workingColorSpace===Ua?"display-p3":"srgb"}}class Qv extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new gi,this.environmentIntensity=1,this.environmentRotation=new gi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class _f extends Be{constructor(t=null,e=1,n=1,s,r,a,o,h,l=Xe,c=Xe,u,f){super(null,a,o,h,l,c,s,r,u,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class rl extends On{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ba=new L,Aa=new L,kc=new le,Gs=new Fa,jr=new Oa,Eo=new L,Hc=new L;class tx extends Te{constructor(t=new ai,e=new rl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ba.fromBufferAttribute(e,s-1),Aa.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ba.distanceTo(Aa);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jr.copy(n.boundingSphere),jr.applyMatrix4(s),jr.radius+=r,t.ray.intersectsSphere(jr)===!1)return;kc.copy(s).invert(),Gs.copy(t.ray).applyMatrix4(kc);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),h=o*o,l=this.isLineSegments?2:1,c=n.index,f=n.attributes.position;if(c!==null){const p=Math.max(0,a.start),g=Math.min(c.count,a.start+a.count);for(let _=p,d=g-1;_<d;_+=l){const m=c.getX(_),y=c.getX(_+1),x=Kr(this,t,Gs,h,m,y);x&&e.push(x)}if(this.isLineLoop){const _=c.getX(g-1),d=c.getX(p),m=Kr(this,t,Gs,h,_,d);m&&e.push(m)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,d=g-1;_<d;_+=l){const m=Kr(this,t,Gs,h,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=Kr(this,t,Gs,h,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Kr(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(ba.fromBufferAttribute(a,s),Aa.fromBufferAttribute(a,r),e.distanceSqToSegment(ba,Aa,Eo,Hc)>n)return;Eo.applyMatrix4(i.matrixWorld);const h=t.ray.origin.distanceTo(Eo);if(!(h<t.near||h>t.far))return{distance:h,point:Hc.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Vc=new L,Wc=new L;class vf extends tx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Vc.fromBufferAttribute(e,s),Wc.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Vc.distanceTo(Wc);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,h=r-1,l;for(;o<=h;)if(s=Math.floor(o+(h-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)h=s-1;else{h=s;break}if(s=h,n[s]===a)return s/(r-1);const c=n[s],f=n[s+1]-c,p=(a-c)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),h=e||(a.isVector2?new ut:new L);return h.copy(o).sub(a).normalize(),h}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new L,s=[],r=[],a=[],o=new L,h=new le;for(let p=0;p<=t;p++){const g=p/t;s[p]=this.getTangentAt(g,new L)}r[0]=new L,a[0]=new L;let l=Number.MAX_VALUE;const c=Math.abs(s[0].x),u=Math.abs(s[0].y),f=Math.abs(s[0].z);c<=l&&(l=c,n.set(1,0,0)),u<=l&&(l=u,n.set(0,1,0)),f<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),a[p]=a[p-1].clone(),o.crossVectors(s[p-1],s[p]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Me(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(h.makeRotationAxis(o,g))}a[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Me(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(h.makeRotationAxis(s[g],p*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}class al extends Ci{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=h}getPoint(t,e=new ut){const n=e,s=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);const o=this.aStartAngle+t*r;let h=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const c=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=h-this.aX,p=l-this.aY;h=f*c-p*u+this.aX,l=f*u+p*c+this.aY}return n.set(h,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){const t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}}class ex extends al{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}}function ol(){let i=0,t=0,e=0,n=0;function s(r,a,o,h){i=r,t=o,e=-3*r+3*a-2*o-h,n=2*r-2*a+o+h}return{initCatmullRom:function(r,a,o,h,l){s(a,o,l*(o-r),l*(h-a))},initNonuniformCatmullRom:function(r,a,o,h,l,c,u){let f=(a-r)/l-(o-r)/(l+c)+(o-a)/c,p=(o-a)/c-(h-a)/(c+u)+(h-o)/u;f*=c,p*=c,s(a,o,f,p)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const Zr=new L,bo=new ol,Ao=new ol,wo=new ol;class ix extends Ci{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),h=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:h===0&&o===r-1&&(o=r-2,h=1);let l,c;this.closed||o>0?l=s[(o-1)%r]:(Zr.subVectors(s[0],s[1]).add(s[0]),l=Zr);const u=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?c=s[(o+2)%r]:(Zr.subVectors(s[r-1],s[r-2]).add(s[r-1]),c=Zr),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(l.distanceToSquared(u),p),_=Math.pow(u.distanceToSquared(f),p),d=Math.pow(f.distanceToSquared(c),p);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),bo.initNonuniformCatmullRom(l.x,u.x,f.x,c.x,g,_,d),Ao.initNonuniformCatmullRom(l.y,u.y,f.y,c.y,g,_,d),wo.initNonuniformCatmullRom(l.z,u.z,f.z,c.z,g,_,d)}else this.curveType==="catmullrom"&&(bo.initCatmullRom(l.x,u.x,f.x,c.x,this.tension),Ao.initCatmullRom(l.y,u.y,f.y,c.y,this.tension),wo.initCatmullRom(l.z,u.z,f.z,c.z,this.tension));return n.set(bo.calc(h),Ao.calc(h),wo.calc(h)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}function Xc(i,t,e,n,s){const r=(n-t)*.5,a=(s-e)*.5,o=i*i,h=i*o;return(2*e-2*n+r+a)*h+(-3*e+3*n-2*r-a)*o+r*i+e}function nx(i,t){const e=1-i;return e*e*t}function sx(i,t){return 2*(1-i)*i*t}function rx(i,t){return i*i*t}function js(i,t,e,n){return nx(i,t)+sx(i,e)+rx(i,n)}function ax(i,t){const e=1-i;return e*e*e*t}function ox(i,t){const e=1-i;return 3*e*e*i*t}function hx(i,t){return 3*(1-i)*i*i*t}function lx(i,t){return i*i*i*t}function Ks(i,t,e,n,s){return ax(i,t)+ox(i,e)+hx(i,n)+lx(i,s)}class xf extends Ci{constructor(t=new ut,e=new ut,n=new ut,s=new ut){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class cx extends Ci{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ks(t,s.x,r.x,a.x,o.x),Ks(t,s.y,r.y,a.y,o.y),Ks(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}}class Mf extends Ci{constructor(t=new ut,e=new ut){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new ut){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new ut){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class ux extends Ci{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){const n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class yf extends Ci{constructor(t=new ut,e=new ut,n=new ut){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new ut){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class fx extends Ci{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){const n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(js(t,s.x,r.x,a.x),js(t,s.y,r.y,a.y),js(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){const t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}}class Sf extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new ut){const n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,h=s[a===0?a:a-1],l=s[a],c=s[a>s.length-2?s.length-1:a+1],u=s[a>s.length-3?s.length-1:a+2];return n.set(Xc(o,h.x,l.x,c.x,u.x),Xc(o,h.y,l.y,c.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new ut().fromArray(s))}return this}}var Th=Object.freeze({__proto__:null,ArcCurve:ex,CatmullRomCurve3:ix,CubicBezierCurve:xf,CubicBezierCurve3:cx,EllipseCurve:al,LineCurve:Mf,LineCurve3:ux,QuadraticBezierCurve:yf,QuadraticBezierCurve3:fx,SplineCurve:Sf});class dx extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){const t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){const n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Th[n](e,t))}return this}getPoint(t,e){const n=t*this.getLength(),s=this.getCurveLengths();let r=0;for(;r<s.length;){if(s[r]>=n){const a=s[r]-n,o=this.curves[r],h=o.getLength(),l=h===0?0:1-a/h;return o.getPointAt(l,e)}r++}return null}getLength(){const t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const t=[];let e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){const e=[];let n;for(let s=0,r=this.curves;s<r.length;s++){const a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,h=a.getPoints(o);for(let l=0;l<h.length;l++){const c=h[l];n&&n.equals(c)||(e.push(c),n=c)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){const t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){const s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){const s=t.curves[e];this.curves.push(new Th[s.type]().fromJSON(s))}return this}}class $c extends dx{constructor(t){super(),this.type="Path",this.currentPoint=new ut,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){const n=new Mf(this.currentPoint.clone(),new ut(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){const r=new yf(this.currentPoint.clone(),new ut(t,e),new ut(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){const o=new xf(this.currentPoint.clone(),new ut(t,e),new ut(n,s),new ut(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){const e=[this.currentPoint.clone()].concat(t),n=new Sf(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){const o=this.currentPoint.x,h=this.currentPoint.y;return this.absarc(t+o,e+h,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,h){const l=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(t+l,e+c,n,s,r,a,o,h),this}absellipse(t,e,n,s,r,a,o,h){const l=new al(t,e,n,s,r,a,o,h);if(this.curves.length>0){const u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);const c=l.getPoint(1);return this.currentPoint.copy(c),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){const t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}}class Ef extends $c{constructor(t){super(t),this.uuid=Un(),this.type="Shape",this.holes=[]}getPointsHoles(t){const e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){const t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){const s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){const s=t.holes[e];this.holes.push(new $c().fromJSON(s))}return this}}const px={triangulate:function(i,t,e=2){const n=t&&t.length,s=n?t[0]*e:i.length;let r=bf(i,0,s,e,!0);const a=[];if(!r||r.next===r.prev)return a;let o,h,l,c,u,f,p;if(n&&(r=xx(i,t,r,e)),i.length>80*e){o=l=i[0],h=c=i[1];for(let g=e;g<s;g+=e)u=i[g],f=i[g+1],u<o&&(o=u),f<h&&(h=f),u>l&&(l=u),f>c&&(c=f);p=Math.max(l-o,c-h),p=p!==0?32767/p:0}return hr(r,a,e,o,h,p,0),a}};function bf(i,t,e,n,s){let r,a;if(s===Px(i,t,e,n)>0)for(r=t;r<e;r+=n)a=qc(r,i[r],i[r+1],a);else for(r=e-n;r>=t;r-=n)a=qc(r,i[r],i[r+1],a);return a&&za(a,a.next)&&(cr(a),a=a.next),a}function In(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(za(e,e.next)||ue(e.prev,e,e.next)===0)){if(cr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function hr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&bx(i,n,s,r);let o=i,h,l;for(;i.prev!==i.next;){if(h=i.prev,l=i.next,r?gx(i,n,s,r):mx(i)){t.push(h.i/e|0),t.push(i.i/e|0),t.push(l.i/e|0),cr(i),i=l.next,o=l.next;continue}if(i=l,i===o){a?a===1?(i=_x(In(i),t,e),hr(i,t,e,n,s,r,2)):a===2&&vx(i,t,e,n,s,r):hr(In(i),t,e,n,s,r,1);break}}}function mx(i){const t=i.prev,e=i,n=i.next;if(ue(t,e,n)>=0)return!1;const s=t.x,r=e.x,a=n.x,o=t.y,h=e.y,l=n.y,c=s<r?s<a?s:a:r<a?r:a,u=o<h?o<l?o:l:h<l?h:l,f=s>r?s>a?s:a:r>a?r:a,p=o>h?o>l?o:l:h>l?h:l;let g=n.next;for(;g!==t;){if(g.x>=c&&g.x<=f&&g.y>=u&&g.y<=p&&as(s,o,r,h,a,l,g.x,g.y)&&ue(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function gx(i,t,e,n){const s=i.prev,r=i,a=i.next;if(ue(s,r,a)>=0)return!1;const o=s.x,h=r.x,l=a.x,c=s.y,u=r.y,f=a.y,p=o<h?o<l?o:l:h<l?h:l,g=c<u?c<f?c:f:u<f?u:f,_=o>h?o>l?o:l:h>l?h:l,d=c>u?c>f?c:f:u>f?u:f,m=Ch(p,g,t,e,n),y=Ch(_,d,t,e,n);let x=i.prevZ,S=i.nextZ;for(;x&&x.z>=m&&S&&S.z<=y;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==a&&as(o,c,h,u,l,f,x.x,x.y)&&ue(x.prev,x,x.next)>=0||(x=x.prevZ,S.x>=p&&S.x<=_&&S.y>=g&&S.y<=d&&S!==s&&S!==a&&as(o,c,h,u,l,f,S.x,S.y)&&ue(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;x&&x.z>=m;){if(x.x>=p&&x.x<=_&&x.y>=g&&x.y<=d&&x!==s&&x!==a&&as(o,c,h,u,l,f,x.x,x.y)&&ue(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;S&&S.z<=y;){if(S.x>=p&&S.x<=_&&S.y>=g&&S.y<=d&&S!==s&&S!==a&&as(o,c,h,u,l,f,S.x,S.y)&&ue(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function _x(i,t,e){let n=i;do{const s=n.prev,r=n.next.next;!za(s,r)&&Af(s,n,n.next,r)&&lr(s,r)&&lr(r,s)&&(t.push(s.i/e|0),t.push(n.i/e|0),t.push(r.i/e|0),cr(n),cr(n.next),n=i=r),n=n.next}while(n!==i);return In(n)}function vx(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Tx(a,o)){let h=wf(a,o);a=In(a,a.next),h=In(h,h.next),hr(a,t,e,n,s,r,0),hr(h,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function xx(i,t,e,n){const s=[];let r,a,o,h,l;for(r=0,a=t.length;r<a;r++)o=t[r]*n,h=r<a-1?t[r+1]*n:i.length,l=bf(i,o,h,n,!1),l===l.next&&(l.steiner=!0),s.push(wx(l));for(s.sort(Mx),r=0;r<s.length;r++)e=yx(s[r],e);return e}function Mx(i,t){return i.x-t.x}function yx(i,t){const e=Sx(i,t);if(!e)return t;const n=wf(e,i);return In(n,n.next),In(e,e.next)}function Sx(i,t){let e=t,n=-1/0,s;const r=i.x,a=i.y;do{if(a<=e.y&&a>=e.next.y&&e.next.y!==e.y){const f=e.x+(a-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(f<=r&&f>n&&(n=f,s=e.x<e.next.x?e:e.next,f===r))return s}e=e.next}while(e!==t);if(!s)return null;const o=s,h=s.x,l=s.y;let c=1/0,u;e=s;do r>=e.x&&e.x>=h&&r!==e.x&&as(a<l?r:n,a,h,l,a<l?n:r,a,e.x,e.y)&&(u=Math.abs(a-e.y)/(r-e.x),lr(e,i)&&(u<c||u===c&&(e.x>s.x||e.x===s.x&&Ex(s,e)))&&(s=e,c=u)),e=e.next;while(e!==o);return s}function Ex(i,t){return ue(i.prev,i,t.prev)<0&&ue(t.next,i,i.next)<0}function bx(i,t,e,n){let s=i;do s.z===0&&(s.z=Ch(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Ax(s)}function Ax(i){let t,e,n,s,r,a,o,h,l=1;do{for(e=i,i=null,r=null,a=0;e;){for(a++,n=e,o=0,t=0;t<l&&(o++,n=n.nextZ,!!n);t++);for(h=l;o>0||h>0&&n;)o!==0&&(h===0||!n||e.z<=n.z)?(s=e,e=e.nextZ,o--):(s=n,n=n.nextZ,h--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;e=n}r.nextZ=null,l*=2}while(a>1);return i}function Ch(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function wx(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function as(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Tx(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!Cx(i,t)&&(lr(i,t)&&lr(t,i)&&Rx(i,t)&&(ue(i.prev,i,t.prev)||ue(i,t.prev,t))||za(i,t)&&ue(i.prev,i,i.next)>0&&ue(t.prev,t,t.next)>0)}function ue(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function za(i,t){return i.x===t.x&&i.y===t.y}function Af(i,t,e,n){const s=Qr(ue(i,t,e)),r=Qr(ue(i,t,n)),a=Qr(ue(e,n,i)),o=Qr(ue(e,n,t));return!!(s!==r&&a!==o||s===0&&Jr(i,e,t)||r===0&&Jr(i,n,t)||a===0&&Jr(e,i,n)||o===0&&Jr(e,t,n))}function Jr(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function Qr(i){return i>0?1:i<0?-1:0}function Cx(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Af(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function lr(i,t){return ue(i.prev,i,i.next)<0?ue(i,t,i.next)>=0&&ue(i,i.prev,t)>=0:ue(i,t,i.prev)<0||ue(i,i.next,t)<0}function Rx(i,t){let e=i,n=!1;const s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function wf(i,t){const e=new Rh(i.i,i.x,i.y),n=new Rh(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function qc(i,t,e,n){const s=new Rh(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function cr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Rh(i,t,e){this.i=i,this.x=t,this.y=e,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function Px(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}class Zs{static area(t){const e=t.length;let n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return Zs.area(t)<0}static triangulateShape(t,e){const n=[],s=[],r=[];Yc(t),jc(n,t);let a=t.length;e.forEach(Yc);for(let h=0;h<e.length;h++)s.push(a),a+=e[h].length,jc(n,e[h]);const o=px.triangulate(n,s);for(let h=0;h<o.length;h+=3)r.push(o.slice(h,h+3));return r}}function Yc(i){const t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function jc(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}class hl extends ai{constructor(t=new Ef([new ut(.5,.5),new ut(-.5,.5),new ut(-.5,-.5),new ut(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];const n=this,s=[],r=[];for(let o=0,h=t.length;o<h;o++){const l=t[o];a(l)}this.setAttribute("position",new ye(s,3)),this.setAttribute("uv",new ye(r,2)),this.computeVertexNormals();function a(o){const h=[],l=e.curveSegments!==void 0?e.curveSegments:12,c=e.steps!==void 0?e.steps:1,u=e.depth!==void 0?e.depth:1;let f=e.bevelEnabled!==void 0?e.bevelEnabled:!0,p=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:p-.1,_=e.bevelOffset!==void 0?e.bevelOffset:0,d=e.bevelSegments!==void 0?e.bevelSegments:3;const m=e.extrudePath,y=e.UVGenerator!==void 0?e.UVGenerator:Lx;let x,S=!1,R,T,C,P;m&&(x=m.getSpacedPoints(c),S=!0,f=!1,R=m.computeFrenetFrames(c,!1),T=new L,C=new L,P=new L),f||(d=0,p=0,g=0,_=0);const tt=o.extractPoints(l);let v=tt.shape;const E=tt.holes;if(!Zs.isClockWise(v)){v=v.reverse();for(let q=0,w=E.length;q<w;q++){const at=E[q];Zs.isClockWise(at)&&(E[q]=at.reverse())}}const z=Zs.triangulateShape(v,E),k=v;for(let q=0,w=E.length;q<w;q++){const at=E[q];v=v.concat(at)}function K(q,w,at){return w||console.error("THREE.ExtrudeGeometry: vec does not exist"),q.clone().addScaledVector(w,at)}const B=v.length,nt=z.length;function H(q,w,at){let rt,it,ht;const bt=q.x-w.x,gt=q.y-w.y,A=at.x-q.x,M=at.y-q.y,U=bt*bt+gt*gt,Y=bt*M-gt*A;if(Math.abs(Y)>Number.EPSILON){const J=Math.sqrt(U),j=Math.sqrt(A*A+M*M),Dt=w.x-gt/J,_t=w.y+bt/J,Ct=at.x-M/j,Yt=at.y+A/j,ot=((Ct-Dt)*M-(Yt-_t)*A)/(bt*M-gt*A);rt=Dt+bt*ot-q.x,it=_t+gt*ot-q.y;const Rt=rt*rt+it*it;if(Rt<=2)return new ut(rt,it);ht=Math.sqrt(Rt/2)}else{let J=!1;bt>Number.EPSILON?A>Number.EPSILON&&(J=!0):bt<-Number.EPSILON?A<-Number.EPSILON&&(J=!0):Math.sign(gt)===Math.sign(M)&&(J=!0),J?(rt=-gt,it=bt,ht=Math.sqrt(U)):(rt=bt,it=gt,ht=Math.sqrt(U/2))}return new ut(rt/ht,it/ht)}const dt=[];for(let q=0,w=k.length,at=w-1,rt=q+1;q<w;q++,at++,rt++)at===w&&(at=0),rt===w&&(rt=0),dt[q]=H(k[q],k[at],k[rt]);const pt=[];let V,ct=dt.concat();for(let q=0,w=E.length;q<w;q++){const at=E[q];V=[];for(let rt=0,it=at.length,ht=it-1,bt=rt+1;rt<it;rt++,ht++,bt++)ht===it&&(ht=0),bt===it&&(bt=0),V[rt]=H(at[rt],at[ht],at[bt]);pt.push(V),ct=ct.concat(V)}for(let q=0;q<d;q++){const w=q/d,at=p*Math.cos(w*Math.PI/2),rt=g*Math.sin(w*Math.PI/2)+_;for(let it=0,ht=k.length;it<ht;it++){const bt=K(k[it],dt[it],rt);Z(bt.x,bt.y,-at)}for(let it=0,ht=E.length;it<ht;it++){const bt=E[it];V=pt[it];for(let gt=0,A=bt.length;gt<A;gt++){const M=K(bt[gt],V[gt],rt);Z(M.x,M.y,-at)}}}const mt=g+_;for(let q=0;q<B;q++){const w=f?K(v[q],ct[q],mt):v[q];S?(C.copy(R.normals[0]).multiplyScalar(w.x),T.copy(R.binormals[0]).multiplyScalar(w.y),P.copy(x[0]).add(C).add(T),Z(P.x,P.y,P.z)):Z(w.x,w.y,0)}for(let q=1;q<=c;q++)for(let w=0;w<B;w++){const at=f?K(v[w],ct[w],mt):v[w];S?(C.copy(R.normals[q]).multiplyScalar(at.x),T.copy(R.binormals[q]).multiplyScalar(at.y),P.copy(x[q]).add(C).add(T),Z(P.x,P.y,P.z)):Z(at.x,at.y,u/c*q)}for(let q=d-1;q>=0;q--){const w=q/d,at=p*Math.cos(w*Math.PI/2),rt=g*Math.sin(w*Math.PI/2)+_;for(let it=0,ht=k.length;it<ht;it++){const bt=K(k[it],dt[it],rt);Z(bt.x,bt.y,u+at)}for(let it=0,ht=E.length;it<ht;it++){const bt=E[it];V=pt[it];for(let gt=0,A=bt.length;gt<A;gt++){const M=K(bt[gt],V[gt],rt);S?Z(M.x,M.y+x[c-1].y,x[c-1].x+at):Z(M.x,M.y,u+at)}}}G(),$();function G(){const q=s.length/3;if(f){let w=0,at=B*w;for(let rt=0;rt<nt;rt++){const it=z[rt];yt(it[2]+at,it[1]+at,it[0]+at)}w=c+d*2,at=B*w;for(let rt=0;rt<nt;rt++){const it=z[rt];yt(it[0]+at,it[1]+at,it[2]+at)}}else{for(let w=0;w<nt;w++){const at=z[w];yt(at[2],at[1],at[0])}for(let w=0;w<nt;w++){const at=z[w];yt(at[0]+B*c,at[1]+B*c,at[2]+B*c)}}n.addGroup(q,s.length/3-q,0)}function $(){const q=s.length/3;let w=0;st(k,w),w+=k.length;for(let at=0,rt=E.length;at<rt;at++){const it=E[at];st(it,w),w+=it.length}n.addGroup(q,s.length/3-q,1)}function st(q,w){let at=q.length;for(;--at>=0;){const rt=at;let it=at-1;it<0&&(it=q.length-1);for(let ht=0,bt=c+d*2;ht<bt;ht++){const gt=B*ht,A=B*(ht+1),M=w+rt+gt,U=w+it+gt,Y=w+it+A,J=w+rt+A;Tt(M,U,Y,J)}}}function Z(q,w,at){h.push(q),h.push(w),h.push(at)}function yt(q,w,at){It(q),It(w),It(at);const rt=s.length/3,it=y.generateTopUV(n,s,rt-3,rt-2,rt-1);Ft(it[0]),Ft(it[1]),Ft(it[2])}function Tt(q,w,at,rt){It(q),It(w),It(rt),It(w),It(at),It(rt);const it=s.length/3,ht=y.generateSideWallUV(n,s,it-6,it-3,it-2,it-1);Ft(ht[0]),Ft(ht[1]),Ft(ht[3]),Ft(ht[1]),Ft(ht[2]),Ft(ht[3])}function It(q){s.push(h[q*3+0]),s.push(h[q*3+1]),s.push(h[q*3+2])}function Ft(q){r.push(q.x),r.push(q.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){const t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Ix(e,n,t)}static fromJSON(t,e){const n=[];for(let r=0,a=t.shapes.length;r<a;r++){const o=e[t.shapes[r]];n.push(o)}const s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Th[s.type]().fromJSON(s)),new hl(n,t.options)}}const Lx={generateTopUV:function(i,t,e,n,s){const r=t[e*3],a=t[e*3+1],o=t[n*3],h=t[n*3+1],l=t[s*3],c=t[s*3+1];return[new ut(r,a),new ut(o,h),new ut(l,c)]},generateSideWallUV:function(i,t,e,n,s,r){const a=t[e*3],o=t[e*3+1],h=t[e*3+2],l=t[n*3],c=t[n*3+1],u=t[n*3+2],f=t[s*3],p=t[s*3+1],g=t[s*3+2],_=t[r*3],d=t[r*3+1],m=t[r*3+2];return Math.abs(o-c)<Math.abs(a-l)?[new ut(a,1-h),new ut(l,1-u),new ut(f,1-g),new ut(_,1-m)]:[new ut(o,1-h),new ut(c,1-u),new ut(p,1-g),new ut(d,1-m)]}};function Ix(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){const r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}class ll extends ai{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const h=Math.min(a+o,Math.PI);let l=0;const c=[],u=new L,f=new L,p=[],g=[],_=[],d=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let S=0;m===0&&a===0?S=.5/e:m===n&&h===Math.PI&&(S=-.5/e);for(let R=0;R<=e;R++){const T=R/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+x*o),u.y=t*Math.cos(a+x*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+x*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),d.push(T+S,1-x),y.push(l++)}c.push(y)}for(let m=0;m<n;m++)for(let y=0;y<e;y++){const x=c[m][y+1],S=c[m][y],R=c[m+1][y],T=c[m+1][y+1];(m!==0||a>0)&&p.push(x,S,T),(m!==n-1||h<Math.PI)&&p.push(S,R,T)}this.setIndex(p),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ll(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Tf extends On{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Kc extends Tf{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Me(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Ph extends On{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Xt(16777215),this.specular=new Xt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zh,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new gi,this.combine=Wh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Zc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Dx{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,h;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(c){o++,r===!1&&s.onStart!==void 0&&s.onStart(c,a,o),r=!0},this.itemEnd=function(c){a++,s.onProgress!==void 0&&s.onProgress(c,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(c){s.onError!==void 0&&s.onError(c)},this.resolveURL=function(c){return h?h(c):c},this.setURLModifier=function(c){return h=c,this},this.addHandler=function(c,u){return l.push(c,u),this},this.removeHandler=function(c){const u=l.indexOf(c);return u!==-1&&l.splice(u,2),this},this.getHandler=function(c){for(let u=0,f=l.length;u<f;u+=2){const p=l[u],g=l[u+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const Nx=new Dx;class cl{constructor(t){this.manager=t!==void 0?t:Nx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}cl.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ux extends cl{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=Zc.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=or("img");function h(){c(),Zc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){c(),s&&s(u),r.manager.itemError(t),r.manager.itemEnd(t)}function c(){o.removeEventListener("load",h,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",h,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Ox extends cl{constructor(t){super(t)}load(t,e,n,s){const r=new il;r.colorSpace=ui;const a=new Ux(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function h(l){a.load(t[l],function(c){r.images[l]=c,o++,o===6&&(r.needsUpdate=!0,e&&e(r))},void 0,s)}for(let l=0;l<t.length;++l)h(l);return r}}class Cf extends Te{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Xt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const To=new le,Jc=new L,Qc=new L;class Fx{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new le,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Jc),Qc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qc),e.updateMatrixWorld(),To.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(To),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(To)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bx extends Fx{constructor(){super(new uf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zx extends Cf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Bx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gx extends Cf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const tu=new le;class Lh{constructor(t,e,n=0,s=1/0){this.ray=new Fa(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new tl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return tu.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(tu),this}intersectObject(t,e=!0,n=[]){return Ih(t,this,n,e),n.sort(eu),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Ih(t[s],this,n,e);return n.sort(eu),n}}function eu(i,t){return i.distance-t.distance}function Ih(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ih(r[a],t,e,!0)}}class Dh{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Me(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class kx extends vf{constructor(t=10,e=10,n=4473924,s=8947848){n=new Xt(n),s=new Xt(s);const r=e/2,a=t/e,o=t/2,h=[],l=[];for(let f=0,p=0,g=-o;f<=e;f++,g+=a){h.push(-o,0,g,o,0,g),h.push(g,0,-o,g,0,o);const _=f===r?n:s;_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3,_.toArray(l,p),p+=3}const c=new ai;c.setAttribute("position",new ye(h,3)),c.setAttribute("color",new ye(l,3));const u=new rl({vertexColors:!0,toneMapped:!1});super(c,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Hx extends vf{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],s=new ai;s.setAttribute("position",new ye(e,3)),s.setAttribute("color",new ye(n,3));const r=new rl({vertexColors:!0,toneMapped:!1});super(s,r),this.type="AxesHelper"}setColors(t,e,n){const s=new Xt,r=this.geometry.attributes.color.array;return s.set(t),s.toArray(r,0),s.toArray(r,3),s.set(e),s.toArray(r,6),s.toArray(r,9),s.set(n),s.toArray(r,12),s.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class Vx extends un{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vh);const iu={type:"change"},ul={type:"start"},Rf={type:"end"},ta=new Fa,nu=new Zi,Wx=Math.cos(70*Bp.DEG2RAD),xe=new L,He=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Co=1e-6;class Xx extends Vx{constructor(t,e=null){super(t,e),this.state=re.NONE,this.enabled=!0,this.target=new L,this.cursor=new L,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new L,this._lastQuaternion=new Ln,this._lastTargetPosition=new L,this._quat=new Ln().setFromUnitVectors(t.up,new L(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Dh,this._sphericalDelta=new Dh,this._scale=1,this._panOffset=new L,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new L,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=qx.bind(this),this._onPointerDown=$x.bind(this),this._onPointerUp=Yx.bind(this),this._onContextMenu=eM.bind(this),this._onMouseWheel=Zx.bind(this),this._onKeyDown=Jx.bind(this),this._onTouchStart=Qx.bind(this),this._onTouchMove=tM.bind(this),this._onMouseDown=jx.bind(this),this._onMouseMove=Kx.bind(this),this._interceptControlDown=iM.bind(this),this._interceptControlUp=nM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(iu),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=He:n>Math.PI&&(n-=He),s<-Math.PI?s+=He:s>Math.PI&&(s-=He),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=xe.length();a=this._clampDistance(o*this._scale);const h=o-a;this.object.position.addScaledVector(this._dollyDirection,h),this.object.updateMatrixWorld(),r=!!h}else if(this.object.isOrthographicCamera){const o=new L(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const h=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=h!==this.object.zoom;const l=new L(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ta.origin.copy(this.object.position),ta.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ta.direction))<Wx?this.object.lookAt(this.target):(nu.setFromNormalAndCoplanarPoint(this.object.up,this.target),ta.intersectPlane(nu,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Co||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Co||this._lastTargetPosition.distanceToSquared(this.target)>Co?(this.dispatchEvent(iu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?He/60*this.autoRotateSpeed*t:He/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;xe.copy(s).sub(this.target);let r=xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(He*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-He*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(He*this._rotateDelta.x/e.clientHeight),this._rotateUp(He*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function $x(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function qx(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Yx(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Rf),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function jx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case us.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case us.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(ul)}function Kx(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function Zx(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(ul),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Rf))}function Jx(i){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(i)}function Qx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(ul)}function tM(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function eM(i){this.enabled!==!1&&i.preventDefault()}function iM(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function nM(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function fl(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Pf={exports:{}};(function(i,t){(function(){var e=Math.PI,n=Math.sin,s=Math.cos,r=Math.tan,a=Math.asin,o=Math.atan2,h=Math.acos,l=e/180,c=1e3*60*60*24,u=2440588,f=2451545;function p(V){return V.valueOf()/c-.5+u}function g(V){return new Date((V+.5-u)*c)}function _(V){return p(V)-f}var d=l*23.4397;function m(V,ct){return o(n(V)*s(d)-r(ct)*n(d),s(V))}function y(V,ct){return a(n(ct)*s(d)+s(ct)*n(d)*n(V))}function x(V,ct,mt){return o(n(V),s(V)*n(ct)-r(mt)*s(ct))}function S(V,ct,mt){return a(n(ct)*n(mt)+s(ct)*s(mt)*s(V))}function R(V,ct){return l*(280.16+360.9856235*V)-ct}function T(V){return V<0&&(V=0),2967e-7/Math.tan(V+.00312536/(V+.08901179))}function C(V){return l*(357.5291+.98560028*V)}function P(V){var ct=l*(1.9148*n(V)+.02*n(2*V)+3e-4*n(3*V)),mt=l*102.9372;return V+ct+mt+e}function tt(V){var ct=C(V),mt=P(ct);return{dec:y(mt,0),ra:m(mt,0)}}var v={};v.getPosition=function(V,ct,mt){var G=l*-mt,$=l*ct,st=_(V),Z=tt(st),yt=R(st,G)-Z.ra;return{azimuth:x(yt,$,Z.dec),altitude:S(yt,$,Z.dec)}};var E=v.times=[[-.833,"sunrise","sunset"],[-.3,"sunriseEnd","sunsetStart"],[-6,"dawn","dusk"],[-12,"nauticalDawn","nauticalDusk"],[-18,"nightEnd","night"],[6,"goldenHourEnd","goldenHour"]];v.addTime=function(V,ct,mt){E.push([V,ct,mt])};var W=9e-4;function z(V,ct){return Math.round(V-W-ct/(2*e))}function k(V,ct,mt){return W+(V+ct)/(2*e)+mt}function K(V,ct,mt){return f+V+.0053*n(ct)-.0069*n(2*mt)}function B(V,ct,mt){return h((n(V)-n(ct)*n(mt))/(s(ct)*s(mt)))}function nt(V){return-2.076*Math.sqrt(V)/60}function H(V,ct,mt,G,$,st,Z){var yt=B(V,mt,G),Tt=k(yt,ct,$);return K(Tt,st,Z)}v.getTimes=function(V,ct,mt,G){G=G||0;var $=l*-mt,st=l*ct,Z=nt(G),yt=_(V),Tt=z(yt,$),It=k(0,$,Tt),Ft=C(It),q=P(Ft),w=y(q,0),at=K(It,Ft,q),rt,it,ht,bt,gt,A,M={solarNoon:g(at),nadir:g(at-.5)};for(rt=0,it=E.length;rt<it;rt+=1)ht=E[rt],bt=(ht[0]+Z)*l,gt=H(bt,$,st,w,Tt,Ft,q),A=at-(gt-at),M[ht[1]]=g(A),M[ht[2]]=g(gt);return M};function dt(V){var ct=l*(218.316+13.176396*V),mt=l*(134.963+13.064993*V),G=l*(93.272+13.22935*V),$=ct+l*6.289*n(mt),st=l*5.128*n(G),Z=385001-20905*s(mt);return{ra:m($,st),dec:y($,st),dist:Z}}v.getMoonPosition=function(V,ct,mt){var G=l*-mt,$=l*ct,st=_(V),Z=dt(st),yt=R(st,G)-Z.ra,Tt=S(yt,$,Z.dec),It=o(n(yt),r($)*s(Z.dec)-n(Z.dec)*s(yt));return Tt=Tt+T(Tt),{azimuth:x(yt,$,Z.dec),altitude:Tt,distance:Z.dist,parallacticAngle:It}},v.getMoonIllumination=function(V){var ct=_(V||new Date),mt=tt(ct),G=dt(ct),$=149598e3,st=h(n(mt.dec)*n(G.dec)+s(mt.dec)*s(G.dec)*s(mt.ra-G.ra)),Z=o($*n(st),G.dist-$*s(st)),yt=o(s(mt.dec)*n(mt.ra-G.ra),n(mt.dec)*s(G.dec)-s(mt.dec)*n(G.dec)*s(mt.ra-G.ra));return{fraction:(1+s(Z))/2,phase:.5+.5*Z*(yt<0?-1:1)/Math.PI,angle:yt}};function pt(V,ct){return new Date(V.valueOf()+ct*c/24)}v.getMoonTimes=function(V,ct,mt,G){var $=new Date(V);G?$.setUTCHours(0,0,0,0):$.setHours(0,0,0,0);for(var st=.133*l,Z=v.getMoonPosition($,ct,mt).altitude-st,yt,Tt,It,Ft,q,w,at,rt,it,ht,bt,gt,A,M=1;M<=24&&(yt=v.getMoonPosition(pt($,M),ct,mt).altitude-st,Tt=v.getMoonPosition(pt($,M+1),ct,mt).altitude-st,q=(Z+Tt)/2-yt,w=(Tt-Z)/2,at=-w/(2*q),rt=(q*at+w)*at+yt,it=w*w-4*q*yt,ht=0,it>=0&&(A=Math.sqrt(it)/(Math.abs(q)*2),bt=at-A,gt=at+A,Math.abs(bt)<=1&&ht++,Math.abs(gt)<=1&&ht++,bt<-1&&(bt=gt)),ht===1?Z<0?It=M+bt:Ft=M+bt:ht===2&&(It=M+(rt<0?gt:bt),Ft=M+(rt<0?bt:gt)),!(It&&Ft));M+=2)Z=Tt;var U={};return It&&(U.rise=pt($,It)),Ft&&(U.set=pt($,Ft)),!It&&!Ft&&(U[rt>0?"alwaysUp":"alwaysDown"]=!0),U},i.exports=v})()})(Pf);var sM=Pf.exports;class rM{constructor(t,e,n){lt(this,"sunLight");lt(this,"date");lt(this,"radius");lt(this,"sceneCenter");lt(this,"params");this.params=t,this.sunLight=e,this.date=new Date,this.date.setMonth(t.month),this.date.setHours(t.hour),this.radius=t.radius,this.sceneCenter=n,this.updateSunPosition()}getSunPosition(t,e,n=0){const s=sM.getPosition(this.date,t,e);console.log(s);const r=this.radius*Math.cos(s.altitude)*Math.cos(s.azimuth),a=this.radius*Math.cos(s.altitude)*Math.sin(s.azimuth),o=this.radius*Math.sin(s.altitude);return[-a,o,r]}updateSunPosition(){const t=this.getSunPosition(...this.sceneCenter);this.sunLight.position.set(...t)}updateHour(){this.date.setHours(this.params.hour),this.date.setMinutes(this.params.minute),this.updateSunPosition()}updateMonth(){this.date.setMonth(this.params.month-1),this.date.setDate(this.params.day),this.updateSunPosition()}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Ai{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ai.nextNameID=Ai.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Ai.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class aM extends Ai{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Nh(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const oM={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:Nh,toHexString:Nh},ur={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},hM={isPrimitive:!1,match:Array.isArray,fromHexString(i,t,e=1){const n=ur.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([i,t,e],n=1)=>ur.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},lM={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=ur.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r:i,g:t,b:e},n=1)=>ur.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},cM=[oM,ur,hM,lM];class uM extends Ai{constructor(t,e,n,s){var r;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,cM.find(a=>a.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=Nh(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ro extends Ai{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class fM extends Ai{constructor(t,e,n,s,r,a){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=c=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+c),this.$input.value=this.getValue())};let e,n,s,r,a,o=!1;const h=c=>{if(o){const u=c.clientX-e,f=c.clientY-n;Math.abs(f)>5?(c.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&l()}if(!o){const u=c.clientY-s;a-=u*this._step*this._arrowKeyMultiplier(c),r+a>this._max?a=this._max-r:r+a<this._min&&(a=this._min-r),this._snapClampSetValue(r+a)}s=c.clientY},l=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",h),window.removeEventListener("mouseup",l)};this.$input.addEventListener("input",()=>{let c=parseFloat(this.$input.value);isNaN(c)||(this._stepExplicit&&(c=this._snap(c)),this.setValue(this._clamp(c)))}),this.$input.addEventListener("keydown",c=>{c.code==="Enter"&&this.$input.blur(),c.code==="ArrowUp"&&(c.preventDefault(),t(this._step*this._arrowKeyMultiplier(c))),c.code==="ArrowDown"&&(c.preventDefault(),t(this._step*this._arrowKeyMultiplier(c)*-1))}),this.$input.addEventListener("wheel",c=>{this._inputFocused&&(c.preventDefault(),t(this._step*this._normalizeMouseWheel(c)))},{passive:!1}),this.$input.addEventListener("mousedown",c=>{e=c.clientX,n=s=c.clientY,o=!0,r=this.getValue(),a=0,window.addEventListener("mousemove",h),window.addEventListener("mouseup",l)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=f=>{const p=this.$slider.getBoundingClientRect();let g=(_=f,d=p.left,m=p.right,y=this._min,x=this._max,(_-d)/(m-d)*(x-y)+y);var _,d,m,y,x;this._snapClampSetValue(g)},e=f=>{t(f.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};let s,r,a=!1;const o=f=>{f.preventDefault(),this._setDraggingStyle(!0),t(f.touches[0].clientX),a=!1},h=f=>{if(a){const p=f.touches[0].clientX-s,g=f.touches[0].clientY-r;Math.abs(p)>Math.abs(g)?o(f):(window.removeEventListener("touchmove",h),window.removeEventListener("touchend",l))}else f.preventDefault(),t(f.touches[0].clientX)},l=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",h),window.removeEventListener("touchend",l)},c=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",f=>{this._setDraggingStyle(!0),t(f.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",f=>{f.touches.length>1||(this._hasScrollBar?(s=f.touches[0].clientX,r=f.touches[0].clientY,a=!0):o(f),window.addEventListener("touchmove",h,{passive:!1}),window.addEventListener("touchend",l))},{passive:!1}),this.$slider.addEventListener("wheel",f=>{if(Math.abs(f.deltaX)<Math.abs(f.deltaY)&&this._hasScrollBar)return;f.preventDefault();const p=this._normalizeMouseWheel(f)*this._step;this._snapClampSetValue(this.getValue()+p),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(c,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class dM extends Ai{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class pM extends Ai{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let su=!1;class dl{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{h.code!=="Enter"&&h.code!=="Space"||(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!su&&a&&(function(h){const l=document.createElement("style");l.innerHTML=h;const c=document.querySelector("head link[rel=stylesheet], head style");c?document.head.insertBefore(l,c):document.head.appendChild(l)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),su=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(t,e,n,s,r){if(Object(n)===n)return new dM(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new fM(this,t,e,n,s,r);case"boolean":return new aM(this,t,e);case"string":return new pM(this,t,e);case"function":return new Ro(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new uM(this,t,e,n)}addFolder(t){return new dl({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof Ro||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof Ro)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}const ks={minute:new Date().getMinutes(),hour:new Date().getHours(),day:new Date().getDate(),month:new Date().getMonth()+1,radius:2e3};class mM extends un{constructor(e,n){super();lt(this,"scene");lt(this,"camera");lt(this,"renderer");lt(this,"controls");lt(this,"container");lt(this,"sunLight");lt(this,"layers",[]);lt(this,"sunPath");lt(this,"center");lt(this,"sunSphere");lt(this,"compass");const s=document.getElementById("compassContainer");this.center=n,this.scene=new Qv,this.scene.background=new Ox().setPath("/DEMVis").load(["px.png","nx.png","py.png","ny.png","pz.png","nz.png"]),this.camera=new ri(75,window.innerWidth/window.innerHeight,.1,1e4),this.camera.position.z=5,this.camera.position.y=10,this.renderer=new Jv({antialias:!0}),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Hu,this.sunLight=new zx("yellow",4),this.scene.add(new Gx("white")),this.initSun(),this.createGUI();let r=new L,a=new Dh;const o=()=>{this.camera.getWorldDirection(r),a.setFromVector3(r);let l=a.theta*(180/Math.PI);s.style.transform=`rotate(${l-180}deg)`,this.controls.update(),this.renderer.render(this.scene,this.camera),this.sunSphere.position.copy(this.sunLight.position)};this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setAnimationLoop(o);const h=new Hx(1e3);this.scene.add(h,this.sunLight),this.controls=new Xx(this.camera,this.renderer.domElement),e.appendChild(this.renderer.domElement),this.container=e,this.initListener()}getLayerByName(e){const n=this.layers.find(s=>s.key===e);if(n===void 0)throw new Error(`layer ${e} not found, maybe too soon, does the buildings are already there`);return n.value}initListener(){const e=new Lh;window.addEventListener("resize",()=>{this.onResize()}),window.addEventListener("click",n=>{const s=new ut;s.x=n.clientX/window.innerWidth*2-1,s.y=-(n.clientY/window.innerHeight)*2+1,e.setFromCamera(s,this.camera);try{const r=e.intersectObjects(this.getLayerByName("buildings").children);console.log(r[0].object)}catch(r){console.log(r)}})}onResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}addLayer(e,n){this.scene.add(n),this.layers.push({key:e,value:n}),this.render(),e==="terrain"&&this.updateCamera(n)}removeLayer(){this.layers.forEach(e=>{this.scene.remove(e.value)}),this.layers=[],this.render()}createGUI(){const n=new dl().addFolder("SunLight");n.add(ks,"minute",0,60,1).onChange(()=>this.sunPath.updateHour()).listen(),n.add(ks,"hour",0,24,1).onChange(()=>this.sunPath.updateHour()).listen(),n.add(ks,"day",1,30,1).onChange(()=>this.sunPath.updateMonth()).listen(),n.add(ks,"month",1,12,1).onChange(()=>this.sunPath.updateMonth()).listen()}initSun(){this.sunPath=new rM(ks,this.sunLight,this.center),this.sunLight.shadow.mapSize.height=3e3,this.sunLight.shadow.mapSize.width=3e3,this.sunLight.shadow.camera.left=-2500,this.sunLight.shadow.camera.top=2500,this.sunLight.shadow.camera.right=2500,this.sunLight.shadow.camera.bottom=-2500,this.sunLight.shadow.camera.near=.1,this.sunLight.shadow.camera.far=3e3,this.sunLight.castShadow=!0,this.sunLight.shadow.bias=-.005;const e=new ll(50,32,32),n=new el({color:16776960});this.sunSphere=new Ie(e,n),this.sunSphere.position.copy(this.sunLight.position),this.scene.add(this.sunSphere)}centerCameraOnGroup(e){const n=new Ps().setFromObject(e),s=n.getCenter(new L),r=n.getSize(new L);this.camera.position.set(s.x,s.y+r.y*2,s.z),this.camera.lookAt(s.x,s.y,s.z),this.controls.update()}render(){this.renderer.render(this.scene,this.camera)}updateCamera(e){const n=new Lh,s=new L(0,1,0),r=new L(0,0,0);n.set(r,s);const a=n.intersectObject(e);a.length>0&&this.camera.position.setY(a[0].distance+500)}}var Qe=63710088e-1,gM={centimeters:Qe*100,centimetres:Qe*100,degrees:360/(2*Math.PI),feet:Qe*3.28084,inches:Qe*39.37,kilometers:Qe/1e3,kilometres:Qe/1e3,meters:Qe,metres:Qe,miles:Qe/1609.344,millimeters:Qe*1e3,millimetres:Qe*1e3,nauticalmiles:Qe/1852,radians:1,yards:Qe*1.0936};function _M(i,t,e={}){const n={type:"Feature"};return(e.id===0||e.id)&&(n.id=e.id),e.bbox&&(n.bbox=e.bbox),n.properties=t||{},n.geometry=i,n}function Lf(i,t,e={}){if(!i)throw new Error("coordinates is required");if(!Array.isArray(i))throw new Error("coordinates must be an Array");if(i.length<2)throw new Error("coordinates must be at least 2 numbers long");if(!au(i[0])||!au(i[1]))throw new Error("coordinates must contain numbers");return _M({type:"Point",coordinates:i},t,e)}function vM(i,t="kilometers"){const e=gM[t];if(!e)throw new Error(t+" units is invalid");return i/e}function ru(i){return i%(2*Math.PI)*180/Math.PI}function Po(i){return i%360*Math.PI/180}function au(i){return!isNaN(i)&&i!==null&&!Array.isArray(i)}function xM(i){if(!i)throw new Error("coord is required");if(!Array.isArray(i)){if(i.type==="Feature"&&i.geometry!==null&&i.geometry.type==="Point")return[...i.geometry.coordinates];if(i.type==="Point")return[...i.coordinates]}if(Array.isArray(i)&&i.length>=2&&!Array.isArray(i[0])&&!Array.isArray(i[1]))return[...i];throw new Error("coord must be GeoJSON Point or an Array of numbers")}function MM(i,t,e,n={}){const s=xM(i),r=Po(s[0]),a=Po(s[1]),o=Po(e),h=vM(t,n.units),l=Math.asin(Math.sin(a)*Math.cos(h)+Math.cos(a)*Math.sin(h)*Math.cos(o)),c=r+Math.atan2(Math.sin(o)*Math.sin(h)*Math.cos(a),Math.cos(h)-Math.sin(a)*Math.sin(l)),u=ru(c),f=ru(l);return Lf([u,f],n.properties)}var ou=MM;class If{static createTurfPoint(t){return Lf([t[1],t[0]])}static originRadiusToBbox(t,e){const[n,s]=ou(this.createTurfPoint(t),e,-45,"kilometers").geometry.coordinates,[r,a]=ou(this.createTurfPoint(t),e,135,"kilometers").geometry.coordinates;return[n,a,r,s]}static tileToBbox(){}}var Ga={},yM=Math.PI/180,SM=180/Math.PI;function Df(i){var t=hu(i[0]+1,i[2]),e=hu(i[0],i[2]),n=lu(i[1]+1,i[2]),s=lu(i[1],i[2]);return[e,n,t,s]}function EM(i){var t=Df(i),e={type:"Polygon",coordinates:[[[t[0],t[3]],[t[0],t[1]],[t[2],t[1]],[t[2],t[3]],[t[0],t[3]]]]};return e}function hu(i,t){return i/Math.pow(2,t)*360-180}function lu(i,t){var e=Math.PI-2*Math.PI*i/Math.pow(2,t);return SM*Math.atan(.5*(Math.exp(e)-Math.exp(-e)))}function Uh(i,t,e){var n=zf(i,t,e);return n[0]=Math.floor(n[0]),n[1]=Math.floor(n[1]),n}function Nf(i){return[[i[0]*2,i[1]*2,i[2]+1],[i[0]*2+1,i[1]*2,i[2]+1],[i[0]*2+1,i[1]*2+1,i[2]+1],[i[0]*2,i[1]*2+1,i[2]+1]]}function Uf(i){return[i[0]>>1,i[1]>>1,i[2]-1]}function Of(i){return Nf(Uf(i))}function bM(i,t){for(var e=Of(i),n=0;n<e.length;n++)if(!Ff(t,e[n]))return!1;return!0}function Ff(i,t){for(var e=0;e<i.length;e++)if(Bf(i[e],t))return!0;return!1}function Bf(i,t){return i[0]===t[0]&&i[1]===t[1]&&i[2]===t[2]}function AM(i){for(var t="",e=i[2];e>0;e--){var n=0,s=1<<e-1;i[0]&s&&n++,i[1]&s&&(n+=2),t+=n.toString()}return t}function wM(i){for(var t=0,e=0,n=i.length,s=n;s>0;s--){var r=1<<s-1,a=+i[n-s];a===1&&(t|=r),a===2&&(e|=r),a===3&&(t|=r,e|=r)}return[t,e,n]}function TM(i){var t=Uh(i[0],i[1],32),e=Uh(i[2],i[3],32),n=[t[0],t[1],e[0],e[1]],s=CM(n);if(s===0)return[0,0,0];var r=n[0]>>>32-s,a=n[1]>>>32-s;return[r,a,s]}function CM(i){for(var t=28,e=0;e<t;e++){var n=1<<32-(e+1);if((i[0]&n)!==(i[2]&n)||(i[1]&n)!==(i[3]&n))return e}return t}function zf(i,t,e){var n=Math.sin(t*yM),s=Math.pow(2,e),r=s*(i/360+.5),a=s*(.5-.25*Math.log((1+n)/(1-n))/Math.PI);return r=r%s,r<0&&(r=r+s),[r,a,e]}var RM={tileToGeoJSON:EM,tileToBBOX:Df,getChildren:Nf,getParent:Uf,getSiblings:Of,hasTile:Ff,hasSiblings:bM,tilesEqual:Bf,tileToQuadkey:AM,quadkeyToTile:wM,pointToTile:Uh,bboxToTile:TM,pointToTileFraction:zf},Ts=RM;Ga.geojson=function(i,t){return{type:"FeatureCollection",features:pl(i,t).map(PM)}};function PM(i){return{type:"Feature",geometry:Ts.tileToGeoJSON(i),properties:{}}}Ga.tiles=pl;Ga.indexes=function(i,t){return pl(i,t).map(Ts.tileToQuadkey)};function pl(i,t){var e,n,s=i.coordinates,r=t.max_zoom,a={},o=[];if(i.type==="Point")return[Ts.pointToTile(s[0],s[1],r)];if(i.type==="MultiPoint")for(e=0;e<s.length;e++)n=Ts.pointToTile(s[e][0],s[e][1],r),a[fi(n[0],n[1],n[2])]=!0;else if(i.type==="LineString")Oh(a,s,r);else if(i.type==="MultiLineString")for(e=0;e<s.length;e++)Oh(a,s[e],r);else if(i.type==="Polygon")cu(a,o,s,r);else if(i.type==="MultiPolygon")for(e=0;e<s.length;e++)cu(a,o,s[e],r);else throw new Error("Geometry type not implemented");if(t.min_zoom!==r){var h=o.length;for(uu(a,o),e=0;e<h;e++){var l=o[e];a[fi(l[0],l[1],l[2])]=!0}return LM(a,o,t)}return uu(a,o),o}function LM(i,t,e){for(var n=[],s=e.max_zoom;s>e.min_zoom;s--){for(var r={},a=[],o=0;o<t.length;o++){var h=t[o];if(h[0]%2===0&&h[1]%2===0){var l=fi(h[0]+1,h[1],s),c=fi(h[0],h[1]+1,s),u=fi(h[0]+1,h[1]+1,s);if(i[l]&&i[c]&&i[u]){i[fi(h[0],h[1],h[2])]=!1,i[l]=!1,i[c]=!1,i[u]=!1;var f=[h[0]/2,h[1]/2,s-1];s-1===e.min_zoom?n.push(f):(r[fi(h[0]/2,h[1]/2,s-1)]=!0,a.push(f))}}}for(o=0;o<t.length;o++)h=t[o],i[fi(h[0],h[1],h[2])]&&n.push(h);i=r,t=a}return n}function cu(i,t,e,n){for(var s=[],r=0;r<e.length;r++){var a=[];Oh(i,e[r],n,a);for(var o=0,h=a.length,l=h-1;o<h;l=o++){var c=(o+1)%h,u=a[o][1];(u>a[l][1]||u>a[c][1])&&(u<a[l][1]||u<a[c][1])&&u!==a[c][1]&&s.push(a[o])}}for(s.sort(IM),r=0;r<s.length;r+=2){u=s[r][1];for(var f=s[r][0]+1;f<s[r+1][0];f++){var p=fi(f,u,n);i[p]||t.push([f,u,n])}}}function IM(i,t){return i[1]-t[1]||i[0]-t[0]}function Oh(i,t,e,n){for(var s,r,a=0;a<t.length-1;a++){var o=Ts.pointToTileFraction(t[a][0],t[a][1],e),h=Ts.pointToTileFraction(t[a+1][0],t[a+1][1],e),l=o[0],c=o[1],u=h[0],f=h[1],p=u-l,g=f-c;if(!(g===0&&p===0)){var _=p>0?1:-1,d=g>0?1:-1,m=Math.floor(l),y=Math.floor(c),x=p===0?1/0:Math.abs(((p>0?1:0)+m-l)/p),S=g===0?1/0:Math.abs(((g>0?1:0)+y-c)/g),R=Math.abs(_/p),T=Math.abs(d/g);for((m!==s||y!==r)&&(i[fi(m,y,e)]=!0,n&&y!==r&&n.push([m,y]),s=m,r=y);x<1||S<1;)x<S?(x+=R,m+=_):(S+=T,y+=d),i[fi(m,y,e)]=!0,n&&y!==r&&n.push([m,y]),s=m,r=y}}n&&y===n[0][1]&&n.pop()}function uu(i,t){for(var e=Object.keys(i),n=0;n<e.length;n++)t.push(DM(+e[n]))}function fi(i,t,e){var n=2*(1<<e);return(n*t+i)*32+e}function DM(i){var t=i%32,e=2*(1<<t),n=(i-t)/32,s=n%e,r=(n-s)/e%e;return[s,r,t]}function NM(i){for(var t=new Array(i),e=0;e<i;++e)t[e]=e;return t}var UM=NM;/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var OM=function(i){return i!=null&&(Gf(i)||FM(i)||!!i._isBuffer)};function Gf(i){return!!i.constructor&&typeof i.constructor.isBuffer=="function"&&i.constructor.isBuffer(i)}function FM(i){return typeof i.readFloatLE=="function"&&typeof i.slice=="function"&&Gf(i.slice(0,0))}var BM=UM,zM=OM,GM=typeof Float64Array<"u";function kM(i,t){return i[0]-t[0]}function HM(){var i=this.stride,t=new Array(i.length),e;for(e=0;e<t.length;++e)t[e]=[Math.abs(i[e]),e];t.sort(kM);var n=new Array(t.length);for(e=0;e<n.length;++e)n[e]=t[e][1];return n}function VM(i,t){var e=["View",t,"d",i].join("");t<0&&(e="View_Nil"+i);var n=i==="generic";if(t===-1){var s="function "+e+"(a){this.data=a;};var proto="+e+".prototype;proto.dtype='"+i+"';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new "+e+"(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_"+e+"(a){return new "+e+"(a);}",_=new Function(s);return _()}else if(t===0){var s="function "+e+"(a,d) {this.data = a;this.offset = d};var proto="+e+".prototype;proto.dtype='"+i+"';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function "+e+"_copy() {return new "+e+"(this.data,this.offset)};proto.pick=function "+e+"_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function "+e+"_get(){return "+(n?"this.data.get(this.offset)":"this.data[this.offset]")+"};proto.set=function "+e+"_set(v){return "+(n?"this.data.set(this.offset,v)":"this.data[this.offset]=v")+"};return function construct_"+e+"(a,b,c,d){return new "+e+"(a,d)}",_=new Function("TrivialArray",s);return _(wa[i][0])}var s=["'use strict'"],r=BM(t),a=r.map(function(d){return"i"+d}),o="this.offset+"+r.map(function(d){return"this.stride["+d+"]*i"+d}).join("+"),h=r.map(function(d){return"b"+d}).join(","),l=r.map(function(d){return"c"+d}).join(",");s.push("function "+e+"(a,"+h+","+l+",d){this.data=a","this.shape=["+h+"]","this.stride=["+l+"]","this.offset=d|0}","var proto="+e+".prototype","proto.dtype='"+i+"'","proto.dimension="+t),s.push("Object.defineProperty(proto,'size',{get:function "+e+"_size(){return "+r.map(function(d){return"this.shape["+d+"]"}).join("*"),"}})"),t===1?s.push("proto.order=[0]"):(s.push("Object.defineProperty(proto,'order',{get:"),t<4?(s.push("function "+e+"_order(){"),t===2?s.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})"):t===3&&s.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")):s.push("ORDER})")),s.push("proto.set=function "+e+"_set("+a.join(",")+",v){"),n?s.push("return this.data.set("+o+",v)}"):s.push("return this.data["+o+"]=v}"),s.push("proto.get=function "+e+"_get("+a.join(",")+"){"),n?s.push("return this.data.get("+o+")}"):s.push("return this.data["+o+"]}"),s.push("proto.index=function "+e+"_index(",a.join(),"){return "+o+"}"),s.push("proto.hi=function "+e+"_hi("+a.join(",")+"){return new "+e+"(this.data,"+r.map(function(d){return["(typeof i",d,"!=='number'||i",d,"<0)?this.shape[",d,"]:i",d,"|0"].join("")}).join(",")+","+r.map(function(d){return"this.stride["+d+"]"}).join(",")+",this.offset)}");var c=r.map(function(d){return"a"+d+"=this.shape["+d+"]"}),u=r.map(function(d){return"c"+d+"=this.stride["+d+"]"});s.push("proto.lo=function "+e+"_lo("+a.join(",")+"){var b=this.offset,d=0,"+c.join(",")+","+u.join(","));for(var f=0;f<t;++f)s.push("if(typeof i"+f+"==='number'&&i"+f+">=0){d=i"+f+"|0;b+=c"+f+"*d;a"+f+"-=d}");s.push("return new "+e+"(this.data,"+r.map(function(d){return"a"+d}).join(",")+","+r.map(function(d){return"c"+d}).join(",")+",b)}"),s.push("proto.step=function "+e+"_step("+a.join(",")+"){var "+r.map(function(d){return"a"+d+"=this.shape["+d+"]"}).join(",")+","+r.map(function(d){return"b"+d+"=this.stride["+d+"]"}).join(",")+",c=this.offset,d=0,ceil=Math.ceil");for(var f=0;f<t;++f)s.push("if(typeof i"+f+"==='number'){d=i"+f+"|0;if(d<0){c+=b"+f+"*(a"+f+"-1);a"+f+"=ceil(-a"+f+"/d)}else{a"+f+"=ceil(a"+f+"/d)}b"+f+"*=d}");s.push("return new "+e+"(this.data,"+r.map(function(d){return"a"+d}).join(",")+","+r.map(function(d){return"b"+d}).join(",")+",c)}");for(var p=new Array(t),g=new Array(t),f=0;f<t;++f)p[f]="a[i"+f+"]",g[f]="b[i"+f+"]";s.push("proto.transpose=function "+e+"_transpose("+a+"){"+a.map(function(d,m){return d+"=("+d+"===undefined?"+m+":"+d+"|0)"}).join(";"),"var a=this.shape,b=this.stride;return new "+e+"(this.data,"+p.join(",")+","+g.join(",")+",this.offset)}"),s.push("proto.pick=function "+e+"_pick("+a+"){var a=[],b=[],c=this.offset");for(var f=0;f<t;++f)s.push("if(typeof i"+f+"==='number'&&i"+f+">=0){c=(c+this.stride["+f+"]*i"+f+")|0}else{a.push(this.shape["+f+"]);b.push(this.stride["+f+"])}");s.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"),s.push("return function construct_"+e+"(data,shape,stride,offset){return new "+e+"(data,"+r.map(function(d){return"shape["+d+"]"}).join(",")+","+r.map(function(d){return"stride["+d+"]"}).join(",")+",offset)}");var _=new Function("CTOR_LIST","ORDER",s.join(`
`));return _(wa[i],HM)}function WM(i){if(zM(i))return"buffer";if(GM)switch(Object.prototype.toString.call(i)){case"[object Float64Array]":return"float64";case"[object Float32Array]":return"float32";case"[object Int8Array]":return"int8";case"[object Int16Array]":return"int16";case"[object Int32Array]":return"int32";case"[object Uint8Array]":return"uint8";case"[object Uint16Array]":return"uint16";case"[object Uint32Array]":return"uint32";case"[object Uint8ClampedArray]":return"uint8_clamped";case"[object BigInt64Array]":return"bigint64";case"[object BigUint64Array]":return"biguint64"}return Array.isArray(i)?"array":"generic"}var wa={float32:[],float64:[],int8:[],int16:[],int32:[],uint8:[],uint16:[],uint32:[],array:[],uint8_clamped:[],bigint64:[],biguint64:[],buffer:[],generic:[]};function XM(i,t,e,n){if(i===void 0){var l=wa.array[0];return l([])}else typeof i=="number"&&(i=[i]);t===void 0&&(t=[i.length]);var s=t.length;if(e===void 0){e=new Array(s);for(var r=s-1,a=1;r>=0;--r)e[r]=a,a*=t[r]}if(n===void 0){n=0;for(var r=0;r<s;++r)e[r]<0&&(n-=(t[r]-1)*e[r])}for(var o=WM(i),h=wa[o];h.length<=s+1;)h.push(VM(o,h.length-1));var l=h[s+1];return l(i,t,e,n)}var $M=XM;const qM=fl($M);function fu(i,t,e){const n=new Image;n.crossOrigin="Anonymous",n.onload=()=>{const s=document.createElement("canvas");s.width=n.width,s.height=n.height;const r=s.getContext("2d");r==null||r.drawImage(n,0,0);const a=r==null?void 0:r.getImageData(0,0,n.width,n.height);if(a===void 0)throw new Error("pixels undefined");const o=new Uint8Array(a.data),h=qM(o,[n.width,n.height,4],[4,4*n.width,1],0);t(null,h)},n.onerror=s=>{t(s,null)},n.src=i}class Js{static getZoomPositionElevation(t){const e={};return t.forEach(n=>{const r=[n[0]-2,Math.floor(n[1]/4),Math.floor(n[2]/4)].join(",");e[r]?e[r].push(n):e[r]=[n]}),Object.keys(e).map(n=>n.split(",").map(s=>parseFloat(s)))}static urlBuilder(t){return`https://data.geopf.fr/wfs/ows?SERVICE=WFS&REQUEST=GetFeature&typeName=BDTOPO_V3:batiment&VERSION=2.0.0&SRSNAME=EPSG:4326&outputFormat=application/json&BBOX=${t.northWest[0]},${t.southEast[1]},${t.southEast[0]},${t.northWest[1]},EPSG:4326`}static getUri(t,e,n){let s="",r="";switch(n){case"mapbox-terrain-rgb":s="https://api.mapbox.com/v4/mapbox.terrain-rgb",r="@2x.pngraw";break;case"mapbox-satellite":s="https://api.mapbox.com/styles/v1/mapbox/satellite-v9/tiles",r="@2x";break;default:return console.log("No Uri generated"),""}return`${s}/${t.join("/")}${r}?access_token=${e}`}static async getRgbTile({uri:t}){return new Promise((e,n)=>{fu(t,(s,r)=>{s?n(s):e(r)})})}static async getPngMap(t){return new Promise((e,n)=>{fu(t,(s,r)=>{s?n(s):e(r)})})}static async fetchTile(t,e,n){const s=this.getUri(t,e,n);return await this.getRgbTile({uri:s})}static async fetchPngMap(t){return await this.getPngMap(t)}static greyModelUrlBuilder(t,e){return`https://portal.opentopography.org/API/globaldem?demtype=SRTMGL1_E&south=${t.south}&north=${t.north}&west=${t.west}&east=${t.est}&outputFormat=GTiff&API_Key=${e}`}}const ea=Math.PI/180,ia=180/Math.PI,na=6378137,Ki=20037508342789244e-9,sa="900913",YM="WGS84",Qn={};function du(i){return Number(i)===i&&i%1!==0}var me,Qi,xs,Ms,Cn,tn;class jM{constructor(t={}){mn(this,me);mn(this,Qi);mn(this,xs);mn(this,Ms);mn(this,Cn);mn(this,tn);if(gn(this,me,t.size||256),gn(this,Qi,t.antimeridian?2:1),!Qn[Zt(this,me)]){let e=Zt(this,me);const n=Qn[Zt(this,me)]={};n.Bc=[],n.Cc=[],n.zc=[],n.Ac=[];for(let s=0;s<30;s++)n.Bc.push(e/360),n.Cc.push(e/(2*Math.PI)),n.zc.push(e/2),n.Ac.push(e),e*=2}gn(this,xs,Qn[Zt(this,me)].Bc),gn(this,Ms,Qn[Zt(this,me)].Cc),gn(this,Cn,Qn[Zt(this,me)].zc),gn(this,tn,Qn[Zt(this,me)].Ac)}px(t,e){if(du(e)){const n=Zt(this,me)*Math.pow(2,e),s=n/2,r=n/360,a=n/(2*Math.PI),o=n,h=Math.min(Math.max(Math.sin(ea*t[1]),-.9999),.9999);let l=s+t[0]*r,c=s+.5*Math.log((1+h)/(1-h))*-a;return l>o*Zt(this,Qi)&&(l=o*Zt(this,Qi)),c>o&&(c=o),[l,c]}else{const n=Zt(this,Cn)[e],s=Math.min(Math.max(Math.sin(ea*t[1]),-.9999),.9999);let r=Math.round(n+t[0]*Zt(this,xs)[e]),a=Math.round(n+.5*Math.log((1+s)/(1-s))*-Zt(this,Ms)[e]);return r>Zt(this,tn)[e]*Zt(this,Qi)&&(r=Zt(this,tn)[e]*Zt(this,Qi)),a>Zt(this,tn)[e]&&(a=Zt(this,tn)[e]),[r,a]}}ll(t,e){if(du(e)){const n=Zt(this,me)*Math.pow(2,e),s=n/360,r=n/(2*Math.PI),a=n/2,o=(t[1]-a)/-r,h=(t[0]-a)/s,l=ia*(2*Math.atan(Math.exp(o))-.5*Math.PI);return[h,l]}else{const n=(t[1]-Zt(this,Cn)[e])/-Zt(this,Ms)[e],s=(t[0]-Zt(this,Cn)[e])/Zt(this,xs)[e],r=ia*(2*Math.atan(Math.exp(n))-.5*Math.PI);return[s,r]}}convert(t,e){return e===sa?[...this.forward(t.slice(0,2)),...this.forward(t.slice(2,4))]:[...this.inverse(t.slice(0,2)),...this.inverse(t.slice(2,4))]}inverse(t){return[t[0]*ia/na,(Math.PI*.5-2*Math.atan(Math.exp(-t[1]/na)))*ia]}forward(t){const e=[na*t[0]*ea,na*Math.log(Math.tan(Math.PI*.25+.5*t[1]*ea))];return e[0]>Ki&&(e[0]=Ki),e[0]<-Ki&&(e[0]=-Ki),e[1]>Ki&&(e[1]=Ki),e[1]<-Ki&&(e[1]=-Ki),e}bbox(t,e,n,s,r){s&&(e=Math.pow(2,n)-1-e);const a=[t*Zt(this,me),(+e+1)*Zt(this,me)],o=[(+t+1)*Zt(this,me),e*Zt(this,me)],h=[...this.ll(a,n),...this.ll(o,n)];return r===sa?this.convert(h,sa):h}xyz(t,e,n,s){const r=s===sa?this.convert(t,YM):t,a=[r[0],r[1]],o=[r[2],r[3]],h=this.px(a,e),l=this.px(o,e),c=[Math.floor(h[0]/Zt(this,me)),Math.floor((l[0]-1)/Zt(this,me))],u=[Math.floor(l[1]/Zt(this,me)),Math.floor((h[1]-1)/Zt(this,me))],f={minX:Math.min.apply(Math,c)<0?0:Math.min.apply(Math,c),minY:Math.min.apply(Math,u)<0?0:Math.min.apply(Math,u),maxX:Math.max.apply(Math,c),maxY:Math.max.apply(Math,u)};if(n){const p={minY:Math.pow(2,e)-1-f.maxY,maxY:Math.pow(2,e)-1-f.minY};f.minY=p.minY,f.maxY=p.maxY}return f}}me=new WeakMap,Qi=new WeakMap,xs=new WeakMap,Ms=new WeakMap,Cn=new WeakMap,tn=new WeakMap;const Ui=128;//! Attention ll signifie lon lat ici et pas lat lon
const pu=new jM({size:128}),KM=i=>{let t=49152,e=384,n=[[],[],[],[]];for(let s=0;s<e;s+=3)n[0].push(s+1+i),n[1].push(s/3*e+1+i),n[2].push(s+1+t-e+i),n[3].push((s/3+1)*e-2+i);return n},ra=KM(1),ZM=(()=>{let i=512,t=512,e=4,n=[];for(let s=0;s<e;s++)for(let r=0;r<e;r++)n.push([[r*(t/e-1)+r,(r+1)*t/e],[s*(i/e-1)+s,(s+1)*i/e]]);return n})();class JM{constructor(t,e,n,s,r,a,o){lt(this,"unitsPerMeter");lt(this,"projectCoords");lt(this,"mapBoxToken");lt(this,"dataElevationCovered");lt(this,"apiSatellite");lt(this,"apiRgb");lt(this,"watcher");lt(this,"onSatelliteMat");this.mapBoxToken=n,this.projectCoords=e,this.unitsPerMeter=t,this.dataElevationCovered=[],this.apiSatellite=s,this.apiRgb=r,this.watcher=a,o?this.onSatelliteMat=o:this.onSatelliteMat=void 0}fetch(t,e){const n=Js.getZoomPositionElevation(t);console.log(t,n);let s=0;n.forEach(async r=>{const a=await Js.fetchTile(r,this.mapBoxToken,this.apiRgb);if(a!==null)this.dataElevationCovered=this.dataElevationCovered.concat(this.addTile(a,r,t,e));else throw new Error("no tile added l-89 RgbModel");s++,s===n.length&&this.build()})}addTile(t,e,n,s){let r=[];if(t){let l,c,u;for(let f=0;f<t.data.length;f+=4)l=t.data[f],c=t.data[f+1],u=t.data[f+2],r.push(-1e4+(l*256**2+c*256+u)*.1)}else r=new Array(262144).fill(0);let a=[];for(let l=0;l<4;l++)for(let c=0;c<4;c++)a.push([e[0]+2,e[1]*4+l,e[2]*4+c].join("/"));let o=n.map(l=>l.join("/"));const h=[];return a.forEach((l,c)=>{if(!o.includes(l))return;let u=l.split("/").map(d=>parseInt(d)),f=ZM[c],p=[];for(let d=f[0][0];d<f[0][1];d++)for(let m=f[1][0];m<f[1][1];m++)p.push(r[d*512+m]);let g=[],_=0;for(let d=0;d<Ui;d++)for(let m=0;m<Ui;m++){let y=pu.ll([u[1]*128+m,u[2]*128+d],u[0]);g.push(...this.projectCoords(y,s.northWest,s.southEast),p[_]*this.unitsPerMeter),_++}h.push([u,g,e])}),h}async build(){let t=0,e=null;this.onSatelliteMat!==void 0&&(e=s=>{t++,t===this.dataElevationCovered.length&&this.watcher({what:"rgb-dem",data:s})});const n=this._build(e);e||this.watcher({what:"rgb-dem",data:n})}_build(t){const{dataElevationCovered:e,apiSatellite:n,mapBoxToken:s}=this;e.sort((o,h)=>o[0].join("/")>h[0].join("/")?1:-1);const r={};e.forEach((o,h)=>{r[o[0].join("/")]=h});const a=[];return e.forEach(([o,h,l])=>{let c=this.resolveSeams(h,this.getNeighborsInfo(e,r,o));const u=new on(1,1,c[0],c[1]);u.setAttribute("position",new ye(new Float32Array(h),3)),u.computeBoundingBox();const f=new Ie(u,new Kc({color:"white",side:2}));f.receiveShadow=!0,f.userData={isRgb:!0},a.push(f),t!==null&&this.resolveTexture(o,n,s,p=>{p&&(f.material=new Kc({side:2,map:p,wireframe:!1})),t&&t(a)})}),a}resolveSeams(t,e){let n=[Ui-1,Ui-1];if(Object.entries(e).forEach(([s,r])=>{s==="2"?(this._stitchWithNei2(t,r),n[1]++):s==="3"&&(this._stitchWithNei3(t,r),n[0]++)}),n[0]===Ui&&n[1]===Ui){let s=e[6];if(s)t.push(s[0],s[1],s[2]);else{let r=t.length;t.push(t[r-3],t[r-2],t[r-1])}}return n}_stitchWithNei2(t,e){for(let n=0;n<Ui;n++){let s=ra[2][n]+Ui*3,r=ra[0][n];t[s-2]=e[r-2],t[s-1]=e[r-1],t[s]=e[r]}}_stitchWithNei3(t,e){for(let n=0;n<Ui;n++){let s=ra[3][n]+(1+n)*3,r=ra[1][n];t.splice(s-2,0,e[r-2]),t.splice(s-1,0,e[r-1]),t.splice(s,0,e[r])}}getNeighborsInfo(t,e,n){const s={};return this.getNeighbors8(n).forEach((r,a)=>{const o=r.join("/");if(o in e){const h=t[e[o]][1];s[a]=h}}),s}getNeighbors8(t){const e=[[0,0,-1],[0,-1,0],[0,0,1],[0,1,0],[0,-1,-1],[0,-1,1],[0,1,1],[0,1,-1]],n=[];return e.forEach(s=>{const r=s.map((a,o)=>a+t[o]);n.push(r)}),n}async resolveTexture(t,e,n,s){const r=await Js.fetchTile(t,n,e),a=new _f(r.data,r.shape[0],r.shape[1],ei);a.flipY=!0,a.needsUpdate=!0,s&&s(a)}georeference(t){this.dataElevationCovered.forEach(e=>{const[n,s]=e;for(let r=0;r<s.length;r+=3){const[a,o,h]=s.slice(r,r+3),l=pu.ll([a,o],n[0]),[c,u]=this.projectCoords(l,t.northWest,t.southEast);s[r]=c,s[r+1]=u,s[r+2]=h}})}}function Ce(i){return(t,...e)=>QM(i,t,e)}function Is(i,t){return Ce(kf(i,t).get)}const{apply:QM,construct:ww,defineProperty:Tw,get:Cw,getOwnPropertyDescriptor:kf,getPrototypeOf:ml,has:Rw,ownKeys:ty,set:Pw,setPrototypeOf:Lw}=Reflect,{iterator:Mr,species:Iw,toStringTag:ey,for:Dw}=Symbol,iy=Object,{create:gl,defineProperty:ny,freeze:Nw,is:Uw}=iy,sy=Array,ry=sy.prototype,Hf=ry[Mr],ay=Ce(Hf),Vf=ArrayBuffer,oy=Vf.prototype;Is(oy,"byteLength");const mu=typeof SharedArrayBuffer<"u"?SharedArrayBuffer:null;mu&&Is(mu.prototype,"byteLength");const Wf=ml(Uint8Array);Wf.from;const ze=Wf.prototype;ze[Mr];Ce(ze.keys);Ce(ze.values);Ce(ze.entries);Ce(ze.set);Ce(ze.reverse);Ce(ze.fill);Ce(ze.copyWithin);Ce(ze.sort);Ce(ze.slice);Ce(ze.subarray);Is(ze,"buffer");Is(ze,"byteOffset");Is(ze,"length");Is(ze,ey);const hy=Uint8Array,Xf=Uint16Array,_l=Uint32Array,ly=Float32Array,fr=ml([][Mr]()),$f=Ce(fr.next),cy=Ce(function*(){}().next),uy=ml(fr),fy=DataView.prototype,dy=Ce(fy.getUint16),vl=WeakMap,qf=vl.prototype,Yf=Ce(qf.get),py=Ce(qf.set),jf=new vl,my=gl(null,{next:{value:function(){const t=Yf(jf,this);return $f(t)}},[Mr]:{value:function(){return this}}});function gy(i){if(i[Mr]===Hf&&fr.next===$f)return i;const t=gl(my);return py(jf,t,ay(i)),t}const _y=new vl,vy=gl(uy,{next:{value:function(){const t=Yf(_y,this);return cy(t)},writable:!0,configurable:!0}});for(const i of ty(fr))i!=="next"&&ny(vy,i,kf(fr,i));const Kf=new Vf(4),xy=new ly(Kf),My=new _l(Kf),_i=new Xf(512),vi=new hy(512);for(let i=0;i<256;++i){const t=i-127;t<-24?(_i[i]=0,_i[i|256]=32768,vi[i]=24,vi[i|256]=24):t<-14?(_i[i]=1024>>-t-14,_i[i|256]=1024>>-t-14|32768,vi[i]=-t-1,vi[i|256]=-t-1):t<=15?(_i[i]=t+15<<10,_i[i|256]=t+15<<10|32768,vi[i]=13,vi[i|256]=13):t<128?(_i[i]=31744,_i[i|256]=64512,vi[i]=24,vi[i|256]=24):(_i[i]=31744,_i[i|256]=64512,vi[i]=13,vi[i|256]=13)}const xl=new _l(2048);for(let i=1;i<1024;++i){let t=i<<13,e=0;for(;!(t&8388608);)t<<=1,e-=8388608;t&=-8388609,e+=947912704,xl[i]=t|e}for(let i=1024;i<2048;++i)xl[i]=939524096+(i-1024<<13);const Ds=new _l(64);for(let i=1;i<31;++i)Ds[i]=i<<23;Ds[31]=1199570944;Ds[32]=2147483648;for(let i=33;i<63;++i)Ds[i]=2147483648+(i-32<<23);Ds[63]=3347054592;const Zf=new Xf(64);for(let i=1;i<64;++i)i!==32&&(Zf[i]=1024);function yy(i){const t=i>>10;return My[0]=xl[Zf[t]+(i&1023)]+Ds[t],xy[0]}function Jf(i,t,...e){return yy(dy(i,t,...gy(e)))}var Ml={exports:{}};function Qf(i,t,e){const n=e&&e.debug||!1;n&&console.log("[xml-utils] getting "+t+" in "+i);const s=typeof i=="object"?i.outer:i,r=s.slice(0,s.indexOf(">")+1),a=['"',"'"];for(let o=0;o<a.length;o++){const h=a[o],l=t+"\\="+h+"([^"+h+"]*)"+h;n&&console.log("[xml-utils] pattern:",l);const u=new RegExp(l).exec(r);if(n&&console.log("[xml-utils] match:",u),u)return u[1]}}Ml.exports=Qf;Ml.exports.default=Qf;var Sy=Ml.exports;const Lo=fl(Sy);var yl={exports:{}},Sl={exports:{}},El={exports:{}};function td(i,t,e){const s=new RegExp(t).exec(i.slice(e));return s?e+s.index:-1}El.exports=td;El.exports.default=td;var Ey=El.exports,bl={exports:{}};function ed(i,t,e){const s=new RegExp(t).exec(i.slice(e));return s?e+s.index+s[0].length-1:-1}bl.exports=ed;bl.exports.default=ed;var by=bl.exports,Al={exports:{}};function id(i,t){const e=new RegExp(t,"g"),n=i.match(e);return n?n.length:0}Al.exports=id;Al.exports.default=id;var Ay=Al.exports;const wy=Ey,Io=by,gu=Ay;function nd(i,t,e){const n=e&&e.debug||!1,s=!(e&&typeof e.nested===!1),r=e&&e.startIndex||0;n&&console.log("[xml-utils] starting findTagByName with",t," and ",e);const a=wy(i,`<${t}[ 
>/]`,r);if(n&&console.log("[xml-utils] start:",a),a===-1)return;const o=i.slice(a+t.length);let h=Io(o,"^[^<]*[ /]>",0);const l=h!==-1&&o[h-1]==="/";if(n&&console.log("[xml-utils] selfClosing:",l),l===!1)if(s){let p=0,g=1,_=0;for(;(h=Io(o,"[ /]"+t+">",p))!==-1;){const d=o.substring(p,h+1);if(g+=gu(d,"<"+t+`[ 
	>]`),_+=gu(d,"</"+t+">"),_>=g)break;p=h}}else h=Io(o,"[ /]"+t+">",0);const c=a+t.length+h+1;if(n&&console.log("[xml-utils] end:",c),c===-1)return;const u=i.slice(a,c);let f;return l?f=null:f=u.slice(u.indexOf(">")+1,u.lastIndexOf("<")),{inner:f,outer:u,start:a,end:c}}Sl.exports=nd;Sl.exports.default=nd;var Ty=Sl.exports;const Cy=Ty;function sd(i,t,e){const n=[],s=e&&e.debug||!1,r=e&&typeof e.nested=="boolean"?e.nested:!0;let a=e&&e.startIndex||0,o;for(;o=Cy(i,t,{debug:s,startIndex:a});)r?a=o.start+1+t.length:a=o.end,n.push(o);return s&&console.log("findTagsByName found",n.length,"tags"),n}yl.exports=sd;yl.exports.default=sd;var Ry=yl.exports;const Py=fl(Ry),Qs={315:"Artist",258:"BitsPerSample",265:"CellLength",264:"CellWidth",320:"ColorMap",259:"Compression",33432:"Copyright",306:"DateTime",338:"ExtraSamples",266:"FillOrder",289:"FreeByteCounts",288:"FreeOffsets",291:"GrayResponseCurve",290:"GrayResponseUnit",316:"HostComputer",270:"ImageDescription",257:"ImageLength",256:"ImageWidth",271:"Make",281:"MaxSampleValue",280:"MinSampleValue",272:"Model",254:"NewSubfileType",274:"Orientation",262:"PhotometricInterpretation",284:"PlanarConfiguration",296:"ResolutionUnit",278:"RowsPerStrip",277:"SamplesPerPixel",305:"Software",279:"StripByteCounts",273:"StripOffsets",255:"SubfileType",263:"Threshholding",282:"XResolution",283:"YResolution",326:"BadFaxLines",327:"CleanFaxData",343:"ClipPath",328:"ConsecutiveBadFaxLines",433:"Decode",434:"DefaultImageColor",269:"DocumentName",336:"DotRange",321:"HalftoneHints",346:"Indexed",347:"JPEGTables",285:"PageName",297:"PageNumber",317:"Predictor",319:"PrimaryChromaticities",532:"ReferenceBlackWhite",339:"SampleFormat",340:"SMinSampleValue",341:"SMaxSampleValue",559:"StripRowCounts",330:"SubIFDs",292:"T4Options",293:"T6Options",325:"TileByteCounts",323:"TileLength",324:"TileOffsets",322:"TileWidth",301:"TransferFunction",318:"WhitePoint",344:"XClipPathUnits",286:"XPosition",529:"YCbCrCoefficients",531:"YCbCrPositioning",530:"YCbCrSubSampling",345:"YClipPathUnits",287:"YPosition",37378:"ApertureValue",40961:"ColorSpace",36868:"DateTimeDigitized",36867:"DateTimeOriginal",34665:"Exif IFD",36864:"ExifVersion",33434:"ExposureTime",41728:"FileSource",37385:"Flash",40960:"FlashpixVersion",33437:"FNumber",42016:"ImageUniqueID",37384:"LightSource",37500:"MakerNote",37377:"ShutterSpeedValue",37510:"UserComment",33723:"IPTC",34675:"ICC Profile",700:"XMP",42112:"GDAL_METADATA",42113:"GDAL_NODATA",34377:"Photoshop",33550:"ModelPixelScale",33922:"ModelTiepoint",34264:"ModelTransformation",34735:"GeoKeyDirectory",34736:"GeoDoubleParams",34737:"GeoAsciiParams",50674:"LercParameters"},Mi={};for(const i in Qs)Qs.hasOwnProperty(i)&&(Mi[Qs[i]]=parseInt(i,10));const Ly=[Mi.BitsPerSample,Mi.ExtraSamples,Mi.SampleFormat,Mi.StripByteCounts,Mi.StripOffsets,Mi.StripRowCounts,Mi.TileByteCounts,Mi.TileOffsets,Mi.SubIFDs],Do={1:"BYTE",2:"ASCII",3:"SHORT",4:"LONG",5:"RATIONAL",6:"SBYTE",7:"UNDEFINED",8:"SSHORT",9:"SLONG",10:"SRATIONAL",11:"FLOAT",12:"DOUBLE",13:"IFD",16:"LONG8",17:"SLONG8",18:"IFD8"},Wt={};for(const i in Do)Do.hasOwnProperty(i)&&(Wt[Do[i]]=parseInt(i,10));const ti={WhiteIsZero:0,BlackIsZero:1,RGB:2,Palette:3,TransparencyMask:4,CMYK:5,YCbCr:6,CIELab:8,ICCLab:9},Iy={Unspecified:0,Assocalpha:1,Unassalpha:2},Ow={Version:0,AddCompression:1},Fw={None:0,Deflate:1,Zstandard:2},Dy={1024:"GTModelTypeGeoKey",1025:"GTRasterTypeGeoKey",1026:"GTCitationGeoKey",2048:"GeographicTypeGeoKey",2049:"GeogCitationGeoKey",2050:"GeogGeodeticDatumGeoKey",2051:"GeogPrimeMeridianGeoKey",2052:"GeogLinearUnitsGeoKey",2053:"GeogLinearUnitSizeGeoKey",2054:"GeogAngularUnitsGeoKey",2055:"GeogAngularUnitSizeGeoKey",2056:"GeogEllipsoidGeoKey",2057:"GeogSemiMajorAxisGeoKey",2058:"GeogSemiMinorAxisGeoKey",2059:"GeogInvFlatteningGeoKey",2060:"GeogAzimuthUnitsGeoKey",2061:"GeogPrimeMeridianLongGeoKey",2062:"GeogTOWGS84GeoKey",3072:"ProjectedCSTypeGeoKey",3073:"PCSCitationGeoKey",3074:"ProjectionGeoKey",3075:"ProjCoordTransGeoKey",3076:"ProjLinearUnitsGeoKey",3077:"ProjLinearUnitSizeGeoKey",3078:"ProjStdParallel1GeoKey",3079:"ProjStdParallel2GeoKey",3080:"ProjNatOriginLongGeoKey",3081:"ProjNatOriginLatGeoKey",3082:"ProjFalseEastingGeoKey",3083:"ProjFalseNorthingGeoKey",3084:"ProjFalseOriginLongGeoKey",3085:"ProjFalseOriginLatGeoKey",3086:"ProjFalseOriginEastingGeoKey",3087:"ProjFalseOriginNorthingGeoKey",3088:"ProjCenterLongGeoKey",3089:"ProjCenterLatGeoKey",3090:"ProjCenterEastingGeoKey",3091:"ProjCenterNorthingGeoKey",3092:"ProjScaleAtNatOriginGeoKey",3093:"ProjScaleAtCenterGeoKey",3094:"ProjAzimuthAngleGeoKey",3095:"ProjStraightVertPoleLongGeoKey",3096:"ProjRectifiedGridAngleGeoKey",4096:"VerticalCSTypeGeoKey",4097:"VerticalCitationGeoKey",4098:"VerticalDatumGeoKey",4099:"VerticalUnitsGeoKey"};function Ny(i,t){const{width:e,height:n}=i,s=new Uint8Array(e*n*3);let r;for(let a=0,o=0;a<i.length;++a,o+=3)r=256-i[a]/t*256,s[o]=r,s[o+1]=r,s[o+2]=r;return s}function Uy(i,t){const{width:e,height:n}=i,s=new Uint8Array(e*n*3);let r;for(let a=0,o=0;a<i.length;++a,o+=3)r=i[a]/t*256,s[o]=r,s[o+1]=r,s[o+2]=r;return s}function Oy(i,t){const{width:e,height:n}=i,s=new Uint8Array(e*n*3),r=t.length/3,a=t.length/3*2;for(let o=0,h=0;o<i.length;++o,h+=3){const l=i[o];s[h]=t[l]/65536*256,s[h+1]=t[l+r]/65536*256,s[h+2]=t[l+a]/65536*256}return s}function Fy(i){const{width:t,height:e}=i,n=new Uint8Array(t*e*3);for(let s=0,r=0;s<i.length;s+=4,r+=3){const a=i[s],o=i[s+1],h=i[s+2],l=i[s+3];n[r]=255*((255-a)/256)*((255-l)/256),n[r+1]=255*((255-o)/256)*((255-l)/256),n[r+2]=255*((255-h)/256)*((255-l)/256)}return n}function By(i){const{width:t,height:e}=i,n=new Uint8ClampedArray(t*e*3);for(let s=0,r=0;s<i.length;s+=3,r+=3){const a=i[s],o=i[s+1],h=i[s+2];n[r]=a+1.402*(h-128),n[r+1]=a-.34414*(o-128)-.71414*(h-128),n[r+2]=a+1.772*(o-128)}return n}const zy=.95047,Gy=1,ky=1.08883;function Hy(i){const{width:t,height:e}=i,n=new Uint8Array(t*e*3);for(let s=0,r=0;s<i.length;s+=3,r+=3){const a=i[s+0],o=i[s+1]<<24>>24,h=i[s+2]<<24>>24;let l=(a+16)/116,c=o/500+l,u=l-h/200,f,p,g;c=zy*(c*c*c>.008856?c*c*c:(c-16/116)/7.787),l=Gy*(l*l*l>.008856?l*l*l:(l-16/116)/7.787),u=ky*(u*u*u>.008856?u*u*u:(u-16/116)/7.787),f=c*3.2406+l*-1.5372+u*-.4986,p=c*-.9689+l*1.8758+u*.0415,g=c*.0557+l*-.204+u*1.057,f=f>.0031308?1.055*f**(1/2.4)-.055:12.92*f,p=p>.0031308?1.055*p**(1/2.4)-.055:12.92*p,g=g>.0031308?1.055*g**(1/2.4)-.055:12.92*g,n[r]=Math.max(0,Math.min(1,f))*255,n[r+1]=Math.max(0,Math.min(1,p))*255,n[r+2]=Math.max(0,Math.min(1,g))*255}return n}const Vy="modulepreload",Wy=function(i){return"/DEMVis/"+i},_u={},Fn=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));s=Promise.allSettled(e.map(h=>{if(h=Wy(h),h in _u)return;_u[h]=!0;const l=h.endsWith(".css"),c=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${c}`))return;const u=document.createElement("link");if(u.rel=l?"stylesheet":Vy,l||(u.as="script"),u.crossOrigin="",u.href=h,o&&u.setAttribute("nonce",o),document.head.appendChild(u),l)return new Promise((f,p)=>{u.addEventListener("load",f),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${h}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})},rd=new Map;function fn(i,t){Array.isArray(i)||(i=[i]),i.forEach(e=>rd.set(e,t))}async function Xy(i){const t=rd.get(i.Compression);if(!t)throw new Error(`Unknown compression method identifier: ${i.Compression}`);const e=await t();return new e(i)}fn([void 0,1],()=>Fn(()=>import("./raw-Dt1HMqYc.js"),__vite__mapDeps([0,1])).then(i=>i.default));fn(5,()=>Fn(()=>import("./lzw-DpvbRwG5.js"),__vite__mapDeps([2,1])).then(i=>i.default));fn(6,()=>{throw new Error("old style JPEG compression is not supported.")});fn(7,()=>Fn(()=>import("./jpeg-CdeCw_eT.js"),__vite__mapDeps([3,1])).then(i=>i.default));fn([8,32946],()=>Fn(()=>import("./deflate-CUkHh1nh.js"),__vite__mapDeps([4,5,1])).then(i=>i.default));fn(32773,()=>Fn(()=>import("./packbits-DQnG8s9w.js"),__vite__mapDeps([6,1])).then(i=>i.default));fn(34887,()=>Fn(()=>import("./lerc-CL43XwvN.js"),__vite__mapDeps([7,5,1])).then(async i=>(await i.zstd.init(),i)).then(i=>i.default));fn(50001,()=>Fn(()=>import("./webimage-BcnuJlio.js"),__vite__mapDeps([8,1])).then(i=>i.default));function ka(i,t,e,n=1){return new(Object.getPrototypeOf(i)).constructor(t*e*n)}function $y(i,t,e,n,s){const r=t/n,a=e/s;return i.map(o=>{const h=ka(o,n,s);for(let l=0;l<s;++l){const c=Math.min(Math.round(a*l),e-1);for(let u=0;u<n;++u){const f=Math.min(Math.round(r*u),t-1),p=o[c*t+f];h[l*n+u]=p}}return h})}function ms(i,t,e){return(1-e)*i+e*t}function qy(i,t,e,n,s){const r=t/n,a=e/s;return i.map(o=>{const h=ka(o,n,s);for(let l=0;l<s;++l){const c=a*l,u=Math.floor(c),f=Math.min(Math.ceil(c),e-1);for(let p=0;p<n;++p){const g=r*p,_=g%1,d=Math.floor(g),m=Math.min(Math.ceil(g),t-1),y=o[u*t+d],x=o[u*t+m],S=o[f*t+d],R=o[f*t+m],T=ms(ms(y,x,_),ms(S,R,_),c%1);h[l*n+p]=T}}return h})}function Yy(i,t,e,n,s,r="nearest"){switch(r.toLowerCase()){case"nearest":return $y(i,t,e,n,s);case"bilinear":case"linear":return qy(i,t,e,n,s);default:throw new Error(`Unsupported resampling method: '${r}'`)}}function jy(i,t,e,n,s,r){const a=t/n,o=e/s,h=ka(i,n,s,r);for(let l=0;l<s;++l){const c=Math.min(Math.round(o*l),e-1);for(let u=0;u<n;++u){const f=Math.min(Math.round(a*u),t-1);for(let p=0;p<r;++p){const g=i[c*t*r+f*r+p];h[l*n*r+u*r+p]=g}}}return h}function Ky(i,t,e,n,s,r){const a=t/n,o=e/s,h=ka(i,n,s,r);for(let l=0;l<s;++l){const c=o*l,u=Math.floor(c),f=Math.min(Math.ceil(c),e-1);for(let p=0;p<n;++p){const g=a*p,_=g%1,d=Math.floor(g),m=Math.min(Math.ceil(g),t-1);for(let y=0;y<r;++y){const x=i[u*t*r+d*r+y],S=i[u*t*r+m*r+y],R=i[f*t*r+d*r+y],T=i[f*t*r+m*r+y],C=ms(ms(x,S,_),ms(R,T,_),c%1);h[l*n*r+p*r+y]=C}}}return h}function Zy(i,t,e,n,s,r,a="nearest"){switch(a.toLowerCase()){case"nearest":return jy(i,t,e,n,s,r);case"bilinear":case"linear":return Ky(i,t,e,n,s,r);default:throw new Error(`Unsupported resampling method: '${a}'`)}}function Jy(i,t,e){let n=0;for(let s=t;s<e;++s)n+=i[s];return n}function Fh(i,t,e){switch(i){case 1:if(t<=8)return new Uint8Array(e);if(t<=16)return new Uint16Array(e);if(t<=32)return new Uint32Array(e);break;case 2:if(t===8)return new Int8Array(e);if(t===16)return new Int16Array(e);if(t===32)return new Int32Array(e);break;case 3:switch(t){case 16:case 32:return new Float32Array(e);case 64:return new Float64Array(e)}break}throw Error("Unsupported data format/bitsPerSample")}function Qy(i,t){return(i===1||i===2)&&t<=32&&t%8===0?!1:!(i===3&&(t===16||t===32||t===64))}function t1(i,t,e,n,s,r,a){const o=new DataView(i),h=e===2?a*r:a*r*n,l=e===2?1:n,c=Fh(t,s,h),u=parseInt("1".repeat(s),2);if(t===1){let f;e===1?f=n*s:f=s;let p=r*f;p&7&&(p=p+7&-8);for(let g=0;g<a;++g){const _=g*p;for(let d=0;d<r;++d){const m=_+d*l*s;for(let y=0;y<l;++y){const x=m+y*s,S=(g*r+d)*l+y,R=Math.floor(x/8),T=x%8;if(T+s<=8)c[S]=o.getUint8(R)>>8-s-T&u;else if(T+s<=16)c[S]=o.getUint16(R)>>16-s-T&u;else if(T+s<=24){const C=o.getUint16(R)<<8|o.getUint8(R+2);c[S]=C>>24-s-T&u}else c[S]=o.getUint32(R)>>32-s-T&u}}}}return c.buffer}class e1{constructor(t,e,n,s,r,a){this.fileDirectory=t,this.geoKeys=e,this.dataView=n,this.littleEndian=s,this.tiles=r?{}:null,this.isTiled=!t.StripOffsets;const o=t.PlanarConfiguration;if(this.planarConfiguration=typeof o>"u"?1:o,this.planarConfiguration!==1&&this.planarConfiguration!==2)throw new Error("Invalid planar configuration.");this.source=a}getFileDirectory(){return this.fileDirectory}getGeoKeys(){return this.geoKeys}getWidth(){return this.fileDirectory.ImageWidth}getHeight(){return this.fileDirectory.ImageLength}getSamplesPerPixel(){return typeof this.fileDirectory.SamplesPerPixel<"u"?this.fileDirectory.SamplesPerPixel:1}getTileWidth(){return this.isTiled?this.fileDirectory.TileWidth:this.getWidth()}getTileHeight(){return this.isTiled?this.fileDirectory.TileLength:typeof this.fileDirectory.RowsPerStrip<"u"?Math.min(this.fileDirectory.RowsPerStrip,this.getHeight()):this.getHeight()}getBlockWidth(){return this.getTileWidth()}getBlockHeight(t){return this.isTiled||(t+1)*this.getTileHeight()<=this.getHeight()?this.getTileHeight():this.getHeight()-t*this.getTileHeight()}getBytesPerPixel(){let t=0;for(let e=0;e<this.fileDirectory.BitsPerSample.length;++e)t+=this.getSampleByteSize(e);return t}getSampleByteSize(t){if(t>=this.fileDirectory.BitsPerSample.length)throw new RangeError(`Sample index ${t} is out of range.`);return Math.ceil(this.fileDirectory.BitsPerSample[t]/8)}getReaderForSample(t){const e=this.fileDirectory.SampleFormat?this.fileDirectory.SampleFormat[t]:1,n=this.fileDirectory.BitsPerSample[t];switch(e){case 1:if(n<=8)return DataView.prototype.getUint8;if(n<=16)return DataView.prototype.getUint16;if(n<=32)return DataView.prototype.getUint32;break;case 2:if(n<=8)return DataView.prototype.getInt8;if(n<=16)return DataView.prototype.getInt16;if(n<=32)return DataView.prototype.getInt32;break;case 3:switch(n){case 16:return function(s,r){return Jf(this,s,r)};case 32:return DataView.prototype.getFloat32;case 64:return DataView.prototype.getFloat64}break}throw Error("Unsupported data format/bitsPerSample")}getSampleFormat(t=0){return this.fileDirectory.SampleFormat?this.fileDirectory.SampleFormat[t]:1}getBitsPerSample(t=0){return this.fileDirectory.BitsPerSample[t]}getArrayForSample(t,e){const n=this.getSampleFormat(t),s=this.getBitsPerSample(t);return Fh(n,s,e)}async getTileOrStrip(t,e,n,s,r){const a=Math.ceil(this.getWidth()/this.getTileWidth()),o=Math.ceil(this.getHeight()/this.getTileHeight());let h;const{tiles:l}=this;this.planarConfiguration===1?h=e*a+t:this.planarConfiguration===2&&(h=n*a*o+e*a+t);let c,u;this.isTiled?(c=this.fileDirectory.TileOffsets[h],u=this.fileDirectory.TileByteCounts[h]):(c=this.fileDirectory.StripOffsets[h],u=this.fileDirectory.StripByteCounts[h]);const f=(await this.source.fetch([{offset:c,length:u}],r))[0];let p;return l===null||!l[h]?(p=(async()=>{let g=await s.decode(this.fileDirectory,f);const _=this.getSampleFormat(),d=this.getBitsPerSample();return Qy(_,d)&&(g=t1(g,_,this.planarConfiguration,this.getSamplesPerPixel(),d,this.getTileWidth(),this.getBlockHeight(e))),g})(),l!==null&&(l[h]=p)):p=l[h],{x:t,y:e,sample:n,data:await p}}async _readRaster(t,e,n,s,r,a,o,h,l){const c=this.getTileWidth(),u=this.getTileHeight(),f=this.getWidth(),p=this.getHeight(),g=Math.max(Math.floor(t[0]/c),0),_=Math.min(Math.ceil(t[2]/c),Math.ceil(f/c)),d=Math.max(Math.floor(t[1]/u),0),m=Math.min(Math.ceil(t[3]/u),Math.ceil(p/u)),y=t[2]-t[0];let x=this.getBytesPerPixel();const S=[],R=[];for(let P=0;P<e.length;++P)this.planarConfiguration===1?S.push(Jy(this.fileDirectory.BitsPerSample,0,e[P])/8):S.push(0),R.push(this.getReaderForSample(e[P]));const T=[],{littleEndian:C}=this;for(let P=d;P<m;++P)for(let tt=g;tt<_;++tt){let v;this.planarConfiguration===1&&(v=this.getTileOrStrip(tt,P,0,r,l));for(let E=0;E<e.length;++E){const W=E,z=e[E];this.planarConfiguration===2&&(x=this.getSampleByteSize(z),v=this.getTileOrStrip(tt,P,z,r,l));const k=v.then(K=>{const B=K.data,nt=new DataView(B),H=this.getBlockHeight(K.y),dt=K.y*u,pt=K.x*c,V=dt+H,ct=(K.x+1)*c,mt=R[W],G=Math.min(H,H-(V-t[3]),p-dt),$=Math.min(c,c-(ct-t[2]),f-pt);for(let st=Math.max(0,t[1]-dt);st<G;++st)for(let Z=Math.max(0,t[0]-pt);Z<$;++Z){const yt=(st*c+Z)*x,Tt=mt.call(nt,yt+S[W],C);let It;s?(It=(st+dt-t[1])*y*e.length+(Z+pt-t[0])*e.length+W,n[It]=Tt):(It=(st+dt-t[1])*y+Z+pt-t[0],n[W][It]=Tt)}});T.push(k)}}if(await Promise.all(T),a&&t[2]-t[0]!==a||o&&t[3]-t[1]!==o){let P;return s?P=Zy(n,t[2]-t[0],t[3]-t[1],a,o,e.length,h):P=Yy(n,t[2]-t[0],t[3]-t[1],a,o,h),P.width=a,P.height=o,P}return n.width=a||t[2]-t[0],n.height=o||t[3]-t[1],n}async readRasters({window:t,samples:e=[],interleave:n,pool:s=null,width:r,height:a,resampleMethod:o,fillValue:h,signal:l}={}){const c=t||[0,0,this.getWidth(),this.getHeight()];if(c[0]>c[2]||c[1]>c[3])throw new Error("Invalid subsets");const u=c[2]-c[0],f=c[3]-c[1],p=u*f,g=this.getSamplesPerPixel();if(!e||!e.length)for(let y=0;y<g;++y)e.push(y);else for(let y=0;y<e.length;++y)if(e[y]>=g)return Promise.reject(new RangeError(`Invalid sample index '${e[y]}'.`));let _;if(n){const y=this.fileDirectory.SampleFormat?Math.max.apply(null,this.fileDirectory.SampleFormat):1,x=Math.max.apply(null,this.fileDirectory.BitsPerSample);_=Fh(y,x,p*e.length),h&&_.fill(h)}else{_=[];for(let y=0;y<e.length;++y){const x=this.getArrayForSample(e[y],p);Array.isArray(h)&&y<h.length?x.fill(h[y]):h&&!Array.isArray(h)&&x.fill(h),_.push(x)}}const d=s||await Xy(this.fileDirectory);return await this._readRaster(c,e,_,n,d,r,a,o,l)}async readRGB({window:t,interleave:e=!0,pool:n=null,width:s,height:r,resampleMethod:a,enableAlpha:o=!1,signal:h}={}){const l=t||[0,0,this.getWidth(),this.getHeight()];if(l[0]>l[2]||l[1]>l[3])throw new Error("Invalid subsets");const c=this.fileDirectory.PhotometricInterpretation;if(c===ti.RGB){let m=[0,1,2];if(this.fileDirectory.ExtraSamples!==Iy.Unspecified&&o){m=[];for(let y=0;y<this.fileDirectory.BitsPerSample.length;y+=1)m.push(y)}return this.readRasters({window:t,interleave:e,samples:m,pool:n,width:s,height:r,resampleMethod:a,signal:h})}let u;switch(c){case ti.WhiteIsZero:case ti.BlackIsZero:case ti.Palette:u=[0];break;case ti.CMYK:u=[0,1,2,3];break;case ti.YCbCr:case ti.CIELab:u=[0,1,2];break;default:throw new Error("Invalid or unsupported photometric interpretation.")}const f={window:l,interleave:!0,samples:u,pool:n,width:s,height:r,resampleMethod:a,signal:h},{fileDirectory:p}=this,g=await this.readRasters(f),_=2**this.fileDirectory.BitsPerSample[0];let d;switch(c){case ti.WhiteIsZero:d=Ny(g,_);break;case ti.BlackIsZero:d=Uy(g,_);break;case ti.Palette:d=Oy(g,p.ColorMap);break;case ti.CMYK:d=Fy(g);break;case ti.YCbCr:d=By(g);break;case ti.CIELab:d=Hy(g);break;default:throw new Error("Unsupported photometric interpretation.")}if(!e){const m=new Uint8Array(d.length/3),y=new Uint8Array(d.length/3),x=new Uint8Array(d.length/3);for(let S=0,R=0;S<d.length;S+=3,++R)m[R]=d[S],y[R]=d[S+1],x[R]=d[S+2];d=[m,y,x]}return d.width=g.width,d.height=g.height,d}getTiePoints(){if(!this.fileDirectory.ModelTiepoint)return[];const t=[];for(let e=0;e<this.fileDirectory.ModelTiepoint.length;e+=6)t.push({i:this.fileDirectory.ModelTiepoint[e],j:this.fileDirectory.ModelTiepoint[e+1],k:this.fileDirectory.ModelTiepoint[e+2],x:this.fileDirectory.ModelTiepoint[e+3],y:this.fileDirectory.ModelTiepoint[e+4],z:this.fileDirectory.ModelTiepoint[e+5]});return t}getGDALMetadata(t=null){const e={};if(!this.fileDirectory.GDAL_METADATA)return null;const n=this.fileDirectory.GDAL_METADATA;let s=Py(n,"Item");t===null?s=s.filter(r=>Lo(r,"sample")===void 0):s=s.filter(r=>Number(Lo(r,"sample"))===t);for(let r=0;r<s.length;++r){const a=s[r];e[Lo(a,"name")]=a.inner}return e}getGDALNoData(){if(!this.fileDirectory.GDAL_NODATA)return null;const t=this.fileDirectory.GDAL_NODATA;return Number(t.substring(0,t.length-1))}getOrigin(){const t=this.fileDirectory.ModelTiepoint,e=this.fileDirectory.ModelTransformation;if(t&&t.length===6)return[t[3],t[4],t[5]];if(e)return[e[3],e[7],e[11]];throw new Error("The image does not have an affine transformation.")}getResolution(t=null){const e=this.fileDirectory.ModelPixelScale,n=this.fileDirectory.ModelTransformation;if(e)return[e[0],-e[1],e[2]];if(n)return n[1]===0&&n[4]===0?[n[0],-n[5],n[10]]:[Math.sqrt(n[0]*n[0]+n[4]*n[4]),-Math.sqrt(n[1]*n[1]+n[5]*n[5]),n[10]];if(t){const[s,r,a]=t.getResolution();return[s*t.getWidth()/this.getWidth(),r*t.getHeight()/this.getHeight(),a*t.getWidth()/this.getWidth()]}throw new Error("The image does not have an affine transformation.")}pixelIsArea(){return this.geoKeys.GTRasterTypeGeoKey===1}getBoundingBox(t=!1){const e=this.getHeight(),n=this.getWidth();if(this.fileDirectory.ModelTransformation&&!t){const[s,r,a,o,h,l,c,u]=this.fileDirectory.ModelTransformation,p=[[0,0],[0,e],[n,0],[n,e]].map(([d,m])=>[o+s*d+r*m,u+h*d+l*m]),g=p.map(d=>d[0]),_=p.map(d=>d[1]);return[Math.min(...g),Math.min(..._),Math.max(...g),Math.max(..._)]}else{const s=this.getOrigin(),r=this.getResolution(),a=s[0],o=s[1],h=a+r[0]*n,l=o+r[1]*e;return[Math.min(a,h),Math.min(o,l),Math.max(a,h),Math.max(o,l)]}}}class i1{constructor(t){this._dataView=new DataView(t)}get buffer(){return this._dataView.buffer}getUint64(t,e){const n=this.getUint32(t,e),s=this.getUint32(t+4,e);let r;if(e){if(r=n+2**32*s,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}if(r=2**32*n+s,!Number.isSafeInteger(r))throw new Error(`${r} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return r}getInt64(t,e){let n=0;const s=(this._dataView.getUint8(t+(e?7:0))&128)>0;let r=!0;for(let a=0;a<8;a++){let o=this._dataView.getUint8(t+(e?a:7-a));s&&(r?o!==0&&(o=~(o-1)&255,r=!1):o=~o&255),n+=o*256**a}return s&&(n=-n),n}getUint8(t,e){return this._dataView.getUint8(t,e)}getInt8(t,e){return this._dataView.getInt8(t,e)}getUint16(t,e){return this._dataView.getUint16(t,e)}getInt16(t,e){return this._dataView.getInt16(t,e)}getUint32(t,e){return this._dataView.getUint32(t,e)}getInt32(t,e){return this._dataView.getInt32(t,e)}getFloat16(t,e){return Jf(this._dataView,t,e)}getFloat32(t,e){return this._dataView.getFloat32(t,e)}getFloat64(t,e){return this._dataView.getFloat64(t,e)}}class n1{constructor(t,e,n,s){this._dataView=new DataView(t),this._sliceOffset=e,this._littleEndian=n,this._bigTiff=s}get sliceOffset(){return this._sliceOffset}get sliceTop(){return this._sliceOffset+this.buffer.byteLength}get littleEndian(){return this._littleEndian}get bigTiff(){return this._bigTiff}get buffer(){return this._dataView.buffer}covers(t,e){return this.sliceOffset<=t&&this.sliceTop>=t+e}readUint8(t){return this._dataView.getUint8(t-this._sliceOffset,this._littleEndian)}readInt8(t){return this._dataView.getInt8(t-this._sliceOffset,this._littleEndian)}readUint16(t){return this._dataView.getUint16(t-this._sliceOffset,this._littleEndian)}readInt16(t){return this._dataView.getInt16(t-this._sliceOffset,this._littleEndian)}readUint32(t){return this._dataView.getUint32(t-this._sliceOffset,this._littleEndian)}readInt32(t){return this._dataView.getInt32(t-this._sliceOffset,this._littleEndian)}readFloat32(t){return this._dataView.getFloat32(t-this._sliceOffset,this._littleEndian)}readFloat64(t){return this._dataView.getFloat64(t-this._sliceOffset,this._littleEndian)}readUint64(t){const e=this.readUint32(t),n=this.readUint32(t+4);let s;if(this._littleEndian){if(s=e+2**32*n,!Number.isSafeInteger(s))throw new Error(`${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return s}if(s=2**32*e+n,!Number.isSafeInteger(s))throw new Error(`${s} exceeds MAX_SAFE_INTEGER. Precision may be lost. Please report if you get this message to https://github.com/geotiffjs/geotiff.js/issues`);return s}readInt64(t){let e=0;const n=(this._dataView.getUint8(t+(this._littleEndian?7:0))&128)>0;let s=!0;for(let r=0;r<8;r++){let a=this._dataView.getUint8(t+(this._littleEndian?r:7-r));n&&(s?a!==0&&(a=~(a-1)&255,s=!1):a=~a&255),e+=a*256**r}return n&&(e=-e),e}readOffset(t){return this._bigTiff?this.readUint64(t):this.readUint32(t)}}class s1{async fetch(t,e=void 0){return Promise.all(t.map(n=>this.fetchSlice(n,e)))}async fetchSlice(t){throw new Error(`fetching of slice ${t} not possible, not implemented`)}get fileSize(){return null}async close(){}}class wl extends Error{constructor(t){super(t),Error.captureStackTrace&&Error.captureStackTrace(this,wl),this.name="AbortError"}}class r1 extends s1{constructor(t){super(),this.arrayBuffer=t}fetchSlice(t,e){if(e&&e.aborted)throw new wl("Request aborted");return this.arrayBuffer.slice(t.offset,t.offset+t.length)}}function a1(i){return new r1(i)}function Bh(i){switch(i){case Wt.BYTE:case Wt.ASCII:case Wt.SBYTE:case Wt.UNDEFINED:return 1;case Wt.SHORT:case Wt.SSHORT:return 2;case Wt.LONG:case Wt.SLONG:case Wt.FLOAT:case Wt.IFD:return 4;case Wt.RATIONAL:case Wt.SRATIONAL:case Wt.DOUBLE:case Wt.LONG8:case Wt.SLONG8:case Wt.IFD8:return 8;default:throw new RangeError(`Invalid field type: ${i}`)}}function o1(i){const t=i.GeoKeyDirectory;if(!t)return null;const e={};for(let n=4;n<=t[3]*4;n+=4){const s=Dy[t[n]],r=t[n+1]?Qs[t[n+1]]:null,a=t[n+2],o=t[n+3];let h=null;if(!r)h=o;else{if(h=i[r],typeof h>"u"||h===null)throw new Error(`Could not get value of geoKey '${s}'.`);typeof h=="string"?h=h.substring(o,o+a-1):h.subarray&&(h=h.subarray(o,o+a),a===1&&(h=h[0]))}e[s]=h}return e}function ts(i,t,e,n){let s=null,r=null;const a=Bh(t);switch(t){case Wt.BYTE:case Wt.ASCII:case Wt.UNDEFINED:s=new Uint8Array(e),r=i.readUint8;break;case Wt.SBYTE:s=new Int8Array(e),r=i.readInt8;break;case Wt.SHORT:s=new Uint16Array(e),r=i.readUint16;break;case Wt.SSHORT:s=new Int16Array(e),r=i.readInt16;break;case Wt.LONG:case Wt.IFD:s=new Uint32Array(e),r=i.readUint32;break;case Wt.SLONG:s=new Int32Array(e),r=i.readInt32;break;case Wt.LONG8:case Wt.IFD8:s=new Array(e),r=i.readUint64;break;case Wt.SLONG8:s=new Array(e),r=i.readInt64;break;case Wt.RATIONAL:s=new Uint32Array(e*2),r=i.readUint32;break;case Wt.SRATIONAL:s=new Int32Array(e*2),r=i.readInt32;break;case Wt.FLOAT:s=new Float32Array(e),r=i.readFloat32;break;case Wt.DOUBLE:s=new Float64Array(e),r=i.readFloat64;break;default:throw new RangeError(`Invalid field type: ${t}`)}if(t===Wt.RATIONAL||t===Wt.SRATIONAL)for(let o=0;o<e;o+=2)s[o]=r.call(i,n+o*a),s[o+1]=r.call(i,n+(o*a+4));else for(let o=0;o<e;++o)s[o]=r.call(i,n+o*a);return t===Wt.ASCII?new TextDecoder("utf-8").decode(s):s}class h1{constructor(t,e,n){this.fileDirectory=t,this.geoKeyDirectory=e,this.nextIFDByteOffset=n}}class aa extends Error{constructor(t){super(`No image at index ${t}`),this.index=t}}class l1{async readRasters(t={}){const{window:e,width:n,height:s}=t;let{resX:r,resY:a,bbox:o}=t;const h=await this.getImage();let l=h;const c=await this.getImageCount(),u=h.getBoundingBox();if(e&&o)throw new Error('Both "bbox" and "window" passed.');if(n||s){if(e){const[g,_]=h.getOrigin(),[d,m]=h.getResolution();o=[g+e[0]*d,_+e[1]*m,g+e[2]*d,_+e[3]*m]}const p=o||u;if(n){if(r)throw new Error("Both width and resX passed");r=(p[2]-p[0])/n}if(s){if(a)throw new Error("Both width and resY passed");a=(p[3]-p[1])/s}}if(r||a){const p=[];for(let g=0;g<c;++g){const _=await this.getImage(g),{SubfileType:d,NewSubfileType:m}=_.fileDirectory;(g===0||d===2||m&1)&&p.push(_)}p.sort((g,_)=>g.getWidth()-_.getWidth());for(let g=0;g<p.length;++g){const _=p[g],d=(u[2]-u[0])/_.getWidth(),m=(u[3]-u[1])/_.getHeight();if(l=_,r&&r>d||a&&a>m)break}}let f=e;if(o){const[p,g]=h.getOrigin(),[_,d]=l.getResolution(h);f=[Math.round((o[0]-p)/_),Math.round((o[1]-g)/d),Math.round((o[2]-p)/_),Math.round((o[3]-g)/d)],f=[Math.min(f[0],f[2]),Math.min(f[1],f[3]),Math.max(f[0],f[2]),Math.max(f[1],f[3])]}return l.readRasters({...t,window:f})}}class Tl extends l1{constructor(t,e,n,s,r={}){super(),this.source=t,this.littleEndian=e,this.bigTiff=n,this.firstIFDOffset=s,this.cache=r.cache||!1,this.ifdRequests=[],this.ghostValues=null}async getSlice(t,e){const n=this.bigTiff?4048:1024;return new n1((await this.source.fetch([{offset:t,length:typeof e<"u"?e:n}]))[0],t,this.littleEndian,this.bigTiff)}async parseFileDirectoryAt(t){const e=this.bigTiff?20:12,n=this.bigTiff?8:2;let s=await this.getSlice(t);const r=this.bigTiff?s.readUint64(t):s.readUint16(t),a=r*e+(this.bigTiff?16:6);s.covers(t,a)||(s=await this.getSlice(t,a));const o={};let h=t+(this.bigTiff?8:2);for(let u=0;u<r;h+=e,++u){const f=s.readUint16(h),p=s.readUint16(h+2),g=this.bigTiff?s.readUint64(h+4):s.readUint32(h+4);let _,d;const m=Bh(p),y=h+(this.bigTiff?12:8);if(m*g<=(this.bigTiff?8:4))_=ts(s,p,g,y);else{const x=s.readOffset(y),S=Bh(p)*g;if(s.covers(x,S))_=ts(s,p,g,x);else{const R=await this.getSlice(x,S);_=ts(R,p,g,x)}}g===1&&Ly.indexOf(f)===-1&&!(p===Wt.RATIONAL||p===Wt.SRATIONAL)?d=_[0]:d=_,o[Qs[f]]=d}const l=o1(o),c=s.readOffset(t+n+e*r);return new h1(o,l,c)}async requestIFD(t){if(this.ifdRequests[t])return this.ifdRequests[t];if(t===0)return this.ifdRequests[t]=this.parseFileDirectoryAt(this.firstIFDOffset),this.ifdRequests[t];if(!this.ifdRequests[t-1])try{this.ifdRequests[t-1]=this.requestIFD(t-1)}catch(e){throw e instanceof aa?new aa(t):e}return this.ifdRequests[t]=(async()=>{const e=await this.ifdRequests[t-1];if(e.nextIFDByteOffset===0)throw new aa(t);return this.parseFileDirectoryAt(e.nextIFDByteOffset)})(),this.ifdRequests[t]}async getImage(t=0){const e=await this.requestIFD(t);return new e1(e.fileDirectory,e.geoKeyDirectory,this.dataView,this.littleEndian,this.cache,this.source)}async getImageCount(){let t=0,e=!0;for(;e;)try{await this.requestIFD(t),++t}catch(n){if(n instanceof aa)e=!1;else throw n}return t}async getGhostValues(){const t=this.bigTiff?16:8;if(this.ghostValues)return this.ghostValues;const e="GDAL_STRUCTURAL_METADATA_SIZE=",n=e.length+100;let s=await this.getSlice(t,n);if(e===ts(s,Wt.ASCII,e.length,t)){const a=ts(s,Wt.ASCII,n,t).split(`
`)[0],o=Number(a.split("=")[1].split(" ")[0])+a.length;o>n&&(s=await this.getSlice(t,o));const h=ts(s,Wt.ASCII,o,t);this.ghostValues={},h.split(`
`).filter(l=>l.length>0).map(l=>l.split("=")).forEach(([l,c])=>{this.ghostValues[l]=c})}return this.ghostValues}static async fromSource(t,e,n){const s=(await t.fetch([{offset:0,length:1024}],n))[0],r=new i1(s),a=r.getUint16(0,0);let o;if(a===18761)o=!0;else if(a===19789)o=!1;else throw new TypeError("Invalid byte order value.");const h=r.getUint16(2,o);let l;if(h===42)l=!1;else if(h===43){if(l=!0,r.getUint16(4,o)!==8)throw new Error("Unsupported offset byte-size.")}else throw new TypeError("Invalid magic number.");const c=l?r.getUint64(8,o):r.getUint32(4,o);return new Tl(t,o,l,c,e)}close(){return typeof this.source.close=="function"?this.source.close():!1}}async function c1(i,t){return Tl.fromSource(a1(i),t)}const vu=2*Math.PI*6378.137/2;function xu(i,t){const e=t*vu/180,n=Math.log(Math.tan((90+i)*Math.PI/360))/(Math.PI/180);return{x:e,y:n*vu/180}}class u1{constructor(t,e,n){lt(this,"latitude");lt(this,"longitude");lt(this,"altitude");this.latitude=t,this.longitude=e,this.altitude=n}}class f1{constructor(t,e){lt(this,"world");lt(this,"gps");lt(this,"scale");lt(this,"center");this.world={x:0,y:0,z:0},this.gps=new u1(t.latitude,t.longitude,t.altitude),this.scale=100,this.center={latitude:e[0],longitude:e[1]}}ComputeWorldCoordinate(){const t=xu(this.gps.latitude,this.gps.longitude),e=xu(this.center.latitude,this.center.longitude);return this.world.x=(e.x-t.x)*this.scale,this.world.y=(e.y-t.y)*this.scale,this.world.z=this.gps.altitude,this}}async function d1(i){try{const t=await fetch(i).then(a=>a.blob()),e=await new Promise(a=>{const o=new Image;o.src=URL.createObjectURL(t),o.onload=()=>a(o)}),n=document.createElement("canvas"),s=n.getContext("2d");return n.width=e.width,n.height=e.height,s==null||s.drawImage(e,0,0),s==null?void 0:s.getImageData(0,0,e.width,e.height)}catch(t){throw console.log(t),new Error("une erreur est survenue getPng Pixel GReyModel")}}class Mu{constructor(t,e,n,s){lt(this,"token");lt(this,"data");lt(this,"dataPng");lt(this,"watcher");lt(this,"terrainMat");lt(this,"terrainRasterBbox");lt(this,"center");lt(this,"source");this.token=t,this.watcher=e,this.data=void 0,this.dataPng=void 0,this.terrainMat=new Ph({color:"white",side:2,wireframe:!0}),this.terrainRasterBbox=[],this.center=n,this.source=s,console.log(s)}async fetchTIF(t){const e=await fetch(t).then(a=>{if(!a.ok)throw new Error(a.statusText);return a.arrayBuffer()}),s=await(await c1(e)).getImage();this.terrainRasterBbox=s.getBoundingBox(),console.log(this.terrainRasterBbox);const r=await s.readRasters({interleave:!0});this.data=r,this.data&&this.build()}async fetchPNG(t){try{const e=await d1(t);this.dataPng=e==null?void 0:e.data,this.dataPng&&this.build()}catch(e){throw console.log(e),new Error("Fecth png grey model failed")}}async build(){let t=[];this.data!==void 0?t=await this._build():this.dataPng!==void 0&&(t=await this._buildPng()),this.watcher({what:"grey-dem",data:t})}async _build(t=1){if(!this.data)throw new Error("Data is undefined");const e=this.data,{width:n,height:s}=e,r=new on(1,1,n-1,s-1);new Array(r.attributes.position.count).fill(1).forEach((l,c)=>{r.attributes.position.setZ(c,e[c]/t)});const h=new Ie(r,this.terrainMat);return h.rotateX(-Math.PI),h.userData={isGrey:!0},h.receiveShadow=!0,[h]}async _buildPng(){var l,c;if(!this.dataPng)throw new Error("dataPng is undefined");const t=this.dataPng,e=512,n=512,s=new on(e,n,e-1,n-1),r=s.attributes.position,a=this.source&&this.source.bbox?this.source.bbox[3]-this.source.bbox[1]:0,o=this.source&&this.source.bbox?this.source.bbox[2]-this.source.bbox[0]:0;console.log(t);for(let u=0;u<e;u++)for(let f=0;f<n;f++){const p=(u+f*e)*4,g=t[p]/255*50,_=((l=this.source)==null?void 0:l.bbox[1])+u/e*a,d=((c=this.source)==null?void 0:c.bbox[0])+f/n*o,m=new f1({latitude:d,longitude:_,altitude:0},this.center).ComputeWorldCoordinate(),y=u+f*e;r.setXYZ(y,m.world.y,m.world.x,g)}const h=new Ie(s,this.terrainMat);return this.resolveTexture(u=>{u&&(h.material=new Ph({side:Si,map:u,wireframe:!1}))}),h.userData={isRgb:!0},h.receiveShadow=!0,[h]}async resolveTexture(t){const e=this.source.wmsrColorUrlBuilder(.02,"HR.ORTHOIMAGERY.ORTHOPHOTOS","EPSG:4326","normal"),n=await Js.fetchPngMap(e),s=new _f(n.data,n.shape[0],n.shape[1],ei);s.flipY=!0,s.needsUpdate=!0,t&&t(s)}}class Bi{constructor(t){lt(this,"unitsSide");lt(this,"isNode");lt(this,"apiVector");lt(this,"apiRgb");lt(this,"apiSatellite");lt(this,"tokenMapBox");lt(this,"tokenOpenTopo");lt(this,"source");this.unitsSide=t.unitsSide,this.isNode=!1,this.apiVector="mapbox-terrain-vector",this.apiRgb="mapbox-terrain-rgb",this.apiSatellite="mapbox-satellite",this.tokenMapBox=t.tokenMapBox,this.tokenOpenTopo=t.tokenOpenTopo,this.source=t.source}addSource(t){this.source=t}async getTerrainRgb(t,e,n){const s=await this.getTerrain(t,e,n);return s.forEach(r=>{r.rotateX(-Math.PI/2)}),Bi.createDemGroups("dem-rgb",s)}getTerrain(t,e,n){return new Promise(async(s,r)=>{try{const a=this.createWatcher(s),o=this.unitsSide,h=Bi.getUnitsPerMeters(this.unitsSide,e),l=(m,y,x)=>Bi.projectCoord(o,m,y,x),{tokenMapBox:c,apiSatellite:u,apiRgb:f}=this,p=Bi.getBbox(t,e),g=Bi.getZoomPositionCovered(p.feature,n),_=()=>{};new JM(h,l,c,u,f,a,_).fetch(g,p)}catch(a){console.log(a),r(a)}})}static createDemGroups(t,e){const n=new rs;if(!e||e.length===0)return console.warn("No objects provided to createDemGroups"),n;for(let s=0;s<e.length;s++)e[s]instanceof Ie?(e[s].name=t,n.add(e[s])):console.warn(`Object at index ${s} is not a THREE.Mesh`);return n}static getUnitsPerMeters(t,e){return t/(e*2**.5*1e3)}static projectCoord(t,e,n,s){return[t*(-.5+(e[0]-n[0])/(s[0]-n[0])),t*(-.5-(e[1]-s[1])/(s[1]-n[1]))]}static getBbox(t,e){const s={type:"FeatureCollection",features:[{type:"Feature",geometry:{properties:{},type:"Polygon",coordinates:[[]]}}]}.features[0],[r,a,o,h]=If.originRadiusToBbox(t,e),l=[r,h],c=[o,a];return s.geometry.coordinates[0]=[l,[c[0],l[1]],c,[l[0],c[1]],l],{feature:s,northWest:l,southEast:c}}static getZoomPositionCovered(t,e){const n={min_zoom:e,max_zoom:e};return Ga.tiles(t.geometry,n).map(([s,r,a])=>[a,s,r])}createWatcher(t){let e=!0,n=!0;const s={value:[]},r=()=>!e||!n;return r()&&t(s.value),a=>{const{what:o,data:h}=a;o==="rgb-dem"&&(e=!1,s.value=h),o==="grey-dem"&&(n=!1,s.value=h),r()&&(console.log("watcher says all shit is done"),t(s.value))}}calculateBoundingBox(t,e){const n=e/111,s=e/(111*Math.cos(t.lat*(Math.PI/180))),r=t.lat+n,a=t.lat-n,o=t.lon+s,h=t.lon-s;return{north:r,south:a,est:o,west:h}}async getTerrainGrey(t,e){return new Promise(async(n,s)=>{try{const r=this.createWatcher(n);if(this.source&&this.source.format==="image/jpeg")await new Mu(this.tokenOpenTopo,r,t,this.source).fetchPNG(this.source.url);else{const a=this.calculateBoundingBox({lat:t[0],lon:t[1]},e);console.log(a);const o=Js.greyModelUrlBuilder(a,this.tokenOpenTopo);await new Mu(this.tokenOpenTopo,r,t,this.source).fetchTIF(o)}}catch(r){s(r)}})}}class p1{constructor(t,e,n,s,r,a){lt(this,"data");lt(this,"buildingsArray");lt(this,"center");lt(this,"radius");lt(this,"view");lt(this,"source");lt(this,"bbox");lt(this,"terrain");lt(this,"raycaster");lt(this,"extent");this.data={},this.buildingsArray=[],this.center=t,this.radius=e,this.view=n,this.source=s,this.bbox=Bi.getBbox(t,e),this.terrain=r,this.raycaster=new Lh,this.extent=a}async getBuildings(t){if(!t)throw new Error("No url given!! getBuilding Function");return(await fetch(t).then(n=>{if(!n.ok)throw new Error(`Something happened maybe the url Given is not correct: ${n.status}`);return n.json()})).features}shortest(t,e){const n=e.geometry.getAttribute("position").array;let s=0,r=1e5;for(let a=0;a<n.length;a+=3){let o=Math.sqrt((t.x-n[a])**2+(t.z-n[a+1])**2);o<=r&&(r=o,s=n[a+2])}return s}async Building(){const t=new Ph({color:"green",side:2,wireframe:!1}),e=this.source.url,n=await this.getBuildings(e),s=[],r=[];for(let o=0;o<n.length;o++){const h=n[o],l=h.properties.hauteur?h.properties.hauteur:.01,c=h.properties.altitude_minimale_sol,u=await this.addBuilding(h.geometry.coordinates,l,c);s.push(u)}for(let o=0;o<s.length;o++){const h=new Ie(s[o],t);h.castShadow=!0,h.receiveShadow=!0,h.userData=n[o].properties,r.push(h)}return Bi.createDemGroups("Buildings",r)}async addBuilding(t,e,n){const s=[];let r;for(let o=0;o<t.length;o++){const h=t[o];o===0?r=this.genShape(h):s.push(this.genShape(h))}if(r)for(let o=0;o<s.length;o++)r==null||r.holes.push(s[o]);else throw new Error("Shape was not init");return await this.genGeometry(r,{curveSegment:1,depth:-e,bevelEnabled:!1,altitude:n})}genShape(t){const e=new Ef;for(let n=0;n<t.length;n++)t[n].forEach((r,a)=>{const o=this.extent.getProjectCoords(r[1],r[0]);a===0?e.moveTo(o[0],o[1]):e.lineTo(o[0],o[1])});return e}async genGeometry(t,e){return new Promise(async n=>{await new Promise(r=>setTimeout(r,0));const s=new hl(t,e);s.rotateX(Math.PI/2),s.rotateY(-Math.PI),s.translate(0,e.altitude+.5,0),n(s)})}}class ad{constructor(t,e,n){lt(this,"center");lt(this,"radius");lt(this,"url");lt(this,"format");lt(this,"isWmtsSource");lt(this,"isWmsSource");lt(this,"bbox");this.radius=e,this.center=t,this.bbox=[0,0,0,0],this.format=n,this.isWmsSource=!1,this.isWmtsSource=!1}generateBboxFromCenter(t,e,n,s){if(t==="EPSG:4326"){const r=e-s,a=e+s,o=n-s,h=n+s;return this.bbox=[r,o,a,h],[r,o,a,h]}else if(t==="EPSG:3857"){const a=p=>p*Math.PI/180,o=n*6378137*Math.PI/180,h=Math.log(Math.tan(Math.PI/4+a(e)/2))*6378137,l=o-s,c=o+s,u=h-s,f=h+s;return this.bbox=[l,u,c,f],[l,u,c,f]}else throw new Error(`CRS non supporté : ${t}`)}}class m1 extends ad{constructor(e,n,s){super(e,n,"");lt(this,"center");lt(this,"radius");lt(this,"layerName");this.center=e,this.radius=.005,super.generateBboxFromCenter("EPSG:4326",...e,this.radius),this.layerName=s.layer,this.url=this.wfsUrlBuilder()}wfsUrlBuilder(){return`https://data.geopf.fr/wfs/ows?SERVICE=WFS&REQUEST=GetFeature&typeName=${this.layerName}&VERSION=2.0.0&SRSNAME=EPSG:4326&outputFormat=application/json&BBOX=${this.bbox[1]},${this.bbox[0]},${this.bbox[3]},${this.bbox[2]},EPSG:4326`}}class g1 extends ad{constructor(e,n){super(e.origin,e.radius,n.format);lt(this,"urlZoomPos");lt(this,"neighborsUrls");lt(this,"heightNeighborsCoordinates");lt(this,"layer");lt(this,"style");lt(this,"tileMatrixSet");lt(this,"extent");lt(this,"neighbors");lt(this,"zoom");this.urlZoomPos={url:"",zoomPos:{zoom:0,tileCol:0,tileRow:0}},this.neighborsUrls=[],this.heightNeighborsCoordinates=[],this.layer=n.layer?n.layer:"HR.ORTHOIMAGERY.ORTHOPHOTOS",this.style=n.style?n.style:"normal",this.tileMatrixSet=n.tileMatrixSet?n.tileMatrixSet:"PM",this.isWmtsSource=!0,this.extent=e,this.neighbors=n.neighbors,this.zoom=n.zoom,this.wmtsUrlBuilder()}wmtsUrlBuilder(){const e=this.extent.asTile(this.neighbors,this.tileMatrixSet,this.zoom);console.log(e),e.forEach(n=>{const s=`https://data.geopf.fr/wmts?LAYER=${this.layer}&FORMAT=${this.format}&SERVICE=WMTS&VERSION=1.0.0&REQUEST=GetTile&STYLE=${this.style}&TILEMATRIXSET=${this.tileMatrixSet}&TILEMATRIX=${n.zoom}&TILEROW=${n.tileRow}&TILECOL=${n.tileCol}`;this.neighborsUrls.push({url:s,zoomPos:{zoom:n.zoom,tileRow:n.tileRow,tileCol:n.tileCol}})}),console.log(this.neighborsUrls)}}function _1(i){i("EPSG:4326","+title=WGS 84 (long/lat) +proj=longlat +ellps=WGS84 +datum=WGS84 +units=degrees"),i("EPSG:4269","+title=NAD83 (long/lat) +proj=longlat +a=6378137.0 +b=6356752.31414036 +ellps=GRS80 +datum=NAD83 +units=degrees"),i("EPSG:3857","+title=WGS 84 / Pseudo-Mercator +proj=merc +a=6378137 +b=6378137 +lat_ts=0.0 +lon_0=0.0 +x_0=0.0 +y_0=0 +k=1.0 +units=m +nadgrids=@null +no_defs");for(var t=1;t<=60;++t)i("EPSG:"+(32600+t),"+proj=utm +zone="+t+" +datum=WGS84 +units=m"),i("EPSG:"+(32700+t),"+proj=utm +zone="+t+" +south +datum=WGS84 +units=m");i.WGS84=i["EPSG:4326"],i["EPSG:3785"]=i["EPSG:3857"],i.GOOGLE=i["EPSG:3857"],i["EPSG:900913"]=i["EPSG:3857"],i["EPSG:102113"]=i["EPSG:3857"]}var Dn=1,Nn=2,gs=3,v1=4,zh=5,yu=6378137,x1=6356752314e-3,Su=.0066943799901413165,tr=484813681109536e-20,et=Math.PI/2,M1=.16666666666666666,y1=.04722222222222222,S1=.022156084656084655,xt=1e-10,we=.017453292519943295,Ei=57.29577951308232,ee=Math.PI/4,dr=Math.PI*2,ge=3.14159265359,Ye={};Ye.greenwich=0;Ye.lisbon=-9.131906111111;Ye.paris=2.337229166667;Ye.bogota=-74.080916666667;Ye.madrid=-3.687938888889;Ye.rome=12.452333333333;Ye.bern=7.439583333333;Ye.jakarta=106.807719444444;Ye.ferro=-17.666666666667;Ye.brussels=4.367975;Ye.stockholm=18.058277777778;Ye.athens=23.7163375;Ye.oslo=10.722916666667;const E1={mm:{to_meter:.001},cm:{to_meter:.01},ft:{to_meter:.3048},"us-ft":{to_meter:1200/3937},fath:{to_meter:1.8288},kmi:{to_meter:1852},"us-ch":{to_meter:20.1168402336805},"us-mi":{to_meter:1609.34721869444},km:{to_meter:1e3},"ind-ft":{to_meter:.30479841},"ind-yd":{to_meter:.91439523},mi:{to_meter:1609.344},yd:{to_meter:.9144},ch:{to_meter:20.1168},link:{to_meter:.201168},dm:{to_meter:.01},in:{to_meter:.0254},"ind-ch":{to_meter:20.11669506},"us-in":{to_meter:.025400050800101},"us-yd":{to_meter:.914401828803658}};var Eu=/[\s_\-\/\(\)]/g;function hn(i,t){if(i[t])return i[t];for(var e=Object.keys(i),n=t.toLowerCase().replace(Eu,""),s=-1,r,a;++s<e.length;)if(r=e[s],a=r.toLowerCase().replace(Eu,""),a===n)return i[r]}function Gh(i){var t={},e=i.split("+").map(function(o){return o.trim()}).filter(function(o){return o}).reduce(function(o,h){var l=h.split("=");return l.push(!0),o[l[0].toLowerCase()]=l[1],o},{}),n,s,r,a={proj:"projName",datum:"datumCode",rf:function(o){t.rf=parseFloat(o)},lat_0:function(o){t.lat0=o*we},lat_1:function(o){t.lat1=o*we},lat_2:function(o){t.lat2=o*we},lat_ts:function(o){t.lat_ts=o*we},lon_0:function(o){t.long0=o*we},lon_1:function(o){t.long1=o*we},lon_2:function(o){t.long2=o*we},alpha:function(o){t.alpha=parseFloat(o)*we},gamma:function(o){t.rectified_grid_angle=parseFloat(o)},lonc:function(o){t.longc=o*we},x_0:function(o){t.x0=parseFloat(o)},y_0:function(o){t.y0=parseFloat(o)},k_0:function(o){t.k0=parseFloat(o)},k:function(o){t.k0=parseFloat(o)},a:function(o){t.a=parseFloat(o)},b:function(o){t.b=parseFloat(o)},r:function(o){t.a=t.b=parseFloat(o)},r_a:function(){t.R_A=!0},zone:function(o){t.zone=parseInt(o,10)},south:function(){t.utmSouth=!0},towgs84:function(o){t.datum_params=o.split(",").map(function(h){return parseFloat(h)})},to_meter:function(o){t.to_meter=parseFloat(o)},units:function(o){t.units=o;var h=hn(E1,o);h&&(t.to_meter=h.to_meter)},from_greenwich:function(o){t.from_greenwich=o*we},pm:function(o){var h=hn(Ye,o);t.from_greenwich=(h||parseFloat(o))*we},nadgrids:function(o){o==="@null"?t.datumCode="none":t.nadgrids=o},axis:function(o){var h="ewnsud";o.length===3&&h.indexOf(o.substr(0,1))!==-1&&h.indexOf(o.substr(1,1))!==-1&&h.indexOf(o.substr(2,1))!==-1&&(t.axis=o)},approx:function(){t.approx=!0}};for(n in e)s=e[n],n in a?(r=a[n],typeof r=="function"?r(s):t[r]=s):t[n]=s;return typeof t.datumCode=="string"&&t.datumCode!=="WGS84"&&(t.datumCode=t.datumCode.toLowerCase()),t}var pr=1,od=2,hd=3,Ta=4,ld=5,Cl=-1,b1=/\s/,A1=/[A-Za-z]/,w1=/[A-Za-z84_]/,Ha=/[,\]]/,cd=/[\d\.E\-\+]/;function Hi(i){if(typeof i!="string")throw new Error("not a string");this.text=i.trim(),this.level=0,this.place=0,this.root=null,this.stack=[],this.currentObject=null,this.state=pr}Hi.prototype.readCharicter=function(){var i=this.text[this.place++];if(this.state!==Ta)for(;b1.test(i);){if(this.place>=this.text.length)return;i=this.text[this.place++]}switch(this.state){case pr:return this.neutral(i);case od:return this.keyword(i);case Ta:return this.quoted(i);case ld:return this.afterquote(i);case hd:return this.number(i);case Cl:return}};Hi.prototype.afterquote=function(i){if(i==='"'){this.word+='"',this.state=Ta;return}if(Ha.test(i)){this.word=this.word.trim(),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in afterquote yet, index '+this.place)};Hi.prototype.afterItem=function(i){if(i===","){this.word!==null&&this.currentObject.push(this.word),this.word=null,this.state=pr;return}if(i==="]"){this.level--,this.word!==null&&(this.currentObject.push(this.word),this.word=null),this.state=pr,this.currentObject=this.stack.pop(),this.currentObject||(this.state=Cl);return}};Hi.prototype.number=function(i){if(cd.test(i)){this.word+=i;return}if(Ha.test(i)){this.word=parseFloat(this.word),this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in number yet, index '+this.place)};Hi.prototype.quoted=function(i){if(i==='"'){this.state=ld;return}this.word+=i};Hi.prototype.keyword=function(i){if(w1.test(i)){this.word+=i;return}if(i==="["){var t=[];t.push(this.word),this.level++,this.root===null?this.root=t:this.currentObject.push(t),this.stack.push(this.currentObject),this.currentObject=t,this.state=pr;return}if(Ha.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in keyword yet, index '+this.place)};Hi.prototype.neutral=function(i){if(A1.test(i)){this.word=i,this.state=od;return}if(i==='"'){this.word="",this.state=Ta;return}if(cd.test(i)){this.word=i,this.state=hd;return}if(Ha.test(i)){this.afterItem(i);return}throw new Error(`havn't handled "`+i+'" in neutral yet, index '+this.place)};Hi.prototype.output=function(){for(;this.place<this.text.length;)this.readCharicter();if(this.state===Cl)return this.root;throw new Error('unable to parse string "'+this.text+'". State is '+this.state)};function T1(i){var t=new Hi(i);return t.output()}function No(i,t,e){Array.isArray(t)&&(e.unshift(t),t=null);var n=t?{}:i,s=e.reduce(function(r,a){return os(a,r),r},n);t&&(i[t]=s)}function os(i,t){if(!Array.isArray(i)){t[i]=!0;return}var e=i.shift();if(e==="PARAMETER"&&(e=i.shift()),i.length===1){if(Array.isArray(i[0])){t[e]={},os(i[0],t[e]);return}t[e]=i[0];return}if(!i.length){t[e]=!0;return}if(e==="TOWGS84"){t[e]=i;return}if(e==="AXIS"){e in t||(t[e]=[]),t[e].push(i);return}Array.isArray(e)||(t[e]={});var n;switch(e){case"UNIT":case"PRIMEM":case"VERT_DATUM":t[e]={name:i[0].toLowerCase(),convert:i[1]},i.length===3&&os(i[2],t[e]);return;case"SPHEROID":case"ELLIPSOID":t[e]={name:i[0],a:i[1],rf:i[2]},i.length===4&&os(i[3],t[e]);return;case"EDATUM":case"ENGINEERINGDATUM":case"LOCAL_DATUM":case"DATUM":case"VERT_CS":case"VERTCRS":case"VERTICALCRS":i[0]=["name",i[0]],No(t,e,i);return;case"COMPD_CS":case"COMPOUNDCRS":case"FITTED_CS":case"PROJECTEDCRS":case"PROJCRS":case"GEOGCS":case"GEOCCS":case"PROJCS":case"LOCAL_CS":case"GEODCRS":case"GEODETICCRS":case"GEODETICDATUM":case"ENGCRS":case"ENGINEERINGCRS":i[0]=["name",i[0]],No(t,e,i),t[e].type=e;return;default:for(n=-1;++n<i.length;)if(!Array.isArray(i[n]))return os(i,t[e]);return No(t,e,i)}}var C1=.017453292519943295,R1=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function P1(i,t){var e=t[0],n=t[1];!(e in i)&&n in i&&(i[e]=i[n],t.length===3&&(i[e]=t[2](i[e])))}function xi(i){return i*C1}function ud(i){for(var t=Object.keys(i),e=0,n=t.length;e<n;++e){var s=t[e];R1.indexOf(s)!==-1&&L1(i[s]),typeof i[s]=="object"&&ud(i[s])}}function L1(i){if(i.AUTHORITY){var t=Object.keys(i.AUTHORITY)[0];t&&t in i.AUTHORITY&&(i.title=t+":"+i.AUTHORITY[t])}if(i.type==="GEOGCS"?i.projName="longlat":i.type==="LOCAL_CS"?(i.projName="identity",i.local=!0):typeof i.PROJECTION=="object"?i.projName=Object.keys(i.PROJECTION)[0]:i.projName=i.PROJECTION,i.AXIS){for(var e="",n=0,s=i.AXIS.length;n<s;++n){var r=[i.AXIS[n][0].toLowerCase(),i.AXIS[n][1].toLowerCase()];r[0].indexOf("north")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="north"?e+="n":r[0].indexOf("south")!==-1||(r[0]==="y"||r[0]==="lat")&&r[1]==="south"?e+="s":r[0].indexOf("east")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="east"?e+="e":(r[0].indexOf("west")!==-1||(r[0]==="x"||r[0]==="lon")&&r[1]==="west")&&(e+="w")}e.length===2&&(e+="u"),e.length===3&&(i.axis=e)}i.UNIT&&(i.units=i.UNIT.name.toLowerCase(),i.units==="metre"&&(i.units="meter"),i.UNIT.convert&&(i.type==="GEOGCS"?i.DATUM&&i.DATUM.SPHEROID&&(i.to_meter=i.UNIT.convert*i.DATUM.SPHEROID.a):i.to_meter=i.UNIT.convert));var a=i.GEOGCS;i.type==="GEOGCS"&&(a=i),a&&(a.DATUM?i.datumCode=a.DATUM.name.toLowerCase():i.datumCode=a.name.toLowerCase(),i.datumCode.slice(0,2)==="d_"&&(i.datumCode=i.datumCode.slice(2)),i.datumCode==="new_zealand_1949"&&(i.datumCode="nzgd49"),(i.datumCode==="wgs_1984"||i.datumCode==="world_geodetic_system_1984")&&(i.PROJECTION==="Mercator_Auxiliary_Sphere"&&(i.sphere=!0),i.datumCode="wgs84"),i.datumCode==="belge_1972"&&(i.datumCode="rnb72"),a.DATUM&&a.DATUM.SPHEROID&&(i.ellps=a.DATUM.SPHEROID.name.replace("_19","").replace(/[Cc]larke\_18/,"clrk"),i.ellps.toLowerCase().slice(0,13)==="international"&&(i.ellps="intl"),i.a=a.DATUM.SPHEROID.a,i.rf=parseFloat(a.DATUM.SPHEROID.rf,10)),a.DATUM&&a.DATUM.TOWGS84&&(i.datum_params=a.DATUM.TOWGS84),~i.datumCode.indexOf("osgb_1936")&&(i.datumCode="osgb36"),~i.datumCode.indexOf("osni_1952")&&(i.datumCode="osni52"),(~i.datumCode.indexOf("tm65")||~i.datumCode.indexOf("geodetic_datum_of_1965"))&&(i.datumCode="ire65"),i.datumCode==="ch1903+"&&(i.datumCode="ch1903"),~i.datumCode.indexOf("israel")&&(i.datumCode="isr93")),i.b&&!isFinite(i.b)&&(i.b=i.a);function o(c){var u=i.to_meter||1;return c*u}var h=function(c){return P1(i,c)},l=[["standard_parallel_1","Standard_Parallel_1"],["standard_parallel_1","Latitude of 1st standard parallel"],["standard_parallel_2","Standard_Parallel_2"],["standard_parallel_2","Latitude of 2nd standard parallel"],["false_easting","False_Easting"],["false_easting","False easting"],["false-easting","Easting at false origin"],["false_northing","False_Northing"],["false_northing","False northing"],["false_northing","Northing at false origin"],["central_meridian","Central_Meridian"],["central_meridian","Longitude of natural origin"],["central_meridian","Longitude of false origin"],["latitude_of_origin","Latitude_Of_Origin"],["latitude_of_origin","Central_Parallel"],["latitude_of_origin","Latitude of natural origin"],["latitude_of_origin","Latitude of false origin"],["scale_factor","Scale_Factor"],["k0","scale_factor"],["latitude_of_center","Latitude_Of_Center"],["latitude_of_center","Latitude_of_center"],["lat0","latitude_of_center",xi],["longitude_of_center","Longitude_Of_Center"],["longitude_of_center","Longitude_of_center"],["longc","longitude_of_center",xi],["x0","false_easting",o],["y0","false_northing",o],["long0","central_meridian",xi],["lat0","latitude_of_origin",xi],["lat0","standard_parallel_1",xi],["lat1","standard_parallel_1",xi],["lat2","standard_parallel_2",xi],["azimuth","Azimuth"],["alpha","azimuth",xi],["srsCode","name"]];l.forEach(h),!i.long0&&i.longc&&(i.projName==="Albers_Conic_Equal_Area"||i.projName==="Lambert_Azimuthal_Equal_Area")&&(i.long0=i.longc),!i.lat_ts&&i.lat1&&(i.projName==="Stereographic_South_Pole"||i.projName==="Polar Stereographic (variant B)")?(i.lat0=xi(i.lat1>0?90:-90),i.lat_ts=i.lat1):!i.lat_ts&&i.lat0&&i.projName==="Polar_Stereographic"&&(i.lat_ts=i.lat0,i.lat0=xi(i.lat0>0?90:-90))}function fd(i){var t=T1(i),e=t[0],n={};return os(t,n),ud(n),n[e]}function Ue(i){var t=this;if(arguments.length===2){var e=arguments[1];typeof e=="string"?e.charAt(0)==="+"?Ue[i]=Gh(arguments[1]):Ue[i]=fd(arguments[1]):Ue[i]=e}else if(arguments.length===1){if(Array.isArray(i))return i.map(function(n){Array.isArray(n)?Ue.apply(t,n):Ue(n)});if(typeof i=="string"){if(i in Ue)return Ue[i]}else"EPSG"in i?Ue["EPSG:"+i.EPSG]=i:"ESRI"in i?Ue["ESRI:"+i.ESRI]=i:"IAU2000"in i?Ue["IAU2000:"+i.IAU2000]=i:console.log(i);return}}_1(Ue);function I1(i){return typeof i=="string"}function D1(i){return i in Ue}var N1=["PROJECTEDCRS","PROJCRS","GEOGCS","GEOCCS","PROJCS","LOCAL_CS","GEODCRS","GEODETICCRS","GEODETICDATUM","ENGCRS","ENGINEERINGCRS"];function U1(i){return N1.some(function(t){return i.indexOf(t)>-1})}var O1=["3857","900913","3785","102113"];function F1(i){var t=hn(i,"authority");if(t){var e=hn(t,"epsg");return e&&O1.indexOf(e)>-1}}function B1(i){var t=hn(i,"extension");if(t)return hn(t,"proj4")}function z1(i){return i[0]==="+"}function G1(i){if(I1(i)){if(D1(i))return Ue[i];if(U1(i)){var t=fd(i);if(F1(t))return Ue["EPSG:3857"];var e=B1(t);return e?Gh(e):t}if(z1(i))return Gh(i)}else return i}function bu(i,t){i=i||{};var e,n;if(!t)return i;for(n in t)e=t[n],e!==void 0&&(i[n]=e);return i}function Ti(i,t,e){var n=i*t;return e/Math.sqrt(1-n*n)}function yr(i){return i<0?-1:1}function Mt(i){return Math.abs(i)<=ge?i:i-yr(i)*dr}function mi(i,t,e){var n=i*e,s=.5*i;return n=Math.pow((1-n)/(1+n),s),Math.tan(.5*(et-t))/n}function mr(i,t){for(var e=.5*i,n,s,r=et-2*Math.atan(t),a=0;a<=15;a++)if(n=i*Math.sin(r),s=et-2*Math.atan(t*Math.pow((1-n)/(1+n),e))-r,r+=s,Math.abs(s)<=1e-10)return r;return-9999}function k1(){var i=this.b/this.a;this.es=1-i*i,"x0"in this||(this.x0=0),"y0"in this||(this.y0=0),this.e=Math.sqrt(this.es),this.lat_ts?this.sphere?this.k0=Math.cos(this.lat_ts):this.k0=Ti(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)):this.k0||(this.k?this.k0=this.k:this.k0=1)}function H1(i){var t=i.x,e=i.y;if(e*Ei>90&&e*Ei<-90&&t*Ei>180&&t*Ei<-180)return null;var n,s;if(Math.abs(Math.abs(e)-et)<=xt)return null;if(this.sphere)n=this.x0+this.a*this.k0*Mt(t-this.long0),s=this.y0+this.a*this.k0*Math.log(Math.tan(ee+.5*e));else{var r=Math.sin(e),a=mi(this.e,e,r);n=this.x0+this.a*this.k0*Mt(t-this.long0),s=this.y0-this.a*this.k0*Math.log(a)}return i.x=n,i.y=s,i}function V1(i){var t=i.x-this.x0,e=i.y-this.y0,n,s;if(this.sphere)s=et-2*Math.atan(Math.exp(-e/(this.a*this.k0)));else{var r=Math.exp(-e/(this.a*this.k0));if(s=mr(this.e,r),s===-9999)return null}return n=Mt(this.long0+t/(this.a*this.k0)),i.x=n,i.y=s,i}var W1=["Mercator","Popular Visualisation Pseudo Mercator","Mercator_1SP","Mercator_Auxiliary_Sphere","merc"];const X1={init:k1,forward:H1,inverse:V1,names:W1};function $1(){}function Au(i){return i}var q1=["longlat","identity"];const Y1={init:$1,forward:Au,inverse:Au,names:q1};var j1=[X1,Y1],ga={},Ca=[];function dd(i,t){var e=Ca.length;return i.names?(Ca[e]=i,i.names.forEach(function(n){ga[n.toLowerCase()]=e}),this):(console.log(t),!0)}function K1(i){if(!i)return!1;var t=i.toLowerCase();if(typeof ga[t]<"u"&&Ca[ga[t]])return Ca[ga[t]]}function Z1(){j1.forEach(dd)}const J1={start:Z1,add:dd,get:K1};var Ht={};Ht.MERIT={a:6378137,rf:298.257,ellipseName:"MERIT 1983"};Ht.SGS85={a:6378136,rf:298.257,ellipseName:"Soviet Geodetic System 85"};Ht.GRS80={a:6378137,rf:298.257222101,ellipseName:"GRS 1980(IUGG, 1980)"};Ht.IAU76={a:6378140,rf:298.257,ellipseName:"IAU 1976"};Ht.airy={a:6377563396e-3,b:635625691e-2,ellipseName:"Airy 1830"};Ht.APL4={a:6378137,rf:298.25,ellipseName:"Appl. Physics. 1965"};Ht.NWL9D={a:6378145,rf:298.25,ellipseName:"Naval Weapons Lab., 1965"};Ht.mod_airy={a:6377340189e-3,b:6356034446e-3,ellipseName:"Modified Airy"};Ht.andrae={a:637710443e-2,rf:300,ellipseName:"Andrae 1876 (Den., Iclnd.)"};Ht.aust_SA={a:6378160,rf:298.25,ellipseName:"Australian Natl & S. Amer. 1969"};Ht.GRS67={a:6378160,rf:298.247167427,ellipseName:"GRS 67(IUGG 1967)"};Ht.bessel={a:6377397155e-3,rf:299.1528128,ellipseName:"Bessel 1841"};Ht.bess_nam={a:6377483865e-3,rf:299.1528128,ellipseName:"Bessel 1841 (Namibia)"};Ht.clrk66={a:63782064e-1,b:63565838e-1,ellipseName:"Clarke 1866"};Ht.clrk80={a:6378249145e-3,rf:293.4663,ellipseName:"Clarke 1880 mod."};Ht.clrk80ign={a:63782492e-1,b:6356515,rf:293.4660213,ellipseName:"Clarke 1880 (IGN)"};Ht.clrk58={a:6378293645208759e-9,rf:294.2606763692654,ellipseName:"Clarke 1858"};Ht.CPM={a:63757387e-1,rf:334.29,ellipseName:"Comm. des Poids et Mesures 1799"};Ht.delmbr={a:6376428,rf:311.5,ellipseName:"Delambre 1810 (Belgium)"};Ht.engelis={a:637813605e-2,rf:298.2566,ellipseName:"Engelis 1985"};Ht.evrst30={a:6377276345e-3,rf:300.8017,ellipseName:"Everest 1830"};Ht.evrst48={a:6377304063e-3,rf:300.8017,ellipseName:"Everest 1948"};Ht.evrst56={a:6377301243e-3,rf:300.8017,ellipseName:"Everest 1956"};Ht.evrst69={a:6377295664e-3,rf:300.8017,ellipseName:"Everest 1969"};Ht.evrstSS={a:6377298556e-3,rf:300.8017,ellipseName:"Everest (Sabah & Sarawak)"};Ht.fschr60={a:6378166,rf:298.3,ellipseName:"Fischer (Mercury Datum) 1960"};Ht.fschr60m={a:6378155,rf:298.3,ellipseName:"Fischer 1960"};Ht.fschr68={a:6378150,rf:298.3,ellipseName:"Fischer 1968"};Ht.helmert={a:6378200,rf:298.3,ellipseName:"Helmert 1906"};Ht.hough={a:6378270,rf:297,ellipseName:"Hough"};Ht.intl={a:6378388,rf:297,ellipseName:"International 1909 (Hayford)"};Ht.kaula={a:6378163,rf:298.24,ellipseName:"Kaula 1961"};Ht.lerch={a:6378139,rf:298.257,ellipseName:"Lerch 1979"};Ht.mprts={a:6397300,rf:191,ellipseName:"Maupertius 1738"};Ht.new_intl={a:63781575e-1,b:63567722e-1,ellipseName:"New International 1967"};Ht.plessis={a:6376523,rf:6355863,ellipseName:"Plessis 1817 (France)"};Ht.krass={a:6378245,rf:298.3,ellipseName:"Krassovsky, 1942"};Ht.SEasia={a:6378155,b:63567733205e-4,ellipseName:"Southeast Asia"};Ht.walbeck={a:6376896,b:63558348467e-4,ellipseName:"Walbeck"};Ht.WGS60={a:6378165,rf:298.3,ellipseName:"WGS 60"};Ht.WGS66={a:6378145,rf:298.25,ellipseName:"WGS 66"};Ht.WGS7={a:6378135,rf:298.26,ellipseName:"WGS 72"};var Q1=Ht.WGS84={a:6378137,rf:298.257223563,ellipseName:"WGS 84"};Ht.sphere={a:6370997,b:6370997,ellipseName:"Normal Sphere (r=6370997)"};function tS(i,t,e,n){var s=i*i,r=t*t,a=(s-r)/s,o=0;n?(i*=1-a*(M1+a*(y1+a*S1)),s=i*i,a=0):o=Math.sqrt(a);var h=(s-r)/r;return{es:a,e:o,ep2:h}}function eS(i,t,e,n,s){if(!i){var r=hn(Ht,n);r||(r=Q1),i=r.a,t=r.b,e=r.rf}return e&&!t&&(t=(1-1/e)*i),(e===0||Math.abs(i-t)<xt)&&(s=!0,t=i),{a:i,b:t,rf:e,sphere:s}}var _a={wgs84:{towgs84:"0,0,0",ellipse:"WGS84",datumName:"WGS84"},ch1903:{towgs84:"674.374,15.056,405.346",ellipse:"bessel",datumName:"swiss"},ggrs87:{towgs84:"-199.87,74.79,246.62",ellipse:"GRS80",datumName:"Greek_Geodetic_Reference_System_1987"},nad83:{towgs84:"0,0,0",ellipse:"GRS80",datumName:"North_American_Datum_1983"},nad27:{nadgrids:"@conus,@alaska,@ntv2_0.gsb,@ntv1_can.dat",ellipse:"clrk66",datumName:"North_American_Datum_1927"},potsdam:{towgs84:"598.1,73.7,418.2,0.202,0.045,-2.455,6.7",ellipse:"bessel",datumName:"Potsdam Rauenberg 1950 DHDN"},carthage:{towgs84:"-263.0,6.0,431.0",ellipse:"clark80",datumName:"Carthage 1934 Tunisia"},hermannskogel:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Hermannskogel"},mgi:{towgs84:"577.326,90.129,463.919,5.137,1.474,5.297,2.4232",ellipse:"bessel",datumName:"Militar-Geographische Institut"},osni52:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"airy",datumName:"Irish National"},ire65:{towgs84:"482.530,-130.596,564.557,-1.042,-0.214,-0.631,8.15",ellipse:"mod_airy",datumName:"Ireland 1965"},rassadiran:{towgs84:"-133.63,-157.5,-158.62",ellipse:"intl",datumName:"Rassadiran"},nzgd49:{towgs84:"59.47,-5.04,187.44,0.47,-0.1,1.024,-4.5993",ellipse:"intl",datumName:"New Zealand Geodetic Datum 1949"},osgb36:{towgs84:"446.448,-125.157,542.060,0.1502,0.2470,0.8421,-20.4894",ellipse:"airy",datumName:"Ordnance Survey of Great Britain 1936"},s_jtsk:{towgs84:"589,76,480",ellipse:"bessel",datumName:"S-JTSK (Ferro)"},beduaram:{towgs84:"-106,-87,188",ellipse:"clrk80",datumName:"Beduaram"},gunung_segara:{towgs84:"-403,684,41",ellipse:"bessel",datumName:"Gunung Segara Jakarta"},rnb72:{towgs84:"106.869,-52.2978,103.724,-0.33657,0.456955,-1.84218,1",ellipse:"intl",datumName:"Reseau National Belge 1972"}};for(var iS in _a){var wu=_a[iS];_a[wu.datumName]=wu}function nS(i,t,e,n,s,r,a){var o={};return i===void 0||i==="none"?o.datum_type=zh:o.datum_type=v1,t&&(o.datum_params=t.map(parseFloat),(o.datum_params[0]!==0||o.datum_params[1]!==0||o.datum_params[2]!==0)&&(o.datum_type=Dn),o.datum_params.length>3&&(o.datum_params[3]!==0||o.datum_params[4]!==0||o.datum_params[5]!==0||o.datum_params[6]!==0)&&(o.datum_type=Nn,o.datum_params[3]*=tr,o.datum_params[4]*=tr,o.datum_params[5]*=tr,o.datum_params[6]=o.datum_params[6]/1e6+1)),a&&(o.datum_type=gs,o.grids=a),o.a=e,o.b=n,o.es=s,o.ep2=r,o}var pd={};function sS(i,t){var e=new DataView(t),n=oS(e),s=hS(e,n),r=lS(e,s,n),a={header:s,subgrids:r};return pd[i]=a,a}function rS(i){if(i===void 0)return null;var t=i.split(",");return t.map(aS)}function aS(i){if(i.length===0)return null;var t=i[0]==="@";return t&&(i=i.slice(1)),i==="null"?{name:"null",mandatory:!t,grid:null,isNull:!0}:{name:i,mandatory:!t,grid:pd[i]||null,isNull:!1}}function hs(i){return i/3600*Math.PI/180}function oS(i){var t=i.getInt32(8,!1);return t===11?!1:(t=i.getInt32(8,!0),t!==11&&console.warn("Failed to detect nadgrid endian-ness, defaulting to little-endian"),!0)}function hS(i,t){return{nFields:i.getInt32(8,t),nSubgridFields:i.getInt32(24,t),nSubgrids:i.getInt32(40,t),shiftType:kh(i,56,64).trim(),fromSemiMajorAxis:i.getFloat64(120,t),fromSemiMinorAxis:i.getFloat64(136,t),toSemiMajorAxis:i.getFloat64(152,t),toSemiMinorAxis:i.getFloat64(168,t)}}function kh(i,t,e){return String.fromCharCode.apply(null,new Uint8Array(i.buffer.slice(t,e)))}function lS(i,t,e){for(var n=176,s=[],r=0;r<t.nSubgrids;r++){var a=uS(i,n,e),o=fS(i,n,a,e),h=Math.round(1+(a.upperLongitude-a.lowerLongitude)/a.longitudeInterval),l=Math.round(1+(a.upperLatitude-a.lowerLatitude)/a.latitudeInterval);s.push({ll:[hs(a.lowerLongitude),hs(a.lowerLatitude)],del:[hs(a.longitudeInterval),hs(a.latitudeInterval)],lim:[h,l],count:a.gridNodeCount,cvs:cS(o)}),n+=176+a.gridNodeCount*16}return s}function cS(i){return i.map(function(t){return[hs(t.longitudeShift),hs(t.latitudeShift)]})}function uS(i,t,e){return{name:kh(i,t+8,t+16).trim(),parent:kh(i,t+24,t+24+8).trim(),lowerLatitude:i.getFloat64(t+72,e),upperLatitude:i.getFloat64(t+88,e),lowerLongitude:i.getFloat64(t+104,e),upperLongitude:i.getFloat64(t+120,e),latitudeInterval:i.getFloat64(t+136,e),longitudeInterval:i.getFloat64(t+152,e),gridNodeCount:i.getInt32(t+168,e)}}function fS(i,t,e,n){for(var s=t+176,r=16,a=[],o=0;o<e.gridNodeCount;o++){var h={latitudeShift:i.getFloat32(s+o*r,n),longitudeShift:i.getFloat32(s+o*r+4,n),latitudeAccuracy:i.getFloat32(s+o*r+8,n),longitudeAccuracy:i.getFloat32(s+o*r+12,n)};a.push(h)}return a}function wi(i,t){if(!(this instanceof wi))return new wi(i);t=t||function(l){if(l)throw l};var e=G1(i);if(typeof e!="object"){t("Could not parse to valid json: "+i);return}var n=wi.projections.get(e.projName);if(!n){t("Could not get projection name from: "+i);return}if(e.datumCode&&e.datumCode!=="none"){var s=hn(_a,e.datumCode);s&&(e.datum_params=e.datum_params||(s.towgs84?s.towgs84.split(","):null),e.ellps=s.ellipse,e.datumName=s.datumName?s.datumName:e.datumCode)}e.k0=e.k0||1,e.axis=e.axis||"enu",e.ellps=e.ellps||"wgs84",e.lat1=e.lat1||e.lat0;var r=eS(e.a,e.b,e.rf,e.ellps,e.sphere),a=tS(r.a,r.b,r.rf,e.R_A),o=rS(e.nadgrids),h=e.datum||nS(e.datumCode,e.datum_params,r.a,r.b,a.es,a.ep2,o);bu(this,e),bu(this,n),this.a=r.a,this.b=r.b,this.rf=r.rf,this.sphere=r.sphere,this.es=a.es,this.e=a.e,this.ep2=a.ep2,this.datum=h,this.init(),t(null,this)}wi.projections=J1;wi.projections.start();function dS(i,t){return i.datum_type!==t.datum_type||i.a!==t.a||Math.abs(i.es-t.es)>5e-11?!1:i.datum_type===Dn?i.datum_params[0]===t.datum_params[0]&&i.datum_params[1]===t.datum_params[1]&&i.datum_params[2]===t.datum_params[2]:i.datum_type===Nn?i.datum_params[0]===t.datum_params[0]&&i.datum_params[1]===t.datum_params[1]&&i.datum_params[2]===t.datum_params[2]&&i.datum_params[3]===t.datum_params[3]&&i.datum_params[4]===t.datum_params[4]&&i.datum_params[5]===t.datum_params[5]&&i.datum_params[6]===t.datum_params[6]:!0}function md(i,t,e){var n=i.x,s=i.y,r=i.z?i.z:0,a,o,h,l;if(s<-et&&s>-1.001*et)s=-et;else if(s>et&&s<1.001*et)s=et;else{if(s<-et)return{x:-1/0,y:-1/0,z:i.z};if(s>et)return{x:1/0,y:1/0,z:i.z}}return n>Math.PI&&(n-=2*Math.PI),o=Math.sin(s),l=Math.cos(s),h=o*o,a=e/Math.sqrt(1-t*h),{x:(a+r)*l*Math.cos(n),y:(a+r)*l*Math.sin(n),z:(a*(1-t)+r)*o}}function gd(i,t,e,n){var s=1e-12,r=s*s,a=30,o,h,l,c,u,f,p,g,_,d,m,y,x,S=i.x,R=i.y,T=i.z?i.z:0,C,P,tt;if(o=Math.sqrt(S*S+R*R),h=Math.sqrt(S*S+R*R+T*T),o/e<s){if(C=0,h/e<s)return P=et,tt=-n,{x:i.x,y:i.y,z:i.z}}else C=Math.atan2(R,S);l=T/h,c=o/h,u=1/Math.sqrt(1-t*(2-t)*c*c),g=c*(1-t)*u,_=l*u,x=0;do x++,p=e/Math.sqrt(1-t*_*_),tt=o*g+T*_-p*(1-t*_*_),f=t*p/(p+tt),u=1/Math.sqrt(1-f*(2-f)*c*c),d=c*(1-f)*u,m=l*u,y=m*g-d*_,g=d,_=m;while(y*y>r&&x<a);return P=Math.atan(m/Math.abs(d)),{x:C,y:P,z:tt}}function pS(i,t,e){if(t===Dn)return{x:i.x+e[0],y:i.y+e[1],z:i.z+e[2]};if(t===Nn){var n=e[0],s=e[1],r=e[2],a=e[3],o=e[4],h=e[5],l=e[6];return{x:l*(i.x-h*i.y+o*i.z)+n,y:l*(h*i.x+i.y-a*i.z)+s,z:l*(-o*i.x+a*i.y+i.z)+r}}}function mS(i,t,e){if(t===Dn)return{x:i.x-e[0],y:i.y-e[1],z:i.z-e[2]};if(t===Nn){var n=e[0],s=e[1],r=e[2],a=e[3],o=e[4],h=e[5],l=e[6],c=(i.x-n)/l,u=(i.y-s)/l,f=(i.z-r)/l;return{x:c+h*u-o*f,y:-h*c+u+a*f,z:o*c-a*u+f}}}function oa(i){return i===Dn||i===Nn}function gS(i,t,e){if(dS(i,t)||i.datum_type===zh||t.datum_type===zh)return e;var n=i.a,s=i.es;if(i.datum_type===gs){var r=Tu(i,!1,e);if(r!==0)return;n=yu,s=Su}var a=t.a,o=t.b,h=t.es;if(t.datum_type===gs&&(a=yu,o=x1,h=Su),s===h&&n===a&&!oa(i.datum_type)&&!oa(t.datum_type))return e;if(e=md(e,s,n),oa(i.datum_type)&&(e=pS(e,i.datum_type,i.datum_params)),oa(t.datum_type)&&(e=mS(e,t.datum_type,t.datum_params)),e=gd(e,h,a,o),t.datum_type===gs){var l=Tu(t,!0,e);if(l!==0)return}return e}function Tu(i,t,e){if(i.grids===null||i.grids.length===0)return console.log("Grid shift grids not found"),-1;var n={x:-e.x,y:e.y},s={x:Number.NaN,y:Number.NaN},r=[];t:for(var a=0;a<i.grids.length;a++){var o=i.grids[a];if(r.push(o.name),o.isNull){s=n;break}if(o.mandatory,o.grid===null){if(o.mandatory)return console.log("Unable to find mandatory grid '"+o.name+"'"),-1;continue}for(var h=o.grid.subgrids,l=0,c=h.length;l<c;l++){var u=h[l],f=(Math.abs(u.del[1])+Math.abs(u.del[0]))/1e4,p=u.ll[0]-f,g=u.ll[1]-f,_=u.ll[0]+(u.lim[0]-1)*u.del[0]+f,d=u.ll[1]+(u.lim[1]-1)*u.del[1]+f;if(!(g>n.y||p>n.x||d<n.y||_<n.x)&&(s=_S(n,t,u),!isNaN(s.x)))break t}}return isNaN(s.x)?(console.log("Failed to find a grid shift table for location '"+-n.x*Ei+" "+n.y*Ei+" tried: '"+r+"'"),-1):(e.x=-s.x,e.y=s.y,0)}function _S(i,t,e){var n={x:Number.NaN,y:Number.NaN};if(isNaN(i.x))return n;var s={x:i.x,y:i.y};s.x-=e.ll[0],s.y-=e.ll[1],s.x=Mt(s.x-Math.PI)+Math.PI;var r=Cu(s,e);if(t){if(isNaN(r.x))return n;r.x=s.x-r.x,r.y=s.y-r.y;var a=9,o=1e-12,h,l;do{if(l=Cu(r,e),isNaN(l.x)){console.log("Inverse grid shift iteration failed, presumably at grid edge.  Using first approximation.");break}h={x:s.x-(l.x+r.x),y:s.y-(l.y+r.y)},r.x+=h.x,r.y+=h.y}while(a--&&Math.abs(h.x)>o&&Math.abs(h.y)>o);if(a<0)return console.log("Inverse grid shift iterator failed to converge."),n;n.x=Mt(r.x+e.ll[0]),n.y=r.y+e.ll[1]}else isNaN(r.x)||(n.x=i.x+r.x,n.y=i.y+r.y);return n}function Cu(i,t){var e={x:i.x/t.del[0],y:i.y/t.del[1]},n={x:Math.floor(e.x),y:Math.floor(e.y)},s={x:e.x-1*n.x,y:e.y-1*n.y},r={x:Number.NaN,y:Number.NaN},a;if(n.x<0||n.x>=t.lim[0]||n.y<0||n.y>=t.lim[1])return r;a=n.y*t.lim[0]+n.x;var o={x:t.cvs[a][0],y:t.cvs[a][1]};a++;var h={x:t.cvs[a][0],y:t.cvs[a][1]};a+=t.lim[0];var l={x:t.cvs[a][0],y:t.cvs[a][1]};a--;var c={x:t.cvs[a][0],y:t.cvs[a][1]},u=s.x*s.y,f=s.x*(1-s.y),p=(1-s.x)*(1-s.y),g=(1-s.x)*s.y;return r.x=p*o.x+f*h.x+g*c.x+u*l.x,r.y=p*o.y+f*h.y+g*c.y+u*l.y,r}function Ru(i,t,e){var n=e.x,s=e.y,r=e.z||0,a,o,h,l={};for(h=0;h<3;h++)if(!(t&&h===2&&e.z===void 0))switch(h===0?(a=n,"ew".indexOf(i.axis[h])!==-1?o="x":o="y"):h===1?(a=s,"ns".indexOf(i.axis[h])!==-1?o="y":o="x"):(a=r,o="z"),i.axis[h]){case"e":l[o]=a;break;case"w":l[o]=-a;break;case"n":l[o]=a;break;case"s":l[o]=-a;break;case"u":e[o]!==void 0&&(l.z=a);break;case"d":e[o]!==void 0&&(l.z=-a);break;default:return null}return l}function _d(i){var t={x:i[0],y:i[1]};return i.length>2&&(t.z=i[2]),i.length>3&&(t.m=i[3]),t}function vS(i){Pu(i.x),Pu(i.y)}function Pu(i){if(typeof Number.isFinite=="function"){if(Number.isFinite(i))return;throw new TypeError("coordinates must be finite numbers")}if(typeof i!="number"||i!==i||!isFinite(i))throw new TypeError("coordinates must be finite numbers")}function xS(i,t){return(i.datum.datum_type===Dn||i.datum.datum_type===Nn||i.datum.datum_type===gs)&&t.datumCode!=="WGS84"||(t.datum.datum_type===Dn||t.datum.datum_type===Nn||t.datum.datum_type===gs)&&i.datumCode!=="WGS84"}function Ra(i,t,e,n){var s;Array.isArray(e)?e=_d(e):e={x:e.x,y:e.y,z:e.z,m:e.m};var r=e.z!==void 0;if(vS(e),i.datum&&t.datum&&xS(i,t)&&(s=new wi("WGS84"),e=Ra(i,s,e,n),i=s),n&&i.axis!=="enu"&&(e=Ru(i,!1,e)),i.projName==="longlat")e={x:e.x*we,y:e.y*we,z:e.z||0};else if(i.to_meter&&(e={x:e.x*i.to_meter,y:e.y*i.to_meter,z:e.z||0}),e=i.inverse(e),!e)return;if(i.from_greenwich&&(e.x+=i.from_greenwich),e=gS(i.datum,t.datum,e),!!e)return t.from_greenwich&&(e={x:e.x-t.from_greenwich,y:e.y,z:e.z||0}),t.projName==="longlat"?e={x:e.x*Ei,y:e.y*Ei,z:e.z||0}:(e=t.forward(e),t.to_meter&&(e={x:e.x/t.to_meter,y:e.y/t.to_meter,z:e.z||0})),n&&t.axis!=="enu"?Ru(t,!0,e):(e&&!r&&delete e.z,e)}var Lu=wi("WGS84");function Uo(i,t,e,n){var s,r,a;return Array.isArray(e)?(s=Ra(i,t,e,n)||{x:NaN,y:NaN},e.length>2?typeof i.name<"u"&&i.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"?typeof s.z=="number"?[s.x,s.y,s.z].concat(e.slice(3)):[s.x,s.y,e[2]].concat(e.slice(3)):[s.x,s.y].concat(e.slice(2)):[s.x,s.y]):(r=Ra(i,t,e,n),a=Object.keys(e),a.length===2||a.forEach(function(o){if(typeof i.name<"u"&&i.name==="geocent"||typeof t.name<"u"&&t.name==="geocent"){if(o==="x"||o==="y"||o==="z")return}else if(o==="x"||o==="y")return;r[o]=e[o]}),r)}function Iu(i){return i instanceof wi?i:i.oProj?i.oProj:wi(i)}function qe(i,t,e){i=Iu(i);var n=!1,s;return typeof t>"u"?(t=i,i=Lu,n=!0):(typeof t.x<"u"||Array.isArray(t))&&(e=t,t=i,i=Lu,n=!0),t=Iu(t),e?Uo(i,t,e):(s={forward:function(r,a){return Uo(i,t,r,a)},inverse:function(r,a){return Uo(t,i,r,a)}},n&&(s.oProj=t),s)}var Du=6,vd="AJSAJS",xd="AFAFAF",ls=65,Ve=73,si=79,Ws=86,Xs=90;const MS={forward:Md,inverse:yS,toPoint:yd};function Md(i,t){return t=t||5,bS(SS({lat:i[1],lon:i[0]}),t)}function yS(i){var t=Rl(Ed(i.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat,t.lon,t.lat]:[t.left,t.bottom,t.right,t.top]}function yd(i){var t=Rl(Ed(i.toUpperCase()));return t.lat&&t.lon?[t.lon,t.lat]:[(t.left+t.right)/2,(t.top+t.bottom)/2]}function Oo(i){return i*(Math.PI/180)}function Nu(i){return 180*(i/Math.PI)}function SS(i){var t=i.lat,e=i.lon,n=6378137,s=.00669438,r=.9996,a,o,h,l,c,u,f,p=Oo(t),g=Oo(e),_,d;d=Math.floor((e+180)/6)+1,e===180&&(d=60),t>=56&&t<64&&e>=3&&e<12&&(d=32),t>=72&&t<84&&(e>=0&&e<9?d=31:e>=9&&e<21?d=33:e>=21&&e<33?d=35:e>=33&&e<42&&(d=37)),a=(d-1)*6-180+3,_=Oo(a),o=s/(1-s),h=n/Math.sqrt(1-s*Math.sin(p)*Math.sin(p)),l=Math.tan(p)*Math.tan(p),c=o*Math.cos(p)*Math.cos(p),u=Math.cos(p)*(g-_),f=n*((1-s/4-3*s*s/64-5*s*s*s/256)*p-(3*s/8+3*s*s/32+45*s*s*s/1024)*Math.sin(2*p)+(15*s*s/256+45*s*s*s/1024)*Math.sin(4*p)-35*s*s*s/3072*Math.sin(6*p));var m=r*h*(u+(1-l+c)*u*u*u/6+(5-18*l+l*l+72*c-58*o)*u*u*u*u*u/120)+5e5,y=r*(f+h*Math.tan(p)*(u*u/2+(5-l+9*c+4*c*c)*u*u*u*u/24+(61-58*l+l*l+600*c-330*o)*u*u*u*u*u*u/720));return t<0&&(y+=1e7),{northing:Math.round(y),easting:Math.round(m),zoneNumber:d,zoneLetter:ES(t)}}function Rl(i){var t=i.northing,e=i.easting,n=i.zoneLetter,s=i.zoneNumber;if(s<0||s>60)return null;var r=.9996,a=6378137,o=.00669438,h,l=(1-Math.sqrt(1-o))/(1+Math.sqrt(1-o)),c,u,f,p,g,_,d,m,y,x=e-5e5,S=t;n<"N"&&(S-=1e7),d=(s-1)*6-180+3,h=o/(1-o),_=S/r,m=_/(a*(1-o/4-3*o*o/64-5*o*o*o/256)),y=m+(3*l/2-27*l*l*l/32)*Math.sin(2*m)+(21*l*l/16-55*l*l*l*l/32)*Math.sin(4*m)+151*l*l*l/96*Math.sin(6*m),c=a/Math.sqrt(1-o*Math.sin(y)*Math.sin(y)),u=Math.tan(y)*Math.tan(y),f=h*Math.cos(y)*Math.cos(y),p=a*(1-o)/Math.pow(1-o*Math.sin(y)*Math.sin(y),1.5),g=x/(c*r);var R=y-c*Math.tan(y)/p*(g*g/2-(5+3*u+10*f-4*f*f-9*h)*g*g*g*g/24+(61+90*u+298*f+45*u*u-252*h-3*f*f)*g*g*g*g*g*g/720);R=Nu(R);var T=(g-(1+2*u+f)*g*g*g/6+(5-2*f+28*u-3*f*f+8*h+24*u*u)*g*g*g*g*g/120)/Math.cos(y);T=d+Nu(T);var C;if(i.accuracy){var P=Rl({northing:i.northing+i.accuracy,easting:i.easting+i.accuracy,zoneLetter:i.zoneLetter,zoneNumber:i.zoneNumber});C={top:P.lat,right:P.lon,bottom:R,left:T}}else C={lat:R,lon:T};return C}function ES(i){var t="Z";return 84>=i&&i>=72?t="X":72>i&&i>=64?t="W":64>i&&i>=56?t="V":56>i&&i>=48?t="U":48>i&&i>=40?t="T":40>i&&i>=32?t="S":32>i&&i>=24?t="R":24>i&&i>=16?t="Q":16>i&&i>=8?t="P":8>i&&i>=0?t="N":0>i&&i>=-8?t="M":-8>i&&i>=-16?t="L":-16>i&&i>=-24?t="K":-24>i&&i>=-32?t="J":-32>i&&i>=-40?t="H":-40>i&&i>=-48?t="G":-48>i&&i>=-56?t="F":-56>i&&i>=-64?t="E":-64>i&&i>=-72?t="D":-72>i&&i>=-80&&(t="C"),t}function bS(i,t){var e="00000"+i.easting,n="00000"+i.northing;return i.zoneNumber+i.zoneLetter+AS(i.easting,i.northing,i.zoneNumber)+e.substr(e.length-5,t)+n.substr(n.length-5,t)}function AS(i,t,e){var n=Sd(e),s=Math.floor(i/1e5),r=Math.floor(t/1e5)%20;return wS(s,r,n)}function Sd(i){var t=i%Du;return t===0&&(t=Du),t}function wS(i,t,e){var n=e-1,s=vd.charCodeAt(n),r=xd.charCodeAt(n),a=s+i-1,o=r+t,h=!1;a>Xs&&(a=a-Xs+ls-1,h=!0),(a===Ve||s<Ve&&a>Ve||(a>Ve||s<Ve)&&h)&&a++,(a===si||s<si&&a>si||(a>si||s<si)&&h)&&(a++,a===Ve&&a++),a>Xs&&(a=a-Xs+ls-1),o>Ws?(o=o-Ws+ls-1,h=!0):h=!1,(o===Ve||r<Ve&&o>Ve||(o>Ve||r<Ve)&&h)&&o++,(o===si||r<si&&o>si||(o>si||r<si)&&h)&&(o++,o===Ve&&o++),o>Ws&&(o=o-Ws+ls-1);var l=String.fromCharCode(a)+String.fromCharCode(o);return l}function Ed(i){if(i&&i.length===0)throw"MGRSPoint coverting from nothing";for(var t=i.length,e=null,n="",s,r=0;!/[A-Z]/.test(s=i.charAt(r));){if(r>=2)throw"MGRSPoint bad conversion from: "+i;n+=s,r++}var a=parseInt(n,10);if(r===0||r+3>t)throw"MGRSPoint bad conversion from: "+i;var o=i.charAt(r++);if(o<="A"||o==="B"||o==="Y"||o>="Z"||o==="I"||o==="O")throw"MGRSPoint zone letter "+o+" not handled: "+i;e=i.substring(r,r+=2);for(var h=Sd(a),l=TS(e.charAt(0),h),c=CS(e.charAt(1),h);c<RS(o);)c+=2e6;var u=t-r;if(u%2!==0)throw`MGRSPoint has to have an even number 
of digits after the zone letter and two 100km letters - front 
half for easting meters, second half for 
northing meters`+i;var f=u/2,p=0,g=0,_,d,m,y,x;return f>0&&(_=1e5/Math.pow(10,f),d=i.substring(r,r+f),p=parseFloat(d)*_,m=i.substring(r+f),g=parseFloat(m)*_),y=p+l,x=g+c,{easting:y,northing:x,zoneLetter:o,zoneNumber:a,accuracy:_}}function TS(i,t){for(var e=vd.charCodeAt(t-1),n=1e5,s=!1;e!==i.charCodeAt(0);){if(e++,e===Ve&&e++,e===si&&e++,e>Xs){if(s)throw"Bad character: "+i;e=ls,s=!0}n+=1e5}return n}function CS(i,t){if(i>"V")throw"MGRSPoint given invalid Northing "+i;for(var e=xd.charCodeAt(t-1),n=0,s=!1;e!==i.charCodeAt(0);){if(e++,e===Ve&&e++,e===si&&e++,e>Ws){if(s)throw"Bad character: "+i;e=ls,s=!0}n+=1e5}return n}function RS(i){var t;switch(i){case"C":t=11e5;break;case"D":t=2e6;break;case"E":t=28e5;break;case"F":t=37e5;break;case"G":t=46e5;break;case"H":t=55e5;break;case"J":t=64e5;break;case"K":t=73e5;break;case"L":t=82e5;break;case"M":t=91e5;break;case"N":t=0;break;case"P":t=8e5;break;case"Q":t=17e5;break;case"R":t=26e5;break;case"S":t=35e5;break;case"T":t=44e5;break;case"U":t=53e5;break;case"V":t=62e5;break;case"W":t=7e6;break;case"X":t=79e5;break;default:t=-1}if(t>=0)return t;throw"Invalid zone letter: "+i}function Cs(i,t,e){if(!(this instanceof Cs))return new Cs(i,t,e);if(Array.isArray(i))this.x=i[0],this.y=i[1],this.z=i[2]||0;else if(typeof i=="object")this.x=i.x,this.y=i.y,this.z=i.z||0;else if(typeof i=="string"&&typeof t>"u"){var n=i.split(",");this.x=parseFloat(n[0],10),this.y=parseFloat(n[1],10),this.z=parseFloat(n[2],10)||0}else this.x=i,this.y=t,this.z=e||0;console.warn("proj4.Point will be removed in version 3, use proj4.toPoint")}Cs.fromMGRS=function(i){return new Cs(yd(i))};Cs.prototype.toMGRS=function(i){return Md([this.x,this.y],i)};var PS=1,LS=.25,Uu=.046875,Ou=.01953125,Fu=.01068115234375,IS=.75,DS=.46875,NS=.013020833333333334,US=.007120768229166667,OS=.3645833333333333,FS=.005696614583333333,BS=.3076171875;function Pl(i){var t=[];t[0]=PS-i*(LS+i*(Uu+i*(Ou+i*Fu))),t[1]=i*(IS-i*(Uu+i*(Ou+i*Fu)));var e=i*i;return t[2]=e*(DS-i*(NS+i*US)),e*=i,t[3]=e*(OS-i*FS),t[4]=e*i*BS,t}function Ns(i,t,e,n){return e*=t,t*=t,n[0]*i-e*(n[1]+t*(n[2]+t*(n[3]+t*n[4])))}var zS=20;function Ll(i,t,e){for(var n=1/(1-t),s=i,r=zS;r;--r){var a=Math.sin(s),o=1-t*a*a;if(o=(Ns(s,a,Math.cos(s),e)-i)*(o*Math.sqrt(o))*n,s-=o,Math.abs(o)<xt)return s}return s}function GS(){this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.es&&(this.en=Pl(this.es),this.ml0=Ns(this.lat0,Math.sin(this.lat0),Math.cos(this.lat0),this.en))}function kS(i){var t=i.x,e=i.y,n=Mt(t-this.long0),s,r,a,o=Math.sin(e),h=Math.cos(e);if(this.es){var c=h*n,u=Math.pow(c,2),f=this.ep2*Math.pow(h,2),p=Math.pow(f,2),g=Math.abs(h)>xt?Math.tan(e):0,_=Math.pow(g,2),d=Math.pow(_,2);s=1-this.es*Math.pow(o,2),c=c/Math.sqrt(s);var m=Ns(e,o,h,this.en);r=this.a*(this.k0*c*(1+u/6*(1-_+f+u/20*(5-18*_+d+14*f-58*_*f+u/42*(61+179*d-d*_-479*_)))))+this.x0,a=this.a*(this.k0*(m-this.ml0+o*n*c/2*(1+u/12*(5-_+9*f+4*p+u/30*(61+d-58*_+270*f-330*_*f+u/56*(1385+543*d-d*_-3111*_))))))+this.y0}else{var l=h*Math.sin(n);if(Math.abs(Math.abs(l)-1)<xt)return 93;if(r=.5*this.a*this.k0*Math.log((1+l)/(1-l))+this.x0,a=h*Math.cos(n)/Math.sqrt(1-Math.pow(l,2)),l=Math.abs(a),l>=1){if(l-1>xt)return 93;a=0}else a=Math.acos(a);e<0&&(a=-a),a=this.a*this.k0*(a-this.lat0)+this.y0}return i.x=r,i.y=a,i}function HS(i){var t,e,n,s,r=(i.x-this.x0)*(1/this.a),a=(i.y-this.y0)*(1/this.a);if(this.es)if(t=this.ml0+a/this.k0,e=Ll(t,this.es,this.en),Math.abs(e)<et){var u=Math.sin(e),f=Math.cos(e),p=Math.abs(f)>xt?Math.tan(e):0,g=this.ep2*Math.pow(f,2),_=Math.pow(g,2),d=Math.pow(p,2),m=Math.pow(d,2);t=1-this.es*Math.pow(u,2);var y=r*Math.sqrt(t)/this.k0,x=Math.pow(y,2);t=t*p,n=e-t*x/(1-this.es)*.5*(1-x/12*(5+3*d-9*g*d+g-4*_-x/30*(61+90*d-252*g*d+45*m+46*g-x/56*(1385+3633*d+4095*m+1574*m*d)))),s=Mt(this.long0+y*(1-x/6*(1+2*d+g-x/20*(5+28*d+24*m+8*g*d+6*g-x/42*(61+662*d+1320*m+720*m*d))))/f)}else n=et*yr(a),s=0;else{var o=Math.exp(r/this.k0),h=.5*(o-1/o),l=this.lat0+a/this.k0,c=Math.cos(l);t=Math.sqrt((1-Math.pow(c,2))/(1+Math.pow(h,2))),n=Math.asin(t),a<0&&(n=-n),h===0&&c===0?s=0:s=Mt(Math.atan2(h,c)+this.long0)}return i.x=s,i.y=n,i}var VS=["Fast_Transverse_Mercator","Fast Transverse Mercator"];const va={init:GS,forward:kS,inverse:HS,names:VS};function bd(i){var t=Math.exp(i);return t=(t-1/t)/2,t}function We(i,t){i=Math.abs(i),t=Math.abs(t);var e=Math.max(i,t),n=Math.min(i,t)/(e||1);return e*Math.sqrt(1+Math.pow(n,2))}function WS(i){var t=1+i,e=t-1;return e===0?i:i*Math.log(t)/e}function XS(i){var t=Math.abs(i);return t=WS(t*(1+t/(We(1,t)+1))),i<0?-t:t}function Il(i,t){for(var e=2*Math.cos(2*t),n=i.length-1,s=i[n],r=0,a;--n>=0;)a=-r+e*s+i[n],r=s,s=a;return t+a*Math.sin(2*t)}function $S(i,t){for(var e=2*Math.cos(t),n=i.length-1,s=i[n],r=0,a;--n>=0;)a=-r+e*s+i[n],r=s,s=a;return Math.sin(t)*a}function qS(i){var t=Math.exp(i);return t=(t+1/t)/2,t}function Ad(i,t,e){for(var n=Math.sin(t),s=Math.cos(t),r=bd(e),a=qS(e),o=2*s*a,h=-2*n*r,l=i.length-1,c=i[l],u=0,f=0,p=0,g,_;--l>=0;)g=f,_=u,f=c,u=p,c=-g+o*f-h*u+i[l],p=-_+h*f+o*u;return o=n*a,h=s*r,[o*c-h*p,o*p+h*c]}function YS(){if(!this.approx&&(isNaN(this.es)||this.es<=0))throw new Error('Incorrect elliptical usage. Try using the +approx option in the proj string, or PROJECTION["Fast_Transverse_Mercator"] in the WKT.');this.approx&&(va.init.apply(this),this.forward=va.forward,this.inverse=va.inverse),this.x0=this.x0!==void 0?this.x0:0,this.y0=this.y0!==void 0?this.y0:0,this.long0=this.long0!==void 0?this.long0:0,this.lat0=this.lat0!==void 0?this.lat0:0,this.cgb=[],this.cbg=[],this.utg=[],this.gtu=[];var i=this.es/(1+Math.sqrt(1-this.es)),t=i/(2-i),e=t;this.cgb[0]=t*(2+t*(-2/3+t*(-2+t*(116/45+t*(26/45+t*(-2854/675)))))),this.cbg[0]=t*(-2+t*(2/3+t*(4/3+t*(-82/45+t*(32/45+t*(4642/4725)))))),e=e*t,this.cgb[1]=e*(7/3+t*(-8/5+t*(-227/45+t*(2704/315+t*(2323/945))))),this.cbg[1]=e*(5/3+t*(-16/15+t*(-13/9+t*(904/315+t*(-1522/945))))),e=e*t,this.cgb[2]=e*(56/15+t*(-136/35+t*(-1262/105+t*(73814/2835)))),this.cbg[2]=e*(-26/15+t*(34/21+t*(8/5+t*(-12686/2835)))),e=e*t,this.cgb[3]=e*(4279/630+t*(-332/35+t*(-399572/14175))),this.cbg[3]=e*(1237/630+t*(-12/5+t*(-24832/14175))),e=e*t,this.cgb[4]=e*(4174/315+t*(-144838/6237)),this.cbg[4]=e*(-734/315+t*(109598/31185)),e=e*t,this.cgb[5]=e*(601676/22275),this.cbg[5]=e*(444337/155925),e=Math.pow(t,2),this.Qn=this.k0/(1+t)*(1+e*(1/4+e*(1/64+e/256))),this.utg[0]=t*(-.5+t*(2/3+t*(-37/96+t*(1/360+t*(81/512+t*(-96199/604800)))))),this.gtu[0]=t*(.5+t*(-2/3+t*(5/16+t*(41/180+t*(-127/288+t*(7891/37800)))))),this.utg[1]=e*(-1/48+t*(-1/15+t*(437/1440+t*(-46/105+t*(1118711/3870720))))),this.gtu[1]=e*(13/48+t*(-3/5+t*(557/1440+t*(281/630+t*(-1983433/1935360))))),e=e*t,this.utg[2]=e*(-17/480+t*(37/840+t*(209/4480+t*(-5569/90720)))),this.gtu[2]=e*(61/240+t*(-103/140+t*(15061/26880+t*(167603/181440)))),e=e*t,this.utg[3]=e*(-4397/161280+t*(11/504+t*(830251/7257600))),this.gtu[3]=e*(49561/161280+t*(-179/168+t*(6601661/7257600))),e=e*t,this.utg[4]=e*(-4583/161280+t*(108847/3991680)),this.gtu[4]=e*(34729/80640+t*(-3418889/1995840)),e=e*t,this.utg[5]=e*(-20648693/638668800),this.gtu[5]=e*(212378941/319334400);var n=Il(this.cbg,this.lat0);this.Zb=-this.Qn*(n+$S(this.gtu,2*n))}function jS(i){var t=Mt(i.x-this.long0),e=i.y;e=Il(this.cbg,e);var n=Math.sin(e),s=Math.cos(e),r=Math.sin(t),a=Math.cos(t);e=Math.atan2(n,a*s),t=Math.atan2(r*s,We(n,s*a)),t=XS(Math.tan(t));var o=Ad(this.gtu,2*e,2*t);e=e+o[0],t=t+o[1];var h,l;return Math.abs(t)<=2.623395162778?(h=this.a*(this.Qn*t)+this.x0,l=this.a*(this.Qn*e+this.Zb)+this.y0):(h=1/0,l=1/0),i.x=h,i.y=l,i}function KS(i){var t=(i.x-this.x0)*(1/this.a),e=(i.y-this.y0)*(1/this.a);e=(e-this.Zb)/this.Qn,t=t/this.Qn;var n,s;if(Math.abs(t)<=2.623395162778){var r=Ad(this.utg,2*e,2*t);e=e+r[0],t=t+r[1],t=Math.atan(bd(t));var a=Math.sin(e),o=Math.cos(e),h=Math.sin(t),l=Math.cos(t);e=Math.atan2(a*l,We(h,l*o)),t=Math.atan2(h,l*o),n=Mt(t+this.long0),s=Il(this.cgb,e)}else n=1/0,s=1/0;return i.x=n,i.y=s,i}var ZS=["Extended_Transverse_Mercator","Extended Transverse Mercator","etmerc","Transverse_Mercator","Transverse Mercator","Gauss Kruger","Gauss_Kruger","tmerc"];const xa={init:YS,forward:jS,inverse:KS,names:ZS};function JS(i,t){if(i===void 0){if(i=Math.floor((Mt(t)+Math.PI)*30/Math.PI)+1,i<0)return 0;if(i>60)return 60}return i}var QS="etmerc";function tE(){var i=JS(this.zone,this.long0);if(i===void 0)throw new Error("unknown utm zone");this.lat0=0,this.long0=(6*Math.abs(i)-183)*we,this.x0=5e5,this.y0=this.utmSouth?1e7:0,this.k0=.9996,xa.init.apply(this),this.forward=xa.forward,this.inverse=xa.inverse}var eE=["Universal Transverse Mercator System","utm"];const iE={init:tE,names:eE,dependsOn:QS};function Dl(i,t){return Math.pow((1-i)/(1+i),t)}var nE=20;function sE(){var i=Math.sin(this.lat0),t=Math.cos(this.lat0);t*=t,this.rc=Math.sqrt(1-this.es)/(1-this.es*i*i),this.C=Math.sqrt(1+this.es*t*t/(1-this.es)),this.phic0=Math.asin(i/this.C),this.ratexp=.5*this.C*this.e,this.K=Math.tan(.5*this.phic0+ee)/(Math.pow(Math.tan(.5*this.lat0+ee),this.C)*Dl(this.e*i,this.ratexp))}function rE(i){var t=i.x,e=i.y;return i.y=2*Math.atan(this.K*Math.pow(Math.tan(.5*e+ee),this.C)*Dl(this.e*Math.sin(e),this.ratexp))-et,i.x=this.C*t,i}function aE(i){for(var t=1e-14,e=i.x/this.C,n=i.y,s=Math.pow(Math.tan(.5*n+ee)/this.K,1/this.C),r=nE;r>0&&(n=2*Math.atan(s*Dl(this.e*Math.sin(i.y),-.5*this.e))-et,!(Math.abs(n-i.y)<t));--r)i.y=n;return r?(i.x=e,i.y=n,i):null}var oE=["gauss"];const Nl={init:sE,forward:rE,inverse:aE,names:oE};function hE(){Nl.init.apply(this),this.rc&&(this.sinc0=Math.sin(this.phic0),this.cosc0=Math.cos(this.phic0),this.R2=2*this.rc,this.title||(this.title="Oblique Stereographic Alternative"))}function lE(i){var t,e,n,s;return i.x=Mt(i.x-this.long0),Nl.forward.apply(this,[i]),t=Math.sin(i.y),e=Math.cos(i.y),n=Math.cos(i.x),s=this.k0*this.R2/(1+this.sinc0*t+this.cosc0*e*n),i.x=s*e*Math.sin(i.x),i.y=s*(this.cosc0*t-this.sinc0*e*n),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function cE(i){var t,e,n,s,r;if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,r=We(i.x,i.y)){var a=2*Math.atan2(r,this.R2);t=Math.sin(a),e=Math.cos(a),s=Math.asin(e*this.sinc0+i.y*t*this.cosc0/r),n=Math.atan2(i.x*t,r*this.cosc0*e-i.y*this.sinc0*t)}else s=this.phic0,n=0;return i.x=n,i.y=s,Nl.inverse.apply(this,[i]),i.x=Mt(i.x+this.long0),i}var uE=["Stereographic_North_Pole","Oblique_Stereographic","sterea","Oblique Stereographic Alternative","Double_Stereographic"];const fE={init:hE,forward:lE,inverse:cE,names:uE};function dE(i,t,e){return t*=e,Math.tan(.5*(et+i))*Math.pow((1-t)/(1+t),.5*e)}function pE(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.coslat0=Math.cos(this.lat0),this.sinlat0=Math.sin(this.lat0),this.sphere?this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=xt&&(this.k0=.5*(1+yr(this.lat0)*Math.sin(this.lat_ts))):(Math.abs(this.coslat0)<=xt&&(this.lat0>0?this.con=1:this.con=-1),this.cons=Math.sqrt(Math.pow(1+this.e,1+this.e)*Math.pow(1-this.e,1-this.e)),this.k0===1&&!isNaN(this.lat_ts)&&Math.abs(this.coslat0)<=xt&&Math.abs(Math.cos(this.lat_ts))>xt&&(this.k0=.5*this.cons*Ti(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts))/mi(this.e,this.con*this.lat_ts,this.con*Math.sin(this.lat_ts))),this.ms1=Ti(this.e,this.sinlat0,this.coslat0),this.X0=2*Math.atan(this.ssfn_(this.lat0,this.sinlat0,this.e))-et,this.cosX0=Math.cos(this.X0),this.sinX0=Math.sin(this.X0))}function mE(i){var t=i.x,e=i.y,n=Math.sin(e),s=Math.cos(e),r,a,o,h,l,c,u=Mt(t-this.long0);return Math.abs(Math.abs(t-this.long0)-Math.PI)<=xt&&Math.abs(e+this.lat0)<=xt?(i.x=NaN,i.y=NaN,i):this.sphere?(r=2*this.k0/(1+this.sinlat0*n+this.coslat0*s*Math.cos(u)),i.x=this.a*r*s*Math.sin(u)+this.x0,i.y=this.a*r*(this.coslat0*n-this.sinlat0*s*Math.cos(u))+this.y0,i):(a=2*Math.atan(this.ssfn_(e,n,this.e))-et,h=Math.cos(a),o=Math.sin(a),Math.abs(this.coslat0)<=xt?(l=mi(this.e,e*this.con,this.con*n),c=2*this.a*this.k0*l/this.cons,i.x=this.x0+c*Math.sin(t-this.long0),i.y=this.y0-this.con*c*Math.cos(t-this.long0),i):(Math.abs(this.sinlat0)<xt?(r=2*this.a*this.k0/(1+h*Math.cos(u)),i.y=r*o):(r=2*this.a*this.k0*this.ms1/(this.cosX0*(1+this.sinX0*o+this.cosX0*h*Math.cos(u))),i.y=r*(this.cosX0*o-this.sinX0*h*Math.cos(u))+this.y0),i.x=r*h*Math.sin(u)+this.x0,i))}function gE(i){i.x-=this.x0,i.y-=this.y0;var t,e,n,s,r,a=Math.sqrt(i.x*i.x+i.y*i.y);if(this.sphere){var o=2*Math.atan(a/(2*this.a*this.k0));return t=this.long0,e=this.lat0,a<=xt?(i.x=t,i.y=e,i):(e=Math.asin(Math.cos(o)*this.sinlat0+i.y*Math.sin(o)*this.coslat0/a),Math.abs(this.coslat0)<xt?this.lat0>0?t=Mt(this.long0+Math.atan2(i.x,-1*i.y)):t=Mt(this.long0+Math.atan2(i.x,i.y)):t=Mt(this.long0+Math.atan2(i.x*Math.sin(o),a*this.coslat0*Math.cos(o)-i.y*this.sinlat0*Math.sin(o))),i.x=t,i.y=e,i)}else if(Math.abs(this.coslat0)<=xt){if(a<=xt)return e=this.lat0,t=this.long0,i.x=t,i.y=e,i;i.x*=this.con,i.y*=this.con,n=a*this.cons/(2*this.a*this.k0),e=this.con*mr(this.e,n),t=this.con*Mt(this.con*this.long0+Math.atan2(i.x,-1*i.y))}else s=2*Math.atan(a*this.cosX0/(2*this.a*this.k0*this.ms1)),t=this.long0,a<=xt?r=this.X0:(r=Math.asin(Math.cos(s)*this.sinX0+i.y*Math.sin(s)*this.cosX0/a),t=Mt(this.long0+Math.atan2(i.x*Math.sin(s),a*this.cosX0*Math.cos(s)-i.y*this.sinX0*Math.sin(s)))),e=-1*mr(this.e,Math.tan(.5*(et+r)));return i.x=t,i.y=e,i}var _E=["stere","Stereographic_South_Pole","Polar Stereographic (variant B)","Polar_Stereographic"];const vE={init:pE,forward:mE,inverse:gE,names:_E,ssfn_:dE};function xE(){var i=this.lat0;this.lambda0=this.long0;var t=Math.sin(i),e=this.a,n=this.rf,s=1/n,r=2*s-Math.pow(s,2),a=this.e=Math.sqrt(r);this.R=this.k0*e*Math.sqrt(1-r)/(1-r*Math.pow(t,2)),this.alpha=Math.sqrt(1+r/(1-r)*Math.pow(Math.cos(i),4)),this.b0=Math.asin(t/this.alpha);var o=Math.log(Math.tan(Math.PI/4+this.b0/2)),h=Math.log(Math.tan(Math.PI/4+i/2)),l=Math.log((1+a*t)/(1-a*t));this.K=o-this.alpha*h+this.alpha*a/2*l}function ME(i){var t=Math.log(Math.tan(Math.PI/4-i.y/2)),e=this.e/2*Math.log((1+this.e*Math.sin(i.y))/(1-this.e*Math.sin(i.y))),n=-this.alpha*(t+e)+this.K,s=2*(Math.atan(Math.exp(n))-Math.PI/4),r=this.alpha*(i.x-this.lambda0),a=Math.atan(Math.sin(r)/(Math.sin(this.b0)*Math.tan(s)+Math.cos(this.b0)*Math.cos(r))),o=Math.asin(Math.cos(this.b0)*Math.sin(s)-Math.sin(this.b0)*Math.cos(s)*Math.cos(r));return i.y=this.R/2*Math.log((1+Math.sin(o))/(1-Math.sin(o)))+this.y0,i.x=this.R*a+this.x0,i}function yE(i){for(var t=i.x-this.x0,e=i.y-this.y0,n=t/this.R,s=2*(Math.atan(Math.exp(e/this.R))-Math.PI/4),r=Math.asin(Math.cos(this.b0)*Math.sin(s)+Math.sin(this.b0)*Math.cos(s)*Math.cos(n)),a=Math.atan(Math.sin(n)/(Math.cos(this.b0)*Math.cos(n)-Math.sin(this.b0)*Math.tan(s))),o=this.lambda0+a/this.alpha,h=0,l=r,c=-1e3,u=0;Math.abs(l-c)>1e-7;){if(++u>20)return;h=1/this.alpha*(Math.log(Math.tan(Math.PI/4+r/2))-this.K)+this.e*Math.log(Math.tan(Math.PI/4+Math.asin(this.e*Math.sin(l))/2)),c=l,l=2*Math.atan(Math.exp(h))-Math.PI/2}return i.x=o,i.y=l,i}var SE=["somerc"];const EE={init:xE,forward:ME,inverse:yE,names:SE};var is=1e-7;function bE(i){var t=["Hotine_Oblique_Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin"],e=typeof i.PROJECTION=="object"?Object.keys(i.PROJECTION)[0]:i.PROJECTION;return"no_uoff"in i||"no_off"in i||t.indexOf(e)!==-1}function AE(){var i,t,e,n,s,r,a,o,h,l,c=0,u,f=0,p=0,g=0,_=0,d=0,m=0;this.no_off=bE(this),this.no_rot="no_rot"in this;var y=!1;"alpha"in this&&(y=!0);var x=!1;if("rectified_grid_angle"in this&&(x=!0),y&&(m=this.alpha),x&&(c=this.rectified_grid_angle*we),y||x)f=this.longc;else if(p=this.long1,_=this.lat1,g=this.long2,d=this.lat2,Math.abs(_-d)<=is||(i=Math.abs(_))<=is||Math.abs(i-et)<=is||Math.abs(Math.abs(this.lat0)-et)<=is||Math.abs(Math.abs(d)-et)<=is)throw new Error;var S=1-this.es;t=Math.sqrt(S),Math.abs(this.lat0)>xt?(o=Math.sin(this.lat0),e=Math.cos(this.lat0),i=1-this.es*o*o,this.B=e*e,this.B=Math.sqrt(1+this.es*this.B*this.B/S),this.A=this.B*this.k0*t/i,n=this.B*t/(e*Math.sqrt(i)),s=n*n-1,s<=0?s=0:(s=Math.sqrt(s),this.lat0<0&&(s=-s)),this.E=s+=n,this.E*=Math.pow(mi(this.e,this.lat0,o),this.B)):(this.B=1/t,this.A=this.k0,this.E=n=s=1),y||x?(y?(u=Math.asin(Math.sin(m)/n),x||(c=m)):(u=c,m=Math.asin(n*Math.sin(u))),this.lam0=f-Math.asin(.5*(s-1/s)*Math.tan(u))/this.B):(r=Math.pow(mi(this.e,_,Math.sin(_)),this.B),a=Math.pow(mi(this.e,d,Math.sin(d)),this.B),s=this.E/r,h=(a-r)/(a+r),l=this.E*this.E,l=(l-a*r)/(l+a*r),i=p-g,i<-Math.pi?g-=dr:i>Math.pi&&(g+=dr),this.lam0=Mt(.5*(p+g)-Math.atan(l*Math.tan(.5*this.B*(p-g))/h)/this.B),u=Math.atan(2*Math.sin(this.B*Mt(p-this.lam0))/(s-1/s)),c=m=Math.asin(n*Math.sin(u))),this.singam=Math.sin(u),this.cosgam=Math.cos(u),this.sinrot=Math.sin(c),this.cosrot=Math.cos(c),this.rB=1/this.B,this.ArB=this.A*this.rB,this.BrA=1/this.ArB,this.A*this.B,this.no_off?this.u_0=0:(this.u_0=Math.abs(this.ArB*Math.atan(Math.sqrt(n*n-1)/Math.cos(m))),this.lat0<0&&(this.u_0=-this.u_0)),s=.5*u,this.v_pole_n=this.ArB*Math.log(Math.tan(ee-s)),this.v_pole_s=this.ArB*Math.log(Math.tan(ee+s))}function wE(i){var t={},e,n,s,r,a,o,h,l;if(i.x=i.x-this.lam0,Math.abs(Math.abs(i.y)-et)>xt){if(a=this.E/Math.pow(mi(this.e,i.y,Math.sin(i.y)),this.B),o=1/a,e=.5*(a-o),n=.5*(a+o),r=Math.sin(this.B*i.x),s=(e*this.singam-r*this.cosgam)/n,Math.abs(Math.abs(s)-1)<xt)throw new Error;l=.5*this.ArB*Math.log((1-s)/(1+s)),o=Math.cos(this.B*i.x),Math.abs(o)<is?h=this.A*i.x:h=this.ArB*Math.atan2(e*this.cosgam+r*this.singam,o)}else l=i.y>0?this.v_pole_n:this.v_pole_s,h=this.ArB*i.y;return this.no_rot?(t.x=h,t.y=l):(h-=this.u_0,t.x=l*this.cosrot+h*this.sinrot,t.y=h*this.cosrot-l*this.sinrot),t.x=this.a*t.x+this.x0,t.y=this.a*t.y+this.y0,t}function TE(i){var t,e,n,s,r,a,o,h={};if(i.x=(i.x-this.x0)*(1/this.a),i.y=(i.y-this.y0)*(1/this.a),this.no_rot?(e=i.y,t=i.x):(e=i.x*this.cosrot-i.y*this.sinrot,t=i.y*this.cosrot+i.x*this.sinrot+this.u_0),n=Math.exp(-this.BrA*e),s=.5*(n-1/n),r=.5*(n+1/n),a=Math.sin(this.BrA*t),o=(a*this.cosgam+s*this.singam)/r,Math.abs(Math.abs(o)-1)<xt)h.x=0,h.y=o<0?-et:et;else{if(h.y=this.E/Math.sqrt((1+o)/(1-o)),h.y=mr(this.e,Math.pow(h.y,1/this.B)),h.y===1/0)throw new Error;h.x=-this.rB*Math.atan2(s*this.cosgam-a*this.singam,Math.cos(this.BrA*t))}return h.x+=this.lam0,h}var CE=["Hotine_Oblique_Mercator","Hotine Oblique Mercator","Hotine_Oblique_Mercator_Azimuth_Natural_Origin","Hotine_Oblique_Mercator_Two_Point_Natural_Origin","Hotine_Oblique_Mercator_Azimuth_Center","Oblique_Mercator","omerc"];const RE={init:AE,forward:wE,inverse:TE,names:CE};function PE(){if(this.lat2||(this.lat2=this.lat1),this.k0||(this.k0=1),this.x0=this.x0||0,this.y0=this.y0||0,!(Math.abs(this.lat1+this.lat2)<xt)){var i=this.b/this.a;this.e=Math.sqrt(1-i*i);var t=Math.sin(this.lat1),e=Math.cos(this.lat1),n=Ti(this.e,t,e),s=mi(this.e,this.lat1,t),r=Math.sin(this.lat2),a=Math.cos(this.lat2),o=Ti(this.e,r,a),h=mi(this.e,this.lat2,r),l=mi(this.e,this.lat0,Math.sin(this.lat0));Math.abs(this.lat1-this.lat2)>xt?this.ns=Math.log(n/o)/Math.log(s/h):this.ns=t,isNaN(this.ns)&&(this.ns=t),this.f0=n/(this.ns*Math.pow(s,this.ns)),this.rh=this.a*this.f0*Math.pow(l,this.ns),this.title||(this.title="Lambert Conformal Conic")}}function LE(i){var t=i.x,e=i.y;Math.abs(2*Math.abs(e)-Math.PI)<=xt&&(e=yr(e)*(et-2*xt));var n=Math.abs(Math.abs(e)-et),s,r;if(n>xt)s=mi(this.e,e,Math.sin(e)),r=this.a*this.f0*Math.pow(s,this.ns);else{if(n=e*this.ns,n<=0)return null;r=0}var a=this.ns*Mt(t-this.long0);return i.x=this.k0*(r*Math.sin(a))+this.x0,i.y=this.k0*(this.rh-r*Math.cos(a))+this.y0,i}function IE(i){var t,e,n,s,r,a=(i.x-this.x0)/this.k0,o=this.rh-(i.y-this.y0)/this.k0;this.ns>0?(t=Math.sqrt(a*a+o*o),e=1):(t=-Math.sqrt(a*a+o*o),e=-1);var h=0;if(t!==0&&(h=Math.atan2(e*a,e*o)),t!==0||this.ns>0){if(e=1/this.ns,n=Math.pow(t/(this.a*this.f0),e),s=mr(this.e,n),s===-9999)return null}else s=-et;return r=Mt(h/this.ns+this.long0),i.x=r,i.y=s,i}var DE=["Lambert Tangential Conformal Conic Projection","Lambert_Conformal_Conic","Lambert_Conformal_Conic_1SP","Lambert_Conformal_Conic_2SP","lcc","Lambert Conic Conformal (1SP)","Lambert Conic Conformal (2SP)"];const NE={init:PE,forward:LE,inverse:IE,names:DE};function UE(){this.a=6377397155e-3,this.es=.006674372230614,this.e=Math.sqrt(this.es),this.lat0||(this.lat0=.863937979737193),this.long0||(this.long0=.7417649320975901-.308341501185665),this.k0||(this.k0=.9999),this.s45=.785398163397448,this.s90=2*this.s45,this.fi0=this.lat0,this.e2=this.es,this.e=Math.sqrt(this.e2),this.alfa=Math.sqrt(1+this.e2*Math.pow(Math.cos(this.fi0),4)/(1-this.e2)),this.uq=1.04216856380474,this.u0=Math.asin(Math.sin(this.fi0)/this.alfa),this.g=Math.pow((1+this.e*Math.sin(this.fi0))/(1-this.e*Math.sin(this.fi0)),this.alfa*this.e/2),this.k=Math.tan(this.u0/2+this.s45)/Math.pow(Math.tan(this.fi0/2+this.s45),this.alfa)*this.g,this.k1=this.k0,this.n0=this.a*Math.sqrt(1-this.e2)/(1-this.e2*Math.pow(Math.sin(this.fi0),2)),this.s0=1.37008346281555,this.n=Math.sin(this.s0),this.ro0=this.k1*this.n0/Math.tan(this.s0),this.ad=this.s90-this.uq}function OE(i){var t,e,n,s,r,a,o,h=i.x,l=i.y,c=Mt(h-this.long0);return t=Math.pow((1+this.e*Math.sin(l))/(1-this.e*Math.sin(l)),this.alfa*this.e/2),e=2*(Math.atan(this.k*Math.pow(Math.tan(l/2+this.s45),this.alfa)/t)-this.s45),n=-c*this.alfa,s=Math.asin(Math.cos(this.ad)*Math.sin(e)+Math.sin(this.ad)*Math.cos(e)*Math.cos(n)),r=Math.asin(Math.cos(e)*Math.sin(n)/Math.cos(s)),a=this.n*r,o=this.ro0*Math.pow(Math.tan(this.s0/2+this.s45),this.n)/Math.pow(Math.tan(s/2+this.s45),this.n),i.y=o*Math.cos(a)/1,i.x=o*Math.sin(a)/1,this.czech||(i.y*=-1,i.x*=-1),i}function FE(i){var t,e,n,s,r,a,o,h,l=i.x;i.x=i.y,i.y=l,this.czech||(i.y*=-1,i.x*=-1),a=Math.sqrt(i.x*i.x+i.y*i.y),r=Math.atan2(i.y,i.x),s=r/Math.sin(this.s0),n=2*(Math.atan(Math.pow(this.ro0/a,1/this.n)*Math.tan(this.s0/2+this.s45))-this.s45),t=Math.asin(Math.cos(this.ad)*Math.sin(n)-Math.sin(this.ad)*Math.cos(n)*Math.cos(s)),e=Math.asin(Math.cos(n)*Math.sin(s)/Math.cos(t)),i.x=this.long0-e/this.alfa,o=t,h=0;var c=0;do i.y=2*(Math.atan(Math.pow(this.k,-1/this.alfa)*Math.pow(Math.tan(t/2+this.s45),1/this.alfa)*Math.pow((1+this.e*Math.sin(o))/(1-this.e*Math.sin(o)),this.e/2))-this.s45),Math.abs(o-i.y)<1e-10&&(h=1),o=i.y,c+=1;while(h===0&&c<15);return c>=15?null:i}var BE=["Krovak","krovak"];const zE={init:UE,forward:OE,inverse:FE,names:BE};function Fe(i,t,e,n,s){return i*s-t*Math.sin(2*s)+e*Math.sin(4*s)-n*Math.sin(6*s)}function Sr(i){return 1-.25*i*(1+i/16*(3+1.25*i))}function Er(i){return .375*i*(1+.25*i*(1+.46875*i))}function br(i){return .05859375*i*i*(1+.75*i)}function Ar(i){return i*i*i*(35/3072)}function Rs(i,t,e){var n=t*e;return i/Math.sqrt(1-n*n)}function dn(i){return Math.abs(i)<et?i:i-yr(i)*Math.PI}function Pa(i,t,e,n,s){var r,a;r=i/t;for(var o=0;o<15;o++)if(a=(i-(t*r-e*Math.sin(2*r)+n*Math.sin(4*r)-s*Math.sin(6*r)))/(t-2*e*Math.cos(2*r)+4*n*Math.cos(4*r)-6*s*Math.cos(6*r)),r+=a,Math.abs(a)<=1e-10)return r;return NaN}function GE(){this.sphere||(this.e0=Sr(this.es),this.e1=Er(this.es),this.e2=br(this.es),this.e3=Ar(this.es),this.ml0=this.a*Fe(this.e0,this.e1,this.e2,this.e3,this.lat0))}function kE(i){var t,e,n=i.x,s=i.y;if(n=Mt(n-this.long0),this.sphere)t=this.a*Math.asin(Math.cos(s)*Math.sin(n)),e=this.a*(Math.atan2(Math.tan(s),Math.cos(n))-this.lat0);else{var r=Math.sin(s),a=Math.cos(s),o=Rs(this.a,this.e,r),h=Math.tan(s)*Math.tan(s),l=n*Math.cos(s),c=l*l,u=this.es*a*a/(1-this.es),f=this.a*Fe(this.e0,this.e1,this.e2,this.e3,s);t=o*l*(1-c*h*(1/6-(8-h+8*u)*c/120)),e=f-this.ml0+o*r/a*c*(.5+(5-h+6*u)*c/24)}return i.x=t+this.x0,i.y=e+this.y0,i}function HE(i){i.x-=this.x0,i.y-=this.y0;var t=i.x/this.a,e=i.y/this.a,n,s;if(this.sphere){var r=e+this.lat0;n=Math.asin(Math.sin(r)*Math.cos(t)),s=Math.atan2(Math.tan(t),Math.cos(r))}else{var a=this.ml0/this.a+e,o=Pa(a,this.e0,this.e1,this.e2,this.e3);if(Math.abs(Math.abs(o)-et)<=xt)return i.x=this.long0,i.y=et,e<0&&(i.y*=-1),i;var h=Rs(this.a,this.e,Math.sin(o)),l=h*h*h/this.a/this.a*(1-this.es),c=Math.pow(Math.tan(o),2),u=t*this.a/h,f=u*u;n=o-h*Math.tan(o)/l*u*u*(.5-(1+3*c)*u*u/24),s=u*(1-f*(c/3+(1+3*c)*c*f/15))/Math.cos(o)}return i.x=Mt(s+this.long0),i.y=dn(n),i}var VE=["Cassini","Cassini_Soldner","cass"];const WE={init:GE,forward:kE,inverse:HE,names:VE};function sn(i,t){var e;return i>1e-7?(e=i*t,(1-i*i)*(t/(1-e*e)-.5/i*Math.log((1-e)/(1+e)))):2*t}var XE=1,$E=2,qE=3,YE=4;function jE(){var i=Math.abs(this.lat0);if(Math.abs(i-et)<xt?this.mode=this.lat0<0?this.S_POLE:this.N_POLE:Math.abs(i)<xt?this.mode=this.EQUIT:this.mode=this.OBLIQ,this.es>0){var t;switch(this.qp=sn(this.e,1),this.mmf=.5/(1-this.es),this.apa=sb(this.es),this.mode){case this.N_POLE:this.dd=1;break;case this.S_POLE:this.dd=1;break;case this.EQUIT:this.rq=Math.sqrt(.5*this.qp),this.dd=1/this.rq,this.xmf=1,this.ymf=.5*this.qp;break;case this.OBLIQ:this.rq=Math.sqrt(.5*this.qp),t=Math.sin(this.lat0),this.sinb1=sn(this.e,t)/this.qp,this.cosb1=Math.sqrt(1-this.sinb1*this.sinb1),this.dd=Math.cos(this.lat0)/(Math.sqrt(1-this.es*t*t)*this.rq*this.cosb1),this.ymf=(this.xmf=this.rq)/this.dd,this.xmf*=this.dd;break}}else this.mode===this.OBLIQ&&(this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0))}function KE(i){var t,e,n,s,r,a,o,h,l,c,u=i.x,f=i.y;if(u=Mt(u-this.long0),this.sphere){if(r=Math.sin(f),c=Math.cos(f),n=Math.cos(u),this.mode===this.OBLIQ||this.mode===this.EQUIT){if(e=this.mode===this.EQUIT?1+c*n:1+this.sinph0*r+this.cosph0*c*n,e<=xt)return null;e=Math.sqrt(2/e),t=e*c*Math.sin(u),e*=this.mode===this.EQUIT?r:this.cosph0*r-this.sinph0*c*n}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(n=-n),Math.abs(f+this.lat0)<xt)return null;e=ee-f*.5,e=2*(this.mode===this.S_POLE?Math.cos(e):Math.sin(e)),t=e*Math.sin(u),e*=n}}else{switch(o=0,h=0,l=0,n=Math.cos(u),s=Math.sin(u),r=Math.sin(f),a=sn(this.e,r),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(o=a/this.qp,h=Math.sqrt(1-o*o)),this.mode){case this.OBLIQ:l=1+this.sinb1*o+this.cosb1*h*n;break;case this.EQUIT:l=1+h*n;break;case this.N_POLE:l=et+f,a=this.qp-a;break;case this.S_POLE:l=f-et,a=this.qp+a;break}if(Math.abs(l)<xt)return null;switch(this.mode){case this.OBLIQ:case this.EQUIT:l=Math.sqrt(2/l),this.mode===this.OBLIQ?e=this.ymf*l*(this.cosb1*o-this.sinb1*h*n):e=(l=Math.sqrt(2/(1+h*n)))*o*this.ymf,t=this.xmf*l*h*s;break;case this.N_POLE:case this.S_POLE:a>=0?(t=(l=Math.sqrt(a))*s,e=n*(this.mode===this.S_POLE?l:-l)):t=e=0;break}}return i.x=this.a*t+this.x0,i.y=this.a*e+this.y0,i}function ZE(i){i.x-=this.x0,i.y-=this.y0;var t=i.x/this.a,e=i.y/this.a,n,s,r,a,o,h,l;if(this.sphere){var c=0,u,f=0;if(u=Math.sqrt(t*t+e*e),s=u*.5,s>1)return null;switch(s=2*Math.asin(s),(this.mode===this.OBLIQ||this.mode===this.EQUIT)&&(f=Math.sin(s),c=Math.cos(s)),this.mode){case this.EQUIT:s=Math.abs(u)<=xt?0:Math.asin(e*f/u),t*=f,e=c*u;break;case this.OBLIQ:s=Math.abs(u)<=xt?this.lat0:Math.asin(c*this.sinph0+e*f*this.cosph0/u),t*=f*this.cosph0,e=(c-Math.sin(s)*this.sinph0)*u;break;case this.N_POLE:e=-e,s=et-s;break;case this.S_POLE:s-=et;break}n=e===0&&(this.mode===this.EQUIT||this.mode===this.OBLIQ)?0:Math.atan2(t,e)}else{if(l=0,this.mode===this.OBLIQ||this.mode===this.EQUIT){if(t/=this.dd,e*=this.dd,h=Math.sqrt(t*t+e*e),h<xt)return i.x=this.long0,i.y=this.lat0,i;a=2*Math.asin(.5*h/this.rq),r=Math.cos(a),t*=a=Math.sin(a),this.mode===this.OBLIQ?(l=r*this.sinb1+e*a*this.cosb1/h,o=this.qp*l,e=h*this.cosb1*r-e*this.sinb1*a):(l=e*a/h,o=this.qp*l,e=h*r)}else if(this.mode===this.N_POLE||this.mode===this.S_POLE){if(this.mode===this.N_POLE&&(e=-e),o=t*t+e*e,!o)return i.x=this.long0,i.y=this.lat0,i;l=1-o/this.qp,this.mode===this.S_POLE&&(l=-l)}n=Math.atan2(t,e),s=rb(Math.asin(l),this.apa)}return i.x=Mt(this.long0+n),i.y=s,i}var JE=.3333333333333333,QE=.17222222222222222,tb=.10257936507936508,eb=.06388888888888888,ib=.0664021164021164,nb=.016415012942191543;function sb(i){var t,e=[];return e[0]=i*JE,t=i*i,e[0]+=t*QE,e[1]=t*eb,t*=i,e[0]+=t*tb,e[1]+=t*ib,e[2]=t*nb,e}function rb(i,t){var e=i+i;return i+t[0]*Math.sin(e)+t[1]*Math.sin(e+e)+t[2]*Math.sin(e+e+e)}var ab=["Lambert Azimuthal Equal Area","Lambert_Azimuthal_Equal_Area","laea"];const ob={init:jE,forward:KE,inverse:ZE,names:ab,S_POLE:XE,N_POLE:$E,EQUIT:qE,OBLIQ:YE};function ln(i){return Math.abs(i)>1&&(i=i>1?1:-1),Math.asin(i)}function hb(){Math.abs(this.lat1+this.lat2)<xt||(this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e3=Math.sqrt(this.es),this.sin_po=Math.sin(this.lat1),this.cos_po=Math.cos(this.lat1),this.t1=this.sin_po,this.con=this.sin_po,this.ms1=Ti(this.e3,this.sin_po,this.cos_po),this.qs1=sn(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat2),this.cos_po=Math.cos(this.lat2),this.t2=this.sin_po,this.ms2=Ti(this.e3,this.sin_po,this.cos_po),this.qs2=sn(this.e3,this.sin_po),this.sin_po=Math.sin(this.lat0),this.cos_po=Math.cos(this.lat0),this.t3=this.sin_po,this.qs0=sn(this.e3,this.sin_po),Math.abs(this.lat1-this.lat2)>xt?this.ns0=(this.ms1*this.ms1-this.ms2*this.ms2)/(this.qs2-this.qs1):this.ns0=this.con,this.c=this.ms1*this.ms1+this.ns0*this.qs1,this.rh=this.a*Math.sqrt(this.c-this.ns0*this.qs0)/this.ns0)}function lb(i){var t=i.x,e=i.y;this.sin_phi=Math.sin(e),this.cos_phi=Math.cos(e);var n=sn(this.e3,this.sin_phi),s=this.a*Math.sqrt(this.c-this.ns0*n)/this.ns0,r=this.ns0*Mt(t-this.long0),a=s*Math.sin(r)+this.x0,o=this.rh-s*Math.cos(r)+this.y0;return i.x=a,i.y=o,i}function cb(i){var t,e,n,s,r,a;return i.x-=this.x0,i.y=this.rh-i.y+this.y0,this.ns0>=0?(t=Math.sqrt(i.x*i.x+i.y*i.y),n=1):(t=-Math.sqrt(i.x*i.x+i.y*i.y),n=-1),s=0,t!==0&&(s=Math.atan2(n*i.x,n*i.y)),n=t*this.ns0/this.a,this.sphere?a=Math.asin((this.c-n*n)/(2*this.ns0)):(e=(this.c-n*n)/this.ns0,a=this.phi1z(this.e3,e)),r=Mt(s/this.ns0+this.long0),i.x=r,i.y=a,i}function ub(i,t){var e,n,s,r,a,o=ln(.5*t);if(i<xt)return o;for(var h=i*i,l=1;l<=25;l++)if(e=Math.sin(o),n=Math.cos(o),s=i*e,r=1-s*s,a=.5*r*r/n*(t/(1-h)-e/r+.5/i*Math.log((1-s)/(1+s))),o=o+a,Math.abs(a)<=1e-7)return o;return null}var fb=["Albers_Conic_Equal_Area","Albers","aea"];const db={init:hb,forward:lb,inverse:cb,names:fb,phi1z:ub};function pb(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0),this.infinity_dist=1e3*this.a,this.rc=1}function mb(i){var t,e,n,s,r,a,o,h,l=i.x,c=i.y;return n=Mt(l-this.long0),t=Math.sin(c),e=Math.cos(c),s=Math.cos(n),a=this.sin_p14*t+this.cos_p14*e*s,r=1,a>0||Math.abs(a)<=xt?(o=this.x0+this.a*r*e*Math.sin(n)/a,h=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)/a):(o=this.x0+this.infinity_dist*e*Math.sin(n),h=this.y0+this.infinity_dist*(this.cos_p14*t-this.sin_p14*e*s)),i.x=o,i.y=h,i}function gb(i){var t,e,n,s,r,a;return i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,i.x/=this.k0,i.y/=this.k0,(t=Math.sqrt(i.x*i.x+i.y*i.y))?(s=Math.atan2(t,this.rc),e=Math.sin(s),n=Math.cos(s),a=ln(n*this.sin_p14+i.y*e*this.cos_p14/t),r=Math.atan2(i.x*e,t*this.cos_p14*n-i.y*this.sin_p14*e),r=Mt(this.long0+r)):(a=this.phic0,r=0),i.x=r,i.y=a,i}var _b=["gnom"];const vb={init:pb,forward:mb,inverse:gb,names:_b};function xb(i,t){var e=1-(1-i*i)/(2*i)*Math.log((1-i)/(1+i));if(Math.abs(Math.abs(t)-e)<1e-6)return t<0?-1*et:et;for(var n=Math.asin(.5*t),s,r,a,o,h=0;h<30;h++)if(r=Math.sin(n),a=Math.cos(n),o=i*r,s=Math.pow(1-o*o,2)/(2*a)*(t/(1-i*i)-r/(1-o*o)+.5/i*Math.log((1-o)/(1+o))),n+=s,Math.abs(s)<=1e-10)return n;return NaN}function Mb(){this.sphere||(this.k0=Ti(this.e,Math.sin(this.lat_ts),Math.cos(this.lat_ts)))}function yb(i){var t=i.x,e=i.y,n,s,r=Mt(t-this.long0);if(this.sphere)n=this.x0+this.a*r*Math.cos(this.lat_ts),s=this.y0+this.a*Math.sin(e)/Math.cos(this.lat_ts);else{var a=sn(this.e,Math.sin(e));n=this.x0+this.a*this.k0*r,s=this.y0+this.a*a*.5/this.k0}return i.x=n,i.y=s,i}function Sb(i){i.x-=this.x0,i.y-=this.y0;var t,e;return this.sphere?(t=Mt(this.long0+i.x/this.a/Math.cos(this.lat_ts)),e=Math.asin(i.y/this.a*Math.cos(this.lat_ts))):(e=xb(this.e,2*i.y*this.k0/this.a),t=Mt(this.long0+i.x/(this.a*this.k0))),i.x=t,i.y=e,i}var Eb=["cea"];const bb={init:Mb,forward:yb,inverse:Sb,names:Eb};function Ab(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Equidistant Cylindrical (Plate Carre)",this.rc=Math.cos(this.lat_ts)}function wb(i){var t=i.x,e=i.y,n=Mt(t-this.long0),s=dn(e-this.lat0);return i.x=this.x0+this.a*n*this.rc,i.y=this.y0+this.a*s,i}function Tb(i){var t=i.x,e=i.y;return i.x=Mt(this.long0+(t-this.x0)/(this.a*this.rc)),i.y=dn(this.lat0+(e-this.y0)/this.a),i}var Cb=["Equirectangular","Equidistant_Cylindrical","eqc"];const Rb={init:Ab,forward:wb,inverse:Tb,names:Cb};var Bu=20;function Pb(){this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Sr(this.es),this.e1=Er(this.es),this.e2=br(this.es),this.e3=Ar(this.es),this.ml0=this.a*Fe(this.e0,this.e1,this.e2,this.e3,this.lat0)}function Lb(i){var t=i.x,e=i.y,n,s,r,a=Mt(t-this.long0);if(r=a*Math.sin(e),this.sphere)Math.abs(e)<=xt?(n=this.a*a,s=-1*this.a*this.lat0):(n=this.a*Math.sin(r)/Math.tan(e),s=this.a*(dn(e-this.lat0)+(1-Math.cos(r))/Math.tan(e)));else if(Math.abs(e)<=xt)n=this.a*a,s=-1*this.ml0;else{var o=Rs(this.a,this.e,Math.sin(e))/Math.tan(e);n=o*Math.sin(r),s=this.a*Fe(this.e0,this.e1,this.e2,this.e3,e)-this.ml0+o*(1-Math.cos(r))}return i.x=n+this.x0,i.y=s+this.y0,i}function Ib(i){var t,e,n,s,r,a,o,h,l;if(n=i.x-this.x0,s=i.y-this.y0,this.sphere)if(Math.abs(s+this.a*this.lat0)<=xt)t=Mt(n/this.a+this.long0),e=0;else{a=this.lat0+s/this.a,o=n*n/this.a/this.a+a*a,h=a;var c;for(r=Bu;r;--r)if(c=Math.tan(h),l=-1*(a*(h*c+1)-h-.5*(h*h+o)*c)/((h-a)/c-1),h+=l,Math.abs(l)<=xt){e=h;break}t=Mt(this.long0+Math.asin(n*Math.tan(h)/this.a)/Math.sin(e))}else if(Math.abs(s+this.ml0)<=xt)e=0,t=Mt(this.long0+n/this.a);else{a=(this.ml0+s)/this.a,o=n*n/this.a/this.a+a*a,h=a;var u,f,p,g,_;for(r=Bu;r;--r)if(_=this.e*Math.sin(h),u=Math.sqrt(1-_*_)*Math.tan(h),f=this.a*Fe(this.e0,this.e1,this.e2,this.e3,h),p=this.e0-2*this.e1*Math.cos(2*h)+4*this.e2*Math.cos(4*h)-6*this.e3*Math.cos(6*h),g=f/this.a,l=(a*(u*g+1)-g-.5*u*(g*g+o))/(this.es*Math.sin(2*h)*(g*g+o-2*a*g)/(4*u)+(a-g)*(u*p-2/Math.sin(2*h))-p),h-=l,Math.abs(l)<=xt){e=h;break}u=Math.sqrt(1-this.es*Math.pow(Math.sin(e),2))*Math.tan(e),t=Mt(this.long0+Math.asin(n*u/this.a)/Math.sin(e))}return i.x=t,i.y=e,i}var Db=["Polyconic","poly"];const Nb={init:Pb,forward:Lb,inverse:Ib,names:Db};function Ub(){this.A=[],this.A[1]=.6399175073,this.A[2]=-.1358797613,this.A[3]=.063294409,this.A[4]=-.02526853,this.A[5]=.0117879,this.A[6]=-.0055161,this.A[7]=.0026906,this.A[8]=-.001333,this.A[9]=67e-5,this.A[10]=-34e-5,this.B_re=[],this.B_im=[],this.B_re[1]=.7557853228,this.B_im[1]=0,this.B_re[2]=.249204646,this.B_im[2]=.003371507,this.B_re[3]=-.001541739,this.B_im[3]=.04105856,this.B_re[4]=-.10162907,this.B_im[4]=.01727609,this.B_re[5]=-.26623489,this.B_im[5]=-.36249218,this.B_re[6]=-.6870983,this.B_im[6]=-1.1651967,this.C_re=[],this.C_im=[],this.C_re[1]=1.3231270439,this.C_im[1]=0,this.C_re[2]=-.577245789,this.C_im[2]=-.007809598,this.C_re[3]=.508307513,this.C_im[3]=-.112208952,this.C_re[4]=-.15094762,this.C_im[4]=.18200602,this.C_re[5]=1.01418179,this.C_im[5]=1.64497696,this.C_re[6]=1.9660549,this.C_im[6]=2.5127645,this.D=[],this.D[1]=1.5627014243,this.D[2]=.5185406398,this.D[3]=-.03333098,this.D[4]=-.1052906,this.D[5]=-.0368594,this.D[6]=.007317,this.D[7]=.0122,this.D[8]=.00394,this.D[9]=-.0013}function Ob(i){var t,e=i.x,n=i.y,s=n-this.lat0,r=e-this.long0,a=s/tr*1e-5,o=r,h=1,l=0;for(t=1;t<=10;t++)h=h*a,l=l+this.A[t]*h;var c=l,u=o,f=1,p=0,g,_,d=0,m=0;for(t=1;t<=6;t++)g=f*c-p*u,_=p*c+f*u,f=g,p=_,d=d+this.B_re[t]*f-this.B_im[t]*p,m=m+this.B_im[t]*f+this.B_re[t]*p;return i.x=m*this.a+this.x0,i.y=d*this.a+this.y0,i}function Fb(i){var t,e=i.x,n=i.y,s=e-this.x0,r=n-this.y0,a=r/this.a,o=s/this.a,h=1,l=0,c,u,f=0,p=0;for(t=1;t<=6;t++)c=h*a-l*o,u=l*a+h*o,h=c,l=u,f=f+this.C_re[t]*h-this.C_im[t]*l,p=p+this.C_im[t]*h+this.C_re[t]*l;for(var g=0;g<this.iterations;g++){var _=f,d=p,m,y,x=a,S=o;for(t=2;t<=6;t++)m=_*f-d*p,y=d*f+_*p,_=m,d=y,x=x+(t-1)*(this.B_re[t]*_-this.B_im[t]*d),S=S+(t-1)*(this.B_im[t]*_+this.B_re[t]*d);_=1,d=0;var R=this.B_re[1],T=this.B_im[1];for(t=2;t<=6;t++)m=_*f-d*p,y=d*f+_*p,_=m,d=y,R=R+t*(this.B_re[t]*_-this.B_im[t]*d),T=T+t*(this.B_im[t]*_+this.B_re[t]*d);var C=R*R+T*T;f=(x*R+S*T)/C,p=(S*R-x*T)/C}var P=f,tt=p,v=1,E=0;for(t=1;t<=9;t++)v=v*P,E=E+this.D[t]*v;var W=this.lat0+E*tr*1e5,z=this.long0+tt;return i.x=z,i.y=W,i}var Bb=["New_Zealand_Map_Grid","nzmg"];const zb={init:Ub,forward:Ob,inverse:Fb,names:Bb};function Gb(){}function kb(i){var t=i.x,e=i.y,n=Mt(t-this.long0),s=this.x0+this.a*n,r=this.y0+this.a*Math.log(Math.tan(Math.PI/4+e/2.5))*1.25;return i.x=s,i.y=r,i}function Hb(i){i.x-=this.x0,i.y-=this.y0;var t=Mt(this.long0+i.x/this.a),e=2.5*(Math.atan(Math.exp(.8*i.y/this.a))-Math.PI/4);return i.x=t,i.y=e,i}var Vb=["Miller_Cylindrical","mill"];const Wb={init:Gb,forward:kb,inverse:Hb,names:Vb};var Xb=20;function $b(){this.sphere?(this.n=1,this.m=0,this.es=0,this.C_y=Math.sqrt((this.m+1)/this.n),this.C_x=this.C_y/(this.m+1)):this.en=Pl(this.es)}function qb(i){var t,e,n=i.x,s=i.y;if(n=Mt(n-this.long0),this.sphere){if(!this.m)s=this.n!==1?Math.asin(this.n*Math.sin(s)):s;else for(var r=this.n*Math.sin(s),a=Xb;a;--a){var o=(this.m*s+Math.sin(s)-r)/(this.m+Math.cos(s));if(s-=o,Math.abs(o)<xt)break}t=this.a*this.C_x*n*(this.m+Math.cos(s)),e=this.a*this.C_y*s}else{var h=Math.sin(s),l=Math.cos(s);e=this.a*Ns(s,h,l,this.en),t=this.a*n*l/Math.sqrt(1-this.es*h*h)}return i.x=t,i.y=e,i}function Yb(i){var t,e,n,s;return i.x-=this.x0,n=i.x/this.a,i.y-=this.y0,t=i.y/this.a,this.sphere?(t/=this.C_y,n=n/(this.C_x*(this.m+Math.cos(t))),this.m?t=ln((this.m*t+Math.sin(t))/this.n):this.n!==1&&(t=ln(Math.sin(t)/this.n)),n=Mt(n+this.long0),t=dn(t)):(t=Ll(i.y/this.a,this.es,this.en),s=Math.abs(t),s<et?(s=Math.sin(t),e=this.long0+i.x*Math.sqrt(1-this.es*s*s)/(this.a*Math.cos(t)),n=Mt(e)):s-xt<et&&(n=this.long0)),i.x=n,i.y=t,i}var jb=["Sinusoidal","sinu"];const Kb={init:$b,forward:qb,inverse:Yb,names:jb};function Zb(){}function Jb(i){for(var t=i.x,e=i.y,n=Mt(t-this.long0),s=e,r=Math.PI*Math.sin(e);;){var a=-(s+Math.sin(s)-r)/(1+Math.cos(s));if(s+=a,Math.abs(a)<xt)break}s/=2,Math.PI/2-Math.abs(e)<xt&&(n=0);var o=.900316316158*this.a*n*Math.cos(s)+this.x0,h=1.4142135623731*this.a*Math.sin(s)+this.y0;return i.x=o,i.y=h,i}function Qb(i){var t,e;i.x-=this.x0,i.y-=this.y0,e=i.y/(1.4142135623731*this.a),Math.abs(e)>.999999999999&&(e=.999999999999),t=Math.asin(e);var n=Mt(this.long0+i.x/(.900316316158*this.a*Math.cos(t)));n<-Math.PI&&(n=-Math.PI),n>Math.PI&&(n=Math.PI),e=(2*t+Math.sin(2*t))/Math.PI,Math.abs(e)>1&&(e=1);var s=Math.asin(e);return i.x=n,i.y=s,i}var tA=["Mollweide","moll"];const eA={init:Zb,forward:Jb,inverse:Qb,names:tA};function iA(){Math.abs(this.lat1+this.lat2)<xt||(this.lat2=this.lat2||this.lat1,this.temp=this.b/this.a,this.es=1-Math.pow(this.temp,2),this.e=Math.sqrt(this.es),this.e0=Sr(this.es),this.e1=Er(this.es),this.e2=br(this.es),this.e3=Ar(this.es),this.sinphi=Math.sin(this.lat1),this.cosphi=Math.cos(this.lat1),this.ms1=Ti(this.e,this.sinphi,this.cosphi),this.ml1=Fe(this.e0,this.e1,this.e2,this.e3,this.lat1),Math.abs(this.lat1-this.lat2)<xt?this.ns=this.sinphi:(this.sinphi=Math.sin(this.lat2),this.cosphi=Math.cos(this.lat2),this.ms2=Ti(this.e,this.sinphi,this.cosphi),this.ml2=Fe(this.e0,this.e1,this.e2,this.e3,this.lat2),this.ns=(this.ms1-this.ms2)/(this.ml2-this.ml1)),this.g=this.ml1+this.ms1/this.ns,this.ml0=Fe(this.e0,this.e1,this.e2,this.e3,this.lat0),this.rh=this.a*(this.g-this.ml0))}function nA(i){var t=i.x,e=i.y,n;if(this.sphere)n=this.a*(this.g-e);else{var s=Fe(this.e0,this.e1,this.e2,this.e3,e);n=this.a*(this.g-s)}var r=this.ns*Mt(t-this.long0),a=this.x0+n*Math.sin(r),o=this.y0+this.rh-n*Math.cos(r);return i.x=a,i.y=o,i}function sA(i){i.x-=this.x0,i.y=this.rh-i.y+this.y0;var t,e,n,s;this.ns>=0?(e=Math.sqrt(i.x*i.x+i.y*i.y),t=1):(e=-Math.sqrt(i.x*i.x+i.y*i.y),t=-1);var r=0;if(e!==0&&(r=Math.atan2(t*i.x,t*i.y)),this.sphere)return s=Mt(this.long0+r/this.ns),n=dn(this.g-e/this.a),i.x=s,i.y=n,i;var a=this.g-e/this.a;return n=Pa(a,this.e0,this.e1,this.e2,this.e3),s=Mt(this.long0+r/this.ns),i.x=s,i.y=n,i}var rA=["Equidistant_Conic","eqdc"];const aA={init:iA,forward:nA,inverse:sA,names:rA};function oA(){this.R=this.a}function hA(i){var t=i.x,e=i.y,n=Mt(t-this.long0),s,r;Math.abs(e)<=xt&&(s=this.x0+this.R*n,r=this.y0);var a=ln(2*Math.abs(e/Math.PI));(Math.abs(n)<=xt||Math.abs(Math.abs(e)-et)<=xt)&&(s=this.x0,e>=0?r=this.y0+Math.PI*this.R*Math.tan(.5*a):r=this.y0+Math.PI*this.R*-Math.tan(.5*a));var o=.5*Math.abs(Math.PI/n-n/Math.PI),h=o*o,l=Math.sin(a),c=Math.cos(a),u=c/(l+c-1),f=u*u,p=u*(2/l-1),g=p*p,_=Math.PI*this.R*(o*(u-g)+Math.sqrt(h*(u-g)*(u-g)-(g+h)*(f-g)))/(g+h);n<0&&(_=-_),s=this.x0+_;var d=h+u;return _=Math.PI*this.R*(p*d-o*Math.sqrt((g+h)*(h+1)-d*d))/(g+h),e>=0?r=this.y0+_:r=this.y0-_,i.x=s,i.y=r,i}function lA(i){var t,e,n,s,r,a,o,h,l,c,u,f,p;return i.x-=this.x0,i.y-=this.y0,u=Math.PI*this.R,n=i.x/u,s=i.y/u,r=n*n+s*s,a=-Math.abs(s)*(1+r),o=a-2*s*s+n*n,h=-2*a+1+2*s*s+r*r,p=s*s/h+(2*o*o*o/h/h/h-9*a*o/h/h)/27,l=(a-o*o/3/h)/h,c=2*Math.sqrt(-l/3),u=3*p/l/c,Math.abs(u)>1&&(u>=0?u=1:u=-1),f=Math.acos(u)/3,i.y>=0?e=(-c*Math.cos(f+Math.PI/3)-o/3/h)*Math.PI:e=-(-c*Math.cos(f+Math.PI/3)-o/3/h)*Math.PI,Math.abs(n)<xt?t=this.long0:t=Mt(this.long0+Math.PI*(r-1+Math.sqrt(1+2*(n*n-s*s)+r*r))/2/n),i.x=t,i.y=e,i}var cA=["Van_der_Grinten_I","VanDerGrinten","vandg"];const uA={init:oA,forward:hA,inverse:lA,names:cA};function fA(){this.sin_p12=Math.sin(this.lat0),this.cos_p12=Math.cos(this.lat0)}function dA(i){var t=i.x,e=i.y,n=Math.sin(i.y),s=Math.cos(i.y),r=Mt(t-this.long0),a,o,h,l,c,u,f,p,g,_,d,m,y,x,S,R,T,C,P,tt,v,E,W;return this.sphere?Math.abs(this.sin_p12-1)<=xt?(i.x=this.x0+this.a*(et-e)*Math.sin(r),i.y=this.y0-this.a*(et-e)*Math.cos(r),i):Math.abs(this.sin_p12+1)<=xt?(i.x=this.x0+this.a*(et+e)*Math.sin(r),i.y=this.y0+this.a*(et+e)*Math.cos(r),i):(C=this.sin_p12*n+this.cos_p12*s*Math.cos(r),R=Math.acos(C),T=R?R/Math.sin(R):1,i.x=this.x0+this.a*T*s*Math.sin(r),i.y=this.y0+this.a*T*(this.cos_p12*n-this.sin_p12*s*Math.cos(r)),i):(a=Sr(this.es),o=Er(this.es),h=br(this.es),l=Ar(this.es),Math.abs(this.sin_p12-1)<=xt?(c=this.a*Fe(a,o,h,l,et),u=this.a*Fe(a,o,h,l,e),i.x=this.x0+(c-u)*Math.sin(r),i.y=this.y0-(c-u)*Math.cos(r),i):Math.abs(this.sin_p12+1)<=xt?(c=this.a*Fe(a,o,h,l,et),u=this.a*Fe(a,o,h,l,e),i.x=this.x0+(c+u)*Math.sin(r),i.y=this.y0+(c+u)*Math.cos(r),i):(f=n/s,p=Rs(this.a,this.e,this.sin_p12),g=Rs(this.a,this.e,n),_=Math.atan((1-this.es)*f+this.es*p*this.sin_p12/(g*s)),d=Math.atan2(Math.sin(r),this.cos_p12*Math.tan(_)-this.sin_p12*Math.cos(r)),d===0?P=Math.asin(this.cos_p12*Math.sin(_)-this.sin_p12*Math.cos(_)):Math.abs(Math.abs(d)-Math.PI)<=xt?P=-Math.asin(this.cos_p12*Math.sin(_)-this.sin_p12*Math.cos(_)):P=Math.asin(Math.sin(r)*Math.cos(_)/Math.sin(d)),m=this.e*this.sin_p12/Math.sqrt(1-this.es),y=this.e*this.cos_p12*Math.cos(d)/Math.sqrt(1-this.es),x=m*y,S=y*y,tt=P*P,v=tt*P,E=v*P,W=E*P,R=p*P*(1-tt*S*(1-S)/6+v/8*x*(1-2*S)+E/120*(S*(4-7*S)-3*m*m*(1-7*S))-W/48*x),i.x=this.x0+R*Math.sin(d),i.y=this.y0+R*Math.cos(d),i))}function pA(i){i.x-=this.x0,i.y-=this.y0;var t,e,n,s,r,a,o,h,l,c,u,f,p,g,_,d,m,y,x,S,R,T,C,P;return this.sphere?(t=Math.sqrt(i.x*i.x+i.y*i.y),t>2*et*this.a?void 0:(e=t/this.a,n=Math.sin(e),s=Math.cos(e),r=this.long0,Math.abs(t)<=xt?a=this.lat0:(a=ln(s*this.sin_p12+i.y*n*this.cos_p12/t),o=Math.abs(this.lat0)-et,Math.abs(o)<=xt?this.lat0>=0?r=Mt(this.long0+Math.atan2(i.x,-i.y)):r=Mt(this.long0-Math.atan2(-i.x,i.y)):r=Mt(this.long0+Math.atan2(i.x*n,t*this.cos_p12*s-i.y*this.sin_p12*n))),i.x=r,i.y=a,i)):(h=Sr(this.es),l=Er(this.es),c=br(this.es),u=Ar(this.es),Math.abs(this.sin_p12-1)<=xt?(f=this.a*Fe(h,l,c,u,et),t=Math.sqrt(i.x*i.x+i.y*i.y),p=f-t,a=Pa(p/this.a,h,l,c,u),r=Mt(this.long0+Math.atan2(i.x,-1*i.y)),i.x=r,i.y=a,i):Math.abs(this.sin_p12+1)<=xt?(f=this.a*Fe(h,l,c,u,et),t=Math.sqrt(i.x*i.x+i.y*i.y),p=t-f,a=Pa(p/this.a,h,l,c,u),r=Mt(this.long0+Math.atan2(i.x,i.y)),i.x=r,i.y=a,i):(t=Math.sqrt(i.x*i.x+i.y*i.y),d=Math.atan2(i.x,i.y),g=Rs(this.a,this.e,this.sin_p12),m=Math.cos(d),y=this.e*this.cos_p12*m,x=-y*y/(1-this.es),S=3*this.es*(1-x)*this.sin_p12*this.cos_p12*m/(1-this.es),R=t/g,T=R-x*(1+x)*Math.pow(R,3)/6-S*(1+3*x)*Math.pow(R,4)/24,C=1-x*T*T/2-R*T*T*T/6,_=Math.asin(this.sin_p12*Math.cos(T)+this.cos_p12*Math.sin(T)*m),r=Mt(this.long0+Math.asin(Math.sin(d)*Math.sin(T)/Math.cos(_))),P=Math.sin(_),a=Math.atan2((P-this.es*C*this.sin_p12)*Math.tan(_),P*(1-this.es)),i.x=r,i.y=a,i))}var mA=["Azimuthal_Equidistant","aeqd"];const gA={init:fA,forward:dA,inverse:pA,names:mA};function _A(){this.sin_p14=Math.sin(this.lat0),this.cos_p14=Math.cos(this.lat0)}function vA(i){var t,e,n,s,r,a,o,h,l=i.x,c=i.y;return n=Mt(l-this.long0),t=Math.sin(c),e=Math.cos(c),s=Math.cos(n),a=this.sin_p14*t+this.cos_p14*e*s,r=1,(a>0||Math.abs(a)<=xt)&&(o=this.a*r*e*Math.sin(n),h=this.y0+this.a*r*(this.cos_p14*t-this.sin_p14*e*s)),i.x=o,i.y=h,i}function xA(i){var t,e,n,s,r,a,o;return i.x-=this.x0,i.y-=this.y0,t=Math.sqrt(i.x*i.x+i.y*i.y),e=ln(t/this.a),n=Math.sin(e),s=Math.cos(e),a=this.long0,Math.abs(t)<=xt?(o=this.lat0,i.x=a,i.y=o,i):(o=ln(s*this.sin_p14+i.y*n*this.cos_p14/t),r=Math.abs(this.lat0)-et,Math.abs(r)<=xt?(this.lat0>=0?a=Mt(this.long0+Math.atan2(i.x,-i.y)):a=Mt(this.long0-Math.atan2(-i.x,i.y)),i.x=a,i.y=o,i):(a=Mt(this.long0+Math.atan2(i.x*n,t*this.cos_p14*s-i.y*this.sin_p14*n)),i.x=a,i.y=o,i))}var MA=["ortho"];const yA={init:_A,forward:vA,inverse:xA,names:MA};var ce={FRONT:1,RIGHT:2,BACK:3,LEFT:4,TOP:5,BOTTOM:6},ie={AREA_0:1,AREA_1:2,AREA_2:3,AREA_3:4};function SA(){this.x0=this.x0||0,this.y0=this.y0||0,this.lat0=this.lat0||0,this.long0=this.long0||0,this.lat_ts=this.lat_ts||0,this.title=this.title||"Quadrilateralized Spherical Cube",this.lat0>=et-ee/2?this.face=ce.TOP:this.lat0<=-(et-ee/2)?this.face=ce.BOTTOM:Math.abs(this.long0)<=ee?this.face=ce.FRONT:Math.abs(this.long0)<=et+ee?this.face=this.long0>0?ce.RIGHT:ce.LEFT:this.face=ce.BACK,this.es!==0&&(this.one_minus_f=1-(this.a-this.b)/this.a,this.one_minus_f_squared=this.one_minus_f*this.one_minus_f)}function EA(i){var t={x:0,y:0},e,n,s,r,a,o,h={value:0};if(i.x-=this.long0,this.es!==0?e=Math.atan(this.one_minus_f_squared*Math.tan(i.y)):e=i.y,n=i.x,this.face===ce.TOP)r=et-e,n>=ee&&n<=et+ee?(h.value=ie.AREA_0,s=n-et):n>et+ee||n<=-(et+ee)?(h.value=ie.AREA_1,s=n>0?n-ge:n+ge):n>-(et+ee)&&n<=-ee?(h.value=ie.AREA_2,s=n+et):(h.value=ie.AREA_3,s=n);else if(this.face===ce.BOTTOM)r=et+e,n>=ee&&n<=et+ee?(h.value=ie.AREA_0,s=-n+et):n<ee&&n>=-ee?(h.value=ie.AREA_1,s=-n):n<-ee&&n>=-(et+ee)?(h.value=ie.AREA_2,s=-n-et):(h.value=ie.AREA_3,s=n>0?-n+ge:-n-ge);else{var l,c,u,f,p,g,_;this.face===ce.RIGHT?n=_s(n,+et):this.face===ce.BACK?n=_s(n,+ge):this.face===ce.LEFT&&(n=_s(n,-et)),f=Math.sin(e),p=Math.cos(e),g=Math.sin(n),_=Math.cos(n),l=p*_,c=p*g,u=f,this.face===ce.FRONT?(r=Math.acos(l),s=ha(r,u,c,h)):this.face===ce.RIGHT?(r=Math.acos(c),s=ha(r,u,-l,h)):this.face===ce.BACK?(r=Math.acos(-l),s=ha(r,u,-c,h)):this.face===ce.LEFT?(r=Math.acos(-c),s=ha(r,u,l,h)):(r=s=0,h.value=ie.AREA_0)}return o=Math.atan(12/ge*(s+Math.acos(Math.sin(s)*Math.cos(ee))-et)),a=Math.sqrt((1-Math.cos(r))/(Math.cos(o)*Math.cos(o))/(1-Math.cos(Math.atan(1/Math.cos(s))))),h.value===ie.AREA_1?o+=et:h.value===ie.AREA_2?o+=ge:h.value===ie.AREA_3&&(o+=1.5*ge),t.x=a*Math.cos(o),t.y=a*Math.sin(o),t.x=t.x*this.a+this.x0,t.y=t.y*this.a+this.y0,i.x=t.x,i.y=t.y,i}function bA(i){var t={lam:0,phi:0},e,n,s,r,a,o,h,l,c,u={value:0};if(i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a,n=Math.atan(Math.sqrt(i.x*i.x+i.y*i.y)),e=Math.atan2(i.y,i.x),i.x>=0&&i.x>=Math.abs(i.y)?u.value=ie.AREA_0:i.y>=0&&i.y>=Math.abs(i.x)?(u.value=ie.AREA_1,e-=et):i.x<0&&-i.x>=Math.abs(i.y)?(u.value=ie.AREA_2,e=e<0?e+ge:e-ge):(u.value=ie.AREA_3,e+=et),c=ge/12*Math.tan(e),a=Math.sin(c)/(Math.cos(c)-1/Math.sqrt(2)),o=Math.atan(a),s=Math.cos(e),r=Math.tan(n),h=1-s*s*r*r*(1-Math.cos(Math.atan(1/Math.cos(o)))),h<-1?h=-1:h>1&&(h=1),this.face===ce.TOP)l=Math.acos(h),t.phi=et-l,u.value===ie.AREA_0?t.lam=o+et:u.value===ie.AREA_1?t.lam=o<0?o+ge:o-ge:u.value===ie.AREA_2?t.lam=o-et:t.lam=o;else if(this.face===ce.BOTTOM)l=Math.acos(h),t.phi=l-et,u.value===ie.AREA_0?t.lam=-o+et:u.value===ie.AREA_1?t.lam=-o:u.value===ie.AREA_2?t.lam=-o-et:t.lam=o<0?-o-ge:-o+ge;else{var f,p,g;f=h,c=f*f,c>=1?g=0:g=Math.sqrt(1-c)*Math.sin(o),c+=g*g,c>=1?p=0:p=Math.sqrt(1-c),u.value===ie.AREA_1?(c=p,p=-g,g=c):u.value===ie.AREA_2?(p=-p,g=-g):u.value===ie.AREA_3&&(c=p,p=g,g=-c),this.face===ce.RIGHT?(c=f,f=-p,p=c):this.face===ce.BACK?(f=-f,p=-p):this.face===ce.LEFT&&(c=f,f=p,p=-c),t.phi=Math.acos(-g)-et,t.lam=Math.atan2(p,f),this.face===ce.RIGHT?t.lam=_s(t.lam,-et):this.face===ce.BACK?t.lam=_s(t.lam,-ge):this.face===ce.LEFT&&(t.lam=_s(t.lam,+et))}if(this.es!==0){var _,d,m;_=t.phi<0?1:0,d=Math.tan(t.phi),m=this.b/Math.sqrt(d*d+this.one_minus_f_squared),t.phi=Math.atan(Math.sqrt(this.a*this.a-m*m)/(this.one_minus_f*m)),_&&(t.phi=-t.phi)}return t.lam+=this.long0,i.x=t.lam,i.y=t.phi,i}function ha(i,t,e,n){var s;return i<xt?(n.value=ie.AREA_0,s=0):(s=Math.atan2(t,e),Math.abs(s)<=ee?n.value=ie.AREA_0:s>ee&&s<=et+ee?(n.value=ie.AREA_1,s-=et):s>et+ee||s<=-(et+ee)?(n.value=ie.AREA_2,s=s>=0?s-ge:s+ge):(n.value=ie.AREA_3,s+=et)),s}function _s(i,t){var e=i+t;return e<-ge?e+=dr:e>+ge&&(e-=dr),e}var AA=["Quadrilateralized Spherical Cube","Quadrilateralized_Spherical_Cube","qsc"];const wA={init:SA,forward:EA,inverse:bA,names:AA};var Hh=[[1,22199e-21,-715515e-10,31103e-10],[.9986,-482243e-9,-24897e-9,-13309e-10],[.9954,-83103e-8,-448605e-10,-986701e-12],[.99,-.00135364,-59661e-9,36777e-10],[.9822,-.00167442,-449547e-11,-572411e-11],[.973,-.00214868,-903571e-10,18736e-12],[.96,-.00305085,-900761e-10,164917e-11],[.9427,-.00382792,-653386e-10,-26154e-10],[.9216,-.00467746,-10457e-8,481243e-11],[.8962,-.00536223,-323831e-10,-543432e-11],[.8679,-.00609363,-113898e-9,332484e-11],[.835,-.00698325,-640253e-10,934959e-12],[.7986,-.00755338,-500009e-10,935324e-12],[.7597,-.00798324,-35971e-9,-227626e-11],[.7186,-.00851367,-701149e-10,-86303e-10],[.6732,-.00986209,-199569e-9,191974e-10],[.6213,-.010418,883923e-10,624051e-11],[.5722,-.00906601,182e-6,624051e-11],[.5322,-.00677797,275608e-9,624051e-11]],$s=[[-520417e-23,.0124,121431e-23,-845284e-16],[.062,.0124,-126793e-14,422642e-15],[.124,.0124,507171e-14,-160604e-14],[.186,.0123999,-190189e-13,600152e-14],[.248,.0124002,710039e-13,-224e-10],[.31,.0123992,-264997e-12,835986e-13],[.372,.0124029,988983e-12,-311994e-12],[.434,.0123893,-369093e-11,-435621e-12],[.4958,.0123198,-102252e-10,-345523e-12],[.5571,.0121916,-154081e-10,-582288e-12],[.6176,.0119938,-241424e-10,-525327e-12],[.6769,.011713,-320223e-10,-516405e-12],[.7346,.0113541,-397684e-10,-609052e-12],[.7903,.0109107,-489042e-10,-104739e-11],[.8435,.0103431,-64615e-9,-140374e-14],[.8936,.00969686,-64636e-9,-8547e-9],[.9394,.00840947,-192841e-9,-42106e-10],[.9761,.00616527,-256e-6,-42106e-10],[1,.00328947,-319159e-9,-42106e-10]],wd=.8487,Td=1.3523,Cd=Ei/5,TA=1/Cd,cs=18,La=function(i,t){return i[0]+t*(i[1]+t*(i[2]+t*i[3]))},CA=function(i,t){return i[1]+t*(2*i[2]+t*3*i[3])};function RA(i,t,e,n){for(var s=t;n;--n){var r=i(s);if(s-=r,Math.abs(r)<e)break}return s}function PA(){this.x0=this.x0||0,this.y0=this.y0||0,this.long0=this.long0||0,this.es=0,this.title=this.title||"Robinson"}function LA(i){var t=Mt(i.x-this.long0),e=Math.abs(i.y),n=Math.floor(e*Cd);n<0?n=0:n>=cs&&(n=cs-1),e=Ei*(e-TA*n);var s={x:La(Hh[n],e)*t,y:La($s[n],e)};return i.y<0&&(s.y=-s.y),s.x=s.x*this.a*wd+this.x0,s.y=s.y*this.a*Td+this.y0,s}function IA(i){var t={x:(i.x-this.x0)/(this.a*wd),y:Math.abs(i.y-this.y0)/(this.a*Td)};if(t.y>=1)t.x/=Hh[cs][0],t.y=i.y<0?-et:et;else{var e=Math.floor(t.y*cs);for(e<0?e=0:e>=cs&&(e=cs-1);;)if($s[e][0]>t.y)--e;else if($s[e+1][0]<=t.y)++e;else break;var n=$s[e],s=5*(t.y-n[0])/($s[e+1][0]-n[0]);s=RA(function(r){return(La(n,r)-t.y)/CA(n,r)},s,xt,100),t.x/=La(Hh[e],s),t.y=(5*e+s)*we,i.y<0&&(t.y=-t.y)}return t.x=Mt(t.x+this.long0),t}var DA=["Robinson","robin"];const NA={init:PA,forward:LA,inverse:IA,names:DA};function UA(){this.name="geocent"}function OA(i){var t=md(i,this.es,this.a);return t}function FA(i){var t=gd(i,this.es,this.a,this.b);return t}var BA=["Geocentric","geocentric","geocent","Geocent"];const zA={init:UA,forward:OA,inverse:FA,names:BA};var Le={N_POLE:0,S_POLE:1,EQUIT:2,OBLIQ:3},Hs={h:{def:1e5,num:!0},azi:{def:0,num:!0,degrees:!0},tilt:{def:0,num:!0,degrees:!0},long0:{def:0,num:!0},lat0:{def:0,num:!0}};function GA(){if(Object.keys(Hs).forEach((function(e){if(typeof this[e]>"u")this[e]=Hs[e].def;else{if(Hs[e].num&&isNaN(this[e]))throw new Error("Invalid parameter value, must be numeric "+e+" = "+this[e]);Hs[e].num&&(this[e]=parseFloat(this[e]))}Hs[e].degrees&&(this[e]=this[e]*we)}).bind(this)),Math.abs(Math.abs(this.lat0)-et)<xt?this.mode=this.lat0<0?Le.S_POLE:Le.N_POLE:Math.abs(this.lat0)<xt?this.mode=Le.EQUIT:(this.mode=Le.OBLIQ,this.sinph0=Math.sin(this.lat0),this.cosph0=Math.cos(this.lat0)),this.pn1=this.h/this.a,this.pn1<=0||this.pn1>1e10)throw new Error("Invalid height");this.p=1+this.pn1,this.rp=1/this.p,this.h1=1/this.pn1,this.pfact=(this.p+1)*this.h1,this.es=0;var i=this.tilt,t=this.azi;this.cg=Math.cos(t),this.sg=Math.sin(t),this.cw=Math.cos(i),this.sw=Math.sin(i)}function kA(i){i.x-=this.long0;var t=Math.sin(i.y),e=Math.cos(i.y),n=Math.cos(i.x),s,r;switch(this.mode){case Le.OBLIQ:r=this.sinph0*t+this.cosph0*e*n;break;case Le.EQUIT:r=e*n;break;case Le.S_POLE:r=-t;break;case Le.N_POLE:r=t;break}switch(r=this.pn1/(this.p-r),s=r*e*Math.sin(i.x),this.mode){case Le.OBLIQ:r*=this.cosph0*t-this.sinph0*e*n;break;case Le.EQUIT:r*=t;break;case Le.N_POLE:r*=-(e*n);break;case Le.S_POLE:r*=e*n;break}var a,o;return a=r*this.cg+s*this.sg,o=1/(a*this.sw*this.h1+this.cw),s=(s*this.cg-r*this.sg)*this.cw*o,r=a*o,i.x=s*this.a,i.y=r*this.a,i}function HA(i){i.x/=this.a,i.y/=this.a;var t={x:i.x,y:i.y},e,n,s;s=1/(this.pn1-i.y*this.sw),e=this.pn1*i.x*s,n=this.pn1*i.y*this.cw*s,i.x=e*this.cg+n*this.sg,i.y=n*this.cg-e*this.sg;var r=We(i.x,i.y);if(Math.abs(r)<xt)t.x=0,t.y=i.y;else{var a,o;switch(o=1-r*r*this.pfact,o=(this.p-Math.sqrt(o))/(this.pn1/r+r/this.pn1),a=Math.sqrt(1-o*o),this.mode){case Le.OBLIQ:t.y=Math.asin(a*this.sinph0+i.y*o*this.cosph0/r),i.y=(a-this.sinph0*Math.sin(t.y))*r,i.x*=o*this.cosph0;break;case Le.EQUIT:t.y=Math.asin(i.y*o/r),i.y=a*r,i.x*=o;break;case Le.N_POLE:t.y=Math.asin(a),i.y=-i.y;break;case Le.S_POLE:t.y=-Math.asin(a);break}t.x=Math.atan2(i.x,i.y)}return i.x=t.x+this.long0,i.y=t.y,i}var VA=["Tilted_Perspective","tpers"];const WA={init:GA,forward:kA,inverse:HA,names:VA};function XA(){if(this.flip_axis=this.sweep==="x"?1:0,this.h=Number(this.h),this.radius_g_1=this.h/this.a,this.radius_g_1<=0||this.radius_g_1>1e10)throw new Error;if(this.radius_g=1+this.radius_g_1,this.C=this.radius_g*this.radius_g-1,this.es!==0){var i=1-this.es,t=1/i;this.radius_p=Math.sqrt(i),this.radius_p2=i,this.radius_p_inv2=t,this.shape="ellipse"}else this.radius_p=1,this.radius_p2=1,this.radius_p_inv2=1,this.shape="sphere";this.title||(this.title="Geostationary Satellite View")}function $A(i){var t=i.x,e=i.y,n,s,r,a;if(t=t-this.long0,this.shape==="ellipse"){e=Math.atan(this.radius_p2*Math.tan(e));var o=this.radius_p/We(this.radius_p*Math.cos(e),Math.sin(e));if(s=o*Math.cos(t)*Math.cos(e),r=o*Math.sin(t)*Math.cos(e),a=o*Math.sin(e),(this.radius_g-s)*s-r*r-a*a*this.radius_p_inv2<0)return i.x=Number.NaN,i.y=Number.NaN,i;n=this.radius_g-s,this.flip_axis?(i.x=this.radius_g_1*Math.atan(r/We(a,n)),i.y=this.radius_g_1*Math.atan(a/n)):(i.x=this.radius_g_1*Math.atan(r/n),i.y=this.radius_g_1*Math.atan(a/We(r,n)))}else this.shape==="sphere"&&(n=Math.cos(e),s=Math.cos(t)*n,r=Math.sin(t)*n,a=Math.sin(e),n=this.radius_g-s,this.flip_axis?(i.x=this.radius_g_1*Math.atan(r/We(a,n)),i.y=this.radius_g_1*Math.atan(a/n)):(i.x=this.radius_g_1*Math.atan(r/n),i.y=this.radius_g_1*Math.atan(a/We(r,n))));return i.x=i.x*this.a,i.y=i.y*this.a,i}function qA(i){var t=-1,e=0,n=0,s,r,a,o;if(i.x=i.x/this.a,i.y=i.y/this.a,this.shape==="ellipse"){this.flip_axis?(n=Math.tan(i.y/this.radius_g_1),e=Math.tan(i.x/this.radius_g_1)*We(1,n)):(e=Math.tan(i.x/this.radius_g_1),n=Math.tan(i.y/this.radius_g_1)*We(1,e));var h=n/this.radius_p;if(s=e*e+h*h+t*t,r=2*this.radius_g*t,a=r*r-4*s*this.C,a<0)return i.x=Number.NaN,i.y=Number.NaN,i;o=(-r-Math.sqrt(a))/(2*s),t=this.radius_g+o*t,e*=o,n*=o,i.x=Math.atan2(e,t),i.y=Math.atan(n*Math.cos(i.x)/t),i.y=Math.atan(this.radius_p_inv2*Math.tan(i.y))}else if(this.shape==="sphere"){if(this.flip_axis?(n=Math.tan(i.y/this.radius_g_1),e=Math.tan(i.x/this.radius_g_1)*Math.sqrt(1+n*n)):(e=Math.tan(i.x/this.radius_g_1),n=Math.tan(i.y/this.radius_g_1)*Math.sqrt(1+e*e)),s=e*e+n*n+t*t,r=2*this.radius_g*t,a=r*r-4*s*this.C,a<0)return i.x=Number.NaN,i.y=Number.NaN,i;o=(-r-Math.sqrt(a))/(2*s),t=this.radius_g+o*t,e*=o,n*=o,i.x=Math.atan2(e,t),i.y=Math.atan(n*Math.cos(i.x)/t)}return i.x=i.x+this.long0,i}var YA=["Geostationary Satellite View","Geostationary_Satellite","geos"];const jA={init:XA,forward:$A,inverse:qA,names:YA};var er=1.340264,ir=-.081106,nr=893e-6,sr=.003796,Ia=Math.sqrt(3)/2;function KA(){this.es=0,this.long0=this.long0!==void 0?this.long0:0}function ZA(i){var t=Mt(i.x-this.long0),e=i.y,n=Math.asin(Ia*Math.sin(e)),s=n*n,r=s*s*s;return i.x=t*Math.cos(n)/(Ia*(er+3*ir*s+r*(7*nr+9*sr*s))),i.y=n*(er+ir*s+r*(nr+sr*s)),i.x=this.a*i.x+this.x0,i.y=this.a*i.y+this.y0,i}function JA(i){i.x=(i.x-this.x0)/this.a,i.y=(i.y-this.y0)/this.a;var t=1e-9,e=12,n=i.y,s,r,a,o,h,l;for(l=0;l<e&&(s=n*n,r=s*s*s,a=n*(er+ir*s+r*(nr+sr*s))-i.y,o=er+3*ir*s+r*(7*nr+9*sr*s),n-=h=a/o,!(Math.abs(h)<t));++l);return s=n*n,r=s*s*s,i.x=Ia*i.x*(er+3*ir*s+r*(7*nr+9*sr*s))/Math.cos(n),i.y=Math.asin(Math.sin(n)/Ia),i.x=Mt(i.x+this.long0),i}var QA=["eqearth","Equal Earth","Equal_Earth"];const tw={init:KA,forward:ZA,inverse:JA,names:QA};var gr=1e-10;function ew(){var i;if(this.phi1=this.lat1,Math.abs(this.phi1)<gr)throw new Error;this.es?(this.en=Pl(this.es),this.m1=Ns(this.phi1,this.am1=Math.sin(this.phi1),i=Math.cos(this.phi1),this.en),this.am1=i/(Math.sqrt(1-this.es*this.am1*this.am1)*this.am1),this.inverse=nw,this.forward=iw):(Math.abs(this.phi1)+gr>=et?this.cphi1=0:this.cphi1=1/Math.tan(this.phi1),this.inverse=rw,this.forward=sw)}function iw(i){var t=Mt(i.x-(this.long0||0)),e=i.y,n,s,r;return n=this.am1+this.m1-Ns(e,s=Math.sin(e),r=Math.cos(e),this.en),s=r*t/(n*Math.sqrt(1-this.es*s*s)),i.x=n*Math.sin(s),i.y=this.am1-n*Math.cos(s),i.x=this.a*i.x+(this.x0||0),i.y=this.a*i.y+(this.y0||0),i}function nw(i){i.x=(i.x-(this.x0||0))/this.a,i.y=(i.y-(this.y0||0))/this.a;var t,e,n,s;if(e=We(i.x,i.y=this.am1-i.y),s=Ll(this.am1+this.m1-e,this.es,this.en),(t=Math.abs(s))<et)t=Math.sin(s),n=e*Math.atan2(i.x,i.y)*Math.sqrt(1-this.es*t*t)/Math.cos(s);else if(Math.abs(t-et)<=gr)n=0;else throw new Error;return i.x=Mt(n+(this.long0||0)),i.y=dn(s),i}function sw(i){var t=Mt(i.x-(this.long0||0)),e=i.y,n,s;return s=this.cphi1+this.phi1-e,Math.abs(s)>gr?(i.x=s*Math.sin(n=t*Math.cos(e)/s),i.y=this.cphi1-s*Math.cos(n)):i.x=i.y=0,i.x=this.a*i.x+(this.x0||0),i.y=this.a*i.y+(this.y0||0),i}function rw(i){i.x=(i.x-(this.x0||0))/this.a,i.y=(i.y-(this.y0||0))/this.a;var t,e,n=We(i.x,i.y=this.cphi1-i.y);if(e=this.cphi1+this.phi1-n,Math.abs(e)>et)throw new Error;return Math.abs(Math.abs(e)-et)<=gr?t=0:t=n*Math.atan2(i.x,i.y)/Math.cos(e),i.x=Mt(t+(this.long0||0)),i.y=dn(e),i}var aw=["bonne","Bonne (Werner lat_1=90)"];const ow={init:ew,names:aw};function hw(i){i.Proj.projections.add(va),i.Proj.projections.add(xa),i.Proj.projections.add(iE),i.Proj.projections.add(fE),i.Proj.projections.add(vE),i.Proj.projections.add(EE),i.Proj.projections.add(RE),i.Proj.projections.add(NE),i.Proj.projections.add(zE),i.Proj.projections.add(WE),i.Proj.projections.add(ob),i.Proj.projections.add(db),i.Proj.projections.add(vb),i.Proj.projections.add(bb),i.Proj.projections.add(Rb),i.Proj.projections.add(Nb),i.Proj.projections.add(zb),i.Proj.projections.add(Wb),i.Proj.projections.add(Kb),i.Proj.projections.add(eA),i.Proj.projections.add(aA),i.Proj.projections.add(uA),i.Proj.projections.add(gA),i.Proj.projections.add(yA),i.Proj.projections.add(wA),i.Proj.projections.add(NA),i.Proj.projections.add(zA),i.Proj.projections.add(WA),i.Proj.projections.add(jA),i.Proj.projections.add(tw),i.Proj.projections.add(ow)}qe.defaultDatum="WGS84";qe.Proj=wi;qe.WGS84=new qe.Proj("WGS84");qe.Point=Cs;qe.toPoint=_d;qe.defs=Ue;qe.nadgrid=sS;qe.transform=Ra;qe.mgrs=MS;qe.version="__VERSION__";hw(qe);const Oe=256,lw=2*Math.PI*6378137/Oe,Da=2*Math.PI*6378137/2,Rd=180/Oe,cw=2*Math.PI*6378137/Oe;function uw(i,t,e){const n=Rd/Math.pow(2,e),s=Math.floor((t+180)/n/Oe),r=Math.floor((90-i)/n/Oe);return{tileX:s,tileY:r}}function fw(i,t){const e=t*Da/180,n=Math.log(Math.tan((90+i)*Math.PI/360))/(Math.PI/180);return{x:e,y:n*Da/180}}function dw(i,t,e){const n=lw/Math.pow(2,e),s=(i+Da)/n,r=(Da-t)/n;return{tileX:Math.floor(s/Oe),tileY:Math.floor(r/Oe)}}function Fo(i,t,e,n){let s;return n==="PM"?(s=fw(i,t),dw(s.x,s.y,e)):uw(i,t,e)}const pw="EPSG:4326",mw="EPSG:3857";function zu(i,t){return qe(pw,mw,[t,i])}class _r{constructor(t,e,n){lt(this,"radius");lt(this,"origin");lt(this,"bbox");lt(this,"epsg");lt(this,"centerWebMercator");this.origin=t,this.radius=e,this.bbox=If.originRadiusToBbox(t,e),this.epsg=n,this.centerWebMercator=zu(...t)}static bboxAsTile(t,e,n){const{minTileCol:s,minTileRow:r,maxTileCol:a,maxTileRow:o}=_r.bboxToTileCoords(t,e,n),h=[];for(let l=s;l<=a;l++)for(let c=r;c<=o;c++)h.push({zoom:e,tileCol:l,tileRow:c});return h}asTile(t,e=this.epsg,n){const{tileX:s,tileY:r}=Fo(this.origin[0],this.origin[1],n,e),a=[{zoom:n,tileCol:s,tileRow:r}];if(t){const o=_r.tileToBBox(s,r,n),h=o.maxLon-o.minLon,l=o.maxLat-o.minLat,c=this.origin[1],u=this.origin[0],f=(c-o.minLon)/h,p=(u-o.minLat)/l;f<.5&&p>.5?(a.push({zoom:n,tileCol:s-1,tileRow:r}),a.push({zoom:n,tileCol:s-1,tileRow:r-1}),a.push({zoom:n,tileCol:s,tileRow:r-1})):f<.5&&p<=.5?(a.push({zoom:n,tileCol:s-1,tileRow:r}),a.push({zoom:n,tileCol:s-1,tileRow:r+1}),a.push({zoom:n,tileCol:s,tileRow:r+1})):f>=.5&&p>.5?(a.push({zoom:n,tileCol:s+1,tileRow:r}),a.push({zoom:n,tileCol:s+1,tileRow:r-1}),a.push({zoom:n,tileCol:s,tileRow:r-1})):f>=.5&&p<=.5&&(a.push({zoom:n,tileCol:s+1,tileRow:r}),a.push({zoom:n,tileCol:s+1,tileRow:r+1}),a.push({zoom:n,tileCol:s,tileRow:r+1}))}return a}static bboxToTileCoords(t,e,n="EPSG:4326"){const{tileX:s,tileY:r}=Fo(t.minLat,t.minLon,e,n),{tileX:a,tileY:o}=Fo(t.maxLat,t.maxLon,e,n);return{minTileCol:s,minTileRow:o,maxTileCol:a,maxTileRow:r}}static tileToBBox(t,e,n){const s=Rd/Math.pow(2,n);if(t===void 0||e===void 0)throw new Error("tileCol or tileRow is undefined");const r=t*s*Oe-180,a=(t+1)*s*Oe-180,o=90-(e+1)*s*Oe,h=90-e*s*Oe;return{minLat:o,minLon:r,maxLat:h,maxLon:a}}static tileToBBoxWebMercator(t,e,n){const s=cw/Math.pow(2,n);if(t===void 0||e===void 0)throw new Error("tileCol or tileRow is undefined");const r=t*s*Oe-200375083427892e-7,a=(t+1)*s*Oe-200375083427892e-7,o=200375083427892e-7-(e+1)*s*Oe,h=200375083427892e-7-e*s*Oe;return{minX:r,minY:o,maxX:a,maxY:h}}getProjectCoords(t,e){const[n,s]=zu(t,e),r=n-this.centerWebMercator[0],a=-(s-this.centerWebMercator[1]);return[r,a]}}const gw="EPSG:4326",_w="EPSG:3857";function Gu(i,t){return qe(gw,_w,[t,i])}class vw{constructor(t){lt(this,"source");lt(this,"terrain");lt(this,"centerWm");lt(this,"gridTexture");this.source=t,this.centerWm=Gu(...t.center)}async fetchBil(){return new Promise(async t=>{const e=this.source.neighborsUrls,n=[],s=e.map(async o=>{const l=await(await fetch(o.url)).arrayBuffer();n.push(this.parseBil(l,o.zoomPos))});await Promise.all(s);const r=[];for(const o of n){const h=this.createMesh(o);r.push(h)}const a=this.createGroup(r);this.terrain=a.children,t(a)})}createGroup(t){const e=new rs;return t.forEach(n=>e.add(n)),e}parseBil(t,e){const n=new DataView(t),s=[],r=256,a=_r.tileToBBox(e.tileCol,e.tileRow,e.zoom),o=a.maxLon-a.minLon,h=a.maxLat-a.minLat;for(let l=0;l<r;l++){const c=[];for(let u=0;u<r;u++){const f=(l*r+u)*4,p=n.getFloat32(f,!0),g=a.minLon+u/(r-1)*o,_=a.maxLat-l/(r-1)*h,[d,m]=Gu(_,g),y=d-this.centerWm[0],x=m-this.centerWm[1];c.push({elevation:p,y:x,x:y})}s.push(c)}return s}createMesh(t){const e=t[0].length,n=new on(256,256,e-1,e-1);for(let a=0;a<e;a++)for(let o=0;o<e;o++){const h=o*e+a;n.attributes.position.setXYZ(h,t[o][a].x,t[o][a].y,t[o][a].elevation)}const s=new Tf({color:"#ECEBE9FF",wireframe:!0,side:2}),r=new Ie(n,s);return r.castShadow=!0,r.receiveShadow=!0,r.rotation.x=-Math.PI/2,r.rotateZ(Math.PI),r}}class xw{static getCurrentPosition(){return new Promise((t,e)=>{navigator.geolocation?navigator.geolocation.getCurrentPosition(t,e):e(new Error("Geolocation is not supported by this browser."))})}}const Bo=5,Mw=document.getElementById("viewerDiv");let Fi=[0,0];const vs=new mM(Mw,Fi),yw=new kx(100,100);vs.addLayer("helper",yw);const Sw=new Bi({tokenMapBox:"pk.eyJ1IjoiYWxhbnRnZW8tcHJlc2FsZXMiLCJhIjoiY2pzcTA4NjRiMTMxczQzcDFqa29maXk3bSJ9.pVYNTFKfcOXA_U_5TUwDWw",tokenOpenTopo:"",unitsSide:1e4});async function Ul(){if(Fi[0]===0&&Fi[1]===0){const a=await xw.getCurrentPosition(),{latitude:o,longitude:h}=a.coords;o&&h&&(Fi=[o,h])}const i=new _r(Fi,Bo,"EPSG:4326"),t=document.getElementById("sourceSelector"),e=t?t.value:"mapbox";let n;if(e==="mapbox")n=await Sw.getTerrainRgb(Fi,5,15);else{const a=new g1(i,{layer:"ELEVATION.ELEVATIONGRIDCOVERAGE.HIGHRES",format:"image/x-bil;bits=32",style:"normal",tileMatrixSet:"WGS84G",neighbors:!0,zoom:14});n=await new vw(a).fetchBil(),n.rotateY(Math.PI)}vs.addLayer("terrain",n);const s=new m1(Fi,Bo,{layer:"BDTOPO_V3:batiment"}),r=await new p1(Fi,Bo,vs,s,n.children,i).Building();r.rotateY(Math.PI),vs.addLayer("buildings",r)}Ul();const zo=document.getElementById("goButton"),Ew=document.getElementById("coordsInput"),Go=document.getElementById("sourceSelector");zo==null||zo.addEventListener("click",()=>{const i=Ew.value.split(",").map(Number);i.length===2&&!isNaN(i[0])&&!isNaN(i[1])?(vs.removeLayer(),Fi=[i[0],i[1]],Ul()):alert("not a valid center!")});Go==null||Go.addEventListener("change",()=>{vs.removeLayer(),Ul()});export{Ow as L,Fw as a,fl as g};
