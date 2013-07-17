montageDefine("089b576","core/url",{dependencies:[],factory:function(n,e){(function(s){"undefined"!=typeof bootstrap?bootstrap("core/url",s):s(n,e)})(function(n,e){var s=["url","scheme","authorityRoot","authority","userInfo","user","password","domain","port","path","root","directory","file","search","query","hash"],a=RegExp("^(?:([^:/?#]+):)?(?:(//)((?:(([^:@]*):?([^@]*))?@)?([^:/?#]*)(?::(\\d*))?))?((/?)((?:[^?#/]*/)*)([^?#]*))(\\?([^#]*))?(?:#(.*))?$");e.parse=function(n){n+="";var e,t={},o=a.exec(n);for(e=0;o.length>e;e++)t[s[e]]=o[e]?o[e]:"";t.root=t.root||t.authorityRoot?"/":"",t.directories=t.directory.split("/"),""==t.directories[t.directories.length-1]&&t.directories.pop();var p=[];for(e=0;t.directories.length>e;e++){var l=t.directories[e];"."==l||(".."==l?p.length&&".."!=p[p.length-1]?p.pop():p.push(".."):p.push(l))}return t.directories=p,t.domains=t.domain.split("."),t},e.format=function(n){if(n===void 0)throw Error("UrlError: URL undefined for urls#format");if(n instanceof String||"string"==typeof n)return n;var e=n.domains?n.domains.join("."):n.domain,s=n.user||n.password?(n.user||"")+(n.password?":"+n.password:""):n.userInfo,a=s||e||n.port?(s?s+"@":"")+(e||"")+(n.port?":"+n.port:""):n.authority,t=n.directories?n.directories.join("/"):n.directory,o=t||n.file?(t?t+"/":"")+(n.file||""):n.path,p=n.query?"?"+n.query:n.search||"";return(n.scheme?n.scheme+":":"")+(a?"//"+a:"")+(n.root||a&&o?"/":"")+(o?o:"")+p+(n.hash?"#"+n.hash:"")||n.url||""},e.resolveObject=function(n,s){if(!n)return s;if(n=e.parse(n),s=e.parse(s),""==s.url)return n;if(delete n.url,delete n.authority,delete n.domain,delete n.userInfo,delete n.path,delete n.directory,delete n.search,delete n.query,delete n.hash,s.authorityRoot)s.scheme||(s.scheme=n.scheme),n=s;else if(s.scheme&&s.scheme!=n.scheme||s.authority&&s.authority!=n.authority)n=s;else if(s.root)n.directories=s.directories;else{var a=n.directories.concat(s.directories);n.directories=[];for(var t=0;a.length>t;t++){var o=a[t];""==o||"."==o||(".."==o?n.directories.length?n.directories.pop():n.directories.push(".."):n.directories.push(o))}"."==s.file?s.file="":".."==s.file&&(n.directories.pop(),s.file="")}return s.root&&(n.root=s.root),s.protcol&&(n.scheme=s.scheme),(s.path||!s.hash)&&(n.file=s.file),s.query&&(n.query=s.query),s.hash&&(n.hash=s.hash),n},e.relativeObject=function(n,s){if(s=e.parse(s),n=e.parse(n),delete s.url,s.scheme==n.scheme&&s.authority==n.authority&&(delete s.scheme,delete s.authority,delete s.userInfo,delete s.user,delete s.password,delete s.domain,delete s.domains,delete s.port,!!s.root==!!n.root&&(!s.root||s.directories[0]==n.directories[0]))){for(delete s.path,delete s.root,delete s.directory;n.directories.length&&s.directories.length&&s.directories[0]==n.directories[0];)s.directories.shift(),n.directories.shift();for(;n.directories.length;)n.directories.shift(),s.directories.unshift("..");s.root||s.directories.length||s.file||!n.file||s.directories.push("."),n.file==s.file&&delete s.file,n.query==s.query&&delete s.query,n.hash==s.hash&&delete s.hash}return s},e.resolve=function(n,s){return e.format(e.resolveObject(n,s))},e.relative=function(n,s){return e.format(e.relativeObject(n,s))}})}});