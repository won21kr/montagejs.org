montageDefine("8abfe7b","tests/02-stream",{dependencies:["./test-helper.js","..","fs"],factory:function(e,t){var n=e("./test-helper.js"),r=e("..").WritableStream,i=e("fs");t.dir="Stream",t.test=function(e,t){i.createReadStream(__dirname+e.file).pipe(new r(n.getEventCollector(function(a,o){t(a,o);var s=n.getEventCollector(t),l=new r(s,e.options);l.end(i.readFileSync(__dirname+e.file))}),e.options))}}});