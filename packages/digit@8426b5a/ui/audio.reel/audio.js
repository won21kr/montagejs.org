var Montage=require("montage/core/core").Montage,Component=require("montage/ui/component").Component;exports.Audio=Montage.create(Component,{enterDocument:{value:function(e){if(e){var t=!1,n=this._element,a=n.getElementsByTagName("audio")[0];n.addEventListener("click",function(){t?(a.pause(),n.classList.remove("digit-Audio--isPlaying"),t=!1):(a.play(),n.classList.add("digit-Audio--isPlaying"),t=!0)},!0)}}}});