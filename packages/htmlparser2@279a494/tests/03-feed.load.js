montageDefine("279a494","tests/03-feed",{dependencies:["./test-helper.js","../lib/FeedHandler.js","fs"],factory:function(e,t){var n=e("./test-helper.js"),a=e("../lib/FeedHandler.js"),s=e("fs"),r={xmlMode:!0};t.dir="Feeds",t.test=function(e,t){var i=new a(function(e,n){e?t(e,0):t(null,n)}),o=""+s.readFileSync(__dirname+"/Documents/"+e.file);n.writeToParser(i,r,o)}}});