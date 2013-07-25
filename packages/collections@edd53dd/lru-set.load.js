montageDefine("edd53dd","lru-set",{dependencies:["./shim","./set","./generic-collection","./generic-set","./listen/property-changes","./listen/range-changes"],factory:function(e,t,n){"use strict";function a(e,t,n,i,r){return this instanceof a?(t=t||1/0,n=n||Object.equals,i=i||Object.hash,r=r||Function.noop,this.store=new s(void 0,n,i),this.contentEquals=n,this.contentHash=i,this.getDefault=r,this.maxLength=t,this.length=0,this.addEach(e),void 0):new a(e,t,n,i,r)}e("./shim");var s=e("./set"),i=e("./generic-collection"),r=e("./generic-set"),o=e("./listen/property-changes"),l=e("./listen/range-changes");n.exports=a,Object.addEach(a.prototype,i.prototype),Object.addEach(a.prototype,r.prototype),Object.addEach(a.prototype,o.prototype),Object.addEach(a.prototype,l.prototype),a.prototype.constructClone=function(e){return new this.constructor(e,this.maxLength,this.contentEquals,this.contentHash,this.getDefault)},a.prototype.has=function(e){return this.store.has(e)},a.prototype.get=function(e){return e=this.store.get(e),void 0!==e?(this.store["delete"](e),this.store.add(e)):e=this.getDefault(e),e},a.prototype.add=function(e){var t=this.store.has(e),n=this.length;if(t&&(this.store["delete"](e),n--),!t&&this.dispachesRangeChanges&&this.dispatchBeforeRangeChange([e],[],0),this.store.add(e),n++,this.length=n,!t&&this.dispatchesRangeChanges&&this.dispatchRangeChange([e],[],0),this.store.length>this.maxLength){var a=this.store.order.head.next;return this["delete"](a.value),!1}return!t},a.prototype["delete"]=function(e){var t=this.store.has(e);return t&&(this.dispatchesRangeChanges&&this.dispatchBeforeRangeChange([],[e],0),this.store["delete"](e),this.length--,this.dispatchesRangeChanges&&this.dispatcheRangeChange([],[e],0)),t},a.prototype.one=function(){return this.length>0?this.store.one():void 0},a.prototype.clear=function(){this.store.clear(),this.length=0},a.prototype.reduce=function(e,t){var n=arguments[2],a=this.store,s=0;return a.reduce(function(t,a){return e.call(n,t,a,s++,this)},t,this)},a.prototype.reduceRight=function(){var e=arguments[2],t=this.store,n=this.length-1;return t.reduceRight(function(t,a){return callback.call(e,t,a,n--,this)},basis,this)},a.prototype.iterate=function(){return this.store.iterate()}}});