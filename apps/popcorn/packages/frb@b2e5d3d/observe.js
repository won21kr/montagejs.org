function observe(e,t,n){var i;i="function"==typeof n?{change:n}:n,i=i||empty,i.source=e,i.sourcePath=t;var r=i.parameters=i.parameters||e,a=i.document,o=i.components,s=i.beforeChange,l=i.contentChange,u=new Scope(e,null,r,a,o,s),c=parse(t),h=compile(c);return l===!0&&(h=Observers.makeRangeContentObserver(h)),h(autoCancelPrevious(function(t){if(t){if("function"!=typeof l)return i.change.apply(e,arguments);if("function"==typeof l)return t.addRangeChangeListener(l),Observers.once(function(){t.removeRangeChangeListener(l)})}else;}),u)}var parse=require("./parse"),compile=require("./compile-observer"),Observers=require("./observers"),autoCancelPrevious=Observers.autoCancelPrevious,Scope=require("./scope");module.exports=observe;var empty={};