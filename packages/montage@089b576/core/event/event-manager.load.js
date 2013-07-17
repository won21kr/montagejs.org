montageDefine("089b576","core/event/event-manager",{dependencies:["montage","core/uuid","core/event/mutable-event","core/serialization"],factory:function(e,n){var s,a=e("montage").Montage,t=e("core/uuid"),o=e("core/event/mutable-event").MutableEvent,p=e("core/serialization").Serializer,i=e("core/serialization").Deserializer;if("undefined"!=typeof window){window.Touch===void 0&&"ontouchstart"in window&&(window.Touch=function(){},function(){var e;document.addEventListener("touchstart",e=function(n){window.Touch=n.touches[0].constructor,document.nativeRemoveEventListener?document.nativeRemoveEventListener("touchstart",e,!0):document.removeEventListener("touchstart",e,!0),s&&s.isStoringPointerEvents&&(s.isStoringPointerEvents=!1,s.isStoringPointerEvents=!0)},!0)}()),a.specialize({type:{value:null},listener:{value:null},capture:{value:null}}),p.defineSerializationUnit("listeners",function(e,n){var a,t,o,p=s,i=n.uuid,l=[];for(var r in p.registeredEventListeners)if(a=p.registeredEventListeners[r],t=a&&a[i])for(var c in t.listeners)o=t.listeners[c],l.push({type:r,listener:e.addObjectReference(o.listener),capture:o.capture});return l.length>0?l:void 0}),i.defineDeserializationUnit("listeners",function(e,n,s){for(var a,t=0;a=s[t];t++)n.addEventListener(a.type,a.listener,a.capture)});var l=Event.NONE,r=Event.CAPTURING_PHASE,c=Event.AT_TARGET,d=Event.BUBBLING_PHASE,h="function";n.EventManager=a.specialize({eventDefinitions:{value:{abort:{bubbles:!1,cancelable:!1},beforeunload:{bubbles:!1},blur:{bubbles:!1,cancelable:!1},change:{bubbles:!0,cancelable:!1},click:{bubbles:!0,cancelable:!0},close:{bubbles:!1,cancelable:!1},compositionend:{bubbles:!0,cancelable:!1},compositionstart:{bubbles:!0,cancelable:!0},compositionupdate:{bubbles:!0,cancelable:!1},contextmenu:{bubbles:!0,cancelable:!0},copy:{bubbles:!0,cancelable:!0},cut:{bubbles:!0,cancelable:!0},dblclick:{bubbles:!0,cancelable:!1},DOMActivate:{bubbles:!0,cancelable:!0,deprecated:!0},DOMMouseScroll:{bubbles:!0},drag:{bubbles:!0,cancelable:!0},dragend:{bubbles:!0,cancelable:!1},dragenter:{bubbles:!0,cancelable:!0},dragleave:{bubbles:!0,cancelable:!1},dragover:{bubbles:!0,cancelable:!0},dragstart:{bubbles:!0,cancelable:!0},drop:{bubbles:!0,cancelable:!0},error:{bubbles:function(e){return!(XMLHttpRequest.prototype.isPrototypeOf(e)||e.tagName&&"VIDEO"===e.tagName.toUpperCase()||e.tagName&&"AUDIO"===e.tagName.toUpperCase())},cancelable:!1},focus:{bubbles:!1,cancelable:!1},focusin:{bubbles:!0,cancelable:!1},focusout:{bubbles:!0,cancelable:!1},input:{bubbles:!0,cancelable:!1},keydown:{bubbles:!0,cancelable:!1},keypress:{bubbles:!0,cancelable:!1},keyup:{bubbles:!0,cancelable:!1},load:{bubbles:!1,cancelable:!1},loadend:{bubbles:!1,cancelable:!1},loadstart:{bubbles:!1,cancelable:!1},message:{bubbles:!1,cancelable:!1},mousedown:{bubbles:!0,cancelable:!0},mouseenter:{bubbles:!1,cancelable:!1},mouseleave:{bubbles:!1,cancelable:!1},mousemove:{bubbles:!0,cancelable:!0},mouseout:{bubbles:!0,cancelable:!0},mouseover:{bubbles:!0,cancelable:!0},mouseup:{bubbles:!0,cancelable:!0},mousewheel:{bubbles:!0},orientationchange:{bubbles:!1},paste:{bubbles:!0,cancelable:!0},progress:{bubbles:!1,cancelable:!1},reset:{bubbles:!0,cancelable:!1},resize:{bubbles:!1,cancelable:!1},scroll:{bubbles:function(e){return!!e.defaultView},cancelable:!1},select:{bubbles:!0,cancelable:!1},submit:{bubbles:!0,cancelable:!0},touchcancel:{bubbles:!0,cancelable:!1},touchend:{bubbles:!0,cancelable:!0},touchmove:{bubbles:!0,cancelable:!0},touchstart:{bubbles:!0,cancelable:!0},unload:{bubbles:!1,cancelable:!1},wheel:{bubbles:!0,cancelable:!0}}},_DOMPasteboardElement:{value:null,enumerable:!1},_delegate:{value:null,enumerable:!1},delegate:{enumerable:!1,get:function(){return this._delegate},set:function(e){this._delegate=e}},_application:{value:null,enumerable:!1},application:{enumerable:!1,get:function(){return this._application},set:function(e){this._application=e}},_registeredWindows:{value:null,enumerable:!1},_windowsAwaitingFinalRegistration:{value:{},enumerable:!1},initWithWindow:{enumerable:!1,value:function(e){if(this._registeredWindows)throw"EventManager has already been initialized";return this.registerWindow(e),this}},registerWindow:{enumerable:!1,value:function(e){if(e.defaultEventManager&&e.defaultEventManager!==this)throw"EventManager cannot register a window already registered to another EventManager";if(this._registeredWindows&&this._registeredWindows.indexOf(e)>=0)throw"EventManager cannot register a window more than once";if(this._registeredWindows||(this._registeredWindows=[]),e.uuid&&0!==e.uuid.length||(e.uuid=t.generate()),this._windowsAwaitingFinalRegistration[e.uuid]!==e){if(e.Element.prototype.nativeAddEventListener=e.Element.prototype.addEventListener,Object.defineProperty(e,"nativeAddEventListener",{configurable:!0,value:e.addEventListener}),Object.getPrototypeOf(e.document).nativeAddEventListener=e.document.addEventListener,e.XMLHttpRequest.prototype.nativeAddEventListener=e.XMLHttpRequest.prototype.addEventListener,e.Worker&&(e.Worker.prototype.nativeAddEventListener=e.Worker.prototype.addEventListener),e.Element.prototype.nativeRemoveEventListener=e.Element.prototype.removeEventListener,Object.defineProperty(e,"nativeRemoveEventListener",{configurable:!0,value:e.removeEventListener}),Object.getPrototypeOf(e.document).nativeRemoveEventListener=e.document.removeEventListener,e.XMLHttpRequest.prototype.nativeRemoveEventListener=e.XMLHttpRequest.prototype.removeEventListener,e.Worker&&(e.Worker.prototype.nativeRemoveEventListener=e.Worker.prototype.removeEventListener),Object.defineProperty(e,"addEventListener",{configurable:!0,value:e.XMLHttpRequest.prototype.addEventListener=e.Element.prototype.addEventListener=Object.getPrototypeOf(e.document).addEventListener=function(n,s,a){return e.defaultEventManager.registerEventListener(this,n,s,!!a)}}),e.Worker&&(e.Worker.prototype.addEventListener=e.addEventListener),Object.defineProperty(e,"removeEventListener",{configurable:!0,value:e.XMLHttpRequest.prototype.removeEventListener=e.Element.prototype.removeEventListener=Object.getPrototypeOf(e.document).removeEventListener=function(n,s,a){return e.defaultEventManager.unregisterEventListener(this,n,s,!!a)}}),e.Worker&&(e.Worker.prototype.removeEventListener=e.removeEventListener),e.HTMLDivElement.prototype.addEventListener!==e.Element.prototype.nativeAddEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype&&e.Components&&e.Components.interfaces){var o,p;for(o in Components.interfaces)o.match(/^nsIDOMHTML\w*Element$/)&&(o=o.replace(/^nsIDOM/,""),(o=window[o])&&(p=o.prototype,p.nativeAddEventListener=p.addEventListener,p.addEventListener=e.Element.prototype.addEventListener,p.nativeRemoveEventListener=p.removeEventListener,p.removeEventListener=e.Element.prototype.removeEventListener))}a.defineProperty(e.Element.prototype,"eventHandlerUUID",{value:void 0,enumerable:!1}),a.defineProperty(e.Element.prototype,"component",{get:function(){return s._elementEventHandlerByUUID[this.eventHandlerUUID]},enumerable:!1}),s=e.defaultEventManager=n.defaultEventManager=this,this._registeredWindows.push(e),this._windowsAwaitingFinalRegistration[e.uuid]=e,/loaded|complete|interactive/.test(e.document.readyState)?this._finalizeWindowRegistration(e):e.document.addEventListener("DOMContentLoaded",this,!0)}}},_finalizeWindowRegistration:{enumerable:!1,value:function(e){if(this._windowsAwaitingFinalRegistration[e.uuid]!==e)throw"EventManager wasn't expecting to register this window";delete this._windowsAwaitingFinalRegistration[e.uuid],this._listenToWindow(e)}},unregisterWindow:{enumerable:!1,value:function(e){if(0>this._registeredWindows.indexOf(e))throw"EventManager cannot unregister an unregistered window";if(this._registeredWindows=this._registeredWindows.filter(function(n){return e!==n}),delete e.defaultEventManager,e.Element.prototype.addEventListener=e.Element.prototype.nativeAddEventListener,Object.defineProperty(e,"addEventListener",{configurable:!0,value:e.nativeAddEventListener}),Object.getPrototypeOf(e.document).addEventListener=e.document.nativeAddEventListener,e.XMLHttpRequest.prototype.addEventListener=e.XMLHttpRequest.prototype.nativeAddEventListener,e.Worker&&(e.Worker.prototype.addEventListener=e.Worker.prototype.nativeAddEventListener),e.Element.prototype.removeEventListener=e.Element.prototype.nativeRemoveEventListener,Object.defineProperty(e,"removeEventListener",{configurable:!0,value:e.nativeRemoveEventListener}),Object.getPrototypeOf(e.document).removeEventListener=e.document.nativeRemoveEventListener,e.XMLHttpRequest.prototype.removeEventListener=e.XMLHttpRequest.prototype.nativeRemoveEventListener,e.Worker&&(e.Worker.prototype.removeEventListener=e.Worker.prototype.nativeRemoveEventListener),e.HTMLDivElement.prototype.nativeAddEventListener!==e.Element.prototype.addEventListener&&e.HTMLElement&&"addEventListener"in e.HTMLElement.prototype&&e.Components&&e.Components.interfaces){var n,s;for(n in Components.interfaces)n.match(/^nsIDOMHTML\w*Element$/)&&(n=n.replace(/^nsIDOM/,""),(n=window[n])&&(s=n.prototype,s.addEventListener=s.nativeAddEventListener,delete s.nativeAddEventListener,s.removeEventListener=s.nativeRemoveEventListener,delete s.nativeRemoveEventListener))}delete e.Element.prototype.nativeAddEventListener,delete e.nativeAddEventListener,delete Object.getPrototypeOf(e.document).nativeAddEventListener,delete e.XMLHttpRequest.prototype.nativeAddEventListener,e.Worker&&delete e.Worker.prototype.nativeAddEventListener,delete e.Element.prototype.nativeRemoveEventListener,delete e.nativeRemoveEventListener,delete Object.getPrototypeOf(e.document).nativeRemoveEventListener,delete e.XMLHttpRequest.prototype.nativeRemoveEventListener,e.Worker&&delete e.Worker.prototype.nativeRemoveEventListener,delete e.Element.prototype.eventHandlerUUID,delete e.Element.prototype.component,this._stopListeningToWindow(e)}},unregisterWindows:{enumerable:!1,value:function(){this._registeredWindows.forEach(this.unregisterWindow)}},registeredEventListeners:{enumerable:!1,value:{}},registeredEventListenersForEventType_:{value:function(e){var n,s,a,t,o=this.registeredEventListeners[e];if(!o)return null;t={};for(n in o){s=o[n].listeners;for(a in s)t[a]=s[a]}return t}},registeredEventListenersForEventType_onTarget_:{enumerable:!1,value:function(e,n,s){var a,t;return a=n===s?s.eventManager.registeredEventListeners[e]:this.registeredEventListeners[e],a?(t=a[n.uuid],t?t.listeners:null):null}},registeredEventListenersOnTarget_:{value:function(e){var n,s,a=[];for(n in this.registeredEventListeners)s=this.registeredEventListeners[n],e.uuid in s&&a.push(s);return a}},registerEventListener:{enumerable:!1,value:function(e,n,s,a){var t,o,p,i=this.registeredEventListeners[n],l=!1,r=!1;if(e.uuid===void 0)throw Error("EventManager cannot observe a target without a uuid: "+(e.outerHTML||e));return i?((t=i[e.uuid])||(t=i[e.uuid]={target:e,listeners:{}},l=!0),o=t.listeners[s.uuid],p=a?"capture":"bubble",o?(o[p]=!0,r=!0):(o={listener:s,capture:a,bubble:!a},t.listeners[s.uuid]=o,r=!0)):(i=this.registeredEventListeners[n]={},i[e.uuid]={target:e,listeners:{}},i[e.uuid].listeners[s.uuid]={listener:s,capture:a,bubble:!a},l=!0,r=!0),l&&"function"==typeof e.nativeAddEventListener&&this._observeTarget_forEventType_(e,n),r}},unregisterEventListener:{enumerable:!1,value:function(e,n,s,a){var t,o,p,i,l,r=this.registeredEventListeners[n];if(r&&(t=r[e.uuid])){if(o=t.listeners[s.uuid],!o){for(i in t.listeners)if(l=t.listeners[i].listener,l.originalListener&&l.originalListener.uuid===s.uuid){o=t.listeners[i],s=l;break}if(!o)return}p=a?"capture":"bubble",o[p]=!1,o.bubble||o.capture||(delete t.listeners[s.uuid],0===Object.keys(t.listeners).length&&(delete r[e.uuid],0===Object.keys(r).length&&(delete this.registeredEventListeners[n],this._stopObservingTarget_forEventType_(e,n))))}}},actualDOMTargetForEventTypeOnTarget:{value:function(e,n){if(n.nativeAddEventListener){if(n.defaultView)return n;var s,a=this.eventDefinitions[e];return a?(s=typeof a.bubbles===h?a.bubbles(n):a.bubbles,s?n.screen?n.document:n.ownerDocument:n):n}return null}},_observedTarget_byEventType_:{value:{}},_observeTarget_forEventType_:{enumerable:!1,value:function(e,n){var s;!(s=this.actualDOMTargetForEventTypeOnTarget(n,e))||this._observedTarget_byEventType_[n]&&this._observedTarget_byEventType_[n][s.uuid]||(this._observedTarget_byEventType_[n]||(this._observedTarget_byEventType_[n]={}),this._observedTarget_byEventType_[n][s.uuid]=this,s.nativeAddEventListener(n,this,!0))}},_stopObservingTarget_forEventType_:{enumerable:!1,value:function(e,n){var s;s=this.actualDOMTargetForEventTypeOnTarget(n,e),s&&(delete this._observedTarget_byEventType_[n][s.uuid],s.nativeRemoveEventListener(n,this,!0))}},_activationHandler:{enumerable:!0,value:null},_listenToWindow:{enumerable:!1,value:function(e){if(!this._activationHandler){var n=this;this._activationHandler=function(e){var s,a=e.type;if("focus"===a||"mousedown"===a||"touchstart"===a)if(e.changedTouches){s=e.changedTouches.length;for(var t=0;s>t;t++)n._prepareComponentsForActivation(e.changedTouches[t].target)}else n._prepareComponentsForActivation(e.target)}}if(e.Touch?e.document.nativeAddEventListener("touchstart",this._activationHandler,!0):e.document.nativeAddEventListener("mousedown",this._activationHandler,!0),e.document.nativeAddEventListener("focus",this._activationHandler,!0),this.application){var s,a=this.registeredEventListenersOnTarget_(this.application);for(s in a)this._observeTarget_forEventType_(e,s)}}},_stopListeningToWindow:{enumerable:!1,value:function(e){var n,s=this.registeredEventListenersOnTarget_(this.application),a=this.registeredEventListenersOnTarget_(e);for(n in s)this._stopObservingTarget_forEventType_(e,n);for(n in a)this._stopObservingTarget_forEventType_(e,n)}},reset:{enumerable:!1,value:function(){var e,n,s,a;for(e in this.registeredEventListeners){n=this.registeredEventListeners[e];for(s in n.targets)a=n.targets[s],this._stopObservingTarget_forEventType_(a.target,e)}this.registeredEventListeners={},this._claimedPointers={}}},unload:{enumerable:!1,value:function(){this._stopListening()}},methodNameForBubblePhaseOfEventType:{enumerable:!1,value:function(e){return function(n,s){var a=s?n+"+"+s:n;return e[a]||(e[a]="handle"+(s?s.toCapitalized():"")+n.toCapitalized())}}({})},_methodNameForCapturePhaseByEventType_:{value:{}},methodNameForCapturePhaseOfEventType:{enumerable:!1,value:function(e){return function(n,s){var a=s?n+"+"+s:n;return e[a]||(e[a]="capture"+(s?s.toCapitalized():"")+n.toCapitalized())}}({})},_claimedPointers:{enumerable:!1,distinct:!0,value:{}},componentClaimingPointer:{value:function(e){return this._claimedPointers[e]}},isPointerClaimedByComponent:{value:function(e,n){if(!n)throw"Must specify a valid component to see if it claims the specified pointer, '"+n+"' is not valid.";return this._claimedPointers[e]===n}},claimPointer:{value:function(e,n){if(!e&&0!==e)throw"Must specify a valid pointer to claim, '"+e+"' is not valid.";if(!n)throw"Must specify a valid component to claim a pointer, '"+n+"' is not valid.";var s=this._claimedPointers[e];return s===n?!0:s?s.surrenderPointer(e,n)?(this._claimedPointers[e]=n,!0):!1:(this._claimedPointers[e]=n,!0)}},forfeitPointer:{value:function(e,n){if(n!==this._claimedPointers[e])throw"Not allowed to forfeit pointer '"+e+"' claimed by another component";delete this._claimedPointers[e]}},forfeitAllPointers:{value:function(e){var n,s;for(n in this._claimedPointers)s=this._claimedPointers[n],e===s&&delete this._claimedPointers[n]}},_isStoringPointerEvents:{enumerable:!1,value:!1},isStoringPointerEvents:{enumerable:!0,get:function(){return this._isStoringPointerEvents},set:function(e){e===!0?this._isStoringPointerEvents||(this._isStoringPointerEvents=!0,window.Touch&&Object.defineProperty(Touch.prototype,"velocity",{get:function(){return s.pointerMotion(this.identifier).velocity},set:function(){}})):(this._isStoringPointerEvents=!1,this._pointerStorage.memory={},this._isMouseDragging=!1)}},_isStoringMouseEventsWhileDraggingOnly:{enumerable:!1,value:!0},isStoringMouseEventsWhileDraggingOnly:{enumerable:!0,get:function(){return this._isStoringMouseEventsWhileDraggingOnly},set:function(e){this._isStoringMouseEventsWhileDraggingOnly=e===!0?!0:!1}},_isMouseDragging:{enumerable:!1,value:!1},_pointerStorage:{enumerable:!1,value:{memory:{},add:function(e,n){this.memory[e]||(this.memory[e]={data:Array(32),size:0,pos:0}),this.memory[e].data[this.memory[e].pos]=n,this.memory[e].size<this.memory[e].data.length&&this.memory[e].size++,this.memory[e].pos=(this.memory[e].pos+1)%this.memory[e].data.length},remove:function(e){delete this.memory[e]},clear:function(e){this.memory[e]&&(this.memory[e].size=0)},getMemory:function(e){return this.memory[e]},isStored:function(e){return this.memory[e]&&this.memory[e].size>0},storeEvent:function(e){var n;switch(e.type){case"mousedown":s._isMouseDragging=!0;case"mousemove":s._isStoringMouseEventsWhileDraggingOnly?s._isMouseDragging&&(this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return s.pointerMotion("mouse").velocity},set:function(){}})):(this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return s.pointerMotion("mouse").velocity},set:function(){}}));break;case"mouseup":this.add("mouse",{clientX:e.clientX,clientY:e.clientY,timeStamp:e.timeStamp}),Object.defineProperty(e,"velocity",{get:function(){return s.pointerMotion("mouse").velocity},set:function(){}});break;case"touchstart":case"touchmove":for(n=0;e.touches.length>n;n++)this.add(e.touches[n].identifier,{clientX:e.touches[n].clientX,clientY:e.touches[n].clientY,timeStamp:e.timeStamp});break;case"touchend":for(n=0;e.changedTouches.length>n;n++)this.add(e.changedTouches[n].identifier,{clientX:e.changedTouches[n].clientX,clientY:e.changedTouches[n].clientY,timeStamp:e.timeStamp})}},removeEvent:function(e){var n;switch(e.type){case"mouseup":s._isMouseDragging=!1,s._isStoringMouseEventsWhileDraggingOnly&&this.clear("mouse");break;case"touchend":for(n=0;e.changedTouches.length>n;n++)this.remove(e.changedTouches[n].identifier)}}}},_getPointerVelocityData:{enumerable:!1,value:function(e){var n,a,t,o,p,i,l,r,c,d=0,h=!0,u={x:[],y:[],time:[]};for(n=s._pointerStorage.getMemory(e),a=n.data.length,t=n.data[(n.pos-1+a)%a],o=p=i=t.timeStamp,l=t.clientX,r=t.clientY;h&&p>o-350&&n.size>d;)t=n.data[(n.pos-d-1+a)%a],p=t.timeStamp,c=l*l+r*r,c>2&&50>=i-p?(u.x.push(t.clientX),u.y.push(t.clientY),u.time.push(p),i=p,l=t.clientX,r=t.clientY,d++):h=!1;return u}},_fitPointerCurve:{enumerable:!1,value:function(e,n){var s,a,t,o,p,i,l,r,c,d,h,u,m,g,f,v,b,y,w,x,_,T,k,j,E,M,B,C,P,S,A,D,I,N,O,q,z,L,F=1e-4,H=n.length;do{for(h=0,u=0,m=0,g=0,f=0,v=0,y=0,w=0,x=0,_=0,T=0,k=0,E=0,M=0,B=0,C=0,P=0,S=0,D=0,I=0,N=0,O=0,q=0,z=0,d=0;H>d;d++)p=n[d],i=p.t,r=i*i,c=r*i,l=p.v,b=F*(6*(r-i)-c+2),j=6*F*(c-2*r+i),A=6*F*(r-c),L=2*F*c,v+=b*b,k+=j*j,S+=A*A,z+=L*L,h+=l*b,y+=l*j,E+=l*A,D+=l*L,m-=b,x-=j,B-=A,N-=L,u-=b*i,w-=j*i,M-=A*i,I-=L*i,g-=b*r,_-=j*r,C-=A*r,O-=L*r,f-=b*c,T-=j*c,P-=A*c,q-=L*c;F*=2}while(0===v||0===k||0===S||0===z);for(i=F/v,h*=i,u*=3*i,m*=i,g*=3*i,f*=i,i=F/k,y*=i,w*=3*i,x*=i,_*=3*i,T*=i,i=F/S,E*=i,M*=3*i,B*=i,C*=3*i,P*=i,i=F/z,D*=i,I*=3*i,N*=i,O*=3*i,q*=i,v=e[0],k=e[1],S=e[2],z=e[3],s=3*(k-S)+z-v,a=v+S-2*k,t=k-v,o=v,d=0;20>d;d++)i=h+o*m+t*u+a*g+s*f,v+=i,o+=i,s-=i,a+=i,t-=i,i=y+o*x+t*w+a*_+s*T,k+=i,s+=3*i,a-=i+i,t+=i,i=E+o*B+t*M+a*C+s*P,S+=i,s-=3*i,a+=i,i=D+o*N+t*I+a*O+s*q,z+=i,s+=i;e[0]=v,e[1]=k,e[2]=S,e[3]=z}},_pointerBezierValue:{enumerable:!1,value:function(e,n){var s=1-e;return s*s*s*n[0]+3*s*s*e*n[1]+3*s*e*e*n[2]+e*e*e*n[3]}},_calculatePointerVelocity:{enumerable:!1,value:function(e,n){var s,a,t=e.length,o=e[0],p=e[0],i=0;for(a=1;t>a;a++)o>e[a]&&(o=e[a],i=a);if(s=p-o){if(t>5){var l,r,c,d=[];for(a=0;t>a;a++)d[a]={v:n[a],t:(e[a]-o)/s};return l=d[i].v,r=d[0].v,c=[l,(2*l+r)/3,(l+2*r)/3,r],this._fitPointerCurve(c,d),5e3*(this._pointerBezierValue(.8,c)-this._pointerBezierValue(.6,c))/s}return t>1?1e3*(n[0]-n[i])/s:0}return 0}},pointerMotion:{value:function(e){if(s._pointerStorage.isStored(e)){var n={};return Object.defineProperties(n,{_data:{enumerable:!1,writable:!0,value:null},_x:{enumerable:!1,writable:!0,value:null},_y:{enumerable:!1,writable:!0,value:null},_speed:{enumerable:!1,writable:!0,value:null},_angle:{enumerable:!1,writable:!0,value:null},x:{get:function(){return null===this._x&&(null===this._data&&(this._data=s._getPointerVelocityData(e)),this._x=s._calculatePointerVelocity(this._data.time,this._data.x)),this._x},set:function(){}},y:{get:function(){return null===this._y&&(null===this._data&&(this._data=s._getPointerVelocityData(e)),this._y=s._calculatePointerVelocity(this._data.time,this._data.y)),this._y},set:function(){}},speed:{get:function(){return null===this._speed&&(this._speed=Math.sqrt(this.x*this.x+this.y*this.y)),this._speed},set:function(){}},angle:{get:function(){return null===this._angle&&(this._angle=Math.atan2(this.y,this.x)),this._angle},set:function(){}}}),{velocity:n}}return void 0}},monitorDOMModificationInEventHandling:{value:!1},domModificationEventHandler:{value:a.specialize({handleEvent:{value:function(){throw"DOM Modified"}},captureDOMSubtreeModified:{value:function(){throw"DOMSubtreeModified"}},captureDOMAttrModified:{value:function(){throw"DOMAttrModified"}},captureDOMCharacterDataModified:{value:function(){throw"DOMCharacterDataModified"}}})},handleEvent:{enumerable:!1,value:function(e){this.monitorDOMModificationInEventHandling&&(document.body.addEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.addEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0));var n,s,a,t,p,i,u,m,g,f,v,b,y,w,x=e.type,_=e.bubbles;for("DOMContentLoaded"===x&&(n=e.target.defaultView,n&&this._windowsAwaitingFinalRegistration[n.uuid]&&(this._finalizeWindowRegistration(n),e.target.removeEventListener("DOMContentLoaded",this,!0))),w="boolean"!=typeof e.propagationStopped?o.fromEvent(e):e,g=Element.isElement(w.target)||w.target instanceof Document||w.target instanceof Window?this._eventPathForDomTarget(w.target):this._eventPathForTarget(w.target),b=w.target.identifier?this.methodNameForCapturePhaseOfEventType(x,w.target.identifier):null,y=w.target.identifier?this.methodNameForBubblePhaseOfEventType(x,w.target.identifier):null,f=this.methodNameForCapturePhaseOfEventType(x),v=this.methodNameForBubblePhaseOfEventType(x),this.delegate&&typeof this.delegate.willDistributeEvent===h&&this.delegate.willDistributeEvent(w),this._isStoringPointerEvents&&this._pointerStorage.storeEvent(w),w.eventPhase=r,s=g.length-1;!w.propagationStopped&&(a=g[s]);s--)if(w.currentTarget=a,t=this.registeredEventListenersForEventType_onTarget_(x,a))for(u=Object.keys(t),p=0;t&&!w.immediatePropagationStopped&&(i=t[u[p]]);p++)i.capture&&(m=i.listener,b&&typeof m[b]===h?m[b](w):typeof m[f]===h?m[f](w):typeof m.handleEvent===h?m.handleEvent(w):typeof m!==h||m.__isConstructor__||m.call(a,w));if(!w.propagationStopped&&(w.eventPhase=c,w.currentTarget=a=w.target,t=this.registeredEventListenersForEventType_onTarget_(x,a)))for(u=Object.keys(t),p=0;t&&!w.immediatePropagationStopped&&(i=t[u[p]]);p++)m=i.listener,i.capture&&(b&&typeof m[b]===h?m[b](w):typeof m[f]===h?m[f](w):typeof m.handleEvent===h?m.handleEvent(w):typeof m===h&&m.call(a,w)),i.bubble&&(y&&typeof m[y]===h?m[y](w):typeof m[v]===h?m[v](w):typeof m.handleEvent===h?m.handleEvent(w):typeof m===h&&m.call(a,w));for(w.eventPhase=d,s=0;_&&!w.propagationStopped&&(a=g[s]);s++)if(w.currentTarget=a,t=this.registeredEventListenersForEventType_onTarget_(x,a))for(u=Object.keys(t),p=0;t&&!w.immediatePropagationStopped&&(i=t[u[p]]);p++)i.bubble&&(m=i.listener,y&&typeof m[y]===h?m[y](w):typeof m[v]===h?m[v](w):typeof m.handleEvent===h?m.handleEvent(w):typeof m===h&&m.call(a,w));w.eventPhase=l,w.currentTarget=null,this._isStoringPointerEvents&&this._pointerStorage.removeEvent(e),this.monitorDOMModificationInEventHandling&&(document.body.removeEventListener("DOMSubtreeModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMAttrModified",this.domModificationEventHandler,!0),document.body.removeEventListener("DOMCharacterDataModified",this.domModificationEventHandler,!0))}},_prepareComponentsForActivation:{value:function(e){var n,s,a=e,t=a&&a.defaultView?a.defaultView:window,o=t.document?t.document:document,p=!1,i=null;do switch(a&&(s=this.eventHandlerForElement(a),s&&(p||(p=!0,i=this._findActiveTarget(s)),s._preparedForActivationEvents||(s._prepareForActivationEvents(),s._preparedForActivationEvents=!0))),n=a,a){case t:a=null;break;case o:a=t;break;case o.documentElement:a=o;break;default:a=a.parentNode}while(a&&n!==a);i=i||this.application,i!==this.activeTarget&&(this.activeTarget&&this.activeTarget.willSurrenderActiveTarget(i),i.willBecomeActiveTarget(this.activeTarget),this.activeTarget=i,i.didBecomeActiveTarget())}},_findActiveTarget:{value:function(e){for(var n=null,s={};!n&&e&&!(e.uuid in s);)s[e.uuid]=e,e.acceptsActiveTarget?n=e:e=e.nextTarget;return n}},_eventPathForTarget:{enumerable:!1,value:function(e){if(!e)return[];var n=e,s=this.application,a=[],t={};t[e.uuid]=e;do n.uuid in t||(a.push(n),t[n.uuid]=n),n=n.nextTarget,(!n||n.uuid in t)&&(n=s),n&&n.uuid in t&&(n=null);while(n);return a}},_eventPathForDomTarget:{enumerable:!1,value:function(e){if(!e)return[];var n,s=e,a=s&&s.defaultView?s.defaultView:window,t=a.document?a.document:document,o=this.application,p=[];do switch(s!==e&&p.push(s),n=s,s){case o:s=s.parentApplication,s&&(o=s);break;case a:s=o;break;case t:s=a;break;case t.documentElement:s=t;break;default:s=s.parentNode,s||(s=o)}while(s&&n!==s);return p}},_elementEventHandlerByUUID:{enumerable:!1,value:{}},registerEventHandlerForElement:{enumerable:!1,value:function(e,n){var s=this.eventHandlerForElement(n);s&&this.unregisterEventHandlerForElement(n),this._elementEventHandlerByUUID[n.eventHandlerUUID=e.uuid]=e}},unregisterEventHandlerForElement:{enumerable:!1,value:function(e){delete this._elementEventHandlerByUUID[e.eventHandlerUUID],delete e.eventHandlerUUID}},eventHandlerForElement:{enumerable:!1,value:function(e){return this._elementEventHandlerByUUID[e.eventHandlerUUID]}},_activeTarget:{value:null},activeTarget:{get:function(){return this._activeTarget||this.application},set:function(e){e!==this._activeTarget&&(this._activeTarget=e)}}})}}});