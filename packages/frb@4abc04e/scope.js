function Scope(e,t,n,r,i,a){this.value=e,this.parent=t,this.parameters=n,this.document=r,this.components=i,this.beforeChange=a}module.exports=Scope,Scope.nest=function(e,t){return e=e||new Scope,new Scope(t,e,e.parameters,e.document,e.components,e.beforeChange)};