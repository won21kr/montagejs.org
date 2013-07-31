"use strict";var Montage=require("montage").Montage,Promise=require("core/promise").Promise,Deserializer=require("core/serialization").Deserializer,BinderManager=require("core/meta/binder-manager").BinderManager,BlueprintModule=require("core/meta/blueprint"),logger=require("core/logger").logger("blueprint"),_binderManager=null,Binder=exports.Binder=Montage.specialize({constructor:{value:function Binder(){return this.super(),this._name=null,this.binderModuleId=null,this.isDefault=!1,this._blueprintForPrototypeTable={},this}},initWithNameAndRequire:{value:function(e,t){if(!e)throw Error("name is required");if(!t)throw Error("require is required");return this._name=e,this._require=t,Binder.manager.addBinder(this),this}},serializeSelf:{value:function(e){e.setProperty("name",this.name),this.blueprints.length>0&&e.setProperty("blueprints",this.blueprints),e.setProperty("binderModuleId",this.binderInstanceModuleId)}},deserializeSelf:{value:function(e){this._name=e.getProperty("name");var t=e.getProperty("blueprints");t&&(this._blueprints=t),this.binderInstanceModuleId=e.getProperty("binderModuleId")}},_name:{value:null},name:{get:function(){return this._name}},_require:{value:null},require:{get:function(){return this._require}},_blueprintForPrototypeTable:{distinct:!0,value:{}},identifier:{get:function(){return["binder",this.name.toLowerCase()].join("_")}},binderInstanceModuleId:{serializable:!1,value:null},isDefault:{serializable:!1,value:!1},getBinderWithModuleId:{value:function(e,t){var n=Promise.defer();return t||(t=this.require),t.async(e).then(function(r){try{(new Deserializer).initWithObjectAndRequire(r,t,e).deserializeObject(function(t){t?(t.binderInstanceModuleId=e,Binder.manager.addBinder(this),n.resolve(t)):n.reject(Error("No Binder found "+e))},t)}catch(i){n.reject(Error("Error deserializing Binder "+e+" "+JSON.stringfy(i)))}},n.reject),n.promise}},_blueprints:{distinct:!0,value:[]},blueprints:{get:function(){return this._blueprints}},addBlueprint:{value:function(e){if(null!==e){var t=this.blueprints.indexOf(e);if(0>t){null!==e.binder&&e.binder!==this&&e.binder.removeBlueprint(e),this.blueprints.push(e),e.binder=this;var n=e.moduleId+"."+e.prototypeName;this._blueprintForPrototypeTable[n]=e}}return e}},removeBlueprint:{value:function(e){if(null!==e){var t=this.blueprints.indexOf(e);if(t>=0){this.blueprints.splice(t,1),e.binder=null;var n=e.moduleId+"."+e.prototypeName;delete this._blueprintForPrototypeTable[n]}}return e}},addBlueprintNamed:{value:function(e,t){return this.addBlueprint((new BlueprintModule.Blueprint).initWithNameAndModuleId(e,t))}},blueprintForPrototype:{value:function(e,t){var n=t+"."+e,r=this._blueprintForPrototypeTable[n];if(r===void 0){var i,a;for(a=0;(i=this.blueprints[a])!==void 0;a++)if(i.prototypeName===e&&i.moduleId===t){r=i;break}this._blueprintForPrototypeTable[n]=r}return r}},_blueprintObjectProperty:{value:null},ObjectProperty:{get:function(){return this._blueprintObjectProperty||(this._blueprintObjectProperty=Binder.manager.defaultBlueprintObjectProperty),this._blueprintObjectProperty}},blueprintModuleId:require("montage")._blueprintModuleIdDescriptor,blueprint:require("montage")._blueprintDescriptor},{manager:{get:function(){return null===_binderManager&&(_binderManager=new BinderManager),_binderManager}}});