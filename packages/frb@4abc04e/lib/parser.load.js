montageDefine("4abc04e","lib/parser",{dependencies:[],factory:function(e,t){function n(e){return function(t){var n,r=0,a=1,o=e.apply(this,[function(e){return n=e,i()}].concat(Array.prototype.slice.call(arguments,1)));try{for(var s=0;t.length>s;s++)o=o(t[s],{index:s,line:a,column:r}),"\n"===t[s]?(a++,r=0):r++;o=o("",{index:s,line:a,column:r})}catch(l){if(l.loc){var u=l.loc;l.message+=t.length>80?" at line "+u.line+", column "+u.column:" in "+JSON.stringify(t)+" at index "+u.index}throw l}return n}}function i(){return function(e,t){if(""!==e){var n=Error("Unexpected "+JSON.stringify(e));throw n.loc=t,n}return function i(){return i}}}function r(e){return function(t){return function(n,i){return n===e?t(n,i):t(null,i)(n,i)}}}t.makeParser=n,t.expectEof=i,t.makeExpect=r}});