montageDefine("45621ff","ui/select.reel/select",{dependencies:["montage","ui/component","ui/native/select.reel"],factory:function(e,t,n){var r=e("montage").Montage,i=e("ui/component").Component,s=e("ui/native/select.reel").Select;t.Select=r.create(s,{hasTemplate:{value:!0},willPrepareForDraw:{value:function(){s.willPrepareForDraw.call(this),this.element.classList.add("montage-Select")}}})}})