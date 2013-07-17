montageDefine("089b576","core/application",{dependencies:["core/core","core/target","window-loader/montage-window","core/dom","core/template"],factory:function(e,n){var t,s=(e("core/core").Montage,e("core/target").Target),a=e("window-loader/montage-window").MontageWindow;e("core/dom"),n.Application=s.specialize({eventManager:{value:null},parentApplication:{value:null},mainApplication:{get:function(){for(var e=this;e.parentApplication;)e=e.parentApplication;return e}},_windowsSortOrder:{value:"reverse-z-order"},windowsSortOrder:{get:function(){return null==this.parentApplication?this._windowsSortOrder:this.mainApplication.windowsSortOrder},set:function(e){null==this.parentApplication?-1!==["z-order","reverse-z-order","z-order","reverse-open-order"].indexOf(e)&&(this._windowsSortOrder=e):this.mainApplication.windowsSortOrder=e}},windows:{get:function(){var e;if(null==this.parentApplication){if(!this._windows){var e=new a;e.application=this,e.window=window,this.window=e,this._windows=[this.window],this._multipleWindow=!0}return this._windows}return this.mainApplication.windows}},_window:{value:null},window:{get:function(){if(!this._window&&this==this.mainApplication){var e=new a;e.application=this,e.window=window,this._window=e}return this._window},set:function(e){this._window||(this._window=e)}},attachedWindows:{value:[]},eventManagerForWindow:{value:function(e){return e.defaultEventMananger}},focusWindow:{get:function(){var e=this.windows,n=this.windowsSortOrder;if("z-order"==n)return e[0];if("reverse-z-order"==n)return e[e.length-1];for(var t in e)if(e[t].focused)return e[t]}},delegate:{value:null},nextTarget:{get:function(){return this.delegate}},openWindow:{value:function(e,n,t){var s,r,o=this,i=new a,l={location:!1,menubar:!1,resizable:!0,scrollbars:!0,status:!1,titlebar:!0,toolbar:!1},p={module:e,name:n,parent:window,callback:function(e,n){var t;s=e.document.application,i.window=e,i.application=s,i.component=n,s.window=i,o.attachedWindows.push(i),t=o.mainApplication.windowsSortOrder,"z-order"==t||"reverse-open-order"==t?o.windows.unshift(i):o.windows.push(i),r=document.createEvent("CustomEvent"),r.initCustomEvent("load",!0,!0,null),i.dispatchEvent(r)}};if(this!==this.mainApplication||this._multipleWindow||this.window,"object"==typeof t){var c,u,h="",d="";for(c in t)t.hasOwnProperty(c)&&(l[c]=t[c])}var m=["name"];for(c in l)-1==m.indexOf(c)&&(u=l[c],"boolean"==typeof u?u=u?"yes":"no":(u+="",u.match(/[ ,"]/)&&(u='"'+u.replace(/"/g,'\\"')+'"')),d+=h+c+"="+u,h=",");return window.require.loadPackage({name:"montage"}).then(function(e){var n=window.open(e.location+"window-loader/index.html","_blank",d);n.loadInfo=p}).done(),i}},attachWindow:{value:function(e){var n,t=e.application.parentApplication;return t!==this&&(t&&t.detachWindow(e),e.parentApplication=this,this.attachedWindows.push(e),n=this.mainApplication.windowsSortOrder,"z-order"==n||"reverse-open-order"==n?this.windows.unshift(e):this.windows.push(e),e.focus()),e}},detachWindow:{value:function(e){var n,t,s=this.windows;return void 0===e&&(e=this.window),t=e.application.parentApplication,t==this?(n=this.attachedWindows.indexOf(e),-1!==n&&this.attachedWindows.splice(n,1),n=s.indexOf(e),-1!==n&&s.splice(n,1),e.application.parentApplication=null):t&&t.detachWindow(e),e}},constructor:{value:function(){window.loadInfo&&!this.parentApplication&&(this.parentApplication=window.loadInfo.parent.document.application)}},_load:{value:function(t,s){var a,r=this;n.application=r,e.async("ui/component").then(function(n){return a=n.__root__,a.element=document,e("core/template").instantiateDocument(window.document,t).then(function(){r.callDelegateMethod("willFinishLoading",r),a.needsDraw=!0,s&&s(r)})}).done()}},_alertPopup:{value:null,enumerable:!1},_confirmPopup:{value:null,enumerable:!1},_notifyPopup:{value:null,enumerable:!1},_zIndex:{value:null},_isSystemPopup:{value:function(e){return"alert"===e||"confirm"===e||"notify"===e}},_createPopupSlot:{value:function(e){var n=document.createElement("div");document.body.appendChild(n),n.style.zIndex=e,n.style.position="absolute";var s=new t;return s.element=n,s.attachToParentComponent(),s}},getPopupSlot:{value:function(n,s,a){var r=this;e.async("ui/slot.reel/slot").then(function(e){t=t||e.Slot,n=n||"custom";var o,i,l=r._isSystemPopup(n);if(r.popupSlots=r.popupSlots||{},l)switch(n){case"alert":o=9004;break;case"confirm":o=9003;break;case"notify":o=9002}else r._zIndex=r._zIndex?r._zIndex+1:7e3,o=r._zIndex;i=r.popupSlots[n],i||(i=r.popupSlots[n]=r._createPopupSlot(o)),l||(i.element.style.zIndex=o),i.content=s,a.call(this,i)}).done()}},returnPopupSlot:{value:function(e){var n=this;if(n.popupSlots&&n.popupSlots[e]){var t=n.popupSlots[e];t.content=null}}},_getActivePopupSlots:{value:function(){var e=[];if(this.popupSlots){var n=Object.keys(this.popupSlots);if(n&&n.length>0){var t,s=0,a=n.length;for(s=0;a>s;s++)t=this.popupSlots[n[s]],t&&null!==t.content&&e.push(t)}}return e}}})}});