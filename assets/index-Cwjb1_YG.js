(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=e(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const _a="170",Oh=0,Ja=1,zh=2,zc=1,Bc=2,Un=3,ti=0,Fe=1,ve=2,Ee=0,Wi=1,Qa=2,tl=3,el=4,kc=5,an=100,Bh=101,kh=102,Hh=103,Vh=104,xs=200,Gh=201,Wh=202,Xh=203,Co=204,Ro=205,Po=206,qh=207,Lo=208,Yh=209,jh=210,Zh=211,$h=212,Kh=213,Jh=214,Do=0,Io=1,No=2,Zi=3,Uo=4,Fo=5,Oo=6,zo=7,Hc=0,Qh=1,tu=2,Jn=0,Vc=1,Gc=2,Wc=3,xa=4,eu=5,Xc=6,qc=7,Yc=300,$i=301,Ki=302,br=303,Bo=304,Ir=306,kn=1e3,cn=1001,ko=1002,Oe=1003,nu=1004,Is=1005,Ue=1006,Br=1007,Kn=1008,xn=1009,jc=1010,Zc=1011,Es=1012,ya=1013,mi=1014,Xe=1015,$e=1016,Ma=1017,Sa=1018,gi=1020,$c=35902,Kc=1021,Jc=1022,Ke=1023,Qc=1024,th=1025,Xi=1026,vi=1027,wa=1028,Ea=1029,eh=1030,ba=1031,Ta=1033,vr=33776,_r=33777,xr=33778,yr=33779,Ho=35840,Vo=35841,Go=35842,Wo=35843,Xo=36196,qo=37492,Yo=37496,jo=37808,Zo=37809,$o=37810,Ko=37811,Jo=37812,Qo=37813,ta=37814,ea=37815,na=37816,ia=37817,sa=37818,ra=37819,oa=37820,aa=37821,Mr=36492,la=36494,ca=36495,nh=36283,ha=36284,ua=36285,da=36286,iu=3200,su=3201,Aa=0,ru=1,Fn="",Ie="srgb",xi="srgb-linear",Nr="linear",ie="srgb",wi=7680,nl=519,ou=512,au=513,lu=514,ih=515,cu=516,hu=517,uu=518,du=519,il=35044,Tr="300 es",zn=2e3,Ar=2001;class ts{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let sl=1234567;const Ss=Math.PI/180,bs=180/Math.PI;function es(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[r&255]+Ce[r>>8&255]+Ce[r>>16&255]+Ce[r>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function be(r,t,e){return Math.max(t,Math.min(e,r))}function Ca(r,t){return(r%t+t)%t}function fu(r,t,e,n,i){return n+(r-t)*(i-n)/(e-t)}function pu(r,t,e){return r!==t?(e-r)/(t-r):0}function ws(r,t,e){return(1-e)*r+e*t}function mu(r,t,e,n){return ws(r,t,1-Math.exp(-e*n))}function gu(r,t=1){return t-Math.abs(Ca(r,t*2)-t)}function vu(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*(3-2*r))}function _u(r,t,e){return r<=t?0:r>=e?1:(r=(r-t)/(e-t),r*r*r*(r*(r*6-15)+10))}function xu(r,t){return r+Math.floor(Math.random()*(t-r+1))}function yu(r,t){return r+Math.random()*(t-r)}function Mu(r){return r*(.5-Math.random())}function Su(r){r!==void 0&&(sl=r);let t=sl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function wu(r){return r*Ss}function Eu(r){return r*bs}function bu(r){return(r&r-1)===0&&r!==0}function Tu(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Au(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Cu(r,t,e,n,i){const s=Math.cos,o=Math.sin,a=s(e/2),l=o(e/2),c=s((t+n)/2),h=o((t+n)/2),u=s((t-n)/2),d=o((t-n)/2),f=s((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":r.set(a*h,l*u,l*d,a*c);break;case"YZY":r.set(l*d,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*d,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*f,a*c);break;case"YXY":r.set(l*f,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ki(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Le(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Ru={DEG2RAD:Ss,RAD2DEG:bs,generateUUID:es,clamp:be,euclideanModulo:Ca,mapLinear:fu,inverseLerp:pu,lerp:ws,damp:mu,pingpong:gu,smoothstep:vu,smootherstep:_u,randInt:xu,randFloat:yu,randFloatSpread:Mu,seededRandom:Su,degToRad:wu,radToDeg:Eu,isPowerOfTwo:bu,ceilPowerOfTwo:Tu,floorPowerOfTwo:Au,setQuaternionFromProperEuler:Cu,normalize:Le,denormalize:ki};class zt{constructor(t=0,e=0){zt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ht{constructor(t,e,n,i,s,o,a,l,c){Ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],P=i[2],b=i[5],E=i[8];return s[0]=o*v+a*_+l*P,s[3]=o*m+a*y+l*b,s[6]=o*p+a*x+l*E,s[1]=c*v+h*_+u*P,s[4]=c*m+h*y+u*b,s[7]=c*p+h*x+u*E,s[2]=d*v+f*_+g*P,s[5]=d*m+f*y+g*b,s[8]=d*p+f*x+g*E,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*c-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*l)*v,t[5]=(i*s-a*e)*v,t[6]=f*v,t[7]=(n*l-c*e)*v,t[8]=(o*e-n*s)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kr.makeScale(t,e)),this}rotate(t){return this.premultiply(kr.makeRotation(-t)),this}translate(t,e){return this.premultiply(kr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kr=new Ht;function sh(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Ts(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Pu(){const r=Ts("canvas");return r.style.display="block",r}const rl={};function ys(r){r in rl||(rl[r]=!0,console.warn(r))}function Lu(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function Du(r){const t=r.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Iu(r){const t=r.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:xi,spaces:{},convert:function(r,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ie&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(r.applyMatrix3(this.spaces[t].toXYZ),r.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ie&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b))),r},fromWorkingColorSpace:function(r,t){return this.convert(r,this.workingColorSpace,t)},toWorkingColorSpace:function(r,t){return this.convert(r,t,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Fn?Nr:this.spaces[r].transfer},getLuminanceCoefficients:function(r,t=this.workingColorSpace){return r.fromArray(this.spaces[t].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,t,e){return r.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}};function Bn(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qi(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const ol=[.64,.33,.3,.6,.15,.06],al=[.2126,.7152,.0722],ll=[.3127,.329],cl=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),hl=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[xi]:{primaries:ol,whitePoint:ll,transfer:Nr,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:al,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:ol,whitePoint:ll,transfer:ie,toXYZ:cl,fromXYZ:hl,luminanceCoefficients:al,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}});let Ei;class Nu{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ei===void 0&&(Ei=Ts("canvas")),Ei.width=t.width,Ei.height=t.height;const n=Ei.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ei}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ts("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=Bn(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Uu=0;class rh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Uu++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Hr(i[o].image)):s.push(Hr(i[o]))}else s=Hr(i);n.url=s}return e||(t.images[this.uuid]=n),n}}function Hr(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Nu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Fu=0;class Te extends ts{constructor(t=Te.DEFAULT_IMAGE,e=Te.DEFAULT_MAPPING,n=cn,i=cn,s=Ue,o=Kn,a=Ke,l=xn,c=Te.DEFAULT_ANISOTROPY,h=Fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=es(),this.name="",this.source=new rh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new zt(0,0),this.repeat=new zt(1,1),this.center=new zt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case kn:t.x=t.x-Math.floor(t.x);break;case cn:t.x=t.x<0?0:1;break;case ko:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case kn:t.y=t.y-Math.floor(t.y);break;case cn:t.y=t.y<0?0:1;break;case ko:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Te.DEFAULT_IMAGE=null;Te.DEFAULT_MAPPING=Yc;Te.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s;const l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,x=(f+1)/2,P=(p+1)/2,b=(h+d)/4,E=(u+v)/4,T=(g+m)/4;return y>x&&y>P?y<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(y),i=b/n,s=E/n):x>P?x<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(x),n=b/i,s=T/i):P<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(P),n=E/s,i=T/s),this.set(n,i,s,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ou extends ts{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ue,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Te(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new rh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class yn extends Ou{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class oh extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class zu extends Te{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let As=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=s[o+0],f=s[o+1],g=s[o+2],v=s[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||l!==d||c!==f||h!==g){let m=1-a;const p=l*d+c*f+h*g+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),b=Math.atan2(P,p*_);m=Math.sin(m*b)/P,a=Math.sin(a*b)/P}const x=a*_;if(l=l*m+d*x,c=c*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],g=s[o+3];return t[e]=a*g+h*u+l*f-c*d,t[e+1]=l*g+h*d+c*u-a*f,t[e+2]=c*g+h*f+a*d-l*u,t[e+3]=h*g-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*s+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,d=Math.sin(e*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class j{constructor(t=0,e=0,n=0){j.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ul.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ul.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vr.copy(this).projectOnVector(t),this.sub(Vr)}reflect(t){return this.sub(Vr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vr=new j,ul=new As;class yi{constructor(t=new j(1/0,1/0,1/0),e=new j(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(s,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ns.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ns.copy(n.boundingBox)),Ns.applyMatrix4(t.matrixWorld),this.union(Ns)}const i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ls),Us.subVectors(this.max,ls),bi.subVectors(t.a,ls),Ti.subVectors(t.b,ls),Ai.subVectors(t.c,ls),Gn.subVectors(Ti,bi),Wn.subVectors(Ai,Ti),ni.subVectors(bi,Ai);let e=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-ni.z,ni.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,ni.z,0,-ni.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-ni.y,ni.x,0];return!Gr(e,bi,Ti,Ai,Us)||(e=[1,0,0,0,1,0,0,0,1],!Gr(e,bi,Ti,Ai,Us))?!1:(Fs.crossVectors(Gn,Wn),e=[Fs.x,Fs.y,Fs.z],Gr(e,bi,Ti,Ai,Us))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new j,new j,new j,new j,new j,new j,new j,new j],en=new j,Ns=new yi,bi=new j,Ti=new j,Ai=new j,Gn=new j,Wn=new j,ni=new j,ls=new j,Us=new j,Fs=new j,ii=new j;function Gr(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ii.fromArray(r,s);const a=i.x*Math.abs(ii.x)+i.y*Math.abs(ii.y)+i.z*Math.abs(ii.z),l=t.dot(ii),c=e.dot(ii),h=n.dot(ii);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Bu=new yi,cs=new j,Wr=new j;class ns{constructor(t=new j,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Bu.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;cs.subVectors(t,this.center);const e=cs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(cs,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(cs.copy(t.center).add(Wr)),this.expandByPoint(cs.copy(t.center).sub(Wr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const bn=new j,Xr=new j,Os=new j,Xn=new j,qr=new j,zs=new j,Yr=new j;let Ra=class{constructor(t=new j,e=new j(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,bn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=bn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(bn.copy(this.origin).addScaledVector(this.direction,e),bn.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Xr.copy(t).add(e).multiplyScalar(.5),Os.copy(e).sub(t).normalize(),Xn.copy(this.origin).sub(Xr);const s=t.distanceTo(e)*.5,o=-this.direction.dot(Os),a=Xn.dot(this.direction),l=-Xn.dot(Os),c=Xn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*l-a,d=o*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Xr).addScaledVector(Os,d),f}intersectSphere(t,e){bn.subVectors(t.center,this.origin);const n=bn.dot(this.direction),i=bn.dot(bn)-n*n,s=t.radius*t.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,bn)!==null}intersectTriangle(t,e,n,i,s){qr.subVectors(e,t),zs.subVectors(n,t),Yr.crossVectors(qr,zs);let o=this.direction.dot(Yr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,t);const l=a*this.direction.dot(zs.crossVectors(Xn,zs));if(l<0)return null;const c=a*this.direction.dot(qr.cross(Xn));if(c<0||l+c>o)return null;const h=-a*Xn.dot(Yr);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class Jt{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,g,v,m){Jt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,v,m)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Jt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/Ci.setFromMatrixColumn(t,0).length(),s=1/Ci.setFromMatrixColumn(t,1).length(),o=1/Ci.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+g*c,e[5]=d-v*c,e[9]=-a*l,e[2]=v-d*c,e[6]=g+f*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*h,f=l*u,g=c*h,v=c*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=l*h,e[4]=g*c-f,e[8]=d*c+v,e[1]=l*u,e[5]=v*c+d,e[9]=f*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*l,f=o*c,g=a*l,v=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ku,t,Hu)}lookAt(t,e,n){const i=this.elements;return Ge.subVectors(t,e),Ge.lengthSq()===0&&(Ge.z=1),Ge.normalize(),qn.crossVectors(n,Ge),qn.lengthSq()===0&&(Math.abs(n.z)===1?Ge.x+=1e-4:Ge.z+=1e-4,Ge.normalize(),qn.crossVectors(n,Ge)),qn.normalize(),Bs.crossVectors(Ge,qn),i[0]=qn.x,i[4]=Bs.x,i[8]=Ge.x,i[1]=qn.y,i[5]=Bs.y,i[9]=Ge.y,i[2]=qn.z,i[6]=Bs.z,i[10]=Ge.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],P=n[15],b=i[0],E=i[4],T=i[8],w=i[12],S=i[1],D=i[5],z=i[9],I=i[13],F=i[2],B=i[6],M=i[10],N=i[14],A=i[3],O=i[7],k=i[11],G=i[15];return s[0]=o*b+a*S+l*F+c*A,s[4]=o*E+a*D+l*B+c*O,s[8]=o*T+a*z+l*M+c*k,s[12]=o*w+a*I+l*N+c*G,s[1]=h*b+u*S+d*F+f*A,s[5]=h*E+u*D+d*B+f*O,s[9]=h*T+u*z+d*M+f*k,s[13]=h*w+u*I+d*N+f*G,s[2]=g*b+v*S+m*F+p*A,s[6]=g*E+v*D+m*B+p*O,s[10]=g*T+v*z+m*M+p*k,s[14]=g*w+v*I+m*N+p*G,s[3]=_*b+y*S+x*F+P*A,s[7]=_*E+y*D+x*B+P*O,s[11]=_*T+y*z+x*M+P*k,s[15]=_*w+y*I+x*N+P*G,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+s*l*u-i*c*u-s*a*d+n*c*d+i*a*f-n*l*f)+v*(+e*l*f-e*c*d+s*o*d-i*o*f+i*c*h-s*l*h)+m*(+e*c*u-e*a*f-s*o*u+n*o*f+s*a*h-n*c*h)+p*(-i*a*h-e*l*u+e*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*c-v*d*c+v*l*f-a*m*f-u*l*p+a*d*p,y=g*d*c-h*m*c-g*l*f+o*m*f+h*l*p-o*d*p,x=h*v*c-g*u*c+g*a*f-o*v*f-h*a*p+o*u*p,P=g*u*l-h*v*l-g*a*d+o*v*d+h*a*m-o*u*m,b=e*_+n*y+i*x+s*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const E=1/b;return t[0]=_*E,t[1]=(v*d*s-u*m*s-v*i*f+n*m*f+u*i*p-n*d*p)*E,t[2]=(a*m*s-v*l*s+v*i*c-n*m*c-a*i*p+n*l*p)*E,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*E,t[4]=y*E,t[5]=(h*m*s-g*d*s+g*i*f-e*m*f-h*i*p+e*d*p)*E,t[6]=(g*l*s-o*m*s-g*i*c+e*m*c+o*i*p-e*l*p)*E,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*E,t[8]=x*E,t[9]=(g*u*s-h*v*s-g*n*f+e*v*f+h*n*p-e*u*p)*E,t[10]=(o*v*s-g*a*s+g*n*c-e*v*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*E,t[12]=P*E,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*E,t[14]=(g*a*i-o*v*i-g*n*l+e*v*l+o*n*m-e*a*m)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){const e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,g=s*u,v=o*h,m=o*u,p=a*u,_=l*c,y=l*h,x=l*u,P=n.x,b=n.y,E=n.z;return i[0]=(1-(v+p))*P,i[1]=(f+x)*P,i[2]=(g-y)*P,i[3]=0,i[4]=(f-x)*b,i[5]=(1-(d+p))*b,i[6]=(m+_)*b,i[7]=0,i[8]=(g+y)*E,i[9]=(m-_)*E,i[10]=(1-(d+v))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let s=Ci.set(i[0],i[1],i[2]).length();const o=Ci.set(i[4],i[5],i[6]).length(),a=Ci.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),t.x=i[12],t.y=i[13],t.z=i[14],nn.copy(this);const c=1/s,h=1/o,u=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=h,nn.elements[5]*=h,nn.elements[6]*=h,nn.elements[8]*=u,nn.elements[9]*=u,nn.elements[10]*=u,e.setFromRotationMatrix(nn),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=zn){const l=this.elements,c=2*s/(e-t),h=2*s/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===zn)f=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ar)f=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=zn){const l=this.elements,c=1/(e-t),h=1/(n-i),u=1/(o-s),d=(e+t)*c,f=(n+i)*h;let g,v;if(a===zn)g=(o+s)*u,v=-2*u;else if(a===Ar)g=s*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Ci=new j,nn=new Jt,ku=new j(0,0,0),Hu=new j(1,1,1),qn=new j,Bs=new j,Ge=new j,dl=new Jt,fl=new As;class Mn{constructor(t=0,e=0,n=0,i=Mn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(be(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return fl.setFromEuler(this),this.setFromQuaternion(fl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Mn.DEFAULT_ORDER="XYZ";class Pa{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vu=0;const pl=new j,Ri=new As,Tn=new Jt,ks=new j,hs=new j,Gu=new j,Wu=new As,ml=new j(1,0,0),gl=new j(0,1,0),vl=new j(0,0,1),_l={type:"added"},Xu={type:"removed"},Pi={type:"childadded",child:null},jr={type:"childremoved",child:null};class xe extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vu++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new j,e=new Mn,n=new As,i=new j(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Jt},normalMatrix:{value:new Ht}}),this.matrix=new Jt,this.matrixWorld=new Jt,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.multiply(Ri),this}rotateOnWorldAxis(t,e){return Ri.setFromAxisAngle(t,e),this.quaternion.premultiply(Ri),this}rotateX(t){return this.rotateOnAxis(ml,t)}rotateY(t){return this.rotateOnAxis(gl,t)}rotateZ(t){return this.rotateOnAxis(vl,t)}translateOnAxis(t,e){return pl.copy(t).applyQuaternion(this.quaternion),this.position.add(pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ml,t)}translateY(t){return this.translateOnAxis(gl,t)}translateZ(t){return this.translateOnAxis(vl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Tn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?ks.copy(t):ks.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),hs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tn.lookAt(hs,ks,this.up):Tn.lookAt(ks,hs,this.up),this.quaternion.setFromRotationMatrix(Tn),i&&(Tn.extractRotation(i.matrixWorld),Ri.setFromRotationMatrix(Tn),this.quaternion.premultiply(Ri.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(_l),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xu),jr.child=t,this.dispatchEvent(jr),jr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Tn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Tn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Tn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(_l),Pi.child=t,this.dispatchEvent(Pi),Pi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,t,Gu),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hs,Wu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new j(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new j,An=new j,Zr=new j,Cn=new j,Li=new j,Di=new j,xl=new j,$r=new j,Kr=new j,Jr=new j,Qr=new ue,to=new ue,eo=new ue;class ln{constructor(t=new j,e=new j,n=new j){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),sn.subVectors(t,e),i.cross(sn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){sn.subVectors(i,e),An.subVectors(n,e),Zr.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(An),l=sn.dot(Zr),c=An.dot(An),h=An.dot(Zr),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,g=(o*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(o,Cn.y),l.addScaledVector(a,Cn.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return Qr.setScalar(0),to.setScalar(0),eo.setScalar(0),Qr.fromBufferAttribute(t,e),to.fromBufferAttribute(t,n),eo.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Qr,s.x),o.addScaledVector(to,s.y),o.addScaledVector(eo,s.z),o}static isFrontFacing(t,e,n,i){return sn.subVectors(n,e),An.subVectors(t,e),sn.cross(An).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),An.subVectors(this.a,this.b),sn.cross(An).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ln.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ln.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return ln.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return ln.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ln.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,s=this.c;let o,a;Li.subVectors(i,n),Di.subVectors(s,n),$r.subVectors(t,n);const l=Li.dot($r),c=Di.dot($r);if(l<=0&&c<=0)return e.copy(n);Kr.subVectors(t,i);const h=Li.dot(Kr),u=Di.dot(Kr);if(h>=0&&u<=h)return e.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Li,o);Jr.subVectors(t,s);const f=Li.dot(Jr),g=Di.dot(Jr);if(g>=0&&f<=g)return e.copy(s);const v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(Di,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return xl.subVectors(s,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(xl,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Li,o).addScaledVector(Di,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const ah={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yn={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function no(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=Ca(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=no(o,s,t+1/3),this.g=no(o,s,t),this.b=no(o,s,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Ie){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const n=ah[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=qi(t.r),this.g=qi(t.g),this.b=qi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return qt.fromWorkingColorSpace(Re.copy(this),t),Math.round(be(Re.r*255,0,255))*65536+Math.round(be(Re.g*255,0,255))*256+Math.round(be(Re.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Re.copy(this),e);const n=Re.r,i=Re.g,s=Re.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Re.copy(this),e),t.r=Re.r,t.g=Re.g,t.b=Re.b,t}getStyle(t=Ie){qt.fromWorkingColorSpace(Re.copy(this),t);const e=Re.r,n=Re.g,i=Re.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Yn),this.setHSL(Yn.h+t,Yn.s+e,Yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Yn),t.getHSL(Hs);const n=ws(Yn.h,Hs.h,e),i=ws(Yn.s,Hs.s,e),s=ws(Yn.l,Hs.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Re=new Lt;Lt.NAMES=ah;let qu=0,Mi=class extends ts{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=es(),this.name="",this.blending=Wi,this.side=ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Co,this.blendDst=Ro,this.blendEquation=an,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Zi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Wi&&(n.blending=this.blending),this.side!==ti&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Co&&(n.blendSrc=this.blendSrc),this.blendDst!==Ro&&(n.blendDst=this.blendDst),this.blendEquation!==an&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Zi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(e){const s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class lh extends Mi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.combine=Hc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const On=Yu();function Yu(){const r=new ArrayBuffer(4),t=new Float32Array(r),e=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:o,offsetTable:a}}function ju(r){Math.abs(r)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),r=be(r,-65504,65504),On.floatView[0]=r;const t=On.uint32View[0],e=t>>23&511;return On.baseTable[e]+((t&8388607)>>On.shiftTable[e])}function Zu(r){const t=r>>10;return On.uint32View[0]=On.mantissaTable[On.offsetTable[t]+(r&1023)]+On.exponentTable[t],On.floatView[0]}const Vs={toHalfFloat:ju,fromHalfFloat:Zu},fe=new j,Gs=new zt;class _e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=il,this.updateRanges=[],this.gpuType=Xe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Gs.fromBufferAttribute(this,e),Gs.applyMatrix3(t),this.setXY(e,Gs.x,Gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Le(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=Le(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Le(e,this.array),n=Le(n,this.array),i=Le(i,this.array),s=Le(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==il&&(t.usage=this.usage),t}}class ch extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class hh extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class de extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let $u=0;const je=new Jt,io=new xe,Ii=new j,We=new yi,us=new yi,Se=new j;class ze extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$u++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(sh(t)?hh:ch)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return je.makeRotationFromQuaternion(t),this.applyMatrix4(je),this}rotateX(t){return je.makeRotationX(t),this.applyMatrix4(je),this}rotateY(t){return je.makeRotationY(t),this.applyMatrix4(je),this}rotateZ(t){return je.makeRotationZ(t),this.applyMatrix4(je),this}translate(t,e,n){return je.makeTranslation(t,e,n),this.applyMatrix4(je),this}scale(t,e,n){return je.makeScale(t,e,n),this.applyMatrix4(je),this}lookAt(t){return io.lookAt(t),io.updateMatrix(),this.applyMatrix4(io.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ii).negate(),this.translate(Ii.x,Ii.y,Ii.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,s=t.length;i<s;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new de(n,3))}else{for(let n=0,i=e.count;n<i;n++){const s=t[n];e.setXYZ(n,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yi);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new j(-1/0,-1/0,-1/0),new j(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const s=e[n];We.setFromBufferAttribute(s),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,We.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,We.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(We.min),this.boundingBox.expandByPoint(We.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ns);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new j,1/0);return}if(t){const n=this.boundingSphere.center;if(We.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];us.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(We.min,us.min),We.expandByPoint(Se),Se.addVectors(We.max,us.max),We.expandByPoint(Se)):(We.expandByPoint(us.min),We.expandByPoint(us.max))}We.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)Se.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Se.fromBufferAttribute(a,c),l&&(Ii.fromBufferAttribute(t,c),Se.add(Ii)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let T=0;T<n.count;T++)a[T]=new j,l[T]=new j;const c=new j,h=new j,u=new j,d=new zt,f=new zt,g=new zt,v=new j,m=new j;function p(T,w,S){c.fromBufferAttribute(n,T),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(s,T),f.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),h.sub(c),u.sub(c),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[T].add(v),a[w].add(v),a[S].add(v),l[T].add(m),l[w].add(m),l[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let T=0,w=_.length;T<w;++T){const S=_[T],D=S.start,z=S.count;for(let I=D,F=D+z;I<F;I+=3)p(t.getX(I+0),t.getX(I+1),t.getX(I+2))}const y=new j,x=new j,P=new j,b=new j;function E(T){P.fromBufferAttribute(i,T),b.copy(P);const w=a[T];y.copy(w),y.sub(P.multiplyScalar(P.dot(w))).normalize(),x.crossVectors(b,w);const D=x.dot(l[T])<0?-1:1;o.setXYZW(T,y.x,y.y,y.z,D)}for(let T=0,w=_.length;T<w;++T){const S=_[T],D=S.start,z=S.count;for(let I=D,F=D+z;I<F;I+=3)E(t.getX(I+0)),E(t.getX(I+1)),E(t.getX(I+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new j,s=new j,o=new j,a=new j,l=new j,c=new j,h=new j,u=new j;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?f=l[v]*a.data.stride+a.offset:f=l[v]*h;for(let p=0;p<h;p++)d[g++]=c[f++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ze,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=t(l,n);e.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(e))}const s=t.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yl=new Jt,si=new Ra,Ws=new ns,Ml=new j,Xs=new j,qs=new j,Ys=new j,so=new j,js=new j,Sl=new j,Zs=new j;class Yt extends xe{constructor(t=new ze,e=new lh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(s&&a){js.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(so.fromBufferAttribute(u,t),o?js.addScaledVector(so,h):js.addScaledVector(so.sub(e),h))}e.add(js)}return e}raycast(t,e){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ws.copy(n.boundingSphere),Ws.applyMatrix4(s),si.copy(t.ray).recast(t.near),!(Ws.containsPoint(si.origin)===!1&&(si.intersectSphere(Ws,Ml)===null||si.origin.distanceToSquared(Ml)>(t.far-t.near)**2))&&(yl.copy(s).invert(),si.copy(t.ray).applyMatrix4(yl),!(n.boundingBox!==null&&si.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,si)))}_computeIntersections(t,e,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,P=y;x<P;x+=3){const b=a.getX(x),E=a.getX(x+1),T=a.getX(x+2);i=$s(this,p,t,n,c,h,u,b,E,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=$s(this,o,t,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,P=y;x<P;x+=3){const b=x,E=x+1,T=x+2;i=$s(this,p,t,n,c,h,u,b,E,T),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;i=$s(this,o,t,n,c,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Ku(r,t,e,n,i,s,o,a){let l;if(t.side===Fe?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===ti,a),l===null)return null;Zs.copy(a),Zs.applyMatrix4(r.matrixWorld);const c=e.ray.origin.distanceTo(Zs);return c<e.near||c>e.far?null:{distance:c,point:Zs.clone(),object:r}}function $s(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Xs),r.getVertexPosition(l,qs),r.getVertexPosition(c,Ys);const h=Ku(r,t,e,n,Xs,qs,Ys,Sl);if(h){const u=new j;ln.getBarycoord(Sl,Xs,qs,Ys,u),i&&(h.uv=ln.getInterpolatedAttribute(i,a,l,c,u,new zt)),s&&(h.uv1=ln.getInterpolatedAttribute(s,a,l,c,u,new zt)),o&&(h.normal=ln.getInterpolatedAttribute(o,a,l,c,u,new j),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new j,materialIndex:0};ln.getNormal(Xs,qs,Ys,d.normal),h.face=d,h.barycoord=u}return h}class Ne extends ze{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,s,0),g("z","y","x",1,-1,n,e,-t,o,s,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,s,4),g("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new de(c,3)),this.setAttribute("normal",new de(h,3)),this.setAttribute("uv",new de(u,2));function g(v,m,p,_,y,x,P,b,E,T,w){const S=x/E,D=P/T,z=x/2,I=P/2,F=b/2,B=E+1,M=T+1;let N=0,A=0;const O=new j;for(let k=0;k<M;k++){const G=k*D-I;for(let H=0;H<B;H++){const tt=H*S-z;O[v]=tt*_,O[m]=G*y,O[p]=F,c.push(O.x,O.y,O.z),O[v]=0,O[m]=0,O[p]=b>0?1:-1,h.push(O.x,O.y,O.z),u.push(H/E),u.push(1-k/T),N+=1}}for(let k=0;k<T;k++)for(let G=0;G<E;G++){const H=d+G+B*k,tt=d+G+B*(k+1),Y=d+(G+1)+B*(k+1),$=d+(G+1)+B*k;l.push(H,tt,$),l.push(tt,Y,$),A+=6}a.addGroup(f,A,w),f+=A,d+=N}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ne(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ji(r){const t={};for(const e in r){t[e]={};for(const n in r[e]){const i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function De(r){const t={};for(let e=0;e<r.length;e++){const n=Ji(r[e]);for(const i in n)t[i]=n[i]}return t}function Ju(r){const t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function uh(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const $n={clone:Ji,merge:De};var Qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class we extends Mi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qu,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ji(t.uniforms),this.uniformsGroups=Ju(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class dh extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Jt,this.projectionMatrix=new Jt,this.projectionMatrixInverse=new Jt,this.coordinateSystem=zn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new j,wl=new zt,El=new zt;class Ze extends dh{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=bs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ss*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return bs*2*Math.atan(Math.tan(Ss*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,wl,El),e.subVectors(El,wl)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ss*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Ni=-90,Ui=1;class ed extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ze(Ni,Ui,t,e);i.layers=this.layers,this.add(i);const s=new Ze(Ni,Ui,t,e);s.layers=this.layers,this.add(s);const o=new Ze(Ni,Ui,t,e);o.layers=this.layers,this.add(o);const a=new Ze(Ni,Ui,t,e);a.layers=this.layers,this.add(a);const l=new Ze(Ni,Ui,t,e);l.layers=this.layers,this.add(l);const c=new Ze(Ni,Ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(const c of e)this.remove(c);if(t===zn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ar)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class fh extends Te{constructor(t,e,n,i,s,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:$i,super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nd extends yn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new fh(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ne(5,5,5),s=new we({name:"CubemapFromEquirect",uniforms:Ji(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fe,blending:Ee});s.uniforms.tEquirect.value=e;const o=new Yt(i,s),a=e.minFilter;return e.minFilter===Kn&&(e.minFilter=Ue),new ed(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}}const ro=new j,id=new j,sd=new Ht;class hi{constructor(t=new j(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=ro.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ro),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sd.getNormalMatrix(t),i=this.coplanarPoint(ro).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ri=new ns,Ks=new j;class La{constructor(t=new hi,e=new hi,n=new hi,i=new hi,s=new hi,o=new hi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=zn){const n=this.planes,i=t.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(l-s,d-c,m-f,x-p).normalize(),n[1].setComponents(l+s,d+c,m+f,x+p).normalize(),n[2].setComponents(l+o,d+h,m+g,x+_).normalize(),n[3].setComponents(l-o,d-h,m-g,x-_).normalize(),n[4].setComponents(l-a,d-u,m-v,x-y).normalize(),e===zn)n[5].setComponents(l+a,d+u,m+v,x+y).normalize();else if(e===Ar)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ri.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ri.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ri)}intersectsSprite(t){return ri.center.set(0,0,0),ri.radius=.7071067811865476,ri.applyMatrix4(t.matrixWorld),this.intersectsSphere(ri)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Ks.x=i.normal.x>0?t.max.x:t.min.x,Ks.y=i.normal.y>0?t.max.y:t.min.y,Ks.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Ks)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ph(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function rd(r){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];r.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}class is extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let y=0;y<c;y++){const x=y*u-s;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let _=0;_<a;_++){const y=_+c*p,x=_+c*(p+1),P=_+1+c*(p+1),b=_+1+c*p;f.push(y,x,b),f.push(x,P,b)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.widthSegments,t.heightSegments)}}var od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
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
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dd=`#ifdef USE_AOMAP
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
#endif`,fd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
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
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_d=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,xd=`#ifdef USE_IRIDESCENCE
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
#endif`,yd=`#ifdef USE_BUMPMAP
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
#endif`,Md=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,wd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,bd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Cd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Rd=`#define PI 3.141592653589793
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
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Ld=`vec3 transformedNormal = objectNormal;
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
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zd=`#ifdef USE_ENVMAP
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
#endif`,Bd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kd=`#ifdef USE_ENVMAP
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
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Vd=`#ifdef USE_ENVMAP
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
#endif`,Gd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
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
}`,jd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$d=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Kd=`uniform bool receiveShadow;
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
#endif`,Jd=`#ifdef USE_ENVMAP
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
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ef=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nf=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sf=`PhysicalMaterial material;
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
#endif`,rf=`struct PhysicalMaterial {
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
}`,of=`
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
#endif`,af=`#if defined( RE_IndirectDiffuse )
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
#endif`,lf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cf=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hf=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uf=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,df=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ff=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gf=`#if defined( USE_POINTS_UV )
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
#endif`,vf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_f=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
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
#endif`,wf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ef=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bf=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rf=`#ifdef USE_NORMALMAP
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
#endif`,Pf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Lf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Df=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,If=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Uf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ff=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xf=`float getShadowMask() {
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
}`,qf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yf=`#ifdef USE_SKINNING
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
#endif`,jf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zf=`#ifdef USE_SKINNING
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
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,tp=`#ifdef USE_TRANSMISSION
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
#endif`,ep=`#ifdef USE_TRANSMISSION
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
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const op=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
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
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,up=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dp=`#include <common>
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
}`,fp=`#if DEPTH_PACKING == 3200
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
}`,pp=`#define DISTANCE
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
}`,mp=`#define DISTANCE
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
}`,gp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_p=`uniform float scale;
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
}`,xp=`uniform vec3 diffuse;
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
}`,yp=`#include <common>
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
}`,Mp=`uniform vec3 diffuse;
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
}`,Sp=`#define LAMBERT
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
}`,wp=`#define LAMBERT
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
}`,Ep=`#define MATCAP
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
}`,bp=`#define MATCAP
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
}`,Tp=`#define NORMAL
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
}`,Ap=`#define NORMAL
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
}`,Cp=`#define PHONG
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
}`,Rp=`#define PHONG
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
}`,Pp=`#define STANDARD
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
}`,Lp=`#define STANDARD
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
}`,Dp=`#define TOON
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
}`,Ip=`#define TOON
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
}`,Np=`uniform float size;
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
}`,Up=`uniform vec3 diffuse;
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
}`,Fp=`#include <common>
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
}`,Op=`uniform vec3 color;
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
}`,zp=`uniform float rotation;
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
}`,Bp=`uniform vec3 diffuse;
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
}`,Vt={alphahash_fragment:od,alphahash_pars_fragment:ad,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:dd,aomap_pars_fragment:fd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:vd,bsdfs:_d,iridescence_fragment:xd,bumpmap_pars_fragment:yd,clipping_planes_fragment:Md,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:wd,clipping_planes_vertex:Ed,color_fragment:bd,color_pars_fragment:Td,color_pars_vertex:Ad,color_vertex:Cd,common:Rd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Dd,displacementmap_vertex:Id,emissivemap_fragment:Nd,emissivemap_pars_fragment:Ud,colorspace_fragment:Fd,colorspace_pars_fragment:Od,envmap_fragment:zd,envmap_common_pars_fragment:Bd,envmap_pars_fragment:kd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:Jd,envmap_vertex:Vd,fog_vertex:Gd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:jd,lights_lambert_fragment:Zd,lights_lambert_pars_fragment:$d,lights_pars_begin:Kd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tf,lights_phong_fragment:ef,lights_phong_pars_fragment:nf,lights_physical_fragment:sf,lights_physical_pars_fragment:rf,lights_fragment_begin:of,lights_fragment_maps:af,lights_fragment_end:lf,logdepthbuf_fragment:cf,logdepthbuf_pars_fragment:hf,logdepthbuf_pars_vertex:uf,logdepthbuf_vertex:df,map_fragment:ff,map_pars_fragment:pf,map_particle_fragment:mf,map_particle_pars_fragment:gf,metalnessmap_fragment:vf,metalnessmap_pars_fragment:_f,morphinstance_vertex:xf,morphcolor_vertex:yf,morphnormal_vertex:Mf,morphtarget_pars_vertex:Sf,morphtarget_vertex:wf,normal_fragment_begin:Ef,normal_fragment_maps:bf,normal_pars_fragment:Tf,normal_pars_vertex:Af,normal_vertex:Cf,normalmap_pars_fragment:Rf,clearcoat_normal_fragment_begin:Pf,clearcoat_normal_fragment_maps:Lf,clearcoat_pars_fragment:Df,iridescence_pars_fragment:If,opaque_fragment:Nf,packing:Uf,premultiplied_alpha_fragment:Ff,project_vertex:Of,dithering_fragment:zf,dithering_pars_fragment:Bf,roughnessmap_fragment:kf,roughnessmap_pars_fragment:Hf,shadowmap_pars_fragment:Vf,shadowmap_pars_vertex:Gf,shadowmap_vertex:Wf,shadowmask_pars_fragment:Xf,skinbase_vertex:qf,skinning_pars_vertex:Yf,skinning_vertex:jf,skinnormal_vertex:Zf,specularmap_fragment:$f,specularmap_pars_fragment:Kf,tonemapping_fragment:Jf,tonemapping_pars_fragment:Qf,transmission_fragment:tp,transmission_pars_fragment:ep,uv_pars_fragment:np,uv_pars_vertex:ip,uv_vertex:sp,worldpos_vertex:rp,background_vert:op,background_frag:ap,backgroundCube_vert:lp,backgroundCube_frag:cp,cube_vert:hp,cube_frag:up,depth_vert:dp,depth_frag:fp,distanceRGBA_vert:pp,distanceRGBA_frag:mp,equirect_vert:gp,equirect_frag:vp,linedashed_vert:_p,linedashed_frag:xp,meshbasic_vert:yp,meshbasic_frag:Mp,meshlambert_vert:Sp,meshlambert_frag:wp,meshmatcap_vert:Ep,meshmatcap_frag:bp,meshnormal_vert:Tp,meshnormal_frag:Ap,meshphong_vert:Cp,meshphong_frag:Rp,meshphysical_vert:Pp,meshphysical_frag:Lp,meshtoon_vert:Dp,meshtoon_frag:Ip,points_vert:Np,points_frag:Up,shadow_vert:Fp,shadow_frag:Op,sprite_vert:zp,sprite_frag:Bp},dt={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new zt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new zt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}},vn={basic:{uniforms:De([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:Vt.meshbasic_vert,fragmentShader:Vt.meshbasic_frag},lambert:{uniforms:De([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Vt.meshlambert_vert,fragmentShader:Vt.meshlambert_frag},phong:{uniforms:De([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:Vt.meshphong_vert,fragmentShader:Vt.meshphong_frag},standard:{uniforms:De([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag},toon:{uniforms:De([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new Lt(0)}}]),vertexShader:Vt.meshtoon_vert,fragmentShader:Vt.meshtoon_frag},matcap:{uniforms:De([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:Vt.meshmatcap_vert,fragmentShader:Vt.meshmatcap_frag},points:{uniforms:De([dt.points,dt.fog]),vertexShader:Vt.points_vert,fragmentShader:Vt.points_frag},dashed:{uniforms:De([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Vt.linedashed_vert,fragmentShader:Vt.linedashed_frag},depth:{uniforms:De([dt.common,dt.displacementmap]),vertexShader:Vt.depth_vert,fragmentShader:Vt.depth_frag},normal:{uniforms:De([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:Vt.meshnormal_vert,fragmentShader:Vt.meshnormal_frag},sprite:{uniforms:De([dt.sprite,dt.fog]),vertexShader:Vt.sprite_vert,fragmentShader:Vt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Vt.background_vert,fragmentShader:Vt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Vt.backgroundCube_vert,fragmentShader:Vt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Vt.cube_vert,fragmentShader:Vt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Vt.equirect_vert,fragmentShader:Vt.equirect_frag},distanceRGBA:{uniforms:De([dt.common,dt.displacementmap,{referencePosition:{value:new j},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Vt.distanceRGBA_vert,fragmentShader:Vt.distanceRGBA_frag},shadow:{uniforms:De([dt.lights,dt.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:Vt.shadow_vert,fragmentShader:Vt.shadow_frag}};vn.physical={uniforms:De([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new zt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new zt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new zt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Vt.meshphysical_vert,fragmentShader:Vt.meshphysical_frag};const Js={r:0,b:0,g:0},oi=new Mn,kp=new Jt;function Hp(r,t,e,n,i,s,o){const a=new Lt(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?p(a,l):x&&x.isColor&&(p(x,1),y=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===Ir)?(h===void 0&&(h=new Yt(new Ne(1,1,1),new we({name:"BackgroundCubeMaterial",uniforms:Ji(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Fe,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),oi.copy(y.backgroundRotation),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(kp.makeRotationFromEuler(oi)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==ie,(u!==x||d!==x.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Yt(new is(2,2),new we({name:"BackgroundMaterial",uniforms:Ji(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=qt.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=x,d=x.version,f=r.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function p(_,y){_.getRGB(Js,uh(r)),n.buffers.color.setClear(Js.r,Js.g,Js.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,p(a,l)},render:v,addToRenderList:m}}function Vp(r,t){const e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,D,z,I,F){let B=!1;const M=u(I,z,D);s!==M&&(s=M,c(s.object)),B=f(S,I,z,F),B&&g(S,I,z,F),F!==null&&t.update(F,r.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(S,D,z,I),F!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(F).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function h(S){return r.deleteVertexArray(S)}function u(S,D,z){const I=z.wireframe===!0;let F=n[S.id];F===void 0&&(F={},n[S.id]=F);let B=F[D.id];B===void 0&&(B={},F[D.id]=B);let M=B[I];return M===void 0&&(M=d(l()),B[I]=M),M}function d(S){const D=[],z=[],I=[];for(let F=0;F<e;F++)D[F]=0,z[F]=0,I[F]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:I,object:S,attributes:{},index:null}}function f(S,D,z,I){const F=s.attributes,B=D.attributes;let M=0;const N=z.getAttributes();for(const A in N)if(N[A].location>=0){const k=F[A];let G=B[A];if(G===void 0&&(A==="instanceMatrix"&&S.instanceMatrix&&(G=S.instanceMatrix),A==="instanceColor"&&S.instanceColor&&(G=S.instanceColor)),k===void 0||k.attribute!==G||G&&k.data!==G.data)return!0;M++}return s.attributesNum!==M||s.index!==I}function g(S,D,z,I){const F={},B=D.attributes;let M=0;const N=z.getAttributes();for(const A in N)if(N[A].location>=0){let k=B[A];k===void 0&&(A==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),A==="instanceColor"&&S.instanceColor&&(k=S.instanceColor));const G={};G.attribute=k,k&&k.data&&(G.data=k.data),F[A]=G,M++}s.attributes=F,s.attributesNum=M,s.index=I}function v(){const S=s.newAttributes;for(let D=0,z=S.length;D<z;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const z=s.newAttributes,I=s.enabledAttributes,F=s.attributeDivisors;z[S]=1,I[S]===0&&(r.enableVertexAttribArray(S),I[S]=1),F[S]!==D&&(r.vertexAttribDivisor(S,D),F[S]=D)}function _(){const S=s.newAttributes,D=s.enabledAttributes;for(let z=0,I=D.length;z<I;z++)D[z]!==S[z]&&(r.disableVertexAttribArray(z),D[z]=0)}function y(S,D,z,I,F,B,M){M===!0?r.vertexAttribIPointer(S,D,z,F,B):r.vertexAttribPointer(S,D,z,I,F,B)}function x(S,D,z,I){v();const F=I.attributes,B=z.getAttributes(),M=D.defaultAttributeValues;for(const N in B){const A=B[N];if(A.location>=0){let O=F[N];if(O===void 0&&(N==="instanceMatrix"&&S.instanceMatrix&&(O=S.instanceMatrix),N==="instanceColor"&&S.instanceColor&&(O=S.instanceColor)),O!==void 0){const k=O.normalized,G=O.itemSize,H=t.get(O);if(H===void 0)continue;const tt=H.buffer,Y=H.type,$=H.bytesPerElement,at=Y===r.INT||Y===r.UNSIGNED_INT||O.gpuType===ya;if(O.isInterleavedBufferAttribute){const nt=O.data,ot=nt.stride,pt=O.offset;if(nt.isInstancedInterleavedBuffer){for(let ft=0;ft<A.locationSize;ft++)p(A.location+ft,nt.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ft=0;ft<A.locationSize;ft++)m(A.location+ft);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let ft=0;ft<A.locationSize;ft++)y(A.location+ft,G/A.locationSize,Y,k,ot*$,(pt+G/A.locationSize*ft)*$,at)}else{if(O.isInstancedBufferAttribute){for(let nt=0;nt<A.locationSize;nt++)p(A.location+nt,O.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let nt=0;nt<A.locationSize;nt++)m(A.location+nt);r.bindBuffer(r.ARRAY_BUFFER,tt);for(let nt=0;nt<A.locationSize;nt++)y(A.location+nt,G/A.locationSize,Y,k,G*$,G/A.locationSize*nt*$,at)}}else if(M!==void 0){const k=M[N];if(k!==void 0)switch(k.length){case 2:r.vertexAttrib2fv(A.location,k);break;case 3:r.vertexAttrib3fv(A.location,k);break;case 4:r.vertexAttrib4fv(A.location,k);break;default:r.vertexAttrib1fv(A.location,k)}}}}_()}function P(){T();for(const S in n){const D=n[S];for(const z in D){const I=D[z];for(const F in I)h(I[F].object),delete I[F];delete D[z]}delete n[S]}}function b(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const z in D){const I=D[z];for(const F in I)h(I[F].object),delete I[F];delete D[z]}delete n[S.id]}function E(S){for(const D in n){const z=n[D];if(z[S.id]===void 0)continue;const I=z[S.id];for(const F in I)h(I[F].object),delete I[F];delete z[S.id]}}function T(){w(),o=!0,s!==i&&(s=i,c(s.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:T,resetDefaultState:w,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:E,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function Gp(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wp(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Ke&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){const T=E===$e&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==xn&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Xe&&!T)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),_=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),y=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,b=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:P,maxSamples:b}}function Xp(r){const t=this;let e=null,n=0,i=!1,s=!1;const o=new hi,a=new Ht,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=r.get(u);if(!i||g===null||g.length===0||s&&!m)s?h(null):c();else{const _=s?0:n,y=_*4;let x=p.clippingState||null;l.value=x,x=h(g,d,y,f);for(let P=0;P!==y;++P)x[P]=e[P];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function qp(r){let t=new WeakMap;function e(o,a){return a===br?o.mapping=$i:a===Bo&&(o.mapping=Ki),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===br||a===Bo)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nd(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}class Da extends dh{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Hi=4,bl=[.125,.215,.35,.446,.526,.582],fi=20,oo=new Da,Tl=new Lt;let ao=null,lo=0,co=0,ho=!1;const ui=(1+Math.sqrt(5))/2,Fi=1/ui,Al=[new j(-ui,Fi,0),new j(ui,Fi,0),new j(-Fi,0,ui),new j(Fi,0,ui),new j(0,ui,-Fi),new j(0,ui,Fi),new j(-1,1,-1),new j(1,1,-1),new j(-1,1,1),new j(1,1,1)];class Cr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,i,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Pl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Rl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ao,lo,co),this._renderer.xr.enabled=ho,t.scissorTest=!1,Qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$i||t.mapping===Ki?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ao=this._renderer.getRenderTarget(),lo=this._renderer.getActiveCubeFace(),co=this._renderer.getActiveMipmapLevel(),ho=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:$e,format:Ke,colorSpace:xi,depthBuffer:!1},i=Cl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Cl(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Yp(s)),this._blurMaterial=jp(s,t,e)}return i}_compileMaterial(t){const e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,oo)}_sceneToCubeUV(t,e,n,i){const a=new Ze(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Tl),h.toneMapping=Jn,h.autoClear=!1;const f=new lh({name:"PMREM.Background",side:Fe,depthWrite:!1,depthTest:!1}),g=new Yt(new Ne,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(Tl),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):_===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;Qs(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===$i||t.mapping===Ki;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Pl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Rl());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const l=this._cubeSize;Qs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Al[(i-s-1)%Al.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*fi-1),v=s/g,m=isFinite(s)?1+Math.floor(h*v):fi;m>fi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${fi}`);const p=[];let _=0;for(let E=0;E<fi;++E){const T=E/v,w=Math.exp(-T*T/2);p.push(w),E===0?_+=w:E<m&&(_+=2*w)}for(let E=0;E<p.length;E++)p[E]=p[E]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],P=3*x*(i>y-Hi?i-y+Hi:0),b=4*(this._cubeSize-x);Qs(e,P,b,3*x,2*x),l.setRenderTarget(e),l.render(u,oo)}}function Yp(r){const t=[],e=[],n=[];let i=r;const s=r-Hi+1+bl.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Hi?l=bl[o-r+Hi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let b=0;b<f;b++){const E=b%3*2/3-1,T=b>2?0:-1,w=[E,T,0,E+2/3,T,0,E+2/3,T+1,0,E,T,0,E+2/3,T+1,0,E,T+1,0];_.set(w,v*g*b),y.set(d,m*g*b);const S=[b,b,b,b,b,b];x.set(S,p*g*b)}const P=new ze;P.setAttribute("position",new _e(_,v)),P.setAttribute("uv",new _e(y,m)),P.setAttribute("faceIndex",new _e(x,p)),t.push(P),i>Hi&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Cl(r,t,e){const n=new yn(r,t,e);return n.texture.mapping=Ir,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function jp(r,t,e){const n=new Float32Array(fi),i=new j(0,1,0);return new we({name:"SphericalGaussianBlur",defines:{n:fi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:Ee,depthTest:!1,depthWrite:!1})}function Rl(){return new we({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ia(),fragmentShader:`

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
		`,blending:Ee,depthTest:!1,depthWrite:!1})}function Pl(){return new we({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ia(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ee,depthTest:!1,depthWrite:!1})}function Ia(){return`

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
	`}function Zp(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===br||l===Bo,h=l===$i||l===Ki;if(c||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Cr(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new Cr(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function $p(r){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ys("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kp(r,t,e,n){const i={},s=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)t.update(d[g],r.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],r.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const P=_[y+0],b=_[y+1],E=_[y+2];d.push(P,b,b,E,E,P)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const P=y+0,b=y+1,E=y+2;d.push(P,b,b,E,E,P)}}else return;const m=new(sh(d)?hh:ch)(d,1);m.version=v;const p=s.get(u);p&&t.remove(p),s.set(u,m)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Jp(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,g){g!==0&&(r.drawElementsInstanced(n,f,s,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Qp(r){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function tm(r,t,e){const n=new WeakMap,i=new ue;function s(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){T.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let P=a.attributes.position.count*x,b=1;P>t.maxTextureSize&&(b=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const E=new Float32Array(P*b*4*u),T=new oh(E,P,b,u);T.type=Xe,T.needsUpdate=!0;const w=x*4;for(let D=0;D<u;D++){const z=p[D],I=_[D],F=y[D],B=P*b*4*D;for(let M=0;M<z.count;M++){const N=M*w;g===!0&&(i.fromBufferAttribute(z,M),E[B+N+0]=i.x,E[B+N+1]=i.y,E[B+N+2]=i.z,E[B+N+3]=0),v===!0&&(i.fromBufferAttribute(I,M),E[B+N+4]=i.x,E[B+N+5]=i.y,E[B+N+6]=i.z,E[B+N+7]=0),m===!0&&(i.fromBufferAttribute(F,M),E[B+N+8]=i.x,E[B+N+9]=i.y,E[B+N+10]=i.z,E[B+N+11]=F.itemSize===4?i.w:1)}}d={count:u,texture:T,size:new zt(P,b)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const v=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(r,"morphTargetBaseInfluence",v),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function em(r,t,e,n){let i=new WeakMap;function s(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}class Na extends Te{constructor(t,e,n,i,s,o,a,l,c,h=Xi){if(h!==Xi&&h!==vi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Xi&&(n=mi),n===void 0&&h===vi&&(n=gi),super(null,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:Oe,this.minFilter=l!==void 0?l:Oe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const mh=new Te,Ll=new Na(1,1),gh=new oh,vh=new zu,_h=new fh,Dl=[],Il=[],Nl=new Float32Array(16),Ul=new Float32Array(9),Fl=new Float32Array(4);function ss(r,t,e){const n=r[0];if(n<=0||n>0)return r;const i=t*e;let s=Dl[i];if(s===void 0&&(s=new Float32Array(i),Dl[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function ye(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function Me(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Ur(r,t){let e=Il[t];e===void 0&&(e=new Int32Array(t),Il[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function nm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function im(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2fv(this.addr,t),Me(e,t)}}function sm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;r.uniform3fv(this.addr,t),Me(e,t)}}function rm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4fv(this.addr,t),Me(e,t)}}function om(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Fl.set(n),r.uniformMatrix2fv(this.addr,!1,Fl),Me(e,n)}}function am(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Ul.set(n),r.uniformMatrix3fv(this.addr,!1,Ul),Me(e,n)}}function lm(r,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;Nl.set(n),r.uniformMatrix4fv(this.addr,!1,Nl),Me(e,n)}}function cm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2iv(this.addr,t),Me(e,t)}}function um(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;r.uniform3iv(this.addr,t),Me(e,t)}}function dm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4iv(this.addr,t),Me(e,t)}}function fm(r,t){const e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;r.uniform2uiv(this.addr,t),Me(e,t)}}function mm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;r.uniform3uiv(this.addr,t),Me(e,t)}}function gm(r,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;r.uniform4uiv(this.addr,t),Me(e,t)}}function vm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ll.compareFunction=ih,s=Ll):s=mh,e.setTexture2D(t||s,i)}function _m(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||vh,i)}function xm(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||_h,i)}function ym(r,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||gh,i)}function Mm(r){switch(r){case 5126:return nm;case 35664:return im;case 35665:return sm;case 35666:return rm;case 35674:return om;case 35675:return am;case 35676:return lm;case 5124:case 35670:return cm;case 35667:case 35671:return hm;case 35668:case 35672:return um;case 35669:case 35673:return dm;case 5125:return fm;case 36294:return pm;case 36295:return mm;case 36296:return gm;case 35678:case 36198:case 36298:case 36306:case 35682:return vm;case 35679:case 36299:case 36307:return _m;case 35680:case 36300:case 36308:case 36293:return xm;case 36289:case 36303:case 36311:case 36292:return ym}}function Sm(r,t){r.uniform1fv(this.addr,t)}function wm(r,t){const e=ss(t,this.size,2);r.uniform2fv(this.addr,e)}function Em(r,t){const e=ss(t,this.size,3);r.uniform3fv(this.addr,e)}function bm(r,t){const e=ss(t,this.size,4);r.uniform4fv(this.addr,e)}function Tm(r,t){const e=ss(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Am(r,t){const e=ss(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Cm(r,t){const e=ss(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Rm(r,t){r.uniform1iv(this.addr,t)}function Pm(r,t){r.uniform2iv(this.addr,t)}function Lm(r,t){r.uniform3iv(this.addr,t)}function Dm(r,t){r.uniform4iv(this.addr,t)}function Im(r,t){r.uniform1uiv(this.addr,t)}function Nm(r,t){r.uniform2uiv(this.addr,t)}function Um(r,t){r.uniform3uiv(this.addr,t)}function Fm(r,t){r.uniform4uiv(this.addr,t)}function Om(r,t,e){const n=this.cache,i=t.length,s=Ur(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||mh,s[o])}function zm(r,t,e){const n=this.cache,i=t.length,s=Ur(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||vh,s[o])}function Bm(r,t,e){const n=this.cache,i=t.length,s=Ur(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||_h,s[o])}function km(r,t,e){const n=this.cache,i=t.length,s=Ur(e,i);ye(n,s)||(r.uniform1iv(this.addr,s),Me(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||gh,s[o])}function Hm(r){switch(r){case 5126:return Sm;case 35664:return wm;case 35665:return Em;case 35666:return bm;case 35674:return Tm;case 35675:return Am;case 35676:return Cm;case 5124:case 35670:return Rm;case 35667:case 35671:return Pm;case 35668:case 35672:return Lm;case 35669:case 35673:return Dm;case 5125:return Im;case 36294:return Nm;case 36295:return Um;case 36296:return Fm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return zm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return km}}class Vm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mm(e.type)}}class Gm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Hm(e.type)}}class Wm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(t,e[a.id],n)}}}const uo=/(\w+)(\])?(\[|\.)?/g;function Ol(r,t){r.seq.push(t),r.map[t.id]=t}function Xm(r,t,e){const n=r.name,i=n.length;for(uo.lastIndex=0;;){const s=uo.exec(n),o=uo.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Ol(e,c===void 0?new Vm(a,r,t):new Gm(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new Wm(a),Ol(e,u)),e=u}}}class Sr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=t.getActiveUniform(e,i),o=t.getUniformLocation(e,s.name);Xm(s,o,this)}}setValue(t,e,n,i){const s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){const a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,s=t.length;i!==s;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function zl(r,t,e){const n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}const qm=37297;let Ym=0;function jm(r,t){const e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const Bl=new Ht;function Zm(r){qt._getMatrix(Bl,qt.workingColorSpace,r);const t=`mat3( ${Bl.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(r)){case Nr:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function kl(r,t,e){const n=r.getShaderParameter(t,r.COMPILE_STATUS),i=r.getShaderInfoLog(t).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return e.toUpperCase()+`

`+i+`

`+jm(r.getShaderSource(t),o)}else return i}function $m(r,t){const e=Zm(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Km(r,t){let e;switch(t){case Vc:e="Linear";break;case Gc:e="Reinhard";break;case Wc:e="Cineon";break;case xa:e="ACESFilmic";break;case Xc:e="AgX";break;case qc:e="Neutral";break;case eu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const tr=new j;function Jm(){qt.getLuminanceCoefficients(tr);const r=tr.x.toFixed(4),t=tr.y.toFixed(4),e=tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Qm(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ms).join(`
`)}function t0(r){const t=[];for(const e in r){const n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function e0(r,t){const e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(t,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Ms(r){return r!==""}function Hl(r,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vl(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const n0=/^[ \t]*#include +<([\w\d./]+)>/gm;function fa(r){return r.replace(n0,s0)}const i0=new Map;function s0(r,t){let e=Vt[t];if(e===void 0){const n=i0.get(t);if(n!==void 0)e=Vt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return fa(e)}const r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gl(r){return r.replace(r0,o0)}function o0(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wl(r){let t=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function a0(r){let t="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===zc?t="SHADOWMAP_TYPE_PCF":r.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Un&&(t="SHADOWMAP_TYPE_VSM"),t}function l0(r){let t="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case $i:case Ki:t="ENVMAP_TYPE_CUBE";break;case Ir:t="ENVMAP_TYPE_CUBE_UV";break}return t}function c0(r){let t="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ki:t="ENVMAP_MODE_REFRACTION";break}return t}function h0(r){let t="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case Hc:t="ENVMAP_BLENDING_MULTIPLY";break;case Qh:t="ENVMAP_BLENDING_MIX";break;case tu:t="ENVMAP_BLENDING_ADD";break}return t}function u0(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function d0(r,t,e,n){const i=r.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=a0(e),c=l0(e),h=c0(e),u=h0(e),d=u0(e),f=Qm(e),g=t0(s),v=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Ms).join(`
`),p.length>0&&(p+=`
`)):(m=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ms).join(`
`),p=[Wl(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Jn?"#define TONE_MAPPING":"",e.toneMapping!==Jn?Vt.tonemapping_pars_fragment:"",e.toneMapping!==Jn?Km("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Vt.colorspace_pars_fragment,$m("linearToOutputTexel",e.outputColorSpace),Jm(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ms).join(`
`)),o=fa(o),o=Hl(o,e),o=Vl(o,e),a=fa(a),a=Hl(a,e),a=Vl(a,e),o=Gl(o),a=Gl(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Tr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Tr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+o,x=_+p+a,P=zl(i,i.VERTEX_SHADER,y),b=zl(i,i.FRAGMENT_SHADER,x);i.attachShader(v,P),i.attachShader(v,b),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function E(D){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),I=i.getShaderInfoLog(P).trim(),F=i.getShaderInfoLog(b).trim();let B=!0,M=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(B=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,v,P,b);else{const N=kl(i,P,"vertex"),A=kl(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+N+`
`+A)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||F==="")&&(M=!1);M&&(D.diagnostics={runnable:B,programLog:z,vertexShader:{log:I,prefix:m},fragmentShader:{log:F,prefix:p}})}i.deleteShader(P),i.deleteShader(b),T=new Sr(i,v),w=e0(i,v)}let T;this.getUniforms=function(){return T===void 0&&E(this),T};let w;this.getAttributes=function(){return w===void 0&&E(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,qm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ym++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=b,this}let f0=0;class p0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new m0(t),e.set(t,n)),n}}class m0{constructor(t){this.id=f0++,this.code=t,this.usedTimes=0}}function g0(r,t,e,n,i,s,o){const a=new Pa,l=new p0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,D,z,I){const F=z.fog,B=I.geometry,M=w.isMeshStandardMaterial?z.environment:null,N=(w.isMeshStandardMaterial?e:t).get(w.envMap||M),A=N&&N.mapping===Ir?N.image.height:null,O=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,G=k!==void 0?k.length:0;let H=0;B.morphAttributes.position!==void 0&&(H=1),B.morphAttributes.normal!==void 0&&(H=2),B.morphAttributes.color!==void 0&&(H=3);let tt,Y,$,at;if(O){const ne=vn[O];tt=ne.vertexShader,Y=ne.fragmentShader}else tt=w.vertexShader,Y=w.fragmentShader,l.update(w),$=l.getVertexShaderID(w),at=l.getFragmentShaderID(w);const nt=r.getRenderTarget(),ot=r.state.buffers.depth.getReversed(),pt=I.isInstancedMesh===!0,ft=I.isBatchedMesh===!0,jt=!!w.map,Ot=!!w.matcap,se=!!N,W=!!w.aoMap,It=!!w.lightMap,xt=!!w.bumpMap,Wt=!!w.normalMap,Pt=!!w.displacementMap,ee=!!w.emissiveMap,Rt=!!w.metalnessMap,U=!!w.roughnessMap,R=w.anisotropy>0,Z=w.clearcoat>0,it=w.dispersion>0,rt=w.iridescence>0,et=w.sheen>0,Et=w.transmission>0,ut=R&&!!w.anisotropyMap,mt=Z&&!!w.clearcoatMap,Gt=Z&&!!w.clearcoatNormalMap,lt=Z&&!!w.clearcoatRoughnessMap,Mt=rt&&!!w.iridescenceMap,Dt=rt&&!!w.iridescenceThicknessMap,Nt=et&&!!w.sheenColorMap,St=et&&!!w.sheenRoughnessMap,Xt=!!w.specularMap,Ut=!!w.specularColorMap,Zt=!!w.specularIntensityMap,V=Et&&!!w.transmissionMap,ht=Et&&!!w.thicknessMap,Q=!!w.gradientMap,st=!!w.alphaMap,yt=w.alphaTest>0,gt=!!w.alphaHash,Bt=!!w.extensions;let he=Jn;w.toneMapped&&(nt===null||nt.isXRRenderTarget===!0)&&(he=r.toneMapping);const Ae={shaderID:O,shaderType:w.type,shaderName:w.name,vertexShader:tt,fragmentShader:Y,defines:w.defines,customVertexShaderID:$,customFragmentShaderID:at,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:ft,batchingColor:ft&&I._colorsTexture!==null,instancing:pt,instancingColor:pt&&I.instanceColor!==null,instancingMorph:pt&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:nt===null?r.outputColorSpace:nt.isXRRenderTarget===!0?nt.texture.colorSpace:xi,alphaToCoverage:!!w.alphaToCoverage,map:jt,matcap:Ot,envMap:se,envMapMode:se&&N.mapping,envMapCubeUVHeight:A,aoMap:W,lightMap:It,bumpMap:xt,normalMap:Wt,displacementMap:d&&Pt,emissiveMap:ee,normalMapObjectSpace:Wt&&w.normalMapType===ru,normalMapTangentSpace:Wt&&w.normalMapType===Aa,metalnessMap:Rt,roughnessMap:U,anisotropy:R,anisotropyMap:ut,clearcoat:Z,clearcoatMap:mt,clearcoatNormalMap:Gt,clearcoatRoughnessMap:lt,dispersion:it,iridescence:rt,iridescenceMap:Mt,iridescenceThicknessMap:Dt,sheen:et,sheenColorMap:Nt,sheenRoughnessMap:St,specularMap:Xt,specularColorMap:Ut,specularIntensityMap:Zt,transmission:Et,transmissionMap:V,thicknessMap:ht,gradientMap:Q,opaque:w.transparent===!1&&w.blending===Wi&&w.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:gt,combine:w.combine,mapUv:jt&&v(w.map.channel),aoMapUv:W&&v(w.aoMap.channel),lightMapUv:It&&v(w.lightMap.channel),bumpMapUv:xt&&v(w.bumpMap.channel),normalMapUv:Wt&&v(w.normalMap.channel),displacementMapUv:Pt&&v(w.displacementMap.channel),emissiveMapUv:ee&&v(w.emissiveMap.channel),metalnessMapUv:Rt&&v(w.metalnessMap.channel),roughnessMapUv:U&&v(w.roughnessMap.channel),anisotropyMapUv:ut&&v(w.anisotropyMap.channel),clearcoatMapUv:mt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:Dt&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:St&&v(w.sheenRoughnessMap.channel),specularMapUv:Xt&&v(w.specularMap.channel),specularColorMapUv:Ut&&v(w.specularColorMap.channel),specularIntensityMapUv:Zt&&v(w.specularIntensityMap.channel),transmissionMapUv:V&&v(w.transmissionMap.channel),thicknessMapUv:ht&&v(w.thicknessMap.channel),alphaMapUv:st&&v(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Wt||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!B.attributes.uv&&(jt||st),fog:!!F,useFog:w.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:ot,skinning:I.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:G,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:he,decodeVideoTexture:jt&&w.map.isVideoTexture===!0&&qt.getTransfer(w.map.colorSpace)===ie,decodeVideoTextureEmissive:ee&&w.emissiveMap.isVideoTexture===!0&&qt.getTransfer(w.emissiveMap.colorSpace)===ie,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ve,flipSided:w.side===Fe,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Bt&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Bt&&w.extensions.multiDraw===!0||ft)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ae.vertexUv1s=c.has(1),Ae.vertexUv2s=c.has(2),Ae.vertexUv3s=c.has(3),c.clear(),Ae}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(_(S,w),y(S,w),S.push(r.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=g[w.type];let D;if(S){const z=vn[S];D=$n.clone(z.uniforms)}else D=w.uniforms;return D}function P(w,S){let D;for(let z=0,I=h.length;z<I;z++){const F=h[z];if(F.cacheKey===S){D=F,++D.usedTimes;break}}return D===void 0&&(D=new d0(r,S,w,s),h.push(D)),D}function b(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function E(w){l.remove(w)}function T(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:P,releaseProgram:b,releaseShaderCache:E,programs:h,dispose:T}}function v0(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function _0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Xl(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function ql(){const r=[];let t=0;const e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,m){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||_0),n.length>1&&n.sort(d||Xl),i.length>1&&i.sort(d||Xl)}function h(){for(let u=t,d=r.length;u<d;u++){const f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function x0(){let r=new WeakMap;function t(n,i){const s=r.get(n);let o;return s===void 0?(o=new ql,r.set(n,[o])):i>=s.length?(o=new ql,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function y0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new j,color:new Lt};break;case"SpotLight":e={position:new j,direction:new j,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new j,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new j,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new j,halfWidth:new j,halfHeight:new j};break}return r[t.id]=e,e}}}function M0(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new zt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}let S0=0;function w0(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function E0(r){const t=new y0,e=M0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new j);const i=new j,s=new Jt,o=new Jt;function a(c){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,P=0,b=0,E=0;c.sort(w0);for(let w=0,S=c.length;w<S;w++){const D=c[w],z=D.color,I=D.intensity,F=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*I,u+=z.g*I,d+=z.b*I;else if(D.isLightProbe){for(let M=0;M<9;M++)n.probe[M].addScaledVector(D.sh.coefficients[M],I);E++}else if(D.isDirectionalLight){const M=t.get(D);if(M.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const N=D.shadow,A=e.get(D);A.shadowIntensity=N.intensity,A.shadowBias=N.bias,A.shadowNormalBias=N.normalBias,A.shadowRadius=N.radius,A.shadowMapSize=N.mapSize,n.directionalShadow[f]=A,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=D.shadow.matrix,_++}n.directional[f]=M,f++}else if(D.isSpotLight){const M=t.get(D);M.position.setFromMatrixPosition(D.matrixWorld),M.color.copy(z).multiplyScalar(I),M.distance=F,M.coneCos=Math.cos(D.angle),M.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),M.decay=D.decay,n.spot[v]=M;const N=D.shadow;if(D.map&&(n.spotLightMap[P]=D.map,P++,N.updateMatrices(D),D.castShadow&&b++),n.spotLightMatrix[v]=N.matrix,D.castShadow){const A=e.get(D);A.shadowIntensity=N.intensity,A.shadowBias=N.bias,A.shadowNormalBias=N.normalBias,A.shadowRadius=N.radius,A.shadowMapSize=N.mapSize,n.spotShadow[v]=A,n.spotShadowMap[v]=B,x++}v++}else if(D.isRectAreaLight){const M=t.get(D);M.color.copy(z).multiplyScalar(I),M.halfWidth.set(D.width*.5,0,0),M.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=M,m++}else if(D.isPointLight){const M=t.get(D);if(M.color.copy(D.color).multiplyScalar(D.intensity),M.distance=D.distance,M.decay=D.decay,D.castShadow){const N=D.shadow,A=e.get(D);A.shadowIntensity=N.intensity,A.shadowBias=N.bias,A.shadowNormalBias=N.normalBias,A.shadowRadius=N.radius,A.shadowMapSize=N.mapSize,A.shadowCameraNear=N.camera.near,A.shadowCameraFar=N.camera.far,n.pointShadow[g]=A,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=M,g++}else if(D.isHemisphereLight){const M=t.get(D);M.skyColor.copy(D.color).multiplyScalar(I),M.groundColor.copy(D.groundColor).multiplyScalar(I),n.hemi[p]=M,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=dt.LTC_FLOAT_1,n.rectAreaLTC2=dt.LTC_FLOAT_2):(n.rectAreaLTC1=dt.LTC_HALF_1,n.rectAreaLTC2=dt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const T=n.hash;(T.directionalLength!==f||T.pointLength!==g||T.spotLength!==v||T.rectAreaLength!==m||T.hemiLength!==p||T.numDirectionalShadows!==_||T.numPointShadows!==y||T.numSpotShadows!==x||T.numSpotMaps!==P||T.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+P-b,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,T.directionalLength=f,T.pointLength=g,T.spotLength=v,T.rectAreaLength=m,T.hemiLength=p,T.numDirectionalShadows=_,T.numPointShadows=y,T.numSpotShadows=x,T.numSpotMaps=P,T.numLightProbes=E,n.version=S0++)}function l(c,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=c.length;p<_;p++){const y=c[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(y.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function Yl(r){const t=new E0(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function b0(r){let t=new WeakMap;function e(i,s=0){const o=t.get(i);let a;return o===void 0?(a=new Yl(r),t.set(i,[a])):s>=o.length?(a=new Yl(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class T0 extends Mi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=iu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class A0 extends Mi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const C0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,R0=`uniform sampler2D shadow_pass;
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
}`;function P0(r,t,e){let n=new La;const i=new zt,s=new zt,o=new ue,a=new T0({depthPacking:su}),l=new A0,c={},h=e.maxTextureSize,u={[ti]:Fe,[Fe]:ti,[ve]:ve},d=new we({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new zt},radius:{value:4}},vertexShader:C0,fragmentShader:R0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new ze;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zc;let p=this.type;this.render=function(b,E,T){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const w=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Ee),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=p!==Un&&this.type===Un,F=p===Un&&this.type!==Un;for(let B=0,M=b.length;B<M;B++){const N=b[B],A=N.shadow;if(A===void 0){console.warn("THREE.WebGLShadowMap:",N,"has no shadow.");continue}if(A.autoUpdate===!1&&A.needsUpdate===!1)continue;i.copy(A.mapSize);const O=A.getFrameExtents();if(i.multiply(O),s.copy(A.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,A.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,A.mapSize.y=s.y)),A.map===null||I===!0||F===!0){const G=this.type!==Un?{minFilter:Oe,magFilter:Oe}:{};A.map!==null&&A.map.dispose(),A.map=new yn(i.x,i.y,G),A.map.texture.name=N.name+".shadowMap",A.camera.updateProjectionMatrix()}r.setRenderTarget(A.map),r.clear();const k=A.getViewportCount();for(let G=0;G<k;G++){const H=A.getViewport(G);o.set(s.x*H.x,s.y*H.y,s.x*H.z,s.y*H.w),z.viewport(o),A.updateMatrices(N,G),n=A.getFrustum(),x(E,T,A.camera,N,this.type)}A.isPointLightShadow!==!0&&this.type===Un&&_(A,T),A.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(w,S,D)};function _(b,E){const T=t.update(v);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new yn(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,r.setRenderTarget(b.mapPass),r.clear(),r.renderBufferDirect(E,null,T,d,v,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,r.setRenderTarget(b.map),r.clear(),r.renderBufferDirect(E,null,T,f,v,null)}function y(b,E,T,w){let S=null;const D=T.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)S=D;else if(S=T.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const z=S.uuid,I=E.uuid;let F=c[z];F===void 0&&(F={},c[z]=F);let B=F[I];B===void 0&&(B=S.clone(),F[I]=B,E.addEventListener("dispose",P)),S=B}if(S.visible=E.visible,S.wireframe=E.wireframe,w===Un?S.side=E.shadowSide!==null?E.shadowSide:E.side:S.side=E.shadowSide!==null?E.shadowSide:u[E.side],S.alphaMap=E.alphaMap,S.alphaTest=E.alphaTest,S.map=E.map,S.clipShadows=E.clipShadows,S.clippingPlanes=E.clippingPlanes,S.clipIntersection=E.clipIntersection,S.displacementMap=E.displacementMap,S.displacementScale=E.displacementScale,S.displacementBias=E.displacementBias,S.wireframeLinewidth=E.wireframeLinewidth,S.linewidth=E.linewidth,T.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=T}return S}function x(b,E,T,w,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Un)&&(!b.frustumCulled||n.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,b.matrixWorld);const I=t.update(b),F=b.material;if(Array.isArray(F)){const B=I.groups;for(let M=0,N=B.length;M<N;M++){const A=B[M],O=F[A.materialIndex];if(O&&O.visible){const k=y(b,O,w,S);b.onBeforeShadow(r,b,E,T,I,k,A),r.renderBufferDirect(T,null,I,k,b,A),b.onAfterShadow(r,b,E,T,I,k,A)}}}else if(F.visible){const B=y(b,F,w,S);b.onBeforeShadow(r,b,E,T,I,B,null),r.renderBufferDirect(T,null,I,B,b,null),b.onAfterShadow(r,b,E,T,I,B,null)}}const z=b.children;for(let I=0,F=z.length;I<F;I++)x(z[I],E,T,w,S)}function P(b){b.target.removeEventListener("dispose",P);for(const T in c){const w=c[T],S=b.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const L0={[Do]:Io,[No]:Oo,[Uo]:zo,[Zi]:Fo,[Io]:Do,[Oo]:No,[zo]:Uo,[Fo]:Zi};function D0(r,t){function e(){let V=!1;const ht=new ue;let Q=null;const st=new ue(0,0,0,0);return{setMask:function(yt){Q!==yt&&!V&&(r.colorMask(yt,yt,yt,yt),Q=yt)},setLocked:function(yt){V=yt},setClear:function(yt,gt,Bt,he,Ae){Ae===!0&&(yt*=he,gt*=he,Bt*=he),ht.set(yt,gt,Bt,he),st.equals(ht)===!1&&(r.clearColor(yt,gt,Bt,he),st.copy(ht))},reset:function(){V=!1,Q=null,st.set(-1,0,0,0)}}}function n(){let V=!1,ht=!1,Q=null,st=null,yt=null;return{setReversed:function(gt){if(ht!==gt){const Bt=t.get("EXT_clip_control");ht?Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.ZERO_TO_ONE_EXT):Bt.clipControlEXT(Bt.LOWER_LEFT_EXT,Bt.NEGATIVE_ONE_TO_ONE_EXT);const he=yt;yt=null,this.setClear(he)}ht=gt},getReversed:function(){return ht},setTest:function(gt){gt?nt(r.DEPTH_TEST):ot(r.DEPTH_TEST)},setMask:function(gt){Q!==gt&&!V&&(r.depthMask(gt),Q=gt)},setFunc:function(gt){if(ht&&(gt=L0[gt]),st!==gt){switch(gt){case Do:r.depthFunc(r.NEVER);break;case Io:r.depthFunc(r.ALWAYS);break;case No:r.depthFunc(r.LESS);break;case Zi:r.depthFunc(r.LEQUAL);break;case Uo:r.depthFunc(r.EQUAL);break;case Fo:r.depthFunc(r.GEQUAL);break;case Oo:r.depthFunc(r.GREATER);break;case zo:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}st=gt}},setLocked:function(gt){V=gt},setClear:function(gt){yt!==gt&&(ht&&(gt=1-gt),r.clearDepth(gt),yt=gt)},reset:function(){V=!1,Q=null,st=null,yt=null,ht=!1}}}function i(){let V=!1,ht=null,Q=null,st=null,yt=null,gt=null,Bt=null,he=null,Ae=null;return{setTest:function(ne){V||(ne?nt(r.STENCIL_TEST):ot(r.STENCIL_TEST))},setMask:function(ne){ht!==ne&&!V&&(r.stencilMask(ne),ht=ne)},setFunc:function(ne,Qe,Sn){(Q!==ne||st!==Qe||yt!==Sn)&&(r.stencilFunc(ne,Qe,Sn),Q=ne,st=Qe,yt=Sn)},setOp:function(ne,Qe,Sn){(gt!==ne||Bt!==Qe||he!==Sn)&&(r.stencilOp(ne,Qe,Sn),gt=ne,Bt=Qe,he=Sn)},setLocked:function(ne){V=ne},setClear:function(ne){Ae!==ne&&(r.clearStencil(ne),Ae=ne)},reset:function(){V=!1,ht=null,Q=null,st=null,yt=null,gt=null,Bt=null,he=null,Ae=null}}}const s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,P=null,b=null,E=new Lt(0,0,0),T=0,w=!1,S=null,D=null,z=null,I=null,F=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let M=!1,N=0;const A=r.getParameter(r.VERSION);A.indexOf("WebGL")!==-1?(N=parseFloat(/^WebGL (\d)/.exec(A)[1]),M=N>=1):A.indexOf("OpenGL ES")!==-1&&(N=parseFloat(/^OpenGL ES (\d)/.exec(A)[1]),M=N>=2);let O=null,k={};const G=r.getParameter(r.SCISSOR_BOX),H=r.getParameter(r.VIEWPORT),tt=new ue().fromArray(G),Y=new ue().fromArray(H);function $(V,ht,Q,st){const yt=new Uint8Array(4),gt=r.createTexture();r.bindTexture(V,gt),r.texParameteri(V,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(V,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Bt=0;Bt<Q;Bt++)V===r.TEXTURE_3D||V===r.TEXTURE_2D_ARRAY?r.texImage3D(ht,0,r.RGBA,1,1,st,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(ht+Bt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return gt}const at={};at[r.TEXTURE_2D]=$(r.TEXTURE_2D,r.TEXTURE_2D,1),at[r.TEXTURE_CUBE_MAP]=$(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[r.TEXTURE_2D_ARRAY]=$(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),at[r.TEXTURE_3D]=$(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),nt(r.DEPTH_TEST),o.setFunc(Zi),xt(!1),Wt(Ja),nt(r.CULL_FACE),W(Ee);function nt(V){h[V]!==!0&&(r.enable(V),h[V]=!0)}function ot(V){h[V]!==!1&&(r.disable(V),h[V]=!1)}function pt(V,ht){return u[V]!==ht?(r.bindFramebuffer(V,ht),u[V]=ht,V===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ht),V===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ht),!0):!1}function ft(V,ht){let Q=f,st=!1;if(V){Q=d.get(ht),Q===void 0&&(Q=[],d.set(ht,Q));const yt=V.textures;if(Q.length!==yt.length||Q[0]!==r.COLOR_ATTACHMENT0){for(let gt=0,Bt=yt.length;gt<Bt;gt++)Q[gt]=r.COLOR_ATTACHMENT0+gt;Q.length=yt.length,st=!0}}else Q[0]!==r.BACK&&(Q[0]=r.BACK,st=!0);st&&r.drawBuffers(Q)}function jt(V){return g!==V?(r.useProgram(V),g=V,!0):!1}const Ot={[an]:r.FUNC_ADD,[Bh]:r.FUNC_SUBTRACT,[kh]:r.FUNC_REVERSE_SUBTRACT};Ot[Hh]=r.MIN,Ot[Vh]=r.MAX;const se={[xs]:r.ZERO,[Gh]:r.ONE,[Wh]:r.SRC_COLOR,[Co]:r.SRC_ALPHA,[jh]:r.SRC_ALPHA_SATURATE,[Lo]:r.DST_COLOR,[Po]:r.DST_ALPHA,[Xh]:r.ONE_MINUS_SRC_COLOR,[Ro]:r.ONE_MINUS_SRC_ALPHA,[Yh]:r.ONE_MINUS_DST_COLOR,[qh]:r.ONE_MINUS_DST_ALPHA,[Zh]:r.CONSTANT_COLOR,[$h]:r.ONE_MINUS_CONSTANT_COLOR,[Kh]:r.CONSTANT_ALPHA,[Jh]:r.ONE_MINUS_CONSTANT_ALPHA};function W(V,ht,Q,st,yt,gt,Bt,he,Ae,ne){if(V===Ee){v===!0&&(ot(r.BLEND),v=!1);return}if(v===!1&&(nt(r.BLEND),v=!0),V!==kc){if(V!==m||ne!==w){if((p!==an||x!==an)&&(r.blendEquation(r.FUNC_ADD),p=an,x=an),ne)switch(V){case Wi:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qa:r.blendFunc(r.ONE,r.ONE);break;case tl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case el:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Wi:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qa:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case tl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case el:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,y=null,P=null,b=null,E.set(0,0,0),T=0,m=V,w=ne}return}yt=yt||ht,gt=gt||Q,Bt=Bt||st,(ht!==p||yt!==x)&&(r.blendEquationSeparate(Ot[ht],Ot[yt]),p=ht,x=yt),(Q!==_||st!==y||gt!==P||Bt!==b)&&(r.blendFuncSeparate(se[Q],se[st],se[gt],se[Bt]),_=Q,y=st,P=gt,b=Bt),(he.equals(E)===!1||Ae!==T)&&(r.blendColor(he.r,he.g,he.b,Ae),E.copy(he),T=Ae),m=V,w=!1}function It(V,ht){V.side===ve?ot(r.CULL_FACE):nt(r.CULL_FACE);let Q=V.side===Fe;ht&&(Q=!Q),xt(Q),V.blending===Wi&&V.transparent===!1?W(Ee):W(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const st=V.stencilWrite;a.setTest(st),st&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),ee(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?nt(r.SAMPLE_ALPHA_TO_COVERAGE):ot(r.SAMPLE_ALPHA_TO_COVERAGE)}function xt(V){S!==V&&(V?r.frontFace(r.CW):r.frontFace(r.CCW),S=V)}function Wt(V){V!==Oh?(nt(r.CULL_FACE),V!==D&&(V===Ja?r.cullFace(r.BACK):V===zh?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ot(r.CULL_FACE),D=V}function Pt(V){V!==z&&(M&&r.lineWidth(V),z=V)}function ee(V,ht,Q){V?(nt(r.POLYGON_OFFSET_FILL),(I!==ht||F!==Q)&&(r.polygonOffset(ht,Q),I=ht,F=Q)):ot(r.POLYGON_OFFSET_FILL)}function Rt(V){V?nt(r.SCISSOR_TEST):ot(r.SCISSOR_TEST)}function U(V){V===void 0&&(V=r.TEXTURE0+B-1),O!==V&&(r.activeTexture(V),O=V)}function R(V,ht,Q){Q===void 0&&(O===null?Q=r.TEXTURE0+B-1:Q=O);let st=k[Q];st===void 0&&(st={type:void 0,texture:void 0},k[Q]=st),(st.type!==V||st.texture!==ht)&&(O!==Q&&(r.activeTexture(Q),O=Q),r.bindTexture(V,ht||at[V]),st.type=V,st.texture=ht)}function Z(){const V=k[O];V!==void 0&&V.type!==void 0&&(r.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function it(){try{r.compressedTexImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{r.compressedTexImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function et(){try{r.texSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Et(){try{r.texSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ut(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function mt(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Gt(){try{r.texStorage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{r.texStorage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Mt(){try{r.texImage2D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(){try{r.texImage3D.apply(r,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Nt(V){tt.equals(V)===!1&&(r.scissor(V.x,V.y,V.z,V.w),tt.copy(V))}function St(V){Y.equals(V)===!1&&(r.viewport(V.x,V.y,V.z,V.w),Y.copy(V))}function Xt(V,ht){let Q=c.get(ht);Q===void 0&&(Q=new WeakMap,c.set(ht,Q));let st=Q.get(V);st===void 0&&(st=r.getUniformBlockIndex(ht,V.name),Q.set(V,st))}function Ut(V,ht){const st=c.get(ht).get(V);l.get(ht)!==st&&(r.uniformBlockBinding(ht,st,V.__bindingPointIndex),l.set(ht,st))}function Zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},O=null,k={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,P=null,b=null,E=new Lt(0,0,0),T=0,w=!1,S=null,D=null,z=null,I=null,F=null,tt.set(0,0,r.canvas.width,r.canvas.height),Y.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:nt,disable:ot,bindFramebuffer:pt,drawBuffers:ft,useProgram:jt,setBlending:W,setMaterial:It,setFlipSided:xt,setCullFace:Wt,setLineWidth:Pt,setPolygonOffset:ee,setScissorTest:Rt,activeTexture:U,bindTexture:R,unbindTexture:Z,compressedTexImage2D:it,compressedTexImage3D:rt,texImage2D:Mt,texImage3D:Dt,updateUBOMapping:Xt,uniformBlockBinding:Ut,texStorage2D:Gt,texStorage3D:lt,texSubImage2D:et,texSubImage3D:Et,compressedTexSubImage2D:ut,compressedTexSubImage3D:mt,scissor:Nt,viewport:St,reset:Zt}}function jl(r,t,e,n){const i=I0(n);switch(e){case Kc:return r*t;case Qc:return r*t;case th:return r*t*2;case wa:return r*t/i.components*i.byteLength;case Ea:return r*t/i.components*i.byteLength;case eh:return r*t*2/i.components*i.byteLength;case ba:return r*t*2/i.components*i.byteLength;case Jc:return r*t*3/i.components*i.byteLength;case Ke:return r*t*4/i.components*i.byteLength;case Ta:return r*t*4/i.components*i.byteLength;case vr:case _r:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case xr:case yr:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Vo:case Wo:return Math.max(r,16)*Math.max(t,8)/4;case Ho:case Go:return Math.max(r,8)*Math.max(t,8)/2;case Xo:case qo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Yo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case jo:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Zo:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case $o:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Jo:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Qo:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case ta:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case ea:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case na:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case ia:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case sa:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case ra:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case oa:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case aa:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Mr:case la:case ca:return Math.ceil(r/4)*Math.ceil(t/4)*16;case nh:case ha:return Math.ceil(r/4)*Math.ceil(t/4)*8;case ua:case da:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function I0(r){switch(r){case xn:case jc:return{byteLength:1,components:1};case Es:case Zc:case $e:return{byteLength:2,components:1};case Ma:case Sa:return{byteLength:2,components:4};case mi:case ya:case Xe:return{byteLength:4,components:1};case $c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}function N0(r,t,e,n,i,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new zt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return f?new OffscreenCanvas(U,R):Ts("canvas")}function v(U,R,Z){let it=1;const rt=Rt(U);if((rt.width>Z||rt.height>Z)&&(it=Z/Math.max(rt.width,rt.height)),it<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const et=Math.floor(it*rt.width),Et=Math.floor(it*rt.height);u===void 0&&(u=g(et,Et));const ut=R?g(et,Et):u;return ut.width=et,ut.height=Et,ut.getContext("2d").drawImage(U,0,0,et,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+et+"x"+Et+")."),ut}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){r.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?r.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(U,R,Z,it,rt=!1){if(U!==null){if(r[U]!==void 0)return r[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let et=R;if(R===r.RED&&(Z===r.FLOAT&&(et=r.R32F),Z===r.HALF_FLOAT&&(et=r.R16F),Z===r.UNSIGNED_BYTE&&(et=r.R8)),R===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(et=r.R8UI),Z===r.UNSIGNED_SHORT&&(et=r.R16UI),Z===r.UNSIGNED_INT&&(et=r.R32UI),Z===r.BYTE&&(et=r.R8I),Z===r.SHORT&&(et=r.R16I),Z===r.INT&&(et=r.R32I)),R===r.RG&&(Z===r.FLOAT&&(et=r.RG32F),Z===r.HALF_FLOAT&&(et=r.RG16F),Z===r.UNSIGNED_BYTE&&(et=r.RG8)),R===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(et=r.RG8UI),Z===r.UNSIGNED_SHORT&&(et=r.RG16UI),Z===r.UNSIGNED_INT&&(et=r.RG32UI),Z===r.BYTE&&(et=r.RG8I),Z===r.SHORT&&(et=r.RG16I),Z===r.INT&&(et=r.RG32I)),R===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(et=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(et=r.RGB16UI),Z===r.UNSIGNED_INT&&(et=r.RGB32UI),Z===r.BYTE&&(et=r.RGB8I),Z===r.SHORT&&(et=r.RGB16I),Z===r.INT&&(et=r.RGB32I)),R===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(et=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(et=r.RGBA16UI),Z===r.UNSIGNED_INT&&(et=r.RGBA32UI),Z===r.BYTE&&(et=r.RGBA8I),Z===r.SHORT&&(et=r.RGBA16I),Z===r.INT&&(et=r.RGBA32I)),R===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(et=r.RGB9_E5),R===r.RGBA){const Et=rt?Nr:qt.getTransfer(it);Z===r.FLOAT&&(et=r.RGBA32F),Z===r.HALF_FLOAT&&(et=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(et=Et===ie?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(et=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(et=r.RGB5_A1)}return(et===r.R16F||et===r.R32F||et===r.RG16F||et===r.RG32F||et===r.RGBA16F||et===r.RGBA32F)&&t.get("EXT_color_buffer_float"),et}function x(U,R){let Z;return U?R===null||R===mi||R===gi?Z=r.DEPTH24_STENCIL8:R===Xe?Z=r.DEPTH32F_STENCIL8:R===Es&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===mi||R===gi?Z=r.DEPTH_COMPONENT24:R===Xe?Z=r.DEPTH_COMPONENT32F:R===Es&&(Z=r.DEPTH_COMPONENT16),Z}function P(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==Oe&&U.minFilter!==Ue?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function b(U){const R=U.target;R.removeEventListener("dispose",b),T(R),R.isVideoTexture&&h.delete(R)}function E(U){const R=U.target;R.removeEventListener("dispose",E),S(R)}function T(U){const R=n.get(U);if(R.__webglInit===void 0)return;const Z=U.source,it=d.get(Z);if(it){const rt=it[R.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(U),Object.keys(it).length===0&&d.delete(Z)}n.remove(U)}function w(U){const R=n.get(U);r.deleteTexture(R.__webglTexture);const Z=U.source,it=d.get(Z);delete it[R.__cacheKey],o.memory.textures--}function S(U){const R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(R.__webglFramebuffer[it]))for(let rt=0;rt<R.__webglFramebuffer[it].length;rt++)r.deleteFramebuffer(R.__webglFramebuffer[it][rt]);else r.deleteFramebuffer(R.__webglFramebuffer[it]);R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer[it])}else{if(Array.isArray(R.__webglFramebuffer))for(let it=0;it<R.__webglFramebuffer.length;it++)r.deleteFramebuffer(R.__webglFramebuffer[it]);else r.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&r.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&r.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let it=0;it<R.__webglColorRenderbuffer.length;it++)R.__webglColorRenderbuffer[it]&&r.deleteRenderbuffer(R.__webglColorRenderbuffer[it]);R.__webglDepthRenderbuffer&&r.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const Z=U.textures;for(let it=0,rt=Z.length;it<rt;it++){const et=n.get(Z[it]);et.__webglTexture&&(r.deleteTexture(et.__webglTexture),o.memory.textures--),n.remove(Z[it])}n.remove(U)}let D=0;function z(){D=0}function I(){const U=D;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),D+=1,U}function F(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function B(U,R){const Z=n.get(U);if(U.isVideoTexture&&Pt(U),U.isRenderTargetTexture===!1&&U.version>0&&Z.__version!==U.version){const it=U.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Y(Z,U,R);return}}e.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+R)}function M(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){Y(Z,U,R);return}e.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+R)}function N(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){Y(Z,U,R);return}e.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+R)}function A(U,R){const Z=n.get(U);if(U.version>0&&Z.__version!==U.version){$(Z,U,R);return}e.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+R)}const O={[kn]:r.REPEAT,[cn]:r.CLAMP_TO_EDGE,[ko]:r.MIRRORED_REPEAT},k={[Oe]:r.NEAREST,[nu]:r.NEAREST_MIPMAP_NEAREST,[Is]:r.NEAREST_MIPMAP_LINEAR,[Ue]:r.LINEAR,[Br]:r.LINEAR_MIPMAP_NEAREST,[Kn]:r.LINEAR_MIPMAP_LINEAR},G={[ou]:r.NEVER,[du]:r.ALWAYS,[au]:r.LESS,[ih]:r.LEQUAL,[lu]:r.EQUAL,[uu]:r.GEQUAL,[cu]:r.GREATER,[hu]:r.NOTEQUAL};function H(U,R){if(R.type===Xe&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Ue||R.magFilter===Br||R.magFilter===Is||R.magFilter===Kn||R.minFilter===Ue||R.minFilter===Br||R.minFilter===Is||R.minFilter===Kn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(U,r.TEXTURE_WRAP_S,O[R.wrapS]),r.texParameteri(U,r.TEXTURE_WRAP_T,O[R.wrapT]),(U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY)&&r.texParameteri(U,r.TEXTURE_WRAP_R,O[R.wrapR]),r.texParameteri(U,r.TEXTURE_MAG_FILTER,k[R.magFilter]),r.texParameteri(U,r.TEXTURE_MIN_FILTER,k[R.minFilter]),R.compareFunction&&(r.texParameteri(U,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(U,r.TEXTURE_COMPARE_FUNC,G[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Oe||R.minFilter!==Is&&R.minFilter!==Kn||R.type===Xe&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const Z=t.get("EXT_texture_filter_anisotropic");r.texParameterf(U,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function tt(U,R){let Z=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",b));const it=R.source;let rt=d.get(it);rt===void 0&&(rt={},d.set(it,rt));const et=F(R);if(et!==U.__cacheKey){rt[et]===void 0&&(rt[et]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),rt[et].usedTimes++;const Et=rt[U.__cacheKey];Et!==void 0&&(rt[U.__cacheKey].usedTimes--,Et.usedTimes===0&&w(R)),U.__cacheKey=et,U.__webglTexture=rt[et].texture}return Z}function Y(U,R,Z){let it=r.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(it=r.TEXTURE_2D_ARRAY),R.isData3DTexture&&(it=r.TEXTURE_3D);const rt=tt(U,R),et=R.source;e.bindTexture(it,U.__webglTexture,r.TEXTURE0+Z);const Et=n.get(et);if(et.version!==Et.__version||rt===!0){e.activeTexture(r.TEXTURE0+Z);const ut=qt.getPrimaries(qt.workingColorSpace),mt=R.colorSpace===Fn?null:qt.getPrimaries(R.colorSpace),Gt=R.colorSpace===Fn||ut===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let lt=v(R.image,!1,i.maxTextureSize);lt=ee(R,lt);const Mt=s.convert(R.format,R.colorSpace),Dt=s.convert(R.type);let Nt=y(R.internalFormat,Mt,Dt,R.colorSpace,R.isVideoTexture);H(it,R);let St;const Xt=R.mipmaps,Ut=R.isVideoTexture!==!0,Zt=Et.__version===void 0||rt===!0,V=et.dataReady,ht=P(R,lt);if(R.isDepthTexture)Nt=x(R.format===vi,R.type),Zt&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,Nt,lt.width,lt.height):e.texImage2D(r.TEXTURE_2D,0,Nt,lt.width,lt.height,0,Mt,Dt,null));else if(R.isDataTexture)if(Xt.length>0){Ut&&Zt&&e.texStorage2D(r.TEXTURE_2D,ht,Nt,Xt[0].width,Xt[0].height);for(let Q=0,st=Xt.length;Q<st;Q++)St=Xt[Q],Ut?V&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,St.width,St.height,Mt,Dt,St.data):e.texImage2D(r.TEXTURE_2D,Q,Nt,St.width,St.height,0,Mt,Dt,St.data);R.generateMipmaps=!1}else Ut?(Zt&&e.texStorage2D(r.TEXTURE_2D,ht,Nt,lt.width,lt.height),V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt.width,lt.height,Mt,Dt,lt.data)):e.texImage2D(r.TEXTURE_2D,0,Nt,lt.width,lt.height,0,Mt,Dt,lt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Ut&&Zt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,Nt,Xt[0].width,Xt[0].height,lt.depth);for(let Q=0,st=Xt.length;Q<st;Q++)if(St=Xt[Q],R.format!==Ke)if(Mt!==null)if(Ut){if(V)if(R.layerUpdates.size>0){const yt=jl(St.width,St.height,R.format,R.type);for(const gt of R.layerUpdates){const Bt=St.data.subarray(gt*yt/St.data.BYTES_PER_ELEMENT,(gt+1)*yt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,gt,St.width,St.height,1,Mt,Bt)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,St.width,St.height,lt.depth,Mt,St.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Q,Nt,St.width,St.height,lt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ut?V&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,Q,0,0,0,St.width,St.height,lt.depth,Mt,Dt,St.data):e.texImage3D(r.TEXTURE_2D_ARRAY,Q,Nt,St.width,St.height,lt.depth,0,Mt,Dt,St.data)}else{Ut&&Zt&&e.texStorage2D(r.TEXTURE_2D,ht,Nt,Xt[0].width,Xt[0].height);for(let Q=0,st=Xt.length;Q<st;Q++)St=Xt[Q],R.format!==Ke?Mt!==null?Ut?V&&e.compressedTexSubImage2D(r.TEXTURE_2D,Q,0,0,St.width,St.height,Mt,St.data):e.compressedTexImage2D(r.TEXTURE_2D,Q,Nt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ut?V&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,St.width,St.height,Mt,Dt,St.data):e.texImage2D(r.TEXTURE_2D,Q,Nt,St.width,St.height,0,Mt,Dt,St.data)}else if(R.isDataArrayTexture)if(Ut){if(Zt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,ht,Nt,lt.width,lt.height,lt.depth),V)if(R.layerUpdates.size>0){const Q=jl(lt.width,lt.height,R.format,R.type);for(const st of R.layerUpdates){const yt=lt.data.subarray(st*Q/lt.data.BYTES_PER_ELEMENT,(st+1)*Q/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,st,lt.width,lt.height,1,Mt,Dt,yt)}R.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Dt,lt.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Nt,lt.width,lt.height,lt.depth,0,Mt,Dt,lt.data);else if(R.isData3DTexture)Ut?(Zt&&e.texStorage3D(r.TEXTURE_3D,ht,Nt,lt.width,lt.height,lt.depth),V&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,Mt,Dt,lt.data)):e.texImage3D(r.TEXTURE_3D,0,Nt,lt.width,lt.height,lt.depth,0,Mt,Dt,lt.data);else if(R.isFramebufferTexture){if(Zt)if(Ut)e.texStorage2D(r.TEXTURE_2D,ht,Nt,lt.width,lt.height);else{let Q=lt.width,st=lt.height;for(let yt=0;yt<ht;yt++)e.texImage2D(r.TEXTURE_2D,yt,Nt,Q,st,0,Mt,Dt,null),Q>>=1,st>>=1}}else if(Xt.length>0){if(Ut&&Zt){const Q=Rt(Xt[0]);e.texStorage2D(r.TEXTURE_2D,ht,Nt,Q.width,Q.height)}for(let Q=0,st=Xt.length;Q<st;Q++)St=Xt[Q],Ut?V&&e.texSubImage2D(r.TEXTURE_2D,Q,0,0,Mt,Dt,St):e.texImage2D(r.TEXTURE_2D,Q,Nt,Mt,Dt,St);R.generateMipmaps=!1}else if(Ut){if(Zt){const Q=Rt(lt);e.texStorage2D(r.TEXTURE_2D,ht,Nt,Q.width,Q.height)}V&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,Mt,Dt,lt)}else e.texImage2D(r.TEXTURE_2D,0,Nt,Mt,Dt,lt);m(R)&&p(it),Et.__version=et.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function $(U,R,Z){if(R.image.length!==6)return;const it=tt(U,R),rt=R.source;e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+Z);const et=n.get(rt);if(rt.version!==et.__version||it===!0){e.activeTexture(r.TEXTURE0+Z);const Et=qt.getPrimaries(qt.workingColorSpace),ut=R.colorSpace===Fn?null:qt.getPrimaries(R.colorSpace),mt=R.colorSpace===Fn||Et===ut?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,R.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,R.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Gt=R.isCompressedTexture||R.image[0].isCompressedTexture,lt=R.image[0]&&R.image[0].isDataTexture,Mt=[];for(let st=0;st<6;st++)!Gt&&!lt?Mt[st]=v(R.image[st],!0,i.maxCubemapSize):Mt[st]=lt?R.image[st].image:R.image[st],Mt[st]=ee(R,Mt[st]);const Dt=Mt[0],Nt=s.convert(R.format,R.colorSpace),St=s.convert(R.type),Xt=y(R.internalFormat,Nt,St,R.colorSpace),Ut=R.isVideoTexture!==!0,Zt=et.__version===void 0||it===!0,V=rt.dataReady;let ht=P(R,Dt);H(r.TEXTURE_CUBE_MAP,R);let Q;if(Gt){Ut&&Zt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,Xt,Dt.width,Dt.height);for(let st=0;st<6;st++){Q=Mt[st].mipmaps;for(let yt=0;yt<Q.length;yt++){const gt=Q[yt];R.format!==Ke?Nt!==null?Ut?V&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,gt.width,gt.height,Nt,gt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Xt,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ut?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,0,0,gt.width,gt.height,Nt,St,gt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt,Xt,gt.width,gt.height,0,Nt,St,gt.data)}}}else{if(Q=R.mipmaps,Ut&&Zt){Q.length>0&&ht++;const st=Rt(Mt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,ht,Xt,st.width,st.height)}for(let st=0;st<6;st++)if(lt){Ut?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Mt[st].width,Mt[st].height,Nt,St,Mt[st].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,Mt[st].width,Mt[st].height,0,Nt,St,Mt[st].data);for(let yt=0;yt<Q.length;yt++){const Bt=Q[yt].image[st].image;Ut?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Bt.width,Bt.height,Nt,St,Bt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Xt,Bt.width,Bt.height,0,Nt,St,Bt.data)}}else{Ut?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,0,0,Nt,St,Mt[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,0,Xt,Nt,St,Mt[st]);for(let yt=0;yt<Q.length;yt++){const gt=Q[yt];Ut?V&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,0,0,Nt,St,gt.image[st]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+st,yt+1,Xt,Nt,St,gt.image[st])}}}m(R)&&p(r.TEXTURE_CUBE_MAP),et.__version=rt.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function at(U,R,Z,it,rt,et){const Et=s.convert(Z.format,Z.colorSpace),ut=s.convert(Z.type),mt=y(Z.internalFormat,Et,ut,Z.colorSpace),Gt=n.get(R),lt=n.get(Z);if(lt.__renderTarget=R,!Gt.__hasExternalTextures){const Mt=Math.max(1,R.width>>et),Dt=Math.max(1,R.height>>et);rt===r.TEXTURE_3D||rt===r.TEXTURE_2D_ARRAY?e.texImage3D(rt,et,mt,Mt,Dt,R.depth,0,Et,ut,null):e.texImage2D(rt,et,mt,Mt,Dt,0,Et,ut,null)}e.bindFramebuffer(r.FRAMEBUFFER,U),Wt(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,it,rt,lt.__webglTexture,0,xt(R)):(rt===r.TEXTURE_2D||rt>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,it,rt,lt.__webglTexture,et),e.bindFramebuffer(r.FRAMEBUFFER,null)}function nt(U,R,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,U),R.depthBuffer){const it=R.depthTexture,rt=it&&it.isDepthTexture?it.type:null,et=x(R.stencilBuffer,rt),Et=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=xt(R);Wt(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut,et,R.width,R.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut,et,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,et,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Et,r.RENDERBUFFER,U)}else{const it=R.textures;for(let rt=0;rt<it.length;rt++){const et=it[rt],Et=s.convert(et.format,et.colorSpace),ut=s.convert(et.type),mt=y(et.internalFormat,Et,ut,et.colorSpace),Gt=xt(R);Z&&Wt(R)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Gt,mt,R.width,R.height):Wt(R)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Gt,mt,R.width,R.height):r.renderbufferStorage(r.RENDERBUFFER,mt,R.width,R.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ot(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(r.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=n.get(R.depthTexture);it.__renderTarget=R,(!it.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);const rt=it.__webglTexture,et=xt(R);if(R.depthTexture.format===Xi)Wt(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,rt,0);else if(R.depthTexture.format===vi)Wt(R)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0,et):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function pt(U){const R=n.get(U),Z=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const it=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),it){const rt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,it.removeEventListener("dispose",rt)};it.addEventListener("dispose",rt),R.__depthDisposeCallback=rt}R.__boundDepthTexture=it}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");ot(R.__webglFramebuffer,U)}else if(Z){R.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer[it]),R.__webglDepthbuffer[it]===void 0)R.__webglDepthbuffer[it]=r.createRenderbuffer(),nt(R.__webglDepthbuffer[it],U,!1);else{const rt=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,et=R.__webglDepthbuffer[it];r.bindRenderbuffer(r.RENDERBUFFER,et),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,et)}}else if(e.bindFramebuffer(r.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=r.createRenderbuffer(),nt(R.__webglDepthbuffer,U,!1);else{const it=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=R.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,rt),r.framebufferRenderbuffer(r.FRAMEBUFFER,it,r.RENDERBUFFER,rt)}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(U,R,Z){const it=n.get(U);R!==void 0&&at(it.__webglFramebuffer,U,U.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&pt(U)}function jt(U){const R=U.texture,Z=n.get(U),it=n.get(R);U.addEventListener("dispose",E);const rt=U.textures,et=U.isWebGLCubeRenderTarget===!0,Et=rt.length>1;if(Et||(it.__webglTexture===void 0&&(it.__webglTexture=r.createTexture()),it.__version=R.version,o.memory.textures++),et){Z.__webglFramebuffer=[];for(let ut=0;ut<6;ut++)if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer[ut]=[];for(let mt=0;mt<R.mipmaps.length;mt++)Z.__webglFramebuffer[ut][mt]=r.createFramebuffer()}else Z.__webglFramebuffer[ut]=r.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){Z.__webglFramebuffer=[];for(let ut=0;ut<R.mipmaps.length;ut++)Z.__webglFramebuffer[ut]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Et)for(let ut=0,mt=rt.length;ut<mt;ut++){const Gt=n.get(rt[ut]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=r.createTexture(),o.memory.textures++)}if(U.samples>0&&Wt(U)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let ut=0;ut<rt.length;ut++){const mt=rt[ut];Z.__webglColorRenderbuffer[ut]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[ut]);const Gt=s.convert(mt.format,mt.colorSpace),lt=s.convert(mt.type),Mt=y(mt.internalFormat,Gt,lt,mt.colorSpace,U.isXRRenderTarget===!0),Dt=xt(U);r.renderbufferStorageMultisample(r.RENDERBUFFER,Dt,Mt,U.width,U.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ut,r.RENDERBUFFER,Z.__webglColorRenderbuffer[ut])}r.bindRenderbuffer(r.RENDERBUFFER,null),U.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),nt(Z.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(et){e.bindTexture(r.TEXTURE_CUBE_MAP,it.__webglTexture),H(r.TEXTURE_CUBE_MAP,R);for(let ut=0;ut<6;ut++)if(R.mipmaps&&R.mipmaps.length>0)for(let mt=0;mt<R.mipmaps.length;mt++)at(Z.__webglFramebuffer[ut][mt],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,mt);else at(Z.__webglFramebuffer[ut],U,R,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ut,0);m(R)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ut=0,mt=rt.length;ut<mt;ut++){const Gt=rt[ut],lt=n.get(Gt);e.bindTexture(r.TEXTURE_2D,lt.__webglTexture),H(r.TEXTURE_2D,Gt),at(Z.__webglFramebuffer,U,Gt,r.COLOR_ATTACHMENT0+ut,r.TEXTURE_2D,0),m(Gt)&&p(r.TEXTURE_2D)}e.unbindTexture()}else{let ut=r.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(ut=U.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ut,it.__webglTexture),H(ut,R),R.mipmaps&&R.mipmaps.length>0)for(let mt=0;mt<R.mipmaps.length;mt++)at(Z.__webglFramebuffer[mt],U,R,r.COLOR_ATTACHMENT0,ut,mt);else at(Z.__webglFramebuffer,U,R,r.COLOR_ATTACHMENT0,ut,0);m(R)&&p(ut),e.unbindTexture()}U.depthBuffer&&pt(U)}function Ot(U){const R=U.textures;for(let Z=0,it=R.length;Z<it;Z++){const rt=R[Z];if(m(rt)){const et=_(U),Et=n.get(rt).__webglTexture;e.bindTexture(et,Et),p(et),e.unbindTexture()}}}const se=[],W=[];function It(U){if(U.samples>0){if(Wt(U)===!1){const R=U.textures,Z=U.width,it=U.height;let rt=r.COLOR_BUFFER_BIT;const et=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Et=n.get(U),ut=R.length>1;if(ut)for(let mt=0;mt<R.length;mt++)e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let mt=0;mt<R.length;mt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(rt|=r.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(rt|=r.STENCIL_BUFFER_BIT)),ut){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);const Gt=n.get(R[mt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Gt,0)}r.blitFramebuffer(0,0,Z,it,0,0,Z,it,rt,r.NEAREST),l===!0&&(se.length=0,W.length=0,se.push(r.COLOR_ATTACHMENT0+mt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(se.push(et),W.push(et),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,W)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,se))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ut)for(let mt=0;mt<R.length;mt++){e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.RENDERBUFFER,Et.__webglColorRenderbuffer[mt]);const Gt=n.get(R[mt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,Et.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+mt,r.TEXTURE_2D,Gt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&l){const R=U.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[R])}}}function xt(U){return Math.min(i.maxSamples,U.samples)}function Wt(U){const R=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Pt(U){const R=o.render.frame;h.get(U)!==R&&(h.set(U,R),U.update())}function ee(U,R){const Z=U.colorSpace,it=U.format,rt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||Z!==xi&&Z!==Fn&&(qt.getTransfer(Z)===ie?(it!==Ke||rt!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),R}function Rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(c.width=U.naturalWidth||U.width,c.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(c.width=U.displayWidth,c.height=U.displayHeight):(c.width=U.width,c.height=U.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=M,this.setTexture3D=N,this.setTextureCube=A,this.rebindTextures=ft,this.setupRenderTarget=jt,this.updateRenderTargetMipmap=Ot,this.updateMultisampleRenderTarget=It,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Wt}function U0(r,t){function e(n,i=Fn){let s;const o=qt.getTransfer(i);if(n===xn)return r.UNSIGNED_BYTE;if(n===Ma)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Sa)return r.UNSIGNED_SHORT_5_5_5_1;if(n===$c)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===jc)return r.BYTE;if(n===Zc)return r.SHORT;if(n===Es)return r.UNSIGNED_SHORT;if(n===ya)return r.INT;if(n===mi)return r.UNSIGNED_INT;if(n===Xe)return r.FLOAT;if(n===$e)return r.HALF_FLOAT;if(n===Kc)return r.ALPHA;if(n===Jc)return r.RGB;if(n===Ke)return r.RGBA;if(n===Qc)return r.LUMINANCE;if(n===th)return r.LUMINANCE_ALPHA;if(n===Xi)return r.DEPTH_COMPONENT;if(n===vi)return r.DEPTH_STENCIL;if(n===wa)return r.RED;if(n===Ea)return r.RED_INTEGER;if(n===eh)return r.RG;if(n===ba)return r.RG_INTEGER;if(n===Ta)return r.RGBA_INTEGER;if(n===vr||n===_r||n===xr||n===yr)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===vr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===yr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===vr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===yr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ho||n===Vo||n===Go||n===Wo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ho)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Go)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xo||n===qo||n===Yo)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xo||n===qo)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Yo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===jo||n===Zo||n===$o||n===Ko||n===Jo||n===Qo||n===ta||n===ea||n===na||n===ia||n===sa||n===ra||n===oa||n===aa)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===jo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===$o)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ko)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Jo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qo)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ta)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ea)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===na)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ia)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===sa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ra)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===oa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===aa)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Mr||n===la||n===ca)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Mr)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===la)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ca)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===nh||n===ha||n===ua||n===da)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Mr)return s.COMPRESSED_RED_RGTC1_EXT;if(n===ha)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ua)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===da)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gi?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}class F0 extends Ze{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Je extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const O0={type:"move"};class fo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new j,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new j),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new j,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new j),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const z0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,B0=`
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

}`;class k0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Te,s=t.properties.get(i);s.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new we({vertexShader:z0,fragmentShader:B0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class H0 extends ts{constructor(t,e){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,g=null;const v=new k0,m=e.getContextAttributes();let p=null,_=null;const y=[],x=[],P=new zt;let b=null;const E=new Ze;E.viewport=new ue;const T=new Ze;T.viewport=new ue;const w=[E,T],S=new F0;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let $=y[Y];return $===void 0&&($=new fo,y[Y]=$),$.getTargetRaySpace()},this.getControllerGrip=function(Y){let $=y[Y];return $===void 0&&($=new fo,y[Y]=$),$.getGripSpace()},this.getHand=function(Y){let $=y[Y];return $===void 0&&($=new fo,y[Y]=$),$.getHandSpace()};function I(Y){const $=x.indexOf(Y.inputSource);if($===-1)return;const at=y[$];at!==void 0&&(at.update(Y.inputSource,Y.frame,c||o),at.dispatchEvent({type:Y.type,data:Y.inputSource}))}function F(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",F),i.removeEventListener("inputsourceschange",B);for(let Y=0;Y<y.length;Y++){const $=x[Y];$!==null&&(x[Y]=null,y[Y].disconnect($))}D=null,z=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,tt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){a=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Y){if(i=Y,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",F),i.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(P),i.renderState.layers===void 0){const $={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,$),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new yn(f.framebufferWidth,f.framebufferHeight,{format:Ke,type:xn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let $=null,at=null,nt=null;m.depth&&(nt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,$=m.stencil?vi:Xi,at=m.stencil?gi:mi);const ot={colorFormat:e.RGBA8,depthFormat:nt,scaleFactor:s};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(ot),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new yn(d.textureWidth,d.textureHeight,{format:Ke,type:xn,depthTexture:new Na(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,$),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(Y){for(let $=0;$<Y.removed.length;$++){const at=Y.removed[$],nt=x.indexOf(at);nt>=0&&(x[nt]=null,y[nt].disconnect(at))}for(let $=0;$<Y.added.length;$++){const at=Y.added[$];let nt=x.indexOf(at);if(nt===-1){for(let pt=0;pt<y.length;pt++)if(pt>=x.length){x.push(at),nt=pt;break}else if(x[pt]===null){x[pt]=at,nt=pt;break}if(nt===-1)break}const ot=y[nt];ot&&ot.connect(at)}}const M=new j,N=new j;function A(Y,$,at){M.setFromMatrixPosition($.matrixWorld),N.setFromMatrixPosition(at.matrixWorld);const nt=M.distanceTo(N),ot=$.projectionMatrix.elements,pt=at.projectionMatrix.elements,ft=ot[14]/(ot[10]-1),jt=ot[14]/(ot[10]+1),Ot=(ot[9]+1)/ot[5],se=(ot[9]-1)/ot[5],W=(ot[8]-1)/ot[0],It=(pt[8]+1)/pt[0],xt=ft*W,Wt=ft*It,Pt=nt/(-W+It),ee=Pt*-W;if($.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(ee),Y.translateZ(Pt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),ot[10]===-1)Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse);else{const Rt=ft+Pt,U=jt+Pt,R=xt-ee,Z=Wt+(nt-ee),it=Ot*jt/U*Rt,rt=se*jt/U*Rt;Y.projectionMatrix.makePerspective(R,Z,it,rt,Rt,U),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function O(Y,$){$===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices($.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(i===null)return;let $=Y.near,at=Y.far;v.texture!==null&&(v.depthNear>0&&($=v.depthNear),v.depthFar>0&&(at=v.depthFar)),S.near=T.near=E.near=$,S.far=T.far=E.far=at,(D!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,z=S.far),E.layers.mask=Y.layers.mask|2,T.layers.mask=Y.layers.mask|4,S.layers.mask=E.layers.mask|T.layers.mask;const nt=Y.parent,ot=S.cameras;O(S,nt);for(let pt=0;pt<ot.length;pt++)O(ot[pt],nt);ot.length===2?A(S,E,T):S.projectionMatrix.copy(E.projectionMatrix),k(Y,S,nt)};function k(Y,$,at){at===null?Y.matrix.copy($.matrixWorld):(Y.matrix.copy(at.matrixWorld),Y.matrix.invert(),Y.matrix.multiply($.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy($.projectionMatrix),Y.projectionMatrixInverse.copy($.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=bs*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let G=null;function H(Y,$){if(h=$.getViewerPose(c||o),g=$,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let nt=!1;at.length!==S.cameras.length&&(S.cameras.length=0,nt=!0);for(let pt=0;pt<at.length;pt++){const ft=at[pt];let jt=null;if(f!==null)jt=f.getViewport(ft);else{const se=u.getViewSubImage(d,ft);jt=se.viewport,pt===0&&(t.setRenderTargetTextures(_,se.colorTexture,d.ignoreDepthValues?void 0:se.depthStencilTexture),t.setRenderTarget(_))}let Ot=w[pt];Ot===void 0&&(Ot=new Ze,Ot.layers.enable(pt),Ot.viewport=new ue,w[pt]=Ot),Ot.matrix.fromArray(ft.transform.matrix),Ot.matrix.decompose(Ot.position,Ot.quaternion,Ot.scale),Ot.projectionMatrix.fromArray(ft.projectionMatrix),Ot.projectionMatrixInverse.copy(Ot.projectionMatrix).invert(),Ot.viewport.set(jt.x,jt.y,jt.width,jt.height),pt===0&&(S.matrix.copy(Ot.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),nt===!0&&S.cameras.push(Ot)}const ot=i.enabledFeatures;if(ot&&ot.includes("depth-sensing")){const pt=u.getDepthInformation(at[0]);pt&&pt.isValid&&pt.texture&&v.init(t,pt,i.renderState)}}for(let at=0;at<y.length;at++){const nt=x[at],ot=y[at];nt!==null&&ot!==void 0&&ot.update(nt,$,c||o)}G&&G(Y,$),$.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:$}),g=null}const tt=new ph;tt.setAnimationLoop(H),this.setAnimationLoop=function(Y){G=Y},this.dispose=function(){}}}const ai=new Mn,V0=new Jt;function G0(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,uh(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),u(m,p)):p.isMeshPhongMaterial?(s(m,p),h(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,_,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fe&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fe&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,ai.copy(x),ai.x*=-1,ai.y*=-1,ai.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ai.y*=-1,ai.z*=-1),m.envMapRotation.value.setFromMatrix4(V0.makeRotationFromEuler(ai)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fe&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function W0(r,t,e,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function c(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(_,P);const b=t.render.frame;s[_.id]!==b&&(d(_),s[_.id]=b)}function h(_){const y=u();_.__bindingPointIndex=y;const x=r.createBuffer(),P=_.__size,b=_.usage;return r.bindBuffer(r.UNIFORM_BUFFER,x),r.bufferData(r.UNIFORM_BUFFER,P,b),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,P=_.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let b=0,E=x.length;b<E;b++){const T=Array.isArray(x[b])?x[b]:[x[b]];for(let w=0,S=T.length;w<S;w++){const D=T[w];if(f(D,b,w,P)===!0){const z=D.__offset,I=Array.isArray(D.value)?D.value:[D.value];let F=0;for(let B=0;B<I.length;B++){const M=I[B],N=v(M);typeof M=="number"||typeof M=="boolean"?(D.__data[0]=M,r.bufferSubData(r.UNIFORM_BUFFER,z+F,D.__data)):M.isMatrix3?(D.__data[0]=M.elements[0],D.__data[1]=M.elements[1],D.__data[2]=M.elements[2],D.__data[3]=0,D.__data[4]=M.elements[3],D.__data[5]=M.elements[4],D.__data[6]=M.elements[5],D.__data[7]=0,D.__data[8]=M.elements[6],D.__data[9]=M.elements[7],D.__data[10]=M.elements[8],D.__data[11]=0):(M.toArray(D.__data,F),F+=N.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(_,y,x,P){const b=_.value,E=y+"_"+x;if(P[E]===void 0)return typeof b=="number"||typeof b=="boolean"?P[E]=b:P[E]=b.clone(),!0;{const T=P[E];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return P[E]=b,!0}else if(T.equals(b)===!1)return T.copy(b),!0}return!1}function g(_){const y=_.uniforms;let x=0;const P=16;for(let E=0,T=y.length;E<T;E++){const w=Array.isArray(y[E])?y[E]:[y[E]];for(let S=0,D=w.length;S<D;S++){const z=w[S],I=Array.isArray(z.value)?z.value:[z.value];for(let F=0,B=I.length;F<B;F++){const M=I[F],N=v(M),A=x%P,O=A%N.boundary,k=A+O;x+=O,k!==0&&P-k<N.storage&&(x+=P-k),z.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=N.storage}}}const b=x%P;return b>0&&(x+=P-b),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function p(){for(const _ in i)r.deleteBuffer(i[_]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class X0{constructor(t={}){const{canvas:e=Pu(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ie,this.toneMapping=Jn,this.toneMappingExposure=1;const x=this;let P=!1,b=0,E=0,T=null,w=-1,S=null;const D=new ue,z=new ue;let I=null;const F=new Lt(0);let B=0,M=e.width,N=e.height,A=1,O=null,k=null;const G=new ue(0,0,M,N),H=new ue(0,0,M,N);let tt=!1;const Y=new La;let $=!1,at=!1;const nt=new Jt,ot=new Jt,pt=new j,ft=new ue,jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ot=!1;function se(){return T===null?A:1}let W=n;function It(L,X){return e.getContext(L,X)}try{const L={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${_a}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",yt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),W===null){const X="webgl2";if(W=It(X,L),W===null)throw It(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let xt,Wt,Pt,ee,Rt,U,R,Z,it,rt,et,Et,ut,mt,Gt,lt,Mt,Dt,Nt,St,Xt,Ut,Zt,V;function ht(){xt=new $p(W),xt.init(),Ut=new U0(W,xt),Wt=new Wp(W,xt,t,Ut),Pt=new D0(W,xt),Wt.reverseDepthBuffer&&d&&Pt.buffers.depth.setReversed(!0),ee=new Qp(W),Rt=new v0,U=new N0(W,xt,Pt,Rt,Wt,Ut,ee),R=new qp(x),Z=new Zp(x),it=new rd(W),Zt=new Vp(W,it),rt=new Kp(W,it,ee,Zt),et=new em(W,rt,it,ee),Nt=new tm(W,Wt,U),lt=new Xp(Rt),Et=new g0(x,R,Z,xt,Wt,Zt,lt),ut=new G0(x,Rt),mt=new x0,Gt=new b0(xt),Dt=new Hp(x,R,Z,Pt,et,f,l),Mt=new P0(x,et,Wt),V=new W0(W,ee,Wt,Pt),St=new Gp(W,xt,ee),Xt=new Jp(W,xt,ee),ee.programs=Et.programs,x.capabilities=Wt,x.extensions=xt,x.properties=Rt,x.renderLists=mt,x.shadowMap=Mt,x.state=Pt,x.info=ee}ht();const Q=new H0(x,W);this.xr=Q,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const L=xt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=xt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return A},this.setPixelRatio=function(L){L!==void 0&&(A=L,this.setSize(M,N,!1))},this.getSize=function(L){return L.set(M,N)},this.setSize=function(L,X,K=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=L,N=X,e.width=Math.floor(L*A),e.height=Math.floor(X*A),K===!0&&(e.style.width=L+"px",e.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(M*A,N*A).floor()},this.setDrawingBufferSize=function(L,X,K){M=L,N=X,A=K,e.width=Math.floor(L*K),e.height=Math.floor(X*K),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(D)},this.getViewport=function(L){return L.copy(G)},this.setViewport=function(L,X,K,J){L.isVector4?G.set(L.x,L.y,L.z,L.w):G.set(L,X,K,J),Pt.viewport(D.copy(G).multiplyScalar(A).round())},this.getScissor=function(L){return L.copy(H)},this.setScissor=function(L,X,K,J){L.isVector4?H.set(L.x,L.y,L.z,L.w):H.set(L,X,K,J),Pt.scissor(z.copy(H).multiplyScalar(A).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(L){Pt.setScissorTest(tt=L)},this.setOpaqueSort=function(L){O=L},this.setTransparentSort=function(L){k=L},this.getClearColor=function(L){return L.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor.apply(Dt,arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha.apply(Dt,arguments)},this.clear=function(L=!0,X=!0,K=!0){let J=0;if(L){let q=!1;if(T!==null){const ct=T.texture.format;q=ct===Ta||ct===ba||ct===Ea}if(q){const ct=T.texture.type,vt=ct===xn||ct===mi||ct===Es||ct===gi||ct===Ma||ct===Sa,bt=Dt.getClearColor(),Tt=Dt.getClearAlpha(),Ft=bt.r,kt=bt.g,At=bt.b;vt?(g[0]=Ft,g[1]=kt,g[2]=At,g[3]=Tt,W.clearBufferuiv(W.COLOR,0,g)):(v[0]=Ft,v[1]=kt,v[2]=At,v[3]=Tt,W.clearBufferiv(W.COLOR,0,v))}else J|=W.COLOR_BUFFER_BIT}X&&(J|=W.DEPTH_BUFFER_BIT),K&&(J|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(J)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",yt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),mt.dispose(),Gt.dispose(),Rt.dispose(),R.dispose(),Z.dispose(),et.dispose(),Zt.dispose(),V.dispose(),Et.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Wa),Q.removeEventListener("sessionend",Xa),ei.stop()};function st(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function yt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const L=ee.autoReset,X=Mt.enabled,K=Mt.autoUpdate,J=Mt.needsUpdate,q=Mt.type;ht(),ee.autoReset=L,Mt.enabled=X,Mt.autoUpdate=K,Mt.needsUpdate=J,Mt.type=q}function gt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Bt(L){const X=L.target;X.removeEventListener("dispose",Bt),he(X)}function he(L){Ae(L),Rt.remove(L)}function Ae(L){const X=Rt.get(L).programs;X!==void 0&&(X.forEach(function(K){Et.releaseProgram(K)}),L.isShaderMaterial&&Et.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,K,J,q,ct){X===null&&(X=jt);const vt=q.isMesh&&q.matrixWorld.determinant()<0,bt=Nh(L,X,K,J,q);Pt.setMaterial(J,vt);let Tt=K.index,Ft=1;if(J.wireframe===!0){if(Tt=rt.getWireframeAttribute(K),Tt===void 0)return;Ft=2}const kt=K.drawRange,At=K.attributes.position;let $t=kt.start*Ft,re=(kt.start+kt.count)*Ft;ct!==null&&($t=Math.max($t,ct.start*Ft),re=Math.min(re,(ct.start+ct.count)*Ft)),Tt!==null?($t=Math.max($t,0),re=Math.min(re,Tt.count)):At!=null&&($t=Math.max($t,0),re=Math.min(re,At.count));const oe=re-$t;if(oe<0||oe===1/0)return;Zt.setup(q,J,bt,K,Tt);let Be,Qt=St;if(Tt!==null&&(Be=it.get(Tt),Qt=Xt,Qt.setIndex(Be)),q.isMesh)J.wireframe===!0?(Pt.setLineWidth(J.wireframeLinewidth*se()),Qt.setMode(W.LINES)):Qt.setMode(W.TRIANGLES);else if(q.isLine){let Ct=J.linewidth;Ct===void 0&&(Ct=1),Pt.setLineWidth(Ct*se()),q.isLineSegments?Qt.setMode(W.LINES):q.isLineLoop?Qt.setMode(W.LINE_LOOP):Qt.setMode(W.LINE_STRIP)}else q.isPoints?Qt.setMode(W.POINTS):q.isSprite&&Qt.setMode(W.TRIANGLES);if(q.isBatchedMesh)if(q._multiDrawInstances!==null)Qt.renderMultiDrawInstances(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount,q._multiDrawInstances);else if(xt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{const Ct=q._multiDrawStarts,wn=q._multiDrawCounts,te=q._multiDrawCount,tn=Tt?it.get(Tt).bytesPerElement:1,Si=Rt.get(J).currentProgram.getUniforms();for(let Ve=0;Ve<te;Ve++)Si.setValue(W,"_gl_DrawID",Ve),Qt.render(Ct[Ve]/tn,wn[Ve])}else if(q.isInstancedMesh)Qt.renderInstances($t,oe,q.count);else if(K.isInstancedBufferGeometry){const Ct=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,wn=Math.min(K.instanceCount,Ct);Qt.renderInstances($t,oe,wn)}else Qt.render($t,oe)};function ne(L,X,K){L.transparent===!0&&L.side===ve&&L.forceSinglePass===!1?(L.side=Fe,L.needsUpdate=!0,Ds(L,X,K),L.side=ti,L.needsUpdate=!0,Ds(L,X,K),L.side=ve):Ds(L,X,K)}this.compile=function(L,X,K=null){K===null&&(K=L),p=Gt.get(K),p.init(X),y.push(p),K.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),L!==K&&L.traverseVisible(function(q){q.isLight&&q.layers.test(X.layers)&&(p.pushLight(q),q.castShadow&&p.pushShadow(q))}),p.setupLights();const J=new Set;return L.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;const ct=q.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){const bt=ct[vt];ne(bt,K,q),J.add(bt)}else ne(ct,K,q),J.add(ct)}),y.pop(),p=null,J},this.compileAsync=function(L,X,K=null){const J=this.compile(L,X,K);return new Promise(q=>{function ct(){if(J.forEach(function(vt){Rt.get(vt).currentProgram.isReady()&&J.delete(vt)}),J.size===0){q(L);return}setTimeout(ct,10)}xt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Qe=null;function Sn(L){Qe&&Qe(L)}function Wa(){ei.stop()}function Xa(){ei.start()}const ei=new ph;ei.setAnimationLoop(Sn),typeof self<"u"&&ei.setContext(self),this.setAnimationLoop=function(L){Qe=L,Q.setAnimationLoop(L),L===null?ei.stop():ei.start()},Q.addEventListener("sessionstart",Wa),Q.addEventListener("sessionend",Xa),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(X),X=Q.getCamera()),L.isScene===!0&&L.onBeforeRender(x,L,X,T),p=Gt.get(L,y.length),p.init(X),y.push(p),ot.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),Y.setFromProjectionMatrix(ot),at=this.localClippingEnabled,$=lt.init(this.clippingPlanes,at),m=mt.get(L,_.length),m.init(),_.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ct=x.xr.getDepthSensingMesh();ct!==null&&zr(ct,X,-1/0,x.sortObjects)}zr(L,X,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(O,k),Ot=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ot&&Dt.addToRenderList(m,L),this.info.render.frame++,$===!0&&lt.beginShadows();const K=p.state.shadowsArray;Mt.render(K,L,X),$===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const J=m.opaque,q=m.transmissive;if(p.setupLights(),X.isArrayCamera){const ct=X.cameras;if(q.length>0)for(let vt=0,bt=ct.length;vt<bt;vt++){const Tt=ct[vt];Ya(J,q,L,Tt)}Ot&&Dt.render(L);for(let vt=0,bt=ct.length;vt<bt;vt++){const Tt=ct[vt];qa(m,L,Tt,Tt.viewport)}}else q.length>0&&Ya(J,q,L,X),Ot&&Dt.render(L),qa(m,L,X);T!==null&&(U.updateMultisampleRenderTarget(T),U.updateRenderTargetMipmap(T)),L.isScene===!0&&L.onAfterRender(x,L,X),Zt.resetDefaultState(),w=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],$===!0&&lt.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function zr(L,X,K,J){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)p.pushLight(L),L.castShadow&&p.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||Y.intersectsSprite(L)){J&&ft.setFromMatrixPosition(L.matrixWorld).applyMatrix4(ot);const vt=et.update(L),bt=L.material;bt.visible&&m.push(L,vt,bt,K,ft.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||Y.intersectsObject(L))){const vt=et.update(L),bt=L.material;if(J&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),ft.copy(L.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),ft.copy(vt.boundingSphere.center)),ft.applyMatrix4(L.matrixWorld).applyMatrix4(ot)),Array.isArray(bt)){const Tt=vt.groups;for(let Ft=0,kt=Tt.length;Ft<kt;Ft++){const At=Tt[Ft],$t=bt[At.materialIndex];$t&&$t.visible&&m.push(L,vt,$t,K,ft.z,At)}}else bt.visible&&m.push(L,vt,bt,K,ft.z,null)}}const ct=L.children;for(let vt=0,bt=ct.length;vt<bt;vt++)zr(ct[vt],X,K,J)}function qa(L,X,K,J){const q=L.opaque,ct=L.transmissive,vt=L.transparent;p.setupLightsView(K),$===!0&&lt.setGlobalState(x.clippingPlanes,K),J&&Pt.viewport(D.copy(J)),q.length>0&&Ls(q,X,K),ct.length>0&&Ls(ct,X,K),vt.length>0&&Ls(vt,X,K),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ya(L,X,K,J){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[J.id]===void 0&&(p.state.transmissionRenderTarget[J.id]=new yn(1,1,{generateMipmaps:!0,type:xt.has("EXT_color_buffer_half_float")||xt.has("EXT_color_buffer_float")?$e:xn,minFilter:Kn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ct=p.state.transmissionRenderTarget[J.id],vt=J.viewport||D;ct.setSize(vt.z,vt.w);const bt=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(F),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Ot&&Dt.render(K);const Tt=x.toneMapping;x.toneMapping=Jn;const Ft=J.viewport;if(J.viewport!==void 0&&(J.viewport=void 0),p.setupLightsView(J),$===!0&&lt.setGlobalState(x.clippingPlanes,J),Ls(L,K,J),U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct),xt.has("WEBGL_multisampled_render_to_texture")===!1){let kt=!1;for(let At=0,$t=X.length;At<$t;At++){const re=X[At],oe=re.object,Be=re.geometry,Qt=re.material,Ct=re.group;if(Qt.side===ve&&oe.layers.test(J.layers)){const wn=Qt.side;Qt.side=Fe,Qt.needsUpdate=!0,ja(oe,K,J,Be,Qt,Ct),Qt.side=wn,Qt.needsUpdate=!0,kt=!0}}kt===!0&&(U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct))}x.setRenderTarget(bt),x.setClearColor(F,B),Ft!==void 0&&(J.viewport=Ft),x.toneMapping=Tt}function Ls(L,X,K){const J=X.isScene===!0?X.overrideMaterial:null;for(let q=0,ct=L.length;q<ct;q++){const vt=L[q],bt=vt.object,Tt=vt.geometry,Ft=J===null?vt.material:J,kt=vt.group;bt.layers.test(K.layers)&&ja(bt,X,K,Tt,Ft,kt)}}function ja(L,X,K,J,q,ct){L.onBeforeRender(x,X,K,J,q,ct),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),q.onBeforeRender(x,X,K,J,L,ct),q.transparent===!0&&q.side===ve&&q.forceSinglePass===!1?(q.side=Fe,q.needsUpdate=!0,x.renderBufferDirect(K,X,J,q,L,ct),q.side=ti,q.needsUpdate=!0,x.renderBufferDirect(K,X,J,q,L,ct),q.side=ve):x.renderBufferDirect(K,X,J,q,L,ct),L.onAfterRender(x,X,K,J,q,ct)}function Ds(L,X,K){X.isScene!==!0&&(X=jt);const J=Rt.get(L),q=p.state.lights,ct=p.state.shadowsArray,vt=q.state.version,bt=Et.getParameters(L,q.state,ct,X,K),Tt=Et.getProgramCacheKey(bt);let Ft=J.programs;J.environment=L.isMeshStandardMaterial?X.environment:null,J.fog=X.fog,J.envMap=(L.isMeshStandardMaterial?Z:R).get(L.envMap||J.environment),J.envMapRotation=J.environment!==null&&L.envMap===null?X.environmentRotation:L.envMapRotation,Ft===void 0&&(L.addEventListener("dispose",Bt),Ft=new Map,J.programs=Ft);let kt=Ft.get(Tt);if(kt!==void 0){if(J.currentProgram===kt&&J.lightsStateVersion===vt)return $a(L,bt),kt}else bt.uniforms=Et.getUniforms(L),L.onBeforeCompile(bt,x),kt=Et.acquireProgram(bt,Tt),Ft.set(Tt,kt),J.uniforms=bt.uniforms;const At=J.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(At.clippingPlanes=lt.uniform),$a(L,bt),J.needsLights=Fh(L),J.lightsStateVersion=vt,J.needsLights&&(At.ambientLightColor.value=q.state.ambient,At.lightProbe.value=q.state.probe,At.directionalLights.value=q.state.directional,At.directionalLightShadows.value=q.state.directionalShadow,At.spotLights.value=q.state.spot,At.spotLightShadows.value=q.state.spotShadow,At.rectAreaLights.value=q.state.rectArea,At.ltc_1.value=q.state.rectAreaLTC1,At.ltc_2.value=q.state.rectAreaLTC2,At.pointLights.value=q.state.point,At.pointLightShadows.value=q.state.pointShadow,At.hemisphereLights.value=q.state.hemi,At.directionalShadowMap.value=q.state.directionalShadowMap,At.directionalShadowMatrix.value=q.state.directionalShadowMatrix,At.spotShadowMap.value=q.state.spotShadowMap,At.spotLightMatrix.value=q.state.spotLightMatrix,At.spotLightMap.value=q.state.spotLightMap,At.pointShadowMap.value=q.state.pointShadowMap,At.pointShadowMatrix.value=q.state.pointShadowMatrix),J.currentProgram=kt,J.uniformsList=null,kt}function Za(L){if(L.uniformsList===null){const X=L.currentProgram.getUniforms();L.uniformsList=Sr.seqWithValue(X.seq,L.uniforms)}return L.uniformsList}function $a(L,X){const K=Rt.get(L);K.outputColorSpace=X.outputColorSpace,K.batching=X.batching,K.batchingColor=X.batchingColor,K.instancing=X.instancing,K.instancingColor=X.instancingColor,K.instancingMorph=X.instancingMorph,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function Nh(L,X,K,J,q){X.isScene!==!0&&(X=jt),U.resetTextureUnits();const ct=X.fog,vt=J.isMeshStandardMaterial?X.environment:null,bt=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:xi,Tt=(J.isMeshStandardMaterial?Z:R).get(J.envMap||vt),Ft=J.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,kt=!!K.attributes.tangent&&(!!J.normalMap||J.anisotropy>0),At=!!K.morphAttributes.position,$t=!!K.morphAttributes.normal,re=!!K.morphAttributes.color;let oe=Jn;J.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(oe=x.toneMapping);const Be=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Qt=Be!==void 0?Be.length:0,Ct=Rt.get(J),wn=p.state.lights;if($===!0&&(at===!0||L!==S)){const Ye=L===S&&J.id===w;lt.setState(J,L,Ye)}let te=!1;J.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==wn.state.version||Ct.outputColorSpace!==bt||q.isBatchedMesh&&Ct.batching===!1||!q.isBatchedMesh&&Ct.batching===!0||q.isBatchedMesh&&Ct.batchingColor===!0&&q.colorTexture===null||q.isBatchedMesh&&Ct.batchingColor===!1&&q.colorTexture!==null||q.isInstancedMesh&&Ct.instancing===!1||!q.isInstancedMesh&&Ct.instancing===!0||q.isSkinnedMesh&&Ct.skinning===!1||!q.isSkinnedMesh&&Ct.skinning===!0||q.isInstancedMesh&&Ct.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&Ct.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&Ct.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&Ct.instancingMorph===!1&&q.morphTexture!==null||Ct.envMap!==Tt||J.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==lt.numPlanes||Ct.numIntersection!==lt.numIntersection)||Ct.vertexAlphas!==Ft||Ct.vertexTangents!==kt||Ct.morphTargets!==At||Ct.morphNormals!==$t||Ct.morphColors!==re||Ct.toneMapping!==oe||Ct.morphTargetsCount!==Qt)&&(te=!0):(te=!0,Ct.__version=J.version);let tn=Ct.currentProgram;te===!0&&(tn=Ds(J,X,q));let Si=!1,Ve=!1,os=!1;const ae=tn.getUniforms(),un=Ct.uniforms;if(Pt.useProgram(tn.program)&&(Si=!0,Ve=!0,os=!0),J.id!==w&&(w=J.id,Ve=!0),Si||S!==L){Pt.buffers.depth.getReversed()?(nt.copy(L.projectionMatrix),Du(nt),Iu(nt),ae.setValue(W,"projectionMatrix",nt)):ae.setValue(W,"projectionMatrix",L.projectionMatrix),ae.setValue(W,"viewMatrix",L.matrixWorldInverse);const Hn=ae.map.cameraPosition;Hn!==void 0&&Hn.setValue(W,pt.setFromMatrixPosition(L.matrixWorld)),Wt.logarithmicDepthBuffer&&ae.setValue(W,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(J.isMeshPhongMaterial||J.isMeshToonMaterial||J.isMeshLambertMaterial||J.isMeshBasicMaterial||J.isMeshStandardMaterial||J.isShaderMaterial)&&ae.setValue(W,"isOrthographic",L.isOrthographicCamera===!0),S!==L&&(S=L,Ve=!0,os=!0)}if(q.isSkinnedMesh){ae.setOptional(W,q,"bindMatrix"),ae.setOptional(W,q,"bindMatrixInverse");const Ye=q.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),ae.setValue(W,"boneTexture",Ye.boneTexture,U))}q.isBatchedMesh&&(ae.setOptional(W,q,"batchingTexture"),ae.setValue(W,"batchingTexture",q._matricesTexture,U),ae.setOptional(W,q,"batchingIdTexture"),ae.setValue(W,"batchingIdTexture",q._indirectTexture,U),ae.setOptional(W,q,"batchingColorTexture"),q._colorsTexture!==null&&ae.setValue(W,"batchingColorTexture",q._colorsTexture,U));const as=K.morphAttributes;if((as.position!==void 0||as.normal!==void 0||as.color!==void 0)&&Nt.update(q,K,tn),(Ve||Ct.receiveShadow!==q.receiveShadow)&&(Ct.receiveShadow=q.receiveShadow,ae.setValue(W,"receiveShadow",q.receiveShadow)),J.isMeshGouraudMaterial&&J.envMap!==null&&(un.envMap.value=Tt,un.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),J.isMeshStandardMaterial&&J.envMap===null&&X.environment!==null&&(un.envMapIntensity.value=X.environmentIntensity),Ve&&(ae.setValue(W,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&Uh(un,os),ct&&J.fog===!0&&ut.refreshFogUniforms(un,ct),ut.refreshMaterialUniforms(un,J,A,N,p.state.transmissionRenderTarget[L.id]),Sr.upload(W,Za(Ct),un,U)),J.isShaderMaterial&&J.uniformsNeedUpdate===!0&&(Sr.upload(W,Za(Ct),un,U),J.uniformsNeedUpdate=!1),J.isSpriteMaterial&&ae.setValue(W,"center",q.center),ae.setValue(W,"modelViewMatrix",q.modelViewMatrix),ae.setValue(W,"normalMatrix",q.normalMatrix),ae.setValue(W,"modelMatrix",q.matrixWorld),J.isShaderMaterial||J.isRawShaderMaterial){const Ye=J.uniformsGroups;for(let Hn=0,Vn=Ye.length;Hn<Vn;Hn++){const Ka=Ye[Hn];V.update(Ka,tn),V.bind(Ka,tn)}}return tn}function Uh(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function Fh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(L,X,K){Rt.get(L.texture).__webglTexture=X,Rt.get(L.depthTexture).__webglTexture=K;const J=Rt.get(L);J.__hasExternalTextures=!0,J.__autoAllocateDepthBuffer=K===void 0,J.__autoAllocateDepthBuffer||xt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),J.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(L,X){const K=Rt.get(L);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,K=0){T=L,b=X,E=K;let J=!0,q=null,ct=!1,vt=!1;if(L){const Tt=Rt.get(L);if(Tt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(W.FRAMEBUFFER,null),J=!1;else if(Tt.__webglFramebuffer===void 0)U.setupRenderTarget(L);else if(Tt.__hasExternalTextures)U.rebindTextures(L,Rt.get(L.texture).__webglTexture,Rt.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const At=L.depthTexture;if(Tt.__boundDepthTexture!==At){if(At!==null&&Rt.has(At)&&(L.width!==At.image.width||L.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(L)}}const Ft=L.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(vt=!0);const kt=Rt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(kt[X])?q=kt[X][K]:q=kt[X],ct=!0):L.samples>0&&U.useMultisampledRTT(L)===!1?q=Rt.get(L).__webglMultisampledFramebuffer:Array.isArray(kt)?q=kt[K]:q=kt,D.copy(L.viewport),z.copy(L.scissor),I=L.scissorTest}else D.copy(G).multiplyScalar(A).floor(),z.copy(H).multiplyScalar(A).floor(),I=tt;if(Pt.bindFramebuffer(W.FRAMEBUFFER,q)&&J&&Pt.drawBuffers(L,q),Pt.viewport(D),Pt.scissor(z),Pt.setScissorTest(I),ct){const Tt=Rt.get(L.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+X,Tt.__webglTexture,K)}else if(vt){const Tt=Rt.get(L.texture),Ft=X||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,Tt.__webglTexture,K||0,Ft)}w=-1},this.readRenderTargetPixels=function(L,X,K,J,q,ct,vt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Rt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){Pt.bindFramebuffer(W.FRAMEBUFFER,bt);try{const Tt=L.texture,Ft=Tt.format,kt=Tt.type;if(!Wt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-J&&K>=0&&K<=L.height-q&&W.readPixels(X,K,J,q,Ut.convert(Ft),Ut.convert(kt),ct)}finally{const Tt=T!==null?Rt.get(T).__webglFramebuffer:null;Pt.bindFramebuffer(W.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(L,X,K,J,q,ct,vt){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Rt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&vt!==void 0&&(bt=bt[vt]),bt){const Tt=L.texture,Ft=Tt.format,kt=Tt.type;if(!Wt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=L.width-J&&K>=0&&K<=L.height-q){Pt.bindFramebuffer(W.FRAMEBUFFER,bt);const At=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,At),W.bufferData(W.PIXEL_PACK_BUFFER,ct.byteLength,W.STREAM_READ),W.readPixels(X,K,J,q,Ut.convert(Ft),Ut.convert(kt),0);const $t=T!==null?Rt.get(T).__webglFramebuffer:null;Pt.bindFramebuffer(W.FRAMEBUFFER,$t);const re=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Lu(W,re,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,At),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ct),W.deleteBuffer(At),W.deleteSync(re),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(L,X=null,K=0){L.isTexture!==!0&&(ys("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,L=arguments[1]);const J=Math.pow(2,-K),q=Math.floor(L.image.width*J),ct=Math.floor(L.image.height*J),vt=X!==null?X.x:0,bt=X!==null?X.y:0;U.setTexture2D(L,0),W.copyTexSubImage2D(W.TEXTURE_2D,K,0,0,vt,bt,q,ct),Pt.unbindTexture()},this.copyTextureToTexture=function(L,X,K=null,J=null,q=0){L.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture function signature has changed."),J=arguments[0]||null,L=arguments[1],X=arguments[2],q=arguments[3]||0,K=null);let ct,vt,bt,Tt,Ft,kt,At,$t,re;const oe=L.isCompressedTexture?L.mipmaps[q]:L.image;K!==null?(ct=K.max.x-K.min.x,vt=K.max.y-K.min.y,bt=K.isBox3?K.max.z-K.min.z:1,Tt=K.min.x,Ft=K.min.y,kt=K.isBox3?K.min.z:0):(ct=oe.width,vt=oe.height,bt=oe.depth||1,Tt=0,Ft=0,kt=0),J!==null?(At=J.x,$t=J.y,re=J.z):(At=0,$t=0,re=0);const Be=Ut.convert(X.format),Qt=Ut.convert(X.type);let Ct;X.isData3DTexture?(U.setTexture3D(X,0),Ct=W.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(U.setTexture2DArray(X,0),Ct=W.TEXTURE_2D_ARRAY):(U.setTexture2D(X,0),Ct=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,X.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,X.unpackAlignment);const wn=W.getParameter(W.UNPACK_ROW_LENGTH),te=W.getParameter(W.UNPACK_IMAGE_HEIGHT),tn=W.getParameter(W.UNPACK_SKIP_PIXELS),Si=W.getParameter(W.UNPACK_SKIP_ROWS),Ve=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,oe.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,oe.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Tt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ft),W.pixelStorei(W.UNPACK_SKIP_IMAGES,kt);const os=L.isDataArrayTexture||L.isData3DTexture,ae=X.isDataArrayTexture||X.isData3DTexture;if(L.isRenderTargetTexture||L.isDepthTexture){const un=Rt.get(L),as=Rt.get(X),Ye=Rt.get(un.__renderTarget),Hn=Rt.get(as.__renderTarget);Pt.bindFramebuffer(W.READ_FRAMEBUFFER,Ye.__webglFramebuffer),Pt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Vn=0;Vn<bt;Vn++)os&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Rt.get(L).__webglTexture,q,kt+Vn),L.isDepthTexture?(ae&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Rt.get(X).__webglTexture,q,re+Vn),W.blitFramebuffer(Tt,Ft,ct,vt,At,$t,ct,vt,W.DEPTH_BUFFER_BIT,W.NEAREST)):ae?W.copyTexSubImage3D(Ct,q,At,$t,re+Vn,Tt,Ft,ct,vt):W.copyTexSubImage2D(Ct,q,At,$t,re+Vn,Tt,Ft,ct,vt);Pt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else ae?L.isDataTexture||L.isData3DTexture?W.texSubImage3D(Ct,q,At,$t,re,ct,vt,bt,Be,Qt,oe.data):X.isCompressedArrayTexture?W.compressedTexSubImage3D(Ct,q,At,$t,re,ct,vt,bt,Be,oe.data):W.texSubImage3D(Ct,q,At,$t,re,ct,vt,bt,Be,Qt,oe):L.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,q,At,$t,ct,vt,Be,Qt,oe.data):L.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,q,At,$t,oe.width,oe.height,Be,oe.data):W.texSubImage2D(W.TEXTURE_2D,q,At,$t,ct,vt,Be,Qt,oe);W.pixelStorei(W.UNPACK_ROW_LENGTH,wn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,te),W.pixelStorei(W.UNPACK_SKIP_PIXELS,tn),W.pixelStorei(W.UNPACK_SKIP_ROWS,Si),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ve),q===0&&X.generateMipmaps&&W.generateMipmap(Ct),Pt.unbindTexture()},this.copyTextureToTexture3D=function(L,X,K=null,J=null,q=0){return L.isTexture!==!0&&(ys("WebGLRenderer: copyTextureToTexture3D function signature has changed."),K=arguments[0]||null,J=arguments[1]||null,L=arguments[2],X=arguments[3],q=arguments[4]||0),ys('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(L,X,K,J,q)},this.initRenderTarget=function(L){Rt.get(L).__webglFramebuffer===void 0&&U.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?U.setTextureCube(L,0):L.isData3DTexture?U.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?U.setTexture2DArray(L,0):U.setTexture2D(L,0),Pt.unbindTexture()},this.resetState=function(){b=0,E=0,T=null,Pt.reset(),Zt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class Ua{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new Ua(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class xh extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mn,this.environmentIntensity=1,this.environmentRotation=new Mn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Fr extends Te{constructor(t=null,e=1,n=1,i,s,o,a,l,c=Oe,h=Oe,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Zl extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Oi=new Jt,$l=new Jt,er=[],Kl=new yi,q0=new Jt,ds=new Yt,fs=new ns;class nr extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Zl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,q0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new yi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),Kl.copy(t.boundingBox).applyMatrix4(Oi),this.boundingBox.union(Kl)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new ns),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Oi),fs.copy(t.boundingSphere).applyMatrix4(Oi),this.boundingSphere.union(fs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(ds.geometry=this.geometry,ds.material=this.material,ds.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),fs.copy(this.boundingSphere),fs.applyMatrix4(n),t.ray.intersectsSphere(fs)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Oi),$l.multiplyMatrices(n,Oi),ds.matrixWorld=$l,ds.raycast(t,er);for(let o=0,a=er.length;o<a;o++){const l=er[o];l.instanceId=s,l.object=this,e.push(l)}er.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Zl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Fr(new Float32Array(i*this.count),i,this.count,wa,Xe));const s=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class yh extends Mi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Jl=new Jt,pa=new Ra,ir=new ns,sr=new j;class Y0 extends xe{constructor(t=new ze,e=new yh){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ir.copy(n.boundingSphere),ir.applyMatrix4(i),ir.radius+=s,t.ray.intersectsSphere(ir)===!1)return;Jl.copy(i).invert(),pa.copy(t.ray).applyMatrix4(Jl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=c.getX(g);sr.fromBufferAttribute(u,m),Ql(sr,m,l,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)sr.fromBufferAttribute(u,g),Ql(sr,g,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Ql(r,t,e,n,i,s,o){const a=pa.distanceSqToPoint(r);if(a<e){const l=new j;pa.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class j0 extends Te{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qi extends ze{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new de(u,3)),this.setAttribute("normal",new de(d,3)),this.setAttribute("uv",new de(f,2));function _(){const x=new j,P=new j;let b=0;const E=(e-t)/n;for(let T=0;T<=s;T++){const w=[],S=T/s,D=S*(e-t)+t;for(let z=0;z<=i;z++){const I=z/i,F=I*l+a,B=Math.sin(F),M=Math.cos(F);P.x=D*B,P.y=-S*n+m,P.z=D*M,u.push(P.x,P.y,P.z),x.set(B,E,M).normalize(),d.push(x.x,x.y,x.z),f.push(I,1-S),w.push(g++)}v.push(w)}for(let T=0;T<i;T++)for(let w=0;w<s;w++){const S=v[w][T],D=v[w+1][T],z=v[w+1][T+1],I=v[w][T+1];(t>0||w!==0)&&(h.push(S,D,I),b+=3),(e>0||w!==s-1)&&(h.push(D,z,I),b+=3)}c.addGroup(p,b,0),p+=b}function y(x){const P=g,b=new zt,E=new j;let T=0;const w=x===!0?t:e,S=x===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let z=0;z<=i;z++){const F=z/i*l+a,B=Math.cos(F),M=Math.sin(F);E.x=w*M,E.y=m*S,E.z=w*B,u.push(E.x,E.y,E.z),d.push(0,S,0),b.x=B*.5+.5,b.y=M*.5*S+.5,f.push(b.x,b.y),g++}for(let z=0;z<i;z++){const I=P+z,F=D+z;x===!0?h.push(F,F+1,I):h.push(F+1,F,I),T+=3}c.addGroup(p,T,x===!0?1:2),p+=T}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Qi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class Rr extends ze{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new j,d=new j,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&l===Math.PI&&(x=-.5/e);for(let P=0;P<=e;P++){const b=P/e;u.x=-t*Math.cos(i+b*s)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+b*s)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(b+x,1-y),_.push(c++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=h[p][_+1],x=h[p][_],P=h[p+1][_],b=h[p+1][_+1];(p!==0||o>0)&&f.push(y,x,b),(p!==n-1||l<Math.PI)&&f.push(x,P,b)}this.setIndex(f),this.setAttribute("position",new de(g,3)),this.setAttribute("normal",new de(v,3)),this.setAttribute("uv",new de(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Rr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Fa extends ze{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],h=new j,u=new j,d=new j;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*s,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new de(a,3)),this.setAttribute("normal",new de(l,3)),this.setAttribute("uv",new de(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fa(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Z0 extends we{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ce extends Mi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class $0 extends ce{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new zt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class K0 extends Mi{static get type(){return"MeshNormalMaterial"}constructor(t){super(),this.isMeshNormalMaterial=!0,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Aa,this.normalScale=new zt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(t)}copy(t){return super.copy(t),this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.flatShading=t.flatShading,this}}const Pr={enabled:!1,files:{},add:function(r,t){this.enabled!==!1&&(this.files[r]=t)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class J0{constructor(t,e,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Q0=new J0;class Cs{constructor(t){this.manager=t!==void 0?t:Q0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}Cs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Rn={};class tg extends Error{constructor(t,e){super(t),this.response=e}}class eg extends Cs{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Pr.get(t);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Rn[t]!==void 0){Rn[t].push({onLoad:e,onProgress:n,onError:i});return}Rn[t]=[],Rn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Rn[t],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0;let v=0;const m=new ReadableStream({start(p){_();function _(){u.read().then(({done:y,value:x})=>{if(y)p.close();else{v+=x.byteLength;const P=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let b=0,E=h.length;b<E;b++){const T=h[b];T.onProgress&&T.onProgress(P)}p.enqueue(x),_()}},y=>{p.error(y)})}}});return new Response(m)}else throw new tg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Pr.add(t,c);const h=Rn[t];delete Rn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Rn[t];if(h===void 0)throw this.manager.itemError(t),c;delete Rn[t];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class ng extends Cs{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=this,o=Pr.get(t);if(o!==void 0)return s.manager.itemStart(t),setTimeout(function(){e&&e(o),s.manager.itemEnd(t)},0),o;const a=Ts("img");function l(){h(),Pr.add(t,this),e&&e(this),s.manager.itemEnd(t)}function c(u){h(),i&&i(u),s.manager.itemError(t),s.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(t),a.src=t,a}}class ig extends Cs{constructor(t){super(t)}load(t,e,n,i){const s=this,o=new Fr,a=new eg(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(t,function(l){let c;try{c=s.parse(l)}catch(h){if(i!==void 0)i(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:cn,o.wrapT=c.wrapT!==void 0?c.wrapT:cn,o.magFilter=c.magFilter!==void 0?c.magFilter:Ue,o.minFilter=c.minFilter!==void 0?c.minFilter:Ue,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Kn),c.mipmapCount===1&&(o.minFilter=Ue),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,e&&e(o,c)},n,i),o}}class sg extends Cs{constructor(t){super(t)}load(t,e,n,i){const s=new Te,o=new ng(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){s.image=a,s.needsUpdate=!0,e!==void 0&&e(s)},n,i),s}}class Oa extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class rg extends Oa{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const po=new Jt,tc=new j,ec=new j;class og{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new zt(512,512),this.map=null,this.mapPass=null,this.matrix=new Jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new La,this._frameExtents=new zt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;tc.setFromMatrixPosition(t.matrixWorld),e.position.copy(tc),ec.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(ec),e.updateMatrixWorld(),po.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(po),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(po)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class ag extends og{constructor(){super(new Da(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class lg extends Oa{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new ag}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class cg extends Oa{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class hg{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=nc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function nc(){return performance.now()}const ic=new Jt;class ug{constructor(t,e,n=0,i=1/0){this.ray=new Ra(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new Pa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return ic.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ic),this}intersectObject(t,e=!0,n=[]){return ma(t,this,n,e),n.sort(sc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,s=t.length;i<s;i++)ma(t[i],this,n,e);return n.sort(sc),n}}function sc(r,t){return r.distance-t.distance}function ma(r,t,e,n){let i=!0;if(r.layers.test(t.layers)&&r.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let o=0,a=s.length;o<a;o++)ma(s[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:_a}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=_a);class hn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new C);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new C);const n=this.elements,i=t.x,s=t.y,o=t.z;return e.x=n[0]*i+n[1]*s+n[2]*o,e.y=n[3]*i+n[4]*s+n[5]*o,e.z=n[6]*i+n[7]*s+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new hn);const n=this.elements,i=t.elements,s=e.elements,o=n[0],a=n[1],l=n[2],c=n[3],h=n[4],u=n[5],d=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],_=i[3],y=i[4],x=i[5],P=i[6],b=i[7],E=i[8];return s[0]=o*v+a*_+l*P,s[1]=o*m+a*y+l*b,s[2]=o*p+a*x+l*E,s[3]=c*v+h*_+u*P,s[4]=c*m+h*y+u*b,s[5]=c*p+h*x+u*E,s[6]=d*v+f*_+g*P,s[7]=d*m+f*y+g*b,s[8]=d*p+f*x+g*E,e}scale(t,e){e===void 0&&(e=new hn);const n=this.elements,i=e.elements;for(let s=0;s!==3;s++)i[3*s+0]=t.x*n[3*s+0],i[3*s+1]=t.y*n[3*s+1],i[3*s+2]=t.z*n[3*s+2];return e}solve(t,e){e===void 0&&(e=new C);const n=3,i=4,s=[];let o,a;for(o=0;o<n*i;o++)s.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)s[o+i*a]=this.elements[o+3*a];s[3]=t.x,s[7]=t.y,s[11]=t.z;let l=3;const c=l;let h;const u=4;let d;do{if(o=c-l,s[o+i*o]===0){for(a=o+1;a<c;a++)if(s[o+i*a]!==0){h=u;do d=u-h,s[d+i*o]+=s[d+i*a];while(--h);break}}if(s[o+i*o]!==0)for(a=o+1;a<c;a++){const f=s[o+i*a]/s[o+i*o];h=u;do d=u-h,s[d+i*a]=d<=o?0:s[d+i*a]-s[d+i*o]*f;while(--h)}}while(--l);if(e.z=s[2*i+3]/s[2*i+2],e.y=(s[1*i+3]-s[1*i+2]*e.z)/s[1*i+1],e.x=(s[0*i+3]-s[0*i+2]*e.z-s[0*i+1]*e.y)/s[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new hn);const e=3,n=6,i=dg;let s,o;for(s=0;s<3;s++)for(o=0;o<3;o++)i[s+n*o]=this.elements[s+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const l=a;let c;const h=n;let u;do{if(s=l-a,i[s+n*s]===0){for(o=s+1;o<l;o++)if(i[s+n*o]!==0){c=h;do u=h-c,i[u+n*s]+=i[u+n*o];while(--c);break}}if(i[s+n*s]!==0)for(o=s+1;o<l;o++){const d=i[s+n*o]/i[s+n*s];c=h;do u=h-c,i[u+n*o]=u<=s?0:i[u+n*o]-i[u+n*s]*d;while(--c)}}while(--a);s=2;do{o=s-1;do{const d=i[s+n*o]/i[s+n*s];c=n;do u=n-c,i[u+n*o]=i[u+n*o]-i[u+n*s]*d;while(--c)}while(o--)}while(--s);s=2;do{const d=1/i[s+n*s];c=n;do u=n-c,i[u+n*s]=i[u+n*s]*d;while(--c)}while(s--);s=2;do{o=2;do{if(u=i[e+o+n*s],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(s,o,u)}while(o--)}while(s--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,s=t.w,o=e+e,a=n+n,l=i+i,c=e*o,h=e*a,u=e*l,d=n*a,f=n*l,g=i*l,v=s*o,m=s*a,p=s*l,_=this.elements;return _[0]=1-(d+g),_[1]=h-p,_[2]=u+m,_[3]=h+p,_[4]=1-(c+g),_[5]=f-v,_[6]=u-m,_[7]=f+v,_[8]=1-(c+d),this}transpose(t){t===void 0&&(t=new hn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const dg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class C{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z;return e.x=a*s-l*i,e.y=l*n-o*s,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new C(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new C(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new hn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const s=1/i;this.x*=s,this.y*=s,this.z*=s}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new C);const e=this.x,n=this.y,i=this.z;let s=Math.sqrt(e*e+n*n+i*i);return s>0?(s=1/s,t.x=e*s,t.y=n*s,t.z=i*s):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return Math.sqrt((s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z;return(s-e)*(s-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new C);const n=this.x,i=this.y,s=this.z;return e.x=t*n,e.y=t*i,e.z=t*s,e}vmul(t,e){return e===void 0&&(e=new C),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new C),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new C),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=fg,s=1/n;i.set(this.x*s,this.y*s,this.z*s);const o=pg;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,s=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=s+(t.y-s)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(rc),rc.almostEquals(t,e)}clone(){return new C(this.x,this.y,this.z)}}C.ZERO=new C(0,0,0);C.UNIT_X=new C(1,0,0);C.UNIT_Y=new C(0,1,0);C.UNIT_Z=new C(0,0,1);const fg=new C,pg=new C,rc=new C;class qe{constructor(t){t===void 0&&(t={}),this.lowerBound=new C,this.upperBound=new C,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const s=this.lowerBound,o=this.upperBound,a=n;s.copy(t[0]),a&&a.vmult(s,s),o.copy(s);for(let l=1;l<t.length;l++){let c=t[l];a&&(a.vmult(c,oc),c=oc),c.x>o.x&&(o.x=c.x),c.x<s.x&&(s.x=c.x),c.y>o.y&&(o.y=c.y),c.y<s.y&&(s.y=c.y),c.z>o.z&&(o.z=c.z),c.z<s.z&&(s.z=c.z)}return e&&(e.vadd(s,s),e.vadd(o,o)),i&&(s.x-=i,s.y-=i,s.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new qe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound,o=i.x<=n.x&&n.x<=s.x||e.x<=s.x&&s.x<=n.x,a=i.y<=n.y&&n.y<=s.y||e.y<=s.y&&s.y<=n.y,l=i.z<=n.z&&n.z<=s.z||e.z<=s.z&&s.z<=n.z;return o&&a&&l}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,s=t.upperBound;return e.x<=i.x&&n.x>=s.x&&e.y<=i.y&&n.y>=s.y&&e.z<=i.z&&n.z>=s.z}getCorners(t,e,n,i,s,o,a,l){const c=this.lowerBound,h=this.upperBound;t.copy(c),e.set(h.x,c.y,c.z),n.set(h.x,h.y,c.z),i.set(c.x,h.y,h.z),s.set(h.x,c.y,h.z),o.set(c.x,h.y,c.z),a.set(c.x,c.y,h.z),l.copy(h)}toLocalFrame(t,e){const n=ac,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=ac,i=n[0],s=n[1],o=n[2],a=n[3],l=n[4],c=n[5],h=n[6],u=n[7];this.getCorners(i,s,o,a,l,c,h,u);for(let d=0;d!==8;d++){const f=n[d];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,s=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,l=(this.upperBound.x-n.x)*i,c=(this.lowerBound.y-n.y)*s,h=(this.upperBound.y-n.y)*s,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,l),Math.min(c,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(a,l),Math.max(c,h)),Math.max(u,d));return!(g<0||f>g)}}const oc=new C,ac=[new C,new C,new C,new C,new C,new C,new C,new C];class lc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const s=i;i=n,n=s}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:s}=e;if(s>i){const o=s;s=i,i=o}this.matrix[(i*(i+1)>>1)+s-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Mh{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,s=n.length;i<s;i++)n[i].call(this,t)}return this}}class me{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new C),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=mg,i=gg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new me);const n=this.x,i=this.y,s=this.z,o=this.w,a=t.x,l=t.y,c=t.z,h=t.w;return e.x=n*h+o*a+i*c-s*l,e.y=i*h+o*l+s*a-n*c,e.z=s*h+o*c+n*l-i*a,e.w=o*h-n*a-i*l-s*c,e}inverse(t){t===void 0&&(t=new me);const e=this.x,n=this.y,i=this.z,s=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+s*s);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new me),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new C);const n=t.x,i=t.y,s=t.z,o=this.x,a=this.y,l=this.z,c=this.w,h=c*n+a*s-l*i,u=c*i+l*n-o*s,d=c*s+o*i-a*n,f=-o*n-a*i-l*s;return e.x=h*c+f*-o+u*-l-d*-a,e.y=u*c+f*-a+d*-o-h*-l,e.z=d*c+f*-l+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,s;const o=this.x,a=this.y,l=this.z,c=this.w;switch(e){case"YZX":const h=o*a+l*c;if(h>.499&&(n=2*Math.atan2(o,c),i=Math.PI/2,s=0),h<-.499&&(n=-2*Math.atan2(o,c),i=-Math.PI/2,s=0),n===void 0){const u=o*o,d=a*a,f=l*l;n=Math.atan2(2*a*c-2*o*l,1-2*d-2*f),i=Math.asin(2*h),s=Math.atan2(2*o*c-2*a*l,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=s}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const s=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),l=Math.sin(t/2),c=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="YXZ"?(this.x=l*o*a+s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="ZXY"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a-l*c*h):i==="ZYX"?(this.x=l*o*a-s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a+l*c*h):i==="YZX"?(this.x=l*o*a+s*c*h,this.y=s*c*a+l*o*h,this.z=s*o*h-l*c*a,this.w=s*o*a-l*c*h):i==="XZY"&&(this.x=l*o*a-s*c*h,this.y=s*c*a-l*o*h,this.z=s*o*h+l*c*a,this.w=s*o*a+l*c*h),this}clone(){return new me(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new me);const i=this.x,s=this.y,o=this.z,a=this.w;let l=t.x,c=t.y,h=t.z,u=t.w,d,f,g,v,m;return f=i*l+s*c+o*h+a*u,f<0&&(f=-f,l=-l,c=-c,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),g=Math.sin(d),v=Math.sin((1-e)*d)/g,m=Math.sin(e*d)/g):(v=1-e,m=e),n.x=v*i+m*l,n.y=v*s+m*c,n.z=v*o+m*h,n.w=v*a+m*u,n}integrate(t,e,n,i){i===void 0&&(i=new me);const s=t.x*n.x,o=t.y*n.y,a=t.z*n.z,l=this.x,c=this.y,h=this.z,u=this.w,d=e*.5;return i.x+=d*(s*u+o*h-a*c),i.y+=d*(o*u+a*l-s*h),i.z+=d*(a*u+s*c-o*l),i.w+=d*(-s*l-o*c-a*h),i}}const mg=new C,gg=new C,vg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class wt{constructor(t){t===void 0&&(t={}),this.id=wt.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}wt.idCounter=0;wt.types=vg;class Kt{constructor(t){t===void 0&&(t={}),this.position=new C,this.quaternion=new me,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Kt.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Kt.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),n.vsub(t,i),e.conjugate(cc),cc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new C),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new C),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new C),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const cc=new me;class Yi extends wt{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:s,boundingSphereRadius:o}=t;super({type:wt.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=s?s.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new C;for(let s=0;s!==t.length;s++){const o=t[s],a=o.length;for(let l=0;l!==a;l++){const c=(l+1)%a;e[o[l]].vsub(e[o[c]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new C;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],s=this.vertices[n[1]],o=this.vertices[n[2]];Yi.computeNormal(i,s,o,e)}static computeNormal(t,e,n,i){const s=new C,o=new C;e.vsub(t,o),n.vsub(e,s),s.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,s,o,a,l,c){const h=new C;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),s.vmult(h,h);const v=h.dot(o);v>d&&(d=v,u=g)}const f=[];for(let g=0;g<n.faces[u].length;g++){const v=n.vertices[n.faces[u][g]],m=new C;m.copy(v),s.vmult(m,m),i.vadd(m,m),f.push(m)}u>=0&&this.clipFaceAgainstHull(o,t,e,f,a,l,c)}findSeparatingAxis(t,e,n,i,s,o,a,l){const c=new C,h=new C,u=new C,d=new C,f=new C,g=new C;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],c);const _=m.testSepAxis(c,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(c))}else{const p=a?a.length:m.faces.length;for(let _=0;_<p;_++){const y=a?a[_]:_;c.copy(m.faceNormals[y]),n.vmult(c,c);const x=m.testSepAxis(c,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(c))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){s.vmult(t.uniqueAxes[p],h);const _=m.testSepAxis(h,t,e,n,i,s);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const p=l?l.length:t.faces.length;for(let _=0;_<p;_++){const y=l?l[_]:_;h.copy(t.faceNormals[y]),s.vmult(h,h);const x=m.testSepAxis(h,t,e,n,i,s);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],d);for(let _=0;_!==t.uniqueEdges.length;_++)if(s.vmult(t.uniqueEdges[_],f),d.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,s);if(y===!1)return!1;y<v&&(v=y,o.copy(g))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,s,o){const a=this;Yi.project(a,t,n,i,mo),Yi.project(e,t,s,o,go);const l=mo[0],c=mo[1],h=go[0],u=go[1];if(l<u||h<c)return!1;const d=l-u,f=h-c;return d<f?d:f}calculateLocalInertia(t,e){const n=new C,i=new C;this.computeLocalAABB(i,n);const s=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*s*2*s+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*s*2*s)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,s,o,a){const l=new C,c=new C,h=new C,u=new C,d=new C,f=new C,g=new C,v=new C,m=this,p=[],_=i,y=p;let x=-1,P=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){l.copy(m.faceNormals[S]),n.vmult(l,l);const D=l.dot(t);D<P&&(P=D,x=S)}if(x<0)return;const b=m.faces[x];b.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let D=0;D<m.faces[S].length;D++)b.indexOf(m.faces[S][D])!==-1&&S!==x&&b.connectedFaces.indexOf(S)===-1&&b.connectedFaces.push(S);const E=b.length;for(let S=0;S<E;S++){const D=m.vertices[b[S]],z=m.vertices[b[(S+1)%E]];D.vsub(z,c),h.copy(c),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[x]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(D),n.vmult(f,f),e.vadd(f,f);const I=b.connectedFaces[S];g.copy(this.faceNormals[I]);const F=this.getPlaneConstantOfFace(I);v.copy(g),n.vmult(v,v);const B=F-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,B);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[x]);const T=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);const w=T-v.dot(e);for(let S=0;S<_.length;S++){let D=v.dot(_[S])+w;if(D<=s&&(console.log(`clamped: depth=${D} to minDist=${s}`),D=s),D<=o){const z=_[S];if(D<=1e-6){const I={point:z,normal:v,depth:D};a.push(I)}}}}clipFaceAgainstPlane(t,e,n,i){let s,o;const a=t.length;if(a<2)return e;let l=t[t.length-1],c=t[0];s=n.dot(l)+i;for(let h=0;h<a;h++){if(c=t[h],o=n.dot(c)+i,s<0)if(o<0){const u=new C;u.copy(c),e.push(u)}else{const u=new C;l.lerp(c,s/(s-o),u),e.push(u)}else if(o<0){const u=new C;l.lerp(c,s/(s-o),u),e.push(u),e.push(c)}l=c,s=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new C);const n=this.vertices,i=this.worldVertices;for(let s=0;s!==this.vertices.length;s++)e.vmult(n[s],i[s]),t.vadd(i[s],i[s]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const s=n[i];s.x<t.x?t.x=s.x:s.x>e.x&&(e.x=s.x),s.y<t.y?t.y=s.y:s.y>e.y&&(e.y=s.y),s.z<t.z?t.z=s.z:s.z>e.z&&(e.z=s.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new C);const n=this.faceNormals,i=this.worldFaceNormals;for(let s=0;s!==e;s++)t.vmult(n[s],i[s]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const s=this.vertices;let o,a,l,c,h,u,d=new C;for(let f=0;f<s.length;f++){d.copy(s[f]),e.vmult(d,d),t.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(c===void 0||g.x>c)&&(c=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(l===void 0||g.z<l)&&(l=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,l),i.set(c,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new C);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let s=0;s<n;s++){const o=i[s];e.vmult(o,o)}for(let s=0;s<this.faceNormals.length;s++){const o=this.faceNormals[s];e.vmult(o,o)}}if(t)for(let s=0;s<n;s++){const o=i[s];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,s=new C;this.getAveragePointLocal(s);for(let o=0;o<this.faces.length;o++){let a=i[o];const l=e[n[o][0]],c=new C;t.vsub(l,c);const h=a.dot(c),u=new C;s.vsub(l,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(t,e,n,i,s){const o=t.vertices.length,a=_g;let l=0,c=0;const h=xg,u=t.vertices;h.setZero(),Kt.vectorToLocalFrame(n,i,e,a),Kt.pointToLocalFrame(n,i,h,h);const d=h.dot(a);c=l=u[0].dot(a);for(let f=1;f<o;f++){const g=u[f].dot(a);g>l&&(l=g),g<c&&(c=g)}if(c-=d,l-=d,c>l){const f=c;c=l,l=f}s[0]=l,s[1]=c}}const mo=[],go=[];new C;const _g=new C,xg=new C;class Rs extends wt{constructor(t){super({type:wt.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=C,s=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],l=new Yi({vertices:s,faces:o,axes:a});this.convexPolyhedronRepresentation=l,l.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new C),Rs.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let s=0;s!==n.length;s++)e.vmult(n[s],n[s]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,s=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<s.length;o++)Zn.set(s[o][0],s[o][1],s[o][2]),e.vmult(Zn,Zn),t.vadd(Zn,Zn),n(Zn.x,Zn.y,Zn.z)}calculateWorldAABB(t,e,n,i){const s=this.halfExtents;dn[0].set(s.x,s.y,s.z),dn[1].set(-s.x,s.y,s.z),dn[2].set(-s.x,-s.y,s.z),dn[3].set(-s.x,-s.y,-s.z),dn[4].set(s.x,-s.y,-s.z),dn[5].set(s.x,s.y,-s.z),dn[6].set(-s.x,s.y,-s.z),dn[7].set(s.x,-s.y,s.z);const o=dn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const l=dn[a];e.vmult(l,l),t.vadd(l,l);const c=l.x,h=l.y,u=l.z;c>i.x&&(i.x=c),h>i.y&&(i.y=h),u>i.z&&(i.z=u),c<n.x&&(n.x=c),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Zn=new C,dn=[new C,new C,new C,new C,new C,new C,new C,new C],za={DYNAMIC:1,STATIC:2,KINEMATIC:4},Ba={AWAKE:0,SLEEPY:1,SLEEPING:2};class _t extends Mh{constructor(t){t===void 0&&(t={}),super(),this.id=_t.idCounter++,this.index=-1,this.world=null,this.vlambda=new C,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new C,this.previousPosition=new C,this.interpolatedPosition=new C,this.initPosition=new C,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new C,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new C,this.force=new C;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?_t.STATIC:_t.DYNAMIC,typeof t.type==typeof _t.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=_t.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new C,this.quaternion=new me,this.initQuaternion=new me,this.previousQuaternion=new me,this.interpolatedQuaternion=new me,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new C,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new C,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new C,this.invInertia=new C,this.invInertiaWorld=new hn,this.invMassSolve=0,this.invInertiaSolve=new C,this.invInertiaWorldSolve=new hn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new C(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new C(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new qe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new C,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=_t.AWAKE,this.wakeUpAfterNarrowphase=!1,t===_t.SLEEPING&&this.dispatchEvent(_t.wakeupEvent)}sleep(){this.sleepState=_t.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===_t.AWAKE&&n<i?(this.sleepState=_t.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(_t.sleepyEvent)):e===_t.SLEEPY&&n>i?this.wakeUp():e===_t.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(_t.sleepEvent))}}updateSolveMassProperties(){this.sleepState===_t.SLEEPING||this.type===_t.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new C),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new C),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new C),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new C,s=new me;return e&&i.copy(e),n&&s.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(s),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let s=0;s!==n;s++){const o=t[s];o.updateBoundingSphereRadius();const a=e[s].length(),l=o.boundingSphereRadius;a+l>i&&(i=a+l)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,s=yg,o=Mg,a=this.quaternion,l=this.aabb,c=Sg;for(let h=0;h!==i;h++){const u=t[h];a.vmult(e[h],s),s.vadd(this.position,s),a.mult(n[h],o),u.calculateWorldAABB(s,o,c.lowerBound,c.upperBound),h===0?l.copy(c):l.extend(c)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=wg,i=Eg;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new C),this.type!==_t.DYNAMIC)return;this.sleepState===_t.SLEEPING&&this.wakeUp();const n=bg;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new C),this.type!==_t.DYNAMIC)return;const n=Tg,i=Ag;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===_t.DYNAMIC&&(this.sleepState===_t.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new C),this.type!==_t.DYNAMIC)return;this.sleepState===_t.SLEEPING&&this.wakeUp();const n=e,i=Cg;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const s=Rg;n.cross(t,s),this.invInertiaWorld.vmult(s,s),this.angularVelocity.vadd(s,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new C),this.type!==_t.DYNAMIC)return;const n=Pg,i=Lg;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=Dg;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Rs.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new C;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===_t.DYNAMIC||this.type===_t.KINEMATIC)||this.sleepState===_t.SLEEPING)return;const i=this.velocity,s=this.angularVelocity,o=this.position,a=this.force,l=this.torque,c=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*t;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const g=u.elements,v=this.angularFactor,m=l.x*v.x,p=l.y*v.y,_=l.z*v.z;s.x+=t*(g[0]*m+g[1]*p+g[2]*_),s.y+=t*(g[3]*m+g[4]*p+g[5]*_),s.z+=t*(g[6]*m+g[7]*p+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,c.integrate(this.angularVelocity,t,this.angularFactor,c),e&&(n?c.normalizeFast():c.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}_t.idCounter=0;_t.COLLIDE_EVENT_NAME="collide";_t.DYNAMIC=za.DYNAMIC;_t.STATIC=za.STATIC;_t.KINEMATIC=za.KINEMATIC;_t.AWAKE=Ba.AWAKE;_t.SLEEPY=Ba.SLEEPY;_t.SLEEPING=Ba.SLEEPING;_t.wakeupEvent={type:"wakeup"};_t.sleepyEvent={type:"sleepy"};_t.sleepEvent={type:"sleep"};const yg=new C,Mg=new me,Sg=new qe,wg=new hn,Eg=new hn;new hn;const bg=new C,Tg=new C,Ag=new C,Cg=new C,Rg=new C,Pg=new C,Lg=new C,Dg=new C;class Sh{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&_t.STATIC)!==0||t.sleepState===_t.SLEEPING)&&((e.type&_t.STATIC)!==0||e.sleepState===_t.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const s=Ig;e.position.vsub(t.position,s);const o=(t.boundingRadius+e.boundingRadius)**2;s.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=Ng,i=Ug,s=Fg,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],s[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const l=i[a].id,c=s[a].id,h=l<c?`${l},${c}`:`${c},${l}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const l=n.keys.pop(),c=n[l];t.push(i[c]),e.push(s[c]),delete n[l]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new C;t.position.vsub(e.position,n);const i=t.shapes[0],s=e.shapes[0];return Math.pow(i.boundingSphereRadius+s.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const Ig=new C;new C;new me;new C;const Ng={keys:[]},Ug=[],Fg=[];new C;new C;new C;class Og extends Sh{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,s=i.length;let o,a;for(let l=0;l!==s;l++)for(let c=0;c!==l;c++)o=i[l],a=i[c],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const s=t.bodies[i];s.aabbNeedsUpdate&&s.updateAABB(),s.aabb.overlaps(e)&&n.push(s)}return n}}class Lr{constructor(){this.rayFromWorld=new C,this.rayToWorld=new C,this.hitNormalWorld=new C,this.hitPointWorld=new C,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,s,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=s,this.body=o,this.distance=a}}let wh,Eh,bh,Th,Ah,Ch,Rh;const ka={CLOSEST:1,ANY:2,ALL:4};wh=wt.types.SPHERE;Eh=wt.types.PLANE;bh=wt.types.BOX;Th=wt.types.CYLINDER;Ah=wt.types.CONVEXPOLYHEDRON;Ch=wt.types.HEIGHTFIELD;Rh=wt.types.TRIMESH;class pe{get[wh](){return this._intersectSphere}get[Eh](){return this._intersectPlane}get[bh](){return this._intersectBox}get[Th](){return this._intersectConvex}get[Ah](){return this._intersectConvex}get[Ch](){return this._intersectHeightfield}get[Rh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new C),e===void 0&&(e=new C),this.from=t.clone(),this.to=e.clone(),this.direction=new C,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=pe.ANY,this.result=new Lr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||pe.ANY,this.result=e.result||new Lr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(hc),vo.length=0,t.broadphase.aabbQuery(t,hc,vo),this.intersectBodies(vo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=zg,s=Bg;for(let o=0,a=t.shapes.length;o<a;o++){const l=t.shapes[o];if(!(n&&!l.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],s),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(l,s,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const s=this.from;if(Qg(s,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,s){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,s)}_intersectPlane(t,e,n,i,s){const o=this.from,a=this.to,l=this.direction,c=new C(0,0,1);e.vmult(c,c);const h=new C;o.vsub(n,h);const u=h.dot(c);a.vsub(n,h);const d=h.dot(c);if(u*d>0||o.distanceTo(a)<u)return;const f=c.dot(l);if(Math.abs(f)<this.precision)return;const g=new C,v=new C,m=new C;o.vsub(n,g);const p=-c.dot(g)/f;l.scale(p,v),o.vadd(v,m),this.reportIntersection(c,m,s,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,s=this.from;e.x=Math.min(i.x,s.x),e.y=Math.min(i.y,s.y),e.z=Math.min(i.z,s.z),n.x=Math.max(i.x,s.x),n.y=Math.max(i.y,s.y),n.z=Math.max(i.z,s.z)}_intersectHeightfield(t,e,n,i,s){t.data,t.elementSize;const o=kg;o.from.copy(this.from),o.to.copy(this.to),Kt.pointToLocalFrame(n,e,o.from,o.from),Kt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Hg;let l,c,h,u;l=c=0,h=u=t.data.length-1;const d=new qe;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),l=Math.max(l,a[0]),c=Math.max(c,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=l;f<h;f++)for(let g=c;g<u;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),Kt.pointToWorldFrame(n,e,t.pillarOffset,rr),this._intersectConvex(t.pillarConvex,e,rr,i,s,uc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),Kt.pointToWorldFrame(n,e,t.pillarOffset,rr),this._intersectConvex(t.pillarConvex,e,rr,i,s,uc)}}}_intersectSphere(t,e,n,i,s){const o=this.from,a=this.to,l=t.radius,c=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-l**2,d=h**2-4*c*u,f=Vg,g=Gg;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1);else{const v=(-h-Math.sqrt(d))/(2*c),m=(-h+Math.sqrt(d))/(2*c);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,s,i,-1))}}_intersectConvex(t,e,n,i,s,o){const a=Wg,l=dc,c=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=c?c.length:h.length,_=this.result;for(let y=0;!_.shouldStop&&y<p;y++){const x=c?c[y]:y,P=h[x],b=d[x],E=e,T=n;l.copy(u[P[0]]),E.vmult(l,l),l.vadd(T,l),l.vsub(g,l),E.vmult(b,a);const w=f.dot(a);if(Math.abs(w)<this.precision)continue;const S=a.dot(l)/w;if(!(S<0)){f.scale(S,ke),ke.vadd(g,ke),rn.copy(u[P[0]]),E.vmult(rn,rn),T.vadd(rn,rn);for(let D=1;!_.shouldStop&&D<P.length-1;D++){fn.copy(u[P[D]]),pn.copy(u[P[D+1]]),E.vmult(fn,fn),E.vmult(pn,pn),T.vadd(fn,fn),T.vadd(pn,pn);const z=ke.distanceTo(g);!(pe.pointInTriangle(ke,rn,fn,pn)||pe.pointInTriangle(ke,fn,rn,pn))||z>m||this.reportIntersection(a,ke,s,i,x)}}}}_intersectTrimesh(t,e,n,i,s,o){const a=Xg,l=Kg,c=Jg,h=dc,u=qg,d=Yg,f=jg,g=$g,v=Zg,m=t.indices;t.vertices;const p=this.from,_=this.to,y=this.direction;c.position.copy(n),c.quaternion.copy(e),Kt.vectorToLocalFrame(n,e,y,u),Kt.pointToLocalFrame(n,e,p,d),Kt.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.vsub(d,u),u.normalize();const x=d.distanceSquared(f);t.tree.rayQuery(this,c,l);for(let P=0,b=l.length;!this.result.shouldStop&&P!==b;P++){const E=l[P];t.getNormal(E,a),t.getVertex(m[E*3],rn),rn.vsub(d,h);const T=u.dot(a),w=a.dot(h)/T;if(w<0)continue;u.scale(w,ke),ke.vadd(d,ke),t.getVertex(m[E*3+1],fn),t.getVertex(m[E*3+2],pn);const S=ke.distanceSquared(d);!(pe.pointInTriangle(ke,fn,rn,pn)||pe.pointInTriangle(ke,rn,fn,pn))||S>x||(Kt.vectorToWorldFrame(e,a,v),Kt.pointToWorldFrame(n,e,ke,g),this.reportIntersection(v,g,s,i,E))}l.length=0}reportIntersection(t,e,n,i,s){const o=this.from,a=this.to,l=o.distanceTo(e),c=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(c.hitFaceIndex=typeof s<"u"?s:-1,this.mode){case pe.ALL:this.hasHit=!0,c.set(o,a,t,e,n,i,l),c.hasHit=!0,this.callback(c);break;case pe.CLOSEST:(l<c.distance||!c.hasHit)&&(this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l));break;case pe.ANY:this.hasHit=!0,c.hasHit=!0,c.set(o,a,t,e,n,i,l),c.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,pi),n.vsub(e,ps),t.vsub(e,_o);const s=pi.dot(pi),o=pi.dot(ps),a=pi.dot(_o),l=ps.dot(ps),c=ps.dot(_o);let h,u;return(h=l*a-o*c)>=0&&(u=s*c-o*a)>=0&&h+u<s*l-o*o}}pe.CLOSEST=ka.CLOSEST;pe.ANY=ka.ANY;pe.ALL=ka.ALL;const hc=new qe,vo=[],ps=new C,_o=new C,zg=new C,Bg=new me,ke=new C,rn=new C,fn=new C,pn=new C;new C;new Lr;const uc={faceList:[0]},rr=new C,kg=new pe,Hg=[],Vg=new C,Gg=new C,Wg=new C;new C;new C;const dc=new C,Xg=new C,qg=new C,Yg=new C,jg=new C,Zg=new C,$g=new C;new qe;const Kg=[],Jg=new Kt,pi=new C,or=new C;function Qg(r,t,e){e.vsub(r,pi);const n=pi.dot(t);return t.scale(n,or),or.vadd(r,or),e.distanceTo(or)}class Vi extends Sh{static checkBounds(t,e,n){let i,s;n===0?(i=t.position.x,s=e.position.x):n===1?(i=t.position.y,s=e.position.y):n===2&&(i=t.position.z,s=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,l=i+o;return s-a<l}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.x<=i.aabb.lowerBound.x);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.y<=i.aabb.lowerBound.y);s--)t[s+1]=t[s];t[s+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let s;for(s=e-1;s>=0&&!(t[s].aabb.lowerBound.z<=i.aabb.lowerBound.z);s--)t[s+1]=t[s];t[s+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,s=i.length,o=this.axisIndex;let a,l;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==s;a++){const c=i[a];for(l=a+1;l<s;l++){const h=i[l];if(this.needBroadphaseCollision(c,h)){if(!Vi.checkBounds(c,h,o))break;this.intersectionTest(c,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const s=t[i];s.aabbNeedsUpdate&&s.updateAABB()}e===0?Vi.insertionSortX(t):e===1?Vi.insertionSortY(t):e===2&&Vi.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,s=0,o=0;const a=this.axisList,l=a.length,c=1/l;for(let f=0;f!==l;f++){const g=a[f],v=g.position.x;t+=v,e+=v*v;const m=g.position.y;n+=m,i+=m*m;const p=g.position.z;s+=p,o+=p*p}const h=e-t*t*c,u=i-n*n*c,d=o-s*s*c;h>u?h>d?this.axisIndex=0:this.axisIndex=2:u>d?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let s="x";i===1&&(s="y"),i===2&&(s="z");const o=this.axisList;e.lowerBound[s],e.upperBound[s];for(let a=0;a<o.length;a++){const l=o[a];l.aabbNeedsUpdate&&l.updateAABB(),l.aabb.overlaps(e)&&n.push(l)}return n}}class tv{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class fc{constructor(){this.spatial=new C,this.rotational=new C}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Ps{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Ps.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new fc,this.jacobianElementB=new fc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,s=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*s*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),s=this.computeGq(),o=this.computeGiMf();return-s*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.position,o=i.position;return t.spatial.dot(s)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.velocity,o=i.velocity,a=n.angularVelocity,l=i.angularVelocity;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.vlambda,o=i.vlambda,a=n.wlambda,l=i.wlambda;return t.multiplyVectors(s,a)+e.multiplyVectors(o,l)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.force,o=n.torque,a=i.force,l=i.torque,c=n.invMassSolve,h=i.invMassSolve;return s.scale(c,pc),a.scale(h,mc),n.invInertiaWorldSolve.vmult(o,gc),i.invInertiaWorldSolve.vmult(l,vc),t.multiplyVectors(pc,gc)+e.multiplyVectors(mc,vc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,s=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,l=i.invInertiaWorldSolve;let c=s+o;return a.vmult(t.rotational,ar),c+=ar.dot(t.rotational),l.vmult(e.rotational,ar),c+=ar.dot(e.rotational),c}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,s=this.bj,o=ev;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),s.vlambda.addScaledVector(s.invMassSolve*t,n.spatial,s.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),s.invInertiaWorldSolve.vmult(n.rotational,o),s.wlambda.addScaledVector(t,o,s.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Ps.idCounter=0;const pc=new C,mc=new C,gc=new C,vc=new C,ar=new C,ev=new C;class nv extends Ps{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new C,this.rj=new C,this.ni=new C}computeB(t){const e=this.a,n=this.b,i=this.bi,s=this.bj,o=this.ri,a=this.rj,l=iv,c=sv,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=s.velocity,f=s.angularVelocity;s.force,s.torque;const g=rv,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,l),a.cross(p,c),p.negate(v.spatial),l.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(c),g.copy(s.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=p.dot(g),y=this.restitution+1,x=y*d.dot(p)-y*h.dot(p)+f.dot(c)-u.dot(l),P=this.computeGiMf();return-_*e-x*n-t*P}getImpactVelocityAlongNormal(){const t=ov,e=av,n=lv,i=cv,s=hv;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,s),this.ni.dot(s)}}const iv=new C,sv=new C,rv=new C,ov=new C,av=new C,lv=new C,cv=new C,hv=new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class _c extends Ps{constructor(t,e,n){super(t,e,-n,n),this.ri=new C,this.rj=new C,this.t=new C}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,s=uv,o=dv,a=this.t;n.cross(a,s),i.cross(a,o);const l=this.jacobianElementA,c=this.jacobianElementB;a.negate(l.spatial),s.negate(l.rotational),c.spatial.copy(a),c.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const uv=new C,dv=new C;class Or{constructor(t,e,n){n=tv.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Or.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Or.idCounter=0;class _i{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=_i.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}_i.idCounter=0;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new pe;new C;new C;new C;new C(1,0,0),new C(0,1,0),new C(0,0,1);new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;class fv extends Yi{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const s=i,o=[],a=[],l=[],c=[],h=[],u=Math.cos,d=Math.sin;o.push(new C(-e*d(0),-n*.5,e*u(0))),c.push(0),o.push(new C(-t*d(0),n*.5,t*u(0))),h.push(1);for(let g=0;g<s;g++){const v=2*Math.PI/s*(g+1),m=2*Math.PI/s*(g+.5);g<s-1?(o.push(new C(-e*d(v),-n*.5,e*u(v))),c.push(2*g+2),o.push(new C(-t*d(v),n*.5,t*u(v))),h.push(2*g+3),l.push([2*g,2*g+1,2*g+3,2*g+2])):l.push([2*g,2*g+1,1,0]),(s%2===1||g<s/2)&&a.push(new C(-d(m),0,u(m)))}l.push(c),a.push(new C(0,1,0));const f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);l.push(f),super({vertices:o,faces:l,axes:a}),this.type=wt.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new C;new qe;new C;new qe;new C;new C;new C;new C;new C;new C;new C;new qe;new C;new Kt;new qe;class pv{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class mv extends pv{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,s=this.tolerance*this.tolerance,o=this.equations,a=o.length,l=e.bodies,c=l.length,h=t;let u,d,f,g,v,m;if(a!==0)for(let x=0;x!==c;x++)l[x].updateSolveMassProperties();const p=vv,_=_v,y=gv;p.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const P=o[x];y[x]=0,_[x]=P.computeB(h),p[x]=1/P.computeC()}if(a!==0){for(let b=0;b!==c;b++){const E=l[b],T=E.vlambda,w=E.wlambda;T.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let b=0;b!==a;b++){const E=o[b];u=_[b],d=p[b],m=y[b],v=E.computeGWlambda(),f=d*(u-v-E.eps*m),m+f<E.minForce?f=E.minForce-m:m+f>E.maxForce&&(f=E.maxForce-m),y[b]+=f,g+=f>0?f:-f,E.addToWlambda(f)}if(g*g<s)break}for(let b=0;b!==c;b++){const E=l[b],T=E.velocity,w=E.angularVelocity;E.vlambda.vmul(E.linearFactor,E.vlambda),T.vadd(E.vlambda,T),E.wlambda.vmul(E.angularFactor,E.wlambda),w.vadd(E.wlambda,w)}let x=o.length;const P=1/h;for(;x--;)o[x].multiplier=y[x]*P}return n}}const gv=[],vv=[],_v=[];class xv{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class yv extends xv{constructor(){super(...arguments),this.type=C}constructObject(){return new C}}const le={sphereSphere:wt.types.SPHERE,spherePlane:wt.types.SPHERE|wt.types.PLANE,boxBox:wt.types.BOX|wt.types.BOX,sphereBox:wt.types.SPHERE|wt.types.BOX,planeBox:wt.types.PLANE|wt.types.BOX,convexConvex:wt.types.CONVEXPOLYHEDRON,sphereConvex:wt.types.SPHERE|wt.types.CONVEXPOLYHEDRON,planeConvex:wt.types.PLANE|wt.types.CONVEXPOLYHEDRON,boxConvex:wt.types.BOX|wt.types.CONVEXPOLYHEDRON,sphereHeightfield:wt.types.SPHERE|wt.types.HEIGHTFIELD,boxHeightfield:wt.types.BOX|wt.types.HEIGHTFIELD,convexHeightfield:wt.types.CONVEXPOLYHEDRON|wt.types.HEIGHTFIELD,sphereParticle:wt.types.PARTICLE|wt.types.SPHERE,planeParticle:wt.types.PLANE|wt.types.PARTICLE,boxParticle:wt.types.BOX|wt.types.PARTICLE,convexParticle:wt.types.PARTICLE|wt.types.CONVEXPOLYHEDRON,cylinderCylinder:wt.types.CYLINDER,sphereCylinder:wt.types.SPHERE|wt.types.CYLINDER,planeCylinder:wt.types.PLANE|wt.types.CYLINDER,boxCylinder:wt.types.BOX|wt.types.CYLINDER,convexCylinder:wt.types.CONVEXPOLYHEDRON|wt.types.CYLINDER,heightfieldCylinder:wt.types.HEIGHTFIELD|wt.types.CYLINDER,particleCylinder:wt.types.PARTICLE|wt.types.CYLINDER,sphereTrimesh:wt.types.SPHERE|wt.types.TRIMESH,planeTrimesh:wt.types.PLANE|wt.types.TRIMESH};class Mv{get[le.sphereSphere](){return this.sphereSphere}get[le.spherePlane](){return this.spherePlane}get[le.boxBox](){return this.boxBox}get[le.sphereBox](){return this.sphereBox}get[le.planeBox](){return this.planeBox}get[le.convexConvex](){return this.convexConvex}get[le.sphereConvex](){return this.sphereConvex}get[le.planeConvex](){return this.planeConvex}get[le.boxConvex](){return this.boxConvex}get[le.sphereHeightfield](){return this.sphereHeightfield}get[le.boxHeightfield](){return this.boxHeightfield}get[le.convexHeightfield](){return this.convexHeightfield}get[le.sphereParticle](){return this.sphereParticle}get[le.planeParticle](){return this.planeParticle}get[le.boxParticle](){return this.boxParticle}get[le.convexParticle](){return this.convexParticle}get[le.cylinderCylinder](){return this.convexConvex}get[le.sphereCylinder](){return this.sphereConvex}get[le.planeCylinder](){return this.planeConvex}get[le.boxCylinder](){return this.boxConvex}get[le.convexCylinder](){return this.convexConvex}get[le.heightfieldCylinder](){return this.heightfieldCylinder}get[le.particleCylinder](){return this.particleCylinder}get[le.sphereTrimesh](){return this.sphereTrimesh}get[le.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new yv,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,s,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new nv(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const l=this.currentContactMaterial;a.restitution=l.restitution,a.setSpookParams(l.contactEquationStiffness,l.contactEquationRelaxation,this.world.dt);const c=n.material||t.material,h=i.material||e.material;return c&&h&&c.restitution>=0&&h.restitution>=0&&(a.restitution=c.restitution*h.restitution),a.si=s||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,s=t.si,o=t.sj,a=this.world,l=this.currentContactMaterial;let c=l.friction;const h=s.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(c=h.friction*u.friction),c>0){const d=c*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new _c(n,i,d*f),m=g.length?g.pop():new _c(n,i,d*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-d*f,v.maxForce=m.maxForce=d*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),m.setSpookParams(l.frictionEquationStiffness,l.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];li.setZero(),zi.setZero(),Bi.setZero();const s=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==s?(li.vadd(e.ni,li),zi.vadd(e.ri,zi),Bi.vadd(e.rj,Bi)):(li.vsub(e.ni,li),zi.vadd(e.rj,zi),Bi.vadd(e.ri,Bi));const o=1/t;zi.scale(o,n.ri),Bi.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),li.normalize(),li.tangents(n.t,i.t)}getContacts(t,e,n,i,s,o,a){this.contactPointPool=s,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const l=Ev,c=bv,h=Sv,u=wv;for(let d=0,f=t.length;d!==f;d++){const g=t[d],v=e[d];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&_t.KINEMATIC&&v.type&_t.STATIC||g.type&_t.STATIC&&v.type&_t.KINEMATIC||g.type&_t.KINEMATIC&&v.type&_t.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],l),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const y=g.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],c),v.quaternion.vmult(v.shapeOffsets[x],u),u.vadd(v.position,u);const P=v.shapes[x];if(!(y.collisionFilterMask&P.collisionFilterGroup&&P.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(u)>y.boundingSphereRadius+P.boundingSphereRadius)continue;let b=null;y.material&&P.material&&(b=n.getContactMaterial(y.material,P.material)||null),this.currentContactMaterial=b||m||n.defaultContactMaterial;const E=y.type|P.type,T=this[E];if(T){let w=!1;y.type<P.type?w=T.call(this,y,P,h,u,l,c,g,v,y,P,p):w=T.call(this,P,y,u,h,c,l,v,g,y,P,p),w&&p&&(n.shapeOverlapKeeper.set(y.id,P.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,s,o,a,l,c,h,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const d=this.createContactEquation(a,l,t,e,c,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(l.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,i,s,o,a,l,c,h,u){const d=this.createContactEquation(a,l,t,e,c,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(i,lr),d.ni.scale(d.ni.dot(lr),xc),lr.vsub(xc,d.rj),-lr.dot(d.ni)<=t.radius){if(u)return!0;const f=d.ri,g=d.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(l.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,u)}sphereBox(t,e,n,i,s,o,a,l,c,h,u){const d=this.v3pool,f=Kv;n.vsub(i,cr),e.getSideNormals(f,o);const g=t.radius;let v=!1;const m=Qv,p=t_,_=e_;let y=null,x=0,P=0,b=0,E=null;for(let M=0,N=f.length;M!==N&&v===!1;M++){const A=jv;A.copy(f[M]);const O=A.length();A.normalize();const k=cr.dot(A);if(k<O+g&&k>0){const G=Zv,H=$v;G.copy(f[(M+1)%3]),H.copy(f[(M+2)%3]);const tt=G.length(),Y=H.length();G.normalize(),H.normalize();const $=cr.dot(G),at=cr.dot(H);if($<tt&&$>-tt&&at<Y&&at>-Y){const nt=Math.abs(k-O-g);if((E===null||nt<E)&&(E=nt,P=$,b=at,y=O,m.copy(A),p.copy(G),_.copy(H),x++,u))return!0}}}if(x){v=!0;const M=this.createContactEquation(a,l,t,e,c,h);m.scale(-g,M.ri),M.ni.copy(m),M.ni.negate(M.ni),m.scale(y,m),p.scale(P,p),m.vadd(p,m),_.scale(b,_),m.vadd(_,M.rj),M.ri.vadd(n,M.ri),M.ri.vsub(a.position,M.ri),M.rj.vadd(i,M.rj),M.rj.vsub(l.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}let T=d.get();const w=Jv;for(let M=0;M!==2&&!v;M++)for(let N=0;N!==2&&!v;N++)for(let A=0;A!==2&&!v;A++)if(T.set(0,0,0),M?T.vadd(f[0],T):T.vsub(f[0],T),N?T.vadd(f[1],T):T.vsub(f[1],T),A?T.vadd(f[2],T):T.vsub(f[2],T),i.vadd(T,w),w.vsub(n,w),w.lengthSquared()<g*g){if(u)return!0;v=!0;const O=this.createContactEquation(a,l,t,e,c,h);O.ri.copy(w),O.ri.normalize(),O.ni.copy(O.ri),O.ri.scale(g,O.ri),O.rj.copy(T),O.ri.vadd(n,O.ri),O.ri.vsub(a.position,O.ri),O.rj.vadd(i,O.rj),O.rj.vsub(l.position,O.rj),this.result.push(O),this.createFrictionEquationsFromContact(O,this.frictionResult)}d.release(T),T=null;const S=d.get(),D=d.get(),z=d.get(),I=d.get(),F=d.get(),B=f.length;for(let M=0;M!==B&&!v;M++)for(let N=0;N!==B&&!v;N++)if(M%3!==N%3){f[N].cross(f[M],S),S.normalize(),f[M].vadd(f[N],D),z.copy(n),z.vsub(D,z),z.vsub(i,z);const A=z.dot(S);S.scale(A,I);let O=0;for(;O===M%3||O===N%3;)O++;F.copy(n),F.vsub(I,F),F.vsub(D,F),F.vsub(i,F);const k=Math.abs(A),G=F.length();if(k<f[O].length()&&G<g){if(u)return!0;v=!0;const H=this.createContactEquation(a,l,t,e,c,h);D.vadd(I,H.rj),H.rj.copy(H.rj),F.negate(H.ni),H.ni.normalize(),H.ri.copy(H.rj),H.ri.vadd(i,H.ri),H.ri.vsub(n,H.ri),H.ri.normalize(),H.ri.scale(g,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(l.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}d.release(S,D,z,I,F)}planeBox(t,e,n,i,s,o,a,l,c,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,s,o,a,l,t,e,u)}convexConvex(t,e,n,i,s,o,a,l,c,h,u,d,f){const g=g_;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,s,i,o,g,d,f)){const v=[],m=v_;t.clipAgainstHull(n,s,e,i,o,g,-100,100,v);let p=0;for(let _=0;_!==v.length;_++){if(u)return!0;const y=this.createContactEquation(a,l,t,e,c,h),x=y.ri,P=y.rj;g.negate(y.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,x),P.copy(v[_].point),x.vsub(n,x),P.vsub(i,P),x.vadd(n,x),x.vsub(a.position,x),P.vadd(i,P),P.vsub(l.position,P),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,s,o,a,l,c,h,u){const d=this.v3pool;n.vsub(i,n_);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=o_;o.vmult(y,x),i.vadd(x,x);const P=r_;if(x.vsub(n,P),P.lengthSquared()<m*m){if(u)return!0;p=!0;const b=this.createContactEquation(a,l,t,e,c,h);b.ri.copy(P),b.ri.normalize(),b.ni.copy(b.ri),b.ri.scale(m,b.ri),x.vsub(i,b.rj),b.ri.vadd(n,b.ri),b.ri.vsub(a.position,b.ri),b.rj.vadd(i,b.rj),b.rj.vsub(l.position,b.rj),this.result.push(b),this.createFrictionEquationsFromContact(b,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&p===!1;_++){const x=f[_],P=g[_],b=a_;o.vmult(x,b);const E=l_;o.vmult(v[P[0]],E),E.vadd(i,E);const T=c_;b.scale(-m,T),n.vadd(T,T);const w=h_;T.vsub(E,w);const S=w.dot(b),D=u_;if(n.vsub(E,D),S<0&&D.dot(b)>0){const z=[];for(let I=0,F=P.length;I!==F;I++){const B=d.get();o.vmult(v[P[I]],B),i.vadd(B,B),z.push(B)}if(Yv(z,b,n)){if(u)return!0;p=!0;const I=this.createContactEquation(a,l,t,e,c,h);b.scale(-m,I.ri),b.negate(I.ni);const F=d.get();b.scale(-S,F);const B=d.get();b.scale(-m,B),n.vsub(i,I.rj),I.rj.vadd(B,I.rj),I.rj.vadd(F,I.rj),I.rj.vadd(i,I.rj),I.rj.vsub(l.position,I.rj),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),d.release(F),d.release(B),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult);for(let M=0,N=z.length;M!==N;M++)d.release(z[M]);return}else for(let I=0;I!==P.length;I++){const F=d.get(),B=d.get();o.vmult(v[P[(I+1)%P.length]],F),o.vmult(v[P[(I+2)%P.length]],B),i.vadd(F,F),i.vadd(B,B);const M=i_;B.vsub(F,M);const N=s_;M.unit(N);const A=d.get(),O=d.get();n.vsub(F,O);const k=O.dot(N);N.scale(k,A),A.vadd(F,A);const G=d.get();if(A.vsub(n,G),k>0&&k*k<M.lengthSquared()&&G.lengthSquared()<m*m){if(u)return!0;const H=this.createContactEquation(a,l,t,e,c,h);A.vsub(i,H.rj),A.vsub(n,H.ni),H.ni.normalize(),H.ni.scale(m,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(l.position,H.rj),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(let tt=0,Y=z.length;tt!==Y;tt++)d.release(z[tt]);d.release(F),d.release(B),d.release(A),d.release(G),d.release(O);return}d.release(F),d.release(B),d.release(A),d.release(G),d.release(O)}for(let I=0,F=z.length;I!==F;I++)d.release(z[I])}}}planeConvex(t,e,n,i,s,o,a,l,c,h,u){const d=d_,f=f_;f.set(0,0,1),s.vmult(f,f);let g=0;const v=p_;for(let m=0;m!==e.vertices.length;m++)if(d.copy(e.vertices[m]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,v),f.dot(v)<=0){if(u)return!0;const _=this.createContactEquation(a,l,t,e,c,h),y=m_;f.scale(f.dot(v),y),d.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(f),d.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(l.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}sphereHeightfield(t,e,n,i,s,o,a,l,c,h,u){const d=e.data,f=t.radius,g=e.elementSize,v=R_,m=C_;Kt.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(_<0||x<0||p>d.length||y>d[0].length)return;p<0&&(p=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),p>=d.length&&(p=d.length-1),_>=d.length&&(_=d.length-1),x>=d[0].length&&(x=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const P=[];e.getRectMinMax(p,y,_,x,P);const b=P[0],E=P[1];if(m.z-f>E||m.z+f<b)return;const T=this.result;for(let w=p;w<_;w++)for(let S=y;S<x;S++){const D=T.length;let z=!1;if(e.getConvexTrianglePillar(w,S,!1),Kt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,u)),u&&z||(e.getConvexTrianglePillar(w,S,!0),Kt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,s,o,a,l,t,e,u)),u&&z))return!0;if(T.length-D>2)return}}boxHeightfield(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}convexHeightfield(t,e,n,i,s,o,a,l,c,h,u){const d=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=T_,m=A_,p=b_;Kt.pointToLocalFrame(i,o,n,p);let _=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,P=Math.ceil((p.y+g)/f)+1;if(y<0||P<0||_>d.length||x>d[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),P<0&&(P=0),_>=d.length&&(_=d.length-1),y>=d.length&&(y=d.length-1),P>=d[0].length&&(P=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const b=[];e.getRectMinMax(_,x,y,P,b);const E=b[0],T=b[1];if(!(p.z-g>T||p.z+g<E))for(let w=_;w<y;w++)for(let S=x;S<P;S++){let D=!1;if(e.getConvexTrianglePillar(w,S,!1),Kt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,u,m,null)),u&&D||(e.getConvexTrianglePillar(w,S,!0),Kt.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,v,s,o,a,l,null,null,u,m,null)),u&&D))return!0}}sphereParticle(t,e,n,i,s,o,a,l,c,h,u){const d=M_;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;const g=this.createContactEquation(l,a,e,t,c,h);d.normalize(),g.rj.copy(d),g.rj.scale(t.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,s,o,a,l,c,h,u){const d=__;d.set(0,0,1),a.quaternion.vmult(d,d);const f=x_;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(l,a,e,t,c,h);v.ni.copy(d),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=y_;d.scale(d.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,s,o,a,l,c,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,s,o,a,l,t,e,u)}convexParticle(t,e,n,i,s,o,a,l,c,h,u){let d=-1;const f=w_,g=E_;let v=null;const m=S_;if(m.copy(i),m.vsub(n,m),s.conjugate(yc),yc.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,s),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(s);for(let p=0,_=t.faces.length;p!==_;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];i.vsub(y[0],Mc);const P=-x.dot(Mc);if(v===null||Math.abs(P)<Math.abs(v)){if(u)return!0;v=P,d=p,f.copy(x)}}if(d!==-1){const p=this.createContactEquation(l,a,e,t,c,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,y=p.rj;_.vadd(i,_),_.vsub(l.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,s,o,a,l,c,h,u){return this.convexHeightfield(e,t,i,n,o,s,l,a,c,h,u)}particleCylinder(t,e,n,i,s,o,a,l,c,h,u){return this.convexParticle(e,t,i,n,o,s,l,a,c,h,u)}sphereTrimesh(t,e,n,i,s,o,a,l,c,h,u){const d=Iv,f=Nv,g=Uv,v=Fv,m=Ov,p=zv,_=Vv,y=Dv,x=Pv,P=Gv;Kt.pointToLocalFrame(i,o,n,m);const b=t.radius;_.lowerBound.set(m.x-b,m.y-b,m.z-b),_.upperBound.set(m.x+b,m.y+b,m.z+b),e.getTrianglesInAABB(_,P);const E=Lv,T=t.radius*t.radius;for(let I=0;I<P.length;I++)for(let F=0;F<3;F++)if(e.getVertex(e.indices[P[I]*3+F],E),E.vsub(m,x),x.lengthSquared()<=T){if(y.copy(E),Kt.pointToWorldFrame(i,o,y,E),E.vsub(n,x),u)return!0;let B=this.createContactEquation(a,l,t,e,c,h);B.ni.copy(x),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(E),B.rj.vsub(l.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let I=0;I<P.length;I++)for(let F=0;F<3;F++){e.getVertex(e.indices[P[I]*3+F],d),e.getVertex(e.indices[P[I]*3+(F+1)%3],f),f.vsub(d,g),m.vsub(f,p);const B=p.dot(g);m.vsub(d,p);let M=p.dot(g);if(M>0&&B<0&&(m.vsub(d,p),v.copy(g),v.normalize(),M=p.dot(v),v.scale(M,p),p.vadd(d,p),p.distanceTo(m)<t.radius)){if(u)return!0;const A=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,A.ni),A.ni.normalize(),A.ni.scale(t.radius,A.ri),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),Kt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,A.rj),Kt.vectorToWorldFrame(o,A.ni,A.ni),Kt.vectorToWorldFrame(o,A.ri,A.ri),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult)}}const w=Bv,S=kv,D=Hv,z=Rv;for(let I=0,F=P.length;I!==F;I++){e.getTriangleVertices(P[I],w,S,D),e.getNormal(P[I],z),m.vsub(w,p);let B=p.dot(z);if(z.scale(B,p),m.vsub(p,p),B=p.distanceTo(m),pe.pointInTriangle(p,w,S,D)&&B<t.radius){if(u)return!0;let M=this.createContactEquation(a,l,t,e,c,h);p.vsub(m,M.ni),M.ni.normalize(),M.ni.scale(t.radius,M.ri),M.ri.vadd(n,M.ri),M.ri.vsub(a.position,M.ri),Kt.pointToWorldFrame(i,o,p,p),p.vsub(l.position,M.rj),Kt.vectorToWorldFrame(o,M.ni,M.ni),Kt.vectorToWorldFrame(o,M.ri,M.ri),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}P.length=0}planeTrimesh(t,e,n,i,s,o,a,l,c,h,u){const d=new C,f=Tv;f.set(0,0,1),s.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,d);const v=new C;v.copy(d),Kt.pointToWorldFrame(i,o,v,d);const m=Av;if(d.vsub(n,m),f.dot(m)<=0){if(u)return!0;const _=this.createContactEquation(a,l,t,e,c,h);_.ni.copy(f);const y=Cv;f.scale(m.dot(f),y),d.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(d),_.rj.vsub(l.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const li=new C,zi=new C,Bi=new C,Sv=new C,wv=new C,Ev=new me,bv=new me,Tv=new C,Av=new C,Cv=new C,Rv=new C,Pv=new C;new C;const Lv=new C,Dv=new C,Iv=new C,Nv=new C,Uv=new C,Fv=new C,Ov=new C,zv=new C,Bv=new C,kv=new C,Hv=new C,Vv=new qe,Gv=[],lr=new C,xc=new C,Wv=new C,Xv=new C,qv=new C;function Yv(r,t,e){let n=null;const i=r.length;for(let s=0;s!==i;s++){const o=r[s],a=Wv;r[(s+1)%i].vsub(o,a);const l=Xv;a.cross(t,l);const c=qv;e.vsub(o,c);const h=l.dot(c);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const cr=new C,jv=new C,Zv=new C,$v=new C,Kv=[new C,new C,new C,new C,new C,new C],Jv=new C,Qv=new C,t_=new C,e_=new C,n_=new C,i_=new C,s_=new C,r_=new C,o_=new C,a_=new C,l_=new C,c_=new C,h_=new C,u_=new C;new C;new C;const d_=new C,f_=new C,p_=new C,m_=new C,g_=new C,v_=new C,__=new C,x_=new C,y_=new C,M_=new C,yc=new me,S_=new C;new C;const w_=new C,Mc=new C,E_=new C,b_=new C,T_=new C,A_=[0],C_=new C,R_=new C;class Sc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let s=0;for(;n>i[s];)s++;if(n!==i[s]){for(let o=i.length-1;o>=s;o--)i[o+1]=i[o];i[s]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,s=n.length,o=i.length;let a=0;for(let l=0;l<s;l++){let c=!1;const h=n[l];for(;h>i[a];)a++;c=h===i[a],c||wc(t,h)}a=0;for(let l=0;l<o;l++){let c=!1;const h=i[l];for(;h>n[a];)a++;c=n[a]===h,c||wc(e,h)}}}function wc(r,t){r.push((t&4294901760)>>16,t&65535)}const xo=(r,t)=>r<t?`${r}-${t}`:`${t}-${r}`;class P_{constructor(){this.data={keys:[]}}get(t,e){const n=xo(t,e);return this.data[n]}set(t,e,n){const i=xo(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=xo(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class L_ extends Mh{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new C,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new C,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new Og,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new mv,this.constraints=[],this.narrowphase=new Mv(this),this.collisionMatrix=new lc,this.collisionMatrixPrevious=new lc,this.bodyOverlapKeeper=new Sc,this.shapeOverlapKeeper=new Sc,this.contactmaterials=[],this.contactMaterialTable=new P_,this.defaultMaterial=new _i("default"),this.defaultContactMaterial=new Or(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof Lr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.ALL,n.from=t,n.to=e,n.callback=i,yo.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.ANY,n.from=t,n.to=e,n.result=i,yo.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=pe.CLOSEST,n.from=t,n.to=e,n.result=i,yo.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof _t&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let s=0;s!==n.length;s++)n[s].index=s;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let s=0;s<i.length;s++){const o=i[s];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ge.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ge.now();let s=0;for(;this.accumulator>=t&&s<n&&(this.internalStep(t),this.accumulator-=t,s++,!(ge.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const l=this.bodies[a];l.previousPosition.lerp(l.position,o,l.interpolatedPosition),l.previousQuaternion.slerp(l.quaternion,o,l.interpolatedQuaternion),l.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=F_,i=O_,s=this.bodies.length,o=this.bodies,a=this.solver,l=this.gravity,c=this.doProfiling,h=this.profile,u=_t.DYNAMIC;let d=-1/0;const f=this.constraints,g=U_;l.length();const v=l.x,m=l.y,p=l.z;let _=0;for(c&&(d=ge.now()),_=0;_!==s;_++){const I=o[_];if(I.type===u){const F=I.force,B=I.mass;F.x+=B*v,F.y+=B*m,F.z+=B*p}}for(let I=0,F=this.subsystems.length;I!==F;I++)this.subsystems[I].update();c&&(d=ge.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),c&&(h.broadphase=ge.now()-d);let y=f.length;for(_=0;_!==y;_++){const I=f[_];if(!I.collideConnected)for(let F=n.length-1;F>=0;F-=1)(I.bodyA===n[F]&&I.bodyB===i[F]||I.bodyB===n[F]&&I.bodyA===i[F])&&(n.splice(F,1),i.splice(F,1))}this.collisionMatrixTick(),c&&(d=ge.now());const x=N_,P=e.length;for(_=0;_!==P;_++)x.push(e[_]);e.length=0;const b=this.frictionEquations.length;for(_=0;_!==b;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),c&&(h.narrowphase=ge.now()-d),c&&(d=ge.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const E=e.length;for(let I=0;I!==E;I++){const F=e[I],B=F.bi,M=F.bj,N=F.si,A=F.sj;let O;if(B.material&&M.material?O=this.getContactMaterial(B.material,M.material)||this.defaultContactMaterial:O=this.defaultContactMaterial,O.friction,B.material&&M.material&&(B.material.friction>=0&&M.material.friction>=0&&B.material.friction*M.material.friction,B.material.restitution>=0&&M.material.restitution>=0&&(F.restitution=B.material.restitution*M.material.restitution)),a.addEquation(F),B.allowSleep&&B.type===_t.DYNAMIC&&B.sleepState===_t.SLEEPING&&M.sleepState===_t.AWAKE&&M.type!==_t.STATIC){const k=M.velocity.lengthSquared()+M.angularVelocity.lengthSquared(),G=M.sleepSpeedLimit**2;k>=G*2&&(B.wakeUpAfterNarrowphase=!0)}if(M.allowSleep&&M.type===_t.DYNAMIC&&M.sleepState===_t.SLEEPING&&B.sleepState===_t.AWAKE&&B.type!==_t.STATIC){const k=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),G=B.sleepSpeedLimit**2;k>=G*2&&(M.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,M,!0),this.collisionMatrixPrevious.get(B,M)||(ms.body=M,ms.contact=F,B.dispatchEvent(ms),ms.body=B,M.dispatchEvent(ms)),this.bodyOverlapKeeper.set(B.id,M.id),this.shapeOverlapKeeper.set(N.id,A.id)}for(this.emitContactEvents(),c&&(h.makeContactConstraints=ge.now()-d,d=ge.now()),_=0;_!==s;_++){const I=o[_];I.wakeUpAfterNarrowphase&&(I.wakeUp(),I.wakeUpAfterNarrowphase=!1)}for(y=f.length,_=0;_!==y;_++){const I=f[_];I.update();for(let F=0,B=I.equations.length;F!==B;F++){const M=I.equations[F];a.addEquation(M)}}a.solve(t,this),c&&(h.solve=ge.now()-d),a.removeAllEquations();const T=Math.pow;for(_=0;_!==s;_++){const I=o[_];if(I.type&u){const F=T(1-I.linearDamping,t),B=I.velocity;B.scale(F,B);const M=I.angularVelocity;if(M){const N=T(1-I.angularDamping,t);M.scale(N,M)}}}this.dispatchEvent(I_),c&&(d=ge.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(_=0;_!==s;_++)o[_].integrate(t,S,D);this.clearForces(),this.broadphase.dirty=!0,c&&(h.integrate=ge.now()-d),this.stepnumber+=1,this.dispatchEvent(D_);let z=!0;if(this.allowSleep)for(z=!1,_=0;_!==s;_++){const I=o[_];I.sleepTick(this.time),I.sleepState!==_t.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Pn,Ln),t){for(let s=0,o=Pn.length;s<o;s+=2)gs.bodyA=this.getBodyById(Pn[s]),gs.bodyB=this.getBodyById(Pn[s+1]),this.dispatchEvent(gs);gs.bodyA=gs.bodyB=null}if(e){for(let s=0,o=Ln.length;s<o;s+=2)vs.bodyA=this.getBodyById(Ln[s]),vs.bodyB=this.getBodyById(Ln[s+1]),this.dispatchEvent(vs);vs.bodyA=vs.bodyB=null}Pn.length=Ln.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Pn,Ln),n){for(let s=0,o=Pn.length;s<o;s+=2){const a=this.getShapeById(Pn[s]),l=this.getShapeById(Pn[s+1]);Dn.shapeA=a,Dn.shapeB=l,a&&(Dn.bodyA=a.body),l&&(Dn.bodyB=l.body),this.dispatchEvent(Dn)}Dn.bodyA=Dn.bodyB=Dn.shapeA=Dn.shapeB=null}if(i){for(let s=0,o=Ln.length;s<o;s+=2){const a=this.getShapeById(Ln[s]),l=this.getShapeById(Ln[s+1]);In.shapeA=a,In.shapeB=l,a&&(In.bodyA=a.body),l&&(In.bodyB=l.body),this.dispatchEvent(In)}In.bodyA=In.bodyB=In.shapeA=In.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new qe;const yo=new pe,ge=globalThis.performance||{};if(!ge.now){let r=Date.now();ge.timing&&ge.timing.navigationStart&&(r=ge.timing.navigationStart),ge.now=()=>Date.now()-r}new C;const D_={type:"postStep"},I_={type:"preStep"},ms={type:_t.COLLIDE_EVENT_NAME,body:null,contact:null},N_=[],U_=[],F_=[],O_=[],Pn=[],Ln=[],gs={type:"beginContact",bodyA:null,bodyB:null},vs={type:"endContact",bodyA:null,bodyB:null},Dn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},In={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},wr={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class rs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const z_=new Da(-1,1,1,-1,0,1);class B_ extends ze{constructor(){super(),this.setAttribute("position",new de([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new de([0,2,0,0,2,0],2))}}const k_=new B_;class Ha{constructor(t){this._mesh=new Yt(k_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,z_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class H_ extends rs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof we?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=$n.clone(t.uniforms),this.material=new we({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Ha(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ec extends rs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const i=t.getContext(),s=t.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class V_ extends rs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class G_{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new zt);this._width=n.width,this._height=n.height,e=new yn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:$e}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new H_(wr),this.copyPass.material.blending=Ee,this.clock=new hg}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ec!==void 0&&(o instanceof Ec?n=!0:o instanceof V_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new zt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class W_ extends rs{constructor(t,e,n=null,i=null,s=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(t,e,n){const i=t.autoClear;t.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(s=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),t.autoClear=i}}const hr={defines:{PERSPECTIVE_CAMERA:1,SAMPLES:16,NORMAL_VECTOR_TYPE:1,DEPTH_SWIZZLING:"x",SCREEN_SPACE_RADIUS:0,SCREEN_SPACE_RADIUS_SCALE:100,SCENE_CLIP_BOX:0},uniforms:{tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new zt},cameraNear:{value:null},cameraFar:{value:null},cameraProjectionMatrix:{value:new Jt},cameraProjectionMatrixInverse:{value:new Jt},cameraWorldMatrix:{value:new Jt},radius:{value:.25},distanceExponent:{value:1},thickness:{value:1},distanceFallOff:{value:1},scale:{value:1},sceneBoxMin:{value:new j(-1,-1,-1)},sceneBoxMax:{value:new j(1,1,1)}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		varying vec2 vUv;
		uniform highp sampler2D tNormal;
		uniform highp sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraProjectionMatrixInverse;		
		uniform mat4 cameraWorldMatrix;
		uniform float radius;
		uniform float distanceExponent;
		uniform float thickness;
		uniform float distanceFallOff;
		uniform float scale;
		#if SCENE_CLIP_BOX == 1
			uniform vec3 sceneBoxMin;
			uniform vec3 sceneBoxMax;
		#endif
		
		#include <common>
		#include <packing>

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(vec3(ao), 1.)
		#endif

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}

		float getDepth(const vec2 uv) {  
			return textureLod(tDepth, uv.xy, 0.0).DEPTH_SWIZZLING;
		}

		float fetchDepth(const ivec2 uv) {   
			return texelFetch(tDepth, uv.xy, 0).DEPTH_SWIZZLING;
		}

		float getViewZ(const in float depth) {
			#if PERSPECTIVE_CAMERA == 1
				return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
			#else
				return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ? ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz : -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ? ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz : -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
			#if NORMAL_VECTOR_TYPE == 2
				return normalize(textureLod(tNormal, uv, 0.).rgb);
			#elif NORMAL_VECTOR_TYPE == 1
				return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
			#else
				return computeNormalFromDepth(uv);
			#endif
		}

		vec3 getSceneUvAndDepth(vec3 sampleViewPos) {
			vec4 sampleClipPos = cameraProjectionMatrix * vec4(sampleViewPos, 1.);
			vec2 sampleUv = sampleClipPos.xy / sampleClipPos.w * 0.5 + 0.5;
			float sampleSceneDepth = getDepth(sampleUv);
			return vec3(sampleUv, sampleSceneDepth);
		}
		
		void main() {
			float depth = getDepth(vUv.xy);
			if (depth >= 1.0) {
				discard;
				return;
			}
			vec3 viewPos = getViewPosition(vUv, depth);
			vec3 viewNormal = getViewNormal(vUv);

			float radiusToUse = radius;
			float distanceFalloffToUse = thickness;
			#if SCREEN_SPACE_RADIUS == 1
				float radiusScale = getViewPosition(vec2(0.5 + float(SCREEN_SPACE_RADIUS_SCALE) / resolution.x, 0.0), depth).x;
				radiusToUse *= radiusScale;
				distanceFalloffToUse *= radiusScale;
			#endif

			#if SCENE_CLIP_BOX == 1
				vec3 worldPos = (cameraWorldMatrix * vec4(viewPos, 1.0)).xyz;
				float boxDistance = length(max(vec3(0.0), max(sceneBoxMin - worldPos, worldPos - sceneBoxMax)));
				if (boxDistance > radiusToUse) {
					discard;
					return;
				}
			#endif
			
			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
			vec3 randomVec = noiseTexel.xyz * 2.0 - 1.0;
			vec3 tangent = normalize(vec3(randomVec.xy, 0.));
			vec3 bitangent = vec3(-tangent.y, tangent.x, 0.);
			mat3 kernelMatrix = mat3(tangent, bitangent, vec3(0., 0., 1.));

			const int DIRECTIONS = SAMPLES < 30 ? 3 : 5;
			const int STEPS = (SAMPLES + DIRECTIONS - 1) / DIRECTIONS;
			float ao = 0.0;
			for (int i = 0; i < DIRECTIONS; ++i) {
				
				float angle = float(i) / float(DIRECTIONS) * PI;
				vec4 sampleDir = vec4(cos(angle), sin(angle), 0., 0.5 + 0.5 * noiseTexel.w); 
				sampleDir.xyz = normalize(kernelMatrix * sampleDir.xyz);

				vec3 viewDir = normalize(-viewPos.xyz);
				vec3 sliceBitangent = normalize(cross(sampleDir.xyz, viewDir));
				vec3 sliceTangent = cross(sliceBitangent, viewDir);
				vec3 normalInSlice = normalize(viewNormal - sliceBitangent * dot(viewNormal, sliceBitangent));
				
				vec3 tangentToNormalInSlice = cross(normalInSlice, sliceBitangent);
				vec2 cosHorizons = vec2(dot(viewDir, tangentToNormalInSlice), dot(viewDir, -tangentToNormalInSlice));
				
				for (int j = 0; j < STEPS; ++j) {
					vec3 sampleViewOffset = sampleDir.xyz * radiusToUse * sampleDir.w * pow(float(j + 1) / float(STEPS), distanceExponent);	

					vec3 sampleSceneUvDepth = getSceneUvAndDepth(viewPos + sampleViewOffset);
					vec3 sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					vec3 viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.x += max(0., (sampleCosHorizon - cosHorizons.x) * mix(1., 2. / float(j + 2), distanceFallOff));
					}		

					sampleSceneUvDepth = getSceneUvAndDepth(viewPos - sampleViewOffset);
					sampleSceneViewPos = getViewPosition(sampleSceneUvDepth.xy, sampleSceneUvDepth.z);
					viewDelta = sampleSceneViewPos - viewPos;
					if (abs(viewDelta.z) < thickness) {
						float sampleCosHorizon = dot(viewDir, normalize(viewDelta));
						cosHorizons.y += max(0., (sampleCosHorizon - cosHorizons.y) * mix(1., 2. / float(j + 2), distanceFallOff));
					}
				}

				vec2 sinHorizons = sqrt(1. - cosHorizons * cosHorizons);
				float nx = dot(normalInSlice, sliceTangent);
				float ny = dot(normalInSlice, viewDir);
				float nxb = 1. / 2. * (acos(cosHorizons.y) - acos(cosHorizons.x) + sinHorizons.x * cosHorizons.x - sinHorizons.y * cosHorizons.y);
				float nyb = 1. / 2. * (2. - cosHorizons.x * cosHorizons.x - cosHorizons.y * cosHorizons.y);
				float occlusion = nx * nxb + ny * nyb;
				ao += occlusion;
			}

			ao = clamp(ao / float(DIRECTIONS), 0., 1.);		
		#if SCENE_CLIP_BOX == 1
			ao = mix(ao, 1., smoothstep(0., radiusToUse, boxDistance));
		#endif
			ao = pow(ao, scale);

			gl_FragColor = FRAGMENT_OUTPUT;
		}`},ur={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform sampler2D tDepth;
		uniform float cameraNear;
		uniform float cameraFar;
		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 screenPosition ) {
			#if PERSPECTIVE_CAMERA == 1
				float fragCoordZ = texture2D( tDepth, screenPosition ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );
			#else
				return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		void main() {
			float depth = getLinearDepth( vUv );
			gl_FragColor = vec4( vec3( 1.0 - depth ), 1.0 );

		}`},Mo={uniforms:{tDiffuse:{value:null},intensity:{value:1}},vertexShader:`
		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`
		uniform float intensity;
		uniform sampler2D tDiffuse;
		varying vec2 vUv;

		void main() {
			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = vec4(mix(vec3(1.), texel.rgb, intensity), texel.a);
		}`};function X_(r=5){const t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=q_(t),n=e.length,i=new Uint8Array(n*4);for(let o=0;o<n;++o){const a=e[o],l=2*Math.PI*a/n,c=new j(Math.cos(l),Math.sin(l),0).normalize();i[o*4]=(c.x*.5+.5)*255,i[o*4+1]=(c.y*.5+.5)*255,i[o*4+2]=127,i[o*4+3]=255}const s=new Fr(i,t,t);return s.wrapS=kn,s.wrapT=kn,s.needsUpdate=!0,s}function q_(r){const t=Math.floor(r)%2===0?Math.floor(r)+1:Math.floor(r),e=t*t,n=Array(e).fill(0);let i=Math.floor(t/2),s=t-1;for(let o=1;o<=e;){if(i===-1&&s===t?(s=t-2,i=0):(s===t&&(s=0),i<0&&(i=t-1)),n[i*t+s]!==0){s-=2,i++;continue}else n[i*t+s]=o++;s++,i--}return n}const dr={defines:{SAMPLES:16,SAMPLE_VECTORS:Ph(16,2,1),NORMAL_VECTOR_TYPE:1,DEPTH_VALUE_SOURCE:0},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tDepth:{value:null},tNoise:{value:null},resolution:{value:new zt},cameraProjectionMatrixInverse:{value:new Jt},lumaPhi:{value:5},depthPhi:{value:5},normalPhi:{value:5},radius:{value:4},index:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {
			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
		}`,fragmentShader:`

		varying vec2 vUv;

		uniform sampler2D tDiffuse;
		uniform sampler2D tNormal;
		uniform sampler2D tDepth;
		uniform sampler2D tNoise;
		uniform vec2 resolution;
		uniform mat4 cameraProjectionMatrixInverse;
		uniform float lumaPhi;
		uniform float depthPhi;
		uniform float normalPhi;
		uniform float radius;
		uniform int index;
		
		#include <common>
		#include <packing>

		#ifndef SAMPLE_LUMINANCE
		#define SAMPLE_LUMINANCE dot(vec3(0.2125, 0.7154, 0.0721), a)
		#endif

		#ifndef FRAGMENT_OUTPUT
		#define FRAGMENT_OUTPUT vec4(denoised, 1.)
		#endif

		float getLuminance(const in vec3 a) {
			return SAMPLE_LUMINANCE;
		}

		const vec3 poissonDisk[SAMPLES] = SAMPLE_VECTORS;

		vec3 getViewPosition(const in vec2 screenPosition, const in float depth) {
			vec4 clipSpacePosition = vec4(vec3(screenPosition, depth) * 2.0 - 1.0, 1.0);
			vec4 viewSpacePosition = cameraProjectionMatrixInverse * clipSpacePosition;
			return viewSpacePosition.xyz / viewSpacePosition.w;
		}
		
		float getDepth(const vec2 uv) {
		#if DEPTH_VALUE_SOURCE == 1    
			return textureLod(tDepth, uv.xy, 0.0).a;
		#else
			return textureLod(tDepth, uv.xy, 0.0).r;
		#endif
		}

		float fetchDepth(const ivec2 uv) {
			#if DEPTH_VALUE_SOURCE == 1    
				return texelFetch(tDepth, uv.xy, 0).a;
			#else
				return texelFetch(tDepth, uv.xy, 0).r;
			#endif
		}

		vec3 computeNormalFromDepth(const vec2 uv) {
			vec2 size = vec2(textureSize(tDepth, 0));
			ivec2 p = ivec2(uv * size);
			float c0 = fetchDepth(p);
			float l2 = fetchDepth(p - ivec2(2, 0));
			float l1 = fetchDepth(p - ivec2(1, 0));
			float r1 = fetchDepth(p + ivec2(1, 0));
			float r2 = fetchDepth(p + ivec2(2, 0));
			float b2 = fetchDepth(p - ivec2(0, 2));
			float b1 = fetchDepth(p - ivec2(0, 1));
			float t1 = fetchDepth(p + ivec2(0, 1));
			float t2 = fetchDepth(p + ivec2(0, 2));
			float dl = abs((2.0 * l1 - l2) - c0);
			float dr = abs((2.0 * r1 - r2) - c0);
			float db = abs((2.0 * b1 - b2) - c0);
			float dt = abs((2.0 * t1 - t2) - c0);
			vec3 ce = getViewPosition(uv, c0).xyz;
			vec3 dpdx = (dl < dr) ?  ce - getViewPosition((uv - vec2(1.0 / size.x, 0.0)), l1).xyz
									: -ce + getViewPosition((uv + vec2(1.0 / size.x, 0.0)), r1).xyz;
			vec3 dpdy = (db < dt) ?  ce - getViewPosition((uv - vec2(0.0, 1.0 / size.y)), b1).xyz
									: -ce + getViewPosition((uv + vec2(0.0, 1.0 / size.y)), t1).xyz;
			return normalize(cross(dpdx, dpdy));
		}

		vec3 getViewNormal(const vec2 uv) {
		#if NORMAL_VECTOR_TYPE == 2
			return normalize(textureLod(tNormal, uv, 0.).rgb);
		#elif NORMAL_VECTOR_TYPE == 1
			return unpackRGBToNormal(textureLod(tNormal, uv, 0.).rgb);
		#else
			return computeNormalFromDepth(uv);
		#endif
		}

		void denoiseSample(in vec3 center, in vec3 viewNormal, in vec3 viewPos, in vec2 sampleUv, inout vec3 denoised, inout float totalWeight) {
			vec4 sampleTexel = textureLod(tDiffuse, sampleUv, 0.0);
			float sampleDepth = getDepth(sampleUv);
			vec3 sampleNormal = getViewNormal(sampleUv);
			vec3 neighborColor = sampleTexel.rgb;
			vec3 viewPosSample = getViewPosition(sampleUv, sampleDepth);
			
			float normalDiff = dot(viewNormal, sampleNormal);
			float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);
			float lumaDiff = abs(getLuminance(neighborColor) - getLuminance(center));
			float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);
			float depthDiff = abs(dot(viewPos - viewPosSample, viewNormal));
			float depthSimilarity = max(1. - depthDiff / depthPhi, 0.);
			float w = lumaSimilarity * depthSimilarity * normalSimilarity;
		
			denoised += w * neighborColor;
			totalWeight += w;
		}
		
		void main() {
			float depth = getDepth(vUv.xy);	
			vec3 viewNormal = getViewNormal(vUv);	
			if (depth == 1. || dot(viewNormal, viewNormal) == 0.) {
				discard;
				return;
			}
			vec4 texel = textureLod(tDiffuse, vUv, 0.0);
			vec3 center = texel.rgb;
			vec3 viewPos = getViewPosition(vUv, depth);

			vec2 noiseResolution = vec2(textureSize(tNoise, 0));
			vec2 noiseUv = vUv * resolution / noiseResolution;
			vec4 noiseTexel = textureLod(tNoise, noiseUv, 0.0);
      		vec2 noiseVec = vec2(sin(noiseTexel[index % 4] * 2. * PI), cos(noiseTexel[index % 4] * 2. * PI));
    		mat2 rotationMatrix = mat2(noiseVec.x, -noiseVec.y, noiseVec.x, noiseVec.y);
		
			float totalWeight = 1.0;
			vec3 denoised = texel.rgb;
			for (int i = 0; i < SAMPLES; i++) {
				vec3 sampleDir = poissonDisk[i];
				vec2 offset = rotationMatrix * (sampleDir.xy * (1. + sampleDir.z * (radius - 1.)) / resolution);
				vec2 sampleUv = vUv + offset;
				denoiseSample(center, viewNormal, viewPos, sampleUv, denoised, totalWeight);
			}
		
			if (totalWeight > 0.) { 
				denoised /= totalWeight;
			}
			gl_FragColor = FRAGMENT_OUTPUT;
		}`};function Ph(r,t,e){const n=Y_(r,t,e);let i="vec3[SAMPLES](";for(let s=0;s<r;s++){const o=n[s];i+=`vec3(${o.x}, ${o.y}, ${o.z})${s<r-1?",":")"}`}return i}function Y_(r,t,e){const n=[];for(let i=0;i<r;i++){const s=2*Math.PI*t*i/r,o=Math.pow(i/(r-1),e);n.push(new j(Math.cos(s),Math.sin(s),o))}return n}class j_{constructor(t=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let e=0;e<256;e++)this.p[e]=Math.floor(t.random()*256);this.perm=[];for(let e=0;e<512;e++)this.perm[e]=this.p[e&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(t,e,n){return t[0]*e+t[1]*n}dot3(t,e,n,i){return t[0]*e+t[1]*n+t[2]*i}dot4(t,e,n,i,s){return t[0]*e+t[1]*n+t[2]*i+t[3]*s}noise(t,e){let n,i,s;const o=.5*(Math.sqrt(3)-1),a=(t+e)*o,l=Math.floor(t+a),c=Math.floor(e+a),h=(3-Math.sqrt(3))/6,u=(l+c)*h,d=l-u,f=c-u,g=t-d,v=e-f;let m,p;g>v?(m=1,p=0):(m=0,p=1);const _=g-m+h,y=v-p+h,x=g-1+2*h,P=v-1+2*h,b=l&255,E=c&255,T=this.perm[b+this.perm[E]]%12,w=this.perm[b+m+this.perm[E+p]]%12,S=this.perm[b+1+this.perm[E+1]]%12;let D=.5-g*g-v*v;D<0?n=0:(D*=D,n=D*D*this.dot(this.grad3[T],g,v));let z=.5-_*_-y*y;z<0?i=0:(z*=z,i=z*z*this.dot(this.grad3[w],_,y));let I=.5-x*x-P*P;return I<0?s=0:(I*=I,s=I*I*this.dot(this.grad3[S],x,P)),70*(n+i+s)}noise3d(t,e,n){let i,s,o,a;const c=(t+e+n)*.3333333333333333,h=Math.floor(t+c),u=Math.floor(e+c),d=Math.floor(n+c),f=1/6,g=(h+u+d)*f,v=h-g,m=u-g,p=d-g,_=t-v,y=e-m,x=n-p;let P,b,E,T,w,S;_>=y?y>=x?(P=1,b=0,E=0,T=1,w=1,S=0):_>=x?(P=1,b=0,E=0,T=1,w=0,S=1):(P=0,b=0,E=1,T=1,w=0,S=1):y<x?(P=0,b=0,E=1,T=0,w=1,S=1):_<x?(P=0,b=1,E=0,T=0,w=1,S=1):(P=0,b=1,E=0,T=1,w=1,S=0);const D=_-P+f,z=y-b+f,I=x-E+f,F=_-T+2*f,B=y-w+2*f,M=x-S+2*f,N=_-1+3*f,A=y-1+3*f,O=x-1+3*f,k=h&255,G=u&255,H=d&255,tt=this.perm[k+this.perm[G+this.perm[H]]]%12,Y=this.perm[k+P+this.perm[G+b+this.perm[H+E]]]%12,$=this.perm[k+T+this.perm[G+w+this.perm[H+S]]]%12,at=this.perm[k+1+this.perm[G+1+this.perm[H+1]]]%12;let nt=.6-_*_-y*y-x*x;nt<0?i=0:(nt*=nt,i=nt*nt*this.dot3(this.grad3[tt],_,y,x));let ot=.6-D*D-z*z-I*I;ot<0?s=0:(ot*=ot,s=ot*ot*this.dot3(this.grad3[Y],D,z,I));let pt=.6-F*F-B*B-M*M;pt<0?o=0:(pt*=pt,o=pt*pt*this.dot3(this.grad3[$],F,B,M));let ft=.6-N*N-A*A-O*O;return ft<0?a=0:(ft*=ft,a=ft*ft*this.dot3(this.grad3[at],N,A,O)),32*(i+s+o+a)}noise4d(t,e,n,i){const s=this.grad4,o=this.simplex,a=this.perm,l=(Math.sqrt(5)-1)/4,c=(5-Math.sqrt(5))/20;let h,u,d,f,g;const v=(t+e+n+i)*l,m=Math.floor(t+v),p=Math.floor(e+v),_=Math.floor(n+v),y=Math.floor(i+v),x=(m+p+_+y)*c,P=m-x,b=p-x,E=_-x,T=y-x,w=t-P,S=e-b,D=n-E,z=i-T,I=w>S?32:0,F=w>D?16:0,B=S>D?8:0,M=w>z?4:0,N=S>z?2:0,A=D>z?1:0,O=I+F+B+M+N+A,k=o[O][0]>=3?1:0,G=o[O][1]>=3?1:0,H=o[O][2]>=3?1:0,tt=o[O][3]>=3?1:0,Y=o[O][0]>=2?1:0,$=o[O][1]>=2?1:0,at=o[O][2]>=2?1:0,nt=o[O][3]>=2?1:0,ot=o[O][0]>=1?1:0,pt=o[O][1]>=1?1:0,ft=o[O][2]>=1?1:0,jt=o[O][3]>=1?1:0,Ot=w-k+c,se=S-G+c,W=D-H+c,It=z-tt+c,xt=w-Y+2*c,Wt=S-$+2*c,Pt=D-at+2*c,ee=z-nt+2*c,Rt=w-ot+3*c,U=S-pt+3*c,R=D-ft+3*c,Z=z-jt+3*c,it=w-1+4*c,rt=S-1+4*c,et=D-1+4*c,Et=z-1+4*c,ut=m&255,mt=p&255,Gt=_&255,lt=y&255,Mt=a[ut+a[mt+a[Gt+a[lt]]]]%32,Dt=a[ut+k+a[mt+G+a[Gt+H+a[lt+tt]]]]%32,Nt=a[ut+Y+a[mt+$+a[Gt+at+a[lt+nt]]]]%32,St=a[ut+ot+a[mt+pt+a[Gt+ft+a[lt+jt]]]]%32,Xt=a[ut+1+a[mt+1+a[Gt+1+a[lt+1]]]]%32;let Ut=.6-w*w-S*S-D*D-z*z;Ut<0?h=0:(Ut*=Ut,h=Ut*Ut*this.dot4(s[Mt],w,S,D,z));let Zt=.6-Ot*Ot-se*se-W*W-It*It;Zt<0?u=0:(Zt*=Zt,u=Zt*Zt*this.dot4(s[Dt],Ot,se,W,It));let V=.6-xt*xt-Wt*Wt-Pt*Pt-ee*ee;V<0?d=0:(V*=V,d=V*V*this.dot4(s[Nt],xt,Wt,Pt,ee));let ht=.6-Rt*Rt-U*U-R*R-Z*Z;ht<0?f=0:(ht*=ht,f=ht*ht*this.dot4(s[St],Rt,U,R,Z));let Q=.6-it*it-rt*rt-et*et-Et*Et;return Q<0?g=0:(Q*=Q,g=Q*Q*this.dot4(s[Xt],it,rt,et,Et)),27*(h+u+d+f+g)}}class gn extends rs{constructor(t,e,n,i,s,o,a){super(),this.width=n!==void 0?n:512,this.height=i!==void 0?i:512,this.clear=!0,this.camera=e,this.scene=t,this.output=0,this._renderGBuffer=!0,this._visibilityCache=new Map,this.blendIntensity=1,this.pdRings=2,this.pdRadiusExponent=2,this.pdSamples=16,this.gtaoNoiseTexture=X_(),this.pdNoiseTexture=this.generateNoise(),this.gtaoRenderTarget=new yn(this.width,this.height,{type:$e}),this.pdRenderTarget=this.gtaoRenderTarget.clone(),this.gtaoMaterial=new we({defines:Object.assign({},hr.defines),uniforms:$n.clone(hr.uniforms),vertexShader:hr.vertexShader,fragmentShader:hr.fragmentShader,blending:Ee,depthTest:!1,depthWrite:!1}),this.gtaoMaterial.defines.PERSPECTIVE_CAMERA=this.camera.isPerspectiveCamera?1:0,this.gtaoMaterial.uniforms.tNoise.value=this.gtaoNoiseTexture,this.gtaoMaterial.uniforms.resolution.value.set(this.width,this.height),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.normalMaterial=new K0,this.normalMaterial.blending=Ee,this.pdMaterial=new we({defines:Object.assign({},dr.defines),uniforms:$n.clone(dr.uniforms),vertexShader:dr.vertexShader,fragmentShader:dr.fragmentShader,depthTest:!1,depthWrite:!1}),this.pdMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.pdMaterial.uniforms.tNoise.value=this.pdNoiseTexture,this.pdMaterial.uniforms.resolution.value.set(this.width,this.height),this.pdMaterial.uniforms.lumaPhi.value=10,this.pdMaterial.uniforms.depthPhi.value=2,this.pdMaterial.uniforms.normalPhi.value=3,this.pdMaterial.uniforms.radius.value=8,this.depthRenderMaterial=new we({defines:Object.assign({},ur.defines),uniforms:$n.clone(ur.uniforms),vertexShader:ur.vertexShader,fragmentShader:ur.fragmentShader,blending:Ee}),this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new we({uniforms:$n.clone(wr.uniforms),vertexShader:wr.vertexShader,fragmentShader:wr.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Lo,blendDst:xs,blendEquation:an,blendSrcAlpha:Po,blendDstAlpha:xs,blendEquationAlpha:an}),this.blendMaterial=new we({uniforms:$n.clone(Mo.uniforms),vertexShader:Mo.vertexShader,fragmentShader:Mo.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blending:kc,blendSrc:Lo,blendDst:xs,blendEquation:an,blendSrcAlpha:Po,blendDstAlpha:xs,blendEquationAlpha:an}),this.fsQuad=new Ha(null),this.originalClearColor=new Lt,this.setGBuffer(s?s.depthTexture:void 0,s?s.normalTexture:void 0),o!==void 0&&this.updateGtaoMaterial(o),a!==void 0&&this.updatePdMaterial(a)}dispose(){this.gtaoNoiseTexture.dispose(),this.pdNoiseTexture.dispose(),this.normalRenderTarget.dispose(),this.gtaoRenderTarget.dispose(),this.pdRenderTarget.dispose(),this.normalMaterial.dispose(),this.pdMaterial.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}get gtaoMap(){return this.pdRenderTarget.texture}setGBuffer(t,e){t!==void 0?(this.depthTexture=t,this.normalTexture=e,this._renderGBuffer=!1):(this.depthTexture=new Na,this.depthTexture.format=vi,this.depthTexture.type=gi,this.normalRenderTarget=new yn(this.width,this.height,{minFilter:Oe,magFilter:Oe,type:$e,depthTexture:this.depthTexture}),this.normalTexture=this.normalRenderTarget.texture,this._renderGBuffer=!0);const n=this.normalTexture?1:0,i=this.depthTexture===this.normalTexture?"w":"x";this.gtaoMaterial.defines.NORMAL_VECTOR_TYPE=n,this.gtaoMaterial.defines.DEPTH_SWIZZLING=i,this.gtaoMaterial.uniforms.tNormal.value=this.normalTexture,this.gtaoMaterial.uniforms.tDepth.value=this.depthTexture,this.pdMaterial.defines.NORMAL_VECTOR_TYPE=n,this.pdMaterial.defines.DEPTH_SWIZZLING=i,this.pdMaterial.uniforms.tNormal.value=this.normalTexture,this.pdMaterial.uniforms.tDepth.value=this.depthTexture,this.depthRenderMaterial.uniforms.tDepth.value=this.normalRenderTarget.depthTexture}setSceneClipBox(t){t?(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX!==1,this.gtaoMaterial.defines.SCENE_CLIP_BOX=1,this.gtaoMaterial.uniforms.sceneBoxMin.value.copy(t.min),this.gtaoMaterial.uniforms.sceneBoxMax.value.copy(t.max)):(this.gtaoMaterial.needsUpdate=this.gtaoMaterial.defines.SCENE_CLIP_BOX===0,this.gtaoMaterial.defines.SCENE_CLIP_BOX=0)}updateGtaoMaterial(t){t.radius!==void 0&&(this.gtaoMaterial.uniforms.radius.value=t.radius),t.distanceExponent!==void 0&&(this.gtaoMaterial.uniforms.distanceExponent.value=t.distanceExponent),t.thickness!==void 0&&(this.gtaoMaterial.uniforms.thickness.value=t.thickness),t.distanceFallOff!==void 0&&(this.gtaoMaterial.uniforms.distanceFallOff.value=t.distanceFallOff,this.gtaoMaterial.needsUpdate=!0),t.scale!==void 0&&(this.gtaoMaterial.uniforms.scale.value=t.scale),t.samples!==void 0&&t.samples!==this.gtaoMaterial.defines.SAMPLES&&(this.gtaoMaterial.defines.SAMPLES=t.samples,this.gtaoMaterial.needsUpdate=!0),t.screenSpaceRadius!==void 0&&(t.screenSpaceRadius?1:0)!==this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS&&(this.gtaoMaterial.defines.SCREEN_SPACE_RADIUS=t.screenSpaceRadius?1:0,this.gtaoMaterial.needsUpdate=!0)}updatePdMaterial(t){let e=!1;t.lumaPhi!==void 0&&(this.pdMaterial.uniforms.lumaPhi.value=t.lumaPhi),t.depthPhi!==void 0&&(this.pdMaterial.uniforms.depthPhi.value=t.depthPhi),t.normalPhi!==void 0&&(this.pdMaterial.uniforms.normalPhi.value=t.normalPhi),t.radius!==void 0&&t.radius!==this.radius&&(this.pdMaterial.uniforms.radius.value=t.radius),t.radiusExponent!==void 0&&t.radiusExponent!==this.pdRadiusExponent&&(this.pdRadiusExponent=t.radiusExponent,e=!0),t.rings!==void 0&&t.rings!==this.pdRings&&(this.pdRings=t.rings,e=!0),t.samples!==void 0&&t.samples!==this.pdSamples&&(this.pdSamples=t.samples,e=!0),e&&(this.pdMaterial.defines.SAMPLES=this.pdSamples,this.pdMaterial.defines.SAMPLE_VECTORS=Ph(this.pdSamples,this.pdRings,this.pdRadiusExponent),this.pdMaterial.needsUpdate=!0)}render(t,e,n){switch(this._renderGBuffer&&(this.overrideVisibility(),this.renderOverride(t,this.normalMaterial,this.normalRenderTarget,7829503,1),this.restoreVisibility()),this.gtaoMaterial.uniforms.cameraNear.value=this.camera.near,this.gtaoMaterial.uniforms.cameraFar.value=this.camera.far,this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.gtaoMaterial.uniforms.cameraWorldMatrix.value.copy(this.camera.matrixWorld),this.renderPass(t,this.gtaoMaterial,this.gtaoRenderTarget,16777215,1),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.renderPass(t,this.pdMaterial,this.pdRenderTarget,16777215,1),this.output){case gn.OUTPUT.Off:break;case gn.OUTPUT.Diffuse:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case gn.OUTPUT.AO:this.copyMaterial.uniforms.tDiffuse.value=this.gtaoRenderTarget.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case gn.OUTPUT.Denoise:this.copyMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case gn.OUTPUT.Depth:this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.renderPass(t,this.depthRenderMaterial,this.renderToScreen?null:e);break;case gn.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e);break;case gn.OUTPUT.Default:this.copyMaterial.uniforms.tDiffuse.value=n.texture,this.copyMaterial.blending=Ee,this.renderPass(t,this.copyMaterial,this.renderToScreen?null:e),this.blendMaterial.uniforms.intensity.value=this.blendIntensity,this.blendMaterial.uniforms.tDiffuse.value=this.pdRenderTarget.texture,this.renderPass(t,this.blendMaterial,this.renderToScreen?null:e);break;default:console.warn("THREE.GTAOPass: Unknown output type.")}}renderPass(t,e,n,i,s){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.fsQuad.material=e,this.fsQuad.render(t),t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}renderOverride(t,e,n,i,s){t.getClearColor(this.originalClearColor);const o=t.getClearAlpha(),a=t.autoClear;t.setRenderTarget(n),t.autoClear=!1,i=e.clearColor||i,s=e.clearAlpha||s,i!=null&&(t.setClearColor(i),t.setClearAlpha(s||0),t.clear()),this.scene.overrideMaterial=e,t.render(this.scene,this.camera),this.scene.overrideMaterial=null,t.autoClear=a,t.setClearColor(this.originalClearColor),t.setClearAlpha(o)}setSize(t,e){this.width=t,this.height=e,this.gtaoRenderTarget.setSize(t,e),this.normalRenderTarget.setSize(t,e),this.pdRenderTarget.setSize(t,e),this.gtaoMaterial.uniforms.resolution.value.set(t,e),this.gtaoMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.gtaoMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse),this.pdMaterial.uniforms.resolution.value.set(t,e),this.pdMaterial.uniforms.cameraProjectionMatrixInverse.value.copy(this.camera.projectionMatrixInverse)}overrideVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){e.set(n,n.visible),(n.isPoints||n.isLine)&&(n.visible=!1)})}restoreVisibility(){const t=this.scene,e=this._visibilityCache;t.traverse(function(n){const i=e.get(n);n.visible=i}),e.clear()}generateNoise(t=64){const e=new j_,n=t*t*4,i=new Uint8Array(n);for(let o=0;o<t;o++)for(let a=0;a<t;a++){const l=o,c=a;i[(o*t+a)*4]=(e.noise(l,c)*.5+.5)*255,i[(o*t+a)*4+1]=(e.noise(l+t,c)*.5+.5)*255,i[(o*t+a)*4+2]=(e.noise(l,c+t)*.5+.5)*255,i[(o*t+a)*4+3]=(e.noise(l+t,c+t)*.5+.5)*255}const s=new Fr(i,t,t,Ke,xn);return s.wrapS=kn,s.wrapT=kn,s.needsUpdate=!0,s}}gn.OUTPUT={Off:-1,Default:0,Diffuse:1,Depth:2,Normal:3,AO:4,Denoise:5};const Z_={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class $_ extends rs{constructor(){super();const t=Z_;this.uniforms=$n.clone(t.uniforms),this.material=new Z0({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Ha(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},qt.getTransfer(this._outputColorSpace)===ie&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===xa?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class K_ extends ig{constructor(t){super(t),this.type=$e}parse(t){const o=function(T,w){switch(T){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(w||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(w||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(w||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(w||""))}},u=function(T,w,S){w=w||1024;let z=T.pos,I=-1,F=0,B="",M=String.fromCharCode.apply(null,new Uint16Array(T.subarray(z,z+128)));for(;0>(I=M.indexOf(`
`))&&F<w&&z<T.byteLength;)B+=M,F+=M.length,z+=128,M+=String.fromCharCode.apply(null,new Uint16Array(T.subarray(z,z+128)));return-1<I?(T.pos+=F+I+1,B+M.slice(0,I)):!1},d=function(T){const w=/^#\?(\S+)/,S=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,F={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let B,M;for((T.pos>=T.byteLength||!(B=u(T)))&&o(1,"no header found"),(M=B.match(w))||o(3,"bad initial token"),F.valid|=1,F.programtype=M[1],F.string+=B+`
`;B=u(T),B!==!1;){if(F.string+=B+`
`,B.charAt(0)==="#"){F.comments+=B+`
`;continue}if((M=B.match(S))&&(F.gamma=parseFloat(M[1])),(M=B.match(D))&&(F.exposure=parseFloat(M[1])),(M=B.match(z))&&(F.valid|=2,F.format=M[1]),(M=B.match(I))&&(F.valid|=4,F.height=parseInt(M[1],10),F.width=parseInt(M[2],10)),F.valid&2&&F.valid&4)break}return F.valid&2||o(3,"missing format specifier"),F.valid&4||o(3,"missing image size specifier"),F},f=function(T,w,S){const D=w;if(D<8||D>32767||T[0]!==2||T[1]!==2||T[2]&128)return new Uint8Array(T);D!==(T[2]<<8|T[3])&&o(3,"wrong scanline width");const z=new Uint8Array(4*w*S);z.length||o(4,"unable to allocate buffer space");let I=0,F=0;const B=4*D,M=new Uint8Array(4),N=new Uint8Array(B);let A=S;for(;A>0&&F<T.byteLength;){F+4>T.byteLength&&o(1),M[0]=T[F++],M[1]=T[F++],M[2]=T[F++],M[3]=T[F++],(M[0]!=2||M[1]!=2||(M[2]<<8|M[3])!=D)&&o(3,"bad rgbe scanline format");let O=0,k;for(;O<B&&F<T.byteLength;){k=T[F++];const H=k>128;if(H&&(k-=128),(k===0||O+k>B)&&o(3,"bad scanline data"),H){const tt=T[F++];for(let Y=0;Y<k;Y++)N[O++]=tt}else N.set(T.subarray(F,F+k),O),O+=k,F+=k}const G=D;for(let H=0;H<G;H++){let tt=0;z[I]=N[H+tt],tt+=D,z[I+1]=N[H+tt],tt+=D,z[I+2]=N[H+tt],tt+=D,z[I+3]=N[H+tt],I+=4}A--}return z},g=function(T,w,S,D){const z=T[w+3],I=Math.pow(2,z-128)/255;S[D+0]=T[w+0]*I,S[D+1]=T[w+1]*I,S[D+2]=T[w+2]*I,S[D+3]=1},v=function(T,w,S,D){const z=T[w+3],I=Math.pow(2,z-128)/255;S[D+0]=Vs.toHalfFloat(Math.min(T[w+0]*I,65504)),S[D+1]=Vs.toHalfFloat(Math.min(T[w+1]*I,65504)),S[D+2]=Vs.toHalfFloat(Math.min(T[w+2]*I,65504)),S[D+3]=Vs.toHalfFloat(1)},m=new Uint8Array(t);m.pos=0;const p=d(m),_=p.width,y=p.height,x=f(m.subarray(m.pos),_,y);let P,b,E;switch(this.type){case Xe:E=x.length/4;const T=new Float32Array(E*4);for(let S=0;S<E;S++)g(x,S*4,T,S*4);P=T,b=Xe;break;case $e:E=x.length/4;const w=new Uint16Array(E*4);for(let S=0;S<E;S++)v(x,S*4,w,S*4);P=w,b=$e;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:_,height:y,data:P,header:p.string,gamma:p.gamma,exposure:p.exposure,type:b}}setDataType(t){return this.type=t,this}load(t,e,n,i){function s(o,a){switch(o.type){case Xe:case $e:o.colorSpace=xi,o.minFilter=Ue,o.magFilter=Ue,o.generateMipmaps=!1,o.flipY=!0;break}e&&e(o,a)}return super.load(t,s,n,i)}}const J_=.5*(Math.sqrt(3)-1),_s=(3-Math.sqrt(3))/6,bc=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],di=new Uint8Array(512),Gi=new Uint8Array(256);for(let r=0;r<256;r++)Gi[r]=r;let So=20260322;for(let r=255;r>0;r--){So=So*16807%2147483647;const t=So%(r+1),e=Gi[r];Gi[r]=Gi[t],Gi[t]=e}for(let r=0;r<512;r++)di[r]=Gi[r&255];function Tc(r,t){const e=(r+t)*J_,n=Math.floor(r+e),i=Math.floor(t+e),s=(n+i)*_s,o=r-(n-s),a=t-(i-s),l=o>a?1:0,c=o>a?0:1,h=o-l+_s,u=a-c+_s,d=o-1+2*_s,f=a-1+2*_s,g=n&255,v=i&255;let m=0;const p=[[o,a,di[g+di[v]]%8],[h,u,di[g+l+di[v+c]]%8],[d,f,di[g+1+di[v+1]]%8]];for(const[_,y,x]of p){let P=.5-_*_-y*y;P>0&&(P*=P,m+=P*P*(bc[x][0]*_+bc[x][1]*y))}return 70*m}function Q_(r){const t=Math.min(1,Math.max(0,r));return t*t*(3-2*t)}function tx({ground:r,deck:t,distToAbutment:e,approach:n,waterY:i=-1/0,wet:s=!1}){if(s)return Math.max(t,Number.isFinite(i)?i+1.15:t);const o=Math.max(8,n),a=Q_((e??o)/o);return r*(1-a)+t*a}function ex({bankTop:r,waterClear:t,overpass:e,abutmentTop:n}){if(e||!Number.isFinite(t))return(Number.isFinite(n)?n:Number.isFinite(r)?r:0)+4.5;const i=(Number.isFinite(r)?r:n)+.4;return Math.max(i,t)}function Va(r,t){let e=1/0,n=-1/0,i=0;const s=r.length||1;for(const c of r)e=Math.min(e,c),n=Math.max(n,c),i+=c;Number.isFinite(e)||(e=0,n=0,i=0);const o=i/s,a=Math.max(2.7,Math.min(t,3.4));return{eave:Math.max(o+t,n+a),min:e,max:n,mid:o}}const wo=76,_n=10,nx=3.15;class ga{constructor(t,e=0){this.view=new DataView(t),this.o=e}u8(){const t=this.view.getUint8(this.o);return this.o+=1,t}u16(){const t=this.view.getUint16(this.o,!0);return this.o+=2,t}i16(){const t=this.view.getInt16(this.o,!0);return this.o+=2,t}u32(){const t=this.view.getUint32(this.o,!0);return this.o+=4,t}f32(){const t=this.view.getFloat32(this.o,!0);return this.o+=4,t}f64(){const t=this.view.getFloat64(this.o,!0);return this.o+=8,t}}function Ac(r,t,e,n,i,s){const o=i-e,a=s-n,l=o*o+a*a||1,c=Math.max(0,Math.min(1,((r-e)*o+(t-n)*a)/l)),h=r-(e+o*c),u=t-(n+a*c);return{d:Math.hypot(h,u),t:c,x:e+o*c,z:n+a*c,dx:o,dz:a}}function ix(r,t,e){let n=!1;for(let i=0,s=e.length-2;i<e.length;i+=2){const o=e[i],a=e[i+1],l=e[s],c=e[s+1];a>t!=c>t&&r<(l-o)*(t-a)/(c-a||1e-9)+o&&(n=!n),s=i}return n}function sx(r,t){const e=new ga(r),n=String.fromCharCode(e.u8(),e.u8(),e.u8(),e.u8());if(n!=="SHX1")throw new Error(`bad world pack ${n}`);const i=e.u32();if(i!==1)throw new Error(`world pack version ${i}`);const s=e.f64(),o=e.f64(),a={minX:e.f32(),minZ:e.f32(),maxX:e.f32(),maxZ:e.f32()},l=e.f32(),c=e.u32(),h=e.u32(),u={w:c,h,minX:e.f32(),minZ:e.f32(),maxX:e.f32(),maxZ:e.f32(),base:e.f32()},d=e.u32();if(e.o!==wo)throw new Error(`header ended at ${e.o}`);u.stepX=(u.maxX-u.minX)/(u.w-1),u.stepZ=(u.maxZ-u.minZ)/(u.h-1),u.heights=new Float32Array(r,wo,c*h);const f=wo+c*h*4,g=new ga(r,f),v=[];for(let P=0;P<d;P++)v.push({cx:g.i16(),cz:g.i16(),offset:g.u32(),length:g.u32()});const m=new Map,p=[],_=[];let y=0;for(const P of v){const b=rx(r,P,l);m.set(`${P.cx},${P.cz}`,b),y+=b.buildings.length;for(const E of b.roads)E.cls<=4&&p.push(E),E.flags&1&&_.push(E)}const x={meta:t,originLat:s,originLon:o,bounds:a,chunkSize:l,dem:u,chunks:m,overviewRoads:p,bridges:_,decodedBuildings:y,pois:t.pois,spawn:t.spawn,carSpawns:t.carSpawns,counts:t.counts};return ox(x),cx(x),x}function rx(r,t,e){const n=new ga(r,t.offset),i=t.offset+t.length,s=t.cx*e,o=t.cz*e,a=(_,y)=>[s+_/100,o+y/100],l=[],c=n.u16();for(let _=0;_<c;_++){const y=n.u8(),x=n.u8(),P=n.u8(),b=n.u8(),E=new Float32Array(b*2);let T=1/0,w=1/0,S=-1/0,D=-1/0;for(let z=0;z<b;z++){const[I,F]=a(n.i16(),n.i16());E[z*2]=I,E[z*2+1]=F,T=Math.min(T,I),w=Math.min(w,F),S=Math.max(S,I),D=Math.max(D,F)}l.push({type:y,floors:x,flags:P,pts:E,minX:T,minZ:w,maxX:S,maxZ:D,height:Math.max(1,x)*nx})}const h=[],u=n.u16();for(let _=0;_<u;_++){const y=n.u8(),x=n.u8()/10,P=n.u8(),b=n.u8(),E=new Float32Array(b*2);for(let T=0;T<b;T++){const[w,S]=a(n.i16(),n.i16());E[T*2]=w,E[T*2+1]=S}h.push({cls:y,width:x,flags:P,pts:E,deckY:null})}const d=[],f=n.u16();for(let _=0;_<f;_++){const y=n.u8(),x=n.u8(),P=n.u16(),b=new Float32Array(P*2);for(let E=0;E<P;E++){const[T,w]=a(n.i16(),n.i16());b[E*2]=T,b[E*2+1]=w}d.push({kind:y,width:x,pts:b})}const g=[],v=n.u16();for(let _=0;_<v;_++){const[y,x]=a(n.i16(),n.i16());g.push({x:y,z:x,kind:n.u8()})}const m=[],p=n.u16();for(let _=0;_<p;_++){const[y,x]=a(n.i16(),n.i16());m.push({x:y,z:x})}if(n.o!==i)throw new Error(`chunk ${t.cx},${t.cz} decoded ${n.o-t.offset} of ${t.length}`);return{cx:t.cx,cz:t.cz,buildings:l,roads:h,waters:d,trees:g,lights:m}}function ox(r){const{dem:t}=r,e=Math.ceil((t.maxX-t.minX)/_n)+1,n=Math.ceil((t.maxZ-t.minZ)/_n)+1,i=new Uint8Array(e*n),s=(l,c,h)=>{const u=Math.floor((l-t.minX)/_n),d=Math.floor((c-t.minZ)/_n);if(u<0||d<0||u>=e||d>=n)return;const f=d*e+u;i[f]<h&&(i[f]=h)},o=(l,c,h)=>{c<l&&([l,c]=[c,l]);for(let u=l;u<=c;u+=_n*.8)s(u,h,2)};for(const l of r.chunks.values())for(const c of l.waters)c.kind===0&&c.pts.length>=6?ax(c.pts,o):lx(c.pts,Math.max(c.width||8,8),s);const a=i.slice();for(let l=0;l<2;l++){const c=a.slice();for(let h=1;h<n-1;h++)for(let u=1;u<e-1;u++){const d=h*e+u;a[d]!==2&&(a[d-1]===2||a[d+1]===2||a[d-e]===2||a[d+e]===2)&&(c[d]=Math.max(c[d],1))}a.set(c)}r.mask=a,r.maskCols=e,r.maskRows=n}function ax(r,t){let e=1/0,n=-1/0;for(let i=1;i<r.length;i+=2)e=Math.min(e,r[i]),n=Math.max(n,r[i]);for(let i=e;i<=n;i+=_n){const s=[];for(let o=0;o<r.length;o+=2){const a=r[o],l=r[o+1],c=(o+2)%r.length,h=r[c],u=r[c+1];if(l!==u&&(i>=l&&i<u||i>=u&&i<l)){const d=(i-l)/(u-l);s.push(a+d*(h-a))}}s.sort((o,a)=>o-a);for(let o=0;o+1<s.length;o+=2)t(s[o],s[o+1],i)}}function lx(r,t,e){const n=t*.5;for(let i=0;i+3<r.length;i+=2){const s=r[i],o=r[i+1],a=r[i+2],l=r[i+3],c=Math.hypot(a-s,l-o),h=Math.max(1,Math.ceil(c/8));for(let u=0;u<=h;u++){const d=u/h,f=s+(a-s)*d,g=o+(l-o)*d;for(let v=-n;v<=n;v+=_n)for(let m=-n;m<=n;m+=_n)m*m+v*v<=n*n&&e(f+m,g+v,2)}}}function cx(r){const{dem:t}=r,e=4,n=Math.ceil((t.maxX-t.minX)/e)+1,i=Math.ceil((t.maxZ-t.minZ)/e)+1,s=new Uint8Array(n*i),o=(a,l,c)=>{const h=Math.floor((a-t.minX)/e),u=Math.floor((l-t.minZ)/e);if(h<0||u<0||h>=n||u>=i)return;const d=u*n+h;s[d]<c&&(s[d]=c)};for(const a of r.chunks.values())for(const l of a.roads)Cc(l.pts,l.width*.5+1.2,(c,h)=>o(c,h,2)),Cc(l.pts,l.width*.5+14,(c,h)=>o(c,h,1));r.roadField=s,r.roadCols=n,r.roadRows=i,r.roadCell=e}function Cc(r,t,e){for(let i=0;i+3<r.length;i+=2){const s=r[i],o=r[i+1],a=r[i+2],l=r[i+3],c=Math.hypot(a-s,l-o),h=Math.max(1,Math.ceil(c/4)),u=Math.max(1,Math.ceil(t/4));for(let d=0;d<=h;d++){const f=d/h,g=s+(a-s)*f,v=o+(l-o)*f;for(let m=-u;m<=u;m++)for(let p=-u;p<=u;p++)(p*p+m*m)*4*4<=t*t&&e(g+p*4,v+m*4)}}}function hx(r){const t=r.bridges,e=t.map((h,u)=>u),n=h=>{for(;e[h]!==h;)e[h]=e[e[h]],h=e[h];return h},i=(h,u)=>{const d=n(h),f=n(u);d!==f&&(e[d]=f)},s=24,o=new Map,a=(h,u,d)=>{const f=`${Math.floor(h/s)},${Math.floor(u/s)}`;let g=o.get(f);g||(g=[],o.set(f,g)),g.push(d)};t.forEach((h,u)=>{a(h.pts[0],h.pts[1],u),a(h.pts[h.pts.length-2],h.pts[h.pts.length-1],u)});const l=new Set;for(const[h,u]of o){const[d,f]=h.split(",").map(Number),g=[];for(let v=-1;v<=1;v++)for(let m=-1;m<=1;m++){const p=o.get(`${d+m},${f+v}`);p&&g.push(...p)}for(let v=0;v<u.length;v++)for(let m=0;m<g.length;m++){const p=u[v],_=g[m];if(p>=_)continue;const y=`${p}:${_}`;if(l.has(y))continue;l.add(y);const x=t[p].pts,P=t[_].pts;[[x[0],x[1],P[0],P[1]],[x[0],x[1],P[P.length-2],P[P.length-1]],[x[x.length-2],x[x.length-1],P[0],P[1]],[x[x.length-2],x[x.length-1],P[P.length-2],P[P.length-1]]].some(([E,T,w,S])=>(E-w)**2+(T-S)**2<400)&&i(p,_)}}const c=new Map;t.forEach((h,u)=>{const d=n(u);let f=c.get(d);f||(f=[],c.set(d,f)),f.push(h)});for(const h of c.values()){const u=[];for(const x of h){const P=x.pts.length;u.push({x:x.pts[0],z:x.pts[1]}),u.push({x:x.pts[P-2],z:x.pts[P-1]})}const d=[];for(const x of u){let P=0;for(const b of u)b!==x&&(x.x-b.x)**2+(x.z-b.z)**2<144&&(P+=1);P===0&&d.push(x)}let f=-1/0,g=-1/0,v=-1/0,m=!1;for(const x of h)for(let P=0;P<x.pts.length;P+=2){const b=x.pts[P],E=x.pts[P+1],T=r.sampleDem(b,E);r.maskAt(b,E)===2?(m=!0,g=Math.max(g,T-.42+3.6)):f=Math.max(f,T)}for(const x of d)v=Math.max(v,r.sampleDem(x.x,x.z));let p=0;for(let x=0;x<d.length;x++)for(let P=x+1;P<d.length;P++)p=Math.max(p,Math.hypot(d[x].x-d[P].x,d[x].z-d[P].z));if(p===0)for(const x of h){const P=x.pts.length;p=Math.max(p,Math.hypot(x.pts[0]-x.pts[P-2],x.pts[1]-x.pts[P-1]))}const _=ex({bankTop:f,waterClear:g,overpass:!m,abutmentTop:Number.isFinite(v)?v:f}),y=Math.min(52,Math.max(14,p*.38||28));for(const x of h)x.deckY=_,x.abutments=d,x.approach=y}}async function ux(r){r?.(.08,"loading");const[e,n]=await Promise.all([fetch("./world-meta.json"),fetch("./world.pack")]);if(!e.ok||!n.ok)throw new Error("missing world data");r?.(.4,"reading");const i=await e.json(),s=await n.arrayBuffer();r?.(.7,"shaping");const o=sx(s,i);return dx(o),hx(o),r?.(.9,"placing"),o}function dx(r){r.sampleDem=(t,e)=>{const{dem:n}=r,i=(t-n.minX)/n.stepX,s=(e-n.minZ)/n.stepZ,o=Math.max(0,Math.min(n.w-1,Math.floor(i))),a=Math.max(0,Math.min(n.h-1,Math.floor(s))),l=Math.min(n.w-1,o+1),c=Math.min(n.h-1,a+1),h=Math.max(0,Math.min(1,i-o)),u=Math.max(0,Math.min(1,s-a)),d=n.heights,f=d[a*n.w+o],g=d[a*n.w+l],v=d[c*n.w+o],m=d[c*n.w+l];return f*(1-h)*(1-u)+g*h*(1-u)+v*(1-h)*u+m*h*u},r.maskAt=(t,e)=>{const n=Math.floor((t-r.dem.minX)/_n),i=Math.floor((e-r.dem.minZ)/_n);return n<0||i<0||n>=r.maskCols||i>=r.maskRows?0:r.mask[i*r.maskCols+n]},r.detail=(t,e)=>Tc(t*.011,e*.011)*.9+Tc(t*.045,e*.045)*.28,r.roadValue=(t,e)=>{if(!r.roadField)return 0;const n=Math.floor((t-r.dem.minX)/r.roadCell),i=Math.floor((e-r.dem.minZ)/r.roadCell);return n<0||i<0||n>=r.roadCols||i>=r.roadRows?0:r.roadField[i*r.roadCols+n]},r.roadEase=(t,e)=>r.roadValue(t,e)>=1?0:1,r.onCarriage=(t,e)=>r.roadValue(t,e)>=2,r.terrainY=(t,e)=>{const n=r.sampleDem(t,e),i=r.maskAt(t,e),s=r.roadEase(t,e);return i===2?n-2.55:i===1?n-.55+r.detail(t,e)*.15*s:n+r.detail(t,e)*s},r.waterY=(t,e)=>r.sampleDem(t,e)-.42,r.bridgeY=(t,e,n)=>{let i=1e9;const s=n.abutments||[];for(const o of s)i=Math.min(i,Math.hypot(t-o.x,e-o.z));return s.length||(i=n.approach||40),tx({ground:r.terrainY(t,e)+.14,deck:n.deckY,distToAbutment:i,approach:n.approach||36,waterY:r.waterY(t,e),wet:r.maskAt(t,e)===2})},r.bridgeDeckAt=(t,e)=>{let n=null,i=8;for(const s of r.bridges)if(s.deckY!=null)for(let o=0;o+3<s.pts.length;o+=2){const a=Ac(t,e,s.pts[o],s.pts[o+1],s.pts[o+2],s.pts[o+3]),l=s.width*.5+1.6;a.d<l&&a.d<i&&(i=a.d,n=r.bridgeY(a.x,a.z,s))}return n},r.surfaceAt=(t,e)=>{const n=r.bridgeDeckAt(t,e);if(n!=null)return n;if(r.maskAt(t,e)===2)return r.waterY(t,e);const i=r.terrainY(t,e);return r.onCarriage(t,e)?i+.14:i},r.chunkAt=(t,e)=>r.chunks.get(`${Math.floor(t/r.chunkSize)},${Math.floor(e/r.chunkSize)}`)||null,r.buildingsNear=(t,e,n)=>{const i=r.chunkSize,s=Math.floor((t-n)/i),o=Math.floor((t+n)/i),a=Math.floor((e-n)/i),l=Math.floor((e+n)/i),c=[];for(let h=a;h<=l;h++)for(let u=s;u<=o;u++){const d=r.chunks.get(`${u},${h}`);if(d)for(const f of d.buildings){if(f.maxX<t-n||f.minX>t+n||f.maxZ<e-n||f.minZ>e+n)continue;const g=(f.minX+f.maxX)*.5,v=(f.minZ+f.maxZ)*.5,m=g-t,p=v-e;c.push({b:f,d:m*m+p*p})}}return c.sort((h,u)=>h.d-u.d),c.slice(0,90).map(h=>h.b)},r.nearestRoad=(t,e,n=50)=>{let i=null,s=n;for(const o of r.overviewRoads){const a=o.pts;for(let l=0;l+3<a.length;l+=2){const c=Ac(t,e,a[l],a[l+1],a[l+2],a[l+3]);if(c.d<s){s=c.d;const h=Math.hypot(c.dx,c.dz)||1;i={x:c.x,z:c.z,dirX:c.dx/h,dirZ:c.dz/h,width:o.width}}}}return i},r.baseY=t=>{let e=1/0,n=1/0;for(let i=0;i<t.length;i+=2){const s=r.terrainY(t[i],t[i+1]);n=Math.min(n,s),r.maskAt(t[i],t[i+1])<2&&(e=Math.min(e,s))}return(Number.isFinite(e)?e:n)-.12},r.insideBounds=(t,e,n=25)=>t>r.dem.minX+n&&t<r.dem.maxX-n&&e>r.dem.minZ+n&&e<r.dem.maxZ-n}function fx(r,t,e){return r.colorSpace=e?Ie:Fn,r.wrapS=r.wrapT=t?kn:cn,r.anisotropy=8,r}function Rc(r,t=!0,e=!0){return new Promise((n,i)=>{new sg().load(r,s=>n(fx(s,t,e)),void 0,i)})}function px(){const r=document.createElement("canvas");r.width=4,r.height=64;const t=r.getContext("2d");t.clearRect(0,0,4,64),t.fillStyle="#e6c94a",t.fillRect(0,2,4,24);const e=new j0(r);return e.wrapS=cn,e.wrapT=kn,e.colorSpace=Ie,e.anisotropy=4,e}function Eo(r,t=null){return new ce({color:r,map:t,transparent:!!t,alphaTest:t?.4:0,roughness:.62,metalness:0,side:ve,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})}async function mx(){const t=(ot,pt=!0)=>Rc(`./textures/${ot}`,pt,!0),e=ot=>Rc(`./textures/${ot}`,!0,!1),[n,i,s,o,a,l,c,h,u,d,f,g,v,m,p,_,y,x,P,b,E,T,w,S,D,z,I]=await Promise.all([t("grass.png"),e("grass-normal.png"),e("grass-rough.png"),t("asphalt.png"),e("asphalt-normal.png"),e("asphalt-rough.png"),t("concrete.png"),e("concrete-normal.png"),e("concrete-rough.png"),t("roof.png"),e("roof-normal.png"),e("roof-rough.png"),t("brick.png"),e("brick-normal.png"),e("brick-ao.png"),t("brick-lights.png"),t("stone.png"),e("stone-normal.png"),e("stone-ao.png"),t("stone-lights.png"),t("glass.png"),e("glass-normal.png"),e("glass-ao.png"),t("glass-lights.png"),t("tree-maple.png",!1),t("tree-autumn.png",!1),t("tree-pine.png",!1)]),F=new ce({map:n,normalMap:i,roughnessMap:s,normalScale:new zt(1.1,1.1),vertexColors:!0,roughness:1,metalness:0,side:ve}),B=bo(v,m,p,_,.92,.02,1.15),M=bo(y,x,P,b,.86,.04,1),N=bo(E,T,w,S,.22,.62,.55);N.envMapIntensity=1.05;const A=new ce({map:d,normalMap:f,roughnessMap:g,normalScale:new zt(1,1),roughness:1,metalness:.04,side:ve}),O=new ce({map:o,normalMap:a,roughnessMap:l,normalScale:new zt(.8,.8),roughness:.92,metalness:.04,side:ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,envMapIntensity:.35}),k=new ce({map:c,normalMap:h,roughnessMap:u,normalScale:new zt(.7,.7),roughness:1,metalness:0,side:ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),G=ot=>new ce({map:ot,alphaTest:.35,side:ve,roughness:.84,metalness:0}),H=new ce({color:"#3a4148",roughness:.5,metalness:.4}),tt=new ce({color:"#fff4cf",emissive:"#ffd27a",emissiveIntensity:.35,roughness:.35}),Y=new ce({color:"#c5c0b6",roughness:.86,metalness:.02,side:ve}),$=new ce({color:"#b7b2a8",roughness:.9,metalness:0,side:ve}),at=new ce({color:"#2a241f",roughness:.62,metalness:.08}),nt=new we({transparent:!0,depthWrite:!0,side:ve,glslVersion:Tr,uniforms:{uTime:{value:0},uColor:{value:new Lt("#3f655c")},uDeep:{value:new Lt("#142824")},uSun:{value:new j(.3,.8,.2)}},vertexShader:`
      uniform float uTime;
      out float vFres;
      out vec3 vWorld;
      out vec3 vNormal;
      void main() {
        vec3 p = position;
        float w1 = sin(position.x * 0.23 + uTime * 0.7) * 0.05;
        float w2 = cos(position.z * 0.19 + uTime * 0.55) * 0.04;
        p.y += w1 + w2;
        vec4 world = modelMatrix * vec4(p, 1.0);
        vWorld = world.xyz;
        vec3 n = normalize(vec3(-cos(position.x * 0.23 + uTime * 0.7) * 0.012, 1.0, sin(position.z * 0.19 + uTime * 0.55) * 0.01));
        vNormal = normalize(mat3(modelMatrix) * n);
        vec4 mv = viewMatrix * world;
        vFres = pow(1.0 - abs(dot(normalize(-mv.xyz), normalize(normalMatrix * n))), 2.4);
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      precision highp float;
      uniform vec3 uColor;
      uniform vec3 uDeep;
      uniform vec3 uSun;
      in float vFres;
      in vec3 vWorld;
      in vec3 vNormal;
      out vec4 fragColor;
      void main() {
        float rip = sin(vWorld.x * 0.31 + vWorld.z * 0.17) * 0.5 + 0.5;
        vec3 col = mix(uDeep, uColor, 0.35 + rip * 0.25);
        float spec = pow(max(dot(normalize(vNormal), normalize(uSun)), 0.0), 90.0);
        col += vec3(0.78, 0.84, 0.8) * spec * 0.28;
        col = mix(col, vec3(0.72, 0.8, 0.78), vFres * 0.38);
        fragColor = vec4(col, 0.9);
      }
    `});return{terrain:F,brick:B,stone:M,glass:N,roof:A,road:O,sidewalk:k,lamp:H,lampHead:tt,water:nt,barrier:Y,concrete:$,door:at,markDash:Eo("#ffffff",px()),markSolid:Eo("#e6c94a"),markWhite:Eo("#f3f1ea"),trees:{maple:G(D),autumn:G(z),pine:G(I)},facades:[B,M,N]}}function bo(r,t,e,n,i,s,o){return new ce({map:r,normalMap:t,aoMap:e,aoMapIntensity:1.15,normalScale:new zt(o,o),emissiveMap:n,emissive:new Lt("#ffe0b0"),emissiveIntensity:.02,roughness:i,metalness:s,vertexColors:!0,side:ve,envMapIntensity:.55})}function Lh(r){return r.flags&1||r.type===2?"glass":r.type===1||r.type===3||r.type===4?"stone":"brick"}function gx(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var fr={exports:{}},Pc;function vx(){if(Pc)return fr.exports;Pc=1,fr.exports=r,fr.exports.default=r;function r(M,N,A){A=A||2;var O=N&&N.length,k=O?N[0]*A:M.length,G=t(M,0,k,A,!0),H=[];if(!G||G.next===G.prev)return H;var tt,Y,$,at,nt,ot,pt;if(O&&(G=l(M,N,G,A)),M.length>80*A){tt=$=M[0],Y=at=M[1];for(var ft=A;ft<k;ft+=A)nt=M[ft],ot=M[ft+1],nt<tt&&(tt=nt),ot<Y&&(Y=ot),nt>$&&($=nt),ot>at&&(at=ot);pt=Math.max($-tt,at-Y),pt=pt!==0?32767/pt:0}return n(G,H,A,tt,Y,pt,0),H}function t(M,N,A,O,k){var G,H;if(k===B(M,N,A,O)>0)for(G=N;G<A;G+=O)H=z(G,M[G],M[G+1],H);else for(G=A-O;G>=N;G-=O)H=z(G,M[G],M[G+1],H);return H&&x(H,H.next)&&(I(H),H=H.next),H}function e(M,N){if(!M)return M;N||(N=M);var A=M,O;do if(O=!1,!A.steiner&&(x(A,A.next)||y(A.prev,A,A.next)===0)){if(I(A),A=N=A.prev,A===A.next)break;O=!0}else A=A.next;while(O||A!==N);return N}function n(M,N,A,O,k,G,H){if(M){!H&&G&&f(M,O,k,G);for(var tt=M,Y,$;M.prev!==M.next;){if(Y=M.prev,$=M.next,G?s(M,O,k,G):i(M)){N.push(Y.i/A|0),N.push(M.i/A|0),N.push($.i/A|0),I(M),M=$.next,tt=$.next;continue}if(M=$,M===tt){H?H===1?(M=o(e(M),N,A),n(M,N,A,O,k,G,2)):H===2&&a(M,N,A,O,k,G):n(e(M),N,A,O,k,G,1);break}}}}function i(M){var N=M.prev,A=M,O=M.next;if(y(N,A,O)>=0)return!1;for(var k=N.x,G=A.x,H=O.x,tt=N.y,Y=A.y,$=O.y,at=k<G?k<H?k:H:G<H?G:H,nt=tt<Y?tt<$?tt:$:Y<$?Y:$,ot=k>G?k>H?k:H:G>H?G:H,pt=tt>Y?tt>$?tt:$:Y>$?Y:$,ft=O.next;ft!==N;){if(ft.x>=at&&ft.x<=ot&&ft.y>=nt&&ft.y<=pt&&p(k,tt,G,Y,H,$,ft.x,ft.y)&&y(ft.prev,ft,ft.next)>=0)return!1;ft=ft.next}return!0}function s(M,N,A,O){var k=M.prev,G=M,H=M.next;if(y(k,G,H)>=0)return!1;for(var tt=k.x,Y=G.x,$=H.x,at=k.y,nt=G.y,ot=H.y,pt=tt<Y?tt<$?tt:$:Y<$?Y:$,ft=at<nt?at<ot?at:ot:nt<ot?nt:ot,jt=tt>Y?tt>$?tt:$:Y>$?Y:$,Ot=at>nt?at>ot?at:ot:nt>ot?nt:ot,se=v(pt,ft,N,A,O),W=v(jt,Ot,N,A,O),It=M.prevZ,xt=M.nextZ;It&&It.z>=se&&xt&&xt.z<=W;){if(It.x>=pt&&It.x<=jt&&It.y>=ft&&It.y<=Ot&&It!==k&&It!==H&&p(tt,at,Y,nt,$,ot,It.x,It.y)&&y(It.prev,It,It.next)>=0||(It=It.prevZ,xt.x>=pt&&xt.x<=jt&&xt.y>=ft&&xt.y<=Ot&&xt!==k&&xt!==H&&p(tt,at,Y,nt,$,ot,xt.x,xt.y)&&y(xt.prev,xt,xt.next)>=0))return!1;xt=xt.nextZ}for(;It&&It.z>=se;){if(It.x>=pt&&It.x<=jt&&It.y>=ft&&It.y<=Ot&&It!==k&&It!==H&&p(tt,at,Y,nt,$,ot,It.x,It.y)&&y(It.prev,It,It.next)>=0)return!1;It=It.prevZ}for(;xt&&xt.z<=W;){if(xt.x>=pt&&xt.x<=jt&&xt.y>=ft&&xt.y<=Ot&&xt!==k&&xt!==H&&p(tt,at,Y,nt,$,ot,xt.x,xt.y)&&y(xt.prev,xt,xt.next)>=0)return!1;xt=xt.nextZ}return!0}function o(M,N,A){var O=M;do{var k=O.prev,G=O.next.next;!x(k,G)&&P(k,O,O.next,G)&&w(k,G)&&w(G,k)&&(N.push(k.i/A|0),N.push(O.i/A|0),N.push(G.i/A|0),I(O),I(O.next),O=M=G),O=O.next}while(O!==M);return e(O)}function a(M,N,A,O,k,G){var H=M;do{for(var tt=H.next.next;tt!==H.prev;){if(H.i!==tt.i&&_(H,tt)){var Y=D(H,tt);H=e(H,H.next),Y=e(Y,Y.next),n(H,N,A,O,k,G,0),n(Y,N,A,O,k,G,0);return}tt=tt.next}H=H.next}while(H!==M)}function l(M,N,A,O){var k=[],G,H,tt,Y,$;for(G=0,H=N.length;G<H;G++)tt=N[G]*O,Y=G<H-1?N[G+1]*O:M.length,$=t(M,tt,Y,O,!1),$===$.next&&($.steiner=!0),k.push(m($));for(k.sort(c),G=0;G<k.length;G++)A=h(k[G],A);return A}function c(M,N){return M.x-N.x}function h(M,N){var A=u(M,N);if(!A)return N;var O=D(A,M);return e(O,O.next),e(A,A.next)}function u(M,N){var A=N,O=M.x,k=M.y,G=-1/0,H;do{if(k<=A.y&&k>=A.next.y&&A.next.y!==A.y){var tt=A.x+(k-A.y)*(A.next.x-A.x)/(A.next.y-A.y);if(tt<=O&&tt>G&&(G=tt,H=A.x<A.next.x?A:A.next,tt===O))return H}A=A.next}while(A!==N);if(!H)return null;var Y=H,$=H.x,at=H.y,nt=1/0,ot;A=H;do O>=A.x&&A.x>=$&&O!==A.x&&p(k<at?O:G,k,$,at,k<at?G:O,k,A.x,A.y)&&(ot=Math.abs(k-A.y)/(O-A.x),w(A,M)&&(ot<nt||ot===nt&&(A.x>H.x||A.x===H.x&&d(H,A)))&&(H=A,nt=ot)),A=A.next;while(A!==Y);return H}function d(M,N){return y(M.prev,M,N.prev)<0&&y(N.next,M,M.next)<0}function f(M,N,A,O){var k=M;do k.z===0&&(k.z=v(k.x,k.y,N,A,O)),k.prevZ=k.prev,k.nextZ=k.next,k=k.next;while(k!==M);k.prevZ.nextZ=null,k.prevZ=null,g(k)}function g(M){var N,A,O,k,G,H,tt,Y,$=1;do{for(A=M,M=null,G=null,H=0;A;){for(H++,O=A,tt=0,N=0;N<$&&(tt++,O=O.nextZ,!!O);N++);for(Y=$;tt>0||Y>0&&O;)tt!==0&&(Y===0||!O||A.z<=O.z)?(k=A,A=A.nextZ,tt--):(k=O,O=O.nextZ,Y--),G?G.nextZ=k:M=k,k.prevZ=G,G=k;A=O}G.nextZ=null,$*=2}while(H>1);return M}function v(M,N,A,O,k){return M=(M-A)*k|0,N=(N-O)*k|0,M=(M|M<<8)&16711935,M=(M|M<<4)&252645135,M=(M|M<<2)&858993459,M=(M|M<<1)&1431655765,N=(N|N<<8)&16711935,N=(N|N<<4)&252645135,N=(N|N<<2)&858993459,N=(N|N<<1)&1431655765,M|N<<1}function m(M){var N=M,A=M;do(N.x<A.x||N.x===A.x&&N.y<A.y)&&(A=N),N=N.next;while(N!==M);return A}function p(M,N,A,O,k,G,H,tt){return(k-H)*(N-tt)>=(M-H)*(G-tt)&&(M-H)*(O-tt)>=(A-H)*(N-tt)&&(A-H)*(G-tt)>=(k-H)*(O-tt)}function _(M,N){return M.next.i!==N.i&&M.prev.i!==N.i&&!T(M,N)&&(w(M,N)&&w(N,M)&&S(M,N)&&(y(M.prev,M,N.prev)||y(M,N.prev,N))||x(M,N)&&y(M.prev,M,M.next)>0&&y(N.prev,N,N.next)>0)}function y(M,N,A){return(N.y-M.y)*(A.x-N.x)-(N.x-M.x)*(A.y-N.y)}function x(M,N){return M.x===N.x&&M.y===N.y}function P(M,N,A,O){var k=E(y(M,N,A)),G=E(y(M,N,O)),H=E(y(A,O,M)),tt=E(y(A,O,N));return!!(k!==G&&H!==tt||k===0&&b(M,A,N)||G===0&&b(M,O,N)||H===0&&b(A,M,O)||tt===0&&b(A,N,O))}function b(M,N,A){return N.x<=Math.max(M.x,A.x)&&N.x>=Math.min(M.x,A.x)&&N.y<=Math.max(M.y,A.y)&&N.y>=Math.min(M.y,A.y)}function E(M){return M>0?1:M<0?-1:0}function T(M,N){var A=M;do{if(A.i!==M.i&&A.next.i!==M.i&&A.i!==N.i&&A.next.i!==N.i&&P(A,A.next,M,N))return!0;A=A.next}while(A!==M);return!1}function w(M,N){return y(M.prev,M,M.next)<0?y(M,N,M.next)>=0&&y(M,M.prev,N)>=0:y(M,N,M.prev)<0||y(M,M.next,N)<0}function S(M,N){var A=M,O=!1,k=(M.x+N.x)/2,G=(M.y+N.y)/2;do A.y>G!=A.next.y>G&&A.next.y!==A.y&&k<(A.next.x-A.x)*(G-A.y)/(A.next.y-A.y)+A.x&&(O=!O),A=A.next;while(A!==M);return O}function D(M,N){var A=new F(M.i,M.x,M.y),O=new F(N.i,N.x,N.y),k=M.next,G=N.prev;return M.next=N,N.prev=M,A.next=k,k.prev=A,O.next=A,A.prev=O,G.next=O,O.prev=G,O}function z(M,N,A,O){var k=new F(M,N,A);return O?(k.next=O.next,k.prev=O,O.next.prev=k,O.next=k):(k.prev=k,k.next=k),k}function I(M){M.next.prev=M.prev,M.prev.next=M.next,M.prevZ&&(M.prevZ.nextZ=M.nextZ),M.nextZ&&(M.nextZ.prevZ=M.prevZ)}function F(M,N,A){this.i=M,this.x=N,this.y=A,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}r.deviation=function(M,N,A,O){var k=N&&N.length,G=k?N[0]*A:M.length,H=Math.abs(B(M,0,G,A));if(k)for(var tt=0,Y=N.length;tt<Y;tt++){var $=N[tt]*A,at=tt<Y-1?N[tt+1]*A:M.length;H-=Math.abs(B(M,$,at,A))}var nt=0;for(tt=0;tt<O.length;tt+=3){var ot=O[tt]*A,pt=O[tt+1]*A,ft=O[tt+2]*A;nt+=Math.abs((M[ot]-M[ft])*(M[pt+1]-M[ot+1])-(M[ot]-M[pt])*(M[ft+1]-M[ot+1]))}return H===0&&nt===0?0:Math.abs((nt-H)/H)};function B(M,N,A,O){for(var k=0,G=N,H=A-O;G<A;G+=O)k+=(M[H]-M[G])*(M[G+1]+M[H+1]),H=G;return k}return r.flatten=function(M){for(var N=M[0][0].length,A={vertices:[],holes:[],dimensions:N},O=0,k=0;k<M.length;k++){for(var G=0;G<M[k].length;G++)for(var H=0;H<N;H++)A.vertices.push(M[k][G][H]);k>0&&(O+=M[k-1].length,A.holes.push(O))}return A},fr.exports}var _x=vx();const Dh=gx(_x);function xx(r,t=!1){const e=r[0].index!==null,n=new Set(Object.keys(r[0].attributes)),i=new Set(Object.keys(r[0].morphAttributes)),s={},o={},a=r[0].morphTargetsRelative,l=new ze;let c=0;for(let h=0;h<r.length;++h){const u=r[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;s[f]===void 0&&(s[f]=[]),s[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0;const u=[];for(let d=0;d<r.length;++d){const f=r[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=r[d].attributes.position.count}l.setIndex(u)}for(const h in s){const u=Lc(s[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=Lc(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}return l}function Lc(r){let t,e,n,i=-1,s=0;for(let c=0;c<r.length;++c){const h=r[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=h.count*e}const o=new t(s),a=new _e(o,e,n);let l=0;for(let c=0;c<r.length;++c){const h=r[c];if(h.isInterleavedBufferAttribute){const u=l/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,l);l+=h.count*e}return i!==void 0&&(a.gpuType=i),a}new j(0,1,0);function ci(r,t,e,n,i){const s=new ze;return s.setAttribute("position",new de(r,3)),e&&(s.setAttribute("uv",new de(e,2)),s.setAttribute("uv2",s.attributes.uv)),n&&s.setAttribute("color",new de(n,3)),i?s.setAttribute("normal",new de(i,3)):s.computeVertexNormals(),s.setIndex(t),s}function yx(r,t){const e=r.length/2;if(e<2)return r;const n=[];for(let i=0;i<e-1;i++){const s=r[i*2],o=r[i*2+1],a=r[(i+1)*2],l=r[(i+1)*2+1],c=Math.hypot(a-s,l-o),h=Math.max(1,Math.ceil(c/t));for(let u=0;u<h;u++){const d=u/h;n.push(s+(a-s)*d,o+(l-o)*d)}}return n.push(r[(e-1)*2],r[(e-1)*2+1]),n}function Nn(r,t,e,n,i=12,s=0){const o=t.length/2;if(o<2||e<=.05)return;const a=r.pos.length/3;let l=0;for(let c=0;c<o;c++){const h=Math.max(0,c-1),u=Math.min(o-1,c+1);let d=t[u*2]-t[h*2],f=t[u*2+1]-t[h*2+1];const g=Math.hypot(d,f)||1;d/=g,f/=g;const v=e*.5,m=-f,p=d;c>0&&(l+=Math.hypot(t[c*2]-t[(c-1)*2],t[c*2+1]-t[(c-1)*2+1]));const _=t[c*2]+m*s,y=t[c*2+1]+p*s,x=n(t[c*2],t[c*2+1],c);r.pos.push(_+m*v,x,y+p*v,_-m*v,x,y-p*v),r.uv&&r.uv.push(0,l/i,1,l/i),r.col&&r.col.push(1,1,1,1,1,1)}for(let c=0;c<o-1;c++){const h=a+c*2;r.idx.push(h,h+1,h+2,h+1,h+3,h+2)}}function Mx(r,t,e,n,i){const o=r.pos.length/3;r.pos.push(t,e,n),r.uv&&r.uv.push(.5,.5);for(let a=0;a<8;a++){const l=a/8*Math.PI*2;r.pos.push(t+Math.cos(l)*i,e,n+Math.sin(l)*i),r.uv&&r.uv.push(.5+Math.cos(l)*.5,.5+Math.sin(l)*.5)}for(let a=0;a<8;a++)r.idx.push(o,o+1+a,o+1+(a+1)%8)}function Sx(r,t,e,n){const i=t.length/2;if(!(i<2))for(const s of[-1,1]){const o=r.pos.length/3;for(let a=0;a<i;a++){const l=Math.max(0,a-1),c=Math.min(i-1,a+1);let h=t[c*2]-t[l*2],u=t[c*2+1]-t[l*2+1];const d=Math.hypot(h,u)||1;h/=d,u/=d;const f=t[a*2]+-u*n*s,g=t[a*2+1]+h*n*s,v=e(t[a*2],t[a*2+1],a);r.pos.push(f,v+.08,g,f,v+.92,g),r.nrm.push(-u*s,0,h*s,-u*s,0,h*s)}for(let a=0;a<i-1;a++){const l=o+a*2;r.idx.push(l,l+1,l+3,l,l+3,l+2)}}}function wx(r,t,e,n,i){const a=Math.min(e,n),l=Math.max(e,n);if(l-a<.4)return;const c=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]];for(const[h,u,d]of c){const f=r.pos.length/3,g=[[t-.55,a,i-.55],[t+.55,a,i-.55],[t+.55,l,i-.55],[t-.55,l,i-.55],[t-.55,a,i+.55],[t+.55,a,i+.55],[t+.55,l,i+.55],[t-.55,l,i+.55]];let v;u===1?v=[3,2,6,7]:u===-1?v=[0,4,5,1]:h===1?v=[1,5,6,2]:h===-1?v=[4,0,3,7]:d===1?v=[5,4,7,6]:v=[0,1,2,3];for(const m of v)r.pos.push(g[m][0],g[m][1],g[m][2]),r.nrm.push(h,u,d);r.idx.push(f,f+1,f+2,f,f+2,f+3)}}function pr(r,t,e,n,i,s,o,a,l,c,h,u,d,f,g,v){const m=r.pos.length/3;r.pos.push(t,s,e,n,o,i,n,a,i,t,l,e);for(let p=0;p<4;p++)r.nrm.push(c,0,h);r.col&&r.col.push(v[0],v[1],v[2],v[0],v[1],v[2],v[0],v[1],v[2],v[0],v[1],v[2]),r.uv.push(u,f,d,f,d,g,u,g),r.idx.push(m,m+1,m+2,m,m+2,m+3)}function Ex(r,t){const e=Math.abs(Math.sin(r.minX*.021+r.minZ*.017));return t==="glass"?[.98+e*.02,.99,1]:t==="stone"?[.97+e*.03,.97+e*.02,.96]:[.98+e*.02,.96+e*.03,.94+e*.02]}function bx(r,t,e,n,i){const s=r.pts,o=s.length/2;if(o<3)return;const a=new Array(o);for(let p=0;p<o;p++)a[p]=t.terrainY(s[p*2],s[p*2+1]);const{eave:l}=Va(a,r.height),c=Array.from(s),h=Dh(c);if(!h.length)return;const u=n.pos.length/3;for(let p=0;p<o;p++)n.pos.push(s[p*2],l,s[p*2+1]),n.uv.push(s[p*2]/9,s[p*2+1]/9),n.nrm.push(0,1,0);for(let p=0;p<h.length;p++)n.idx.push(u+h[p]);const d=Lh(r),f=Ex(r,d),g=Math.abs(Math.sin(r.minX*.07+r.minZ*.05))*.7;let v=0,m=-1;for(let p=0;p<o;p++){const _=(p+1)%o,y=Math.hypot(s[_*2]-s[p*2],s[_*2+1]-s[p*2+1]);y>v&&(v=y,m=p)}for(let p=0;p<o;p++){const _=(p+1)%o,y=s[p*2],x=s[p*2+1],P=s[_*2],b=s[_*2+1],E=Math.hypot(P-y,b-x);if(E<.15)continue;const T=-(b-x)/E,w=(P-y)/E,S=a[p]-.45,D=a[_]-.45,z=l-Math.max(a[p],a[_]),I=r.type===1&&z>6.4?Math.max(a[p],a[_])+3.2:0,F=g+E/15;if(I&&I<l-2.2){const B=.24615384615384617;pr(e.glass,y,x,P,b,S,D,I,I,T,w,g,F,0,B,[.97,.98,1]),pr(e[d],y,x,P,b,I,I,l,l,T,w,g,F,B,z/13,f)}else pr(e[d],y,x,P,b,S,D,l,l,T,w,g,F,0,Math.max(.2,z/13),f);if(i&&p===m&&v>4.5&&v<46&&i.count<40&&r.height<26&&r.type!==2){const B=(P-y)/E,M=(b-x)/E,N=(y+P)*.5+T*.07,A=(x+b)*.5+w*.07,O=Math.min(a[p],a[_]);pr(i,N-B*.52,A-M*.52,N+B*.52,A+M*.52,O,O,O+2.2,O+2.2,T,w,0,1,0,1,[1,1,1]),i.count+=1}}}function Tx(r,t,e,n){const i=r.chunkSize,s=new is(i,i,n,n);s.rotateX(-Math.PI/2);const o=s.attributes.position,a=s.attributes.uv,l=new Float32Array(o.count*3),c=(t+.5)*i,h=(e+.5)*i;for(let u=0;u<o.count;u++){const d=o.getX(u)+c,f=o.getZ(u)+h,g=r.terrainY(d,f);o.setXYZ(u,d,g,f),a.setXY(u,d/8,f/8);const v=r.maskAt(d,f),m=(Math.sin(d*.013)*Math.cos(f*.011)+1)*.5;let p,_,y;v===2?(p=.15,_=.2,y=.18):v===1?(p=.62+m*.08,_=.56+m*.06,y=.4):(p=.94+m*.06,_=.96+m*.04,y=.9+m*.05),l[u*3]=p,l[u*3+1]=_,l[u*3+2]=y}return s.setAttribute("color",new _e(l,3)),s.computeVertexNormals(),s.setAttribute("uv2",s.attributes.uv),Ax(s,n,7),s}function Ax(r,t,e){const n=r.attributes.position,i=r.attributes.normal,s=r.attributes.uv,o=r.attributes.color,a=t+1,l=[];for(let _=0;_<a;_++)l.push(_);for(let _=1;_<a;_++)l.push(_*a+(a-1));for(let _=a-2;_>=0;_--)l.push((a-1)*a+_);for(let _=a-2;_>=1;_--)l.push(_*a);const c=n.count,h=l.length,u=new Float32Array((c+h)*3),d=new Float32Array((c+h)*3),f=new Float32Array((c+h)*2),g=new Float32Array((c+h)*3);u.set(n.array),d.set(i.array),f.set(s.array),g.set(o.array);for(let _=0;_<h;_++){const y=l[_],x=(c+_)*3;u[x]=n.getX(y),u[x+1]=n.getY(y)-e,u[x+2]=n.getZ(y),d[x]=0,d[x+1]=0,d[x+2]=1,f[(c+_)*2]=s.getX(y),f[(c+_)*2+1]=s.getY(y),g[x]=o.getX(y)*.75,g[x+1]=o.getY(y)*.75,g[x+2]=o.getZ(y)*.75}const v=r.index.array,m=new Uint32Array(v.length+l.length*6);m.set(v);let p=v.length;for(let _=0;_<l.length;_++){const y=(_+1)%l.length,x=l[_],P=l[y],b=c+_,E=c+y;m[p++]=x,m[p++]=P,m[p++]=E,m[p++]=x,m[p++]=E,m[p++]=b}r.setAttribute("position",new _e(u,3)),r.setAttribute("normal",new _e(d,3)),r.setAttribute("uv",new _e(f,2)),r.setAttribute("color",new _e(g,3)),r.setIndex(new _e(m,1))}function mn(r=!1){return{pos:[],uv:[],idx:[],nrm:[],col:r?[]:null}}class Cx{constructor(t,e,n){this.scene=t,this.world=e,this.mat=n,this.live=new Map,this.occluders=[],this.unitBox=new Ne(1,1,1);const i=new is(1,1);i.translate(0,.5,0);const s=i.clone();s.rotateY(Math.PI/2),this.treeGeo=xx([i,s]),this.poleGeo=new Qi(.06,.08,5.4,6),this.poleGeo.translate(0,2.7,0),this.headGeo=new Ne(.7,.1,.28),this.headGeo.translate(.28,5.35,0),this.dummy=new xe,this.lodMat={};for(const o of["brick","stone","glass"])this.lodMat[o]=n[o].clone(),this.lodMat[o].vertexColors=!1}modeFor(t){return t<500?"near":t<1050?"mid":"far"}ensure(t,e,n){const i=`${t},${e}`,s=this.live.get(i);if(s&&s.userData.mode===n)return s;s&&this.drop(i);const o=this.build(t,e,n);return this.live.set(i,o),this.scene.add(o),o}roadY(t){const{world:e}=this;return t.flags&1&&t.deckY!=null?(n,i)=>e.bridgeY(n,i,t):(n,i)=>e.terrainY(n,i)+.14}build(t,e,n){const{world:i,mat:s}=this,o=new Je;o.name=`chunk ${t},${e}`,o.userData.mode=n,o.userData.own=[];const a=n==="near"?32:n==="mid"?16:8,l=new Yt(Tx(i,t,e,a),s.terrain);l.receiveShadow=!0,l.userData.ownGeo=!0,o.add(l),o.userData.own.push(l);const c=i.chunks.get(`${t},${e}`),h=mn(),u=mn(),d=mn(),f=mn(),g=mn(),v=mn(),m={pos:[],idx:[],nrm:[]},p={pos:[],idx:[],nrm:[]},_={pos:[],idx:[]};if(c){for(const y of c.roads){if(n==="far"&&y.cls>2)continue;const x=this.roadY(y),P=y.flags&1&&y.deckY!=null,b=yx(y.pts,n==="near"?6:n==="mid"?12:24);if(Nn(h,b,y.width,x,Math.max(y.width,8)),n==="near"){const E=b.length/2,T=w=>Mx(h,b[w*2],x(b[w*2],b[w*2+1],w)+.01,b[w*2+1],Math.max(y.width*.62,4.5));T(0),E>1&&T(E-1)}if(n!=="far"&&y.cls<=6){const E=(T,w,S)=>x(T,w,S)-.08;Nn(u,b,y.width+2.6,E,4.5)}if(n==="near"&&y.cls<=5&&y.width>=5.6){const E=(T,w,S)=>x(T,w,S)+.03;if(y.cls<=2?(Nn(f,b,.12,E,40,.16),Nn(f,b,.12,E,40,-.16)):Nn(d,b,.14,E,8),y.cls<=4){const T=y.width*.5-.32;Nn(g,b,.1,E,20,T),Nn(g,b,.1,E,20,-T)}}if(P&&n!=="far"){const E=(T,w,S)=>x(T,w,S)-.65;Nn(v,b,y.width+2.4,E,8),Sx(m,b,x,y.width*.5+1.15),n==="near"&&this.addPiers(p,y,x)}}for(const y of c.waters)if(y.kind===1)Nn(_,y.pts,y.width,(x,P)=>i.waterY(x,P));else if(y.pts.length>=6){const x=Dh(Array.from(y.pts)),P=_.pos.length/3;for(let b=0;b<y.pts.length;b+=2){const E=y.pts[b],T=y.pts[b+1];_.pos.push(E,i.waterY(E,T),T)}for(let b=0;b<x.length;b++)_.idx.push(P+x[b])}n==="near"?this.addBuildings(o,c):n==="mid"&&this.addLod(o,c),n==="near"&&(this.addTrees(o,c),this.addLights(o,c))}if(this.addBucket(o,h,s.road,!0),this.addBucket(o,u,s.sidewalk,!0),this.addBucket(o,d,s.markDash,!0),this.addBucket(o,f,s.markSolid,!0),this.addBucket(o,g,s.markWhite,!0),this.addBucket(o,v,s.barrier,!0),m.pos.length){const y=new Yt(ci(m.pos,m.idx,null,null,m.nrm),s.barrier);y.userData.ownGeo=!0,y.castShadow=!0,y.receiveShadow=!0,o.add(y),o.userData.own.push(y)}if(p.pos.length){const y=new Yt(ci(p.pos,p.idx,null,null,p.nrm),s.concrete);y.userData.ownGeo=!0,y.castShadow=!0,y.receiveShadow=!0,o.add(y),o.userData.own.push(y)}if(_.pos.length){const y=new Yt(ci(_.pos,_.idx),s.water);y.userData.ownGeo=!0,y.renderOrder=2,o.add(y),o.userData.own.push(y)}return o.userData.mode=n,o}addPiers(t,e,n){const i=e.pts;let s=0,o=8;for(let a=1;a<i.length/2;a++){const l=i[(a-1)*2],c=i[(a-1)*2+1],h=i[a*2],u=i[a*2+1],d=Math.hypot(h-l,u-c);for(;s+d>=o;){const f=(o-s)/(d||1),g=l+(h-l)*f,v=c+(u-c)*f;if(o+=16,this.world.maskAt(g,v)!==2)continue;const m=n(g,v,a),p=this.world.terrainY(g,v);wx(t,g,p,m-.15,v)}s+=d}}addBucket(t,e,n,i){if(!e.pos||e.pos.length<9)return;const s=new Yt(ci(e.pos,e.idx,e.uv,e.col,e.nrm&&e.nrm.length?e.nrm:null),n);s.userData.ownGeo=i,s.receiveShadow=!0,t.add(s),t.userData.own.push(s)}addBuildings(t,e){const n={brick:mn(!0),stone:mn(!0),glass:mn(!0)},i={pos:[],uv:[],idx:[],nrm:[]},s=mn();s.count=0;for(const o of e.buildings)bx(o,this.world,n,i,s);for(const o of["brick","stone","glass"]){const a=n[o];if(!a.pos.length)continue;const l=new Yt(ci(a.pos,a.idx,a.uv,a.col,a.nrm),this.mat[o]);l.userData.ownGeo=!0,l.userData.occluder=!0,l.castShadow=!0,l.receiveShadow=!0,t.add(l),t.userData.own.push(l)}if(i.pos.length){const o=new Yt(ci(i.pos,i.idx,i.uv,null,i.nrm),this.mat.roof);o.userData.ownGeo=!0,o.userData.occluder=!0,o.castShadow=!0,o.receiveShadow=!0,t.add(o),t.userData.own.push(o)}if(s.pos.length){const o=new Yt(ci(s.pos,s.idx,s.uv,null,s.nrm),this.mat.door);o.userData.ownGeo=!0,o.castShadow=!0,o.receiveShadow=!0,t.add(o),t.userData.own.push(o)}}addLod(t,e){const n={brick:[],stone:[],glass:[]};for(const i of e.buildings)n[Lh(i)].push(i);for(const i of["brick","stone","glass"]){const s=n[i];if(!s.length)continue;const o=new nr(this.unitBox,this.lodMat[i],s.length);o.userData.occluder=!0,o.castShadow=!1,o.receiveShadow=!0;for(let a=0;a<s.length;a++){const l=s[a],c=[];for(let v=0;v<l.pts.length;v+=2)c.push(this.world.terrainY(l.pts[v],l.pts[v+1]));const{eave:h,min:u}=Va(c,l.height),d=Math.max(2.7,h-u),f=Math.max(1.5,l.maxX-l.minX),g=Math.max(1.5,l.maxZ-l.minZ);this.dummy.position.set((l.minX+l.maxX)/2,u+d/2,(l.minZ+l.maxZ)/2),this.dummy.scale.set(f,d,g),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),o.setMatrixAt(a,this.dummy.matrix)}o.instanceMatrix.needsUpdate=!0,t.add(o),t.userData.own.push(o)}}addTrees(t,e){const n=e.trees.filter(s=>{if(this.world.maskAt(s.x,s.z)===2||this.world.onCarriage(s.x,s.z))return!1;for(const o of e.buildings)if(!(s.x<o.minX-.4||s.x>o.maxX+.4||s.z<o.minZ-.4||s.z>o.maxZ+.4)&&ix(s.x,s.z,o.pts))return!1;return!0}).slice(0,90);if(!n.length)return;const i=[[0,this.mat.trees.pine,7.4,16],[1,this.mat.trees.maple,11,13],[2,this.mat.trees.autumn,10.5,13]];for(const[s,o,a,l]of i){const c=n.filter(u=>(u.kind===0?0:u.kind===2?2:1)===s);if(!c.length)continue;const h=new nr(this.treeGeo,o,c.length);h.castShadow=!1,h.receiveShadow=!0,c.forEach((u,d)=>{const f=this.world.terrainY(u.x,u.z),g=.82+Math.abs(Math.sin(u.x*.17+u.z*.11))*.36;this.dummy.position.set(u.x,f,u.z),this.dummy.scale.set(a*g,l*g,a*g),this.dummy.rotation.set(0,u.x*.37+u.z*.21,0),this.dummy.updateMatrix(),h.setMatrixAt(d,this.dummy.matrix)}),h.instanceMatrix.needsUpdate=!0,h.userData.ownGeo=!1,t.add(h),t.userData.own.push(h)}}addLights(t,e){const n=e.lights.filter(o=>!(this.world.maskAt(o.x,o.z)===2&&this.world.bridgeDeckAt(o.x,o.z)==null)).slice(0,80);if(!n.length)return;const i=new nr(this.poleGeo,this.mat.lamp,n.length),s=new nr(this.headGeo,this.mat.lampHead,n.length);i.castShadow=!1,s.castShadow=!1,n.forEach((o,a)=>{const l=this.world.surfaceAt(o.x,o.z);let c=0,h=6400;for(const u of e.roads){const d=u.pts;for(let f=0;f<d.length;f+=4){const g=d[f]-o.x,v=d[f+1]-o.z,m=g*g+v*v;m<h&&(h=m,c=Math.atan2(-v,g))}}this.dummy.position.set(o.x,l,o.z),this.dummy.scale.set(1,1,1),this.dummy.rotation.set(0,c,0),this.dummy.updateMatrix(),i.setMatrixAt(a,this.dummy.matrix),s.setMatrixAt(a,this.dummy.matrix)}),i.instanceMatrix.needsUpdate=!0,s.instanceMatrix.needsUpdate=!0,t.add(i,s),t.userData.own.push(i,s)}drop(t){const e=this.live.get(t);e&&(this.scene.remove(e),e.traverse(n=>{n.isInstancedMesh&&n.dispose(),n.geometry&&n.userData.ownGeo&&n.geometry.dispose()}),this.live.delete(t))}refreshOccluders(){const t=[];for(const e of this.live.values())e.userData.mode!=="far"&&e.traverse(n=>{n.userData&&n.userData.occluder&&t.push(n)});this.occluders=t}prime(t,e){const n=this.world.chunkSize,i=Math.floor(t/n),s=Math.floor(e/n);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){const l=Math.hypot(a,o)*n;this.ensure(i+a,s+o,this.modeFor(l))}this.refreshOccluders()}update(t,e){const n=this.world.chunkSize,i=Math.floor(t/n),s=Math.floor(e/n),o=new Map,a=7;for(let c=-a;c<=a;c++)for(let h=-a;h<=a;h++){const u=Math.hypot((h+.15)*n,(c+.15)*n);u>1680||o.set(`${i+h},${s+c}`,{cx:i+h,cz:s+c,mode:this.modeFor(u)})}for(const c of this.live.keys())o.has(c)||this.drop(c);let l=2;for(const[c,h]of o){const u=this.live.get(c);if(!(u&&u.userData.mode===h.mode)){if(l--<=0)break;this.ensure(h.cx,h.cz,h.mode)}}return this.refreshOccluders(),{loaded:this.live.size,wanted:o.size}}}class Rx{constructor(t){this.dom=t,this.keys=new Set,this.edges=new Set,this.lookX=0,this.lookY=0,this.mouseIdle=5,this.locked=!1,this.forward=0,this.strafe=0,this.sprint=!1,this.crouch=!1,window.addEventListener("keydown",e=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),e.code==="F11"&&e.preventDefault(),this.keys.has(e.code)||this.edges.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousemove",e=>{!this.locked&&!e.buttons||(this.lookX+=e.movementX,this.lookY+=e.movementY,this.mouseIdle=0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}requestLock(){document.pointerLockElement!==this.dom&&this.dom.requestPointerLock()}consume(t){const e=this.edges.has(t);return this.edges.delete(t),e}poll(t){const e=n=>this.keys.has(n);this.forward=(e("KeyW")||e("ArrowUp")?1:0)-(e("KeyS")||e("ArrowDown")?1:0),this.strafe=(e("KeyD")||e("ArrowRight")?1:0)-(e("KeyA")||e("ArrowLeft")?1:0),this.sprint=e("ShiftLeft")||e("ShiftRight"),this.crouch=e("KeyC"),this.mouseIdle+=t}endFrame(){this.lookX=0,this.lookY=0}}const Dc=new j(0,1,0),Dr=1,Er=2,ji=4;function Ic(r,t,e){let n=t-r;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return r+n*Math.min(1,e)}class Px{constructor(t,e,n){this.camera=t,this.world=e,this.physics=n,this.mesh=Lx(),this.radius=.36,this.half=.6,this.orbitYaw=.55,this.pitch=-.28,this.distance=6.4,this.shoulder=.72,this.firstPerson=!1,this.grounded=!1,this.eye=1.62,this.selfTestMode=!1,this.onFoot=!0,this._colliders=new Map,this._syncAt=0,this._tmp=new j,this._fwd=new j,this._right=new j,this._look=new j,this._wish=new j,this._target=new j,this._cam=new j;const i=new fv(this.radius,this.radius,this.half*2,8);this.body=new _t({mass:70,fixedRotation:!0,linearDamping:0,angularDamping:1,material:new _i("player"),collisionFilterGroup:Dr,collisionFilterMask:ji|Er,allowSleep:!1}),this.body.addShape(i),n.addBody(this.body),this.buildingMat=new _i("building")}get active(){return this.onFoot}place(t,e){const n=this.world.surfaceAt(t,e)+this.half+.08;this.body.position.set(t,n,e),this.body.velocity.set(0,0,0),this.mesh.position.set(t,n,e),this.syncBuildings(!0)}setOnFoot(t){this.onFoot=t,this.mesh.visible=t&&!this.firstPerson,t?(this.body.collisionFilterMask=ji|Er,this.body.type=_t.DYNAMIC,this.body.mass=70,this.body.updateMassProperties(),this.body.wakeUp()):(this.body.collisionFilterMask=0,this.body.velocity.set(0,0,0),this.body.type=_t.KINEMATIC)}placeCamera(t){const e=this.firstPerson?.12:this.distance,n=this.firstPerson?0:this.shoulder,i=this.pitch,s=Math.cos(i),o=Math.sin(i),a=-Math.sin(this.orbitYaw),l=-Math.cos(this.orbitYaw);this._look.set(a*s,o,l*s),this._look.lengthSq()<1e-6&&this._look.set(0,0,-1),this._right.set(-l,0,a),this._cam.copy(t).addScaledVector(this._look,-e).addScaledVector(this._right,n),this.camera.position.copy(this._cam),this.camera.up.copy(Dc),this.camera.lookAt(t)}cameraBasis(){return this.camera.getWorldDirection(this._fwd),this._fwd.y=0,this._fwd.lengthSq()<1e-8?this._fwd.set(0,0,-1):this._fwd.normalize(),this._right.crossVectors(this._fwd,Dc),{forward:this._fwd,right:this._right}}prePhysics(t,e){if(!this.active)return;this.selfTestMode||(this.orbitYaw-=e.lookX*.0022,this.pitch=Math.max(-.85,Math.min(.7,this.pitch-e.lookY*.0018)));const n=this.body.position.y-this.half,i=this.firstPerson?this.eye-(e.crouch?.45:0):1.28;this._target.set(this.body.position.x,n+i,this.body.position.z),this.placeCamera(this._target);const s=this.cameraBasis();this._wish.set(0,0,0),(e.forward||e.strafe)&&(this._wish.addScaledVector(s.forward,e.forward),this._wish.addScaledVector(s.right,e.strafe));const o=this._wish.lengthSq()>1e-4;o&&this._wish.normalize();const a=this.world.maskAt(this.body.position.x,this.body.position.z)===2&&this.world.bridgeDeckAt(this.body.position.x,this.body.position.z)==null;let l=e.crouch?1.7:e.sprint?7.6:4.25;a&&(l*=.45),o?(this.body.velocity.x=this._wish.x*l,this.body.velocity.z=this._wish.z*l,this.firstPerson||(this.mesh.rotation.y=Math.atan2(-this._wish.x,-this._wish.z))):(this.body.velocity.x=0,this.body.velocity.z=0),this.firstPerson?this.mesh.rotation.y=this.orbitYaw:!this.selfTestMode&&e.mouseIdle>1.15&&o&&(this.orbitYaw=Ic(this.orbitYaw,this.mesh.rotation.y,t*1.6)),this.grounded&&e.pendingJump&&(this.body.velocity.y=e.crouch?4.4:6.5,this.grounded=!1,e.pendingJump=!1),this.syncBuildings(!1)}postPhysics(){if(!this.active){this.mesh.visible=!1;return}const t=this.body.position.x,e=this.body.position.z;if(!this.world.insideBounds(t,e,20)){const l=this.world.dem;this.body.position.x=Math.min(l.maxX-21,Math.max(l.minX+21,t)),this.body.position.z=Math.min(l.maxZ-21,Math.max(l.minZ+21,e)),this.body.velocity.x=0,this.body.velocity.z=0}const n=this.world.surfaceAt(this.body.position.x,this.body.position.z),s=this.body.position.y-this.half-n;this.body.velocity.y<=.4&&s<.35&&s>-2.2?(this.body.position.y=n+this.half,this.body.velocity.y=0,this.grounded=!0):s>.45&&(this.grounded=!1),this.mesh.position.set(this.body.position.x,this.body.position.y-this.half,this.body.position.z),this.mesh.visible=!this.firstPerson;const o=this.body.position.y-this.half,a=this.firstPerson?this.eye:1.28;this._target.set(this.body.position.x,o+a,this.body.position.z),this.placeCamera(this._target),this.resolveCamera(this._target)}resolveCamera(t){if(this.firstPerson)return;const e=this._cam.copy(this.camera.position).sub(t),n=e.length();if(n<.2)return;e.multiplyScalar(1/n),this._ray=this._ray||new ug,this._ray.set(t,e),this._ray.far=n,this._ray.camera=this.camera;const i=this._ray.intersectObjects(this.occluders||[],!1);if(i.length&&i[0].distance<n-.25){const s=Math.max(.45,i[0].distance-.35);this.camera.position.copy(t).addScaledVector(e,s)}}syncBuildings(t){const e=performance.now();if(!t&&e-this._syncAt<350)return;this._syncAt=e;const n=this.body.position.x,i=this.body.position.z,s=this.world.buildingsNear(n,i,52),o=new Set;for(const a of s){const l=`${a.minX.toFixed(1)}|${a.minZ.toFixed(1)}|${a.floors}|${a.maxX.toFixed(1)}`;if(o.add(l),this._colliders.has(l))continue;const c=[];for(let p=0;p<a.pts.length;p+=2)c.push(this.world.terrainY(a.pts[p],a.pts[p+1]));const{eave:h,min:u}=Va(c,a.height),d=Math.max(2.7,h-u),f=Math.max(.45,(a.maxX-a.minX)/2),g=Math.max(.45,(a.maxZ-a.minZ)/2),v=d/2,m=new _t({mass:0,material:this.buildingMat,collisionFilterGroup:ji,collisionFilterMask:Dr|Er});m.addShape(new Rs(new C(f,v,g))),m.position.set((a.minX+a.maxX)/2,u+v,(a.minZ+a.maxZ)/2),this.physics.addBody(m),this._colliders.set(l,m)}for(const[a,l]of this._colliders)o.has(a)||(this.physics.removeBody(l),this._colliders.delete(a))}driveCamera(t,e,n){this.selfTestMode||(this.orbitYaw-=e.lookX*.0022,this.pitch=Math.max(-.7,Math.min(.55,this.pitch-e.lookY*.0018)),e.mouseIdle>.55&&(this.orbitYaw=Ic(this.orbitYaw,n.yaw,t*2.8)));const i=this.distance,s=this.shoulder;this.distance=this.firstPerson?.15:7.2,this.shoulder=this.firstPerson?0:.48,this._target.set(n.mesh.position.x,n.mesh.position.y+(this.firstPerson?.85:1.15),n.mesh.position.z),this.placeCamera(this._target),this.resolveCamera(this._target),this.distance=i,this.shoulder=s}toggleView(){this.firstPerson=!this.firstPerson,this.mesh.visible=!this.firstPerson}}function Lx(){const r=new Je,t=new ce({color:"#2c4d73",roughness:.8}),e=new ce({color:"#e0b394",roughness:.7}),n=new ce({color:"#22262c",roughness:.9}),i=new Yt(new Ne(.46,.62,.26),t);i.position.set(0,1.18,0),i.name="chest";const s=new Yt(new Ne(.28,.3,.26),e);s.position.set(0,1.68,0);const o=new Yt(new Ne(.06,.06,.1),e);o.position.set(0,1.66,-.18),o.name="nose";const a=new Yt(new Ne(.16,.7,.18),n);a.position.set(-.12,.4,0);const l=a.clone();l.position.x=.12;const c=new Yt(new Ne(.12,.55,.14),t);c.position.set(-.32,1.16,0);const h=c.clone();h.position.x=.32;const u=new Yt(new Ne(.3,.12,.28),n);u.position.set(0,1.84,0);const d=new Yt(new Ne(.18,.08,.26),n);d.position.set(-.12,.04,-.02);const f=d.clone();return f.position.x=.12,r.add(i,s,o,a,l,c,h,u,d,f),r.traverse(g=>{g.isMesh&&(g.castShadow=!0)}),r}const Nc=["#c23b3b","#f2f2f0","#1f4e79","#2f6b45"];class Dx{constructor(t,e,n){this.scene=t,this.world=e,this.physics=n,this.cars=[],this.driven=null,this.up=new C(0,1,0),e.carSpawns.forEach((i,s)=>{const o=this.makeCar(i,Nc[s%Nc.length]);this.cars.push(o),t.add(o.mesh),n.addBody(o.body)})}makeCar(t,e){const n=new Je,i=Ux(e);n.add(i);let s=t.x,o=t.z,a=t.yaw||0;const l=this.world.nearestRoad(s,o,45);l&&(s=l.x-l.dirZ*1.7,o=l.z+l.dirX*1.7,a=Math.atan2(-l.dirX,-l.dirZ));const c=this.world.surfaceAt(s,o)+.02;n.position.set(s,c,o),n.rotation.y=a;const h=new _t({mass:0,type:_t.STATIC,material:new _i("car"),collisionFilterGroup:Er,collisionFilterMask:ji|Dr,allowSleep:!1});return h.addShape(new Rs(new C(.9,.55,2.15))),h.position.set(s,c,o),h.quaternion.setFromAxisAngle(this.up,a),{mesh:n,visual:i,body:h,yaw:a,speed:0,color:e,spawn:t,wheelSpin:0}}nearest(t,e,n=3.5){let i=null,s=n;for(const o of this.cars){if(o===this.driven)continue;const a=Math.hypot(o.mesh.position.x-t,o.mesh.position.z-e);a<s&&(s=a,i=o)}return i}enter(t,e){this.driven=t,t.body.type=_t.DYNAMIC,t.body.mass=900,t.body.updateMassProperties(),t.body.wakeUp(),t.body.collisionFilterMask=ji,e.setOnFoot(!1),e.mesh.position.copy(t.mesh.position)}exit(t){const e=this.driven;if(!e)return;const n=new j(1,0,0).applyQuaternion(e.mesh.quaternion),i=e.mesh.position.x+n.x*2.4,s=e.mesh.position.z+n.z*2.4;e.speed=0,e.body.velocity.set(0,0,0),e.body.angularVelocity.set(0,0,0),e.body.type=_t.STATIC,e.body.mass=0,e.body.updateMassProperties(),e.body.collisionFilterMask=ji|Dr,this.driven=null,t.setOnFoot(!0),t.place(i,s),t.orbitYaw=e.yaw}update(t,e){for(const n of this.cars){if(n!==this.driven){n.body.position.x=n.mesh.position.x,n.body.position.z=n.mesh.position.z,n.body.position.y=this.world.surfaceAt(n.mesh.position.x,n.mesh.position.z)+.02,n.mesh.position.y=n.body.position.y;continue}const i=e.forward,s=e.strafe,o=e.jumpHeld,a=Math.abs(n.speed);o?n.speed*=Math.max(0,1-t*4.4):i>0?n.speed+=t*(a<7?12.5:8):i<0?n.speed-=t*9:n.speed*=Math.max(0,1-t*1.15),n.speed=Math.max(-7,Math.min(26,n.speed));const l=1.2*(.38+.62*(1-Math.min(1,a/24))),c=n.speed<-.2?-1:1;n._steer=s,n.yaw-=s*t*l*c,n.mesh.rotation.y=n.yaw;const h=new j(0,0,-1).applyQuaternion(n.mesh.quaternion);h.y=0,h.normalize(),n.body.velocity.x=h.x*n.speed,n.body.velocity.z=h.z*n.speed,n.body.quaternion.setFromAxisAngle(this.up,n.yaw),n.body.angularVelocity.set(0,0,0),n._fwd=h}}postPhysics(){const t=this.driven;if(!t)return;const e=Math.hypot(t.body.velocity.x,t.body.velocity.z);e+.35<Math.abs(t.speed)&&(t.speed=Math.sign(t.speed||1)*e);const n=t.body.position.x,i=t.body.position.z,s=this.world.dem;t.body.position.x=Math.min(s.maxX-21,Math.max(s.minX+21,n)),t.body.position.z=Math.min(s.maxZ-21,Math.max(s.minZ+21,i));const o=this.world.surfaceAt(t.body.position.x,t.body.position.z)+.02;t.body.position.y=o,t.body.velocity.y=0,t.mesh.position.set(t.body.position.x,o,t.body.position.z),t.mesh.rotation.y=t.yaw;const a=t._fwd||new j(0,0,-1).applyQuaternion(t.mesh.quaternion),l=this.world.surfaceAt(t.mesh.position.x+a.x*2.1,t.mesh.position.z+a.z*2.1),c=this.world.surfaceAt(t.mesh.position.x-a.x*2.1,t.mesh.position.z-a.z*2.1);t.visual.rotation.x=Math.atan2(l-c,4.2),t.wheelSpin+=t.speed*.08;for(const u of t.visual.userData.wheels)u.rotation.x=t.wheelSpin;const h=t.visual.userData.front;for(const u of h)u.rotation.y=(t._steer||0)*.04}}const Ix=new ce({color:"#17191c",roughness:.78,metalness:.04}),Nx=new ce({color:"#c5c8cc",roughness:.35,metalness:.75}),mr=new ce({color:"#b7d0d8",roughness:.08,metalness:.15,transparent:!0,opacity:.55,envMapIntensity:1}),Uc=new ce({color:"#fff6d8",emissive:"#fff1c4",emissiveIntensity:.7}),Fc=new ce({color:"#8a1d1d",emissive:"#ff2a2a",emissiveIntensity:.35}),Oc=new ce({color:"#2a2e33",roughness:.45,metalness:.5});function Pe(r,t,e,n,i,s,o,a=0){const l=new Yt(new Ne(r,t,e),n);return l.position.set(i,s,o),l.rotation.x=a,l.castShadow=!0,l.receiveShadow=!0,l}function Ux(r){const t=new Je,e=new $0({color:r,roughness:.32,metalness:.62,clearcoat:.7,clearcoatRoughness:.18,envMapIntensity:1});t.add(Pe(1.78,.42,4.2,e,0,.58,.02)),t.add(Pe(1.68,.12,1.35,e,0,.78,-1.05)),t.add(Pe(1.58,.42,1.7,e,0,.92,.18)),t.add(Pe(1.72,.16,.28,Oc,0,.48,-2.02)),t.add(Pe(1.72,.16,.22,Oc,0,.48,2.05)),t.add(Pe(1.42,.38,.06,mr,0,.96,-.64,.42)),t.add(Pe(1.42,.32,.05,mr,0,.98,1,-.35)),t.add(Pe(.05,.32,1.15,mr,-.8,.96,.18)),t.add(Pe(.05,.32,1.15,mr,.8,.96,.18));const n=Pe(.32,.12,.06,Uc,-.58,.62,-2.12),i=Pe(.32,.12,.06,Uc,.58,.62,-2.12);t.add(n,i),t.add(Pe(.28,.1,.05,Fc,-.58,.66,2.12)),t.add(Pe(.28,.1,.05,Fc,.58,.66,2.12)),t.add(Pe(.16,.1,.22,e,-.96,.95,.15)),t.add(Pe(.16,.1,.22,e,.96,.95,.15));const s=[],o=[],a=[[-.84,-1.32],[.84,-1.32],[-.84,1.28],[.84,1.28]];for(const[l,c]of a){const h=new Je;h.position.set(l,.34,c);const u=new Je,d=new Yt(new Qi(.34,.34,.24,14),Ix);d.rotation.z=Math.PI/2,d.castShadow=!0;const f=new Yt(new Qi(.18,.18,.26,10),Nx);f.rotation.z=Math.PI/2,u.add(d,f),h.add(u),t.add(h),s.push(u),c<0&&o.push(h)}return t.userData.wheels=s,t.userData.front=o,t}class Fx{constructor(t,e){this.scene=t,this.renderer=e,this.time=.36,this.locked=!1,this.rainOn=!1,this.quality="high",this.sun=new lg("#fff5e4",2.05),this.sun.target.position.set(0,0,0),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=10,this.sun.shadow.camera.far=340;const n=82;this.sun.shadow.camera.left=-n,this.sun.shadow.camera.right=n,this.sun.shadow.camera.top=n,this.sun.shadow.camera.bottom=-n,this.sun.shadow.bias=-22e-5,this.sun.shadow.normalBias=.12,this.sun.shadow.radius=1.4,this.hemi=new rg("#c9d7e6","#6a7350",.62),this.ambient=new cg("#93a4b8",.2),t.add(this.sun,this.sun.target,this.hemi,this.ambient),t.fog=new Ua("#d7e3ec",260,3200),e.shadowMap.enabled=!0,e.shadowMap.type=Bc,this.sky=new we({side:Fe,depthWrite:!1,glslVersion:Tr,uniforms:{uSun:{value:new j(.2,.7,.25)},uZenith:{value:new Lt("#8ebbe0")},uHorizon:{value:new Lt("#d7e3ec")},uHaze:{value:.38}},vertexShader:`
        out vec3 vDir;
        void main() {
          vDir = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,fragmentShader:`
        precision highp float;
        in vec3 vDir;
        uniform vec3 uSun;
        uniform vec3 uZenith;
        uniform vec3 uHorizon;
        uniform float uHaze;
        out vec4 fragColor;
        void main() {
          vec3 dir = normalize(vDir);
          float h = clamp(dir.y, -0.04, 1.0);
          vec3 col = mix(uHorizon, uZenith, smoothstep(-0.02, 0.55, h));
          vec3 sun = normalize(uSun);
          float disc = pow(max(dot(dir, sun), 0.0), 480.0);
          float glow = pow(max(dot(dir, sun), 0.0), 7.0);
          col += vec3(1.0, 0.95, 0.86) * disc;
          col += vec3(1.0, 0.92, 0.8) * glow * 0.16;
          col = mix(col, uHorizon, uHaze * (1.0 - smoothstep(0.0, 0.5, dir.y)));
          fragColor = vec4(col, 1.0);
        }
      `}),this.skyMesh=new Yt(new Rr(4200,28,16),this.sky),this.skyMesh.frustumCulled=!1,this.skyMesh.renderOrder=-1,t.add(this.skyMesh);const i=900,s=new Float32Array(i*3);for(let a=0;a<i;a++)s[a*3]=(Math.random()-.5)*70,s[a*3+1]=Math.random()*28,s[a*3+2]=(Math.random()-.5)*70;const o=new ze;o.setAttribute("position",new _e(s,3)),this.rain=new Y0(o,new yh({color:"#d5e4ee",size:.07,transparent:!0,opacity:0,depthWrite:!1})),this.rain.frustumCulled=!1,t.add(this.rain),this._sun=new j,this._horizon=new Lt,this._zenith=new Lt,this._dayHorizon=new Lt("#d7e3ec"),this._nightHorizon=new Lt("#1a2433"),this._dayZenith=new Lt("#8ebbe0"),this._nightZenith=new Lt("#070b14"),this._pmrem=new Cr(e),this._envScene=new xh,this._envSky=new Yt(new Rr(40,24,14),this.sky),this._envScene.add(this._envSky),this.envMap=null,this._envStamp="hdr",this._useHdr=!1}setHdr(t){this.envMap&&this.envMap.dispose(),this.envMap=t,this.scene.environment=t,this._useHdr=!0}get dayFactor(){const t=Math.sin(this.time*Math.PI*2);return Ru.clamp((t+.08)/.9,0,1)}labelKey(){const t=this.time;return t<.18||t>.82?"night":t<.28?"morning":t<.55?"day":t<.7?"afternoon":"dusk"}setRain(t){this.rainOn=t}toggleRain(){return this.rainOn=!this.rainOn,this.rainOn}applyQuality(t){this.quality=t==="low"?"low":"high";const e=this.quality==="high";this.renderer.shadowMap.enabled=e,this.sun.castShadow=e;const n=e?2048:256;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}refreshEnvironment(){if(this._useHdr)return;const t=this._pmrem.fromScene(this._envScene,.04);this.envMap&&this.envMap.dispose(),this.envMap=t.texture,this.scene.environment=this.envMap,this._envStamp=this.dayFactor>.42?"day":"night"}update(t,e,n,i){this.locked||(this.time=(this.time+t/720)%1);const s=this.time*Math.PI*2,o=Math.sin(s),a=Math.cos(s);this._sun.set(a*.85,Math.max(o,-.15),.28).normalize();const l=i||e.position;this.sun.position.copy(l).addScaledVector(this._sun,190),this.sun.target.position.copy(l),this.sun.target.updateMatrixWorld();const c=this.dayFactor,h=this._useHdr;this.sun.intensity=.04+c*(h?1.25:2.05),this.sun.color.set(this._sun.y>.45?"#fff5e4":"#ffd8b0"),this.hemi.intensity=h?.05+c*.1:.16+c*.5,this.hemi.color.set(c>.35?"#c9d7e6":"#6d7f99"),this.hemi.groundColor.set(c>.35?"#6a7350":"#2a3328"),this.ambient.intensity=h?.03+(1-c)*.08:.1+c*.12+(1-c)*.16,this.renderer.toneMappingExposure=h?.55+c*.16:.72+c*.28,this._horizon.copy(this._dayHorizon).lerp(this._nightHorizon,1-c),this._zenith.copy(this._dayZenith).lerp(this._nightZenith,1-c),this.rainOn&&c>.3&&this._horizon.lerp(new Lt("#c5ced4"),.45),this.sky.uniforms.uSun.value.copy(this._sun),this.sky.uniforms.uHorizon.value.copy(this._horizon),this.sky.uniforms.uZenith.value.copy(this._zenith),this.sky.uniforms.uHaze.value=this.rainOn?.68:.34+(1-c)*.12,this.scene.fog.color.copy(this._horizon),this.scene.fog.near=this.rainOn?70:240,this.scene.fog.far=this.rainOn?1200:3e3+c*400,this.skyMesh.position.copy(e.position);const u=.012+(1-c)*1.15;for(const g of n.facades)g.emissiveIntensity=u;n.lampHead.emissiveIntensity=.12+(1-c)*1.35,n.road.roughness=this.rainOn?.4:.94,n.sidewalk.roughness=this.rainOn?.55:.94,n.terrain.roughness=this.rainOn?.68:.98,n.water.uniforms.uSun&&n.water.uniforms.uSun.value.copy(this._sun),n.water.uniforms.uTime.value+=t;const d=c>.42?"day":"night";!this._useHdr&&d!==this._envStamp&&this.refreshEnvironment(),this.scene.environmentIntensity=this._useHdr?.18+c*.28:1;const f=this.rain.geometry.attributes.position;if(this.rain.material.opacity=this.rainOn?.45:0,this.rain.position.copy(e.position),this.rainOn){for(let g=0;g<f.count;g++){let v=f.getY(g)-t*18;v<0&&(v=28),f.setY(g,v)}f.needsUpdate=!0}}}const To={en:{tagline:"Québec — walk or drive the city",loading:"Loading the map…",reading:"Reading the map…",shaping:"Shaping terrain and rivers…",placing:"Placing the streets…",raising:"Raising the downtown blocks…",landmarks:"Landmarks",found:"found",places:"Landmarks",placesHelp:"Teleport anywhere in Sherbrooke.",close:"Close",hint:"WASD move · Shift sprint · Space jump · C crouch · F car · V camera · M places · R weather · Q quality · click to look",exitCar:"F  exit car",enterCar:"F  enter car",rain:"rain",night:"Night",morning:"Morning",day:"Day",afternoon:"Afternoon",dusk:"Dusk",qualityHigh:"High",qualityLow:"Low"},fr:{tagline:"Québec — marcher ou conduire dans la ville",loading:"Chargement de la carte…",reading:"Lecture de la carte…",shaping:"Mise en forme du relief et des rivières…",placing:"Placement des rues…",raising:"Élévation des îlots du centre-ville…",landmarks:"Lieux",found:"trouvé",places:"Lieux",placesHelp:"Se rendre à un lieu de Sherbrooke.",close:"Fermer",hint:"WASD bouger · Maj courir · Espace sauter · C s’accroupir · F voiture · V caméra · M lieux · R météo · Q qualité · cliquer pour regarder",exitCar:"F  sortir",enterCar:"F  monter",rain:"pluie",night:"Nuit",morning:"Matin",day:"Jour",afternoon:"Après-midi",dusk:"Crépuscule",qualityHigh:"Élevée",qualityLow:"Légère"}};let Qn="en";function He(r){return To[Qn]&&To[Qn][r]||To.en[r]||r}function Ox(){document.documentElement.lang=Qn;const r=document.querySelector("#load p");r&&(r.textContent=He("tagline"));const t=document.getElementById("hint");t&&(t.textContent=He("hint"));const e=document.querySelector("#menu h2");e&&(e.textContent=He("places"));const n=document.querySelector("#menu p");n&&(n.textContent=He("placesHelp"));const i=document.getElementById("menu-close");i&&(i.textContent=He("close"));const s=document.getElementById("lang");s&&(s.textContent=Qn==="fr"?"EN":"FR")}function Ga(r){Qn=r==="fr"?"fr":"en";try{localStorage.setItem("sherbrooke-lang",Qn)}catch{}return Ox(),Qn}function zx(){return Ga(Qn==="fr"?"en":"fr")}function Bx(){let r=null;try{r=localStorage.getItem("sherbrooke-lang")}catch{r=null}const t=(navigator.language||"en").toLowerCase().startsWith("fr")?"fr":"en";return Ga(r==="fr"||r==="en"?r:t)}const Ih="sherbrooke-explorer-found";class kx{constructor(t){this.world=t,this.pois=t.pois,this.found=new Set(Hx()),this.menuOpen=!1,this.debugOn=!1,this.clockEl=document.getElementById("clock"),this.landEl=document.getElementById("landmarks"),this.promptEl=document.getElementById("prompt"),this.speedEl=document.getElementById("speed"),this.debugEl=document.getElementById("debug"),this.cross=document.getElementById("crosshair"),this.menu=document.getElementById("menu"),this.list=document.getElementById("menu-list"),this.map=document.getElementById("map"),this.compass=document.getElementById("compass"),this.onTeleport=null,this.paintOverview(),this.buildMenu(),document.getElementById("menu-close").addEventListener("click",()=>this.setMenu(!1)),this.refreshLandmarks()}paintOverview(){const n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d"),s=this.world.bounds,o=(a,l)=>[(a-s.minX)/(s.maxX-s.minX)*512,(l-s.minZ)/(s.maxZ-s.minZ)*512];i.fillStyle="#163044",i.fillRect(0,0,512,512),i.lineWidth=2,i.strokeStyle="#6e8ea0";for(const a of this.world.chunks.values())for(const l of a.waters){if(l.pts.length<4)continue;i.beginPath();const[c,h]=o(l.pts[0],l.pts[1]);i.moveTo(c,h);for(let u=2;u<l.pts.length;u+=2){const[d,f]=o(l.pts[u],l.pts[u+1]);i.lineTo(d,f)}i.stroke()}for(const a of this.world.overviewRoads){i.strokeStyle=a.cls<=2?"#e6d7a2":"#8ea0ae",i.lineWidth=a.cls<=2?2.4:1.2,i.beginPath();const l=a.pts,[c,h]=o(l[0],l[1]);i.moveTo(c,h);for(let u=2;u<l.length;u+=2){const[d,f]=o(l[u],l[u+1]);i.lineTo(d,f)}i.stroke()}this.overview=n,this.project=o}buildMenu(){this.list.innerHTML="",this.pois.forEach((t,e)=>{const n=document.createElement("button");n.type="button",n.className="landmark",n.innerHTML=`<b>${e+1}. ${t.name}</b><span>${t.blurb}</span><i>${this.found.has(t.id)?He("found"):""}</i>`,n.addEventListener("click",()=>{this.onTeleport?.(t),this.setMenu(!1)}),this.list.appendChild(n)})}setMenu(t){this.menuOpen=t,this.menu.hidden=!t,t&&document.exitPointerLock()}toggleMenu(){this.setMenu(!this.menuOpen)}discover(t,e){let n=!1;for(const i of this.pois)this.found.has(i.id)||Math.hypot(i.x-t,i.z-e)<22&&(this.found.add(i.id),n=!0);n&&(localStorage.setItem(Ih,JSON.stringify([...this.found])),this.refreshLandmarks(),this.buildMenu())}refreshLandmarks(){this.landEl.textContent=`${He("landmarks")} ${this.found.size}/${this.pois.length}`}refreshLanguage(){this.refreshLandmarks(),this.buildMenu()}update({playerX:t,playerZ:e,heading:n,speed:i,driving:s,prompt:o,firstPerson:a,envLabel:l,qualityLabel:c,debug:h,fps:u,drawCalls:d,triangles:f,chunks:g}){this.clockEl.textContent=c?`${l} · ${c}`:l,this.promptEl.textContent=o||"",this.speedEl.hidden=!s,s&&(this.speedEl.textContent=`${Math.round(Math.abs(i)*3.6)} km/h`),this.cross.hidden=!a,this.drawMap(t,e,n),this.drawCompass(n),this.debugOn?(this.debugEl.hidden=!1,this.debugEl.textContent=h||`fps ${u.toFixed(0)}
draw calls ${d}
triangles ${f}
chunks ${g}
${t.toFixed(0)}, ${e.toFixed(0)}`):this.debugEl.hidden=!0}drawMap(t,e,n){const i=this.map.getContext("2d"),s=this.map.width,o=this.map.height;i.clearRect(0,0,s,o),i.drawImage(this.overview,0,0,s,o);const a=this.world.bounds,l=(t-a.minX)/(a.maxX-a.minX)*s,c=(e-a.minZ)/(a.maxZ-a.minZ)*o;for(const h of this.pois){const u=(h.x-a.minX)/(a.maxX-a.minX)*s,d=(h.z-a.minZ)/(a.maxZ-a.minZ)*o;i.fillStyle=this.found.has(h.id)?"#e2b657":"#f4efe4",i.fillRect(u-1.5,d-1.5,3,3)}i.save(),i.translate(l,c),i.rotate(n),i.fillStyle="#e2b657",i.beginPath(),i.moveTo(0,-7),i.lineTo(5,6),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore()}drawCompass(t){const e=this.compass.getContext("2d"),n=this.compass.width,i=this.compass.height;e.clearRect(0,0,n,i);const s=t*180/Math.PI,o={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};e.font="12px Avenir Next, Segoe UI, sans-serif",e.textAlign="center";for(let a=-180;a<=540;a+=15){let l=a-s;l=(l+540)%360-180;const c=n/2+l*2.4;c<0||c>n||(e.fillStyle=a%90===0?"#e2b657":"rgba(244,239,228,0.7)",e.fillRect(c,i-10,a%45===0?2:1,a%45===0?8:4),o[a%360]&&e.fillText(o[(a%360+360)%360],c,16))}}}function Hx(){try{return JSON.parse(localStorage.getItem(Ih)||"[]")}catch{return[]}}class Vx{constructor(){this.started=!1}start(){if(this.started)return;this.started=!0;const t="./";this.bed=new Audio(`${t}audio/city-ambient.wav`),this.bed.loop=!0,this.bed.volume=.26,this.rainAudio=new Audio(`${t}audio/rain.wav`),this.rainAudio.loop=!0,this.rainAudio.volume=0,this.bed.play().catch(()=>{}),this.rainAudio.play().catch(()=>{});const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.value=46,i.gain.value=0;const s=this.ctx.createBiquadFilter();s.type="lowpass",s.frequency.value=220,n.connect(s),s.connect(i),i.connect(this.ctx.destination),n.start(),this.engine=n,this.engineGain=i,this.ctx.state==="suspended"&&this.ctx.resume()}update({driving:t,speed:e,rain:n}){if(!this.started)return;const i=Math.abs(e)*3.6;this.bed.volume=t?.18:.26,this.rainAudio.volume=n?.38:0;const s=t?Math.min(.12,i/280):0,o=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(s,o,.08),this.engine.frequency.setTargetAtTime(40+i*.9,o,.08)}}const on=new URLSearchParams(location.search);function va(r,t){const e=document.getElementById("load-fill"),n=document.getElementById("load-msg");e&&(e.style.width=`${Math.round(r*100)}%`),n&&t&&(n.textContent=He(t))}function Gx(){try{const e=localStorage.getItem("sherbrooke-quality");if(e==="low"||e==="high")return e}catch{}const r=Math.min(window.innerWidth,window.innerHeight)<760,t=navigator.deviceMemory||8;return r||t<=4?"low":"high"}function Ao(r){const t=window.devicePixelRatio||1;return r==="low"?Math.min(t,1):window.innerWidth*t>2200?Math.min(t,1.15):Math.min(t,1.35)}function Wx(r,t){const e=new Je,n=new ce({color:"#e2b657",emissive:"#c8922e",emissiveIntensity:.45,roughness:.45});for(const i of t.pois){const s=new Je,o=new Yt(new Qi(.05,.07,2.1,6),n);o.position.y=1.05;const a=new Yt(new Fa(.28,.035,6,12),n);a.rotation.x=Math.PI/2,a.position.y=2.25,s.add(o,a);let l=i.x,c=i.z;const h=t.nearestRoad(l,c,28);if(h){const u=h.width*.5+2.1;l=h.x-h.dirZ*u,c=h.z+h.dirX*u}s.position.set(l,t.surfaceAt(l,c),c),s.userData.poi=i,s.userData.ring=a,e.add(s)}return r.add(e),{update(i){const s=performance.now()*.002;for(const o of e.children)o.userData.ring.position.y=2.25+Math.sin(s+o.position.x*.01)*.08,o.visible=!i.has(o.userData.poi.id)}}}async function Xx(){Bx(),(on.get("lang")==="fr"||on.get("lang")==="en")&&Ga(on.get("lang"));let r=on.get("quality")==="low"||on.get("quality")==="high"?on.get("quality"):Gx();const t=new X0({antialias:!0,powerPreference:"high-performance",stencil:!1});t.outputColorSpace=Ie,t.toneMapping=xa,t.toneMappingExposure=.95,t.setPixelRatio(Ao(r)),t.setSize(window.innerWidth,window.innerHeight),t.domElement.id="view",document.body.prepend(t.domElement);const e=new xh,n=new Ze(62,window.innerWidth/window.innerHeight,.15,4200),i=await ux(va);va(.94,"raising");const s=await mx(),o=new Cx(e,i,s),a=new Fx(e,t);a.applyQuality(r);try{const E=await new K_().loadAsync("./textures/sky.hdr");E.mapping=br;const T=new Cr(t);a.setHdr(T.fromEquirectangular(E).texture),E.dispose(),T.dispose()}catch(E){console.warn(E),a.refreshEnvironment()}let l=null;const c=()=>{if(r!=="high"){t.render(e,n);return}if(!l){l=new G_(t),l.addPass(new W_(e,n));const E=new gn(e,n);E.blendIntensity=.58,E.updateGtaoMaterial({radius:16,distanceExponent:1.4,thickness:1,scale:1.2,samples:8,distanceFallOff:1,screenSpaceRadius:!0}),l.addPass(E),l.addPass(new $_)}l.setPixelRatio(t.getPixelRatio()),l.setSize(window.innerWidth,window.innerHeight),l.render()},h=new L_({gravity:new C(0,-18,0)});h.broadphase=new Vi(h),h.allowSleep=!0,h.solver.iterations=8,h.defaultContactMaterial.friction=.02,h.defaultContactMaterial.restitution=0;const u=new Px(n,i,h);e.add(u.mesh);const d=new Dx(e,i,h),f=new Rx(t.domElement),g=new kx(i);document.getElementById("lang").addEventListener("click",E=>{E.stopPropagation(),zx(),g.refreshLanguage()});const v=new Vx,m=Wx(e,i),p=i.nearestRoad(i.spawn.x,i.spawn.z,35);p?u.place(p.x-p.dirZ*2.4,p.z+p.dirX*2.4):u.place(i.spawn.x,i.spawn.z);const _=on.get("at");if(_){const E=i.pois.find(T=>T.id===_);if(E){const T=i.nearestRoad(E.x,E.z,50);u.place(T?T.x:E.x,T?T.z:E.z),u.orbitYaw=T?Math.atan2(-T.dirX,-T.dirZ):.9,u.pitch=-.18}}o.prime(u.body.position.x,u.body.position.z),u.occluders=o.occluders,g.onTeleport=E=>{d.driven&&d.exit(u),u.place(E.x+6,E.z+4),o.prime(E.x,E.z),u.occluders=o.occluders},window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setPixelRatio(Ao(r)),t.setSize(window.innerWidth,window.innerHeight)}),t.domElement.addEventListener("click",()=>{g.menuOpen||(f.requestLock(),v.start())}),document.getElementById("load").classList.add("hidden"),document.getElementById("hud").hidden=!1;let y=60;const x=E=>{if(f.poll(E),f.jumpHeld=f.keys.has("Space"),!d.driven&&f.consume("Space")&&(f.pendingJump=!0),g.menuOpen&&(f.forward=0,f.strafe=0,f.lookX=0,f.lookY=0),f.consume("KeyM")&&g.toggleMenu(),f.consume("KeyV")&&u.toggleView(),f.consume("KeyR")&&a.toggleRain(),f.consume("KeyQ")){r=r==="high"?"low":"high";try{localStorage.setItem("sherbrooke-quality",r)}catch{}a.applyQuality(r),t.setPixelRatio(Ao(r)),t.setSize(window.innerWidth,window.innerHeight)}if(f.consume("F3")&&(g.debugOn=!g.debugOn),f.consume("KeyF")&&!g.menuOpen)if(d.driven)d.exit(u);else{const B=d.nearest(u.body.position.x,u.body.position.z);B&&d.enter(B,u)}g.menuOpen&&i.pois.forEach((B,M)=>{M<9&&f.consume(`Digit${M+1}`)&&g.onTeleport(B)}),u.occluders=o.occluders,d.update(E,f),u.prePhysics(E,f),h.step(1/60,E,3),u.postPhysics(),d.postPhysics();const T=d.driven;T&&u.driveCamera(E,f,T);const w=T?T.mesh.position:u.mesh.position,S=u.selfTestMode?{loaded:o.live.size,wanted:o.live.size}:o.update(w.x,w.z);a.update(E,n,s,w),g.discover(w.x,w.z),m.update(g.found),n.getWorldDirection(gr),gr.y=0;const D=Math.atan2(gr.x,-gr.z),z=d.nearest(u.body.position.x,u.body.position.z),I=T?He("exitCar"):z?He("enterCar"):"",F=t.info.render;g.update({playerX:w.x,playerZ:w.z,heading:D,speed:T?T.speed:0,driving:!!T,prompt:I,firstPerson:u.firstPerson,envLabel:He(a.labelKey())+(a.rainOn?` · ${He("rain")}`:""),qualityLabel:He(r==="low"?"qualityLow":"qualityHigh"),fps:y,drawCalls:F.calls,triangles:F.triangles,chunks:`${S.loaded}/${S.wanted}`}),v.update({driving:!!T,speed:T?T.speed:0,rain:a.rainOn}),u.selfTestMode||c(),f.endFrame(),f.pendingJump=!1};if(on.has("audit")){const E=u.body.position.x,T=u.body.position.z,w=[`pos ${E.toFixed(1)}, ${T.toFixed(1)}`];for(let I=-4;I<=4;I++){const F=E+I*5;w.push(`x${F.toFixed(0)} ease ${i.roadEase(F,T)} val ${i.roadValue(F,T)} dem ${i.sampleDem(F,T).toFixed(2)} ty ${i.terrainY(F,T).toFixed(2)} surf ${i.surfaceAt(F,T).toFixed(2)} mask ${i.maskAt(F,T)}`)}const S=[],D=i.chunkAt(E,T);if(D)for(const I of D.roads)S.push(`cls ${I.cls} w ${I.width.toFixed(1)} bridge ${I.flags&1} deck ${I.deckY==null?"-":I.deckY.toFixed(1)} pts ${I.pts.length/2}`);w.push(...S.slice(0,18));const z=document.getElementById("selftest");z.hidden=!1,z.textContent=w.join(`
`),document.title="AUDIT"}if(on.has("drive")){const E=d.nearest(u.body.position.x,u.body.position.z,40);if(!E)document.title="DRIVE FAIL no car";else{d.enter(E,u),f.keys.add("KeyW");const T=E.mesh.position.clone();for(let S=0;S<120;S++)x(1/60);f.keys.delete("KeyW");const w=E.mesh.position.distanceTo(T);document.title=w>3?`DRIVE OK ${w.toFixed(1)}`:`DRIVE FAIL ${w.toFixed(2)}`}}if(on.has("bench")){for(let F=0;F<90;F++)x(1/60);const E=60,T=performance.now();for(let F=0;F<E;F++)x(1/60);const w=E/((performance.now()-T)/1e3),S=t.info.render.calls,D=t.info.render.triangles,z=`BENCH ${w.toFixed(0)} fps calls ${S} tris ${D} quality ${r}`;document.title=z;const I=document.getElementById("selftest");I.hidden=!1,I.textContent=z,window.__bench={fps:w,calls:S,tris:D,quality:r}}if(on.has("selftest")){const E=await qx(u,f,x),T=document.getElementById("selftest");T.hidden=!1,T.textContent=E,document.title=E.includes("FAIL")?"SELFTEST FAIL":"SELFTEST PASS",window.__selfTestReport=E}let P=performance.now();function b(E){const T=Math.min(.05,(E-P)/1e3);P=E,y=y*.9+(T>0?1/T:60)*.1,x(T),requestAnimationFrame(b)}requestAnimationFrame(b),window.__sherbrooke={player:u,world:i,vehicles:d,chunks:o,step:x}}const gr=new j;async function qx(r,t,e){r.selfTestMode=!0;const n=r.body.collisionFilterMask;r.body.collisionFilterMask=0,r.orbitYaw=.4,r.pitch=-.15,r.firstPerson=!1;for(let a=0;a<20;a++)e(1/60);const i=[],s=(a,l)=>{t.keys.add(a);const c=Math.round(l/(1e3/60));for(let h=0;h<c;h++)e(1/60);t.keys.delete(a);for(let h=0;h<4;h++)e(1/60)},o=[["KeyD","r",1],["KeyA","r",-1],["KeyW","f",1],["KeyS","f",-1],["ArrowRight","r",1],["ArrowUp","f",1]];for(const[a,l,c]of o){e(1/60);const h=r.cameraBasis(),u=h.forward.clone(),d=h.right.clone(),f=r.mesh.position.clone();s(a,450);const g=r.mesh.position.clone().sub(f);if(g.y=0,g.length()<.05){i.push(`${a}: FAIL no movement`);continue}const v=g.clone().normalize(),m=v.dot(l==="r"?d:u)*c,p=new j(0,0,-1).applyQuaternion(r.mesh.quaternion),_=p.dot(v),y=new j,x=new j;r.mesh.getObjectByName("nose").getWorldPosition(y),r.mesh.getObjectByName("chest").getWorldPosition(x);const b=y.sub(x).setY(0).normalize().dot(p),E=m>.9&&_>.9&&b>.9;i.push(`${a}: move ${m.toFixed(2)} face ${_.toFixed(2)} model ${b.toFixed(2)} ${E?"OK":"FAIL"}`)}return r.body.collisionFilterMask=n,r.selfTestMode=!1,i.push("frame: forward -Z, right +X when yaw is 0"),i.join(`
`)}window.addEventListener("error",r=>{const t=document.getElementById("selftest");t&&(t.hidden=!1,t.textContent=`ERROR ${r.message}`)});window.addEventListener("unhandledrejection",r=>{const t=document.getElementById("selftest");if(!t)return;t.hidden=!1;const e=r.reason;t.textContent=`ERROR ${e&&e.stack?e.stack:e}`});Xx().catch(r=>{console.error(r);const t=document.getElementById("selftest");t&&(t.hidden=!1,t.textContent=`ERROR ${r&&r.stack?r.stack:r}`),va(1,r.message||String(r))});
