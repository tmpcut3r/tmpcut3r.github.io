var nn=(()=>{var U=import.meta.url;return async function(F={}){var I,u=F,Y,E,b=new Promise((r,e)=>{Y=r,E=e}),pr=typeof window=="object",B=typeof importScripts=="function",hr=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";if(hr){const{createRequire:r}=await Promise.resolve().then(function(){return an});var gr=r(import.meta.url)}var Or=Object.assign({},u),w="";function be(r){return u.locateFile?u.locateFile(r,w):w+r}var yr,mr,rr;if(hr){var Dr=gr("fs"),Ur=gr("path");w=gr("url").fileURLToPath(new URL("./",import.meta.url)),yr=(r,e)=>(r=nr(r)?new URL(r):Ur.normalize(r),Dr.readFileSync(r,e?void 0:"utf8")),rr=r=>{var e=yr(r,!0);return e.buffer||(e=new Uint8Array(e)),e},mr=(r,e,t,n=!0)=>{r=nr(r)?new URL(r):Ur.normalize(r),Dr.readFile(r,n?void 0:"utf8",(a,s)=>{a?t(a):e(n?s.buffer:s)})},!u.thisProgram&&process.argv.length>1&&process.argv[1].replace(/\\/g,"/"),process.argv.slice(2)}else(pr||B)&&(B?w=self.location.href:typeof document<"u"&&document.currentScript&&(w=document.currentScript.src),U&&(w=U),w.startsWith("blob:")?w="":w=w.substr(0,w.replace(/[?#].*/,"").lastIndexOf("/")+1),yr=r=>{var e=new XMLHttpRequest;return e.open("GET",r,!1),e.send(null),e.responseText},B&&(rr=r=>{var e=new XMLHttpRequest;return e.open("GET",r,!1),e.responseType="arraybuffer",e.send(null),new Uint8Array(e.response)}),mr=(r,e,t)=>{if(nr(r)){var n=new XMLHttpRequest;n.open("GET",r,!0),n.responseType="arraybuffer",n.onload=()=>{if(n.status==200||n.status==0&&n.response){e(n.response);return}t()},n.onerror=t,n.send(null);return}fetch(r,{credentials:"same-origin"}).then(a=>a.ok?a.arrayBuffer():Promise.reject(new Error(a.status+" : "+a.url))).then(e,t)});u.print||console.log.bind(console);var M=u.printErr||console.error.bind(console);Object.assign(u,Or),Or=null,u.arguments&&u.arguments,u.thisProgram&&u.thisProgram,u.quit&&u.quit;var L;u.wasmBinary&&(L=u.wasmBinary);var er,Ir=!1,W,m,z,tr,q,h,jr,Vr;function Hr(){var r=er.buffer;u.HEAP8=W=new Int8Array(r),u.HEAP16=z=new Int16Array(r),u.HEAPU8=m=new Uint8Array(r),u.HEAPU16=tr=new Uint16Array(r),u.HEAP32=q=new Int32Array(r),u.HEAPU32=h=new Uint32Array(r),u.HEAPF32=jr=new Float32Array(r),u.HEAPF64=Vr=new Float64Array(r)}var Br=[],Mr=[],Lr=[];function we(){if(u.preRun)for(typeof u.preRun=="function"&&(u.preRun=[u.preRun]);u.preRun.length;)Ce(u.preRun.shift());_r(Br)}function Pe(){_r(Mr)}function Te(){if(u.postRun)for(typeof u.postRun=="function"&&(u.postRun=[u.postRun]);u.postRun.length;)zr(u.postRun.shift());_r(Lr)}function Ce(r){Br.unshift(r)}function Ae(r){Mr.unshift(r)}function zr(r){Lr.unshift(r)}var k=0,G=null;function Re(r){k++,u.monitorRunDependencies?.(k)}function Fe(r){if(k--,u.monitorRunDependencies?.(k),k==0&&G){var e=G;G=null,e()}}function qr(r){u.onAbort?.(r),r="Aborted("+r+")",M(r),Ir=!0,r+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(r);throw E(e),e}var Ee="data:application/octet-stream;base64,",Gr=r=>r.startsWith(Ee),nr=r=>r.startsWith("file://");function Se(){if(u.locateFile){var r="Sorter.wasm";return Gr(r)?r:be(r)}return new URL("/assets/Sorter-Df0J3ZWJ.wasm",import.meta.url).href}var ar;function Nr(r){if(r==ar&&L)return new Uint8Array(L);if(rr)return rr(r);throw"both async and sync fetching of the wasm failed"}function We(r){return L?Promise.resolve().then(()=>Nr(r)):new Promise((e,t)=>{mr(r,n=>e(new Uint8Array(n)),n=>{try{e(Nr(r))}catch(a){t(a)}})})}function Jr(r,e,t){return We(r).then(n=>WebAssembly.instantiate(n,e)).then(t,n=>{M(`failed to asynchronously prepare wasm: ${n}`),qr(n)})}function ke(r,e,t,n){return!r&&typeof WebAssembly.instantiateStreaming=="function"&&!Gr(e)&&!nr(e)&&!hr&&typeof fetch=="function"?fetch(e,{credentials:"same-origin"}).then(a=>{var s=WebAssembly.instantiateStreaming(a,t);return s.then(n,function(o){return M(`wasm streaming compile failed: ${o}`),M("falling back to ArrayBuffer instantiation"),Jr(e,t,n)})}):Jr(e,t,n)}function Oe(){return{a:en}}function De(){var r=Oe();function e(n,a){return A=n.exports,er=A.z,Hr(),te=A.C,Ae(A.A),Fe(),A}Re();function t(n){e(n.instance)}if(u.instantiateWasm)try{return u.instantiateWasm(r,e)}catch(n){M(`Module.instantiateWasm callback failed with error: ${n}`),E(n)}return ar||(ar=Se()),ke(L,ar,r,t).catch(E),{}}var _r=r=>{for(;r.length>0;)r.shift()(u)};u.noExitRuntime;class Ue{constructor(e){this.excPtr=e,this.ptr=e-24}set_type(e){h[this.ptr+4>>2]=e}get_type(){return h[this.ptr+4>>2]}set_destructor(e){h[this.ptr+8>>2]=e}get_destructor(){return h[this.ptr+8>>2]}set_caught(e){e=e?1:0,W[this.ptr+12]=e}get_caught(){return W[this.ptr+12]!=0}set_rethrown(e){e=e?1:0,W[this.ptr+13]=e}get_rethrown(){return W[this.ptr+13]!=0}init(e,t){this.set_adjusted_ptr(0),this.set_type(e),this.set_destructor(t)}set_adjusted_ptr(e){h[this.ptr+16>>2]=e}get_adjusted_ptr(){return h[this.ptr+16>>2]}get_exception_ptr(){var e=ge(this.get_type());if(e)return h[this.excPtr>>2];var t=this.get_adjusted_ptr();return t!==0?t:this.excPtr}}var Xr=0,Ie=(r,e,t)=>{var n=new Ue(r);throw n.init(e,t),Xr=r,Xr},je=()=>{qr("")},Ve=(r,e,t,n,a)=>{},He=()=>{for(var r=new Array(256),e=0;e<256;++e)r[e]=String.fromCharCode(e);Zr=r},Zr,_=r=>{for(var e="",t=r;m[t];)e+=Zr[m[t++]];return e},j={},O={},ir={},V,d=r=>{throw new V(r)},xr,sr=r=>{throw new xr(r)},N=(r,e,t)=>{r.forEach(function(i){ir[i]=e});function n(i){var l=t(i);l.length!==r.length&&sr("Mismatched type converter count");for(var f=0;f<r.length;++f)T(r[f],l[f])}var a=new Array(e.length),s=[],o=0;e.forEach((i,l)=>{O.hasOwnProperty(i)?a[l]=O[i]:(s.push(i),j.hasOwnProperty(i)||(j[i]=[]),j[i].push(()=>{a[l]=O[i],++o,o===s.length&&n(a)}))}),s.length===0&&n(a)};function Be(r,e,t={}){var n=e.name;if(r||d(`type "${n}" must have a positive integer typeid pointer`),O.hasOwnProperty(r)){if(t.ignoreDuplicateRegistrations)return;d(`Cannot register type '${n}' twice`)}if(O[r]=e,delete ir[r],j.hasOwnProperty(r)){var a=j[r];delete j[r],a.forEach(s=>s())}}function T(r,e,t={}){if(!("argPackAdvance"in e))throw new TypeError("registerType registeredInstance requires argPackAdvance");return Be(r,e,t)}var S=8,Me=(r,e,t,n)=>{e=_(e),T(r,{name:e,fromWireType:function(a){return!!a},toWireType:function(a,s){return s?t:n},argPackAdvance:S,readValueFromPointer:function(a){return this.fromWireType(m[a])},destructorFunction:null})},Le=r=>({count:r.count,deleteScheduled:r.deleteScheduled,preservePointerOnDelete:r.preservePointerOnDelete,ptr:r.ptr,ptrType:r.ptrType,smartPtr:r.smartPtr,smartPtrType:r.smartPtrType}),$r=r=>{function e(t){return t.$$.ptrType.registeredClass.name}d(e(r)+" instance already deleted")},br=!1,Kr=r=>{},ze=r=>{r.smartPtr?r.smartPtrType.rawDestructor(r.smartPtr):r.ptrType.registeredClass.rawDestructor(r.ptr)},Qr=r=>{r.count.value-=1;var e=r.count.value===0;e&&ze(r)},Yr=(r,e,t)=>{if(e===t)return r;if(t.baseClass===void 0)return null;var n=Yr(r,e,t.baseClass);return n===null?null:t.downcast(n)},re={},qe=()=>Object.keys(Z).length,Ge=()=>{var r=[];for(var e in Z)Z.hasOwnProperty(e)&&r.push(Z[e]);return r},J=[],wr=()=>{for(;J.length;){var r=J.pop();r.$$.deleteScheduled=!1,r.delete()}},X,Ne=r=>{X=r,J.length&&X&&X(wr)},Je=()=>{u.getInheritedInstanceCount=qe,u.getLiveInheritedInstances=Ge,u.flushPendingDeletes=wr,u.setDelayFunction=Ne},Z={},Xe=(r,e)=>{for(e===void 0&&d("ptr should not be undefined");r.baseClass;)e=r.upcast(e),r=r.baseClass;return e},Ze=(r,e)=>(e=Xe(r,e),Z[e]),or=(r,e)=>{(!e.ptrType||!e.ptr)&&sr("makeClassHandle requires ptr and ptrType");var t=!!e.smartPtrType,n=!!e.smartPtr;return t!==n&&sr("Both smartPtrType and smartPtr must be specified"),e.count={value:1},x(Object.create(r,{$$:{value:e,writable:!0}}))};function xe(r){var e=this.getPointee(r);if(!e)return this.destructor(r),null;var t=Ze(this.registeredClass,e);if(t!==void 0){if(t.$$.count.value===0)return t.$$.ptr=e,t.$$.smartPtr=r,t.clone();var n=t.clone();return this.destructor(r),n}function a(){return this.isSmartPointer?or(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:e,smartPtrType:this,smartPtr:r}):or(this.registeredClass.instancePrototype,{ptrType:this,ptr:r})}var s=this.registeredClass.getActualType(e),o=re[s];if(!o)return a.call(this);var i;this.isConst?i=o.constPointerType:i=o.pointerType;var l=Yr(e,this.registeredClass,i.registeredClass);return l===null?a.call(this):this.isSmartPointer?or(i.registeredClass.instancePrototype,{ptrType:i,ptr:l,smartPtrType:this,smartPtr:r}):or(i.registeredClass.instancePrototype,{ptrType:i,ptr:l})}var x=r=>typeof FinalizationRegistry>"u"?(x=e=>e,r):(br=new FinalizationRegistry(e=>{Qr(e.$$)}),x=e=>{var t=e.$$,n=!!t.smartPtr;if(n){var a={$$:t};br.register(e,a,e)}return e},Kr=e=>br.unregister(e),x(r)),Ke=()=>{Object.assign(ur.prototype,{isAliasOf(r){if(!(this instanceof ur)||!(r instanceof ur))return!1;var e=this.$$.ptrType.registeredClass,t=this.$$.ptr;r.$$=r.$$;for(var n=r.$$.ptrType.registeredClass,a=r.$$.ptr;e.baseClass;)t=e.upcast(t),e=e.baseClass;for(;n.baseClass;)a=n.upcast(a),n=n.baseClass;return e===n&&t===a},clone(){if(this.$$.ptr||$r(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var r=x(Object.create(Object.getPrototypeOf(this),{$$:{value:Le(this.$$)}}));return r.$$.count.value+=1,r.$$.deleteScheduled=!1,r},delete(){this.$$.ptr||$r(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&d("Object already scheduled for deletion"),Kr(this),Qr(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},isDeleted(){return!this.$$.ptr},deleteLater(){return this.$$.ptr||$r(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&d("Object already scheduled for deletion"),J.push(this),J.length===1&&X&&X(wr),this.$$.deleteScheduled=!0,this}})};function ur(){}var K=(r,e)=>Object.defineProperty(e,"name",{value:r}),ee=(r,e,t)=>{if(r[e].overloadTable===void 0){var n=r[e];r[e]=function(...a){return r[e].overloadTable.hasOwnProperty(a.length)||d(`Function '${t}' called with an invalid number of arguments (${a.length}) - expects one of (${r[e].overloadTable})!`),r[e].overloadTable[a.length].apply(this,a)},r[e].overloadTable=[],r[e].overloadTable[n.argCount]=n}},Qe=(r,e,t)=>{u.hasOwnProperty(r)?(d(`Cannot register public name '${r}' twice`),ee(u,r,r),u.hasOwnProperty(t)&&d(`Cannot register multiple overloads of a function with the same number of arguments (${t})!`),u[r].overloadTable[t]=e):u[r]=e},Ye=48,rt=57,et=r=>{if(r===void 0)return"_unknown";r=r.replace(/[^a-zA-Z0-9_]/g,"$");var e=r.charCodeAt(0);return e>=Ye&&e<=rt?`_${r}`:r};function tt(r,e,t,n,a,s,o,i){this.name=r,this.constructor=e,this.instancePrototype=t,this.rawDestructor=n,this.baseClass=a,this.getActualType=s,this.upcast=o,this.downcast=i,this.pureVirtualFunctions=[]}var Pr=(r,e,t)=>{for(;e!==t;)e.upcast||d(`Expected null or instance of ${t.name}, got an instance of ${e.name}`),r=e.upcast(r),e=e.baseClass;return r};function nt(r,e){if(e===null)return this.isReference&&d(`null is not a valid ${this.name}`),0;e.$$||d(`Cannot pass "${Rr(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`);var t=e.$$.ptrType.registeredClass,n=Pr(e.$$.ptr,t,this.registeredClass);return n}function at(r,e){var t;if(e===null)return this.isReference&&d(`null is not a valid ${this.name}`),this.isSmartPointer?(t=this.rawConstructor(),r!==null&&r.push(this.rawDestructor,t),t):0;(!e||!e.$$)&&d(`Cannot pass "${Rr(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),!this.isConst&&e.$$.ptrType.isConst&&d(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);var n=e.$$.ptrType.registeredClass;if(t=Pr(e.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(e.$$.smartPtr===void 0&&d("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:e.$$.smartPtrType===this?t=e.$$.smartPtr:d(`Cannot convert argument of type ${e.$$.smartPtrType?e.$$.smartPtrType.name:e.$$.ptrType.name} to parameter type ${this.name}`);break;case 1:t=e.$$.smartPtr;break;case 2:if(e.$$.smartPtrType===this)t=e.$$.smartPtr;else{var a=e.clone();t=this.rawShare(t,$.toHandle(()=>a.delete())),r!==null&&r.push(this.rawDestructor,t)}break;default:d("Unsupporting sharing policy")}return t}function it(r,e){if(e===null)return this.isReference&&d(`null is not a valid ${this.name}`),0;e.$$||d(`Cannot pass "${Rr(e)}" as a ${this.name}`),e.$$.ptr||d(`Cannot pass deleted object as a pointer of type ${this.name}`),e.$$.ptrType.isConst&&d(`Cannot convert argument of type ${e.$$.ptrType.name} to parameter type ${this.name}`);var t=e.$$.ptrType.registeredClass,n=Pr(e.$$.ptr,t,this.registeredClass);return n}function lr(r){return this.fromWireType(h[r>>2])}var st=()=>{Object.assign(fr.prototype,{getPointee(r){return this.rawGetPointee&&(r=this.rawGetPointee(r)),r},destructor(r){this.rawDestructor?.(r)},argPackAdvance:S,readValueFromPointer:lr,fromWireType:xe})};function fr(r,e,t,n,a,s,o,i,l,f,c){this.name=r,this.registeredClass=e,this.isReference=t,this.isConst=n,this.isSmartPointer=a,this.pointeeType=s,this.sharingPolicy=o,this.rawGetPointee=i,this.rawConstructor=l,this.rawShare=f,this.rawDestructor=c,!a&&e.baseClass===void 0?n?(this.toWireType=nt,this.destructorFunction=null):(this.toWireType=it,this.destructorFunction=null):this.toWireType=at}var ot=(r,e,t)=>{u.hasOwnProperty(r)||sr("Replacing nonexistent public symbol"),u[r].overloadTable!==void 0&&t!==void 0?u[r].overloadTable[t]=e:(u[r]=e,u[r].argCount=t)},ut=(r,e,t)=>{r=r.replace(/p/g,"i");var n=u["dynCall_"+r];return n(e,...t)},cr=[],te,ne=r=>{var e=cr[r];return e||(r>=cr.length&&(cr.length=r+1),cr[r]=e=te.get(r)),e},lt=(r,e,t=[])=>{if(r.includes("j"))return ut(r,e,t);var n=ne(e)(...t);return n},ft=(r,e)=>(...t)=>lt(r,e,t),H=(r,e)=>{r=_(r);function t(){return r.includes("j")?ft(r,e):ne(e)}var n=t();return typeof n!="function"&&d(`unknown function pointer with signature ${r}: ${e}`),n},ct=(r,e)=>{var t=K(e,function(n){this.name=e,this.message=n;var a=new Error(n).stack;a!==void 0&&(this.stack=this.toString()+`
`+a.replace(/^Error(:[^\n]*)?\n/,""))});return t.prototype=Object.create(r.prototype),t.prototype.constructor=t,t.prototype.toString=function(){return this.message===void 0?this.name:`${this.name}: ${this.message}`},t},ae,ie=r=>{var e=he(r),t=_(e);return R(e),t},Tr=(r,e)=>{var t=[],n={};function a(s){if(!n[s]&&!O[s]){if(ir[s]){ir[s].forEach(a);return}t.push(s),n[s]=!0}}throw e.forEach(a),new ae(`${r}: `+t.map(ie).join([", "]))},vt=(r,e,t,n,a,s,o,i,l,f,c,v,p)=>{c=_(c),s=H(a,s),i&&=H(o,i),f&&=H(l,f),p=H(v,p);var g=et(c);Qe(g,function(){Tr(`Cannot construct ${c} due to unbound types`,[n])}),N([r,e,t],n?[n]:[],y=>{y=y[0];var Q,D;n?(Q=y.registeredClass,D=Q.instancePrototype):D=ur.prototype;var dr=K(c,function(...kr){if(Object.getPrototypeOf(this)!==Wr)throw new V("Use 'new' to construct "+c);if(P.constructor_body===void 0)throw new V(c+" has no accessible constructor");var $e=P.constructor_body[kr.length];if($e===void 0)throw new V(`Tried to invoke ctor of ${c} with invalid number of parameters (${kr.length}) - expected (${Object.keys(P.constructor_body).toString()}) parameters instead!`);return $e.apply(this,kr)}),Wr=Object.create(D,{constructor:{value:dr}});dr.prototype=Wr;var P=new tt(c,dr,Wr,p,Q,s,i,f);P.baseClass&&(P.baseClass.__derivedClasses??=[],P.baseClass.__derivedClasses.push(P));var tn=new fr(c,P,!0,!1,!1),me=new fr(c+"*",P,!1,!1,!1),_e=new fr(c+" const*",P,!1,!0,!1);return re[r]={pointerType:me,constPointerType:_e},ot(g,dr),[tn,me,_e]})},se=(r,e)=>{for(var t=[],n=0;n<r;n++)t.push(h[e+n*4>>2]);return t},oe=r=>{for(;r.length;){var e=r.pop(),t=r.pop();t(e)}};function ue(r){for(var e=1;e<r.length;++e)if(r[e]!==null&&r[e].destructorFunction===void 0)return!0;return!1}function le(r,e){if(!(r instanceof Function))throw new TypeError(`new_ called with constructor type ${typeof r} which is not a function`);var t=K(r.name||"unknownFunctionName",function(){});t.prototype=r.prototype;var n=new t,a=r.apply(n,e);return a instanceof Object?a:n}function dt(r,e,t,n){for(var a=ue(r),s=r.length,o="",i="",l=0;l<s-2;++l)o+=(l!==0?", ":"")+"arg"+l,i+=(l!==0?", ":"")+"arg"+l+"Wired";var f=`
        return function (${o}) {
        if (arguments.length !== ${s-2}) {
          throwBindingError('function ' + humanName + ' called with ' + arguments.length + ' arguments, expected ${s-2}');
        }`;a&&(f+=`var destructors = [];
`);var c=a?"destructors":"null",v=["humanName","throwBindingError","invoker","fn","runDestructors","retType","classParam"];e&&(f+="var thisWired = classParam['toWireType']("+c+`, this);
`);for(var l=0;l<s-2;++l)f+="var arg"+l+"Wired = argType"+l+"['toWireType']("+c+", arg"+l+`);
`,v.push("argType"+l);if(e&&(i="thisWired"+(i.length>0?", ":"")+i),f+=(t||n?"var rv = ":"")+"invoker(fn"+(i.length>0?", ":"")+i+`);
`,a)f+=`runDestructors(destructors);
`;else for(var l=e?1:2;l<r.length;++l){var p=l===1?"thisWired":"arg"+(l-2)+"Wired";r[l].destructorFunction!==null&&(f+=`${p}_dtor(${p});
`,v.push(`${p}_dtor`))}return t&&(f+=`var ret = retType['fromWireType'](rv);
return ret;
`),f+=`}
`,[v,f]}function fe(r,e,t,n,a,s){var o=e.length;o<2&&d("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var i=e[1]!==null&&t!==null,l=ue(e),f=e[0].name!=="void",c=[r,d,n,a,oe,e[0],e[1]],v=0;v<o-2;++v)c.push(e[v+2]);if(!l)for(var v=i?1:2;v<e.length;++v)e[v].destructorFunction!==null&&c.push(e[v].destructorFunction);let[p,g]=dt(e,i,f,s);p.push(g);var y=le(Function,p)(...c);return K(r,y)}var pt=(r,e,t,n,a,s)=>{var o=se(e,t);a=H(n,a),N([],[r],i=>{i=i[0];var l=`constructor ${i.name}`;if(i.registeredClass.constructor_body===void 0&&(i.registeredClass.constructor_body=[]),i.registeredClass.constructor_body[e-1]!==void 0)throw new V(`Cannot register multiple constructors with identical number of parameters (${e-1}) for class '${i.name}'! Overload resolution is currently only performed using the parameter count, not actual type info!`);return i.registeredClass.constructor_body[e-1]=()=>{Tr(`Cannot construct ${i.name} due to unbound types`,o)},N([],o,f=>(f.splice(1,0,null),i.registeredClass.constructor_body[e-1]=fe(l,f,null,a,s),[])),[]})},ht=r=>{r=r.trim();const e=r.indexOf("(");return e!==-1?r.substr(0,e):r},gt=(r,e,t,n,a,s,o,i,l)=>{var f=se(t,n);e=_(e),e=ht(e),s=H(a,s),N([],[r],c=>{c=c[0];var v=`${c.name}.${e}`;e.startsWith("@@")&&(e=Symbol[e.substring(2)]),i&&c.registeredClass.pureVirtualFunctions.push(e);function p(){Tr(`Cannot call ${v} due to unbound types`,f)}var g=c.registeredClass.instancePrototype,y=g[e];return y===void 0||y.overloadTable===void 0&&y.className!==c.name&&y.argCount===t-2?(p.argCount=t-2,p.className=c.name,g[e]=p):(ee(g,e,v),g[e].overloadTable[t-2]=p),N([],f,Q=>{var D=fe(v,Q,c,s,o,l);return g[e].overloadTable===void 0?(D.argCount=t-2,g[e]=D):g[e].overloadTable[t-2]=D,[]}),[]})},Cr=[],C=[],Ar=r=>{r>9&&--C[r+1]===0&&(C[r]=void 0,Cr.push(r))},yt=()=>C.length/2-5-Cr.length,mt=()=>{C.push(0,1,void 0,1,null,1,!0,1,!1,1),u.count_emval_handles=yt},$={toValue:r=>(r||d("Cannot use deleted val. handle = "+r),C[r]),toHandle:r=>{switch(r){case void 0:return 2;case null:return 4;case!0:return 6;case!1:return 8;default:{const e=Cr.pop()||C.length;return C[e]=r,C[e+1]=1,e}}}},_t={name:"emscripten::val",fromWireType:r=>{var e=$.toValue(r);return Ar(r),e},toWireType:(r,e)=>$.toHandle(e),argPackAdvance:S,readValueFromPointer:lr,destructorFunction:null},$t=r=>T(r,_t),Rr=r=>{if(r===null)return"null";var e=typeof r;return e==="object"||e==="array"||e==="function"?r.toString():""+r},bt=(r,e)=>{switch(e){case 4:return function(t){return this.fromWireType(jr[t>>2])};case 8:return function(t){return this.fromWireType(Vr[t>>3])};default:throw new TypeError(`invalid float width (${e}): ${r}`)}},wt=(r,e,t)=>{e=_(e),T(r,{name:e,fromWireType:n=>n,toWireType:(n,a)=>a,argPackAdvance:S,readValueFromPointer:bt(e,t),destructorFunction:null})},Pt=(r,e,t)=>{switch(e){case 1:return t?n=>W[n]:n=>m[n];case 2:return t?n=>z[n>>1]:n=>tr[n>>1];case 4:return t?n=>q[n>>2]:n=>h[n>>2];default:throw new TypeError(`invalid integer width (${e}): ${r}`)}},Tt=(r,e,t,n,a)=>{e=_(e);var s=c=>c;if(n===0){var o=32-8*t;s=c=>c<<o>>>o}var i=e.includes("unsigned"),l=(c,v)=>{},f;i?f=function(c,v){return l(v,this.name),v>>>0}:f=function(c,v){return l(v,this.name),v},T(r,{name:e,fromWireType:s,toWireType:f,argPackAdvance:S,readValueFromPointer:Pt(e,t,n!==0),destructorFunction:null})},Ct=(r,e,t)=>{var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array],a=n[e];function s(o){var i=h[o>>2],l=h[o+4>>2];return new a(W.buffer,l,i)}t=_(t),T(r,{name:t,fromWireType:s,argPackAdvance:S,readValueFromPointer:s},{ignoreDuplicateRegistrations:!0})},At=(r,e,t,n)=>{if(!(n>0))return 0;for(var a=t,s=t+n-1,o=0;o<r.length;++o){var i=r.charCodeAt(o);if(i>=55296&&i<=57343){var l=r.charCodeAt(++o);i=65536+((i&1023)<<10)|l&1023}if(i<=127){if(t>=s)break;e[t++]=i}else if(i<=2047){if(t+1>=s)break;e[t++]=192|i>>6,e[t++]=128|i&63}else if(i<=65535){if(t+2>=s)break;e[t++]=224|i>>12,e[t++]=128|i>>6&63,e[t++]=128|i&63}else{if(t+3>=s)break;e[t++]=240|i>>18,e[t++]=128|i>>12&63,e[t++]=128|i>>6&63,e[t++]=128|i&63}}return e[t]=0,t-a},Rt=(r,e,t)=>At(r,m,e,t),Ft=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n<=127?e++:n<=2047?e+=2:n>=55296&&n<=57343?(e+=4,++t):e+=3}return e},ce=typeof TextDecoder<"u"?new TextDecoder("utf8"):void 0,Et=(r,e,t)=>{for(var n=e+t,a=e;r[a]&&!(a>=n);)++a;if(a-e>16&&r.buffer&&ce)return ce.decode(r.subarray(e,a));for(var s="";e<a;){var o=r[e++];if(!(o&128)){s+=String.fromCharCode(o);continue}var i=r[e++]&63;if((o&224)==192){s+=String.fromCharCode((o&31)<<6|i);continue}var l=r[e++]&63;if((o&240)==224?o=(o&15)<<12|i<<6|l:o=(o&7)<<18|i<<12|l<<6|r[e++]&63,o<65536)s+=String.fromCharCode(o);else{var f=o-65536;s+=String.fromCharCode(55296|f>>10,56320|f&1023)}}return s},St=(r,e)=>r?Et(m,r,e):"",Wt=(r,e)=>{e=_(e);var t=e==="std::string";T(r,{name:e,fromWireType(n){var a=h[n>>2],s=n+4,o;if(t)for(var i=s,l=0;l<=a;++l){var f=s+l;if(l==a||m[f]==0){var c=f-i,v=St(i,c);o===void 0?o=v:(o+="\0",o+=v),i=f+1}}else{for(var p=new Array(a),l=0;l<a;++l)p[l]=String.fromCharCode(m[s+l]);o=p.join("")}return R(n),o},toWireType(n,a){a instanceof ArrayBuffer&&(a=new Uint8Array(a));var s,o=typeof a=="string";o||a instanceof Uint8Array||a instanceof Uint8ClampedArray||a instanceof Int8Array||d("Cannot pass non-string to std::string"),t&&o?s=Ft(a):s=a.length;var i=Sr(4+s+1),l=i+4;if(h[i>>2]=s,t&&o)Rt(a,l,s+1);else if(o)for(var f=0;f<s;++f){var c=a.charCodeAt(f);c>255&&(R(l),d("String has UTF-16 code units that do not fit in 8 bits")),m[l+f]=c}else for(var f=0;f<s;++f)m[l+f]=a[f];return n!==null&&n.push(R,i),i},argPackAdvance:S,readValueFromPointer:lr,destructorFunction(n){R(n)}})},ve=typeof TextDecoder<"u"?new TextDecoder("utf-16le"):void 0,kt=(r,e)=>{for(var t=r,n=t>>1,a=n+e/2;!(n>=a)&&tr[n];)++n;if(t=n<<1,t-r>32&&ve)return ve.decode(m.subarray(r,t));for(var s="",o=0;!(o>=e/2);++o){var i=z[r+o*2>>1];if(i==0)break;s+=String.fromCharCode(i)}return s},Ot=(r,e,t)=>{if(t??=2147483647,t<2)return 0;t-=2;for(var n=e,a=t<r.length*2?t/2:r.length,s=0;s<a;++s){var o=r.charCodeAt(s);z[e>>1]=o,e+=2}return z[e>>1]=0,e-n},Dt=r=>r.length*2,Ut=(r,e)=>{for(var t=0,n="";!(t>=e/4);){var a=q[r+t*4>>2];if(a==0)break;if(++t,a>=65536){var s=a-65536;n+=String.fromCharCode(55296|s>>10,56320|s&1023)}else n+=String.fromCharCode(a)}return n},It=(r,e,t)=>{if(t??=2147483647,t<4)return 0;for(var n=e,a=n+t-4,s=0;s<r.length;++s){var o=r.charCodeAt(s);if(o>=55296&&o<=57343){var i=r.charCodeAt(++s);o=65536+((o&1023)<<10)|i&1023}if(q[e>>2]=o,e+=4,e+4>a)break}return q[e>>2]=0,e-n},jt=r=>{for(var e=0,t=0;t<r.length;++t){var n=r.charCodeAt(t);n>=55296&&n<=57343&&++t,e+=4}return e},Vt=(r,e,t)=>{t=_(t);var n,a,s,o;e===2?(n=kt,a=Ot,o=Dt,s=i=>tr[i>>1]):e===4&&(n=Ut,a=It,o=jt,s=i=>h[i>>2]),T(r,{name:t,fromWireType:i=>{for(var l=h[i>>2],f,c=i+4,v=0;v<=l;++v){var p=i+4+v*e;if(v==l||s(p)==0){var g=p-c,y=n(c,g);f===void 0?f=y:(f+="\0",f+=y),c=p+e}}return R(i),f},toWireType:(i,l)=>{typeof l!="string"&&d(`Cannot pass non-string to C++ string type ${t}`);var f=o(l),c=Sr(4+f+e);return h[c>>2]=f/e,a(l,c+4,f+e),i!==null&&i.push(R,c),c},argPackAdvance:S,readValueFromPointer:lr,destructorFunction(i){R(i)}})},Ht=(r,e)=>{e=_(e),T(r,{isVoid:!0,name:e,argPackAdvance:0,fromWireType:()=>{},toWireType:(t,n)=>{}})},Bt=(r,e,t)=>m.copyWithin(r,e,e+t),Fr=(r,e)=>{var t=O[r];return t===void 0&&d(`${e} has unknown type ${ie(r)}`),t},de=(r,e,t)=>{var n=[],a=r.toWireType(n,t);return n.length&&(h[e>>2]=$.toHandle(n)),a},Mt=(r,e,t)=>(r=$.toValue(r),e=Fr(e,"emval::as"),de(e,t,r)),Lt={},pe=r=>{var e=Lt[r];return e===void 0?_(r):e},Er=[],zt=(r,e,t,n,a)=>(r=Er[r],e=$.toValue(e),t=pe(t),r(e,e[t],n,a)),qt=r=>{var e=Er.length;return Er.push(r),e},Gt=(r,e)=>{for(var t=new Array(r),n=0;n<r;++n)t[n]=Fr(h[e+n*4>>2],"parameter "+n);return t},Nt=(r,e,t)=>{var n=Gt(r,e),a=n.shift();r--;var s=`return function (obj, func, destructorsRef, args) {
`,o=0,i=[];t===0&&i.push("obj");for(var l=["retType"],f=[a],c=0;c<r;++c)i.push("arg"+c),l.push("argType"+c),f.push(n[c]),s+=`  var arg${c} = argType${c}.readValueFromPointer(args${o?"+"+o:""});
`,o+=n[c].argPackAdvance;var v=t===1?"new func":"func.call";s+=`  var rv = ${v}(${i.join(", ")});
`,a.isVoid||(l.push("emval_returnValue"),f.push(de),s+=`  return emval_returnValue(retType, destructorsRef, rv);
`),s+=`};
`,l.push(s);var p=le(Function,l)(...f),g=`methodCaller<(${n.map(y=>y.name).join(", ")}) => ${a.name}>`;return qt(K(g,p))},Jt=(r,e)=>(r=$.toValue(r),e=$.toValue(e),$.toHandle(r[e])),Xt=r=>{r>9&&(C[r+1]+=1)},Zt=r=>$.toHandle(pe(r)),xt=r=>{var e=$.toValue(r);oe(e),Ar(r)},Kt=(r,e)=>{r=Fr(r,"_emval_take_value");var t=r.readValueFromPointer(e);return $.toHandle(t)},Qt=()=>1073741824,Yt=r=>{var e=er.buffer,t=(r-e.byteLength+65535)/65536;try{return er.grow(t),Hr(),1}catch{}},rn=r=>{var e=m.length;r>>>=0;var t=Qt();if(r>t)return!1;for(var n=(l,f)=>l+(f-l%f)%f,a=1;a<=4;a*=2){var s=e*(1+.2/a);s=Math.min(s,r+100663296);var o=Math.min(t,n(Math.max(r,s),65536)),i=Yt(o);if(i)return!0}return!1};He(),V=u.BindingError=class extends Error{constructor(e){super(e),this.name="BindingError"}},xr=u.InternalError=class extends Error{constructor(e){super(e),this.name="InternalError"}},Ke(),Je(),st(),ae=u.UnboundTypeError=ct(Error,"UnboundTypeError"),mt();var en={n:Ie,t:je,s:Ve,x:Me,r:vt,q:pt,k:gt,w:$t,m:wt,c:Tt,a:Ct,l:Wt,f:Vt,y:Ht,v:Bt,h:Mt,o:zt,b:Ar,p:Nt,i:Jt,g:Xt,j:Zt,d:xt,e:Kt,u:rn},A=De(),he=r=>(he=A.B)(r),Sr=r=>(Sr=A.D)(r),R=r=>(R=A.E)(r),ge=r=>(ge=A.F)(r);u.addOnPostRun=zr;var vr;G=function r(){vr||ye(),vr||(G=r)};function ye(){if(k>0||(we(),k>0))return;function r(){vr||(vr=!0,u.calledRun=!0,!Ir&&(Pe(),Y(u),u.onRuntimeInitialized&&u.onRuntimeInitialized(),Te()))}u.setStatus?(u.setStatus("Running..."),setTimeout(function(){setTimeout(function(){u.setStatus("")},1),r()},1)):r()}if(u.preInit)for(typeof u.preInit=="function"&&(u.preInit=[u.preInit]);u.preInit.length>0;)u.preInit.pop()();return ye(),I=b,I}})();{let U=null,F=null,I=!1;const u=()=>{if(U===null||F===null){setTimeout(u,1);return}if(I)return;I=!0;const E=F,b=U.sort(F).slice();self.postMessage({sortedIndices:b},[b.buffer]),setTimeout(()=>{I=!1,F!==null&&(E.every((pr,B)=>pr===F[B])||u())},0)},Y=nn();self.onmessage=async E=>{const b=E.data;"setBuffer"in b?U=new(await Y).Sorter(b.setBuffer,b.setGroupIndices):"setTz_camera_groups"in b?(F=b.setTz_camera_groups,u()):"close"in b&&self.close()}}var an=Object.freeze({__proto__:null});