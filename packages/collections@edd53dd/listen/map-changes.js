"use strict";function MapChanges(){throw Error("Can't construct. MapChanges is a mixin.")}var WeakMap=require("../weak-map"),List=require("../list");module.exports=MapChanges;var object_owns=Object.prototype.hasOwnProperty,mapChangeDescriptors=new WeakMap;MapChanges.prototype.getAllMapChangeDescriptors=function(){var e=require("../dict");return mapChangeDescriptors.has(this)||mapChangeDescriptors.set(this,e()),mapChangeDescriptors.get(this)},MapChanges.prototype.getMapChangeDescriptor=function(e){var t=this.getAllMapChangeDescriptors();return e=e||"",t.has(e)||t.set(e,{willChangeListeners:new List,changeListeners:new List}),t.get(e)},MapChanges.prototype.addMapChangeListener=function(e,t,n){!this.isObservable&&this.makeObservable&&this.makeObservable();var a,s=this.getMapChangeDescriptor(t);a=n?s.willChangeListeners:s.changeListeners,a.push(e),this.dispatchesMapChanges=!0;var i=this;return function(){i&&(i.removeMapChangeListener(e,t,n),i=null)}},MapChanges.prototype.removeMapChangeListener=function(e,t,n){var a,s=this.getMapChangeDescriptor(t);a=n?s.willChangeListeners:s.changeListeners;var i=a.findLast(e);if(!i)throw Error("Can't remove listener: does not exist.");i["delete"]()},MapChanges.prototype.dispatchMapChange=function(e,t,n){var a=this.getAllMapChangeDescriptors(),s="Map"+(n?"WillChange":"Change");a.forEach(function(a,i){if(!a.isActive){a.isActive=!0;var r;r=n?a.willChangeListeners:a.changeListeners;var o="handle"+(i.slice(0,1).toUpperCase()+i.slice(1))+s;try{r.forEach(function(n){if(n[o])n[o](t,e,this);else{if(!n.call)throw Error("Handler "+n+" has no method "+o+" and is not callable");n.call(n,t,e,this)}},this)}finally{a.isActive=!1}}},this)},MapChanges.prototype.addBeforeMapChangeListener=function(e,t){return this.addMapChangeListener(e,t,!0)},MapChanges.prototype.removeBeforeMapChangeListener=function(e,t){return this.removeMapChangeListener(e,t,!0)},MapChanges.prototype.dispatchBeforeMapChange=function(e,t){return this.dispatchMapChange(e,t,!0)};