montageDefine("8abfe7b","lib/FeedHandler",{dependencies:["./index.js","util"],factory:function(e,t,n){function r(e){this.init(e,{ignoreWhitespace:!0})}function i(e,t){return u.getElementsByTagName(e,t,!0)}function a(e,t){return u.getElementsByTagName(e,t,!0,1)[0]}function o(e,t,n){return u.getText(u.getElementsByTagName(e,t,n,1))}var s=e("./index.js"),l=s.DomHandler,u=s.DomUtils;e("util").inherits(r,l),r.prototype.init=l;var c=function(e){return"rss"===e||"feed"===e||"rdf:RDF"===e};r.prototype.onend=function(){var e,t,n={},r=a(c,this.dom);r&&("feed"===r.name?(t=r.children,n.type="atom",(e=o("id",t))&&(n.id=e),(e=o("title",t))&&(n.title=e),(e=a("link",t))&&(e=e.attribs)&&(e=e.href)&&(n.link=e),(e=o("subtitle",t))&&(n.description=e),(e=o("updated",t))&&(n.updated=new Date(e)),(e=o("email",t,!0))&&(n.author=e),n.items=i("entry",t).map(function(e){var t,n={};return e=e.children,(t=o("id",e))&&(n.id=t),(t=o("title",e))&&(n.title=t),(t=a("link",e))&&(t=t.attribs)&&(t=t.href)&&(n.link=t),(t=o("summary",e))&&(n.description=t),(t=o("updated",e))&&(n.pubDate=new Date(t)),n})):(t=a("channel",r.children).children,n.type=r.name.substr(0,3),n.id="",(e=o("title",t))&&(n.title=e),(e=o("link",t))&&(n.link=e),(e=o("description",t))&&(n.description=e),(e=o("lastBuildDate",t))&&(n.updated=new Date(e)),(e=o("managingEditor",t))&&(n.author=e),n.items=i("item",r.children).map(function(e){var t,n={};return e=e.children,(t=o("guid",e))&&(n.id=t),(t=o("title",e))&&(n.title=t),(t=o("link",e))&&(n.link=t),(t=o("description",e))&&(n.description=t),(t=o("pubDate",e))&&(n.pubDate=new Date(t)),n}))),this.dom=n,l.prototype._handleCallback.call(this,r?null:Error("couldn't find root of feed"))},n.exports=r}});