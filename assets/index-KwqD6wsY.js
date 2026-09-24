(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ea="170",dh=0,La=1,fh=2,gl=1,vl=2,An=3,Xn=0,De=1,ve=2,Vn=0,Ui=1,Ia=2,Da=3,Ua=4,ph=5,si=100,mh=101,gh=102,vh=103,_h=104,xh=200,yh=201,Mh=202,Sh=203,ho=204,uo=205,Eh=206,wh=207,bh=208,Th=209,Ah=210,Ch=211,Rh=212,Ph=213,Lh=214,fo=0,po=1,mo=2,Bi=3,go=4,vo=5,_o=6,xo=7,_l=0,Ih=1,Dh=2,Gn=0,Uh=1,Nh=2,Fh=3,xl=4,Oh=5,zh=6,Bh=7,yl=300,ki=301,Hi=302,yo=303,Mo=304,_r=306,gs=1e3,Rn=1001,So=1002,He=1003,kh=1004,Ts=1005,un=1006,Er=1007,ai=1008,In=1009,Ml=1010,Sl=1011,vs=1012,na=1013,ci=1014,dn=1015,ys=1016,ia=1017,sa=1018,Vi=1020,El=35902,wl=1021,bl=1022,en=1023,Tl=1024,Al=1025,Ni=1026,Gi=1027,ra=1028,oa=1029,Cl=1030,aa=1031,ca=1033,or=33776,ar=33777,cr=33778,lr=33779,Eo=35840,wo=35841,bo=35842,To=35843,Ao=36196,Co=37492,Ro=37496,Po=37808,Lo=37809,Io=37810,Do=37811,Uo=37812,No=37813,Fo=37814,Oo=37815,zo=37816,Bo=37817,ko=37818,Ho=37819,Vo=37820,Go=37821,hr=36492,Wo=36494,Xo=36495,Rl=36283,qo=36284,Yo=36285,Zo=36286,Hh=3200,Vh=3201,Pl=0,Gh=1,Cn="",Le="srgb",qi="srgb-linear",xr="linear",te="srgb",fi=7680,Na=519,Wh=512,Xh=513,qh=514,Ll=515,Yh=516,Zh=517,$h=518,jh=519,Fa=35044,fr="300 es",Pn=2e3,pr=2001;class Yi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Oa=1234567;const ps=Math.PI/180,_s=180/Math.PI;function Zi(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[s&255]+be[s>>8&255]+be[s>>16&255]+be[s>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Ae(s,t,e){return Math.max(t,Math.min(e,s))}function la(s,t){return(s%t+t)%t}function Kh(s,t,e,n,i){return n+(s-t)*(i-n)/(e-t)}function Jh(s,t,e){return s!==t?(e-s)/(t-s):0}function ms(s,t,e){return(1-e)*s+e*t}function Qh(s,t,e,n){return ms(s,t,1-Math.exp(-e*n))}function tu(s,t=1){return t-Math.abs(la(s,t*2)-t)}function eu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*(3-2*s))}function nu(s,t,e){return s<=t?0:s>=e?1:(s=(s-t)/(e-t),s*s*s*(s*(s*6-15)+10))}function iu(s,t){return s+Math.floor(Math.random()*(t-s+1))}function su(s,t){return s+Math.random()*(t-s)}function ru(s){return s*(.5-Math.random())}function ou(s){s!==void 0&&(Oa=s);let t=Oa+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function au(s){return s*ps}function cu(s){return s*_s}function lu(s){return(s&s-1)===0&&s!==0}function hu(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function uu(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function du(s,t,e,n,i){const r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),u=r((t-n)/2),d=o((t-n)/2),f=r((n-t)/2),g=o((n-t)/2);switch(i){case"XYX":s.set(a*h,c*u,c*d,a*l);break;case"YZY":s.set(c*d,a*h,c*u,a*l);break;case"ZXZ":s.set(c*u,c*d,a*h,a*l);break;case"XZX":s.set(a*h,c*g,c*f,a*l);break;case"YXY":s.set(c*f,a*h,c*g,a*l);break;case"ZYZ":s.set(c*g,c*f,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Pi(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Re(s,t){switch(t.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const fu={DEG2RAD:ps,RAD2DEG:_s,generateUUID:Zi,clamp:Ae,euclideanModulo:la,mapLinear:Kh,inverseLerp:Jh,lerp:ms,damp:Qh,pingpong:tu,smoothstep:eu,smootherstep:nu,randInt:iu,randFloat:su,randFloatSpread:ru,seededRandom:ou,degToRad:au,radToDeg:cu,isPowerOfTwo:lu,ceilPowerOfTwo:hu,floorPowerOfTwo:uu,setQuaternionFromProperEuler:du,normalize:Re,denormalize:Pi};class Vt{constructor(t=0,e=0){Vt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class zt{constructor(t,e,n,i,r,o,a,c,l){zt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l)}set(t,e,n,i,r,o,a,c,l){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],u=n[7],d=n[2],f=n[5],g=n[8],v=i[0],m=i[3],p=i[6],_=i[1],y=i[4],x=i[7],A=i[2],E=i[5],C=i[8];return r[0]=o*v+a*_+c*A,r[3]=o*m+a*y+c*E,r[6]=o*p+a*x+c*C,r[1]=l*v+h*_+u*A,r[4]=l*m+h*y+u*E,r[7]=l*p+h*x+u*C,r[2]=d*v+f*_+g*A,r[5]=d*m+f*y+g*E,r[8]=d*p+f*x+g*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=h*o-a*l,d=a*c-h*r,f=l*r-o*c,g=e*u+n*d+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return t[0]=u*v,t[1]=(i*l-h*n)*v,t[2]=(a*n-i*o)*v,t[3]=d*v,t[4]=(h*e-i*c)*v,t[5]=(i*r-a*e)*v,t[6]=f*v,t[7]=(n*c-l*e)*v,t[8]=(o*e-n*r)*v,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(wr.makeScale(t,e)),this}rotate(t){return this.premultiply(wr.makeRotation(-t)),this}translate(t,e){return this.premultiply(wr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const wr=new zt;function Il(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function xs(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function pu(){const s=xs("canvas");return s.style.display="block",s}const za={};function ds(s){s in za||(za[s]=!0,console.warn(s))}function mu(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function gu(s){const t=s.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function vu(s){const t=s.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const qt={enabled:!0,workingColorSpace:qi,spaces:{},convert:function(s,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===te&&(s.r=Ln(s.r),s.g=Ln(s.g),s.b=Ln(s.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(s.applyMatrix3(this.spaces[t].toXYZ),s.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===te&&(s.r=Fi(s.r),s.g=Fi(s.g),s.b=Fi(s.b))),s},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Cn?xr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,t=this.workingColorSpace){return s.fromArray(this.spaces[t].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,t,e){return s.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function Ln(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Fi(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Ba=[.64,.33,.3,.6,.15,.06],ka=[.2126,.7152,.0722],Ha=[.3127,.329],Va=new zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ga=new zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);qt.define({[qi]:{primaries:Ba,whitePoint:Ha,transfer:xr,toXYZ:Va,fromXYZ:Ga,luminanceCoefficients:ka,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:Ba,whitePoint:Ha,transfer:te,toXYZ:Va,fromXYZ:Ga,luminanceCoefficients:ka,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}});let pi;class _u{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{pi===void 0&&(pi=xs("canvas")),pi.width=t.width,pi.height=t.height;const n=pi.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=pi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xs("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Ln(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ln(e[n]/255)*255):e[n]=Ln(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let xu=0;class Dl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xu++}),this.uuid=Zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(br(i[o].image)):r.push(br(i[o]))}else r=br(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function br(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?_u.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let yu=0;class Ee extends Yi{constructor(t=Ee.DEFAULT_IMAGE,e=Ee.DEFAULT_MAPPING,n=Rn,i=Rn,r=un,o=ai,a=en,c=In,l=Ee.DEFAULT_ANISOTROPY,h=Cn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:yu++}),this.uuid=Zi(),this.name="",this.source=new Dl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Vt(0,0),this.repeat=new Vt(1,1),this.center=new Vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==yl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case gs:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case So:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case gs:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case So:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ee.DEFAULT_IMAGE=null;Ee.DEFAULT_MAPPING=yl;Ee.DEFAULT_ANISOTROPY=1;class ue{constructor(t=0,e=0,n=0,i=1){ue.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(l+1)/2,x=(f+1)/2,A=(p+1)/2,E=(h+d)/4,C=(u+v)/4,I=(g+m)/4;return y>x&&y>A?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=C/n):x>A?x<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(x),n=E/i,r=I/i):A<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(A),n=C/r,i=I/r),this.set(n,i,r,e),this}let _=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(_)<.001&&(_=1),this.x=(m-g)/_,this.y=(u-v)/_,this.z=(d-h)/_,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mu extends Yi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ue(0,0,t,e),this.scissorTest=!1,this.viewport=new ue(0,0,t,e);const i={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Ee(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,i=t.textures.length;n<i;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Dl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends Mu{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Ul extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Su extends Ee{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=He,this.minFilter=He,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Ms=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],g=r[o+2],v=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=g,t[e+3]=v;return}if(u!==v||c!==d||l!==f||h!==g){let m=1-a;const p=c*d+l*f+h*g+u*v,_=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const A=Math.sqrt(y),E=Math.atan2(A,p*_);m=Math.sin(m*E)/A,a=Math.sin(a*E)/A}const x=a*_;if(c=c*m+d*x,l=l*m+f*x,h=h*m+g*x,u=u*m+v*x,m===1-a){const A=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=A,l*=A,h*=A,u*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],g=r[o+3];return t[e]=a*g+h*u+c*f-l*d,t[e+1]=c*g+h*d+l*u-a*f,t[e+2]=l*g+h*f+a*d-c*u,t[e+3]=h*g-a*u-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),u=a(r/2),d=c(n/2),f=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-c)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-l)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(c+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ae(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const f=1-e;return this._w=f*o+e*this._w,this._x=f*n+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),u=Math.sin((1-e)*h)/l,d=Math.sin(e*h)/l;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class Y{constructor(t=0,e=0,n=0){Y.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Wa.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Wa.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*i-a*n),h=2*(a*e-r*i),u=2*(r*n-o*e);return this.x=e+c*l+o*u-a*h,this.y=n+c*h+a*l-r*u,this.z=i+c*u+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Tr.copy(this).projectOnVector(t),this.sub(Tr)}reflect(t){return this.sub(Tr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Tr=new Y,Wa=new Ms;class ui{constructor(t=new Y(1/0,1/0,1/0),e=new Y(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint($e.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint($e.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=$e.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,$e):$e.fromBufferAttribute(r,o),$e.applyMatrix4(t.matrixWorld),this.expandByPoint($e);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),As.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),As.copy(n.boundingBox)),As.applyMatrix4(t.matrixWorld),this.union(As)}const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,$e),$e.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(es),Cs.subVectors(this.max,es),mi.subVectors(t.a,es),gi.subVectors(t.b,es),vi.subVectors(t.c,es),Nn.subVectors(gi,mi),Fn.subVectors(vi,gi),Yn.subVectors(mi,vi);let e=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Yn.z,Yn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Yn.z,0,-Yn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Yn.y,Yn.x,0];return!Ar(e,mi,gi,vi,Cs)||(e=[1,0,0,0,1,0,0,0,1],!Ar(e,mi,gi,vi,Cs))?!1:(Rs.crossVectors(Nn,Fn),e=[Rs.x,Rs.y,Rs.z],Ar(e,mi,gi,vi,Cs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,$e).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize($e).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const vn=[new Y,new Y,new Y,new Y,new Y,new Y,new Y,new Y],$e=new Y,As=new ui,mi=new Y,gi=new Y,vi=new Y,Nn=new Y,Fn=new Y,Yn=new Y,es=new Y,Cs=new Y,Rs=new Y,Zn=new Y;function Ar(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Zn.fromArray(s,r);const a=i.x*Math.abs(Zn.x)+i.y*Math.abs(Zn.y)+i.z*Math.abs(Zn.z),c=t.dot(Zn),l=e.dot(Zn),h=n.dot(Zn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Eu=new ui,ns=new Y,Cr=new Y;class $i{constructor(t=new Y,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Eu.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ns.subVectors(t,this.center);const e=ns.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ns,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Cr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ns.copy(t.center).add(Cr)),this.expandByPoint(ns.copy(t.center).sub(Cr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const _n=new Y,Rr=new Y,Ps=new Y,On=new Y,Pr=new Y,Ls=new Y,Lr=new Y;let ha=class{constructor(t=new Y,e=new Y(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,_n)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=_n.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(_n.copy(this.origin).addScaledVector(this.direction,e),_n.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Rr.copy(t).add(e).multiplyScalar(.5),Ps.copy(e).sub(t).normalize(),On.copy(this.origin).sub(Rr);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ps),a=On.dot(this.direction),c=-On.dot(Ps),l=On.lengthSq(),h=Math.abs(1-o*o);let u,d,f,g;if(h>0)if(u=o*c-a,d=o*a-c,g=r*h,u>=0)if(d>=-g)if(d<=g){const v=1/h;u*=v,d*=v,f=u*(u+o*d+2*a)+d*(o*u+d+2*c)+l}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Rr).addScaledVector(Ps,d),f}intersectSphere(t,e){_n.subVectors(t.center,this.origin);const n=_n.dot(this.direction),i=_n.dot(_n)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),h>=0?(r=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,c=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,c=(t.min.z-d.z)*u),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,_n)!==null}intersectTriangle(t,e,n,i,r){Pr.subVectors(e,t),Ls.subVectors(n,t),Lr.crossVectors(Pr,Ls);let o=this.direction.dot(Lr),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;On.subVectors(this.origin,t);const c=a*this.direction.dot(Ls.crossVectors(On,Ls));if(c<0)return null;const l=a*this.direction.dot(Pr.cross(On));if(l<0||c+l>o)return null;const h=-a*On.dot(Lr);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ee{constructor(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m){ee.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m)}set(t,e,n,i,r,o,a,c,l,h,u,d,f,g,v,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ee().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/_i.setFromMatrixColumn(t,0).length(),r=1/_i.setFromMatrixColumn(t,1).length(),o=1/_i.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=-c*u,e[8]=l,e[1]=f+g*l,e[5]=d-v*l,e[9]=-a*c,e[2]=v-d*l,e[6]=g+f*l,e[10]=o*c}else if(t.order==="YXZ"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d+v*a,e[4]=g*a-f,e[8]=o*l,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-g,e[6]=v+d*a,e[10]=o*c}else if(t.order==="ZXY"){const d=c*h,f=c*u,g=l*h,v=l*u;e[0]=d-v*a,e[4]=-o*u,e[8]=g+f*a,e[1]=f+g*a,e[5]=o*h,e[9]=v-d*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const d=o*h,f=o*u,g=a*h,v=a*u;e[0]=c*h,e[4]=g*l-f,e[8]=d*l+v,e[1]=c*u,e[5]=v*l+d,e[9]=f*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=v-d*u,e[8]=g*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=f*u+g,e[10]=d-v*u}else if(t.order==="XZY"){const d=o*c,f=o*l,g=a*c,v=a*l;e[0]=c*h,e[4]=-u,e[8]=l*h,e[1]=d*u+v,e[5]=o*h,e[9]=f*u-g,e[2]=g*u-f,e[6]=a*h,e[10]=v*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(wu,t,bu)}lookAt(t,e,n){const i=this.elements;return Be.subVectors(t,e),Be.lengthSq()===0&&(Be.z=1),Be.normalize(),zn.crossVectors(n,Be),zn.lengthSq()===0&&(Math.abs(n.z)===1?Be.x+=1e-4:Be.z+=1e-4,Be.normalize(),zn.crossVectors(n,Be)),zn.normalize(),Is.crossVectors(Be,zn),i[0]=zn.x,i[4]=Is.x,i[8]=Be.x,i[1]=zn.y,i[5]=Is.y,i[9]=Be.y,i[2]=zn.z,i[6]=Is.z,i[10]=Be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],u=n[5],d=n[9],f=n[13],g=n[2],v=n[6],m=n[10],p=n[14],_=n[3],y=n[7],x=n[11],A=n[15],E=i[0],C=i[4],I=i[8],w=i[12],S=i[1],D=i[5],z=i[9],N=i[13],O=i[2],B=i[6],M=i[10],L=i[14],T=i[3],F=i[7],k=i[11],q=i[15];return r[0]=o*E+a*S+c*O+l*T,r[4]=o*C+a*D+c*B+l*F,r[8]=o*I+a*z+c*M+l*k,r[12]=o*w+a*N+c*L+l*q,r[1]=h*E+u*S+d*O+f*T,r[5]=h*C+u*D+d*B+f*F,r[9]=h*I+u*z+d*M+f*k,r[13]=h*w+u*N+d*L+f*q,r[2]=g*E+v*S+m*O+p*T,r[6]=g*C+v*D+m*B+p*F,r[10]=g*I+v*z+m*M+p*k,r[14]=g*w+v*N+m*L+p*q,r[3]=_*E+y*S+x*O+A*T,r[7]=_*C+y*D+x*B+A*F,r[11]=_*I+y*z+x*M+A*k,r[15]=_*w+y*N+x*L+A*q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],u=t[6],d=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15];return g*(+r*c*u-i*l*u-r*a*d+n*l*d+i*a*f-n*c*f)+v*(+e*c*f-e*l*d+r*o*d-i*o*f+i*l*h-r*c*h)+m*(+e*l*u-e*a*f-r*o*u+n*o*f+r*a*h-n*l*h)+p*(-i*a*h-e*c*u+e*a*d+i*o*u-n*o*d+n*c*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],u=t[9],d=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],_=u*m*l-v*d*l+v*c*f-a*m*f-u*c*p+a*d*p,y=g*d*l-h*m*l-g*c*f+o*m*f+h*c*p-o*d*p,x=h*v*l-g*u*l+g*a*f-o*v*f-h*a*p+o*u*p,A=g*u*c-h*v*c-g*a*d+o*v*d+h*a*m-o*u*m,E=e*_+n*y+i*x+r*A;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return t[0]=_*C,t[1]=(v*d*r-u*m*r-v*i*f+n*m*f+u*i*p-n*d*p)*C,t[2]=(a*m*r-v*c*r+v*i*l-n*m*l-a*i*p+n*c*p)*C,t[3]=(u*c*r-a*d*r-u*i*l+n*d*l+a*i*f-n*c*f)*C,t[4]=y*C,t[5]=(h*m*r-g*d*r+g*i*f-e*m*f-h*i*p+e*d*p)*C,t[6]=(g*c*r-o*m*r-g*i*l+e*m*l+o*i*p-e*c*p)*C,t[7]=(o*d*r-h*c*r+h*i*l-e*d*l-o*i*f+e*c*f)*C,t[8]=x*C,t[9]=(g*u*r-h*v*r-g*n*f+e*v*f+h*n*p-e*u*p)*C,t[10]=(o*v*r-g*a*r+g*n*l-e*v*l-o*n*p+e*a*p)*C,t[11]=(h*a*r-o*u*r-h*n*l+e*u*l+o*n*f-e*a*f)*C,t[12]=A*C,t[13]=(h*v*i-g*u*i+g*n*d-e*v*d-h*n*m+e*u*m)*C,t[14]=(g*a*i-o*v*i-g*n*c+e*v*c+o*n*m-e*a*m)*C,t[15]=(o*u*i-h*a*i+h*n*c-e*u*c-o*n*d+e*a*d)*C,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,u=a+a,d=r*l,f=r*h,g=r*u,v=o*h,m=o*u,p=a*u,_=c*l,y=c*h,x=c*u,A=n.x,E=n.y,C=n.z;return i[0]=(1-(v+p))*A,i[1]=(f+x)*A,i[2]=(g-y)*A,i[3]=0,i[4]=(f-x)*E,i[5]=(1-(d+p))*E,i[6]=(m+_)*E,i[7]=0,i[8]=(g+y)*C,i[9]=(m-_)*C,i[10]=(1-(d+v))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=_i.set(i[0],i[1],i[2]).length();const o=_i.set(i[4],i[5],i[6]).length(),a=_i.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],je.copy(this);const l=1/r,h=1/o,u=1/a;return je.elements[0]*=l,je.elements[1]*=l,je.elements[2]*=l,je.elements[4]*=h,je.elements[5]*=h,je.elements[6]*=h,je.elements[8]*=u,je.elements[9]*=u,je.elements[10]*=u,e.setFromRotationMatrix(je),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o,a=Pn){const c=this.elements,l=2*r/(e-t),h=2*r/(n-i),u=(e+t)/(e-t),d=(n+i)/(n-i);let f,g;if(a===Pn)f=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===pr)f=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Pn){const c=this.elements,l=1/(e-t),h=1/(n-i),u=1/(o-r),d=(e+t)*l,f=(n+i)*h;let g,v;if(a===Pn)g=(o+r)*u,v=-2*u;else if(a===pr)g=r*u,v=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-f,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const _i=new Y,je=new ee,wu=new Y(0,0,0),bu=new Y(1,1,1),zn=new Y,Is=new Y,Be=new Y,Xa=new ee,qa=new Ms;class fn{constructor(t=0,e=0,n=0,i=fn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ae(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ae(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Xa.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Xa,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return qa.setFromEuler(this),this.setFromQuaternion(qa,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fn.DEFAULT_ORDER="XYZ";class ua{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Tu=0;const Ya=new Y,xi=new Ms,xn=new ee,Ds=new Y,is=new Y,Au=new Y,Cu=new Ms,Za=new Y(1,0,0),$a=new Y(0,1,0),ja=new Y(0,0,1),Ka={type:"added"},Ru={type:"removed"},yi={type:"childadded",child:null},Ir={type:"childremoved",child:null};class xe extends Yi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tu++}),this.uuid=Zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new Y,e=new fn,n=new Ms,i=new Y(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ee},normalMatrix:{value:new zt}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ua,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.multiply(xi),this}rotateOnWorldAxis(t,e){return xi.setFromAxisAngle(t,e),this.quaternion.premultiply(xi),this}rotateX(t){return this.rotateOnAxis(Za,t)}rotateY(t){return this.rotateOnAxis($a,t)}rotateZ(t){return this.rotateOnAxis(ja,t)}translateOnAxis(t,e){return Ya.copy(t).applyQuaternion(this.quaternion),this.position.add(Ya.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Za,t)}translateY(t){return this.translateOnAxis($a,t)}translateZ(t){return this.translateOnAxis(ja,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Ds.copy(t):Ds.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(is,Ds,this.up):xn.lookAt(Ds,is,this.up),this.quaternion.setFromRotationMatrix(xn),i&&(xn.extractRotation(i.matrixWorld),xi.setFromRotationMatrix(xn),this.quaternion.premultiply(xi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ka),yi.child=t,this.dispatchEvent(yi),yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ru),Ir.child=t,this.dispatchEvent(Ir),Ir.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ka),yi.child=t,this.dispatchEvent(yi),yi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,t,Au),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(is,Cu,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const u=c[l];r(t.shapes,u)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}xe.DEFAULT_UP=new Y(0,1,0);xe.DEFAULT_MATRIX_AUTO_UPDATE=!0;xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ke=new Y,yn=new Y,Dr=new Y,Mn=new Y,Mi=new Y,Si=new Y,Ja=new Y,Ur=new Y,Nr=new Y,Fr=new Y,Or=new ue,zr=new ue,Br=new ue;class tn{constructor(t=new Y,e=new Y,n=new Y){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ke.subVectors(t,e),i.cross(Ke);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ke.subVectors(i,e),yn.subVectors(n,e),Dr.subVectors(t,e);const o=Ke.dot(Ke),a=Ke.dot(yn),c=Ke.dot(Dr),l=yn.dot(yn),h=yn.dot(Dr),u=o*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*c-a*h)*d,g=(o*h-a*c)*d;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Mn)===null?!1:Mn.x>=0&&Mn.y>=0&&Mn.x+Mn.y<=1}static getInterpolation(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,Mn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Mn.x),c.addScaledVector(o,Mn.y),c.addScaledVector(a,Mn.z),c)}static getInterpolatedAttribute(t,e,n,i,r,o){return Or.setScalar(0),zr.setScalar(0),Br.setScalar(0),Or.fromBufferAttribute(t,e),zr.fromBufferAttribute(t,n),Br.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Or,r.x),o.addScaledVector(zr,r.y),o.addScaledVector(Br,r.z),o}static isFrontFacing(t,e,n,i){return Ke.subVectors(n,e),yn.subVectors(t,e),Ke.cross(yn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ke.subVectors(this.c,this.b),yn.subVectors(this.a,this.b),Ke.cross(yn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return tn.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;Mi.subVectors(i,n),Si.subVectors(r,n),Ur.subVectors(t,n);const c=Mi.dot(Ur),l=Si.dot(Ur);if(c<=0&&l<=0)return e.copy(n);Nr.subVectors(t,i);const h=Mi.dot(Nr),u=Si.dot(Nr);if(h>=0&&u<=h)return e.copy(i);const d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(Mi,o);Fr.subVectors(t,r);const f=Mi.dot(Fr),g=Si.dot(Fr);if(g>=0&&f<=g)return e.copy(r);const v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(Si,a);const m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Ja.subVectors(r,i),a=(u-h)/(u-h+(f-g)),e.copy(i).addScaledVector(Ja,a);const p=1/(m+v+d);return o=v*p,a=d*p,e.copy(n).addScaledVector(Mi,o).addScaledVector(Si,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Nl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Bn={h:0,s:0,l:0},Us={h:0,s:0,l:0};function kr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}class Lt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=qt.workingColorSpace){if(t=la(t,1),e=Ae(e,0,1),n=Ae(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=kr(o,r,t+1/3),this.g=kr(o,r,t),this.b=kr(o,r,t-1/3)}return qt.toWorkingColorSpace(this,i),this}setStyle(t,e=Le){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const n=Nl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ln(t.r),this.g=Ln(t.g),this.b=Ln(t.b),this}copyLinearToSRGB(t){return this.r=Fi(t.r),this.g=Fi(t.g),this.b=Fi(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return qt.fromWorkingColorSpace(Te.copy(this),t),Math.round(Ae(Te.r*255,0,255))*65536+Math.round(Ae(Te.g*255,0,255))*256+Math.round(Ae(Te.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(Te.copy(this),e);const n=Te.r,i=Te.g,r=Te.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const u=o-a;switch(l=h<=.5?u/(o+a):u/(2-o-a),o){case n:c=(i-r)/u+(i<r?6:0);break;case i:c=(r-n)/u+2;break;case r:c=(n-i)/u+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=Le){qt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,n=Te.g,i=Te.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Bn),this.setHSL(Bn.h+t,Bn.s+e,Bn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Bn),t.getHSL(Us);const n=ms(Bn.h,Us.h,e),i=ms(Bn.s,Us.s,e),r=ms(Bn.l,Us.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new Lt;Lt.NAMES=Nl;let Pu=0,ji=class extends Yi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pu++}),this.uuid=Zi(),this.name="",this.blending=Ui,this.side=Xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ho,this.blendDst=uo,this.blendEquation=si,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Lt(0,0,0),this.blendAlpha=0,this.depthFunc=Bi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Na,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=fi,this.stencilZFail=fi,this.stencilZPass=fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ui&&(n.blending=this.blending),this.side!==Xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ho&&(n.blendSrc=this.blendSrc),this.blendDst!==uo&&(n.blendDst=this.blendDst),this.blendEquation!==si&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Na&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}};class Fl extends ji{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.combine=_l,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new Y,Ns=new Vt;class _e{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Fa,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ns.fromBufferAttribute(this,e),Ns.applyMatrix3(t),this.setXY(e,Ns.x,Ns.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pi(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pi(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pi(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),r=Re(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Fa&&(t.usage=this.usage),t}}class Ol extends _e{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class zl extends _e{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class me extends _e{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Lu=0;const We=new ee,Hr=new xe,Ei=new Y,ke=new ui,ss=new ui,Se=new Y;class Oe extends Yi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lu++}),this.uuid=Zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Il(t)?zl:Ol)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return We.makeRotationFromQuaternion(t),this.applyMatrix4(We),this}rotateX(t){return We.makeRotationX(t),this.applyMatrix4(We),this}rotateY(t){return We.makeRotationY(t),this.applyMatrix4(We),this}rotateZ(t){return We.makeRotationZ(t),this.applyMatrix4(We),this}translate(t,e,n){return We.makeTranslation(t,e,n),this.applyMatrix4(We),this}scale(t,e,n){return We.makeScale(t,e,n),this.applyMatrix4(We),this}lookAt(t){return Hr.lookAt(t),Hr.updateMatrix(),this.applyMatrix4(Hr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let i=0,r=t.length;i<r;i++){const o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new me(n,3))}else{for(let n=0,i=e.count;n<i;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ui);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Y(-1/0,-1/0,-1/0),new Y(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];ke.setFromBufferAttribute(r),this.morphTargetsRelative?(Se.addVectors(this.boundingBox.min,ke.min),this.boundingBox.expandByPoint(Se),Se.addVectors(this.boundingBox.max,ke.max),this.boundingBox.expandByPoint(Se)):(this.boundingBox.expandByPoint(ke.min),this.boundingBox.expandByPoint(ke.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $i);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Y,1/0);return}if(t){const n=this.boundingSphere.center;if(ke.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];ss.setFromBufferAttribute(a),this.morphTargetsRelative?(Se.addVectors(ke.min,ss.min),ke.expandByPoint(Se),Se.addVectors(ke.max,ss.max),ke.expandByPoint(Se)):(ke.expandByPoint(ss.min),ke.expandByPoint(ss.max))}ke.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)Se.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(Se));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)Se.fromBufferAttribute(a,l),c&&(Ei.fromBufferAttribute(t,l),Se.add(Ei)),i=Math.max(i,n.distanceToSquared(Se))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _e(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let I=0;I<n.count;I++)a[I]=new Y,c[I]=new Y;const l=new Y,h=new Y,u=new Y,d=new Vt,f=new Vt,g=new Vt,v=new Y,m=new Y;function p(I,w,S){l.fromBufferAttribute(n,I),h.fromBufferAttribute(n,w),u.fromBufferAttribute(n,S),d.fromBufferAttribute(r,I),f.fromBufferAttribute(r,w),g.fromBufferAttribute(r,S),h.sub(l),u.sub(l),f.sub(d),g.sub(d);const D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(D),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),a[I].add(v),a[w].add(v),a[S].add(v),c[I].add(m),c[w].add(m),c[S].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:t.count}]);for(let I=0,w=_.length;I<w;++I){const S=_[I],D=S.start,z=S.count;for(let N=D,O=D+z;N<O;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new Y,x=new Y,A=new Y,E=new Y;function C(I){A.fromBufferAttribute(i,I),E.copy(A);const w=a[I];y.copy(w),y.sub(A.multiplyScalar(A.dot(w))).normalize(),x.crossVectors(E,w);const D=x.dot(c[I])<0?-1:1;o.setXYZW(I,y.x,y.y,y.z,D)}for(let I=0,w=_.length;I<w;++I){const S=_[I],D=S.start,z=S.count;for(let N=D,O=D+z;N<O;N+=3)C(t.getX(N+0)),C(t.getX(N+1)),C(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _e(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new Y,r=new Y,o=new Y,a=new Y,c=new Y,l=new Y,h=new Y,u=new Y;if(t)for(let d=0,f=t.count;d<f;d+=3){const g=t.getX(d+0),v=t.getX(d+1),m=t.getX(d+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Se.fromBufferAttribute(t,e),Se.normalize(),t.setXYZ(e,Se.x,Se.y,Se.z)}toNonIndexed(){function t(a,c){const l=a.array,h=a.itemSize,u=a.normalized,d=new l.constructor(c.length*h);let f=0,g=0;for(let v=0,m=c.length;v<m;v++){a.isInterleavedBufferAttribute?f=c[v]*a.data.stride+a.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new _e(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Oe,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,u=l.length;h<u;h++){const d=l[h],f=t(d,n);c.push(f)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];h.push(f.toJSON(t.data))}h.length>0&&(i[c]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(e))}const r=t.morphAttributes;for(const l in r){const h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,h=o.length;l<h;l++){const u=o[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Qa=new ee,$n=new ha,Fs=new $i,tc=new Y,Os=new Y,zs=new Y,Bs=new Y,Vr=new Y,ks=new Y,ec=new Y,Hs=new Y;class Yt extends xe{constructor(t=new Oe,e=new Fl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){ks.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],u=r[c];h!==0&&(Vr.fromBufferAttribute(u,t),o?ks.addScaledVector(Vr,h):ks.addScaledVector(Vr.sub(e),h))}e.add(ks)}return e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Fs.copy(n.boundingSphere),Fs.applyMatrix4(r),$n.copy(t.ray).recast(t.near),!(Fs.containsPoint($n.origin)===!1&&($n.intersectSphere(Fs,tc)===null||$n.origin.distanceToSquared(tc)>(t.far-t.near)**2))&&(Qa.copy(r).invert(),$n.copy(t.ray).applyMatrix4(Qa),!(n.boundingBox!==null&&$n.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,$n)))}_computeIntersections(t,e,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=y;x<A;x+=3){const E=a.getX(x),C=a.getX(x+1),I=a.getX(x+2);i=Vs(this,p,t,n,l,h,u,E,C,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(a.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=a.getX(m),y=a.getX(m+1),x=a.getX(m+2);i=Vs(this,o,t,n,l,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],_=Math.max(m.start,f.start),y=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let x=_,A=y;x<A;x+=3){const E=x,C=x+1,I=x+2;i=Vs(this,p,t,n,l,h,u,E,C,I),i&&(i.faceIndex=Math.floor(x/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{const g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){const _=m,y=m+1,x=m+2;i=Vs(this,o,t,n,l,h,u,_,y,x),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}}function Iu(s,t,e,n,i,r,o,a){let c;if(t.side===De?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Xn,a),c===null)return null;Hs.copy(a),Hs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Hs);return l<e.near||l>e.far?null:{distance:l,point:Hs.clone(),object:s}}function Vs(s,t,e,n,i,r,o,a,c,l){s.getVertexPosition(a,Os),s.getVertexPosition(c,zs),s.getVertexPosition(l,Bs);const h=Iu(s,t,e,n,Os,zs,Bs,ec);if(h){const u=new Y;tn.getBarycoord(ec,Os,zs,Bs,u),i&&(h.uv=tn.getInterpolatedAttribute(i,a,c,l,u,new Vt)),r&&(h.uv1=tn.getInterpolatedAttribute(r,a,c,l,u,new Vt)),o&&(h.normal=tn.getInterpolatedAttribute(o,a,c,l,u,new Y),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new Y,materialIndex:0};tn.getNormal(Os,zs,Bs,d.normal),h.face=d,h.barycoord=u}return h}class Ie extends Oe{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new me(l,3)),this.setAttribute("normal",new me(h,3)),this.setAttribute("uv",new me(u,2));function g(v,m,p,_,y,x,A,E,C,I,w){const S=x/C,D=A/I,z=x/2,N=A/2,O=E/2,B=C+1,M=I+1;let L=0,T=0;const F=new Y;for(let k=0;k<M;k++){const q=k*D-N;for(let H=0;H<B;H++){const et=H*S-z;F[v]=et*_,F[m]=q*y,F[p]=O,l.push(F.x,F.y,F.z),F[v]=0,F[m]=0,F[p]=E>0?1:-1,h.push(F.x,F.y,F.z),u.push(H/C),u.push(1-k/I),L+=1}}for(let k=0;k<I;k++)for(let q=0;q<C;q++){const H=d+q+B*k,et=d+q+B*(k+1),Z=d+(q+1)+B*(k+1),J=d+(q+1)+B*k;c.push(H,et,J),c.push(et,Z,J),T+=6}a.addGroup(f,T,w),f+=T,d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ie(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Wi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Pe(s){const t={};for(let e=0;e<s.length;e++){const n=Wi(s[e]);for(const i in n)t[i]=n[i]}return t}function Du(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Bl(s){const t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Uu={clone:Wi,merge:Pe};var Nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends ji{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Nu,this.fragmentShader=Fu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Wi(t.uniforms),this.uniformsGroups=Du(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class kl extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Pn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const kn=new Y,nc=new Vt,ic=new Vt;class Xe extends kl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_s*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ps*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _s*2*Math.atan(Math.tan(ps*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){kn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(kn.x,kn.y).multiplyScalar(-t/kn.z),kn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(kn.x,kn.y).multiplyScalar(-t/kn.z)}getViewSize(t,e){return this.getViewBounds(t,nc,ic),e.subVectors(ic,nc)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ps*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const wi=-90,bi=1;class Ou extends xe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Xe(wi,bi,t,e);i.layers=this.layers,this.add(i);const r=new Xe(wi,bi,t,e);r.layers=this.layers,this.add(r);const o=new Xe(wi,bi,t,e);o.layers=this.layers,this.add(o);const a=new Xe(wi,bi,t,e);a.layers=this.layers,this.add(a);const c=new Xe(wi,bi,t,e);c.layers=this.layers,this.add(c);const l=new Xe(wi,bi,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,c]=e;for(const l of e)this.remove(l);if(t===Pn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===pr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,r),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,c),t.setRenderTarget(n,4,i),t.render(e,l),n.texture.generateMipmaps=v,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Hl extends Ee{constructor(t,e,n,i,r,o,a,c,l,h){t=t!==void 0?t:[],e=e!==void 0?e:ki,super(t,e,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class zu extends li{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Hl(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ie(5,5,5),r=new pn({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:De,blending:Vn});r.uniforms.tEquirect.value=e;const o=new Yt(i,r),a=e.minFilter;return e.minFilter===ai&&(e.minFilter=un),new Ou(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const Gr=new Y,Bu=new Y,ku=new zt;class ei{constructor(t=new Y(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=Gr.subVectors(n,e).cross(Bu.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Gr),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ku.getNormalMatrix(t),i=this.coplanarPoint(Gr).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const jn=new $i,Gs=new Y;class da{constructor(t=new ei,e=new ei,n=new ei,i=new ei,r=new ei,o=new ei){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Pn){const n=this.planes,i=t.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],u=i[6],d=i[7],f=i[8],g=i[9],v=i[10],m=i[11],p=i[12],_=i[13],y=i[14],x=i[15];if(n[0].setComponents(c-r,d-l,m-f,x-p).normalize(),n[1].setComponents(c+r,d+l,m+f,x+p).normalize(),n[2].setComponents(c+o,d+h,m+g,x+_).normalize(),n[3].setComponents(c-o,d-h,m-g,x-_).normalize(),n[4].setComponents(c-a,d-u,m-v,x-y).normalize(),e===Pn)n[5].setComponents(c+a,d+u,m+v,x+y).normalize();else if(e===pr)n[5].setComponents(a,u,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),jn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),jn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(jn)}intersectsSprite(t){return jn.center.set(0,0,0),jn.radius=.7071067811865476,jn.applyMatrix4(t.matrixWorld),this.intersectsSphere(jn)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Gs.x=i.normal.x>0?t.max.x:t.min.x,Gs.y=i.normal.y>0?t.max.y:t.min.y,Gs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Gs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Vl(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Hu(s){const t=new WeakMap;function e(a,c){const l=a.array,h=a.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),a.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,c,l){const h=c.array,u=c.updateRanges;if(s.bindBuffer(l,a),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){const g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){const v=u[f];s.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=t.get(a);c&&(s.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class Ki extends Oe{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,u=t/a,d=e/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){const _=p*d-o;for(let y=0;y<l;y++){const x=y*u-r;g.push(x,-_,0),v.push(0,0,1),m.push(y/a),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let _=0;_<a;_++){const y=_+l*p,x=_+l*(p+1),A=_+1+l*(p+1),E=_+1+l*p;f.push(y,x,E),f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ki(t.width,t.height,t.widthSegments,t.heightSegments)}}var Vu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gu=`#ifdef USE_ALPHAHASH
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
#endif`,Wu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zu=`#ifdef USE_AOMAP
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
#endif`,$u=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ju=`#ifdef USE_BATCHING
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
#endif`,Ku=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ju=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,td=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ed=`#ifdef USE_IRIDESCENCE
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
#endif`,nd=`#ifdef USE_BUMPMAP
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
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,od=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,cd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ld=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,hd=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ud=`#define PI 3.141592653589793
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
} // validated`,dd=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,fd=`vec3 transformedNormal = objectNormal;
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
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,md=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yd=`#ifdef USE_ENVMAP
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
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Sd=`#ifdef USE_ENVMAP
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
#endif`,Ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wd=`#ifdef USE_ENVMAP
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
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Cd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
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
}`,Pd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Ld=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Id=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dd=`uniform bool receiveShadow;
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
#endif`,Ud=`#ifdef USE_ENVMAP
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
#endif`,Nd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Od=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
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
#endif`,kd=`struct PhysicalMaterial {
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
}`,Hd=`
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
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Zd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,$d=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,jd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Kd=`#if defined( USE_POINTS_UV )
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
#endif`,Jd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Qd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ef=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sf=`#ifdef USE_MORPHTARGETS
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
#endif`,rf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,of=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,af=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,cf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hf=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,uf=`#ifdef USE_NORMALMAP
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
#endif`,df=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ff=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vf=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_f=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,yf=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Sf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ef=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,wf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bf=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Tf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Af=`float getShadowMask() {
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
}`,Cf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rf=`#ifdef USE_SKINNING
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
#endif`,Pf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Lf=`#ifdef USE_SKINNING
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
#endif`,If=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Df=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Uf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Nf=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ff=`#ifdef USE_TRANSMISSION
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
#endif`,Of=`#ifdef USE_TRANSMISSION
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
#endif`,zf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Hf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Vf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Gf=`uniform sampler2D t2D;
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
}`,Wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xf=`#ifdef ENVMAP_TYPE_CUBE
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
}`,qf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Yf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zf=`#include <common>
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
}`,$f=`#if DEPTH_PACKING == 3200
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
}`,jf=`#define DISTANCE
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
}`,Kf=`#define DISTANCE
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
}`,Jf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`uniform float scale;
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
}`,ep=`uniform vec3 diffuse;
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
}`,np=`#include <common>
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
}`,ip=`uniform vec3 diffuse;
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
}`,sp=`#define LAMBERT
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
}`,rp=`#define LAMBERT
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
}`,op=`#define MATCAP
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
}`,ap=`#define MATCAP
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
}`,cp=`#define NORMAL
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
}`,lp=`#define NORMAL
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
}`,hp=`#define PHONG
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
}`,up=`#define PHONG
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
}`,dp=`#define STANDARD
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
}`,fp=`#define STANDARD
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
}`,pp=`#define TOON
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
}`,mp=`#define TOON
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
}`,gp=`uniform float size;
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
}`,vp=`uniform vec3 diffuse;
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
}`,_p=`#include <common>
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
}`,xp=`uniform vec3 color;
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
}`,yp=`uniform float rotation;
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
}`,Mp=`uniform vec3 diffuse;
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
}`,kt={alphahash_fragment:Vu,alphahash_pars_fragment:Gu,alphamap_fragment:Wu,alphamap_pars_fragment:Xu,alphatest_fragment:qu,alphatest_pars_fragment:Yu,aomap_fragment:Zu,aomap_pars_fragment:$u,batching_pars_vertex:ju,batching_vertex:Ku,begin_vertex:Ju,beginnormal_vertex:Qu,bsdfs:td,iridescence_fragment:ed,bumpmap_pars_fragment:nd,clipping_planes_fragment:id,clipping_planes_pars_fragment:sd,clipping_planes_pars_vertex:rd,clipping_planes_vertex:od,color_fragment:ad,color_pars_fragment:cd,color_pars_vertex:ld,color_vertex:hd,common:ud,cube_uv_reflection_fragment:dd,defaultnormal_vertex:fd,displacementmap_pars_vertex:pd,displacementmap_vertex:md,emissivemap_fragment:gd,emissivemap_pars_fragment:vd,colorspace_fragment:_d,colorspace_pars_fragment:xd,envmap_fragment:yd,envmap_common_pars_fragment:Md,envmap_pars_fragment:Sd,envmap_pars_vertex:Ed,envmap_physical_pars_fragment:Ud,envmap_vertex:wd,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:Ad,fog_pars_fragment:Cd,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Pd,lights_lambert_fragment:Ld,lights_lambert_pars_fragment:Id,lights_pars_begin:Dd,lights_toon_fragment:Nd,lights_toon_pars_fragment:Fd,lights_phong_fragment:Od,lights_phong_pars_fragment:zd,lights_physical_fragment:Bd,lights_physical_pars_fragment:kd,lights_fragment_begin:Hd,lights_fragment_maps:Vd,lights_fragment_end:Gd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Xd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Yd,map_fragment:Zd,map_pars_fragment:$d,map_particle_fragment:jd,map_particle_pars_fragment:Kd,metalnessmap_fragment:Jd,metalnessmap_pars_fragment:Qd,morphinstance_vertex:tf,morphcolor_vertex:ef,morphnormal_vertex:nf,morphtarget_pars_vertex:sf,morphtarget_vertex:rf,normal_fragment_begin:of,normal_fragment_maps:af,normal_pars_fragment:cf,normal_pars_vertex:lf,normal_vertex:hf,normalmap_pars_fragment:uf,clearcoat_normal_fragment_begin:df,clearcoat_normal_fragment_maps:ff,clearcoat_pars_fragment:pf,iridescence_pars_fragment:mf,opaque_fragment:gf,packing:vf,premultiplied_alpha_fragment:_f,project_vertex:xf,dithering_fragment:yf,dithering_pars_fragment:Mf,roughnessmap_fragment:Sf,roughnessmap_pars_fragment:Ef,shadowmap_pars_fragment:wf,shadowmap_pars_vertex:bf,shadowmap_vertex:Tf,shadowmask_pars_fragment:Af,skinbase_vertex:Cf,skinning_pars_vertex:Rf,skinning_vertex:Pf,skinnormal_vertex:Lf,specularmap_fragment:If,specularmap_pars_fragment:Df,tonemapping_fragment:Uf,tonemapping_pars_fragment:Nf,transmission_fragment:Ff,transmission_pars_fragment:Of,uv_pars_fragment:zf,uv_pars_vertex:Bf,uv_vertex:kf,worldpos_vertex:Hf,background_vert:Vf,background_frag:Gf,backgroundCube_vert:Wf,backgroundCube_frag:Xf,cube_vert:qf,cube_frag:Yf,depth_vert:Zf,depth_frag:$f,distanceRGBA_vert:jf,distanceRGBA_frag:Kf,equirect_vert:Jf,equirect_frag:Qf,linedashed_vert:tp,linedashed_frag:ep,meshbasic_vert:np,meshbasic_frag:ip,meshlambert_vert:sp,meshlambert_frag:rp,meshmatcap_vert:op,meshmatcap_frag:ap,meshnormal_vert:cp,meshnormal_frag:lp,meshphong_vert:hp,meshphong_frag:up,meshphysical_vert:dp,meshphysical_frag:fp,meshtoon_vert:pp,meshtoon_frag:mp,points_vert:gp,points_frag:vp,shadow_vert:_p,shadow_frag:xp,sprite_vert:yp,sprite_frag:Mp},ht={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new zt}},envmap:{envMap:{value:null},envMapRotation:{value:new zt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new zt},normalScale:{value:new Vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0},uvTransform:{value:new zt}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new zt},alphaMap:{value:null},alphaMapTransform:{value:new zt},alphaTest:{value:0}}},ln={basic:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.fog]),vertexShader:kt.meshbasic_vert,fragmentShader:kt.meshbasic_frag},lambert:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)}}]),vertexShader:kt.meshlambert_vert,fragmentShader:kt.meshlambert_frag},phong:{uniforms:Pe([ht.common,ht.specularmap,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:kt.meshphong_vert,fragmentShader:kt.meshphong_frag},standard:{uniforms:Pe([ht.common,ht.envmap,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.roughnessmap,ht.metalnessmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag},toon:{uniforms:Pe([ht.common,ht.aomap,ht.lightmap,ht.emissivemap,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.gradientmap,ht.fog,ht.lights,{emissive:{value:new Lt(0)}}]),vertexShader:kt.meshtoon_vert,fragmentShader:kt.meshtoon_frag},matcap:{uniforms:Pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,ht.fog,{matcap:{value:null}}]),vertexShader:kt.meshmatcap_vert,fragmentShader:kt.meshmatcap_frag},points:{uniforms:Pe([ht.points,ht.fog]),vertexShader:kt.points_vert,fragmentShader:kt.points_frag},dashed:{uniforms:Pe([ht.common,ht.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:kt.linedashed_vert,fragmentShader:kt.linedashed_frag},depth:{uniforms:Pe([ht.common,ht.displacementmap]),vertexShader:kt.depth_vert,fragmentShader:kt.depth_frag},normal:{uniforms:Pe([ht.common,ht.bumpmap,ht.normalmap,ht.displacementmap,{opacity:{value:1}}]),vertexShader:kt.meshnormal_vert,fragmentShader:kt.meshnormal_frag},sprite:{uniforms:Pe([ht.sprite,ht.fog]),vertexShader:kt.sprite_vert,fragmentShader:kt.sprite_frag},background:{uniforms:{uvTransform:{value:new zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:kt.background_vert,fragmentShader:kt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new zt}},vertexShader:kt.backgroundCube_vert,fragmentShader:kt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:kt.cube_vert,fragmentShader:kt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:kt.equirect_vert,fragmentShader:kt.equirect_frag},distanceRGBA:{uniforms:Pe([ht.common,ht.displacementmap,{referencePosition:{value:new Y},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:kt.distanceRGBA_vert,fragmentShader:kt.distanceRGBA_frag},shadow:{uniforms:Pe([ht.lights,ht.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:kt.shadow_vert,fragmentShader:kt.shadow_frag}};ln.physical={uniforms:Pe([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new zt},clearcoatNormalScale:{value:new Vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new zt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new zt},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new zt},transmissionSamplerSize:{value:new Vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new zt},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new zt},anisotropyVector:{value:new Vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new zt}}]),vertexShader:kt.meshphysical_vert,fragmentShader:kt.meshphysical_frag};const Ws={r:0,b:0,g:0},Kn=new fn,Sp=new ee;function Ep(s,t,e,n,i,r,o){const a=new Lt(0);let c=r===!0?0:1,l,h,u=null,d=0,f=null;function g(_){let y=_.isScene===!0?_.background:null;return y&&y.isTexture&&(y=(_.backgroundBlurriness>0?e:t).get(y)),y}function v(_){let y=!1;const x=g(_);x===null?p(a,c):x&&x.isColor&&(p(x,1),y=!0);const A=s.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(_,y){const x=g(y);x&&(x.isCubeTexture||x.mapping===_r)?(h===void 0&&(h=new Yt(new Ie(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Wi(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:De,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Kn.copy(y.backgroundRotation),Kn.x*=-1,Kn.y*=-1,Kn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Kn.y*=-1,Kn.z*=-1),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Sp.makeRotationFromEuler(Kn)),h.material.toneMapped=qt.getTransfer(x.colorSpace)!==te,(u!==x||d!==x.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new Yt(new Ki(2,2),new pn({name:"BackgroundMaterial",uniforms:Wi(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Xn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,l.material.toneMapped=qt.getTransfer(x.colorSpace)!==te,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(u!==x||d!==x.version||f!==s.toneMapping)&&(l.material.needsUpdate=!0,u=x,d=x.version,f=s.toneMapping),l.layers.enableAll(),_.unshift(l,l.geometry,l.material,0,0,null))}function p(_,y){_.getRGB(Ws,Bl(s)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(_,y=1){a.set(_),c=y,p(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(_){c=_,p(a,c)},render:v,addToRenderList:m}}function wp(s,t){const e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(S,D,z,N,O){let B=!1;const M=u(N,z,D);r!==M&&(r=M,l(r.object)),B=f(S,N,z,O),B&&g(S,N,z,O),O!==null&&t.update(O,s.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,x(S,D,z,N),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(O).buffer))}function c(){return s.createVertexArray()}function l(S){return s.bindVertexArray(S)}function h(S){return s.deleteVertexArray(S)}function u(S,D,z){const N=z.wireframe===!0;let O=n[S.id];O===void 0&&(O={},n[S.id]=O);let B=O[D.id];B===void 0&&(B={},O[D.id]=B);let M=B[N];return M===void 0&&(M=d(c()),B[N]=M),M}function d(S){const D=[],z=[],N=[];for(let O=0;O<e;O++)D[O]=0,z[O]=0,N[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:N,object:S,attributes:{},index:null}}function f(S,D,z,N){const O=r.attributes,B=D.attributes;let M=0;const L=z.getAttributes();for(const T in L)if(L[T].location>=0){const k=O[T];let q=B[T];if(q===void 0&&(T==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),T==="instanceColor"&&S.instanceColor&&(q=S.instanceColor)),k===void 0||k.attribute!==q||q&&k.data!==q.data)return!0;M++}return r.attributesNum!==M||r.index!==N}function g(S,D,z,N){const O={},B=D.attributes;let M=0;const L=z.getAttributes();for(const T in L)if(L[T].location>=0){let k=B[T];k===void 0&&(T==="instanceMatrix"&&S.instanceMatrix&&(k=S.instanceMatrix),T==="instanceColor"&&S.instanceColor&&(k=S.instanceColor));const q={};q.attribute=k,k&&k.data&&(q.data=k.data),O[T]=q,M++}r.attributes=O,r.attributesNum=M,r.index=N}function v(){const S=r.newAttributes;for(let D=0,z=S.length;D<z;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const z=r.newAttributes,N=r.enabledAttributes,O=r.attributeDivisors;z[S]=1,N[S]===0&&(s.enableVertexAttribArray(S),N[S]=1),O[S]!==D&&(s.vertexAttribDivisor(S,D),O[S]=D)}function _(){const S=r.newAttributes,D=r.enabledAttributes;for(let z=0,N=D.length;z<N;z++)D[z]!==S[z]&&(s.disableVertexAttribArray(z),D[z]=0)}function y(S,D,z,N,O,B,M){M===!0?s.vertexAttribIPointer(S,D,z,O,B):s.vertexAttribPointer(S,D,z,N,O,B)}function x(S,D,z,N){v();const O=N.attributes,B=z.getAttributes(),M=D.defaultAttributeValues;for(const L in B){const T=B[L];if(T.location>=0){let F=O[L];if(F===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(F=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(F=S.instanceColor)),F!==void 0){const k=F.normalized,q=F.itemSize,H=t.get(F);if(H===void 0)continue;const et=H.buffer,Z=H.type,J=H.bytesPerElement,at=Z===s.INT||Z===s.UNSIGNED_INT||F.gpuType===na;if(F.isInterleavedBufferAttribute){const st=F.data,lt=st.stride,Et=F.offset;if(st.isInstancedInterleavedBuffer){for(let _t=0;_t<T.locationSize;_t++)p(T.location+_t,st.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let _t=0;_t<T.locationSize;_t++)m(T.location+_t);s.bindBuffer(s.ARRAY_BUFFER,et);for(let _t=0;_t<T.locationSize;_t++)y(T.location+_t,q/T.locationSize,Z,k,lt*J,(Et+q/T.locationSize*_t)*J,at)}else{if(F.isInstancedBufferAttribute){for(let st=0;st<T.locationSize;st++)p(T.location+st,F.meshPerAttribute);S.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=F.meshPerAttribute*F.count)}else for(let st=0;st<T.locationSize;st++)m(T.location+st);s.bindBuffer(s.ARRAY_BUFFER,et);for(let st=0;st<T.locationSize;st++)y(T.location+st,q/T.locationSize,Z,k,q*J,q/T.locationSize*st*J,at)}}else if(M!==void 0){const k=M[L];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(T.location,k);break;case 3:s.vertexAttrib3fv(T.location,k);break;case 4:s.vertexAttrib4fv(T.location,k);break;default:s.vertexAttrib1fv(T.location,k)}}}}_()}function A(){I();for(const S in n){const D=n[S];for(const z in D){const N=D[z];for(const O in N)h(N[O].object),delete N[O];delete D[z]}delete n[S]}}function E(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const z in D){const N=D[z];for(const O in N)h(N[O].object),delete N[O];delete D[z]}delete n[S.id]}function C(S){for(const D in n){const z=n[D];if(z[S.id]===void 0)continue;const N=z[S.id];for(const O in N)h(N[O].object),delete N[O];delete z[S.id]}}function I(){w(),o=!0,r!==i&&(r=i,l(r.object))}function w(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:I,resetDefaultState:w,dispose:A,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function bp(s,t,e){let n;function i(l){n=l}function r(l,h){s.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,u){u!==0&&(s.drawArraysInstanced(n,l,h,u),e.update(h,n,u))}function a(l,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,u);let f=0;for(let g=0;g<u;g++)f+=h[g];e.update(f,n,1)}function c(l,h,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<l.length;g++)o(l[g],h[g],d[g]);else{f.multiDrawArraysInstancedWEBGL(n,l,0,h,0,d,0,u);let g=0;for(let v=0;v<u;v++)g+=h[v]*d[v];e.update(g,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function Tp(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==en&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const I=C===ys&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==In&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==dn&&!I)}function c(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const u=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),_=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),x=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:_,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:A,maxSamples:E}}function Ap(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new ei,a=new zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){const g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||g===null||g.length===0||r&&!m)r?h(null):l();else{const _=r?0:n,y=_*4;let x=p.clippingState||null;c.value=x,x=h(g,d,y,f);for(let A=0;A!==y;++A)x[A]=e[A];p.clippingState=x,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,g){const v=u!==null?u.length:0;let m=null;if(v!==0){if(m=c.value,g!==!0||m===null){const p=f+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,x=f;y!==v;++y,x+=4)o.copy(u[y]).applyMatrix4(_,a),o.normal.toArray(m,x),m[x+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function Cp(s){let t=new WeakMap;function e(o,a){return a===yo?o.mapping=ki:a===Mo&&(o.mapping=Hi),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===yo||a===Mo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new zu(c.height);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Gl extends kl{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Li=4,sc=[.125,.215,.35,.446,.526,.582],ri=20,Wr=new Gl,rc=new Lt;let Xr=null,qr=0,Yr=0,Zr=!1;const ni=(1+Math.sqrt(5))/2,Ti=1/ni,oc=[new Y(-ni,Ti,0),new Y(ni,Ti,0),new Y(-Ti,0,ni),new Y(Ti,0,ni),new Y(0,ni,-Ti),new Y(0,ni,Ti),new Y(-1,1,-1),new Y(1,1,-1),new Y(-1,1,1),new Y(1,1,1)];class $o{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=lc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Xr,qr,Yr),this._renderer.xr.enabled=Zr,t.scissorTest=!1,Xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ki||t.mapping===Hi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Xr=this._renderer.getRenderTarget(),qr=this._renderer.getActiveCubeFace(),Yr=this._renderer.getActiveMipmapLevel(),Zr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:un,minFilter:un,generateMipmaps:!1,type:ys,format:en,colorSpace:qi,depthBuffer:!1},i=ac(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ac(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rp(r)),this._blurMaterial=Pp(r,t,e)}return i}_compileMaterial(t){const e=new Yt(this._lodPlanes[0],t);this._renderer.compile(e,Wr)}_sceneToCubeUV(t,e,n,i){const a=new Xe(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(rc),h.toneMapping=Gn,h.autoClear=!1;const f=new Fl({name:"PMREM.Background",side:De,depthWrite:!1,depthTest:!1}),g=new Yt(new Ie,f);let v=!1;const m=t.background;m?m.isColor&&(f.color.copy(m),t.background=null,v=!0):(f.color.copy(rc),v=!0);for(let p=0;p<6;p++){const _=p%3;_===0?(a.up.set(0,c[p],0),a.lookAt(l[p],0,0)):_===1?(a.up.set(0,0,c[p]),a.lookAt(0,l[p],0)):(a.up.set(0,c[p],0),a.lookAt(0,0,l[p]));const y=this._cubeSize;Xs(i,_*y,p>2?y:0,y,y),h.setRenderTarget(i),v&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===ki||t.mapping===Hi;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=lc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Yt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;Xs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,Wr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=oc[(i-r-1)%oc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Yt(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*ri-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):ri;m>ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ri}`);const p=[];let _=0;for(let C=0;C<ri;++C){const I=C/v,w=Math.exp(-I*I/2);p.push(w),C===0?_+=w:C<m&&(_+=2*w)}for(let C=0;C<p.length;C++)p[C]=p[C]/_;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const x=this._sizeLods[i],A=3*x*(i>y-Li?i-y+Li:0),E=4*(this._cubeSize-x);Xs(e,A,E,3*x,2*x),c.setRenderTarget(e),c.render(u,Wr)}}function Rp(s){const t=[],e=[],n=[];let i=s;const r=s-Li+1+sc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Li?c=sc[o-s+Li-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,u=1+l,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,v=3,m=2,p=1,_=new Float32Array(v*g*f),y=new Float32Array(m*g*f),x=new Float32Array(p*g*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,I=E>2?0:-1,w=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];_.set(w,v*g*E),y.set(d,m*g*E);const S=[E,E,E,E,E,E];x.set(S,p*g*E)}const A=new Oe;A.setAttribute("position",new _e(_,v)),A.setAttribute("uv",new _e(y,m)),A.setAttribute("faceIndex",new _e(x,p)),t.push(A),i>Li&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ac(s,t,e){const n=new li(s,t,e);return n.texture.mapping=_r,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function Pp(s,t,e){const n=new Float32Array(ri),i=new Y(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function cc(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fa(),fragmentShader:`

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
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function lc(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Vn,depthTest:!1,depthWrite:!1})}function fa(){return`

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
	`}function Lp(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===yo||c===Mo,h=c===ki||c===Hi;if(l||h){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new $o(s)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new $o(s)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Ip(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const i=e(n);return i===null&&ds("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Dp(s,t,e,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)t.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function c(u){const d=u.attributes;for(const g in d)t.update(d[g],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const g in f){const v=f[g];for(let m=0,p=v.length;m<p;m++)t.update(v[m],s.ARRAY_BUFFER)}}function l(u){const d=[],f=u.index,g=u.attributes.position;let v=0;if(f!==null){const _=f.array;v=f.version;for(let y=0,x=_.length;y<x;y+=3){const A=_[y+0],E=_[y+1],C=_[y+2];d.push(A,E,E,C,C,A)}}else if(g!==void 0){const _=g.array;v=g.version;for(let y=0,x=_.length/3-1;y<x;y+=3){const A=y+0,E=y+1,C=y+2;d.push(A,E,E,C,C,A)}}else return;const m=new(Il(d)?zl:Ol)(d,1);m.version=v;const p=r.get(u);p&&t.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:c,getWireframeAttribute:h}}function Up(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,f){s.drawElements(n,f,r,d*o),e.update(f,n,1)}function l(d,f,g){g!==0&&(s.drawElementsInstanced(n,f,r,d*o,g),e.update(f,n,g))}function h(d,f,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,g);let m=0;for(let p=0;p<g;p++)m+=f[p];e.update(m,n,1)}function u(d,f,g,v){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)l(d[p]/o,f[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,v,0,g);let p=0;for(let _=0;_<g;_++)p+=f[_]*v[_];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Np(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function Fp(s,t,e){const n=new WeakMap,i=new ue;function r(o,a,c){const l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let S=function(){I.dispose(),n.delete(a),a.removeEventListener("dispose",S)};var f=S;d!==void 0&&d.texture.dispose();const g=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],y=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),v===!0&&(x=2),m===!0&&(x=3);let A=a.attributes.position.count*x,E=1;A>t.maxTextureSize&&(E=Math.ceil(A/t.maxTextureSize),A=t.maxTextureSize);const C=new Float32Array(A*E*4*u),I=new Ul(C,A,E,u);I.type=dn,I.needsUpdate=!0;const w=x*4;for(let D=0;D<u;D++){const z=p[D],N=_[D],O=y[D],B=A*E*4*D;for(let M=0;M<z.count;M++){const L=M*w;g===!0&&(i.fromBufferAttribute(z,M),C[B+L+0]=i.x,C[B+L+1]=i.y,C[B+L+2]=i.z,C[B+L+3]=0),v===!0&&(i.fromBufferAttribute(N,M),C[B+L+4]=i.x,C[B+L+5]=i.y,C[B+L+6]=i.z,C[B+L+7]=0),m===!0&&(i.fromBufferAttribute(O,M),C[B+L+8]=i.x,C[B+L+9]=i.y,C[B+L+10]=i.z,C[B+L+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:I,size:new Vt(A,E)},n.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<l.length;m++)g+=l[m];const v=a.morphTargetsRelative?1:1-g;c.getUniforms().setValue(s,"morphTargetBaseInfluence",v),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function Op(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,u=t.get(c,h);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}class Wl extends Ee{constructor(t,e,n,i,r,o,a,c,l,h=Ni){if(h!==Ni&&h!==Gi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ni&&(n=ci),n===void 0&&h===Gi&&(n=Vi),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:He,this.minFilter=c!==void 0?c:He,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Xl=new Ee,hc=new Wl(1,1),ql=new Ul,Yl=new Su,Zl=new Hl,uc=[],dc=[],fc=new Float32Array(16),pc=new Float32Array(9),mc=new Float32Array(4);function Ji(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=uc[i];if(r===void 0&&(r=new Float32Array(i),uc[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function ye(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function Me(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function yr(s,t){let e=dc[t];e===void 0&&(e=new Int32Array(t),dc[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function zp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Bp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2fv(this.addr,t),Me(e,t)}}function kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ye(e,t))return;s.uniform3fv(this.addr,t),Me(e,t)}}function Hp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4fv(this.addr,t),Me(e,t)}}function Vp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;mc.set(n),s.uniformMatrix2fv(this.addr,!1,mc),Me(e,n)}}function Gp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;pc.set(n),s.uniformMatrix3fv(this.addr,!1,pc),Me(e,n)}}function Wp(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(ye(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),Me(e,t)}else{if(ye(e,n))return;fc.set(n),s.uniformMatrix4fv(this.addr,!1,fc),Me(e,n)}}function Xp(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function qp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2iv(this.addr,t),Me(e,t)}}function Yp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3iv(this.addr,t),Me(e,t)}}function Zp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4iv(this.addr,t),Me(e,t)}}function $p(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ye(e,t))return;s.uniform2uiv(this.addr,t),Me(e,t)}}function Kp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ye(e,t))return;s.uniform3uiv(this.addr,t),Me(e,t)}}function Jp(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ye(e,t))return;s.uniform4uiv(this.addr,t),Me(e,t)}}function Qp(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(hc.compareFunction=Ll,r=hc):r=Xl,e.setTexture2D(t||r,i)}function tm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yl,i)}function em(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||Zl,i)}function nm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||ql,i)}function im(s){switch(s){case 5126:return zp;case 35664:return Bp;case 35665:return kp;case 35666:return Hp;case 35674:return Vp;case 35675:return Gp;case 35676:return Wp;case 5124:case 35670:return Xp;case 35667:case 35671:return qp;case 35668:case 35672:return Yp;case 35669:case 35673:return Zp;case 5125:return $p;case 36294:return jp;case 36295:return Kp;case 36296:return Jp;case 35678:case 36198:case 36298:case 36306:case 35682:return Qp;case 35679:case 36299:case 36307:return tm;case 35680:case 36300:case 36308:case 36293:return em;case 36289:case 36303:case 36311:case 36292:return nm}}function sm(s,t){s.uniform1fv(this.addr,t)}function rm(s,t){const e=Ji(t,this.size,2);s.uniform2fv(this.addr,e)}function om(s,t){const e=Ji(t,this.size,3);s.uniform3fv(this.addr,e)}function am(s,t){const e=Ji(t,this.size,4);s.uniform4fv(this.addr,e)}function cm(s,t){const e=Ji(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function lm(s,t){const e=Ji(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function hm(s,t){const e=Ji(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function um(s,t){s.uniform1iv(this.addr,t)}function dm(s,t){s.uniform2iv(this.addr,t)}function fm(s,t){s.uniform3iv(this.addr,t)}function pm(s,t){s.uniform4iv(this.addr,t)}function mm(s,t){s.uniform1uiv(this.addr,t)}function gm(s,t){s.uniform2uiv(this.addr,t)}function vm(s,t){s.uniform3uiv(this.addr,t)}function _m(s,t){s.uniform4uiv(this.addr,t)}function xm(s,t,e){const n=this.cache,i=t.length,r=yr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||Xl,r[o])}function ym(s,t,e){const n=this.cache,i=t.length,r=yr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||Yl,r[o])}function Mm(s,t,e){const n=this.cache,i=t.length,r=yr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||Zl,r[o])}function Sm(s,t,e){const n=this.cache,i=t.length,r=yr(e,i);ye(n,r)||(s.uniform1iv(this.addr,r),Me(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||ql,r[o])}function Em(s){switch(s){case 5126:return sm;case 35664:return rm;case 35665:return om;case 35666:return am;case 35674:return cm;case 35675:return lm;case 35676:return hm;case 5124:case 35670:return um;case 35667:case 35671:return dm;case 35668:case 35672:return fm;case 35669:case 35673:return pm;case 5125:return mm;case 36294:return gm;case 36295:return vm;case 36296:return _m;case 35678:case 36198:case 36298:case 36306:case 35682:return xm;case 35679:case 36299:case 36307:return ym;case 35680:case 36300:case 36308:case 36293:return Mm;case 36289:case 36303:case 36311:case 36292:return Sm}}class wm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=im(e.type)}}class bm{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Em(e.type)}}class Tm{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const $r=/(\w+)(\])?(\[|\.)?/g;function gc(s,t){s.seq.push(t),s.map[t.id]=t}function Am(s,t,e){const n=s.name,i=n.length;for($r.lastIndex=0;;){const r=$r.exec(n),o=$r.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){gc(e,l===void 0?new wm(a,s,t):new bm(a,s,t));break}else{let u=e.map[a];u===void 0&&(u=new Tm(a),gc(e,u)),e=u}}}class ur{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);Am(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function vc(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}const Cm=37297;let Rm=0;function Pm(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _c=new zt;function Lm(s){qt._getMatrix(_c,qt.workingColorSpace,s);const t=`mat3( ${_c.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(s)){case xr:return[t,"LinearTransferOETF"];case te:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function xc(s,t,e){const n=s.getShaderParameter(t,s.COMPILE_STATUS),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+Pm(s.getShaderSource(t),o)}else return i}function Im(s,t){const e=Lm(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Dm(s,t){let e;switch(t){case Uh:e="Linear";break;case Nh:e="Reinhard";break;case Fh:e="Cineon";break;case xl:e="ACESFilmic";break;case zh:e="AgX";break;case Bh:e="Neutral";break;case Oh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qs=new Y;function Um(){qt.getLuminanceCoefficients(qs);const s=qs.x.toFixed(4),t=qs.y.toFixed(4),e=qs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nm(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fs).join(`
`)}function Fm(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Om(s,t){const e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function fs(s){return s!==""}function yc(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Mc(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const zm=/^[ \t]*#include +<([\w\d./]+)>/gm;function jo(s){return s.replace(zm,km)}const Bm=new Map;function km(s,t){let e=kt[t];if(e===void 0){const n=Bm.get(t);if(n!==void 0)e=kt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return jo(e)}const Hm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sc(s){return s.replace(Hm,Vm)}function Vm(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Ec(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Gm(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===gl?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===vl?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===An&&(t="SHADOWMAP_TYPE_VSM"),t}function Wm(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ki:case Hi:t="ENVMAP_TYPE_CUBE";break;case _r:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Xm(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Hi:t="ENVMAP_MODE_REFRACTION";break}return t}function qm(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case _l:t="ENVMAP_BLENDING_MULTIPLY";break;case Ih:t="ENVMAP_BLENDING_MIX";break;case Dh:t="ENVMAP_BLENDING_ADD";break}return t}function Ym(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Zm(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Gm(e),l=Wm(e),h=Xm(e),u=qm(e),d=Ym(e),f=Nm(e),g=Fm(r),v=i.createProgram();let m,p,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(fs).join(`
`),p.length>0&&(p+=`
`)):(m=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fs).join(`
`),p=[Ec(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?kt.tonemapping_pars_fragment:"",e.toneMapping!==Gn?Dm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",kt.colorspace_pars_fragment,Im("linearToOutputTexel",e.outputColorSpace),Um(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(fs).join(`
`)),o=jo(o),o=yc(o,e),o=Mc(o,e),a=jo(a),a=yc(a,e),a=Mc(a,e),o=Sc(o),a=Sc(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===fr?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===fr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=_+m+o,x=_+p+a,A=vc(i,i.VERTEX_SHADER,y),E=vc(i,i.FRAGMENT_SHADER,x);i.attachShader(v,A),i.attachShader(v,E),e.index0AttributeName!==void 0?i.bindAttribLocation(v,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function C(D){if(s.debug.checkShaderErrors){const z=i.getProgramInfoLog(v).trim(),N=i.getShaderInfoLog(A).trim(),O=i.getShaderInfoLog(E).trim();let B=!0,M=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if(B=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,A,E);else{const L=xc(i,A,"vertex"),T=xc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+z+`
`+L+`
`+T)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(N===""||O==="")&&(M=!1);M&&(D.diagnostics={runnable:B,programLog:z,vertexShader:{log:N,prefix:m},fragmentShader:{log:O,prefix:p}})}i.deleteShader(A),i.deleteShader(E),I=new ur(i,v),w=Om(i,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let w;this.getAttributes=function(){return w===void 0&&C(this),w};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(v,Cm)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rm++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=A,this.fragmentShader=E,this}let $m=0;class jm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Km(t),e.set(t,n)),n}}class Km{constructor(t){this.id=$m++,this.code=t,this.usedTimes=0}}function Jm(s,t,e,n,i,r,o){const a=new ua,c=new jm,l=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(w){return l.add(w),w===0?"uv":`uv${w}`}function m(w,S,D,z,N){const O=z.fog,B=N.geometry,M=w.isMeshStandardMaterial?z.environment:null,L=(w.isMeshStandardMaterial?e:t).get(w.envMap||M),T=L&&L.mapping===_r?L.image.height:null,F=g[w.type];w.precision!==null&&(f=i.getMaxPrecision(w.precision),f!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",f,"instead."));const k=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,q=k!==void 0?k.length:0;let H=0;B.morphAttributes.position!==void 0&&(H=1),B.morphAttributes.normal!==void 0&&(H=2),B.morphAttributes.color!==void 0&&(H=3);let et,Z,J,at;if(F){const Qt=ln[F];et=Qt.vertexShader,Z=Qt.fragmentShader}else et=w.vertexShader,Z=w.fragmentShader,c.update(w),J=c.getVertexShaderID(w),at=c.getFragmentShaderID(w);const st=s.getRenderTarget(),lt=s.state.buffers.depth.getReversed(),Et=N.isInstancedMesh===!0,_t=N.isBatchedMesh===!0,Jt=!!w.map,Ht=!!w.matcap,ce=!!L,W=!!w.aoMap,Nt=!!w.lightMap,vt=!!w.bumpMap,Gt=!!w.normalMap,Pt=!!w.displacementMap,se=!!w.emissiveMap,Rt=!!w.metalnessMap,U=!!w.roughnessMap,R=w.anisotropy>0,$=w.clearcoat>0,nt=w.dispersion>0,rt=w.iridescence>0,tt=w.sheen>0,At=w.transmission>0,dt=R&&!!w.anisotropyMap,xt=$&&!!w.clearcoatMap,Xt=$&&!!w.clearcoatNormalMap,ot=$&&!!w.clearcoatRoughnessMap,yt=rt&&!!w.iridescenceMap,It=rt&&!!w.iridescenceThicknessMap,Dt=tt&&!!w.sheenColorMap,Mt=tt&&!!w.sheenRoughnessMap,Wt=!!w.specularMap,Bt=!!w.specularColorMap,ne=!!w.specularIntensityMap,V=At&&!!w.transmissionMap,ut=At&&!!w.thicknessMap,Q=!!w.gradientMap,it=!!w.alphaMap,gt=w.alphaTest>0,ft=!!w.alphaHash,Ft=!!w.extensions;let he=Gn;w.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(he=s.toneMapping);const we={shaderID:F,shaderType:w.type,shaderName:w.name,vertexShader:et,fragmentShader:Z,defines:w.defines,customVertexShaderID:J,customFragmentShaderID:at,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:f,batching:_t,batchingColor:_t&&N._colorsTexture!==null,instancing:Et,instancingColor:Et&&N.instanceColor!==null,instancingMorph:Et&&N.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:st===null?s.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:qi,alphaToCoverage:!!w.alphaToCoverage,map:Jt,matcap:Ht,envMap:ce,envMapMode:ce&&L.mapping,envMapCubeUVHeight:T,aoMap:W,lightMap:Nt,bumpMap:vt,normalMap:Gt,displacementMap:d&&Pt,emissiveMap:se,normalMapObjectSpace:Gt&&w.normalMapType===Gh,normalMapTangentSpace:Gt&&w.normalMapType===Pl,metalnessMap:Rt,roughnessMap:U,anisotropy:R,anisotropyMap:dt,clearcoat:$,clearcoatMap:xt,clearcoatNormalMap:Xt,clearcoatRoughnessMap:ot,dispersion:nt,iridescence:rt,iridescenceMap:yt,iridescenceThicknessMap:It,sheen:tt,sheenColorMap:Dt,sheenRoughnessMap:Mt,specularMap:Wt,specularColorMap:Bt,specularIntensityMap:ne,transmission:At,transmissionMap:V,thicknessMap:ut,gradientMap:Q,opaque:w.transparent===!1&&w.blending===Ui&&w.alphaToCoverage===!1,alphaMap:it,alphaTest:gt,alphaHash:ft,combine:w.combine,mapUv:Jt&&v(w.map.channel),aoMapUv:W&&v(w.aoMap.channel),lightMapUv:Nt&&v(w.lightMap.channel),bumpMapUv:vt&&v(w.bumpMap.channel),normalMapUv:Gt&&v(w.normalMap.channel),displacementMapUv:Pt&&v(w.displacementMap.channel),emissiveMapUv:se&&v(w.emissiveMap.channel),metalnessMapUv:Rt&&v(w.metalnessMap.channel),roughnessMapUv:U&&v(w.roughnessMap.channel),anisotropyMapUv:dt&&v(w.anisotropyMap.channel),clearcoatMapUv:xt&&v(w.clearcoatMap.channel),clearcoatNormalMapUv:Xt&&v(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&v(w.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&v(w.iridescenceMap.channel),iridescenceThicknessMapUv:It&&v(w.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&v(w.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&v(w.sheenRoughnessMap.channel),specularMapUv:Wt&&v(w.specularMap.channel),specularColorMapUv:Bt&&v(w.specularColorMap.channel),specularIntensityMapUv:ne&&v(w.specularIntensityMap.channel),transmissionMapUv:V&&v(w.transmissionMap.channel),thicknessMapUv:ut&&v(w.thicknessMap.channel),alphaMapUv:it&&v(w.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Gt||R),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!B.attributes.uv&&(Jt||it),fog:!!O,useFog:w.fog===!0,fogExp2:!!O&&O.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:lt,skinning:N.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:q,morphTextureStride:H,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&D.length>0,shadowMapType:s.shadowMap.type,toneMapping:he,decodeVideoTexture:Jt&&w.map.isVideoTexture===!0&&qt.getTransfer(w.map.colorSpace)===te,decodeVideoTextureEmissive:se&&w.emissiveMap.isVideoTexture===!0&&qt.getTransfer(w.emissiveMap.colorSpace)===te,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ve,flipSided:w.side===De,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ft&&w.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&w.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return we.vertexUv1s=l.has(1),we.vertexUv2s=l.has(2),we.vertexUv3s=l.has(3),l.clear(),we}function p(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const D in w.defines)S.push(D),S.push(w.defines[D]);return w.isRawShaderMaterial===!1&&(_(S,w),y(S,w),S.push(s.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function _(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function y(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=g[w.type];let D;if(S){const z=ln[S];D=Uu.clone(z.uniforms)}else D=w.uniforms;return D}function A(w,S){let D;for(let z=0,N=h.length;z<N;z++){const O=h[z];if(O.cacheKey===S){D=O,++D.usedTimes;break}}return D===void 0&&(D=new Zm(s,S,w,r),h.push(D)),D}function E(w){if(--w.usedTimes===0){const S=h.indexOf(w);h[S]=h[h.length-1],h.pop(),w.destroy()}}function C(w){c.remove(w)}function I(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:x,acquireProgram:A,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:I}}function Qm(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function tg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function wc(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function bc(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,g,v,m){let p=s[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:v,group:m},s[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=g,p.renderOrder=u.renderOrder,p.z=v,p.group=m),t++,p}function a(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function c(u,d,f,g,v,m){const p=o(u,d,f,g,v,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function l(u,d){e.length>1&&e.sort(u||tg),n.length>1&&n.sort(d||wc),i.length>1&&i.sort(d||wc)}function h(){for(let u=t,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function eg(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new bc,s.set(n,[o])):i>=r.length?(o=new bc,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function ng(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new Y,color:new Lt};break;case"SpotLight":e={position:new Y,direction:new Y,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new Y,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new Y,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":e={color:new Lt,position:new Y,halfWidth:new Y,halfHeight:new Y};break}return s[t.id]=e,e}}}function ig(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let sg=0;function rg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function og(s){const t=new ng,e=ig(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new Y);const i=new Y,r=new ee,o=new ee;function a(l){let h=0,u=0,d=0;for(let w=0;w<9;w++)n.probe[w].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,_=0,y=0,x=0,A=0,E=0,C=0;l.sort(rg);for(let w=0,S=l.length;w<S;w++){const D=l[w],z=D.color,N=D.intensity,O=D.distance,B=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*N,u+=z.g*N,d+=z.b*N;else if(D.isLightProbe){for(let M=0;M<9;M++)n.probe[M].addScaledVector(D.sh.coefficients[M],N);C++}else if(D.isDirectionalLight){const M=t.get(D);if(M.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const L=D.shadow,T=e.get(D);T.shadowIntensity=L.intensity,T.shadowBias=L.bias,T.shadowNormalBias=L.normalBias,T.shadowRadius=L.radius,T.shadowMapSize=L.mapSize,n.directionalShadow[f]=T,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=D.shadow.matrix,_++}n.directional[f]=M,f++}else if(D.isSpotLight){const M=t.get(D);M.position.setFromMatrixPosition(D.matrixWorld),M.color.copy(z).multiplyScalar(N),M.distance=O,M.coneCos=Math.cos(D.angle),M.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),M.decay=D.decay,n.spot[v]=M;const L=D.shadow;if(D.map&&(n.spotLightMap[A]=D.map,A++,L.updateMatrices(D),D.castShadow&&E++),n.spotLightMatrix[v]=L.matrix,D.castShadow){const T=e.get(D);T.shadowIntensity=L.intensity,T.shadowBias=L.bias,T.shadowNormalBias=L.normalBias,T.shadowRadius=L.radius,T.shadowMapSize=L.mapSize,n.spotShadow[v]=T,n.spotShadowMap[v]=B,x++}v++}else if(D.isRectAreaLight){const M=t.get(D);M.color.copy(z).multiplyScalar(N),M.halfWidth.set(D.width*.5,0,0),M.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=M,m++}else if(D.isPointLight){const M=t.get(D);if(M.color.copy(D.color).multiplyScalar(D.intensity),M.distance=D.distance,M.decay=D.decay,D.castShadow){const L=D.shadow,T=e.get(D);T.shadowIntensity=L.intensity,T.shadowBias=L.bias,T.shadowNormalBias=L.normalBias,T.shadowRadius=L.radius,T.shadowMapSize=L.mapSize,T.shadowCameraNear=L.camera.near,T.shadowCameraFar=L.camera.far,n.pointShadow[g]=T,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=D.shadow.matrix,y++}n.point[g]=M,g++}else if(D.isHemisphereLight){const M=t.get(D);M.skyColor.copy(D.color).multiplyScalar(N),M.groundColor.copy(D.groundColor).multiplyScalar(N),n.hemi[p]=M,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ht.LTC_FLOAT_1,n.rectAreaLTC2=ht.LTC_FLOAT_2):(n.rectAreaLTC1=ht.LTC_HALF_1,n.rectAreaLTC2=ht.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==_||I.numPointShadows!==y||I.numSpotShadows!==x||I.numSpotMaps!==A||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=_,n.directionalShadowMap.length=_,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=x,n.spotShadowMap.length=x,n.directionalShadowMatrix.length=_,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=x+A-E,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,I.directionalLength=f,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=_,I.numPointShadows=y,I.numSpotShadows=x,I.numSpotMaps=A,I.numLightProbes=C,n.version=sg++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0;const m=h.matrixWorldInverse;for(let p=0,_=l.length;p<_;p++){const y=l[p];if(y.isDirectionalLight){const x=n.directional[u];x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),u++}else if(y.isSpotLight){const x=n.spot[f];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),x.direction.sub(i),x.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const x=n.rectArea[g];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),x.halfWidth.set(y.width*.5,0,0),x.halfHeight.set(0,y.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const x=n.point[d];x.position.setFromMatrixPosition(y.matrixWorld),x.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const x=n.hemi[v];x.direction.setFromMatrixPosition(y.matrixWorld),x.direction.transformDirection(m),v++}}}return{setup:a,setupView:c,state:n}}function Tc(s){const t=new og(s),e=[],n=[];function i(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}const l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function ag(s){let t=new WeakMap;function e(i,r=0){const o=t.get(i);let a;return o===void 0?(a=new Tc(s),t.set(i,[a])):r>=o.length?(a=new Tc(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class cg extends ji{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class lg extends ji{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const hg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ug=`uniform sampler2D shadow_pass;
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
}`;function dg(s,t,e){let n=new da;const i=new Vt,r=new Vt,o=new ue,a=new cg({depthPacking:Vh}),c=new lg,l={},h=e.maxTextureSize,u={[Xn]:De,[De]:Xn,[ve]:ve},d=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Vt},radius:{value:4}},vertexShader:hg,fragmentShader:ug}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Oe;g.setAttribute("position",new _e(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Yt(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gl;let p=this.type;this.render=function(E,C,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const w=s.getRenderTarget(),S=s.getActiveCubeFace(),D=s.getActiveMipmapLevel(),z=s.state;z.setBlending(Vn),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const N=p!==An&&this.type===An,O=p===An&&this.type!==An;for(let B=0,M=E.length;B<M;B++){const L=E[B],T=L.shadow;if(T===void 0){console.warn("THREE.WebGLShadowMap:",L,"has no shadow.");continue}if(T.autoUpdate===!1&&T.needsUpdate===!1)continue;i.copy(T.mapSize);const F=T.getFrameExtents();if(i.multiply(F),r.copy(T.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/F.x),i.x=r.x*F.x,T.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/F.y),i.y=r.y*F.y,T.mapSize.y=r.y)),T.map===null||N===!0||O===!0){const q=this.type!==An?{minFilter:He,magFilter:He}:{};T.map!==null&&T.map.dispose(),T.map=new li(i.x,i.y,q),T.map.texture.name=L.name+".shadowMap",T.camera.updateProjectionMatrix()}s.setRenderTarget(T.map),s.clear();const k=T.getViewportCount();for(let q=0;q<k;q++){const H=T.getViewport(q);o.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),z.viewport(o),T.updateMatrices(L,q),n=T.getFrustum(),x(C,I,T.camera,L,this.type)}T.isPointLightShadow!==!0&&this.type===An&&_(T,I),T.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(w,S,D)};function _(E,C){const I=t.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new li(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,I,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,I,f,v,null)}function y(E,C,I,w){let S=null;const D=I.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(D!==void 0)S=D;else if(S=I.isPointLight===!0?c:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const z=S.uuid,N=C.uuid;let O=l[z];O===void 0&&(O={},l[z]=O);let B=O[N];B===void 0&&(B=S.clone(),O[N]=B,C.addEventListener("dispose",A)),S=B}if(S.visible=C.visible,S.wireframe=C.wireframe,w===An?S.side=C.shadowSide!==null?C.shadowSide:C.side:S.side=C.shadowSide!==null?C.shadowSide:u[C.side],S.alphaMap=C.alphaMap,S.alphaTest=C.alphaTest,S.map=C.map,S.clipShadows=C.clipShadows,S.clippingPlanes=C.clippingPlanes,S.clipIntersection=C.clipIntersection,S.displacementMap=C.displacementMap,S.displacementScale=C.displacementScale,S.displacementBias=C.displacementBias,S.wireframeLinewidth=C.wireframeLinewidth,S.linewidth=C.linewidth,I.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=s.properties.get(S);z.light=I}return S}function x(E,C,I,w,S){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===An)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,E.matrixWorld);const N=t.update(E),O=E.material;if(Array.isArray(O)){const B=N.groups;for(let M=0,L=B.length;M<L;M++){const T=B[M],F=O[T.materialIndex];if(F&&F.visible){const k=y(E,F,w,S);E.onBeforeShadow(s,E,C,I,N,k,T),s.renderBufferDirect(I,null,N,k,E,T),E.onAfterShadow(s,E,C,I,N,k,T)}}}else if(O.visible){const B=y(E,O,w,S);E.onBeforeShadow(s,E,C,I,N,B,null),s.renderBufferDirect(I,null,N,B,E,null),E.onAfterShadow(s,E,C,I,N,B,null)}}const z=E.children;for(let N=0,O=z.length;N<O;N++)x(z[N],C,I,w,S)}function A(E){E.target.removeEventListener("dispose",A);for(const I in l){const w=l[I],S=E.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const fg={[fo]:po,[mo]:_o,[go]:xo,[Bi]:vo,[po]:fo,[_o]:mo,[xo]:go,[vo]:Bi};function pg(s,t){function e(){let V=!1;const ut=new ue;let Q=null;const it=new ue(0,0,0,0);return{setMask:function(gt){Q!==gt&&!V&&(s.colorMask(gt,gt,gt,gt),Q=gt)},setLocked:function(gt){V=gt},setClear:function(gt,ft,Ft,he,we){we===!0&&(gt*=he,ft*=he,Ft*=he),ut.set(gt,ft,Ft,he),it.equals(ut)===!1&&(s.clearColor(gt,ft,Ft,he),it.copy(ut))},reset:function(){V=!1,Q=null,it.set(-1,0,0,0)}}}function n(){let V=!1,ut=!1,Q=null,it=null,gt=null;return{setReversed:function(ft){if(ut!==ft){const Ft=t.get("EXT_clip_control");ut?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const he=gt;gt=null,this.setClear(he)}ut=ft},getReversed:function(){return ut},setTest:function(ft){ft?st(s.DEPTH_TEST):lt(s.DEPTH_TEST)},setMask:function(ft){Q!==ft&&!V&&(s.depthMask(ft),Q=ft)},setFunc:function(ft){if(ut&&(ft=fg[ft]),it!==ft){switch(ft){case fo:s.depthFunc(s.NEVER);break;case po:s.depthFunc(s.ALWAYS);break;case mo:s.depthFunc(s.LESS);break;case Bi:s.depthFunc(s.LEQUAL);break;case go:s.depthFunc(s.EQUAL);break;case vo:s.depthFunc(s.GEQUAL);break;case _o:s.depthFunc(s.GREATER);break;case xo:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}it=ft}},setLocked:function(ft){V=ft},setClear:function(ft){gt!==ft&&(ut&&(ft=1-ft),s.clearDepth(ft),gt=ft)},reset:function(){V=!1,Q=null,it=null,gt=null,ut=!1}}}function i(){let V=!1,ut=null,Q=null,it=null,gt=null,ft=null,Ft=null,he=null,we=null;return{setTest:function(Qt){V||(Qt?st(s.STENCIL_TEST):lt(s.STENCIL_TEST))},setMask:function(Qt){ut!==Qt&&!V&&(s.stencilMask(Qt),ut=Qt)},setFunc:function(Qt,Ye,mn){(Q!==Qt||it!==Ye||gt!==mn)&&(s.stencilFunc(Qt,Ye,mn),Q=Qt,it=Ye,gt=mn)},setOp:function(Qt,Ye,mn){(ft!==Qt||Ft!==Ye||he!==mn)&&(s.stencilOp(Qt,Ye,mn),ft=Qt,Ft=Ye,he=mn)},setLocked:function(Qt){V=Qt},setClear:function(Qt){we!==Qt&&(s.clearStencil(Qt),we=Qt)},reset:function(){V=!1,ut=null,Q=null,it=null,gt=null,ft=null,Ft=null,he=null,we=null}}}const r=new e,o=new n,a=new i,c=new WeakMap,l=new WeakMap;let h={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,A=null,E=null,C=new Lt(0,0,0),I=0,w=!1,S=null,D=null,z=null,N=null,O=null;const B=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let M=!1,L=0;const T=s.getParameter(s.VERSION);T.indexOf("WebGL")!==-1?(L=parseFloat(/^WebGL (\d)/.exec(T)[1]),M=L>=1):T.indexOf("OpenGL ES")!==-1&&(L=parseFloat(/^OpenGL ES (\d)/.exec(T)[1]),M=L>=2);let F=null,k={};const q=s.getParameter(s.SCISSOR_BOX),H=s.getParameter(s.VIEWPORT),et=new ue().fromArray(q),Z=new ue().fromArray(H);function J(V,ut,Q,it){const gt=new Uint8Array(4),ft=s.createTexture();s.bindTexture(V,ft),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ft=0;Ft<Q;Ft++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(ut,0,s.RGBA,1,1,it,0,s.RGBA,s.UNSIGNED_BYTE,gt):s.texImage2D(ut+Ft,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,gt);return ft}const at={};at[s.TEXTURE_2D]=J(s.TEXTURE_2D,s.TEXTURE_2D,1),at[s.TEXTURE_CUBE_MAP]=J(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[s.TEXTURE_2D_ARRAY]=J(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),at[s.TEXTURE_3D]=J(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(s.DEPTH_TEST),o.setFunc(Bi),vt(!1),Gt(La),st(s.CULL_FACE),W(Vn);function st(V){h[V]!==!0&&(s.enable(V),h[V]=!0)}function lt(V){h[V]!==!1&&(s.disable(V),h[V]=!1)}function Et(V,ut){return u[V]!==ut?(s.bindFramebuffer(V,ut),u[V]=ut,V===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ut),V===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ut),!0):!1}function _t(V,ut){let Q=f,it=!1;if(V){Q=d.get(ut),Q===void 0&&(Q=[],d.set(ut,Q));const gt=V.textures;if(Q.length!==gt.length||Q[0]!==s.COLOR_ATTACHMENT0){for(let ft=0,Ft=gt.length;ft<Ft;ft++)Q[ft]=s.COLOR_ATTACHMENT0+ft;Q.length=gt.length,it=!0}}else Q[0]!==s.BACK&&(Q[0]=s.BACK,it=!0);it&&s.drawBuffers(Q)}function Jt(V){return g!==V?(s.useProgram(V),g=V,!0):!1}const Ht={[si]:s.FUNC_ADD,[mh]:s.FUNC_SUBTRACT,[gh]:s.FUNC_REVERSE_SUBTRACT};Ht[vh]=s.MIN,Ht[_h]=s.MAX;const ce={[xh]:s.ZERO,[yh]:s.ONE,[Mh]:s.SRC_COLOR,[ho]:s.SRC_ALPHA,[Ah]:s.SRC_ALPHA_SATURATE,[bh]:s.DST_COLOR,[Eh]:s.DST_ALPHA,[Sh]:s.ONE_MINUS_SRC_COLOR,[uo]:s.ONE_MINUS_SRC_ALPHA,[Th]:s.ONE_MINUS_DST_COLOR,[wh]:s.ONE_MINUS_DST_ALPHA,[Ch]:s.CONSTANT_COLOR,[Rh]:s.ONE_MINUS_CONSTANT_COLOR,[Ph]:s.CONSTANT_ALPHA,[Lh]:s.ONE_MINUS_CONSTANT_ALPHA};function W(V,ut,Q,it,gt,ft,Ft,he,we,Qt){if(V===Vn){v===!0&&(lt(s.BLEND),v=!1);return}if(v===!1&&(st(s.BLEND),v=!0),V!==ph){if(V!==m||Qt!==w){if((p!==si||x!==si)&&(s.blendEquation(s.FUNC_ADD),p=si,x=si),Qt)switch(V){case Ui:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ia:s.blendFunc(s.ONE,s.ONE);break;case Da:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ua:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case Ui:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ia:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Da:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Ua:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}_=null,y=null,A=null,E=null,C.set(0,0,0),I=0,m=V,w=Qt}return}gt=gt||ut,ft=ft||Q,Ft=Ft||it,(ut!==p||gt!==x)&&(s.blendEquationSeparate(Ht[ut],Ht[gt]),p=ut,x=gt),(Q!==_||it!==y||ft!==A||Ft!==E)&&(s.blendFuncSeparate(ce[Q],ce[it],ce[ft],ce[Ft]),_=Q,y=it,A=ft,E=Ft),(he.equals(C)===!1||we!==I)&&(s.blendColor(he.r,he.g,he.b,we),C.copy(he),I=we),m=V,w=!1}function Nt(V,ut){V.side===ve?lt(s.CULL_FACE):st(s.CULL_FACE);let Q=V.side===De;ut&&(Q=!Q),vt(Q),V.blending===Ui&&V.transparent===!1?W(Vn):W(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),r.setMask(V.colorWrite);const it=V.stencilWrite;a.setTest(it),it&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),se(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?st(s.SAMPLE_ALPHA_TO_COVERAGE):lt(s.SAMPLE_ALPHA_TO_COVERAGE)}function vt(V){S!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),S=V)}function Gt(V){V!==dh?(st(s.CULL_FACE),V!==D&&(V===La?s.cullFace(s.BACK):V===fh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):lt(s.CULL_FACE),D=V}function Pt(V){V!==z&&(M&&s.lineWidth(V),z=V)}function se(V,ut,Q){V?(st(s.POLYGON_OFFSET_FILL),(N!==ut||O!==Q)&&(s.polygonOffset(ut,Q),N=ut,O=Q)):lt(s.POLYGON_OFFSET_FILL)}function Rt(V){V?st(s.SCISSOR_TEST):lt(s.SCISSOR_TEST)}function U(V){V===void 0&&(V=s.TEXTURE0+B-1),F!==V&&(s.activeTexture(V),F=V)}function R(V,ut,Q){Q===void 0&&(F===null?Q=s.TEXTURE0+B-1:Q=F);let it=k[Q];it===void 0&&(it={type:void 0,texture:void 0},k[Q]=it),(it.type!==V||it.texture!==ut)&&(F!==Q&&(s.activeTexture(Q),F=Q),s.bindTexture(V,ut||at[V]),it.type=V,it.texture=ut)}function $(){const V=k[F];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function nt(){try{s.compressedTexImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function rt(){try{s.compressedTexImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function tt(){try{s.texSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function At(){try{s.texSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function dt(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function xt(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Xt(){try{s.texStorage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ot(){try{s.texStorage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function yt(){try{s.texImage2D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function It(){try{s.texImage3D.apply(s,arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Dt(V){et.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),et.copy(V))}function Mt(V){Z.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),Z.copy(V))}function Wt(V,ut){let Q=l.get(ut);Q===void 0&&(Q=new WeakMap,l.set(ut,Q));let it=Q.get(V);it===void 0&&(it=s.getUniformBlockIndex(ut,V.name),Q.set(V,it))}function Bt(V,ut){const it=l.get(ut).get(V);c.get(ut)!==it&&(s.uniformBlockBinding(ut,it,V.__bindingPointIndex),c.set(ut,it))}function ne(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},F=null,k={},u={},d=new WeakMap,f=[],g=null,v=!1,m=null,p=null,_=null,y=null,x=null,A=null,E=null,C=new Lt(0,0,0),I=0,w=!1,S=null,D=null,z=null,N=null,O=null,et.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:lt,bindFramebuffer:Et,drawBuffers:_t,useProgram:Jt,setBlending:W,setMaterial:Nt,setFlipSided:vt,setCullFace:Gt,setLineWidth:Pt,setPolygonOffset:se,setScissorTest:Rt,activeTexture:U,bindTexture:R,unbindTexture:$,compressedTexImage2D:nt,compressedTexImage3D:rt,texImage2D:yt,texImage3D:It,updateUBOMapping:Wt,uniformBlockBinding:Bt,texStorage2D:Xt,texStorage3D:ot,texSubImage2D:tt,texSubImage3D:At,compressedTexSubImage2D:dt,compressedTexSubImage3D:xt,scissor:Dt,viewport:Mt,reset:ne}}function Ac(s,t,e,n){const i=mg(n);switch(e){case wl:return s*t;case Tl:return s*t;case Al:return s*t*2;case ra:return s*t/i.components*i.byteLength;case oa:return s*t/i.components*i.byteLength;case Cl:return s*t*2/i.components*i.byteLength;case aa:return s*t*2/i.components*i.byteLength;case bl:return s*t*3/i.components*i.byteLength;case en:return s*t*4/i.components*i.byteLength;case ca:return s*t*4/i.components*i.byteLength;case or:case ar:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case cr:case lr:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case wo:case To:return Math.max(s,16)*Math.max(t,8)/4;case Eo:case bo:return Math.max(s,8)*Math.max(t,8)/2;case Ao:case Co:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Ro:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Po:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Lo:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Io:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case Do:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case No:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case Oo:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case zo:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case Bo:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case ko:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case Vo:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case Go:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case hr:case Wo:case Xo:return Math.ceil(s/4)*Math.ceil(t/4)*16;case Rl:case qo:return Math.ceil(s/4)*Math.ceil(t/4)*8;case Yo:case Zo:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function mg(s){switch(s){case In:case Ml:return{byteLength:1,components:1};case vs:case Sl:case ys:return{byteLength:2,components:1};case ia:case sa:return{byteLength:2,components:4};case ci:case na:case dn:return{byteLength:4,components:1};case El:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function gg(s,t,e,n,i,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Vt,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(U,R){return f?new OffscreenCanvas(U,R):xs("canvas")}function v(U,R,$){let nt=1;const rt=Rt(U);if((rt.width>$||rt.height>$)&&(nt=$/Math.max(rt.width,rt.height)),nt<1)if(typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&U instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&U instanceof ImageBitmap||typeof VideoFrame<"u"&&U instanceof VideoFrame){const tt=Math.floor(nt*rt.width),At=Math.floor(nt*rt.height);u===void 0&&(u=g(tt,At));const dt=R?g(tt,At):u;return dt.width=tt,dt.height=At,dt.getContext("2d").drawImage(U,0,0,tt,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+tt+"x"+At+")."),dt}else return"data"in U&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),U;return U}function m(U){return U.generateMipmaps}function p(U){s.generateMipmap(U)}function _(U){return U.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:U.isWebGL3DRenderTarget?s.TEXTURE_3D:U.isWebGLArrayRenderTarget||U.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(U,R,$,nt,rt=!1){if(U!==null){if(s[U]!==void 0)return s[U];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+U+"'")}let tt=R;if(R===s.RED&&($===s.FLOAT&&(tt=s.R32F),$===s.HALF_FLOAT&&(tt=s.R16F),$===s.UNSIGNED_BYTE&&(tt=s.R8)),R===s.RED_INTEGER&&($===s.UNSIGNED_BYTE&&(tt=s.R8UI),$===s.UNSIGNED_SHORT&&(tt=s.R16UI),$===s.UNSIGNED_INT&&(tt=s.R32UI),$===s.BYTE&&(tt=s.R8I),$===s.SHORT&&(tt=s.R16I),$===s.INT&&(tt=s.R32I)),R===s.RG&&($===s.FLOAT&&(tt=s.RG32F),$===s.HALF_FLOAT&&(tt=s.RG16F),$===s.UNSIGNED_BYTE&&(tt=s.RG8)),R===s.RG_INTEGER&&($===s.UNSIGNED_BYTE&&(tt=s.RG8UI),$===s.UNSIGNED_SHORT&&(tt=s.RG16UI),$===s.UNSIGNED_INT&&(tt=s.RG32UI),$===s.BYTE&&(tt=s.RG8I),$===s.SHORT&&(tt=s.RG16I),$===s.INT&&(tt=s.RG32I)),R===s.RGB_INTEGER&&($===s.UNSIGNED_BYTE&&(tt=s.RGB8UI),$===s.UNSIGNED_SHORT&&(tt=s.RGB16UI),$===s.UNSIGNED_INT&&(tt=s.RGB32UI),$===s.BYTE&&(tt=s.RGB8I),$===s.SHORT&&(tt=s.RGB16I),$===s.INT&&(tt=s.RGB32I)),R===s.RGBA_INTEGER&&($===s.UNSIGNED_BYTE&&(tt=s.RGBA8UI),$===s.UNSIGNED_SHORT&&(tt=s.RGBA16UI),$===s.UNSIGNED_INT&&(tt=s.RGBA32UI),$===s.BYTE&&(tt=s.RGBA8I),$===s.SHORT&&(tt=s.RGBA16I),$===s.INT&&(tt=s.RGBA32I)),R===s.RGB&&$===s.UNSIGNED_INT_5_9_9_9_REV&&(tt=s.RGB9_E5),R===s.RGBA){const At=rt?xr:qt.getTransfer(nt);$===s.FLOAT&&(tt=s.RGBA32F),$===s.HALF_FLOAT&&(tt=s.RGBA16F),$===s.UNSIGNED_BYTE&&(tt=At===te?s.SRGB8_ALPHA8:s.RGBA8),$===s.UNSIGNED_SHORT_4_4_4_4&&(tt=s.RGBA4),$===s.UNSIGNED_SHORT_5_5_5_1&&(tt=s.RGB5_A1)}return(tt===s.R16F||tt===s.R32F||tt===s.RG16F||tt===s.RG32F||tt===s.RGBA16F||tt===s.RGBA32F)&&t.get("EXT_color_buffer_float"),tt}function x(U,R){let $;return U?R===null||R===ci||R===Vi?$=s.DEPTH24_STENCIL8:R===dn?$=s.DEPTH32F_STENCIL8:R===vs&&($=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===ci||R===Vi?$=s.DEPTH_COMPONENT24:R===dn?$=s.DEPTH_COMPONENT32F:R===vs&&($=s.DEPTH_COMPONENT16),$}function A(U,R){return m(U)===!0||U.isFramebufferTexture&&U.minFilter!==He&&U.minFilter!==un?Math.log2(Math.max(R.width,R.height))+1:U.mipmaps!==void 0&&U.mipmaps.length>0?U.mipmaps.length:U.isCompressedTexture&&Array.isArray(U.image)?R.mipmaps.length:1}function E(U){const R=U.target;R.removeEventListener("dispose",E),I(R),R.isVideoTexture&&h.delete(R)}function C(U){const R=U.target;R.removeEventListener("dispose",C),S(R)}function I(U){const R=n.get(U);if(R.__webglInit===void 0)return;const $=U.source,nt=d.get($);if(nt){const rt=nt[R.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&w(U),Object.keys(nt).length===0&&d.delete($)}n.remove(U)}function w(U){const R=n.get(U);s.deleteTexture(R.__webglTexture);const $=U.source,nt=d.get($);delete nt[R.__cacheKey],o.memory.textures--}function S(U){const R=n.get(U);if(U.depthTexture&&(U.depthTexture.dispose(),n.remove(U.depthTexture)),U.isWebGLCubeRenderTarget)for(let nt=0;nt<6;nt++){if(Array.isArray(R.__webglFramebuffer[nt]))for(let rt=0;rt<R.__webglFramebuffer[nt].length;rt++)s.deleteFramebuffer(R.__webglFramebuffer[nt][rt]);else s.deleteFramebuffer(R.__webglFramebuffer[nt]);R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer[nt])}else{if(Array.isArray(R.__webglFramebuffer))for(let nt=0;nt<R.__webglFramebuffer.length;nt++)s.deleteFramebuffer(R.__webglFramebuffer[nt]);else s.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&s.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&s.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let nt=0;nt<R.__webglColorRenderbuffer.length;nt++)R.__webglColorRenderbuffer[nt]&&s.deleteRenderbuffer(R.__webglColorRenderbuffer[nt]);R.__webglDepthRenderbuffer&&s.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const $=U.textures;for(let nt=0,rt=$.length;nt<rt;nt++){const tt=n.get($[nt]);tt.__webglTexture&&(s.deleteTexture(tt.__webglTexture),o.memory.textures--),n.remove($[nt])}n.remove(U)}let D=0;function z(){D=0}function N(){const U=D;return U>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+U+" texture units while this GPU supports only "+i.maxTextures),D+=1,U}function O(U){const R=[];return R.push(U.wrapS),R.push(U.wrapT),R.push(U.wrapR||0),R.push(U.magFilter),R.push(U.minFilter),R.push(U.anisotropy),R.push(U.internalFormat),R.push(U.format),R.push(U.type),R.push(U.generateMipmaps),R.push(U.premultiplyAlpha),R.push(U.flipY),R.push(U.unpackAlignment),R.push(U.colorSpace),R.join()}function B(U,R){const $=n.get(U);if(U.isVideoTexture&&Pt(U),U.isRenderTargetTexture===!1&&U.version>0&&$.__version!==U.version){const nt=U.image;if(nt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z($,U,R);return}}e.bindTexture(s.TEXTURE_2D,$.__webglTexture,s.TEXTURE0+R)}function M(U,R){const $=n.get(U);if(U.version>0&&$.__version!==U.version){Z($,U,R);return}e.bindTexture(s.TEXTURE_2D_ARRAY,$.__webglTexture,s.TEXTURE0+R)}function L(U,R){const $=n.get(U);if(U.version>0&&$.__version!==U.version){Z($,U,R);return}e.bindTexture(s.TEXTURE_3D,$.__webglTexture,s.TEXTURE0+R)}function T(U,R){const $=n.get(U);if(U.version>0&&$.__version!==U.version){J($,U,R);return}e.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture,s.TEXTURE0+R)}const F={[gs]:s.REPEAT,[Rn]:s.CLAMP_TO_EDGE,[So]:s.MIRRORED_REPEAT},k={[He]:s.NEAREST,[kh]:s.NEAREST_MIPMAP_NEAREST,[Ts]:s.NEAREST_MIPMAP_LINEAR,[un]:s.LINEAR,[Er]:s.LINEAR_MIPMAP_NEAREST,[ai]:s.LINEAR_MIPMAP_LINEAR},q={[Wh]:s.NEVER,[jh]:s.ALWAYS,[Xh]:s.LESS,[Ll]:s.LEQUAL,[qh]:s.EQUAL,[$h]:s.GEQUAL,[Yh]:s.GREATER,[Zh]:s.NOTEQUAL};function H(U,R){if(R.type===dn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===un||R.magFilter===Er||R.magFilter===Ts||R.magFilter===ai||R.minFilter===un||R.minFilter===Er||R.minFilter===Ts||R.minFilter===ai)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(U,s.TEXTURE_WRAP_S,F[R.wrapS]),s.texParameteri(U,s.TEXTURE_WRAP_T,F[R.wrapT]),(U===s.TEXTURE_3D||U===s.TEXTURE_2D_ARRAY)&&s.texParameteri(U,s.TEXTURE_WRAP_R,F[R.wrapR]),s.texParameteri(U,s.TEXTURE_MAG_FILTER,k[R.magFilter]),s.texParameteri(U,s.TEXTURE_MIN_FILTER,k[R.minFilter]),R.compareFunction&&(s.texParameteri(U,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(U,s.TEXTURE_COMPARE_FUNC,q[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===He||R.minFilter!==Ts&&R.minFilter!==ai||R.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){const $=t.get("EXT_texture_filter_anisotropic");s.texParameterf(U,$.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,i.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function et(U,R){let $=!1;U.__webglInit===void 0&&(U.__webglInit=!0,R.addEventListener("dispose",E));const nt=R.source;let rt=d.get(nt);rt===void 0&&(rt={},d.set(nt,rt));const tt=O(R);if(tt!==U.__cacheKey){rt[tt]===void 0&&(rt[tt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),rt[tt].usedTimes++;const At=rt[U.__cacheKey];At!==void 0&&(rt[U.__cacheKey].usedTimes--,At.usedTimes===0&&w(R)),U.__cacheKey=tt,U.__webglTexture=rt[tt].texture}return $}function Z(U,R,$){let nt=s.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(nt=s.TEXTURE_2D_ARRAY),R.isData3DTexture&&(nt=s.TEXTURE_3D);const rt=et(U,R),tt=R.source;e.bindTexture(nt,U.__webglTexture,s.TEXTURE0+$);const At=n.get(tt);if(tt.version!==At.__version||rt===!0){e.activeTexture(s.TEXTURE0+$);const dt=qt.getPrimaries(qt.workingColorSpace),xt=R.colorSpace===Cn?null:qt.getPrimaries(R.colorSpace),Xt=R.colorSpace===Cn||dt===xt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Xt);let ot=v(R.image,!1,i.maxTextureSize);ot=se(R,ot);const yt=r.convert(R.format,R.colorSpace),It=r.convert(R.type);let Dt=y(R.internalFormat,yt,It,R.colorSpace,R.isVideoTexture);H(nt,R);let Mt;const Wt=R.mipmaps,Bt=R.isVideoTexture!==!0,ne=At.__version===void 0||rt===!0,V=tt.dataReady,ut=A(R,ot);if(R.isDepthTexture)Dt=x(R.format===Gi,R.type),ne&&(Bt?e.texStorage2D(s.TEXTURE_2D,1,Dt,ot.width,ot.height):e.texImage2D(s.TEXTURE_2D,0,Dt,ot.width,ot.height,0,yt,It,null));else if(R.isDataTexture)if(Wt.length>0){Bt&&ne&&e.texStorage2D(s.TEXTURE_2D,ut,Dt,Wt[0].width,Wt[0].height);for(let Q=0,it=Wt.length;Q<it;Q++)Mt=Wt[Q],Bt?V&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,yt,It,Mt.data):e.texImage2D(s.TEXTURE_2D,Q,Dt,Mt.width,Mt.height,0,yt,It,Mt.data);R.generateMipmaps=!1}else Bt?(ne&&e.texStorage2D(s.TEXTURE_2D,ut,Dt,ot.width,ot.height),V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,ot.width,ot.height,yt,It,ot.data)):e.texImage2D(s.TEXTURE_2D,0,Dt,ot.width,ot.height,0,yt,It,ot.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){Bt&&ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Dt,Wt[0].width,Wt[0].height,ot.depth);for(let Q=0,it=Wt.length;Q<it;Q++)if(Mt=Wt[Q],R.format!==en)if(yt!==null)if(Bt){if(V)if(R.layerUpdates.size>0){const gt=Ac(Mt.width,Mt.height,R.format,R.type);for(const ft of R.layerUpdates){const Ft=Mt.data.subarray(ft*gt/Mt.data.BYTES_PER_ELEMENT,(ft+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,ft,Mt.width,Mt.height,1,yt,Ft)}R.clearLayerUpdates()}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Mt.width,Mt.height,ot.depth,yt,Mt.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Q,Dt,Mt.width,Mt.height,ot.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Bt?V&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,Q,0,0,0,Mt.width,Mt.height,ot.depth,yt,It,Mt.data):e.texImage3D(s.TEXTURE_2D_ARRAY,Q,Dt,Mt.width,Mt.height,ot.depth,0,yt,It,Mt.data)}else{Bt&&ne&&e.texStorage2D(s.TEXTURE_2D,ut,Dt,Wt[0].width,Wt[0].height);for(let Q=0,it=Wt.length;Q<it;Q++)Mt=Wt[Q],R.format!==en?yt!==null?Bt?V&&e.compressedTexSubImage2D(s.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,yt,Mt.data):e.compressedTexImage2D(s.TEXTURE_2D,Q,Dt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Bt?V&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,Mt.width,Mt.height,yt,It,Mt.data):e.texImage2D(s.TEXTURE_2D,Q,Dt,Mt.width,Mt.height,0,yt,It,Mt.data)}else if(R.isDataArrayTexture)if(Bt){if(ne&&e.texStorage3D(s.TEXTURE_2D_ARRAY,ut,Dt,ot.width,ot.height,ot.depth),V)if(R.layerUpdates.size>0){const Q=Ac(ot.width,ot.height,R.format,R.type);for(const it of R.layerUpdates){const gt=ot.data.subarray(it*Q/ot.data.BYTES_PER_ELEMENT,(it+1)*Q/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,it,ot.width,ot.height,1,yt,It,gt)}R.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,yt,It,ot.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,Dt,ot.width,ot.height,ot.depth,0,yt,It,ot.data);else if(R.isData3DTexture)Bt?(ne&&e.texStorage3D(s.TEXTURE_3D,ut,Dt,ot.width,ot.height,ot.depth),V&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,yt,It,ot.data)):e.texImage3D(s.TEXTURE_3D,0,Dt,ot.width,ot.height,ot.depth,0,yt,It,ot.data);else if(R.isFramebufferTexture){if(ne)if(Bt)e.texStorage2D(s.TEXTURE_2D,ut,Dt,ot.width,ot.height);else{let Q=ot.width,it=ot.height;for(let gt=0;gt<ut;gt++)e.texImage2D(s.TEXTURE_2D,gt,Dt,Q,it,0,yt,It,null),Q>>=1,it>>=1}}else if(Wt.length>0){if(Bt&&ne){const Q=Rt(Wt[0]);e.texStorage2D(s.TEXTURE_2D,ut,Dt,Q.width,Q.height)}for(let Q=0,it=Wt.length;Q<it;Q++)Mt=Wt[Q],Bt?V&&e.texSubImage2D(s.TEXTURE_2D,Q,0,0,yt,It,Mt):e.texImage2D(s.TEXTURE_2D,Q,Dt,yt,It,Mt);R.generateMipmaps=!1}else if(Bt){if(ne){const Q=Rt(ot);e.texStorage2D(s.TEXTURE_2D,ut,Dt,Q.width,Q.height)}V&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,yt,It,ot)}else e.texImage2D(s.TEXTURE_2D,0,Dt,yt,It,ot);m(R)&&p(nt),At.__version=tt.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function J(U,R,$){if(R.image.length!==6)return;const nt=et(U,R),rt=R.source;e.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+$);const tt=n.get(rt);if(rt.version!==tt.__version||nt===!0){e.activeTexture(s.TEXTURE0+$);const At=qt.getPrimaries(qt.workingColorSpace),dt=R.colorSpace===Cn?null:qt.getPrimaries(R.colorSpace),xt=R.colorSpace===Cn||At===dt?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,R.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,R.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);const Xt=R.isCompressedTexture||R.image[0].isCompressedTexture,ot=R.image[0]&&R.image[0].isDataTexture,yt=[];for(let it=0;it<6;it++)!Xt&&!ot?yt[it]=v(R.image[it],!0,i.maxCubemapSize):yt[it]=ot?R.image[it].image:R.image[it],yt[it]=se(R,yt[it]);const It=yt[0],Dt=r.convert(R.format,R.colorSpace),Mt=r.convert(R.type),Wt=y(R.internalFormat,Dt,Mt,R.colorSpace),Bt=R.isVideoTexture!==!0,ne=tt.__version===void 0||nt===!0,V=rt.dataReady;let ut=A(R,It);H(s.TEXTURE_CUBE_MAP,R);let Q;if(Xt){Bt&&ne&&e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Wt,It.width,It.height);for(let it=0;it<6;it++){Q=yt[it].mipmaps;for(let gt=0;gt<Q.length;gt++){const ft=Q[gt];R.format!==en?Dt!==null?Bt?V&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt,0,0,ft.width,ft.height,Dt,ft.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt,Wt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Bt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt,0,0,ft.width,ft.height,Dt,Mt,ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt,Wt,ft.width,ft.height,0,Dt,Mt,ft.data)}}}else{if(Q=R.mipmaps,Bt&&ne){Q.length>0&&ut++;const it=Rt(yt[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Wt,it.width,it.height)}for(let it=0;it<6;it++)if(ot){Bt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,yt[it].width,yt[it].height,Dt,Mt,yt[it].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Wt,yt[it].width,yt[it].height,0,Dt,Mt,yt[it].data);for(let gt=0;gt<Q.length;gt++){const Ft=Q[gt].image[it].image;Bt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt+1,0,0,Ft.width,Ft.height,Dt,Mt,Ft.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt+1,Wt,Ft.width,Ft.height,0,Dt,Mt,Ft.data)}}else{Bt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,0,0,Dt,Mt,yt[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,0,Wt,Dt,Mt,yt[it]);for(let gt=0;gt<Q.length;gt++){const ft=Q[gt];Bt?V&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt+1,0,0,Dt,Mt,ft.image[it]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+it,gt+1,Wt,Dt,Mt,ft.image[it])}}}m(R)&&p(s.TEXTURE_CUBE_MAP),tt.__version=rt.version,R.onUpdate&&R.onUpdate(R)}U.__version=R.version}function at(U,R,$,nt,rt,tt){const At=r.convert($.format,$.colorSpace),dt=r.convert($.type),xt=y($.internalFormat,At,dt,$.colorSpace),Xt=n.get(R),ot=n.get($);if(ot.__renderTarget=R,!Xt.__hasExternalTextures){const yt=Math.max(1,R.width>>tt),It=Math.max(1,R.height>>tt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,tt,xt,yt,It,R.depth,0,At,dt,null):e.texImage2D(rt,tt,xt,yt,It,0,At,dt,null)}e.bindFramebuffer(s.FRAMEBUFFER,U),Gt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,nt,rt,ot.__webglTexture,0,vt(R)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,nt,rt,ot.__webglTexture,tt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function st(U,R,$){if(s.bindRenderbuffer(s.RENDERBUFFER,U),R.depthBuffer){const nt=R.depthTexture,rt=nt&&nt.isDepthTexture?nt.type:null,tt=x(R.stencilBuffer,rt),At=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,dt=vt(R);Gt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,dt,tt,R.width,R.height):$?s.renderbufferStorageMultisample(s.RENDERBUFFER,dt,tt,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,tt,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,At,s.RENDERBUFFER,U)}else{const nt=R.textures;for(let rt=0;rt<nt.length;rt++){const tt=nt[rt],At=r.convert(tt.format,tt.colorSpace),dt=r.convert(tt.type),xt=y(tt.internalFormat,At,dt,tt.colorSpace),Xt=vt(R);$&&Gt(R)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Xt,xt,R.width,R.height):Gt(R)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Xt,xt,R.width,R.height):s.renderbufferStorage(s.RENDERBUFFER,xt,R.width,R.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function lt(U,R){if(R&&R.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(s.FRAMEBUFFER,U),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const nt=n.get(R.depthTexture);nt.__renderTarget=R,(!nt.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),B(R.depthTexture,0);const rt=nt.__webglTexture,tt=vt(R);if(R.depthTexture.format===Ni)Gt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,rt,0);else if(R.depthTexture.format===Gi)Gt(R)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0,tt):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,rt,0);else throw new Error("Unknown depthTexture format")}function Et(U){const R=n.get(U),$=U.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==U.depthTexture){const nt=U.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),nt){const rt=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,nt.removeEventListener("dispose",rt)};nt.addEventListener("dispose",rt),R.__depthDisposeCallback=rt}R.__boundDepthTexture=nt}if(U.depthTexture&&!R.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");lt(R.__webglFramebuffer,U)}else if($){R.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer[nt]),R.__webglDepthbuffer[nt]===void 0)R.__webglDepthbuffer[nt]=s.createRenderbuffer(),st(R.__webglDepthbuffer[nt],U,!1);else{const rt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,tt=R.__webglDepthbuffer[nt];s.bindRenderbuffer(s.RENDERBUFFER,tt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,tt)}}else if(e.bindFramebuffer(s.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=s.createRenderbuffer(),st(R.__webglDepthbuffer,U,!1);else{const nt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,rt=R.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,rt),s.framebufferRenderbuffer(s.FRAMEBUFFER,nt,s.RENDERBUFFER,rt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function _t(U,R,$){const nt=n.get(U);R!==void 0&&at(nt.__webglFramebuffer,U,U.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),$!==void 0&&Et(U)}function Jt(U){const R=U.texture,$=n.get(U),nt=n.get(R);U.addEventListener("dispose",C);const rt=U.textures,tt=U.isWebGLCubeRenderTarget===!0,At=rt.length>1;if(At||(nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture()),nt.__version=R.version,o.memory.textures++),tt){$.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer[dt]=[];for(let xt=0;xt<R.mipmaps.length;xt++)$.__webglFramebuffer[dt][xt]=s.createFramebuffer()}else $.__webglFramebuffer[dt]=s.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){$.__webglFramebuffer=[];for(let dt=0;dt<R.mipmaps.length;dt++)$.__webglFramebuffer[dt]=s.createFramebuffer()}else $.__webglFramebuffer=s.createFramebuffer();if(At)for(let dt=0,xt=rt.length;dt<xt;dt++){const Xt=n.get(rt[dt]);Xt.__webglTexture===void 0&&(Xt.__webglTexture=s.createTexture(),o.memory.textures++)}if(U.samples>0&&Gt(U)===!1){$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,$.__webglMultisampledFramebuffer);for(let dt=0;dt<rt.length;dt++){const xt=rt[dt];$.__webglColorRenderbuffer[dt]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,$.__webglColorRenderbuffer[dt]);const Xt=r.convert(xt.format,xt.colorSpace),ot=r.convert(xt.type),yt=y(xt.internalFormat,Xt,ot,xt.colorSpace,U.isXRRenderTarget===!0),It=vt(U);s.renderbufferStorageMultisample(s.RENDERBUFFER,It,yt,U.width,U.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,$.__webglColorRenderbuffer[dt])}s.bindRenderbuffer(s.RENDERBUFFER,null),U.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),st($.__webglDepthRenderbuffer,U,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(tt){e.bindTexture(s.TEXTURE_CUBE_MAP,nt.__webglTexture),H(s.TEXTURE_CUBE_MAP,R);for(let dt=0;dt<6;dt++)if(R.mipmaps&&R.mipmaps.length>0)for(let xt=0;xt<R.mipmaps.length;xt++)at($.__webglFramebuffer[dt][xt],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,xt);else at($.__webglFramebuffer[dt],U,R,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);m(R)&&p(s.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let dt=0,xt=rt.length;dt<xt;dt++){const Xt=rt[dt],ot=n.get(Xt);e.bindTexture(s.TEXTURE_2D,ot.__webglTexture),H(s.TEXTURE_2D,Xt),at($.__webglFramebuffer,U,Xt,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,0),m(Xt)&&p(s.TEXTURE_2D)}e.unbindTexture()}else{let dt=s.TEXTURE_2D;if((U.isWebGL3DRenderTarget||U.isWebGLArrayRenderTarget)&&(dt=U.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(dt,nt.__webglTexture),H(dt,R),R.mipmaps&&R.mipmaps.length>0)for(let xt=0;xt<R.mipmaps.length;xt++)at($.__webglFramebuffer[xt],U,R,s.COLOR_ATTACHMENT0,dt,xt);else at($.__webglFramebuffer,U,R,s.COLOR_ATTACHMENT0,dt,0);m(R)&&p(dt),e.unbindTexture()}U.depthBuffer&&Et(U)}function Ht(U){const R=U.textures;for(let $=0,nt=R.length;$<nt;$++){const rt=R[$];if(m(rt)){const tt=_(U),At=n.get(rt).__webglTexture;e.bindTexture(tt,At),p(tt),e.unbindTexture()}}}const ce=[],W=[];function Nt(U){if(U.samples>0){if(Gt(U)===!1){const R=U.textures,$=U.width,nt=U.height;let rt=s.COLOR_BUFFER_BIT;const tt=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,At=n.get(U),dt=R.length>1;if(dt)for(let xt=0;xt<R.length;xt++)e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let xt=0;xt<R.length;xt++){if(U.resolveDepthBuffer&&(U.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),U.stencilBuffer&&U.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),dt){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,At.__webglColorRenderbuffer[xt]);const Xt=n.get(R[xt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Xt,0)}s.blitFramebuffer(0,0,$,nt,0,0,$,nt,rt,s.NEAREST),c===!0&&(ce.length=0,W.length=0,ce.push(s.COLOR_ATTACHMENT0+xt),U.depthBuffer&&U.resolveDepthBuffer===!1&&(ce.push(tt),W.push(tt),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,W)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ce))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),dt)for(let xt=0;xt<R.length;xt++){e.bindFramebuffer(s.FRAMEBUFFER,At.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.RENDERBUFFER,At.__webglColorRenderbuffer[xt]);const Xt=n.get(R[xt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,At.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+xt,s.TEXTURE_2D,Xt,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(U.depthBuffer&&U.resolveDepthBuffer===!1&&c){const R=U.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[R])}}}function vt(U){return Math.min(i.maxSamples,U.samples)}function Gt(U){const R=n.get(U);return U.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function Pt(U){const R=o.render.frame;h.get(U)!==R&&(h.set(U,R),U.update())}function se(U,R){const $=U.colorSpace,nt=U.format,rt=U.type;return U.isCompressedTexture===!0||U.isVideoTexture===!0||$!==qi&&$!==Cn&&(qt.getTransfer($)===te?(nt!==en||rt!==In)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",$)),R}function Rt(U){return typeof HTMLImageElement<"u"&&U instanceof HTMLImageElement?(l.width=U.naturalWidth||U.width,l.height=U.naturalHeight||U.height):typeof VideoFrame<"u"&&U instanceof VideoFrame?(l.width=U.displayWidth,l.height=U.displayHeight):(l.width=U.width,l.height=U.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=z,this.setTexture2D=B,this.setTexture2DArray=M,this.setTexture3D=L,this.setTextureCube=T,this.rebindTextures=_t,this.setupRenderTarget=Jt,this.updateRenderTargetMipmap=Ht,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=at,this.useMultisampledRTT=Gt}function vg(s,t){function e(n,i=Cn){let r;const o=qt.getTransfer(i);if(n===In)return s.UNSIGNED_BYTE;if(n===ia)return s.UNSIGNED_SHORT_4_4_4_4;if(n===sa)return s.UNSIGNED_SHORT_5_5_5_1;if(n===El)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ml)return s.BYTE;if(n===Sl)return s.SHORT;if(n===vs)return s.UNSIGNED_SHORT;if(n===na)return s.INT;if(n===ci)return s.UNSIGNED_INT;if(n===dn)return s.FLOAT;if(n===ys)return s.HALF_FLOAT;if(n===wl)return s.ALPHA;if(n===bl)return s.RGB;if(n===en)return s.RGBA;if(n===Tl)return s.LUMINANCE;if(n===Al)return s.LUMINANCE_ALPHA;if(n===Ni)return s.DEPTH_COMPONENT;if(n===Gi)return s.DEPTH_STENCIL;if(n===ra)return s.RED;if(n===oa)return s.RED_INTEGER;if(n===Cl)return s.RG;if(n===aa)return s.RG_INTEGER;if(n===ca)return s.RGBA_INTEGER;if(n===or||n===ar||n===cr||n===lr)if(o===te)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===cr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===lr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Eo||n===wo||n===bo||n===To)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Eo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===bo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===Co||n===Ro)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ao||n===Co)return o===te?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Po||n===Lo||n===Io||n===Do||n===Uo||n===No||n===Fo||n===Oo||n===zo||n===Bo||n===ko||n===Ho||n===Vo||n===Go)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Po)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Lo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Io)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Do)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===No)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Oo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===zo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Bo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ko)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ho)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vo)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Go)return o===te?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===hr||n===Wo||n===Xo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===hr)return o===te?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Wo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Xo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Rl||n===qo||n===Yo||n===Zo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===qo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Yo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Zo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Vi?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}class _g extends Xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class qe extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const xg={type:"move"};class jr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Y,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Y),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Y,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Y),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const v of t.hand.values()){const m=e.getJointPose(v,n),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(xg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new qe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Mg=`
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

}`;class Sg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const i=new Ee,r=t.properties.get(i);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new pn({vertexShader:yg,fragmentShader:Mg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Yt(new Ki(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Eg extends Yi{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null;const v=new Sg,m=e.getContextAttributes();let p=null,_=null;const y=[],x=[],A=new Vt;let E=null;const C=new Xe;C.viewport=new ue;const I=new Xe;I.viewport=new ue;const w=[C,I],S=new _g;let D=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let J=y[Z];return J===void 0&&(J=new jr,y[Z]=J),J.getTargetRaySpace()},this.getControllerGrip=function(Z){let J=y[Z];return J===void 0&&(J=new jr,y[Z]=J),J.getGripSpace()},this.getHand=function(Z){let J=y[Z];return J===void 0&&(J=new jr,y[Z]=J),J.getHandSpace()};function N(Z){const J=x.indexOf(Z.inputSource);if(J===-1)return;const at=y[J];at!==void 0&&(at.update(Z.inputSource,Z.frame,l||o),at.dispatchEvent({type:Z.type,data:Z.inputSource}))}function O(){i.removeEventListener("select",N),i.removeEventListener("selectstart",N),i.removeEventListener("selectend",N),i.removeEventListener("squeeze",N),i.removeEventListener("squeezestart",N),i.removeEventListener("squeezeend",N),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",B);for(let Z=0;Z<y.length;Z++){const J=x[Z];J!==null&&(x[Z]=null,y[Z].disconnect(J))}D=null,z=null,v.reset(),t.setRenderTarget(p),f=null,d=null,u=null,i=null,_=null,et.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){a=Z,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Z){if(i=Z,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",N),i.addEventListener("selectstart",N),i.addEventListener("selectend",N),i.addEventListener("squeeze",N),i.addEventListener("squeezestart",N),i.addEventListener("squeezeend",N),i.addEventListener("end",O),i.addEventListener("inputsourceschange",B),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(A),i.renderState.layers===void 0){const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,J),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new li(f.framebufferWidth,f.framebufferHeight,{format:en,type:In,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let J=null,at=null,st=null;m.depth&&(st=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Gi:Ni,at=m.stencil?Vi:ci);const lt={colorFormat:e.RGBA8,depthFormat:st,scaleFactor:r};u=new XRWebGLBinding(i,e),d=u.createProjectionLayer(lt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),_=new li(d.textureWidth,d.textureHeight,{format:en,type:In,depthTexture:new Wl(d.textureWidth,d.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(Z){for(let J=0;J<Z.removed.length;J++){const at=Z.removed[J],st=x.indexOf(at);st>=0&&(x[st]=null,y[st].disconnect(at))}for(let J=0;J<Z.added.length;J++){const at=Z.added[J];let st=x.indexOf(at);if(st===-1){for(let Et=0;Et<y.length;Et++)if(Et>=x.length){x.push(at),st=Et;break}else if(x[Et]===null){x[Et]=at,st=Et;break}if(st===-1)break}const lt=y[st];lt&&lt.connect(at)}}const M=new Y,L=new Y;function T(Z,J,at){M.setFromMatrixPosition(J.matrixWorld),L.setFromMatrixPosition(at.matrixWorld);const st=M.distanceTo(L),lt=J.projectionMatrix.elements,Et=at.projectionMatrix.elements,_t=lt[14]/(lt[10]-1),Jt=lt[14]/(lt[10]+1),Ht=(lt[9]+1)/lt[5],ce=(lt[9]-1)/lt[5],W=(lt[8]-1)/lt[0],Nt=(Et[8]+1)/Et[0],vt=_t*W,Gt=_t*Nt,Pt=st/(-W+Nt),se=Pt*-W;if(J.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(se),Z.translateZ(Pt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),lt[10]===-1)Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Rt=_t+Pt,U=Jt+Pt,R=vt-se,$=Gt+(st-se),nt=Ht*Jt/U*Rt,rt=ce*Jt/U*Rt;Z.projectionMatrix.makePerspective(R,$,nt,rt,Rt,U),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function F(Z,J){J===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(J.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(i===null)return;let J=Z.near,at=Z.far;v.texture!==null&&(v.depthNear>0&&(J=v.depthNear),v.depthFar>0&&(at=v.depthFar)),S.near=I.near=C.near=J,S.far=I.far=C.far=at,(D!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),D=S.near,z=S.far),C.layers.mask=Z.layers.mask|2,I.layers.mask=Z.layers.mask|4,S.layers.mask=C.layers.mask|I.layers.mask;const st=Z.parent,lt=S.cameras;F(S,st);for(let Et=0;Et<lt.length;Et++)F(lt[Et],st);lt.length===2?T(S,C,I):S.projectionMatrix.copy(C.projectionMatrix),k(Z,S,st)};function k(Z,J,at){at===null?Z.matrix.copy(J.matrixWorld):(Z.matrix.copy(at.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(J.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(J.projectionMatrix),Z.projectionMatrixInverse.copy(J.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=_s*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Z)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(S)};let q=null;function H(Z,J){if(h=J.getViewerPose(l||o),g=J,h!==null){const at=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let st=!1;at.length!==S.cameras.length&&(S.cameras.length=0,st=!0);for(let Et=0;Et<at.length;Et++){const _t=at[Et];let Jt=null;if(f!==null)Jt=f.getViewport(_t);else{const ce=u.getViewSubImage(d,_t);Jt=ce.viewport,Et===0&&(t.setRenderTargetTextures(_,ce.colorTexture,d.ignoreDepthValues?void 0:ce.depthStencilTexture),t.setRenderTarget(_))}let Ht=w[Et];Ht===void 0&&(Ht=new Xe,Ht.layers.enable(Et),Ht.viewport=new ue,w[Et]=Ht),Ht.matrix.fromArray(_t.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(_t.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(Jt.x,Jt.y,Jt.width,Jt.height),Et===0&&(S.matrix.copy(Ht.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),st===!0&&S.cameras.push(Ht)}const lt=i.enabledFeatures;if(lt&&lt.includes("depth-sensing")){const Et=u.getDepthInformation(at[0]);Et&&Et.isValid&&Et.texture&&v.init(t,Et,i.renderState)}}for(let at=0;at<y.length;at++){const st=x[at],lt=y[at];st!==null&&lt!==void 0&&lt.update(st,J,l||o)}q&&q(Z,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const et=new Vl;et.setAnimationLoop(H),this.setAnimationLoop=function(Z){q=Z},this.dispose=function(){}}}const Jn=new fn,wg=new ee;function bg(s,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Bl(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,x)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?c(m,p,_,y):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===De&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===De&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const _=t.get(p),y=_.envMap,x=_.envMapRotation;y&&(m.envMap.value=y,Jn.copy(x),Jn.x*=-1,Jn.y*=-1,Jn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Jn.y*=-1,Jn.z*=-1),m.envMapRotation.value.setFromMatrix4(wg.makeRotationFromEuler(Jn)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,_,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*_,m.scale.value=y*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,_){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===De&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const _=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Tg(s,t,e,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(_,y){const x=y.program;n.uniformBlockBinding(_,x)}function l(_,y){let x=i[_.id];x===void 0&&(g(_),x=h(_),i[_.id]=x,_.addEventListener("dispose",m));const A=y.program;n.updateUBOMapping(_,A);const E=t.render.frame;r[_.id]!==E&&(d(_),r[_.id]=E)}function h(_){const y=u();_.__bindingPointIndex=y;const x=s.createBuffer(),A=_.__size,E=_.usage;return s.bindBuffer(s.UNIFORM_BUFFER,x),s.bufferData(s.UNIFORM_BUFFER,A,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,x),x}function u(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const y=i[_.id],x=_.uniforms,A=_.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,C=x.length;E<C;E++){const I=Array.isArray(x[E])?x[E]:[x[E]];for(let w=0,S=I.length;w<S;w++){const D=I[w];if(f(D,E,w,A)===!0){const z=D.__offset,N=Array.isArray(D.value)?D.value:[D.value];let O=0;for(let B=0;B<N.length;B++){const M=N[B],L=v(M);typeof M=="number"||typeof M=="boolean"?(D.__data[0]=M,s.bufferSubData(s.UNIFORM_BUFFER,z+O,D.__data)):M.isMatrix3?(D.__data[0]=M.elements[0],D.__data[1]=M.elements[1],D.__data[2]=M.elements[2],D.__data[3]=0,D.__data[4]=M.elements[3],D.__data[5]=M.elements[4],D.__data[6]=M.elements[5],D.__data[7]=0,D.__data[8]=M.elements[6],D.__data[9]=M.elements[7],D.__data[10]=M.elements[8],D.__data[11]=0):(M.toArray(D.__data,O),O+=L.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,z,D.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(_,y,x,A){const E=_.value,C=y+"_"+x;if(A[C]===void 0)return typeof E=="number"||typeof E=="boolean"?A[C]=E:A[C]=E.clone(),!0;{const I=A[C];if(typeof E=="number"||typeof E=="boolean"){if(I!==E)return A[C]=E,!0}else if(I.equals(E)===!1)return I.copy(E),!0}return!1}function g(_){const y=_.uniforms;let x=0;const A=16;for(let C=0,I=y.length;C<I;C++){const w=Array.isArray(y[C])?y[C]:[y[C]];for(let S=0,D=w.length;S<D;S++){const z=w[S],N=Array.isArray(z.value)?z.value:[z.value];for(let O=0,B=N.length;O<B;O++){const M=N[O],L=v(M),T=x%A,F=T%L.boundary,k=T+F;x+=F,k!==0&&A-k<L.storage&&(x+=A-k),z.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=x,x+=L.storage}}}const E=x%A;return E>0&&(x+=A-E),_.__size=x,_.__cache={},this}function v(_){const y={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(y.boundary=4,y.storage=4):_.isVector2?(y.boundary=8,y.storage=8):_.isVector3||_.isColor?(y.boundary=16,y.storage=12):_.isVector4?(y.boundary=16,y.storage=16):_.isMatrix3?(y.boundary=48,y.storage=48):_.isMatrix4?(y.boundary=64,y.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),y}function m(_){const y=_.target;y.removeEventListener("dispose",m);const x=o.indexOf(y.__bindingPointIndex);o.splice(x,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:p}}class Ag{constructor(t={}){const{canvas:e=pu(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),v=new Int32Array(4);let m=null,p=null;const _=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Le,this.toneMapping=Gn,this.toneMappingExposure=1;const x=this;let A=!1,E=0,C=0,I=null,w=-1,S=null;const D=new ue,z=new ue;let N=null;const O=new Lt(0);let B=0,M=e.width,L=e.height,T=1,F=null,k=null;const q=new ue(0,0,M,L),H=new ue(0,0,M,L);let et=!1;const Z=new da;let J=!1,at=!1;const st=new ee,lt=new ee,Et=new Y,_t=new ue,Jt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ce(){return I===null?T:1}let W=n;function Nt(P,G){return e.getContext(P,G)}try{const P={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ea}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),W===null){const G="webgl2";if(W=Nt(G,P),W===null)throw Nt(G)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(P){throw console.error("THREE.WebGLRenderer: "+P.message),P}let vt,Gt,Pt,se,Rt,U,R,$,nt,rt,tt,At,dt,xt,Xt,ot,yt,It,Dt,Mt,Wt,Bt,ne,V;function ut(){vt=new Ip(W),vt.init(),Bt=new vg(W,vt),Gt=new Tp(W,vt,t,Bt),Pt=new pg(W,vt),Gt.reverseDepthBuffer&&d&&Pt.buffers.depth.setReversed(!0),se=new Np(W),Rt=new Qm,U=new gg(W,vt,Pt,Rt,Gt,Bt,se),R=new Cp(x),$=new Lp(x),nt=new Hu(W),ne=new wp(W,nt),rt=new Dp(W,nt,se,ne),tt=new Op(W,rt,nt,se),Dt=new Fp(W,Gt,U),ot=new Ap(Rt),At=new Jm(x,R,$,vt,Gt,ne,ot),dt=new bg(x,Rt),xt=new eg,Xt=new ag(vt),It=new Ep(x,R,$,Pt,tt,f,c),yt=new dg(x,tt,Gt),V=new Tg(W,se,Gt,Pt),Mt=new bp(W,vt,se),Wt=new Up(W,vt,se),se.programs=At.programs,x.capabilities=Gt,x.extensions=vt,x.properties=Rt,x.renderLists=xt,x.shadowMap=yt,x.state=Pt,x.info=se}ut();const Q=new Eg(x,W);this.xr=Q,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const P=vt.get("WEBGL_lose_context");P&&P.loseContext()},this.forceContextRestore=function(){const P=vt.get("WEBGL_lose_context");P&&P.restoreContext()},this.getPixelRatio=function(){return T},this.setPixelRatio=function(P){P!==void 0&&(T=P,this.setSize(M,L,!1))},this.getSize=function(P){return P.set(M,L)},this.setSize=function(P,G,j=!0){if(Q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}M=P,L=G,e.width=Math.floor(P*T),e.height=Math.floor(G*T),j===!0&&(e.style.width=P+"px",e.style.height=G+"px"),this.setViewport(0,0,P,G)},this.getDrawingBufferSize=function(P){return P.set(M*T,L*T).floor()},this.setDrawingBufferSize=function(P,G,j){M=P,L=G,T=j,e.width=Math.floor(P*j),e.height=Math.floor(G*j),this.setViewport(0,0,P,G)},this.getCurrentViewport=function(P){return P.copy(D)},this.getViewport=function(P){return P.copy(q)},this.setViewport=function(P,G,j,K){P.isVector4?q.set(P.x,P.y,P.z,P.w):q.set(P,G,j,K),Pt.viewport(D.copy(q).multiplyScalar(T).round())},this.getScissor=function(P){return P.copy(H)},this.setScissor=function(P,G,j,K){P.isVector4?H.set(P.x,P.y,P.z,P.w):H.set(P,G,j,K),Pt.scissor(z.copy(H).multiplyScalar(T).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(P){Pt.setScissorTest(et=P)},this.setOpaqueSort=function(P){F=P},this.setTransparentSort=function(P){k=P},this.getClearColor=function(P){return P.copy(It.getClearColor())},this.setClearColor=function(){It.setClearColor.apply(It,arguments)},this.getClearAlpha=function(){return It.getClearAlpha()},this.setClearAlpha=function(){It.setClearAlpha.apply(It,arguments)},this.clear=function(P=!0,G=!0,j=!0){let K=0;if(P){let X=!1;if(I!==null){const ct=I.texture.format;X=ct===ca||ct===aa||ct===oa}if(X){const ct=I.texture.type,pt=ct===In||ct===ci||ct===vs||ct===Vi||ct===ia||ct===sa,wt=It.getClearColor(),bt=It.getClearAlpha(),Ut=wt.r,Ot=wt.g,Tt=wt.b;pt?(g[0]=Ut,g[1]=Ot,g[2]=Tt,g[3]=bt,W.clearBufferuiv(W.COLOR,0,g)):(v[0]=Ut,v[1]=Ot,v[2]=Tt,v[3]=bt,W.clearBufferiv(W.COLOR,0,v))}else K|=W.COLOR_BUFFER_BIT}G&&(K|=W.DEPTH_BUFFER_BIT),j&&(K|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),W.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),xt.dispose(),Xt.dispose(),Rt.dispose(),R.dispose(),$.dispose(),tt.dispose(),ne.dispose(),V.dispose(),At.dispose(),Q.dispose(),Q.removeEventListener("sessionstart",Ea),Q.removeEventListener("sessionend",wa),qn.stop()};function it(P){P.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const P=se.autoReset,G=yt.enabled,j=yt.autoUpdate,K=yt.needsUpdate,X=yt.type;ut(),se.autoReset=P,yt.enabled=G,yt.autoUpdate=j,yt.needsUpdate=K,yt.type=X}function ft(P){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",P.statusMessage)}function Ft(P){const G=P.target;G.removeEventListener("dispose",Ft),he(G)}function he(P){we(P),Rt.remove(P)}function we(P){const G=Rt.get(P).programs;G!==void 0&&(G.forEach(function(j){At.releaseProgram(j)}),P.isShaderMaterial&&At.releaseShaderCache(P))}this.renderBufferDirect=function(P,G,j,K,X,ct){G===null&&(G=Jt);const pt=X.isMesh&&X.matrixWorld.determinant()<0,wt=lh(P,G,j,K,X);Pt.setMaterial(K,pt);let bt=j.index,Ut=1;if(K.wireframe===!0){if(bt=rt.getWireframeAttribute(j),bt===void 0)return;Ut=2}const Ot=j.drawRange,Tt=j.attributes.position;let Zt=Ot.start*Ut,ie=(Ot.start+Ot.count)*Ut;ct!==null&&(Zt=Math.max(Zt,ct.start*Ut),ie=Math.min(ie,(ct.start+ct.count)*Ut)),bt!==null?(Zt=Math.max(Zt,0),ie=Math.min(ie,bt.count)):Tt!=null&&(Zt=Math.max(Zt,0),ie=Math.min(ie,Tt.count));const re=ie-Zt;if(re<0||re===1/0)return;ne.setup(X,K,wt,j,bt);let Ue,jt=Mt;if(bt!==null&&(Ue=nt.get(bt),jt=Wt,jt.setIndex(Ue)),X.isMesh)K.wireframe===!0?(Pt.setLineWidth(K.wireframeLinewidth*ce()),jt.setMode(W.LINES)):jt.setMode(W.TRIANGLES);else if(X.isLine){let Ct=K.linewidth;Ct===void 0&&(Ct=1),Pt.setLineWidth(Ct*ce()),X.isLineSegments?jt.setMode(W.LINES):X.isLineLoop?jt.setMode(W.LINE_LOOP):jt.setMode(W.LINE_STRIP)}else X.isPoints?jt.setMode(W.POINTS):X.isSprite&&jt.setMode(W.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)jt.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(vt.get("WEBGL_multi_draw"))jt.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ct=X._multiDrawStarts,gn=X._multiDrawCounts,Kt=X._multiDrawCount,Ze=bt?nt.get(bt).bytesPerElement:1,di=Rt.get(K).currentProgram.getUniforms();for(let ze=0;ze<Kt;ze++)di.setValue(W,"_gl_DrawID",ze),jt.render(Ct[ze]/Ze,gn[ze])}else if(X.isInstancedMesh)jt.renderInstances(Zt,re,X.count);else if(j.isInstancedBufferGeometry){const Ct=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,gn=Math.min(j.instanceCount,Ct);jt.renderInstances(Zt,re,gn)}else jt.render(Zt,re)};function Qt(P,G,j){P.transparent===!0&&P.side===ve&&P.forceSinglePass===!1?(P.side=De,P.needsUpdate=!0,bs(P,G,j),P.side=Xn,P.needsUpdate=!0,bs(P,G,j),P.side=ve):bs(P,G,j)}this.compile=function(P,G,j=null){j===null&&(j=P),p=Xt.get(j),p.init(G),y.push(p),j.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),P!==j&&P.traverseVisible(function(X){X.isLight&&X.layers.test(G.layers)&&(p.pushLight(X),X.castShadow&&p.pushShadow(X))}),p.setupLights();const K=new Set;return P.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const ct=X.material;if(ct)if(Array.isArray(ct))for(let pt=0;pt<ct.length;pt++){const wt=ct[pt];Qt(wt,j,X),K.add(wt)}else Qt(ct,j,X),K.add(ct)}),y.pop(),p=null,K},this.compileAsync=function(P,G,j=null){const K=this.compile(P,G,j);return new Promise(X=>{function ct(){if(K.forEach(function(pt){Rt.get(pt).currentProgram.isReady()&&K.delete(pt)}),K.size===0){X(P);return}setTimeout(ct,10)}vt.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ye=null;function mn(P){Ye&&Ye(P)}function Ea(){qn.stop()}function wa(){qn.start()}const qn=new Vl;qn.setAnimationLoop(mn),typeof self<"u"&&qn.setContext(self),this.setAnimationLoop=function(P){Ye=P,Q.setAnimationLoop(P),P===null?qn.stop():qn.start()},Q.addEventListener("sessionstart",Ea),Q.addEventListener("sessionend",wa),this.render=function(P,G){if(G!==void 0&&G.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Q.enabled===!0&&Q.isPresenting===!0&&(Q.cameraAutoUpdate===!0&&Q.updateCamera(G),G=Q.getCamera()),P.isScene===!0&&P.onBeforeRender(x,P,G,I),p=Xt.get(P,y.length),p.init(G),y.push(p),lt.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Z.setFromProjectionMatrix(lt),at=this.localClippingEnabled,J=ot.init(this.clippingPlanes,at),m=xt.get(P,_.length),m.init(),_.push(m),Q.enabled===!0&&Q.isPresenting===!0){const ct=x.xr.getDepthSensingMesh();ct!==null&&Sr(ct,G,-1/0,x.sortObjects)}Sr(P,G,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(F,k),Ht=Q.enabled===!1||Q.isPresenting===!1||Q.hasDepthSensing()===!1,Ht&&It.addToRenderList(m,P),this.info.render.frame++,J===!0&&ot.beginShadows();const j=p.state.shadowsArray;yt.render(j,P,G),J===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=m.opaque,X=m.transmissive;if(p.setupLights(),G.isArrayCamera){const ct=G.cameras;if(X.length>0)for(let pt=0,wt=ct.length;pt<wt;pt++){const bt=ct[pt];Ta(K,X,P,bt)}Ht&&It.render(P);for(let pt=0,wt=ct.length;pt<wt;pt++){const bt=ct[pt];ba(m,P,bt,bt.viewport)}}else X.length>0&&Ta(K,X,P,G),Ht&&It.render(P),ba(m,P,G);I!==null&&(U.updateMultisampleRenderTarget(I),U.updateRenderTargetMipmap(I)),P.isScene===!0&&P.onAfterRender(x,P,G),ne.resetDefaultState(),w=-1,S=null,y.pop(),y.length>0?(p=y[y.length-1],J===!0&&ot.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,_.pop(),_.length>0?m=_[_.length-1]:m=null};function Sr(P,G,j,K){if(P.visible===!1)return;if(P.layers.test(G.layers)){if(P.isGroup)j=P.renderOrder;else if(P.isLOD)P.autoUpdate===!0&&P.update(G);else if(P.isLight)p.pushLight(P),P.castShadow&&p.pushShadow(P);else if(P.isSprite){if(!P.frustumCulled||Z.intersectsSprite(P)){K&&_t.setFromMatrixPosition(P.matrixWorld).applyMatrix4(lt);const pt=tt.update(P),wt=P.material;wt.visible&&m.push(P,pt,wt,j,_t.z,null)}}else if((P.isMesh||P.isLine||P.isPoints)&&(!P.frustumCulled||Z.intersectsObject(P))){const pt=tt.update(P),wt=P.material;if(K&&(P.boundingSphere!==void 0?(P.boundingSphere===null&&P.computeBoundingSphere(),_t.copy(P.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),_t.copy(pt.boundingSphere.center)),_t.applyMatrix4(P.matrixWorld).applyMatrix4(lt)),Array.isArray(wt)){const bt=pt.groups;for(let Ut=0,Ot=bt.length;Ut<Ot;Ut++){const Tt=bt[Ut],Zt=wt[Tt.materialIndex];Zt&&Zt.visible&&m.push(P,pt,Zt,j,_t.z,Tt)}}else wt.visible&&m.push(P,pt,wt,j,_t.z,null)}}const ct=P.children;for(let pt=0,wt=ct.length;pt<wt;pt++)Sr(ct[pt],G,j,K)}function ba(P,G,j,K){const X=P.opaque,ct=P.transmissive,pt=P.transparent;p.setupLightsView(j),J===!0&&ot.setGlobalState(x.clippingPlanes,j),K&&Pt.viewport(D.copy(K)),X.length>0&&ws(X,G,j),ct.length>0&&ws(ct,G,j),pt.length>0&&ws(pt,G,j),Pt.buffers.depth.setTest(!0),Pt.buffers.depth.setMask(!0),Pt.buffers.color.setMask(!0),Pt.setPolygonOffset(!1)}function Ta(P,G,j,K){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[K.id]===void 0&&(p.state.transmissionRenderTarget[K.id]=new li(1,1,{generateMipmaps:!0,type:vt.has("EXT_color_buffer_half_float")||vt.has("EXT_color_buffer_float")?ys:In,minFilter:ai,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const ct=p.state.transmissionRenderTarget[K.id],pt=K.viewport||D;ct.setSize(pt.z,pt.w);const wt=x.getRenderTarget();x.setRenderTarget(ct),x.getClearColor(O),B=x.getClearAlpha(),B<1&&x.setClearColor(16777215,.5),x.clear(),Ht&&It.render(j);const bt=x.toneMapping;x.toneMapping=Gn;const Ut=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),p.setupLightsView(K),J===!0&&ot.setGlobalState(x.clippingPlanes,K),ws(P,j,K),U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct),vt.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let Tt=0,Zt=G.length;Tt<Zt;Tt++){const ie=G[Tt],re=ie.object,Ue=ie.geometry,jt=ie.material,Ct=ie.group;if(jt.side===ve&&re.layers.test(K.layers)){const gn=jt.side;jt.side=De,jt.needsUpdate=!0,Aa(re,j,K,Ue,jt,Ct),jt.side=gn,jt.needsUpdate=!0,Ot=!0}}Ot===!0&&(U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct))}x.setRenderTarget(wt),x.setClearColor(O,B),Ut!==void 0&&(K.viewport=Ut),x.toneMapping=bt}function ws(P,G,j){const K=G.isScene===!0?G.overrideMaterial:null;for(let X=0,ct=P.length;X<ct;X++){const pt=P[X],wt=pt.object,bt=pt.geometry,Ut=K===null?pt.material:K,Ot=pt.group;wt.layers.test(j.layers)&&Aa(wt,G,j,bt,Ut,Ot)}}function Aa(P,G,j,K,X,ct){P.onBeforeRender(x,G,j,K,X,ct),P.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,P.matrixWorld),P.normalMatrix.getNormalMatrix(P.modelViewMatrix),X.onBeforeRender(x,G,j,K,P,ct),X.transparent===!0&&X.side===ve&&X.forceSinglePass===!1?(X.side=De,X.needsUpdate=!0,x.renderBufferDirect(j,G,K,X,P,ct),X.side=Xn,X.needsUpdate=!0,x.renderBufferDirect(j,G,K,X,P,ct),X.side=ve):x.renderBufferDirect(j,G,K,X,P,ct),P.onAfterRender(x,G,j,K,X,ct)}function bs(P,G,j){G.isScene!==!0&&(G=Jt);const K=Rt.get(P),X=p.state.lights,ct=p.state.shadowsArray,pt=X.state.version,wt=At.getParameters(P,X.state,ct,G,j),bt=At.getProgramCacheKey(wt);let Ut=K.programs;K.environment=P.isMeshStandardMaterial?G.environment:null,K.fog=G.fog,K.envMap=(P.isMeshStandardMaterial?$:R).get(P.envMap||K.environment),K.envMapRotation=K.environment!==null&&P.envMap===null?G.environmentRotation:P.envMapRotation,Ut===void 0&&(P.addEventListener("dispose",Ft),Ut=new Map,K.programs=Ut);let Ot=Ut.get(bt);if(Ot!==void 0){if(K.currentProgram===Ot&&K.lightsStateVersion===pt)return Ra(P,wt),Ot}else wt.uniforms=At.getUniforms(P),P.onBeforeCompile(wt,x),Ot=At.acquireProgram(wt,bt),Ut.set(bt,Ot),K.uniforms=wt.uniforms;const Tt=K.uniforms;return(!P.isShaderMaterial&&!P.isRawShaderMaterial||P.clipping===!0)&&(Tt.clippingPlanes=ot.uniform),Ra(P,wt),K.needsLights=uh(P),K.lightsStateVersion=pt,K.needsLights&&(Tt.ambientLightColor.value=X.state.ambient,Tt.lightProbe.value=X.state.probe,Tt.directionalLights.value=X.state.directional,Tt.directionalLightShadows.value=X.state.directionalShadow,Tt.spotLights.value=X.state.spot,Tt.spotLightShadows.value=X.state.spotShadow,Tt.rectAreaLights.value=X.state.rectArea,Tt.ltc_1.value=X.state.rectAreaLTC1,Tt.ltc_2.value=X.state.rectAreaLTC2,Tt.pointLights.value=X.state.point,Tt.pointLightShadows.value=X.state.pointShadow,Tt.hemisphereLights.value=X.state.hemi,Tt.directionalShadowMap.value=X.state.directionalShadowMap,Tt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Tt.spotShadowMap.value=X.state.spotShadowMap,Tt.spotLightMatrix.value=X.state.spotLightMatrix,Tt.spotLightMap.value=X.state.spotLightMap,Tt.pointShadowMap.value=X.state.pointShadowMap,Tt.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=Ot,K.uniformsList=null,Ot}function Ca(P){if(P.uniformsList===null){const G=P.currentProgram.getUniforms();P.uniformsList=ur.seqWithValue(G.seq,P.uniforms)}return P.uniformsList}function Ra(P,G){const j=Rt.get(P);j.outputColorSpace=G.outputColorSpace,j.batching=G.batching,j.batchingColor=G.batchingColor,j.instancing=G.instancing,j.instancingColor=G.instancingColor,j.instancingMorph=G.instancingMorph,j.skinning=G.skinning,j.morphTargets=G.morphTargets,j.morphNormals=G.morphNormals,j.morphColors=G.morphColors,j.morphTargetsCount=G.morphTargetsCount,j.numClippingPlanes=G.numClippingPlanes,j.numIntersection=G.numClipIntersection,j.vertexAlphas=G.vertexAlphas,j.vertexTangents=G.vertexTangents,j.toneMapping=G.toneMapping}function lh(P,G,j,K,X){G.isScene!==!0&&(G=Jt),U.resetTextureUnits();const ct=G.fog,pt=K.isMeshStandardMaterial?G.environment:null,wt=I===null?x.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:qi,bt=(K.isMeshStandardMaterial?$:R).get(K.envMap||pt),Ut=K.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,Ot=!!j.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Tt=!!j.morphAttributes.position,Zt=!!j.morphAttributes.normal,ie=!!j.morphAttributes.color;let re=Gn;K.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(re=x.toneMapping);const Ue=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,jt=Ue!==void 0?Ue.length:0,Ct=Rt.get(K),gn=p.state.lights;if(J===!0&&(at===!0||P!==S)){const Ge=P===S&&K.id===w;ot.setState(K,P,Ge)}let Kt=!1;K.version===Ct.__version?(Ct.needsLights&&Ct.lightsStateVersion!==gn.state.version||Ct.outputColorSpace!==wt||X.isBatchedMesh&&Ct.batching===!1||!X.isBatchedMesh&&Ct.batching===!0||X.isBatchedMesh&&Ct.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ct.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ct.instancing===!1||!X.isInstancedMesh&&Ct.instancing===!0||X.isSkinnedMesh&&Ct.skinning===!1||!X.isSkinnedMesh&&Ct.skinning===!0||X.isInstancedMesh&&Ct.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ct.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ct.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ct.instancingMorph===!1&&X.morphTexture!==null||Ct.envMap!==bt||K.fog===!0&&Ct.fog!==ct||Ct.numClippingPlanes!==void 0&&(Ct.numClippingPlanes!==ot.numPlanes||Ct.numIntersection!==ot.numIntersection)||Ct.vertexAlphas!==Ut||Ct.vertexTangents!==Ot||Ct.morphTargets!==Tt||Ct.morphNormals!==Zt||Ct.morphColors!==ie||Ct.toneMapping!==re||Ct.morphTargetsCount!==jt)&&(Kt=!0):(Kt=!0,Ct.__version=K.version);let Ze=Ct.currentProgram;Kt===!0&&(Ze=bs(K,G,X));let di=!1,ze=!1,Qi=!1;const oe=Ze.getUniforms(),sn=Ct.uniforms;if(Pt.useProgram(Ze.program)&&(di=!0,ze=!0,Qi=!0),K.id!==w&&(w=K.id,ze=!0),di||S!==P){Pt.buffers.depth.getReversed()?(st.copy(P.projectionMatrix),gu(st),vu(st),oe.setValue(W,"projectionMatrix",st)):oe.setValue(W,"projectionMatrix",P.projectionMatrix),oe.setValue(W,"viewMatrix",P.matrixWorldInverse);const Dn=oe.map.cameraPosition;Dn!==void 0&&Dn.setValue(W,Et.setFromMatrixPosition(P.matrixWorld)),Gt.logarithmicDepthBuffer&&oe.setValue(W,"logDepthBufFC",2/(Math.log(P.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&oe.setValue(W,"isOrthographic",P.isOrthographicCamera===!0),S!==P&&(S=P,ze=!0,Qi=!0)}if(X.isSkinnedMesh){oe.setOptional(W,X,"bindMatrix"),oe.setOptional(W,X,"bindMatrixInverse");const Ge=X.skeleton;Ge&&(Ge.boneTexture===null&&Ge.computeBoneTexture(),oe.setValue(W,"boneTexture",Ge.boneTexture,U))}X.isBatchedMesh&&(oe.setOptional(W,X,"batchingTexture"),oe.setValue(W,"batchingTexture",X._matricesTexture,U),oe.setOptional(W,X,"batchingIdTexture"),oe.setValue(W,"batchingIdTexture",X._indirectTexture,U),oe.setOptional(W,X,"batchingColorTexture"),X._colorsTexture!==null&&oe.setValue(W,"batchingColorTexture",X._colorsTexture,U));const ts=j.morphAttributes;if((ts.position!==void 0||ts.normal!==void 0||ts.color!==void 0)&&Dt.update(X,j,Ze),(ze||Ct.receiveShadow!==X.receiveShadow)&&(Ct.receiveShadow=X.receiveShadow,oe.setValue(W,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(sn.envMap.value=bt,sn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&G.environment!==null&&(sn.envMapIntensity.value=G.environmentIntensity),ze&&(oe.setValue(W,"toneMappingExposure",x.toneMappingExposure),Ct.needsLights&&hh(sn,Qi),ct&&K.fog===!0&&dt.refreshFogUniforms(sn,ct),dt.refreshMaterialUniforms(sn,K,T,L,p.state.transmissionRenderTarget[P.id]),ur.upload(W,Ca(Ct),sn,U)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(ur.upload(W,Ca(Ct),sn,U),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&oe.setValue(W,"center",X.center),oe.setValue(W,"modelViewMatrix",X.modelViewMatrix),oe.setValue(W,"normalMatrix",X.normalMatrix),oe.setValue(W,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const Ge=K.uniformsGroups;for(let Dn=0,Un=Ge.length;Dn<Un;Dn++){const Pa=Ge[Dn];V.update(Pa,Ze),V.bind(Pa,Ze)}}return Ze}function hh(P,G){P.ambientLightColor.needsUpdate=G,P.lightProbe.needsUpdate=G,P.directionalLights.needsUpdate=G,P.directionalLightShadows.needsUpdate=G,P.pointLights.needsUpdate=G,P.pointLightShadows.needsUpdate=G,P.spotLights.needsUpdate=G,P.spotLightShadows.needsUpdate=G,P.rectAreaLights.needsUpdate=G,P.hemisphereLights.needsUpdate=G}function uh(P){return P.isMeshLambertMaterial||P.isMeshToonMaterial||P.isMeshPhongMaterial||P.isMeshStandardMaterial||P.isShadowMaterial||P.isShaderMaterial&&P.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(P,G,j){Rt.get(P.texture).__webglTexture=G,Rt.get(P.depthTexture).__webglTexture=j;const K=Rt.get(P);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=j===void 0,K.__autoAllocateDepthBuffer||vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(P,G){const j=Rt.get(P);j.__webglFramebuffer=G,j.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(P,G=0,j=0){I=P,E=G,C=j;let K=!0,X=null,ct=!1,pt=!1;if(P){const bt=Rt.get(P);if(bt.__useDefaultFramebuffer!==void 0)Pt.bindFramebuffer(W.FRAMEBUFFER,null),K=!1;else if(bt.__webglFramebuffer===void 0)U.setupRenderTarget(P);else if(bt.__hasExternalTextures)U.rebindTextures(P,Rt.get(P.texture).__webglTexture,Rt.get(P.depthTexture).__webglTexture);else if(P.depthBuffer){const Tt=P.depthTexture;if(bt.__boundDepthTexture!==Tt){if(Tt!==null&&Rt.has(Tt)&&(P.width!==Tt.image.width||P.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(P)}}const Ut=P.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(pt=!0);const Ot=Rt.get(P).__webglFramebuffer;P.isWebGLCubeRenderTarget?(Array.isArray(Ot[G])?X=Ot[G][j]:X=Ot[G],ct=!0):P.samples>0&&U.useMultisampledRTT(P)===!1?X=Rt.get(P).__webglMultisampledFramebuffer:Array.isArray(Ot)?X=Ot[j]:X=Ot,D.copy(P.viewport),z.copy(P.scissor),N=P.scissorTest}else D.copy(q).multiplyScalar(T).floor(),z.copy(H).multiplyScalar(T).floor(),N=et;if(Pt.bindFramebuffer(W.FRAMEBUFFER,X)&&K&&Pt.drawBuffers(P,X),Pt.viewport(D),Pt.scissor(z),Pt.setScissorTest(N),ct){const bt=Rt.get(P.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+G,bt.__webglTexture,j)}else if(pt){const bt=Rt.get(P.texture),Ut=G||0;W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,bt.__webglTexture,j||0,Ut)}w=-1},this.readRenderTargetPixels=function(P,G,j,K,X,ct,pt){if(!(P&&P.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=Rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){Pt.bindFramebuffer(W.FRAMEBUFFER,wt);try{const bt=P.texture,Ut=bt.format,Ot=bt.type;if(!Gt.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Gt.textureTypeReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=P.width-K&&j>=0&&j<=P.height-X&&W.readPixels(G,j,K,X,Bt.convert(Ut),Bt.convert(Ot),ct)}finally{const bt=I!==null?Rt.get(I).__webglFramebuffer:null;Pt.bindFramebuffer(W.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(P,G,j,K,X,ct,pt){if(!(P&&P.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=Rt.get(P).__webglFramebuffer;if(P.isWebGLCubeRenderTarget&&pt!==void 0&&(wt=wt[pt]),wt){const bt=P.texture,Ut=bt.format,Ot=bt.type;if(!Gt.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Gt.textureTypeReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(G>=0&&G<=P.width-K&&j>=0&&j<=P.height-X){Pt.bindFramebuffer(W.FRAMEBUFFER,wt);const Tt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Tt),W.bufferData(W.PIXEL_PACK_BUFFER,ct.byteLength,W.STREAM_READ),W.readPixels(G,j,K,X,Bt.convert(Ut),Bt.convert(Ot),0);const Zt=I!==null?Rt.get(I).__webglFramebuffer:null;Pt.bindFramebuffer(W.FRAMEBUFFER,Zt);const ie=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await mu(W,ie,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Tt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,ct),W.deleteBuffer(Tt),W.deleteSync(ie),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(P,G=null,j=0){P.isTexture!==!0&&(ds("WebGLRenderer: copyFramebufferToTexture function signature has changed."),G=arguments[0]||null,P=arguments[1]);const K=Math.pow(2,-j),X=Math.floor(P.image.width*K),ct=Math.floor(P.image.height*K),pt=G!==null?G.x:0,wt=G!==null?G.y:0;U.setTexture2D(P,0),W.copyTexSubImage2D(W.TEXTURE_2D,j,0,0,pt,wt,X,ct),Pt.unbindTexture()},this.copyTextureToTexture=function(P,G,j=null,K=null,X=0){P.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,P=arguments[1],G=arguments[2],X=arguments[3]||0,j=null);let ct,pt,wt,bt,Ut,Ot,Tt,Zt,ie;const re=P.isCompressedTexture?P.mipmaps[X]:P.image;j!==null?(ct=j.max.x-j.min.x,pt=j.max.y-j.min.y,wt=j.isBox3?j.max.z-j.min.z:1,bt=j.min.x,Ut=j.min.y,Ot=j.isBox3?j.min.z:0):(ct=re.width,pt=re.height,wt=re.depth||1,bt=0,Ut=0,Ot=0),K!==null?(Tt=K.x,Zt=K.y,ie=K.z):(Tt=0,Zt=0,ie=0);const Ue=Bt.convert(G.format),jt=Bt.convert(G.type);let Ct;G.isData3DTexture?(U.setTexture3D(G,0),Ct=W.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(U.setTexture2DArray(G,0),Ct=W.TEXTURE_2D_ARRAY):(U.setTexture2D(G,0),Ct=W.TEXTURE_2D),W.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,G.flipY),W.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),W.pixelStorei(W.UNPACK_ALIGNMENT,G.unpackAlignment);const gn=W.getParameter(W.UNPACK_ROW_LENGTH),Kt=W.getParameter(W.UNPACK_IMAGE_HEIGHT),Ze=W.getParameter(W.UNPACK_SKIP_PIXELS),di=W.getParameter(W.UNPACK_SKIP_ROWS),ze=W.getParameter(W.UNPACK_SKIP_IMAGES);W.pixelStorei(W.UNPACK_ROW_LENGTH,re.width),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,re.height),W.pixelStorei(W.UNPACK_SKIP_PIXELS,bt),W.pixelStorei(W.UNPACK_SKIP_ROWS,Ut),W.pixelStorei(W.UNPACK_SKIP_IMAGES,Ot);const Qi=P.isDataArrayTexture||P.isData3DTexture,oe=G.isDataArrayTexture||G.isData3DTexture;if(P.isRenderTargetTexture||P.isDepthTexture){const sn=Rt.get(P),ts=Rt.get(G),Ge=Rt.get(sn.__renderTarget),Dn=Rt.get(ts.__renderTarget);Pt.bindFramebuffer(W.READ_FRAMEBUFFER,Ge.__webglFramebuffer),Pt.bindFramebuffer(W.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let Un=0;Un<wt;Un++)Qi&&W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Rt.get(P).__webglTexture,X,Ot+Un),P.isDepthTexture?(oe&&W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Rt.get(G).__webglTexture,X,ie+Un),W.blitFramebuffer(bt,Ut,ct,pt,Tt,Zt,ct,pt,W.DEPTH_BUFFER_BIT,W.NEAREST)):oe?W.copyTexSubImage3D(Ct,X,Tt,Zt,ie+Un,bt,Ut,ct,pt):W.copyTexSubImage2D(Ct,X,Tt,Zt,ie+Un,bt,Ut,ct,pt);Pt.bindFramebuffer(W.READ_FRAMEBUFFER,null),Pt.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else oe?P.isDataTexture||P.isData3DTexture?W.texSubImage3D(Ct,X,Tt,Zt,ie,ct,pt,wt,Ue,jt,re.data):G.isCompressedArrayTexture?W.compressedTexSubImage3D(Ct,X,Tt,Zt,ie,ct,pt,wt,Ue,re.data):W.texSubImage3D(Ct,X,Tt,Zt,ie,ct,pt,wt,Ue,jt,re):P.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,X,Tt,Zt,ct,pt,Ue,jt,re.data):P.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,X,Tt,Zt,re.width,re.height,Ue,re.data):W.texSubImage2D(W.TEXTURE_2D,X,Tt,Zt,ct,pt,Ue,jt,re);W.pixelStorei(W.UNPACK_ROW_LENGTH,gn),W.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Kt),W.pixelStorei(W.UNPACK_SKIP_PIXELS,Ze),W.pixelStorei(W.UNPACK_SKIP_ROWS,di),W.pixelStorei(W.UNPACK_SKIP_IMAGES,ze),X===0&&G.generateMipmaps&&W.generateMipmap(Ct),Pt.unbindTexture()},this.copyTextureToTexture3D=function(P,G,j=null,K=null,X=0){return P.isTexture!==!0&&(ds("WebGLRenderer: copyTextureToTexture3D function signature has changed."),j=arguments[0]||null,K=arguments[1]||null,P=arguments[2],G=arguments[3],X=arguments[4]||0),ds('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(P,G,j,K,X)},this.initRenderTarget=function(P){Rt.get(P).__webglFramebuffer===void 0&&U.setupRenderTarget(P)},this.initTexture=function(P){P.isCubeTexture?U.setTextureCube(P,0):P.isData3DTexture?U.setTexture3D(P,0):P.isDataArrayTexture||P.isCompressedArrayTexture?U.setTexture2DArray(P,0):U.setTexture2D(P,0),Pt.unbindTexture()},this.resetState=function(){E=0,C=0,I=null,Pt.reset(),ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}class pa{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Lt(t),this.near=e,this.far=n}clone(){return new pa(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $l extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fn,this.environmentIntensity=1,this.environmentRotation=new fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Cg extends Ee{constructor(t=null,e=1,n=1,i,r,o,a,c,l=He,h=He,u,d){super(null,o,a,c,l,h,i,r,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Cc extends _e{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const Ai=new ee,Rc=new ee,Ys=[],Pc=new ui,Rg=new ee,rs=new Yt,os=new $i;class Zs extends Yt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Cc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Rg)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new ui),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),Pc.copy(t.boundingBox).applyMatrix4(Ai),this.boundingBox.union(Pc)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new $i),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ai),os.copy(t.boundingSphere).applyMatrix4(Ai),this.boundingSphere.union(os)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){const n=this.matrixWorld,i=this.count;if(rs.geometry=this.geometry,rs.material=this.material,rs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),os.copy(this.boundingSphere),os.applyMatrix4(n),t.ray.intersectsSphere(os)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Ai),Rc.multiplyMatrices(n,Ai),rs.matrixWorld=Rc,rs.raycast(t,Ys);for(let o=0,a=Ys.length;o<a;o++){const c=Ys[o];c.instanceId=r,c.object=this,e.push(c)}Ys.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Cc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Cg(new Float32Array(i*this.count),i,this.count,ra,dn));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class jl extends ji{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Lt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Lc=new ee,Ko=new ha,$s=new $i,js=new Y;class Pg extends xe{constructor(t=new Oe,e=new jl){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(i),$s.radius+=r,t.ray.intersectsSphere($s)===!1)return;Lc.copy(i).invert(),Ko.copy(t.ray).applyMatrix4(Lc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,u=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),f=Math.min(l.count,o.start+o.count);for(let g=d,v=f;g<v;g++){const m=l.getX(g);js.fromBufferAttribute(u,m),Ic(js,m,c,i,t,e,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let g=d,v=f;g<v;g++)js.fromBufferAttribute(u,g),Ic(js,g,c,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Ic(s,t,e,n,i,r,o){const a=Ko.distanceSqToPoint(s);if(a<e){const c=new Y;Ko.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class Lg extends Ee{constructor(t,e,n,i,r,o,a,c,l){super(t,e,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xi extends Oe{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let g=0;const v=[],m=n/2;let p=0;_(),o===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new me(u,3)),this.setAttribute("normal",new me(d,3)),this.setAttribute("uv",new me(f,2));function _(){const x=new Y,A=new Y;let E=0;const C=(e-t)/n;for(let I=0;I<=r;I++){const w=[],S=I/r,D=S*(e-t)+t;for(let z=0;z<=i;z++){const N=z/i,O=N*c+a,B=Math.sin(O),M=Math.cos(O);A.x=D*B,A.y=-S*n+m,A.z=D*M,u.push(A.x,A.y,A.z),x.set(B,C,M).normalize(),d.push(x.x,x.y,x.z),f.push(N,1-S),w.push(g++)}v.push(w)}for(let I=0;I<i;I++)for(let w=0;w<r;w++){const S=v[w][I],D=v[w+1][I],z=v[w+1][I+1],N=v[w][I+1];(t>0||w!==0)&&(h.push(S,D,N),E+=3),(e>0||w!==r-1)&&(h.push(D,z,N),E+=3)}l.addGroup(p,E,0),p+=E}function y(x){const A=g,E=new Vt,C=new Y;let I=0;const w=x===!0?t:e,S=x===!0?1:-1;for(let z=1;z<=i;z++)u.push(0,m*S,0),d.push(0,S,0),f.push(.5,.5),g++;const D=g;for(let z=0;z<=i;z++){const O=z/i*c+a,B=Math.cos(O),M=Math.sin(O);C.x=w*M,C.y=m*S,C.z=w*B,u.push(C.x,C.y,C.z),d.push(0,S,0),E.x=B*.5+.5,E.y=M*.5*S+.5,f.push(E.x,E.y),g++}for(let z=0;z<i;z++){const N=A+z,O=D+z;x===!0?h.push(O,O+1,N):h.push(O+1,O,N),I+=3}l.addGroup(p,I,x===!0?1:2),p+=I}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Xi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class mr extends Oe{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],u=new Y,d=new Y,f=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){const _=[],y=p/n;let x=0;p===0&&o===0?x=.5/e:p===n&&c===Math.PI&&(x=-.5/e);for(let A=0;A<=e;A++){const E=A/e;u.x=-t*Math.cos(i+E*r)*Math.sin(o+y*a),u.y=t*Math.cos(o+y*a),u.z=t*Math.sin(i+E*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),v.push(d.x,d.y,d.z),m.push(E+x,1-y),_.push(l++)}h.push(_)}for(let p=0;p<n;p++)for(let _=0;_<e;_++){const y=h[p][_+1],x=h[p][_],A=h[p+1][_],E=h[p+1][_+1];(p!==0||o>0)&&f.push(y,x,E),(p!==n-1||c<Math.PI)&&f.push(x,A,E)}this.setIndex(f),this.setAttribute("position",new me(g,3)),this.setAttribute("normal",new me(v,3)),this.setAttribute("uv",new me(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new mr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ma extends Oe{constructor(t=1,e=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],h=new Y,u=new Y,d=new Y;for(let f=0;f<=n;f++)for(let g=0;g<=i;g++){const v=g/i*r,m=f/n*Math.PI*2;u.x=(t+e*Math.cos(m))*Math.cos(v),u.y=(t+e*Math.cos(m))*Math.sin(v),u.z=e*Math.sin(m),a.push(u.x,u.y,u.z),h.x=t*Math.cos(v),h.y=t*Math.sin(v),d.subVectors(u,h).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(f/n)}for(let f=1;f<=n;f++)for(let g=1;g<=i;g++){const v=(i+1)*f+g-1,m=(i+1)*(f-1)+g-1,p=(i+1)*(f-1)+g,_=(i+1)*f+g;o.push(v,m,_),o.push(m,p,_)}this.setIndex(o),this.setAttribute("position",new me(a,3)),this.setAttribute("normal",new me(c,3)),this.setAttribute("uv",new me(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ma(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class le extends ji{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Lt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Lt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Pl,this.normalScale=new Vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ig extends le{static get type(){return"MeshPhysicalMaterial"}constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Vt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Lt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Lt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Lt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}const Dc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Dg{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){const u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){const f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const Ug=new Dg;class ga{constructor(t){this.manager=t!==void 0?t:Ug,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ga.DEFAULT_MATERIAL_NAME="__DEFAULT";class Ng extends ga{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,o=Dc.get(t);if(o!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0),o;const a=xs("img");function c(){h(),Dc.add(t,this),e&&e(this),r.manager.itemEnd(t)}function l(u){h(),i&&i(u),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(t),a.src=t,a}}class Fg extends ga{constructor(t){super(t)}load(t,e,n,i){const r=new Ee,o=new Ng(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}}class va extends xe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Lt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Og extends va{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Lt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Kr=new ee,Uc=new Y,Nc=new Y;class zg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Vt(512,512),this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new da,this._frameExtents=new Vt(1,1),this._viewportCount=1,this._viewports=[new ue(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Uc.setFromMatrixPosition(t.matrixWorld),e.position.copy(Uc),Nc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Nc),e.updateMatrixWorld(),Kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Kr),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Kr)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Bg extends zg{constructor(){super(new Gl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kg extends va{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xe.DEFAULT_UP),this.updateMatrix(),this.target=new xe,this.shadow=new Bg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Hg extends va{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}const Fc=new ee;class Vg{constructor(t,e,n=0,i=1/0){this.ray=new ha(t,e),this.near=n,this.far=i,this.camera=null,this.layers=new ua,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,(e.near+e.far)/(e.near-e.far)).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):console.error("THREE.Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return Fc.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Fc),this}intersectObject(t,e=!0,n=[]){return Jo(t,this,n,e),n.sort(Oc),n}intersectObjects(t,e=!0,n=[]){for(let i=0,r=t.length;i<r;i++)Jo(t[i],this,n,e);return n.sort(Oc),n}}function Oc(s,t){return s.distance-t.distance}function Jo(s,t,e,n){let i=!0;if(s.layers.test(t.layers)&&s.raycast(t,e)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)Jo(r[o],t,e,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);class nn{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new nn);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],h=n[4],u=n[5],d=n[6],f=n[7],g=n[8],v=i[0],m=i[1],p=i[2],_=i[3],y=i[4],x=i[5],A=i[6],E=i[7],C=i[8];return r[0]=o*v+a*_+c*A,r[1]=o*m+a*y+c*E,r[2]=o*p+a*x+c*C,r[3]=l*v+h*_+u*A,r[4]=l*m+h*y+u*E,r[5]=l*p+h*x+u*C,r[6]=d*v+f*_+g*A,r[7]=d*m+f*y+g*E,r[8]=d*p+f*x+g*C,e}scale(t,e){e===void 0&&(e=new nn);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3]=t.x,r[7]=t.y,r[11]=t.z;let c=3;const l=c;let h;const u=4;let d;do{if(o=l-c,r[o+i*o]===0){for(a=o+1;a<l;a++)if(r[o+i*a]!==0){h=u;do d=u-h,r[d+i*o]+=r[d+i*a];while(--h);break}}if(r[o+i*o]!==0)for(a=o+1;a<l;a++){const f=r[o+i*a]/r[o+i*o];h=u;do d=u-h,r[d+i*a]=d<=o?0:r[d+i*a]-r[d+i*o]*f;while(--h)}}while(--c);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";for(let n=0;n<9;n++)t+=this.elements[n]+",";return t}reverse(t){t===void 0&&(t=new nn);const e=3,n=6,i=Gg;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3]=1,i[9]=0,i[15]=0,i[4]=0,i[10]=1,i[16]=0,i[5]=0,i[11]=0,i[17]=1;let a=3;const c=a;let l;const h=n;let u;do{if(r=c-a,i[r+n*r]===0){for(o=r+1;o<c;o++)if(i[r+n*o]!==0){l=h;do u=h-l,i[u+n*r]+=i[u+n*o];while(--l);break}}if(i[r+n*r]!==0)for(o=r+1;o<c;o++){const d=i[r+n*o]/i[r+n*r];l=h;do u=h-l,i[u+n*o]=u<=r?0:i[u+n*o]-i[u+n*r]*d;while(--l)}}while(--a);r=2;do{o=r-1;do{const d=i[r+n*o]/i[r+n*r];l=n;do u=n-l,i[u+n*o]=i[u+n*o]-i[u+n*r]*d;while(--l)}while(o--)}while(--r);r=2;do{const d=1/i[r+n*r];l=n;do u=n-l,i[u+n*r]=i[u+n*r]*d;while(--l)}while(r--);r=2;do{o=2;do{if(u=i[e+o+n*r],isNaN(u)||u===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,u)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,c=i+i,l=e*o,h=e*a,u=e*c,d=n*a,f=n*c,g=i*c,v=r*o,m=r*a,p=r*c,_=this.elements;return _[0]=1-(d+g),_[1]=h-p,_[2]=u+m,_[3]=h+p,_[4]=1-(l+g),_[5]=f-v,_[6]=u-m,_[7]=f+v,_[8]=1-(l+d),this}transpose(t){t===void 0&&(t=new nn);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const Gg=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*i,e.y=c*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new nn([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=Wg,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=Xg;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(zc),zc.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const Wg=new b,Xg=new b,zc=new b;class Ve{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,Bc),l=Bc),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Ve().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,c){const l=this.lowerBound,h=this.upperBound;t.copy(l),e.set(h.x,l.y,l.z),n.set(h.x,h.y,l.z),i.set(l.x,h.y,h.z),r.set(h.x,l.y,h.z),o.set(l.x,h.y,l.z),a.set(l.x,l.y,h.z),c.copy(h)}toLocalFrame(t,e){const n=kc,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,r,o,a,c,l,h,u);for(let d=0;d!==8;d++){const f=n[d];t.pointToLocal(f,f)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=kc,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],h=n[6],u=n[7];this.getCorners(i,r,o,a,c,l,h,u);for(let d=0;d!==8;d++){const f=n[d];t.pointToWorld(f,f)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,h=(this.upperBound.y-n.y)*r,u=(this.lowerBound.z-n.z)*o,d=(this.upperBound.z-n.z)*o,f=Math.max(Math.max(Math.min(a,c),Math.min(l,h)),Math.min(u,d)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,h)),Math.max(u,d));return!(g<0||f>g)}}const Bc=new b,kc=[new b,new b,new b,new b,new b,new b,new b,new b];class Hc{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class Kl{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class pe{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=qg,i=Yg;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new pe);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,h=t.w;return e.x=n*h+o*a+i*l-r*c,e.y=i*h+o*c+r*a-n*l,e.z=r*h+o*l+n*c-i*a,e.w=o*h-n*a-i*c-r*l,e}inverse(t){t===void 0&&(t=new pe);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new pe),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,h=l*n+a*r-c*i,u=l*i+c*n-o*r,d=l*r+o*i-a*n,f=-o*n-a*i-c*r;return e.x=h*l+f*-o+u*-c-d*-a,e.y=u*l+f*-a+d*-o-h*-c,e.z=d*l+f*-c+h*-a-u*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const h=o*a+c*l;if(h>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),h<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){const u=o*o,d=a*a,f=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*d-2*f),i=Math.asin(2*h),r=Math.atan2(2*o*l-2*a*c,1-2*u-2*f)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),h=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="YXZ"?(this.x=c*o*a+r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="ZXY"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a-c*l*h):i==="ZYX"?(this.x=c*o*a-r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a+c*l*h):i==="YZX"?(this.x=c*o*a+r*l*h,this.y=r*l*a+c*o*h,this.z=r*o*h-c*l*a,this.w=r*o*a-c*l*h):i==="XZY"&&(this.x=c*o*a-r*l*h,this.y=r*l*a-c*o*h,this.z=r*o*h+c*l*a,this.w=r*o*a+c*l*h),this}clone(){return new pe(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new pe);const i=this.x,r=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,h=t.z,u=t.w,d,f,g,v,m;return f=i*c+r*l+o*h+a*u,f<0&&(f=-f,c=-c,l=-l,h=-h,u=-u),1-f>1e-6?(d=Math.acos(f),g=Math.sin(d),v=Math.sin((1-e)*d)/g,m=Math.sin(e*d)/g):(v=1-e,m=e),n.x=v*i+m*c,n.y=v*r+m*l,n.z=v*o+m*h,n.w=v*a+m*u,n}integrate(t,e,n,i){i===void 0&&(i=new pe);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,h=this.z,u=this.w,d=e*.5;return i.x+=d*(r*u+o*h-a*l),i.y+=d*(o*u+a*c-r*h),i.z+=d*(a*u+r*l-o*c),i.w+=d*(-r*c-o*l-a*h),i}}const qg=new b,Yg=new b,Zg={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class St{constructor(t){t===void 0&&(t={}),this.id=St.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}St.idCounter=0;St.types=Zg;class $t{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new pe,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return $t.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return $t.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(Vc),Vc.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}}const Vc=new pe;class Oi extends St{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:St.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let h=!1;for(let u=0;u!==n.length;u++)if(n[u].almostEquals(i)||n[u].almostEquals(i)){h=!0;break}h||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];Oi.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new b,o=new b;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,c,l){const h=new b;let u=-1,d=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){h.copy(n.faceNormals[g]),r.vmult(h,h);const v=h.dot(o);v>d&&(d=v,u=g)}const f=[];for(let g=0;g<n.faces[u].length;g++){const v=n.vertices[n.faces[u][g]],m=new b;m.copy(v),r.vmult(m,m),i.vadd(m,m),f.push(m)}u>=0&&this.clipFaceAgainstHull(o,t,e,f,a,c,l)}findSeparatingAxis(t,e,n,i,r,o,a,c){const l=new b,h=new b,u=new b,d=new b,f=new b,g=new b;let v=Number.MAX_VALUE;const m=this;if(m.uniqueAxes)for(let p=0;p!==m.uniqueAxes.length;p++){n.vmult(m.uniqueAxes[p],l);const _=m.testSepAxis(l,t,e,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(l))}else{const p=a?a.length:m.faces.length;for(let _=0;_<p;_++){const y=a?a[_]:_;l.copy(m.faceNormals[y]),n.vmult(l,l);const x=m.testSepAxis(l,t,e,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(l))}}if(t.uniqueAxes)for(let p=0;p!==t.uniqueAxes.length;p++){r.vmult(t.uniqueAxes[p],h);const _=m.testSepAxis(h,t,e,n,i,r);if(_===!1)return!1;_<v&&(v=_,o.copy(h))}else{const p=c?c.length:t.faces.length;for(let _=0;_<p;_++){const y=c?c[_]:_;h.copy(t.faceNormals[y]),r.vmult(h,h);const x=m.testSepAxis(h,t,e,n,i,r);if(x===!1)return!1;x<v&&(v=x,o.copy(h))}}for(let p=0;p!==m.uniqueEdges.length;p++){n.vmult(m.uniqueEdges[p],d);for(let _=0;_!==t.uniqueEdges.length;_++)if(r.vmult(t.uniqueEdges[_],f),d.cross(f,g),!g.almostZero()){g.normalize();const y=m.testSepAxis(g,t,e,n,i,r);if(y===!1)return!1;y<v&&(v=y,o.copy(g))}}return i.vsub(e,u),u.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;Oi.project(a,t,n,i,Jr),Oi.project(e,t,r,o,Qr);const c=Jr[0],l=Jr[1],h=Qr[0],u=Qr[1];if(c<u||h<l)return!1;const d=c-u,f=h-l;return d<f?d:f}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const c=new b,l=new b,h=new b,u=new b,d=new b,f=new b,g=new b,v=new b,m=this,p=[],_=i,y=p;let x=-1,A=Number.MAX_VALUE;for(let S=0;S<m.faces.length;S++){c.copy(m.faceNormals[S]),n.vmult(c,c);const D=c.dot(t);D<A&&(A=D,x=S)}if(x<0)return;const E=m.faces[x];E.connectedFaces=[];for(let S=0;S<m.faces.length;S++)for(let D=0;D<m.faces[S].length;D++)E.indexOf(m.faces[S][D])!==-1&&S!==x&&E.connectedFaces.indexOf(S)===-1&&E.connectedFaces.push(S);const C=E.length;for(let S=0;S<C;S++){const D=m.vertices[E[S]],z=m.vertices[E[(S+1)%C]];D.vsub(z,l),h.copy(l),n.vmult(h,h),e.vadd(h,h),u.copy(this.faceNormals[x]),n.vmult(u,u),e.vadd(u,u),h.cross(u,d),d.negate(d),f.copy(D),n.vmult(f,f),e.vadd(f,f);const N=E.connectedFaces[S];g.copy(this.faceNormals[N]);const O=this.getPlaneConstantOfFace(N);v.copy(g),n.vmult(v,v);const B=O-v.dot(e);for(this.clipFaceAgainstPlane(_,y,v,B);_.length;)_.shift();for(;y.length;)_.push(y.shift())}g.copy(this.faceNormals[x]);const I=this.getPlaneConstantOfFace(x);v.copy(g),n.vmult(v,v);const w=I-v.dot(e);for(let S=0;S<_.length;S++){let D=v.dot(_[S])+w;if(D<=r&&(console.log(`clamped: depth=${D} to minDist=${r}`),D=r),D<=o){const z=_[S];if(D<=1e-6){const N={point:z,normal:v,depth:D};a.push(N)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+i;for(let h=0;h<a;h++){if(l=t[h],o=n.dot(l)+i,r<0)if(o<0){const u=new b;u.copy(l),e.push(u)}else{const u=new b;c.lerp(l,r/(r-o),u),e.push(u)}else if(o<0){const u=new b;c.lerp(l,r/(r-o),u),e.push(u),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,c,l,h,u,d=new b;for(let f=0;f<r.length;f++){d.copy(r[f]),e.vmult(d,d),t.vadd(d,d);const g=d;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(h===void 0||g.y>h)&&(h=g.y),(c===void 0||g.z<c)&&(c=g.z),(u===void 0||g.z>u)&&(u=g.z)}n.set(o,a,c),i.set(l,h,u)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=new b;this.getAveragePointLocal(r);for(let o=0;o<this.faces.length;o++){let a=i[o];const c=e[n[o][0]],l=new b;t.vsub(c,l);const h=a.dot(l),u=new b;r.vsub(c,u);const d=a.dot(u);if(h<0&&d>0||h>0&&d<0)return!1}return-1}static project(t,e,n,i,r){const o=t.vertices.length,a=$g;let c=0,l=0;const h=jg,u=t.vertices;h.setZero(),$t.vectorToLocalFrame(n,i,e,a),$t.pointToLocalFrame(n,i,h,h);const d=h.dot(a);l=c=u[0].dot(a);for(let f=1;f<o;f++){const g=u[f].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=d,c-=d,l>c){const f=l;l=c,c=f}r[0]=c,r[1]=l}}const Jr=[],Qr=[];new b;const $g=new b,jg=new b;class Ss extends St{constructor(t){super({type:St.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new Oi({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),Ss.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Hn.set(r[o][0],r[o][1],r[o][2]),e.vmult(Hn,Hn),t.vadd(Hn,Hn),n(Hn.x,Hn.y,Hn.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;rn[0].set(r.x,r.y,r.z),rn[1].set(-r.x,r.y,r.z),rn[2].set(-r.x,-r.y,r.z),rn[3].set(-r.x,-r.y,-r.z),rn[4].set(r.x,-r.y,-r.z),rn[5].set(r.x,r.y,-r.z),rn[6].set(-r.x,r.y,-r.z),rn[7].set(r.x,-r.y,r.z);const o=rn[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=rn[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,h=c.y,u=c.z;l>i.x&&(i.x=l),h>i.y&&(i.y=h),u>i.z&&(i.z=u),l<n.x&&(n.x=l),h<n.y&&(n.y=h),u<n.z&&(n.z=u)}}}const Hn=new b,rn=[new b,new b,new b,new b,new b,new b,new b,new b],_a={DYNAMIC:1,STATIC:2,KINEMATIC:4},xa={AWAKE:0,SLEEPY:1,SLEEPING:2};class mt extends Kl{constructor(t){t===void 0&&(t={}),super(),this.id=mt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?mt.STATIC:mt.DYNAMIC,typeof t.type==typeof mt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=mt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new pe,this.initQuaternion=new pe,this.previousQuaternion=new pe,this.interpolatedQuaternion=new pe,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new nn,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new nn,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Ve,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=!!t.isTrigger,t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=mt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===mt.SLEEPING&&this.dispatchEvent(mt.wakeupEvent)}sleep(){this.sleepState=mt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===mt.AWAKE&&n<i?(this.sleepState=mt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(mt.sleepyEvent)):e===mt.SLEEPY&&n>i?this.wakeUp():e===mt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(mt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===mt.SLEEPING||this.type===mt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,r=new pe;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=Kg,o=Jg,a=this.quaternion,c=this.aabb,l=Qg;for(let h=0;h!==i;h++){const u=t[h];a.vmult(e[h],r),r.vadd(this.position,r),a.mult(n[h],o),u.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),h===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=t0,i=e0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=n0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==mt.DYNAMIC)return;const n=i0,i=s0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===mt.DYNAMIC&&(this.sleepState===mt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==mt.DYNAMIC)return;this.sleepState===mt.SLEEPING&&this.wakeUp();const n=e,i=r0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=o0;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==mt.DYNAMIC)return;const n=a0,i=c0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=l0;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Ss.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===mt.DYNAMIC||this.type===mt.KINEMATIC)||this.sleepState===mt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,h=this.invMass,u=this.invInertiaWorld,d=this.linearFactor,f=h*t;i.x+=a.x*f*d.x,i.y+=a.y*f*d.y,i.z+=a.z*f*d.z;const g=u.elements,v=this.angularFactor,m=c.x*v.x,p=c.y*v.y,_=c.z*v.z;r.x+=t*(g[0]*m+g[1]*p+g[2]*_),r.y+=t*(g[3]*m+g[4]*p+g[5]*_),r.z+=t*(g[6]*m+g[7]*p+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}mt.idCounter=0;mt.COLLIDE_EVENT_NAME="collide";mt.DYNAMIC=_a.DYNAMIC;mt.STATIC=_a.STATIC;mt.KINEMATIC=_a.KINEMATIC;mt.AWAKE=xa.AWAKE;mt.SLEEPY=xa.SLEEPY;mt.SLEEPING=xa.SLEEPING;mt.wakeupEvent={type:"wakeup"};mt.sleepyEvent={type:"sleepy"};mt.sleepEvent={type:"sleep"};const Kg=new b,Jg=new pe,Qg=new Ve,t0=new nn,e0=new nn;new nn;const n0=new b,i0=new b,s0=new b,r0=new b,o0=new b,a0=new b,c0=new b,l0=new b;class Jl{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!((t.collisionFilterGroup&e.collisionFilterMask)===0||(e.collisionFilterGroup&t.collisionFilterMask)===0||((t.type&mt.STATIC)!==0||t.sleepState===mt.SLEEPING)&&((e.type&mt.STATIC)!==0||e.sleepState===mt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=h0;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=u0,i=d0,r=f0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=r[a].id,h=c<l?`${c},${l}`:`${l},${c}`;n[h]=a,n.keys.push(h)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const h0=new b;new b;new pe;new b;const u0={keys:[]},d0=[],f0=[];new b;new b;new b;class p0 extends Jl{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class gr{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let Ql,th,eh,nh,ih,sh,rh;const ya={CLOSEST:1,ANY:2,ALL:4};Ql=St.types.SPHERE;th=St.types.PLANE;eh=St.types.BOX;nh=St.types.CYLINDER;ih=St.types.CONVEXPOLYHEDRON;sh=St.types.HEIGHTFIELD;rh=St.types.TRIMESH;class fe{get[Ql](){return this._intersectSphere}get[th](){return this._intersectPlane}get[eh](){return this._intersectBox}get[nh](){return this._intersectConvex}get[ih](){return this._intersectConvex}get[sh](){return this._intersectHeightfield}get[rh](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=fe.ANY,this.result=new gr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||fe.ANY,this.result=e.result||new gr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Gc),to.length=0,t.broadphase.aabbQuery(t,Gc,to),this.intersectBodies(to),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||(this.collisionFilterGroup&t.collisionFilterMask)===0||(t.collisionFilterGroup&this.collisionFilterMask)===0)return;const i=m0,r=g0;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(P0(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,c=this.direction,l=new b(0,0,1);e.vmult(l,l);const h=new b;o.vsub(n,h);const u=h.dot(l);a.vsub(n,h);const d=h.dot(l);if(u*d>0||o.distanceTo(a)<u)return;const f=l.dot(c);if(Math.abs(f)<this.precision)return;const g=new b,v=new b,m=new b;o.vsub(n,g);const p=-l.dot(g)/f;c.scale(p,v),o.vadd(v,m),this.reportIntersection(l,m,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=v0;o.from.copy(this.from),o.to.copy(this.to),$t.pointToLocalFrame(n,e,o.from,o.from),$t.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=_0;let c,l,h,u;c=l=0,h=u=t.data.length-1;const d=new Ve;o.getAABB(d),t.getIndexOfPosition(d.lowerBound.x,d.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(d.upperBound.x,d.upperBound.y,a,!0),h=Math.min(h,a[0]+1),u=Math.min(u,a[1]+1);for(let f=c;f<h;f++)for(let g=l;g<u;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(f,g,d),!!d.overlapsRay(o)){if(t.getConvexTrianglePillar(f,g,!1),$t.pointToWorldFrame(n,e,t.pillarOffset,Ks),this._intersectConvex(t.pillarConvex,e,Ks,i,r,Wc),this.result.shouldStop)return;t.getConvexTrianglePillar(f,g,!0),$t.pointToWorldFrame(n,e,t.pillarOffset,Ks),this._intersectConvex(t.pillarConvex,e,Ks,i,r,Wc)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,h=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),u=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,d=h**2-4*l*u,f=x0,g=y0;if(!(d<0))if(d===0)o.lerp(a,d,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1);else{const v=(-h-Math.sqrt(d))/(2*l),m=(-h+Math.sqrt(d))/(2*l);if(v>=0&&v<=1&&(o.lerp(a,v,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1)),this.result.shouldStop)return;m>=0&&m<=1&&(o.lerp(a,m,f),f.vsub(n,g),g.normalize(),this.reportIntersection(g,f,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=M0,c=Xc,l=o&&o.faceList||null,h=t.faces,u=t.vertices,d=t.faceNormals,f=this.direction,g=this.from,v=this.to,m=g.distanceTo(v),p=l?l.length:h.length,_=this.result;for(let y=0;!_.shouldStop&&y<p;y++){const x=l?l[y]:y,A=h[x],E=d[x],C=e,I=n;c.copy(u[A[0]]),C.vmult(c,c),c.vadd(I,c),c.vsub(g,c),C.vmult(E,a);const w=f.dot(a);if(Math.abs(w)<this.precision)continue;const S=a.dot(c)/w;if(!(S<0)){f.scale(S,Ne),Ne.vadd(g,Ne),Je.copy(u[A[0]]),C.vmult(Je,Je),I.vadd(Je,Je);for(let D=1;!_.shouldStop&&D<A.length-1;D++){on.copy(u[A[D]]),an.copy(u[A[D+1]]),C.vmult(on,on),C.vmult(an,an),I.vadd(on,on),I.vadd(an,an);const z=Ne.distanceTo(g);!(fe.pointInTriangle(Ne,Je,on,an)||fe.pointInTriangle(Ne,on,Je,an))||z>m||this.reportIntersection(a,Ne,r,i,x)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=S0,c=C0,l=R0,h=Xc,u=E0,d=w0,f=b0,g=A0,v=T0,m=t.indices;t.vertices;const p=this.from,_=this.to,y=this.direction;l.position.copy(n),l.quaternion.copy(e),$t.vectorToLocalFrame(n,e,y,u),$t.pointToLocalFrame(n,e,p,d),$t.pointToLocalFrame(n,e,_,f),f.x*=t.scale.x,f.y*=t.scale.y,f.z*=t.scale.z,d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,f.vsub(d,u),u.normalize();const x=d.distanceSquared(f);t.tree.rayQuery(this,l,c);for(let A=0,E=c.length;!this.result.shouldStop&&A!==E;A++){const C=c[A];t.getNormal(C,a),t.getVertex(m[C*3],Je),Je.vsub(d,h);const I=u.dot(a),w=a.dot(h)/I;if(w<0)continue;u.scale(w,Ne),Ne.vadd(d,Ne),t.getVertex(m[C*3+1],on),t.getVertex(m[C*3+2],an);const S=Ne.distanceSquared(d);!(fe.pointInTriangle(Ne,on,Je,an)||fe.pointInTriangle(Ne,Je,on,an))||S>x||($t.vectorToWorldFrame(e,a,v),$t.pointToWorldFrame(n,e,Ne,g),this.reportIntersection(v,g,r,i,C))}c.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case fe.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case fe.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case fe.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,oi),n.vsub(e,as),t.vsub(e,eo);const r=oi.dot(oi),o=oi.dot(as),a=oi.dot(eo),c=as.dot(as),l=as.dot(eo);let h,u;return(h=c*a-o*l)>=0&&(u=r*l-o*a)>=0&&h+u<r*c-o*o}}fe.CLOSEST=ya.CLOSEST;fe.ANY=ya.ANY;fe.ALL=ya.ALL;const Gc=new Ve,to=[],as=new b,eo=new b,m0=new b,g0=new pe,Ne=new b,Je=new b,on=new b,an=new b;new b;new gr;const Wc={faceList:[0]},Ks=new b,v0=new fe,_0=[],x0=new b,y0=new b,M0=new b;new b;new b;const Xc=new b,S0=new b,E0=new b,w0=new b,b0=new b,T0=new b,A0=new b;new Ve;const C0=[],R0=new $t,oi=new b,Js=new b;function P0(s,t,e){e.vsub(s,oi);const n=oi.dot(t);return t.scale(n,Js),Js.vadd(s,Js),e.distanceTo(Js)}class Ii extends Jl{static checkBounds(t,e,n){let i,r;n===0?(i=t.position.x,r=e.position.x):n===1?(i=t.position.y,r=e.position.y):n===2&&(i=t.position.z,r=e.position.z);const o=t.boundingRadius,a=e.boundingRadius,c=i+o;return r-a<c}static insertionSortX(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.x<=i.aabb.lowerBound.x);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortY(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.y<=i.aabb.lowerBound.y);r--)t[r+1]=t[r];t[r+1]=i}return t}static insertionSortZ(t){for(let e=1,n=t.length;e<n;e++){const i=t[e];let r;for(r=e-1;r>=0&&!(t[r].aabb.lowerBound.z<=i.aabb.lowerBound.z);r--)t[r+1]=t[r];t[r+1]=i}return t}constructor(t){super(),this.axisList=[],this.world=null,this.axisIndex=0;const e=this.axisList;this._addBodyHandler=n=>{e.push(n.body)},this._removeBodyHandler=n=>{const i=e.indexOf(n.body);i!==-1&&e.splice(i,1)},t&&this.setWorld(t)}setWorld(t){this.axisList.length=0;for(let e=0;e<t.bodies.length;e++)this.axisList.push(t.bodies[e]);t.removeEventListener("addBody",this._addBodyHandler),t.removeEventListener("removeBody",this._removeBodyHandler),t.addEventListener("addBody",this._addBodyHandler),t.addEventListener("removeBody",this._removeBodyHandler),this.world=t,this.dirty=!0}collisionPairs(t,e,n){const i=this.axisList,r=i.length,o=this.axisIndex;let a,c;for(this.dirty&&(this.sortList(),this.dirty=!1),a=0;a!==r;a++){const l=i[a];for(c=a+1;c<r;c++){const h=i[c];if(this.needBroadphaseCollision(l,h)){if(!Ii.checkBounds(l,h,o))break;this.intersectionTest(l,h,e,n)}}}}sortList(){const t=this.axisList,e=this.axisIndex,n=t.length;for(let i=0;i!==n;i++){const r=t[i];r.aabbNeedsUpdate&&r.updateAABB()}e===0?Ii.insertionSortX(t):e===1?Ii.insertionSortY(t):e===2&&Ii.insertionSortZ(t)}autoDetectAxis(){let t=0,e=0,n=0,i=0,r=0,o=0;const a=this.axisList,c=a.length,l=1/c;for(let f=0;f!==c;f++){const g=a[f],v=g.position.x;t+=v,e+=v*v;const m=g.position.y;n+=m,i+=m*m;const p=g.position.z;r+=p,o+=p*p}const h=e-t*t*l,u=i-n*n*l,d=o-r*r*l;h>u?h>d?this.axisIndex=0:this.axisIndex=2:u>d?this.axisIndex=1:this.axisIndex=2}aabbQuery(t,e,n){n===void 0&&(n=[]),this.dirty&&(this.sortList(),this.dirty=!1);const i=this.axisIndex;let r="x";i===1&&(r="y"),i===2&&(r="z");const o=this.axisList;e.lowerBound[r],e.upperBound[r];for(let a=0;a<o.length;a++){const c=o[a];c.aabbNeedsUpdate&&c.updateAABB(),c.aabb.overlaps(e)&&n.push(c)}return n}}class L0{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class qc{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class Es{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=Es.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new qc,this.jacobianElementB=new qc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,h=i.invMassSolve;return r.scale(l,Yc),a.scale(h,Zc),n.invInertiaWorldSolve.vmult(o,$c),i.invInertiaWorldSolve.vmult(c,jc),t.multiplyVectors(Yc,$c)+e.multiplyVectors(Zc,jc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=r+o;return a.vmult(t.rotational,Qs),l+=Qs.dot(t.rotational),c.vmult(e.rotational,Qs),l+=Qs.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=I0;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}Es.idCounter=0;const Yc=new b,Zc=new b,$c=new b,jc=new b,Qs=new b,I0=new b;class D0 extends Es{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,c=U0,l=N0,h=i.velocity,u=i.angularVelocity;i.force,i.torque;const d=r.velocity,f=r.angularVelocity;r.force,r.torque;const g=F0,v=this.jacobianElementA,m=this.jacobianElementB,p=this.ni;o.cross(p,c),a.cross(p,l),p.negate(v.spatial),c.negate(v.rotational),m.spatial.copy(p),m.rotational.copy(l),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=p.dot(g),y=this.restitution+1,x=y*d.dot(p)-y*h.dot(p)+f.dot(l)-u.dot(c),A=this.computeGiMf();return-_*e-x*n-t*A}getImpactVelocityAlongNormal(){const t=O0,e=z0,n=B0,i=k0,r=H0;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const U0=new b,N0=new b,F0=new b,O0=new b,z0=new b,B0=new b,k0=new b,H0=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class Kc extends Es{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=V0,o=G0,a=this.t;n.cross(a,r),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const h=this.computeGW(),u=this.computeGiMf();return-h*e-t*u}}const V0=new b,G0=new b;class Mr{constructor(t,e,n){n=L0.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Mr.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Mr.idCounter=0;class hi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=hi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}hi.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new fe;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class W0 extends Oi{constructor(t,e,n,i){if(t===void 0&&(t=1),e===void 0&&(e=1),n===void 0&&(n=1),i===void 0&&(i=8),t<0)throw new Error("The cylinder radiusTop cannot be negative.");if(e<0)throw new Error("The cylinder radiusBottom cannot be negative.");const r=i,o=[],a=[],c=[],l=[],h=[],u=Math.cos,d=Math.sin;o.push(new b(-e*d(0),-n*.5,e*u(0))),l.push(0),o.push(new b(-t*d(0),n*.5,t*u(0))),h.push(1);for(let g=0;g<r;g++){const v=2*Math.PI/r*(g+1),m=2*Math.PI/r*(g+.5);g<r-1?(o.push(new b(-e*d(v),-n*.5,e*u(v))),l.push(2*g+2),o.push(new b(-t*d(v),n*.5,t*u(v))),h.push(2*g+3),c.push([2*g,2*g+1,2*g+3,2*g+2])):c.push([2*g,2*g+1,1,0]),(r%2===1||g<r/2)&&a.push(new b(-d(m),0,u(m)))}c.push(l),a.push(new b(0,1,0));const f=[];for(let g=0;g<h.length;g++)f.push(h[h.length-g-1]);c.push(f),super({vertices:o,faces:c,axes:a}),this.type=St.types.CYLINDER,this.radiusTop=t,this.radiusBottom=e,this.height=n,this.numSegments=i}}new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Ve;new b;new Ve;new b;new b;new b;new b;new b;new b;new b;new Ve;new b;new $t;new Ve;class X0{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class q0 extends X0{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,h=t;let u,d,f,g,v,m;if(a!==0)for(let x=0;x!==l;x++)c[x].updateSolveMassProperties();const p=Z0,_=$0,y=Y0;p.length=a,_.length=a,y.length=a;for(let x=0;x!==a;x++){const A=o[x];y[x]=0,_[x]=A.computeB(h),p[x]=1/A.computeC()}if(a!==0){for(let E=0;E!==l;E++){const C=c[E],I=C.vlambda,w=C.wlambda;I.set(0,0,0),w.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let E=0;E!==a;E++){const C=o[E];u=_[E],d=p[E],m=y[E],v=C.computeGWlambda(),f=d*(u-v-C.eps*m),m+f<C.minForce?f=C.minForce-m:m+f>C.maxForce&&(f=C.maxForce-m),y[E]+=f,g+=f>0?f:-f,C.addToWlambda(f)}if(g*g<r)break}for(let E=0;E!==l;E++){const C=c[E],I=C.velocity,w=C.angularVelocity;C.vlambda.vmul(C.linearFactor,C.vlambda),I.vadd(C.vlambda,I),C.wlambda.vmul(C.angularFactor,C.wlambda),w.vadd(C.wlambda,w)}let x=o.length;const A=1/h;for(;x--;)o[x].multiplier=y[x]*A}return n}}const Y0=[],Z0=[],$0=[];class j0{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class K0 extends j0{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const ae={sphereSphere:St.types.SPHERE,spherePlane:St.types.SPHERE|St.types.PLANE,boxBox:St.types.BOX|St.types.BOX,sphereBox:St.types.SPHERE|St.types.BOX,planeBox:St.types.PLANE|St.types.BOX,convexConvex:St.types.CONVEXPOLYHEDRON,sphereConvex:St.types.SPHERE|St.types.CONVEXPOLYHEDRON,planeConvex:St.types.PLANE|St.types.CONVEXPOLYHEDRON,boxConvex:St.types.BOX|St.types.CONVEXPOLYHEDRON,sphereHeightfield:St.types.SPHERE|St.types.HEIGHTFIELD,boxHeightfield:St.types.BOX|St.types.HEIGHTFIELD,convexHeightfield:St.types.CONVEXPOLYHEDRON|St.types.HEIGHTFIELD,sphereParticle:St.types.PARTICLE|St.types.SPHERE,planeParticle:St.types.PLANE|St.types.PARTICLE,boxParticle:St.types.BOX|St.types.PARTICLE,convexParticle:St.types.PARTICLE|St.types.CONVEXPOLYHEDRON,cylinderCylinder:St.types.CYLINDER,sphereCylinder:St.types.SPHERE|St.types.CYLINDER,planeCylinder:St.types.PLANE|St.types.CYLINDER,boxCylinder:St.types.BOX|St.types.CYLINDER,convexCylinder:St.types.CONVEXPOLYHEDRON|St.types.CYLINDER,heightfieldCylinder:St.types.HEIGHTFIELD|St.types.CYLINDER,particleCylinder:St.types.PARTICLE|St.types.CYLINDER,sphereTrimesh:St.types.SPHERE|St.types.TRIMESH,planeTrimesh:St.types.PLANE|St.types.TRIMESH};class J0{get[ae.sphereSphere](){return this.sphereSphere}get[ae.spherePlane](){return this.spherePlane}get[ae.boxBox](){return this.boxBox}get[ae.sphereBox](){return this.sphereBox}get[ae.planeBox](){return this.planeBox}get[ae.convexConvex](){return this.convexConvex}get[ae.sphereConvex](){return this.sphereConvex}get[ae.planeConvex](){return this.planeConvex}get[ae.boxConvex](){return this.boxConvex}get[ae.sphereHeightfield](){return this.sphereHeightfield}get[ae.boxHeightfield](){return this.boxHeightfield}get[ae.convexHeightfield](){return this.convexHeightfield}get[ae.sphereParticle](){return this.sphereParticle}get[ae.planeParticle](){return this.planeParticle}get[ae.boxParticle](){return this.boxParticle}get[ae.convexParticle](){return this.convexParticle}get[ae.cylinderCylinder](){return this.convexConvex}get[ae.sphereCylinder](){return this.sphereConvex}get[ae.planeCylinder](){return this.planeConvex}get[ae.boxCylinder](){return this.boxConvex}get[ae.convexCylinder](){return this.convexConvex}get[ae.heightfieldCylinder](){return this.heightfieldCylinder}get[ae.particleCylinder](){return this.particleCylinder}get[ae.sphereTrimesh](){return this.sphereTrimesh}get[ae.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new K0,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new D0(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,h=i.material||e.material;return l&&h&&l.restitution>=0&&h.restitution>=0&&(a.restitution=l.restitution*h.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const h=r.material||n.material,u=o.material||i.material;if(h&&u&&h.friction>=0&&u.friction>=0&&(l=h.friction*u.friction),l>0){const d=l*(a.frictionGravity||a.gravity).length();let f=n.invMass+i.invMass;f>0&&(f=1/f);const g=this.frictionEquationPool,v=g.length?g.pop():new Kc(n,i,d*f),m=g.length?g.pop():new Kc(n,i,d*f);return v.bi=m.bi=n,v.bj=m.bj=i,v.minForce=m.minForce=-d*f,v.maxForce=m.maxForce=d*f,v.ri.copy(t.ri),v.rj.copy(t.rj),m.ri.copy(t.ri),m.rj.copy(t.rj),t.ni.tangents(v.t,m.t),v.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),v.enabled=m.enabled=t.enabled,e.push(v,m),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Qn.setZero(),Ci.setZero(),Ri.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Qn.vadd(e.ni,Qn),Ci.vadd(e.ri,Ci),Ri.vadd(e.rj,Ri)):(Qn.vsub(e.ni,Qn),Ci.vadd(e.rj,Ci),Ri.vadd(e.ri,Ri));const o=1/t;Ci.scale(o,n.ri),Ri.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Qn.normalize(),Qn.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=ev,l=nv,h=Q0,u=tv;for(let d=0,f=t.length;d!==f;d++){const g=t[d],v=e[d];let m=null;g.material&&v.material&&(m=n.getContactMaterial(g.material,v.material)||null);const p=g.type&mt.KINEMATIC&&v.type&mt.STATIC||g.type&mt.STATIC&&v.type&mt.KINEMATIC||g.type&mt.KINEMATIC&&v.type&mt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],c),g.quaternion.vmult(g.shapeOffsets[_],h),h.vadd(g.position,h);const y=g.shapes[_];for(let x=0;x<v.shapes.length;x++){v.quaternion.mult(v.shapeOrientations[x],l),v.quaternion.vmult(v.shapeOffsets[x],u),u.vadd(v.position,u);const A=v.shapes[x];if(!(y.collisionFilterMask&A.collisionFilterGroup&&A.collisionFilterMask&y.collisionFilterGroup)||h.distanceTo(u)>y.boundingSphereRadius+A.boundingSphereRadius)continue;let E=null;y.material&&A.material&&(E=n.getContactMaterial(y.material,A.material)||null),this.currentContactMaterial=E||m||n.defaultContactMaterial;const C=y.type|A.type,I=this[C];if(I){let w=!1;y.type<A.type?w=I.call(this,y,A,h,u,c,l,g,v,y,A,p):w=I.call(this,A,y,u,h,l,c,v,g,y,A,p),w&&p&&(n.shapeOverlapKeeper.set(y.id,A.id),n.bodyOverlapKeeper.set(g.id,v.id))}}}}}sphereSphere(t,e,n,i,r,o,a,c,l,h,u){if(u)return n.distanceSquared(i)<(t.radius+e.radius)**2;const d=this.createContactEquation(a,c,t,e,l,h);i.vsub(n,d.ni),d.ni.normalize(),d.ri.copy(d.ni),d.rj.copy(d.ni),d.ri.scale(t.radius,d.ri),d.rj.scale(-e.radius,d.rj),d.ri.vadd(n,d.ri),d.ri.vsub(a.position,d.ri),d.rj.vadd(i,d.rj),d.rj.vsub(c.position,d.rj),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,c,l,h,u){const d=this.createContactEquation(a,c,t,e,l,h);if(d.ni.set(0,0,1),o.vmult(d.ni,d.ni),d.ni.negate(d.ni),d.ni.normalize(),d.ni.scale(t.radius,d.ri),n.vsub(i,tr),d.ni.scale(d.ni.dot(tr),Jc),tr.vsub(Jc,d.rj),-tr.dot(d.ni)<=t.radius){if(u)return!0;const f=d.ri,g=d.rj;f.vadd(n,f),f.vsub(a.position,f),g.vadd(i,g),g.vsub(c.position,g),this.result.push(d),this.createFrictionEquationsFromContact(d,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,u)}sphereBox(t,e,n,i,r,o,a,c,l,h,u){const d=this.v3pool,f=Cv;n.vsub(i,er),e.getSideNormals(f,o);const g=t.radius;let v=!1;const m=Pv,p=Lv,_=Iv;let y=null,x=0,A=0,E=0,C=null;for(let M=0,L=f.length;M!==L&&v===!1;M++){const T=bv;T.copy(f[M]);const F=T.length();T.normalize();const k=er.dot(T);if(k<F+g&&k>0){const q=Tv,H=Av;q.copy(f[(M+1)%3]),H.copy(f[(M+2)%3]);const et=q.length(),Z=H.length();q.normalize(),H.normalize();const J=er.dot(q),at=er.dot(H);if(J<et&&J>-et&&at<Z&&at>-Z){const st=Math.abs(k-F-g);if((C===null||st<C)&&(C=st,A=J,E=at,y=F,m.copy(T),p.copy(q),_.copy(H),x++,u))return!0}}}if(x){v=!0;const M=this.createContactEquation(a,c,t,e,l,h);m.scale(-g,M.ri),M.ni.copy(m),M.ni.negate(M.ni),m.scale(y,m),p.scale(A,p),m.vadd(p,m),_.scale(E,_),m.vadd(_,M.rj),M.ri.vadd(n,M.ri),M.ri.vsub(a.position,M.ri),M.rj.vadd(i,M.rj),M.rj.vsub(c.position,M.rj),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}let I=d.get();const w=Rv;for(let M=0;M!==2&&!v;M++)for(let L=0;L!==2&&!v;L++)for(let T=0;T!==2&&!v;T++)if(I.set(0,0,0),M?I.vadd(f[0],I):I.vsub(f[0],I),L?I.vadd(f[1],I):I.vsub(f[1],I),T?I.vadd(f[2],I):I.vsub(f[2],I),i.vadd(I,w),w.vsub(n,w),w.lengthSquared()<g*g){if(u)return!0;v=!0;const F=this.createContactEquation(a,c,t,e,l,h);F.ri.copy(w),F.ri.normalize(),F.ni.copy(F.ri),F.ri.scale(g,F.ri),F.rj.copy(I),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}d.release(I),I=null;const S=d.get(),D=d.get(),z=d.get(),N=d.get(),O=d.get(),B=f.length;for(let M=0;M!==B&&!v;M++)for(let L=0;L!==B&&!v;L++)if(M%3!==L%3){f[L].cross(f[M],S),S.normalize(),f[M].vadd(f[L],D),z.copy(n),z.vsub(D,z),z.vsub(i,z);const T=z.dot(S);S.scale(T,N);let F=0;for(;F===M%3||F===L%3;)F++;O.copy(n),O.vsub(N,O),O.vsub(D,O),O.vsub(i,O);const k=Math.abs(T),q=O.length();if(k<f[F].length()&&q<g){if(u)return!0;v=!0;const H=this.createContactEquation(a,c,t,e,l,h);D.vadd(N,H.rj),H.rj.copy(H.rj),O.negate(H.ni),H.ni.normalize(),H.ri.copy(H.rj),H.ri.vadd(i,H.ri),H.ri.vsub(n,H.ri),H.ri.normalize(),H.ri.scale(g,H.ri),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(c.position,H.rj),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult)}}d.release(S,D,z,N,O)}planeBox(t,e,n,i,r,o,a,c,l,h,u){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,u)}convexConvex(t,e,n,i,r,o,a,c,l,h,u,d,f){const g=Yv;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,g,d,f)){const v=[],m=Zv;t.clipAgainstHull(n,r,e,i,o,g,-100,100,v);let p=0;for(let _=0;_!==v.length;_++){if(u)return!0;const y=this.createContactEquation(a,c,t,e,l,h),x=y.ri,A=y.rj;g.negate(y.ni),v[_].normal.negate(m),m.scale(v[_].depth,m),v[_].point.vadd(m,x),A.copy(v[_].point),x.vsub(n,x),A.vsub(i,A),x.vadd(n,x),x.vsub(a.position,x),A.vadd(i,A),A.vsub(c.position,A),this.result.push(y),p++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(y,this.frictionResult)}this.enableFrictionReduction&&p&&this.createFrictionFromAverage(p)}}sphereConvex(t,e,n,i,r,o,a,c,l,h,u){const d=this.v3pool;n.vsub(i,Dv);const f=e.faceNormals,g=e.faces,v=e.vertices,m=t.radius;let p=!1;for(let _=0;_!==v.length;_++){const y=v[_],x=Ov;o.vmult(y,x),i.vadd(x,x);const A=Fv;if(x.vsub(n,A),A.lengthSquared()<m*m){if(u)return!0;p=!0;const E=this.createContactEquation(a,c,t,e,l,h);E.ri.copy(A),E.ri.normalize(),E.ni.copy(E.ri),E.ri.scale(m,E.ri),x.vsub(i,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),E.rj.vadd(i,E.rj),E.rj.vsub(c.position,E.rj),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);return}}for(let _=0,y=g.length;_!==y&&p===!1;_++){const x=f[_],A=g[_],E=zv;o.vmult(x,E);const C=Bv;o.vmult(v[A[0]],C),C.vadd(i,C);const I=kv;E.scale(-m,I),n.vadd(I,I);const w=Hv;I.vsub(C,w);const S=w.dot(E),D=Vv;if(n.vsub(C,D),S<0&&D.dot(E)>0){const z=[];for(let N=0,O=A.length;N!==O;N++){const B=d.get();o.vmult(v[A[N]],B),i.vadd(B,B),z.push(B)}if(wv(z,E,n)){if(u)return!0;p=!0;const N=this.createContactEquation(a,c,t,e,l,h);E.scale(-m,N.ri),E.negate(N.ni);const O=d.get();E.scale(-S,O);const B=d.get();E.scale(-m,B),n.vsub(i,N.rj),N.rj.vadd(B,N.rj),N.rj.vadd(O,N.rj),N.rj.vadd(i,N.rj),N.rj.vsub(c.position,N.rj),N.ri.vadd(n,N.ri),N.ri.vsub(a.position,N.ri),d.release(O),d.release(B),this.result.push(N),this.createFrictionEquationsFromContact(N,this.frictionResult);for(let M=0,L=z.length;M!==L;M++)d.release(z[M]);return}else for(let N=0;N!==A.length;N++){const O=d.get(),B=d.get();o.vmult(v[A[(N+1)%A.length]],O),o.vmult(v[A[(N+2)%A.length]],B),i.vadd(O,O),i.vadd(B,B);const M=Uv;B.vsub(O,M);const L=Nv;M.unit(L);const T=d.get(),F=d.get();n.vsub(O,F);const k=F.dot(L);L.scale(k,T),T.vadd(O,T);const q=d.get();if(T.vsub(n,q),k>0&&k*k<M.lengthSquared()&&q.lengthSquared()<m*m){if(u)return!0;const H=this.createContactEquation(a,c,t,e,l,h);T.vsub(i,H.rj),T.vsub(n,H.ni),H.ni.normalize(),H.ni.scale(m,H.ri),H.rj.vadd(i,H.rj),H.rj.vsub(c.position,H.rj),H.ri.vadd(n,H.ri),H.ri.vsub(a.position,H.ri),this.result.push(H),this.createFrictionEquationsFromContact(H,this.frictionResult);for(let et=0,Z=z.length;et!==Z;et++)d.release(z[et]);d.release(O),d.release(B),d.release(T),d.release(q),d.release(F);return}d.release(O),d.release(B),d.release(T),d.release(q),d.release(F)}for(let N=0,O=z.length;N!==O;N++)d.release(z[N])}}}planeConvex(t,e,n,i,r,o,a,c,l,h,u){const d=Gv,f=Wv;f.set(0,0,1),r.vmult(f,f);let g=0;const v=Xv;for(let m=0;m!==e.vertices.length;m++)if(d.copy(e.vertices[m]),o.vmult(d,d),i.vadd(d,d),d.vsub(n,v),f.dot(v)<=0){if(u)return!0;const _=this.createContactEquation(a,c,t,e,l,h),y=qv;f.scale(f.dot(v),y),d.vsub(y,y),y.vsub(n,_.ri),_.ni.copy(f),d.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,r,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,u)}sphereHeightfield(t,e,n,i,r,o,a,c,l,h,u){const d=e.data,f=t.radius,g=e.elementSize,v=o_,m=r_;$t.pointToLocalFrame(i,o,n,m);let p=Math.floor((m.x-f)/g)-1,_=Math.ceil((m.x+f)/g)+1,y=Math.floor((m.y-f)/g)-1,x=Math.ceil((m.y+f)/g)+1;if(_<0||x<0||p>d.length||y>d[0].length)return;p<0&&(p=0),_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),p>=d.length&&(p=d.length-1),_>=d.length&&(_=d.length-1),x>=d[0].length&&(x=d[0].length-1),y>=d[0].length&&(y=d[0].length-1);const A=[];e.getRectMinMax(p,y,_,x,A);const E=A[0],C=A[1];if(m.z-f>C||m.z+f<E)return;const I=this.result;for(let w=p;w<_;w++)for(let S=y;S<x;S++){const D=I.length;let z=!1;if(e.getConvexTrianglePillar(w,S,!1),$t.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,c,t,e,u)),u&&z||(e.getConvexTrianglePillar(w,S,!0),$t.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.sphereConvex(t,e.pillarConvex,n,v,r,o,a,c,t,e,u)),u&&z))return!0;if(I.length-D>2)return}}boxHeightfield(t,e,n,i,r,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,u)}convexHeightfield(t,e,n,i,r,o,a,c,l,h,u){const d=e.data,f=e.elementSize,g=t.boundingSphereRadius,v=i_,m=s_,p=n_;$t.pointToLocalFrame(i,o,n,p);let _=Math.floor((p.x-g)/f)-1,y=Math.ceil((p.x+g)/f)+1,x=Math.floor((p.y-g)/f)-1,A=Math.ceil((p.y+g)/f)+1;if(y<0||A<0||_>d.length||x>d[0].length)return;_<0&&(_=0),y<0&&(y=0),x<0&&(x=0),A<0&&(A=0),_>=d.length&&(_=d.length-1),y>=d.length&&(y=d.length-1),A>=d[0].length&&(A=d[0].length-1),x>=d[0].length&&(x=d[0].length-1);const E=[];e.getRectMinMax(_,x,y,A,E);const C=E[0],I=E[1];if(!(p.z-g>I||p.z+g<C))for(let w=_;w<y;w++)for(let S=x;S<A;S++){let D=!1;if(e.getConvexTrianglePillar(w,S,!1),$t.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,c,null,null,u,m,null)),u&&D||(e.getConvexTrianglePillar(w,S,!0),$t.pointToWorldFrame(i,o,e.pillarOffset,v),n.distanceTo(v)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(D=this.convexConvex(t,e.pillarConvex,n,v,r,o,a,c,null,null,u,m,null)),u&&D))return!0}}sphereParticle(t,e,n,i,r,o,a,c,l,h,u){const d=Jv;if(d.set(0,0,1),i.vsub(n,d),d.lengthSquared()<=t.radius*t.radius){if(u)return!0;const g=this.createContactEquation(c,a,e,t,l,h);d.normalize(),g.rj.copy(d),g.rj.scale(t.radius,g.rj),g.ni.copy(d),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,c,l,h,u){const d=$v;d.set(0,0,1),a.quaternion.vmult(d,d);const f=jv;if(i.vsub(a.position,f),d.dot(f)<=0){if(u)return!0;const v=this.createContactEquation(c,a,e,t,l,h);v.ni.copy(d),v.ni.negate(v.ni),v.ri.set(0,0,0);const m=Kv;d.scale(d.dot(i),m),i.vsub(m,m),v.rj.copy(m),this.result.push(v),this.createFrictionEquationsFromContact(v,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,c,l,h,u){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,u)}convexParticle(t,e,n,i,r,o,a,c,l,h,u){let d=-1;const f=t_,g=e_;let v=null;const m=Qv;if(m.copy(i),m.vsub(n,m),r.conjugate(Qc),Qc.vmult(m,m),t.pointIsInside(m)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let p=0,_=t.faces.length;p!==_;p++){const y=[t.worldVertices[t.faces[p][0]]],x=t.worldFaceNormals[p];i.vsub(y[0],tl);const A=-x.dot(tl);if(v===null||Math.abs(A)<Math.abs(v)){if(u)return!0;v=A,d=p,f.copy(x)}}if(d!==-1){const p=this.createContactEquation(c,a,e,t,l,h);f.scale(v,g),g.vadd(i,g),g.vsub(n,g),p.rj.copy(g),f.negate(p.ni),p.ri.set(0,0,0);const _=p.ri,y=p.rj;_.vadd(i,_),_.vsub(c.position,_),y.vadd(n,y),y.vsub(a.position,y),this.result.push(p),this.createFrictionEquationsFromContact(p,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,c,l,h,u){return this.convexHeightfield(e,t,i,n,o,r,c,a,l,h,u)}particleCylinder(t,e,n,i,r,o,a,c,l,h,u){return this.convexParticle(e,t,i,n,o,r,c,a,l,h,u)}sphereTrimesh(t,e,n,i,r,o,a,c,l,h,u){const d=hv,f=uv,g=dv,v=fv,m=pv,p=mv,_=xv,y=lv,x=av,A=yv;$t.pointToLocalFrame(i,o,n,m);const E=t.radius;_.lowerBound.set(m.x-E,m.y-E,m.z-E),_.upperBound.set(m.x+E,m.y+E,m.z+E),e.getTrianglesInAABB(_,A);const C=cv,I=t.radius*t.radius;for(let N=0;N<A.length;N++)for(let O=0;O<3;O++)if(e.getVertex(e.indices[A[N]*3+O],C),C.vsub(m,x),x.lengthSquared()<=I){if(y.copy(C),$t.pointToWorldFrame(i,o,y,C),C.vsub(n,x),u)return!0;let B=this.createContactEquation(a,c,t,e,l,h);B.ni.copy(x),B.ni.normalize(),B.ri.copy(B.ni),B.ri.scale(t.radius,B.ri),B.ri.vadd(n,B.ri),B.ri.vsub(a.position,B.ri),B.rj.copy(C),B.rj.vsub(c.position,B.rj),this.result.push(B),this.createFrictionEquationsFromContact(B,this.frictionResult)}for(let N=0;N<A.length;N++)for(let O=0;O<3;O++){e.getVertex(e.indices[A[N]*3+O],d),e.getVertex(e.indices[A[N]*3+(O+1)%3],f),f.vsub(d,g),m.vsub(f,p);const B=p.dot(g);m.vsub(d,p);let M=p.dot(g);if(M>0&&B<0&&(m.vsub(d,p),v.copy(g),v.normalize(),M=p.dot(v),v.scale(M,p),p.vadd(d,p),p.distanceTo(m)<t.radius)){if(u)return!0;const T=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,T.ni),T.ni.normalize(),T.ni.scale(t.radius,T.ri),T.ri.vadd(n,T.ri),T.ri.vsub(a.position,T.ri),$t.pointToWorldFrame(i,o,p,p),p.vsub(c.position,T.rj),$t.vectorToWorldFrame(o,T.ni,T.ni),$t.vectorToWorldFrame(o,T.ri,T.ri),this.result.push(T),this.createFrictionEquationsFromContact(T,this.frictionResult)}}const w=gv,S=vv,D=_v,z=ov;for(let N=0,O=A.length;N!==O;N++){e.getTriangleVertices(A[N],w,S,D),e.getNormal(A[N],z),m.vsub(w,p);let B=p.dot(z);if(z.scale(B,p),m.vsub(p,p),B=p.distanceTo(m),fe.pointInTriangle(p,w,S,D)&&B<t.radius){if(u)return!0;let M=this.createContactEquation(a,c,t,e,l,h);p.vsub(m,M.ni),M.ni.normalize(),M.ni.scale(t.radius,M.ri),M.ri.vadd(n,M.ri),M.ri.vsub(a.position,M.ri),$t.pointToWorldFrame(i,o,p,p),p.vsub(c.position,M.rj),$t.vectorToWorldFrame(o,M.ni,M.ni),$t.vectorToWorldFrame(o,M.ri,M.ri),this.result.push(M),this.createFrictionEquationsFromContact(M,this.frictionResult)}}A.length=0}planeTrimesh(t,e,n,i,r,o,a,c,l,h,u){const d=new b,f=iv;f.set(0,0,1),r.vmult(f,f);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,d);const v=new b;v.copy(d),$t.pointToWorldFrame(i,o,v,d);const m=sv;if(d.vsub(n,m),f.dot(m)<=0){if(u)return!0;const _=this.createContactEquation(a,c,t,e,l,h);_.ni.copy(f);const y=rv;f.scale(m.dot(f),y),d.vsub(y,y),_.ri.copy(y),_.ri.vsub(a.position,_.ri),_.rj.copy(d),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Qn=new b,Ci=new b,Ri=new b,Q0=new b,tv=new b,ev=new pe,nv=new pe,iv=new b,sv=new b,rv=new b,ov=new b,av=new b;new b;const cv=new b,lv=new b,hv=new b,uv=new b,dv=new b,fv=new b,pv=new b,mv=new b,gv=new b,vv=new b,_v=new b,xv=new Ve,yv=[],tr=new b,Jc=new b,Mv=new b,Sv=new b,Ev=new b;function wv(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=Mv;s[(r+1)%i].vsub(o,a);const c=Sv;a.cross(t,c);const l=Ev;e.vsub(o,l);const h=c.dot(l);if(n===null||h>0&&n===!0||h<=0&&n===!1){n===null&&(n=h>0);continue}else return!1}return!0}const er=new b,bv=new b,Tv=new b,Av=new b,Cv=[new b,new b,new b,new b,new b,new b],Rv=new b,Pv=new b,Lv=new b,Iv=new b,Dv=new b,Uv=new b,Nv=new b,Fv=new b,Ov=new b,zv=new b,Bv=new b,kv=new b,Hv=new b,Vv=new b;new b;new b;const Gv=new b,Wv=new b,Xv=new b,qv=new b,Yv=new b,Zv=new b,$v=new b,jv=new b,Kv=new b,Jv=new b,Qc=new pe,Qv=new b;new b;const t_=new b,tl=new b,e_=new b,n_=new b,i_=new b,s_=[0],r_=new b,o_=new b;class el{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let c=0;c<r;c++){let l=!1;const h=n[c];for(;h>i[a];)a++;l=h===i[a],l||nl(t,h)}a=0;for(let c=0;c<o;c++){let l=!1;const h=i[c];for(;h>n[a];)a++;l=n[a]===h,l||nl(e,h)}}}function nl(s,t){s.push((t&4294901760)>>16,t&65535)}const no=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class a_{constructor(){this.data={keys:[]}}get(t,e){const n=no(t,e);return this.data[n]}set(t,e,n){const i=no(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=no(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class c_ extends Kl{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new p0,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new q0,this.constraints=[],this.narrowphase=new J0(this),this.collisionMatrix=new Hc,this.collisionMatrixPrevious=new Hc,this.bodyOverlapKeeper=new el,this.shapeOverlapKeeper=new el,this.contactmaterials=[],this.contactMaterialTable=new a_,this.defaultMaterial=new hi("default"),this.defaultContactMaterial=new Mr(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof gr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.ALL,n.from=t,n.to=e,n.callback=i,io.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.ANY,n.from=t,n.to=e,n.result=i,io.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=fe.CLOSEST,n.from=t,n.to=e,n.result=i,io.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof mt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ge.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ge.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(ge.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=f_,i=p_,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,h=this.profile,u=mt.DYNAMIC;let d=-1/0;const f=this.constraints,g=d_;c.length();const v=c.x,m=c.y,p=c.z;let _=0;for(l&&(d=ge.now()),_=0;_!==r;_++){const N=o[_];if(N.type===u){const O=N.force,B=N.mass;O.x+=B*v,O.y+=B*m,O.z+=B*p}}for(let N=0,O=this.subsystems.length;N!==O;N++)this.subsystems[N].update();l&&(d=ge.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(h.broadphase=ge.now()-d);let y=f.length;for(_=0;_!==y;_++){const N=f[_];if(!N.collideConnected)for(let O=n.length-1;O>=0;O-=1)(N.bodyA===n[O]&&N.bodyB===i[O]||N.bodyB===n[O]&&N.bodyA===i[O])&&(n.splice(O,1),i.splice(O,1))}this.collisionMatrixTick(),l&&(d=ge.now());const x=u_,A=e.length;for(_=0;_!==A;_++)x.push(e[_]);e.length=0;const E=this.frictionEquations.length;for(_=0;_!==E;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,x,this.frictionEquations,g),l&&(h.narrowphase=ge.now()-d),l&&(d=ge.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const C=e.length;for(let N=0;N!==C;N++){const O=e[N],B=O.bi,M=O.bj,L=O.si,T=O.sj;let F;if(B.material&&M.material?F=this.getContactMaterial(B.material,M.material)||this.defaultContactMaterial:F=this.defaultContactMaterial,F.friction,B.material&&M.material&&(B.material.friction>=0&&M.material.friction>=0&&B.material.friction*M.material.friction,B.material.restitution>=0&&M.material.restitution>=0&&(O.restitution=B.material.restitution*M.material.restitution)),a.addEquation(O),B.allowSleep&&B.type===mt.DYNAMIC&&B.sleepState===mt.SLEEPING&&M.sleepState===mt.AWAKE&&M.type!==mt.STATIC){const k=M.velocity.lengthSquared()+M.angularVelocity.lengthSquared(),q=M.sleepSpeedLimit**2;k>=q*2&&(B.wakeUpAfterNarrowphase=!0)}if(M.allowSleep&&M.type===mt.DYNAMIC&&M.sleepState===mt.SLEEPING&&B.sleepState===mt.AWAKE&&B.type!==mt.STATIC){const k=B.velocity.lengthSquared()+B.angularVelocity.lengthSquared(),q=B.sleepSpeedLimit**2;k>=q*2&&(M.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(B,M,!0),this.collisionMatrixPrevious.get(B,M)||(cs.body=M,cs.contact=O,B.dispatchEvent(cs),cs.body=B,M.dispatchEvent(cs)),this.bodyOverlapKeeper.set(B.id,M.id),this.shapeOverlapKeeper.set(L.id,T.id)}for(this.emitContactEvents(),l&&(h.makeContactConstraints=ge.now()-d,d=ge.now()),_=0;_!==r;_++){const N=o[_];N.wakeUpAfterNarrowphase&&(N.wakeUp(),N.wakeUpAfterNarrowphase=!1)}for(y=f.length,_=0;_!==y;_++){const N=f[_];N.update();for(let O=0,B=N.equations.length;O!==B;O++){const M=N.equations[O];a.addEquation(M)}}a.solve(t,this),l&&(h.solve=ge.now()-d),a.removeAllEquations();const I=Math.pow;for(_=0;_!==r;_++){const N=o[_];if(N.type&u){const O=I(1-N.linearDamping,t),B=N.velocity;B.scale(O,B);const M=N.angularVelocity;if(M){const L=I(1-N.angularDamping,t);M.scale(L,M)}}}this.dispatchEvent(h_),l&&(d=ge.now());const S=this.stepnumber%(this.quatNormalizeSkip+1)===0,D=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(t,S,D);this.clearForces(),this.broadphase.dirty=!0,l&&(h.integrate=ge.now()-d),this.stepnumber+=1,this.dispatchEvent(l_);let z=!0;if(this.allowSleep)for(z=!1,_=0;_!==r;_++){const N=o[_];N.sleepTick(this.time),N.sleepState!==mt.SLEEPING&&(z=!0)}this.hasActiveBodies=z}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(Sn,En),t){for(let r=0,o=Sn.length;r<o;r+=2)ls.bodyA=this.getBodyById(Sn[r]),ls.bodyB=this.getBodyById(Sn[r+1]),this.dispatchEvent(ls);ls.bodyA=ls.bodyB=null}if(e){for(let r=0,o=En.length;r<o;r+=2)hs.bodyA=this.getBodyById(En[r]),hs.bodyB=this.getBodyById(En[r+1]),this.dispatchEvent(hs);hs.bodyA=hs.bodyB=null}Sn.length=En.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(Sn,En),n){for(let r=0,o=Sn.length;r<o;r+=2){const a=this.getShapeById(Sn[r]),c=this.getShapeById(Sn[r+1]);wn.shapeA=a,wn.shapeB=c,a&&(wn.bodyA=a.body),c&&(wn.bodyB=c.body),this.dispatchEvent(wn)}wn.bodyA=wn.bodyB=wn.shapeA=wn.shapeB=null}if(i){for(let r=0,o=En.length;r<o;r+=2){const a=this.getShapeById(En[r]),c=this.getShapeById(En[r+1]);bn.shapeA=a,bn.shapeB=c,a&&(bn.bodyA=a.body),c&&(bn.bodyB=c.body),this.dispatchEvent(bn)}bn.bodyA=bn.bodyB=bn.shapeA=bn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Ve;const io=new fe,ge=globalThis.performance||{};if(!ge.now){let s=Date.now();ge.timing&&ge.timing.navigationStart&&(s=ge.timing.navigationStart),ge.now=()=>Date.now()-s}new b;const l_={type:"postStep"},h_={type:"preStep"},cs={type:mt.COLLIDE_EVENT_NAME,body:null,contact:null},u_=[],d_=[],f_=[],p_=[],Sn=[],En=[],ls={type:"beginContact",bodyA:null,bodyB:null},hs={type:"endContact",bodyA:null,bodyB:null},wn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},bn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},m_=.5*(Math.sqrt(3)-1),us=(3-Math.sqrt(3))/6,il=[[1,1],[-1,1],[1,-1],[-1,-1],[1,0],[-1,0],[0,1],[0,-1]],ii=new Uint8Array(512),Di=new Uint8Array(256);for(let s=0;s<256;s++)Di[s]=s;let so=20260322;for(let s=255;s>0;s--){so=so*16807%2147483647;const t=so%(s+1),e=Di[s];Di[s]=Di[t],Di[t]=e}for(let s=0;s<512;s++)ii[s]=Di[s&255];function sl(s,t){const e=(s+t)*m_,n=Math.floor(s+e),i=Math.floor(t+e),r=(n+i)*us,o=s-(n-r),a=t-(i-r),c=o>a?1:0,l=o>a?0:1,h=o-c+us,u=a-l+us,d=o-1+2*us,f=a-1+2*us,g=n&255,v=i&255;let m=0;const p=[[o,a,ii[g+ii[v]]%8],[h,u,ii[g+c+ii[v+l]]%8],[d,f,ii[g+1+ii[v+1]]%8]];for(const[_,y,x]of p){let A=.5-_*_-y*y;A>0&&(A*=A,m+=A*A*(il[x][0]*_+il[x][1]*y))}return 70*m}function g_(s){const t=Math.min(1,Math.max(0,s));return t*t*(3-2*t)}function v_({ground:s,deck:t,distToAbutment:e,approach:n,waterY:i=-1/0,wet:r=!1}){if(r)return Math.max(t,Number.isFinite(i)?i+1.15:t);const o=Math.max(8,n),a=g_((e??o)/o);return s*(1-a)+t*a}function __({bankTop:s,waterClear:t,overpass:e,abutmentTop:n}){if(e||!Number.isFinite(t))return(Number.isFinite(n)?n:Number.isFinite(s)?s:0)+4.5;const i=(Number.isFinite(s)?s:n)+.4;return Math.max(i,t)}function Ma(s,t){let e=1/0,n=-1/0,i=0;const r=s.length||1;for(const l of s)e=Math.min(e,l),n=Math.max(n,l),i+=l;Number.isFinite(e)||(e=0,n=0,i=0);const o=i/r,a=Math.max(2.7,Math.min(t,3.4));return{eave:Math.max(o+t,n+a),min:e,max:n,mid:o}}const ro=76,hn=10,x_=3.15;class Qo{constructor(t,e=0){this.view=new DataView(t),this.o=e}u8(){const t=this.view.getUint8(this.o);return this.o+=1,t}u16(){const t=this.view.getUint16(this.o,!0);return this.o+=2,t}i16(){const t=this.view.getInt16(this.o,!0);return this.o+=2,t}u32(){const t=this.view.getUint32(this.o,!0);return this.o+=4,t}f32(){const t=this.view.getFloat32(this.o,!0);return this.o+=4,t}f64(){const t=this.view.getFloat64(this.o,!0);return this.o+=8,t}}function rl(s,t,e,n,i,r){const o=i-e,a=r-n,c=o*o+a*a||1,l=Math.max(0,Math.min(1,((s-e)*o+(t-n)*a)/c)),h=s-(e+o*l),u=t-(n+a*l);return{d:Math.hypot(h,u),t:l,x:e+o*l,z:n+a*l,dx:o,dz:a}}function y_(s,t,e){let n=!1;for(let i=0,r=e.length-2;i<e.length;i+=2){const o=e[i],a=e[i+1],c=e[r],l=e[r+1];a>t!=l>t&&s<(c-o)*(t-a)/(l-a||1e-9)+o&&(n=!n),r=i}return n}function M_(s,t){const e=new Qo(s),n=String.fromCharCode(e.u8(),e.u8(),e.u8(),e.u8());if(n!=="SHX1")throw new Error(`bad world pack ${n}`);const i=e.u32();if(i!==1)throw new Error(`world pack version ${i}`);const r=e.f64(),o=e.f64(),a={minX:e.f32(),minZ:e.f32(),maxX:e.f32(),maxZ:e.f32()},c=e.f32(),l=e.u32(),h=e.u32(),u={w:l,h,minX:e.f32(),minZ:e.f32(),maxX:e.f32(),maxZ:e.f32(),base:e.f32()},d=e.u32();if(e.o!==ro)throw new Error(`header ended at ${e.o}`);u.stepX=(u.maxX-u.minX)/(u.w-1),u.stepZ=(u.maxZ-u.minZ)/(u.h-1),u.heights=new Float32Array(s,ro,l*h);const f=ro+l*h*4,g=new Qo(s,f),v=[];for(let A=0;A<d;A++)v.push({cx:g.i16(),cz:g.i16(),offset:g.u32(),length:g.u32()});const m=new Map,p=[],_=[];let y=0;for(const A of v){const E=S_(s,A,c);m.set(`${A.cx},${A.cz}`,E),y+=E.buildings.length;for(const C of E.roads)C.cls<=4&&p.push(C),C.flags&1&&_.push(C)}const x={meta:t,originLat:r,originLon:o,bounds:a,chunkSize:c,dem:u,chunks:m,overviewRoads:p,bridges:_,decodedBuildings:y,pois:t.pois,spawn:t.spawn,carSpawns:t.carSpawns,counts:t.counts};return E_(x),T_(x),x}function S_(s,t,e){const n=new Qo(s,t.offset),i=t.offset+t.length,r=t.cx*e,o=t.cz*e,a=(_,y)=>[r+_/100,o+y/100],c=[],l=n.u16();for(let _=0;_<l;_++){const y=n.u8(),x=n.u8(),A=n.u8(),E=n.u8(),C=new Float32Array(E*2);let I=1/0,w=1/0,S=-1/0,D=-1/0;for(let z=0;z<E;z++){const[N,O]=a(n.i16(),n.i16());C[z*2]=N,C[z*2+1]=O,I=Math.min(I,N),w=Math.min(w,O),S=Math.max(S,N),D=Math.max(D,O)}c.push({type:y,floors:x,flags:A,pts:C,minX:I,minZ:w,maxX:S,maxZ:D,height:Math.max(1,x)*x_})}const h=[],u=n.u16();for(let _=0;_<u;_++){const y=n.u8(),x=n.u8()/10,A=n.u8(),E=n.u8(),C=new Float32Array(E*2);for(let I=0;I<E;I++){const[w,S]=a(n.i16(),n.i16());C[I*2]=w,C[I*2+1]=S}h.push({cls:y,width:x,flags:A,pts:C,deckY:null})}const d=[],f=n.u16();for(let _=0;_<f;_++){const y=n.u8(),x=n.u8(),A=n.u16(),E=new Float32Array(A*2);for(let C=0;C<A;C++){const[I,w]=a(n.i16(),n.i16());E[C*2]=I,E[C*2+1]=w}d.push({kind:y,width:x,pts:E})}const g=[],v=n.u16();for(let _=0;_<v;_++){const[y,x]=a(n.i16(),n.i16());g.push({x:y,z:x,kind:n.u8()})}const m=[],p=n.u16();for(let _=0;_<p;_++){const[y,x]=a(n.i16(),n.i16());m.push({x:y,z:x})}if(n.o!==i)throw new Error(`chunk ${t.cx},${t.cz} decoded ${n.o-t.offset} of ${t.length}`);return{cx:t.cx,cz:t.cz,buildings:c,roads:h,waters:d,trees:g,lights:m}}function E_(s){const{dem:t}=s,e=Math.ceil((t.maxX-t.minX)/hn)+1,n=Math.ceil((t.maxZ-t.minZ)/hn)+1,i=new Uint8Array(e*n),r=(c,l,h)=>{const u=Math.floor((c-t.minX)/hn),d=Math.floor((l-t.minZ)/hn);if(u<0||d<0||u>=e||d>=n)return;const f=d*e+u;i[f]<h&&(i[f]=h)},o=(c,l,h)=>{l<c&&([c,l]=[l,c]);for(let u=c;u<=l;u+=hn*.8)r(u,h,2)};for(const c of s.chunks.values())for(const l of c.waters)l.kind===0&&l.pts.length>=6?w_(l.pts,o):b_(l.pts,Math.max(l.width||8,8),r);const a=i.slice();for(let c=0;c<2;c++){const l=a.slice();for(let h=1;h<n-1;h++)for(let u=1;u<e-1;u++){const d=h*e+u;a[d]!==2&&(a[d-1]===2||a[d+1]===2||a[d-e]===2||a[d+e]===2)&&(l[d]=Math.max(l[d],1))}a.set(l)}s.mask=a,s.maskCols=e,s.maskRows=n}function w_(s,t){let e=1/0,n=-1/0;for(let i=1;i<s.length;i+=2)e=Math.min(e,s[i]),n=Math.max(n,s[i]);for(let i=e;i<=n;i+=hn){const r=[];for(let o=0;o<s.length;o+=2){const a=s[o],c=s[o+1],l=(o+2)%s.length,h=s[l],u=s[l+1];if(c!==u&&(i>=c&&i<u||i>=u&&i<c)){const d=(i-c)/(u-c);r.push(a+d*(h-a))}}r.sort((o,a)=>o-a);for(let o=0;o+1<r.length;o+=2)t(r[o],r[o+1],i)}}function b_(s,t,e){const n=t*.5;for(let i=0;i+3<s.length;i+=2){const r=s[i],o=s[i+1],a=s[i+2],c=s[i+3],l=Math.hypot(a-r,c-o),h=Math.max(1,Math.ceil(l/8));for(let u=0;u<=h;u++){const d=u/h,f=r+(a-r)*d,g=o+(c-o)*d;for(let v=-n;v<=n;v+=hn)for(let m=-n;m<=n;m+=hn)m*m+v*v<=n*n&&e(f+m,g+v,2)}}}function T_(s){const{dem:t}=s,e=4,n=Math.ceil((t.maxX-t.minX)/e)+1,i=Math.ceil((t.maxZ-t.minZ)/e)+1,r=new Uint8Array(n*i),o=(a,c,l)=>{const h=Math.floor((a-t.minX)/e),u=Math.floor((c-t.minZ)/e);if(h<0||u<0||h>=n||u>=i)return;const d=u*n+h;r[d]<l&&(r[d]=l)};for(const a of s.chunks.values())for(const c of a.roads)ol(c.pts,c.width*.5+1.2,(l,h)=>o(l,h,2)),ol(c.pts,c.width*.5+14,(l,h)=>o(l,h,1));s.roadField=r,s.roadCols=n,s.roadRows=i,s.roadCell=e}function ol(s,t,e){for(let i=0;i+3<s.length;i+=2){const r=s[i],o=s[i+1],a=s[i+2],c=s[i+3],l=Math.hypot(a-r,c-o),h=Math.max(1,Math.ceil(l/4)),u=Math.max(1,Math.ceil(t/4));for(let d=0;d<=h;d++){const f=d/h,g=r+(a-r)*f,v=o+(c-o)*f;for(let m=-u;m<=u;m++)for(let p=-u;p<=u;p++)(p*p+m*m)*4*4<=t*t&&e(g+p*4,v+m*4)}}}function A_(s){const t=s.bridges,e=t.map((h,u)=>u),n=h=>{for(;e[h]!==h;)e[h]=e[e[h]],h=e[h];return h},i=(h,u)=>{const d=n(h),f=n(u);d!==f&&(e[d]=f)},r=24,o=new Map,a=(h,u,d)=>{const f=`${Math.floor(h/r)},${Math.floor(u/r)}`;let g=o.get(f);g||(g=[],o.set(f,g)),g.push(d)};t.forEach((h,u)=>{a(h.pts[0],h.pts[1],u),a(h.pts[h.pts.length-2],h.pts[h.pts.length-1],u)});const c=new Set;for(const[h,u]of o){const[d,f]=h.split(",").map(Number),g=[];for(let v=-1;v<=1;v++)for(let m=-1;m<=1;m++){const p=o.get(`${d+m},${f+v}`);p&&g.push(...p)}for(let v=0;v<u.length;v++)for(let m=0;m<g.length;m++){const p=u[v],_=g[m];if(p>=_)continue;const y=`${p}:${_}`;if(c.has(y))continue;c.add(y);const x=t[p].pts,A=t[_].pts;[[x[0],x[1],A[0],A[1]],[x[0],x[1],A[A.length-2],A[A.length-1]],[x[x.length-2],x[x.length-1],A[0],A[1]],[x[x.length-2],x[x.length-1],A[A.length-2],A[A.length-1]]].some(([C,I,w,S])=>(C-w)**2+(I-S)**2<400)&&i(p,_)}}const l=new Map;t.forEach((h,u)=>{const d=n(u);let f=l.get(d);f||(f=[],l.set(d,f)),f.push(h)});for(const h of l.values()){const u=[];for(const x of h){const A=x.pts.length;u.push({x:x.pts[0],z:x.pts[1]}),u.push({x:x.pts[A-2],z:x.pts[A-1]})}const d=[];for(const x of u){let A=0;for(const E of u)E!==x&&(x.x-E.x)**2+(x.z-E.z)**2<144&&(A+=1);A===0&&d.push(x)}let f=-1/0,g=-1/0,v=-1/0,m=!1;for(const x of h)for(let A=0;A<x.pts.length;A+=2){const E=x.pts[A],C=x.pts[A+1],I=s.sampleDem(E,C);s.maskAt(E,C)===2?(m=!0,g=Math.max(g,I-.42+3.6)):f=Math.max(f,I)}for(const x of d)v=Math.max(v,s.sampleDem(x.x,x.z));let p=0;for(let x=0;x<d.length;x++)for(let A=x+1;A<d.length;A++)p=Math.max(p,Math.hypot(d[x].x-d[A].x,d[x].z-d[A].z));if(p===0)for(const x of h){const A=x.pts.length;p=Math.max(p,Math.hypot(x.pts[0]-x.pts[A-2],x.pts[1]-x.pts[A-1]))}const _=__({bankTop:f,waterClear:g,overpass:!m,abutmentTop:Number.isFinite(v)?v:f}),y=Math.min(52,Math.max(14,p*.38||28));for(const x of h)x.deckY=_,x.abutments=d,x.approach=y}}async function C_(s){s?.(.08,"loading");const[e,n]=await Promise.all([fetch("./world-meta.json"),fetch("./world.pack")]);if(!e.ok||!n.ok)throw new Error("missing world data");s?.(.4,"reading");const i=await e.json(),r=await n.arrayBuffer();s?.(.7,"shaping");const o=M_(r,i);return R_(o),A_(o),s?.(.9,"placing"),o}function R_(s){s.sampleDem=(t,e)=>{const{dem:n}=s,i=(t-n.minX)/n.stepX,r=(e-n.minZ)/n.stepZ,o=Math.max(0,Math.min(n.w-1,Math.floor(i))),a=Math.max(0,Math.min(n.h-1,Math.floor(r))),c=Math.min(n.w-1,o+1),l=Math.min(n.h-1,a+1),h=Math.max(0,Math.min(1,i-o)),u=Math.max(0,Math.min(1,r-a)),d=n.heights,f=d[a*n.w+o],g=d[a*n.w+c],v=d[l*n.w+o],m=d[l*n.w+c];return f*(1-h)*(1-u)+g*h*(1-u)+v*(1-h)*u+m*h*u},s.maskAt=(t,e)=>{const n=Math.floor((t-s.dem.minX)/hn),i=Math.floor((e-s.dem.minZ)/hn);return n<0||i<0||n>=s.maskCols||i>=s.maskRows?0:s.mask[i*s.maskCols+n]},s.detail=(t,e)=>sl(t*.011,e*.011)*.9+sl(t*.045,e*.045)*.28,s.roadValue=(t,e)=>{if(!s.roadField)return 0;const n=Math.floor((t-s.dem.minX)/s.roadCell),i=Math.floor((e-s.dem.minZ)/s.roadCell);return n<0||i<0||n>=s.roadCols||i>=s.roadRows?0:s.roadField[i*s.roadCols+n]},s.roadEase=(t,e)=>s.roadValue(t,e)>=1?0:1,s.onCarriage=(t,e)=>s.roadValue(t,e)>=2,s.terrainY=(t,e)=>{const n=s.sampleDem(t,e),i=s.maskAt(t,e),r=s.roadEase(t,e);return i===2?n-2.55:i===1?n-.55+s.detail(t,e)*.15*r:n+s.detail(t,e)*r},s.waterY=(t,e)=>s.sampleDem(t,e)-.42,s.bridgeY=(t,e,n)=>{let i=1e9;const r=n.abutments||[];for(const o of r)i=Math.min(i,Math.hypot(t-o.x,e-o.z));return r.length||(i=n.approach||40),v_({ground:s.terrainY(t,e)+.14,deck:n.deckY,distToAbutment:i,approach:n.approach||36,waterY:s.waterY(t,e),wet:s.maskAt(t,e)===2})},s.bridgeDeckAt=(t,e)=>{let n=null,i=8;for(const r of s.bridges)if(r.deckY!=null)for(let o=0;o+3<r.pts.length;o+=2){const a=rl(t,e,r.pts[o],r.pts[o+1],r.pts[o+2],r.pts[o+3]),c=r.width*.5+1.6;a.d<c&&a.d<i&&(i=a.d,n=s.bridgeY(a.x,a.z,r))}return n},s.surfaceAt=(t,e)=>{const n=s.bridgeDeckAt(t,e);if(n!=null)return n;if(s.maskAt(t,e)===2)return s.waterY(t,e);const i=s.terrainY(t,e);return s.onCarriage(t,e)?i+.14:i},s.chunkAt=(t,e)=>s.chunks.get(`${Math.floor(t/s.chunkSize)},${Math.floor(e/s.chunkSize)}`)||null,s.buildingsNear=(t,e,n)=>{const i=s.chunkSize,r=Math.floor((t-n)/i),o=Math.floor((t+n)/i),a=Math.floor((e-n)/i),c=Math.floor((e+n)/i),l=[];for(let h=a;h<=c;h++)for(let u=r;u<=o;u++){const d=s.chunks.get(`${u},${h}`);if(d)for(const f of d.buildings){if(f.maxX<t-n||f.minX>t+n||f.maxZ<e-n||f.minZ>e+n)continue;const g=(f.minX+f.maxX)*.5,v=(f.minZ+f.maxZ)*.5,m=g-t,p=v-e;l.push({b:f,d:m*m+p*p})}}return l.sort((h,u)=>h.d-u.d),l.slice(0,90).map(h=>h.b)},s.nearestRoad=(t,e,n=50)=>{let i=null,r=n;for(const o of s.overviewRoads){const a=o.pts;for(let c=0;c+3<a.length;c+=2){const l=rl(t,e,a[c],a[c+1],a[c+2],a[c+3]);if(l.d<r){r=l.d;const h=Math.hypot(l.dx,l.dz)||1;i={x:l.x,z:l.z,dirX:l.dx/h,dirZ:l.dz/h,width:o.width}}}}return i},s.baseY=t=>{let e=1/0,n=1/0;for(let i=0;i<t.length;i+=2){const r=s.terrainY(t[i],t[i+1]);n=Math.min(n,r),s.maskAt(t[i],t[i+1])<2&&(e=Math.min(e,r))}return(Number.isFinite(e)?e:n)-.12},s.insideBounds=(t,e,n=25)=>t>s.dem.minX+n&&t<s.dem.maxX-n&&e>s.dem.minZ+n&&e<s.dem.maxZ-n}function P_(s,t,e){return s.colorSpace=e?Le:Cn,s.wrapS=s.wrapT=t?gs:Rn,s.anisotropy=8,s}function al(s,t=!0,e=!0){return new Promise((n,i)=>{new Fg().load(s,r=>n(P_(r,t,e)),void 0,i)})}function L_(){const s=document.createElement("canvas");s.width=4,s.height=64;const t=s.getContext("2d");t.clearRect(0,0,4,64),t.fillStyle="#e6c94a",t.fillRect(0,2,4,24);const e=new Lg(s);return e.wrapS=Rn,e.wrapT=gs,e.colorSpace=Le,e.anisotropy=4,e}function oo(s,t=null){return new le({color:s,map:t,transparent:!!t,alphaTest:t?.4:0,roughness:.62,metalness:0,side:ve,polygonOffset:!0,polygonOffsetFactor:-4,polygonOffsetUnits:-4})}async function I_(){const t=(H,et=!0)=>al(`./textures/${H}`,et,!0),e=H=>al(`./textures/${H}`,!0,!1),[n,i,r,o,a,c,l,h,u,d,f,g,v,m,p,_,y,x,A,E,C]=await Promise.all([t("grass.png"),e("grass-normal.png"),t("asphalt.png"),e("asphalt-normal.png"),e("asphalt-rough.png"),t("concrete.png"),e("concrete-normal.png"),t("roof.png"),e("roof-normal.png"),t("brick.png"),e("brick-normal.png"),t("brick-lights.png"),t("stone.png"),e("stone-normal.png"),t("stone-lights.png"),t("glass.png"),e("glass-normal.png"),t("glass-lights.png"),t("tree-maple.png",!1),t("tree-autumn.png",!1),t("tree-pine.png",!1)]),I=new le({map:n,normalMap:i,normalScale:new Vt(.55,.55),vertexColors:!0,roughness:.96,metalness:0,side:ve}),w=ao(d,f,g,.86,.02,.9),S=ao(v,m,p,.8,.04,.75),D=ao(_,y,x,.16,.55,.4);D.envMapIntensity=1.05;const z=new le({map:h,normalMap:u,normalScale:new Vt(.7,.7),roughness:.9,metalness:.04,side:ve}),N=new le({map:r,normalMap:o,roughnessMap:a,normalScale:new Vt(.45,.45),roughness:.92,metalness:.04,side:ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1,envMapIntensity:.35}),O=new le({map:c,normalMap:l,normalScale:new Vt(.4,.4),roughness:.94,metalness:0,side:ve,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-1}),B=H=>new le({map:H,alphaTest:.35,side:ve,roughness:.84,metalness:0}),M=new le({color:"#3a4148",roughness:.5,metalness:.4}),L=new le({color:"#fff4cf",emissive:"#ffd27a",emissiveIntensity:.35,roughness:.35}),T=new le({color:"#c5c0b6",roughness:.86,metalness:.02,side:ve}),F=new le({color:"#b7b2a8",roughness:.9,metalness:0,side:ve}),k=new le({color:"#2a241f",roughness:.62,metalness:.08}),q=new pn({transparent:!0,depthWrite:!0,side:ve,glslVersion:fr,uniforms:{uTime:{value:0},uColor:{value:new Lt("#3f655c")},uDeep:{value:new Lt("#142824")},uSun:{value:new Y(.3,.8,.2)}},vertexShader:`
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
    `});return{terrain:I,brick:w,stone:S,glass:D,roof:z,road:N,sidewalk:O,lamp:M,lampHead:L,water:q,barrier:T,concrete:F,door:k,markDash:oo("#ffffff",L_()),markSolid:oo("#e6c94a"),markWhite:oo("#f3f1ea"),trees:{maple:B(A),autumn:B(E),pine:B(C)},facades:[w,S,D]}}function ao(s,t,e,n,i,r){return new le({map:s,normalMap:t,normalScale:new Vt(r,r),emissiveMap:e,emissive:new Lt("#ffe0b0"),emissiveIntensity:.02,roughness:n,metalness:i,vertexColors:!0,side:ve,envMapIntensity:.55})}function oh(s){return s.flags&1||s.type===2?"glass":s.type===1||s.type===3||s.type===4?"stone":"brick"}function D_(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var nr={exports:{}},cl;function U_(){if(cl)return nr.exports;cl=1,nr.exports=s,nr.exports.default=s;function s(M,L,T){T=T||2;var F=L&&L.length,k=F?L[0]*T:M.length,q=t(M,0,k,T,!0),H=[];if(!q||q.next===q.prev)return H;var et,Z,J,at,st,lt,Et;if(F&&(q=c(M,L,q,T)),M.length>80*T){et=J=M[0],Z=at=M[1];for(var _t=T;_t<k;_t+=T)st=M[_t],lt=M[_t+1],st<et&&(et=st),lt<Z&&(Z=lt),st>J&&(J=st),lt>at&&(at=lt);Et=Math.max(J-et,at-Z),Et=Et!==0?32767/Et:0}return n(q,H,T,et,Z,Et,0),H}function t(M,L,T,F,k){var q,H;if(k===B(M,L,T,F)>0)for(q=L;q<T;q+=F)H=z(q,M[q],M[q+1],H);else for(q=T-F;q>=L;q-=F)H=z(q,M[q],M[q+1],H);return H&&x(H,H.next)&&(N(H),H=H.next),H}function e(M,L){if(!M)return M;L||(L=M);var T=M,F;do if(F=!1,!T.steiner&&(x(T,T.next)||y(T.prev,T,T.next)===0)){if(N(T),T=L=T.prev,T===T.next)break;F=!0}else T=T.next;while(F||T!==L);return L}function n(M,L,T,F,k,q,H){if(M){!H&&q&&f(M,F,k,q);for(var et=M,Z,J;M.prev!==M.next;){if(Z=M.prev,J=M.next,q?r(M,F,k,q):i(M)){L.push(Z.i/T|0),L.push(M.i/T|0),L.push(J.i/T|0),N(M),M=J.next,et=J.next;continue}if(M=J,M===et){H?H===1?(M=o(e(M),L,T),n(M,L,T,F,k,q,2)):H===2&&a(M,L,T,F,k,q):n(e(M),L,T,F,k,q,1);break}}}}function i(M){var L=M.prev,T=M,F=M.next;if(y(L,T,F)>=0)return!1;for(var k=L.x,q=T.x,H=F.x,et=L.y,Z=T.y,J=F.y,at=k<q?k<H?k:H:q<H?q:H,st=et<Z?et<J?et:J:Z<J?Z:J,lt=k>q?k>H?k:H:q>H?q:H,Et=et>Z?et>J?et:J:Z>J?Z:J,_t=F.next;_t!==L;){if(_t.x>=at&&_t.x<=lt&&_t.y>=st&&_t.y<=Et&&p(k,et,q,Z,H,J,_t.x,_t.y)&&y(_t.prev,_t,_t.next)>=0)return!1;_t=_t.next}return!0}function r(M,L,T,F){var k=M.prev,q=M,H=M.next;if(y(k,q,H)>=0)return!1;for(var et=k.x,Z=q.x,J=H.x,at=k.y,st=q.y,lt=H.y,Et=et<Z?et<J?et:J:Z<J?Z:J,_t=at<st?at<lt?at:lt:st<lt?st:lt,Jt=et>Z?et>J?et:J:Z>J?Z:J,Ht=at>st?at>lt?at:lt:st>lt?st:lt,ce=v(Et,_t,L,T,F),W=v(Jt,Ht,L,T,F),Nt=M.prevZ,vt=M.nextZ;Nt&&Nt.z>=ce&&vt&&vt.z<=W;){if(Nt.x>=Et&&Nt.x<=Jt&&Nt.y>=_t&&Nt.y<=Ht&&Nt!==k&&Nt!==H&&p(et,at,Z,st,J,lt,Nt.x,Nt.y)&&y(Nt.prev,Nt,Nt.next)>=0||(Nt=Nt.prevZ,vt.x>=Et&&vt.x<=Jt&&vt.y>=_t&&vt.y<=Ht&&vt!==k&&vt!==H&&p(et,at,Z,st,J,lt,vt.x,vt.y)&&y(vt.prev,vt,vt.next)>=0))return!1;vt=vt.nextZ}for(;Nt&&Nt.z>=ce;){if(Nt.x>=Et&&Nt.x<=Jt&&Nt.y>=_t&&Nt.y<=Ht&&Nt!==k&&Nt!==H&&p(et,at,Z,st,J,lt,Nt.x,Nt.y)&&y(Nt.prev,Nt,Nt.next)>=0)return!1;Nt=Nt.prevZ}for(;vt&&vt.z<=W;){if(vt.x>=Et&&vt.x<=Jt&&vt.y>=_t&&vt.y<=Ht&&vt!==k&&vt!==H&&p(et,at,Z,st,J,lt,vt.x,vt.y)&&y(vt.prev,vt,vt.next)>=0)return!1;vt=vt.nextZ}return!0}function o(M,L,T){var F=M;do{var k=F.prev,q=F.next.next;!x(k,q)&&A(k,F,F.next,q)&&w(k,q)&&w(q,k)&&(L.push(k.i/T|0),L.push(F.i/T|0),L.push(q.i/T|0),N(F),N(F.next),F=M=q),F=F.next}while(F!==M);return e(F)}function a(M,L,T,F,k,q){var H=M;do{for(var et=H.next.next;et!==H.prev;){if(H.i!==et.i&&_(H,et)){var Z=D(H,et);H=e(H,H.next),Z=e(Z,Z.next),n(H,L,T,F,k,q,0),n(Z,L,T,F,k,q,0);return}et=et.next}H=H.next}while(H!==M)}function c(M,L,T,F){var k=[],q,H,et,Z,J;for(q=0,H=L.length;q<H;q++)et=L[q]*F,Z=q<H-1?L[q+1]*F:M.length,J=t(M,et,Z,F,!1),J===J.next&&(J.steiner=!0),k.push(m(J));for(k.sort(l),q=0;q<k.length;q++)T=h(k[q],T);return T}function l(M,L){return M.x-L.x}function h(M,L){var T=u(M,L);if(!T)return L;var F=D(T,M);return e(F,F.next),e(T,T.next)}function u(M,L){var T=L,F=M.x,k=M.y,q=-1/0,H;do{if(k<=T.y&&k>=T.next.y&&T.next.y!==T.y){var et=T.x+(k-T.y)*(T.next.x-T.x)/(T.next.y-T.y);if(et<=F&&et>q&&(q=et,H=T.x<T.next.x?T:T.next,et===F))return H}T=T.next}while(T!==L);if(!H)return null;var Z=H,J=H.x,at=H.y,st=1/0,lt;T=H;do F>=T.x&&T.x>=J&&F!==T.x&&p(k<at?F:q,k,J,at,k<at?q:F,k,T.x,T.y)&&(lt=Math.abs(k-T.y)/(F-T.x),w(T,M)&&(lt<st||lt===st&&(T.x>H.x||T.x===H.x&&d(H,T)))&&(H=T,st=lt)),T=T.next;while(T!==Z);return H}function d(M,L){return y(M.prev,M,L.prev)<0&&y(L.next,M,M.next)<0}function f(M,L,T,F){var k=M;do k.z===0&&(k.z=v(k.x,k.y,L,T,F)),k.prevZ=k.prev,k.nextZ=k.next,k=k.next;while(k!==M);k.prevZ.nextZ=null,k.prevZ=null,g(k)}function g(M){var L,T,F,k,q,H,et,Z,J=1;do{for(T=M,M=null,q=null,H=0;T;){for(H++,F=T,et=0,L=0;L<J&&(et++,F=F.nextZ,!!F);L++);for(Z=J;et>0||Z>0&&F;)et!==0&&(Z===0||!F||T.z<=F.z)?(k=T,T=T.nextZ,et--):(k=F,F=F.nextZ,Z--),q?q.nextZ=k:M=k,k.prevZ=q,q=k;T=F}q.nextZ=null,J*=2}while(H>1);return M}function v(M,L,T,F,k){return M=(M-T)*k|0,L=(L-F)*k|0,M=(M|M<<8)&16711935,M=(M|M<<4)&252645135,M=(M|M<<2)&858993459,M=(M|M<<1)&1431655765,L=(L|L<<8)&16711935,L=(L|L<<4)&252645135,L=(L|L<<2)&858993459,L=(L|L<<1)&1431655765,M|L<<1}function m(M){var L=M,T=M;do(L.x<T.x||L.x===T.x&&L.y<T.y)&&(T=L),L=L.next;while(L!==M);return T}function p(M,L,T,F,k,q,H,et){return(k-H)*(L-et)>=(M-H)*(q-et)&&(M-H)*(F-et)>=(T-H)*(L-et)&&(T-H)*(q-et)>=(k-H)*(F-et)}function _(M,L){return M.next.i!==L.i&&M.prev.i!==L.i&&!I(M,L)&&(w(M,L)&&w(L,M)&&S(M,L)&&(y(M.prev,M,L.prev)||y(M,L.prev,L))||x(M,L)&&y(M.prev,M,M.next)>0&&y(L.prev,L,L.next)>0)}function y(M,L,T){return(L.y-M.y)*(T.x-L.x)-(L.x-M.x)*(T.y-L.y)}function x(M,L){return M.x===L.x&&M.y===L.y}function A(M,L,T,F){var k=C(y(M,L,T)),q=C(y(M,L,F)),H=C(y(T,F,M)),et=C(y(T,F,L));return!!(k!==q&&H!==et||k===0&&E(M,T,L)||q===0&&E(M,F,L)||H===0&&E(T,M,F)||et===0&&E(T,L,F))}function E(M,L,T){return L.x<=Math.max(M.x,T.x)&&L.x>=Math.min(M.x,T.x)&&L.y<=Math.max(M.y,T.y)&&L.y>=Math.min(M.y,T.y)}function C(M){return M>0?1:M<0?-1:0}function I(M,L){var T=M;do{if(T.i!==M.i&&T.next.i!==M.i&&T.i!==L.i&&T.next.i!==L.i&&A(T,T.next,M,L))return!0;T=T.next}while(T!==M);return!1}function w(M,L){return y(M.prev,M,M.next)<0?y(M,L,M.next)>=0&&y(M,M.prev,L)>=0:y(M,L,M.prev)<0||y(M,M.next,L)<0}function S(M,L){var T=M,F=!1,k=(M.x+L.x)/2,q=(M.y+L.y)/2;do T.y>q!=T.next.y>q&&T.next.y!==T.y&&k<(T.next.x-T.x)*(q-T.y)/(T.next.y-T.y)+T.x&&(F=!F),T=T.next;while(T!==M);return F}function D(M,L){var T=new O(M.i,M.x,M.y),F=new O(L.i,L.x,L.y),k=M.next,q=L.prev;return M.next=L,L.prev=M,T.next=k,k.prev=T,F.next=T,T.prev=F,q.next=F,F.prev=q,F}function z(M,L,T,F){var k=new O(M,L,T);return F?(k.next=F.next,k.prev=F,F.next.prev=k,F.next=k):(k.prev=k,k.next=k),k}function N(M){M.next.prev=M.prev,M.prev.next=M.next,M.prevZ&&(M.prevZ.nextZ=M.nextZ),M.nextZ&&(M.nextZ.prevZ=M.prevZ)}function O(M,L,T){this.i=M,this.x=L,this.y=T,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}s.deviation=function(M,L,T,F){var k=L&&L.length,q=k?L[0]*T:M.length,H=Math.abs(B(M,0,q,T));if(k)for(var et=0,Z=L.length;et<Z;et++){var J=L[et]*T,at=et<Z-1?L[et+1]*T:M.length;H-=Math.abs(B(M,J,at,T))}var st=0;for(et=0;et<F.length;et+=3){var lt=F[et]*T,Et=F[et+1]*T,_t=F[et+2]*T;st+=Math.abs((M[lt]-M[_t])*(M[Et+1]-M[lt+1])-(M[lt]-M[Et])*(M[_t+1]-M[lt+1]))}return H===0&&st===0?0:Math.abs((st-H)/H)};function B(M,L,T,F){for(var k=0,q=L,H=T-F;q<T;q+=F)k+=(M[H]-M[q])*(M[q+1]+M[H+1]),H=q;return k}return s.flatten=function(M){for(var L=M[0][0].length,T={vertices:[],holes:[],dimensions:L},F=0,k=0;k<M.length;k++){for(var q=0;q<M[k].length;q++)for(var H=0;H<L;H++)T.vertices.push(M[k][q][H]);k>0&&(F+=M[k-1].length,T.holes.push(F))}return T},nr.exports}var N_=U_();const ah=D_(N_);function F_(s,t=!1){const e=s[0].index!==null,n=new Set(Object.keys(s[0].attributes)),i=new Set(Object.keys(s[0].morphAttributes)),r={},o={},a=s[0].morphTargetsRelative,c=new Oe;let l=0;for(let h=0;h<s.length;++h){const u=s[h];let d=0;if(e!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const f in u.attributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const f in u.morphAttributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;o[f]===void 0&&(o[f]=[]),o[f].push(u.morphAttributes[f])}if(t){let f;if(e)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(e){let h=0;const u=[];for(let d=0;d<s.length;++d){const f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(const h in r){const u=ll(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(const h in o){const u=o[h][0].length;if(u===0)break;c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){const f=[];for(let v=0;v<o[h].length;++v)f.push(o[h][v][d]);const g=ll(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}return c}function ll(s){let t,e,n,i=-1,r=0;for(let l=0;l<s.length;++l){const h=s[l];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(i===-1&&(i=h.gpuType),i!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}const o=new t(r),a=new _e(o,e,n);let c=0;for(let l=0;l<s.length;++l){const h=s[l];if(h.isInterleavedBufferAttribute){const u=c/e;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<e;g++){const v=h.getComponent(d,g);a.setComponent(d+u,g,v)}}else o.set(h.array,c);c+=h.count*e}return i!==void 0&&(a.gpuType=i),a}new Y(0,1,0);function ti(s,t,e,n,i){const r=new Oe;return r.setAttribute("position",new me(s,3)),e&&r.setAttribute("uv",new me(e,2)),n&&r.setAttribute("color",new me(n,3)),i?r.setAttribute("normal",new me(i,3)):r.computeVertexNormals(),r.setIndex(t),r}function O_(s,t){const e=s.length/2;if(e<2)return s;const n=[];for(let i=0;i<e-1;i++){const r=s[i*2],o=s[i*2+1],a=s[(i+1)*2],c=s[(i+1)*2+1],l=Math.hypot(a-r,c-o),h=Math.max(1,Math.ceil(l/t));for(let u=0;u<h;u++){const d=u/h;n.push(r+(a-r)*d,o+(c-o)*d)}}return n.push(s[(e-1)*2],s[(e-1)*2+1]),n}function Tn(s,t,e,n,i=12,r=0){const o=t.length/2;if(o<2||e<=.05)return;const a=s.pos.length/3;let c=0;for(let l=0;l<o;l++){const h=Math.max(0,l-1),u=Math.min(o-1,l+1);let d=t[u*2]-t[h*2],f=t[u*2+1]-t[h*2+1];const g=Math.hypot(d,f)||1;d/=g,f/=g;const v=e*.5,m=-f,p=d;l>0&&(c+=Math.hypot(t[l*2]-t[(l-1)*2],t[l*2+1]-t[(l-1)*2+1]));const _=t[l*2]+m*r,y=t[l*2+1]+p*r,x=n(t[l*2],t[l*2+1],l);s.pos.push(_+m*v,x,y+p*v,_-m*v,x,y-p*v),s.uv&&s.uv.push(0,c/i,1,c/i),s.col&&s.col.push(1,1,1,1,1,1)}for(let l=0;l<o-1;l++){const h=a+l*2;s.idx.push(h,h+1,h+2,h+1,h+3,h+2)}}function z_(s,t,e,n,i){const o=s.pos.length/3;s.pos.push(t,e,n),s.uv&&s.uv.push(.5,.5);for(let a=0;a<8;a++){const c=a/8*Math.PI*2;s.pos.push(t+Math.cos(c)*i,e,n+Math.sin(c)*i),s.uv&&s.uv.push(.5+Math.cos(c)*.5,.5+Math.sin(c)*.5)}for(let a=0;a<8;a++)s.idx.push(o,o+1+a,o+1+(a+1)%8)}function B_(s,t,e,n){const i=t.length/2;if(!(i<2))for(const r of[-1,1]){const o=s.pos.length/3;for(let a=0;a<i;a++){const c=Math.max(0,a-1),l=Math.min(i-1,a+1);let h=t[l*2]-t[c*2],u=t[l*2+1]-t[c*2+1];const d=Math.hypot(h,u)||1;h/=d,u/=d;const f=t[a*2]+-u*n*r,g=t[a*2+1]+h*n*r,v=e(t[a*2],t[a*2+1],a);s.pos.push(f,v+.08,g,f,v+.92,g),s.nrm.push(-u*r,0,h*r,-u*r,0,h*r)}for(let a=0;a<i-1;a++){const c=o+a*2;s.idx.push(c,c+1,c+3,c,c+3,c+2)}}}function k_(s,t,e,n,i){const a=Math.min(e,n),c=Math.max(e,n);if(c-a<.4)return;const l=[[0,1,0],[0,-1,0],[1,0,0],[-1,0,0],[0,0,1],[0,0,-1]];for(const[h,u,d]of l){const f=s.pos.length/3,g=[[t-.55,a,i-.55],[t+.55,a,i-.55],[t+.55,c,i-.55],[t-.55,c,i-.55],[t-.55,a,i+.55],[t+.55,a,i+.55],[t+.55,c,i+.55],[t-.55,c,i+.55]];let v;u===1?v=[3,2,6,7]:u===-1?v=[0,4,5,1]:h===1?v=[1,5,6,2]:h===-1?v=[4,0,3,7]:d===1?v=[5,4,7,6]:v=[0,1,2,3];for(const m of v)s.pos.push(g[m][0],g[m][1],g[m][2]),s.nrm.push(h,u,d);s.idx.push(f,f+1,f+2,f,f+2,f+3)}}function ir(s,t,e,n,i,r,o,a,c,l,h,u,d,f,g,v){const m=s.pos.length/3;s.pos.push(t,r,e,n,o,i,n,a,i,t,c,e);for(let p=0;p<4;p++)s.nrm.push(l,0,h);s.col&&s.col.push(v[0],v[1],v[2],v[0],v[1],v[2],v[0],v[1],v[2],v[0],v[1],v[2]),s.uv.push(u,f,d,f,d,g,u,g),s.idx.push(m,m+1,m+2,m,m+2,m+3)}function H_(s,t){const e=Math.abs(Math.sin(s.minX*.021+s.minZ*.017));return t==="glass"?[.94+e*.06,.96+e*.04,.98]:t==="stone"?[.9+e*.1,.89+e*.08,.84+e*.08]:[.9+e*.1,.86+e*.09,.82+e*.07]}function V_(s,t,e,n,i){const r=s.pts,o=r.length/2;if(o<3)return;const a=new Array(o);for(let p=0;p<o;p++)a[p]=t.terrainY(r[p*2],r[p*2+1]);const{eave:c}=Ma(a,s.height),l=Array.from(r),h=ah(l);if(!h.length)return;const u=n.pos.length/3;for(let p=0;p<o;p++)n.pos.push(r[p*2],c,r[p*2+1]),n.uv.push(r[p*2]/9,r[p*2+1]/9),n.nrm.push(0,1,0);for(let p=0;p<h.length;p++)n.idx.push(u+h[p]);const d=oh(s),f=H_(s,d),g=Math.abs(Math.sin(s.minX*.07+s.minZ*.05))*.7;let v=0,m=-1;for(let p=0;p<o;p++){const _=(p+1)%o,y=Math.hypot(r[_*2]-r[p*2],r[_*2+1]-r[p*2+1]);y>v&&(v=y,m=p)}for(let p=0;p<o;p++){const _=(p+1)%o,y=r[p*2],x=r[p*2+1],A=r[_*2],E=r[_*2+1],C=Math.hypot(A-y,E-x);if(C<.15)continue;const I=-(E-x)/C,w=(A-y)/C,S=a[p]-.45,D=a[_]-.45,z=c-Math.max(a[p],a[_]),N=s.type===1&&z>6.4?Math.max(a[p],a[_])+3.2:0,O=g+C/15;if(N&&N<c-2.2){const B=.24615384615384617;ir(e.glass,y,x,A,E,S,D,N,N,I,w,g,O,0,B,[.97,.98,1]),ir(e[d],y,x,A,E,N,N,c,c,I,w,g,O,B,z/13,f)}else ir(e[d],y,x,A,E,S,D,c,c,I,w,g,O,0,Math.max(.2,z/13),f);if(i&&p===m&&v>4.5&&v<46&&i.count<40&&s.height<26&&s.type!==2){const B=(A-y)/C,M=(E-x)/C,L=(y+A)*.5+I*.07,T=(x+E)*.5+w*.07,F=Math.min(a[p],a[_]);ir(i,L-B*.52,T-M*.52,L+B*.52,T+M*.52,F,F,F+2.2,F+2.2,I,w,0,1,0,1,[1,1,1]),i.count+=1}}}function G_(s,t,e,n){const i=s.chunkSize,r=new Ki(i,i,n,n);r.rotateX(-Math.PI/2);const o=r.attributes.position,a=r.attributes.uv,c=new Float32Array(o.count*3),l=(t+.5)*i,h=(e+.5)*i;for(let u=0;u<o.count;u++){const d=o.getX(u)+l,f=o.getZ(u)+h,g=s.terrainY(d,f);o.setXYZ(u,d,g,f),a.setXY(u,d/8,f/8);const v=s.maskAt(d,f),m=(Math.sin(d*.013)*Math.cos(f*.011)+1)*.5;let p,_,y;v===2?(p=.15,_=.2,y=.18):v===1?(p=.62+m*.08,_=.56+m*.06,y=.4):(p=.74+m*.16,_=.8+m*.14,y=.64+m*.08),c[u*3]=p,c[u*3+1]=_,c[u*3+2]=y}return r.setAttribute("color",new _e(c,3)),r.computeVertexNormals(),W_(r,n,7),r}function W_(s,t,e){const n=s.attributes.position,i=s.attributes.normal,r=s.attributes.uv,o=s.attributes.color,a=t+1,c=[];for(let _=0;_<a;_++)c.push(_);for(let _=1;_<a;_++)c.push(_*a+(a-1));for(let _=a-2;_>=0;_--)c.push((a-1)*a+_);for(let _=a-2;_>=1;_--)c.push(_*a);const l=n.count,h=c.length,u=new Float32Array((l+h)*3),d=new Float32Array((l+h)*3),f=new Float32Array((l+h)*2),g=new Float32Array((l+h)*3);u.set(n.array),d.set(i.array),f.set(r.array),g.set(o.array);for(let _=0;_<h;_++){const y=c[_],x=(l+_)*3;u[x]=n.getX(y),u[x+1]=n.getY(y)-e,u[x+2]=n.getZ(y),d[x]=0,d[x+1]=0,d[x+2]=1,f[(l+_)*2]=r.getX(y),f[(l+_)*2+1]=r.getY(y),g[x]=o.getX(y)*.75,g[x+1]=o.getY(y)*.75,g[x+2]=o.getZ(y)*.75}const v=s.index.array,m=new Uint32Array(v.length+c.length*6);m.set(v);let p=v.length;for(let _=0;_<c.length;_++){const y=(_+1)%c.length,x=c[_],A=c[y],E=l+_,C=l+y;m[p++]=x,m[p++]=A,m[p++]=C,m[p++]=x,m[p++]=C,m[p++]=E}s.setAttribute("position",new _e(u,3)),s.setAttribute("normal",new _e(d,3)),s.setAttribute("uv",new _e(f,2)),s.setAttribute("color",new _e(g,3)),s.setIndex(new _e(m,1))}function cn(s=!1){return{pos:[],uv:[],idx:[],nrm:[],col:s?[]:null}}class X_{constructor(t,e,n){this.scene=t,this.world=e,this.mat=n,this.live=new Map,this.occluders=[],this.unitBox=new Ie(1,1,1);const i=new Ki(1,1);i.translate(0,.5,0);const r=i.clone();r.rotateY(Math.PI/2),this.treeGeo=F_([i,r]),this.poleGeo=new Xi(.06,.08,5.4,6),this.poleGeo.translate(0,2.7,0),this.headGeo=new Ie(.7,.1,.28),this.headGeo.translate(.28,5.35,0),this.dummy=new xe,this.lodMat={};for(const o of["brick","stone","glass"])this.lodMat[o]=n[o].clone(),this.lodMat[o].vertexColors=!1}modeFor(t){return t<500?"near":t<1050?"mid":"far"}ensure(t,e,n){const i=`${t},${e}`,r=this.live.get(i);if(r&&r.userData.mode===n)return r;r&&this.drop(i);const o=this.build(t,e,n);return this.live.set(i,o),this.scene.add(o),o}roadY(t){const{world:e}=this;return t.flags&1&&t.deckY!=null?(n,i)=>e.bridgeY(n,i,t):(n,i)=>e.terrainY(n,i)+.14}build(t,e,n){const{world:i,mat:r}=this,o=new qe;o.name=`chunk ${t},${e}`,o.userData.mode=n,o.userData.own=[];const a=n==="near"?32:n==="mid"?16:8,c=new Yt(G_(i,t,e,a),r.terrain);c.receiveShadow=!0,c.userData.ownGeo=!0,o.add(c),o.userData.own.push(c);const l=i.chunks.get(`${t},${e}`),h=cn(),u=cn(),d=cn(),f=cn(),g=cn(),v=cn(),m={pos:[],idx:[],nrm:[]},p={pos:[],idx:[],nrm:[]},_={pos:[],idx:[]};if(l){for(const y of l.roads){if(n==="far"&&y.cls>2)continue;const x=this.roadY(y),A=y.flags&1&&y.deckY!=null,E=O_(y.pts,n==="near"?6:n==="mid"?12:24);if(Tn(h,E,y.width,x,Math.max(y.width,8)),n==="near"){const C=E.length/2,I=w=>z_(h,E[w*2],x(E[w*2],E[w*2+1],w)+.01,E[w*2+1],Math.max(y.width*.62,4.5));I(0),C>1&&I(C-1)}if(n!=="far"&&y.cls<=6){const C=(I,w,S)=>x(I,w,S)-.08;Tn(u,E,y.width+2.6,C,4.5)}if(n==="near"&&y.cls<=5&&y.width>=5.6){const C=(I,w,S)=>x(I,w,S)+.03;if(y.cls<=2?(Tn(f,E,.12,C,40,.16),Tn(f,E,.12,C,40,-.16)):Tn(d,E,.14,C,8),y.cls<=4){const I=y.width*.5-.32;Tn(g,E,.1,C,20,I),Tn(g,E,.1,C,20,-I)}}if(A&&n!=="far"){const C=(I,w,S)=>x(I,w,S)-.65;Tn(v,E,y.width+2.4,C,8),B_(m,E,x,y.width*.5+1.15),n==="near"&&this.addPiers(p,y,x)}}for(const y of l.waters)if(y.kind===1)Tn(_,y.pts,y.width,(x,A)=>i.waterY(x,A));else if(y.pts.length>=6){const x=ah(Array.from(y.pts)),A=_.pos.length/3;for(let E=0;E<y.pts.length;E+=2){const C=y.pts[E],I=y.pts[E+1];_.pos.push(C,i.waterY(C,I),I)}for(let E=0;E<x.length;E++)_.idx.push(A+x[E])}n==="near"?this.addBuildings(o,l):n==="mid"&&this.addLod(o,l),n==="near"&&(this.addTrees(o,l),this.addLights(o,l))}if(this.addBucket(o,h,r.road,!0),this.addBucket(o,u,r.sidewalk,!0),this.addBucket(o,d,r.markDash,!0),this.addBucket(o,f,r.markSolid,!0),this.addBucket(o,g,r.markWhite,!0),this.addBucket(o,v,r.barrier,!0),m.pos.length){const y=new Yt(ti(m.pos,m.idx,null,null,m.nrm),r.barrier);y.userData.ownGeo=!0,y.castShadow=!0,y.receiveShadow=!0,o.add(y),o.userData.own.push(y)}if(p.pos.length){const y=new Yt(ti(p.pos,p.idx,null,null,p.nrm),r.concrete);y.userData.ownGeo=!0,y.castShadow=!0,y.receiveShadow=!0,o.add(y),o.userData.own.push(y)}if(_.pos.length){const y=new Yt(ti(_.pos,_.idx),r.water);y.userData.ownGeo=!0,y.renderOrder=2,o.add(y),o.userData.own.push(y)}return o.userData.mode=n,o}addPiers(t,e,n){const i=e.pts;let r=0,o=8;for(let a=1;a<i.length/2;a++){const c=i[(a-1)*2],l=i[(a-1)*2+1],h=i[a*2],u=i[a*2+1],d=Math.hypot(h-c,u-l);for(;r+d>=o;){const f=(o-r)/(d||1),g=c+(h-c)*f,v=l+(u-l)*f;if(o+=16,this.world.maskAt(g,v)!==2)continue;const m=n(g,v,a),p=this.world.terrainY(g,v);k_(t,g,p,m-.15,v)}r+=d}}addBucket(t,e,n,i){if(!e.pos||e.pos.length<9)return;const r=new Yt(ti(e.pos,e.idx,e.uv,e.col,e.nrm&&e.nrm.length?e.nrm:null),n);r.userData.ownGeo=i,r.receiveShadow=!0,t.add(r),t.userData.own.push(r)}addBuildings(t,e){const n={brick:cn(!0),stone:cn(!0),glass:cn(!0)},i={pos:[],uv:[],idx:[],nrm:[]},r=cn();r.count=0;for(const o of e.buildings)V_(o,this.world,n,i,r);for(const o of["brick","stone","glass"]){const a=n[o];if(!a.pos.length)continue;const c=new Yt(ti(a.pos,a.idx,a.uv,a.col,a.nrm),this.mat[o]);c.userData.ownGeo=!0,c.userData.occluder=!0,c.castShadow=!0,c.receiveShadow=!0,t.add(c),t.userData.own.push(c)}if(i.pos.length){const o=new Yt(ti(i.pos,i.idx,i.uv,null,i.nrm),this.mat.roof);o.userData.ownGeo=!0,o.userData.occluder=!0,o.castShadow=!0,o.receiveShadow=!0,t.add(o),t.userData.own.push(o)}if(r.pos.length){const o=new Yt(ti(r.pos,r.idx,r.uv,null,r.nrm),this.mat.door);o.userData.ownGeo=!0,o.castShadow=!0,o.receiveShadow=!0,t.add(o),t.userData.own.push(o)}}addLod(t,e){const n={brick:[],stone:[],glass:[]};for(const i of e.buildings)n[oh(i)].push(i);for(const i of["brick","stone","glass"]){const r=n[i];if(!r.length)continue;const o=new Zs(this.unitBox,this.lodMat[i],r.length);o.userData.occluder=!0,o.castShadow=!1,o.receiveShadow=!0;for(let a=0;a<r.length;a++){const c=r[a],l=[];for(let v=0;v<c.pts.length;v+=2)l.push(this.world.terrainY(c.pts[v],c.pts[v+1]));const{eave:h,min:u}=Ma(l,c.height),d=Math.max(2.7,h-u),f=Math.max(1.5,c.maxX-c.minX),g=Math.max(1.5,c.maxZ-c.minZ);this.dummy.position.set((c.minX+c.maxX)/2,u+d/2,(c.minZ+c.maxZ)/2),this.dummy.scale.set(f,d,g),this.dummy.rotation.set(0,0,0),this.dummy.updateMatrix(),o.setMatrixAt(a,this.dummy.matrix)}o.instanceMatrix.needsUpdate=!0,t.add(o),t.userData.own.push(o)}}addTrees(t,e){const n=e.trees.filter(r=>{if(this.world.maskAt(r.x,r.z)===2||this.world.onCarriage(r.x,r.z))return!1;for(const o of e.buildings)if(!(r.x<o.minX-.4||r.x>o.maxX+.4||r.z<o.minZ-.4||r.z>o.maxZ+.4)&&y_(r.x,r.z,o.pts))return!1;return!0}).slice(0,90);if(!n.length)return;const i=[[0,this.mat.trees.pine,7.4,16],[1,this.mat.trees.maple,11,13],[2,this.mat.trees.autumn,10.5,13]];for(const[r,o,a,c]of i){const l=n.filter(u=>(u.kind===0?0:u.kind===2?2:1)===r);if(!l.length)continue;const h=new Zs(this.treeGeo,o,l.length);h.castShadow=!1,h.receiveShadow=!0,l.forEach((u,d)=>{const f=this.world.terrainY(u.x,u.z),g=.82+Math.abs(Math.sin(u.x*.17+u.z*.11))*.36;this.dummy.position.set(u.x,f,u.z),this.dummy.scale.set(a*g,c*g,a*g),this.dummy.rotation.set(0,u.x*.37+u.z*.21,0),this.dummy.updateMatrix(),h.setMatrixAt(d,this.dummy.matrix)}),h.instanceMatrix.needsUpdate=!0,h.userData.ownGeo=!1,t.add(h),t.userData.own.push(h)}}addLights(t,e){const n=e.lights.filter(o=>!(this.world.maskAt(o.x,o.z)===2&&this.world.bridgeDeckAt(o.x,o.z)==null)).slice(0,80);if(!n.length)return;const i=new Zs(this.poleGeo,this.mat.lamp,n.length),r=new Zs(this.headGeo,this.mat.lampHead,n.length);i.castShadow=!1,r.castShadow=!1,n.forEach((o,a)=>{const c=this.world.surfaceAt(o.x,o.z);let l=0,h=6400;for(const u of e.roads){const d=u.pts;for(let f=0;f<d.length;f+=4){const g=d[f]-o.x,v=d[f+1]-o.z,m=g*g+v*v;m<h&&(h=m,l=Math.atan2(-v,g))}}this.dummy.position.set(o.x,c,o.z),this.dummy.scale.set(1,1,1),this.dummy.rotation.set(0,l,0),this.dummy.updateMatrix(),i.setMatrixAt(a,this.dummy.matrix),r.setMatrixAt(a,this.dummy.matrix)}),i.instanceMatrix.needsUpdate=!0,r.instanceMatrix.needsUpdate=!0,t.add(i,r),t.userData.own.push(i,r)}drop(t){const e=this.live.get(t);e&&(this.scene.remove(e),e.traverse(n=>{n.isInstancedMesh&&n.dispose(),n.geometry&&n.userData.ownGeo&&n.geometry.dispose()}),this.live.delete(t))}refreshOccluders(){const t=[];for(const e of this.live.values())e.userData.mode!=="far"&&e.traverse(n=>{n.userData&&n.userData.occluder&&t.push(n)});this.occluders=t}prime(t,e){const n=this.world.chunkSize,i=Math.floor(t/n),r=Math.floor(e/n);for(let o=-1;o<=1;o++)for(let a=-1;a<=1;a++){const c=Math.hypot(a,o)*n;this.ensure(i+a,r+o,this.modeFor(c))}this.refreshOccluders()}update(t,e){const n=this.world.chunkSize,i=Math.floor(t/n),r=Math.floor(e/n),o=new Map,a=7;for(let l=-a;l<=a;l++)for(let h=-a;h<=a;h++){const u=Math.hypot((h+.15)*n,(l+.15)*n);u>1680||o.set(`${i+h},${r+l}`,{cx:i+h,cz:r+l,mode:this.modeFor(u)})}for(const l of this.live.keys())o.has(l)||this.drop(l);let c=2;for(const[l,h]of o){const u=this.live.get(l);if(!(u&&u.userData.mode===h.mode)){if(c--<=0)break;this.ensure(h.cx,h.cz,h.mode)}}return this.refreshOccluders(),{loaded:this.live.size,wanted:o.size}}}class q_{constructor(t){this.dom=t,this.keys=new Set,this.edges=new Set,this.lookX=0,this.lookY=0,this.mouseIdle=5,this.locked=!1,this.forward=0,this.strafe=0,this.sprint=!1,this.crouch=!1,window.addEventListener("keydown",e=>{["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&e.preventDefault(),e.code==="F11"&&e.preventDefault(),this.keys.has(e.code)||this.edges.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("mousemove",e=>{!this.locked&&!e.buttons||(this.lookX+=e.movementX,this.lookY+=e.movementY,this.mouseIdle=0)}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===t}),t.addEventListener("contextmenu",e=>e.preventDefault())}requestLock(){document.pointerLockElement!==this.dom&&this.dom.requestPointerLock()}consume(t){const e=this.edges.has(t);return this.edges.delete(t),e}poll(t){const e=n=>this.keys.has(n);this.forward=(e("KeyW")||e("ArrowUp")?1:0)-(e("KeyS")||e("ArrowDown")?1:0),this.strafe=(e("KeyD")||e("ArrowRight")?1:0)-(e("KeyA")||e("ArrowLeft")?1:0),this.sprint=e("ShiftLeft")||e("ShiftRight"),this.crouch=e("KeyC"),this.mouseIdle+=t}endFrame(){this.lookX=0,this.lookY=0}}const hl=new Y(0,1,0),vr=1,dr=2,zi=4;function ul(s,t,e){let n=t-s;for(;n>Math.PI;)n-=Math.PI*2;for(;n<-Math.PI;)n+=Math.PI*2;return s+n*Math.min(1,e)}class Y_{constructor(t,e,n){this.camera=t,this.world=e,this.physics=n,this.mesh=Z_(),this.radius=.36,this.half=.6,this.orbitYaw=.55,this.pitch=-.28,this.distance=6.4,this.shoulder=.72,this.firstPerson=!1,this.grounded=!1,this.eye=1.62,this.selfTestMode=!1,this.onFoot=!0,this._colliders=new Map,this._syncAt=0,this._tmp=new Y,this._fwd=new Y,this._right=new Y,this._look=new Y,this._wish=new Y,this._target=new Y,this._cam=new Y;const i=new W0(this.radius,this.radius,this.half*2,8);this.body=new mt({mass:70,fixedRotation:!0,linearDamping:0,angularDamping:1,material:new hi("player"),collisionFilterGroup:vr,collisionFilterMask:zi|dr,allowSleep:!1}),this.body.addShape(i),n.addBody(this.body),this.buildingMat=new hi("building")}get active(){return this.onFoot}place(t,e){const n=this.world.surfaceAt(t,e)+this.half+.08;this.body.position.set(t,n,e),this.body.velocity.set(0,0,0),this.mesh.position.set(t,n,e),this.syncBuildings(!0)}setOnFoot(t){this.onFoot=t,this.mesh.visible=t&&!this.firstPerson,t?(this.body.collisionFilterMask=zi|dr,this.body.type=mt.DYNAMIC,this.body.mass=70,this.body.updateMassProperties(),this.body.wakeUp()):(this.body.collisionFilterMask=0,this.body.velocity.set(0,0,0),this.body.type=mt.KINEMATIC)}placeCamera(t){const e=this.firstPerson?.12:this.distance,n=this.firstPerson?0:this.shoulder,i=this.pitch,r=Math.cos(i),o=Math.sin(i),a=-Math.sin(this.orbitYaw),c=-Math.cos(this.orbitYaw);this._look.set(a*r,o,c*r),this._look.lengthSq()<1e-6&&this._look.set(0,0,-1),this._right.set(-c,0,a),this._cam.copy(t).addScaledVector(this._look,-e).addScaledVector(this._right,n),this.camera.position.copy(this._cam),this.camera.up.copy(hl),this.camera.lookAt(t)}cameraBasis(){return this.camera.getWorldDirection(this._fwd),this._fwd.y=0,this._fwd.lengthSq()<1e-8?this._fwd.set(0,0,-1):this._fwd.normalize(),this._right.crossVectors(this._fwd,hl),{forward:this._fwd,right:this._right}}prePhysics(t,e){if(!this.active)return;this.selfTestMode||(this.orbitYaw-=e.lookX*.0022,this.pitch=Math.max(-.85,Math.min(.7,this.pitch-e.lookY*.0018)));const n=this.body.position.y-this.half,i=this.firstPerson?this.eye-(e.crouch?.45:0):1.28;this._target.set(this.body.position.x,n+i,this.body.position.z),this.placeCamera(this._target);const r=this.cameraBasis();this._wish.set(0,0,0),(e.forward||e.strafe)&&(this._wish.addScaledVector(r.forward,e.forward),this._wish.addScaledVector(r.right,e.strafe));const o=this._wish.lengthSq()>1e-4;o&&this._wish.normalize();const a=this.world.maskAt(this.body.position.x,this.body.position.z)===2&&this.world.bridgeDeckAt(this.body.position.x,this.body.position.z)==null;let c=e.crouch?1.7:e.sprint?7.6:4.25;a&&(c*=.45),o?(this.body.velocity.x=this._wish.x*c,this.body.velocity.z=this._wish.z*c,this.firstPerson||(this.mesh.rotation.y=Math.atan2(-this._wish.x,-this._wish.z))):(this.body.velocity.x=0,this.body.velocity.z=0),this.firstPerson?this.mesh.rotation.y=this.orbitYaw:!this.selfTestMode&&e.mouseIdle>1.15&&o&&(this.orbitYaw=ul(this.orbitYaw,this.mesh.rotation.y,t*1.6)),this.grounded&&e.pendingJump&&(this.body.velocity.y=e.crouch?4.4:6.5,this.grounded=!1,e.pendingJump=!1),this.syncBuildings(!1)}postPhysics(){if(!this.active){this.mesh.visible=!1;return}const t=this.body.position.x,e=this.body.position.z;if(!this.world.insideBounds(t,e,20)){const c=this.world.dem;this.body.position.x=Math.min(c.maxX-21,Math.max(c.minX+21,t)),this.body.position.z=Math.min(c.maxZ-21,Math.max(c.minZ+21,e)),this.body.velocity.x=0,this.body.velocity.z=0}const n=this.world.surfaceAt(this.body.position.x,this.body.position.z),r=this.body.position.y-this.half-n;this.body.velocity.y<=.4&&r<.35&&r>-2.2?(this.body.position.y=n+this.half,this.body.velocity.y=0,this.grounded=!0):r>.45&&(this.grounded=!1),this.mesh.position.set(this.body.position.x,this.body.position.y-this.half,this.body.position.z),this.mesh.visible=!this.firstPerson;const o=this.body.position.y-this.half,a=this.firstPerson?this.eye:1.28;this._target.set(this.body.position.x,o+a,this.body.position.z),this.placeCamera(this._target),this.resolveCamera(this._target)}resolveCamera(t){if(this.firstPerson)return;const e=this._cam.copy(this.camera.position).sub(t),n=e.length();if(n<.2)return;e.multiplyScalar(1/n),this._ray=this._ray||new Vg,this._ray.set(t,e),this._ray.far=n,this._ray.camera=this.camera;const i=this._ray.intersectObjects(this.occluders||[],!1);if(i.length&&i[0].distance<n-.25){const r=Math.max(.45,i[0].distance-.35);this.camera.position.copy(t).addScaledVector(e,r)}}syncBuildings(t){const e=performance.now();if(!t&&e-this._syncAt<350)return;this._syncAt=e;const n=this.body.position.x,i=this.body.position.z,r=this.world.buildingsNear(n,i,52),o=new Set;for(const a of r){const c=`${a.minX.toFixed(1)}|${a.minZ.toFixed(1)}|${a.floors}|${a.maxX.toFixed(1)}`;if(o.add(c),this._colliders.has(c))continue;const l=[];for(let p=0;p<a.pts.length;p+=2)l.push(this.world.terrainY(a.pts[p],a.pts[p+1]));const{eave:h,min:u}=Ma(l,a.height),d=Math.max(2.7,h-u),f=Math.max(.45,(a.maxX-a.minX)/2),g=Math.max(.45,(a.maxZ-a.minZ)/2),v=d/2,m=new mt({mass:0,material:this.buildingMat,collisionFilterGroup:zi,collisionFilterMask:vr|dr});m.addShape(new Ss(new b(f,v,g))),m.position.set((a.minX+a.maxX)/2,u+v,(a.minZ+a.maxZ)/2),this.physics.addBody(m),this._colliders.set(c,m)}for(const[a,c]of this._colliders)o.has(a)||(this.physics.removeBody(c),this._colliders.delete(a))}driveCamera(t,e,n){this.selfTestMode||(this.orbitYaw-=e.lookX*.0022,this.pitch=Math.max(-.7,Math.min(.55,this.pitch-e.lookY*.0018)),e.mouseIdle>.55&&(this.orbitYaw=ul(this.orbitYaw,n.yaw,t*2.8)));const i=this.distance,r=this.shoulder;this.distance=this.firstPerson?.15:7.2,this.shoulder=this.firstPerson?0:.48,this._target.set(n.mesh.position.x,n.mesh.position.y+(this.firstPerson?.85:1.15),n.mesh.position.z),this.placeCamera(this._target),this.resolveCamera(this._target),this.distance=i,this.shoulder=r}toggleView(){this.firstPerson=!this.firstPerson,this.mesh.visible=!this.firstPerson}}function Z_(){const s=new qe,t=new le({color:"#2c4d73",roughness:.8}),e=new le({color:"#e0b394",roughness:.7}),n=new le({color:"#22262c",roughness:.9}),i=new Yt(new Ie(.46,.62,.26),t);i.position.set(0,1.18,0),i.name="chest";const r=new Yt(new Ie(.28,.3,.26),e);r.position.set(0,1.68,0);const o=new Yt(new Ie(.06,.06,.1),e);o.position.set(0,1.66,-.18),o.name="nose";const a=new Yt(new Ie(.16,.7,.18),n);a.position.set(-.12,.4,0);const c=a.clone();c.position.x=.12;const l=new Yt(new Ie(.12,.55,.14),t);l.position.set(-.32,1.16,0);const h=l.clone();h.position.x=.32;const u=new Yt(new Ie(.3,.12,.28),n);u.position.set(0,1.84,0);const d=new Yt(new Ie(.18,.08,.26),n);d.position.set(-.12,.04,-.02);const f=d.clone();return f.position.x=.12,s.add(i,r,o,a,c,l,h,u,d,f),s.traverse(g=>{g.isMesh&&(g.castShadow=!0)}),s}const dl=["#c23b3b","#f2f2f0","#1f4e79","#2f6b45"];class $_{constructor(t,e,n){this.scene=t,this.world=e,this.physics=n,this.cars=[],this.driven=null,this.up=new b(0,1,0),e.carSpawns.forEach((i,r)=>{const o=this.makeCar(i,dl[r%dl.length]);this.cars.push(o),t.add(o.mesh),n.addBody(o.body)})}makeCar(t,e){const n=new qe,i=J_(e);n.add(i);let r=t.x,o=t.z,a=t.yaw||0;const c=this.world.nearestRoad(r,o,45);c&&(r=c.x-c.dirZ*1.7,o=c.z+c.dirX*1.7,a=Math.atan2(-c.dirX,-c.dirZ));const l=this.world.surfaceAt(r,o)+.02;n.position.set(r,l,o),n.rotation.y=a;const h=new mt({mass:0,type:mt.STATIC,material:new hi("car"),collisionFilterGroup:dr,collisionFilterMask:zi|vr,allowSleep:!1});return h.addShape(new Ss(new b(.9,.55,2.15))),h.position.set(r,l,o),h.quaternion.setFromAxisAngle(this.up,a),{mesh:n,visual:i,body:h,yaw:a,speed:0,color:e,spawn:t,wheelSpin:0}}nearest(t,e,n=3.5){let i=null,r=n;for(const o of this.cars){if(o===this.driven)continue;const a=Math.hypot(o.mesh.position.x-t,o.mesh.position.z-e);a<r&&(r=a,i=o)}return i}enter(t,e){this.driven=t,t.body.type=mt.DYNAMIC,t.body.mass=900,t.body.updateMassProperties(),t.body.wakeUp(),t.body.collisionFilterMask=zi,e.setOnFoot(!1),e.mesh.position.copy(t.mesh.position)}exit(t){const e=this.driven;if(!e)return;const n=new Y(1,0,0).applyQuaternion(e.mesh.quaternion),i=e.mesh.position.x+n.x*2.4,r=e.mesh.position.z+n.z*2.4;e.speed=0,e.body.velocity.set(0,0,0),e.body.angularVelocity.set(0,0,0),e.body.type=mt.STATIC,e.body.mass=0,e.body.updateMassProperties(),e.body.collisionFilterMask=zi|vr,this.driven=null,t.setOnFoot(!0),t.place(i,r),t.orbitYaw=e.yaw}update(t,e){for(const n of this.cars){if(n!==this.driven){n.body.position.x=n.mesh.position.x,n.body.position.z=n.mesh.position.z,n.body.position.y=this.world.surfaceAt(n.mesh.position.x,n.mesh.position.z)+.02,n.mesh.position.y=n.body.position.y;continue}const i=e.forward,r=e.strafe,o=e.jumpHeld,a=Math.abs(n.speed);o?n.speed*=Math.max(0,1-t*4.4):i>0?n.speed+=t*(a<7?12.5:8):i<0?n.speed-=t*9:n.speed*=Math.max(0,1-t*1.15),n.speed=Math.max(-7,Math.min(26,n.speed));const c=1.2*(.38+.62*(1-Math.min(1,a/24))),l=n.speed<-.2?-1:1;n._steer=r,n.yaw-=r*t*c*l,n.mesh.rotation.y=n.yaw;const h=new Y(0,0,-1).applyQuaternion(n.mesh.quaternion);h.y=0,h.normalize(),n.body.velocity.x=h.x*n.speed,n.body.velocity.z=h.z*n.speed,n.body.quaternion.setFromAxisAngle(this.up,n.yaw),n.body.angularVelocity.set(0,0,0),n._fwd=h}}postPhysics(){const t=this.driven;if(!t)return;const e=Math.hypot(t.body.velocity.x,t.body.velocity.z);e+.35<Math.abs(t.speed)&&(t.speed=Math.sign(t.speed||1)*e);const n=t.body.position.x,i=t.body.position.z,r=this.world.dem;t.body.position.x=Math.min(r.maxX-21,Math.max(r.minX+21,n)),t.body.position.z=Math.min(r.maxZ-21,Math.max(r.minZ+21,i));const o=this.world.surfaceAt(t.body.position.x,t.body.position.z)+.02;t.body.position.y=o,t.body.velocity.y=0,t.mesh.position.set(t.body.position.x,o,t.body.position.z),t.mesh.rotation.y=t.yaw;const a=t._fwd||new Y(0,0,-1).applyQuaternion(t.mesh.quaternion),c=this.world.surfaceAt(t.mesh.position.x+a.x*2.1,t.mesh.position.z+a.z*2.1),l=this.world.surfaceAt(t.mesh.position.x-a.x*2.1,t.mesh.position.z-a.z*2.1);t.visual.rotation.x=Math.atan2(c-l,4.2),t.wheelSpin+=t.speed*.08;for(const u of t.visual.userData.wheels)u.rotation.x=t.wheelSpin;const h=t.visual.userData.front;for(const u of h)u.rotation.y=(t._steer||0)*.04}}const j_=new le({color:"#17191c",roughness:.78,metalness:.04}),K_=new le({color:"#c5c8cc",roughness:.35,metalness:.75}),sr=new le({color:"#b7d0d8",roughness:.08,metalness:.15,transparent:!0,opacity:.55,envMapIntensity:1}),fl=new le({color:"#fff6d8",emissive:"#fff1c4",emissiveIntensity:.7}),pl=new le({color:"#8a1d1d",emissive:"#ff2a2a",emissiveIntensity:.35}),ml=new le({color:"#2a2e33",roughness:.45,metalness:.5});function Ce(s,t,e,n,i,r,o,a=0){const c=new Yt(new Ie(s,t,e),n);return c.position.set(i,r,o),c.rotation.x=a,c.castShadow=!0,c.receiveShadow=!0,c}function J_(s){const t=new qe,e=new Ig({color:s,roughness:.32,metalness:.62,clearcoat:.7,clearcoatRoughness:.18,envMapIntensity:1});t.add(Ce(1.78,.42,4.2,e,0,.58,.02)),t.add(Ce(1.68,.12,1.35,e,0,.78,-1.05)),t.add(Ce(1.58,.42,1.7,e,0,.92,.18)),t.add(Ce(1.72,.16,.28,ml,0,.48,-2.02)),t.add(Ce(1.72,.16,.22,ml,0,.48,2.05)),t.add(Ce(1.42,.38,.06,sr,0,.96,-.64,.42)),t.add(Ce(1.42,.32,.05,sr,0,.98,1,-.35)),t.add(Ce(.05,.32,1.15,sr,-.8,.96,.18)),t.add(Ce(.05,.32,1.15,sr,.8,.96,.18));const n=Ce(.32,.12,.06,fl,-.58,.62,-2.12),i=Ce(.32,.12,.06,fl,.58,.62,-2.12);t.add(n,i),t.add(Ce(.28,.1,.05,pl,-.58,.66,2.12)),t.add(Ce(.28,.1,.05,pl,.58,.66,2.12)),t.add(Ce(.16,.1,.22,e,-.96,.95,.15)),t.add(Ce(.16,.1,.22,e,.96,.95,.15));const r=[],o=[],a=[[-.84,-1.32],[.84,-1.32],[-.84,1.28],[.84,1.28]];for(const[c,l]of a){const h=new qe;h.position.set(c,.34,l);const u=new qe,d=new Yt(new Xi(.34,.34,.24,14),j_);d.rotation.z=Math.PI/2,d.castShadow=!0;const f=new Yt(new Xi(.18,.18,.26,10),K_);f.rotation.z=Math.PI/2,u.add(d,f),h.add(u),t.add(h),r.push(u),l<0&&o.push(h)}return t.userData.wheels=r,t.userData.front=o,t}class Q_{constructor(t,e){this.scene=t,this.renderer=e,this.time=.36,this.locked=!1,this.rainOn=!1,this.quality="high",this.sun=new kg("#fff5e4",2.05),this.sun.target.position.set(0,0,0),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),this.sun.shadow.camera.near=10,this.sun.shadow.camera.far=340;const n=82;this.sun.shadow.camera.left=-n,this.sun.shadow.camera.right=n,this.sun.shadow.camera.top=n,this.sun.shadow.camera.bottom=-n,this.sun.shadow.bias=-22e-5,this.sun.shadow.normalBias=.12,this.sun.shadow.radius=1.4,this.hemi=new Og("#c9d7e6","#6a7350",.62),this.ambient=new Hg("#93a4b8",.2),t.add(this.sun,this.sun.target,this.hemi,this.ambient),t.fog=new pa("#d7e3ec",260,3200),e.shadowMap.enabled=!0,e.shadowMap.type=vl,this.sky=new pn({side:De,depthWrite:!1,glslVersion:fr,uniforms:{uSun:{value:new Y(.2,.7,.25)},uZenith:{value:new Lt("#8ebbe0")},uHorizon:{value:new Lt("#d7e3ec")},uHaze:{value:.38}},vertexShader:`
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
      `}),this.skyMesh=new Yt(new mr(4200,28,16),this.sky),this.skyMesh.frustumCulled=!1,this.skyMesh.renderOrder=-1,t.add(this.skyMesh);const i=900,r=new Float32Array(i*3);for(let a=0;a<i;a++)r[a*3]=(Math.random()-.5)*70,r[a*3+1]=Math.random()*28,r[a*3+2]=(Math.random()-.5)*70;const o=new Oe;o.setAttribute("position",new _e(r,3)),this.rain=new Pg(o,new jl({color:"#d5e4ee",size:.07,transparent:!0,opacity:0,depthWrite:!1})),this.rain.frustumCulled=!1,t.add(this.rain),this._sun=new Y,this._horizon=new Lt,this._zenith=new Lt,this._dayHorizon=new Lt("#d7e3ec"),this._nightHorizon=new Lt("#1a2433"),this._dayZenith=new Lt("#8ebbe0"),this._nightZenith=new Lt("#070b14"),this._pmrem=new $o(e),this._envScene=new $l,this._envSky=new Yt(new mr(40,24,14),this.sky),this._envScene.add(this._envSky),this.envMap=null,this._envStamp="",this.refreshEnvironment()}get dayFactor(){const t=Math.sin(this.time*Math.PI*2);return fu.clamp((t+.08)/.9,0,1)}labelKey(){const t=this.time;return t<.18||t>.82?"night":t<.28?"morning":t<.55?"day":t<.7?"afternoon":"dusk"}setRain(t){this.rainOn=t}toggleRain(){return this.rainOn=!this.rainOn,this.rainOn}applyQuality(t){this.quality=t==="low"?"low":"high";const e=this.quality==="high";this.renderer.shadowMap.enabled=e,this.sun.castShadow=e;const n=e?2048:256;this.sun.shadow.mapSize.x!==n&&(this.sun.shadow.mapSize.set(n,n),this.sun.shadow.map&&(this.sun.shadow.map.dispose(),this.sun.shadow.map=null))}refreshEnvironment(){const t=this._pmrem.fromScene(this._envScene,.04);this.envMap&&this.envMap.dispose(),this.envMap=t.texture,this.scene.environment=this.envMap,this._envStamp=this.dayFactor>.42?"day":"night"}update(t,e,n,i){this.locked||(this.time=(this.time+t/720)%1);const r=this.time*Math.PI*2,o=Math.sin(r),a=Math.cos(r);this._sun.set(a*.85,Math.max(o,-.15),.28).normalize();const c=i||e.position;this.sun.position.copy(c).addScaledVector(this._sun,190),this.sun.target.position.copy(c),this.sun.target.updateMatrixWorld();const l=this.dayFactor;this.sun.intensity=.05+l*2.05,this.sun.color.set(this._sun.y>.45?"#fff5e4":"#ffd8b0"),this.hemi.intensity=.16+l*.5,this.hemi.color.set(l>.35?"#c9d7e6":"#6d7f99"),this.hemi.groundColor.set(l>.35?"#6a7350":"#2a3328"),this.ambient.intensity=.1+l*.12+(1-l)*.16,this.renderer.toneMappingExposure=.72+l*.28,this._horizon.copy(this._dayHorizon).lerp(this._nightHorizon,1-l),this._zenith.copy(this._dayZenith).lerp(this._nightZenith,1-l),this.rainOn&&l>.3&&this._horizon.lerp(new Lt("#c5ced4"),.45),this.sky.uniforms.uSun.value.copy(this._sun),this.sky.uniforms.uHorizon.value.copy(this._horizon),this.sky.uniforms.uZenith.value.copy(this._zenith),this.sky.uniforms.uHaze.value=this.rainOn?.68:.34+(1-l)*.12,this.scene.fog.color.copy(this._horizon),this.scene.fog.near=this.rainOn?70:240,this.scene.fog.far=this.rainOn?1200:3e3+l*400,this.skyMesh.position.copy(e.position);const h=.012+(1-l)*1.15;for(const f of n.facades)f.emissiveIntensity=h;n.lampHead.emissiveIntensity=.12+(1-l)*1.35,n.road.roughness=this.rainOn?.4:.94,n.sidewalk.roughness=this.rainOn?.55:.94,n.terrain.roughness=this.rainOn?.68:.98,n.water.uniforms.uSun&&n.water.uniforms.uSun.value.copy(this._sun),n.water.uniforms.uTime.value+=t,(l>.42?"day":"night")!==this._envStamp&&this.refreshEnvironment();const d=this.rain.geometry.attributes.position;if(this.rain.material.opacity=this.rainOn?.45:0,this.rain.position.copy(e.position),this.rainOn){for(let f=0;f<d.count;f++){let g=d.getY(f)-t*18;g<0&&(g=28),d.setY(f,g)}d.needsUpdate=!0}}}const co={en:{tagline:"Québec — walk or drive the city",loading:"Loading the map…",reading:"Reading the map…",shaping:"Shaping terrain and rivers…",placing:"Placing the streets…",raising:"Raising the downtown blocks…",landmarks:"Landmarks",found:"found",places:"Landmarks",placesHelp:"Teleport anywhere in Sherbrooke.",close:"Close",hint:"WASD move · Shift sprint · Space jump · C crouch · F car · V camera · M places · R weather · Q quality · click to look",exitCar:"F  exit car",enterCar:"F  enter car",rain:"rain",night:"Night",morning:"Morning",day:"Day",afternoon:"Afternoon",dusk:"Dusk",qualityHigh:"High",qualityLow:"Low"},fr:{tagline:"Québec — marcher ou conduire dans la ville",loading:"Chargement de la carte…",reading:"Lecture de la carte…",shaping:"Mise en forme du relief et des rivières…",placing:"Placement des rues…",raising:"Élévation des îlots du centre-ville…",landmarks:"Lieux",found:"trouvé",places:"Lieux",placesHelp:"Se rendre à un lieu de Sherbrooke.",close:"Fermer",hint:"WASD bouger · Maj courir · Espace sauter · C s’accroupir · F voiture · V caméra · M lieux · R météo · Q qualité · cliquer pour regarder",exitCar:"F  sortir",enterCar:"F  monter",rain:"pluie",night:"Nuit",morning:"Matin",day:"Jour",afternoon:"Après-midi",dusk:"Crépuscule",qualityHigh:"Élevée",qualityLow:"Légère"}};let Wn="en";function Fe(s){return co[Wn]&&co[Wn][s]||co.en[s]||s}function tx(){document.documentElement.lang=Wn;const s=document.querySelector("#load p");s&&(s.textContent=Fe("tagline"));const t=document.getElementById("hint");t&&(t.textContent=Fe("hint"));const e=document.querySelector("#menu h2");e&&(e.textContent=Fe("places"));const n=document.querySelector("#menu p");n&&(n.textContent=Fe("placesHelp"));const i=document.getElementById("menu-close");i&&(i.textContent=Fe("close"));const r=document.getElementById("lang");r&&(r.textContent=Wn==="fr"?"EN":"FR")}function Sa(s){Wn=s==="fr"?"fr":"en";try{localStorage.setItem("sherbrooke-lang",Wn)}catch{}return tx(),Wn}function ex(){return Sa(Wn==="fr"?"en":"fr")}function nx(){let s=null;try{s=localStorage.getItem("sherbrooke-lang")}catch{s=null}const t=(navigator.language||"en").toLowerCase().startsWith("fr")?"fr":"en";return Sa(s==="fr"||s==="en"?s:t)}const ch="sherbrooke-explorer-found";class ix{constructor(t){this.world=t,this.pois=t.pois,this.found=new Set(sx()),this.menuOpen=!1,this.debugOn=!1,this.clockEl=document.getElementById("clock"),this.landEl=document.getElementById("landmarks"),this.promptEl=document.getElementById("prompt"),this.speedEl=document.getElementById("speed"),this.debugEl=document.getElementById("debug"),this.cross=document.getElementById("crosshair"),this.menu=document.getElementById("menu"),this.list=document.getElementById("menu-list"),this.map=document.getElementById("map"),this.compass=document.getElementById("compass"),this.onTeleport=null,this.paintOverview(),this.buildMenu(),document.getElementById("menu-close").addEventListener("click",()=>this.setMenu(!1)),this.refreshLandmarks()}paintOverview(){const n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d"),r=this.world.bounds,o=(a,c)=>[(a-r.minX)/(r.maxX-r.minX)*512,(c-r.minZ)/(r.maxZ-r.minZ)*512];i.fillStyle="#163044",i.fillRect(0,0,512,512),i.lineWidth=2,i.strokeStyle="#6e8ea0";for(const a of this.world.chunks.values())for(const c of a.waters){if(c.pts.length<4)continue;i.beginPath();const[l,h]=o(c.pts[0],c.pts[1]);i.moveTo(l,h);for(let u=2;u<c.pts.length;u+=2){const[d,f]=o(c.pts[u],c.pts[u+1]);i.lineTo(d,f)}i.stroke()}for(const a of this.world.overviewRoads){i.strokeStyle=a.cls<=2?"#e6d7a2":"#8ea0ae",i.lineWidth=a.cls<=2?2.4:1.2,i.beginPath();const c=a.pts,[l,h]=o(c[0],c[1]);i.moveTo(l,h);for(let u=2;u<c.length;u+=2){const[d,f]=o(c[u],c[u+1]);i.lineTo(d,f)}i.stroke()}this.overview=n,this.project=o}buildMenu(){this.list.innerHTML="",this.pois.forEach((t,e)=>{const n=document.createElement("button");n.type="button",n.className="landmark",n.innerHTML=`<b>${e+1}. ${t.name}</b><span>${t.blurb}</span><i>${this.found.has(t.id)?Fe("found"):""}</i>`,n.addEventListener("click",()=>{this.onTeleport?.(t),this.setMenu(!1)}),this.list.appendChild(n)})}setMenu(t){this.menuOpen=t,this.menu.hidden=!t,t&&document.exitPointerLock()}toggleMenu(){this.setMenu(!this.menuOpen)}discover(t,e){let n=!1;for(const i of this.pois)this.found.has(i.id)||Math.hypot(i.x-t,i.z-e)<22&&(this.found.add(i.id),n=!0);n&&(localStorage.setItem(ch,JSON.stringify([...this.found])),this.refreshLandmarks(),this.buildMenu())}refreshLandmarks(){this.landEl.textContent=`${Fe("landmarks")} ${this.found.size}/${this.pois.length}`}refreshLanguage(){this.refreshLandmarks(),this.buildMenu()}update({playerX:t,playerZ:e,heading:n,speed:i,driving:r,prompt:o,firstPerson:a,envLabel:c,qualityLabel:l,debug:h,fps:u,drawCalls:d,triangles:f,chunks:g}){this.clockEl.textContent=l?`${c} · ${l}`:c,this.promptEl.textContent=o||"",this.speedEl.hidden=!r,r&&(this.speedEl.textContent=`${Math.round(Math.abs(i)*3.6)} km/h`),this.cross.hidden=!a,this.drawMap(t,e,n),this.drawCompass(n),this.debugOn?(this.debugEl.hidden=!1,this.debugEl.textContent=h||`fps ${u.toFixed(0)}
draw calls ${d}
triangles ${f}
chunks ${g}
${t.toFixed(0)}, ${e.toFixed(0)}`):this.debugEl.hidden=!0}drawMap(t,e,n){const i=this.map.getContext("2d"),r=this.map.width,o=this.map.height;i.clearRect(0,0,r,o),i.drawImage(this.overview,0,0,r,o);const a=this.world.bounds,c=(t-a.minX)/(a.maxX-a.minX)*r,l=(e-a.minZ)/(a.maxZ-a.minZ)*o;for(const h of this.pois){const u=(h.x-a.minX)/(a.maxX-a.minX)*r,d=(h.z-a.minZ)/(a.maxZ-a.minZ)*o;i.fillStyle=this.found.has(h.id)?"#e2b657":"#f4efe4",i.fillRect(u-1.5,d-1.5,3,3)}i.save(),i.translate(c,l),i.rotate(n),i.fillStyle="#e2b657",i.beginPath(),i.moveTo(0,-7),i.lineTo(5,6),i.lineTo(-5,6),i.closePath(),i.fill(),i.restore()}drawCompass(t){const e=this.compass.getContext("2d"),n=this.compass.width,i=this.compass.height;e.clearRect(0,0,n,i);const r=t*180/Math.PI,o={0:"N",45:"NE",90:"E",135:"SE",180:"S",225:"SW",270:"W",315:"NW"};e.font="12px Avenir Next, Segoe UI, sans-serif",e.textAlign="center";for(let a=-180;a<=540;a+=15){let c=a-r;c=(c+540)%360-180;const l=n/2+c*2.4;l<0||l>n||(e.fillStyle=a%90===0?"#e2b657":"rgba(244,239,228,0.7)",e.fillRect(l,i-10,a%45===0?2:1,a%45===0?8:4),o[a%360]&&e.fillText(o[(a%360+360)%360],l,16))}}}function sx(){try{return JSON.parse(localStorage.getItem(ch)||"[]")}catch{return[]}}class rx{constructor(){this.started=!1}start(){if(this.started)return;this.started=!0;const t="./";this.bed=new Audio(`${t}audio/city-ambient.wav`),this.bed.loop=!0,this.bed.volume=.26,this.rainAudio=new Audio(`${t}audio/rain.wav`),this.rainAudio.loop=!0,this.rainAudio.volume=0,this.bed.play().catch(()=>{}),this.rainAudio.play().catch(()=>{});const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e;const n=this.ctx.createOscillator(),i=this.ctx.createGain();n.type="sawtooth",n.frequency.value=46,i.gain.value=0;const r=this.ctx.createBiquadFilter();r.type="lowpass",r.frequency.value=220,n.connect(r),r.connect(i),i.connect(this.ctx.destination),n.start(),this.engine=n,this.engineGain=i,this.ctx.state==="suspended"&&this.ctx.resume()}update({driving:t,speed:e,rain:n}){if(!this.started)return;const i=Math.abs(e)*3.6;this.bed.volume=t?.18:.26,this.rainAudio.volume=n?.38:0;const r=t?Math.min(.12,i/280):0,o=this.ctx.currentTime;this.engineGain.gain.setTargetAtTime(r,o,.08),this.engine.frequency.setTargetAtTime(40+i*.9,o,.08)}}const Qe=new URLSearchParams(location.search);function ta(s,t){const e=document.getElementById("load-fill"),n=document.getElementById("load-msg");e&&(e.style.width=`${Math.round(s*100)}%`),n&&t&&(n.textContent=Fe(t))}function ox(){try{const e=localStorage.getItem("sherbrooke-quality");if(e==="low"||e==="high")return e}catch{}const s=Math.min(window.innerWidth,window.innerHeight)<760,t=navigator.deviceMemory||8;return s||t<=4?"low":"high"}function lo(s){const t=window.devicePixelRatio||1;return s==="low"?Math.min(t,1):window.innerWidth*t>2200?Math.min(t,1.15):Math.min(t,1.35)}function ax(s,t){const e=new qe,n=new le({color:"#e2b657",emissive:"#c8922e",emissiveIntensity:.45,roughness:.45});for(const i of t.pois){const r=new qe,o=new Yt(new Xi(.05,.07,2.1,6),n);o.position.y=1.05;const a=new Yt(new ma(.28,.035,6,12),n);a.rotation.x=Math.PI/2,a.position.y=2.25,r.add(o,a);let c=i.x,l=i.z;const h=t.nearestRoad(c,l,28);if(h){const u=h.width*.5+2.1;c=h.x-h.dirZ*u,l=h.z+h.dirX*u}r.position.set(c,t.surfaceAt(c,l),l),r.userData.poi=i,r.userData.ring=a,e.add(r)}return s.add(e),{update(i){const r=performance.now()*.002;for(const o of e.children)o.userData.ring.position.y=2.25+Math.sin(r+o.position.x*.01)*.08,o.visible=!i.has(o.userData.poi.id)}}}async function cx(){nx(),(Qe.get("lang")==="fr"||Qe.get("lang")==="en")&&Sa(Qe.get("lang"));let s=Qe.get("quality")==="low"||Qe.get("quality")==="high"?Qe.get("quality"):ox();const t=new Ag({antialias:!0,powerPreference:"high-performance",stencil:!1});t.outputColorSpace=Le,t.toneMapping=xl,t.toneMappingExposure=.95,t.setPixelRatio(lo(s)),t.setSize(window.innerWidth,window.innerHeight),t.domElement.id="view",document.body.prepend(t.domElement);const e=new $l,n=new Xe(68,window.innerWidth/window.innerHeight,.12,5200),i=await C_(ta);ta(.94,"raising");const r=await I_(),o=new X_(e,i,r),a=new Q_(e,t);a.applyQuality(s);const c=new c_({gravity:new b(0,-18,0)});c.broadphase=new Ii(c),c.allowSleep=!0,c.solver.iterations=8,c.defaultContactMaterial.friction=.02,c.defaultContactMaterial.restitution=0;const l=new Y_(n,i,c);e.add(l.mesh);const h=new $_(e,i,c),u=new q_(t.domElement),d=new ix(i);document.getElementById("lang").addEventListener("click",A=>{A.stopPropagation(),ex(),d.refreshLanguage()});const f=new rx,g=ax(e,i),v=i.nearestRoad(i.spawn.x,i.spawn.z,35);v?l.place(v.x-v.dirZ*2.4,v.z+v.dirX*2.4):l.place(i.spawn.x,i.spawn.z);const m=Qe.get("at");if(m){const A=i.pois.find(E=>E.id===m);if(A){const E=i.nearestRoad(A.x,A.z,50);l.place(E?E.x:A.x,E?E.z:A.z),l.orbitYaw=E?Math.atan2(-E.dirX,-E.dirZ):.9,l.pitch=-.18}}o.prime(l.body.position.x,l.body.position.z),l.occluders=o.occluders,d.onTeleport=A=>{h.driven&&h.exit(l),l.place(A.x+6,A.z+4),o.prime(A.x,A.z),l.occluders=o.occluders},window.addEventListener("resize",()=>{n.aspect=window.innerWidth/window.innerHeight,n.updateProjectionMatrix(),t.setPixelRatio(lo(s)),t.setSize(window.innerWidth,window.innerHeight)}),t.domElement.addEventListener("click",()=>{d.menuOpen||(u.requestLock(),f.start())}),document.getElementById("load").classList.add("hidden"),document.getElementById("hud").hidden=!1;let p=60;const _=A=>{if(u.poll(A),u.jumpHeld=u.keys.has("Space"),!h.driven&&u.consume("Space")&&(u.pendingJump=!0),d.menuOpen&&(u.forward=0,u.strafe=0,u.lookX=0,u.lookY=0),u.consume("KeyM")&&d.toggleMenu(),u.consume("KeyV")&&l.toggleView(),u.consume("KeyR")&&a.toggleRain(),u.consume("KeyQ")){s=s==="high"?"low":"high";try{localStorage.setItem("sherbrooke-quality",s)}catch{}a.applyQuality(s),t.setPixelRatio(lo(s)),t.setSize(window.innerWidth,window.innerHeight)}if(u.consume("F3")&&(d.debugOn=!d.debugOn),u.consume("KeyF")&&!d.menuOpen)if(h.driven)h.exit(l);else{const N=h.nearest(l.body.position.x,l.body.position.z);N&&h.enter(N,l)}d.menuOpen&&i.pois.forEach((N,O)=>{O<9&&u.consume(`Digit${O+1}`)&&d.onTeleport(N)}),l.occluders=o.occluders,h.update(A,u),l.prePhysics(A,u),c.step(1/60,A,3),l.postPhysics(),h.postPhysics();const E=h.driven;E&&l.driveCamera(A,u,E);const C=E?E.mesh.position:l.mesh.position,I=l.selfTestMode?{loaded:o.live.size,wanted:o.live.size}:o.update(C.x,C.z);a.update(A,n,r,C),d.discover(C.x,C.z),g.update(d.found),n.getWorldDirection(rr),rr.y=0;const w=Math.atan2(rr.x,-rr.z),S=h.nearest(l.body.position.x,l.body.position.z),D=E?Fe("exitCar"):S?Fe("enterCar"):"",z=t.info.render;d.update({playerX:C.x,playerZ:C.z,heading:w,speed:E?E.speed:0,driving:!!E,prompt:D,firstPerson:l.firstPerson,envLabel:Fe(a.labelKey())+(a.rainOn?` · ${Fe("rain")}`:""),qualityLabel:Fe(s==="low"?"qualityLow":"qualityHigh"),fps:p,drawCalls:z.calls,triangles:z.triangles,chunks:`${I.loaded}/${I.wanted}`}),f.update({driving:!!E,speed:E?E.speed:0,rain:a.rainOn}),l.selfTestMode||t.render(e,n),u.endFrame(),u.pendingJump=!1};if(Qe.has("audit")){const A=l.body.position.x,E=l.body.position.z,C=[`pos ${A.toFixed(1)}, ${E.toFixed(1)}`];for(let D=-4;D<=4;D++){const z=A+D*5;C.push(`x${z.toFixed(0)} ease ${i.roadEase(z,E)} val ${i.roadValue(z,E)} dem ${i.sampleDem(z,E).toFixed(2)} ty ${i.terrainY(z,E).toFixed(2)} surf ${i.surfaceAt(z,E).toFixed(2)} mask ${i.maskAt(z,E)}`)}const I=[],w=i.chunkAt(A,E);if(w)for(const D of w.roads)I.push(`cls ${D.cls} w ${D.width.toFixed(1)} bridge ${D.flags&1} deck ${D.deckY==null?"-":D.deckY.toFixed(1)} pts ${D.pts.length/2}`);C.push(...I.slice(0,18));const S=document.getElementById("selftest");S.hidden=!1,S.textContent=C.join(`
`),document.title="AUDIT"}if(Qe.has("drive")){const A=h.nearest(l.body.position.x,l.body.position.z,40);if(!A)document.title="DRIVE FAIL no car";else{h.enter(A,l),u.keys.add("KeyW");const E=A.mesh.position.clone();for(let I=0;I<120;I++)_(1/60);u.keys.delete("KeyW");const C=A.mesh.position.distanceTo(E);document.title=C>3?`DRIVE OK ${C.toFixed(1)}`:`DRIVE FAIL ${C.toFixed(2)}`}}if(Qe.has("bench")){for(let z=0;z<90;z++)_(1/60);const A=60,E=performance.now();for(let z=0;z<A;z++)_(1/60);const C=A/((performance.now()-E)/1e3),I=t.info.render.calls,w=t.info.render.triangles,S=`BENCH ${C.toFixed(0)} fps calls ${I} tris ${w} quality ${s}`;document.title=S;const D=document.getElementById("selftest");D.hidden=!1,D.textContent=S,window.__bench={fps:C,calls:I,tris:w,quality:s}}if(Qe.has("selftest")){const A=await lx(l,u,_),E=document.getElementById("selftest");E.hidden=!1,E.textContent=A,document.title=A.includes("FAIL")?"SELFTEST FAIL":"SELFTEST PASS",window.__selfTestReport=A}let y=performance.now();function x(A){const E=Math.min(.05,(A-y)/1e3);y=A,p=p*.9+(E>0?1/E:60)*.1,_(E),requestAnimationFrame(x)}requestAnimationFrame(x),window.__sherbrooke={player:l,world:i,vehicles:h,chunks:o,step:_}}const rr=new Y;async function lx(s,t,e){s.selfTestMode=!0;const n=s.body.collisionFilterMask;s.body.collisionFilterMask=0,s.orbitYaw=.4,s.pitch=-.15,s.firstPerson=!1;for(let a=0;a<20;a++)e(1/60);const i=[],r=(a,c)=>{t.keys.add(a);const l=Math.round(c/(1e3/60));for(let h=0;h<l;h++)e(1/60);t.keys.delete(a);for(let h=0;h<4;h++)e(1/60)},o=[["KeyD","r",1],["KeyA","r",-1],["KeyW","f",1],["KeyS","f",-1],["ArrowRight","r",1],["ArrowUp","f",1]];for(const[a,c,l]of o){e(1/60);const h=s.cameraBasis(),u=h.forward.clone(),d=h.right.clone(),f=s.mesh.position.clone();r(a,450);const g=s.mesh.position.clone().sub(f);if(g.y=0,g.length()<.05){i.push(`${a}: FAIL no movement`);continue}const v=g.clone().normalize(),m=v.dot(c==="r"?d:u)*l,p=new Y(0,0,-1).applyQuaternion(s.mesh.quaternion),_=p.dot(v),y=new Y,x=new Y;s.mesh.getObjectByName("nose").getWorldPosition(y),s.mesh.getObjectByName("chest").getWorldPosition(x);const E=y.sub(x).setY(0).normalize().dot(p),C=m>.9&&_>.9&&E>.9;i.push(`${a}: move ${m.toFixed(2)} face ${_.toFixed(2)} model ${E.toFixed(2)} ${C?"OK":"FAIL"}`)}return s.body.collisionFilterMask=n,s.selfTestMode=!1,i.push("frame: forward -Z, right +X when yaw is 0"),i.join(`
`)}window.addEventListener("error",s=>{const t=document.getElementById("selftest");t&&(t.hidden=!1,t.textContent=`ERROR ${s.message}`)});window.addEventListener("unhandledrejection",s=>{const t=document.getElementById("selftest");if(!t)return;t.hidden=!1;const e=s.reason;t.textContent=`ERROR ${e&&e.stack?e.stack:e}`});cx().catch(s=>{console.error(s);const t=document.getElementById("selftest");t&&(t.hidden=!1,t.textContent=`ERROR ${s&&s.stack?s.stack:s}`),ta(1,s.message||String(s))});
