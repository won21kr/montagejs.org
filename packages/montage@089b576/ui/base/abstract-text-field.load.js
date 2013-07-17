montageDefine("089b576","ui/base/abstract-text-field",{dependencies:["montage","ui/base/abstract-control","composer/key-composer","collections/dict"],factory:function(e,t){var n=(e("montage").Montage,e("ui/base/abstract-control").AbstractControl),a=e("composer/key-composer").KeyComposer;e("collections/dict");var s=t.AbstractTextField=n.specialize({constructor:{value:function s(){if(this.constructor===s)throw Error("AbstractTextField cannot be instantiated.");n.constructor.call(this),this._keyComposer=new a,this._keyComposer.component=this,this._keyComposer.keys="enter",this.addComposer(this._keyComposer),this.defineBindings({"classList.has('montage--disabled')":{"<-":"!enabled"}})}},hasTemplate:{value:!1},acceptsActiveTarget:{value:!0},enabled:{value:!0},_placeholderValue:{value:null},placeholderValue:{set:function(e){this._placeholderValue=e,this.needsDraw=!0},get:function(){return this._placeholderValue}},_value:{value:null},value:{set:function(e){e!==this._value&&(this._value=e,this.needsDraw=!0)},get:function(){return this._value}},_keyComposer:{value:null},handleKeyPress:{value:function(){this.enabled&&this.dispatchActionEvent()}},prepareForActivationEvents:{value:function(){this.addEventListener("keyPress",this,!1),this._keyComposer.addEventListener("keyPress",null,!1)}},enterDocument:{value:function(e){e&&(this.element.addEventListener("input",this,!1),this.element.addEventListener("change",this,!1))}},draw:{value:function(){this.element.value=this.value,null!=this.placeholderValue&&this.element.setAttribute("placeholder",this.placeholderValue)}},handleChange:{value:function(){this._updateValueFromDom()}},handleInput:{value:function(){this._updateValueFromDom()}},_updateValueFromDom:{value:function(){this._value!==this.element.value&&(this._value=this.element.value,this.dispatchOwnPropertyChange("value",this._value))}}})}});